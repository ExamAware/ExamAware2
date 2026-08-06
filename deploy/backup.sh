#!/usr/bin/env bash
set -Eeuo pipefail

if (( EUID != 0 )); then
  command -v sudo >/dev/null 2>&1 || {
    printf '%s\n' '需要 root 权限或可用的 sudo。' >&2
    exit 2
  }
  exec sudo bash "$0" "$@"
fi

BASE="$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)"
INSTALL_DIR="$BASE"
EXAMAWARE_INSTALL_LIB_ONLY=1
export INSTALL_DIR EXAMAWARE_INSTALL_LIB_ONLY
# shellcheck disable=SC1091
source "$BASE/install.sh"

detect_install_mode
(( UPGRADE == 1 )) || die 2 "未检测到可备份的 ExamAware 集控中心安装。"
perform_backup || die 3 "数据库备份失败；未留下空的 .part 或伪成功备份。"
printf '%s\n' "$BACKUP_FILE"
