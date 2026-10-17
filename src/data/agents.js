// ─────────────────────────────────────────────────────────────
// Agent roster, floors and office metadata — the single source of truth
// (also imported by scripts/update-status.mjs and scripts/report.sh).
//
// Building: 3 stacked glass floors. Each floor spans x ∈ [-15, 15], z ∈ [-9, 9]
// (local coords); back (z = -9) and left (x = -15) walls are glass with the ocean behind.
// desk: { x, z, wide? } on the agent's floor. kind: 'station' = desk + screen, no robot.
// ─────────────────────────────────────────────────────────────

export const OFFICE = {
  title: "Sidatreya's Office",
  subtitle: 'Live view of your agents at work',
};

export const FLOORS = [
  { id: 'b1', name: 'Server & Utilities', level: -1, label: 'B1' },
  { id: 'trading', name: 'Trading Room', level: 0, label: '01' },
  { id: 'admin', name: 'Admin Block', level: 1, label: '02' },
  { id: 'studio', name: 'Creative Studio', level: 2, label: '03' },
  { id: 'property', name: 'Property Management', level: 3, label: '04' },
];

const a = (o) => ({ status: 'idle', task: 'Waiting for first check-in', tasks: [o.role], logs: [`${o.name} checked in`], ...o });

export const AGENTS = [
  // ── Floor 01 · Trading Room
  a({
    id: 'pro-trader', name: 'Pro Trader', role: 'Markets & trading research', color: '#34d399',
    floor: 'trading', desk: { x: -1.6, z: -2.4 },
    tasks: ['Scanning NIFTY 50 for breakout setups', 'Watching BTC/USDT on the 15m chart', 'Reworking BTC and ASTER scenario charts'],
    logs: ['NIFTY 50 tested resistance — flagged for review', 'BTC/USDT funding flipped positive', 'Added 3 notes to the trading KB'],
  }),
  // ── Floor 02 · Admin Block
  a({
    id: 'gk', name: 'GK', role: 'Coordinator', color: '#a78bfa', floor: 'admin', desk: { x: 1.4, z: 1.6, wide: true },
    tasks: ['Coordinating the team and routing new requests', 'Preparing the morning summary for Sidatreya'],
    logs: ['Assigned "market scan" to Pro Trader', 'Re-prioritised the task queue', 'Handed a design brief to Furniture Designer'],
  }),
  a({
    id: 'linkedin', name: 'Linkedin', role: 'Content & engagement', color: '#fbbf24', floor: 'admin', desk: { x: -9.6, z: -3.2 },
    tasks: ['Drafting a post on India-first GTM', 'Replying to comments on the latest post'],
    logs: ['Drafted a hook for the India-first GTM post', 'Replied to 6 comments on the latest post'],
  }),
  a({
    id: 'whatsapp-manager', name: 'Whatsapp Manager', role: 'WhatsApp tasks & reminders', color: '#84cc16', floor: 'admin', desk: { x: -4.7, z: -3.9 },
    tasks: ['Sorting new WhatsApp task requests', 'Sending reminder digests'],
    logs: ['Logged 4 new tasks from WhatsApp', 'Sent the evening reminder digest'],
  }),
  a({
    id: 'developer', name: 'Developer', role: 'Builds & integrations', color: '#fb923c', floor: 'admin', desk: { x: 4.7, z: -3.9 },
    tasks: ['Writing the build brief', 'Fixing a deployment issue'],
    logs: ['Pushed a fix to main', 'Build brief is ready'],
  }),
  a({
    id: 'developer-whatsapp', name: 'Developer Whatsapp Manager', role: 'WhatsApp task-manager development', color: '#ef4444', floor: 'admin', desk: { x: 9.7, z: -3.2 },
    tasks: ['Setting up the WhatsApp task-manager service', 'Testing message parsing'],
    logs: ['Created the whatsapp-task-manager venv', 'Webhook test passed'],
  }),
  // ── Floor 03 · Creative Studio
  a({
    id: 'grok-bot', name: 'Grok Bot', role: 'Architect — drafting, designing & rendering', color: '#38bdf8', floor: 'studio', desk: { x: -10.2, z: -2.6 },
    tasks: ['Revising the site zoning diagram', 'Rendering the house elevations', 'Drafting the floor plan'],
    logs: ['Produced a final zoning diagram', 'Rendered elevation option B', 'Updated the drafting set'],
  }),
  a({
    id: 'furniture-designer', name: 'Furniture Designer', role: 'Product & furniture design', color: '#f472b6', floor: 'studio', desk: { x: -3.6, z: -3.3 },
    tasks: ['Rendering design options for the study built-in', 'Sketching a walnut lounge chair'],
    logs: ['Rendered walnut lounge chair v3', 'Exported moodboard: Japandi living room'],
  }),
  a({
    id: 'landscape-designer', name: 'Landscape Designer', role: 'Landscape & garden design', color: '#14b8a6', floor: 'studio', desk: { x: 2.0, z: -3.3 },
    tasks: ['Planting plan for the front garden', 'Rendering the courtyard landscape'],
    logs: ['Picked native shrubs for the boundary', 'Rendered courtyard option A'],
  }),
  a({
    id: 'boq', name: 'BOQ', role: 'BOQ & quantities — the math/counting desk', color: '#d4a373', floor: 'studio', desk: { x: 7.6, z: -3.3 }, kind: 'station',
    tasks: ['Counting quantities for the house plan', 'Pricing the BOQ'],
    logs: ['BOQ v1 totals updated', 'Steel quantities re-checked'],
  }),
  // ── Floor 04 · Property Management (department head cabin)
  a({
    id: '6c94624b-cff0-445d-acf3-76a7780c90f3', name: 'Property Manager', role: 'Property & Land Intelligence — department head', color: '#d946ef',
    floor: 'property', desk: { x: -11.6, z: -6.6 },
    tasks: ['Reviewing flagged deeds', 'Planning the property department floor'],
    logs: ['Sent the floor brief to the architect', 'Reviewed 12 flagged parcels (example)'],
  }),
];

export const IDLE_TASKS = ['Waiting for the next task', 'Standing by', 'No assigned task yet'];
