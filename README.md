# Sidatreya's Office — 3D agent office

A glass-walled, three-room office on the ocean at dusk (Trading Room · Command Center · Creative Studio),
with festive Diwali decor. Each agent has a large monitor that shows its live status and current task.

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
The default build polls `./status.json` every 15 s (cache-busted). `?demo=1` switches to the simulated feed.
Top-bar label: `live · updated HH:MM` (browser local time), or `stale · …` if older than 30 min.

Push an update (merges into dist/status.json + public/status.json, atomic, de-dupes, keeps 40 events):

    node scripts/update-status.mjs examples/update-example.json
    echo '{"newEvents":[{"agentId":"gk","text":"hi"}]}' | node scripts/update-status.mjs -
    node scripts/update-status.mjs --init      # reset to the seed state

Agent ids: gk, pro-trader, grok-bot, linkedin, furniture-designer.

## Serving
`scripts/server.mjs` serves dist/ on :8080 with `Cache-Control: no-store` for status.json and index.html.

## Publishing (GitHub Pages)
Public site: https://sidatreya.github.io/agent-office/ (served from the `gh-pages` branch root of
https://github.com/sidatreya/agent-office; source lives on `main`). Git auth goes through the logged-in `gh` CLI.

    node scripts/update-status.mjs <input.json>   # 1. update local status (does NOT publish)
    scripts/publish-status.sh                     # 2. push dist/status.json to gh-pages if it changed
    scripts/publish-site.sh                       # rebuild + republish the whole site (keeps latest status.json)

Both scripts keep a checkout of gh-pages in `.pages/` (git-ignored) and stay quiet when nothing changed.
Each push triggers a Pages deployment (typically ~30–90 s); GitHub's CDN caches files for 10 min, but the page
requests `status.json?t=<now>` so new data appears on the next 15 s poll after the deploy finishes.
GitHub Pages has a soft limit of ~10 builds/hour, so batch updates rather than pushing every few seconds.

## status.json fields (per agent)
`id, name, status ('working'|'idle'), task, progress? (0..1), detail? (optional short second line shown
under the task on the agent's screen), source ('reported'|'inferred'), reportedAt (ISO of last report), lastActive`.
Each agent's monitor shows: name, WORKING/IDLE, `LIVE · reported HH:MM` (report < 30 min old) or
`estimated from activity` (inferred), `updated HH:MM`, the task (up to 3 lines), `detail`, and the latest 2 events.

## Near-real-time reporting (any agent on this computer)
    scripts/report.sh <agent-id> <working|idle> "<task text>" ["<event text>"]

    scripts/report.sh gk working "Coordinating today's agent work" "Picked up a new request"
    scripts/report.sh pro-trader working "Scanning NIFTY 50 breakouts" "Started market scan"
    scripts/report.sh grok-bot idle "Finished the ocean-view office" "Published office v3"
    scripts/report.sh linkedin working "Drafting the Diwali campaign post"
    scripts/report.sh furniture-designer idle "Study built-in renders delivered" "Sent options A/B/C"

- Writes status.json immediately as a **report** (`source: reported`, `reportedAt: now`); the local page
  (http://localhost:8080/) shows it within ~15 s.
- Then calls `scripts/publish-throttled.sh`: if the last GitHub Pages publish was ≥ 6 min ago it publishes now;
  otherwise it schedules **one** background publish for when the 6 minutes are up. Reports in that window are
  coalesced (marker `.publish/pending`), and the scheduled job publishes whatever status.json is current then.
  Every successful push (report, routine, publish-site) records `.publish/last-publish`, so the throttle counts all
  of them → at most ~10 Pages builds/hour. Log: `logs/publish.log`. `REPORT_NO_PUBLISH=1` skips publishing.
- **Report protection:** `update-status.mjs` treats input as *inferred* by default (e.g. the 5-minute file-activity
  check-in). Inferred updates **skip any agent with a report < 30 min old** (its entry and its events), so guesses
  never overwrite a fresh first-hand report. Use `--reported` (or `"source":"reported"` per agent) for reports.
- All git work in `.pages/` is serialised with a lock (`.publish/git.lock`).

## Local server
    scripts/start.sh             # ensures the static server on :8080 (and stops stray cloudflared tunnels)
    scripts/start.sh --tunnel    # opt-in Cloudflare quick tunnel (blocked on this box: outbound port 7844)
