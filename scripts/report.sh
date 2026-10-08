#!/usr/bin/env bash
# Near-real-time task reporting for agents sharing this computer.
#   scripts/report.sh <agent-id> <working|idle> "<task text>" ["<event text>"]
# Updates status.json immediately as a first-hand report (source: reported) — the local page shows it
# within ~15 s — then publishes to GitHub Pages via the 6-minute throttle (scripts/publish-throttled.sh).
# Set REPORT_NO_PUBLISH=1 to skip publishing.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
IDS="gk pro-trader grok-bot linkedin furniture-designer"
usage() { echo "usage: $0 <agent-id> <working|idle> \"<task text>\" [\"<event text>\"]   (ids: $IDS)" >&2; exit 2; }
[ $# -ge 3 ] || usage
id="$1"; st="$2"; task="$3"; evt="${4:-}"
case " $IDS " in *" $id "*) ;; *) echo "unknown agent id: $id" >&2; usage ;; esac
case "$st" in working|idle) ;; *) echo "status must be working or idle" >&2; usage ;; esac
[ -n "${task// }" ] || { echo "task text is required" >&2; usage; }

node -e 'const [id,status,task,evt]=process.argv.slice(1);
  process.stdout.write(JSON.stringify({agents:[{id,status,task}],newEvents:evt?[{agentId:id,text:evt}]:[]}))' \
  "$id" "$st" "$task" "$evt" > "${TMPDIR:-/tmp}/report.$$.json"
out=$(node "$ROOT/scripts/update-status.mjs" --reported "${TMPDIR:-/tmp}/report.$$.json" 2>&1) || { rm -f "${TMPDIR:-/tmp}/report.$$.json"; echo "$out" >&2; exit 1; }
rm -f "${TMPDIR:-/tmp}/report.$$.json"
echo "$out" | grep -v '^update-status: wrote' || true

[ "${REPORT_NO_PUBLISH:-}" = 1 ] && { echo "report: saved (publish skipped)"; exit 0; }
"$ROOT/scripts/publish-throttled.sh"
