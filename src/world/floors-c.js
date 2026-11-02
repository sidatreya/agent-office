// Floor 05 · Recreation: Dab Lab (blown-glass gallery + dabber bar) and Dispensary (rosin, extracts, flower).
import * as THREE from 'three';
import { ctx, FX, FZ, box, rbox, cyl, mesh, neonMat, signPanel, roundRect } from './common.js';
import * as P from './props.js';
import { totem } from './floors-a.js';

const glassMat = (hex, o = 0.55) => new THREE.MeshPhysicalMaterial({ color: hex, transparent: true, opacity: o, roughness: 0.04, metalness: 0, transmission: 0.4, clearcoat: 1, side: THREE.DoubleSide });

function menuBoard(g, title, color, lines, x, y, z, rotY = 0, w = 4.2, h = 2.4) {
  const s = signPanel(w, h, (c, W, H) => {
    c.fillStyle = '#0a0812'; c.fillRect(0, 0, W, H);
    c.fillStyle = color; c.fillRect(0, 0, W, 10);
    c.fillStyle = '#f8fafc'; c.font = '800 58px Georgia, serif'; c.textBaseline = 'alphabetic'; c.fillText(title, 34, 80);
    c.font = '600 32px system-ui';
    lines.forEach((t, i) => { c.fillStyle = i % 2 ? '#cbd5e1' : color; c.fillText(t, 34, 140 + i * 46); });
  }, { pxPerUnit: 200 });
  s.position.set(x, y, z); s.rotation.y = rotY; g.add(s); return s;
}

// blown-glass piece: base + bulb + neck + mouthpiece, random-ish colours
function glassPiece(p, x, y, z, s, hue) {
  const col = new THREE.Color().setHSL(hue, 0.75, 0.6);
  const m = glassMat(col, 0.6);
  p.add(cyl(0.11 * s, 0.13 * s, 0.05 * s, m, { x, y: y + 0.025 * s, z }, 16));
  const bulb = mesh(new THREE.SphereGeometry(0.11 * s, 18, 14), m, { x, y: y + 0.15 * s, z }); p.add(bulb);
  p.add(cyl(0.03 * s, 0.045 * s, 0.32 * s, m, { x, y: y + 0.4 * s, z }, 12));
  p.add(cyl(0.05 * s, 0.03 * s, 0.06 * s, m, { x, y: y + 0.59 * s, z }, 12));
  const arm = cyl(0.015 * s, 0.015 * s, 0.14 * s, m, { x: x + 0.09 * s, y: y + 0.16 * s, z }, 8); arm.rotation.z = -0.9; p.add(arm);
}
// electronic dabber (Peak-style egg on a base)
function dabber(p, x, y, z, color, glow) {
  p.add(cyl(0.07, 0.08, 0.1, new THREE.MeshStandardMaterial({ color, roughness: 0.35, metalness: 0.3 }), { x, y: y + 0.05, z }, 20));
  p.add(box(0.1, 0.012, 0.012, neonMat(glow, 2.4), { x, y: y + 0.06, z: z + 0.08, cast: false }));
  p.add(cyl(0.025, 0.04, 0.14, glassMat(0xdbeafe, 0.5), { x, y: y + 0.17, z }, 12));
}
function displayCase(g, x, z, w, rotY = 0) { // glass-topped lit vitrine on a black plinth
  const M = ctx.M, grp = new THREE.Group(); grp.position.set(x, 0, z); grp.rotation.y = rotY; g.add(grp);
  grp.add(rbox(w, 0.9, 0.7, 0.03, M.blackMetal, { y: 0.45 }));
  grp.add(box(w - 0.06, 0.02, 0.64, neonMat('#fde68a', 1.3), { y: 0.91, cast: false }));
  const lid = mesh(new THREE.BoxGeometry(w, 0.7, 0.7), M.glass, { y: 1.27, cast: false, receive: false }); lid.renderOrder = 5; grp.add(lid);
  return grp;
}

export function buildRecreation(g) {
  const M = ctx.M;
  // zoning: Dab Lab (left), lounge (centre front), Dispensary (right)
  P.rug(g, -7.5, 1.0, 12, 8, M.rugIndigo);
  P.rug(g, 7.5, 1.0, 12, 8, M.rugSand);
  P.glassWalls(g, [[-0.6, -FZ, -0.6, -3.0], [0.6, -FZ, 0.6, -3.0]], 3.0, { tint: 0xc4b5fd });

  // ── DAB LAB ──
  P.labelSign(g, 'DAB LAB', -7.5, 5.4, -FZ + 0.35, 0, { w: 5, h: 0.9, bg: '#14092a', fg: '#c4b5fd', size: 120 });
  P.labelSign(g, 'Blown-glass gallery · dabber bar', -7.5, 4.65, -FZ + 0.35, 0, { w: 5, h: 0.4, bg: '#14092a', fg: '#e9d5ff', size: 46 });
  // back-lit glass gallery wall: three shelves of heady pieces
  g.add(box(12, 3.2, 0.3, M.graphite, { x: -7.5, y: 2.3, z: -FZ + 0.25 }));
  for (let r = 0; r < 3; r++) {
    const y = 1.1 + r * 0.95;
    g.add(box(11.4, 0.05, 0.5, M.glass, { x: -7.5, y, z: -FZ + 0.6, cast: false }));
    g.add(box(11.4, 0.02, 0.02, neonMat('#a78bfa', 2), { x: -7.5, y: y + 0.03, z: -FZ + 0.84, cast: false }));
    for (let i = 0; i < 12; i++) glassPiece(g, -12.8 + i * 0.95, y + 0.03, -FZ + 0.6, 1.1, ((i * 7 + r * 3) % 12) / 12);
  }
  // centre vitrines: showcase heady glass
  const v1 = displayCase(g, -10.0, -2.2, 3.0), v2 = displayCase(g, -5.0, -2.2, 3.0);
  for (let i = 0; i < 4; i++) { glassPiece(v1, -1.05 + i * 0.7, 0.92, 0, 1.25, i / 4); glassPiece(v2, -1.05 + i * 0.7, 0.92, 0, 1.25, (i + 0.5) / 4); }
  // dabber bar: counter with electronic rigs from premium brands
  g.add(rbox(8.5, 1.05, 0.9, 0.05, M.walnut, { x: -7.5, y: 0.53, z: 1.6 }));
  g.add(box(8.6, 0.05, 1.0, M.marbleWhite, { x: -7.5, y: 1.08, z: 1.6 }));
  g.add(box(8.5, 0.03, 0.03, neonMat('#c084fc', 2), { x: -7.5, y: 0.1, z: 2.08, cast: false }));
  const rigs = [[0x111111, '#22d3ee'], [0xe5e7eb, '#a3e635'], [0x6b21a8, '#f0abfc'], [0x0f766e, '#5eead4'], [0xb45309, '#fde047'], [0x1e3a8a, '#60a5fa']];
  rigs.forEach(([c, gl], i) => dabber(g, -11.0 + i * 1.4, 1.1, 1.6, c, gl));
  for (let i = 0; i < 5; i++) P.officeChair(g, -10.6 + i * 1.55, 2.7, Math.PI, 0x2e1065);
  menuBoard(g, 'Dabber brands', '#c084fc', ['Puffco Peak Pro · Proxy', 'Dr. Dabber Switch · Boost EVO', 'Focus V Carta 2', 'Storz & Bickel', 'Lookah Seahorse · Halo'], -14.65, 3.0, -0.6, Math.PI / 2, 4.2, 2.6);
  menuBoard(g, 'Glass on show', '#a78bfa', ['Heady recyclers & incyclers', 'Worked-glass rigs & sculptures', 'Quartz bangers · carb caps', 'Terp pearls · spinner caps'], -14.65, 3.0, 4.6, Math.PI / 2, 4.2, 2.2);

  // ── centre lounge ──
  P.sofa(g, 0, 7.2, Math.PI, M.velvetPlum, 3.0);
  P.armchair(g, -1.9, 5.6, Math.PI / 2, M.velvetTeal); P.armchair(g, 1.9, 5.6, -Math.PI / 2, M.velvetTeal);
  P.coffeeTable(g, 0, 5.6, 0.6);
  P.floorLamp(g, -2.8, 7.6, 0xc4b5fd); P.floorLamp(g, 2.8, 7.6, 0x86efac);

  // ── DISPENSARY ──
  P.labelSign(g, 'DISPENSARY', 7.5, 5.4, -FZ + 0.35, 0, { w: 5, h: 0.9, bg: '#05210f', fg: '#86efac', size: 110 });
  P.labelSign(g, 'Rosin · extracts · flower', 7.5, 4.65, -FZ + 0.35, 0, { w: 5, h: 0.4, bg: '#05210f', fg: '#d9f99d', size: 46 });
  // apothecary wall: jars on walnut shelves
  g.add(box(12, 3.2, 0.3, M.walnut, { x: 7.5, y: 2.3, z: -FZ + 0.25 }));
  const jarLid = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.4, metalness: 0.5 });
  for (let r = 0; r < 3; r++) {
    const y = 1.1 + r * 0.95;
    g.add(box(11.4, 0.05, 0.5, M.oak, { x: 7.5, y, z: -FZ + 0.6 }));
    g.add(box(11.4, 0.02, 0.02, neonMat('#86efac', 1.6), { x: 7.5, y: y + 0.03, z: -FZ + 0.84, cast: false }));
    for (let i = 0; i < 16; i++) {
      const x = 2.1 + i * 0.72, fill = new THREE.Color().setHSL(r === 0 ? 0.3 : r === 1 ? 0.12 : 0.09, 0.7, 0.35 + (i % 4) * 0.08);
      g.add(cyl(0.12, 0.12, 0.26, glassMat(0xffffff, 0.35), { x, y: y + 0.16, z: -FZ + 0.6 }, 14));
      g.add(cyl(0.1, 0.1, 0.16, new THREE.MeshStandardMaterial({ color: fill, roughness: 0.8 }), { x, y: y + 0.11, z: -FZ + 0.6 }, 12));
      g.add(cyl(0.125, 0.125, 0.05, jarLid, { x, y: y + 0.31, z: -FZ + 0.6 }, 14));
    }
  }
  // service counter + display cases
  g.add(rbox(8.5, 1.05, 0.9, 0.05, M.oak, { x: 7.5, y: 0.53, z: 1.6 }));
  g.add(box(8.6, 0.05, 1.0, M.marbleWhite, { x: 7.5, y: 1.08, z: 1.6 }));
  g.add(box(8.5, 0.03, 0.03, neonMat('#4ade80', 2), { x: 7.5, y: 0.1, z: 2.08, cast: false }));
  for (let i = 0; i < 8; i++) { // rosin/extract tins on the counter
    const col = new THREE.Color().setHSL(0.11, 0.85, 0.45 + (i % 3) * 0.08);
    g.add(cyl(0.1, 0.1, 0.06, M.brass, { x: 4.2 + i * 0.9, y: 1.14, z: 1.5 }, 16));
    g.add(cyl(0.085, 0.085, 0.02, new THREE.MeshPhysicalMaterial({ color: col, roughness: 0.15, clearcoat: 1 }), { x: 4.2 + i * 0.9, y: 1.18, z: 1.5 }, 16));
  }
  displayCase(g, 5.0, -2.2, 3.0); displayCase(g, 10.0, -2.2, 3.0);
  menuBoard(g, 'Today\'s menu', '#4ade80', ['Live rosin · cold-cure badder', 'Hash rosin · full-melt bubble hash', 'Live resin · diamonds & sauce', 'Top-shelf flower · indoor craft', 'Pre-rolls · edibles'], 14.0, 3.0, 4.6, -Math.PI / 2, 4.2, 2.6);
  P.plant(g, -14.2, -8.2, 1.1, 1); P.plant(g, 14.2, 7.9, 1.0, 0); P.plant(g, -14.2, 7.6, 1.0, 0); P.plant(g, 4.2, 7.6, 0.9, 1); P.plant(g, -4.2, 7.6, 0.9, 1);

  return {
    waypoints: [[-3.0, 3.6], [-12.0, 3.6], [-12.0, -0.6], [12.0, -0.6], [12.0, 3.6], [3.0, 3.6]],
    board: totem(g, 3.6, 5.4, -0.3),
    light: [[-7.5, 0], [7.5, 0]], lightColor: 0xe9c8ff,
  };
}
