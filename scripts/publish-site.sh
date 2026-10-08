#!/usr/bin/env bash
# Rebuild the site and republish the whole dist/ to GitHub Pages, keeping the latest status.json.
set -euo pipefail
source "$(dirname "$0")/pages-common.sh"
cd "$ROOT"
# keep the newest status.json across the rebuild (vite copies public/ into dist/)
if [ -f dist/status.json ]; then cp dist/status.json public/status.json; fi
[ -f public/status.json ] || node scripts/update-status.mjs --init >/dev/null
npx vite build --logLevel error
git_lock
ensure_checkout
# replace everything except .git with the fresh build
find "$PAGES" -mindepth 1 -maxdepth 1 ! -name .git -exec rm -rf {} +
cp -a dist/. "$PAGES/"
touch "$PAGES/.nojekyll"
commit_and_push "site: rebuild $(date -u +%Y-%m-%dT%H:%MZ)"
