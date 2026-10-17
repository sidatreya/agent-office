// Per-agent screen: a high-res CanvasTexture. With a live screenshot it shows the picture
// (header + task caption on top); otherwise big task text + status + latest events.
// draw(data) only repaints when the visible content changes.
import * as THREE from 'three';

export const hhmm = (d) => (d ? d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '--:--');
const FRESH_MS = 30 * 60 * 1000;

// shared screenshot loader (same image used by the desk monitor, the live wall and the overlay)
const imgCache = new Map();
export function loadShot(url, onload) {
  if (!url) return null;
  let e = imgCache.get(url);
  if (!e) {
    e = { img: new Image(), ok: false, failed: false, cbs: [] };
    e.img.decoding = 'async';
    e.img.onload = () => { e.ok = true; e.cbs.splice(0).forEach((f) => f()); };
    e.img.onerror = () => { e.failed = true; e.cbs.splice(0).forEach((f) => f()); };
    e.img.src = url;
    imgCache.set(url, e);
  }
  if (!e.ok && !e.failed && onload) e.cbs.push(onload);
  return e;
}

export function wrapLines(g, text, maxW, maxLines) {
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
  const last = lines.length - 1;
  if (last >= 0) { let l = lines[last]; while (g.measureText(l).width > maxW && l.length > 3) l = l.slice(0, -3) + '…'; lines[last] = l; }
  return lines;
}

export function createAgentScreen(agent, { width = 1024, height = 640, anisotropy = 8, onNeedsRedraw } = {}) {
  const W = width, H = height, k = H / 640; // font scale
  const c = document.createElement('canvas');
  c.width = W; c.height = H;
  const g = c.getContext('2d');
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = anisotropy;
  let key = '';
  const layout = { dot: { x: 0, y: 0 }, cursor: { x: 0, y: 0, h: 60 }, working: false, image: false };
  const F = (w, px, fam = 'system-ui, sans-serif') => `${w} ${Math.round(px * k)}px ${fam}`;

  function header(d, working, fresh, reported, updated) {
    g.fillStyle = agent.color; g.globalAlpha = 0.25; g.fillRect(0, 0, W, 100 * k); g.globalAlpha = 1;
    g.fillStyle = 'rgba(8,8,26,0.55)'; g.fillRect(0, 0, W, 100 * k);
    g.fillStyle = agent.color; g.fillRect(0, 0, 14 * k, 100 * k);
    g.fillStyle = '#ffffff'; g.font = F(700, 56); g.textBaseline = 'alphabetic';
    g.fillText(agent.name, 40 * k, 68 * k);
    g.font = F(800, 44);
    const st = working ? 'WORKING' : 'IDLE';
    const sw = g.measureText(st).width;
    g.fillStyle = working ? '#4ade80' : '#94a3b8';
    g.textAlign = 'right'; g.fillText(st, W - 36 * k, 66 * k); g.textAlign = 'left';
    layout.dot = { x: W - 36 * k - sw - 30 * k, y: 51 * k };
    g.beginPath(); g.arc(layout.dot.x, layout.dot.y, 13 * k, 0, Math.PI * 2);
    if (working) g.fill(); else { g.lineWidth = 4 * k; g.strokeStyle = '#94a3b8'; g.stroke(); }
    // source line under the header
    const y = 100 * k + 44 * k;
    g.fillStyle = 'rgba(8,8,26,0.7)'; g.fillRect(0, 100 * k, W, 62 * k);
    g.font = F(700, 32);
    if (fresh) { g.fillStyle = '#4ade80'; g.fillText(`● LIVE · reported ${hhmm(d.reportedAt)}`, 40 * k, y); }
    else if (reported) { g.fillStyle = '#a5b4fc'; g.fillText(`reported ${hhmm(d.reportedAt)}`, 40 * k, y); }
    else { g.fillStyle = '#fbbf24'; g.fillText('estimated from activity', 40 * k, y); }
    g.font = F(500, 32); g.fillStyle = '#b4b2e0'; g.textAlign = 'right';
    g.fillText(`updated ${hhmm(updated)}`, W - 36 * k, y); g.textAlign = 'left';
  }

  function draw(d) {
    const working = d.status === 'working';
    const reported = d.source === 'reported' && d.reportedAt;
    const fresh = reported && Date.now() - d.reportedAt.getTime() < FRESH_MS;
    const updated = d.lastActive || d.updatedAt;
    const events = (d.events || []).slice(-2).reverse();
    const shot = d.screenshot ? loadShot(d.screenshot, () => { key = ''; onNeedsRedraw && onNeedsRedraw(); }) : null;
    const hasImg = !!(shot && shot.ok);
    const kk = JSON.stringify([d.status, d.task, d.detail, d.source, fresh, reported && hhmm(d.reportedAt), hhmm(updated), events.map((e) => [hhmm(e.ts), e.message]), d.screenshot, hasImg]);
    if (kk === key) return layout;
    key = kk;

    const bg = g.createLinearGradient(0, 0, 0, H);
    bg.addColorStop(0, working ? '#0f1738' : '#0c0c22');
    bg.addColorStop(1, working ? '#0a0f28' : '#08081a');
    g.fillStyle = bg; g.fillRect(0, 0, W, H);

    if (hasImg) {
      // live screenshot fills the screen (contain), header + task caption overlaid
      const img = shot.img;
      const top = 162 * k, bot = H - 96 * k;
      const s = Math.min(W / img.width, (bot - top) / img.height);
      const iw = img.width * s, ih = img.height * s;
      g.fillStyle = '#05050f'; g.fillRect(0, top, W, bot - top);
      g.drawImage(img, (W - iw) / 2, top + (bot - top - ih) / 2, iw, ih);
      header(d, working, fresh, reported, updated);
      g.fillStyle = 'rgba(8,8,26,0.88)'; g.fillRect(0, bot, W, H - bot);
      g.fillStyle = agent.color; g.fillRect(0, bot, W, 4 * k);
      g.font = F(700, 46); g.fillStyle = '#ffffff';
      const ln = wrapLines(g, d.task || '—', W - 80 * k, 1)[0] || '';
      g.fillText(ln, 40 * k, bot + 64 * k);
      layout.cursor = { x: 40 * k + g.measureText(ln).width + 12 * k, y: bot + 26 * k, h: 46 * k };
      layout.image = true;
    } else {
      g.fillStyle = 'rgba(255,255,255,0.02)';
      for (let y = 0; y < H; y += 6) g.fillRect(0, y, W, 2);
      header(d, working, fresh, reported, updated);
      g.font = F(700, 26); g.fillStyle = '#8b8bc4';
      g.fillText('CURRENT TASK', 40 * k, 206 * k);
      g.font = F(700, 70); g.fillStyle = working ? '#ffffff' : '#d9d9ee';
      const lines = wrapLines(g, d.task || '—', W - 90 * k, 3);
      const lh = 80 * k;
      lines.forEach((ln, i) => g.fillText(ln, 40 * k, 276 * k + i * lh));
      const lastY = 276 * k + (lines.length - 1) * lh;
      layout.cursor = { x: 40 * k + g.measureText(lines[lines.length - 1] || '').width + 14 * k, y: lastY - 52 * k, h: 60 * k };
      if (d.detail) {
        g.font = F(500, 36); g.fillStyle = '#c4c2f0';
        g.fillText(wrapLines(g, d.detail, W - 90 * k, 1)[0] || '', 40 * k, lastY + 56 * k);
      }
      const ey = H - 108 * k;
      g.fillStyle = 'rgba(139,92,246,0.35)'; g.fillRect(40 * k, ey, W - 80 * k, 2 * k);
      events.forEach((e, i) => {
        const y = ey + 44 * k + i * 42 * k;
        g.font = F(500, 28, 'ui-monospace, Menlo, monospace'); g.fillStyle = '#7a78b4';
        const ts = hhmm(e.ts);
        g.fillText(ts, 40 * k, y);
        const tx = 40 * k + g.measureText(ts).width + 22 * k;
        g.font = F(400, 30); g.fillStyle = '#d6d5f2';
        g.fillText(wrapLines(g, e.message, W - tx - 40 * k, 1)[0] || '', tx, y);
      });
      if (!events.length) { g.font = F(400, 30); g.fillStyle = '#6f6fa8'; g.fillText('No recent events', 40 * k, ey + 44 * k); }
      layout.image = false;
    }
    layout.working = working;
    tex.needsUpdate = true;
    return layout;
  }

  return { tex, draw, W, H, invalidate: () => (key = '') };
}
