#!/usr/bin/env bash
# Pick the newest PNG/JPG (render, chart, drawing…) in a project folder and set it as an agent's
# live work screen picture. No-op if it's the same file as last time. Publishes via the throttle.
#   scripts/auto-shots.sh [--no-publish] <agent-id> <folder> [--max-age-hours N]
# NOTE: the picture becomes PUBLIC on GitHub Pages — only point this at folders without private data.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
publish=1; maxage=""; args=()
while [ $# -gt 0 ]; do
  case "$1" in
    --no-publish) publish=0; shift ;;
    --max-age-hours) maxage="$2"; shift 2 ;;
    *) args+=("$1"); shift ;;
  esac
done
[ ${#args[@]} -ge 2 ] || { echo "usage: $0 [--no-publish] <agent-id> <folder> [--max-age-hours N]" >&2; exit 2; }
id="${args[0]}"; dir="${args[1]}"
[ -d "$dir" ] || { echo "auto-shots: no such folder: $dir" >&2; exit 1; }
age=(); [ -n "$maxage" ] && age=(-mmin "-$(( maxage * 60 ))")
newest=$(find "$dir" \( -name node_modules -o -name .git -o -name .venv -o -name venv \) -prune -o -type f \
  \( -iname '*.png' -o -iname '*.jpg' -o -iname '*.jpeg' \) "${age[@]}" -size +8k -printf '%T@ %p\n' 2>/dev/null | sort -nr | head -1 | cut -d' ' -f2-)
[ -n "$newest" ] || { echo "auto-shots: no images found in $dir"; exit 0; }
mkdir -p "$ROOT/.publish"
mark="$ROOT/.publish/autoshot-$id"
sig="$newest $(stat -c %Y "$newest")"
if [ -f "$mark" ] && [ "$(cat "$mark")" = "$sig" ]; then echo "auto-shots: $id unchanged ($newest)"; exit 0; fi
url="$(node "$ROOT/scripts/shot.mjs" "$id" "$newest")"
printf '{"agents":[{"id":"%s","screenshot":"%s"}]}' "$id" "$url" | node "$ROOT/scripts/update-status.mjs" - | grep -v '^update-status: wrote' || true
echo "$sig" > "$mark"
echo "auto-shots: $id ← $newest"
[ "$publish" = 1 ] && "$ROOT/scripts/publish-throttled.sh" || true
