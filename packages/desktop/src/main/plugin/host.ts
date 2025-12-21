import { EventEmitter } from 'events'
import { BrowserWindow, ipcMain } from 'electron'
import fs from 'fs'
import { promises as fsp } from 'fs'
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
import { discoverPluginPackages, loadManifestFromPackage } from './manifest'
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
      hasReadme: Boolean(this.findReadmePath(record)),
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

  private isRemovable(record: InternalPluginRecord) {
    const userDir = this.options.pluginDirectories?.[0]
    if (!userDir) return false
    const userRoot = path.resolve(userDir)
    const pluginRoot = path.resolve(record.manifest.rootDir)
    return pluginRoot === userRoot || pluginRoot.startsWith(`${userRoot}${path.sep}`)
  }

  private collectDependents(target: string) {
    const providers = new Map<string, string>()
    for (const rec of this.records.values()) {
      for (const svc of rec.manifest.services.provide) {
        providers.set(svc, rec.name)
      }
    }

    const adjacency = new Map<string, Set<string>>()
    for (const rec of this.records.values()) {
      for (const svc of rec.manifest.services.inject) {
        const owner = providers.get(svc)
        if (!owner) continue
        if (!adjacency.has(owner)) adjacency.set(owner, new Set())
        adjacency.get(owner)!.add(rec.name)
      }
    }

    const visited = new Set<string>()
    const order: string[] = []

    const dfs = (name: string) => {
      const consumers = adjacency.get(name)
      if (!consumers) return
      for (const consumer of consumers) {
        if (visited.has(consumer)) continue
        visited.add(consumer)
        dfs(consumer)
        order.push(consumer)
      }
    }

    dfs(target)
    return order
  }

  private ensureDependenciesSatisfied(manifest: ResolvedPluginManifest) {
    if (!manifest.dependencies?.length) return
    const missing: string[] = []
    for (const dep of manifest.dependencies) {
      if (!this.records.has(dep)) {
        missing.push(dep)
      }
    }
    if (missing.length) {
      throw new Error(`缺少依赖插件：${missing.join(', ')}`)
    }
  }

  private async removePluginRecord(
    record: InternalPluginRecord,
    options?: { skipUnload?: boolean }
  ) {
    const name = record.name
    if (!options?.skipUnload) {
      await this.unloadPlugin(name)
    }

    try {
      const pluginRoot = path.resolve(record.manifest.rootDir)
      await fsp.rm(pluginRoot, { recursive: true, force: true })
    } catch (error) {
      this.logger.warn('[PluginHost] failed to delete plugin directory', name, error)
    }

    this.records.delete(name)
    this.configCache.delete(name)
    this.configWatchers.delete(name)
    await this.options.preferences?.remove?.(name)
  }

  async uninstallPlugin(name: string) {
    const record = this.records.get(name)
    if (!record) throw new Error(`Plugin ${name} not found`)
    if (!this.isRemovable(record)) {
      throw new Error('开发模式插件无法卸载')
    }

    const dependents = this.collectDependents(name)

    for (const dep of dependents) {
      const depRecord = this.records.get(dep)
      if (!depRecord) continue
      if (!this.isRemovable(depRecord)) {
        throw new Error(`开发模式插件无法卸载：${depRecord.name} 依赖于 ${name}`)
      }
    }

    for (const dep of dependents) {
      await this.unloadPlugin(dep)
    }
    await this.unloadPlugin(name)

    for (const dep of dependents) {
      const depRecord = this.records.get(dep)
      if (depRecord) {
        await this.removePluginRecord(depRecord, { skipUnload: true })
      }
    }

    const targetRecord = this.records.get(name)
    if (targetRecord) {
      await this.removePluginRecord(targetRecord, { skipUnload: true })
    }

    this.notifyStateChange()
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
    ipcMain.handle(`${channelPrefix}:uninstall`, async (_e, name: string) => {
      await this.uninstallPlugin(name)
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
    ipcMain.handle(`${channelPrefix}:readme`, async (_e, name: string) => this.getReadme(name))
    ipcMain.handle(`${channelPrefix}:install-package`, async (_e, filePath: string) => {
      const target = await this.installPackage(filePath)
      await this.scan()
      await this.loadAll()
      return { installedPath: target, list: this.list() }
    })
    ipcMain.handle(`${channelPrefix}:install-dir`, async (_e, dirPath: string) => {
      const target = await this.installFromDirectory(dirPath)
      await this.scan()
      await this.loadAll()
      return { installedPath: target, list: this.list() }
    })
  }

  private getUserPluginsDir() {
    return this.options.pluginDirectories?.[0]
  }

  private async ensureWritableDir() {
    const dir = this.getUserPluginsDir()
    if (!dir) throw new Error('插件目录未配置')
    await fsp.mkdir(dir, { recursive: true })
    return dir
  }

  async installFromDirectory(srcDir: string) {
    const dir = await this.ensureWritableDir()
    const normalized = path.resolve(srcDir)
    const manifest = await loadManifestFromPackage(normalized)
    if (!manifest) throw new Error('该目录不是有效的 ExamAware 插件')
    this.ensureDependenciesSatisfied(manifest)

    const name = manifest.name ? String(manifest.name).split('/').pop() : `plugin-${Date.now()}`
    const targetDir = path.join(dir, name)
    if (targetDir === normalized) {
      return targetDir
    }
    await fsp.rm(targetDir, { recursive: true, force: true })
    await fsp.cp(normalized, targetDir, { recursive: true })
    return targetDir
  }

  async installPackage(filePath: string) {
    const dir = await this.ensureWritableDir()
    const pkgName = path.basename(filePath, path.extname(filePath))
    const targetDir = path.join(dir, pkgName)
    await fsp.rm(targetDir, { recursive: true, force: true })

    // lazy import to avoid startup cost
    const AdmZip = (await import('adm-zip')).default
    const zip = new AdmZip(filePath)
    zip.extractAllTo(targetDir, true)

    const manifest = await loadManifestFromPackage(targetDir)
    if (!manifest) {
      await fsp.rm(targetDir, { recursive: true, force: true })
      throw new Error('插件包不包含有效的 ExamAware 插件')
    }
    this.ensureDependenciesSatisfied(manifest)
    return targetDir
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

  private findReadmePath(record: InternalPluginRecord) {
    const candidates = ['README.md', 'Readme.md', 'readme.md']
    for (const candidate of candidates) {
      const full = path.join(record.manifest.rootDir, candidate)
      if (fs.existsSync(full)) return full
    }
    return undefined
  }

  async getReadme(name: string) {
    const record = this.records.get(name)
    if (!record) return undefined
    const readmePath = this.findReadmePath(record)
    if (!readmePath) return undefined
    try {
      return await fsp.readFile(readmePath, 'utf-8')
    } catch (error) {
      this.logger.warn('[PluginHost] failed to read README', name, error)
      return undefined
    }
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

  /**
   * 向服务注册表暴露核心（非插件）服务，供插件注入使用。
   */
  provideService(
    name: string,
    value: unknown,
    options?: ServiceProvideOptions & { owner?: string }
  ) {
    const owner = options?.owner ?? 'core'
    return this.services.provide(owner, name, value, options)
  }

  /**
   * 读取服务值（用于桥接到渲染端 Desktop API）。
   */
  getServiceValue<T = unknown>(name: string, owner?: string): T | undefined {
    return this.peekServiceValue(name, owner) as T | undefined
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
