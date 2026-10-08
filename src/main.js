import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { CSS2DRenderer } from 'three/addons/renderers/CSS2DRenderer.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';

import { AGENTS, OFFICE, ROOMS } from './data/agents.js';
import { createSimulatedFeed } from './data/feed.js';
import { createLiveFeed } from './data/live.js';
import { buildWorld, fmtTime } from './world.js';

// ── data source ──
// Live: polls ./status.json every 15s. Add ?demo=1 to the URL for the simulated feed.
const DEMO = new URLSearchParams(location.search).get('demo') === '1';
const feed = DEMO ? createSimulatedFeed({ intervalMs: 3200 }) : createLiveFeed({ url: './status.json', intervalMs: 15000 });

// ── renderer / scene / camera ──
const app = document.getElementById('app');
const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.0;
app.appendChild(renderer.domElement);

const labelRenderer = new CSS2DRenderer();
labelRenderer.setSize(window.innerWidth, window.innerHeight);
labelRenderer.domElement.className = 'css2d';
app.appendChild(labelRenderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(38, window.innerWidth / window.innerHeight, 0.1, 300);
const HOME = { pos: new THREE.Vector3(6.0, 13.2, 27.5), target: new THREE.Vector3(-1.6, 1.8, -2.0) };
camera.position.copy(HOME.pos);

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.copy(HOME.target);
controls.enableDamping = true;
controls.dampingFactor = 0.08;
controls.minDistance = 4;
controls.maxDistance = 34;
controls.maxPolarAngle = Math.PI * 0.47;
controls.update();

const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));
const bloom = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 0.6, 0.55, 1.0);
composer.addPass(bloom);
// subtle colour grade + vignette
composer.addPass(new ShaderPass({
  uniforms: { tDiffuse: { value: null } },
  vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
  fragmentShader: `uniform sampler2D tDiffuse; varying vec2 vUv;
    void main(){ vec4 c = texture2D(tDiffuse, vUv);
      float l = dot(c.rgb, vec3(0.2126,0.7152,0.0722));
      c.rgb = mix(c.rgb, c.rgb * vec3(1.04,0.98,1.06), 0.6);              // slight warm-magenta grade
      c.rgb += vec3(0.004,0.002,0.012) * (1.0 - smoothstep(0.0, 0.25, l));  // lift shadows towards indigo
      float v = smoothstep(0.95, 0.35, distance(vUv, vec2(0.5)));
      c.rgb *= mix(0.72, 1.0, v);
      gl_FragColor = c; }`,
}));
composer.addPass(new OutputPass());

const world = buildWorld(scene, AGENTS, { renderer, camPos: HOME.pos, rooms: ROOMS });

// ── UI ──
document.getElementById('title').textContent = OFFICE.title;
document.getElementById('subtitle').textContent = OFFICE.subtitle;
document.title = OFFICE.title;

const sidebar = document.getElementById('sidebar');
const cards = new Map();
for (const a of AGENTS) {
  const el = document.createElement('div');
  el.className = 'agent-card';
  el.style.setProperty('--c', a.color);
  el.innerHTML = `
    <div class="row"><div class="name"><span class="avatar"></span>${a.name}</div><span class="pill"></span></div>
    <div class="task"></div>
    <div class="bar"><i></i></div>`;
  el.addEventListener('click', () => focusAgent(a.id));
  sidebar.appendChild(el);
  cards.set(a.id, el);
}

function renderAgent(id) {
  const s = feed.getState(id);
  const el = cards.get(id);
  const pill = el.querySelector('.pill');
  pill.className = `pill ${s.status}`;
  pill.textContent = s.status;
  el.querySelector('.task').textContent = s.task;
  el.querySelector('.bar').style.visibility = s.status === 'working' && s.hasProgress !== false && s.progress > 0 ? 'visible' : 'hidden';
  el.querySelector('.bar > i').style.width = `${Math.round(s.progress * 100)}%`;
  world.stations.get(id).setData({
    ...s,
    updatedAt: feed.updatedAt || null,
    events: feed.history.filter((e) => e.agentId === id).slice(-2),
  });
  if (selected === id) renderInfo(id);
}

function renderCounts() {
  const states = AGENTS.map((a) => feed.getState(a.id));
  const w = states.filter((s) => s.status === 'working').length;
  document.getElementById('count-working').textContent = w;
  document.getElementById('count-idle').textContent = states.length - w;
  document.getElementById('count-total').textContent = states.length;
}

// info card
const info = document.getElementById('infocard');
let selected = null;
function renderInfo(id) {
  const a = AGENTS.find((x) => x.id === id);
  const s = feed.getState(id);
  const recent = feed.history.filter((e) => e.agentId === id).slice(-4).reverse();
  info.style.setProperty('--c', a.color);
  info.innerHTML = `
    <button class="close" title="Close">×</button>
    <h3><span class="avatar" style="width:12px;height:12px;border-radius:4px;background:${a.color};box-shadow:0 0 10px ${a.color}"></span>${a.name}
      <span class="pill ${s.status}" style="margin-left:auto">${s.status}</span></h3>
    <div class="role">${a.role}</div>
    <div class="label">Current task</div>
    <div class="val">${s.task}</div>
    ${s.status === 'working' && s.progress > 0 ? `<div class="bar" style="--c:${a.color}"><i style="width:${Math.round(s.progress * 100)}%"></i></div>` : ''}
    <div class="label">Recent activity</div>
    <ul>${recent.length ? recent.map((e) => `<li><time>${fmtTime(e.ts)}</time>${e.message}</li>`).join('') : '<li>No activity yet</li>'}</ul>`;
  info.querySelector('.close').onclick = clearFocus;
}

// ── camera focus ──
let tween = null;
function flyTo(pos, target, ms = 900) {
  tween = { fromP: camera.position.clone(), fromT: controls.target.clone(), toP: pos, toT: target, t0: performance.now(), ms };
}
function focusAgent(id) {
  selected = id;
  cards.forEach((el, k) => el.classList.toggle('selected', k === id));
  // frame the agent's screen head-on so its text is crisp (screen fills ~half the view width)
  const v = world.stations.get(id).screenView();
  const hfov = 2 * Math.atan(Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * camera.aspect);
  const dist = Math.max(2.2, (v.width * 1.05) / (2 * Math.tan(hfov / 2) * (window.innerWidth > 900 ? 0.52 : 0.9)));
  const target = v.center.clone();
  const pos = target.clone().add(v.normal.clone().multiplyScalar(dist)).add(new THREE.Vector3(0, dist * 0.12, 0));
  flyTo(pos, target);
  renderInfo(id);
  info.classList.remove('hidden');
}
function clearFocus() {
  selected = null;
  cards.forEach((el) => el.classList.remove('selected'));
  info.classList.add('hidden');
  flyTo(HOME.pos.clone(), HOME.target.clone());
}
window.addEventListener('keydown', (e) => {
  if (e.key === 'r' || e.key === 'R' || e.key === 'Escape') clearFocus();
});

// click picking (ignore drags)
const ray = new THREE.Raycaster();
const ndc = new THREE.Vector2();
let down = null;
renderer.domElement.addEventListener('pointerdown', (e) => (down = { x: e.clientX, y: e.clientY }));
renderer.domElement.addEventListener('pointerup', (e) => {
  if (!down || Math.hypot(e.clientX - down.x, e.clientY - down.y) > 5) return;
  ndc.set((e.clientX / window.innerWidth) * 2 - 1, -(e.clientY / window.innerHeight) * 2 + 1);
  ray.setFromCamera(ndc, camera);
  const hit = ray.intersectObjects(world.hitTargets, false)[0];
  if (hit) focusAgent(hit.object.userData.agentId);
});
renderer.domElement.addEventListener('pointermove', (e) => {
  ndc.set((e.clientX / window.innerWidth) * 2 - 1, -(e.clientY / window.innerHeight) * 2 + 1);
  ray.setFromCamera(ndc, camera);
  renderer.domElement.style.cursor = ray.intersectObjects(world.hitTargets, false).length ? 'pointer' : '';
});
labelRenderer.domElement.addEventListener('click', (e) => {
  const tag = e.target.closest('.tag');
  if (tag) focusAgent(tag.dataset.agent);
});

// ── feed wiring ──
AGENTS.forEach((a) => renderAgent(a.id));
renderCounts();
const drawWall = () => world.wallScreen.draw(feed.history, feed.getState);
drawWall();
feed.subscribe((evt) => {
  if (evt.type === 'heartbeat' || evt.type === 'error') return renderLive();
  if (evt.agentId && DEMO) renderAgent(evt.agentId);
  else AGENTS.forEach((a) => renderAgent(a.id));
  renderCounts();
  drawWall();
  renderLive();
});
feed.start();

// "live · updated HH:MM" label (browser local time); 'stale' if older than 30 min
const liveEl = document.getElementById('live-label');
const liveChip = document.getElementById('live-chip');
const hhmm = (d) => d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
function renderLive() {
  let text, mode;
  if (DEMO) { text = 'demo · simulated feed'; mode = 'live'; }
  else if (!feed.updatedAt) { text = feed.error ? 'offline · no status data' : 'connecting…'; mode = 'stale'; }
  else if (Date.now() - feed.updatedAt.getTime() > 30 * 60 * 1000) { text = `stale · updated ${hhmm(feed.updatedAt)}`; mode = 'stale'; }
  else { text = `live · updated ${hhmm(feed.updatedAt)}`; mode = 'live'; }
  liveEl.textContent = text;
  liveChip.className = `chip ${mode}`;
  liveChip.title = feed.updatedAt ? `Last update: ${feed.updatedAt.toLocaleString()}` : '';
}
renderLive();

// clock (top bar + wall screen)
const clockEl = document.getElementById('clock');
let tickN = 0;
const tickClock = () => {
  clockEl.textContent = fmtTime(new Date());
  if (++tickN % 30 === 0) AGENTS.forEach((a) => renderAgent(a.id));
  drawWall();
  renderLive();
};
tickClock();
setInterval(tickClock, 1000);

// ── resize & loop ──
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  composer.setSize(window.innerWidth, window.innerHeight);
  labelRenderer.setSize(window.innerWidth, window.innerHeight);
});

const t0 = performance.now();
const ease = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
renderer.setAnimationLoop(() => {
  const t = (performance.now() - t0) / 1000;
  if (tween) {
    const k = Math.min(1, (performance.now() - tween.t0) / tween.ms);
    const e = ease(k);
    camera.position.lerpVectors(tween.fromP, tween.toP, e);
    controls.target.lerpVectors(tween.fromT, tween.toT, e);
    if (k >= 1) tween = null;
  }
  controls.update();
  world.update(t);
  composer.render();
  labelRenderer.render(scene, camera);
});

// handy for debugging / wiring real data from the console
window.office = { feed, focusAgent, clearFocus, scene, camera };
