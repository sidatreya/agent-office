// ─────────────────────────────────────────────────────────────
// Activity feed source.
//
// The UI only depends on this tiny interface:
//   feed.subscribe(fn)   -> fn(event) for every new event, returns unsubscribe
//   feed.getState(id)    -> { status, task, progress }
//   feed.history         -> array of past events (newest last)
//   feed.start() / feed.stop()
//
// Event shape: { ts: Date, agentId, type: 'log' | 'status', message,
//                status?: 'working' | 'idle', task?: string }
//
// To use real data, write another factory with the same interface
// (e.g. backed by a WebSocket, SSE stream or polling a JSON endpoint)
// and pass it to the app in main.js instead of createSimulatedFeed().
// ─────────────────────────────────────────────────────────────
import { AGENTS, IDLE_TASKS } from './agents.js';

const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

export function createSimulatedFeed({ intervalMs = 3200, historySize = 60 } = {}) {
  const listeners = new Set();
  const history = [];
  const state = new Map(
    AGENTS.map((a) => [
      a.id,
      { status: a.status, task: a.task, progress: a.status === 'working' ? 0.35 : 0 },
    ])
  );
  let timer = null;

  const push = (evt) => {
    history.push(evt);
    if (history.length > historySize) history.shift();
    listeners.forEach((fn) => fn(evt));
  };

  // Seed some believable history so the wall screen isn't empty on load.
  const now = Date.now();
  const seed = [
    ['gk', 'Office opened \u2014 5 agents online'],
    ['pro-trader', pick(AGENTS[1].logs)],
    ['gk', AGENTS[0].logs[0]],
    ['linkedin', pick(AGENTS[3].logs)],
    ['grok-bot', pick(AGENTS[2].logs)],
    ['furniture-designer', pick(AGENTS[4].logs)],
    ['gk', AGENTS[0].logs[2]],
  ];
  seed.forEach(([agentId, message], i) => {
    history.push({
      ts: new Date(now - (seed.length - i) * 47_000),
      agentId,
      type: 'log',
      message,
    });
  });

  function tick() {
    const agent = pick(AGENTS);
    const s = state.get(agent.id);
    const workingCount = [...state.values()].filter((x) => x.status === 'working').length;
    const r = Math.random();

    // Status transitions: idle agents pick up work, working agents finish.
    if (s.status === 'idle' && (r < 0.45 || workingCount < 1)) {
      s.status = 'working';
      s.task = pick(agent.tasks);
      s.progress = 0.05;
      push({ ts: new Date(), agentId: agent.id, type: 'status', status: 'working', task: s.task, message: `Started: ${s.task}` });
      return;
    }
    if (s.status === 'working' && (s.progress > 0.9 || (r < 0.18 && workingCount > 1))) {
      const done = s.task;
      s.status = 'idle';
      s.task = pick(IDLE_TASKS);
      s.progress = 0;
      push({ ts: new Date(), agentId: agent.id, type: 'status', status: 'idle', task: s.task, message: `Finished: ${done}` });
      return;
    }
    if (s.status === 'working') s.progress = Math.min(1, s.progress + 0.15 + Math.random() * 0.2);
    push({ ts: new Date(), agentId: agent.id, type: 'log', message: pick(agent.logs) });
  }

  return {
    history,
    getState: (id) => state.get(id),
    subscribe(fn) {
      listeners.add(fn);
      return () => listeners.delete(fn);
    },
    start() {
      if (!timer) timer = setInterval(tick, intervalMs);
    },
    stop() {
      clearInterval(timer);
      timer = null;
    },
  };
}
