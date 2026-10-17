import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

export const FX = 15, FZ = 9;     // floor half-extents (local)
export const WH = 7;              // glass wall height per floor
export const FH = 7.6;            // floor-to-floor height (stacked)
export const ctx = { M: null };   // shared materials (set by buildWorld)

export const neonMat = (color, k = 3) => new THREE.MeshBasicMaterial({ color: new THREE.Color(color).multiplyScalar(k) });
export const stdMat = (color, o = {}) => new THREE.MeshStandardMaterial({ color, roughness: 0.6, ...o });

export function mesh(geo, mat, { x = 0, y = 0, z = 0, cast = true, receive = true } = {}) {
  const m = new THREE.Mesh(geo, mat);
  m.position.set(x, y, z);
  m.castShadow = cast;
  m.receiveShadow = receive;
  return m;
}
export const box = (w, h, d, mat, p) => mesh(new THREE.BoxGeometry(w, h, d), mat, p);
export const rbox = (w, h, d, r, mat, p) => mesh(new RoundedBoxGeometry(w, h, d, 3, r), mat, p);
export const cyl = (rt, rb, h, mat, p, seg = 24) => mesh(new THREE.CylinderGeometry(rt, rb, h, seg), mat, p);

export function radialTexture(inner, outer = 'rgba(0,0,0,0)') {
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

export function canvasTexture(w, h, draw) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  return t;
}

export function roundRect(g, x, y, w, h, r) {
  g.beginPath(); g.moveTo(x + r, y); g.arcTo(x + w, y, x + w, y + h, r); g.arcTo(x + w, y + h, x, y + h, r);
  g.arcTo(x, y + h, x, y, r); g.arcTo(x, y, x + w, y, r); g.closePath();
}

// flat sign / panel with canvas text, facing +z
export function signPanel(w, h, draw, { pxPerUnit = 200, emissive = 0.9, frame = true } = {}) {
  const tex = canvasTexture(Math.round(w * pxPerUnit), Math.round(h * pxPerUnit), draw);
  const g = new THREE.Group();
  const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ map: tex, color: new THREE.Color(emissive, emissive, emissive) }));
  m.position.z = 0.03;
  g.add(m);
  if (frame) g.add(rbox(w + 0.1, h + 0.1, 0.05, 0.02, ctx.M.graphite, {}));
  return g;
}

const pad2 = (n) => String(n).padStart(2, '0');
export const fmtTime = (d) => `${pad2(d.getHours())}:${pad2(d.getMinutes())}:${pad2(d.getSeconds())}`;
