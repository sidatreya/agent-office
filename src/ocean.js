// Ocean vista at dusk: sky dome with moon + glow + stars, animated water, distant city & boat lights.
import * as THREE from 'three';

const R = 46;            // dome radius (camera stays inside)
const WATER_Y = -1.8;    // sea level (building plinth sits on it)

export function buildOcean(scene) {
  const col = (h) => new THREE.Color(h);
  const uniforms = {
    uTime: { value: 0 },
    uMoon: { value: new THREE.Vector3(-17, 3.4, -42) },
    uHorizonY: { value: 0.4 },
    cTop: { value: col('#05051a') },
    cMid: { value: col('#2a1658') },
    cHor: { value: col('#c2416f') },
    cGlow: { value: col('#ff8a5c') },
    cWater: { value: col('#060a22') },
    cWater2: { value: col('#1a1446') },
    cHaze: { value: col('#3a1d55') },
    cHi: { value: col('#8b5cf6') },
  };

  const vert = /* glsl */ `varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`;

  const sky = new THREE.Mesh(
    new THREE.SphereGeometry(R, 64, 32),
    new THREE.ShaderMaterial({
      side: THREE.BackSide, depthWrite: false, uniforms, vertexShader: vert,
      fragmentShader: /* glsl */ `
        uniform float uTime; uniform vec3 uMoon; uniform float uHorizonY;
        uniform vec3 cTop, cMid, cHor, cGlow, cHaze, cWater;
        varying vec3 vW;
        float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
        void main(){
          vec3 o = vec3(0.0, uHorizonY, 0.0);
          vec3 dir = normalize(vW - o);
          vec3 md = normalize(uMoon - o);
          float y = vW.y - uHorizonY;
          float az = max(dot(normalize(dir.xz), normalize(md.xz)), 0.0);
          vec3 c;
          if (y > 0.0) {
            float h = clamp(y / 32.0, 0.0, 1.0);
            c = mix(cHor, cMid, smoothstep(0.0, 0.12, h));
            c = mix(c, cTop, smoothstep(0.1, 0.65, h));
            c += cGlow * pow(az, 5.0) * exp(-h * 10.0) * 0.8;
            float m = dot(dir, md);
            c += vec3(1.0, 0.95, 0.86) * smoothstep(0.99962, 0.99972, m) * 1.05;
            c += vec3(1.0, 0.82, 0.9) * pow(max(m, 0.0), 2500.0) * 0.2 + cGlow * pow(max(m, 0.0), 60.0) * 0.14;
            vec2 sp = floor(vec2(atan(dir.z, dir.x) * 700.0, dir.y * 700.0));
            float s = hash(sp);
            float tw = 0.55 + 0.45 * sin(uTime * 1.7 + s * 60.0);
            c += vec3(step(0.9975, s) * smoothstep(0.04, 0.2, h) * tw * 0.85);
          } else {
            float d = clamp(-y / 2.2, 0.0, 1.0);
            c = mix(cHaze, cWater, d);
            float streak = pow(az, 2500.0) * (0.6 + 0.4 * sin(vW.y * 12.0 + uTime * 1.5));
            c += vec3(1.0, 0.85, 0.7) * streak * 0.45;
          }
          gl_FragColor = vec4(c, 1.0);
        }`,
    })
  );
  sky.position.y = WATER_Y;
  sky.renderOrder = -10;
  scene.add(sky);

  const water = new THREE.Mesh(
    new THREE.CircleGeometry(R - 0.6, 96),
    new THREE.ShaderMaterial({
      uniforms: { ...uniforms, uR: { value: R - 0.6 } }, vertexShader: vert,
      fragmentShader: /* glsl */ `
        uniform float uTime, uR; uniform vec3 uMoon; uniform vec3 cWater, cWater2, cHaze, cHi;
        varying vec3 vW;
        void main(){
          vec2 p = vW.xz; float t = uTime;
          float a1 = p.x * 0.35 + t * 0.7, a2 = p.y * 0.5 - t * 0.9, a3 = (p.x + p.y) * 1.3 + t * 1.4, a4 = p.x * 2.7 - p.y * 2.1 + t * 2.3;
          float n = sin(a1) + sin(a2) + 0.5 * sin(a3) + 0.3 * sin(a4);
          vec3 nrm = normalize(vec3(cos(a1) * 0.09 + cos(a3) * 0.08 + cos(a4) * 0.07, 1.0, cos(a2) * 0.12 + cos(a3) * 0.08 - cos(a4) * 0.05));
          vec3 V = normalize(vW - cameraPosition);
          vec3 Rf = reflect(V, nrm);
          vec3 L = normalize(uMoon - vW);
          float spec = pow(max(dot(Rf, L), 0.0), 90.0);
          float fres = pow(1.0 - max(dot(-V, nrm), 0.0), 3.0);
          vec3 c = mix(cWater, cWater2, fres);
          c += cHi * smoothstep(1.5, 2.3, n) * 0.10;
          c += vec3(1.0, 0.86, 0.72) * spec * 1.6;
          c = mix(c, cHaze, smoothstep(uR * 0.6, uR, length(p)));
          gl_FragColor = vec4(c, 1.0);
        }`,
    })
  );
  water.rotation.x = -Math.PI / 2;
  water.position.y = WATER_Y;
  scene.add(water);

  // distant city lights on the horizon (left / back-left) + boats
  const pts = [], cols = [];
  const pal = [col('#ffd27a'), col('#ff9ec7'), col('#ffe9b0'), col('#9ad7ff')];
  for (let i = 0; i < 260; i++) {
    const a = THREE.MathUtils.lerp(Math.PI * 0.95, Math.PI * 1.32, Math.random()); // azimuth around -x
    const r = R - 1.2;
    const h = WATER_Y + 2.1 + Math.pow(Math.random(), 2.5) * 2.4;
    pts.push(Math.cos(a) * r, h, Math.sin(a) * r);
    const c = pal[(Math.random() * pal.length) | 0].clone().multiplyScalar(1.4 + Math.random());
    cols.push(c.r, c.g, c.b);
  }
  const cityGeo = new THREE.BufferGeometry();
  cityGeo.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
  cityGeo.setAttribute('color', new THREE.Float32BufferAttribute(cols, 3));
  scene.add(new THREE.Points(cityGeo, new THREE.PointsMaterial({ size: 2.2, sizeAttenuation: false, vertexColors: true, depthWrite: false })));

  const boats = [];
  for (let i = 0; i < 5; i++) {
    const b = new THREE.Group();
    const hull = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.18, 0.3), new THREE.MeshBasicMaterial({ color: 0x0a0a18 }));
    const light = new THREE.Mesh(new THREE.SphereGeometry(0.09, 8, 6), new THREE.MeshBasicMaterial({ color: new THREE.Color(i % 2 ? '#ff4d6d' : '#ffe8a3').multiplyScalar(3) }));
    light.position.y = 0.35;
    b.add(hull, light);
    const ang = Math.PI * (1.05 + i * 0.12), rad = 24 + i * 3.5;
    b.position.set(Math.cos(ang) * rad, WATER_Y + 0.05, Math.sin(ang) * rad);
    b.userData = { ang, rad, speed: 0.004 + i * 0.0015, light };
    scene.add(b);
    boats.push(b);
  }

  return {
    update(t) {
      uniforms.uTime.value = t;
      boats.forEach((b, i) => {
        const a = b.userData.ang + t * b.userData.speed;
        b.position.x = Math.cos(a) * b.userData.rad;
        b.position.z = Math.sin(a) * b.userData.rad;
        b.position.y = WATER_Y + 0.05 + Math.sin(t * 1.3 + i) * 0.04;
        b.userData.light.visible = Math.sin(t * 2.2 + i * 1.7) > -0.6;
      });
    },
  };
}
