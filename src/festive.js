// Festive (Diwali-style) decor: twinkling string lights, marigold garlands,
// akash-kandil paper lanterns, flickering diyas and rangoli floor art.
import * as THREE from 'three';

const LIGHT_COLORS = ['#ffb703', '#fb8500', '#ff006e', '#c77dff', '#3a86ff', '#ffd166', '#06d6a0'].map((c) => new THREE.Color(c));

// points along a sagging line between a and b, with a swag every `span` units
function swagPoints(a, b, step, span, sag) {
  const len = a.distanceTo(b);
  const n = Math.max(2, Math.round(len / step));
  const out = [];
  for (let i = 0; i <= n; i++) {
    const t = i / n;
    const p = a.clone().lerp(b, t);
    const s = ((t * len) % span) / span; // 0..1 within a swag
    p.y -= Math.sin(s * Math.PI) * sag;
    out.push(p);
  }
  return out;
}

export function buildFestive(scene) {
  const updaters = [];

  // ---------- string lights ----------
  function stringLights(segments) {
    const all = segments.flatMap(([a, b, sag, span]) => swagPoints(a, b, 0.32, span || 2.5, sag));
    const mesh = new THREE.InstancedMesh(new THREE.SphereGeometry(0.055, 8, 6), new THREE.MeshBasicMaterial({ color: new THREE.Color(1, 1, 1).multiplyScalar(2.4) }), all.length);
    const m = new THREE.Matrix4();
    const base = [];
    all.forEach((p, i) => {
      m.makeTranslation(p.x, p.y, p.z);
      mesh.setMatrixAt(i, m);
      const c = LIGHT_COLORS[i % LIGHT_COLORS.length];
      base.push(c);
      mesh.setColorAt(i, c);
    });
    scene.add(mesh);
    // wire
    segments.forEach(([a, b, sag, span]) => {
      const g = new THREE.BufferGeometry().setFromPoints(swagPoints(a, b, 0.15, span || 2.5, sag));
      scene.add(new THREE.Line(g, new THREE.LineBasicMaterial({ color: 0x3a3366 })));
    });
    let last = 0;
    const tmp = new THREE.Color();
    updaters.push((t) => {
      if (t - last < 0.12) return;
      last = t;
      for (let i = 0; i < base.length; i++) {
        const k = 0.35 + 0.65 * (0.5 + 0.5 * Math.sin(t * 2.4 + i * 1.7));
        mesh.setColorAt(i, tmp.copy(base[i]).multiplyScalar(k));
      }
      mesh.instanceColor.needsUpdate = true;
    });
  }

  // ---------- marigold garlands (toran) ----------
  function garlands(segments) {
    const pts = segments.flatMap(([a, b, sag, span]) => swagPoints(a, b, 0.085, span || 1.25, sag));
    const mesh = new THREE.InstancedMesh(
      new THREE.IcosahedronGeometry(0.06, 0),
      new THREE.MeshStandardMaterial({ roughness: 0.8, emissive: 0xff7a00, emissiveIntensity: 0.35 }),
      pts.length
    );
    const m = new THREE.Matrix4();
    const cols = [new THREE.Color('#ff9f1c'), new THREE.Color('#ffbf00'), new THREE.Color('#ff7b00')];
    pts.forEach((p, i) => {
      m.makeTranslation(p.x, p.y, p.z);
      mesh.setMatrixAt(i, m);
      mesh.setColorAt(i, cols[Math.floor(i / 3) % cols.length]);
    });
    scene.add(mesh);
  }

  // ---------- akash kandil lanterns ----------
  const lanterns = [];
  function lantern(x, y, z, color, s = 1) {
    const g = new THREE.Group();
    const c = new THREE.Color(color);
    const mat = new THREE.MeshStandardMaterial({ color: c, emissive: c, emissiveIntensity: 1.6, roughness: 0.6, side: THREE.DoubleSide });
    const top = new THREE.Mesh(new THREE.ConeGeometry(0.34, 0.36, 8, 1, true), mat);
    top.position.y = 0.18;
    const bot = new THREE.Mesh(new THREE.ConeGeometry(0.34, 0.36, 8, 1, true), mat);
    bot.rotation.x = Math.PI; bot.position.y = -0.18;
    const band = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 0.08, 8), new THREE.MeshStandardMaterial({ color: 0xffd166, emissive: 0xffb703, emissiveIntensity: 0.8 }));
    g.add(top, bot, band);
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2;
      const tassel = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.5, 0.02), mat);
      tassel.position.set(Math.cos(a) * 0.12, -0.6, Math.sin(a) * 0.12);
      g.add(tassel);
    }
    const strLen = 7.2 - y;
    const str = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, strLen, 4), new THREE.MeshBasicMaterial({ color: 0x55507a }));
    str.position.y = 0.36 + strLen / 2 - 0.36;
    g.add(str);
    g.scale.setScalar(s);
    g.position.set(x, y, z);
    scene.add(g);
    lanterns.push(g);
  }
  updaters.push((t) => lanterns.forEach((l, i) => { l.rotation.y = t * 0.3 + i; l.rotation.z = Math.sin(t * 0.8 + i) * 0.04; }));

  // ---------- diyas ----------
  const flames = [];
  const clay = new THREE.MeshStandardMaterial({ color: 0xc2410c, roughness: 0.8, emissive: 0x7c2d12, emissiveIntensity: 0.3 });
  const flameMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(3.2, 1.9, 0.5) });
  const diyaGeo = new THREE.SphereGeometry(0.13, 14, 8, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2);
  const flameGeo = new THREE.ConeGeometry(0.035, 0.13, 8);
  function diya(x, z, y = 0) {
    const d = new THREE.Mesh(diyaGeo, clay);
    d.scale.y = 0.55;
    d.position.set(x, y + 0.075, z);
    const f = new THREE.Mesh(flameGeo, flameMat);
    f.position.set(x, y + 0.13, z);
    scene.add(d, f);
    flames.push(f);
  }
  updaters.push((t) => flames.forEach((f, i) => { const k = 0.85 + Math.sin(t * 13 + i * 2.1) * 0.12 + Math.sin(t * 7.3 + i) * 0.08; f.scale.set(1, k, 1); }));

  // ---------- rangoli ----------
  function rangoli(x, z, r, seed = 0) {
    const S = 512;
    const c = document.createElement('canvas');
    c.width = c.height = S;
    const g = c.getContext('2d');
    const pal = [['#ff006e', '#ffbe0b', '#3a86ff', '#8338ec', '#fb5607'], ['#06d6a0', '#ffd166', '#ef476f', '#118ab2', '#f78c6b'], ['#c77dff', '#ff9e00', '#00bbf9', '#f15bb5', '#fee440']][seed % 3];
    g.translate(S / 2, S / 2);
    const rings = [[0.92, 24, 0.09], [0.74, 16, 0.12], [0.55, 12, 0.13], [0.36, 8, 0.14]];
    g.fillStyle = 'rgba(255,255,255,0.9)'; g.beginPath(); g.arc(0, 0, S * 0.48, 0, Math.PI * 2); g.fill();
    g.fillStyle = pal[4]; g.beginPath(); g.arc(0, 0, S * 0.465, 0, Math.PI * 2); g.fill();
    rings.forEach(([rr, n, w], k) => {
      g.fillStyle = pal[k % 4];
      g.beginPath(); g.arc(0, 0, S * 0.5 * rr, 0, Math.PI * 2); g.fill();
      for (let i = 0; i < n; i++) {
        g.save(); g.rotate((i / n) * Math.PI * 2 + k * 0.2);
        g.fillStyle = pal[(k + 1) % 4];
        g.beginPath(); g.ellipse(0, -S * 0.5 * (rr - w * 0.6), S * w * 0.18, S * w * 0.42, 0, 0, Math.PI * 2); g.fill();
        g.fillStyle = '#ffffff';
        g.beginPath(); g.arc(0, -S * 0.5 * (rr - 0.02), 4, 0, Math.PI * 2); g.fill();
        g.restore();
      }
    });
    g.fillStyle = '#ffffff'; g.beginPath(); g.arc(0, 0, S * 0.07, 0, Math.PI * 2); g.fill();
    g.fillStyle = pal[0]; g.beginPath(); g.arc(0, 0, S * 0.045, 0, Math.PI * 2); g.fill();
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    const mat = new THREE.MeshStandardMaterial({ map: tex, transparent: true, roughness: 0.9, emissive: 0xffffff, emissiveMap: tex, emissiveIntensity: 0.35 });
    const m = new THREE.Mesh(new THREE.CircleGeometry(r, 64), mat);
    m.rotation.x = -Math.PI / 2;
    m.position.set(x, 0.011, z);
    m.receiveShadow = true;
    scene.add(m);
    const n = Math.round(r * 5);
    for (let i = 0; i < n; i++) { const a = (i / n) * Math.PI * 2; diya(x + Math.cos(a) * (r + 0.28), z + Math.sin(a) * (r + 0.28)); }
  }

  return {
    stringLights, garlands, lantern, diya, rangoli,
    update: (t) => updaters.forEach((u) => u(t)),
  };
}
