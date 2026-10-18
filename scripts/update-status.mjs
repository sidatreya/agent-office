#!/usr/bin/env node
// Merge an update into status.json (dist/ + public/), atomically.
//
//   node scripts/update-status.mjs <input.json>              inferred update (default; e.g. the 5-min check-in)
//   node scripts/update-status.mjs --reported <input.json>   first-hand report from the agent itself
//   node scripts/update-status.mjs - [--reported]            read the input from stdin
//   node scripts/update-status.mjs --init                    reset to the seed state
//
// input: { agents: [{ id, status: 'working'|'idle', task, progress?, detail?, screenshot?, source? }], newEvents: [{ agentId, text }] }
// screenshot: relative URL under the site (e.g. "shots/grok-bot.jpg?v=123"), or null to clear.
// An entry with only { id, screenshot } just sets the picture (allowed even for protected agents).
// Both keys are optional. Agents not listed keep their previous state.
//
// Report protection: an agent whose state came from a report (source 'reported') less than
// 75 minutes ago is NOT changed by inferred updates (its agent entry and events are skipped).
// Per-agent fields written: status, task, progress?, detail?, source ('reported'|'inferred'),
// reportedAt (time of the last report), lastActive, taskSince (when status/task last changed), screenshot?.
// The roster (ids + names) comes from src/data/agents.js.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const TARGETS = [path.join(ROOT, 'dist', 'status.json'), path.join(ROOT, 'public', 'status.json')];
const MAX_EVENTS = 40;
const FRESH_MS = 75 * 60 * 1000; // matches STALE_MS in src/main.js
const { AGENTS, ID_ALIASES = {}, RETIRED_IDS = [] } = await import(path.join(ROOT, 'src', 'data', 'agents.js'));
const ROSTER = AGENTS.map((a) => [a.id, a.name]);
const NAMES = Object.fromEntries(ROSTER);
const RETIRED = new Set(RETIRED_IDS);
// retired ids (e.g. developer-whatsapp) are mapped to their successor desk; ids with no successor (boq) are skipped quietly
const resolve = (id) => ID_ALIASES[id] || id;

function seed(now) {
  return {
    updatedAt: now,
    agents: ROSTER.map(([id, name]) => ({ id, name, status: 'idle', task: 'Waiting for first check-in', source: 'inferred', reportedAt: null, lastActive: null, taskSince: now })),
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
  for (const [id, name] of ROSTER) if (!state.agents.find((a) => a.id === id)) state.agents.push({ id, name, status: 'idle', task: 'Waiting for first check-in', source: 'inferred', reportedAt: null, lastActive: null, taskSince: now });
  state.agents = state.agents.filter((a) => NAMES[a.id]);
  for (const a of state.agents) a.name = NAMES[a.id]; // pick up desk renames
  state.events = state.events.map((e) => ({ ...e, agentId: resolve(e.agentId) })).filter((e) => NAMES[e.agentId]);
  for (const a of state.agents) if (!a.taskSince) a.taskSince = a.lastActive || state.updatedAt || now;

  const warn = (m) => console.warn(`update-status: warning: ${m}`);
  let applied = 0;
  const nowMs = Date.parse(now);
  const freshReport = (a) => a && a.source === 'reported' && a.reportedAt && nowMs - Date.parse(a.reportedAt) < FRESH_MS;
  const protectedIds = new Set();
  for (const u0 of Array.isArray(input.agents) ? input.agents : []) {
    const u = u0 && u0.id ? { ...u0, id: resolve(u0.id) } : u0;
    if (u && RETIRED.has(u.id)) { console.log(`update-status: ${u.id} desk was retired (skipped)`); continue; }
    if (!u || !NAMES[u.id]) { warn(`unknown agent id ${JSON.stringify(u && u.id)} (skipped); valid: ${Object.keys(NAMES).join(', ')}`); continue; }
    const a = state.agents.find((x) => x.id === u.id);
    const keys = Object.keys(u).filter((k) => k !== 'id' && k !== 'source');
    if (keys.length === 1 && keys[0] === 'screenshot') { // picture-only update
      if (u.screenshot === null) delete a.screenshot; else if (typeof u.screenshot === 'string') a.screenshot = u.screenshot;
      applied++;
      continue;
    }
    const src = REPORTED || u.source === 'reported' ? 'reported' : 'inferred';
    if (src === 'inferred' && freshReport(a)) {
      protectedIds.add(u.id);
      console.log(`update-status: kept ${u.id} (reported ${a.reportedAt}, < 75 min old) — inferred update skipped`);
      continue;
    }
    const prevTask = a.task, prevStatus = a.status;
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
    if (u.screenshot === null) delete a.screenshot;
    else if (typeof u.screenshot === 'string' && u.screenshot.trim()) a.screenshot = u.screenshot.trim();
    if (a.task !== prevTask || a.status !== prevStatus) a.taskSince = now;
    a.source = src;
    if (src === 'reported') a.reportedAt = now;
    else if (a.reportedAt === undefined) a.reportedAt = null;
    a.name = NAMES[u.id];
    a.lastActive = now;
    applied++;
  }

  let added = 0, skipped = 0;
  for (const e0 of Array.isArray(input.newEvents) ? input.newEvents : []) {
    const e = e0 && e0.agentId ? { ...e0, agentId: resolve(e0.agentId) } : e0;
    if (e && RETIRED.has(e.agentId)) { skipped++; continue; }
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
