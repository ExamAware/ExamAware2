import { EventEmitter } from 'events'
import { BrowserWindow, ipcMain } from 'electron'
import path from 'path'
import { URLSearchParams } from 'url'
import { DisposerGroup } from '../runtime/disposable'
import { ServiceRegistry } from '../../shared/services/registry'
import type {
  PluginHostOptions,
  PluginListItem,
  PluginLogger,
  PluginRecord,
  PluginRuntimeContext,
  ResolvedPluginManifest,
  ServiceProviderRecord,
  ServiceProvideOptions,
  ServiceWatcherMeta
} from './types'
import { discoverPluginPackages } from './manifest'
import { buildPluginGraph } from './graph'
import { PluginLoader } from './loader'

type AnyRecord = Record<string, any>

function deepClone<T>(value: T): T {
  if (value == null || typeof value !== 'object') return value
  if (Array.isArray(value)) return value.map((item) => deepClone(item)) as unknown as T
  const next: AnyRecord = {}
  for (const key of Object.keys(value as AnyRecord)) {
    next[key] = deepClone((value as AnyRecord)[key])
  }
  return next as T
}

function deepGet(obj: AnyRecord, key?: string) {
  if (!key) return obj
  const segs = key.split('.')
  let cur: any = obj
  for (const seg of segs) {
    if (cur == null) return undefined
    cur = cur[seg]
  }
  return cur
}

function deepSet(obj: AnyRecord, key: string, value: any) {
  const segs = key.split('.')
  let cur: any = obj
  for (let i = 0; i < segs.length - 1; i++) {
    const seg = segs[i]
    if (typeof cur[seg] !== 'object' || cur[seg] == null) cur[seg] = {}
    cur = cur[seg]
  }
  cur[segs[segs.length - 1]] = value
}

function deepMerge(target: AnyRecord, source: AnyRecord) {
  for (const key of Object.keys(source)) {
    const value = source[key]
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      if (!target[key] || typeof target[key] !== 'object') target[key] = {}
      deepMerge(target[key], value)
    } else {
      target[key] = value
    }
  }
}

interface InternalPluginRecord extends PluginRecord {
  group: DisposerGroup
}

export interface ScanResult {
  manifests: ResolvedPluginManifest[]
}

/**
 * 插件宿主类，负责扫描、加载、卸载和管理插件。
 * 支持依赖解析、状态管理和服务注册。
 */
export class PluginHost extends EventEmitter {
  private records = new Map<string, InternalPluginRecord>()
  private loader = new PluginLoader()
  private services: ServiceRegistry
  private configCache = new Map<string, Record<string, any>>()
  private configWatchers = new Map<string, Set<(config: Record<string, any>) => void>>()
  private channelPrefix = 'plugin'

  constructor(private options: PluginHostOptions) {
    super()
    this.services = new ServiceRegistry(() => this.broadcastState(), this.logger)
  }

  get logger() {
    return (
      this.options.logger ?? {
        info: console.log,
        warn: console.warn,
        error: console.error,
        debug: console.debug
      }
    )
  }

  /**
   * 扫描插件目录，解析清单并更新记录。
   * @returns 扫描结果，包含解析的清单
   */
  async scan(): Promise<ScanResult> {
    const manifests = await discoverPluginPackages(this.options.pluginDirectories)
    for (const manifest of manifests) {
      manifest.enabled = this.resolveEnabled(manifest)
      if (!manifest.displayName) {
        manifest.displayName = manifest.name
      }
    }

    const next = new Map<string, InternalPluginRecord>()
    for (const manifest of manifests) {
      const existing = this.records.get(manifest.name)
      const group = existing?.group ?? new DisposerGroup()
      next.set(manifest.name, {
        name: manifest.name,
        manifest,
        status: manifest.enabled ? (existing?.status ?? 'idle') : 'disabled',
        error: existing?.error,
        disposer: existing?.disposer,
        group
      })
    }
    this.records = next
    this.emit('scan', this.list())
    this.broadcastState()
    return { manifests }
  }

  /**
   * 获取插件列表，用于显示和管理。
   * @returns 插件列表项数组
   */
  list(): PluginListItem[] {
    return Array.from(this.records.values()).map((record) => ({
      name: record.name,
      displayName: record.manifest.displayName,
      description: record.manifest.description,
      version: record.manifest.version,
      status: record.status,
      enabled: record.manifest.enabled,
      provides: record.manifest.services.provide,
      injects: record.manifest.services.inject,
      hasRendererEntry: Boolean(record.manifest.targets.renderer),
      error: record.error
    }))
  }

  /**
   * 加载所有启用的插件，按照依赖顺序。
   */
  async loadAll() {
    const nodes = Array.from(this.records.values())
      .filter((r) => r.manifest.enabled)
      .map((record) => ({
        name: record.name,
        provides: record.manifest.services.provide,
        injects: record.manifest.services.inject
      }))

    const graph = buildPluginGraph(nodes)

    // 处理缺失的服务依赖
    if (graph.missingServices.length) {
      for (const { plugin, service } of graph.missingServices) {
        const record = this.records.get(plugin)
        if (record) {
          record.status = 'error'
          record.error = {
            code: 'missing-service',
            message: `Missing service "${service}"`,
            details: { service }
          }
        }
      }
      this.logger.warn('[PluginHost] Missing services detected', graph.missingServices)
    }

    // 处理循环依赖
    if (graph.cycles.length) {
      for (const cycle of graph.cycles) {
        for (const name of cycle) {
          const record = this.records.get(name)
          if (record) {
            record.status = 'error'
            record.error = {
              code: 'cycle',
              message: 'Dependency cycle detected',
              details: { cycle }
            }
          }
        }
      }
      this.logger.error('[PluginHost] Dependency cycles', graph.cycles)
      this.notifyStateChange()
      return
    }

    // 按拓扑顺序加载插件
    for (const name of graph.order) {
      const record = this.records.get(name)
      if (!record || !record.manifest.enabled) continue
      await this.loadPlugin(record)
    }
    this.emit('loaded', this.list())
    this.notifyStateChange()
  }

  /**
   * 加载单个插件。
   * @param record 插件记录
   */
  async loadPlugin(record: InternalPluginRecord) {
    if (!record.manifest.enabled) {
      record.status = 'disabled'
      return
    }
    if (record.status === 'active') return

    const mainEntry = record.manifest.targets.main
    if (!mainEntry) {
      record.status = 'active'
      this.logger.info(`[PluginHost] Plugin ${record.name} has no main entry, marked active`)
      return
    }

    record.status = 'loading'
    try {
      const mod = await this.loader.importModule(mainEntry)
      const factory = this.loader.resolveFactory(mod)
      const ctx = this.createRuntimeContext(record)
      const cleanup = await factory(ctx, this.getConfig(record.name))
      if (typeof cleanup === 'function') {
        record.group.add(cleanup)
        record.disposer = cleanup
      }
      record.status = 'active'
      record.error = undefined
      this.logger.info(`[PluginHost] Loaded plugin ${record.name}`)
    } catch (error) {
      record.status = 'error'
      record.error = {
        code: 'load-failed',
        message: (error as Error).message,
        details: { stack: (error as Error).stack }
      }
      this.logger.error(`[PluginHost] Failed to load plugin ${record.name}`, error)
    }
    this.notifyStateChange()
  }

  /**
   * 卸载单个插件。
   * @param name 插件名称
   */
  async unloadPlugin(name: string) {
    const record = this.records.get(name)
    if (!record) return
    if (record.status !== 'active' && record.status !== 'error' && record.status !== 'loading') {
      record.status = record.manifest.enabled ? 'idle' : 'disabled'
      return
    }
    this.services.revoke(name)
    try {
      record.group.disposeAll()
      if (record.disposer) {
        await Promise.resolve(record.disposer())
      }
    } catch (error) {
      this.logger.warn(`[PluginHost] Error while disposing plugin ${name}`, error)
    }
    record.group = new DisposerGroup()
    record.status = record.manifest.enabled ? 'idle' : 'disabled'
    record.disposer = undefined
    record.error = undefined
    this.logger.info(`[PluginHost] Unloaded plugin ${name}`)
    this.notifyStateChange()
  }

  /**
   * 重新加载插件。
   * @param name 插件名称
   */
  async reloadPlugin(name: string) {
    await this.unloadPlugin(name)
    const record = this.records.get(name)
    if (record && record.manifest.enabled) {
      await this.loadPlugin(record)
    }
  }

  /**
   * 设置插件启用状态。
   * @param name 插件名称
   * @param enabled 是否启用
   */
  async setEnabled(name: string, enabled: boolean) {
    const record = this.records.get(name)
    if (!record) throw new Error(`Plugin ${name} not found`)
    record.manifest.enabled = enabled
    await this.options.preferences?.setEnabled(name, enabled)
    if (!enabled) {
      await this.unloadPlugin(name)
      record.status = 'disabled'
    } else {
      record.status = 'idle'
      await this.loadPlugin(record)
    }
    this.notifyStateChange()
  }

  /**
   * 关闭宿主，卸载所有插件。
   */
  async shutdown() {
    for (const name of Array.from(this.records.keys())) {
      await this.unloadPlugin(name)
    }
  }

  /**
   * 设置 IPC 通道，用于与渲染进程通信。
   * @param channelPrefix 通道前缀
   */
  setupIpcChannels(channelPrefix = 'plugin') {
    this.channelPrefix = channelPrefix
    ipcMain.handle(`${channelPrefix}:list`, async () => this.list())
    ipcMain.handle(`${channelPrefix}:toggle`, async (_e, name: string, enabled: boolean) => {
      await this.setEnabled(name, enabled)
      return this.list()
    })
    ipcMain.handle(`${channelPrefix}:reload`, async (_e, name: string) => {
      await this.reloadPlugin(name)
      return this.list()
    })
    ipcMain.handle(`${channelPrefix}:services`, async () => this.getServiceSnapshot())
    ipcMain.handle(`${channelPrefix}:service`, async (_e, name: string, owner?: string) =>
      this.peekServiceValue(name, owner)
    )
    ipcMain.handle(`${channelPrefix}:get-config`, async (_e, name: string) => this.getConfig(name))
    ipcMain.handle(`${channelPrefix}:set-config`, async (_e, name: string, config: any) => {
      await this.replaceConfig(name, config ?? {})
      return this.getConfig(name)
    })
    ipcMain.handle(`${channelPrefix}:patch-config`, async (_e, name: string, partial: any) => {
      await this.patchConfig(name, partial ?? {})
      return this.getConfig(name)
    })
    ipcMain.handle(`${channelPrefix}:renderer-entry`, async (_e, name: string) =>
      this.getRendererEntryUrl(name)
    )
  }

  private resolveEnabled(manifest: ResolvedPluginManifest) {
    const pref = this.options.preferences?.isEnabled(manifest.name)
    if (typeof pref === 'boolean') return pref
    return manifest.enabled
  }

  private getConfig(name: string) {
    return deepClone(this.ensureConfigCache(name))
  }

  private ensureConfigCache(name: string) {
    if (!this.configCache.has(name)) {
      const stored = this.options.preferences?.getConfig?.(name)
      this.configCache.set(name, deepClone(stored ?? {}))
    }
    return this.configCache.get(name) as Record<string, any>
  }

  private async replaceConfig(name: string, config: Record<string, any>) {
    const next = deepClone(config ?? {})
    this.configCache.set(name, next)
    await this.options.preferences?.setConfig?.(name, next)
    this.notifyConfigWatchers(name, next)
  }

  private async setConfigValue(name: string, key: string, value: any) {
    const current = deepClone(this.ensureConfigCache(name))
    deepSet(current, key, value)
    await this.replaceConfig(name, current)
  }

  private async patchConfig(name: string, partial: Record<string, any>) {
    const current = deepClone(this.ensureConfigCache(name))
    deepMerge(current, partial)
    await this.replaceConfig(name, current)
  }

  private async resetConfig(name: string) {
    await this.replaceConfig(name, {})
  }

  private watchConfig(name: string, listener: (config: Record<string, any>) => void) {
    let set = this.configWatchers.get(name)
    if (!set) {
      set = new Set()
      this.configWatchers.set(name, set)
    }
    set.add(listener)
    return () => {
      const target = this.configWatchers.get(name)
      if (!target) return
      target.delete(listener)
      if (!target.size) this.configWatchers.delete(name)
    }
  }

  private notifyConfigWatchers(name: string, config?: Record<string, any>) {
    const snapshot = config ?? this.getConfig(name)
    const watchers = this.configWatchers.get(name)
    if (watchers) {
      for (const listener of watchers) {
        try {
          listener(deepClone(snapshot))
        } catch (error) {
          this.logger.warn?.('[PluginHost] config listener failed', error)
        }
      }
    }
    this.broadcastConfig(name, snapshot)
  }

  private broadcastConfig(name: string, config: Record<string, any>) {
    if (!this.channelPrefix) return
    for (const window of BrowserWindow.getAllWindows()) {
      try {
        window.webContents.send(`${this.channelPrefix}:config`, { name, config })
      } catch (error) {
        this.logger.warn('[PluginHost] config broadcast failed', error)
      }
    }
  }

  private getServiceSnapshot(): ServiceProviderRecord[] {
    return this.services.snapshot()
  }

  private getRendererEntryUrl(name: string) {
    const record = this.records.get(name)
    const entry = record?.manifest.targets.renderer
    if (!record || !entry) return undefined
    const relativePath = this.toPluginRelativePath(record, entry.file)
    if (!relativePath) return undefined
    return this.buildPluginAssetUrl(record.name, relativePath)
  }

  resolveAssetPath(name: string, relativePath = '') {
    const record = this.records.get(name)
    if (!record) return undefined
    const normalized = path.normalize(relativePath || '')
    if (
      !normalized ||
      normalized === '.' ||
      normalized.startsWith('..') ||
      path.isAbsolute(normalized)
    ) {
      return undefined
    }
    return path.join(record.manifest.rootDir, normalized)
  }

  private toPluginRelativePath(record: InternalPluginRecord, absolutePath: string) {
    const relative = path.relative(record.manifest.rootDir, absolutePath)
    if (!relative || relative.startsWith('..')) return undefined
    return relative.split(path.sep).join('/')
  }

  private buildPluginAssetUrl(name: string, relativePath: string) {
    const params = new URLSearchParams()
    params.set('name', name)
    params.set('path', relativePath)
    return `plugin://asset?${params.toString()}`
  }

  private peekServiceValue(name: string, owner?: string) {
    try {
      return this.services.getValue(name, owner)
    } catch (error) {
      this.logger.warn('[PluginHost] failed to read service value', name, error)
      return undefined
    }
  }

  private notifyStateChange() {
    this.emit('state-changed', this.list())
    this.broadcastState()
  }

  private broadcastState() {
    if (!this.channelPrefix) return
    const payload = {
      list: this.list(),
      services: this.getServiceSnapshot()
    }
    for (const window of BrowserWindow.getAllWindows()) {
      try {
        window.webContents.send(`${this.channelPrefix}:state`, payload)
      } catch (error) {
        this.logger.warn('[PluginHost] broadcast failed', error)
      }
    }
  }

  /**
   * 创建插件运行时上下文。
   * @param record 插件记录
   * @returns 运行时上下文
   */
  private createRuntimeContext(record: InternalPluginRecord): PluginRuntimeContext {
    const logger = {
      info: (...args: any[]) => this.logger.info(`[${record.name}]`, ...args),
      warn: (...args: any[]) => this.logger.warn(`[${record.name}]`, ...args),
      error: (...args: any[]) => this.logger.error(`[${record.name}]`, ...args),
      debug: (...args: any[]) => this.logger.debug?.(`[${record.name}]`, ...args)
    }

    const effect = (fn: () => void | (() => void) | Promise<void | (() => void)>) => {
      try {
        const result = fn()
        if (typeof result === 'function') {
          record.group.add(result)
        } else if (result && typeof (result as any).then === 'function') {
          ;(result as Promise<void | (() => void)>)
            .then((cleanup) => {
              if (typeof cleanup === 'function') record.group.add(cleanup)
            })
            .catch((error) => logger.error('effect promise rejected', error))
        }
      } catch (error) {
        logger.error('effect invocation failed', error)
      }
    }

    const settings = this.createSettingsApi(record, logger)

    return {
      app: 'main',
      logger,
      config: settings.all(),
      settings,
      effect,
      services: {
        provide: (name: string, value: unknown, options?: ServiceProvideOptions) => {
          const disposer = this.services.provide(record.name, name, value, {
            scope: options?.scope ?? 'main',
            default: options?.default
          })
          record.group.add(disposer)
          return disposer
        },
        inject: <T = unknown>(name: string, owner?: string): T =>
          this.services.inject<T>(name, owner),
        injectAsync: <T = unknown>(name: string, owner?: string) =>
          this.services.injectAsync<T>(name, owner),
        when: <T = unknown>(
          name: string,
          cb: (svc: T, owner: string, meta: ServiceWatcherMeta) => void | (() => void)
        ) => {
          const disposer = this.services.when(name, (svc, owner, meta) => cb(svc as T, owner, meta))
          record.group.add(disposer)
          return disposer
        },
        has: (name: string, owner?: string) => this.services.has(name, owner)
      },
      windows: {
        broadcast: (channel: string, payload?: any) => {
          BrowserWindow.getAllWindows().forEach((w) => {
            try {
              w.webContents.send(channel, payload)
            } catch (error) {
              logger.warn('broadcast failed', channel, error)
            }
          })
        }
      },
      ipc: {
        registerChannel: (channel, handler) => {
          ipcMain.handle(channel, handler)
          const disposer = () => ipcMain.removeHandler(channel)
          record.group.add(disposer)
          return disposer
        },
        invokeRenderer: (channel: string, payload?: any) => {
          BrowserWindow.getAllWindows().forEach((w) => {
            try {
              w.webContents.send(channel, payload)
            } catch (error) {
              logger.warn('invokeRenderer broadcast failed', channel, error)
            }
          })
        }
      }
    }
  }

  private createSettingsApi(record: InternalPluginRecord, logger: PluginLogger) {
    const name = record.name
    return {
      all: () => this.getConfig(name),
      get: <T = unknown>(key?: string, def?: T) => {
        if (!key) return this.getConfig(name) as T
        const value = deepGet(this.getConfig(name), key)
        return (value === undefined ? def : value) as T
      },
      set: async (key: string, value: any) => {
        await this.setConfigValue(name, key, value)
      },
      patch: async (partial: Record<string, any>) => {
        await this.patchConfig(name, partial)
      },
      reset: async () => {
        await this.resetConfig(name)
      },
      onChange: (listener: (config: Record<string, any>) => void) => {
        const disposer = this.watchConfig(name, listener)
        record.group.add(disposer)
        try {
          listener(this.getConfig(name))
        } catch (error) {
          logger.warn('settings.onChange listener failed', error)
        }
        return disposer
      }
    }
  }
}

/**
 * 解析默认插件目录。
 * @param appRoot 应用根目录
 * @returns 插件目录数组
 */
export function resolveDefaultPluginDirs(appRoot: string): string[] {
  return [path.join(appRoot, 'plugins'), path.join(process.cwd(), 'plugins')]
}
