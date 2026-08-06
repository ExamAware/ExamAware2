#!/bin/sh
set -eu
if [ "$(id -u)" -ne 0 ]; then
  exec sudo "$0" "$@"
fi
BASE=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
cd "$BASE"
set -a
. "$BASE/.env"
set +a
mkdir -p "$BASE/backups"
BACKUP_FILE="$BASE/backups/control-$(date +%Y%m%d-%H%M%S).sql"
if docker compose -f "$BASE/compose.yml" ps -q control-postgres >/dev/null 2>&1; then
  docker compose -f "$BASE/compose.yml" exec -T control-postgres \
    pg_dump -U "$POSTGRES_USER" -d "$POSTGRES_DB" > "$BACKUP_FILE"
else
  PGPASSWORD="$POSTGRES_PASSWORD" pg_dump -h 127.0.0.1 \
    -U "$POSTGRES_USER" -d "$POSTGRES_DB" > "$BACKUP_FILE"
fi
printf '%s\n' "$BACKUP_FILE"
