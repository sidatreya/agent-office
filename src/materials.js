// Procedural canvas textures + shared refined materials (wood, marble, fabric, metals, glass).
import * as THREE from 'three';

function canvasTex(size, draw, repeat = [1, 1]) {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  draw(c.getContext('2d'), size);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(...repeat);
  t.anisotropy = 8;
  return t;
}

let rnd = 12345;
const rand = () => ((rnd = (rnd * 16807) % 2147483647) / 2147483647);

export function woodTexture(base = '#6b3f24', dark = '#3e2213', light = '#8a5532') {
  return canvasTex(512, (g, S) => {
    g.fillStyle = base; g.fillRect(0, 0, S, S);
    for (let i = 0; i < 140; i++) {
      const y0 = rand() * S, amp = 2 + rand() * 6, f = 0.004 + rand() * 0.01;
      g.strokeStyle = rand() < 0.5 ? dark : light;
      g.globalAlpha = 0.08 + rand() * 0.22;
      g.lineWidth = 0.6 + rand() * 2.2;
      g.beginPath();
      for (let x = 0; x <= S; x += 8) g.lineTo(x, y0 + Math.sin(x * f + i) * amp + Math.sin(x * f * 3.1) * amp * 0.3);
      g.stroke();
    }
    g.globalAlpha = 1;
  });
}

export function marbleTexture(repeat) {
  return canvasTex(1024, (g, S) => {
    const grd = g.createLinearGradient(0, 0, S, S);
    grd.addColorStop(0, '#1e1c3a'); grd.addColorStop(1, '#191832');
    g.fillStyle = grd; g.fillRect(0, 0, S, S);
    for (let i = 0; i < 2600; i++) { g.fillStyle = `rgba(255,255,255,${rand() * 0.035})`; g.fillRect(rand() * S, rand() * S, 2, 2); }
    for (let i = 0; i < 26; i++) {
      g.strokeStyle = rand() < 0.7 ? 'rgba(190,180,255,0.16)' : 'rgba(255,255,255,0.22)';
      g.lineWidth = 0.6 + rand() * 1.8;
      g.beginPath();
      let x = rand() * S, y = rand() * S;
      g.moveTo(x, y);
      for (let k = 0; k < 9; k++) { x += (rand() - 0.3) * 160; y += (rand() - 0.5) * 120; g.lineTo(x, y); }
      g.stroke();
    }
    // tile grout: 2x2 tiles per texture
    g.strokeStyle = 'rgba(8,8,20,0.75)'; g.lineWidth = 3;
    for (const p of [0, S / 2]) { g.beginPath(); g.moveTo(p, 0); g.lineTo(p, S); g.stroke(); g.beginPath(); g.moveTo(0, p); g.lineTo(S, p); g.stroke(); }
  }, repeat);
}

export function whiteMarbleTexture() {
  return canvasTex(512, (g, S) => {
    g.fillStyle = '#eceaf2'; g.fillRect(0, 0, S, S);
    for (let i = 0; i < 18; i++) {
      g.strokeStyle = `rgba(120,115,150,${0.1 + rand() * 0.2})`; g.lineWidth = 0.5 + rand() * 1.5;
      g.beginPath(); let x = rand() * S, y = rand() * S; g.moveTo(x, y);
      for (let k = 0; k < 7; k++) { x += (rand() - 0.4) * 120; y += (rand() - 0.5) * 90; g.lineTo(x, y); }
      g.stroke();
    }
  });
}

export function fabricTexture(color, repeat = [4, 4]) {
  return canvasTex(256, (g, S) => {
    g.fillStyle = color; g.fillRect(0, 0, S, S);
    for (let y = 0; y < S; y += 3) { g.fillStyle = `rgba(0,0,0,${0.05 + rand() * 0.05})`; g.fillRect(0, y, S, 1); }
    for (let x = 0; x < S; x += 3) { g.fillStyle = `rgba(255,255,255,${0.02 + rand() * 0.04})`; g.fillRect(x, 0, 1, S); }
  }, repeat);
}

export function makeMaterials() {
  const walnut = woodTexture();
  const oak = woodTexture('#b08356', '#7a5432', '#cfa577');
  return {
    walnut: new THREE.MeshStandardMaterial({ map: walnut, roughness: 0.42, metalness: 0.0 }),
    oak: new THREE.MeshStandardMaterial({ map: oak, roughness: 0.5 }),
    floor: new THREE.MeshStandardMaterial({ map: marbleTexture([7.5, 4.5]), roughness: 0.34, metalness: 0.05, envMapIntensity: 0.8 }),
    marbleWhite: new THREE.MeshStandardMaterial({ map: whiteMarbleTexture(), roughness: 0.15, metalness: 0.0 }),
    plinth: new THREE.MeshStandardMaterial({ color: 0x14132b, roughness: 0.7 }),
    bronze: new THREE.MeshStandardMaterial({ color: 0x3a3048, roughness: 0.35, metalness: 0.85 }),
    brass: new THREE.MeshStandardMaterial({ color: 0xc9a227, roughness: 0.28, metalness: 1.0 }),
    blackMetal: new THREE.MeshStandardMaterial({ color: 0x1b1b24, roughness: 0.4, metalness: 0.7 }),
    whiteMatte: new THREE.MeshStandardMaterial({ color: 0xf0eff6, roughness: 0.55 }),
    ceramic: new THREE.MeshStandardMaterial({ color: 0xf4f2ee, roughness: 0.22 }),
    terracotta: new THREE.MeshStandardMaterial({ color: 0xb4532a, roughness: 0.75 }),
    graphite: new THREE.MeshStandardMaterial({ color: 0x1c1c2a, roughness: 0.3, metalness: 0.6 }),
    velvetPlum: new THREE.MeshStandardMaterial({ map: fabricTexture('#4b2a6b'), roughness: 0.92 }),
    velvetTeal: new THREE.MeshStandardMaterial({ map: fabricTexture('#1f5560'), roughness: 0.92 }),
    linen: new THREE.MeshStandardMaterial({ map: fabricTexture('#d8cfc0'), roughness: 0.95 }),
    leather: new THREE.MeshStandardMaterial({ color: 0x6b3a22, roughness: 0.45, metalness: 0.05 }),
    rugIndigo: new THREE.MeshStandardMaterial({ map: fabricTexture('#2b2a62', [8, 8]), roughness: 1 }),
    rugSand: new THREE.MeshStandardMaterial({ map: fabricTexture('#5a4b6e', [8, 8]), roughness: 1 }),
    leaf: new THREE.MeshStandardMaterial({ color: 0x2f7d4a, roughness: 0.55, side: THREE.DoubleSide }),
    leaf2: new THREE.MeshStandardMaterial({ color: 0x3f9a5a, roughness: 0.55, side: THREE.DoubleSide }),
    glass: new THREE.MeshPhysicalMaterial({
      color: 0xbfcaff, transparent: true, opacity: 0.1, roughness: 0.05, metalness: 0.0,
      envMapIntensity: 0.5, side: THREE.DoubleSide, depthWrite: false,
    }),
  };
}

// Equirect dusk environment for subtle reflections (glass, marble, metals)
export function makeEnvironment(renderer) {
  const c = document.createElement('canvas');
  c.width = 1024; c.height = 512;
  const g = c.getContext('2d');
  const sky = g.createLinearGradient(0, 0, 0, 512);
  sky.addColorStop(0, '#05051a'); sky.addColorStop(0.42, '#2a1658'); sky.addColorStop(0.5, '#c2416f'); sky.addColorStop(0.53, '#3a1d55'); sky.addColorStop(1, '#0a0820');
  g.fillStyle = sky; g.fillRect(0, 0, 1024, 512);
  const spot = (x, y, r, col) => { const gr = g.createRadialGradient(x, y, 0, x, y, r); gr.addColorStop(0, col); gr.addColorStop(1, 'rgba(0,0,0,0)'); g.fillStyle = gr; g.fillRect(x - r, y - r, r * 2, r * 2); };
  spot(330, 225, 22, 'rgba(255,240,220,0.4)');
  spot(330, 240, 200, 'rgba(255,140,100,0.22)');
  spot(800, 300, 160, 'rgba(255,170,90,0.35)');
  spot(600, 330, 120, 'rgba(255,120,200,0.25)');
  const tex = new THREE.CanvasTexture(c);
  tex.mapping = THREE.EquirectangularReflectionMapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  const pmrem = new THREE.PMREMGenerator(renderer);
  const env = pmrem.fromEquirectangular(tex).texture;
  pmrem.dispose();
  return env;
}
