// Building shell: stacked floor slabs, ocean-view glass curtain walls, lift/stair core, floor signs, roof.
import * as THREE from 'three';
import { CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';
import { ctx, FX, FZ, WH, FH, mesh, box, neonMat, signPanel } from './common.js';

export const CORE = { x0: FX + 0.2, x1: FX + 4.4, z0: -FZ, z1: -3.6 };

let sheenMat = null;
function getSheen() {
  if (sheenMat) return sheenMat;
  const sc = document.createElement('canvas'); sc.width = 512; sc.height = 256;
  const sg = sc.getContext('2d');
  [[60, 120], [180, 40], [320, 160], [420, 60]].forEach(([x, w]) => {
    const gr = sg.createLinearGradient(x, 0, x + w, 0);
    gr.addColorStop(0, 'rgba(255,255,255,0)'); gr.addColorStop(0.5, 'rgba(220,225,255,0.55)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
    sg.save(); sg.transform(1, 0, -0.5, 1, 0, 0); sg.fillStyle = gr; sg.fillRect(x, 0, w, 256); sg.restore();
  });
  const t = new THREE.CanvasTexture(sc); t.colorSpace = THREE.SRGBColorSpace;
  sheenMat = new THREE.MeshBasicMaterial({ map: t, transparent: true, opacity: 0.07, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide });
  return sheenMat;
}

// glass curtain wall from p0 to p1 (local floor coords)
export function curtain(parent, x0, z0, x1, z1, h, bay, { sill = true, top = true, accent = '#ffcf8a' } = {}) {
  const M = ctx.M;
  const len = Math.hypot(x1 - x0, z1 - z0), ang = Math.atan2(-(z1 - z0), x1 - x0);
  const g = new THREE.Group(); g.position.set(x0, 0, z0); g.rotation.y = ang;
  const pane = new THREE.Mesh(new THREE.PlaneGeometry(len, h), M.glass); pane.position.set(len / 2, h / 2, 0); pane.renderOrder = 5; g.add(pane);
  const sheen = new THREE.Mesh(new THREE.PlaneGeometry(len, h), getSheen()); sheen.position.set(len / 2, h / 2, 0.01); sheen.renderOrder = 6; g.add(sheen);
  const n = Math.max(1, Math.round(len / bay));
  for (let i = 0; i <= n; i++) g.add(box(0.07, h, 0.12, M.bronze, { x: (i / n) * len, y: h / 2, receive: false }));
  if (h > 3) g.add(box(len, 0.05, 0.1, M.bronze, { x: len / 2, y: 1.05, cast: false })); // transom
  if (sill) { g.add(box(len, 0.14, 0.18, M.bronze, { x: len / 2, y: 0.07 })); g.add(box(len, 0.025, 0.03, neonMat('#ffd59a', 2.0), { x: len / 2, y: 0.15, z: 0.08, cast: false })); }
  if (top) { g.add(box(len + 0.1, 0.18, 0.2, M.bronze, { x: len / 2, y: h })); g.add(box(len, 0.025, 0.03, neonMat(accent, 2.0), { x: len / 2, y: h - 0.1, z: 0.1, cast: false })); }
  parent.add(g);
  return g;
}

// one floor: slab, floor finish, curtain walls (back + left full height, front + right balustrade), sign, core segment
export function buildFloorShell(parent, floor, { finish } = {}) {
  const M = ctx.M;
  parent.add(box(FX * 2 + 0.6, 0.6, FZ * 2 + 0.6, M.plinth, { y: -0.3, cast: false }));
  const fl = mesh(new THREE.PlaneGeometry(FX * 2, FZ * 2), finish || (floor.level < 0 ? M.marbleFloor : M.floor), { y: 0.001, cast: false });
  fl.rotation.x = -Math.PI / 2; parent.add(fl);
  const rim = neonMat('#ffd59a', 1.6);
  parent.add(box(FX * 2 + 0.6, 0.04, 0.04, rim, { y: 0.0, z: FZ + 0.3, cast: false, receive: false }));
  parent.add(box(0.04, 0.04, FZ * 2 + 0.6, rim, { x: FX + 0.3, y: 0.0, cast: false, receive: false }));
  parent.add(box(FX * 2 + 0.6, 0.03, 0.03, neonMat('#ffc070', 1.2), { y: -0.58, z: FZ + 0.3, cast: false, receive: false }));
  if (floor.level < 0) { // basement: board-formed concrete walls, low upstand at the cut-away front
    const conc = new THREE.MeshStandardMaterial({ color: 0x3a3a48, roughness: 0.9 });
    parent.add(box(FX * 2, WH, 0.4, conc, { y: WH / 2, z: -FZ - 0.1 }));
    parent.add(box(0.4, WH, FZ * 2, conc, { x: -FX - 0.1, y: WH / 2 }));
    parent.add(box(0.4, WH, FZ * 2 + 0.2 + CORE.z1, conc, { x: FX + 0.1, y: WH / 2, z: (FZ + CORE.z1) / 2 + 0.1 }));
    parent.add(box(FX * 2, 0.5, 0.25, conc, { y: 0.25, z: FZ }));
    for (let x = -FX + 2.5; x < FX; x += 5) parent.add(box(0.5, WH, 0.5, conc, { x, y: WH / 2, z: -FZ + 0.25 }));
    parent.add(box(FX * 2, 0.03, 0.03, neonMat('#38bdf8', 1.4), { y: WH - 0.25, z: -FZ + 0.12, cast: false }));
  } else {
  // ocean-view glass, floor to ceiling on the back (sea) and left; low glass balustrade on the open front/right edges
  curtain(parent, -FX, -FZ, FX, -FZ, WH, 2.5);
  curtain(parent, -FX, FZ, -FX, -FZ, WH, 3);
  curtain(parent, -FX, FZ, FX, FZ, 1.05, 3, { sill: false, top: true, accent: '#ffcf8a' });
  curtain(parent, FX, FZ, FX, CORE.z1, 1.05, 3, { sill: false, top: true, accent: '#ffcf8a' });
  parent.add(box(0.22, WH + 0.1, 0.22, M.bronze, { x: -FX, y: WH / 2, z: -FZ }));
  }
  // structural columns (slim, bronze-clad)
  if (floor.level >= 0) for (const x of [-FX, -5, 5]) parent.add(box(0.26, WH, 0.26, M.bronze, { x, y: WH / 2, z: FZ - 0.15 }));
  // floor sign on the slab fascia
  const sign = signPanel(9.0, 0.5, (c, w, h) => {
    c.fillStyle = '#0d0b26'; c.fillRect(0, 0, w, h);
    c.fillStyle = '#f5c46b'; c.font = '800 70px system-ui'; c.textBaseline = 'middle';
    c.fillText(floor.label, 30, h / 2 + 3);
    c.fillStyle = '#f5f3ff'; c.font = '700 64px system-ui';
    c.fillText(floor.name.toUpperCase(), 150, h / 2 + 3);
  }, { frame: false, emissive: 1.0 });
  sign.position.set(-FX + 4.8, -0.3, FZ + 0.31); parent.add(sign);
  // CSS label (floor name) above the front edge
  const el = document.createElement('div');
  el.className = 'room-label floor-label'; el.textContent = `${floor.label} · ${floor.name}`;
  const lab = new CSS2DObject(el); lab.position.set(0, 0.05, FZ + 0.2); parent.add(lab);

  // lift/stair core segment for this storey (outside the right wall, opening into the floor)
  const coreM = new THREE.MeshStandardMaterial({ color: 0xece8e1, roughness: 0.4, metalness: 0.0 });
  const cw = CORE.x1 - CORE.x0, cd = CORE.z1 - CORE.z0, cx = (CORE.x0 + CORE.x1) / 2, cz = (CORE.z0 + CORE.z1) / 2;
  parent.add(box(cw, FH, cd, coreM, { x: cx, y: FH / 2 - 0.6, z: cz }));
  const doorM = new THREE.MeshStandardMaterial({ color: 0xb8b5c8, metalness: 1.0, roughness: 0.25 });
  for (const dz of [-2.0, 0.6 - 2.0 + 2.2]) {
    const zc = CORE.z0 + 1.5 + (dz < 0 ? 0 : 2.5);
    parent.add(box(0.06, 2.5, 1.4, doorM, { x: CORE.x0 - 0.03, y: 1.25, z: zc }));
    parent.add(box(0.07, 2.62, 0.04, M.brass, { x: CORE.x0 - 0.035, y: 1.31, z: zc }));
    parent.add(box(0.07, 0.06, 1.5, M.brass, { x: CORE.x0 - 0.035, y: 2.55, z: zc }));
    parent.add(box(0.03, 0.08, 0.3, neonMat('#fbbf24', 1.8), { x: CORE.x0 - 0.06, y: 2.85, z: zc, cast: false }));
  }
  const lift = signPanel(1.6, 0.42, (c, w, h) => { c.fillStyle = '#0d0b26'; c.fillRect(0, 0, w, h); c.fillStyle = '#fde68a'; c.font = '800 54px system-ui'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText(`LIFT · ${floor.label}`, w / 2, h / 2 + 2); }, { frame: false });
  lift.position.set(CORE.x0 - 0.07, 3.35, CORE.z0 + 2.75); lift.rotation.y = -Math.PI / 2; parent.add(lift);
  // stair door on the front face of the core
  parent.add(box(1.0, 2.3, 0.06, new THREE.MeshStandardMaterial({ color: 0x3b3556, roughness: 0.5 }), { x: cx + 0.8, y: 1.15, z: CORE.z1 + 0.03 }));
  const st = signPanel(1.0, 0.3, (c, w, h) => { c.fillStyle = '#065f46'; c.fillRect(0, 0, w, h); c.fillStyle = '#ecfdf5'; c.font = '800 40px system-ui'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText('▲▼ STAIRS', w / 2, h / 2 + 2); }, { frame: false });
  st.position.set(cx + 0.8, 2.6, CORE.z1 + 0.04); parent.add(st);
  parent.add(box(0.05, FH, 0.05, neonMat('#ffd59a', 1.4), { x: CORE.x1 + 0.03, y: FH / 2 - 0.6, z: CORE.z1 + 0.03, cast: false }));
}

export function buildRoof(parent) {
  const M = ctx.M;
  parent.add(box(FX * 2 + 0.6, 0.6, FZ * 2 + 0.6, M.plinth, { y: 0.3, cast: false }));
  parent.add(box(FX * 2 + 0.6, 0.04, 0.04, neonMat('#ffd59a', 1.6), { y: 0.62, z: FZ + 0.3, cast: false }));
  parent.add(box(CORE.x1 - CORE.x0, 1.4, CORE.z1 - CORE.z0, new THREE.MeshStandardMaterial({ color: 0xece8e1, roughness: 0.4 }), { x: (CORE.x0 + CORE.x1) / 2, y: 0.7, z: (CORE.z0 + CORE.z1) / 2 }));
  // rooftop plant/solar hint
  const pv = new THREE.MeshStandardMaterial({ color: 0x1e3a8a, roughness: 0.25, metalness: 0.6 });
  for (let i = 0; i < 6; i++) for (let j = 0; j < 2; j++) { const p = box(3.2, 0.05, 1.6, pv, { x: -11 + i * 3.6, y: 1.0, z: -5 + j * 2.2 }); p.rotation.x = -0.25; parent.add(p); }
}

// podium / quay the tower stands on (hides the basement below the waterline; front piece is removable for the B1 section view)
export const FOOT = { x0: -FX - 1.5, x1: CORE.x1 + 1.5, z0: -FZ - 1.5, z1: FZ + 1.5 };
export function buildPodium(scene, y0, y1) {
  const deck = new THREE.MeshStandardMaterial({ color: 0xd9d2c6, roughness: 0.7 });
  const h = y1 - y0, cy = (y0 + y1) / 2, X0 = -FX - 0.3, X1 = CORE.x1 + 0.3, Z0 = -FZ - 0.3, Z1 = FZ + 0.3, Q = 1.6;
  // narrow quay around the footprint (the sea comes right up to it)
  const parts = [
    box(Q, h, Z1 - Z0 + 2 * Q, deck, { x: X0 - Q / 2, y: cy, cast: false }),
    box(Q, h, Z1 - Z0 + 2 * Q, deck, { x: X1 + Q / 2, y: cy, cast: false }),
    box(X1 - X0, h, Q, deck, { x: (X0 + X1) / 2, y: cy, z: Z0 - Q / 2, cast: false }),
  ];
  const front = new THREE.Group();
  front.add(box(X1 - X0, h, Q, deck, { x: (X0 + X1) / 2, y: cy, z: Z1 + Q / 2, cast: false }));
  front.add(box(X1 - X0, h - 0.6, 0.2, deck, { x: (X0 + X1) / 2, y: cy - 0.3, z: Z1 - 0.1, cast: false })); // retaining wall (hidden in the B1 section view)
  [...parts, front].forEach((p) => scene.add(p));
  const edge = neonMat('#ffc070', 1.3);
  scene.add(box(X1 - X0 + 2 * Q, 0.05, 0.05, edge, { x: (X0 + X1) / 2, y: y1, z: Z1 + Q, cast: false }));
  scene.add(box(0.05, 0.05, Z1 - Z0 + 2 * Q, edge, { x: X1 + Q, y: y1, cast: false }));
  // section fill shown in front of B1 when the front podium is cut away
  return { front };
}
