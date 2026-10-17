// HTML overlays: "Screens" (every agent's screen, readable on a phone) and "Markets" (TradingView widgets).
import { WIDGETS } from './world/markets.js';

export function setupOverlays({ agents, floors, world, feed }) {
  const ov = document.getElementById('overlay');
  const body = ov.querySelector('.ov-body');
  const title = ov.querySelector('.ov-title');
  let mode = null, timer = null;
  const canv = new Map();

  function close() { mode = null; ov.classList.add('hidden'); clearInterval(timer); body.innerHTML = ''; canv.clear(); }
  ov.querySelector('.ov-close').onclick = close;
  window.addEventListener('keydown', (e) => e.key === 'Escape' && close());

  function openScreens() {
    mode = 'screens'; title.textContent = 'Agent screens'; body.innerHTML = ''; body.className = 'ov-body screens';
    for (const f of [...floors].reverse()) {
      const mine = agents.filter((a) => a.floor === f.id);
      const mgr = world.byFloor.get(f.id).manager.summary();
      const h = document.createElement('div'); h.className = 'ov-floor';
      h.innerHTML = `<b>${f.label} · ${f.name}</b><span>${mine.length ? `${mgr.working}/${mgr.total} working` : 'infrastructure'}${mgr.flags.length ? ` · ⚠ ${mgr.flags.map((x) => x.a.name).join(', ')}` : ''}</span>`;
      body.appendChild(h);
      if (!mine.length) continue;
      const grid = document.createElement('div'); grid.className = 'ov-grid'; body.appendChild(grid);
      for (const a of mine) {
        const src = world.stations.get(a.id).tex.image;
        const c = document.createElement('canvas'); c.width = src.width; c.height = src.height;
        c.onclick = () => { close(); window.office.focusAgent(a.id); };
        grid.appendChild(c); canv.set(a.id, c);
      }
    }
    refresh();
    timer = setInterval(refresh, 4000);
    ov.classList.remove('hidden');
  }
  function openMarkets() {
    mode = 'markets'; title.textContent = 'Markets · live (TradingView)'; body.className = 'ov-body markets';
    body.innerHTML = `
      <iframe class="tv-ticker" src="${WIDGETS.ticker()}" frameborder="0" scrolling="no" allowtransparency="true"></iframe>
      <div class="tv-grid">
        <iframe src="${WIDGETS.mini('BITSTAMP:BTCUSD')}" frameborder="0" scrolling="no" allowtransparency="true"></iframe>
        <iframe src="${WIDGETS.mini('FX_IDC:USDINR')}" frameborder="0" scrolling="no" allowtransparency="true"></iframe>
      </div>
      <iframe class="tv-overview" src="${WIDGETS.overview()}" frameborder="0" scrolling="no" allowtransparency="true"></iframe>
      <p class="tv-note">Market data by TradingView. Example dashboards on Floor 04 are placeholder data.</p>`;
    ov.classList.remove('hidden');
  }
  function refresh() {
    if (mode !== 'screens') return;
    canv.forEach((c, id) => { const src = world.stations.get(id).tex.image; c.getContext('2d').drawImage(src, 0, 0); });
  }
  document.getElementById('btn-screens').onclick = () => (mode === 'screens' ? close() : openScreens());
  document.getElementById('btn-markets').onclick = () => (mode === 'markets' ? close() : openMarkets());
  return { refresh, openScreens, openMarkets, close };
}
