# 退出放映密码（密码 + TOTP）设计文档

日期：2026-04-04

## 背景与目标

ExamAware 桌面端播放器需要在“长按退出放映”时进行认证。要求：

- 支持普通密码与 TOTP，两者任选其一即可通过。
- 允许仅 TOTP，不要求密码。
- 配置入口在编辑器左侧独立“安全”面板。
- 退出认证 UI 为全屏模糊遮罩、极简文字、透明输入条与数字键盘。
- 档案可跨设备复制使用；安全配置随档案保存。
- 防篡改聚焦“安全字段被删除/修改”，不阻止正常编辑内容。
- 桌面端独享（Web 端播放器不强制认证）。
- 需要高度抽象，便于未来新增认证方式（手势等）与插件扩展。

非目标：

- 不追求对抗逆向的强安全；开源场景不引入内置 secret。
- 不校验整份档案内容的完整性，仅关注安全设置区域。

## 方案综述

- **有密码时**：使用密码派生密钥（PBKDF2）对安全配置签名（HMAC）并可加密 TOTP 密钥。
- **仅 TOTP 时**：不做强签名，做字段缺失检测与提示；仍允许播放。
- **篡改处理**：检测到签名不匹配或字段异常时提示一次并禁用退出保护（本次会话）。

## 架构与模块边界

### 1) 安全配置模型（core）

- 在 `ExamConfig` 增加 `security` 字段。
- 模型保持与播放器/编辑器共享，但**执行策略仅在桌面端**启用。
- `security.version` 用于未来迁移：当前为 `1`，若发现未知版本则视为不可用并提示一次。

### 2) 认证提供器层（player）

- `ExitAuthProvider` 抽象：
  - `id`, `label`, `isEnabled(config)`, `verify(input, context)`
  - `renderUnlockPanel()`（用于退出认证 UI）
  - `renderConfigPanel()`（用于设置面板）
- 提供器需将**验证逻辑**与**UI 渲染**解耦：允许仅实现验证、由宿主提供默认 UI。
- 内置实现：
  - `PasswordAuthProvider`
  - `TotpAuthProvider`
- 通过注册表/依赖注入，后续插件可追加 provider。

### 3) 退出流程（player + desktop renderer）

- 长按退出 → 触发 `exitRequest`（新事件）
- `exitRequest` 事件负载：`{ source: 'longpress', at: number }`，便于后续扩展来源与埋点。
- 桌面端播放器接管该事件：
  - 若未启用退出保护：直接退出
  - 若启用：进入认证遮罩
- 认证成功后发送 IPC `player-window-exit` 关闭窗口。

### 4) 设置面板（desktop editor）

- 在主侧边栏新增“安全”面板。
- 面板提供：
  - 退出保护开关
  - 普通密码设置与修改（修改需验证旧密码）
  - TOTP 生成与二维码链接
  - 提示签名状态与异常

## 数据结构

> 下例为目标结构，字段命名可按现有代码风格调整。

```ts
security?: {
  version: 1
  exitAuth?: {
    enabled: boolean
    methods: {
      password?: {
        enabled: boolean
        kdf: 'pbkdf2'
        iterations: number
        salt: string
        hash: string
      }
      totp?: {
        enabled: boolean
        secret: string
        secretEncrypted: boolean
        digits: 6
        period: 30
        algorithm: 'SHA1'
      }
    }
    integrity?: {
      sigVersion: 1
      sigAlg: 'hmac-sha256'
      sig: string
    }
  }
}
```

## 加密与签名规则

### 密码派生

- 使用 PBKDF2 派生密钥：`key = PBKDF2-HMAC-SHA256(password, salt, iterations, dkLen=32)`
- 默认参数：
  - `salt`：16 bytes 随机值（base64url 编码存储）
  - `iterations`：100_000
  - `dkLen`：32 bytes
- `hash` 保存为 `base64url(key)`，与 `salt/iterations` 一并保存。

### 签名（仅在有密码时）

- 用派生密钥对 `exitAuth` 关键字段计算 HMAC：
  - 包含：`enabled`、`methods.password` 元数据、`methods.totp` 元数据（不含明文 secret）
  - `sig` 存放于 `integrity`。
- **规范化序列化规则**（避免跨设备不一致）：
  - 仅签名 `exitAuth` 的白名单字段（见上）。
  - 使用稳定 JSON：对象键按字典序排序；省略 `undefined` 字段；`null` 保留。
  - 数字与布尔保持原类型，不做字符串化。
- 播放器读取时验证签名；不匹配则视为篡改。

### TOTP 密钥存储

- **有密码**：使用派生密钥加密 `secret`（AES-GCM），`secretEncrypted=true`。
- **仅 TOTP**：`secret` 明文保存，`secretEncrypted=false`。
- **AES-GCM 细节**：
  - `nonce`：12 bytes 随机值
  - `tag`：16 bytes（GCM 默认）
  - 存储格式：`base64url(nonce || ciphertext || tag)`
  - 解密时按长度切分 `nonce(12)` + `tag(16)`。

## UI/UX 设计

### 退出认证遮罩（桌面端）

- 全屏模糊遮罩 + MiSans 大标题居中。
- 下方：
  - 透明输入条（仅光标闪烁）
  - 数字键盘
  - 认证方式切换：极简文字（密码 / TOTP）
- 认证通过立即退出；失败轻量提示并清空输入。

### 设置面板（编辑器左侧）

- 入口：主侧边栏新增“安全”面板。
- 功能：
  - 开关：启用/禁用退出保护
  - 普通密码：设置/修改（修改需旧密码）
  - TOTP：生成密钥、显示二维码、复制链接
  - 状态提示：签名有效 / 篡改提示

## 退出时策略

- 任一认证方式通过即可退出。
- 检测异常时：
  - **有密码但签名不匹配**：提示一次，禁用退出保护。
  - **仅 TOTP 且字段缺失**：提示一次，禁用退出保护。
- “字段缺失”判定：`exitAuth.enabled=true` 且 `totp.enabled=true` 时，`secret` 为空/非 base32/位数不足视为缺失。
- “提示一次”仅在当前播放器会话内去重，不写回档案。

## 打印版 TOTP 页面

- 访问地址：`https://totp.ea.8693.world/?secret=<base32>&issuer=ExamAware&label=<name>`
- 页面内容：纯文本显示“当前动态解锁密码：XXXXXX”。
- 编辑器安全面板生成二维码，**打印该二维码**；老师扫码打开网页并可收藏。
- 外部站点不可用时：不影响播放器解锁，仅影响二维码便捷展示；编辑器提供“复制密钥/复制链接”的兜底。

## 兼容与限制

- Web 端播放器不执行退出认证逻辑（桌面端独享）。
- 档案可跨设备复制；仅依赖用户密码或 TOTP。
- 若用户仅启用 TOTP，则无强签名保障，仅做缺失检测。

## 错误处理与提示

- 认证失败：提示“密码错误/验证码错误”。
- 密钥解析失败：提示一次并禁用退出保护。
- 修改密码时旧密码错误：阻止修改并提示。
- TOTP 容错：允许 `±1` 个时间步（30s）偏移验证。

## 测试范围

- 认证通过/失败流程（密码、TOTP）。
- 篡改检测：修改 `security.exitAuth` 字段后进入播放器。
- 仅 TOTP 模式下的缺失字段提示。
- UI：全屏遮罩、方式切换、键盘输入交互。

## 实施里程碑

1. 定义 `security` 数据结构与序列化策略。
2. 实现密码派生、签名与 TOTP 加解密。
3. 构建认证 provider 注册体系。
4. 编辑器安全面板与二维码生成。
5. 播放器退出认证遮罩与桌面端接入。
