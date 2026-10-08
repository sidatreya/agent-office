#!/usr/bin/env bash
# Publish the current dist/status.json to GitHub Pages (gh-pages branch).
# Commits + pushes only if the file changed. Quiet; prints one line.
set -euo pipefail
source "$(dirname "$0")/pages-common.sh"
SRC="$ROOT/dist/status.json"
[ -f "$SRC" ] || { echo "no $SRC — run: node scripts/update-status.mjs --init" >&2; exit 1; }
node -e "JSON.parse(require('fs').readFileSync(process.argv[1],'utf8'))" "$SRC" || { echo "invalid JSON in $SRC" >&2; exit 1; }
STAMP=$(node -p "JSON.parse(require('fs').readFileSync(process.argv[1],'utf8')).updatedAt" "$SRC")
if [ "${PUBLISH_DRY_RUN:-}" = 1 ]; then echo "dry-run: would publish status: $STAMP"; date +%s > "$PUB/last-publish"; exit 0; fi
git_lock
ensure_checkout
cp "$SRC" "$PAGES/status.json"
commit_and_push "status: $STAMP"
