# shared helpers for publish-*.sh (sourced)
REPO="${PAGES_REPO:-sidatreya/agent-office}"
BRANCH="gh-pages"
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PAGES="$ROOT/.pages"
PUB="$ROOT/.publish"   # throttle state: last-publish epoch, pending marker, locks
mkdir -p "$PUB" "$ROOT/logs"
GIT_NAME="sidatreya"
GIT_EMAIL="65660574+sidatreya@users.noreply.github.com"
# authenticate git over https via the logged-in gh CLI (no token stored in files)
GITC=(-c credential.helper= -c "credential.helper=!gh auth git-credential")

ensure_checkout() {
  if [ ! -d "$PAGES/.git" ]; then
    git "${GITC[@]}" clone -q --branch "$BRANCH" --single-branch "https://github.com/$REPO.git" "$PAGES"
  fi
  git -C "$PAGES" config user.name "$GIT_NAME"
  git -C "$PAGES" config user.email "$GIT_EMAIL"
  # stay in sync with the remote (we are the only writer, so fast-forward/reset is safe)
  git "${GITC[@]}" -C "$PAGES" fetch -q origin "$BRANCH"
  git -C "$PAGES" reset -q --hard "origin/$BRANCH"
}

commit_and_push() { # $1 = message
  git -C "$PAGES" add -A
  if git -C "$PAGES" diff --cached --quiet; then
    echo "unchanged — nothing to publish"
    return 0
  fi
  git -C "$PAGES" commit -q -m "$1"
  git "${GITC[@]}" -C "$PAGES" push -q origin "$BRANCH"
  date +%s > "$PUB/last-publish"
  echo "published: $1 ($(git -C "$PAGES" rev-parse --short HEAD))"
}

# serialise all git work in .pages (publish-status, publish-site, throttled jobs)
git_lock() { exec 9>"$PUB/git.lock"; flock -w 180 9 || { echo "publish: timed out waiting for git lock" >&2; exit 1; }; }
