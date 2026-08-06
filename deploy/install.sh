#!/usr/bin/env bash
set -euo pipefail

INSTALL_DIR="${INSTALL_DIR:-/opt/examaware-control}"
REPOSITORY="ExamAware/ExamAware-Control"
RELEASE_ROOT="https://github.com/${REPOSITORY}/releases"

log() {
  printf '%s\n' "$*"
}

as_root() {
  if [[ "${EUID}" -ne 0 ]]; then
    exec sudo env \
      INSTALL_DIR="$INSTALL_DIR" \
      NATIVE="${NATIVE:-}" \
      DOMAIN="${DOMAIN:-}" \
      SITE_ADDRESS="${SITE_ADDRESS:-}" \
      HTTP_PORT="${HTTP_PORT:-}" \
      GITHUB_MIRROR="${GITHUB_MIRROR:-}" \
      GITHUB_MIRRORS="${GITHUB_MIRRORS:-}" \
      GITHUB_ACCELERATE="${GITHUB_ACCELERATE:-}" \
      DOCKER_ACCELERATE="${DOCKER_ACCELERATE:-}" \
      POSTGRES_IMAGE="${POSTGRES_IMAGE:-}" \
      CONTROL_REGISTRY="${CONTROL_REGISTRY:-}" \
      CONTROL_VERSION="${CONTROL_VERSION:-}" \
      DATABASE_URL="${DATABASE_URL:-}" \
      POSTGRES_USER="${POSTGRES_USER:-}" \
      POSTGRES_PASSWORD="${POSTGRES_PASSWORD:-}" \
      POSTGRES_DB="${POSTGRES_DB:-}" \
      BETTER_AUTH_URL="${BETTER_AUTH_URL:-}" \
      BETTER_AUTH_SECRET="${BETTER_AUTH_SECRET:-}" \
      DEVICE_CREDENTIAL_PEPPER="${DEVICE_CREDENTIAL_PEPPER:-}" \
      CONTROL_ADMIN_USERNAME="${CONTROL_ADMIN_USERNAME:-}" \
      CONTROL_ADMIN_NAME="${CONTROL_ADMIN_NAME:-}" \
      CONTROL_ADMIN_PASSWORD="${CONTROL_ADMIN_PASSWORD:-}" \
      bash "$0" "$@"
  fi
}

download_github_url() {
  local original_url="$1" destination="$2" validation="${3:-none}" mirror url valid
  local default_mirrors
  local -a mirrors=()
  default_mirrors="https://github.chenc.dev/ https://ghproxy.cfd/ https://ghproxy.cc/ https://gh-proxy.com/"

  if [[ -n "${GITHUB_MIRROR:-}" ]]; then
    mirrors+=("$GITHUB_MIRROR")
  fi
  mirrors+=("")
  if [[ "${GITHUB_ACCELERATE:-1}" != "0" ]]; then
    for mirror in ${GITHUB_MIRRORS:-$default_mirrors}; do
      mirrors+=("$mirror")
    done
  fi

  for mirror in "${mirrors[@]}"; do
    if [[ -n "$mirror" ]]; then
      url="${mirror%/}/${original_url}"
    else
      url="$original_url"
    fi
    log "尝试下载: ${url}"
    if curl -fsSL --retry 1 --connect-timeout 8 --speed-time 30 --speed-limit 1024 \
      "$url" -o "${destination}.part" && [[ -s "${destination}.part" ]]; then
      valid=1
      case "$validation" in
        json-tag) grep -q '"tag_name"' "${destination}.part" || valid=0 ;;
        tar-gz) tar tzf "${destination}.part" >/dev/null 2>&1 || valid=0 ;;
      esac
      if [[ "$valid" == "1" ]]; then
        mv "${destination}.part" "$destination"
        return
      fi
    fi
    rm -f "${destination}.part"
  done

  log "GitHub 官方源和加速镜像均不可用。可设置 GITHUB_MIRROR 指定可信镜像。"
  return 1
}

resolve_version() {
  local requested="${1:-${CONTROL_VERSION:-latest}}" release_json
  if [[ "$requested" == "latest" ]]; then
    release_json=$(mktemp)
    if ! download_github_url \
      "https://api.github.com/repos/${REPOSITORY}/releases/latest" "$release_json" json-tag; then
      rm -f "$release_json"
      return 1
    fi
    requested=$(grep -m1 '"tag_name"' "$release_json" | cut -d'"' -f4 || true)
    rm -f "$release_json"
  fi
  if [[ -z "$requested" ]]; then
    log "无法解析发布版本。"
    return 1
  fi
  VERSION="$requested"
  ASSET_ROOT="${RELEASE_ROOT}/download/${VERSION}"
}

docker_ready() {
  docker compose version >/dev/null 2>&1 && docker info >/dev/null 2>&1
}

choose_mode() {
  MODE=native
  if [[ "${NATIVE:-0}" == "1" ]]; then
    log "NATIVE=1，使用原生 systemd 部署。"
    return
  fi
  if docker_ready; then
    MODE=docker
    return
  fi
  if command -v apt-get >/dev/null 2>&1; then
    log "未检测到可用的 Docker Compose v2，正在安装 docker.io 与 docker-compose-v2..."
    if apt-get update \
      && apt-get install -y docker.io docker-compose-v2 \
      && systemctl enable --now docker \
      && docker_ready; then
      MODE=docker
      return
    fi
    log "Docker 自动安装失败（需要 docker.io 和 docker-compose-v2），回退到原生 systemd 部署。"
  fi
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
  local length="$1" value
  if command -v openssl >/dev/null 2>&1; then
    value=$(openssl rand -base64 "$((length * 2))" | tr -dc 'a-zA-Z0-9')
  else
    value=$(random_hex "$length")
  fi
  printf '%s' "${value:0:length}"
}

write_env_value() {
  local key="$1" value="$2"
  if [[ "$value" == *"'"* ]]; then
    log "配置项 ${key} 不能包含单引号。"
    return 1
  fi
  printf "%s='%s'\n" "$key" "$value"
}

generate_env() {
  local mode="$1" ip
  mkdir -p "$INSTALL_DIR"
  touch "$INSTALL_DIR/.env"
  chmod 600 "$INSTALL_DIR/.env"

  set -a
  # shellcheck disable=SC1091
  . "$INSTALL_DIR/.env"
  set +a

  POSTGRES_USER="${POSTGRES_USER:-examaware}"
  POSTGRES_PASSWORD="${POSTGRES_PASSWORD:-$(random_hex 24)}"
  POSTGRES_DB="${POSTGRES_DB:-examaware_control}"
  BETTER_AUTH_SECRET="${BETTER_AUTH_SECRET:-$(random_alnum 48)}"
  DEVICE_CREDENTIAL_PEPPER="${DEVICE_CREDENTIAL_PEPPER:-$(random_hex 32)}"
  CONTROL_ADMIN_USERNAME="${CONTROL_ADMIN_USERNAME:-admin}"
  CONTROL_ADMIN_NAME="${CONTROL_ADMIN_NAME:-School administrator}"
  CONTROL_ADMIN_PASSWORD="${CONTROL_ADMIN_PASSWORD:-$(random_alnum 18)}"
  HTTP_PORT="${HTTP_PORT:-80}"
  NODE_ENV=production
  CONTROL_VERSION="$VERSION"
  if [[ "${DOCKER_ACCELERATE:-0}" == "1" ]]; then
    POSTGRES_IMAGE="${POSTGRES_IMAGE:-docker.1ms.run/postgres:17-alpine}"
    CONTROL_REGISTRY="${CONTROL_REGISTRY:-ghcr.1ms.run}"
  else
    POSTGRES_IMAGE="${POSTGRES_IMAGE:-postgres:17-alpine}"
    CONTROL_REGISTRY="${CONTROL_REGISTRY:-ghcr.io}"
  fi

  if [[ -n "${DOMAIN:-}" ]]; then
    SITE_ADDRESS="${SITE_ADDRESS:-$DOMAIN}"
    BETTER_AUTH_URL="${BETTER_AUTH_URL:-https://${DOMAIN}}"
  else
    if ! ip=$(hostname -I 2>/dev/null | awk '{print $1}'); then
      ip=""
    fi
    ip="${ip:-127.0.0.1}"
    if [[ "$HTTP_PORT" == "80" ]]; then
      SITE_ADDRESS="${SITE_ADDRESS:-:80}"
      BETTER_AUTH_URL="${BETTER_AUTH_URL:-http://${ip}}"
    else
      SITE_ADDRESS="${SITE_ADDRESS:-:${HTTP_PORT}}"
      BETTER_AUTH_URL="${BETTER_AUTH_URL:-http://${ip}:${HTTP_PORT}}"
    fi
  fi

  DATABASE_URL="${DATABASE_URL:-}"
  if [[ "$mode" == "native" && -z "$DATABASE_URL" ]]; then
    DATABASE_URL="postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@127.0.0.1:5432/${POSTGRES_DB}"
  fi

  export POSTGRES_USER POSTGRES_PASSWORD POSTGRES_DB DATABASE_URL
  export BETTER_AUTH_URL BETTER_AUTH_SECRET DEVICE_CREDENTIAL_PEPPER
  export CONTROL_ADMIN_USERNAME CONTROL_ADMIN_NAME CONTROL_ADMIN_PASSWORD
  export SITE_ADDRESS HTTP_PORT CONTROL_VERSION NODE_ENV
  export POSTGRES_IMAGE CONTROL_REGISTRY

  {
    write_env_value POSTGRES_USER "$POSTGRES_USER"
    write_env_value POSTGRES_PASSWORD "$POSTGRES_PASSWORD"
    write_env_value POSTGRES_DB "$POSTGRES_DB"
    write_env_value DATABASE_URL "$DATABASE_URL"
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
    write_env_value NODE_ENV "$NODE_ENV"
  } > "$INSTALL_DIR/.env.tmp"
  chmod 600 "$INSTALL_DIR/.env.tmp"
  mv "$INSTALL_DIR/.env.tmp" "$INSTALL_DIR/.env"
}

download_package() {
  local asset="$1" temp_dir
  temp_dir=$(mktemp -d)
  log "正在下载 ${asset}..."
  if ! download_github_url "${ASSET_ROOT}/${asset}" "$temp_dir/package.tar.gz" tar-gz; then
    rm -rf "$temp_dir"
    return 1
  fi
  if ! tar tzf "$temp_dir/package.tar.gz" >/dev/null; then
    log "下载内容不是有效的发布包：${asset}"
    rm -rf "$temp_dir"
    return 1
  fi
  mkdir -p "$INSTALL_DIR"
  tar xzf "$temp_dir/package.tar.gz" -C "$INSTALL_DIR"
  rm -rf "$temp_dir"
}

install_docker() {
  download_package "examaware-control-docker-${VERSION}.tar.gz"
  chmod 755 "$INSTALL_DIR/install.sh" "$INSTALL_DIR/backup.sh"
  generate_env docker
  docker compose -f "$INSTALL_DIR/compose.yml" pull
  docker compose -f "$INSTALL_DIR/compose.yml" up -d --wait
}

as_postgres() {
  if command -v runuser >/dev/null 2>&1; then
    runuser -u postgres -- "$@"
  else
    sudo -u postgres "$@"
  fi
}

validate_database_identifiers() {
  if [[ ! "$POSTGRES_USER" =~ ^[A-Za-z_][A-Za-z0-9_]*$ ]]; then
    log "POSTGRES_USER 仅支持 PostgreSQL 标准标识符字符。"
    return 1
  fi
  if [[ ! "$POSTGRES_DB" =~ ^[A-Za-z_][A-Za-z0-9_]*$ ]]; then
    log "POSTGRES_DB 仅支持 PostgreSQL 标准标识符字符。"
    return 1
  fi
}

install_postgres() {
  local password_sql role_exists database_exists
  validate_database_identifiers
  password_sql=${POSTGRES_PASSWORD//\'/\'\'}
  for _ in {1..60}; do
    if as_postgres pg_isready >/dev/null 2>&1; then
      break
    fi
    sleep 1
  done
  as_postgres pg_isready >/dev/null

  role_exists=$(as_postgres psql -tAc "SELECT 1 FROM pg_roles WHERE rolname='${POSTGRES_USER}'")
  if [[ -z "$role_exists" ]]; then
    as_postgres psql -v ON_ERROR_STOP=1 -c \
      "CREATE ROLE \"${POSTGRES_USER}\" LOGIN PASSWORD '${password_sql}'"
  fi
  database_exists=$(as_postgres psql -tAc "SELECT 1 FROM pg_database WHERE datname='${POSTGRES_DB}'")
  if [[ -z "$database_exists" ]]; then
    as_postgres createdb -O "$POSTGRES_USER" "$POSTGRES_DB"
  fi
}

install_node() {
  local version major minor
  curl -fsSL https://deb.nodesource.com/setup_22.x | bash -
  apt-get install -y nodejs
  version=$(node -v)
  if [[ ! "$version" =~ ^v([0-9]+)\.([0-9]+)\. ]]; then
    log "无法识别 Node.js 版本：${version}"
    return 1
  fi
  major="${BASH_REMATCH[1]}"
  minor="${BASH_REMATCH[2]}"
  if (( major < 22 || (major == 22 && minor < 22) )); then
    log "Node.js ${version} 过旧，需要 v22.22.1 或更高版本。请使用 Docker 路径或配置 NodeSource 镜像。"
    return 1
  fi
}

install_caddy() {
  apt-get install -y debian-keyring debian-archive-keyring apt-transport-https
  curl -1sLf https://dl.cloudsmith.io/public/caddy/stable/gpg.key \
    | gpg --dearmor --yes -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
  curl -1sLf https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt \
    | tee /etc/apt/sources.list.d/caddy-stable.list >/dev/null
  apt-get update
  apt-get install -y caddy
  setcap cap_net_bind_service=+ep /usr/bin/caddy || true
}

install_native_dependencies() {
  apt-get update
  if [[ -n "${DATABASE_URL_PRESET:-}" ]]; then
    apt-get install -y curl ca-certificates gnupg
  else
    apt-get install -y postgresql curl ca-certificates gnupg
    install_postgres
  fi
  install_node
  install_caddy
}

configure_native() {
  local escaped_site escaped_install
  chmod 755 "$INSTALL_DIR" "$INSTALL_DIR/install.sh" "$INSTALL_DIR/scripts" "$INSTALL_DIR/scripts/prestart.sh" "$INSTALL_DIR/backup.sh"
  find "$INSTALL_DIR/server" "$INSTALL_DIR/console" "$INSTALL_DIR/systemd" "$INSTALL_DIR/deploy" -type d -exec chmod 755 {} +
  find "$INSTALL_DIR/server" "$INSTALL_DIR/console" "$INSTALL_DIR/systemd" "$INSTALL_DIR/deploy" -type f -exec chmod 644 {} +
  chmod 755 "$INSTALL_DIR/server/node_modules/.bin/"* 2>/dev/null || true

  escaped_site=${SITE_ADDRESS//&/\\&}
  escaped_install=${INSTALL_DIR//&/\\&}
  sed -e "s|{{SITE_ADDRESS}}|${escaped_site}|" -e "s|{{INSTALL_DIR}}|${escaped_install}|" \
    "$INSTALL_DIR/deploy/Caddyfile.native" > /etc/caddy/Caddyfile

  if ! id examaware-control >/dev/null 2>&1; then
    useradd --system --user-group --home "$INSTALL_DIR" examaware-control
  fi
  chown -R examaware-control:examaware-control "$INSTALL_DIR/server"
  sed "s|{{INSTALL_DIR}}|${escaped_install}|" \
    "$INSTALL_DIR/systemd/examaware-control-server.service" \
    > /etc/systemd/system/examaware-control-server.service
  systemctl daemon-reload
  if [[ "$UPGRADE" == "1" ]]; then
    systemctl enable examaware-control-server caddy
    systemctl restart examaware-control-server caddy
  else
    systemctl enable --now examaware-control-server caddy
  fi
}

install_native() {
  DATABASE_URL_PRESET="${DATABASE_URL:-}"
  generate_env native
  if [[ "$UPGRADE" != "1" ]]; then
    install_native_dependencies
  fi
  download_package "examaware-control-${VERSION}.tar.gz"
  configure_native
}

health_ready() {
  if [[ -n "${DOMAIN:-}" ]]; then
    curl -kfsS --resolve "${DOMAIN}:443:127.0.0.1" \
      "https://${DOMAIN}/api/health/ready" >/dev/null
  else
    curl -fsS "http://127.0.0.1:${HTTP_PORT}/api/health/ready" >/dev/null
  fi
}

wait_for_health() {
  for _ in {1..120}; do
    if health_ready; then
      return
    fi
    sleep 1
  done
  if [[ "$MODE" == "docker" ]]; then
    log "服务健康检查失败。请运行：docker compose -f ${INSTALL_DIR}/compose.yml logs"
  else
    log "服务健康检查失败。请运行：journalctl -u examaware-control-server -u caddy"
  fi
  return 1
}

print_summary() {
  log ""
  log "ExamAware 集控中心已部署"
  log "访问地址: ${BETTER_AUTH_URL}"
  log "管理员账号: ${CONTROL_ADMIN_USERNAME}"
  if [[ "$UPGRADE" != "1" ]]; then
    log "管理员密码: ${CONTROL_ADMIN_PASSWORD}"
    log "管理员密码已保存于 ${INSTALL_DIR}/.env"
  fi
  log "配置与备份: ${INSTALL_DIR}/.env, ${INSTALL_DIR}/backup.sh"
  log "升级: 重新运行 install.sh [版本号]"
  log "防火墙: 放行 80/TCP（有域名时 443/TCP），无需放行 3100/5432"
}

main() {
  as_root "$@"
  resolve_version "${1:-}"
  UPGRADE=0
  if [[ -f "$INSTALL_DIR/.env" ]]; then
    UPGRADE=1
  fi
  choose_mode
  if [[ "$MODE" == "docker" ]]; then
    install_docker
  else
    install_native
  fi
  wait_for_health
  print_summary
}

if [[ "${EXAMAWARE_INSTALL_LIB_ONLY:-0}" != "1" ]]; then
  main "$@"
fi
