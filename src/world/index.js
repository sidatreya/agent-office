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
import { buildMarketWall, WIDGETS } from './markets.js';
import * as Z from './zaha.js';

export { fmtTime };
export const floorY = (level) => level * FH;

export function buildWorld(scene, agents, floors, { renderer, cssScene, onStationRedraw }) {
  const M = (ctx.M = makeMaterials());
  initProps(M);
  scene.background = new THREE.Color(0x1a2747);
  scene.environment = makeEnvironment(renderer);
  scene.environmentIntensity = 0.7;

  scene.add(new THREE.HemisphereLight(0xfff1e0, 0x5a4636, 0.85));
  const key = new THREE.DirectionalLight(0xffe6c8, 1.6);
  key.castShadow = true;
  key.shadow.mapSize.set(2048, 2048);
  Object.assign(key.shadow.camera, { left: -21, right: 21, top: 15, bottom: -15, near: 1, far: 70 });
  key.shadow.bias = -0.0004; key.shadow.normalBias = 0.03;
  scene.add(key, key.target);
  const moon = new THREE.DirectionalLight(0xa9b8e8, 0.45);
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
    if (f.level >= 0) { Z.zahaFloorShell(g, f); Z.zahaInterior(g, f); }
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
  const roofDeck = new THREE.Group(); roofDeck.position.y = 0.62; roof.add(roofDeck); // top of the roof slab
  const roofFest = buildFestive(roofDeck);

  // per-floor lights, managers, festive decor
  for (const [id, F] of byFloor) {
    const c = content[id];
    F.content = c;
    for (const [x, z] of c.light || []) {
      const l = new THREE.PointLight(c.lightColor || 0xffc488, 10, 17, 1.7); l.position.set(x, 4.8, z); F.group.add(l); lights.push(l);
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
  fs.lantern(-4.0, 5.4, 2.6, '#c77dff'); fs.lantern(9.6, 5.2, 1.0, '#ffb703'); fs.rangoli(-8.4, 6.3, 0.95, 2);
  fests[0].fest.lantern(-11.2, 5.4, 5.6, '#ffb703');
  fests[3].fest.lantern(12.8, 5.2, -4.0, '#ff7b00'); fests[3].fest.diya(12.9, -3.0, 0.5);

  // ── Sidatreya Designs redesign: zen gardens, bull, art, tickers, rangoli + diyas on every floor ──
  const zUp = { trading: [], admin: [], studio: [], property: [], b1: [] };
  const G = (id) => byFloor.get(id).group;
  const fT = fests[0].fest, fP = fests[3].fest, fB = buildFestive(G('b1'));
  fests.push({ id: 'b1', fest: fB });
  // 01 Trading: bronze charging bull on a curved white plinth with rangoli + diyas, curved backdrop, gold wire sculpture, tickers
  Z.curvedWall(G('trading'), { x: 1.2, z: 5.6, r: 3.2, a0: Math.PI - 0.62, a1: Math.PI + 0.62, h: 2.4 });
  Z.bronzeBull(G('trading'), { x: 1.3, z: 4.4, rotY: -0.35, s: 1.45 });
  fT.rangoli(1.3, 6.9, 0.8, 0);
  for (let i = 0; i < 9; i++) { const a = (i / 9) * Math.PI * 2; fT.diya(1.3 + Math.cos(a) * 2.25, 4.4 + Math.sin(a) * 1.45); }
  zUp.trading.push(Z.goldWire(G('trading'), -6.4, 4.6, 3.4, 0.85).update);
  zUp.trading.push(Z.tickerStrip(G('trading'), { x: -FX + 0.35, y: 5.55, z: 0, rotY: Math.PI / 2, w: 14, h: 0.34, items: Z.EXAMPLE_ITEMS }).update);
  // 02 Admin: zen garden with skylight, bronze ribbon sculpture, ticker
  zUp.admin.push(Z.zenGarden(G('admin'), { x: 3.4, z: 6.7, rx: 2.6, rz: 1.45, fest: fests[1].fest, bamboo: false }).update);
  zUp.admin.push(Z.bronzeRibbonSculpture(G('admin'), -7.6, 7.5).update);
  zUp.admin.push(Z.tickerStrip(G('admin'), { x: 0, y: 5.75, z: -FZ + 0.42, w: 9.5, h: 0.32, items: Z.EXAMPLE_ITEMS }).update);
  // 03 Studio: central zen atrium (raked gravel, maple, bamboo, lantern, basin, koi) under a skylight; wave relief wall
  zUp.studio.push(Z.zenGarden(G('studio'), { x: 1.0, z: 5.9, rx: 4.0, rz: 2.25, fest: fests[2].fest, sign: true }).update);
  Z.wavePanel(G('studio'), -FX + 0.3, 3.0, -0.2, Math.PI / 2, 2.6, 4.4);
  zUp.studio.push(Z.goldWire(G('studio'), 9.0, 5.0, 1.2, 0.6).update);
  zUp.studio.push(Z.tickerStrip(G('studio'), { x: -3.6, y: 3.4, z: -FZ + 0.42, w: 12.5, h: 0.3, items: Z.EXAMPLE_ITEMS }).update);
  // 04 Property: rangoli + diyas, suspended gold rings, ticker
  fP.rangoli(3.2, 7.3, 0.85, 1);
  zUp.property.push(Z.ringsMobile(G('property'), 0.0, 5.2, 3.6).update);
  zUp.property.push(Z.tickerStrip(G('property'), { x: 0, y: 5.6, z: -FZ + 0.42, w: 9.0, h: 0.3, items: Z.EXAMPLE_ITEMS }).update);
  // B1: rangoli + diyas at the lift lobby
  fB.rangoli(6.4, 0.2, 0.75, 2);
  // roof: flowing canopy, rooftop zen terrace, SIDATREYA DESIGNS logo
  const zr = Z.zahaRoof(roof, roofFest, roofDeck);
  // exterior: live office banner on the quay, live market banner (TradingView ticker tape) under the logo,
  // live market billboard (TradingView symbol overview) on a sculpted pylon
  const exterior = new THREE.Group(); scene.add(exterior);
  const officeBanner = Z.officeBanner(exterior, { x: Z.SHELL.cx, y: floorY(0) - 1.25, z: FZ + 2.05, w: 30, h: 0.62 });
  const roofTop = floorY(Math.max(...floors.map((f) => f.level)) + 1) - 0.6;
  const extPanels = new THREE.Group(); scene.add(extPanels);
  Z.zahaSwoosh(exterior, { y0: floorY(0), y1: roofTop });
  const marketBanner = buildMarketWall(extPanels, cssScene, [
    { title: 'LIVE MARKETS', sub: 'TradingView ticker tape · live', url: WIDGETS.ticker(), x: Z.SHELL.cx - 2, y: roofTop + 1.35, z: FZ + 1.75, w: 21, h: 0.62 },
  ]);
  const pylon = Z.billboardPylon(exterior, { x: 27.5, z: 3.5, rotY: -0.18, w: 12, h: 6.75, y: floorY(2) });
  const billboard = buildMarketWall(pylon, cssScene, [
    { title: 'SIDATREYA DESIGNS · MARKETS', sub: 'TradingView · live feed', url: WIDGETS.symbolOverview(), x: 0, y: floorY(2), z: 0, w: 12, h: 6.75 },
  ]);

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
    exterior.visible = !id; extPanels.visible = !id;
    marketBanner.setLive(!id); billboard.setLive(!id);
  }
  setFloor(null);

  const isActive = (fid) => (current ? fid === current : true);
  return {
    byFloor, stations, content, setFloor,
    wallScreen: content.admin.feed,
    get current() { return current; },
    hitTargets: [...stations.values()].flatMap((s) => [s.hit, s.frame]).concat(content.studio.ups.map((u) => u.hit)),
    managerHits: [...byFloor.values()].map((F) => F.manager.hit),
    updateManagers(getState) { for (const F of byFloor.values()) F.manager.setSummary(F.agents, getState); content.studio.drawBoard(getState); officeBanner.draw(agents, getState); },
    update(t) {
      ocean.update(t);
      fests.forEach(({ id, fest }) => isActive(id) && fest.update(t));
      stations.forEach((s) => s.update(t, isActive(s.agent.floor)));
      for (const F of byFloor.values()) if (F.group.visible) F.manager.update(t);
      updaters.forEach((u) => isActive(u.id) && u.fn(t));
      content.trading.markets.sync();
      if (!current) { marketBanner.sync(); billboard.sync(); officeBanner.update(t); zr.update(t); roofFest.update(t); }
      for (const [id, fns] of Object.entries(zUp)) if (isActive(id)) fns.forEach((fn) => fn(t));
      lights.forEach((l, i) => (l.intensity = 10 + Math.sin(t * 3 + i * 2) * 0.4));
    },
  };
}
