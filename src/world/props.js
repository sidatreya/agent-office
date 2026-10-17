// Furniture & props. All functions take a parent group (a floor) as first argument.
import * as THREE from 'three';
import { mesh, box, rbox, cyl, neonMat, canvasTexture, signPanel, roundRect } from './common.js';

let M;
export const initProps = (m) => (M = m);
export function plant(scene, x, z, s = 1, kind = 0) {
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

export function bookshelf(scene, x, z, rotY = 0) {
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

export function sofa(scene, x, z, rotY, fabric, w = 2.4) {
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

export function armchair(scene, x, z, rotY, fabric) {
  const g = new THREE.Group();
  g.add(rbox(0.85, 0.38, 0.85, 0.08, fabric, { y: 0.32 }));
  g.add(rbox(0.85, 0.6, 0.18, 0.08, fabric, { y: 0.7, z: -0.34 }));
  for (const sx of [-1, 1]) g.add(rbox(0.16, 0.42, 0.85, 0.06, fabric, { x: sx * 0.42, y: 0.5 }));
  g.add(rbox(0.38, 0.36, 0.12, 0.05, new THREE.MeshStandardMaterial({ color: 0xe9c46a, roughness: 0.95 }), { y: 0.68, z: -0.2 }));
  g.position.set(x, 0, z);
  g.rotation.y = rotY;
  scene.add(g);
}

export function floorLamp(scene, x, z, color = 0xffc98a) {
  const g = new THREE.Group();
  g.add(cyl(0.22, 0.22, 0.03, M.blackMetal, { y: 0.015 }));
  g.add(cyl(0.015, 0.015, 1.7, M.brass, { y: 0.86 }, 8));
  const shade = cyl(0.18, 0.26, 0.3, new THREE.MeshStandardMaterial({ color: 0xf5e6c8, emissive: color, emissiveIntensity: 0.55, side: THREE.DoubleSide }), { y: 1.75 });
  g.add(shade);
  g.position.set(x, 0, z);
  scene.add(g);
}

export function rug(scene, x, z, w, d, mat, round = false) {
  const geo = round ? new THREE.CircleGeometry(w, 64) : new THREE.PlaneGeometry(w, d);
  const r = mesh(geo, mat, { x, y: 0.006, z, cast: false });
  r.rotation.x = -Math.PI / 2;
  scene.add(r);
  const edge = round ? new THREE.RingGeometry(w - 0.06, w, 64) : null;
  if (edge) { const e = mesh(edge, new THREE.MeshStandardMaterial({ color: 0xc9a227, roughness: 0.6 }), { x, y: 0.008, z, cast: false }); e.rotation.x = -Math.PI / 2; scene.add(e); }
}

export function coffeeTable(scene, x, z, r = 0.75) {
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

export function stickyEasel(scene, x, z, rotY = 0) {
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


// ───────── new props ─────────
const place = (parent, g, x, z, rotY = 0, y = 0) => { g.position.set(x, y, z); g.rotation.y = rotY; parent.add(g); return g; };
const mat = (color, o = {}) => new THREE.MeshStandardMaterial({ color, roughness: 0.6, ...o });

export function recliner(p, x, z, rotY, fabric = M.leather) {
  const g = new THREE.Group();
  g.add(rbox(0.95, 0.42, 1.0, 0.1, fabric, { y: 0.36 }));
  const back = rbox(0.95, 0.85, 0.24, 0.1, fabric, { y: 0.85, z: -0.5 }); back.rotation.x = -0.35; g.add(back);
  const foot = rbox(0.9, 0.12, 0.5, 0.05, fabric, { y: 0.32, z: 0.72 }); foot.rotation.x = 0.25; g.add(foot);
  for (const sx of [-1, 1]) g.add(rbox(0.16, 0.5, 0.95, 0.06, fabric, { x: sx * 0.52, y: 0.5 }));
  g.add(box(0.8, 0.06, 0.8, M.blackMetal, { y: 0.06 }));
  g.add(rbox(0.5, 0.2, 0.1, 0.05, mat(0xe9c46a, { roughness: 0.95 }), { y: 1.12, z: -0.6 }));
  return place(p, g, x, z, rotY);
}

export function officeChair(p, x, z, rotY = 0, color = 0x1f2937) {
  const g = new THREE.Group();
  const seatM = mat(color, { roughness: 0.8 });
  g.add(rbox(0.52, 0.09, 0.5, 0.04, seatM, { y: 0.48 }));
  const back = rbox(0.48, 0.62, 0.07, 0.04, seatM, { y: 0.86, z: -0.24 }); back.rotation.x = -0.1; g.add(back);
  g.add(cyl(0.03, 0.03, 0.36, M.blackMetal, { y: 0.27 }, 8));
  for (let i = 0; i < 5; i++) { const a = (i / 5) * Math.PI * 2; const leg = box(0.3, 0.025, 0.04, M.blackMetal, { x: Math.cos(a) * 0.15, y: 0.06, z: Math.sin(a) * 0.15 }); leg.rotation.y = -a; g.add(leg); }
  for (const sx of [-1, 1]) g.add(box(0.04, 0.2, 0.3, M.blackMetal, { x: sx * 0.27, y: 0.6 }));
  return place(p, g, x, z, rotY);
}

export function coffeeBar(p, x, z, rotY = 0) {
  const g = new THREE.Group();
  g.add(rbox(3.4, 1.0, 0.7, 0.03, M.walnut, { y: 0.5 }));
  g.add(box(3.5, 0.05, 0.8, M.marbleWhite, { y: 1.02 }));
  g.add(box(3.3, 0.03, 0.03, neonMat('#ffb36b', 1.6), { y: 0.95, z: 0.37, cast: false }));
  // espresso machine
  g.add(rbox(0.7, 0.45, 0.45, 0.04, mat(0xc0c4cc, { metalness: 0.9, roughness: 0.25 }), { x: -1.0, y: 1.27 }));
  g.add(cyl(0.05, 0.05, 0.1, M.blackMetal, { x: -1.15, y: 1.0, z: 0.2 }, 10));
  for (let i = 0; i < 4; i++) g.add(cyl(0.05, 0.045, 0.1, M.ceramic, { x: 0.2 + i * 0.16, y: 1.1, z: 0.1 }, 12));
  g.add(cyl(0.18, 0.18, 0.12, mat(0xe9c46a), { x: 1.1, y: 1.1 }, 18)); // pastries tray
  for (let i = 0; i < 5; i++) g.add(mesh(new THREE.SphereGeometry(0.05, 8, 6), mat(0xb5651d), { x: 1.02 + (i % 3) * 0.08, y: 1.19, z: -0.05 + Math.floor(i / 3) * 0.1 }));
  // menu board
  const menu = signPanel(1.8, 0.9, (c, w, h) => {
    c.fillStyle = '#14121f'; c.fillRect(0, 0, w, h);
    c.fillStyle = '#ffd7a8'; c.font = '700 54px system-ui'; c.fillText('COFFEE BAR', 30, 70);
    c.font = '400 34px system-ui'; c.fillStyle = '#e9e7ff';
    ['Espresso · Cappuccino', 'Masala chai · Cold brew', 'Electrolyte lemonade'].forEach((t, i) => c.fillText(t, 30, 130 + i * 44));
  });
  menu.position.set(0, 2.2, -0.36); g.add(menu);
  for (let i = 0; i < 3; i++) { // stools
    const s = new THREE.Group();
    s.add(cyl(0.2, 0.2, 0.06, M.leather, { y: 0.78 }, 18)); s.add(cyl(0.025, 0.025, 0.75, M.brass, { y: 0.39 }, 8)); s.add(cyl(0.18, 0.18, 0.02, M.brass, { y: 0.01 }, 18));
    s.position.set(-1 + i, 0, 0.85); g.add(s);
  }
  return place(p, g, x, z, rotY);
}

export function golfSimulator(p, x, z, rotY = 0) {
  const g = new THREE.Group();
  const W = 5.2, D = 5.4, H = 3.2;
  const tex = canvasTexture(1024, 640, (c, w, h) => {
    const sky = c.createLinearGradient(0, 0, 0, h * 0.55); sky.addColorStop(0, '#5aa9e6'); sky.addColorStop(1, '#bde0fe');
    c.fillStyle = sky; c.fillRect(0, 0, w, h);
    c.fillStyle = '#2d6a4f'; c.beginPath(); c.moveTo(0, h * 0.55); c.quadraticCurveTo(w * 0.5, h * 0.42, w, h * 0.55); c.lineTo(w, h); c.lineTo(0, h); c.fill();
    c.fillStyle = '#52b788'; c.beginPath(); c.moveTo(w * 0.3, h); c.quadraticCurveTo(w * 0.5, h * 0.5, w * 0.58, h * 0.52); c.quadraticCurveTo(w * 0.62, h * 0.6, w * 0.75, h); c.fill();
    c.fillStyle = '#95d5b2'; c.beginPath(); c.ellipse(w * 0.6, h * 0.53, 60, 14, 0, 0, Math.PI * 2); c.fill();
    c.strokeStyle = '#fff'; c.lineWidth = 3; c.beginPath(); c.moveTo(w * 0.6, h * 0.53); c.lineTo(w * 0.6, h * 0.4); c.stroke();
    c.fillStyle = '#ef4444'; c.beginPath(); c.moveTo(w * 0.6, h * 0.4); c.lineTo(w * 0.64, h * 0.42); c.lineTo(w * 0.6, h * 0.44); c.fill();
    c.fillStyle = 'rgba(0,0,0,0.55)'; c.fillRect(20, 20, 330, 150);
    c.fillStyle = '#fff'; c.font = '700 34px system-ui'; c.fillText('HOLE 7 · PAR 4', 40, 64);
    c.font = '400 28px system-ui'; c.fillText('Carry 212 m · Speed 148 km/h', 40, 104); c.fillText('Spin 2650 rpm', 40, 140);
  });
  const screen = new THREE.Mesh(new THREE.PlaneGeometry(W - 0.3, H - 0.3), new THREE.MeshBasicMaterial({ map: tex, color: new THREE.Color(0.95, 0.95, 0.95) }));
  screen.position.set(0, H / 2, -D / 2 + 0.05); g.add(screen);
  const frameM = mat(0x1b1b28, { roughness: 0.5 });
  g.add(box(W, H, 0.06, frameM, { y: H / 2, z: -D / 2 }));
  const netM = new THREE.MeshStandardMaterial({ color: 0x111122, transparent: true, opacity: 0.55, roughness: 1, side: THREE.DoubleSide });
  for (const sx of [-1, 1]) { const n = mesh(new THREE.PlaneGeometry(D, H), netM, { x: sx * W / 2, y: H / 2, cast: false }); n.rotation.y = Math.PI / 2; g.add(n); g.add(box(0.06, H, 0.06, M.blackMetal, { x: sx * W / 2, y: H / 2, z: D / 2 })); }
  g.add(box(W, 0.06, 0.06, M.blackMetal, { y: H, z: D / 2 })); g.add(box(W, 0.06, D, frameM, { y: H + 0.03 }));
  const turf = mesh(new THREE.PlaneGeometry(W - 0.2, D - 0.4), mat(0x2f7d4a, { roughness: 1 }), { y: 0.01, cast: false }); turf.rotation.x = -Math.PI / 2; g.add(turf);
  const mat2 = mesh(new THREE.PlaneGeometry(1.4, 1.6), mat(0x40916c, { roughness: 1 }), { y: 0.02, z: 1.2, cast: false }); mat2.rotation.x = -Math.PI / 2; g.add(mat2);
  g.add(cyl(0.012, 0.012, 0.06, M.whiteMatte, { y: 0.05, z: 1.0 }, 6));
  g.add(mesh(new THREE.SphereGeometry(0.04, 12, 10), M.ceramic, { y: 0.1, z: 1.0 }));
  const club = new THREE.Group(); club.add(cyl(0.012, 0.012, 1.1, M.blackMetal, { y: 0.55 }, 6)); club.add(box(0.12, 0.05, 0.05, M.brass, { x: 0.05, y: 0.02 }));
  club.position.set(0.9, 0, 1.9); club.rotation.z = 0.25; g.add(club);
  g.add(rbox(0.4, 0.15, 0.25, 0.03, M.graphite, { x: -0.8, y: 0.08, z: 1.3 })); // launch monitor
  g.add(box(W, 0.04, 0.04, neonMat('#22c55e', 1.6), { y: 0.03, z: D / 2, cast: false }));
  const sign = signPanel(2.0, 0.45, (c, w, h) => { c.fillStyle = '#0b2e1f'; c.fillRect(0, 0, w, h); c.fillStyle = '#86efac'; c.font = '800 54px system-ui'; c.textAlign = 'center'; c.fillText('⛳ GOLF SIMULATOR', w / 2, 64); });
  sign.position.set(0, H + 0.4, D / 2); g.add(sign);
  return place(p, g, x, z, rotY);
}

export function fuelKiosks(p, x, z, rotY = 0) {
  const g = new THREE.Group();
  const sign = signPanel(5.2, 0.6, (c, w, h) => {
    c.fillStyle = '#121022'; c.fillRect(0, 0, w, h);
    c.fillStyle = '#fde68a'; c.font = '800 64px system-ui'; c.textAlign = 'center'; c.fillText('BOT FUEL BAR · OIL · ELECTRICITY BOOST · ELECTROLYTES', w / 2, 82);
  }, { pxPerUnit: 240 });
  sign.position.set(0, 2.75, -0.6); g.add(sign);
  // oil kiosk with cans
  const oil = new THREE.Group();
  oil.add(rbox(1.2, 1.7, 0.7, 0.05, mat(0x7c2d12, { roughness: 0.4 }), { y: 0.85 }));
  oil.add(box(0.9, 0.5, 0.02, neonMat('#f59e0b', 1.2), { y: 1.25, z: 0.36, cast: false }));
  const canM = mat(0xeab308, { metalness: 0.7, roughness: 0.35 });
  for (let i = 0; i < 6; i++) oil.add(rbox(0.22, 0.3, 0.14, 0.03, canM, { x: -0.36 + (i % 3) * 0.36, y: 0.2 + Math.floor(i / 3) * 0.34, z: 0.45 }));
  const hose = cyl(0.02, 0.02, 0.8, M.blackMetal, { x: 0.65, y: 1.0, z: 0.1 }, 6); hose.rotation.z = 0.3; oil.add(hose);
  oil.position.x = -1.9; g.add(oil);
  // electricity boost: charging pods
  const pod = (px) => {
    const q = new THREE.Group();
    q.add(cyl(0.28, 0.32, 1.6, mat(0x1e293b, { metalness: 0.6, roughness: 0.3 }), { y: 0.8 }, 20));
    q.add(mesh(new THREE.TorusGeometry(0.3, 0.03, 8, 32), neonMat('#22d3ee', 2.2), { y: 1.3, cast: false }));
    q.add(mesh(new THREE.TorusGeometry(0.3, 0.03, 8, 32), neonMat('#22d3ee', 2.2), { y: 0.8, cast: false }));
    q.children.slice(-2).forEach((r) => (r.rotation.x = Math.PI / 2));
    q.add(cyl(0.05, 0.05, 0.12, neonMat('#facc15', 2), { y: 1.65 }, 10));
    q.position.x = px; return q;
  };
  g.add(pod(-0.25), pod(0.45));
  // electrolyte dispenser / fridge
  const fr = new THREE.Group();
  fr.add(rbox(1.0, 1.9, 0.7, 0.05, mat(0xe5e7eb, { roughness: 0.3 }), { y: 0.95 }));
  fr.add(box(0.85, 1.5, 0.02, new THREE.MeshStandardMaterial({ color: 0x9ad7ff, transparent: true, opacity: 0.35, roughness: 0.1 }), { y: 1.05, z: 0.36, cast: false }));
  const cols = [0x22d3ee, 0xf472b6, 0xa3e635, 0xfb923c];
  for (let r = 0; r < 3; r++) for (let i = 0; i < 5; i++) fr.add(cyl(0.05, 0.05, 0.26, new THREE.MeshStandardMaterial({ color: cols[(i + r) % 4], emissive: cols[(i + r) % 4], emissiveIntensity: 0.4 }), { x: -0.3 + i * 0.15, y: 0.55 + r * 0.45, z: 0.2 }, 10));
  fr.position.x = 1.8; g.add(fr);
  return place(p, g, x, z, rotY);
}

export function acousticBaffles(p, x0, x1, z, y = 6.6, color = 0xefeae2) {
  const m = mat(color, { roughness: 1 });
  for (let x = x0; x <= x1; x += 0.9) {
    p.add(box(0.06, 0.7, 3.2, m, { x, y, z, cast: false }));
    p.add(cyl(0.006, 0.006, 7 - y - 0.35, M.blackMetal, { x, y: y + 0.35 + (7 - y - 0.35) / 2, z }, 4));
  }
}

export function acousticWall(p, x, y, z, rotY = 0, cols = 6, rows = 3) {
  const g = new THREE.Group();
  const pal = [0xe9e2d6, 0xc8a27a, 0xf5f1ea, 0x9c6b45, 0xd9cbb5];
  const geo = new THREE.CylinderGeometry(0.3, 0.3, 0.06, 6);
  for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
    const h = mesh(geo, mat(pal[(r * 3 + c) % pal.length], { roughness: 1 }), { x: c * 0.54 + (r % 2) * 0.27, y: r * 0.47, cast: false });
    h.rotation.x = Math.PI / 2; g.add(h);
  }
  g.position.set(x, y, z); g.rotation.y = rotY; p.add(g); return g;
}

export function artFrame(p, x, y, z, rotY = 0, w = 1.4, h = 1.0, seed = 0) {
  const pal = [['#ff006e', '#ffbe0b', '#3a86ff', '#1b1b3a'], ['#06d6a0', '#118ab2', '#ffd166', '#0b132b'], ['#f15bb5', '#9b5de5', '#00bbf9', '#14102a']][seed % 3];
  const tex = canvasTexture(512, Math.round(512 * h / w), (c, W, H) => {
    c.fillStyle = pal[3]; c.fillRect(0, 0, W, H);
    for (let i = 0; i < 7; i++) { c.fillStyle = pal[i % 3]; c.globalAlpha = 0.85; c.beginPath(); c.arc(((i * 97 + seed * 51) % W), ((i * 61 + seed * 37) % H), 40 + (i * 23) % 90, 0, Math.PI * 2); c.fill(); }
    c.globalAlpha = 1; c.strokeStyle = '#ffffff'; c.lineWidth = 6; c.beginPath(); c.moveTo(0, H * 0.7); c.bezierCurveTo(W * 0.3, H * 0.2, W * 0.7, H, W, H * 0.3); c.stroke();
  });
  const g = new THREE.Group();
  g.add(box(w + 0.1, h + 0.1, 0.05, M.brass, {}));
  g.add(mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshStandardMaterial({ map: tex, roughness: 0.7, emissive: 0xffffff, emissiveMap: tex, emissiveIntensity: 0.2 }), { z: 0.03, cast: false }));
  g.position.set(x, y, z); g.rotation.y = rotY; p.add(g); return g;
}

export function draftingTable(p, x, z, rotY = 0) {
  const g = new THREE.Group();
  const tex = canvasTexture(768, 512, (c, w, h) => {
    c.fillStyle = '#123a73'; c.fillRect(0, 0, w, h);
    c.strokeStyle = 'rgba(255,255,255,0.12)'; c.lineWidth = 1;
    for (let i = 0; i < w; i += 24) { c.beginPath(); c.moveTo(i, 0); c.lineTo(i, h); c.stroke(); }
    for (let i = 0; i < h; i += 24) { c.beginPath(); c.moveTo(0, i); c.lineTo(w, i); c.stroke(); }
    c.strokeStyle = '#e0f2fe'; c.lineWidth = 4; c.strokeRect(120, 90, 420, 300); c.strokeRect(120, 90, 200, 160); c.strokeRect(320, 250, 220, 140);
    c.beginPath(); c.arc(320, 250, 60, Math.PI, Math.PI * 1.5); c.stroke();
    c.font = '600 22px ui-monospace'; c.fillStyle = '#e0f2fe'; c.fillText('LIVING 5.4 × 4.2', 140, 180); c.fillText('STUDY', 360, 320); c.fillText('GROUND FLOOR PLAN · 1:100', 120, 450);
  });
  const top = mesh(new THREE.PlaneGeometry(1.8, 1.2), new THREE.MeshStandardMaterial({ map: tex, roughness: 0.8, emissive: 0xffffff, emissiveMap: tex, emissiveIntensity: 0.25 }), { y: 1.05 });
  top.rotation.x = -Math.PI / 2 + 0.45; g.add(top);
  const base = box(1.9, 0.04, 1.3, M.oak, { y: 1.02 }); base.rotation.x = 0.45; g.add(base);
  for (const sx of [-1, 1]) { const l = box(0.05, 1.0, 0.05, M.blackMetal, { x: sx * 0.8, y: 0.5, z: -0.3 }); g.add(l); g.add(box(0.05, 0.75, 0.05, M.blackMetal, { x: sx * 0.8, y: 0.37, z: 0.35 })); }
  const ruler = box(1.6, 0.01, 0.06, M.whiteMatte, { y: 1.1, z: 0.1 }); ruler.rotation.x = 0.45; g.add(ruler);
  const lamp = cyl(0.05, 0.12, 0.12, mat(0x111827, { emissive: 0xfff1c1, emissiveIntensity: 0.5 }), { x: 0.9, y: 1.7, z: -0.4 }, 14); g.add(lamp);
  g.add(cyl(0.01, 0.01, 0.8, M.brass, { x: 0.9, y: 1.3, z: -0.45 }, 6));
  // plan rolls
  for (let i = 0; i < 4; i++) { const r = cyl(0.05, 0.05, 0.8, mat(i % 2 ? 0xe0f2fe : 0xf8fafc), { x: -1.2, y: 0.4 + i * 0.02, z: -0.3 + i * 0.12 }, 10); r.rotation.x = 0.2; g.add(r); }
  return place(p, g, x, z, rotY);
}

export function archModel(p, x, z) {
  const g = new THREE.Group();
  g.add(box(1.2, 0.8, 1.2, M.whiteMatte, { y: 0.4 }));
  const w = mat(0xf8fafc, { roughness: 0.4 });
  g.add(box(0.9, 0.02, 0.9, mat(0x86efac), { y: 0.81 }));
  g.add(box(0.5, 0.22, 0.4, w, { x: -0.1, y: 0.93, z: -0.1 }));
  g.add(box(0.3, 0.16, 0.3, w, { x: 0.22, y: 0.9, z: 0.15 }));
  g.add(box(0.52, 0.02, 0.42, mat(0x94a3b8), { x: -0.1, y: 1.05, z: -0.1 }));
  g.add(box(0.2, 0.01, 0.12, new THREE.MeshStandardMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.7 }), { x: 0.25, y: 0.83, z: -0.25 }));
  for (let i = 0; i < 4; i++) g.add(mesh(new THREE.SphereGeometry(0.05, 8, 6), M.leaf2, { x: -0.38 + i * 0.25, y: 0.88, z: 0.38 }));
  const glass = box(1.0, 0.5, 1.0, new THREE.MeshPhysicalMaterial({ color: 0xffffff, transparent: true, opacity: 0.12, roughness: 0.05 }), { y: 1.06, cast: false }); g.add(glass);
  g.position.set(x, 0, z); p.add(g); return g;
}

export function chairPrototype(p, x, z) {
  const g = new THREE.Group();
  g.add(cyl(0.5, 0.5, 0.5, M.whiteMatte, { y: 0.25 }, 24));
  const seat = rbox(0.5, 0.06, 0.5, 0.03, M.walnut, { y: 0.78 }); g.add(seat);
  const back = rbox(0.5, 0.42, 0.05, 0.03, M.walnut, { y: 1.05, z: -0.22 }); back.rotation.x = -0.15; g.add(back);
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) g.add(cyl(0.02, 0.015, 0.28, M.walnut, { x: sx * 0.2, y: 0.62, z: sz * 0.2 }, 6));
  g.position.set(x, 0, z); p.add(g); return g;
}

export function planterModel(p, x, z) {
  const g = new THREE.Group();
  g.add(cyl(0.5, 0.5, 0.5, M.whiteMatte, { y: 0.25 }, 24));
  g.add(cyl(0.3, 0.22, 0.2, M.terracotta, { y: 0.6 }, 16));
  g.add(cyl(0.03, 0.04, 0.35, mat(0x5b4030), { y: 0.85 }, 6));
  for (let i = 0; i < 6; i++) { const l = mesh(new THREE.SphereGeometry(0.16, 10, 8), i % 2 ? M.leaf : M.leaf2, { x: Math.cos(i) * 0.15, y: 1.05 + (i % 3) * 0.05, z: Math.sin(i) * 0.15 }); l.scale.set(1, 0.55, 1); g.add(l); }
  g.position.set(x, 0, z); p.add(g); return g;
}

export function roundTable(p, x, z, r = 1.1) {
  const g = new THREE.Group();
  g.add(cyl(r, r, 0.05, M.oak, { y: 0.74 }, 40));
  g.add(cyl(0.06, 0.08, 0.72, M.blackMetal, { y: 0.37 }, 12));
  g.add(cyl(0.4, 0.4, 0.02, M.blackMetal, { y: 0.01 }, 24));
  g.position.set(x, 0, z); p.add(g); return g;
}

// rectangular meeting table with n chairs (both long sides + ends)
export function meetingTable(p, x, z, len, w, seats, rotY = 0) {
  const g = new THREE.Group();
  g.add(rbox(len, 0.06, w, 0.03, M.walnut, { y: 0.75 }));
  for (const sx of [-1, 1]) g.add(box(0.08, 0.72, w * 0.6, M.blackMetal, { x: sx * (len / 2 - 0.4), y: 0.36 }));
  const per = Math.floor((seats - (seats > 6 ? 2 : 0)) / 2);
  for (let i = 0; i < per; i++) {
    const cx = -len / 2 + (len / (per + 1)) * (i + 1);
    officeChair(g, cx, -w / 2 - 0.45, 0); officeChair(g, cx, w / 2 + 0.45, Math.PI);
  }
  if (seats > 6) { officeChair(g, -len / 2 - 0.5, 0, Math.PI / 2); officeChair(g, len / 2 + 0.5, 0, -Math.PI / 2); }
  return place(p, g, x, z, rotY);
}

// glass-walled room (partition box). walls: list of [x0,z0,x1,z1] segments; opening skipped by caller
export function glassWalls(p, segs, h = 3.0, { frame = M.bronze, tint } = {}) {
  const gm = tint ? new THREE.MeshPhysicalMaterial({ color: tint, transparent: true, opacity: 0.16, roughness: 0.05, depthWrite: false, side: THREE.DoubleSide }) : M.glass;
  for (const [x0, z0, x1, z1] of segs) {
    const len = Math.hypot(x1 - x0, z1 - z0), ang = Math.atan2(-(z1 - z0), x1 - x0);
    const g = new THREE.Group(); g.position.set(x0, 0, z0); g.rotation.y = ang;
    const pane = mesh(new THREE.PlaneGeometry(len, h), gm, { x: len / 2, y: h / 2, cast: false, receive: false }); pane.renderOrder = 5; g.add(pane);
    g.add(box(len, 0.06, 0.08, frame, { x: len / 2, y: h }));
    g.add(box(len, 0.06, 0.08, frame, { x: len / 2, y: 0.03 }));
    for (let i = 0; i <= Math.max(1, Math.round(len / 1.8)); i++) g.add(box(0.05, h, 0.08, frame, { x: (i / Math.max(1, Math.round(len / 1.8))) * len, y: h / 2, receive: false }));
    p.add(g);
  }
}

// opaque walls (records / server rooms)
export function solidWalls(p, segs, h, m) {
  for (const [x0, z0, x1, z1] of segs) {
    const len = Math.hypot(x1 - x0, z1 - z0), ang = Math.atan2(-(z1 - z0), x1 - x0);
    const w = box(len, h, 0.18, m, { x: (x0 + x1) / 2, y: h / 2, z: (z0 + z1) / 2 }); w.rotation.y = ang; p.add(w);
  }
}

export function serverRack(p, x, z, rotY = 0) {
  const g = new THREE.Group();
  g.add(rbox(0.7, 2.1, 1.0, 0.02, mat(0x0f1115, { metalness: 0.6, roughness: 0.35 }), { y: 1.05 }));
  const ledG = new THREE.MeshBasicMaterial({ color: new THREE.Color('#22c55e').multiplyScalar(2) });
  const ledB = new THREE.MeshBasicMaterial({ color: new THREE.Color('#38bdf8').multiplyScalar(2) });
  for (let i = 0; i < 14; i++) {
    g.add(box(0.6, 0.1, 0.02, mat(0x1f2430, { metalness: 0.5 }), { y: 0.2 + i * 0.13, z: 0.51, cast: false }));
    g.add(box(0.03, 0.03, 0.01, i % 3 ? ledG : ledB, { x: 0.22, y: 0.2 + i * 0.13, z: 0.525, cast: false }));
  }
  return place(p, g, x, z, rotY);
}

export function labelSign(p, text, x, y, z, rotY = 0, { w = 2.2, h = 0.4, bg = '#111827', fg = '#f8fafc', size = 52 } = {}) {
  const s = signPanel(w, h, (c, W, H) => { c.fillStyle = bg; c.fillRect(0, 0, W, H); c.fillStyle = fg; c.font = `800 ${size}px system-ui`; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText(text, W / 2, H / 2 + 2); }, { frame: false });
  s.position.set(x, y, z); s.rotation.y = rotY; p.add(s); return s;
}
