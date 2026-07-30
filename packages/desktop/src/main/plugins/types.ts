import type { PluginLogger, PluginRuntimeContext, ServiceAPI } from './hosting'
import type { Disposer } from '../runtime/disposable'
import type { MainContext } from '../runtime/mainContext'
import type { PluginError, PluginStatus } from '../../shared/types/plugins'
import type {
  MainPluginContext,
  PluginEntry,
  PluginPermission,
  PluginWindowKind,
  RendererPluginContext
} from '@dsz-examaware/plugin-sdk'

export type { PluginLogger, PluginRuntimeContext, PluginSettingsAPI, ServiceAPI } from './hosting'
export type {
  PluginError,
  PluginInstallResult,
  PluginListItem,
  PluginStatus,
  PluginStatePayload,
  RegistryInstallOptions,
  RegistryInstallProgress,
  RegistryInstallRequest,
  RegistryInstallResult,
  RegistryInstallStep,
  RegistryReadmeRequest,
  RegistryReadmeResult
} from '../../shared/types/plugins'

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
  apiVersion?: 1 | 2
  displayName?: string
  description?: string
  targets?: {
    main?: string
    renderer?: string
  }
  engines?: {
    desktop?: string
    sdk?: string
  }
  dependencies?: string[]
  permissions?: PluginPermission[]
  activation?: {
    rendererWindows?: PluginWindowKind[]
  }
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
  apiVersion: 1 | 2
  permissions: PluginPermission[]
  activation: {
    rendererWindows: PluginWindowKind[]
  }
  targets: {
    main?: PluginEntryPoint
    renderer?: PluginEntryPoint
  }
  engines?: {
    desktop?: string
    sdk?: string
  }
  sdkVersion?: string
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
  default?:
    | PluginFactory
    | PluginEntry<MainPluginContext>
    | PluginEntry<RendererPluginContext>
    | { apply?: PluginFactory }
  apply?: PluginFactory
}

/**
 * 插件工厂函数类型
 * Plugin factory function type
 */
export type PluginFactory = (
  ctx: PluginRuntimeContext | MainPluginContext | RendererPluginContext,
  config?: Record<string, any>
) => void | Disposer | Promise<void | Disposer>

export interface PluginPreferenceStore {
  isEnabled(name: string): boolean
  setEnabled(name: string, enabled: boolean): Promise<void> | void
  getConfig<T = Record<string, any>>(name: string): T | undefined
  setConfig<T = Record<string, any>>(name: string, config: T): Promise<void> | void
  remove?(name: string): Promise<void> | void
}

export type ServiceAPIExtended = ServiceAPI

export type {
  ServiceProviderRecord,
  ServiceProvideOptions,
  ServiceWatcherMeta
} from '../../shared/services/registry'
export type {
  PluginIndexPayload,
  PluginIndexItem,
  PluginIndexVersionEntry,
  PluginSourceFetchRequest,
  PluginSourceFetchResult
} from '../../shared/pluginSource'
