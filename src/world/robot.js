// Cute robot used for agents, floor managers and the design team.
import * as THREE from 'three';
import { mesh, rbox, cyl, radialTexture } from './common.js';

const geoCache = {};
const G = (k, f) => geoCache[k] || (geoCache[k] = f());

export function makeRobot(color, { scale = 1.3, ring = true, manager = false } = {}) {
  const col = new THREE.Color(color);
  const robot = new THREE.Group();
  robot.scale.setScalar(scale);
  const white = new THREE.MeshPhysicalMaterial({ color: 0xf6f6fc, roughness: 0.28, clearcoat: 0.6, clearcoatRoughness: 0.2 });
  const accent = new THREE.MeshPhysicalMaterial({ color: col, roughness: 0.3, clearcoat: 0.5, emissive: col, emissiveIntensity: 0.1 });
  const dark = new THREE.MeshStandardMaterial({ color: 0x14142e, roughness: 0.15, metalness: 0.4 });
  const eyeMat = new THREE.MeshBasicMaterial({ color: col.clone().multiplyScalar(2.2) });
  const legs = [];
  for (const sx of [-1, 1]) {
    const leg = new THREE.Group(); leg.position.set(sx * 0.15, 0.46, 0);
    leg.add(mesh(G('leg', () => new THREE.CylinderGeometry(0.08, 0.08, 0.42, 12)), dark, { y: -0.21 }));
    leg.add(rbox(0.2, 0.1, 0.28, 0.04, accent, { y: -0.41, z: 0.03 }));
    robot.add(leg); legs.push(leg);
  }
  const body = new THREE.Group(); body.position.y = 0.5; robot.add(body);
  body.add(rbox(0.66, 0.62, 0.48, 0.16, accent, { y: 0.32 }));
  body.add(rbox(0.38, 0.28, 0.06, 0.05, white, { y: 0.32, z: 0.23 }));
  body.add(mesh(G('chest', () => new THREE.CircleGeometry(0.05, 16)), eyeMat, { y: 0.36, z: 0.265, cast: false }));
  const arms = [];
  for (const sx of [-1, 1]) {
    const pivot = new THREE.Group();
    pivot.position.set(sx * 0.4, 0.52, 0);
    pivot.add(mesh(G('arm', () => new THREE.CapsuleGeometry(0.075, 0.32, 4, 10)), white, { y: -0.2 }));
    pivot.add(mesh(G('hand', () => new THREE.SphereGeometry(0.09, 12, 10)), accent, { y: -0.42 }));
    pivot.rotation.z = sx * 0.12;
    body.add(pivot); arms.push(pivot);
  }
  const head = new THREE.Group(); head.position.y = 0.98; body.add(head);
  head.add(rbox(0.82, 0.6, 0.62, 0.2, white, {}));
  head.add(rbox(0.64, 0.36, 0.08, 0.1, dark, { z: 0.3, cast: false }));
  const eyes = [];
  for (const sx of [-1, 1]) { const e = mesh(G('eye', () => new THREE.CapsuleGeometry(0.045, 0.06, 4, 8)), eyeMat, { x: sx * 0.14, y: 0.01, z: 0.345, cast: false }); head.add(e); eyes.push(e); }
  for (const sx of [-1, 1]) { const ear = cyl(0.1, 0.1, 0.08, accent, { x: sx * 0.43 }, 16); ear.rotation.z = Math.PI / 2; head.add(ear); }
  head.add(cyl(0.015, 0.015, 0.22, dark, { y: 0.4 }, 6));
  const bulb = mesh(G('bulb', () => new THREE.SphereGeometry(0.06, 14, 10)), eyeMat, { y: 0.53, cast: false });
  head.add(bulb);
  if (manager) {
    // manager: gold tie + clipboard + little cap
    const gold = new THREE.MeshStandardMaterial({ color: 0xeab308, metalness: 0.8, roughness: 0.3 });
    const tie = mesh(new THREE.ConeGeometry(0.06, 0.26, 4), gold, { y: 0.42, z: 0.27 }); tie.rotation.x = Math.PI; body.add(tie);
    const cap = cyl(0.3, 0.33, 0.1, new THREE.MeshStandardMaterial({ color: 0x1e1b4b, roughness: 0.6 }), { y: 0.34 }, 20); head.add(cap);
    head.add(cyl(0.34, 0.34, 0.02, gold, { y: 0.3 }, 20));
    const board = rbox(0.28, 0.36, 0.03, 0.02, new THREE.MeshStandardMaterial({ color: 0x8b5a2b, roughness: 0.6 }), { y: -0.38, z: 0.12 });
    board.add(mesh(new THREE.PlaneGeometry(0.22, 0.28), new THREE.MeshBasicMaterial({ color: 0xf8fafc }), { z: 0.02, cast: false }));
    board.rotation.x = -0.5; arms[1].add(board);
  }
  let ringMat = null, ringMesh = null;
  if (ring) {
    ringMat = new THREE.MeshBasicMaterial({ color: col.clone().multiplyScalar(2.0), transparent: true, opacity: 0.9, side: THREE.DoubleSide });
    ringMesh = new THREE.Mesh(G('ring', () => new THREE.RingGeometry(0.62, 0.71, 64)), ringMat);
    ringMesh.rotation.x = -Math.PI / 2; ringMesh.position.y = 0.012;
    robot.add(ringMesh);
    const glow = new THREE.Mesh(G('glow', () => new THREE.PlaneGeometry(2.4, 2.4)), new THREE.MeshBasicMaterial({ map: radialTexture(`rgba(${(col.r * 255) | 0},${(col.g * 255) | 0},${(col.b * 255) | 0},0.5)`), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
    glow.rotation.x = -Math.PI / 2; glow.position.y = 0.01;
    robot.add(glow);
  }
  const phase = Math.random() * 10;
  let blinkAt = 2 + Math.random() * 4;
  const lerp = THREE.MathUtils.lerp;

  function update(t, mode = 'idle') {
    if (mode === 'walking') {
      const s = Math.sin(t * 7 + phase);
      legs[0].rotation.x = s * 0.45; legs[1].rotation.x = -s * 0.45;
      arms[0].rotation.x = -s * 0.35; arms[1].rotation.x = lerp(arms[1].rotation.x, -0.6, 0.1);
      body.position.y = 0.5 + Math.abs(Math.cos(t * 7 + phase)) * 0.04;
      head.rotation.y = lerp(head.rotation.y, Math.sin(t * 0.7) * 0.25, 0.05);
    } else {
      legs[0].rotation.x = lerp(legs[0].rotation.x, 0, 0.15); legs[1].rotation.x = lerp(legs[1].rotation.x, 0, 0.15);
      body.position.y = 0.5 + Math.sin(t * 2.2 + phase) * 0.035;
    }
    if (mode === 'working') {
      head.rotation.y = lerp(head.rotation.y, -0.25 + Math.sin(t * 0.8 + phase) * 0.12, 0.08);
      head.rotation.x = lerp(head.rotation.x, 0.2, 0.08);
      arms[0].rotation.x = -1.05 + Math.sin(t * 16 + phase) * 0.14;
      arms[1].rotation.x = -1.05 + Math.sin(t * 16 + phase + Math.PI) * 0.14;
      eyeMat.color.copy(col).multiplyScalar(2.4 + Math.sin(t * 9) * 0.5);
      if (ringMat) { ringMat.opacity = 0.75 + Math.sin(t * 5) * 0.25; ringMesh.scale.setScalar(1 + Math.sin(t * 3) * 0.05); }
    } else if (mode === 'idle') {
      head.rotation.y = lerp(head.rotation.y, Math.sin(t * 0.55 + phase) * 0.6, 0.05);
      head.rotation.x = lerp(head.rotation.x, 0, 0.05);
      arms[0].rotation.x = lerp(arms[0].rotation.x, Math.sin(t * 1.6 + phase) * 0.08, 0.1);
      arms[1].rotation.x = lerp(arms[1].rotation.x, manager ? -0.6 : -Math.sin(t * 1.6 + phase) * 0.08, 0.1);
      eyeMat.color.copy(col).multiplyScalar(1.5);
      if (ringMat) { ringMat.opacity = 0.4; ringMesh.scale.setScalar(1); }
    }
    const blinking = t > blinkAt && t < blinkAt + 0.12;
    eyes.forEach((e) => (e.scale.y = blinking ? 0.15 : 1));
    if (t > blinkAt + 0.12) blinkAt = t + 2.5 + Math.random() * 4;
    bulb.scale.setScalar(1 + Math.sin(t * 4 + phase) * 0.15);
  }
  return { group: robot, head, body, arms, update };
}
