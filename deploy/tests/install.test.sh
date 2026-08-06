#!/usr/bin/env bash
set -u

ROOT="$(CDPATH= cd -- "$(dirname -- "$0")/../.." && pwd)"
INSTALLER="$ROOT/deploy/install.sh"
ORIGINAL_PATH="$PATH"
PASS_COUNT=0
FAIL_COUNT=0
TEST_TMP="$(mktemp -d)"
trap 'rm -rf "$TEST_TMP"' EXIT

pass() {
  PASS_COUNT=$((PASS_COUNT + 1))
  printf 'ok %d - %s\n' "$PASS_COUNT" "$1"
}

fail() {
  FAIL_COUNT=$((FAIL_COUNT + 1))
  printf 'not ok - %s: %s\n' "$1" "$2" >&2
}

assert_eq() {
  [[ "$1" == "$2" ]] || {
    printf 'expected <%s>, got <%s>\n' "$2" "$1" >&2
    return 1
  }
}

assert_contains() {
  [[ "$1" == *"$2"* ]] || {
    printf 'missing <%s> in <%s>\n' "$2" "$1" >&2
    return 1
  }
}

assert_not_contains() {
  [[ "$1" != *"$2"* ]] || {
    printf 'unexpected <%s> in <%s>\n' "$2" "$1" >&2
    return 1
  }
}

run_case() {
  local name="$1"
  shift
  if ( "$@" ); then
    pass "$name"
  else
    fail "$name" "case failed"
  fi
}

source_installer() {
  EXAMAWARE_INSTALL_LIB_ONLY=1
  export EXAMAWARE_INSTALL_LIB_ONLY
  # shellcheck disable=SC1090
  source "$INSTALLER"
}

make_fake() {
  local directory="$1" name="$2"
  mkdir -p "$directory"
  cat > "$directory/$name"
  chmod 755 "$directory/$name"
}

write_legacy_env() {
  local directory="$1" site="${2:-:8080}" port="${3:-8080}" registry="${4:-ghcr.io}" postgres_image="${5:-postgres:17-alpine}"
  cat > "$directory/.env" <<EOF
POSTGRES_USER='examaware'
POSTGRES_PASSWORD='database-secret-value'
POSTGRES_DB='examaware_control'
DATABASE_URL=''
BETTER_AUTH_URL='http://192.0.2.8:${port}'
BETTER_AUTH_SECRET='authentication-secret-value'
DEVICE_CREDENTIAL_PEPPER='device-pepper-value'
CONTROL_ADMIN_USERNAME='admin'
CONTROL_ADMIN_NAME='系统管理员'
CONTROL_ADMIN_PASSWORD='administrator-secret'
SITE_ADDRESS='${site}'
HTTP_PORT='${port}'
CONTROL_VERSION='control-v0.1.1'
POSTGRES_IMAGE='${postgres_image}'
CONTROL_REGISTRY='${registry}'
NODE_ENV='production'
EOF
  chmod 600 "$directory/.env"
}

test_missing_docker() {
  source_installer
  local empty="$TEST_TMP/no-docker" output rc
  mkdir -p "$empty"
  set +e
  output="$(PATH="$empty" check_docker_prerequisites 2>&1)"
  rc=$?
  set -e
  assert_eq "$rc" "2"
  assert_contains "$output" 'bash <(curl -sSL https://linuxmirrors.cn/docker.sh)'
  assert_contains "$output" '安装完成后重新运行本脚本'
  assert_not_contains "$output" 'apt-get'
  assert_not_contains "$output" '原生 systemd 部署。'
}

test_missing_compose() {
  source_installer
  local bin="$TEST_TMP/no-compose" output rc
  make_fake "$bin" docker <<'EOF'
#!/bin/sh
exit 1
EOF
  set +e
  output="$(PATH="$bin:$ORIGINAL_PATH" check_docker_prerequisites 2>&1)"
  rc=$?
  set -e
  assert_eq "$rc" "2"
  assert_contains "$output" 'Docker Compose v2 插件'
}

test_daemon_unavailable() {
  source_installer
  local bin="$TEST_TMP/daemon" output rc
  make_fake "$bin" docker <<'EOF'
#!/bin/sh
if [ "$1 $2" = "compose version" ]; then exit 0; fi
if [ "$1" = "info" ]; then echo 'permission denied on docker.sock' >&2; exit 1; fi
exit 0
EOF
  make_fake "$bin" systemctl <<'EOF'
#!/bin/sh
exit 0
EOF
  set +e
  output="$(PATH="$bin:$ORIGINAL_PATH" check_docker_prerequisites 2>&1)"
  rc=$?
  set -e
  assert_eq "$rc" "2"
  assert_contains "$output" 'permission denied on docker.sock'
  assert_contains "$output" 'systemctl status docker'
}

test_wizard_confirm_and_cancel() {
  source_installer
  require_port_free() { return 0; }
  prompt_line() {
    case "$1" in
      管理员用户名) printf 'School_Admin' ;;
      管理员显示名) printf ' 校管理员 ' ;;
      *HTTP*) printf '8219' ;;
      *) printf '192.0.2.8' ;;
    esac
  }
  prompt_secret() { printf 'ExamAware!2026'; }
  prompt_install_confirmation() { printf 'yes'; }
  DOMAIN=''
  BETTER_AUTH_URL='http://192.0.2.8:8219'
  run_wizard >/dev/null
  assert_eq "$CONTROL_ADMIN_USERNAME" 'school_admin'
  assert_eq "$HTTP_PORT" '8219'

  set +e
  local output rc
  output="$(prompt_install_confirmation() { printf 'n'; }; run_wizard 2>&1)"
  rc=$?
  set -e
  assert_eq "$rc" '0'
  assert_contains "$output" '安装已取消'
}

test_noninteractive_never_reads_stdin() {
  source_installer
  EXAMAWARE_NONINTERACTIVE=1
  CONTROL_ADMIN_PASSWORD='ExamAwareNonInteractive'
  BETTER_AUTH_URL='http://192.0.2.8:8219'
  require_port_free() { return 0; }
  prepare_new_install_settings </dev/null
  assert_eq "$CONTROL_ADMIN_USERNAME" 'admin'
  assert_eq "$CONTROL_ADMIN_NAME" '系统管理员'
  assert_eq "$HTTP_PORT" '8219'
}

test_admin_and_port_boundaries() {
  source_installer
  CONTROL_ADMIN_NAME='Admin'
  CONTROL_ADMIN_PASSWORD='123456789012'
  for CONTROL_ADMIN_USERNAME in abc 'a_b.c' 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456'; do
    validate_admin_input || return 1
  done
  CONTROL_ADMIN_USERNAME='ab'
  ! validate_admin_input >/dev/null 2>&1 || return 1
  CONTROL_ADMIN_USERNAME='bad-name'
  ! validate_admin_input >/dev/null 2>&1 || return 1
  CONTROL_ADMIN_USERNAME='admin'
  CONTROL_ADMIN_PASSWORD='12345678901'
  ! validate_admin_input >/dev/null 2>&1 || return 1
  CONTROL_ADMIN_PASSWORD="$(printf 'x%.0s' {1..129})"
  ! validate_admin_input >/dev/null 2>&1 || return 1
  validate_port 1 && validate_port 8219 && validate_port 65535
  ! validate_port 0 && ! validate_port 65536 && ! validate_port '８２１９'
}

test_port_occupancy() {
  source_installer
  local bin="$TEST_TMP/occupied"
  make_fake "$bin" ss <<'EOF'
#!/bin/sh
printf '%s\n' 'LISTEN 0 4096 0.0.0.0:8219 0.0.0.0:* users:(("caddy",pid=9,fd=3))'
EOF
  local details
  details="$(PATH="$bin:$ORIGINAL_PATH" port_listener_details 8219)"
  assert_contains "$details" 'caddy'
  ! PATH="$bin:$ORIGINAL_PATH" require_port_free 8219 >/dev/null 2>&1
}

test_domain_ports_and_origin() {
  source_installer
  validate_domain 'control.example.com'
  ! validate_domain 'https://control.example.com'
  ! validate_domain 'control.example.com:443'
  validate_origin 'https://control.example.com'
  validate_origin 'http://192.0.2.8:8219'
  ! validate_origin 'https://control.example.com/login'
  local bin="$TEST_TMP/domain-ports"
  make_fake "$bin" ss <<'EOF'
#!/bin/sh
printf '%s\n' 'LISTEN 0 128 *:80 *:*'
printf '%s\n' 'LISTEN 0 128 *:443 *:*'
EOF
  ! PATH="$bin:$ORIGINAL_PATH" require_port_free 80 >/dev/null 2>&1
  ! PATH="$bin:$ORIGINAL_PATH" require_port_free 443 >/dev/null 2>&1
}

test_download_mirror_order() {
  source_installer
  local bin="$TEST_TMP/download-order" log_file="$TEST_TMP/download-order.log" destination="$TEST_TMP/downloaded"
  make_fake "$bin" curl <<'EOF'
#!/bin/sh
out=''
url=''
while [ "$#" -gt 0 ]; do
  case "$1" in
    -o) out="$2"; shift 2 ;;
    http*) url="$1"; shift ;;
    *) shift ;;
  esac
done
printf '%s\n' "$url" >> "$CURL_LOG"
case "$url" in
  https://github.com/*) printf 'payload' > "$out"; exit 0 ;;
  *) echo 'curl: (28) Operation timed out' >&2; exit 28 ;;
esac
EOF
  CURL_LOG="$log_file" PATH="$bin:$ORIGINAL_PATH" download_github_url 'https://github.com/ExamAware/release' "$destination" >/dev/null
  local lines
  lines="$(cat "$log_file")"
  assert_contains "$lines" 'https://github.chenc.dev/https://github.com/ExamAware/release'
  assert_eq "$(printf '%s\n' "$lines" | tail -n 1)" 'https://github.com/ExamAware/release'
  [[ -s "$destination" ]]
}

test_explicit_mirror_with_acceleration_disabled() {
  source_installer
  local bin="$TEST_TMP/download-explicit" log_file="$TEST_TMP/download-explicit.log" destination="$TEST_TMP/downloaded-explicit"
  make_fake "$bin" curl <<'EOF'
#!/bin/sh
out=''; url=''
while [ "$#" -gt 0 ]; do case "$1" in -o) out="$2"; shift 2;; http*) url="$1"; shift;; *) shift;; esac; done
printf '%s\n' "$url" >> "$CURL_LOG"
case "$url" in https://github.com/*) printf ok > "$out"; exit 0;; *) exit 22;; esac
EOF
  GITHUB_MIRROR='https://trusted.example/' GITHUB_ACCELERATE=0 CURL_LOG="$log_file" PATH="$bin:$ORIGINAL_PATH" \
    download_github_url 'https://github.com/ExamAware/release' "$destination" >/dev/null
  local lines
  lines="$(cat "$log_file")"
  assert_contains "$lines" 'https://trusted.example/https://github.com/ExamAware/release'
  assert_not_contains "$lines" 'ghproxy.cfd'
}

test_download_error_classes() {
  source_installer
  assert_eq "$(classify_curl_error 'Could not resolve host')" 'DNS 解析失败'
  assert_eq "$(classify_curl_error 'SSL certificate problem')" 'TLS/证书失败'
  assert_eq "$(classify_curl_error 'Operation timed out')" '连接或传输超时'
  assert_eq "$(classify_curl_error 'requested URL returned error: 404')" 'HTTP 错误'
}

test_image_defaults_and_overrides() {
  source_installer
  require_port_free() { return 0; }
  EXAMAWARE_NONINTERACTIVE=1
  BETTER_AUTH_URL='http://192.0.2.8:8219'
  CONTROL_ADMIN_PASSWORD='ExamAwareDefaultPass'
  prepare_new_install_settings
  assert_eq "$POSTGRES_IMAGE" 'docker.1ms.run/postgres:17-alpine'
  assert_eq "$CONTROL_REGISTRY" 'ghcr.1ms.run'

  POSTGRES_IMAGE='private.example/postgres:17'
  CONTROL_REGISTRY='private.example/control'
  DOCKER_ACCELERATE=0
  prepare_new_install_settings
  assert_eq "$POSTGRES_IMAGE" 'private.example/postgres:17'
  assert_eq "$CONTROL_REGISTRY" 'private.example/control'
}

prepare_pull_fixture() {
  CANDIDATE_DIR="$1"
  mkdir -p "$CANDIDATE_DIR"
  cp "$ROOT/deploy/compose.yml" "$CANDIDATE_DIR/compose.yml"
  cp "$ROOT/deploy/compose.yml" "$CANDIDATE_DIR/compose.runtime.yml"
  MODE='docker'; VERSION='control-v0.1.2'; DOMAIN=''; INSTALLER_STATE_VERSION='1'
  POSTGRES_USER='examaware'; POSTGRES_PASSWORD='db-secret'; POSTGRES_DB='examaware_control'; DATABASE_URL=''
  BETTER_AUTH_URL='http://192.0.2.8:8219'; BETTER_AUTH_SECRET='auth-secret'; DEVICE_CREDENTIAL_PEPPER='pepper'
  CONTROL_ADMIN_USERNAME='admin'; CONTROL_ADMIN_NAME='Admin'; CONTROL_ADMIN_PASSWORD='administrator-secret'
  SITE_ADDRESS=':80'; HTTP_PORT='8219'; NODE_ENV='production'
  POSTGRES_IMAGE="${POSTGRES_IMAGE:-$DOMESTIC_POSTGRES_IMAGE}"
  CONTROL_REGISTRY="${CONTROL_REGISTRY:-$DOMESTIC_CONTROL_REGISTRY}"
  generate_env "$CANDIDATE_DIR/.env"
  COMPOSE_ENV_FILE="$CANDIDATE_DIR/.env"
  RUNTIME_COMPOSE="$CANDIDATE_DIR/compose.runtime.yml"
}

test_automatic_image_fallback() {
  source_installer
  local bin="$TEST_TMP/pull-fallback-bin" count="$TEST_TMP/pull-count" candidate="$TEST_TMP/pull-candidate"
  make_fake "$bin" docker <<'EOF'
#!/bin/sh
case " $* " in
  *' pull '*)
    count=0; [ -f "$PULL_COUNT" ] && count=$(cat "$PULL_COUNT")
    count=$((count + 1)); printf '%s' "$count" > "$PULL_COUNT"
    [ "$count" -ge 2 ] && exit 0 || exit 1
    ;;
  *) exit 0 ;;
esac
EOF
  POSTGRES_IMAGE="$DOMESTIC_POSTGRES_IMAGE"; CONTROL_REGISTRY="$DOMESTIC_CONTROL_REGISTRY"
  POSTGRES_IMAGE_EXPLICIT=0; CONTROL_REGISTRY_EXPLICIT=0
  prepare_pull_fixture "$candidate"
  PATH="$bin:$ORIGINAL_PATH" PULL_COUNT="$count" pull_candidate_images >/dev/null
  assert_eq "$(cat "$count")" '2'
  assert_eq "$POSTGRES_IMAGE" "$OFFICIAL_POSTGRES_IMAGE"
  assert_eq "$CONTROL_REGISTRY" "$OFFICIAL_CONTROL_REGISTRY"
  assert_contains "$(cat "$candidate/.env")" "CONTROL_REGISTRY='ghcr.io'"
}

test_custom_image_never_falls_back() {
  source_installer
  local bin="$TEST_TMP/pull-custom-bin" count="$TEST_TMP/pull-custom-count" candidate="$TEST_TMP/pull-custom-candidate" rc
  make_fake "$bin" docker <<'EOF'
#!/bin/sh
case " $* " in *' pull '*) echo x >> "$PULL_COUNT"; exit 1;; *) exit 0;; esac
EOF
  POSTGRES_IMAGE='private.example/postgres:17'; CONTROL_REGISTRY='private.example/control'
  POSTGRES_IMAGE_EXPLICIT=1; CONTROL_REGISTRY_EXPLICIT=1
  prepare_pull_fixture "$candidate"
  set +e
  ( PATH="$bin:$ORIGINAL_PATH" PULL_COUNT="$count" pull_candidate_images >/dev/null 2>&1 )
  rc=$?
  set -e
  assert_eq "$rc" '4'
  assert_eq "$(wc -l < "$count" | tr -d ' ')" '1'
}

test_checksum_and_archive_failures() {
  source_installer
  CHECKSUM_TOOL='shasum'
  local archive="$TEST_TMP/archive.tar.gz" sums="$TEST_TMP/SHA256SUMS" bin="$TEST_TMP/tar-fakes" rc
  mkdir -p "$TEST_TMP/archive-src"
  printf x > "$TEST_TMP/archive-src/install.sh"
  printf x > "$TEST_TMP/archive-src/backup.sh"
  printf x > "$TEST_TMP/archive-src/compose.yml"
  tar czf "$archive" -C "$TEST_TMP/archive-src" .
  printf '%064d  %s\n' 0 "${archive##*/}" > "$sums"
  set +e
  ( verify_archive_checksum "$archive" "$sums" "${archive##*/}" >/dev/null 2>&1 )
  rc=$?
  set -e
  assert_eq "$rc" '3'

  make_fake "$bin" tar <<'EOF'
#!/bin/sh
printf '%s\n' '../escape' './install.sh' './backup.sh' './compose.yml'
EOF
  set +e
  ( PATH="$bin:$ORIGINAL_PATH" validate_archive_members "$archive" docker >/dev/null 2>&1 )
  rc=$?
  set -e
  assert_eq "$rc" '3'

  make_fake "$bin" tar <<'EOF'
#!/bin/sh
exit 2
EOF
  set +e
  ( PATH="$bin:$ORIGINAL_PATH" validate_archive_members "$archive" docker >/dev/null 2>&1 )
  rc=$?
  set -e
  assert_eq "$rc" '3'
}

test_runtime_compose_ports() {
  source_installer
  local no_domain="$TEST_TMP/no-domain.yml" domain_file="$TEST_TMP/domain.yml"
  DOMAIN=''
  generate_runtime_compose "$ROOT/deploy/compose.yml" "$no_domain"
  assert_not_contains "$(cat "$no_domain")" "'443:443'"
  assert_contains "$(cat "$no_domain")" "'\${HTTP_PORT:-8219}:80'"
  DOMAIN='control.example.com'
  generate_runtime_compose "$ROOT/deploy/compose.yml" "$domain_file"
  assert_contains "$(cat "$domain_file")" "'443:443'"
}

test_compose_stage_failures() {
  source_installer
  local bin="$TEST_TMP/compose-fail" candidate="$TEST_TMP/compose-candidate" rc
  make_fake "$bin" docker <<'EOF'
#!/bin/sh
case " $* " in *' config -q '*) exit 1;; *) exit 0;; esac
EOF
  prepare_pull_fixture "$candidate"
  set +e
  ( PATH="$bin:$ORIGINAL_PATH" validate_candidate_compose >/dev/null 2>&1 )
  rc=$?
  set -e
  assert_eq "$rc" '2'
}

test_health_success_and_failure() {
  source_installer
  local bin="$TEST_TMP/health-bin" rc output
  make_fake "$bin" curl <<'EOF'
#!/bin/sh
out=''
while [ "$#" -gt 0 ]; do case "$1" in -o) out="$2"; shift 2;; -w) shift 2;; *) shift;; esac; done
printf '%s' "$HEALTH_BODY" > "$out"
printf '%s' "$HEALTH_STATUS"
EOF
  make_fake "$bin" sleep <<'EOF'
#!/bin/sh
exit 0
EOF
  DOMAIN=''; HTTP_PORT='8219'
  HEALTH_BODY='{"service":"control-server","status":"ok","database":"ok"}' HEALTH_STATUS=200 PATH="$bin:$ORIGINAL_PATH" wait_for_health >/dev/null
  set +e
  output="$(HEALTH_BODY='{"status":"ok","database":"starting"}' HEALTH_STATUS=200 PATH="$bin:$ORIGINAL_PATH" wait_for_health 2>&1)"
  rc=$?
  set -e
  assert_eq "$rc" '1'
  assert_contains "$output" '数据库尚未就绪'
}

test_logs_do_not_print_secrets() {
  source_installer
  require_port_free() { return 0; }
  EXAMAWARE_NONINTERACTIVE=1
  BETTER_AUTH_URL='http://192.0.2.8:8219'
  CONTROL_ADMIN_PASSWORD='unique-admin-secret'
  POSTGRES_PASSWORD='unique-db-secret'
  BETTER_AUTH_SECRET='unique-auth-secret'
  local output
  output="$(prepare_new_install_settings 2>&1)"
  assert_not_contains "$output" 'unique-admin-secret'
  assert_not_contains "$output" 'unique-db-secret'
  assert_not_contains "$output" 'unique-auth-secret'
}

test_backup_failure_removes_partial() {
  source_installer
  local install="$TEST_TMP/backup-install" bin="$TEST_TMP/backup-bin"
  mkdir -p "$install"
  write_legacy_env "$install"
  cp "$ROOT/deploy/compose.yml" "$install/compose.yml"
  make_fake "$bin" docker <<'EOF'
#!/bin/sh
exit 0
EOF
  INSTALL_DIR="$install"; MODE='docker'; POSTGRES_USER='examaware'; POSTGRES_DB='examaware_control'
  ! PATH="$bin:$ORIGINAL_PATH" perform_backup >/dev/null 2>&1
  [[ -z "$(find "$install/backups" -name '*.part' -print)" ]]
}

test_legacy_docker_migration_preserves_state() {
  source_installer
  local install="$TEST_TMP/legacy-docker"
  mkdir -p "$install"
  write_legacy_env "$install" ':8080' '8080'
  cp "$ROOT/deploy/compose.yml" "$install/compose.yml"
  INSTALL_DIR="$install"
  detect_install_mode >/dev/null
  prepare_update_settings
  assert_eq "$MODE" 'docker'
  assert_eq "$HTTP_PORT" '8080'
  assert_eq "$SITE_ADDRESS" ':80'
  assert_eq "$POSTGRES_PASSWORD" 'database-secret-value'
  assert_eq "$CONTROL_ADMIN_PASSWORD" 'administrator-secret'
  assert_eq "$POSTGRES_IMAGE" 'docker.1ms.run/postgres:17-alpine'
  assert_eq "$CONTROL_REGISTRY" 'ghcr.1ms.run'
}

test_legacy_custom_registry_is_preserved() {
  source_installer
  local install="$TEST_TMP/legacy-private"
  mkdir -p "$install"
  write_legacy_env "$install" ':80' '80' 'private.example/control' 'private.example/postgres:17'
  cp "$ROOT/deploy/compose.yml" "$install/compose.yml"
  INSTALL_DIR="$install"
  detect_install_mode >/dev/null
  prepare_update_settings
  assert_eq "$CONTROL_REGISTRY" 'private.example/control'
  assert_eq "$POSTGRES_IMAGE" 'private.example/postgres:17'
  assert_eq "$HTTP_PORT" '80'
}

test_legacy_native_detection() {
  source_installer
  local install="$TEST_TMP/legacy-native"
  mkdir -p "$install/server" "$install/systemd"
  write_legacy_env "$install" ':8080' '8080'
  INSTALL_DIR="$install"
  detect_install_mode >/dev/null
  assert_eq "$UPGRADE" '1'
  assert_eq "$MODE" 'native'
  prepare_update_settings
  assert_eq "$SITE_ADDRESS" ':8080'
}

test_new_native_is_rejected() {
  source_installer
  local rc output
  NATIVE=1
  set +e
  output="$(reject_new_native_install 2>&1)"
  rc=$?
  set -e
  assert_eq "$rc" '2'
  assert_contains "$output" '暂时关闭'
}

test_same_version_and_partial_directory_detection() {
  source_installer
  local install="$TEST_TMP/same-version" partial="$TEST_TMP/partial"
  mkdir -p "$install" "$partial/server" "$partial/systemd"
  write_legacy_env "$install" ':80' '80'
  cp "$ROOT/deploy/compose.yml" "$install/compose.yml"
  INSTALL_DIR="$install"
  detect_install_mode >/dev/null
  assert_eq "$UPGRADE" '1'
  assert_eq "$CONTROL_VERSION" 'control-v0.1.1'

  INSTALL_DIR="$partial"
  clear_managed_env
  detect_install_mode
  assert_eq "$UPGRADE" '0'
  assert_eq "$MODE" ''
}

test_interrupt_exit_category() {
  source_installer
  local rc
  set +e
  ( on_signal ) >/dev/null 2>&1
  rc=$?
  set -e
  assert_eq "$rc" '130'
}

test_empty_download_is_rejected() {
  source_installer
  local bin="$TEST_TMP/empty-download-bin" destination="$TEST_TMP/empty-download" rc
  make_fake "$bin" curl <<'EOF'
#!/bin/sh
exit 0
EOF
  set +e
  ( GITHUB_ACCELERATE=0 PATH="$bin:$ORIGINAL_PATH" download_github_url 'https://github.com/ExamAware/empty' "$destination" >/dev/null 2>&1 )
  rc=$?
  set -e
  assert_eq "$rc" '1'
  [[ ! -e "$destination" && ! -e "${destination}.part" ]]
}

test_automatic_images_all_fail() {
  source_installer
  local bin="$TEST_TMP/pull-all-fail-bin" count="$TEST_TMP/pull-all-fail-count" candidate="$TEST_TMP/pull-all-fail-candidate" rc
  make_fake "$bin" docker <<'EOF'
#!/bin/sh
case " $* " in
  *' pull '*) echo x >> "$PULL_COUNT"; exit 1 ;;
  *) exit 0 ;;
esac
EOF
  POSTGRES_IMAGE="$DOMESTIC_POSTGRES_IMAGE"; CONTROL_REGISTRY="$DOMESTIC_CONTROL_REGISTRY"
  POSTGRES_IMAGE_EXPLICIT=0; CONTROL_REGISTRY_EXPLICIT=0
  prepare_pull_fixture "$candidate"
  set +e
  ( PATH="$bin:$ORIGINAL_PATH" PULL_COUNT="$count" pull_candidate_images >/dev/null 2>&1 )
  rc=$?
  set -e
  assert_eq "$rc" '4'
  assert_eq "$(wc -l < "$count" | tr -d ' ')" '2'
}

test_start_failure_does_not_delete_volume() {
  source_installer
  local bin="$TEST_TMP/start-fail-bin" log_file="$TEST_TMP/start-fail.log" candidate="$TEST_TMP/start-fail-candidate" live="$TEST_TMP/start-fail-live" rc
  make_fake "$bin" docker <<'EOF'
#!/bin/sh
printf '%s\n' "$*" >> "$DOCKER_LOG"
case " $* " in *' up '*) exit 1;; *) exit 0;; esac
EOF
  POSTGRES_IMAGE="$DOMESTIC_POSTGRES_IMAGE"; CONTROL_REGISTRY="$DOMESTIC_CONTROL_REGISTRY"
  prepare_pull_fixture "$candidate"
  printf '#!/bin/sh\n' > "$candidate/install.sh"
  printf '#!/bin/sh\n' > "$candidate/backup.sh"
  mkdir -p "$live"
  INSTALL_DIR="$live"; DOCKER_SUPPORTS_WAIT=0
  set +e
  PATH="$bin:$ORIGINAL_PATH" DOCKER_LOG="$log_file" activate_docker_candidate >/dev/null 2>&1
  rc=$?
  set -e
  assert_eq "$rc" '1'
  assert_not_contains "$(cat "$log_file")" 'down -v'
  assert_contains "$(cat "$live/compose.yml")" 'control-postgres-data:/var/lib/postgresql/data'
}

printf 'TAP version 13\n'
run_case 'missing Docker prints exact domestic command without apt/native fallback' test_missing_docker
run_case 'missing Compose v2 is a prerequisite error' test_missing_compose
run_case 'unavailable daemon preserves docker info diagnostics' test_daemon_unavailable
run_case 'TTY wizard confirms passwords and cancellation is clean' test_wizard_confirm_and_cancel
run_case 'noninteractive mode never reads stdin and uses defaults' test_noninteractive_never_reads_stdin
run_case 'username password and port boundaries match contracts' test_admin_and_port_boundaries
run_case '8219 listener is reported with owner evidence' test_port_occupancy
run_case 'domain validation requires free 80 and 443' test_domain_ports_and_origin
run_case 'domestic release mirrors precede official GitHub' test_download_mirror_order
run_case 'explicit mirror remains when built-ins are disabled' test_explicit_mirror_with_acceleration_disabled
run_case 'download errors distinguish DNS TLS HTTP and timeout' test_download_error_classes
run_case 'empty download never becomes a candidate artifact' test_empty_download_is_rejected
run_case 'domestic image defaults and explicit private overrides work' test_image_defaults_and_overrides
run_case 'automatic image pull failure falls back exactly once' test_automatic_image_fallback
run_case 'automatic domestic and official image failures stop activation' test_automatic_images_all_fail
run_case 'custom image failure never falls back' test_custom_image_never_falls_back
run_case 'checksum bad tar and traversal fail before extraction' test_checksum_and_archive_failures
run_case 'runtime Compose removes 443 only without a domain' test_runtime_compose_ports
run_case 'Compose config failure uses configuration exit category' test_compose_stage_failures
run_case 'start failure never deletes the named database volume' test_start_failure_does_not_delete_volume
run_case 'health requires status ok and database ok' test_health_success_and_failure
run_case 'installer output excludes administrator database and auth secrets' test_logs_do_not_print_secrets
run_case 'backup failure leaves no partial success file' test_backup_failure_removes_partial
run_case 'legacy Docker update preserves secrets port and volume contract' test_legacy_docker_migration_preserves_state
run_case 'legacy private registries are never rewritten' test_legacy_custom_registry_is_preserved
run_case 'legacy native installation remains updateable' test_legacy_native_detection
run_case 'new NATIVE installation is explicitly disabled' test_new_native_is_rejected
run_case 'same-version rerun updates while partial directories stay new' test_same_version_and_partial_directory_detection
run_case 'interrupts use exit category 130' test_interrupt_exit_category

if (( FAIL_COUNT > 0 )); then
  printf '%d installer tests failed\n' "$FAIL_COUNT" >&2
  exit 1
fi
printf '1..%d\n' "$PASS_COUNT"
