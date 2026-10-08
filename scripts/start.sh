#!/usr/bin/env bash
# (Re)start the static server (port 8080) and the Cloudflare quick tunnel if they aren't running.
# Idempotent: safe to run any time. Prints the current public URL.
#   scripts/start.sh            start whatever is missing
#   scripts/start.sh --restart-tunnel   force a new tunnel (NOTE: gives a NEW public URL)
set -u
cd "$(dirname "$0")/.."
ROOT="$PWD"
PORT="${PORT:-8080}"
LOGS="$ROOT/logs"; mkdir -p "$LOGS"
export PATH="$HOME/.local/bin:/usr/local/bin:$PATH"
CLOUDFLARED="$(command -v cloudflared || true)"

alive() { [ -f "$1" ] && kill -0 "$(cat "$1")" 2>/dev/null; }

# 1. seed status.json if missing
[ -f dist/status.json ] || node scripts/update-status.mjs --init >/dev/null

# 2. static server
if curl -fs -o /dev/null --max-time 3 "http://localhost:$PORT/status.json"; then
  echo "server: already running on :$PORT"
else
  alive "$LOGS/server.pid" && kill "$(cat "$LOGS/server.pid")" 2>/dev/null
  # free the port if something else (e.g. an old vite preview) holds it
  pids=$(ss -ltnpH "sport = :$PORT" 2>/dev/null | grep -o 'pid=[0-9]*' | cut -d= -f2 | sort -u)
  [ -n "$pids" ] && kill $pids 2>/dev/null && sleep 1
  PORT=$PORT nohup setsid node scripts/server.mjs >> "$LOGS/server.log" 2>&1 < /dev/null &
  echo $! > "$LOGS/server.pid"
  for i in $(seq 1 20); do curl -fs -o /dev/null --max-time 2 "http://localhost:$PORT/status.json" && break; sleep 0.5; done
  echo "server: started on :$PORT (pid $(cat "$LOGS/server.pid"))"
fi

# 3. tunnel
if [ "${1:-}" = "--restart-tunnel" ] && alive "$LOGS/tunnel.pid"; then
  kill "$(cat "$LOGS/tunnel.pid")"; sleep 1
fi
if alive "$LOGS/tunnel.pid" && [ -s public-url.txt ]; then
  echo "tunnel: already running (pid $(cat "$LOGS/tunnel.pid"))"
else
  [ -x "$CLOUDFLARED" ] || { echo "cloudflared not found (install to ~/.local/bin)"; exit 1; }
  : > "$LOGS/tunnel.log"
  nohup setsid "$CLOUDFLARED" tunnel --no-autoupdate --url "http://localhost:$PORT" >> "$LOGS/tunnel.log" 2>&1 < /dev/null &
  echo $! > "$LOGS/tunnel.pid"
  url=""; ok=""
  for i in $(seq 1 60); do
    [ -z "$url" ] && url=$(grep -o 'https://[a-z0-9-]*\.trycloudflare\.com' "$LOGS/tunnel.log" | head -1)
    grep -q 'Registered tunnel connection' "$LOGS/tunnel.log" && ok=1 && break
    kill -0 "$(cat "$LOGS/tunnel.pid")" 2>/dev/null || break
    sleep 1
  done
  if [ -z "$url" ] || [ -z "$ok" ]; then
    kill "$(cat "$LOGS/tunnel.pid")" 2>/dev/null; rm -f "$LOGS/tunnel.pid" public-url.txt
    echo "tunnel: FAILED - no edge connection (see $LOGS/tunnel.log)."
    grep -m1 -oE 'dial tcp [^ ]+:7844[^"]*|Allow outbound [^|]*' "$LOGS/tunnel.log" | sed 's/^/  reason: /'
    echo "local site still available at http://localhost:$PORT/"
    exit 2
  fi
  echo "$url" > public-url.txt
  echo "tunnel: started (pid $(cat "$LOGS/tunnel.pid"))"
fi

URL="$(cat public-url.txt)"
code=$(curl -s -o /dev/null -w '%{http_code}' --max-time 10 "$URL/status.json" || true)
echo "public URL: $URL   (status.json -> HTTP ${code:-ERR}; a brand-new tunnel can take ~30s to resolve)"
