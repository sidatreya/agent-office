// ─────────────────────────────────────────────────────────────
// Agent roster, floors and office metadata — the single source of truth
// (also imported by scripts/update-status.mjs and scripts/report.sh).
//
// Building: stacked glass floors (B1 + 01–04). Each floor spans x ∈ [-15, 15], z ∈ [-9, 9]
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

// Desk layout (one straight back row per floor at z ≈ -2.4…-3.9, plus a front row on 02).
// Footprint of a desk: x ∈ [x-1.6, x+2.1] (robot behind on the right), z ∈ [z-1.6, z+0.6];
// wide desks add ~1.2 m on the left for the side panel. Keep ≥ 4.0 m between desk centres in a row.
export const AGENTS = [
  // ── Floor 01 · Trading Room (back row, facing the TradingView wall)
  a({
    id: 'intraday-signal-trader', name: 'Intraday Signal Trader', role: 'Intraday signals, scans & alerts', color: '#22d3ee',
    floor: 'trading', desk: { x: -9.8, z: -2.4 },
    tasks: ['Running intraday scans', 'Posting pivot alerts'], logs: ['Intraday scan finished', 'Pivot alert sent'],
  }),
  a({
    id: 'swing-htf-trader', name: 'Swing HTF Trader', role: 'Swing setups on higher timeframes', color: '#a3e635',
    floor: 'trading', desk: { x: -5.7, z: -2.4 },
    tasks: ['Reviewing daily and weekly charts', 'Planning swing entries'], logs: ['Weekly levels updated', 'Swing watchlist refreshed'],
  }),
  a({
    id: 'pro-trader', name: 'Warren Buffet', role: 'Markets & trading research', color: '#34d399',
    floor: 'trading', desk: { x: -1.6, z: -2.4 },
    tasks: ['Scanning NIFTY 50 for breakout setups', 'Watching BTC/USDT on the 15m chart', 'Reworking BTC and ASTER scenario charts'],
    logs: ['NIFTY 50 tested resistance — flagged for review', 'BTC/USDT funding flipped positive', 'Added 3 notes to the trading KB'],
  }),
  a({
    id: 'risk-verification', name: 'Risk & Verification', role: 'Risk limits & trade verification', color: '#f87171',
    floor: 'trading', desk: { x: 2.5, z: -2.4 },
    tasks: ['Checking position sizes against limits', 'Verifying signals before execution'], logs: ['Risk check passed', 'Signal verified'],
  }),
  // ── Floor 02 · Admin Block (back row flanks the activity-feed wall; front row: PA, CEO, Archivist)
  a({
    id: 'gk', name: 'PA Sid Atreya', role: 'Personal assistant & coordinator', color: '#a78bfa', floor: 'admin', desk: { x: 1.4, z: 1.6, wide: true },
    tasks: ['Coordinating the team and routing new requests', 'Preparing the morning summary for Sidatreya'],
    logs: ['Routed a market scan to Warren Buffet', 'Re-prioritised the task queue', 'Handed a design brief to Furniture Deaigner'],
  }),
  a({
    id: 'ceo', name: 'CEO', role: 'Chief Executive — sets priorities for the agent team', color: '#f5c46b', floor: 'admin', desk: { x: 8.4, z: 1.6, wide: true },
    tasks: ['Setting today\'s priorities', 'Reviewing agent status'], logs: ['Approved the work queue', 'Assigned a build to Web & 3D Developer'],
  }),
  a({
    id: 'archivist', name: 'Archivist', role: 'Records, notes & knowledge base', color: '#94a3b8', floor: 'admin', desk: { x: -8.4, z: 1.6 },
    tasks: ['Filing project records', 'Indexing the knowledge base'], logs: ['Archived the latest drawings', 'Updated the index'],
  }),
  a({
    id: 'linkedin', name: 'Marketing Maniac', role: 'Marketing, content & engagement', color: '#fbbf24', floor: 'admin', desk: { x: -9.6, z: -3.2 },
    tasks: ['Drafting a post on India-first GTM', 'Replying to comments on the latest post'],
    logs: ['Drafted a hook for the India-first GTM post', 'Replied to 6 comments on the latest post'],
  }),
  a({
    id: 'whatsapp-manager', name: 'Whatsapp Manager', role: 'WhatsApp tasks & reminders', color: '#84cc16', floor: 'admin', desk: { x: -4.7, z: -3.9 },
    tasks: ['Sorting new WhatsApp task requests', 'Sending reminder digests'],
    logs: ['Logged 4 new tasks from WhatsApp', 'Sent the evening reminder digest'],
  }),
  a({
    id: 'developer', name: 'Geek Kid', role: 'Builds & integrations (WhatsApp task manager)', color: '#fb923c', floor: 'admin', desk: { x: 4.7, z: -3.9 },
    tasks: ['Writing the build brief', 'Fixing a deployment issue'],
    logs: ['Pushed a fix to main', 'Build brief is ready'],
  }),
  a({
    id: 'web-3d-developer', name: 'Web & 3D Developer', role: 'Websites, Three.js office & web tools', color: '#60a5fa', floor: 'admin', desk: { x: 9.7, z: -3.2 },
    tasks: ['Updating the agent office site', 'Shipping the Vastu tool'], logs: ['Published the office site', 'Vastu tool build passed'],
  }),
  // ── Floor 03 · Creative Studio (one back row, 4.0 m pitch)
  a({
    id: 'grok-bot', name: 'Grok Bot', role: 'Architect — drafting, designing & rendering', color: '#38bdf8', floor: 'studio', desk: { x: -12.0, z: -3.3 },
    tasks: ['Revising the site zoning diagram', 'Rendering the house elevations', 'Drafting the floor plan'],
    logs: ['Produced a final zoning diagram', 'Rendered elevation option B', 'Updated the drafting set'],
  }),
  a({
    id: 'cco', name: 'CCO', role: 'Chief Creative Officer — design direction & sign-off', color: '#e879f9', floor: 'studio', desk: { x: -8.0, z: -3.3 },
    tasks: ['Reviewing design options', 'Writing the creative brief'], logs: ['Signed off a design option', 'Sent a brief to the studio'],
  }),
  a({
    id: 'furniture-designer', name: 'Furniture Deaigner', role: 'Product & furniture design', color: '#f472b6', floor: 'studio', desk: { x: -4.0, z: -3.3 },
    tasks: ['Rendering design options for the study built-in', 'Sketching a walnut lounge chair'],
    logs: ['Rendered walnut lounge chair v3', 'Exported moodboard: Japandi living room'],
  }),
  a({
    id: 'landscape-designer', name: 'Landscape Desigener', role: 'Landscape & garden design', color: '#14b8a6', floor: 'studio', desk: { x: 0.0, z: -3.3 },
    tasks: ['Planting plan for the front garden', 'Rendering the courtyard landscape'],
    logs: ['Picked native shrubs for the boundary', 'Rendered courtyard option A'],
  }),
  a({
    id: 'dwg-drafting-operator', name: 'DWG & Drafting Operator', role: 'CAD / DWG drawings & drafting', color: '#facc15', floor: 'studio', desk: { x: 4.0, z: -3.3 },
    tasks: ['Cleaning up DWG layers', 'Drafting the working drawings'], logs: ['Exported the DWG set', 'Layer standards applied'],
  }),
  a({
    id: 'image-operator', name: 'Image Operator', role: 'Image generation & editing', color: '#fb7185', floor: 'studio', desk: { x: 8.0, z: -3.3 },
    tasks: ['Generating render variations', 'Retouching images'], logs: ['Delivered image set', 'Upscaled renders'],
  }),
  a({
    id: 'video-operator', name: 'Video Operator', role: 'Video generation & editing', color: '#c084fc', floor: 'studio', desk: { x: 12.0, z: -3.3 },
    tasks: ['Cutting the walkthrough video', 'Generating a clip'], logs: ['Exported the walkthrough', 'Clip rendered'],
  }),
  // ── Floor 04 · Property Management (department head cabin)
  a({
    id: '6c94624b-cff0-445d-acf3-76a7780c90f3', name: 'Asset Manager', role: 'Property & Land Intelligence — department head', color: '#d946ef',
    floor: 'property', desk: { x: -11.6, z: -6.6 },
    tasks: ['Reviewing flagged deeds', 'Planning the property department floor'],
    logs: ['Sent the floor brief to the architect', 'Reviewed 12 flagged parcels (example)'],
  }),
];

// Retired desk ids → the desk that now handles their reports (so old scripts/feeds keep working).
// 'boq' has no successor (no BOQ bot exists): its reports are ignored with a warning.
export const ID_ALIASES = { 'developer-whatsapp': 'whatsapp-manager' };
export const RETIRED_IDS = ['developer-whatsapp', 'boq'];
export const resolveId = (id) => ID_ALIASES[id] || id;

export const IDLE_TASKS = ['Waiting for the next task', 'Standing by', 'No assigned task yet'];
