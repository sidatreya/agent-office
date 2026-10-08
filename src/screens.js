// Per-agent monitor screen: a high-res CanvasTexture that shows the agent's
// name, status, current task (from status.json), source/updated time and latest events.
// draw(data) only repaints when the visible content changes.
import * as THREE from 'three';

const hhmm = (d) => (d ? d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '--:--');
const FRESH_MS = 30 * 60 * 1000;

function wrapLines(g, text, maxW, maxLines) {
  const words = String(text || '').split(/\s+/).filter(Boolean);
  const lines = [];
  let cur = '';
  for (let i = 0; i < words.length; i++) {
    const test = cur ? `${cur} ${words[i]}` : words[i];
    if (g.measureText(test).width <= maxW) { cur = test; continue; }
    if (cur) lines.push(cur);
    cur = words[i];
    if (lines.length === maxLines) { cur = ''; lines[maxLines - 1] += ' …'; break; }
  }
  if (cur && lines.length < maxLines) lines.push(cur);
  // ellipsize last line if it overflows
  const last = lines.length - 1;
  if (last >= 0) {
    let l = lines[last];
    while (g.measureText(l).width > maxW && l.length > 3) l = l.slice(0, -3) + '…';
    lines[last] = l;
  }
  return lines;
}

export function createAgentScreen(agent, { width = 1024, height = 640, anisotropy = 8 } = {}) {
  const W = width, H = height;
  const c = document.createElement('canvas');
  c.width = W; c.height = H;
  const g = c.getContext('2d');
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = anisotropy;
  let key = '';
  const layout = { dot: { x: 0, y: 0 }, cursor: { x: 0, y: 0, h: 60 }, working: false };

  function draw(d) {
    const working = d.status === 'working';
    const reported = d.source === 'reported' && d.reportedAt;
    const fresh = reported && Date.now() - d.reportedAt.getTime() < FRESH_MS;
    const updated = d.lastActive || d.updatedAt;
    const events = (d.events || []).slice(-2).reverse();
    const k = JSON.stringify([d.status, d.task, d.detail, d.source, fresh, reported && hhmm(d.reportedAt), hhmm(updated), events.map((e) => [hhmm(e.ts), e.message])]);
    if (k === key) return layout;
    key = k;

    // background
    const bg = g.createLinearGradient(0, 0, 0, H);
    bg.addColorStop(0, working ? '#0f1738' : '#0c0c22');
    bg.addColorStop(1, working ? '#0a0f28' : '#08081a');
    g.fillStyle = bg; g.fillRect(0, 0, W, H);
    g.fillStyle = 'rgba(255,255,255,0.02)';
    for (let y = 0; y < H; y += 6) g.fillRect(0, y, W, 2);

    // header
    g.fillStyle = agent.color; g.globalAlpha = 0.22; g.fillRect(0, 0, W, 100); g.globalAlpha = 1;
    g.fillStyle = agent.color; g.fillRect(0, 0, 14, 100);
    g.fillStyle = '#ffffff'; g.font = '700 58px system-ui, sans-serif'; g.textBaseline = 'alphabetic';
    g.fillText(agent.name, 40, 70);
    g.font = '800 44px system-ui, sans-serif';
    const st = working ? 'WORKING' : 'IDLE';
    const sw = g.measureText(st).width;
    g.fillStyle = working ? '#4ade80' : '#94a3b8';
    g.textAlign = 'right'; g.fillText(st, W - 36, 67); g.textAlign = 'left';
    layout.dot = { x: W - 36 - sw - 30, y: 52 };
    g.beginPath(); g.arc(layout.dot.x, layout.dot.y, 13, 0, Math.PI * 2);
    if (working) g.fill(); else { g.lineWidth = 4; g.strokeStyle = '#94a3b8'; g.stroke(); }

    // source + updated line
    g.font = '700 32px system-ui, sans-serif';
    if (fresh) { g.fillStyle = '#4ade80'; g.fillText(`● LIVE · reported ${hhmm(d.reportedAt)}`, 40, 148); }
    else if (reported) { g.fillStyle = '#a5b4fc'; g.fillText(`reported ${hhmm(d.reportedAt)}`, 40, 148); }
    else { g.fillStyle = '#fbbf24'; g.fillText('estimated from activity', 40, 148); }
    g.font = '500 32px system-ui, sans-serif'; g.fillStyle = '#9a98c8'; g.textAlign = 'right';
    g.fillText(`updated ${hhmm(updated)}`, W - 36, 148); g.textAlign = 'left';

    // task
    g.font = '700 26px system-ui, sans-serif'; g.fillStyle = '#8b8bc4';
    g.fillText('CURRENT TASK', 40, 200);
    g.font = '700 70px system-ui, sans-serif'; g.fillStyle = working ? '#ffffff' : '#d9d9ee';
    const lines = wrapLines(g, d.task || '—', W - 90, 3);
    const lh = 80;
    lines.forEach((ln, i) => g.fillText(ln, 40, 270 + i * lh));
    const lastY = 270 + (lines.length - 1) * lh;
    layout.cursor = { x: 40 + g.measureText(lines[lines.length - 1] || '').width + 14, y: lastY - 52, h: 60 };
    if (d.detail) {
      g.font = '500 36px system-ui, sans-serif'; g.fillStyle = '#c4c2f0';
      const dl = wrapLines(g, d.detail, W - 90, 1);
      g.fillText(dl[0] || '', 40, lastY + 56);
    }

    // recent events
    const ey = H - 108;
    g.fillStyle = 'rgba(139,92,246,0.35)'; g.fillRect(40, ey, W - 80, 2);
    events.forEach((e, i) => {
      const y = ey + 44 + i * 42;
      g.font = '500 28px ui-monospace, Menlo, monospace'; g.fillStyle = '#7a78b4';
      const ts = hhmm(e.ts);
      g.fillText(ts, 40, y);
      const tx = 40 + g.measureText(ts).width + 22;
      g.font = '400 30px system-ui, sans-serif'; g.fillStyle = '#d6d5f2';
      const t = wrapLines(g, e.message, W - tx - 40, 1)[0] || '';
      g.fillText(t, tx, y);
    });
    if (!events.length) { g.font = '400 30px system-ui, sans-serif'; g.fillStyle = '#6f6fa8'; g.fillText('No recent events', 40, ey + 44); }

    layout.working = working;
    tex.needsUpdate = true;
    return layout;
  }

  return { tex, draw, W, H, refreshKey: () => (key = '') };
}
