// Zaha-Hadid-style redesign layer (Sidatreya Designs): flowing white parametric shell, swooping floor
// bands, sharp blades, warm cove lighting, zen gardens with skylight shafts, a bronze charging bull,
// art installations, tickers (live where a real feed exists, otherwise clearly marked EXAMPLE DATA),
// the rooftop "SIDATREYA DESIGNS" logo, a live market banner and a live market billboard.
import * as THREE from 'three';
import { ctx, FX, FZ, WH, FH, mesh, box, cyl, rbox, neonMat, canvasTexture, radialTexture } from './common.js';
import { CORE } from './building.js';

const TAU = Math.PI * 2;
const WARM = '#ffd9a0';
// building footprint centre / superellipse half-extents (encloses floor plate + lift core)
export const SHELL = { cx: (CORE.x1 - FX) / 2, cz: 0, A: (CORE.x1 + FX) / 2 + 4.3, B: FZ + 1.8 };

let rs = 777;
const rnd = () => ((rs = (rs * 16807) % 2147483647) / 2147483647);

// ── geometry helpers ──
export function superPath(cx, cz, A, B, e = 4, N = 180) {
  const out = [];
  for (let i = 0; i < N; i++) {
    const t = (i / N) * TAU, c = Math.cos(t), s = Math.sin(t);
    out.push({ x: cx + A * Math.sign(c) * Math.abs(c) ** (2 / e), z: cz + B * Math.sign(s) * Math.abs(s) ** (2 / e), u: i / N });
  }
  return out;
}

// Sweep a 4-sided profile along a path. fn(p, i) -> { yb, yt, d0, d1 } (heights + inner/outer offsets along the normal).
export function ribbon(pts, closed, fn, mat, { cast = true } = {}) {
  const n = pts.length;
  const nrm = pts.map((p, i) => {
    let tx, tz;
    if (!closed && i === 0) { tx = pts[1].x - p.x; tz = pts[1].z - p.z; }
    else if (!closed && i === n - 1) { tx = p.x - pts[n - 2].x; tz = p.z - pts[n - 2].z; }
    else { const a = pts[(i - 1 + n) % n], b = pts[(i + 1) % n]; tx = b.x - a.x; tz = b.z - a.z; }
    const l = Math.hypot(tx, tz) || 1; return { x: tz / l, z: -tx / l };
  });
  const prof = pts.map((p, i) => {
    const f = fn(p, i), q = nrm[i];
    const P = (d, y) => [p.x + q.x * d, y, p.z + q.z * d];
    return [P(f.d0, f.yb), P(f.d1, f.yb), P(f.d1, f.yt), P(f.d0, f.yt)];
  });
  const pos = [], idx = [];
  const segs = closed ? n : n - 1;
  for (const [a, b] of [[0, 3], [1, 2], [3, 2], [0, 1]]) { // inner, outer, top, bottom strips
    const base = pos.length / 3;
    for (let i = 0; i < n; i++) pos.push(...prof[i][a], ...prof[i][b]);
    for (let i = 0; i < segs; i++) {
      const i0 = base + i * 2, i1 = base + ((i + 1) % n) * 2;
      idx.push(i0, i1, i0 + 1, i1, i1 + 1, i0 + 1);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setIndex(idx); g.computeVertexNormals();
  const m = new THREE.Mesh(g, mat); m.castShadow = cast; m.receiveShadow = true;
  return m;
}

function shapeSlab(pts, y0, depth, mat) {
  const s = new THREE.Shape(pts.map((p) => new THREE.Vector2(p.x, -p.z)));
  const g = new THREE.ExtrudeGeometry(s, { depth, bevelEnabled: true, bevelThickness: 0.06, bevelSize: 0.06, bevelSegments: 3, curveSegments: 4 });
  g.rotateX(-Math.PI / 2);
  const m = new THREE.Mesh(g, mat); m.position.y = y0; m.receiveShadow = true; m.castShadow = true;
  return m;
}

// sharp triangular blade (angular accent) in the x-y plane, extruded along z
function blade(parent, pts2, depth, mat, pos, rot = [0, 0, 0]) {
  const s = new THREE.Shape(pts2.map(([x, y]) => new THREE.Vector2(x, y)));
  const g = new THREE.ExtrudeGeometry(s, { depth, bevelEnabled: false });
  g.translate(0, 0, -depth / 2);
  const m = new THREE.Mesh(g, mat); m.position.set(...pos); m.rotation.set(...rot); m.castShadow = true; parent.add(m);
  return m;
}

const sweep = (u, k, ph) => Math.max(0, Math.sin(u * TAU * k + ph));

// ── per-floor exterior shell: superellipse slab, flowing balustrade band with LED underside, parametric fins, blades ──
export function zahaFloorShell(g, floor) {
  const M = ctx.M;
  const { cx, cz, A, B } = SHELL;
  const path = superPath(cx, cz, A, B, 4.2);
  const ph = floor.level * 1.15;
  g.add(shapeSlab(path, -0.62, 0.5, M.plinth));
  const band = (p) => ({ yb: -0.9 - 1.1 * sweep(p.u, 2, ph + Math.PI) ** 1.5, yt: 0.3 + 1.25 * sweep(p.u, 2, ph) ** 2, d0: -0.05, d1: 0.42 });
  g.add(ribbon(path, true, band, M.shell));
  // warm LED line tucked under the band
  g.add(ribbon(path, true, (p) => { const b = band(p); return { yb: b.yb - 0.02, yt: b.yb + 0.03, d0: 0.1, d1: 0.16 }; }, neonMat(WARM, 1.7), { cast: false }));
  // parametric fins on the sea (back) and left sides, twisting along the facade
  const finM = M.shell;
  const finGeo = new THREE.BoxGeometry(0.1, FH, 0.7);
  const back = path.filter((p) => p.z < -B * 0.55 || p.x < cx - A * 0.8);
  back.forEach((p, i) => {
    if (i % 4) return;
    const f = mesh(finGeo, finM, { x: p.x, y: FH / 2 - 0.6, z: p.z, receive: false });
    f.rotation.y = Math.atan2(p.x - cx, p.z - cz) + 0.6 * Math.sin(p.u * TAU * 3 + ph);
    g.add(f);
  });
  // sharp blades: cantilevered at the front-left corner and at the core corner
  blade(g, [[0, 0], [3.8, 0.05], [0, 0.55]], 0.12, M.shell, [cx - A + 0.4, 0.4, FZ + 1.2], [0, 0.5 + floor.level * 0.2, 0]);
  blade(g, [[0, 0], [-3.2, 0.0], [0, 2.4]], 0.14, M.shell, [CORE.x1 + 1.1, 0.0, CORE.z1 + 0.5], [0, -0.3, 0]);
}

// ── interior: warm cove ribbons along the back + left walls, LED coves ──
export function zahaInterior(g, floor) {
  const M = ctx.M;
  const ph = floor.level * 0.9;
  const backPts = []; for (let i = 0; i <= 90; i++) backPts.push({ x: -FX + 0.2 + (i / 90) * (FX * 2 - 0.4), z: -FZ + 0.3, u: i / 90 });
  const leftPts = []; for (let i = 0; i <= 60; i++) leftPts.push({ z: FZ - 0.4 - (i / 60) * (FZ * 2 - 0.8), x: -FX + 0.3, u: i / 60 });
  for (const [pts, k] of [[backPts, 2.5], [leftPts, 1.6]]) {
    const prof = (p) => { const y = 6.15 + 0.35 * Math.sin(p.u * TAU * k + ph); return { yb: y, yt: y + 0.28, d0: 0, d1: -0.75 }; };
    g.add(ribbon(pts, false, prof, M.shell, { cast: false }));
    g.add(ribbon(pts, false, (p) => { const b = prof(p); return { yb: b.yb - 0.03, yt: b.yb, d0: -0.55, d1: -0.7 }; }, neonMat(WARM, 2.0), { cast: false }));
  }
  // floor-edge cove light just inside the glass
  g.add(box(FX * 2 - 0.4, 0.03, 0.05, neonMat('#ffcf8a', 1.4), { y: 0.03, z: -FZ + 0.12, cast: false }));
}

// ── scrolling ticker strip (canvas). items: [{t, up}] ; label shown repeatedly ──
export function tickerStrip(parent, { x, y, z, rotY = 0, w = 10, h = 0.32, items, label = 'EXAMPLE DATA · NOT LIVE PRICES', speed = 0.02 }) {
  const W = 4096, H = 96;
  const tex = canvasTexture(W, H, (c) => {
    c.fillStyle = '#05070c'; c.fillRect(0, 0, W, H);
    c.font = '700 54px ui-monospace, Menlo, monospace'; c.textBaseline = 'middle';
    let px = 20;
    const put = (txt, col) => { c.fillStyle = col; c.fillText(txt, px, H / 2 + 2); px += c.measureText(txt).width + 40; };
    while (px < W - 200) {
      c.fillStyle = '#f59e0b'; c.fillRect(px - 8, 14, c.measureText(label).width + 16, H - 28); c.fillStyle = '#111'; c.fillText(label, px, H / 2 + 2); px += c.measureText(label).width + 50;
      for (const it of items) { if (px > W - 300) break; put(it.t, it.up === undefined ? '#e5e7eb' : it.up ? '#22c55e' : '#ef4444'); }
    }
  });
  tex.wrapS = THREE.RepeatWrapping; tex.repeat.x = Math.min(1, (w / h) * (H / W));
  const grp = new THREE.Group(); grp.position.set(x, y, z); grp.rotation.y = rotY; parent.add(grp);
  grp.add(box(w + 0.08, h + 0.08, 0.06, ctx.M.graphite, { cast: false }));
  const m = mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ map: tex, color: new THREE.Color(1.25, 1.25, 1.25) }), { z: 0.035, cast: false });
  grp.add(m);
  return { group: grp, update: (t) => { tex.offset.x = (t * speed) % 1; } };
}
export const EXAMPLE_ITEMS = [
  { t: 'NIFTY 50 ▲ 0.62%', up: true }, { t: 'SENSEX ▲ 0.61%', up: true }, { t: 'RELIANCE ▲ 1.00%', up: true }, { t: 'TCS ▼ 0.31%', up: false },
  { t: 'HDFCBANK ▲ 0.95%', up: true }, { t: 'INFY ▲ 1.18%', up: true }, { t: 'S&P 500 ▲ 0.45%', up: true }, { t: 'NASDAQ ▼ 0.12%', up: false }, { t: 'GOLD ▲ 0.20%', up: true },
];

// ── zen garden: raked gravel, rocks + moss, Japanese maple, bamboo, stone lantern, water basin, koi pond, stepping stones, skylight shaft ──
export function zenGarden(parent, { x, z, rx = 3.2, rz = 2.0, fest, skylight = true, bamboo = true, koi = true, sign = false, ceil = 7.0 }) {
  const M = ctx.M;
  const g = new THREE.Group(); g.position.set(x, 0, z); parent.add(g);
  const ups = [];
  // curved white kerb with LED lip
  const ring = superPath(0, 0, rx, rz, 2, 96);
  g.add(ribbon(ring, true, (p) => ({ yb: 0, yt: 0.32 + 0.1 * Math.sin(p.u * TAU * 2), d0: 0, d1: 0.28 }), M.shell));
  g.add(ribbon(ring, true, (p) => ({ yb: 0.33 + 0.1 * Math.sin(p.u * TAU * 2), yt: 0.36 + 0.1 * Math.sin(p.u * TAU * 2), d0: 0.04, d1: 0.08 }), neonMat(WARM, 1.6), { cast: false }));
  // rocks (positions in garden-local units, normalised to rx/rz)
  const rocks = [[-0.45, -0.25, 0.55], [0.35, 0.3, 0.42], [0.55, -0.35, 0.3], [-0.15, 0.45, 0.26]];
  const gravel = canvasTexture(1024, 1024, (c, W, H) => {
    c.fillStyle = '#e8e3d8'; c.fillRect(0, 0, W, H);
    for (let i = 0; i < 4000; i++) { c.fillStyle = `rgba(120,110,95,${rnd() * 0.18})`; c.fillRect(rnd() * W, rnd() * H, 2, 2); }
    c.strokeStyle = 'rgba(140,128,110,0.55)'; c.lineWidth = 3;
    for (let r = 40; r < W * 0.75; r += 18) { c.beginPath(); c.ellipse(W / 2, H / 2, r, r, 0, 0, TAU); c.stroke(); }
    // ripples around rocks
    for (const [rx0, rz0, s] of rocks) {
      const px = W / 2 + rx0 * W / 2, py = H / 2 + rz0 * H / 2;
      c.fillStyle = '#e8e3d8'; c.beginPath(); c.arc(px, py, s * 260 + 60, 0, TAU); c.fill();
      for (let k = 0; k < 4; k++) { c.beginPath(); c.arc(px, py, s * 200 + 20 + k * 18, 0, TAU); c.stroke(); }
    }
  });
  const gr = mesh(new THREE.CircleGeometry(1, 72), new THREE.MeshStandardMaterial({ map: gravel, roughness: 0.95 }), { y: 0.02, cast: false });
  gr.rotation.x = -Math.PI / 2; gr.scale.set(rx - 0.02, rz - 0.02, 1); g.add(gr);
  const stoneM = new THREE.MeshStandardMaterial({ color: 0x77706a, roughness: 0.92, flatShading: true });
  const mossM = new THREE.MeshStandardMaterial({ color: 0x4f7a32, roughness: 1, flatShading: true });
  for (const [rx0, rz0, s] of rocks) {
    const rk = mesh(new THREE.DodecahedronGeometry(1, 0), stoneM, { x: rx0 * rx, y: s * 0.35, z: rz0 * rz });
    rk.scale.set(s * 1.25, s * 0.85, s); rk.rotation.set(rnd(), rnd() * 3, rnd() * 0.4); g.add(rk);
    for (let k = 0; k < 4; k++) { const mo = mesh(new THREE.IcosahedronGeometry(0.22 * s + 0.08, 0), mossM, { x: rx0 * rx + Math.cos(k * 1.7) * s * 1.1, y: 0.05, z: rz0 * rz + Math.sin(k * 1.7) * s * 0.9 }); mo.scale.y = 0.35; g.add(mo); }
  }
  // Japanese maple
  const mx = -0.05 * rx, mz = -0.05 * rz;
  const bark = new THREE.MeshStandardMaterial({ color: 0x4a3426, roughness: 0.85 });
  const tr = cyl(0.07, 0.12, 1.5, bark, { x: mx, y: 0.75, z: mz }, 8); tr.rotation.z = 0.12; g.add(tr);
  for (let k = 0; k < 4; k++) { const br = cyl(0.03, 0.06, 1.0, bark, { x: mx + Math.cos(k * 1.6) * 0.3, y: 1.6, z: mz + Math.sin(k * 1.6) * 0.3 }, 6); br.rotation.set(Math.sin(k * 1.6) * 0.7, 0, -Math.cos(k * 1.6) * 0.7); g.add(br); }
  const leafCount = 110;
  const leaves = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(0.22, 0), new THREE.MeshStandardMaterial({ roughness: 0.7, flatShading: true }), leafCount);
  const mtx = new THREE.Matrix4(), col = new THREE.Color();
  const reds = ['#8f1a14', '#a8231a', '#c2361f', '#7a1410', '#b8481f'];
  for (let i = 0; i < leafCount; i++) {
    const a = rnd() * TAU, r = Math.sqrt(rnd()) * 1.35, h = 1.9 + rnd() * 0.75 - r * 0.25;
    mtx.compose(new THREE.Vector3(mx + Math.cos(a) * r, h, mz + Math.sin(a) * r * 0.85), new THREE.Quaternion().setFromEuler(new THREE.Euler(rnd(), rnd(), rnd())), new THREE.Vector3(1, 0.6, 1).multiplyScalar(0.7 + rnd() * 0.6));
    leaves.setMatrixAt(i, mtx); leaves.setColorAt(i, col.set(reds[i % reds.length]));
  }
  leaves.castShadow = true; g.add(leaves);
  // bamboo grove
  if (bamboo) {
    const bm = new THREE.MeshStandardMaterial({ color: 0x8fae4a, roughness: 0.5 });
    const lm = new THREE.MeshStandardMaterial({ color: 0x5f9a3a, roughness: 0.6, side: THREE.DoubleSide });
    for (let i = 0; i < 9; i++) {
      const bx = 0.62 * rx + (rnd() - 0.5) * 0.7, bz = -0.2 * rz + (rnd() - 0.5) * 0.8, h = Math.min(ceil - 0.8, 3.6 + rnd() * 1.8);
      const c = cyl(0.045, 0.05, h, bm, { x: bx, y: h / 2, z: bz }, 8); c.rotation.z = (rnd() - 0.5) * 0.08; g.add(c);
      for (let k = 0; k < 6; k++) { const l = mesh(new THREE.PlaneGeometry(0.5, 0.1), lm, { x: bx + Math.cos(k) * 0.2, y: h * (0.6 + k * 0.07), z: bz + Math.sin(k) * 0.2, cast: false }); l.rotation.set(0.3, k * 1.1, -0.4); g.add(l); }
    }
  }
  // stone lantern (tōrō) with warm glow
  const lx = 0.62 * rx, lz = 0.45 * rz;
  const light = new THREE.MeshBasicMaterial({ color: new THREE.Color('#ffc46b').multiplyScalar(2.4) });
  g.add(cyl(0.22, 0.26, 0.12, stoneM, { x: lx, y: 0.06, z: lz }, 6));
  g.add(cyl(0.07, 0.09, 0.55, stoneM, { x: lx, y: 0.4, z: lz }, 8));
  g.add(cyl(0.2, 0.16, 0.08, stoneM, { x: lx, y: 0.72, z: lz }, 6));
  g.add(box(0.2, 0.2, 0.2, light, { x: lx, y: 0.86, z: lz, cast: false }));
  g.add(mesh(new THREE.ConeGeometry(0.34, 0.2, 6), stoneM, { x: lx, y: 1.06, z: lz }));
  g.add(mesh(new THREE.SphereGeometry(0.05, 8, 6), stoneM, { x: lx, y: 1.19, z: lz }));
  // water basin (tsukubai) + bamboo spout
  const wx = -0.62 * rx, wz = 0.4 * rz;
  g.add(cyl(0.32, 0.36, 0.38, stoneM, { x: wx, y: 0.19, z: wz }, 10));
  const water = new THREE.MeshPhysicalMaterial({ color: 0x1f4f57, roughness: 0.04, metalness: 0.1, clearcoat: 1 });
  const wd = mesh(new THREE.CircleGeometry(0.24, 20), water, { x: wx, y: 0.385, z: wz, cast: false }); wd.rotation.x = -Math.PI / 2; g.add(wd);
  const sp = cyl(0.025, 0.025, 0.7, new THREE.MeshStandardMaterial({ color: 0x9fb15a }), { x: wx + 0.35, y: 0.55, z: wz }, 8); sp.rotation.z = 1.2; g.add(sp);
  // koi pond
  if (koi) {
    const kx = 0.25 * rx, kz = -0.55 * rz + 0.25;
    const pond = mesh(new THREE.CircleGeometry(1, 40), water, { x: kx, y: 0.03, z: kz, cast: false }); pond.rotation.x = -Math.PI / 2; pond.scale.set(0.9, 0.5, 1); g.add(pond);
    const fish = [];
    for (let i = 0; i < 5; i++) {
      const f = mesh(new THREE.CapsuleGeometry(0.05, 0.16, 4, 8), new THREE.MeshStandardMaterial({ color: i % 2 ? 0xff7a1a : 0xf5f0e6, roughness: 0.4, emissive: i % 2 ? 0x441800 : 0x222222 }), { y: 0.05, cast: false });
      f.rotation.z = Math.PI / 2; const piv = new THREE.Group(); piv.position.set(kx, 0, kz); piv.add(f); f.position.x = 0.35 + i * 0.08; g.add(piv); fish.push(piv);
    }
    ups.push((t) => fish.forEach((p, i) => { p.rotation.y = t * (0.35 + i * 0.07) + i; p.scale.set(1, 1, 0.55); }));
    // stepping stones across the pond edge
    for (let i = 0; i < 4; i++) g.add(cyl(0.22, 0.24, 0.07, stoneM, { x: kx - 0.9 + i * 0.6, y: 0.04, z: kz + 0.55 + Math.sin(i) * 0.12 }, 10));
  }
  // bonsai on a stone
  const bx0 = -0.3 * rx, bz0 = 0.62 * rz;
  g.add(rbox(0.5, 0.14, 0.34, 0.04, new THREE.MeshStandardMaterial({ color: 0x3b3b3f, roughness: 0.6 }), { x: bx0, y: 0.07, z: bz0 }));
  const bt = cyl(0.03, 0.05, 0.4, bark, { x: bx0, y: 0.32, z: bz0 }, 6); bt.rotation.z = 0.4; g.add(bt);
  for (let k = 0; k < 4; k++) { const c = mesh(new THREE.IcosahedronGeometry(0.13, 0), new THREE.MeshStandardMaterial({ color: 0x3d6b2c, flatShading: true }), { x: bx0 - 0.1 + k * 0.08, y: 0.5 + (k % 2) * 0.06, z: bz0 }); c.scale.y = 0.5; g.add(c); }
  // carved basalt sign
  if (sign) {
    const st = canvasTexture(512, 256, (c, W, H) => { c.fillStyle = '#2b2b2e'; c.fillRect(0, 0, W, H); c.fillStyle = '#c9c5bd'; c.font = '600 46px Georgia, serif'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText('SIDATREYA DESIGNS', W / 2, H / 2); });
    const s = rbox(1.3, 0.75, 0.22, 0.03, new THREE.MeshStandardMaterial({ color: 0x2b2b2e, roughness: 0.8 }), { x: 0.75 * rx, y: 0.38, z: 0.75 * rz }); s.rotation.set(-0.12, -0.5, 0); g.add(s);
    const f = mesh(new THREE.PlaneGeometry(1.2, 0.6), new THREE.MeshStandardMaterial({ map: st, roughness: 0.8 }), { z: 0.115, cast: false }); s.add(f);
  }
  // diyas along the kerb
  if (fest) { const n = Math.round((rx + rz) * 3); for (let i = 0; i < n; i++) { const a = (i / n) * TAU; fest.diya(x + Math.cos(a) * (rx + 0.45), z + Math.sin(a) * (rz + 0.45)); } }
  // skylight: oculus ring at the ceiling, volumetric sun shaft, sun pool, warm-white spot
  if (skylight) {
    const oc = superPath(0, 0, rx * 0.7, rz * 0.7, 2, 64);
    g.add(ribbon(oc, true, () => ({ yb: ceil - 0.25, yt: ceil, d0: 0, d1: 0.35 }), M.shell, { cast: false }));
    const sc = document.createElement('canvas'); sc.width = 8; sc.height = 256; const sg = sc.getContext('2d');
    const gd = sg.createLinearGradient(0, 0, 0, 256); gd.addColorStop(0, 'rgba(255,244,220,0.5)'); gd.addColorStop(0.7, 'rgba(255,244,220,0.08)'); gd.addColorStop(1, 'rgba(255,244,220,0)'); sg.fillStyle = gd; sg.fillRect(0, 0, 8, 256);
    const st = new THREE.CanvasTexture(sc); st.colorSpace = THREE.SRGBColorSpace;
    const shaftM = new THREE.MeshBasicMaterial({ map: st, transparent: true, opacity: 0.14, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.FrontSide });
    for (const k of [0.75]) {
      const sh = mesh(new THREE.CylinderGeometry(0.7 * k, 0.95 * k, ceil - 0.1, 40, 1, true), shaftM, { y: (ceil - 0.1) / 2, cast: false });
      sh.scale.set(rx, 1, rz); sh.rotation.z = 0.06; sh.renderOrder = 8; g.add(sh);
    }
    const pool = mesh(new THREE.PlaneGeometry(2, 2), new THREE.MeshBasicMaterial({ map: radialTexture('rgba(255,240,205,0.22)'), transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }), { y: 0.05, cast: false });
    pool.rotation.x = -Math.PI / 2; pool.scale.set(rx * 0.95, rz * 0.95, 1); g.add(pool);
    const sun = new THREE.SpotLight(0xfff1da, 22, ceil + 4, 0.7, 0.7, 1.5);
    sun.position.set(0.3, ceil + 0.5, 0); sun.target.position.set(0, 0, 0); g.add(sun, sun.target);
    ups.push((t) => { shaftM.opacity = 0.13 + Math.sin(t * 0.6) * 0.03; });
  }
  return { group: g, update: (t) => ups.forEach((u) => u(t)) };
}

// ── bronze charging bull on a sculpted white plinth ──
export function bronzeBull(parent, { x, z, rotY = 0, s = 1.4 }) {
  const M = ctx.M;
  const g = new THREE.Group(); g.position.set(x, 0, z); g.rotation.y = rotY; parent.add(g);
  const pl = superPath(0, 0, 1.9, 1.05, 3, 72);
  g.add(shapeSlab(pl, 0, 0.42, M.shell));
  g.add(ribbon(pl, true, () => ({ yb: 0.05, yt: 0.09, d0: 0.03, d1: 0.08 }), neonMat(WARM, 1.8), { cast: false }));
  const b = new THREE.Group(); b.position.y = 0.48; b.scale.setScalar(s); g.add(b);
  const Bz = M.bullBronze;
  const blob = (sx, sy, sz, px, py, pz, rz = 0, ry = 0) => { const m = mesh(new THREE.SphereGeometry(1, 28, 20), Bz, { x: px, y: py, z: pz }); m.scale.set(sx, sy, sz); m.rotation.set(0, ry, rz); b.add(m); return m; };
  // body: long barrel, massive raised shoulder hump, tucked haunches (Wall Street "Charging Bull" stance: head down, rump up)
  blob(0.78, 0.36, 0.34, -0.05, 1.02, 0, 0.12);   // barrel, rising to the rump
  blob(0.46, 0.46, 0.40, 0.42, 1.08, 0, -0.35);   // shoulders / hump
  blob(0.36, 0.34, 0.33, -0.62, 1.12, 0, 0.25);   // haunches (raised)
  blob(0.32, 0.22, 0.26, 0.2, 0.78, 0, 0);        // chest / dewlap
  blob(0.24, 0.22, 0.26, 0.78, 0.86, 0, -0.7);    // thick neck, driving down
  blob(0.26, 0.17, 0.2, 1.02, 0.66, 0, -0.95);    // head, lowered
  blob(0.11, 0.1, 0.14, 1.16, 0.46, 0, 0);        // muzzle
  for (const sz of [-1, 1]) blob(0.05, 0.04, 0.03, 1.12, 0.7, sz * 0.15);  // brow ridges
  // horns: sweep out sideways, then forward and up to sharp tips
  for (const sz of [-1, 1]) {
    const crv = new THREE.CatmullRomCurve3([new THREE.Vector3(0.98, 0.8, sz * 0.14), new THREE.Vector3(1.0, 0.86, sz * 0.38), new THREE.Vector3(1.14, 0.98, sz * 0.52), new THREE.Vector3(1.36, 1.06, sz * 0.46)]);
    const tg = new THREE.TubeGeometry(crv, 20, 0.05, 8);
    const pa = tg.attributes.position, tmp = new THREE.Vector3();
    for (let i = 0; i < pa.count; i++) { const seg = Math.floor(i / 9) / 20; const c0 = crv.getPoint(Math.min(1, seg)); tmp.fromBufferAttribute(pa, i).sub(c0).multiplyScalar(1 - 0.85 * seg).add(c0); pa.setXYZ(i, tmp.x, tmp.y, tmp.z); }
    b.add(mesh(tg, Bz));
  }
  // legs: two-segment, charging stance (front pair reaching forward, hind pair driving back)
  const hoofM = new THREE.MeshStandardMaterial({ color: 0x2a1a0d, metalness: 1, roughness: 0.45 });
  const leg = (px, pz, a1, a2, l1, l2, r = 0.1) => {
    const L = new THREE.Group(); L.position.set(px, 0.92, pz); L.rotation.z = a1; b.add(L);
    L.add(cyl(r, r * 0.8, l1, Bz, { y: -l1 / 2 }, 10));
    const K = new THREE.Group(); K.position.y = -l1; K.rotation.z = a2; L.add(K);
    K.add(mesh(new THREE.SphereGeometry(r * 0.85, 10, 8), Bz));
    K.add(cyl(r * 0.7, r * 0.55, l2, Bz, { y: -l2 / 2 }, 10));
    K.add(cyl(r * 0.6, r * 0.75, 0.08, hoofM, { y: -l2 - 0.02 }, 10));
  };
  leg(0.52, 0.17, -0.65, 0.45, 0.42, 0.44, 0.12); leg(0.38, -0.17, -0.3, 0.1, 0.42, 0.46, 0.12);
  leg(-0.66, 0.17, 0.7, -0.15, 0.48, 0.5, 0.12); leg(-0.58, -0.17, 0.45, 0.05, 0.48, 0.5, 0.12);
  // tail whipping up and over
  const tc = new THREE.CatmullRomCurve3([new THREE.Vector3(-0.94, 1.22, 0), new THREE.Vector3(-1.16, 1.42, 0.04), new THREE.Vector3(-1.08, 1.7, 0.08), new THREE.Vector3(-0.86, 1.74, 0.06)]);
  b.add(mesh(new THREE.TubeGeometry(tc, 16, 0.028, 6), Bz));
  blob(0.06, 0.1, 0.06, -0.83, 1.76, 0.06);
  b.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  const spot = new THREE.SpotLight(0xffe2b8, 40, 10, 0.5, 0.5, 1.4);
  spot.position.set(1.5, 6.4, 2.0); spot.target = g; g.add(spot);
  return g;
}

// ── art installations ──
export function goldWire(parent, x, y, z, s = 1) { // suspended twisted wire-mesh sculpture
  const g = new THREE.Group(); g.position.set(x, y, z); g.scale.setScalar(s); parent.add(g);
  const gold = new THREE.MeshStandardMaterial({ color: 0xd4a64a, metalness: 1, roughness: 0.25, wireframe: true, emissive: 0x3a2508 });
  g.add(new THREE.Mesh(new THREE.TorusKnotGeometry(1.0, 0.38, 140, 10, 2, 3), gold));
  const wire = new THREE.MeshBasicMaterial({ color: 0x8a7a60 });
  for (const dx of [-0.8, 0.8]) g.add(mesh(new THREE.CylinderGeometry(0.006, 0.006, 3, 4), wire, { x: dx, y: 2.4, cast: false }));
  return { group: g, update: (t) => { g.rotation.y = t * 0.08; } };
}
export function bronzeRibbonSculpture(parent, x, z, s = 1) { // Möbius ribbon on a plinth
  const M = ctx.M;
  const g = new THREE.Group(); g.position.set(x, 0, z); parent.add(g);
  g.add(cyl(0.5, 0.6, 0.9, M.shell, { y: 0.45 }, 32));
  const geo = new THREE.BufferGeometry(); const pos = []; const idx = []; const U = 120, V = 6;
  for (let i = 0; i <= U; i++) for (let j = 0; j <= V; j++) {
    const u = (i / U) * TAU, v = (j / V - 0.5) * 0.5;
    pos.push((1 + v * Math.cos(u / 2)) * Math.cos(u) * 0.6, (1 + v * Math.cos(u / 2)) * Math.sin(u) * 0.6, v * Math.sin(u / 2) * 0.6);
  }
  for (let i = 0; i < U; i++) for (let j = 0; j < V; j++) { const a = i * (V + 1) + j, b2 = a + V + 1; idx.push(a, b2, a + 1, b2, b2 + 1, a + 1); }
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); geo.setIndex(idx); geo.computeVertexNormals();
  const m = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: 0xc27a3a, metalness: 1, roughness: 0.25, side: THREE.DoubleSide }));
  m.position.y = 1.65; m.scale.setScalar(s); m.castShadow = true; g.add(m);
  return { group: g, update: (t) => { m.rotation.y = t * 0.15; } };
}
export function wavePanel(parent, x, y, z, rotY, w = 2.4, h = 4.2) { // flowing gold contour relief
  const tex = canvasTexture(512, Math.round(512 * h / w), (c, W, H) => {
    c.fillStyle = '#1b1612'; c.fillRect(0, 0, W, H);
    for (let k = 0; k < 46; k++) {
      c.strokeStyle = k % 3 ? 'rgba(201,160,90,0.85)' : 'rgba(120,90,50,0.9)'; c.lineWidth = 3;
      c.beginPath();
      for (let yy = 0; yy <= H; yy += 8) c.lineTo(k * (W / 40) + Math.sin(yy * 0.012 + k * 0.25) * 40 + Math.sin(yy * 0.004) * 60, yy);
      c.stroke();
    }
  });
  const g = new THREE.Group(); g.position.set(x, y, z); g.rotation.y = rotY; parent.add(g);
  g.add(rbox(w + 0.3, h + 0.3, 0.12, 0.12, ctx.M.shell, {}));
  g.add(mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshStandardMaterial({ map: tex, metalness: 0.6, roughness: 0.35, emissive: 0xffffff, emissiveMap: tex, emissiveIntensity: 0.12 }), { z: 0.065, cast: false }));
  g.add(box(w + 0.2, 0.03, 0.04, neonMat(WARM, 1.6), { y: -h / 2 - 0.12, z: 0.07, cast: false }));
  return g;
}
export function ringsMobile(parent, x, y, z) { // suspended gold rings
  const g = new THREE.Group(); g.position.set(x, y, z); parent.add(g);
  const gold = new THREE.MeshStandardMaterial({ color: 0xd8ac55, metalness: 1, roughness: 0.2 });
  const rings = [1.3, 1.0, 0.7].map((r, i) => { const m = new THREE.Mesh(new THREE.TorusGeometry(r, 0.035, 10, 80), gold); m.rotation.x = Math.PI / 2 + i * 0.35; g.add(m); return m; });
  g.add(mesh(new THREE.CylinderGeometry(0.006, 0.006, 7 - y, 4), new THREE.MeshBasicMaterial({ color: 0x8a7a60 }), { y: (7 - y) / 2, cast: false }));
  return { group: g, update: (t) => rings.forEach((m, i) => { m.rotation.z = t * (0.1 + i * 0.05); m.rotation.y = Math.sin(t * 0.3 + i) * 0.4; }) };
}

// curved white partition (arc), with LED cap
export function curvedWall(parent, { x, z, r, a0, a1, h = 2.6 }) {
  const pts = []; const N = 40;
  for (let i = 0; i <= N; i++) { const a = a0 + (a1 - a0) * (i / N); pts.push({ x: x + Math.sin(a) * r, z: z + Math.cos(a) * r, u: i / N }); }
  parent.add(ribbon(pts, false, (p) => ({ yb: 0, yt: h + 0.25 * Math.sin(p.u * Math.PI), d0: 0, d1: 0.2 }), ctx.M.shell));
  parent.add(ribbon(pts, false, (p) => ({ yb: h + 0.25 * Math.sin(p.u * Math.PI), yt: h + 0.03 + 0.25 * Math.sin(p.u * Math.PI), d0: 0.05, d1: 0.15 }), neonMat(WARM, 2.0), { cast: false }));
}

// ── roof: flowing canopy shell, rooftop zen terrace, SIDATREYA DESIGNS logo ──
export function zahaRoof(roof, fest, deck) {
  const M = ctx.M;
  const { cx, cz, A, B } = SHELL;
  const path = superPath(cx, cz, A, B, 4.2);
  roof.add(shapeSlab(path, 0, 0.6, M.plinth));
  // sweeping parapet: rises high over the left end and the front-right, dips between (Zaha swoosh)
  const prof = (p) => ({ yb: -0.3, yt: 1.0 + 3.4 * sweep(p.u, 1, 2.4) ** 2 + 1.4 * sweep(p.u, 2, 0.6) ** 2, d0: -0.05, d1: 0.45 });
  roof.add(ribbon(path, true, prof, M.shell));
  roof.add(ribbon(path, true, (p) => { const b = prof(p); return { yb: b.yt - 0.05, yt: b.yt, d0: 0.0, d1: 0.08 }; }, neonMat(WARM, 1.8), { cast: false }));
  // rooftop zen terrace (open sky)
  const z = zenGarden(deck || roof, { x: -6.5, z: 3.8, rx: 3.6, rz: 2.2, fest, skylight: false, bamboo: true, koi: true, sign: true, ceil: 9 });
  // logo
  const logoTex = canvasTexture(2400, 300, (c, W, H) => {
    c.clearRect(0, 0, W, H);
    c.font = '800 220px "Helvetica Neue", Arial, sans-serif'; c.textAlign = 'center'; c.textBaseline = 'middle';
    c.lineJoin = 'round'; c.lineWidth = 18; c.strokeStyle = 'rgba(40,26,12,0.9)'; c.strokeText('SIDATREYA DESIGNS', W / 2, H / 2 + 8);
    c.shadowColor = 'rgba(255,200,120,0.9)'; c.shadowBlur = 24; c.fillStyle = '#ffd98a';
    c.fillText('SIDATREYA DESIGNS', W / 2, H / 2 + 8);
  });
  const logo = mesh(new THREE.PlaneGeometry(22, 2.75), new THREE.MeshBasicMaterial({ map: logoTex, transparent: true, color: new THREE.Color(1.12, 1.08, 1.0), depthWrite: false }), { x: cx - 2, y: 3.4, z: FZ + 1.6, cast: false });
  logo.rotation.x = -0.05; logo.renderOrder = 9; roof.add(logo);
  // slim brushed frame behind the letters
  roof.add(box(22.4, 0.08, 0.3, M.bronze, { x: cx - 2, y: 1.95, z: FZ + 1.45 }));
  for (const dx of [-9, 0, 9]) roof.add(box(0.1, 1.4, 0.1, M.bronze, { x: cx - 2 + dx, y: 1.3, z: FZ + 1.45 }));
  return { update: z.update, logo };
}

// ── exterior: live-market billboard pylon + live market banner + live office banner ──
export function officeBanner(parent, { x, y, z, w = 30, h = 0.7 }) {
  const W = 4096, H = 96;
  const c = document.createElement('canvas'); c.width = W; c.height = H;
  const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace; tex.wrapS = THREE.RepeatWrapping;
  tex.repeat.x = Math.min(1, (w / h) * (H / W));
  const grp = new THREE.Group(); grp.position.set(x, y, z); parent.add(grp);
  grp.add(box(w + 0.1, h + 0.1, 0.08, ctx.M.graphite, { cast: false }));
  grp.add(mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ map: tex, color: new THREE.Color(1.3, 1.3, 1.3) }), { z: 0.045, cast: false }));
  function draw(agents, getState) {
    const g = c.getContext('2d');
    g.fillStyle = '#05070c'; g.fillRect(0, 0, W, H);
    const st = agents.map((a) => ({ a, s: getState(a.id) }));
    const working = st.filter((x) => x.s.status === 'working');
    g.font = '700 56px ui-monospace, Menlo, monospace'; g.textBaseline = 'middle';
    let px = 30;
    const put = (t, col) => { g.fillStyle = col; g.fillText(t, px, H / 2 + 2); px += g.measureText(t).width + 50; };
    while (px < W - 400) {
      put('● LIVE OFFICE DATA', '#22c55e');
      put(`${agents.length} AGENTS`, '#f5f5f4'); put(`${working.length} WORKING`, '#86efac'); put(`${agents.length - working.length} IDLE`, '#fcd34d');
      for (const x of working.slice(0, 4)) put(`${x.a.name.toUpperCase()} ▶ ON TASK`, '#e5e7eb');
      put('SIDATREYA DESIGNS', '#f5c46b');
    }
    tex.needsUpdate = true;
  }
  return { group: grp, draw, update: (t) => { tex.offset.x = (t * 0.015) % 1; } };
}

export function billboardPylon(parent, { x, z, rotY = 0, w = 12, h = 6.75, y = 15 }) {
  const M = ctx.M;
  const g = new THREE.Group(); g.position.set(x, 0, z); g.rotation.y = rotY; parent.add(g);
  // sculpted pylon: two tapering curved blades rising from the water
  for (const sx of [-1, 1]) {
    const pts = []; for (let i = 0; i <= 30; i++) { const t = i / 30; pts.push([sx * (w / 2 - 0.3) + sx * Math.sin(t * Math.PI) * 0.9 * (1 - t), -2 + t * (y + h / 2 + 3)]); }
    const shape = new THREE.Shape();
    shape.moveTo(pts[0][0] - 0.6, pts[0][1]); pts.forEach(([px, py], i) => shape.lineTo(px + (sx > 0 ? 0.35 : -0.35) * (1 - i / 30), py));
    [...pts].reverse().forEach(([px, py]) => shape.lineTo(px - (sx > 0 ? 0.25 : -0.25), py));
    const geo = new THREE.ExtrudeGeometry(shape, { depth: 0.6, bevelEnabled: true, bevelSize: 0.08, bevelThickness: 0.08, bevelSegments: 2 });
    geo.translate(0, 0, -0.9);
    const m = new THREE.Mesh(geo, M.shell); m.castShadow = true; g.add(m);
  }
  g.add(rbox(w + 0.5, h + 0.5, 0.35, 0.2, M.shell, { y, z: -0.2 }));
  g.add(box(w + 0.3, 0.04, 0.06, neonMat(WARM, 2.0), { y: y - h / 2 - 0.2, z: 0.0, cast: false }));
  g.add(box(w + 0.3, 0.04, 0.06, neonMat(WARM, 2.0), { y: y + h / 2 + 0.2, z: 0.0, cast: false }));
  return g;
}

// ── signature exterior swooshes: two helical white ribbons wrapping the sea (back) and left facades from the
// trading floor up to the roof, pinched to knife-sharp tips at both ends (static; hidden in single-floor views) ──
export function zahaSwoosh(parent, { y0, y1 }) {
  const M = ctx.M;
  const { cx, cz, A, B } = SHELL;
  const defs = [
    { u0: 0.33, u1: 0.97, off: 1.05, ya: y0 - 0.6, yb: y1 + 2.6, hw: 1.15, d: 0.34 },
    { u0: 0.46, u1: 1.04, off: 1.55, ya: y0 + 6.5, yb: y1 - 3.0, hw: 0.7, d: 0.26 },
  ];
  for (const s of defs) {
    const N = 220, pts = [];
    const ring = superPath(cx, cz, A + s.off, B + s.off, 4.2, 720);
    for (let i = 0; i <= N; i++) {
      const u = s.u0 + (s.u1 - s.u0) * (i / N), k = Math.round((((u % 1) + 1) % 1) * 720) % 720;
      pts.push({ ...ring[k], s: i / N });
    }
    const prof = (p) => {
      const e = Math.sin(Math.PI * p.s) ** 0.55;              // pinch → sharp tips
      const yc = s.ya + (s.yb - s.ya) * (0.5 - 0.5 * Math.cos(Math.PI * p.s)); // ease-in/out climb
      return { yb: yc - s.hw * e, yt: yc + s.hw * e, d0: 0, d1: s.d * (0.25 + 0.75 * e) };
    };
    parent.add(ribbon(pts, false, prof, M.shell));
    parent.add(ribbon(pts, false, (p) => { const b = prof(p); return { yb: b.yb - 0.02, yt: b.yb + 0.04, d0: b.d1 - 0.06, d1: b.d1 + 0.01 }; }, neonMat(WARM, 1.9), { cast: false }));
  }
}

