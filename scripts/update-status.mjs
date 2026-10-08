#!/usr/bin/env node
// Merge an update into status.json (dist/ + public/), atomically.
//
//   node scripts/update-status.mjs <input.json>      (or "-" to read stdin)
//   node scripts/update-status.mjs --init            (reset to the seed state)
//
// input: { agents: [{ id, status: 'working'|'idle', task, progress? }], newEvents: [{ agentId, text }] }
// Both keys are optional. Agents not listed keep their previous state.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const TARGETS = [path.join(ROOT, 'dist', 'status.json'), path.join(ROOT, 'public', 'status.json')];
const MAX_EVENTS = 40;
const ROSTER = [
  ['gk', 'GK'],
  ['pro-trader', 'Pro Trader'],
  ['grok-bot', 'Grok Bot'],
  ['linkedin', 'Linkedin'],
  ['furniture-designer', 'Furniture Designer'],
];
const NAMES = Object.fromEntries(ROSTER);

function seed(now) {
  return {
    updatedAt: now,
    agents: ROSTER.map(([id, name]) => ({ id, name, status: 'idle', task: 'Waiting for first check-in', lastActive: null })),
    events: [{ time: now, agentId: 'gk', text: 'Office went live' }],
  };
}

function readJSON(file) {
  try { return JSON.parse(fs.readFileSync(file, 'utf8')); } catch { return null; }
}

function writeAtomic(file, obj) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  const tmp = path.join(path.dirname(file), `.${path.basename(file)}.${process.pid}.${Date.now()}.tmp`);
  fs.writeFileSync(tmp, JSON.stringify(obj, null, 2) + '\n');
  fs.renameSync(tmp, file);
}

function die(msg) { console.error(`update-status: ${msg}`); process.exit(1); }

const arg = process.argv[2];
if (!arg) die('usage: node scripts/update-status.mjs <input.json | - | --init>');
const now = new Date().toISOString();

let state;
if (arg === '--init') {
  state = seed(now);
} else {
  let input;
  try {
    input = JSON.parse(arg === '-' ? fs.readFileSync(0, 'utf8') : fs.readFileSync(arg, 'utf8'));
  } catch (e) { die(`cannot read input: ${e.message}`); }

  // newest existing state (dist is what's served; public is the fallback)
  const candidates = TARGETS.map(readJSON).filter((s) => s && Array.isArray(s.agents));
  candidates.sort((a, b) => String(b.updatedAt).localeCompare(String(a.updatedAt)));
  state = candidates[0] || seed(now);
  state.events = Array.isArray(state.events) ? state.events : [];

  // ensure every roster agent exists
  for (const [id, name] of ROSTER) if (!state.agents.find((a) => a.id === id)) state.agents.push({ id, name, status: 'idle', task: 'Waiting for first check-in', lastActive: null });

  const warn = (m) => console.warn(`update-status: warning: ${m}`);
  let applied = 0;
  for (const u of Array.isArray(input.agents) ? input.agents : []) {
    if (!u || !NAMES[u.id]) { warn(`unknown agent id ${JSON.stringify(u && u.id)} (skipped); valid: ${Object.keys(NAMES).join(', ')}`); continue; }
    const a = state.agents.find((x) => x.id === u.id);
    if (u.status !== undefined) {
      if (u.status !== 'working' && u.status !== 'idle') { warn(`${u.id}: status must be 'working' or 'idle' (got ${JSON.stringify(u.status)})`); }
      else a.status = u.status;
    }
    if (typeof u.task === 'string' && u.task.trim()) a.task = u.task.trim();
    if (u.progress === null) delete a.progress;
    else if (u.progress !== undefined) {
      const p = Number(u.progress);
      if (Number.isFinite(p)) a.progress = Math.max(0, Math.min(1, p));
      else warn(`${u.id}: progress must be a number 0..1`);
    } else if (u.status === 'idle') delete a.progress;
    a.name = NAMES[u.id];
    a.lastActive = now;
    applied++;
  }

  let added = 0, skipped = 0;
  for (const e of Array.isArray(input.newEvents) ? input.newEvents : []) {
    if (!e || !NAMES[e.agentId] || typeof e.text !== 'string' || !e.text.trim()) { warn(`bad event ${JSON.stringify(e)} (skipped)`); continue; }
    const text = e.text.trim();
    const lastForAgent = [...state.events].reverse().find((x) => x.agentId === e.agentId);
    if (lastForAgent && lastForAgent.text === text) { skipped++; continue; }
    state.events.push({ time: now, agentId: e.agentId, text });
    added++;
  }
  state.events = state.events.slice(-MAX_EVENTS);
  state.updatedAt = now;
  console.log(`update-status: ${applied} agent update(s), ${added} event(s) added, ${skipped} duplicate(s) skipped`);
}

state.agents.sort((a, b) => ROSTER.findIndex(([id]) => id === a.id) - ROSTER.findIndex(([id]) => id === b.id));
for (const f of TARGETS) writeAtomic(f, state);
console.log(`update-status: wrote ${TARGETS.map((f) => path.relative(ROOT, f)).join(' + ')} (updatedAt ${now})`);
