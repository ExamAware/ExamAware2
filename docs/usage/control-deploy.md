# 集控中心部署

ExamAware 集控中心由控制台、控制服务与 PostgreSQL 组成。`ExamAware2` 源码仓库的发布流水线会在 `control-v*` 标签创建时自动生成 GHCR 镜像，并将安装包发布到独立的 [`ExamAware/ExamAware-Control`](https://github.com/ExamAware/ExamAware-Control) 仓库；部署服务器无需克隆源码仓库，也无需手动安装项目依赖。

## 系统要求

- Ubuntu 22.04 LTS 或更高版本，或当前 Debian LTS
- `root` 权限或可用的 `sudo`
- 默认需要访问系统 apt 源、GitHub Releases 和 GHCR
- 对外仅开放 80/TCP；配置域名时同时开放 443/TCP

## 默认安装

下载安装脚本后直接执行：

```bash
curl -fsSL https://github.com/ExamAware/ExamAware-Control/releases/latest/download/install.sh -o /tmp/examaware-control-install.sh && bash /tmp/examaware-control-install.sh
```

脚本在非 `root` 用户下会自动通过 `sudo` 提权。默认优先使用 Docker Compose v2；服务器未安装 Docker 时，脚本自动通过 apt 安装并启用 `docker.io` 与 `docker-compose-v2`。安装过程会自动完成以下工作：

1. 生成 PostgreSQL 密码、认证密钥、设备凭据 pepper 和管理员密码。
2. 启动 PostgreSQL、控制服务和 Caddy。
3. 执行全部数据库迁移并创建初始管理员。
4. 等待就绪检查通过，再打印访问地址和首次管理员密码。

配置和秘密保存在 `/opt/examaware-control/.env`，权限为 `600`。管理员密码只在首次安装时打印；请妥善保存，并在首次登录后修改。

### 国内网络加速

安装脚本会先尝试 GitHub 官方地址；失败后按顺序尝试内置的 GitHub 文件加速地址。可通过 `GITHUB_MIRROR` 指定可信的加速前缀（前缀格式与 `ghproxy` 类服务一致）：

```bash
GITHUB_MIRROR=https://ghproxy.cfd/ bash /tmp/examaware-control-install.sh
```

如果 GitHub 官方地址无法下载初始脚本，可直接通过可信镜像获取：

```bash
curl -fsSL https://ghproxy.cfd/https://github.com/ExamAware/ExamAware-Control/releases/latest/download/install.sh -o /tmp/examaware-control-install.sh
```

设置 `GITHUB_ACCELERATE=0` 可禁用内置加速地址；`GITHUB_MIRRORS` 可传入以空格分隔的自定义地址列表。第三方加速服务会经手发布包，只应使用组织信任的服务。

Docker 路径可选用[毫秒镜像](https://1ms.run/guide)加速 Docker Hub 与 GHCR：

```bash
DOCKER_ACCELERATE=1 bash /tmp/examaware-control-install.sh
```

该选项将 PostgreSQL 切换为 `docker.1ms.run/postgres:17-alpine`，将控制服务和控制台切换为 `ghcr.1ms.run/examaware/...`。也可在安装前分别设置 `POSTGRES_IMAGE` 和 `CONTROL_REGISTRY` 使用组织自己的镜像仓库。

### 使用域名和 HTTPS

域名应先解析到服务器，再执行：

```bash
DOMAIN=control.example.com bash /tmp/examaware-control-install.sh
```

Caddy 会自动申请 HTTPS 证书。`BETTER_AUTH_URL` 同时用于认证回调和设备 WebSocket 地址，因此必须与用户及设备实际访问的外部源一致。

### 自定义 HTTP 端口

无域名部署可覆盖 HTTP 端口：

```bash
HTTP_PORT=8080 bash /tmp/examaware-control-install.sh
```

此时应放行对应端口。控制服务的 3100 端口和 PostgreSQL 的 5432 端口不应对外开放。

## 强制原生 systemd 部署

组织策略禁止 Docker 时，使用 `NATIVE=1`：

```bash
NATIVE=1 bash /tmp/examaware-control-install.sh
```

原生路径通过 apt 安装 PostgreSQL、Node.js 22 和 Caddy，并创建 `examaware-control` 系统用户以及 `examaware-control-server.service`。如果 Docker 自动安装失败，默认安装流程也会回退到该路径。

已有 PostgreSQL 时可直接提供连接地址，脚本会跳过 PostgreSQL 安装和建库：

```bash
NATIVE=1 DATABASE_URL='postgres://user:password@127.0.0.1:5432/examaware_control' bash /tmp/examaware-control-install.sh
```

连接用户必须有执行发布包内 Drizzle 迁移的权限。

## 升级与指定版本

升级到最新版本：

```bash
bash /opt/examaware-control/install.sh
```

安装指定版本：

```bash
bash /opt/examaware-control/install.sh control-v0.2.0
```

升级会保留现有 `.env` 中的密码、密钥、管理员信息和站点配置，仅更新运行文件与目标版本。Docker 路径拉取新镜像并重建服务；原生路径覆盖发布文件并重启 systemd 服务。

## 备份

执行发布包内的备份工具：

```bash
/opt/examaware-control/backup.sh
```

备份写入 `/opt/examaware-control/backups/control-YYYYMMDD-HHMMSS.sql`。Docker 部署通过容器内 `pg_dump` 导出；原生部署连接本机 PostgreSQL 导出。升级前建议先备份。

## 防火墙

- 无域名、默认端口：开放 80/TCP。
- 使用域名：开放 80/TCP 和 443/TCP。
- 使用 `HTTP_PORT`：开放自定义的 HTTP 端口。
- 不开放 3100/TCP 或 5432/TCP。

## 常见问题

### 无外网或仅允许内网镜像

发布物不内置 Docker、Node.js 或 Caddy 二进制。Docker 路径需要可用的 apt 镜像，并需要从 GHCR 或配置的加速仓库拉取镜像；离线环境应由管理员预先通过 `docker save`/`docker load` 导入 `control-server`、`control-console` 和 `postgres:17-alpine` 镜像，或配置内网镜像仓库。原生路径需要可用的内网 apt、NodeSource 和 Cloudsmith/Caddy 镜像。安装包本身也应从 GitHub Release 下载后转存到内网。

### Docker 已安装但仍回退到原生路径

脚本要求 `docker compose` v2 和可正常连接的 Docker daemon。只有 `docker-compose` v1 不满足要求。确认当前用户可执行：

```bash
docker compose version
docker info
```

### 80 或 443 端口已被占用

停止占用端口的服务，或在无域名模式下通过 `HTTP_PORT` 使用其他 HTTP 端口。域名自动 HTTPS 固定需要 443/TCP。原生部署会接管 `/etc/caddy/Caddyfile`；已有自管 Caddy 时，应先合并反向代理配置再部署。

### 查看服务状态

Docker 路径：

```bash
docker compose -f /opt/examaware-control/compose.yml ps
docker compose -f /opt/examaware-control/compose.yml logs
```

原生路径：

```bash
systemctl status examaware-control-server caddy
journalctl -u examaware-control-server -u caddy
```

就绪接口为 `GET /api/health/ready`，成功响应包含 `"status":"ok"` 与 `"database":"ok"`。
