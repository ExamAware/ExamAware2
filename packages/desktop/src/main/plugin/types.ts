import type { PluginLogger, PluginRuntimeContext, PluginSettingsAPI, ServiceAPI } from './hosting'
import type { PluginPreferenceStore } from './preferences'
import type { Disposer } from '../runtime/disposable'
import type { ServiceProvideOptions, ServiceWatcherMeta } from '../../shared/services/registry'

export type { PluginLogger, PluginRuntimeContext, PluginSettingsAPI, ServiceAPI } from './hosting'

/**
 * 插件状态枚举
 * Plugin status enumeration
 */
export type PluginStatus = 'idle' | 'loading' | 'active' | 'disabled' | 'error'

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

export type ServiceAPIExtended = ServiceAPI

export type {
  ServiceProviderRecord,
  ServiceProvideOptions,
  ServiceWatcherMeta
} from '../../shared/services/registry'
