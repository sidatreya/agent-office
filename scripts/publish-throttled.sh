#!/usr/bin/env bash
# Publish dist/status.json to GitHub Pages at most once per 6 minutes (keeps us under ~10 Pages builds/hour).
#  - last publish >= 6 min ago  -> publish now
#  - otherwise                  -> schedule ONE background publish for when the 6 minutes are up;
#                                  further calls in that window are coalesced into it (it publishes the
#                                  latest status.json at that moment).
# State lives in .publish/ (last-publish epoch, pending marker "<pid> <due-epoch>", lock files).
set -euo pipefail
source "$(dirname "$0")/pages-common.sh"
MIN_GAP="${PUBLISH_MIN_GAP:-360}"
PENDING="$PUB/pending"
LOG="$ROOT/logs/publish.log"

exec 8>"$PUB/throttle.lock"
flock -w 120 8 || { echo "publish: throttle lock busy" >&2; exit 1; }

if [ "${1:-}" = "--run-pending" ]; then
  rm -f "$PENDING"
  out=$("$ROOT/scripts/publish-status.sh" 2>&1) || out="FAILED: $out"
  echo "[$(date '+%F %T')] scheduled publish: $out" >> "$LOG"
  exit 0
fi

if [ -f "$PENDING" ] && kill -0 "$(cut -d' ' -f1 "$PENDING")" 2>/dev/null; then
  echo "publish: coalesced into the publish already scheduled for $(date -d @"$(cut -d' ' -f2 "$PENDING")" +%H:%M:%S)"
  exit 0
fi

now=$(date +%s)
last=$(cat "$PUB/last-publish" 2>/dev/null || echo 0)
gap=$(( now - last ))
if [ "$gap" -ge "$MIN_GAP" ]; then
  out=$("$ROOT/scripts/publish-status.sh" 2>&1) || { echo "publish: FAILED: $out" >&2; echo "[$(date '+%F %T')] publish FAILED: $out" >> "$LOG"; exit 1; }
  echo "$out"; echo "[$(date '+%F %T')] immediate publish: $out" >> "$LOG"
else
  wait=$(( MIN_GAP - gap )); due=$(( now + wait ))
  nohup setsid bash -c "sleep $wait; exec '$ROOT/scripts/publish-throttled.sh' --run-pending" >/dev/null 2>&1 < /dev/null 8>&- 9>&- &
  echo "$! $due" > "$PENDING"
  echo "publish: last publish ${gap}s ago — one publish scheduled for $(date -d @$due +%H:%M:%S)"
  echo "[$(date '+%F %T')] scheduled for $(date -d @$due '+%T')" >> "$LOG"
fi
