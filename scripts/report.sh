#!/usr/bin/env bash
# Near-real-time task reporting for agents sharing this computer.
#   scripts/report.sh [--shot <image>] <agent-id> <working|idle> "<task text>" ["<event text>"]
# Updates status.json immediately as a first-hand report (source: reported) — the local page shows it
# within ~15 s — then publishes to GitHub Pages via the 6-minute throttle (scripts/publish-throttled.sh).
# --shot <image>: also set the agent's live work screen picture (downscaled JPEG under shots/).
# NOTE: shots are published on the PUBLIC site — never pass screenshots containing private data.
# Set REPORT_NO_PUBLISH=1 to skip publishing.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
IDS="$(node -e "import('$ROOT/src/data/agents.js').then(m=>console.log(m.AGENTS.map(a=>a.id).join(' ')))")"
# retired ids still accepted: mapped to their successor desk (see ID_ALIASES in src/data/agents.js)
ALIASES="$(node -e "import('$ROOT/src/data/agents.js').then(m=>console.log(Object.keys(m.ID_ALIASES||{}).join(' ')))")"
usage() { echo "usage: $0 [--shot <image>] <agent-id> <working|idle> \"<task text>\" [\"<event text>\"]   (ids: $IDS)" >&2; exit 2; }
shot=""; args=()
while [ $# -gt 0 ]; do
  case "$1" in
    --shot) [ $# -ge 2 ] || usage; shot="$2"; shift 2 ;;
    --shot=*) shot="${1#--shot=}"; shift ;;
    *) args+=("$1"); shift ;;
  esac
done
[ ${#args[@]} -ge 3 ] || usage
id="${args[0]}"; st="${args[1]}"; task="${args[2]}"; evt="${args[3]:-}"
case " $ALIASES " in *" $id "*) id="$(node -e "import('$ROOT/src/data/agents.js').then(m=>console.log(m.resolveId(process.argv[1])))" "$id")"; echo "report: retired id mapped to $id" >&2 ;; esac
case " $IDS " in *" $id "*) ;; *) echo "unknown agent id: $id" >&2; usage ;; esac
case "$st" in working|idle) ;; *) echo "status must be working or idle" >&2; usage ;; esac
[ -n "${task// }" ] || { echo "task text is required" >&2; usage; }
shoturl=""
if [ -n "$shot" ]; then shoturl="$(node "$ROOT/scripts/shot.mjs" "$id" "$shot")"; fi

tmp="${TMPDIR:-/tmp}/report.$$.json"
node -e 'const [id,status,task,evt,shot]=process.argv.slice(1); const ag={id,status,task}; if(shot) ag.screenshot=shot;
  process.stdout.write(JSON.stringify({agents:[ag],newEvents:evt?[{agentId:id,text:evt}]:[]}))' \
  "$id" "$st" "$task" "$evt" "$shoturl" > "$tmp"
out=$(node "$ROOT/scripts/update-status.mjs" --reported "$tmp" 2>&1) || { rm -f "$tmp"; echo "$out" >&2; exit 1; }
rm -f "$tmp"
echo "$out" | grep -v '^update-status: wrote' || true

[ "${REPORT_NO_PUBLISH:-}" = 1 ] && { echo "report: saved (publish skipped)"; exit 0; }
"$ROOT/scripts/publish-throttled.sh"
