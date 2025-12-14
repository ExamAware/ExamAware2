import type { Disposer } from '../runtime/disposable'
import type { ServiceProvideOptions, ServiceWatcherMeta } from '../../shared/services/registry'

/**
 * 插件状态枚举
 * Plugin status enumeration
 */
export type PluginStatus = 'idle' | 'loading' | 'active' | 'disabled' | 'error'

/**
 * 插件日志记录器接口
 * Plugin logger interface
 */
export interface PluginLogger {
  info: (...args: any[]) => void
  warn: (...args: any[]) => void
  error: (...args: any[]) => void
  debug?: (...args: any[]) => void
}

/**
 * 插件偏好设置存储接口
 * Plugin preference store interface
 */
export interface PluginPreferenceStore {
  isEnabled(name: string): boolean
  setEnabled(name: string, enabled: boolean): Promise<void> | void
  getConfig<T = Record<string, any>>(name: string): T | undefined
  setConfig<T = Record<string, any>>(name: string, config: T): Promise<void> | void
}

/**
 * 插件入口点信息
 * Plugin entry point information
 */
export interface PluginEntryPoint {
  file: string
  format: 'esm' | 'cjs'
}

/**
 * ExamAware插件清单配置（在package.json的examaware字段中）
 * ExamAware plugin manifest configuration (in package.json examaware field)
 */
export interface ExamAwarePluginManifest {
  displayName?: string
  description?: string
  targets?: {
    main?: string
    renderer?: string
  }
  dependencies?: string[]
  services?: {
    provide?: string[]
    inject?: string[]
  }
  settings?: {
    namespace?: string
    schema?: string
  }
  enabled?: boolean
}

/**
 * 解析后的插件清单
 * Resolved plugin manifest
 */
export interface ResolvedPluginManifest {
  name: string
  version: string
  displayName?: string
  description?: string
  targets: {
    main?: PluginEntryPoint
    renderer?: PluginEntryPoint
  }
  dependencies: string[]
  services: {
    provide: string[]
    inject: string[]
  }
  settings: {
    namespace: string
    schema?: string
  }
  rootDir: string
  packageJsonPath: string
  enabled: boolean
  hash?: string
  mtime?: number
}

/**
 * 插件记录，包含运行时状态
 * Plugin record, containing runtime state
 */
export interface PluginRecord {
  name: string
  manifest: ResolvedPluginManifest
  status: PluginStatus
  error?: PluginError
  disposer?: Disposer | (() => Promise<void>)
}

/**
 * 插件错误信息
 * Plugin error information
 */
export interface PluginError {
  code: 'manifest-error' | 'missing-service' | 'cycle' | 'load-failed'
  message: string
  details?: any
}

/**
 * 插件主机选项
 * Plugin host options
 */
export interface PluginHostOptions {
  ctx: MainContext
  pluginDirectories: string[]
  preferences?: PluginPreferenceStore
  logger?: PluginLogger
}

/**
 * 插件列表项，用于UI显示
 * Plugin list item, for UI display
 */
export interface PluginListItem {
  name: string
  displayName?: string
  description?: string
  version: string
  status: PluginStatus
  enabled: boolean
  provides: string[]
  injects: string[]
  hasRendererEntry?: boolean
  error?: PluginError
}

/**
 * 插件依赖图节点
 * Plugin dependency graph node
 */
export interface PluginGraphNode {
  name: string
  provides: string[]
  injects: string[]
}

/**
 * 插件依赖图构建结果
 * Plugin dependency graph build result
 */
export interface PluginGraphResult {
  order: string[]
  missingServices: MissingServiceDependency[]
  cycles: string[][]
}

/**
 * 缺失的服务依赖
 * Missing service dependency
 */
export interface MissingServiceDependency {
  plugin: string
  service: string
}

/**
 * 插件模块导出格式
 * Plugin module export format
 */
export interface PluginModuleExport {
  default?: PluginFactory | { apply?: PluginFactory }
  apply?: PluginFactory
}

/**
 * 插件工厂函数类型
 * Plugin factory function type
 */
export type PluginFactory = (
  ctx: PluginRuntimeContext,
  config?: Record<string, any>
) => void | Disposer | Promise<void | Disposer>

/**
 * 插件运行时上下文
 * Plugin runtime context
 */
export interface PluginRuntimeContext {
  /**
   * 当前插件运行在哪个进程
   */
  app: 'main' | 'renderer'
  logger: PluginLogger
  config: Record<string, any>
  settings: PluginSettingsAPI
  effect: (fn: () => void | Disposer | Promise<void | Disposer>) => void
  services: ServiceAPI
  /**
   * main 进程特有能力：窗口广播与 IPC 注册
   */
  windows?: {
    broadcast: (channel: string, payload?: any) => void
  }
  ipc?: {
    registerChannel: (
      channel: string,
      handler: (event: Electron.IpcMainInvokeEvent, ...args: any[]) => any
    ) => Disposer
    invokeRenderer?: (channel: string, payload?: any) => void
  }
  /**
   * renderer 进程可选能力：向外暴露 Desktop API（避免循环依赖，保持为 unknown）
   */
  desktopApi?: unknown
}

/**
 * 服务API接口
 * Service API interface
 */
export interface ServiceAPI {
  provide: (name: string, value: unknown, options?: ServiceProvideOptions) => Disposer
  inject: <T = unknown>(name: string, owner?: string) => T
  injectAsync?: <T = unknown>(name: string, owner?: string) => Promise<T>
  when?: <T = unknown>(
    name: string,
    cb: (svc: T, owner: string, meta: ServiceWatcherMeta) => void | (() => void)
  ) => Disposer
  has: (name: string, owner?: string) => boolean
}

export interface PluginSettingsAPI {
  /**
   * 返回当前完整配置的浅拷贝
   */
  all: () => Record<string, any>
  /**
   * 支持 key path（a.b.c），未填写 key 时返回全量配置
   */
  get: <T = unknown>(key?: string, def?: T) => T
  set: <T = unknown>(key: string, value: T) => Promise<void>
  patch: (partial: Record<string, any>) => Promise<void>
  reset: () => Promise<void>
  onChange: (listener: (config: Record<string, any>) => void) => Disposer
}

export type {
  ServiceProviderRecord,
  ServiceProvideOptions,
  ServiceWatcherMeta
} from '../../shared/services/registry'
