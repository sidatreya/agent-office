// Floor 04 · Property Management and B1 · Server & Utilities.
// All dashboards here are stylised placeholders labelled EXAMPLE DATA — no real property data.
import * as THREE from 'three';
import { ctx, FX, FZ, box, rbox, cyl, mesh, neonMat, canvasTexture, signPanel, roundRect } from './common.js';
import * as P from './props.js';
import { totem } from './floors-a.js';

const stamp = (c, w, h) => { // "EXAMPLE DATA" badge
  c.save(); c.font = '800 26px system-ui'; const t = 'EXAMPLE DATA'; const tw = c.measureText(t).width;
  c.fillStyle = 'rgba(251,191,36,0.9)'; roundRect(c, w - tw - 54, h - 52, tw + 30, 38, 8); c.fill();
  c.fillStyle = '#1c1404'; c.textBaseline = 'middle'; c.fillText(t, w - tw - 39, h - 32); c.restore();
};
function panelHead(c, w, title, color) {
  c.fillStyle = '#070b1a'; c.fillRect(0, 0, w, 2000);
  c.fillStyle = color; c.fillRect(0, 0, w, 8);
  c.fillStyle = '#e2e8f0'; c.font = '800 40px system-ui'; c.textBaseline = 'alphabetic'; c.fillText(title, 28, 62);
}

// ---------- example-data canvases ----------
export function drawDashboard(c, w, h) {
  panelHead(c, w, 'PROPERTY DASHBOARD', '#f59e0b');
  const kp = [['Parcels tracked', '1,248'], ['Registered', '1,032'], ['In possession', '978'], ['In dispute', '41'], ['Flagged', '17']];
  kp.forEach(([k, v], i) => {
    const x = 28 + (i % 3) * ((w - 56) / 3), y = 90 + Math.floor(i / 3) * 130;
    c.fillStyle = '#111a33'; roundRect(c, x, y, (w - 56) / 3 - 14, 116, 12); c.fill();
    c.fillStyle = i === 3 ? '#f87171' : i === 4 ? '#fbbf24' : '#f8fafc'; c.font = '800 46px system-ui'; c.fillText(v, x + 18, y + 58);
    c.fillStyle = '#94a3b8'; c.font = '500 24px system-ui'; c.fillText(k, x + 18, y + 96);
  });
  const bars = [62, 48, 80, 35, 55, 72, 40], by = h - 80;
  c.fillStyle = '#94a3b8'; c.font = '600 22px system-ui'; c.fillText('Est. profit by region (example)', w * 0.36 + 30, 245 + 40);
  bars.forEach((b, i) => { c.fillStyle = i % 2 ? '#38bdf8' : '#22c55e'; c.fillRect(w * 0.36 + 30 + i * ((w * 0.6) / 7), by - b * 2.4, (w * 0.6) / 7 - 14, b * 2.4); });
  stamp(c, w, h);
}
export function drawMap(c, w, h) {
  panelHead(c, w, 'PARCEL MAP', '#22d3ee');
  c.fillStyle = '#0b2530'; c.fillRect(20, 84, w - 40, h - 104);
  let s = 7; const r = () => ((s = (s * 9301 + 49297) % 233280) / 233280);
  for (let i = 0; i < 9; i++) { // stylised districts
    const cx = 60 + r() * (w - 120), cy = 120 + r() * (h - 200);
    c.beginPath(); for (let k = 0; k < 7; k++) { const a = (k / 7) * Math.PI * 2, rr = 60 + r() * 70; c.lineTo(cx + Math.cos(a) * rr, cy + Math.sin(a) * rr * 0.7); }
    c.closePath(); c.fillStyle = `hsla(${180 + i * 14},45%,${18 + (i % 3) * 5}%,1)`; c.fill(); c.strokeStyle = 'rgba(148,233,255,0.35)'; c.lineWidth = 2; c.stroke();
  }
  c.strokeStyle = 'rgba(255,255,255,0.25)'; c.lineWidth = 5; c.beginPath(); c.moveTo(20, h * 0.7); c.bezierCurveTo(w * 0.3, h * 0.4, w * 0.6, h * 0.9, w - 20, h * 0.45); c.stroke();
  const cols = ['#22c55e', '#22c55e', '#fbbf24', '#f87171', '#38bdf8'];
  for (let i = 0; i < 26; i++) { const x = 50 + r() * (w - 100), y = 110 + r() * (h - 190); c.fillStyle = cols[i % 5]; c.beginPath(); c.arc(x, y, 9, 0, Math.PI * 2); c.fill(); c.strokeStyle = '#fff'; c.lineWidth = 2; c.stroke(); }
  c.fillStyle = 'rgba(7,11,26,0.8)'; roundRect(c, 34, h - 150, 330, 104, 10); c.fill();
  [['Registered', '#22c55e'], ['Pending', '#fbbf24'], ['Dispute', '#f87171']].forEach(([t, col], i) => { c.fillStyle = col; c.beginPath(); c.arc(56, h - 124 + i * 30, 8, 0, 7); c.fill(); c.fillStyle = '#e2e8f0'; c.font = '500 22px system-ui'; c.fillText(t, 74, h - 116 + i * 30); });
  c.fillStyle = '#94a3b8'; c.font = '500 20px system-ui'; c.fillText('not real locations', w - 240, 62);
  stamp(c, w, h);
}
const PIPES = [['Deed reading (OCR + AI)', '#22c55e'], ['Parcel classification', '#22c55e'], ['Registration / possession check', '#fbbf24'], ['Profit calculation', '#22c55e'], ['Circle-rate refresh', '#38bdf8'], ['Land-deal data refresh', '#38bdf8'], ['Project news scan', '#22c55e']];
export function drawAutomation(c, w, h, t = 0) {
  panelHead(c, w, 'AUTOMATION STATUS', '#22c55e');
  PIPES.forEach(([name, col], i) => {
    const y = 104 + i * ((h - 150) / PIPES.length);
    const p = ((t * (0.05 + i * 0.013) + i * 0.17) % 1);
    c.fillStyle = '#cbd5e1'; c.font = '600 25px system-ui'; c.fillText(name, 28, y + 22);
    c.fillStyle = '#111a33'; roundRect(c, w * 0.55, y + 2, w * 0.4, 24, 12); c.fill();
    c.fillStyle = col; roundRect(c, w * 0.55, y + 2, Math.max(24, w * 0.4 * p), 24, 12); c.fill();
  });
  stamp(c, w, h);
}
const NEWS = ['Circle rates revised in District A (example)', 'New ring road approved near Parcel cluster 7', 'Registry office hours extended this month', 'Land-deal volume up 4% week on week', 'Metro extension tender opens next quarter', 'Court listing update for 3 tracked cases'];
export function drawNews(c, w, h, t = 0) {
  panelHead(c, w, 'NEWS FEED', '#a78bfa');
  const off = Math.floor(t / 4) % NEWS.length;
  for (let i = 0; i < 5; i++) {
    const y = 96 + i * 92, n = NEWS[(i + off) % NEWS.length];
    c.fillStyle = i === 0 ? 'rgba(167,139,250,0.18)' : '#0d1428'; roundRect(c, 20, y, w - 40, 80, 10); c.fill();
    c.fillStyle = '#a78bfa'; c.font = '700 20px ui-monospace'; c.fillText(`EXAMPLE · ${String(9 + i).padStart(2, '0')}:${String((i * 13) % 60).padStart(2, '0')}`, 36, y + 30);
    c.fillStyle = '#e2e8f0'; c.font = '600 26px system-ui'; c.fillText(n.length > 44 ? n.slice(0, 43) + '…' : n, 36, y + 64);
  }
  stamp(c, w, h);
}
export function drawHybrid(c, w, h, t = 0) {
  panelHead(c, w, 'HYBRID INFRA · ON-SITE + CLOUD', '#38bdf8');
  const box2 = (x, y, bw, bh, title, rows, col) => {
    c.fillStyle = '#0d1428'; roundRect(c, x, y, bw, bh, 14); c.fill(); c.strokeStyle = col; c.lineWidth = 3; c.stroke();
    c.fillStyle = col; c.font = '800 28px system-ui'; c.fillText(title, x + 18, y + 40);
    rows.forEach(([k, v, ok], i) => { c.fillStyle = '#94a3b8'; c.font = '500 22px system-ui'; c.fillText(k, x + 18, y + 80 + i * 34); c.fillStyle = ok ? '#4ade80' : '#fbbf24'; c.font = '700 22px system-ui'; c.textAlign = 'right'; c.fillText(v, x + bw - 18, y + 80 + i * 34); c.textAlign = 'left'; });
  };
  const bw = (w - 110) / 2;
  box2(28, 90, bw, h - 160, 'ON-SITE (B1)', [['Racks online', '12 / 12', 1], ['CRAC cooling', 'OK · 22°C', 1], ['UPS', 'mains · 100%', 1], ['Generator', 'standby', 1], ['ISP A / ISP B', 'up / up', 1]], '#22c55e');
  box2(28 + bw + 54, 90, bw, h - 160, 'CLOUD', [['Uplink', '2 × 1 Gbps', 1], ['Backup sync', 'last 02:00', 1], ['AI inference', 'healthy', 1], ['Object storage', '68% used', 1], ['Failover', 'ready', 1]], '#38bdf8');
  const mx = 28 + bw + 27, my = h / 2;
  c.fillStyle = '#38bdf8'; for (let i = 0; i < 3; i++) { const k = ((t * 0.8 + i / 3) % 1); c.globalAlpha = 1 - k; c.beginPath(); c.arc(mx, my - 40 + k * 80, 7, 0, 7); c.fill(); }
  c.globalAlpha = 1;
  stamp(c, w, h);
}

// animated canvas panel helper
function panel(parent, w, h, draw, { px = 900, x, y, z, rotY = 0, frame = true } = {}) {
  const M = ctx.M;
  const c = document.createElement('canvas'); c.width = px; c.height = Math.round((px * h) / w);
  const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 8;
  const g = new THREE.Group(); g.position.set(x, y, z); g.rotation.y = rotY; parent.add(g);
  if (frame) g.add(rbox(w + 0.12, h + 0.12, 0.08, 0.03, M.graphite, {}));
  const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ map: tex })); m.position.z = 0.045; g.add(m);
  const redraw = (t) => { draw(c.getContext('2d'), c.width, c.height, t); tex.needsUpdate = true; };
  redraw(0);
  return { redraw, group: g };
}

function biometric(parent, x, y, z, rotY) {
  const g = new THREE.Group(); g.position.set(x, y, z); g.rotation.y = rotY; parent.add(g);
  g.add(rbox(0.22, 0.34, 0.05, 0.02, new THREE.MeshStandardMaterial({ color: 0x0f172a, metalness: 0.6, roughness: 0.3 }), {}));
  g.add(mesh(new THREE.CircleGeometry(0.06, 20), neonMat('#22d3ee', 2.2), { y: -0.04, z: 0.03, cast: false }));
  g.add(box(0.14, 0.05, 0.01, neonMat('#4ade80', 1.8), { y: 0.1, z: 0.03, cast: false }));
  return g;
}
function door(parent, x, z, rotY, color = 0x4b5563) {
  const d = box(1.0, 2.25, 0.08, new THREE.MeshStandardMaterial({ color, metalness: 0.5, roughness: 0.4 }), { x, y: 1.125, z }); d.rotation.y = rotY; parent.add(d);
  return d;
}
function rackRow(parent, x0, z, n, rotY) { for (let i = 0; i < n; i++) P.serverRack(parent, x0 + i * 0.75, z, rotY); }
function crac(parent, x, z, rotY) {
  const g = new THREE.Group(); g.position.set(x, 0, z); g.rotation.y = rotY; parent.add(g);
  g.add(rbox(1.8, 2.0, 0.9, 0.03, new THREE.MeshStandardMaterial({ color: 0xe5e7eb, roughness: 0.4 }), { y: 1.0 }));
  for (let i = 0; i < 9; i++) g.add(box(1.5, 0.03, 0.02, ctx.M.graphite, { y: 0.4 + i * 0.12, z: 0.46, cast: false }));
  g.add(box(0.35, 0.22, 0.02, neonMat('#38bdf8', 1.4), { x: 0.55, y: 1.65, z: 0.46, cast: false }));
  return g;
}
function raisedFloor(parent, x0, z0, x1, z1, { perforated = false, lifted = [] } = {}) {
  const tex = canvasTexture(256, 256, (c, w, h) => {
    c.fillStyle = perforated ? '#9aa0ae' : '#b9bccb'; c.fillRect(0, 0, w, h);
    c.strokeStyle = '#6b7080'; c.lineWidth = 6; c.strokeRect(0, 0, w, h);
    if (perforated) { c.fillStyle = '#585d6c'; for (let x = 24; x < w; x += 22) for (let y = 24; y < h; y += 22) { c.beginPath(); c.arc(x, y, 5, 0, 7); c.fill(); } }
  });
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping; tex.repeat.set((x1 - x0) / 0.6, (z1 - z0) / 0.6);
  const f = mesh(new THREE.PlaneGeometry(x1 - x0, z1 - z0), new THREE.MeshStandardMaterial({ map: tex, roughness: 0.7, metalness: 0.1 }), { x: (x0 + x1) / 2, y: 0.11, z: (z0 + z1) / 2, cast: false });
  f.rotation.x = -Math.PI / 2; parent.add(f);
  parent.add(box(x1 - x0, 0.1, 0.04, ctx.M.blackMetal, { x: (x0 + x1) / 2, y: 0.05, z: z1 })); // front edge
  for (const [lx, lz] of lifted) { // lifted tile showing the cable void
    parent.add(box(0.58, 0.02, 0.58, new THREE.MeshStandardMaterial({ color: 0x15151f }), { x: lx, y: 0.115, z: lz, cast: false }));
    const t = box(0.58, 0.03, 0.58, new THREE.MeshStandardMaterial({ color: 0xb9bccb }), { x: lx + 0.1, y: 0.4, z: lz + 0.35 }); t.rotation.x = 1.0; parent.add(t);
    ['#3b82f6', '#f59e0b', '#22c55e'].forEach((col, i) => { const cb = cyl(0.02, 0.02, 0.56, new THREE.MeshStandardMaterial({ color: col }), { x: lx - 0.18 + i * 0.12, y: 0.13, z: lz }, 6); cb.rotation.x = Math.PI / 2; parent.add(cb); });
  }
}
function signRestricted(parent, text, x, y, z, rotY, w = 2.4) {
  return P.labelSign(parent, text, x, y, z, rotY, { w, h: 0.34, bg: '#7f1d1d', fg: '#fee2e2', size: 38 });
}

// ── 04 · Property Management ──
export function buildProperty(g) {
  const M = ctx.M;
  const ups = [];
  const fireM = new THREE.MeshStandardMaterial({ color: 0x4a4553, roughness: 0.85 });
  // department head cabin (x -15..-8.2, z -9..-2.6)
  P.glassWalls(g, [[-8.2, -9, -8.2, -4.7], [-8.2, -3.6, -8.2, -2.6], [-15, -2.6, -8.2, -2.6]], 3.0, { tint: 0xd8c8ff });
  P.labelSign(g, 'DEPARTMENT HEAD', -11.6, 3.25, -2.6, 0, { w: 2.6, h: 0.3, bg: '#312e81', fg: '#e0e7ff', size: 40 });
  P.roundTable(g, -13.2, -4.0, 0.75);
  [0, 1, 2, 3].forEach((i) => { const a = (i / 4) * Math.PI * 2 + 0.6; P.officeChair(g, -13.2 + Math.cos(a) * 1.1, -4.0 + Math.sin(a) * 1.1, Math.atan2(Math.cos(a), Math.sin(a)) + Math.PI); });
  P.bookshelf(g, -14.6, -7.0, Math.PI / 2);
  P.plant(g, -9.0, -8.4, 0.9, 1); P.rug(g, -11.6, -5.4, 6.0, 5.2, M.rugIndigo);
  // internal meeting room 8–10 (x -15..-8.2, z -2.6..4.2)
  P.glassWalls(g, [[-8.2, -2.6, -8.2, 0.0], [-8.2, 1.1, -8.2, 4.2], [-15, 4.2, -8.2, 4.2]], 3.0, { tint: 0xc8e6ff });
  P.labelSign(g, 'MEETING ROOM · 10', -11.6, 3.25, 4.2, 0, { w: 2.6, h: 0.3, bg: '#0c4a6e', fg: '#e0f2fe', size: 40 });
  P.meetingTable(g, -11.0, 0.8, 3.4, 1.3, 10);
  const mrA = panel(g, 2.6, 1.6, drawDashboard, { x: -14.65, y: 2.0, z: -0.3, rotY: Math.PI / 2 });
  const mrB = panel(g, 2.6, 1.6, drawMap, { x: -14.65, y: 2.0, z: 2.4, rotY: Math.PI / 2 });
  // open office: raised floor, 12 modular desks (3 clusters of 4) + 8 marked growth bays, overhead cable tray
  raisedFloor(g, -7.6, -3.6, 7.4, 6.0, { lifted: [[-6.9, 1.8], [6.6, -2.8]] });
  const deskTop = new THREE.MeshStandardMaterial({ color: 0xe7e2d8, roughness: 0.5 });
  const staffCols = ['#f59e0b', '#38bdf8', '#22c55e', '#f472b6'];
  [-4.8, 0, 4.8].forEach((cx, ci) => {
    for (let r = 0; r < 2; r++) for (let k = 0; k < 2; k++) {
      const x = cx - 0.78 + k * 1.56, z = r ? -0.825 : -1.575, sgn = r ? 1 : -1; // r=1 sits on the +z side
      g.add(rbox(1.5, 0.05, 0.75, 0.02, deskTop, { x, y: 0.86, z }));
      for (const sx of [-1, 1]) g.add(box(0.05, 0.84, 0.6, M.blackMetal, { x: x + sx * 0.7, y: 0.42, z }));
      const mzz = z - sgn * 0.26, rot = r ? 0 : Math.PI;
      const mon = rbox(0.62, 0.38, 0.03, 0.01, M.graphite, { x, y: 1.25, z: mzz }); mon.rotation.y = rot; g.add(mon);
      const scr = mesh(new THREE.PlaneGeometry(0.56, 0.32), new THREE.MeshBasicMaterial({ color: new THREE.Color(staffCols[(ci + r + k) % 4]).multiplyScalar(0.5) }), { x, y: 1.25, z: mzz + sgn * 0.02, cast: false }); scr.rotation.y = rot; g.add(scr);
      g.add(box(0.03, 0.3, 0.03, M.blackMetal, { x, y: 1.0, z: mzz - sgn * 0.03 }));
      g.add(box(0.2, 0.04, 0.06, neonMat('#facc15', 1.2), { x: x + 0.5, y: 0.9, z: mzz, cast: false })); // power/data module
      P.officeChair(g, x, z + sgn * 0.75, r ? Math.PI : 0);
    }
    g.add(box(0.06, 0.3, 1.5, deskTop, { x: cx, y: 1.05, z: -1.2 })); // screen divider
    g.add(box(0.05, 2.0, 0.05, M.blackMetal, { x: cx, y: 1.95, z: -1.2 })); // cable drop from tray
  });
  // ladder cable tray overhead with coloured cable bundle
  g.add(box(13.4, 0.04, 0.4, M.blackMetal, { y: 2.95, z: -1.2, cast: false }));
  for (let x = -6.6; x <= 6.6; x += 0.5) g.add(box(0.03, 0.03, 0.4, M.blackMetal, { x, y: 2.97, z: -1.2, cast: false }));
  ['#3b82f6', '#f59e0b', '#22c55e', '#e11d48'].forEach((col, i) => { const cb = cyl(0.025, 0.025, 13.2, new THREE.MeshStandardMaterial({ color: col }), { y: 3.0, z: -1.33 + i * 0.09, cast: false }, 6); cb.rotation.z = Math.PI / 2; g.add(cb); });
  for (const x of [-6.6, 6.6]) g.add(cyl(0.01, 0.01, 4, M.blackMetal, { x, y: 5.0, z: -1.2 }, 4));
  // growth bays (dashed outlines on the raised floor)
  const bayTex = canvasTexture(600, 600, (c, w, h) => { c.strokeStyle = '#fbbf24'; c.lineWidth = 10; c.setLineDash([36, 22]); c.strokeRect(10, 10, w - 20, h - 20); c.fillStyle = 'rgba(251,191,36,0.85)'; c.font = '800 64px system-ui'; c.textAlign = 'center'; c.fillText('FUTURE BAY', w / 2, h / 2 - 10); c.font = '700 56px system-ui'; c.fillText('+4 desks', w / 2, h / 2 + 64); });
  [-2.6, 2.6].forEach((x) => { const b = mesh(new THREE.PlaneGeometry(3.2, 3.0), new THREE.MeshBasicMaterial({ map: bayTex, transparent: true, depthWrite: false }), { x, y: 0.125, z: 3.8, cast: false }); b.rotation.x = -Math.PI / 2; g.add(b); });
  P.labelSign(g, 'OPEN OFFICE · 12 DESKS → 20', 0, 3.35, -1.2, 0, { w: 3.6, h: 0.3, bg: '#1f2937', fg: '#fde68a', size: 38 });
  // live monitoring wall (visible from the open office) + AI supervision console
  P.labelSign(g, 'LIVE MONITORING · PROPERTY INTELLIGENCE  (EXAMPLE DATA)', 0, 5.0, -FZ + 0.5, 0, { w: 9.0, h: 0.36, bg: '#111827', fg: '#fde68a', size: 40 });
  const W5 = 2.8;
  const mon = [drawDashboard, drawMap, drawAutomation, drawNews, drawHybrid].map((fn, i) => panel(g, W5, 1.9, fn, { x: -5.9 + i * 2.95, y: 3.6, z: -FZ + 0.5, px: 840 }));
  const tickerC = panel(g, 14.6, 0.32, (c, w, h, t = 0) => {
    c.fillStyle = '#0b1020'; c.fillRect(0, 0, w, h); c.fillStyle = '#fde68a'; c.font = '700 30px system-ui'; c.textBaseline = 'middle';
    const msg = 'EXAMPLE DATA ·  17 deeds flagged for review  ·  circle-rate refresh queued for 02:00  ·  ISP A + ISP B up  ·  cloud backup synced  ·  3 field visits scheduled  ·  ';
    const tw = c.measureText(msg).width, off = (t * 80) % tw;
    c.fillText(msg + msg + msg, -off, h / 2);
  }, { x: 0, y: 2.38, z: -FZ + 0.5, px: 2400, frame: false });
  g.add(rbox(6.4, 0.06, 0.9, 0.02, M.walnut, { x: -1.0, y: 0.78, z: -6.3 }));
  for (const sx of [-1, 1]) g.add(box(0.06, 0.75, 0.7, M.blackMetal, { x: -1.0 + sx * 3.0, y: 0.4, z: -6.3 }));
  [-3, -1, 1].forEach((x) => { g.add(rbox(0.9, 0.5, 0.04, 0.01, M.graphite, { x, y: 1.3, z: -6.55 })); g.add(mesh(new THREE.PlaneGeometry(0.84, 0.45), new THREE.MeshBasicMaterial({ color: new THREE.Color('#0ea5e9').multiplyScalar(0.55) }), { x, y: 1.3, z: -6.525, cast: false })); P.officeChair(g, x, -5.6, Math.PI); });
  P.labelSign(g, 'AI SUPERVISION DESK', -1.0, 0.55, -5.83, 0, { w: 1.8, h: 0.2, bg: '#0c4a6e', fg: '#e0f2fe', size: 34 });
  // toilets (x 7.9..10.8, z -9..-6) + video-call room
  P.solidWalls(g, [[7.9, -9, 7.9, -6.2], [7.9, -6.2, 10.8, -6.2], [10.8, -6.2, 10.8, -9]], 3.0, new THREE.MeshStandardMaterial({ color: 0xd6d3e0, roughness: 0.7 }));
  door(g, 8.7, -6.12, 0, 0x8b8fa3); door(g, 10.0, -6.12, 0, 0x8b8fa3);
  P.labelSign(g, '🚻 TOILETS', 9.35, 2.6, -6.08, 0, { w: 1.8, h: 0.3, bg: '#1e3a8a', fg: '#fff', size: 40 });
  P.glassWalls(g, [[7.9, -5.6, 10.8, -5.6], [7.9, -5.6, 7.9, -3.0], [7.9, -3.0, 9.0, -3.0], [10.0, -3.0, 10.8, -3.0], [10.8, -3.0, 10.8, -5.6]], 2.8, { tint: 0xbfdbfe });
  P.roundTable(g, 9.35, -4.3, 0.5); P.officeChair(g, 9.35, -5.0, 0); g.add(rbox(1.2, 0.7, 0.05, 0.02, M.graphite, { x: 9.35, y: 1.6, z: -5.5 }));
  P.labelSign(g, 'VIDEO CALL', 9.35, 3.0, -3.0, 0, { w: 1.6, h: 0.26, bg: '#1e3a8a', fg: '#fff', size: 38 });
  // lift lobby + visitor & client waiting (x 11..15, z -9..-0.6)
  P.labelSign(g, 'WELCOME · VISITORS & CLIENTS', 13.0, 3.0, -8.75, 0, { w: 3.6, h: 0.34, bg: '#3f1d0b', fg: '#fde68a', size: 40 });
  g.add(rbox(2.4, 1.05, 0.7, 0.04, M.walnut, { x: 12.6, y: 0.53, z: -6.6 })); g.add(box(2.5, 0.05, 0.8, M.marbleWhite, { x: 12.6, y: 1.07, z: -6.6 }));
  P.officeChair(g, 12.6, -7.4, 0);
  P.sofa(g, 12.9, -1.4, Math.PI, M.linen, 2.4);
  P.armchair(g, 11.4, -3.4, Math.PI / 2, M.velvetTeal);
  P.coffeeTable(g, 12.9, -3.0, 0.5);
  P.plant(g, 14.4, -4.6, 1.0, 1); P.plant(g, 11.2, -8.4, 0.8, 0);
  // client presentation room (x 9.6..15, z 0..4.2) — entered from the waiting area, never through the open office
  P.glassWalls(g, [[9.6, 0.0, 11.6, 0.0], [12.7, 0.0, 15, 0.0], [9.6, 0.0, 9.6, 4.2]], 3.0, { tint: 0xfde68a });
  P.solidWalls(g, [[9.6, 4.3, 15, 4.3]], 3.0, new THREE.MeshStandardMaterial({ color: 0x2a2140, roughness: 0.6 }));
  P.rug(g, 12.3, 2.1, 5.0, 3.8, M.rugSand);
  P.meetingTable(g, 11.8, 2.1, 2.4, 1.1, 6);
  const pres = panel(g, 2.9, 1.65, drawPresentation, { x: 14.75, y: 1.85, z: 2.1, rotY: -Math.PI / 2, px: 1100 });
  const brand = signPanel(3.4, 0.7, (c, w, h) => { c.fillStyle = '#2a2140'; c.fillRect(0, 0, w, h); c.fillStyle = '#fbbf24'; c.font = '800 70px Georgia, serif'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText('SIDATREYA', w / 2, h * 0.38); c.fillStyle = '#e9d5ff'; c.font = '600 36px system-ui'; c.fillText('PROPERTY & LAND INTELLIGENCE', w / 2, h * 0.76); }, { frame: false });
  brand.position.set(12.3, 2.2, 4.2); brand.rotation.y = Math.PI; g.add(brand);
  P.labelSign(g, 'CLIENT PRESENTATION ROOM', 12.3, 3.25, 0.0, 0, { w: 3.4, h: 0.3, bg: '#713f12', fg: '#fef3c7', size: 40 });
  P.plant(g, 10.1, 3.7, 0.8, 0);
  // secure deed records room (x 9.6..15, z 4.8..9): fire-rated, climate-controlled, biometric access
  P.solidWalls(g, [[9.6, 4.8, 15, 4.8], [9.6, 4.8, 9.6, 5.6], [9.6, 6.6, 9.6, 9]], 3.2, fireM);
  P.solidWalls(g, [[9.6, 9, 15, 9]], 1.1, fireM);
  g.add(box(5.4, 0.12, 0.2, neonMat('#ef4444', 1.2), { x: 12.3, y: 3.15, z: 4.7, cast: false }));
  door(g, 9.56, 6.1, Math.PI / 2, 0x6b2020);
  biometric(g, 9.48, 1.35, 6.85, -Math.PI / 2);
  const clim = panel(g, 0.5, 0.32, (c, w, h) => { c.fillStyle = '#04131c'; c.fillRect(0, 0, w, h); c.fillStyle = '#67e8f9'; c.font = '800 70px ui-monospace'; c.fillText('20°C', 20, 90); c.font = '700 44px ui-monospace'; c.fillText('RH 45%', 24, 160); c.fillStyle = '#4ade80'; c.fillText('● STABLE', 24, 220); }, { x: 9.48, y: 1.6, z: 7.6, rotY: -Math.PI / 2, px: 400 });
  signRestricted(g, 'DEED RECORDS · RESTRICTED', 9.46, 2.75, 6.6, -Math.PI / 2, 2.8);
  P.labelSign(g, 'FIRE-RATED 2 HR · CLIMATE CONTROLLED', 9.46, 2.4, 6.6, -Math.PI / 2, { w: 2.8, h: 0.22, bg: '#450a0a', fg: '#fecaca', size: 30 });
  const shelfM = new THREE.MeshStandardMaterial({ color: 0x6b7280, metalness: 0.7, roughness: 0.35 });
  const boxM = [0xd6c7a1, 0xc9b58a, 0xe2d6b8].map((c) => new THREE.MeshStandardMaterial({ color: c, roughness: 0.9 }));
  for (let r = 0; r < 4; r++) { // mobile compact shelving
    const z = 5.5 + r * 0.85;
    g.add(box(4.0, 2.4, 0.5, shelfM, { x: 12.6, y: 1.2, z }));
    for (let s = 0; s < 4; s++) for (let b = 0; b < 9; b++) g.add(box(0.36, 0.42, 0.06, boxM[(r + s + b) % 3], { x: 10.9 + b * 0.42, y: 0.35 + s * 0.56, z: z + 0.27, cast: false }));
    const wh = cyl(0.12, 0.12, 0.05, M.brass, { x: 14.7, y: 1.2, z: z + 0.27 }, 12); wh.rotation.x = Math.PI / 2; g.add(wh);
  }
  // scanning / intake station next to the records room → AI pipeline
  g.add(rbox(2.6, 0.06, 0.9, 0.02, deskTop, { x: 7.6, y: 0.86, z: 7.4 }));
  for (const sx of [-1, 1]) g.add(box(0.05, 0.84, 0.75, M.blackMetal, { x: 7.6 + sx * 1.2, y: 0.42, z: 7.4 }));
  g.add(rbox(0.9, 0.4, 0.6, 0.04, new THREE.MeshStandardMaterial({ color: 0xf3f4f6, roughness: 0.4 }), { x: 7.0, y: 1.1, z: 7.4 }));
  const tray = box(0.7, 0.03, 0.45, M.blackMetal, { x: 7.0, y: 1.38, z: 7.15 }); tray.rotation.x = -0.4; g.add(tray);
  for (let i = 0; i < 6; i++) g.add(box(0.6, 0.008, 0.4, M.whiteMatte, { x: 7.0, y: 1.4 + i * 0.01, z: 7.15, cast: false }));
  g.add(box(0.5, 0.04, 0.02, neonMat('#22d3ee', 2), { x: 7.0, y: 1.0, z: 7.71, cast: false }));
  g.add(rbox(0.8, 0.5, 0.04, 0.01, M.graphite, { x: 8.3, y: 1.35, z: 7.15 }));
  g.add(mesh(new THREE.PlaneGeometry(0.74, 0.44), new THREE.MeshBasicMaterial({ color: new THREE.Color('#22d3ee').multiplyScalar(0.5) }), { x: 8.3, y: 1.35, z: 7.175, cast: false }));
  P.officeChair(g, 7.6, 8.3, Math.PI);
  P.labelSign(g, 'SCAN & INTAKE → AI PIPELINE', 7.6, 2.2, 6.85, 0, { w: 2.8, h: 0.3, bg: '#083344', fg: '#a5f3fc', size: 38 });
  // animated "pipeline" conduit from the scanner up to the cable tray (feeds the AI pipeline / network)
  const flowTex = canvasTexture(256, 16, (c, w, h) => { c.fillStyle = '#000'; c.fillRect(0, 0, w, h); for (let x = 0; x < w; x += 64) { c.fillStyle = '#22d3ee'; c.fillRect(x, 0, 30, h); } });
  flowTex.wrapS = THREE.RepeatWrapping; flowTex.repeat.set(12, 1);
  const flowM = new THREE.MeshBasicMaterial({ map: flowTex, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false });
  const f1 = mesh(new THREE.PlaneGeometry(15.0, 0.08), flowM, { x: -0.6, y: 3.12, z: 6.9, cast: false }); f1.rotation.x = -Math.PI / 2; g.add(f1);
  const f2 = mesh(new THREE.PlaneGeometry(1.8, 0.08), flowM, { x: 6.9, y: 2.25, z: 6.88, cast: false }); f2.rotation.z = Math.PI / 2; g.add(f2);
  g.add(box(15.0, 0.06, 0.18, M.blackMetal, { x: -0.6, y: 3.08, z: 6.9, cast: false }));
  // pantry (x -15..-10.4, z 4.8..9)
  P.glassWalls(g, [[-10.4, 4.8, -10.4, 9]], 2.6, { tint: 0xfde68a });
  g.add(rbox(4.2, 0.95, 0.65, 0.03, M.walnut, { x: -12.7, y: 0.48, z: 8.5 })); g.add(box(4.3, 0.05, 0.75, M.marbleWhite, { x: -12.7, y: 0.98, z: 8.5 }));
  g.add(rbox(0.8, 1.9, 0.7, 0.04, new THREE.MeshStandardMaterial({ color: 0xd1d5db, metalness: 0.7, roughness: 0.3 }), { x: -14.5, y: 0.95, z: 5.4 }));
  g.add(cyl(0.12, 0.1, 0.25, M.ceramic, { x: -12.0, y: 1.13, z: 8.5 }, 14)); g.add(rbox(0.45, 0.4, 0.35, 0.03, M.blackMetal, { x: -13.4, y: 1.2, z: 8.5 }));
  P.roundTable(g, -12.6, 6.4, 0.6); P.officeChair(g, -13.4, 6.4, Math.PI / 2); P.officeChair(g, -11.8, 6.4, -Math.PI / 2);
  P.labelSign(g, 'PANTRY', -12.7, 2.3, 9.1, 0, { w: 1.4, h: 0.28, bg: '#78350f', fg: '#fef3c7', size: 40 });
  // network closet (x -10.2..-8.2, z 6.8..9) — the server room itself lives in B1
  const closetM = new THREE.MeshStandardMaterial({ color: 0x374151, roughness: 0.8 });
  P.solidWalls(g, [[-10.2, 6.8, -8.2, 6.8], [-8.2, 6.8, -8.2, 7.4]], 2.8, closetM);
  P.solidWalls(g, [[-8.2, 8.4, -8.2, 9]], 2.8, closetM);
  P.serverRack(g, -9.6, 8.2, 0);
  biometric(g, -8.1, 1.3, 7.8, Math.PI / 2);
  signRestricted(g, 'NETWORK · RESTRICTED', -9.2, 2.45, 6.7, Math.PI, 1.9);
  // decor
  P.artFrame(g, -14.65, 4.2, -5.8, Math.PI / 2, 1.6, 1.0, 1);
  P.plant(g, -7.2, 7.4, 1.0, 0); P.plant(g, 5.6, 5.6, 0.9, 1); P.plant(g, -7.2, -8.2, 1.0, 1);
  P.acousticBaffles(g, -6, 6, 2.6, 6.2);

  let lastT = -1;
  return {
    waypoints: [[-6.4, 1.2], [6.4, 1.2], [6.4, -4.2], [-6.4, -4.2]],
    board: totem(g, 5.2, 4.2, -0.3),
    light: [[-10, 0], [2, 0], [12, 2]],
    update(t) {
      flowTex.offset.x = -t * 0.6;
      if (t - lastT < 0.5) return; lastT = t;
      mon[2].redraw(t); mon[3].redraw(t); mon[4].redraw(t); tickerC.redraw(t); pres.redraw(t);
    },
  };
}

function drawPresentation(c, w, h, t = 0) {
  const slide = Math.floor(t / 6) % 3;
  c.fillStyle = '#0f0a1e'; c.fillRect(0, 0, w, h);
  const grd = c.createLinearGradient(0, 0, w, h); grd.addColorStop(0, '#1e1145'); grd.addColorStop(1, '#3b1d0b'); c.fillStyle = grd; c.fillRect(0, 0, w, h);
  c.fillStyle = '#fbbf24'; c.font = '800 50px Georgia, serif'; c.fillText('Sidatreya · Property & Land Intelligence', 40, 80);
  c.fillStyle = '#e9d5ff'; c.font = '600 32px system-ui';
  c.fillText(['Portfolio overview', 'Site visual · Parcel cluster 7', 'Value growth (illustrative)'][slide], 40, 130);
  if (slide === 1) { // stylised site render: plot, buildings, trees
    c.fillStyle = '#365314'; c.fillRect(60, 170, w - 120, h - 250);
    c.strokeStyle = '#fde68a'; c.setLineDash([16, 10]); c.lineWidth = 6; c.strokeRect(160, 220, w - 320, h - 360); c.setLineDash([]);
    [[260, 280, 220, 140], [540, 300, 180, 200], [780, 260, 120, 120]].forEach(([x, y, bw, bh]) => { c.fillStyle = '#e5e7eb'; c.fillRect(x, y, bw, bh); c.fillStyle = '#94a3b8'; c.fillRect(x, y, bw, 18); });
    for (let i = 0; i < 14; i++) { c.fillStyle = '#4d7c0f'; c.beginPath(); c.arc(120 + i * 62, h - 110, 22, 0, 7); c.fill(); }
  } else if (slide === 2) {
    c.strokeStyle = '#22c55e'; c.lineWidth = 8; c.beginPath();
    for (let i = 0; i <= 10; i++) { const x = 80 + i * ((w - 160) / 10), y = h - 120 - Math.pow(i, 1.4) * 22 - Math.sin(i) * 14; i ? c.lineTo(x, y) : c.moveTo(x, y); } c.stroke();
    c.fillStyle = '#94a3b8'; c.font = '500 24px system-ui'; c.fillText('Indexed value, illustrative only', 80, h - 70);
  } else {
    [['Parcels', '1,248'], ['Countries', 'India first'], ['Clients served', '38']].forEach(([k, v], i) => { const x = 60 + i * ((w - 120) / 3); c.fillStyle = 'rgba(255,255,255,0.06)'; roundRect(c, x, 190, (w - 120) / 3 - 30, 220, 18); c.fill(); c.fillStyle = '#fff'; c.font = '800 60px system-ui'; c.fillText(v, x + 26, 300); c.fillStyle = '#c4b5fd'; c.font = '600 30px system-ui'; c.fillText(k, x + 26, 360); });
  }
  stamp(c, w, h);
}

// ── B1 · Server & Utilities (compact, functional) ──
export function buildB1(g) {
  const M = ctx.M;
  const wallM = new THREE.MeshStandardMaterial({ color: 0x4b4f5c, roughness: 0.85 });
  // server room (x -14.6..3.8, z -8.6..3.6) on a raised floor
  raisedFloor(g, -14.8, -8.8, 3.8, 3.6, { perforated: true, lifted: [[-1.0, 2.4]] });
  P.solidWalls(g, [[3.8, -8.8, 3.8, -6.9], [3.8, -5.8, 3.8, 3.6], [-14.8, 3.6, 3.8, 3.6]], 3.2, wallM);
  // hot/cold aisle: two rows of 10 racks + containment roof over the cold aisle
  rackRow(g, -11.6, -4.6, 10, 0);
  rackRow(g, -11.6, -1.4, 10, Math.PI);
  g.add(box(7.6, 0.04, 2.2, new THREE.MeshStandardMaterial({ color: 0x93c5fd, transparent: true, opacity: 0.25, depthWrite: false }), { x: -8.2, y: 2.15, z: -3.0, cast: false }));
  P.labelSign(g, 'COLD AISLE', -8.2, 2.4, -3.0, 0, { w: 1.6, h: 0.26, bg: '#1e3a8a', fg: '#dbeafe', size: 40 });
  crac(g, -14.0, -6.6, Math.PI / 2); crac(g, -14.0, -0.6, Math.PI / 2);
  P.labelSign(g, 'CRAC 1', -13.5, 2.3, -6.6, Math.PI / 2, { w: 1.0, h: 0.24, bg: '#0c4a6e', fg: '#e0f2fe', size: 40 });
  P.labelSign(g, 'CRAC 2', -13.5, 2.3, -0.6, Math.PI / 2, { w: 1.0, h: 0.24, bg: '#0c4a6e', fg: '#e0f2fe', size: 40 });
  // ISP entry points (diverse routes): ISP A on the back wall, ISP B on the left wall
  const isp = (x, z, rot, label, col) => {
    const grp = new THREE.Group(); grp.position.set(x, 0, z); grp.rotation.y = rot; g.add(grp);
    grp.add(rbox(0.9, 1.2, 0.3, 0.03, new THREE.MeshStandardMaterial({ color: 0x1f2937, metalness: 0.5 }), { y: 1.6 }));
    grp.add(box(0.6, 0.06, 0.02, neonMat(col, 1.8), { y: 1.9, z: 0.16, cast: false }));
    grp.add(cyl(0.07, 0.07, 1.0, new THREE.MeshStandardMaterial({ color: col === '#f59e0b' ? 0xf59e0b : 0x3b82f6 }), { y: 2.7 }, 10));
    const s = signPanel(1.2, 0.3, (c, w, h) => { c.fillStyle = col; c.fillRect(0, 0, w, h); c.fillStyle = '#0b0b10'; c.font = '800 46px system-ui'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText(label, w / 2, h / 2 + 2); }, { frame: false });
    s.position.set(0, 0.8, 0.12); grp.add(s);
  };
  isp(-3.0, -8.75, 0, 'ISP A', '#f59e0b');
  isp(-14.75, 2.4, Math.PI / 2, 'ISP B', '#60a5fa');
  // hybrid sign + cloud uplink panel
  const hyb = signPanel(5.6, 0.9, (c, w, h) => {
    c.fillStyle = '#0b1324'; c.fillRect(0, 0, w, h); c.fillStyle = '#38bdf8'; c.fillRect(0, 0, 16, h);
    c.fillStyle = '#e0f2fe'; c.font = '800 84px system-ui'; c.textBaseline = 'middle'; c.fillText('Hybrid: on-site servers + cloud', 50, h / 2 + 4);
  }, { pxPerUnit: 200 });
  hyb.position.set(-5.4, 4.2, -8.68); g.add(hyb);
  const up = panel(g, 3.2, 1.9, (c, w, h, t = 0) => {
    c.fillStyle = '#060b18'; c.fillRect(0, 0, w, h);
    c.fillStyle = '#e2e8f0'; c.font = '800 40px system-ui'; c.fillText('CLOUD UPLINK', 30, 60);
    // racks icon
    for (let i = 0; i < 3; i++) { c.fillStyle = '#1f2937'; c.fillRect(60 + i * 70, 200, 56, 180); for (let k = 0; k < 6; k++) { c.fillStyle = (k + i) % 3 ? '#22c55e' : '#38bdf8'; c.fillRect(70 + i * 70, 214 + k * 28, 10, 8); } }
    c.fillStyle = '#94a3b8'; c.font = '600 26px system-ui'; c.fillText('ON-SITE · B1', 60, 420);
    // cloud icon
    c.fillStyle = '#e0f2fe'; [[w - 230, 230, 60], [w - 170, 200, 75], [w - 100, 235, 55]].forEach(([x, y, r]) => { c.beginPath(); c.arc(x, y, r, 0, 7); c.fill(); }); c.fillRect(w - 290, 230, 245, 60);
    c.fillStyle = '#94a3b8'; c.fillText('CLOUD', w - 210, 340);
    // link with moving packets
    c.strokeStyle = '#38bdf8'; c.lineWidth = 6; c.setLineDash([18, 12]); c.lineDashOffset = -t * 60; c.beginPath(); c.moveTo(280, 290); c.lineTo(w - 300, 260); c.stroke(); c.setLineDash([]);
    c.fillStyle = '#4ade80'; c.font = '700 26px system-ui'; c.fillText('● LINK UP · 2 × 1 Gbps (example)', 30, h - 30);
  }, { x: 0.4, y: 4.0, z: -8.6, px: 800 });
  // biometric access door from the lift lobby into the server room
  door(g, 3.86, -6.35, Math.PI / 2, 0x334155);
  biometric(g, 3.95, 1.35, -5.55, Math.PI / 2);
  signRestricted(g, 'SERVER ROOM · AUTHORISED ONLY', 3.95, 2.75, -6.35, Math.PI / 2, 3.0);
  // UPS + battery bank (x 4.4..15, z -3..3.4)
  P.labelSign(g, 'UPS & BATTERY BANK', 9.0, 2.7, -2.7, 0, { w: 2.6, h: 0.3, bg: '#14532d', fg: '#dcfce7', size: 40 });
  for (let i = 0; i < 2; i++) {
    g.add(rbox(1.1, 2.0, 0.85, 0.03, new THREE.MeshStandardMaterial({ color: 0x1f2937, metalness: 0.5, roughness: 0.4 }), { x: 5.4 + i * 1.3, y: 1.0, z: -1.8 }));
    g.add(box(0.4, 0.25, 0.02, neonMat('#4ade80', 1.5), { x: 5.4 + i * 1.3, y: 1.6, z: -1.36, cast: false }));
  }
  for (let r = 0; r < 2; r++) for (let i = 0; i < 6; i++) {
    g.add(box(0.75, 1.6, 0.7, new THREE.MeshStandardMaterial({ color: 0x4b5563, roughness: 0.6 }), { x: 8.4 + i * 0.85, y: 0.8, z: -1.8 + r * 2.4 }));
    g.add(box(0.5, 0.05, 0.02, neonMat(i % 3 ? '#4ade80' : '#facc15', 1.4), { x: 8.4 + i * 0.85, y: 1.4, z: -1.8 + r * 2.4 + (r ? -0.36 : 0.36), cast: false }));
  }
  // backup generator behind a mesh fence (x 4.6..14.6, z 4.4..8.8)
  const gen = new THREE.Group(); gen.position.set(9.0, 0, 6.6); g.add(gen);
  gen.add(rbox(4.6, 1.9, 1.8, 0.06, new THREE.MeshStandardMaterial({ color: 0xca8a04, roughness: 0.45, metalness: 0.3 }), { y: 1.05 }));
  gen.add(box(4.8, 0.15, 2.0, M.blackMetal, { y: 0.08 }));
  for (let i = 0; i < 8; i++) gen.add(box(0.04, 1.2, 0.02, M.blackMetal, { x: -2.0 + i * 0.15, y: 1.1, z: 0.91, cast: false }));
  gen.add(cyl(0.12, 0.12, 4.2, M.blackMetal, { x: 1.8, y: 4.0, z: -0.4 }, 12));
  gen.add(rbox(1.4, 0.9, 1.0, 0.05, new THREE.MeshStandardMaterial({ color: 0x374151 }), { x: 3.6, y: 0.45 }));
  const gs = signPanel(2.8, 0.36, (c, w, h) => { c.fillStyle = '#111'; c.fillRect(0, 0, w, h); c.fillStyle = '#facc15'; c.font = '800 46px system-ui'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText('BACKUP GENERATOR · 500 kVA', w / 2, h / 2 + 2); }, { frame: false });
  gs.position.set(0, 2.25, 0.92); gen.add(gs);
  const fenceM = new THREE.MeshStandardMaterial({ color: 0x9ca3af, transparent: true, opacity: 0.35, side: THREE.DoubleSide, depthWrite: false });
  const fence = mesh(new THREE.PlaneGeometry(10, 2.2), fenceM, { x: 9.6, y: 1.1, z: 4.4, cast: false }); g.add(fence);
  // lift-lobby corridor marking + floor ID
  P.labelSign(g, 'B1 · SERVER & UTILITIES', 12.6, 3.2, -8.68, 0, { w: 3.6, h: 0.38, bg: '#0f172a', fg: '#e2e8f0', size: 44 });
  const strip = mesh(new THREE.PlaneGeometry(0.12, 12), new THREE.MeshBasicMaterial({ color: 0xfacc15 }), { x: 4.3, y: 0.012, z: 0.2, cast: false }); strip.rotation.x = -Math.PI / 2; g.add(strip);
  let lastT = -1;
  return {
    waypoints: [[5.2, -4.6], [13.4, -4.6], [13.4, 3.4], [5.2, 3.4]],
    board: totem(g, 12.6, 3.2, -0.4),
    light: [[-6, -2], [9, 0]], lightColor: 0xcfe0ff,
    update(t) { if (t - lastT < 0.25) return; lastT = t; up.redraw(t); },
  };
}
