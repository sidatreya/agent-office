import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';

// Room spans x ∈ [-12, 12], z ∈ [-9, 9], walls 7 high (back wall z=-9, left wall x=-12)
const RX = 12, RZ = 9, RH = 7;

const C = {
  floor: 0x16163a,
  wall: 0x1c1b48,
  wallDark: 0x15143a,
  neon: '#8b5cf6',
  neon2: '#c084fc',
  deskWhite: 0xf1f2fb,
};

// ---------- helpers ----------
const std = (color, o = {}) => new THREE.MeshStandardMaterial({ color, roughness: 0.6, metalness: 0.05, ...o });
const neonMat = (color, k = 3) => new THREE.MeshBasicMaterial({ color: new THREE.Color(color).multiplyScalar(k) });

function mesh(geo, mat, { x = 0, y = 0, z = 0, cast = true, receive = true } = {}) {
  const m = new THREE.Mesh(geo, mat);
  m.position.set(x, y, z);
  m.castShadow = cast;
  m.receiveShadow = receive;
  return m;
}

function radialTexture(inner = 'rgba(255,255,255,1)', outer = 'rgba(255,255,255,0)') {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const g = c.getContext('2d');
  const grd = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  grd.addColorStop(0, inner);
  grd.addColorStop(1, outer);
  g.fillStyle = grd;
  g.fillRect(0, 0, 128, 128);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

function roundRect(g, x, y, w, h, r) {
  g.beginPath();
  g.moveTo(x + r, y);
  g.arcTo(x + w, y, x + w, y + h, r);
  g.arcTo(x + w, y + h, x, y + h, r);
  g.arcTo(x, y + h, x, y, r);
  g.arcTo(x, y, x + w, y, r);
  g.closePath();
}

const pad2 = (n) => String(n).padStart(2, '0');
export const fmtTime = (d) => `${pad2(d.getHours())}:${pad2(d.getMinutes())}:${pad2(d.getSeconds())}`;

// ---------- room ----------
function buildRoom(scene) {
  // floor
  scene.add(mesh(new THREE.BoxGeometry(RX * 2, 0.2, RZ * 2), std(C.floor, { roughness: 0.75 }), { y: -0.1, cast: false }));

  // floor tile grid (subtle)
  const pts = [];
  for (let x = -RX; x <= RX; x += 2) pts.push(x, 0.006, -RZ, x, 0.006, RZ);
  for (let z = -RZ; z <= RZ; z += 2) pts.push(-RX, 0.006, z, RX, 0.006, z);
  const gridGeo = new THREE.BufferGeometry();
  gridGeo.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
  scene.add(new THREE.LineSegments(gridGeo, new THREE.LineBasicMaterial({ color: 0x3b3a85, transparent: true, opacity: 0.35 })));

  // walls
  const wallMat = std(C.wall, { roughness: 0.9 });
  scene.add(mesh(new THREE.BoxGeometry(RX * 2 + 0.3, RH, 0.3), wallMat, { x: -0.15, y: RH / 2, z: -RZ - 0.15, cast: false }));
  scene.add(mesh(new THREE.BoxGeometry(0.3, RH, RZ * 2), wallMat, { x: -RX - 0.15, y: RH / 2, z: 0, cast: false }));

  // wall paneling: vertical seams
  const seamMat = std(C.wallDark, { roughness: 1 });
  for (let x = -10; x <= 10; x += 4) {
    if (Math.abs(x) < 6) continue; // keep the screen area clean
    scene.add(mesh(new THREE.BoxGeometry(0.06, RH, 0.04), seamMat, { x, y: RH / 2, z: -RZ + 0.02, cast: false }));
  }
  for (let z = -6; z <= 8; z += 4) scene.add(mesh(new THREE.BoxGeometry(0.04, RH, 0.06), seamMat, { x: -RX + 0.02, y: RH / 2, z, cast: false }));

  // neon edges
  const n1 = neonMat(C.neon, 3.2);
  const n2 = neonMat(C.neon2, 2.2);
  const add = (geo, mat, p) => scene.add(mesh(geo, mat, { ...p, cast: false, receive: false }));
  // wall/floor junctions
  add(new THREE.BoxGeometry(RX * 2, 0.06, 0.06), n1, { x: 0, y: 0.04, z: -RZ + 0.03 });
  add(new THREE.BoxGeometry(0.06, 0.06, RZ * 2), n1, { x: -RX + 0.03, y: 0.04, z: 0 });
  // wall tops
  add(new THREE.BoxGeometry(RX * 2 + 0.3, 0.07, 0.07), n2, { x: -0.15, y: RH, z: -RZ + 0.02 });
  add(new THREE.BoxGeometry(0.07, 0.07, RZ * 2), n2, { x: -RX + 0.02, y: RH, z: 0 });
  // corner + right wall end
  add(new THREE.BoxGeometry(0.07, RH, 0.07), n2, { x: -RX + 0.03, y: RH / 2, z: -RZ + 0.03 });
  add(new THREE.BoxGeometry(0.07, RH, 0.07), n2, { x: RX, y: RH / 2, z: -RZ + 0.02 });
  add(new THREE.BoxGeometry(0.07, RH, 0.07), n2, { x: -RX + 0.02, y: RH / 2, z: RZ });
  // accent line on the back wall right
  add(new THREE.BoxGeometry(5.4, 0.04, 0.04), n1, { x: 8.7, y: 1.2, z: -RZ + 0.03 });
  add(new THREE.BoxGeometry(5.4, 0.04, 0.04), n1, { x: -8.7, y: 1.2, z: -RZ + 0.03 });
  // floor outer edges (front + right) — glowing rim like the reference
  const rim = neonMat('#a78bfa', 1.5);
  add(new THREE.BoxGeometry(RX * 2, 0.08, 0.08), rim, { x: 0, y: 0.0, z: RZ });
  add(new THREE.BoxGeometry(0.08, 0.08, RZ * 2), rim, { x: RX, y: 0.0, z: 0 });

  // floor glow pools along the wall
  const glowTex = radialTexture('rgba(139,92,246,0.55)', 'rgba(139,92,246,0)');
  const pool = new THREE.Mesh(
    new THREE.PlaneGeometry(14, 5),
    new THREE.MeshBasicMaterial({ map: glowTex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending })
  );
  pool.rotation.x = -Math.PI / 2;
  pool.position.set(0, 0.012, -RZ + 1.2);
  scene.add(pool);
}

// ---------- props ----------
function buildBookshelf(scene) {
  const g = new THREE.Group();
  const wood = std(0xe9e7f5, { roughness: 0.5 });
  const W = 2.6, H = 3.4, D = 0.7;
  g.add(mesh(new THREE.BoxGeometry(0.1, H, D), wood, { x: -W / 2, y: H / 2 }));
  g.add(mesh(new THREE.BoxGeometry(0.1, H, D), wood, { x: W / 2, y: H / 2 }));
  g.add(mesh(new THREE.BoxGeometry(W, 0.06, D), wood, { y: H }));
  g.add(mesh(new THREE.BoxGeometry(W, H, 0.05), std(0x2a275e), { y: H / 2, z: -D / 2 }));
  const colors = [0xef4444, 0xf59e0b, 0x22c55e, 0x3b82f6, 0xa855f7, 0xec4899, 0x14b8a6, 0xfacc15, 0xf97316];
  const shelves = 4;
  for (let s = 0; s < shelves; s++) {
    const y = 0.12 + s * (H / shelves);
    g.add(mesh(new THREE.BoxGeometry(W, 0.06, D), wood, { y }));
    let x = -W / 2 + 0.12;
    while (x < W / 2 - 0.25) {
      const bw = 0.1 + Math.random() * 0.1;
      const bh = 0.45 + Math.random() * 0.3;
      const b = mesh(new THREE.BoxGeometry(bw, bh, 0.5), std(colors[(Math.random() * colors.length) | 0], { roughness: 0.55 }), { x: x + bw / 2, y: y + 0.03 + bh / 2 });
      if (Math.random() < 0.12) b.rotation.z = 0.25;
      g.add(b);
      x += bw + 0.015;
    }
  }
  g.position.set(-8.6, 0, -RZ + 0.45);
  scene.add(g);
}

function buildPlant(scene, x, z, s = 1) {
  const g = new THREE.Group();
  g.add(mesh(new THREE.CylinderGeometry(0.32, 0.24, 0.55, 20), std(0xeceaf7, { roughness: 0.4 }), { y: 0.275 }));
  g.add(mesh(new THREE.CylinderGeometry(0.29, 0.29, 0.04, 20), std(0x2b1d14), { y: 0.54 }));
  const leafMat = std(0x22c55e, { emissive: 0x16a34a, emissiveIntensity: 0.35, roughness: 0.5 });
  const leafMat2 = std(0x4ade80, { emissive: 0x22c55e, emissiveIntensity: 0.3, roughness: 0.5 });
  const n = 11;
  for (let i = 0; i < n; i++) {
    const leaf = mesh(new THREE.ConeGeometry(0.07, 0.95 + Math.random() * 0.4, 6), i % 2 ? leafMat : leafMat2);
    const a = (i / n) * Math.PI * 2;
    const tilt = 0.25 + Math.random() * 0.45;
    leaf.position.set(Math.cos(a) * 0.12, 1.0, Math.sin(a) * 0.12);
    leaf.rotation.set(Math.sin(a) * tilt, 0, -Math.cos(a) * tilt);
    g.add(leaf);
  }
  g.scale.setScalar(s);
  g.position.set(x, 0, z);
  scene.add(g);
}

function buildWindow(scene) {
  // night-city window on the left wall
  const c = document.createElement('canvas');
  c.width = 512; c.height = 384;
  const g = c.getContext('2d');
  const sky = g.createLinearGradient(0, 0, 0, 384);
  sky.addColorStop(0, '#0b0b2a'); sky.addColorStop(1, '#3b1d6e');
  g.fillStyle = sky; g.fillRect(0, 0, 512, 384);
  for (let i = 0; i < 70; i++) { g.fillStyle = `rgba(255,255,255,${Math.random() * 0.8})`; g.fillRect(Math.random() * 512, Math.random() * 200, 2, 2); }
  g.fillStyle = '#fde68a'; g.beginPath(); g.arc(410, 70, 26, 0, Math.PI * 2); g.fill();
  let x = 0;
  while (x < 512) {
    const w = 30 + Math.random() * 50, h = 90 + Math.random() * 200;
    g.fillStyle = '#120f30'; g.fillRect(x, 384 - h, w, h);
    for (let wy = 384 - h + 10; wy < 380; wy += 14) for (let wx = x + 6; wx < x + w - 6; wx += 10)
      if (Math.random() < 0.35) { g.fillStyle = Math.random() < 0.5 ? '#facc15' : '#f0abfc'; g.fillRect(wx, wy, 4, 6); }
    x += w + 4;
  }
  const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace;
  const grp = new THREE.Group();
  grp.add(mesh(new THREE.BoxGeometry(0.12, 3.0, 4.2), std(0xe9e7f5), { cast: false }));
  const glass = new THREE.Mesh(new THREE.PlaneGeometry(3.9, 2.7), new THREE.MeshBasicMaterial({ map: tex }));
  glass.rotation.y = Math.PI / 2; glass.position.x = 0.07;
  grp.add(glass);
  grp.add(mesh(new THREE.BoxGeometry(0.1, 0.06, 3.9), std(0xe9e7f5), { x: 0.09, cast: false }));
  grp.add(mesh(new THREE.BoxGeometry(0.1, 2.7, 0.06), std(0xe9e7f5), { x: 0.09, cast: false }));
  grp.position.set(-RX + 0.05, 3.9, -2.2);
  scene.add(grp);
}

function buildStickyBoard(scene) {
  const c = document.createElement('canvas');
  c.width = 768; c.height = 512;
  const g = c.getContext('2d');
  g.fillStyle = '#efeaf9'; g.fillRect(0, 0, 768, 512);
  g.strokeStyle = '#c4b5fd'; g.lineWidth = 10; g.strokeRect(5, 5, 758, 502);
  const notes = [
    ['#fde68a', 'Ship office v1'], ['#a7f3d0', 'NIFTY levels\n25,400 / 25,150'], ['#fbcfe8', 'Chair v3\nfeedback'],
    ['#bfdbfe', 'Post Fri\n9:00 AM'], ['#ddd6fe', 'India-first\nGTM'], ['#fed7aa', 'KB cleanup'],
    ['#fde68a', 'Weekly\nreview'], ['#a7f3d0', 'Backtest\nRSI(14)'],
  ];
  notes.forEach(([col, text], i) => {
    const cx = 40 + (i % 4) * 180 + (Math.random() * 16 - 8);
    const cy = 40 + Math.floor(i / 4) * 230 + (Math.random() * 16 - 8);
    g.save(); g.translate(cx + 75, cy + 80); g.rotate((Math.random() - 0.5) * 0.12); g.translate(-75, -80);
    g.fillStyle = 'rgba(0,0,0,0.15)'; g.fillRect(6, 8, 150, 160);
    g.fillStyle = col; g.fillRect(0, 0, 150, 160);
    g.fillStyle = '#ef4444'; g.beginPath(); g.arc(75, 12, 7, 0, Math.PI * 2); g.fill();
    g.fillStyle = '#1f2937'; g.font = 'bold 24px system-ui, sans-serif';
    text.split('\n').forEach((ln, j) => g.fillText(ln, 12, 60 + j * 30));
    g.restore();
  });
  const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace;
  const board = new THREE.Mesh(new THREE.PlaneGeometry(3.6, 2.4), new THREE.MeshStandardMaterial({ map: tex, roughness: 0.8, emissive: 0xffffff, emissiveMap: tex, emissiveIntensity: 0.25 }));
  board.position.set(8.4, 4.1, -RZ + 0.03);
  scene.add(board);
}

function buildLounge(scene) {
  const g = new THREE.Group();
  const white = std(0xf1f2fb, { roughness: 0.35 });
  g.add(mesh(new THREE.CylinderGeometry(1.35, 1.35, 0.1, 48), white, { y: 0.78 }));
  g.add(mesh(new THREE.CylinderGeometry(0.1, 0.12, 0.75, 16), std(0xa5a3c9), { y: 0.39 }));
  g.add(mesh(new THREE.CylinderGeometry(0.55, 0.55, 0.05, 32), std(0xa5a3c9), { y: 0.025 }));
  // little laptop + mug on the table
  g.add(mesh(new THREE.CylinderGeometry(0.09, 0.08, 0.2, 16), std(0xf472b6), { x: 0.4, y: 0.93, z: 0.3 }));
  const chairMat = std(0x3b3891, { roughness: 0.55 });
  const chairMat2 = std(0x4f46e5, { roughness: 0.55 });
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * Math.PI * 2 + Math.PI / 4;
    const ch = new THREE.Group();
    ch.add(mesh(new THREE.BoxGeometry(0.75, 0.14, 0.75), i % 2 ? chairMat : chairMat2, { y: 0.5 }));
    ch.add(mesh(new THREE.BoxGeometry(0.75, 0.75, 0.12), i % 2 ? chairMat : chairMat2, { y: 0.9, z: -0.33 }));
    ch.add(mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.45, 8), std(0xa5a3c9), { y: 0.22 }));
    ch.position.set(Math.cos(a) * 2.0, 0, Math.sin(a) * 2.0);
    ch.lookAt(0, 0, 0);
    ch.rotateY(Math.PI);
    g.add(ch);
  }
  // rug
  const rug = new THREE.Mesh(new THREE.CircleGeometry(3.0, 64), std(0x2a2766, { roughness: 1 }));
  rug.rotation.x = -Math.PI / 2; rug.position.y = 0.008; rug.receiveShadow = true;
  g.add(rug);
  const rugRing = new THREE.Mesh(new THREE.RingGeometry(2.95, 3.05, 64), neonMat('#6366f1', 1.4));
  rugRing.rotation.x = -Math.PI / 2; rugRing.position.y = 0.012;
  g.add(rugRing);
  g.position.set(8.4, 0, 3.6);
  scene.add(g);
}

// ---------- wall screen (live activity feed) ----------
function buildWallScreen(scene, agents) {
  const W = 2048, H = 900;
  const c = document.createElement('canvas');
  c.width = W; c.height = H;
  const g = c.getContext('2d');
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;

  const grp = new THREE.Group();
  grp.add(mesh(new THREE.BoxGeometry(10.0, 4.6, 0.16), std(0x0b0b1e, { roughness: 0.3, metalness: 0.4 }), { cast: false }));
  const screen = new THREE.Mesh(new THREE.PlaneGeometry(9.7, 4.3), new THREE.MeshBasicMaterial({ map: tex, toneMapped: false }));
  screen.position.z = 0.085;
  grp.add(screen);
  const frameGlow = neonMat('#7c3aed', 2.5);
  grp.add(mesh(new THREE.BoxGeometry(10.1, 0.05, 0.05), frameGlow, { y: -2.32, z: 0.08, cast: false }));
  grp.position.set(0, 4.25, -RZ + 0.1);
  scene.add(grp);

  const nameById = Object.fromEntries(agents.map((a) => [a.id, a]));

  function draw(events, getState) {
    const bg = g.createLinearGradient(0, 0, W, H);
    bg.addColorStop(0, '#0c0d2b'); bg.addColorStop(1, '#141038');
    g.fillStyle = bg; g.fillRect(0, 0, W, H);
    // scanlines
    g.fillStyle = 'rgba(255,255,255,0.018)';
    for (let y = 0; y < H; y += 6) g.fillRect(0, y, W, 2);

    // header
    g.fillStyle = '#ef4444';
    g.beginPath(); g.arc(70, 72, 14, 0, Math.PI * 2); g.fill();
    g.fillStyle = '#e9e7ff'; g.font = '700 50px system-ui, sans-serif';
    g.fillText('LIVE ACTIVITY FEED', 100, 90);
    g.fillStyle = '#8b8bc4'; g.font = '500 44px ui-monospace, Menlo, monospace';
    const clock = fmtTime(new Date());
    g.textAlign = 'right'; g.fillText(clock, W - 50, 90); g.textAlign = 'left';
    g.fillStyle = '#2d2a6e'; g.fillRect(50, 125, W - 100, 3);

    // feed lines
    const colW = 1440;
    const lines = events.slice(-10);
    const lh = 72;
    lines.forEach((e, i) => {
      const y = 190 + i * lh;
      const a = nameById[e.agentId];
      const fresh = i === lines.length - 1;
      if (fresh) { g.fillStyle = 'rgba(139,92,246,0.18)'; roundRect(g, 40, y - 48, colW - 20, 64, 10); g.fill(); }
      g.fillStyle = '#6f6fa8'; g.font = '500 36px ui-monospace, Menlo, monospace';
      g.fillText(fmtTime(e.ts), 60, y);
      g.fillStyle = a?.color || '#fff'; g.font = '700 36px system-ui, sans-serif';
      const nm = a?.name || e.agentId;
      g.fillText(nm, 270, y);
      const nw = g.measureText(nm).width;
      g.fillStyle = e.type === 'status' ? (e.status === 'working' ? '#86efac' : '#cbd5e1') : '#dcdcf5';
      g.font = '400 36px system-ui, sans-serif';
      let msg = e.message;
      const maxW = colW - 300 - nw - 30;
      while (g.measureText(msg).width > maxW && msg.length > 4) msg = msg.slice(0, -2);
      if (msg !== e.message) msg = msg.trimEnd() + '\u2026';
      g.fillText(msg, 270 + nw + 22, y);
    });

    // status list (right column)
    const sx = colW + 70;
    g.fillStyle = '#1a1848'; roundRect(g, sx - 20, 150, W - sx - 30, H - 190, 18); g.fill();
    g.fillStyle = '#8b8bc4'; g.font = '700 34px system-ui, sans-serif';
    g.fillText('AGENTS', sx + 10, 210);
    agents.forEach((a, i) => {
      const s = getState(a.id);
      const y = 290 + i * 110;
      g.fillStyle = a.color; g.beginPath(); g.arc(sx + 24, y - 12, 14, 0, Math.PI * 2); g.fill();
      g.fillStyle = '#ecebff'; g.font = '600 36px system-ui, sans-serif';
      let nm = a.name; while (g.measureText(nm).width > 330 && nm.length > 3) nm = nm.slice(0, -1);
      g.fillText(nm === a.name ? nm : nm + '\u2026', sx + 56, y);
      g.fillStyle = s.status === 'working' ? '#4ade80' : '#94a3b8'; g.font = '500 28px system-ui, sans-serif';
      g.fillText(s.status === 'working' ? '\u25CF working' : '\u25CB idle', sx + 56, y + 38);
    });
    tex.needsUpdate = true;
  }
  return { draw };
}

// ---------- monitor screens ----------
function makeMonitorScreen(color) {
  const c = document.createElement('canvas');
  c.width = 256; c.height = 160;
  const g = c.getContext('2d');
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  const palette = [color, '#e2e8f0', '#94a3b8', '#7dd3fc', '#f0abfc'];
  const rows = Array.from({ length: 40 }, () => ({ indent: (Math.random() * 4) | 0, w: 30 + Math.random() * 150, c: palette[(Math.random() * palette.length) | 0] }));
  let offset = 0;
  function draw(working, t) {
    g.fillStyle = working ? '#0b1230' : '#0a0a1c';
    g.fillRect(0, 0, 256, 160);
    if (working) {
      offset = (offset + 1) % rows.length;
      for (let i = 0; i < 12; i++) {
        const r = rows[(i + offset) % rows.length];
        g.fillStyle = r.c; g.globalAlpha = 0.9;
        g.fillRect(14 + r.indent * 14, 12 + i * 12, r.w, 6);
      }
      g.globalAlpha = 1;
      if (Math.floor(t * 3) % 2) { g.fillStyle = '#fff'; g.fillRect(16, 146, 10, 8); }
    } else {
      g.fillStyle = color; g.globalAlpha = 0.35;
      g.beginPath(); g.arc(128, 80, 26, 0, Math.PI * 2); g.fill();
      g.globalAlpha = 0.6; g.fillStyle = '#c7c7e8'; g.font = '600 20px system-ui, sans-serif'; g.textAlign = 'center';
      g.fillText('zz', 128, 87); g.textAlign = 'left'; g.globalAlpha = 1;
    }
    tex.needsUpdate = true;
  }
  return { tex, draw };
}

// ---------- robot + desk ----------
function buildStation(scene, agent, index) {
  const col = new THREE.Color(agent.color);
  const station = new THREE.Group();
  station.position.set(agent.desk.x, 0, agent.desk.z);
  scene.add(station);

  const wide = !!agent.desk.wide;
  const dw = wide ? 2.6 : 2.0;

  // desk
  const deskMat = std(C.deskWhite, { roughness: 0.35 });
  const desk = new THREE.Group();
  desk.add(mesh(new RoundedBoxGeometry(dw, 0.09, 1.0, 2, 0.03), deskMat, { y: 0.82 }));
  const legMat = std(0xb8b6dc, { metalness: 0.3, roughness: 0.4 });
  for (const sx of [-1, 1]) desk.add(mesh(new THREE.BoxGeometry(0.06, 0.8, 0.9), legMat, { x: sx * (dw / 2 - 0.08), y: 0.4 }));
  desk.add(mesh(new THREE.BoxGeometry(dw - 0.2, 0.32, 0.04), legMat, { y: 0.6, z: 0.42 }));
  // accent edge strip on the front of the desk
  desk.add(mesh(new THREE.BoxGeometry(dw, 0.025, 0.02), neonMat(agent.color, 1.6), { y: 0.79, z: 0.51, cast: false }));
  // keyboard
  desk.add(mesh(new THREE.BoxGeometry(0.62, 0.03, 0.2), std(0x2b2a55), { y: 0.88, z: -0.15 }));
  // mug
  desk.add(mesh(new THREE.CylinderGeometry(0.07, 0.06, 0.16, 12), std(col), { x: -dw / 2 + 0.25, y: 0.94, z: 0.15 }));
  station.add(desk);

  // monitors (screen on both faces so the camera can see the flicker)
  const screens = [];
  const monCount = wide ? 2 : 1;
  for (let m = 0; m < monCount; m++) {
    const mon = new THREE.Group();
    const { tex, draw } = makeMonitorScreen(agent.color);
    mon.add(mesh(new THREE.BoxGeometry(0.9, 0.58, 0.05), std(0x1e1d3d, { roughness: 0.3, metalness: 0.5 }), { y: 0.38 }));
    const smat = new THREE.MeshBasicMaterial({ map: tex, toneMapped: false });
    const s1 = new THREE.Mesh(new THREE.PlaneGeometry(0.82, 0.5), smat); s1.position.set(0, 0.38, 0.027);
    const s2 = new THREE.Mesh(new THREE.PlaneGeometry(0.82, 0.5), smat); s2.position.set(0, 0.38, -0.027); s2.rotation.y = Math.PI;
    mon.add(s1, s2);
    mon.add(mesh(new THREE.BoxGeometry(0.06, 0.2, 0.06), legMat, { y: 0.1 }));
    mon.add(mesh(new THREE.BoxGeometry(0.3, 0.02, 0.2), legMat, { y: 0.01 }));
    const mx = wide ? (m === 0 ? -0.62 : 0.62) : 0.55;
    mon.position.set(mx, 0.865, 0.12);
    mon.rotation.y = wide ? (m === 0 ? 0.35 : -0.35) : -0.35;
    station.add(mon);
    screens.push({ draw, mat: smat });
  }

  // robot (stands behind the desk, facing the camera / +z)
  const robot = new THREE.Group();
  robot.position.set(wide ? 0 : -0.15, 0, -0.9);
  robot.scale.setScalar(1.3);
  station.add(robot);
  const white = std(0xf4f4fc, { roughness: 0.35 });
  const accent = std(col, { roughness: 0.35, emissive: col, emissiveIntensity: 0.12 });
  const dark = std(0x16163a, { roughness: 0.2, metalness: 0.3 });
  const eyeMat = new THREE.MeshBasicMaterial({ color: col.clone().multiplyScalar(2.2) });

  const legs = new THREE.Group();
  for (const sx of [-1, 1]) {
    legs.add(mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.42, 12), dark, { x: sx * 0.15, y: 0.25 }));
    legs.add(mesh(new RoundedBoxGeometry(0.2, 0.1, 0.28, 2, 0.04), accent, { x: sx * 0.15, y: 0.05, z: 0.03 }));
  }
  robot.add(legs);

  const body = new THREE.Group();
  body.position.y = 0.5;
  robot.add(body);
  body.add(mesh(new RoundedBoxGeometry(0.66, 0.62, 0.48, 4, 0.16), accent, { y: 0.32 }));
  body.add(mesh(new RoundedBoxGeometry(0.38, 0.28, 0.06, 2, 0.05), white, { y: 0.32, z: 0.23 }));
  const chestLight = mesh(new THREE.CircleGeometry(0.05, 16), eyeMat, { y: 0.36, z: 0.265, cast: false });
  body.add(chestLight);

  // arms (pivot at shoulder)
  const arms = [];
  for (const sx of [-1, 1]) {
    const pivot = new THREE.Group();
    pivot.position.set(sx * 0.4, 0.52, 0);
    pivot.add(mesh(new THREE.CapsuleGeometry(0.075, 0.32, 4, 10), white, { y: -0.2 }));
    pivot.add(mesh(new THREE.SphereGeometry(0.09, 12, 10), accent, { y: -0.42 }));
    pivot.rotation.z = sx * 0.12;
    body.add(pivot);
    arms.push(pivot);
  }

  // head
  const head = new THREE.Group();
  head.position.y = 0.98;
  body.add(head);
  head.add(mesh(new RoundedBoxGeometry(0.82, 0.6, 0.62, 5, 0.2), white, { y: 0.0 }));
  head.add(mesh(new RoundedBoxGeometry(0.64, 0.36, 0.08, 4, 0.1), dark, { y: 0.0, z: 0.3, cast: false }));
  const eyes = [];
  for (const sx of [-1, 1]) {
    const e = mesh(new THREE.CapsuleGeometry(0.045, 0.06, 4, 8), eyeMat, { x: sx * 0.14, y: 0.01, z: 0.345, cast: false });
    head.add(e);
    eyes.push(e);
  }
  // ear pods
  for (const sx of [-1, 1]) {
    const ear = mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.08, 16), accent, { x: sx * 0.43 });
    ear.rotation.z = Math.PI / 2;
    head.add(ear);
  }
  head.add(mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.22, 6), dark, { y: 0.4 }));
  const bulb = mesh(new THREE.SphereGeometry(0.06, 14, 10), eyeMat, { y: 0.53, cast: false });
  head.add(bulb);

  // floor ring + glow
  const ringMat = new THREE.MeshBasicMaterial({ color: col.clone().multiplyScalar(2.0), transparent: true, opacity: 0.9, side: THREE.DoubleSide });
  const ring = new THREE.Mesh(new THREE.RingGeometry(0.62, 0.72, 64), ringMat);
  ring.rotation.x = -Math.PI / 2; ring.position.y = 0.015;
  robot.add(ring);
  const glow = new THREE.Mesh(
    new THREE.PlaneGeometry(2.4, 2.4),
    new THREE.MeshBasicMaterial({ map: radialTexture(`rgba(${(col.r * 255) | 0},${(col.g * 255) | 0},${(col.b * 255) | 0},0.55)`, 'rgba(0,0,0,0)'), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending })
  );
  glow.rotation.x = -Math.PI / 2; glow.position.y = 0.013;
  robot.add(glow);

  // invisible hit box for easy clicking
  const hit = new THREE.Mesh(new THREE.BoxGeometry(1.1, 2.1, 1.1), new THREE.MeshBasicMaterial({ visible: false }));
  hit.position.y = 1.05;
  robot.add(hit);
  hit.userData.agentId = agent.id;

  // name tag
  const tag = document.createElement('div');
  tag.className = 'tag';
  tag.dataset.agent = agent.id;
  tag.innerHTML = `<span class="tag-dot" style="background:${agent.color}"></span><span class="tag-name">${agent.name}</span><span class="tag-state"></span>`;
  const tagObj = new CSS2DObject(tag);
  tagObj.position.set(0, 2.05, 0);
  robot.add(tagObj);

  const phase = index * 1.37;
  let lastScreen = -1;
  let working = false;
  let blinkAt = 2 + Math.random() * 4;

  function setStatus(status) {
    working = status === 'working';
    tag.classList.toggle('working', working);
    tag.querySelector('.tag-state').textContent = working ? 'working' : 'idle';
    screens.forEach((s) => s.draw(working, 0));
  }

  function update(t) {
    const bob = Math.sin(t * 2.2 + phase) * 0.035;
    body.position.y = 0.5 + bob;
    if (working) {
      head.rotation.y = THREE.MathUtils.lerp(head.rotation.y, -0.35 + Math.sin(t * 0.8 + phase) * 0.12, 0.08);
      head.rotation.x = THREE.MathUtils.lerp(head.rotation.x, 0.18, 0.08);
      arms[0].rotation.x = -1.05 + Math.sin(t * 16 + phase) * 0.14;
      arms[1].rotation.x = -1.05 + Math.sin(t * 16 + phase + Math.PI) * 0.14;
      eyeMat.color.copy(col).multiplyScalar(2.4 + Math.sin(t * 9) * 0.6);
      ringMat.opacity = 0.75 + Math.sin(t * 5) * 0.25;
      ring.scale.setScalar(1 + Math.sin(t * 3) * 0.05);
      screens.forEach((s) => s.mat.color.setScalar(0.85 + Math.random() * 0.25));
      const step = Math.floor(t * 8);
      if (step !== lastScreen) { lastScreen = step; screens.forEach((s) => s.draw(true, t)); }
    } else {
      head.rotation.y = THREE.MathUtils.lerp(head.rotation.y, Math.sin(t * 0.55 + phase) * 0.6, 0.05);
      head.rotation.x = THREE.MathUtils.lerp(head.rotation.x, 0, 0.05);
      arms[0].rotation.x = THREE.MathUtils.lerp(arms[0].rotation.x, Math.sin(t * 1.6 + phase) * 0.08, 0.1);
      arms[1].rotation.x = THREE.MathUtils.lerp(arms[1].rotation.x, -Math.sin(t * 1.6 + phase) * 0.08, 0.1);
      eyeMat.color.copy(col).multiplyScalar(1.5);
      ringMat.opacity = 0.45;
      ring.scale.setScalar(1);
      screens.forEach((s) => s.mat.color.setScalar(0.55));
    }
    // blink
    const blinking = t > blinkAt && t < blinkAt + 0.12;
    eyes.forEach((e) => (e.scale.y = blinking ? 0.15 : 1));
    if (t > blinkAt + 0.12) blinkAt = t + 2.5 + Math.random() * 4;
    bulb.scale.setScalar(1 + Math.sin(t * 4 + phase) * 0.15);
  }

  const worldPos = () => robot.getWorldPosition(new THREE.Vector3());
  return { agent, robot, hit, tag, setStatus, update, worldPos };
}

// ---------- public ----------
export function buildWorld(scene, agents) {
  scene.background = new THREE.Color(0x06061a);
  scene.fog = new THREE.Fog(0x06061a, 38, 70);

  // lights
  scene.add(new THREE.HemisphereLight(0x9a8cff, 0x1a1440, 0.9));
  const sun = new THREE.DirectionalLight(0xf2eeff, 1.6);
  sun.position.set(9, 16, 10);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  Object.assign(sun.shadow.camera, { left: -16, right: 16, top: 14, bottom: -14, near: 1, far: 50 });
  sun.shadow.bias = -0.0005;
  sun.shadow.normalBias = 0.02;
  sun.shadow.radius = 4;
  scene.add(sun);
  const screenLight = new THREE.PointLight(0x7c5cff, 18, 16, 1.6);
  screenLight.position.set(0, 4, -6.5);
  scene.add(screenLight);
  const pink = new THREE.PointLight(0xec4899, 10, 14, 1.8);
  pink.position.set(9, 3.5, 4);
  scene.add(pink);
  const teal = new THREE.PointLight(0x22d3ee, 8, 14, 1.8);
  teal.position.set(-9, 3, 2);
  scene.add(teal);

  buildRoom(scene);
  buildBookshelf(scene);
  buildWindow(scene);
  buildStickyBoard(scene);
  buildLounge(scene);
  buildPlant(scene, -6.0, -8.2, 1.1);
  buildPlant(scene, 5.6, -8.2, 1.0);
  buildPlant(scene, 11.0, -8.0, 1.2);
  buildPlant(scene, -11.0, 7.8, 1.2);
  buildPlant(scene, -11.0, -6.6, 0.9);
  buildPlant(scene, 11.0, 1.6, 0.9);

  const wallScreen = buildWallScreen(scene, agents);
  const stations = new Map();
  agents.forEach((a, i) => stations.set(a.id, buildStation(scene, a, i)));

  return {
    wallScreen,
    stations,
    hitTargets: [...stations.values()].map((s) => s.hit),
    update(t) {
      stations.forEach((s) => s.update(t));
    },
  };
}
