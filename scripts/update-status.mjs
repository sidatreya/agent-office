#!/usr/bin/env node
// Merge an update into status.json (dist/ + public/), atomically.
//
//   node scripts/update-status.mjs <input.json>              inferred update (default; e.g. the 5-min check-in)
//   node scripts/update-status.mjs --reported <input.json>   first-hand report from the agent itself
//   node scripts/update-status.mjs - [--reported]            read the input from stdin
//   node scripts/update-status.mjs --init                    reset to the seed state
//
// input: { agents: [{ id, status: 'working'|'idle', task, progress?, detail?, source? }], newEvents: [{ agentId, text }] }
// Both keys are optional. Agents not listed keep their previous state.
//
// Report protection: an agent whose state came from a report (source 'reported') less than
// 30 minutes ago is NOT changed by inferred updates (its agent entry and events are skipped).
// Per-agent fields written: status, task, progress?, detail?, source ('reported'|'inferred'),
// reportedAt (time of the last report), lastActive.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const TARGETS = [path.join(ROOT, 'dist', 'status.json'), path.join(ROOT, 'public', 'status.json')];
const MAX_EVENTS = 40;
const FRESH_MS = 30 * 60 * 1000;
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
    agents: ROSTER.map(([id, name]) => ({ id, name, status: 'idle', task: 'Waiting for first check-in', source: 'inferred', reportedAt: null, lastActive: null })),
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

const argv = process.argv.slice(2);
const REPORTED = argv.includes('--reported');
const arg = argv.find((a) => a === '-' || a === '--init' || !a.startsWith('--'));
if (!arg) die('usage: node scripts/update-status.mjs [--reported] <input.json | -> | --init');
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
  const nowMs = Date.parse(now);
  const freshReport = (a) => a && a.source === 'reported' && a.reportedAt && nowMs - Date.parse(a.reportedAt) < FRESH_MS;
  const protectedIds = new Set();
  for (const u of Array.isArray(input.agents) ? input.agents : []) {
    if (!u || !NAMES[u.id]) { warn(`unknown agent id ${JSON.stringify(u && u.id)} (skipped); valid: ${Object.keys(NAMES).join(', ')}`); continue; }
    const a = state.agents.find((x) => x.id === u.id);
    const src = REPORTED || u.source === 'reported' ? 'reported' : 'inferred';
    if (src === 'inferred' && freshReport(a)) {
      protectedIds.add(u.id);
      console.log(`update-status: kept ${u.id} (reported ${a.reportedAt}, < 30 min old) — inferred update skipped`);
      continue;
    }
    const prevTask = a.task;
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
    if (u.detail === null || (u.detail === undefined && a.task !== prevTask)) delete a.detail;
    else if (typeof u.detail === 'string' && u.detail.trim()) a.detail = u.detail.trim().slice(0, 160);
    a.source = src;
    if (src === 'reported') a.reportedAt = now;
    else if (a.reportedAt === undefined) a.reportedAt = null;
    a.name = NAMES[u.id];
    a.lastActive = now;
    applied++;
  }

  let added = 0, skipped = 0;
  for (const e of Array.isArray(input.newEvents) ? input.newEvents : []) {
    if (!e || !NAMES[e.agentId] || typeof e.text !== 'string' || !e.text.trim()) { warn(`bad event ${JSON.stringify(e)} (skipped)`); continue; }
    if (!REPORTED && e.source !== 'reported' && (protectedIds.has(e.agentId) || freshReport(state.agents.find((x) => x.id === e.agentId)))) { skipped++; continue; }
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
