# Sidatreya's Office — 3D agent office

A browser-based 3D office (Three.js r186, bundled with Vite, works offline) showing your agents
as robots at desks, a live activity feed on the wall screen, a status sidebar and a top bar.

## Run
    npm install          # once (node_modules already present on this box)
    npm run dev          # dev server  -> http://localhost:5173
    npm run build        # production build -> dist/
    npm run preview      # serve dist/ -> http://localhost:8080

dist/ uses relative paths, so it can be hosted from any static server or sub-folder
(e.g. `python3 -m http.server -d dist 8080`). It must be served over http(s); opening
dist/index.html straight from disk (file://) is blocked by browsers for ES modules.

## Wiring real data
- `src/data/agents.js` – roster (name, role, colour, desk position, sample tasks/log lines).
- `src/data/feed.js`   – simulated feed. Any object with the same interface
  (`subscribe`, `getState`, `history`, `start`, `stop`) can replace it in `src/main.js`,
  e.g. one backed by a WebSocket/SSE stream or a polled JSON endpoint.
  Event shape: `{ ts: Date, agentId, type: 'log'|'status', message, status?, task? }`.
- `window.office` exposes `{ feed, focusAgent(id), clearFocus() }` in the console.

## Controls
Drag to rotate · scroll to zoom · right-drag to pan · click a robot / name tag / sidebar card
to focus and open its info card · R or Esc resets the view.

## Live mode (status.json)
The default build polls `./status.json` every 20 s (cache-busted). `?demo=1` switches to the simulated feed.
Top-bar label: `live · updated HH:MM` (browser local time), or `stale · …` if older than 30 min.

Push an update (merges into dist/status.json + public/status.json, atomic, de-dupes, keeps 40 events):

    node scripts/update-status.mjs examples/update-example.json
    echo '{"newEvents":[{"agentId":"gk","text":"hi"}]}' | node scripts/update-status.mjs -
    node scripts/update-status.mjs --init      # reset to the seed state

Agent ids: gk, pro-trader, grok-bot, linkedin, furniture-designer.

## Serving
    scripts/start.sh                 # idempotent: starts scripts/server.mjs on :8080 + cloudflared quick tunnel
    scripts/start.sh --restart-tunnel
Logs/pids in logs/, public URL in public-url.txt. status.json and index.html are sent with Cache-Control: no-store.

## Publishing (GitHub Pages)
Public site: https://sidatreya.github.io/agent-office/ (served from the `gh-pages` branch root of
https://github.com/sidatreya/agent-office; source lives on `main`). Git auth goes through the logged-in `gh` CLI.

    node scripts/update-status.mjs <input.json>   # 1. update local status (does NOT publish)
    scripts/publish-status.sh                     # 2. push dist/status.json to gh-pages if it changed
    scripts/publish-site.sh                       # rebuild + republish the whole site (keeps latest status.json)

Both scripts keep a checkout of gh-pages in `.pages/` (git-ignored) and stay quiet when nothing changed.
Each push triggers a Pages deployment (typically ~30–90 s); GitHub's CDN caches files for 10 min, but the page
requests `status.json?t=<now>` so new data appears on the next 20 s poll after the deploy finishes.
GitHub Pages has a soft limit of ~10 builds/hour, so batch updates rather than pushing every few seconds.
