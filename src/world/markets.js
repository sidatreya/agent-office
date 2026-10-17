// TradingView market wall. Live widgets are iframes placed in 3D with CSS3DRenderer; each sits on a
// WebGL backing panel with a stylised fallback chart (shown in the all-floors view / before load).
import * as THREE from 'three';
import { CSS3DObject } from 'three/addons/renderers/CSS3DRenderer.js';
import { ctx, box, canvasTexture, neonMat } from './common.js';

const TV = 'https://s.tradingview.com/embed-widget';
export const tvUrl = (kind, cfg) => `${TV}/${kind}/?locale=en#${encodeURIComponent(JSON.stringify(cfg))}`;

export const WIDGETS = {
  ticker: () => tvUrl('ticker-tape', {
    symbols: [
      { proName: 'BITSTAMP:BTCUSD', title: 'BTC/USD' }, { proName: 'FX_IDC:USDINR', title: 'USD/INR' },
      { proName: 'BINANCE:ETHUSDT', title: 'ETH' }, { proName: 'FOREXCOM:SPXUSD', title: 'S&P 500' },
      { proName: 'TVC:GOLD', title: 'Gold' }, { proName: 'TVC:USOIL', title: 'Crude' }, { proName: 'BINANCE:ASTERUSDT', title: 'ASTER' },
    ],
    showSymbolLogo: true, colorTheme: 'dark', isTransparent: true, displayMode: 'adaptive',
  }),
  mini: (symbol) => tvUrl('mini-symbol-overview', { symbol, width: '100%', height: '100%', dateRange: '1D', colorTheme: 'dark', isTransparent: true, autosize: true }),
  overview: () => tvUrl('market-overview', {
    colorTheme: 'dark', dateRange: '1D', showChart: true, width: '100%', height: '100%', isTransparent: true, showSymbolLogo: true,
    tabs: [
      { title: 'Crypto', symbols: [{ s: 'BITSTAMP:BTCUSD', d: 'Bitcoin' }, { s: 'BINANCE:ETHUSDT', d: 'Ethereum' }, { s: 'BINANCE:SOLUSDT', d: 'Solana' }] },
      { title: 'Forex', symbols: [{ s: 'FX_IDC:USDINR', d: 'USD/INR' }, { s: 'FX:EURUSD', d: 'EUR/USD' }] },
      { title: 'Indices', symbols: [{ s: 'FOREXCOM:SPXUSD', d: 'S&P 500' }, { s: 'FOREXCOM:NSXUSD', d: 'Nasdaq 100' }] },
    ],
  }),
};

function fallback(title, seed) {
  return canvasTexture(1024, 640, (c, w, h) => {
    c.fillStyle = '#0a0f1f'; c.fillRect(0, 0, w, h);
    c.strokeStyle = 'rgba(255,255,255,0.06)';
    for (let x = 0; x < w; x += 64) { c.beginPath(); c.moveTo(x, 80); c.lineTo(x, h); c.stroke(); }
    for (let y = 80; y < h; y += 64) { c.beginPath(); c.moveTo(0, y); c.lineTo(w, y); c.stroke(); }
    c.fillStyle = '#e2e8f0'; c.font = '700 44px system-ui'; c.fillText(title, 32, 56);
    c.fillStyle = '#64748b'; c.font = '500 26px system-ui'; c.textAlign = 'right'; c.fillText('TradingView · live on this floor', w - 32, 54); c.textAlign = 'left';
    let y = h * 0.6, s = seed;
    const pts = [];
    for (let x = 0; x <= w; x += 16) { s = (s * 9301 + 49297) % 233280; y += (s / 233280 - 0.48) * 34; y = Math.max(140, Math.min(h - 40, y)); pts.push([x, y]); }
    const grd = c.createLinearGradient(0, 140, 0, h); grd.addColorStop(0, 'rgba(34,197,94,0.35)'); grd.addColorStop(1, 'rgba(34,197,94,0)');
    c.beginPath(); c.moveTo(0, h); pts.forEach(([x, yy]) => c.lineTo(x, yy)); c.lineTo(w, h); c.fillStyle = grd; c.fill();
    c.beginPath(); pts.forEach(([x, yy], i) => (i ? c.lineTo(x, yy) : c.moveTo(x, yy))); c.strokeStyle = '#22c55e'; c.lineWidth = 4; c.stroke();
  });
}

// panels: [{ title, url, x, y, z, w, h, rotY }]
export function buildMarketWall(parent, cssScene, panels) {
  const M = ctx.M;
  const objs = [];
  const PX = 900; // css px across a panel
  for (const [i, p] of panels.entries()) {
    const g = new THREE.Group(); g.position.set(p.x, p.y, p.z); g.rotation.y = p.rotY || 0; parent.add(g);
    g.add(box(p.w + 0.14, p.h + 0.14, 0.08, M.graphite, {}));
    const fb = new THREE.Mesh(new THREE.PlaneGeometry(p.w, p.h), new THREE.MeshBasicMaterial({ map: fallback(p.title, 17 + i * 31), color: new THREE.Color(0.9, 0.9, 0.9) }));
    fb.position.z = 0.045; g.add(fb);
    g.add(box(p.w, 0.03, 0.03, neonMat('#22c55e', 1.6), { y: -p.h / 2 - 0.1, z: 0.05, cast: false }));
    const el = document.createElement('div');
    el.className = 'tv3d';
    el.style.width = `${PX}px`; el.style.height = `${Math.round((PX * p.h) / p.w)}px`;
    const obj = new CSS3DObject(el);
    obj.scale.setScalar(p.w / PX);
    obj.position.z = 0.05;
    g.add(obj);
    obj.visible = false;
    objs.push({ obj, el, url: p.url, loaded: false, s: p.w / PX });
  }
  // CSS3D objects must live in the css scene: re-parent while keeping world transforms in sync each frame
  objs.forEach((o) => { o.anchor = o.obj.parent; o.anchor.remove(o.obj); cssScene.add(o.obj); });
  const tmpM = new THREE.Matrix4();
  return {
    setLive(on) {
      for (const o of objs) {
        if (on && !o.loaded) { o.el.innerHTML = `<iframe src="${o.url}" loading="lazy" allowtransparency="true" frameborder="0" scrolling="no"></iframe>`; o.loaded = true; }
        o.obj.visible = on;
        o.el.style.display = on ? '' : 'none';
      }
    },
    sync() {
      for (const o of objs) {
        if (!o.obj.visible) continue;
        o.anchor.updateWorldMatrix(true, false);
        tmpM.copy(o.anchor.matrixWorld).multiply(new THREE.Matrix4().compose(new THREE.Vector3(0, 0, 0.05), new THREE.Quaternion(), new THREE.Vector3().setScalar(o.s)));
        tmpM.decompose(o.obj.position, o.obj.quaternion, o.obj.scale);
      }
    },
  };
}
