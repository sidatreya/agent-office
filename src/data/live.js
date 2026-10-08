// ─────────────────────────────────────────────────────────────
// Live feed: polls ./status.json and exposes the same interface as
// the simulated feed (subscribe / getState / history / start / stop),
// plus `updatedAt` (Date | null) and `error` (string | null).
//
// status.json shape:
// { updatedAt: ISO, agents: [{ id, name, status: 'working'|'idle', task, progress?, lastActive? }],
//   events: [{ time: ISO, agentId, text }] }
// Written by scripts/update-status.mjs.
// ─────────────────────────────────────────────────────────────
import { AGENTS } from './agents.js';

const DEFAULT_TASK = 'Waiting for first check-in';

export function createLiveFeed({ url = './status.json', intervalMs = 15000 } = {}) {
  const listeners = new Set();
  const history = [];
  const state = new Map(AGENTS.map((a) => [a.id, { status: 'idle', task: DEFAULT_TASK, progress: 0, lastActive: null }]));
  const known = new Set(AGENTS.map((a) => a.id));
  let timer = null;
  let lastStamp = null;

  const api = {
    history,
    updatedAt: null,
    error: null,
    getState: (id) => state.get(id),
    subscribe(fn) {
      listeners.add(fn);
      return () => listeners.delete(fn);
    },
    start() {
      if (timer) return;
      poll();
      timer = setInterval(poll, intervalMs);
      document.addEventListener('visibilitychange', () => document.visibilityState === 'visible' && poll());
    },
    stop() {
      clearInterval(timer);
      timer = null;
    },
    refresh: () => poll(),
  };

  async function poll() {
    try {
      const sep = url.includes('?') ? '&' : '?';
      const res = await fetch(`${url}${sep}t=${Date.now()}`, { cache: 'no-store' });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      api.error = null;
      if (data.updatedAt === lastStamp) {
        listeners.forEach((fn) => fn({ type: 'heartbeat' }));
        return;
      }
      lastStamp = data.updatedAt;
      apply(data);
      listeners.forEach((fn) => fn({ type: 'sync' }));
    } catch (err) {
      api.error = String(err.message || err);
      console.warn('[office] status.json poll failed:', api.error);
      listeners.forEach((fn) => fn({ type: 'error', error: api.error }));
    }
  }

  function apply(data) {
    const ts = data.updatedAt ? new Date(data.updatedAt) : null;
    api.updatedAt = ts && !isNaN(ts) ? ts : null;
    for (const a of Array.isArray(data.agents) ? data.agents : []) {
      if (!known.has(a.id)) continue;
      const status = a.status === 'working' ? 'working' : 'idle';
      const p = Number(a.progress);
      state.set(a.id, {
        status,
        task: typeof a.task === 'string' && a.task.trim() ? a.task : DEFAULT_TASK,
        progress: Number.isFinite(p) ? Math.max(0, Math.min(1, p)) : status === 'working' ? 0 : 0,
        hasProgress: Number.isFinite(p),
        detail: typeof a.detail === 'string' && a.detail.trim() ? a.detail.trim() : null,
        source: a.source === 'reported' ? 'reported' : 'inferred',
        reportedAt: a.reportedAt ? new Date(a.reportedAt) : null,
        lastActive: a.lastActive ? new Date(a.lastActive) : null,
      });
    }
    const evts = (Array.isArray(data.events) ? data.events : [])
      .filter((e) => e && known.has(e.agentId) && e.text)
      .map((e) => ({ ts: new Date(e.time), agentId: e.agentId, type: 'log', message: String(e.text) }))
      .filter((e) => !isNaN(e.ts))
      .sort((a, b) => a.ts - b.ts)
      .slice(-40);
    history.splice(0, history.length, ...evts);
  }

  return api;
}
