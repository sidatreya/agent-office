// Admin Block live activity feed wall.
import * as THREE from 'three';
import { ctx, FZ, box, rbox, neonMat, roundRect, fmtTime } from './common.js';
export function buildFeedScreen(scene, agents) {
  const M = ctx.M;
  const W = 2048, H = 965;
  const c = document.createElement('canvas');
  c.width = W; c.height = H;
  const g = c.getContext('2d');
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  const grp = new THREE.Group();
  const SW = 7.0, SH = SW * (H / W);
  grp.add(rbox(SW + 0.25, SH + 0.25, 0.14, 0.04, M.graphite, { y: 0 }));
  const screen = new THREE.Mesh(new THREE.PlaneGeometry(SW, SH), new THREE.MeshBasicMaterial({ map: tex, color: new THREE.Color(0.95, 0.95, 0.95) }));
  screen.position.z = 0.075;
  grp.add(screen);
  grp.add(box(SW + 0.2, 0.03, 0.03, neonMat('#7c3aed', 2.6), { y: -SH / 2 - 0.14, z: 0.06, cast: false }));
  grp.position.set(0, 1.9 + SH / 2, -FZ + 0.75);
  scene.add(grp);
  for (const sx of [-1, 1]) scene.add(box(0.1, 1.95, 0.1, M.bronze, { x: sx * (SW / 2 - 0.4), y: 0.97, z: -FZ + 0.7 }));
  scene.add(box(SW - 0.3, 0.08, 0.5, M.walnut, { y: 0.04, z: -FZ + 0.7 }));
  const nameById = Object.fromEntries(agents.map((a) => [a.id, a]));

  function draw(events, getState) {
    const bg = g.createLinearGradient(0, 0, W, H);
    bg.addColorStop(0, '#0c0d2b'); bg.addColorStop(1, '#141038');
    g.fillStyle = bg; g.fillRect(0, 0, W, H);
    g.fillStyle = 'rgba(255,255,255,0.018)';
    for (let y = 0; y < H; y += 6) g.fillRect(0, y, W, 2);
    g.fillStyle = '#ef4444'; g.beginPath(); g.arc(70, 72, 14, 0, Math.PI * 2); g.fill();
    g.fillStyle = '#e9e7ff'; g.font = '700 52px system-ui, sans-serif';
    g.fillText('LIVE ACTIVITY FEED', 100, 90);
    g.fillStyle = '#8b8bc4'; g.font = '500 46px ui-monospace, Menlo, monospace';
    g.textAlign = 'right'; g.fillText(fmtTime(new Date()), W - 50, 90); g.textAlign = 'left';
    g.fillStyle = '#2d2a6e'; g.fillRect(50, 125, W - 100, 3);
    const colW = 1440;
    const lines = events.slice(-10);
    lines.forEach((e, i) => {
      const y = 196 + i * 74;
      const a = nameById[e.agentId];
      if (i === lines.length - 1) { g.fillStyle = 'rgba(139,92,246,0.18)'; roundRect(g, 40, y - 50, colW - 20, 66, 10); g.fill(); }
      g.fillStyle = '#6f6fa8'; g.font = '500 38px ui-monospace, Menlo, monospace';
      g.fillText(fmtTime(e.ts), 60, y);
      g.fillStyle = a?.color || '#fff'; g.font = '700 38px system-ui, sans-serif';
      const nm = a?.name || e.agentId;
      g.fillText(nm, 280, y);
      const nw = g.measureText(nm).width;
      g.fillStyle = '#dcdcf5'; g.font = '400 38px system-ui, sans-serif';
      let msg = e.message;
      const maxW = colW - 310 - nw - 30;
      while (g.measureText(msg).width > maxW && msg.length > 4) msg = msg.slice(0, -2);
      if (msg !== e.message) msg = msg.trimEnd() + '…';
      g.fillText(msg, 280 + nw + 22, y);
    });
    const sx = colW + 70;
    g.fillStyle = '#1a1848'; roundRect(g, sx - 20, 150, W - sx - 30, H - 190, 18); g.fill();
    g.fillStyle = '#8b8bc4'; g.font = '700 36px system-ui, sans-serif';
    g.fillText('AGENTS', sx + 10, 212);
    agents.forEach((a, i) => {
      const s = getState(a.id);
      const y = 270 + i * 60;
      g.fillStyle = a.color; g.beginPath(); g.arc(sx + 20, y - 11, 11, 0, Math.PI * 2); g.fill();
      g.fillStyle = '#ecebff'; g.font = '600 32px system-ui, sans-serif';
      let nm = a.name; while (g.measureText(nm).width > 300 && nm.length > 3) nm = nm.slice(0, -1);
      g.fillText(nm === a.name ? nm : nm + '…', sx + 44, y);
      g.fillStyle = s.status === 'working' ? '#4ade80' : '#94a3b8'; g.font = '600 28px system-ui, sans-serif';
      g.textAlign = 'right'; g.fillText(s.status === 'working' ? '● working' : '○ idle', W - 70, y); g.textAlign = 'left';
    });
    tex.needsUpdate = true;
  }
  return { draw };
}
