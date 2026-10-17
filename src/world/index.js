// World builder: ocean, podium, stacked floors (B1 + 01–04), stations, managers, decor.
import * as THREE from 'three';
import { makeMaterials, makeEnvironment } from '../materials.js';
import { buildOcean } from '../ocean.js';
import { buildFestive } from '../festive.js';
import { ctx, FX, FZ, FH, fmtTime } from './common.js';
import { initProps } from './props.js';
import { buildFloorShell, buildRoof, buildPodium, FOOT } from './building.js';
import { buildStation } from './station.js';
import { buildManager } from './manager.js';
import { buildTrading, buildAdmin, buildStudio } from './floors-a.js';
import { buildProperty, buildB1 } from './floors-b.js';

export { fmtTime };
export const floorY = (level) => level * FH;

export function buildWorld(scene, agents, floors, { renderer, cssScene, onStationRedraw }) {
  const M = (ctx.M = makeMaterials());
  initProps(M);
  scene.background = new THREE.Color(0x05051a);
  scene.environment = makeEnvironment(renderer);
  scene.environmentIntensity = 0.45;

  scene.add(new THREE.HemisphereLight(0x7a7fe0, 0x1a1030, 0.6));
  const key = new THREE.DirectionalLight(0xffe2c4, 1.35);
  key.castShadow = true;
  key.shadow.mapSize.set(2048, 2048);
  Object.assign(key.shadow.camera, { left: -21, right: 21, top: 15, bottom: -15, near: 1, far: 70 });
  key.shadow.bias = -0.0004; key.shadow.normalBias = 0.03;
  scene.add(key, key.target);
  const moon = new THREE.DirectionalLight(0x8fa6ff, 0.4);
  moon.position.set(-18, 30, -22); scene.add(moon);

  const ocean = buildOcean(scene, { hole: FOOT });
  const podium = buildPodium(scene, floorY(-1) - 0.6, -0.6);

  const byFloor = new Map();
  const stations = new Map();
  const updaters = [];
  const lights = [];
  for (const f of floors) {
    const g = new THREE.Group(); g.position.y = floorY(f.level); g.name = `floor-${f.id}`;
    scene.add(g);
    buildFloorShell(g, f);
    const mine = agents.filter((a) => a.floor === f.id);
    mine.forEach((a, i) => stations.set(a.id, buildStation(g, a, i, { onNeedsRedraw: onStationRedraw })));
    byFloor.set(f.id, { floor: f, group: g, agents: mine });
  }
  const ctxB = { agents, stations, cssScene };
  const content = {
    trading: buildTrading(byFloor.get('trading').group, ctxB),
    admin: buildAdmin(byFloor.get('admin').group, ctxB),
    studio: buildStudio(byFloor.get('studio').group, ctxB),
    property: buildProperty(byFloor.get('property').group, ctxB),
    b1: buildB1(byFloor.get('b1').group, ctxB),
  };
  const roof = new THREE.Group(); roof.position.y = floorY(Math.max(...floors.map((f) => f.level)) + 1) - 0.6; scene.add(roof); buildRoof(roof);

  // per-floor lights, managers, festive decor
  for (const [id, F] of byFloor) {
    const c = content[id];
    F.content = c;
    for (const [x, z] of c.light || []) {
      const l = new THREE.PointLight(c.lightColor || 0xffa25a, 9, 16, 1.8); l.position.set(x, 4.8, z); F.group.add(l); lights.push(l);
    }
    F.manager = buildManager(F.group, F.floor, c.waypoints, { board: c.board });
    if (c.update) updaters.push({ id, fn: c.update });
  }
  const V = (x, y, z) => new THREE.Vector3(x, y, z);
  const fests = [];
  for (const id of ['trading', 'admin', 'studio', 'property']) {
    const fest = buildFestive(byFloor.get(id).group);
    fest.stringLights([[V(-FX + 0.25, 6.75, FZ - 0.1), V(-FX + 0.25, 6.75, -FZ + 0.2), 0.35, 3]]);
    fests.push({ id, fest });
  }
  const fa = fests[1].fest, fs = fests[2].fest;
  fa.lantern(-10, 5.2, 2.0, '#ff7b00'); fa.lantern(9.5, 5.4, 2.4, '#ff006e'); fa.rangoli(-1.6, 5.4, 1.3, 1);
  fs.lantern(-4.0, 5.4, 2.6, '#c77dff'); fs.lantern(9.6, 5.2, 1.0, '#ffb703'); fs.rangoli(4.4, 5.2, 1.1, 2);
  fests[0].fest.lantern(-11.2, 5.4, 5.6, '#ffb703');
  fests[3].fest.lantern(12.8, 5.2, -4.0, '#ff7b00'); fests[3].fest.diya(12.9, -3.0, 0.5);

  // floor visibility (cut-away: floors above the selected one are hidden)
  let current = null;
  function setFloor(id) {
    current = id;
    const lvl = id ? byFloor.get(id).floor.level : Infinity;
    for (const F of byFloor.values()) F.group.visible = !id || F.floor.id === id;
    podium.front.visible = id !== 'b1';
    roof.visible = !id;
    const y = id ? floorY(lvl) : floorY(1);
    key.position.set(12, y + 18, 15); key.target.position.set(-1, y, -1);
    const s = id ? 1 : 2.2;
    Object.assign(key.shadow.camera, { left: -21 * s, right: 21 * s, top: 15 * s, bottom: -15 * s, far: 70 * s });
    key.shadow.camera.updateProjectionMatrix();
    content.trading.markets.setLive(id === 'trading');
  }
  setFloor(null);

  const isActive = (fid) => (current ? fid === current : true);
  return {
    byFloor, stations, content, setFloor,
    wallScreen: content.admin.feed,
    get current() { return current; },
    hitTargets: [...stations.values()].flatMap((s) => [s.hit, s.frame]).concat(content.studio.ups.map((u) => u.hit)),
    managerHits: [...byFloor.values()].map((F) => F.manager.hit),
    updateManagers(getState) { for (const F of byFloor.values()) F.manager.setSummary(F.agents, getState); content.studio.drawBoard(getState); },
    update(t) {
      ocean.update(t);
      fests.forEach(({ id, fest }) => isActive(id) && fest.update(t));
      stations.forEach((s) => s.update(t, isActive(s.agent.floor)));
      for (const F of byFloor.values()) if (F.group.visible) F.manager.update(t);
      updaters.forEach((u) => isActive(u.id) && u.fn(t));
      content.trading.markets.sync();
      lights.forEach((l, i) => (l.intensity = 9 + Math.sin(t * 3 + i * 2) * 0.5));
    },
  };
}
