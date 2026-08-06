#!/bin/sh
set -e
BASE=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)
if [ -d "$BASE/server/packages/control-server" ]; then
  BASE="$BASE/server"
fi
cd "$BASE"
node packages/control-server/dist/database/migrate.js
if [ -n "${CONTROL_ADMIN_PASSWORD:-}" ]; then
  if ! out=$(node packages/control-server/dist/auth/bootstrap-admin.js 2>&1); then
    case "$out" in
      *"already exists"*) echo "admin already exists, skip bootstrap" ;;
      *) echo "$out" >&2; exit 1 ;;
    esac
  else
    echo "$out"
  fi
fi
