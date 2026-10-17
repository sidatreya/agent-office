// Agent station: desk, large readable monitor (dual for wide desks), robot + name tag.
import * as THREE from 'three';
import { CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';
import { ctx, mesh, box, rbox, cyl, neonMat } from './common.js';
import { makeRobot } from './robot.js';
import { createAgentScreen } from '../screens.js';

export function buildStation(parent, agent, index, { onNeedsRedraw } = {}) {
  const M = ctx.M;
  const col = new THREE.Color(agent.color);
  const station = new THREE.Group();
  station.position.set(agent.desk.x, 0, agent.desk.z);
  station.rotation.y = agent.desk.rot || 0;
  parent.add(station);
  const wide = !!agent.desk.wide;
  const isStation = agent.kind === 'station';
  const dw = wide ? 4.4 : 3.2, dd = 1.15, topY = 0.76;

  station.add(rbox(dw, 0.06, dd, 0.02, M.walnut, { y: topY }));
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) station.add(box(0.045, topY - 0.03, 0.045, M.blackMetal, { x: sx * (dw / 2 - 0.08), y: (topY - 0.03) / 2, z: sz * (dd / 2 - 0.08) }));
  station.add(rbox(0.5, 0.55, dd - 0.15, 0.02, M.whiteMatte, { x: -dw / 2 + 0.4, y: 0.42 }));
  station.add(box(dw - 0.04, 0.012, 0.012, neonMat(agent.color, 1.8), { y: topY - 0.035, z: dd / 2, cast: false }));

  // big monitor (≈ 2.9 m wide; wide desks get 3.9 m + a side panel)
  const SW = wide ? 3.9 : 2.9;
  const canvasW = wide ? 1600 : 1280, canvasH = wide ? 800 : 800;
  const SH = SW * (canvasH / canvasW);
  const screenCanvas = createAgentScreen(agent, { width: canvasW, height: canvasH, onNeedsRedraw: () => onNeedsRedraw && onNeedsRedraw(agent.id) });
  const mon = new THREE.Group();
  const frame = rbox(SW + 0.1, SH + 0.1, 0.07, 0.03, M.graphite, {});
  mon.add(frame);
  const smat = new THREE.MeshBasicMaterial({ map: screenCanvas.tex });
  const scr = new THREE.Mesh(new THREE.PlaneGeometry(SW, SH), smat);
  scr.position.z = 0.037; mon.add(scr);
  mon.add(box(SW * 0.4, SH * 0.5, 0.05, M.graphite, { z: -0.05 }));
  const ovDot = new THREE.Mesh(new THREE.CircleGeometry(1, 24), new THREE.MeshBasicMaterial({ color: new THREE.Color('#4ade80').multiplyScalar(1.3), transparent: true }));
  const ovCursor = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ color: col.clone().multiplyScalar(1.4) }));
  const ovScan = new THREE.Mesh(new THREE.PlaneGeometry(SW, SH * 0.06), new THREE.MeshBasicMaterial({ color: 0x5060b0, transparent: true, opacity: 0.06, blending: THREE.AdditiveBlending, depthWrite: false }));
  [ovDot, ovCursor, ovScan].forEach((o, i) => { o.position.z = 0.04 + i * 0.001; mon.add(o); });
  const px2 = (px, py) => [(px / canvasW - 0.5) * SW, (0.5 - py / canvasH) * SH];
  const standH = 0.25;
  const monGroup = new THREE.Group();
  mon.position.y = standH + SH / 2;
  mon.rotation.x = -0.06;
  monGroup.add(mon);
  monGroup.add(cyl(0.045, 0.045, standH + SH * 0.3, M.blackMetal, { y: (standH + SH * 0.3) / 2, z: -0.08 }, 12));
  monGroup.add(rbox(0.6, 0.03, 0.34, 0.01, M.blackMetal, { y: 0.015, z: -0.04 }));
  monGroup.position.set(wide ? -0.3 : -0.45, topY + 0.03, -0.25);
  station.add(monGroup);
  frame.userData.agentId = agent.id; scr.userData.agentId = agent.id;
  if (wide) { // side panel (dual setup)
    const side = rbox(1.2, 0.8, 0.05, 0.02, M.graphite, { x: -dw / 2 - 0.55, y: topY + 0.75, z: -0.05 });
    side.rotation.y = 0.5; station.add(side);
    const sm = mesh(new THREE.PlaneGeometry(1.1, 0.7), new THREE.MeshBasicMaterial({ color: new THREE.Color(col).multiplyScalar(0.35) }), { x: -dw / 2 - 0.54, y: topY + 0.75, z: -0.02, cast: false });
    sm.rotation.y = 0.5; station.add(sm);
    station.add(cyl(0.03, 0.03, 0.4, M.blackMetal, { x: -dw / 2 - 0.55, y: topY + 0.2, z: -0.07 }, 8));
  }

  // accessories
  const rx = wide ? 2.2 : 1.6;
  station.add(rbox(0.62, 0.025, 0.2, 0.01, M.whiteMatte, { x: 0, y: topY + 0.045, z: 0.3 }));
  station.add(rbox(0.07, 0.03, 0.11, 0.015, M.whiteMatte, { x: 0.5, y: topY + 0.045, z: 0.32 }));
  const mug = cyl(0.06, 0.055, 0.13, new THREE.MeshStandardMaterial({ color: col, roughness: 0.3 }), { x: dw / 2 - 0.22, y: topY + 0.095, z: 0.3 }, 16);
  station.add(mug);
  station.add(cyl(0.07, 0.055, 0.1, M.ceramic, { x: -dw / 2 + 0.25, y: topY + 0.08, z: 0.3 }, 12));
  for (let i = 0; i < 5; i++) { const s = mesh(new THREE.ConeGeometry(0.025, 0.12, 5), M.leaf2, { x: -dw / 2 + 0.25 + Math.cos(i) * 0.03, y: topY + 0.17, z: 0.3 + Math.sin(i) * 0.03 }); s.rotation.set(Math.sin(i) * 0.4, 0, Math.cos(i) * 0.4); station.add(s); }
  if (isStation) { // BOQ: calculator + stacked sheets
    station.add(rbox(0.3, 0.04, 0.4, 0.02, M.graphite, { x: -0.9, y: topY + 0.05, z: 0.25 }));
    for (let i = 0; i < 12; i++) station.add(box(0.05, 0.01, 0.05, i % 4 === 3 ? M.brass : M.whiteMatte, { x: -0.97 + (i % 4) * 0.05, y: topY + 0.075, z: 0.18 + Math.floor(i / 4) * 0.07 }));
    for (let i = 0; i < 4; i++) station.add(box(0.42, 0.012, 0.3, M.whiteMatte, { x: 0.9, y: topY + 0.04 + i * 0.013, z: 0.25 }));
  }

  // robot behind the desk (or none for a station)
  let bot = null;
  const anchor = new THREE.Group();
  anchor.position.set(rx, 0, -1.0);
  station.add(anchor);
  if (!isStation) { bot = makeRobot(agent.color, { scale: 1.25 }); anchor.add(bot.group); }
  const hit = new THREE.Mesh(new THREE.BoxGeometry(1.1, 2.1, 1.1), new THREE.MeshBasicMaterial({ visible: false }));
  hit.position.y = 1.05; hit.userData.agentId = agent.id;
  anchor.add(hit);
  if (isStation) hit.position.set(-rx, 1.05, 1.0);

  const tag = document.createElement('div');
  tag.className = 'tag'; tag.dataset.agent = agent.id;
  tag.innerHTML = `<span class="tag-dot" style="background:${agent.color}"></span><span class="tag-name">${agent.name}</span><span class="tag-state"></span>`;
  const tagObj = new CSS2DObject(tag);
  tagObj.position.set(isStation ? -rx : 0, isStation ? topY + SH + 0.75 : 2.6, isStation ? 0.8 : 0);
  anchor.add(tagObj);

  let working = false, lastStatus = null;
  function setData(d) {
    if (d.status !== lastStatus) {
      lastStatus = d.status;
      working = d.status === 'working';
      tag.classList.toggle('working', working);
      tag.querySelector('.tag-state').textContent = working ? 'working' : 'idle';
    }
    const layout = screenCanvas.draw(d);
    const [dx, dy] = px2(layout.dot.x, layout.dot.y);
    ovDot.position.set(dx, dy, ovDot.position.z);
    ovDot.scale.setScalar(((13 * canvasH) / 640 / canvasW) * SW);
    ovDot.visible = working;
    const [cx, cy] = px2(layout.cursor.x + 9, layout.cursor.y + layout.cursor.h / 2);
    ovCursor.position.set(cx, cy, ovCursor.position.z);
    ovCursor.scale.set((14 / canvasW) * SW * (canvasH / 640), (layout.cursor.h / canvasH) * SH, 1);
    ovCursor.userData.show = working && !layout.image;
    ovCursor.visible = ovCursor.userData.show;
    ovScan.visible = working;
    smat.color.setScalar(working ? 1.0 : 0.6);
  }

  function update(t, active = true) {
    if (!active) return;
    if (bot) bot.update(t, working ? 'working' : 'idle');
    if (working) {
      ovDot.material.opacity = 0.35 + (0.5 + 0.5 * Math.sin(t * 4)) * 0.65;
      ovCursor.visible = ovCursor.userData.show && Math.floor(t * 2.2) % 2 === 0;
      ovScan.position.y = SH / 2 - ((t * 0.18) % 1) * SH;
    }
  }

  function screenView() {
    scr.updateWorldMatrix(true, false);
    const center = new THREE.Vector3().setFromMatrixPosition(scr.matrixWorld);
    const normal = new THREE.Vector3(0, 0, 1).applyQuaternion(scr.getWorldQuaternion(new THREE.Quaternion()));
    return { center, normal, width: SW, height: SH };
  }
  return { agent, hit, frame: scr, tag, tex: screenCanvas.tex, setData, update, screenView, isWorking: () => working, worldPos: () => anchor.getWorldPosition(new THREE.Vector3()) };
}
