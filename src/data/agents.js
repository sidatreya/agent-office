// ─────────────────────────────────────────────────────────────
// Agent roster + office metadata.
// Edit this file (or replace it with a fetch to a JSON/API) to
// wire the office to real agents. Everything in the 3D scene and
// the UI is generated from this list.
// ─────────────────────────────────────────────────────────────

export const OFFICE = {
  title: "Sidatreya's Office",
  subtitle: 'Live view of your agents at work',
};

// desk: position on the floor (x, z) in world units. The room spans
// x ∈ [-12, 12], z ∈ [-9, 9]; the back wall (with the feed screen) is at z = -9.
export const AGENTS = [
  {
    id: 'gk',
    name: 'GK',
    role: 'Coordinator',
    color: '#a78bfa',
    desk: { x: 0, z: 2.4, wide: true },
    status: 'working',
    task: 'Coordinating the team and routing new requests',
    tasks: [
      'Coordinating the team and routing new requests',
      'Reviewing the 3D office build from Grok Bot',
      'Preparing the morning summary for Sidatreya',
      'Planning this week\u2019s LinkedIn calendar',
    ],
    logs: [
      'Assigned "market scan" to Pro Trader',
      'Reviewed Grok Bot\u2019s build \u2014 looks good',
      'Prepared morning summary for Sidatreya',
      'Re-prioritised the task queue',
      'Handed a design brief to Furniture Designer',
      'Asked Linkedin for two post drafts',
    ],
  },
  {
    id: 'pro-trader',
    name: 'Pro Trader',
    role: 'Markets & trading research',
    color: '#34d399',
    desk: { x: -6.6, z: -2.6 },
    status: 'idle',
    task: 'Standing by for the market open',
    tasks: [
      'Scanning NIFTY 50 for breakout setups',
      'Backtesting an RSI(14) mean-reversion strategy',
      'Watching BTC/USDT on the 15m chart',
      'Updating the trading knowledge base',
    ],
    logs: [
      'NIFTY 50 tested resistance \u2014 flagged for review',
      'Backtest done: RSI(14) reversion, win rate 58%',
      'BTC/USDT funding flipped positive',
      'Added 3 notes to the trading KB',
      'Bank NIFTY volatility rising into the close',
    ],
  },
  {
    id: 'grok-bot',
    name: 'Grok Bot',
    role: 'Executor \u2014 builds & research',
    color: '#38bdf8',
    desk: { x: -2.3, z: -3.7 },
    status: 'idle',
    task: 'Waiting for the next delegated task',
    tasks: [
      'Building the 3D agent office',
      'Running a headless screenshot check',
      'Compiling a research brief',
      'Packaging files into a zip',
    ],
    logs: [
      'Vite build finished in 1.4s',
      'Screenshot captured at 1280\u00d7800',
      'Fetched 12 sources for a research brief',
      'Zipped dist/ \u2192 agent-office.zip',
      'All checks passed, no console errors',
    ],
  },
  {
    id: 'linkedin',
    name: 'Linkedin',
    role: 'Content & engagement',
    color: '#fbbf24',
    desk: { x: 2.3, z: -3.7 },
    status: 'idle',
    task: 'No post scheduled right now',
    tasks: [
      'Drafting a post on India-first GTM',
      'Replying to comments on the latest post',
      'Researching trending topics in AI agents',
      'Polishing the launch-plan carousel',
    ],
    logs: [
      'Drafted a hook for the India-first GTM post',
      'Replied to 6 comments on the latest post',
      'Engagement up 14% vs last week',
      'Queued a post for Friday 9:00 AM',
      'Found 3 trending threads worth joining',
    ],
  },
  {
    id: 'furniture-designer',
    name: 'Furniture Designer',
    role: 'Product & furniture design',
    color: '#f472b6',
    desk: { x: 6.6, z: -2.6 },
    status: 'idle',
    task: 'No design brief assigned yet',
    tasks: [
      'Sketching a walnut lounge chair',
      'Rendering an oak sideboard concept',
      'Building a Japandi living-room moodboard',
      'Writing the cut list for a coffee table',
    ],
    logs: [
      'Rendered walnut lounge chair v3',
      'Updated the cut list for the oak sideboard',
      'Exported moodboard: Japandi living room',
      'Adjusted seat height to 42 cm',
      'Picked a brass finish for the handles',
    ],
  },
];

export const IDLE_TASKS = [
  'Waiting for the next task',
  'Standing by',
  'No assigned task yet',
];
