// HTML overlays: "Screens" (every agent's screen, readable on a phone) and "Markets" (TradingView widgets).
import { WIDGETS } from './world/markets.js';

export function setupOverlays({ agents, floors, world, feed }) {
  const ov = document.getElementById('overlay');
  const body = ov.querySelector('.ov-body');
  const title = ov.querySelector('.ov-title');
  let mode = null, timer = null;
  const canv = new Map();

  const btnS = document.getElementById('btn-screens'), btnM = document.getElementById('btn-markets');
  const mark = () => { btnS.classList.toggle('on', mode === 'screens'); btnM.classList.toggle('on', mode === 'markets'); };
  function close() { mode = null; ov.classList.add('hidden'); clearInterval(timer); body.innerHTML = ''; canv.clear(); mark(); }
  ov.querySelector('.ov-close').onclick = close;
  window.addEventListener('keydown', (e) => e.key === 'Escape' && mode && close());
  // tap/click on the dimmed backdrop (outside the panel) closes the overlay
  ov.addEventListener('click', (e) => { if (e.target === ov) close(); });

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
    clearInterval(timer); timer = setInterval(refresh, 4000);
    ov.classList.remove('hidden'); mark();
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
    clearInterval(timer); canv.clear();
    ov.classList.remove('hidden'); mark();
  }
  function refresh() {
    if (mode !== 'screens') return;
    canv.forEach((c, id) => { const src = world.stations.get(id).tex.image; c.getContext('2d').drawImage(src, 0, 0); });
  }
  btnS.onclick = () => (mode === 'screens' ? close() : openScreens());
  btnM.onclick = () => (mode === 'markets' ? close() : openMarkets());
  return { refresh, openScreens, openMarkets, close };
}
