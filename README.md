# Sidatreya's Office — 3D agent office

A glass-walled office tower on the ocean at dusk with festive Diwali decor: a basement and four floors.
Each agent has a large monitor showing its live status and current task (or its latest screenshot).

| Floor | What's there |
|---|---|
| **04 · Property Management** | Department head cabin (Asset Manager desk + 4-seat table), 12 modular desks on a raised floor with an overhead cable tray and 2 marked FUTURE BAYS (room for about 20), live monitoring wall (dashboard · parcel map · automation · news · hybrid on-site/cloud status, all **example data**), AI supervision desk, internal meeting room for 10 with dashboard and map screens, **client presentation room** next to the visitor waiting area at the lift lobby (clients never cross the open office), secure fire-rated deed records room (biometric door, climate panel) with the scan & intake station feeding the AI pipeline, video-call room, pantry, toilets, network closet |
| **03 · Creative Studio** | Grok Bot (architect: drafting table and model), CCO, Furniture Deaigner, Landscape Desigener, DWG & Drafting Operator, Image Operator, Video Operator, Live Work Wall that mirrors each agent's screen, Studio Task Board, design team zone with NPC robots |
| **02 · Admin Block** | PA Sid Atreya and CEO (wide dual desks), Archivist, Marketing Maniac, Whatsapp Manager, Geek Kid, Web & 3D Developer, live activity feed wall, coffee bar, lounge |
| **01 · Trading Room** | Intraday Signal Trader, Swing HTF Trader, Warren Buffet, Risk & Verification, live TradingView market wall (ticker, BTC/USD, USD/INR, market overview), recliner lounge, golf simulator, bot fuel bar (oil · electricity · electrolytes) |
| **B1 · Server & Utilities** | Server room on a raised floor (2×10 racks, cold-aisle containment), 2 CRAC units, UPS and battery bank, 500 kVA backup generator, separate ISP A / ISP B fibre entries, biometric door, "Hybrid: on-site servers + cloud" sign and a cloud uplink panel |

Every floor has a **Floor Manager** robot. It walks the floor and has a status board and a tooltip showing how many agents are working.
It flags any agent that needs help (no update for 2h+ while working, idle for 6h+, or a task mentioning error/blocked).
The floor selector at the top (ALL · 04 · 03 · 02 · 01 · B1, also `?floor=property` etc.) shows one floor as a cut-away.
**Screens** opens every agent's screen as a list you can read on a phone. **Markets** opens the TradingView widgets.

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
- `window.office` exposes `{ feed, focusAgent(id), clearFocus(), selectFloor(id|null), overlays, view(pos, target) }`.
- World code: `src/world/` (`index.js` builder, `building.js` shell/core/quay, `floors-a.js` 01–03, `floors-b.js` 04 + B1,
  `station.js` agent desks, `manager.js` Floor Managers, `markets.js` TradingView wall, `props.js` furniture).

## Controls
Drag to rotate · scroll to zoom · right-drag to pan · click a robot / name tag / sidebar card
to focus and open its info card · R or Esc resets the view.

## Live mode (status.json)
The default build polls `./status.json` every 15 s (cache-busted). `?demo=1` switches to the simulated feed.
Top-bar label: `live · updated HH:MM` (browser local time), or `stale · …` if older than 75 min (`STALE_MS` in src/main.js).

Push an update (merges into dist/status.json + public/status.json, atomic, de-dupes, keeps 40 events):

    node scripts/update-status.mjs examples/update-example.json
    echo '{"newEvents":[{"agentId":"gk","text":"hi"}]}' | node scripts/update-status.mjs -
    node scripts/update-status.mjs --init      # reset to the seed state

Agent ids (desk names can change; ids never do):

| Floor | id → desk name |
|---|---|
| 04 | `6c94624b-cff0-445d-acf3-76a7780c90f3` Asset Manager |
| 03 | `grok-bot` Grok Bot · `cco` CCO · `furniture-designer` Furniture Deaigner · `landscape-designer` Landscape Desigener · `dwg-drafting-operator` DWG & Drafting Operator · `image-operator` Image Operator · `video-operator` Video Operator |
| 02 | `gk` PA Sid Atreya · `ceo` CEO · `archivist` Archivist · `linkedin` Marketing Maniac · `whatsapp-manager` Whatsapp Manager · `developer` Geek Kid · `web-3d-developer` Web & 3D Developer |
| 01 | `intraday-signal-trader` Intraday Signal Trader · `swing-htf-trader` Swing HTF Trader · `pro-trader` Warren Buffet · `risk-verification` Risk & Verification |

Retired ids: `developer-whatsapp` is still accepted and mapped to `whatsapp-manager` (`ID_ALIASES` in src/data/agents.js);
`boq` (no BOQ bot) is skipped with a note.

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
    scripts/report.sh 6c94624b-cff0-445d-acf3-76a7780c90f3 working "Reviewing flagged deeds"   # Asset Manager
    scripts/report.sh --shot ~/render.png grok-bot working "Rendering elevations"            # with a screenshot
    scripts/auto-shots.sh grok-bot /workspace/some-project                                    # newest image → screen

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
