// Floor Manager NPC: walks a waypoint loop, carries a clipboard, shows a floor summary tooltip
// and drives a "FLOOR STATUS" board. Flags agents that look like they need help.
import * as THREE from 'three';
import { CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';
import { box, canvasTexture, roundRect, ctx } from './common.js';
import { makeRobot } from './robot.js';

const HOUR = 3600 * 1000;
export function needsHelp(s, now = Date.now()) {
  const last = s.lastActive ? s.lastActive.getTime() : 0;
  if (s.status === 'working' && last && now - last > 2 * HOUR) return 'no update for 2h+';
  if (s.status === 'idle' && last && now - last > 6 * HOUR) return 'idle 6h+';
  if (/error|fail|blocked|stuck/i.test(s.task || '')) return 'reports a problem';
  return null;
}

export function buildManager(parent, floor, waypoints, { board } = {}) {
  const bot = makeRobot('#e2e8f0', { scale: 1.15, ring: false, manager: true });
  parent.add(bot.group);
  const pts = waypoints.map(([x, z]) => new THREE.Vector3(x, 0, z));
  bot.group.position.copy(pts[0]);
  let seg = 0, pauseUntil = 0;

  const tag = document.createElement('div');
  tag.className = 'tag manager-tag';
  tag.innerHTML = `<span class="tag-dot" style="background:#fbbf24"></span><span class="tag-name">Floor Manager</span><span class="tag-state"></span><div class="mgr-tip"></div>`;
  const tagObj = new CSS2DObject(tag); tagObj.position.set(0, 2.45, 0); bot.group.add(tagObj);
  const hit = new THREE.Mesh(new THREE.BoxGeometry(1, 2, 1), new THREE.MeshBasicMaterial({ visible: false }));
  hit.position.y = 1; hit.userData.managerFloor = floor.id; bot.group.add(hit);

  // status board (wall-mounted, given position/rotation by the floor builder)
  let tex = null, bctx = null;
  if (board) {
    const c = document.createElement('canvas'); c.width = 1024; c.height = 640; bctx = c.getContext('2d');
    tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace;
    const g = new THREE.Group();
    g.add(box(board.w + 0.1, board.w * 0.625 + 0.1, 0.06, ctx.M.graphite, {}));
    const m = new THREE.Mesh(new THREE.PlaneGeometry(board.w, board.w * 0.625), new THREE.MeshBasicMaterial({ map: tex }));
    m.position.z = 0.035; g.add(m);
    g.position.set(board.x, board.y, board.z); g.rotation.y = board.rot || 0;
    parent.add(g);
  }

  let summary = { working: 0, total: 0, flags: [] };
  function setSummary(agents, getState) {
    const now = Date.now();
    const rows = agents.map((a) => ({ a, s: getState(a.id), flag: needsHelp(getState(a.id), now) }));
    const working = rows.filter((r) => r.s.status === 'working').length;
    const flags = rows.filter((r) => r.flag);
    summary = { working, total: rows.length, flags };
    tag.querySelector('.tag-state').textContent = flags.length ? `⚠ ${flags.length}` : `${working}/${rows.length}`;
    tag.classList.toggle('alert', flags.length > 0);
    tag.querySelector('.mgr-tip').innerHTML = `<b>${floor.label} · ${floor.name}</b><br>${working} of ${rows.length} working` +
      (flags.length ? `<br>${flags.map((f) => `⚠ ${f.a.name}: ${f.flag}`).join('<br>')}` : '<br>✓ nobody needs help');
    if (bctx) drawBoard(rows, working, flags);
  }

  function drawBoard(rows, working, flags) {
    const g = bctx, W = 1024, H = 640;
    g.fillStyle = '#0b0a24'; g.fillRect(0, 0, W, H);
    g.fillStyle = '#fbbf24'; g.fillRect(0, 0, W, 96);
    g.fillStyle = '#1c1404'; g.font = '800 50px system-ui'; g.textBaseline = 'middle';
    g.fillText(`FLOOR ${floor.label} · STATUS`, 34, 50);
    g.textAlign = 'right'; g.font = '700 44px system-ui'; g.fillText(`${working}/${rows.length} working`, W - 34, 50); g.textAlign = 'left';
    rows.slice(0, 6).forEach((r, i) => {
      const y = 150 + i * 78;
      g.fillStyle = r.a.color; roundRect(g, 34, y - 26, 16, 52, 6); g.fill();
      g.fillStyle = '#f1f0ff'; g.font = '700 40px system-ui'; g.fillText(r.a.name.length > 22 ? r.a.name.slice(0, 21) + '…' : r.a.name, 68, y);
      g.textAlign = 'right';
      g.fillStyle = r.flag ? '#f87171' : r.s.status === 'working' ? '#4ade80' : '#94a3b8';
      g.font = '700 36px system-ui'; g.fillText(r.flag ? `⚠ ${r.flag}` : r.s.status.toUpperCase(), W - 34, y);
      g.textAlign = 'left';
    });
    if (!flags.length) { g.fillStyle = '#4ade80'; g.font = '600 34px system-ui'; g.fillText('✓ Floor Manager: nobody needs help right now', 34, H - 40); }
    else { g.fillStyle = '#f87171'; g.font = '600 34px system-ui'; g.fillText(`⚠ Floor Manager is checking on ${flags.map((f) => f.a.name).join(', ')}`, 34, H - 40); }
    tex.needsUpdate = true;
  }

  const tmp = new THREE.Vector3();
  let lastT = 0;
  function update(t) {
    const dt = Math.min(0.1, t - lastT); lastT = t;
    if (t < pauseUntil) { bot.update(t, 'idle'); return; }
    const target = pts[(seg + 1) % pts.length];
    tmp.subVectors(target, bot.group.position); tmp.y = 0;
    const d = tmp.length();
    if (d < 0.05) { seg = (seg + 1) % pts.length; pauseUntil = t + 2.5 + (seg % 2) * 2; return; }
    const step = Math.min(d, 0.95 * dt);
    bot.group.position.addScaledVector(tmp.normalize(), step);
    const ang = Math.atan2(tmp.x, tmp.z);
    let dr = ang - bot.group.rotation.y; dr = Math.atan2(Math.sin(dr), Math.cos(dr));
    bot.group.rotation.y += dr * Math.min(1, dt * 6);
    bot.update(t, 'walking');
  }
  return { update, setSummary, hit, tag, summary: () => summary };
}
