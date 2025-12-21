// 服务令牌定义，用于依赖注入
// 使用Symbol确保唯一性，避免字符串冲突

// 插件运行时上下文令牌
export const PluginContextToken = Symbol.for('examaware.hosting.ctx')

// 插件日志器令牌
export const PluginLoggerToken = Symbol.for('examaware.hosting.logger')

// 插件设置API令牌
export const PluginSettingsToken = Symbol.for('examaware.hosting.settings')

// Desktop API令牌
export const DesktopApiToken = Symbol.for('examaware.hosting.desktopApi')

// 应用生命周期管理器令牌
export const HostApplicationLifetimeToken = Symbol.for('examaware.hosting.lifetime')
