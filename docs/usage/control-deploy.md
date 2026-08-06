# 集控中心部署

ExamAware 集控中心由控制台、控制服务和 PostgreSQL 组成。服务器只需要发布包、Docker Engine 和 Docker Compose v2；无需克隆源码仓库。

当前发布版本：`control-v0.1.2`。

## 系统要求

- Ubuntu 22.04/24.04、Debian 12 或兼容 Linux
- `x86_64`/`amd64` 或 `aarch64`/`arm64`
- `root` 权限或可用的 `sudo`
- `curl`、`tar`、`mktemp` 和 `sha256sum`（或 `shasum -a 256`）
- Docker Engine 与 Docker Compose v2（`docker compose`）
- 无域名部署放行所选 HTTP 端口；域名部署放行 80/TCP 与 443/TCP

新的原生 systemd 首次安装暂时关闭。安装器只保留对上一版原生安装的无交互更新能力。

<!-- TODO: 恢复并重新验证原生 systemd 首次安装流程 -->

## 首次安装

先将 standalone 安装器下载到本地文件。国内代理优先，代理失败时再回退 GitHub 官方源；安装 ExamAware 本身不使用未经检查的 `curl | bash`：

```bash
if ! curl -fL --retry 2 \
  https://ghproxy.cfd/https://github.com/ExamAware/ExamAware-Control/releases/latest/download/install.sh \
  -o /tmp/examaware-control-install.sh; then
  curl -fL --retry 2 \
    https://github.com/ExamAware/ExamAware-Control/releases/latest/download/install.sh \
    -o /tmp/examaware-control-install.sh
fi
bash /tmp/examaware-control-install.sh
```

安装器会下载同版本归档与 `SHA256SUMS`，验证摘要、gzip/tar 格式、成员路径和必需文件，再从候选目录激活。摘要用于发现传输损坏；它不是发布签名，不能抵御镜像与摘要同时被篡改。

### Docker 尚未安装

安装器不会自动安装 Docker、不会运行 apt，也不会回退到原生部署。它会以退出码 `2` 停止并显示以下国内安装命令：

```bash
bash <(curl -sSL https://linuxmirrors.cn/docker.sh)
```

由管理员检查并执行该命令。完成后确认以下命令成功，再重新运行 ExamAware 安装器：

```bash
docker compose version
docker info
```

只有 `docker-compose` v1 不满足要求。`docker info` 失败时，systemd 主机可检查 `systemctl status docker` 并按需执行 `systemctl start docker`；其他平台应启动 Docker daemon 并检查 Docker socket 权限。

### 交互向导

安装器直接通过 `/dev/tty` 收集：

1. 管理员用户名，默认 `admin`；保存前 trim 并转为小写。
2. 管理员显示名，默认 `系统管理员`。
3. 12–128 字符管理员密码及隐藏确认。
4. 无域名 HTTP 端口，默认 `8219`。

用户名只能包含 3–32 位字母、数字、下划线或点。配置值不能包含单引号、换行或控制字符。端口必须是 `1..65535` 的 ASCII 十进制整数；可以主动选择 80，但默认不占用 80。确认摘要时只有 `y`/`yes` 会继续，其他输入或 EOF 会成功取消，且不会创建安装目录。

无域名时默认访问地址类似：

```text
http://192.0.2.10:8219
```

安装器优先使用 `hostname -I` 的首个非 loopback 地址，再尝试 `ip route get 1.1.1.1` 的 `src` 地址。无法可靠识别时会要求明确输入访问主机，绝不静默使用 `127.0.0.1`。

### 非交互安装

没有 `/dev/tty` 或设置 `EXAMAWARE_NONINTERACTIVE=1` 时，安装器不读取 stdin。用户名、显示名和端口仍分别默认 `admin`、`系统管理员`、`8219`；密码未提供时生成 18 位字母数字密码，并且只在健康检查成功后显示一次。

建议显式指定远程设备实际访问的 origin：

```bash
EXAMAWARE_NONINTERACTIVE=1 \
BETTER_AUTH_URL='http://192.0.2.10:8219' \
CONTROL_ADMIN_USERNAME='school_admin' \
CONTROL_ADMIN_NAME='学校管理员' \
CONTROL_ADMIN_PASSWORD='ExamAware!2026' \
HTTP_PORT='8219' \
bash /tmp/examaware-control-install.sh
```

`BETTER_AUTH_URL` 必须是没有 path、query 或 fragment 的精确 HTTP(S) origin。非交互模式无法识别外部地址且未设置该变量时会在下载前退出。

### 域名与自动 HTTPS

域名必须已解析到服务器，且不能包含 scheme、路径或端口：

```bash
DOMAIN='control.example.com' bash /tmp/examaware-control-install.sh
```

域名模式跳过自定义端口提示，固定需要空闲的 80/TCP 与 443/TCP。Caddy 自动申请 HTTPS 证书，`BETTER_AUTH_URL` 默认为 `https://control.example.com`。无域名运行时不会映射宿主 443/TCP。

## 国内镜像优先与显式覆盖

首次安装默认使用：

```text
POSTGRES_IMAGE=docker.1ms.run/postgres:17-alpine
CONTROL_REGISTRY=ghcr.1ms.run
```

国内自动默认拉取失败时，安装器只回退一次 `postgres:17-alpine`/`ghcr.io`，并将实际成功值持久化。禁用 Docker 拉取代理：

```bash
DOCKER_ACCELERATE=0 bash /tmp/examaware-control-install.sh
```

组织私库始终优先，失败时不会擅自换源：

```bash
POSTGRES_IMAGE='registry.example.com/postgres:17-alpine' \
CONTROL_REGISTRY='registry.example.com/examaware' \
bash /tmp/examaware-control-install.sh
```

Release 下载顺序是：显式 `GITHUB_MIRROR`；显式 `GITHUB_MIRRORS` 或内置国内列表；GitHub 官方源。`GITHUB_ACCELERATE=0` 只禁用内置列表，显式镜像仍会尝试：

```bash
GITHUB_MIRROR='https://trusted-proxy.example/' bash /tmp/examaware-control-install.sh
GITHUB_ACCELERATE=0 bash /tmp/examaware-control-install.sh
```

## 更新与上一版兼容

上一版安装首次跨版本更新时，首选重新下载 Release 的 standalone `install.sh`，以立即获得新的模式识别、备份、候选校验和回滚逻辑：

```bash
if ! curl -fL --retry 2 \
  https://ghproxy.cfd/https://github.com/ExamAware/ExamAware-Control/releases/latest/download/install.sh \
  -o /tmp/examaware-control-install.sh; then
  curl -fL --retry 2 \
    https://github.com/ExamAware/ExamAware-Control/releases/latest/download/install.sh \
    -o /tmp/examaware-control-install.sh
fi
bash /tmp/examaware-control-install.sh
```

也可指定本版本：

```bash
bash /tmp/examaware-control-install.sh control-v0.1.2
```

为兼容上一版归档布局，原命令仍可完成一次传统更新并落盘新脚本：

```bash
bash /opt/examaware-control/install.sh
```

只要 `${INSTALL_DIR}/.env` 存在，安装器就把目录视为更新候选；损坏或缺项会停止，绝不会降级为首次安装。旧 `.env` 没有模式时：根目录 `compose.yml` 唯一识别为 Docker；`server/` 与 `systemd/` 唯一识别为原生。两类同时存在或都不存在会报告冲突证据并退出。

更新不会进入管理员/端口向导，不重新生成秘密，也不接受一次性环境变量切换安装模式。密码、认证密钥、设备 pepper、数据库配置、管理员配置、端口、域名和自定义镜像均保留。同版本重跑也走完整更新并收敛。

检测到的上一版原生安装仍可执行无交互更新、备份、重启和健康检查；新目录使用 `NATIVE=1` 会以退出码 `2` 明确拒绝。

## 备份与回滚边界

手动备份：

```bash
/opt/examaware-control/backup.sh
```

备份写入：

```text
/opt/examaware-control/backups/control-YYYYMMDD-HHMMSS.sql
```

更新会在拉取镜像或替换文件前自动创建非空 SQL 备份；失败会删除 `.part` 并停止。候选归档、Compose 配置和镜像全部通过后才替换 live 文件。启动或健康检查失败时，安装器恢复旧应用与配置并尝试拉起旧版本；失败的 rollback 快照会保留并打印路径。

数据库迁移可能不可逆。自动回滚只恢复应用和配置，不会自动覆盖数据库；需要数据库级恢复时，使用安装器打印的升级前 SQL 备份人工处理。首次安装失败会停止本次创建的 ExamAware 容器，但保留命名 PostgreSQL volume。

## 服务、状态与防火墙

Docker 状态与日志统一使用运行时 Compose 文件：

```bash
docker compose \
  --env-file /opt/examaware-control/.env \
  -f /opt/examaware-control/compose.runtime.yml ps -a

docker compose \
  --env-file /opt/examaware-control/.env \
  -f /opt/examaware-control/compose.runtime.yml logs --tail 200
```

原生旧安装：

```bash
systemctl status --no-pager examaware-control-server caddy
journalctl -u examaware-control-server -u caddy -n 200 --no-pager
```

就绪接口为 `GET /api/health/ready`。成功必须同时包含 `"status":"ok"` 与 `"database":"ok"`。

防火墙：

- 无域名默认安装：放行 `8219/TCP`。
- 无域名自定义端口：放行实际 `HTTP_PORT/TCP`。
- 域名自动 HTTPS：放行 `80/TCP` 和 `443/TCP`。
- 不对外开放 `3100/TCP` 或 `5432/TCP`。

## 分阶段排错

安装器日志默认先写入权限 `600` 的 `/tmp/examaware-control-install-<pid>.log`。确认安装或识别更新后移到 `/opt/examaware-control/install.log`。错误包含阶段和固定退出类别：

- `2`：系统前置、现有配置、管理员、origin、端口或 Compose 配置错误。
- `3`：Release 下载、空响应、SHA-256、归档、磁盘写入或升级前备份错误。
- `4`：镜像拉取、容器/服务启动或激活错误。
- `5`：连接、HTTP、JSON 字段、数据库就绪或 120 秒健康检查超时。
- `130`：用户中断。

下载错误会区分 DNS、TLS、HTTP 与超时，并给出 `GITHUB_MIRROR`/`GITHUB_ACCELERATE=0` 恢复入口。镜像错误会区分自动国内默认和显式私库。Docker 健康失败附带 Compose `ps -a` 与 PostgreSQL、server、Caddy 各最后 200 行日志；原生失败附带 systemd 状态和 journal。诊断命令失败不会覆盖原退出码。
