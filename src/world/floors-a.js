// Floors 01–03: Trading Room, Admin Block, Creative Studio.
import * as THREE from 'three';
import { ctx, FX, FZ, box, rbox, cyl, mesh, neonMat, canvasTexture, signPanel, roundRect } from './common.js';
import * as P from './props.js';
import { buildMarketWall, WIDGETS } from './markets.js';
import { buildFeedScreen } from './feedwall.js';
import { makeRobot } from './robot.js';
import { wrapLines } from '../screens.js';

export function totem(parent, x, z, rotY = 0) { // freestanding post for a floor-status board
  const M = ctx.M;
  parent.add(box(0.1, 1.6, 0.1, M.blackMetal, { x, y: 0.8, z }));
  parent.add(cyl(0.35, 0.35, 0.04, M.blackMetal, { x, y: 0.02, z }, 20));
  return { x, y: 2.15, z, rot: rotY, w: 1.7 };
}

// ── 01 · Trading Room ──
export function buildTrading(g, { cssScene }) {
  const M = ctx.M;
  const ups = [];
  // live market wall (TradingView), mounted high on the sea-side glass
  const wall = buildMarketWall(g, cssScene, [
    { title: 'Ticker', url: WIDGETS.ticker(), x: -2.0, y: 6.35, z: -FZ + 0.45, w: 17.6, h: 0.55 },
    { title: 'BTC / USD', url: WIDGETS.mini('BITSTAMP:BTCUSD'), x: -8.4, y: 4.45, z: -FZ + 0.45, w: 4.6, h: 2.9 },
    { title: 'USD / INR', url: WIDGETS.mini('FX_IDC:USDINR'), x: -3.5, y: 4.45, z: -FZ + 0.45, w: 4.6, h: 2.9 },
    { title: 'Market overview', url: WIDGETS.overview(), x: 2.6, y: 4.2, z: -FZ + 0.45, w: 6.6, h: 3.4 },
  ]);
  g.add(box(18, 0.1, 0.5, M.walnut, { x: -2, y: 2.35, z: -FZ + 0.35 })); // ledge under the wall
  P.labelSign(g, 'TRADING FLOOR · LIVE MARKETS', -2, 2.6, -FZ + 0.62, 0, { w: 4.4, h: 0.32, bg: '#052e1a', fg: '#86efac', size: 40 });
  // trader lounge: recliners facing the market wall
  P.rug(g, -6.4, 3.6, 7.2, 3.4, M.rugIndigo);
  [-9, -6.4, -3.8].forEach((x) => P.recliner(g, x, 3.4, Math.PI));
  P.coffeeTable(g, -6.4, 5.4, 0.5);
  // golf simulator bay
  P.golfSimulator(g, 10.4, -4.6, 0);
  // bot fuel bar kiosks against the left glass
  P.fuelKiosks(g, -13.6, -1.2, Math.PI / 2);
  P.artFrame(g, 6.6, 3.6, -FZ + 0.3, 0, 2.2, 1.4, 0);
  P.acousticWall(g, 13.6, 2.3, 2.4, -Math.PI / 2, 5, 3);
  P.plant(g, -14.2, -8.2, 1.15, 1); P.plant(g, 7.6, 7.8, 1.0, 0); P.plant(g, -14.2, 7.9, 1.0, 0); P.plant(g, 4.2, 1.8, 0.8, 0);
  P.floorLamp(g, -10.6, 5.6);
  P.armchair(g, 10.8, 4.8, -Math.PI / 4, M.velvetTeal); P.armchair(g, 8.6, 5.6, Math.PI / 6, M.velvetTeal);
  return { markets: wall, ups, waypoints: [[-1, 1.2], [6.5, 1.2], [6.5, 6.6], [-11.5, 6.6], [-11.5, 1.2]], board: totem(g, 4.6, 6.8, -0.35), light: [[-6, 0], [6, 0]] };
}

// ── 02 · Admin Block ──
export function buildAdmin(g, { agents }) {
  const M = ctx.M;
  const feed = buildFeedScreen(g, agents);
  P.coffeeBar(g, -11.4, 6.6, 0);
  P.rug(g, 10.4, 5.4, 6, 3.2, M.rugSand);
  P.sofa(g, 10.4, 6.6, Math.PI, M.velvetPlum, 2.6);
  P.armchair(g, 7.8, 5.2, Math.PI / 2, M.velvetTeal);
  P.coffeeTable(g, 10.4, 5.0, 0.55);
  P.bookshelf(g, -14.6, 1.6, Math.PI / 2);
  P.acousticBaffles(g, -12, 12, 0.8, 6.2);
  P.artFrame(g, -8.2, 4.4, -FZ + 0.3, 0, 1.6, 1.1, 1);
  P.artFrame(g, 8.2, 4.4, -FZ + 0.3, 0, 1.6, 1.1, 2);
  P.plant(g, -14.2, -8.2, 1.1, 1); P.plant(g, 14.2, 7.9, 1.0, 0); P.plant(g, -4.2, -8.2, 1.0, 0); P.plant(g, 4.2, -8.2, 1.0, 0); P.plant(g, -6.8, 7.6, 0.9, 1);
  P.floorLamp(g, 13.8, 4.2);
  return { feed, waypoints: [[-7, 0], [-2, 4.6], [6, 3.6], [7, 0], [-1, -1]], board: totem(g, -4.6, 6.4, 0.25), light: [[-6, 0], [6, 0]] };
}

// ── 03 · Creative Studio ──
export function buildStudio(g, { agents, stations }) {
  const M = ctx.M;
  const ups = [];
  const studio = agents.filter((a) => a.floor === 'studio');
  // Live Work Wall: mirrors each studio agent's own screen (same texture), plus a task board
  P.labelSign(g, 'LIVE WORK WALL', -3.6, 6.6, -FZ + 0.55, 0, { w: 3.4, h: 0.34, bg: '#1e1b4b', fg: '#e0e7ff', size: 44 });
  studio.forEach((a, i) => {
    const w = 4.0, h = 2.5, x = -11.2 + i * 4.4;
    const grp = new THREE.Group(); grp.position.set(x, 4.85, -FZ + 0.5); g.add(grp);
    grp.add(rbox(w + 0.12, h + 0.12, 0.08, 0.03, M.graphite, {}));
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ map: stations.get(a.id).tex }));
    m.position.z = 0.045; m.userData.agentId = a.id; grp.add(m);
    grp.add(box(w, 0.03, 0.03, neonMat(a.color, 1.8), { y: -h / 2 - 0.1, z: 0.05, cast: false }));
    ups.push({ hit: m });
  });
  // studio task board
  const c = document.createElement('canvas'); c.width = 1024; c.height = 768;
  const tb = new THREE.CanvasTexture(c); tb.colorSpace = THREE.SRGBColorSpace;
  const board = new THREE.Group(); board.position.set(10.6, 4.6, -FZ + 0.5); g.add(board);
  board.add(rbox(4.0 + 0.12, 3.0 + 0.12, 0.08, 0.03, M.graphite, {}));
  const bm = new THREE.Mesh(new THREE.PlaneGeometry(4.0, 3.0), new THREE.MeshBasicMaterial({ map: tb })); bm.position.z = 0.045; board.add(bm);
  function drawBoard(getState) {
    const x = c.getContext('2d');
    x.fillStyle = '#f8f5ee'; x.fillRect(0, 0, 1024, 768);
    x.fillStyle = '#1f1b3a'; x.font = '800 56px system-ui'; x.fillText('STUDIO TASK BOARD', 40, 80);
    studio.forEach((a, i) => {
      const s = getState(a.id), y = 130 + i * 150;
      x.fillStyle = a.color; roundRect(x, 40, y, 944, 130, 16); x.globalAlpha = 0.18; x.fill(); x.globalAlpha = 1;
      x.fillStyle = a.color; x.fillRect(40, y, 14, 130);
      x.fillStyle = '#1f1b3a'; x.font = '700 40px system-ui'; x.fillText(a.name, 76, y + 48);
      x.textAlign = 'right'; x.fillStyle = s.status === 'working' ? '#15803d' : '#64748b'; x.fillText(s.status.toUpperCase(), 964, y + 48); x.textAlign = 'left';
      x.fillStyle = '#334155'; x.font = '400 34px system-ui';
      wrapLines(x, s.task, 880, 2).forEach((ln, k) => x.fillText(ln, 76, y + 92 + k * 36));
    });
    tb.needsUpdate = true;
  }
  // architect corner (Grok Bot)
  P.draftingTable(g, -12.6, 1.6, 0.4);
  P.archModel(g, -8.4, 1.8);
  P.bookshelf(g, -14.6, -5.6, Math.PI / 2);
  // furniture + landscape prototypes on plinths
  P.chairPrototype(g, -3.4, 0.9);
  P.planterModel(g, 2.2, 0.9);
  P.stickyEasel(g, 5.0, 0.6, -0.2);
  // design team zone (logo / brand NPCs)
  P.rug(g, 11.4, 4.8, 0, 0, M.rugIndigo, true);
  P.roundTable(g, 11.4, 4.8, 1.2);
  const team = [];
  [['#f97316', 0], ['#22d3ee', 2.1], ['#a3e635', 4.2]].forEach(([col, a]) => {
    const r = makeRobot(col, { scale: 0.95, ring: false });
    r.group.position.set(11.4 + Math.cos(a) * 1.75, 0, 4.8 + Math.sin(a) * 1.75);
    r.group.rotation.y = Math.atan2(11.4 - r.group.position.x, 4.8 - r.group.position.z);
    g.add(r.group); team.push(r);
  });
  const logo = signPanel(1.6, 0.9, (x, w, h) => { x.fillStyle = '#111'; x.fillRect(0, 0, w, h); x.strokeStyle = '#f97316'; x.lineWidth = 14; x.beginPath(); x.arc(w / 2, h / 2 - 10, 90, 0, Math.PI * 1.6); x.stroke(); x.fillStyle = '#fff'; x.font = '700 30px system-ui'; x.textAlign = 'center'; x.fillText('LOGO v4', w / 2, h - 18); });
  logo.position.set(11.4, 1.6, 6.9); logo.rotation.y = Math.PI; g.add(logo);
  P.labelSign(g, 'DESIGN TEAM', 11.4, 3.2, 7.6, Math.PI, { w: 2.2, h: 0.32, bg: '#3b0764', fg: '#f5d0fe', size: 44 });
  P.acousticBaffles(g, -12, 12, -0.2, 6.2, 0x2f2a4f);
  P.acousticWall(g, 14.6, 2.6, -1.2, -Math.PI / 2, 4, 3);
  P.artFrame(g, -14.6 + 0.2, 4.0, 4.4, Math.PI / 2, 1.8, 1.2, 2);
  P.plant(g, -14.2, 7.9, 1.1, 1); P.plant(g, 6.2, 7.9, 1.0, 0); P.plant(g, 14.2, -8.2, 1.0, 1);
  P.floorLamp(g, -10.4, 4.6);
  return {
    drawBoard, ups,
    update: (t) => team.forEach((r, i) => r.update(t + i, Math.sin(t * 0.4 + i) > 0.3 ? 'working' : 'idle')),
    waypoints: [[-6.8, 3.6], [6.6, 3.2], [7.6, 0.2], [-6.6, 0.2]], board: totem(g, -6.2, 6.4, 0.3), light: [[-6, 0], [6, 0]],
  };
}
