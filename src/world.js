import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';
import { makeMaterials, makeEnvironment } from './materials.js';
import { buildOcean } from './ocean.js';
import { buildFestive } from './festive.js';
import { createAgentScreen } from './screens.js';

// Building: x ∈ [-15, 15], z ∈ [-9, 9]; glass curtain walls at z=-9 (back) and x=-15 (left).
// Three rooms split along x by glass partitions at x = -5 and x = 5.
const BX = 15, BZ = 9, WH = 7;

let M; // materials (set in buildWorld)
const neonMat = (color, k = 3) => new THREE.MeshBasicMaterial({ color: new THREE.Color(color).multiplyScalar(k) });

function mesh(geo, mat, { x = 0, y = 0, z = 0, cast = true, receive = true } = {}) {
  const m = new THREE.Mesh(geo, mat);
  m.position.set(x, y, z);
  m.castShadow = cast;
  m.receiveShadow = receive;
  return m;
}
const box = (w, h, d, mat, p) => mesh(new THREE.BoxGeometry(w, h, d), mat, p);
const rbox = (w, h, d, r, mat, p) => mesh(new RoundedBoxGeometry(w, h, d, 3, r), mat, p);
const cyl = (rt, rb, h, mat, p, seg = 24) => mesh(new THREE.CylinderGeometry(rt, rb, h, seg), mat, p);

function radialTexture(inner, outer = 'rgba(0,0,0,0)') {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const g = c.getContext('2d');
  const grd = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  grd.addColorStop(0, inner); grd.addColorStop(1, outer);
  g.fillStyle = grd; g.fillRect(0, 0, 128, 128);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
function roundRect(g, x, y, w, h, r) {
  g.beginPath(); g.moveTo(x + r, y); g.arcTo(x + w, y, x + w, y + h, r); g.arcTo(x + w, y + h, x, y + h, r);
  g.arcTo(x, y + h, x, y, r); g.arcTo(x, y, x + w, y, r); g.closePath();
}
const pad2 = (n) => String(n).padStart(2, '0');
export const fmtTime = (d) => `${pad2(d.getHours())}:${pad2(d.getMinutes())}:${pad2(d.getSeconds())}`;

// ---------- building shell ----------
function buildShell(scene) {
  // plinth + marble floor
  scene.add(box(BX * 2 + 0.6, 1.8, BZ * 2 + 0.6, M.plinth, { y: -0.92, cast: false }));
  const floor = mesh(new THREE.PlaneGeometry(BX * 2, BZ * 2), M.floor, { y: 0.001, cast: false });
  floor.rotation.x = -Math.PI / 2;
  scene.add(floor);
  // glowing rim on the open (front/right) edges + plinth line
  const rim = neonMat('#a78bfa', 1.8);
  scene.add(box(BX * 2 + 0.6, 0.05, 0.05, rim, { y: 0.0, z: BZ + 0.3, cast: false, receive: false }));
  scene.add(box(0.05, 0.05, BZ * 2 + 0.6, rim, { x: BX + 0.3, y: 0.0, cast: false, receive: false }));
  const rim2 = neonMat('#6d5dfc', 1.2);
  scene.add(box(BX * 2 + 0.6, 0.03, 0.03, rim2, { y: -1.75, z: BZ + 0.3, cast: false, receive: false }));
  scene.add(box(0.03, 0.03, BZ * 2 + 0.6, rim2, { x: BX + 0.3, y: -1.75, cast: false, receive: false }));

  // sheen texture for fake glass reflections
  const sc = document.createElement('canvas'); sc.width = 512; sc.height = 256;
  const sg = sc.getContext('2d');
  [[60, 120], [180, 40], [320, 160], [420, 60]].forEach(([x, w]) => {
    const gr = sg.createLinearGradient(x, 0, x + w, 0);
    gr.addColorStop(0, 'rgba(255,255,255,0)'); gr.addColorStop(0.5, 'rgba(220,225,255,0.55)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
    sg.save(); sg.transform(1, 0, -0.5, 1, 0, 0); sg.fillStyle = gr; sg.fillRect(x, 0, w, 256); sg.restore();
  });
  const sheenTex = new THREE.CanvasTexture(sc); sheenTex.colorSpace = THREE.SRGBColorSpace;
  const sheenMat = new THREE.MeshBasicMaterial({ map: sheenTex, transparent: true, opacity: 0.07, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide });

  const neonTop = neonMat('#c084fc', 2.2);
  const neonSill = neonMat('#8b5cf6', 2.6);

  // curtain wall helper: runs along a line from p0 to p1 (horizontal), height h
  function curtain(p0, p1, h, bay, { sill = true, top = true, frame = M.bronze } = {}) {
    const dir = p1.clone().sub(p0);
    const len = dir.length();
    const ang = Math.atan2(-dir.z, dir.x);
    const g = new THREE.Group();
    g.position.copy(p0);
    g.rotation.y = ang;
    const pane = new THREE.Mesh(new THREE.PlaneGeometry(len, h), M.glass);
    pane.position.set(len / 2, h / 2, 0); pane.renderOrder = 5;
    g.add(pane);
    const sheen = new THREE.Mesh(new THREE.PlaneGeometry(len, h), sheenMat);
    sheen.position.set(len / 2, h / 2, 0.01); sheen.renderOrder = 6;
    g.add(sheen);
    const n = Math.round(len / bay);
    for (let i = 0; i <= n; i++) g.add(box(0.07, h, 0.12, frame, { x: (i / n) * len, y: h / 2, receive: false }));
    if (sill) { g.add(box(len, 0.14, 0.18, frame, { x: len / 2, y: 0.07 })); g.add(box(len, 0.025, 0.03, neonSill, { x: len / 2, y: 0.15, z: 0.08, cast: false })); }
    if (top) { g.add(box(len + 0.1, 0.18, 0.2, frame, { x: len / 2, y: h })); g.add(box(len, 0.025, 0.03, neonTop, { x: len / 2, y: h - 0.1, z: 0.1, cast: false })); }
    scene.add(g);
    return g;
  }
  // outer glass walls (back + left), floor to ceiling
  curtain(new THREE.Vector3(-BX, 0, -BZ), new THREE.Vector3(BX, 0, -BZ), WH, 2.5);
  curtain(new THREE.Vector3(-BX, 0, BZ), new THREE.Vector3(-BX, 0, -BZ), WH, 3);
  scene.add(box(0.22, WH + 0.1, 0.22, M.bronze, { x: -BX, y: WH / 2, z: -BZ }));
  scene.add(box(0.07, WH, 0.07, neonTop, { x: BX, y: WH / 2, z: -BZ + 0.08, cast: false }));
  // glass partitions between the rooms (open at the front for walkways)
  for (const x of [-5, 5]) {
    const g = curtain(new THREE.Vector3(x, 0, 3.2), new THREE.Vector3(x, 0, -BZ), 3.0, 2.45, { top: false });
    g.add(box(12.2 + 0.1, 0.08, 0.14, M.walnut, { x: 6.1, y: 3.02 }));
    g.add(box(12.2, 0.02, 0.02, neonMat('#c084fc', 1.6), { x: 6.1, y: 2.95, z: 0.08, cast: false }));
  }
}

// ---------- props ----------
function plant(scene, x, z, s = 1, kind = 0) {
  const g = new THREE.Group();
  if (kind === 0) {
    g.add(cyl(0.34, 0.26, 0.6, M.ceramic, { y: 0.3 }));
    g.add(cyl(0.31, 0.31, 0.03, new THREE.MeshStandardMaterial({ color: 0x2b1d14 }), { y: 0.59 }));
    for (let i = 0; i < 12; i++) {
      const leaf = mesh(new THREE.ConeGeometry(0.06, 1.0 + Math.random() * 0.5, 5), i % 2 ? M.leaf : M.leaf2);
      const a = (i / 12) * Math.PI * 2, tilt = 0.2 + Math.random() * 0.45;
      leaf.position.set(Math.cos(a) * 0.1, 1.05, Math.sin(a) * 0.1);
      leaf.rotation.set(Math.sin(a) * tilt, 0, -Math.cos(a) * tilt);
      g.add(leaf);
    }
  } else {
    // fiddle-leaf style tree
    g.add(cyl(0.36, 0.3, 0.55, M.terracotta, { y: 0.275 }));
    g.add(cyl(0.025, 0.035, 1.6, new THREE.MeshStandardMaterial({ color: 0x5b4030 }), { y: 1.2 }));
    const leafGeo = new THREE.SphereGeometry(0.2, 10, 8);
    for (let i = 0; i < 26; i++) {
      const lf = mesh(leafGeo, i % 3 ? M.leaf : M.leaf2);
      const a = Math.random() * Math.PI * 2, h = 1.2 + Math.random() * 1.0, r = 0.12 + Math.random() * 0.32;
      lf.position.set(Math.cos(a) * r, h, Math.sin(a) * r);
      lf.scale.set(1, 1.4, 0.25);
      lf.rotation.set(Math.random(), a, Math.random() * 0.6);
      g.add(lf);
    }
  }
  g.scale.setScalar(s);
  g.position.set(x, 0, z);
  scene.add(g);
}

function bookshelf(scene, x, z, rotY = 0) {
  const g = new THREE.Group();
  const W = 2.4, H = 3.0, D = 0.55;
  g.add(box(0.06, H, D, M.walnut, { x: -W / 2, y: H / 2 }));
  g.add(box(0.06, H, D, M.walnut, { x: W / 2, y: H / 2 }));
  g.add(box(W, 0.05, D, M.walnut, { y: H }));
  g.add(box(W, H, 0.03, M.graphite, { y: H / 2, z: -D / 2 }));
  const colors = [0x9b2226, 0xca6702, 0x0a9396, 0x005f73, 0xee9b00, 0x6a4c93, 0xe9d8a6, 0x3d405b, 0xbb3e03];
  for (let s = 0; s < 4; s++) {
    const y = 0.1 + s * (H / 4);
    g.add(box(W, 0.04, D, M.walnut, { y }));
    let bx = -W / 2 + 0.1;
    const stopAt = s === 1 ? 0.1 : W / 2 - 0.15;
    while (bx < stopAt) {
      const bw = 0.06 + Math.random() * 0.07, bh = 0.4 + Math.random() * 0.25;
      const b = box(bw, bh, 0.38, new THREE.MeshStandardMaterial({ color: colors[(Math.random() * colors.length) | 0], roughness: 0.7 }), { x: bx + bw / 2, y: y + 0.02 + bh / 2 });
      g.add(b);
      bx += bw + 0.012;
    }
    if (s === 1) { // a small vase + frame on this shelf
      g.add(cyl(0.08, 0.06, 0.3, M.ceramic, { x: 0.5, y: y + 0.17 }));
      g.add(box(0.36, 0.28, 0.03, M.brass, { x: 0.9, y: y + 0.17, z: -0.1 }));
    }
  }
  g.add(cyl(0.12, 0.1, 0.18, M.terracotta, { x: -0.6, y: H + 0.11 }));
  for (let i = 0; i < 5; i++) { const l = mesh(new THREE.SphereGeometry(0.1, 8, 6), M.leaf2, { x: -0.6 + (Math.random() - 0.5) * 0.2, y: H + 0.3 + Math.random() * 0.1, z: (Math.random() - 0.5) * 0.15 }); l.scale.set(1, 0.6, 1); g.add(l); }
  g.position.set(x, 0, z);
  g.rotation.y = rotY;
  scene.add(g);
}

function sofa(scene, x, z, rotY, fabric, w = 2.4) {
  const g = new THREE.Group();
  g.add(rbox(w, 0.42, 0.95, 0.08, fabric, { y: 0.33 }));
  g.add(rbox(w, 0.62, 0.22, 0.08, fabric, { y: 0.72, z: -0.37 }));
  for (const sx of [-1, 1]) g.add(rbox(0.22, 0.55, 0.95, 0.08, fabric, { x: sx * (w / 2 - 0.11), y: 0.5 }));
  for (const sx of [-1, 1]) g.add(cyl(0.025, 0.02, 0.12, M.brass, { x: sx * (w / 2 - 0.15), y: 0.06, z: 0.35 }, 8), cyl(0.025, 0.02, 0.12, M.brass, { x: sx * (w / 2 - 0.15), y: 0.06, z: -0.35 }, 8));
  // cushions
  const cushionCols = [0xe9c46a, 0xf4a261, 0xe76f51, 0xd8cfc0];
  const n = Math.max(2, Math.round(w / 1.0));
  for (let i = 0; i < n; i++) {
    const c = rbox(0.42, 0.4, 0.14, 0.06, new THREE.MeshStandardMaterial({ color: cushionCols[i % cushionCols.length], roughness: 0.95 }), { x: -w / 2 + 0.45 + i * ((w - 0.9) / (n - 1)), y: 0.72, z: -0.2 });
    c.rotation.x = -0.2; c.rotation.z = (i % 2 ? 1 : -1) * 0.08;
    g.add(c);
  }
  g.position.set(x, 0, z);
  g.rotation.y = rotY;
  scene.add(g);
}

function armchair(scene, x, z, rotY, fabric) {
  const g = new THREE.Group();
  g.add(rbox(0.85, 0.38, 0.85, 0.08, fabric, { y: 0.32 }));
  g.add(rbox(0.85, 0.6, 0.18, 0.08, fabric, { y: 0.7, z: -0.34 }));
  for (const sx of [-1, 1]) g.add(rbox(0.16, 0.42, 0.85, 0.06, fabric, { x: sx * 0.42, y: 0.5 }));
  g.add(rbox(0.38, 0.36, 0.12, 0.05, new THREE.MeshStandardMaterial({ color: 0xe9c46a, roughness: 0.95 }), { y: 0.68, z: -0.2 }));
  g.position.set(x, 0, z);
  g.rotation.y = rotY;
  scene.add(g);
}

function floorLamp(scene, x, z, color = 0xffc98a) {
  const g = new THREE.Group();
  g.add(cyl(0.22, 0.22, 0.03, M.blackMetal, { y: 0.015 }));
  g.add(cyl(0.015, 0.015, 1.7, M.brass, { y: 0.86 }, 8));
  const shade = cyl(0.18, 0.26, 0.3, new THREE.MeshStandardMaterial({ color: 0xf5e6c8, emissive: color, emissiveIntensity: 0.55, side: THREE.DoubleSide }), { y: 1.75 });
  g.add(shade);
  g.position.set(x, 0, z);
  scene.add(g);
}

function rug(scene, x, z, w, d, mat, round = false) {
  const geo = round ? new THREE.CircleGeometry(w, 64) : new THREE.PlaneGeometry(w, d);
  const r = mesh(geo, mat, { x, y: 0.006, z, cast: false });
  r.rotation.x = -Math.PI / 2;
  scene.add(r);
  const edge = round ? new THREE.RingGeometry(w - 0.06, w, 64) : null;
  if (edge) { const e = mesh(edge, new THREE.MeshStandardMaterial({ color: 0xc9a227, roughness: 0.6 }), { x, y: 0.008, z, cast: false }); e.rotation.x = -Math.PI / 2; scene.add(e); }
}

function coffeeTable(scene, x, z, r = 0.75) {
  const g = new THREE.Group();
  g.add(cyl(r, r, 0.05, M.marbleWhite, { y: 0.45 }, 48));
  g.add(cyl(0.06, 0.06, 0.42, M.brass, { y: 0.22 }, 12));
  g.add(cyl(0.35, 0.35, 0.02, M.brass, { y: 0.01 }, 32));
  // tray with cups + book
  g.add(cyl(0.06, 0.05, 0.1, M.ceramic, { x: 0.2, y: 0.53, z: 0.1 }, 12));
  g.add(cyl(0.06, 0.05, 0.1, new THREE.MeshStandardMaterial({ color: 0xe76f51, roughness: 0.3 }), { x: 0.36, y: 0.53, z: -0.05 }, 12));
  g.add(box(0.42, 0.05, 0.3, new THREE.MeshStandardMaterial({ color: 0x264653, roughness: 0.7 }), { x: -0.2, y: 0.5, z: -0.05 }));
  g.add(box(0.36, 0.04, 0.26, new THREE.MeshStandardMaterial({ color: 0xe9c46a, roughness: 0.7 }), { x: -0.18, y: 0.545, z: -0.03 }));
  g.position.set(x, 0, z);
  scene.add(g);
}

function stickyEasel(scene, x, z, rotY = 0) {
  const c = document.createElement('canvas');
  c.width = 768; c.height = 512;
  const g = c.getContext('2d');
  g.fillStyle = '#f2eee6'; g.fillRect(0, 0, 768, 512);
  const notes = [['#fde68a', 'Ship office v2'], ['#a7f3d0', 'NIFTY levels'], ['#fbcfe8', 'Chair v3\nfeedback'], ['#bfdbfe', 'Post Fri\n9:00 AM'],
    ['#ddd6fe', 'India-first\nGTM'], ['#fed7aa', 'Study\nbuilt-in'], ['#fde68a', 'Diwali\ncampaign'], ['#a7f3d0', 'Weekly\nreview']];
  notes.forEach(([col, text], i) => {
    const cx = 40 + (i % 4) * 180, cy = 40 + Math.floor(i / 4) * 230;
    g.save(); g.translate(cx + 75, cy + 80); g.rotate((Math.random() - 0.5) * 0.12); g.translate(-75, -80);
    g.fillStyle = 'rgba(0,0,0,0.12)'; g.fillRect(6, 8, 150, 160);
    g.fillStyle = col; g.fillRect(0, 0, 150, 160);
    g.fillStyle = '#ef4444'; g.beginPath(); g.arc(75, 12, 7, 0, Math.PI * 2); g.fill();
    g.fillStyle = '#1f2937'; g.font = 'bold 24px system-ui, sans-serif';
    text.split('\n').forEach((ln, j) => g.fillText(ln, 12, 60 + j * 30));
    g.restore();
  });
  const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 8;
  const grp = new THREE.Group();
  const board = mesh(new THREE.PlaneGeometry(2.6, 1.73), new THREE.MeshStandardMaterial({ map: tex, roughness: 0.8, emissive: 0xffffff, emissiveMap: tex, emissiveIntensity: 0.22 }), { y: 2.1, z: 0.04 });
  grp.add(board);
  grp.add(box(2.7, 1.83, 0.06, M.oak, { y: 2.1 }));
  for (const sx of [-1, 1]) { const leg = box(0.06, 3.0, 0.06, M.oak, { x: sx * 1.1, y: 1.45, z: -0.1 }); leg.rotation.x = 0.05; grp.add(leg); }
  grp.add(box(2.6, 0.05, 0.14, M.oak, { y: 1.2, z: 0.06 }));
  grp.position.set(x, 0, z);
  grp.rotation.y = rotY;
  scene.add(grp);
}

// ---------- wall feed screen (free-standing display in the Command Center) ----------
function buildFeedScreen(scene, agents) {
  const W = 2048, H = 965;
  const c = document.createElement('canvas');
  c.width = W; c.height = H;
  const g = c.getContext('2d');
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  const grp = new THREE.Group();
  const SW = 7.0, SH = SW * (H / W);
  grp.add(rbox(SW + 0.25, SH + 0.25, 0.14, 0.04, M.graphite, { y: 0 }));
  const screen = new THREE.Mesh(new THREE.PlaneGeometry(SW, SH), new THREE.MeshBasicMaterial({ map: tex, color: new THREE.Color(0.95, 0.95, 0.95) }));
  screen.position.z = 0.075;
  grp.add(screen);
  grp.add(box(SW + 0.2, 0.03, 0.03, neonMat('#7c3aed', 2.6), { y: -SH / 2 - 0.14, z: 0.06, cast: false }));
  grp.position.set(0, 1.9 + SH / 2, -BZ + 0.75);
  scene.add(grp);
  for (const sx of [-1, 1]) scene.add(box(0.1, 1.95, 0.1, M.bronze, { x: sx * (SW / 2 - 0.4), y: 0.97, z: -BZ + 0.7 }));
  scene.add(box(SW - 0.3, 0.08, 0.5, M.walnut, { y: 0.04, z: -BZ + 0.7 }));
  const nameById = Object.fromEntries(agents.map((a) => [a.id, a]));

  function draw(events, getState) {
    const bg = g.createLinearGradient(0, 0, W, H);
    bg.addColorStop(0, '#0c0d2b'); bg.addColorStop(1, '#141038');
    g.fillStyle = bg; g.fillRect(0, 0, W, H);
    g.fillStyle = 'rgba(255,255,255,0.018)';
    for (let y = 0; y < H; y += 6) g.fillRect(0, y, W, 2);
    g.fillStyle = '#ef4444'; g.beginPath(); g.arc(70, 72, 14, 0, Math.PI * 2); g.fill();
    g.fillStyle = '#e9e7ff'; g.font = '700 52px system-ui, sans-serif';
    g.fillText('LIVE ACTIVITY FEED', 100, 90);
    g.fillStyle = '#8b8bc4'; g.font = '500 46px ui-monospace, Menlo, monospace';
    g.textAlign = 'right'; g.fillText(fmtTime(new Date()), W - 50, 90); g.textAlign = 'left';
    g.fillStyle = '#2d2a6e'; g.fillRect(50, 125, W - 100, 3);
    const colW = 1440;
    const lines = events.slice(-10);
    lines.forEach((e, i) => {
      const y = 196 + i * 74;
      const a = nameById[e.agentId];
      if (i === lines.length - 1) { g.fillStyle = 'rgba(139,92,246,0.18)'; roundRect(g, 40, y - 50, colW - 20, 66, 10); g.fill(); }
      g.fillStyle = '#6f6fa8'; g.font = '500 38px ui-monospace, Menlo, monospace';
      g.fillText(fmtTime(e.ts), 60, y);
      g.fillStyle = a?.color || '#fff'; g.font = '700 38px system-ui, sans-serif';
      const nm = a?.name || e.agentId;
      g.fillText(nm, 280, y);
      const nw = g.measureText(nm).width;
      g.fillStyle = '#dcdcf5'; g.font = '400 38px system-ui, sans-serif';
      let msg = e.message;
      const maxW = colW - 310 - nw - 30;
      while (g.measureText(msg).width > maxW && msg.length > 4) msg = msg.slice(0, -2);
      if (msg !== e.message) msg = msg.trimEnd() + '…';
      g.fillText(msg, 280 + nw + 22, y);
    });
    const sx = colW + 70;
    g.fillStyle = '#1a1848'; roundRect(g, sx - 20, 150, W - sx - 30, H - 190, 18); g.fill();
    g.fillStyle = '#8b8bc4'; g.font = '700 36px system-ui, sans-serif';
    g.fillText('AGENTS', sx + 10, 212);
    agents.forEach((a, i) => {
      const s = getState(a.id);
      const y = 300 + i * 118;
      g.fillStyle = a.color; g.beginPath(); g.arc(sx + 24, y - 12, 14, 0, Math.PI * 2); g.fill();
      g.fillStyle = '#ecebff'; g.font = '600 38px system-ui, sans-serif';
      let nm = a.name; while (g.measureText(nm).width > 330 && nm.length > 3) nm = nm.slice(0, -1);
      g.fillText(nm === a.name ? nm : nm + '…', sx + 56, y);
      g.fillStyle = s.status === 'working' ? '#4ade80' : '#94a3b8'; g.font = '500 30px system-ui, sans-serif';
      g.fillText(s.status === 'working' ? '● working' : '○ idle', sx + 56, y + 40);
    });
    tex.needsUpdate = true;
  }
  return { draw };
}

// ---------- agent station: desk, big monitor, robot ----------
function buildStation(scene, agent, index, camPos) {
  const col = new THREE.Color(agent.color);
  const station = new THREE.Group();
  station.position.set(agent.desk.x, 0, agent.desk.z);
  scene.add(station);
  const wide = !!agent.desk.wide;
  const dw = wide ? 4.0 : 3.0, dd = 1.1, topY = 0.76;

  // desk: walnut top, black metal legs, drawer unit, accent strip
  station.add(rbox(dw, 0.06, dd, 0.02, M.walnut, { y: topY }));
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) station.add(box(0.045, topY - 0.03, 0.045, M.blackMetal, { x: sx * (dw / 2 - 0.08), y: (topY - 0.03) / 2, z: sz * (dd / 2 - 0.08) }));
  station.add(rbox(0.5, 0.55, dd - 0.15, 0.02, M.whiteMatte, { x: -dw / 2 + 0.4, y: 0.42 }));
  for (let i = 0; i < 2; i++) station.add(box(0.12, 0.015, 0.015, M.brass, { x: -dw / 2 + 0.4, y: 0.6 - i * 0.24, z: dd / 2 - 0.07 }));
  station.add(box(dw - 0.04, 0.012, 0.012, neonMat(agent.color, 1.8), { y: topY - 0.035, z: dd / 2, cast: false }));

  // big monitor facing the default camera
  const wideScr = wide;
  const SW = wideScr ? 3.3 : 2.25;
  const canvasW = wideScr ? 1536 : 1024, canvasH = 640;
  const SH = SW * (canvasH / canvasW) * (wideScr ? 1.0 : 1.0);
  const screenCanvas = createAgentScreen(agent, { width: canvasW, height: canvasH });
  const mon = new THREE.Group();
  const frame = rbox(SW + 0.09, SH + 0.09, 0.06, 0.025, M.graphite, { y: 0 });
  mon.add(frame);
  const smat = new THREE.MeshBasicMaterial({ map: screenCanvas.tex });
  const scr = new THREE.Mesh(new THREE.PlaneGeometry(SW, SH), smat);
  scr.position.z = 0.032;
  mon.add(scr);
  mon.add(box(SW * 0.4, SH * 0.5, 0.05, M.graphite, { z: -0.05 })); // back housing
  // animated overlays: pulsing status dot, typing cursor, scanline
  const ovDot = new THREE.Mesh(new THREE.CircleGeometry(1, 24), new THREE.MeshBasicMaterial({ color: new THREE.Color('#4ade80').multiplyScalar(1.3), transparent: true }));
  const ovCursor = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ color: col.clone().multiplyScalar(1.4) }));
  const ovScan = new THREE.Mesh(new THREE.PlaneGeometry(SW, SH * 0.06), new THREE.MeshBasicMaterial({ color: 0x5060b0, transparent: true, opacity: 0.05, blending: THREE.AdditiveBlending, depthWrite: false }));
  [ovDot, ovCursor, ovScan].forEach((o, i) => { o.position.z = 0.034 + i * 0.001; mon.add(o); });
  const px2 = (px, py) => [(px / canvasW - 0.5) * SW, (0.5 - py / canvasH) * SH];
  // stand
  const standH = 0.22;
  const monGroup = new THREE.Group();
  mon.position.y = standH + SH / 2;
  monGroup.add(mon);
  monGroup.add(cyl(0.035, 0.035, standH + SH * 0.3, M.blackMetal, { y: (standH + SH * 0.3) / 2, z: -0.06 }, 12));
  monGroup.add(rbox(0.5, 0.025, 0.3, 0.01, M.blackMetal, { y: 0.012, z: -0.02 }));
  const mx = wide ? -0.5 : -0.45;
  monGroup.position.set(mx, topY + 0.03, -0.05);
  const wx = agent.desk.x + mx, wz = agent.desk.z - 0.05;
  monGroup.rotation.y = THREE.MathUtils.clamp(Math.atan2(camPos.x - wx, camPos.z - wz), -0.95, 0.95);
  station.add(monGroup);
  frame.userData.agentId = agent.id;

  // desk accessories
  const rx = wide ? 1.45 : 0.95;
  station.add(rbox(0.62, 0.025, 0.2, 0.01, M.whiteMatte, { x: rx, y: topY + 0.045, z: 0.05 }));
  station.add(box(0.56, 0.006, 0.15, M.graphite, { x: rx, y: topY + 0.06, z: 0.05, cast: false }));
  station.add(rbox(0.07, 0.03, 0.11, 0.015, M.whiteMatte, { x: rx + 0.45, y: topY + 0.045, z: 0.08 }));
  const mug = cyl(0.06, 0.055, 0.13, new THREE.MeshStandardMaterial({ color: col, roughness: 0.3 }), { x: dw / 2 - 0.22, y: topY + 0.095, z: 0.3 }, 16);
  station.add(mug);
  const handle = mesh(new THREE.TorusGeometry(0.035, 0.012, 6, 12), mug.material, { x: dw / 2 - 0.15, y: topY + 0.1, z: 0.3 });
  handle.rotation.y = Math.PI / 2;
  station.add(handle);
  // notebook + pen
  const nb = box(0.32, 0.025, 0.42, new THREE.MeshStandardMaterial({ color: col.clone().multiplyScalar(0.55), roughness: 0.8 }), { x: -dw / 2 + 0.35, y: topY + 0.045, z: 0.28 });
  nb.rotation.y = 0.25; station.add(nb);
  const pen = cyl(0.008, 0.008, 0.28, M.brass, { x: -dw / 2 + 0.58, y: topY + 0.04, z: 0.3 }, 6);
  pen.rotation.z = Math.PI / 2; pen.rotation.y = 0.4; station.add(pen);
  // photo frame
  const fr = box(0.2, 0.26, 0.025, M.brass, { x: dw / 2 - 0.3, y: topY + 0.16, z: -0.32 });
  fr.rotation.x = -0.15; fr.rotation.y = -0.3; station.add(fr);
  // succulent
  station.add(cyl(0.07, 0.055, 0.1, M.ceramic, { x: -dw / 2 + 0.25, y: topY + 0.08, z: -0.3 }, 12));
  for (let i = 0; i < 6; i++) { const s = mesh(new THREE.ConeGeometry(0.025, 0.12, 5), M.leaf2, { x: -dw / 2 + 0.25 + Math.cos(i) * 0.03, y: topY + 0.17, z: -0.3 + Math.sin(i) * 0.03 }); s.rotation.set(Math.sin(i) * 0.4, 0, Math.cos(i) * 0.4); station.add(s); }
  if (wide) { // desk lamp for GK
    station.add(cyl(0.1, 0.1, 0.02, M.brass, { x: dw / 2 - 0.55, y: topY + 0.04, z: -0.3 }, 16));
    const arm = cyl(0.012, 0.012, 0.55, M.brass, { x: dw / 2 - 0.55, y: topY + 0.3, z: -0.3 }, 6); station.add(arm);
    station.add(cyl(0.06, 0.12, 0.12, new THREE.MeshStandardMaterial({ color: 0x1b1b24, emissive: 0xffb36b, emissiveIntensity: 0.4, side: THREE.DoubleSide }), { x: dw / 2 - 0.55, y: topY + 0.58, z: -0.22 }, 16));
  }

  // robot (behind the desk, facing the camera)
  const robot = new THREE.Group();
  robot.position.set(rx, 0, -0.95);
  robot.scale.setScalar(1.3);
  station.add(robot);
  const white = new THREE.MeshPhysicalMaterial({ color: 0xf6f6fc, roughness: 0.28, clearcoat: 0.6, clearcoatRoughness: 0.2 });
  const accent = new THREE.MeshPhysicalMaterial({ color: col, roughness: 0.3, clearcoat: 0.5, emissive: col, emissiveIntensity: 0.1 });
  const dark = new THREE.MeshStandardMaterial({ color: 0x14142e, roughness: 0.15, metalness: 0.4 });
  const eyeMat = new THREE.MeshBasicMaterial({ color: col.clone().multiplyScalar(2.2) });
  for (const sx of [-1, 1]) {
    robot.add(cyl(0.08, 0.08, 0.42, dark, { x: sx * 0.15, y: 0.25 }, 12));
    robot.add(rbox(0.2, 0.1, 0.28, 0.04, accent, { x: sx * 0.15, y: 0.05, z: 0.03 }));
  }
  const body = new THREE.Group(); body.position.y = 0.5; robot.add(body);
  body.add(rbox(0.66, 0.62, 0.48, 0.16, accent, { y: 0.32 }));
  body.add(rbox(0.38, 0.28, 0.06, 0.05, white, { y: 0.32, z: 0.23 }));
  body.add(mesh(new THREE.CircleGeometry(0.05, 16), eyeMat, { y: 0.36, z: 0.265, cast: false }));
  const arms = [];
  for (const sx of [-1, 1]) {
    const pivot = new THREE.Group();
    pivot.position.set(sx * 0.4, 0.52, 0);
    pivot.add(mesh(new THREE.CapsuleGeometry(0.075, 0.32, 4, 10), white, { y: -0.2 }));
    pivot.add(mesh(new THREE.SphereGeometry(0.09, 12, 10), accent, { y: -0.42 }));
    pivot.rotation.z = sx * 0.12;
    body.add(pivot); arms.push(pivot);
  }
  const head = new THREE.Group(); head.position.y = 0.98; body.add(head);
  head.add(rbox(0.82, 0.6, 0.62, 0.2, white, {}));
  head.add(rbox(0.64, 0.36, 0.08, 0.1, dark, { z: 0.3, cast: false }));
  const eyes = [];
  for (const sx of [-1, 1]) { const e = mesh(new THREE.CapsuleGeometry(0.045, 0.06, 4, 8), eyeMat, { x: sx * 0.14, y: 0.01, z: 0.345, cast: false }); head.add(e); eyes.push(e); }
  for (const sx of [-1, 1]) { const ear = cyl(0.1, 0.1, 0.08, accent, { x: sx * 0.43 }, 16); ear.rotation.z = Math.PI / 2; head.add(ear); }
  head.add(cyl(0.015, 0.015, 0.22, dark, { y: 0.4 }, 6));
  const bulb = mesh(new THREE.SphereGeometry(0.06, 14, 10), eyeMat, { y: 0.53, cast: false });
  head.add(bulb);
  const ringMat = new THREE.MeshBasicMaterial({ color: col.clone().multiplyScalar(2.0), transparent: true, opacity: 0.9, side: THREE.DoubleSide });
  const ring = new THREE.Mesh(new THREE.RingGeometry(0.62, 0.71, 64), ringMat);
  ring.rotation.x = -Math.PI / 2; ring.position.y = 0.012;
  robot.add(ring);
  const glow = new THREE.Mesh(new THREE.PlaneGeometry(2.4, 2.4), new THREE.MeshBasicMaterial({ map: radialTexture(`rgba(${(col.r * 255) | 0},${(col.g * 255) | 0},${(col.b * 255) | 0},0.5)`), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
  glow.rotation.x = -Math.PI / 2; glow.position.y = 0.01;
  robot.add(glow);
  const hit = new THREE.Mesh(new THREE.BoxGeometry(1.1, 2.1, 1.1), new THREE.MeshBasicMaterial({ visible: false }));
  hit.position.y = 1.05; hit.userData.agentId = agent.id;
  robot.add(hit);

  const tag = document.createElement('div');
  tag.className = 'tag'; tag.dataset.agent = agent.id;
  tag.innerHTML = `<span class="tag-dot" style="background:${agent.color}"></span><span class="tag-name">${agent.name}</span><span class="tag-state"></span>`;
  const tagObj = new CSS2DObject(tag);
  tagObj.position.set(0, 2.05, 0);
  robot.add(tagObj);

  const phase = index * 1.37;
  let working = false, lastStatus = null;
  let blinkAt = 2 + Math.random() * 4;
  let layout = null;

  function setData(d) {
    if (d.status !== lastStatus) {
      lastStatus = d.status;
      working = d.status === 'working';
      tag.classList.toggle('working', working);
      tag.querySelector('.tag-state').textContent = working ? 'working' : 'idle';
    }
    layout = screenCanvas.draw(d);
    const [dx, dy] = px2(layout.dot.x, layout.dot.y);
    ovDot.position.set(dx, dy, ovDot.position.z);
    ovDot.scale.setScalar((13 / canvasW) * SW);
    ovDot.visible = working;
    const [cx, cy] = px2(layout.cursor.x + 9, layout.cursor.y + layout.cursor.h / 2);
    ovCursor.position.set(cx, cy, ovCursor.position.z);
    ovCursor.scale.set((14 / canvasW) * SW, (layout.cursor.h / canvasH) * SH, 1);
    ovCursor.visible = ovScan.visible = working;
    smat.color.setScalar(working ? 1.0 : 0.62);
  }

  function update(t) {
    body.position.y = 0.5 + Math.sin(t * 2.2 + phase) * 0.035;
    if (working) {
      head.rotation.y = THREE.MathUtils.lerp(head.rotation.y, -0.25 + Math.sin(t * 0.8 + phase) * 0.12, 0.08);
      head.rotation.x = THREE.MathUtils.lerp(head.rotation.x, 0.2, 0.08);
      arms[0].rotation.x = -1.05 + Math.sin(t * 16 + phase) * 0.14;
      arms[1].rotation.x = -1.05 + Math.sin(t * 16 + phase + Math.PI) * 0.14;
      eyeMat.color.copy(col).multiplyScalar(2.4 + Math.sin(t * 9) * 0.5);
      ringMat.opacity = 0.75 + Math.sin(t * 5) * 0.25;
      ring.scale.setScalar(1 + Math.sin(t * 3) * 0.05);
      const pulse = 0.5 + 0.5 * Math.sin(t * 4);
      ovDot.material.opacity = 0.35 + pulse * 0.65;
      ovCursor.visible = Math.floor(t * 2.2) % 2 === 0;
      ovScan.position.y = SH / 2 - ((t * 0.18) % 1) * SH;
    } else {
      head.rotation.y = THREE.MathUtils.lerp(head.rotation.y, Math.sin(t * 0.55 + phase) * 0.6, 0.05);
      head.rotation.x = THREE.MathUtils.lerp(head.rotation.x, 0, 0.05);
      arms[0].rotation.x = THREE.MathUtils.lerp(arms[0].rotation.x, Math.sin(t * 1.6 + phase) * 0.08, 0.1);
      arms[1].rotation.x = THREE.MathUtils.lerp(arms[1].rotation.x, -Math.sin(t * 1.6 + phase) * 0.08, 0.1);
      eyeMat.color.copy(col).multiplyScalar(1.5);
      ringMat.opacity = 0.4;
      ring.scale.setScalar(1);
    }
    const blinking = t > blinkAt && t < blinkAt + 0.12;
    eyes.forEach((e) => (e.scale.y = blinking ? 0.15 : 1));
    if (t > blinkAt + 0.12) blinkAt = t + 2.5 + Math.random() * 4;
    bulb.scale.setScalar(1 + Math.sin(t * 4 + phase) * 0.15);
  }

  // camera framing for the focus view: look straight at the screen
  function screenView() {
    scr.updateWorldMatrix(true, false);
    const center = new THREE.Vector3().setFromMatrixPosition(scr.matrixWorld);
    const normal = new THREE.Vector3(0, 0, 1).applyQuaternion(scr.getWorldQuaternion(new THREE.Quaternion()));
    return { center, normal, width: SW, height: SH };
  }
  return { agent, hit, frame, tag, setData, update, screenView, worldPos: () => robot.getWorldPosition(new THREE.Vector3()) };
}

// ---------- public ----------
export function buildWorld(scene, agents, { renderer, camPos, rooms }) {
  M = makeMaterials();
  scene.background = new THREE.Color(0x05051a);
  scene.environment = makeEnvironment(renderer);
  scene.environmentIntensity = 0.45;

  // lighting: warm interior key + cool moon rim + festive room glows
  scene.add(new THREE.HemisphereLight(0x7a7fe0, 0x1a1030, 0.55));
  const key = new THREE.DirectionalLight(0xffe2c4, 1.35);
  key.position.set(10, 17, 13);
  key.castShadow = true;
  key.shadow.mapSize.set(2048, 2048);
  Object.assign(key.shadow.camera, { left: -19, right: 19, top: 14, bottom: -14, near: 1, far: 60 });
  key.shadow.bias = -0.0004; key.shadow.normalBias = 0.03;
  scene.add(key);
  const moon = new THREE.DirectionalLight(0x8fa6ff, 0.4);
  moon.position.set(-18, 10, -22);
  scene.add(moon);
  const roomLights = [[-10, 0], [0, 0.5], [10, 0]].map(([x, z]) => { const l = new THREE.PointLight(0xffa25a, 9, 12, 1.8); l.position.set(x, 4.6, z); scene.add(l); return l; });
  const feedLight = new THREE.PointLight(0x7c5cff, 7, 9, 1.8);
  feedLight.position.set(0, 3.5, -6.5);
  scene.add(feedLight);

  const ocean = buildOcean(scene);
  buildShell(scene);

  // room labels
  for (const r of rooms) {
    const el = document.createElement('div');
    el.className = 'room-label';
    el.textContent = r.name;
    const o = new CSS2DObject(el);
    o.position.set((r.x0 + r.x1) / 2, 0.05, BZ - 0.6);
    scene.add(o);
  }

  // --- Trading Room (x -15..-5)
  rug(scene, -11.2, 4.4, 5.0, 3.0, M.rugIndigo);
  sofa(scene, -11.2, 3.8, 0, M.leather, 2.6);
  coffeeTable(scene, -11.2, 5.4, 0.55);
  floorLamp(scene, -13.7, 3.3);
  bookshelf(scene, -6.6, -8.4);
  plant(scene, -14.2, -8.2, 1.15, 1);
  plant(scene, -14.2, 7.9, 1.0, 0);
  plant(scene, -5.8, 2.6, 0.8, 0);

  // --- Command Center (x -5..5)
  const feed = buildFeedScreen(scene, agents);
  rug(scene, 1.6, 1.0, 5.6, 3.2, M.rugSand);
  plant(scene, -4.2, -8.2, 1.0, 0);
  plant(scene, 4.2, -8.2, 1.0, 0);

  // --- Creative Studio (x 5..15)
  stickyEasel(scene, 12.4, -7.9, -0.15);
  bookshelf(scene, 14.6, -4.0, -Math.PI / 2);
  rug(scene, 10.8, 4.9, 2.6, 0, M.rugIndigo, true);
  coffeeTable(scene, 10.8, 4.9, 0.7);
  sofa(scene, 10.8, 3.2, 0, M.velvetPlum, 2.4);
  armchair(scene, 8.6, 5.3, Math.PI / 2, M.velvetTeal);
  armchair(scene, 13.0, 5.3, -Math.PI / 2, M.velvetTeal);
  floorLamp(scene, 14.1, 2.6);
  plant(scene, 5.9, -8.2, 1.1, 1);
  plant(scene, 14.3, 8.0, 1.0, 0);

  // --- festive decor
  const fest = buildFestive(scene);
  const V = (x, y, z) => new THREE.Vector3(x, y, z);
  fest.stringLights([
    [V(-BX + 0.2, 6.75, -BZ + 0.25), V(BX - 0.1, 6.75, -BZ + 0.25), 0.35, 2.5],
    [V(-BX + 0.25, 6.75, BZ - 0.1), V(-BX + 0.25, 6.75, -BZ + 0.2), 0.35, 3],
    [V(-3.6, 5.45, -BZ + 0.55), V(3.6, 5.45, -BZ + 0.55), 0.18, 1.2],
  ]);
  fest.garlands([
    [V(-5 + 0.09, 2.92, 3.15), V(-5 + 0.09, 2.92, -BZ + 0.1), 0.32, 1.22],
    [V(-5 - 0.09, 2.92, 3.15), V(-5 - 0.09, 2.92, -BZ + 0.1), 0.32, 1.22],
    [V(5 + 0.09, 2.92, 3.15), V(5 + 0.09, 2.92, -BZ + 0.1), 0.32, 1.22],
    [V(5 - 0.09, 2.92, 3.15), V(5 - 0.09, 2.92, -BZ + 0.1), 0.32, 1.22],
  ]);
  // lanterns (akash kandil): 2 per room + extra in studio
  fest.lantern(-12.6, 5.0, -4.5, '#ff7b00');
  fest.lantern(-8.0, 5.3, 1.6, '#ff006e');
  fest.lantern(-3.2, 5.6, 2.4, '#c77dff');
  fest.lantern(3.4, 5.2, -2.6, '#ff7b00');
  fest.lantern(9.2, 5.0, -5.6, '#ff006e');
  fest.lantern(12.6, 5.4, 1.0, '#ffb703');
  fest.lantern(7.0, 5.7, 2.8, '#c77dff', 0.8);
  // rangoli + diyas in each room
  fest.rangoli(-7.7, 6.2, 1.3, 0);
  fest.rangoli(-1.4, 5.6, 1.5, 1);
  fest.rangoli(6.9, 0.9, 1.05, 2);
  // diyas along the glass sill + on GK's desk
  for (let x = -13.75; x <= 14; x += 2.5) fest.diya(x, -BZ + 0.45, 0);
  fest.diya(agents[0].desk.x - 1.3, agents[0].desk.z + 0.35, 0.79);
  fest.diya(agents[0].desk.x - 1.05, agents[0].desk.z + 0.4, 0.79);

  const stations = new Map();
  agents.forEach((a, i) => stations.set(a.id, buildStation(scene, a, i, camPos)));

  return {
    wallScreen: feed,
    stations,
    hitTargets: [...stations.values()].flatMap((s) => [s.hit, s.frame]),
    update(t) {
      ocean.update(t);
      fest.update(t);
      stations.forEach((s) => s.update(t));
      roomLights.forEach((l, i) => (l.intensity = 9 + Math.sin(t * 3 + i * 2) * 0.6));
    },
  };
}
