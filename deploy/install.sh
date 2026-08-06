#!/usr/bin/env bash
set -Eeuo pipefail
shopt -s extglob

INSTALL_DIR="${INSTALL_DIR:-/opt/examaware-control}"
readonly REPOSITORY="ExamAware/ExamAware-Control"
readonly RELEASE_ROOT="https://github.com/${REPOSITORY}/releases"
readonly INSTALLER_STATE_VERSION_CURRENT="1"
readonly DOCKER_INSTALL_COMMAND='bash <(curl -sSL https://linuxmirrors.cn/docker.sh)'
readonly DEFAULT_GITHUB_MIRRORS='https://github.chenc.dev/ https://ghproxy.cfd/ https://ghproxy.cc/ https://gh-proxy.com/'
readonly DOMESTIC_POSTGRES_IMAGE='docker.1ms.run/postgres:17-alpine'
readonly OFFICIAL_POSTGRES_IMAGE='postgres:17-alpine'
readonly DOMESTIC_CONTROL_REGISTRY='ghcr.1ms.run'
readonly OFFICIAL_CONTROL_REGISTRY='ghcr.io'

CURRENT_STAGE="初始化"
STAGE_NUMBER=0
UPGRADE=0
MODE=""
LOG_FILE=""
LOG_DESTINATION=""
CANCELLED=0
ACTIVATION_STARTED=0
SUCCESS=0
FAILURE_HANDLED=0
GENERATED_ADMIN_PASSWORD=0
BACKUP_FILE=""
ROLLBACK_DIR=""
CANDIDATE_DIR=""
COMPOSE_ENV_FILE=""
RUNTIME_COMPOSE=""
REQUESTED_VERSION=""
VERSION=""
ASSET_ROOT=""
DOCKER_SUPPORTS_WAIT=0
POSTGRES_IMAGE_EXPLICIT=0
CONTROL_REGISTRY_EXPLICIT=0
LEGACY_STATE=0
TEMP_PATHS=()

if [[ -z "${INPUT_POSTGRES_IMAGE_SET+x}" ]]; then
  INPUT_POSTGRES_IMAGE_SET=0
  [[ -n "${POSTGRES_IMAGE+x}" ]] && INPUT_POSTGRES_IMAGE_SET=1
fi
if [[ -z "${INPUT_CONTROL_REGISTRY_SET+x}" ]]; then
  INPUT_CONTROL_REGISTRY_SET=0
  [[ -n "${CONTROL_REGISTRY+x}" ]] && INPUT_CONTROL_REGISTRY_SET=1
fi

log() {
  printf '%s\n' "$*"
}

status_ok() {
  printf '%s\n' "[成功] $*"
}

status_warn() {
  printf '%s\n' "[警告] $*"
}

status_error() {
  printf '%s\n' "[错误] $*" >&2
}

register_temp() {
  TEMP_PATHS+=("$1")
}

cleanup_temps() {
  local path
  for path in "${TEMP_PATHS[@]:-}"; do
    [[ -n "$path" ]] && rm -rf -- "$path" 2>/dev/null || true
  done
}

on_exit() {
  local exit_code=$?
  trap - EXIT ERR
  if (( exit_code != 0 && ACTIVATION_STARTED == 1 && SUCCESS == 0 && FAILURE_HANDLED == 0 )); then
    handle_activation_failure
  fi
  cleanup_temps
  if [[ "$CANCELLED" == "1" ]]; then
    [[ -n "$LOG_FILE" ]] && rm -f -- "$LOG_FILE" 2>/dev/null || true
  elif (( exit_code != 0 )); then
    status_error "安装阶段“${CURRENT_STAGE}”失败，退出码 ${exit_code}。"
    if [[ -n "$LOG_DESTINATION" ]]; then
      log "诊断日志: ${LOG_DESTINATION}"
    elif [[ -n "$LOG_FILE" ]]; then
      log "诊断日志: ${LOG_FILE}"
    fi
    log "修复问题后重新运行同一安装命令；现有数据库不会被自动覆盖。"
  fi
  exit "$exit_code"
}

on_error() {
  LAST_ERROR_CODE=$?
}

on_signal() {
  CURRENT_STAGE="收到中断信号"
  exit 130
}

init_logging() {
  local temp_log="/tmp/examaware-control-install-$$.log"
  : > "$temp_log"
  chmod 600 "$temp_log"
  LOG_FILE="$temp_log"
  LOG_DESTINATION="$temp_log"
  exec > >(tee -a "$temp_log") 2>&1
  trap on_error ERR
  trap on_exit EXIT
  trap on_signal INT TERM
}

attach_install_log() {
  mkdir -p -- "$INSTALL_DIR" || die 3 "无法创建安装目录（请检查磁盘空间和权限）。"
  chmod 755 "$INSTALL_DIR" || die 3 "无法设置安装目录权限。"
  if [[ -n "$LOG_FILE" && -f "$LOG_FILE" ]]; then
    mv -f -- "$LOG_FILE" "$INSTALL_DIR/install.log" || die 3 "无法移动安装日志到安装目录。"
    LOG_FILE="$INSTALL_DIR/install.log"
    LOG_DESTINATION="$LOG_FILE"
    chmod 600 "$LOG_FILE" || die 3 "无法设置安装日志权限。"
  fi
}

die() {
  local exit_code="$1"
  shift
  status_error "$*"
  exit "$exit_code"
}

run_stage() {
  local name="$1"
  shift
  CURRENT_STAGE="$name"
  STAGE_NUMBER=$((STAGE_NUMBER + 1))
  log ""
  log "[${STAGE_NUMBER}] ${name}"
  "$@"
}

trim() {
  local value="$1"
  value="${value#"${value%%[![:space:]]*}"}"
  value="${value%"${value##*[![:space:]]}"}"
  printf '%s' "$value"
}

is_known_env_key() {
  case "$1" in
    INSTALLER_STATE_VERSION|INSTALL_MODE|DOMAIN|POSTGRES_USER|POSTGRES_PASSWORD|POSTGRES_DB|DATABASE_URL|BETTER_AUTH_URL|BETTER_AUTH_SECRET|DEVICE_CREDENTIAL_PEPPER|CONTROL_ADMIN_USERNAME|CONTROL_ADMIN_NAME|CONTROL_ADMIN_PASSWORD|SITE_ADDRESS|HTTP_PORT|CONTROL_VERSION|POSTGRES_IMAGE|CONTROL_REGISTRY|NODE_ENV) return 0 ;;
    *) return 1 ;;
  esac
}

clear_managed_env() {
  unset INSTALLER_STATE_VERSION INSTALL_MODE DOMAIN POSTGRES_USER POSTGRES_PASSWORD POSTGRES_DB
  unset DATABASE_URL BETTER_AUTH_URL BETTER_AUTH_SECRET DEVICE_CREDENTIAL_PEPPER
  unset CONTROL_ADMIN_USERNAME CONTROL_ADMIN_NAME CONTROL_ADMIN_PASSWORD SITE_ADDRESS HTTP_PORT
  unset CONTROL_VERSION POSTGRES_IMAGE CONTROL_REGISTRY NODE_ENV
}

parse_env_file() {
  local path="$1" assign="${2:-1}" line key value line_number=0
  [[ -f "$path" ]] || return 1
  while IFS= read -r line || [[ -n "$line" ]]; do
    line_number=$((line_number + 1))
    [[ -z "$line" || "$line" == \#* ]] && continue
    if [[ "$line" =~ ^([A-Z][A-Z0-9_]*)=\'([^\']*)\'$ ]]; then
      key="${BASH_REMATCH[1]}"
      value="${BASH_REMATCH[2]}"
    else
      status_error "${path}:${line_number} 格式损坏；仅接受已知键的 KEY='value' 格式。"
      return 1
    fi
    if ! is_known_env_key "$key"; then
      status_error "${path}:${line_number} 包含未知配置键 ${key}。"
      return 1
    fi
    if [[ "$assign" == "1" ]]; then
      printf -v "$key" '%s' "$value"
      export "$key"
    fi
  done < "$path"
}

load_env_file() {
  local path="$1"
  clear_managed_env
  parse_env_file "$path" 1 || die 2 "无法安全读取现有配置；不会按首次安装继续。"
}

require_existing_env_values() {
  local key
  local required=(POSTGRES_USER POSTGRES_PASSWORD POSTGRES_DB BETTER_AUTH_URL BETTER_AUTH_SECRET DEVICE_CREDENTIAL_PEPPER CONTROL_ADMIN_USERNAME CONTROL_ADMIN_NAME CONTROL_ADMIN_PASSWORD SITE_ADDRESS HTTP_PORT CONTROL_VERSION POSTGRES_IMAGE CONTROL_REGISTRY)
  for key in "${required[@]}"; do
    if [[ -z "${!key+x}" || -z "${!key}" ]]; then
      die 2 "现有 .env 缺少必需配置 ${key}；请从备份恢复后重试。"
    fi
  done
}

detect_install_mode() {
  local compose_evidence=0 native_evidence=0
  UPGRADE=0
  MODE=""
  LEGACY_STATE=0
  if [[ ! -e "$INSTALL_DIR/.env" ]]; then
    return 0
  fi
  [[ -f "$INSTALL_DIR/.env" ]] || die 2 "${INSTALL_DIR}/.env 不是普通文件，无法识别安装状态。"
  UPGRADE=1
  load_env_file "$INSTALL_DIR/.env"
  if [[ -n "${INSTALLER_STATE_VERSION:-}" ]]; then
    [[ -n "${INSTALL_MODE+x}" && -n "${DOMAIN+x}" ]] || die 2 "现有 state 缺少 INSTALL_MODE 或 DOMAIN；请从备份恢复。"
  fi
  require_existing_env_values
  [[ -f "$INSTALL_DIR/compose.yml" ]] && compose_evidence=1
  [[ -d "$INSTALL_DIR/server" && -d "$INSTALL_DIR/systemd" ]] && native_evidence=1

  if [[ -n "${INSTALL_MODE:-}" ]]; then
    case "$INSTALL_MODE" in
      docker|native) MODE="$INSTALL_MODE" ;;
      *) die 2 "现有 INSTALL_MODE 必须是 docker 或 native。" ;;
    esac
  else
    LEGACY_STATE=1
    if (( compose_evidence == 1 && native_evidence == 0 )); then
      MODE="docker"
    elif (( compose_evidence == 0 && native_evidence == 1 )); then
      MODE="native"
    else
      status_error "无法唯一识别旧安装模式。证据: compose.yml=${compose_evidence}, server+systemd=${native_evidence}。"
      die 2 "请修复冲突目录或从备份恢复 .env；安装器不会猜测模式。"
    fi
  fi

  if [[ "$MODE" == "docker" && "$compose_evidence" != "1" ]]; then
    die 2 "INSTALL_MODE='docker' 但缺少 ${INSTALL_DIR}/compose.yml。"
  fi
  if [[ "$MODE" == "native" && "$native_evidence" != "1" ]]; then
    die 2 "INSTALL_MODE='native' 但缺少 server/ 与 systemd/。"
  fi
  if [[ "$MODE" == "docker" && "$native_evidence" == "1" ]]; then
    die 2 "安装目录同时存在 Docker 与原生部署证据；请先消除冲突。"
  fi
  if [[ "$MODE" == "native" && "$compose_evidence" == "1" ]]; then
    die 2 "安装目录同时存在原生与 Docker 部署证据；请先消除冲突。"
  fi
  status_ok "识别为上一版 ${MODE} 安装，将无交互更新并保留配置。"
}

validate_install_dir() {
  [[ "$INSTALL_DIR" == /* ]] || die 2 "INSTALL_DIR 必须是绝对路径。"
  [[ "$INSTALL_DIR" != "/" ]] || die 2 "INSTALL_DIR 不能是根目录 /。"
  [[ "$INSTALL_DIR" != *$'\n'* && "$INSTALL_DIR" != *$'\r'* ]] || die 2 "INSTALL_DIR 包含非法控制字符。"
}

preflight() {
  local command_name architecture
  [[ "$(uname -s)" == "Linux" ]] || die 2 "仅支持 Linux。"
  architecture="$(uname -m)"
  case "$architecture" in
    x86_64|amd64|aarch64|arm64) ;;
    *) die 2 "不支持的 CPU 架构: ${architecture}。" ;;
  esac
  validate_install_dir
  for command_name in curl tar mktemp tee cp mv chmod mkdir rm; do
    command -v "$command_name" >/dev/null 2>&1 || die 2 "缺少前置命令: ${command_name}。"
  done
  if command -v sha256sum >/dev/null 2>&1; then
    CHECKSUM_TOOL="sha256sum"
  elif command -v shasum >/dev/null 2>&1; then
    CHECKSUM_TOOL="shasum"
  else
    die 2 "缺少 SHA-256 校验工具；需要 sha256sum 或 shasum。"
  fi
}

copy_self_for_sudo() {
  local source="$1" temp
  temp="$(mktemp /tmp/examaware-control-install.XXXXXX)"
  chmod 600 "$temp"
  cat "$source" > "$temp"
  printf '%s' "$temp"
}

as_root() {
  (( EUID == 0 )) && return 0
  command -v sudo >/dev/null 2>&1 || die 2 "需要 root 权限或可用的 sudo。"
  local script="$0" temp_script="" exit_code
  if [[ "$script" == /dev/fd/* || "$script" == /proc/self/fd/* ]]; then
    temp_script="$(copy_self_for_sudo "$script")"
    script="$temp_script"
  fi
  set +e
  sudo env \
    INSTALL_DIR="$INSTALL_DIR" \
    NATIVE="${NATIVE:-}" DOMAIN="${DOMAIN:-}" HTTP_PORT="${HTTP_PORT:-}" \
    BETTER_AUTH_URL="${BETTER_AUTH_URL:-}" EXAMAWARE_NONINTERACTIVE="${EXAMAWARE_NONINTERACTIVE:-}" \
    GITHUB_MIRROR="${GITHUB_MIRROR:-}" GITHUB_MIRRORS="${GITHUB_MIRRORS:-}" GITHUB_ACCELERATE="${GITHUB_ACCELERATE:-}" \
    DOCKER_ACCELERATE="${DOCKER_ACCELERATE:-}" POSTGRES_IMAGE="${POSTGRES_IMAGE:-}" CONTROL_REGISTRY="${CONTROL_REGISTRY:-}" \
    POSTGRES_USER="${POSTGRES_USER:-}" POSTGRES_PASSWORD="${POSTGRES_PASSWORD:-}" POSTGRES_DB="${POSTGRES_DB:-}" \
    DATABASE_URL="${DATABASE_URL:-}" BETTER_AUTH_SECRET="${BETTER_AUTH_SECRET:-}" DEVICE_CREDENTIAL_PEPPER="${DEVICE_CREDENTIAL_PEPPER:-}" \
    CONTROL_ADMIN_USERNAME="${CONTROL_ADMIN_USERNAME:-}" CONTROL_ADMIN_NAME="${CONTROL_ADMIN_NAME:-}" CONTROL_ADMIN_PASSWORD="${CONTROL_ADMIN_PASSWORD:-}" \
    INPUT_POSTGRES_IMAGE_SET="$INPUT_POSTGRES_IMAGE_SET" INPUT_CONTROL_REGISTRY_SET="$INPUT_CONTROL_REGISTRY_SET" \
    bash "$script" "$@"
  exit_code=$?
  set -e
  [[ -n "$temp_script" ]] && rm -f -- "$temp_script"
  exit "$exit_code"
}

check_docker_prerequisites() {
  local daemon_error help_output
  if ! command -v docker >/dev/null 2>&1; then
    log "未检测到 Docker。请手动执行："
    log "$DOCKER_INSTALL_COMMAND"
    log "安装完成后重新运行本脚本。"
    die 2 "首次安装不会自动执行第三方 Docker 安装脚本，也不会回退到原生安装。"
  fi
  if ! docker compose version >/dev/null 2>&1; then
    die 2 "需要 Docker Compose v2 插件（命令 docker compose），docker-compose v1 不受支持。"
  fi
  if ! daemon_error="$(docker info 2>&1)"; then
    status_error "docker info 失败: ${daemon_error}"
    if command -v systemctl >/dev/null 2>&1; then
      log "请检查: systemctl status docker；必要时运行 systemctl start docker。"
    else
      log "请启动当前平台的 Docker daemon，并检查用户对 Docker socket 的访问权限。"
    fi
    die 2 "Docker daemon 当前不可用。"
  fi
  help_output="$(docker compose up --help 2>&1 || true)"
  [[ "$help_output" == *"--wait"* ]] && DOCKER_SUPPORTS_WAIT=1 || DOCKER_SUPPORTS_WAIT=0
}

check_native_update_prerequisites() {
  local command_name
  for command_name in pg_dump sed systemctl id useradd chown; do
    command -v "$command_name" >/dev/null 2>&1 || die 2 "旧原生安装更新缺少前置命令: ${command_name}。"
  done
}

validate_safe_value() {
  local label="$1" value="$2"
  if [[ "$value" == *"'"* || "$value" == *$'\n'* || "$value" == *$'\r'* || "$value" =~ [[:cntrl:]] ]]; then
    status_error "${label} 不能包含单引号、换行或控制字符。"
    return 1
  fi
}

validate_admin_input() {
  CONTROL_ADMIN_USERNAME="$(trim "${CONTROL_ADMIN_USERNAME:-}")"
  CONTROL_ADMIN_USERNAME="$(printf '%s' "$CONTROL_ADMIN_USERNAME" | tr '[:upper:]' '[:lower:]')"
  CONTROL_ADMIN_NAME="$(trim "${CONTROL_ADMIN_NAME:-}")"
  validate_safe_value "管理员用户名" "$CONTROL_ADMIN_USERNAME" || return 1
  validate_safe_value "管理员显示名" "$CONTROL_ADMIN_NAME" || return 1
  validate_safe_value "管理员密码" "${CONTROL_ADMIN_PASSWORD:-}" || return 1
  [[ "$CONTROL_ADMIN_USERNAME" =~ ^[a-zA-Z0-9_.]{3,32}$ ]] || {
    status_error "管理员用户名必须为 3–32 位字母、数字、下划线或点。"
    return 1
  }
  [[ -n "$CONTROL_ADMIN_NAME" ]] || {
    status_error "管理员显示名不能为空。"
    return 1
  }
  (( ${#CONTROL_ADMIN_PASSWORD} >= 12 && ${#CONTROL_ADMIN_PASSWORD} <= 128 )) || {
    status_error "管理员密码必须为 12–128 个字符。"
    return 1
  }
}

validate_port() {
  local port="$1"
  [[ "$port" =~ ^[0-9]+$ && ${#port} -le 5 ]] || return 1
  (( 10#$port >= 1 && 10#$port <= 65535 )) || return 1
}

port_listener_details() {
  local port="$1" output line local_address port_hex local_hex remote_hex state
  if command -v ss >/dev/null 2>&1; then
    output="$(ss -H -ltnp 2>/dev/null || true)"
    while IFS= read -r line; do
      [[ -z "$line" ]] && continue
      local_address="$(printf '%s\n' "$line" | tr -s ' ' | cut -d' ' -f4)"
      if [[ "${local_address##*:}" == "$port" ]]; then
        printf '%s' "$line"
        return 0
      fi
    done <<< "$output"
    return 1
  fi
  printf -v port_hex '%04X' "$port"
  for path in /proc/net/tcp /proc/net/tcp6; do
    [[ -r "$path" ]] || continue
    while read -r _ local_hex remote_hex state _; do
      [[ "$local_hex" == "local_address" ]] && continue
      if [[ "$state" == "0A" && "${local_hex##*:}" == "$port_hex" ]]; then
        printf '%s' "${path} 显示端口 ${port} 正在监听（无法识别进程所有者）"
        return 0
      fi
    done < "$path"
  done
  return 1
}

require_port_free() {
  local port="$1" details
  if details="$(port_listener_details "$port")"; then
    status_error "端口 ${port} 已被占用: ${details}"
    return 1
  fi
}

validate_domain() {
  local domain="$1" label
  [[ ${#domain} -le 253 && "$domain" != *://* && "$domain" != */* && "$domain" != *:* && "$domain" != .* && "$domain" != *. ]] || return 1
  [[ "$domain" =~ ^[A-Za-z0-9.-]+$ ]] || return 1
  local IFS='.'
  read -r -a labels <<< "$domain"
  for label in "${labels[@]}"; do
    [[ -n "$label" && ${#label} -le 63 && "$label" != -* && "$label" != *- ]] || return 1
  done
}

validate_origin() {
  local origin="$1"
  validate_safe_value "BETTER_AUTH_URL" "$origin" || return 1
  [[ "$origin" =~ ^https?://(\[[0-9A-Fa-f:]+\]|[A-Za-z0-9.-]+)(:[0-9]{1,5})?$ ]] || return 1
  if [[ "$origin" =~ :([0-9]+)$ ]]; then
    validate_port "${BASH_REMATCH[1]}" || return 1
  fi
}

is_non_loopback_address() {
  local value="$1"
  [[ -n "$value" && "$value" != 127.* && "$value" != "::1" && "$value" != "0.0.0.0" ]]
}

discover_access_host() {
  local value token next_is_src=0
  if command -v hostname >/dev/null 2>&1; then
    value="$(hostname -I 2>/dev/null || true)"
    for token in $value; do
      if is_non_loopback_address "$token"; then
        printf '%s' "$token"
        return 0
      fi
    done
  fi
  if command -v ip >/dev/null 2>&1; then
    value="$(ip route get 1.1.1.1 2>/dev/null || true)"
    for token in $value; do
      if (( next_is_src == 1 )); then
        is_non_loopback_address "$token" && printf '%s' "$token" && return 0
        next_is_src=0
      fi
      [[ "$token" == "src" ]] && next_is_src=1
    done
  fi
  return 1
}

validate_access_host() {
  local host="$1" unwrapped
  [[ -n "$host" && "$host" != */* && "$host" != *\?* && "$host" != *\#* ]] || return 1
  unwrapped="${host#[}"
  unwrapped="${unwrapped%]}"
  if [[ "$unwrapped" == *:* ]]; then
    [[ "$unwrapped" =~ ^[0-9A-Fa-f:]+$ ]]
  else
    validate_domain "$unwrapped"
  fi
}

format_origin_host() {
  local host="$1"
  host="${host#[}"
  host="${host%]}"
  [[ "$host" == *:* ]] && printf '[%s]' "$host" || printf '%s' "$host"
}

random_hex() {
  local bytes="$1"
  if command -v openssl >/dev/null 2>&1; then
    openssl rand -hex "$bytes"
  else
    od -An -N "$bytes" -tx1 /dev/urandom | tr -d ' \n'
  fi
}

random_alnum() {
  local length="$1" value=""
  while (( ${#value} < length )); do
    if command -v openssl >/dev/null 2>&1; then
      value+="$(openssl rand -base64 "$((length * 2))" | tr -dc 'a-zA-Z0-9')"
    else
      value+="$(random_hex "$length")"
    fi
  done
  printf '%s' "${value:0:length}"
}

is_interactive_install() {
  [[ "${EXAMAWARE_NONINTERACTIVE:-0}" != "1" ]] || return 1
  { : </dev/tty && : >/dev/tty; } 2>/dev/null
}

prompt_line() {
  local prompt="$1" default_value="$2" result
  IFS= read -r -p "${prompt} [${default_value}]: " result </dev/tty || return 1
  result="$(trim "$result")"
  printf '%s' "${result:-$default_value}"
}

prompt_secret() {
  local prompt="$1" value
  IFS= read -r -s -p "$prompt" value </dev/tty || return 1
  printf '\n' >/dev/tty
  printf '%s' "$value"
}

prompt_install_confirmation() {
  local answer
  IFS= read -r -p "确认安装？仅 y/yes 继续: " answer </dev/tty || return 1
  printf '%s' "$answer"
}

run_wizard() {
  local password_confirmation answer access_host
  log "ExamAware 集控中心 Docker 安装向导"
  while true; do
    CONTROL_ADMIN_USERNAME="$(prompt_line "管理员用户名" "admin")" || cancel_install
    CONTROL_ADMIN_NAME="$(prompt_line "管理员显示名" "系统管理员")" || cancel_install
    CONTROL_ADMIN_PASSWORD="$(prompt_secret "管理员密码（12–128 字符）: ")" || cancel_install
    password_confirmation="$(prompt_secret "确认管理员密码: ")" || cancel_install
    if [[ "$CONTROL_ADMIN_PASSWORD" != "$password_confirmation" ]]; then
      status_error "两次输入的管理员密码不一致，请重新输入。"
      continue
    fi
    validate_admin_input && break
  done

  if [[ -n "${DOMAIN:-}" ]]; then
    validate_domain "$DOMAIN" || die 2 "DOMAIN 必须是不含 scheme、路径或端口的 DNS 主机名。"
    require_port_free 80 || die 2 "域名模式需要空闲的 80/TCP。"
    require_port_free 443 || die 2 "域名模式需要空闲的 443/TCP。"
    HTTP_PORT=80
  else
    while true; do
      HTTP_PORT="$(prompt_line "无域名 HTTP 端口" "8219")" || cancel_install
      if validate_port "$HTTP_PORT"; then
        break
      fi
      status_error "端口必须是 1..65535 的 ASCII 十进制整数。"
    done
    require_port_free "$HTTP_PORT" || die 2 "请释放端口或重新运行安装向导选择其他端口。"
  fi

  if [[ -n "${BETTER_AUTH_URL:-}" ]]; then
    validate_origin "$BETTER_AUTH_URL" || die 2 "BETTER_AUTH_URL 必须是无 path/query/fragment 的 HTTP(S) origin。"
  elif [[ -n "${DOMAIN:-}" ]]; then
    BETTER_AUTH_URL="https://${DOMAIN}"
  elif access_host="$(discover_access_host)"; then
    BETTER_AUTH_URL="http://$(format_origin_host "$access_host"):${HTTP_PORT}"
  else
    access_host="$(prompt_line "无法自动识别访问地址，请输入服务器 IP 或主机名" "")" || cancel_install
    validate_access_host "$access_host" || die 2 "访问地址必须是 IP 或不含端口/路径的主机名。"
    BETTER_AUTH_URL="http://$(format_origin_host "$access_host"):${HTTP_PORT}"
  fi

  log ""
  log "安装摘要（密码和密钥不会显示）"
  log "  模式: Docker"
  log "  管理员: ${CONTROL_ADMIN_USERNAME} (${CONTROL_ADMIN_NAME})"
  log "  访问地址: ${BETTER_AUTH_URL}"
  [[ -n "${DOMAIN:-}" ]] && log "  HTTPS 端口: 80/443" || log "  HTTP 端口: ${HTTP_PORT}"
  answer="$(prompt_install_confirmation)" || cancel_install
  answer="$(printf '%s' "$answer" | tr '[:upper:]' '[:lower:]')"
  [[ "$answer" == "y" || "$answer" == "yes" ]] || cancel_install
}

cancel_install() {
  CANCELLED=1
  log "安装已取消；未创建安装目录。"
  exit 0
}

reject_new_native_install() {
  if [[ "${NATIVE:-0}" == "1" ]]; then
    # TODO: 恢复并重新验证原生 systemd 首次安装流程
    die 2 "新的原生 systemd 安装暂时关闭；请安装 Docker 后重试。旧原生安装仍可更新。"
  fi
}

prepare_new_install_settings() {
  MODE="docker"
  INSTALL_MODE="docker"
  INSTALLER_STATE_VERSION="$INSTALLER_STATE_VERSION_CURRENT"
  DOMAIN="${DOMAIN:-}"
  POSTGRES_IMAGE_EXPLICIT="$INPUT_POSTGRES_IMAGE_SET"
  CONTROL_REGISTRY_EXPLICIT="$INPUT_CONTROL_REGISTRY_SET"

  if is_interactive_install; then
    run_wizard
  else
    CONTROL_ADMIN_USERNAME="${CONTROL_ADMIN_USERNAME:-admin}"
    CONTROL_ADMIN_NAME="${CONTROL_ADMIN_NAME:-系统管理员}"
    if [[ -z "${CONTROL_ADMIN_PASSWORD:-}" ]]; then
      CONTROL_ADMIN_PASSWORD="$(random_alnum 18)"
      GENERATED_ADMIN_PASSWORD=1
    fi
    HTTP_PORT="${HTTP_PORT:-8219}"
    validate_admin_input || die 2 "非交互管理员配置无效。"
    validate_port "$HTTP_PORT" || die 2 "HTTP_PORT 必须是 1..65535 的 ASCII 十进制整数。"
    if [[ -n "$DOMAIN" ]]; then
      validate_domain "$DOMAIN" || die 2 "DOMAIN 必须是不含 scheme、路径或端口的 DNS 主机名。"
      HTTP_PORT=80
      require_port_free 80 || die 2 "域名模式需要空闲的 80/TCP。"
      require_port_free 443 || die 2 "域名模式需要空闲的 443/TCP。"
    else
      require_port_free "$HTTP_PORT" || die 2 "HTTP_PORT 已被占用。"
    fi
    if [[ -n "${BETTER_AUTH_URL:-}" ]]; then
      validate_origin "$BETTER_AUTH_URL" || die 2 "BETTER_AUTH_URL 必须是无 path/query/fragment 的 HTTP(S) origin。"
    elif [[ -n "$DOMAIN" ]]; then
      BETTER_AUTH_URL="https://${DOMAIN}"
    else
      local access_host
      access_host="$(discover_access_host)" || die 2 "非交互模式无法识别外部地址；请显式设置 BETTER_AUTH_URL。"
      BETTER_AUTH_URL="http://$(format_origin_host "$access_host"):${HTTP_PORT}"
    fi
  fi

  POSTGRES_USER="${POSTGRES_USER:-examaware}"
  POSTGRES_PASSWORD="${POSTGRES_PASSWORD:-$(random_hex 24)}"
  POSTGRES_DB="${POSTGRES_DB:-examaware_control}"
  DATABASE_URL="${DATABASE_URL:-}"
  BETTER_AUTH_SECRET="${BETTER_AUTH_SECRET:-$(random_alnum 48)}"
  DEVICE_CREDENTIAL_PEPPER="${DEVICE_CREDENTIAL_PEPPER:-$(random_hex 32)}"
  NODE_ENV="production"
  SITE_ADDRESS="${DOMAIN:+$DOMAIN}"
  SITE_ADDRESS="${SITE_ADDRESS:-:80}"
  if [[ "${DOCKER_ACCELERATE:-1}" == "0" ]]; then
    POSTGRES_IMAGE="${POSTGRES_IMAGE:-$OFFICIAL_POSTGRES_IMAGE}"
    CONTROL_REGISTRY="${CONTROL_REGISTRY:-$OFFICIAL_CONTROL_REGISTRY}"
  else
    POSTGRES_IMAGE="${POSTGRES_IMAGE:-$DOMESTIC_POSTGRES_IMAGE}"
    CONTROL_REGISTRY="${CONTROL_REGISTRY:-$DOMESTIC_CONTROL_REGISTRY}"
  fi
  validate_common_settings
}

prepare_update_settings() {
  INSTALL_MODE="$MODE"
  DOMAIN="${DOMAIN:-}"
  if [[ "$LEGACY_STATE" == "1" || -z "${INSTALLER_STATE_VERSION:-}" ]]; then
    LEGACY_STATE=1
    INSTALLER_STATE_VERSION="$INSTALLER_STATE_VERSION_CURRENT"
    if [[ "$MODE" == "docker" ]]; then
      [[ "$CONTROL_REGISTRY" == "$OFFICIAL_CONTROL_REGISTRY" ]] && CONTROL_REGISTRY="$DOMESTIC_CONTROL_REGISTRY"
      [[ "$POSTGRES_IMAGE" == "$OFFICIAL_POSTGRES_IMAGE" ]] && POSTGRES_IMAGE="$DOMESTIC_POSTGRES_IMAGE"
      [[ "$SITE_ADDRESS" == ":${HTTP_PORT}" ]] && SITE_ADDRESS=":80"
    fi
  elif [[ "$INSTALLER_STATE_VERSION" != "$INSTALLER_STATE_VERSION_CURRENT" ]]; then
    die 2 "不支持的 INSTALLER_STATE_VERSION=${INSTALLER_STATE_VERSION}。"
  fi
  POSTGRES_IMAGE_EXPLICIT=1
  CONTROL_REGISTRY_EXPLICIT=1
  [[ "$POSTGRES_IMAGE" == "$DOMESTIC_POSTGRES_IMAGE" ]] && POSTGRES_IMAGE_EXPLICIT=0
  [[ "$CONTROL_REGISTRY" == "$DOMESTIC_CONTROL_REGISTRY" ]] && CONTROL_REGISTRY_EXPLICIT=0
  NODE_ENV="${NODE_ENV:-production}"
  if [[ -z "$DOMAIN" && "$SITE_ADDRESS" != :* ]]; then
    DOMAIN="$SITE_ADDRESS"
  fi
  if [[ "$MODE" == "docker" ]]; then
    SITE_ADDRESS="${DOMAIN:+$DOMAIN}"
    SITE_ADDRESS="${SITE_ADDRESS:-:80}"
  else
    SITE_ADDRESS="${DOMAIN:+$DOMAIN}"
    SITE_ADDRESS="${SITE_ADDRESS:-:${HTTP_PORT}}"
  fi
  validate_common_settings
}

validate_database_identifiers() {
  [[ "$POSTGRES_USER" =~ ^[A-Za-z_][A-Za-z0-9_]*$ ]] || {
    status_error "POSTGRES_USER 仅支持 PostgreSQL 标准标识符字符。"
    return 1
  }
  [[ "$POSTGRES_DB" =~ ^[A-Za-z_][A-Za-z0-9_]*$ ]] || {
    status_error "POSTGRES_DB 仅支持 PostgreSQL 标准标识符字符。"
    return 1
  }
}

validate_common_settings() {
  local key
  validate_admin_input || die 2 "管理员配置不符合服务端 bootstrap 契约。"
  validate_port "$HTTP_PORT" || die 2 "HTTP_PORT 必须是 1..65535 的 ASCII 十进制整数。"
  validate_database_identifiers || die 2 "数据库标识符无效。"
  [[ -z "$DOMAIN" ]] || validate_domain "$DOMAIN" || die 2 "DOMAIN 必须是不含 scheme、路径或端口的 DNS 主机名。"
  validate_origin "$BETTER_AUTH_URL" || die 2 "BETTER_AUTH_URL 必须是无 path/query/fragment 的 HTTP(S) origin。"
  for key in POSTGRES_USER POSTGRES_PASSWORD POSTGRES_DB DATABASE_URL BETTER_AUTH_URL BETTER_AUTH_SECRET DEVICE_CREDENTIAL_PEPPER CONTROL_ADMIN_USERNAME CONTROL_ADMIN_NAME CONTROL_ADMIN_PASSWORD SITE_ADDRESS HTTP_PORT POSTGRES_IMAGE CONTROL_REGISTRY; do
    validate_safe_value "$key" "${!key:-}" || die 2 "配置项 ${key} 无法安全写入 .env。"
  done
}

write_env_value() {
  local key="$1" value="$2"
  validate_safe_value "$key" "$value" >/dev/null || return 1
  printf "%s='%s'\n" "$key" "$value"
}

generate_env() {
  local destination="$1" temporary
  temporary="${destination}.tmp"
  CONTROL_VERSION="$VERSION"
  if ! {
    write_env_value INSTALLER_STATE_VERSION "$INSTALLER_STATE_VERSION_CURRENT"
    write_env_value INSTALL_MODE "$MODE"
    write_env_value DOMAIN "${DOMAIN:-}"
    write_env_value POSTGRES_USER "$POSTGRES_USER"
    write_env_value POSTGRES_PASSWORD "$POSTGRES_PASSWORD"
    write_env_value POSTGRES_DB "$POSTGRES_DB"
    write_env_value DATABASE_URL "${DATABASE_URL:-}"
    write_env_value BETTER_AUTH_URL "$BETTER_AUTH_URL"
    write_env_value BETTER_AUTH_SECRET "$BETTER_AUTH_SECRET"
    write_env_value DEVICE_CREDENTIAL_PEPPER "$DEVICE_CREDENTIAL_PEPPER"
    write_env_value CONTROL_ADMIN_USERNAME "$CONTROL_ADMIN_USERNAME"
    write_env_value CONTROL_ADMIN_NAME "$CONTROL_ADMIN_NAME"
    write_env_value CONTROL_ADMIN_PASSWORD "$CONTROL_ADMIN_PASSWORD"
    write_env_value SITE_ADDRESS "$SITE_ADDRESS"
    write_env_value HTTP_PORT "$HTTP_PORT"
    write_env_value CONTROL_VERSION "$CONTROL_VERSION"
    write_env_value POSTGRES_IMAGE "$POSTGRES_IMAGE"
    write_env_value CONTROL_REGISTRY "$CONTROL_REGISTRY"
    write_env_value NODE_ENV "production"
  } > "$temporary"; then
    rm -f "$temporary"
    die 3 "写入候选 .env 失败（请检查磁盘空间和权限）。"
  fi
  chmod 600 "$temporary" || die 3 "设置候选 .env 权限失败。"
  parse_env_file "$temporary" 0 || {
    rm -f "$temporary"
    die 2 "候选 .env 完整重读校验失败。"
  }
  mv -f "$temporary" "$destination" || die 3 "原子替换候选 .env 失败。"
}

classify_curl_error() {
  local error="$1"
  case "$error" in
    *"Could not resolve"*) printf '%s' "DNS 解析失败" ;;
    *"SSL"*|*"TLS"*|*"certificate"*) printf '%s' "TLS/证书失败" ;;
    *"timed out"*|*"Timeout"*) printf '%s' "连接或传输超时" ;;
    *"requested URL returned error"*|*"HTTP"*) printf '%s' "HTTP 错误" ;;
    *) printf '%s' "curl 传输失败" ;;
  esac
}

download_github_url() {
  local original_url="$1" destination="$2" validation="${3:-none}" mirror url error_file error_text category
  local -a mirrors=()
  [[ -n "${GITHUB_MIRROR:-}" ]] && mirrors+=("$GITHUB_MIRROR")
  if [[ -n "${GITHUB_MIRRORS:-}" ]]; then
    for mirror in $GITHUB_MIRRORS; do mirrors+=("$mirror"); done
  elif [[ "${GITHUB_ACCELERATE:-1}" != "0" ]]; then
    for mirror in $DEFAULT_GITHUB_MIRRORS; do mirrors+=("$mirror"); done
  fi
  mirrors+=("")
  error_file="$(mktemp)"
  register_temp "$error_file"

  for mirror in "${mirrors[@]}"; do
    [[ -n "$mirror" ]] && url="${mirror%/}/${original_url}" || url="$original_url"
    log "尝试下载: ${url}"
    rm -f "${destination}.part"
    : > "$error_file"
    if curl -fL --retry 2 --retry-delay 2 --connect-timeout 10 --max-time 600 --speed-time 30 --speed-limit 1024 \
      "$url" -o "${destination}.part" 2>"$error_file"; then
      if [[ ! -s "${destination}.part" ]]; then
        status_warn "${url}: 下载结果为空。"
      elif [[ "$validation" == "json-tag" ]] && ! validate_release_json "${destination}.part"; then
        status_warn "${url}: 响应不包含有效发布 tag。"
      else
        mv -f "${destination}.part" "$destination"
        return 0
      fi
    else
      error_text="$(<"$error_file")"
      category="$(classify_curl_error "$error_text")"
      status_warn "${url}: ${category}（${error_text:-无详细信息}）。"
    fi
    rm -f "${destination}.part"
  done
  status_error "所有发布地址均不可用。可设置 GITHUB_MIRROR，或用 GITHUB_ACCELERATE=0 排除内置镜像后重试。"
  return 1
}

validate_release_json() {
  local contents
  contents="$(<"$1")"
  [[ "$contents" =~ \"tag_name\"[[:space:]]*:[[:space:]]*\"(control-v[0-9]+\.[0-9]+\.[0-9]+)\" ]]
}

resolve_version() {
  local requested="$1" release_json contents
  if [[ "$requested" == "latest" ]]; then
    release_json="$(mktemp)"
    register_temp "$release_json"
    download_github_url "https://api.github.com/repos/${REPOSITORY}/releases/latest" "$release_json" json-tag || die 3 "无法解析最新发布版本。"
    contents="$(<"$release_json")"
    [[ "$contents" =~ \"tag_name\"[[:space:]]*:[[:space:]]*\"(control-v[0-9]+\.[0-9]+\.[0-9]+)\" ]] || die 3 "发布 API 返回了无效 tag。"
    requested="${BASH_REMATCH[1]}"
  fi
  [[ "$requested" =~ ^control-v[0-9]+\.[0-9]+\.[0-9]+$ ]] || die 2 "版本必须匹配 control-vX.Y.Z。"
  VERSION="$requested"
  ASSET_ROOT="${RELEASE_ROOT}/download/${VERSION}"
}

checksum_file() {
  if [[ "$CHECKSUM_TOOL" == "sha256sum" ]]; then
    sha256sum "$1" | cut -d' ' -f1
  else
    shasum -a 256 "$1" | cut -d' ' -f1
  fi
}

verify_archive_checksum() {
  local archive="$1" sums="$2" asset="$3" line expected="" actual
  while IFS= read -r line || [[ -n "$line" ]]; do
    if [[ "$line" =~ ^([0-9A-Fa-f]{64})[[:space:]]+\*?(.+)$ && "${BASH_REMATCH[2]}" == "$asset" ]]; then
      expected="$(printf '%s' "${BASH_REMATCH[1]}" | tr '[:upper:]' '[:lower:]')"
      break
    fi
  done < "$sums"
  [[ -n "$expected" ]] || die 3 "SHA256SUMS 不包含 ${asset}。"
  actual="$(checksum_file "$archive")"
  [[ "$actual" == "$expected" ]] || die 3 "${asset} SHA-256 摘要不匹配；文件可能传输损坏。"
}

validate_archive_members() {
  local archive="$1" package_mode="$2" listing member normalized required found
  listing="$(mktemp)"
  register_temp "$listing"
  tar tzf "$archive" > "$listing" 2>/dev/null || die 3 "${archive##*/} 不是有效的 gzip/tar 归档。"
  [[ -s "$listing" ]] || die 3 "发布归档为空。"
  while IFS= read -r member; do
    [[ "$member" != /* ]] || die 3 "归档包含绝对路径: ${member}。"
    normalized="${member#./}"
    [[ ! "/${normalized}/" =~ /\.\.(/|$) ]] || die 3 "归档包含路径穿越成员: ${member}。"
  done < "$listing"
  if [[ "$package_mode" == "docker" ]]; then
    for required in install.sh backup.sh compose.yml; do
      found=0
      while IFS= read -r member; do [[ "${member#./}" == "$required" ]] && found=1; done < "$listing"
      (( found == 1 )) || die 3 "Docker 发布包缺少 ${required}。"
    done
  else
    for required in install.sh backup.sh server/ console/ scripts/ systemd/ deploy/; do
      found=0
      while IFS= read -r member; do
        normalized="${member#./}"
        [[ "$normalized" == "$required" || "$normalized" == "$required"* ]] && found=1
      done < "$listing"
      (( found == 1 )) || die 3 "完整发布包缺少 ${required} 结构。"
    done
  fi
}

download_package() {
  local package_mode="$1" asset archive sums extract_dir
  [[ "$package_mode" == "docker" ]] && asset="examaware-control-docker-${VERSION}.tar.gz" || asset="examaware-control-${VERSION}.tar.gz"
  archive="$(mktemp)"
  sums="$(mktemp)"
  register_temp "$archive"
  register_temp "$sums"
  download_github_url "${ASSET_ROOT}/${asset}" "$archive" || die 3 "下载 ${asset} 失败。"
  download_github_url "${ASSET_ROOT}/SHA256SUMS" "$sums" || die 3 "下载 SHA256SUMS 失败。"
  verify_archive_checksum "$archive" "$sums" "$asset"
  validate_archive_members "$archive" "$package_mode"
  extract_dir="$(mktemp -d)"
  register_temp "$extract_dir"
  tar xzf "$archive" -C "$extract_dir" || die 3 "发布包解压失败（可能磁盘空间不足）。"
  CANDIDATE_DIR="$extract_dir"
}

generate_runtime_compose() {
  local source="$1" destination="$2" line
  : > "${destination}.tmp"
  while IFS= read -r line || [[ -n "$line" ]]; do
    if [[ -z "${DOMAIN:-}" && "$line" == "      - '443:443'" ]]; then
      continue
    fi
    printf '%s\n' "$line" >> "${destination}.tmp"
  done < "$source"
  mv -f "${destination}.tmp" "$destination"
}

docker_compose() {
  docker compose --env-file "$COMPOSE_ENV_FILE" -f "$RUNTIME_COMPOSE" "$@"
}

validate_candidate_compose() {
  COMPOSE_ENV_FILE="$CANDIDATE_DIR/.env"
  RUNTIME_COMPOSE="$CANDIDATE_DIR/compose.runtime.yml"
  docker_compose config -q || die 2 "Docker Compose 候选配置无效。"
  docker_compose config --images || die 2 "无法解析 Docker Compose 镜像列表。"
}

refresh_candidate_env() {
  generate_env "$CANDIDATE_DIR/.env"
  validate_candidate_compose
}

pull_candidate_images() {
  if docker_compose pull; then
    return 0
  fi
  if (( POSTGRES_IMAGE_EXPLICIT == 0 || CONTROL_REGISTRY_EXPLICIT == 0 )); then
    status_warn "自动选择的国内镜像拉取失败，仅回退官方源一次。"
    (( POSTGRES_IMAGE_EXPLICIT == 0 )) && POSTGRES_IMAGE="$OFFICIAL_POSTGRES_IMAGE"
    (( CONTROL_REGISTRY_EXPLICIT == 0 )) && CONTROL_REGISTRY="$OFFICIAL_CONTROL_REGISTRY"
    refresh_candidate_env
    docker_compose pull || die 4 "国内镜像与官方镜像均拉取失败；可显式设置 POSTGRES_IMAGE/CONTROL_REGISTRY。"
    return 0
  fi
  die 4 "显式配置的镜像拉取失败；不会擅自切换私有镜像源。"
}

live_compose_file() {
  if [[ -f "$INSTALL_DIR/compose.runtime.yml" ]]; then
    printf '%s' "$INSTALL_DIR/compose.runtime.yml"
  else
    printf '%s' "$INSTALL_DIR/compose.yml"
  fi
}

perform_backup() {
  local timestamp part container_id compose_file
  timestamp="$(date +%Y%m%d-%H%M%S)"
  mkdir -p "$INSTALL_DIR/backups" || return 1
  chmod 700 "$INSTALL_DIR/backups" || return 1
  BACKUP_FILE="$INSTALL_DIR/backups/control-${timestamp}.sql"
  part="${BACKUP_FILE}.part"
  rm -f "$part"
  if [[ "$MODE" == "docker" ]]; then
    compose_file="$(live_compose_file)"
    container_id="$(docker compose --env-file "$INSTALL_DIR/.env" -f "$compose_file" ps -q control-postgres 2>/dev/null || true)"
    [[ -n "$container_id" ]] || {
      rm -f "$part"
      return 1
    }
    if ! docker compose --env-file "$INSTALL_DIR/.env" -f "$compose_file" exec -T control-postgres \
      pg_dump -U "$POSTGRES_USER" -d "$POSTGRES_DB" > "$part"; then
      rm -f "$part"
      return 1
    fi
  else
    if [[ -n "${DATABASE_URL:-}" ]]; then
      if ! pg_dump "$DATABASE_URL" > "$part"; then rm -f "$part"; return 1; fi
    else
      if ! PGPASSWORD="$POSTGRES_PASSWORD" pg_dump -h 127.0.0.1 -U "$POSTGRES_USER" -d "$POSTGRES_DB" > "$part"; then
        rm -f "$part"
        return 1
      fi
    fi
  fi
  [[ -s "$part" ]] || {
    rm -f "$part"
    return 1
  }
  chmod 600 "$part" || { rm -f "$part"; return 1; }
  mv -f "$part" "$BACKUP_FILE" || { rm -f "$part"; return 1; }
  status_ok "升级前数据库备份: ${BACKUP_FILE}"
}

create_rollback_snapshot() {
  local timestamp item
  timestamp="$(date +%Y%m%d-%H%M%S)-$$"
  ROLLBACK_DIR="$INSTALL_DIR/.rollback-${timestamp}"
  mkdir -p "$ROLLBACK_DIR" || die 3 "无法在安装目录创建回滚快照。"
  if [[ "$MODE" == "docker" ]]; then
    for item in .env install.sh backup.sh compose.yml compose.runtime.yml .installed; do
      if [[ -e "$INSTALL_DIR/$item" ]]; then
        cp -a "$INSTALL_DIR/$item" "$ROLLBACK_DIR/" || die 3 "复制 ${item} 到回滚快照失败。"
      fi
    done
  else
    for item in .env install.sh backup.sh compose.yml compose.runtime.yml .installed server console scripts systemd deploy; do
      if [[ -e "$INSTALL_DIR/$item" ]]; then
        cp -a "$INSTALL_DIR/$item" "$ROLLBACK_DIR/" || die 3 "复制 ${item} 到回滚快照失败。"
      fi
    done
    [[ ! -f /etc/caddy/Caddyfile ]] || cp -a /etc/caddy/Caddyfile "$ROLLBACK_DIR/Caddyfile.system" || die 3 "快照 Caddyfile 失败。"
    [[ ! -f /etc/systemd/system/examaware-control-server.service ]] || cp -a /etc/systemd/system/examaware-control-server.service "$ROLLBACK_DIR/examaware-control-server.service.system" || die 3 "快照 systemd unit 失败。"
  fi
}

copy_atomic() {
  local source="$1" destination="$2"
  cp -a "$source" "${destination}.new" || return 1
  mv -f "${destination}.new" "$destination" || return 1
}

activate_docker_candidate() {
  local item
  ACTIVATION_STARTED=1
  for item in install.sh backup.sh compose.yml; do
    copy_atomic "$CANDIDATE_DIR/$item" "$INSTALL_DIR/$item" || return 1
  done
  copy_atomic "$CANDIDATE_DIR/.env" "$INSTALL_DIR/.env" || return 1
  copy_atomic "$CANDIDATE_DIR/compose.runtime.yml" "$INSTALL_DIR/compose.runtime.yml" || return 1
  chmod 755 "$INSTALL_DIR/install.sh" "$INSTALL_DIR/backup.sh" || return 1
  chmod 600 "$INSTALL_DIR/.env" || return 1
  COMPOSE_ENV_FILE="$INSTALL_DIR/.env"
  RUNTIME_COMPOSE="$INSTALL_DIR/compose.runtime.yml"
  docker_compose config -q || return 1
  if (( DOCKER_SUPPORTS_WAIT == 1 )); then
    docker_compose up -d --wait || return 1
  else
    docker_compose up -d || return 1
  fi
}

configure_native() {
  local escaped_site escaped_install
  chmod 755 "$INSTALL_DIR" "$INSTALL_DIR/install.sh" "$INSTALL_DIR/backup.sh" "$INSTALL_DIR/scripts/prestart.sh" || return 1
  chmod -R a+rX "$INSTALL_DIR/server" "$INSTALL_DIR/console" "$INSTALL_DIR/systemd" "$INSTALL_DIR/deploy" "$INSTALL_DIR/scripts" || return 1
  escaped_site="${SITE_ADDRESS//&/\\&}"
  escaped_install="${INSTALL_DIR//&/\\&}"
  sed -e "s|{{SITE_ADDRESS}}|${escaped_site}|" -e "s|{{INSTALL_DIR}}|${escaped_install}|" \
    "$INSTALL_DIR/deploy/Caddyfile.native" > /etc/caddy/Caddyfile || return 1
  if ! id examaware-control >/dev/null 2>&1; then
    useradd --system --user-group --home "$INSTALL_DIR" examaware-control || return 1
  fi
  chown -R examaware-control:examaware-control "$INSTALL_DIR/server" || return 1
  sed "s|{{INSTALL_DIR}}|${escaped_install}|" "$INSTALL_DIR/systemd/examaware-control-server.service" \
    > /etc/systemd/system/examaware-control-server.service || return 1
  systemctl daemon-reload || return 1
  systemctl enable examaware-control-server caddy || return 1
  systemctl restart examaware-control-server caddy || return 1
}

activate_native_candidate() {
  local item
  ACTIVATION_STARTED=1
  for item in server console scripts systemd deploy; do
    rm -rf "$INSTALL_DIR/$item" || return 1
  done
  cp -a "$CANDIDATE_DIR/." "$INSTALL_DIR/" || return 1
  copy_atomic "$CANDIDATE_DIR/.env" "$INSTALL_DIR/.env" || return 1
  chmod 600 "$INSTALL_DIR/.env" || return 1
  configure_native || return 1
}

health_url() {
  if [[ -n "${DOMAIN:-}" ]]; then
    printf '%s' "https://${DOMAIN}/api/health/ready"
  else
    printf '%s' "http://127.0.0.1:${HTTP_PORT}/api/health/ready"
  fi
}

wait_for_health() {
  local attempt url body_file status last_reason="尚未请求" body compact
  url="$(health_url)"
  body_file="$(mktemp)"
  register_temp "$body_file"
  for attempt in {1..120}; do
    : > "$body_file"
    if [[ -n "${DOMAIN:-}" ]]; then
      status="$(curl -ksS --resolve "${DOMAIN}:443:127.0.0.1" -o "$body_file" -w '%{http_code}' "$url" 2>/dev/null)" || status="000"
    else
      status="$(curl -sS -o "$body_file" -w '%{http_code}' "$url" 2>/dev/null)" || status="000"
    fi
    if [[ "$status" == "000" ]]; then
      last_reason="连接被拒绝或无法建立连接"
    elif [[ ! "$status" =~ ^2[0-9][0-9]$ ]]; then
      last_reason="HTTP 状态 ${status}"
    else
      body="$(<"$body_file")"
      compact="${body//[[:space:]]/}"
      if [[ "$compact" == '{"service":"control-server","status":"ok","database":"ok"}' ]]; then
        status_ok "服务就绪检查通过。"
        return 0
      elif [[ "$compact" != \{*\} ]]; then
        last_reason="响应不是有效 JSON 对象"
      elif [[ "$compact" != *'"status":"ok"'* ]]; then
        last_reason="就绪响应的 status 不是 ok"
      elif [[ "$compact" != *'"database":"ok"'* ]]; then
        last_reason="数据库尚未就绪"
      else
        last_reason="就绪 JSON 包含错误字段或结构"
      fi
    fi
    sleep 1
  done
  status_error "健康检查超时（120 秒）: ${last_reason}。最后响应: $(<"$body_file")"
  return 1
}

print_diagnostics() {
  set +e
  if [[ "$MODE" == "docker" ]]; then
    docker_compose ps -a
    docker_compose logs --tail 200 control-postgres
    docker_compose logs --tail 200 control-server
    docker_compose logs --tail 200 control-caddy
  else
    systemctl status --no-pager examaware-control-server caddy
    journalctl -u examaware-control-server -u caddy -n 200 --no-pager
  fi
  set -e
}

restore_snapshot() {
  local item
  [[ -n "$ROLLBACK_DIR" && -d "$ROLLBACK_DIR" ]] || return 0
  status_warn "正在恢复升级前的应用与配置快照；数据库迁移不会自动回退。"
  if [[ "$MODE" == "docker" ]]; then
    for item in .env install.sh backup.sh compose.yml compose.runtime.yml .installed; do
      rm -rf "$INSTALL_DIR/$item"
      [[ -e "$ROLLBACK_DIR/$item" ]] && cp -a "$ROLLBACK_DIR/$item" "$INSTALL_DIR/$item"
    done
    COMPOSE_ENV_FILE="$INSTALL_DIR/.env"
    RUNTIME_COMPOSE="$(live_compose_file)"
    docker_compose pull >/dev/null 2>&1 || true
    docker_compose up -d >/dev/null 2>&1 || true
  else
    for item in .env install.sh backup.sh compose.yml compose.runtime.yml .installed server console scripts systemd deploy; do
      rm -rf "$INSTALL_DIR/$item"
      [[ -e "$ROLLBACK_DIR/$item" ]] && cp -a "$ROLLBACK_DIR/$item" "$INSTALL_DIR/$item"
    done
    [[ -f "$ROLLBACK_DIR/Caddyfile.system" ]] && cp -a "$ROLLBACK_DIR/Caddyfile.system" /etc/caddy/Caddyfile
    [[ -f "$ROLLBACK_DIR/examaware-control-server.service.system" ]] && cp -a "$ROLLBACK_DIR/examaware-control-server.service.system" /etc/systemd/system/examaware-control-server.service
    systemctl daemon-reload || true
    systemctl restart examaware-control-server caddy || true
  fi
  status_warn "回滚快照保留在 ${ROLLBACK_DIR}；数据库备份位于 ${BACKUP_FILE:-未生成}。"
}

handle_activation_failure() {
  FAILURE_HANDLED=1
  print_diagnostics
  if (( UPGRADE == 1 )); then
    restore_snapshot
  elif [[ "$MODE" == "docker" ]]; then
    docker_compose down >/dev/null 2>&1 || true
    status_warn "首次安装容器已停止；命名卷 examaware-control_control-postgres-data 已保留。"
  fi
}

mark_success() {
  printf "version='%s'\n" "$VERSION" > "$INSTALL_DIR/.installed.tmp"
  chmod 600 "$INSTALL_DIR/.installed.tmp"
  mv -f "$INSTALL_DIR/.installed.tmp" "$INSTALL_DIR/.installed"
  [[ -n "$ROLLBACK_DIR" ]] && rm -rf "$ROLLBACK_DIR"
  SUCCESS=1
}

print_summary() {
  log ""
  log "ExamAware 集控中心已部署"
  log "访问地址: ${BETTER_AUTH_URL}"
  log "管理员账号: ${CONTROL_ADMIN_USERNAME}"
  if (( UPGRADE == 0 && GENERATED_ADMIN_PASSWORD == 1 )); then
    log "管理员密码: ${CONTROL_ADMIN_PASSWORD}"
    log "该自动生成密码仅在本次成功后显示，请立即保存。"
  elif (( UPGRADE == 0 )); then
    log "管理员密码已保存于 ${INSTALL_DIR}/.env。"
  fi
  log "配置: ${INSTALL_DIR}/.env"
  log "备份命令: ${INSTALL_DIR}/backup.sh"
  log "更新命令: 重新下载最新 standalone install.sh 后运行"
  if [[ -n "${DOMAIN:-}" ]]; then
    log "防火墙: 放行 80/TCP 与 443/TCP；无需放行 3100/5432。"
  else
    log "防火墙: 放行 ${HTTP_PORT}/TCP；无需放行 3100/5432。"
  fi
}

main() {
  local requested="${1:-${CONTROL_VERSION:-latest}}"
  as_root "$@"
  init_logging
  log "ExamAware 集控中心安装器"
  run_stage "系统与权限前置检查" preflight
  run_stage "识别现有安装" detect_install_mode

  if (( UPGRADE == 0 )); then
    reject_new_native_install
    run_stage "检查 Docker" check_docker_prerequisites
    run_stage "收集并校验首次安装配置" prepare_new_install_settings
    attach_install_log
  else
    attach_install_log
    run_stage "迁移并校验现有配置" prepare_update_settings
    [[ "$MODE" == "docker" ]] && run_stage "检查 Docker" check_docker_prerequisites
    [[ "$MODE" == "native" ]] && run_stage "检查旧原生更新依赖" check_native_update_prerequisites
  fi

  REQUESTED_VERSION="$requested"
  run_stage "解析发布版本" resolve_version "$REQUESTED_VERSION"
  run_stage "下载并校验候选发布包" download_package "$MODE"
  generate_env "$CANDIDATE_DIR/.env"

  if [[ "$MODE" == "docker" ]]; then
    run_stage "生成并校验运行时 Compose" generate_runtime_compose "$CANDIDATE_DIR/compose.yml" "$CANDIDATE_DIR/compose.runtime.yml"
    validate_candidate_compose
  fi

  if (( UPGRADE == 1 )); then
    run_stage "创建升级前数据库备份" perform_backup || die 3 "数据库备份失败；尚未拉取镜像或替换现有文件。"
  fi

  if [[ "$MODE" == "docker" ]]; then
    run_stage "拉取候选镜像" pull_candidate_images
  fi

  if (( UPGRADE == 1 )); then
    run_stage "创建应用回滚快照" create_rollback_snapshot
  fi

  if [[ "$MODE" == "docker" ]]; then
    if ! run_stage "激活 Docker 服务" activate_docker_candidate; then
      handle_activation_failure
      die 4 "Docker 服务启动失败；已执行可用的恢复操作。"
    fi
  else
    if ! run_stage "激活原生服务" activate_native_candidate; then
      handle_activation_failure
      die 4 "原生服务启动失败；已执行可用的恢复操作。"
    fi
  fi

  if ! run_stage "等待服务和数据库就绪" wait_for_health; then
    handle_activation_failure
    die 5 "健康检查失败；已执行可用的恢复操作。"
  fi
  mark_success
  print_summary
}

if [[ "${EXAMAWARE_INSTALL_LIB_ONLY:-0}" != "1" ]]; then
  main "$@"
fi
