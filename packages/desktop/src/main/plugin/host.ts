import { EventEmitter } from 'events'
import { BrowserWindow, ipcMain } from 'electron'
import path from 'path'
import { pathToFileURL } from 'url'
import { DisposerGroup } from '../runtime/disposable'
import type {
  PluginHostOptions,
  PluginListItem,
  PluginRecord,
  PluginRuntimeContext,
  ResolvedPluginManifest,
  ServiceProviderRecord
} from './types'
import { discoverPluginPackages } from './manifest'
import { buildPluginGraph } from './graph'
import { PluginLoader } from './loader'

/**
 * 服务注册表，管理插件提供的服务。
 * 确保每个服务只有一个提供者，并支持撤销操作。
 */
class ServiceRegistry {
  private services = new Map<string, { owner: string; value: unknown }>()

  constructor(private onChanged?: () => void) {}

  private notify() {
    this.onChanged?.()
  }

  /**
   * 注册一个服务，提供者必须唯一。
   * @param owner 提供服务的插件名称
   * @param name 服务名称
   * @param value 服务值
   * @returns 撤销函数，用于卸载时清理
   */
  provide(owner: string, name: string, value: unknown) {
    if (this.services.has(name) && this.services.get(name)?.owner !== owner) {
      throw new Error(`Service ${name} is already provided by ${this.services.get(name)?.owner}`)
    }
    this.services.set(name, { owner, value })
    this.notify()
    return () => this.revoke(owner, name)
  }

  /**
   * 注入一个服务。
   * @param name 服务名称
   * @returns 服务值
   */
  inject<T = unknown>(name: string): T {
    if (!this.services.has(name)) {
      throw new Error(`Service ${name} is not available`)
    }
    return this.services.get(name)!.value as T
  }

  /**
   * 检查服务是否存在。
   * @param name 服务名称
   * @returns 是否存在
   */
  has(name: string) {
    return this.services.has(name)
  }

  getValue<T = unknown>(name: string): T | undefined {
    return this.services.get(name)?.value as T | undefined
  }

  /**
   * 撤销服务。
   * @param owner 插件名称
   * @param service 可选的服务名称，如果不提供则撤销所有该插件的服务
   */
  revoke(owner: string, service?: string) {
    if (service) {
      const current = this.services.get(service)
      if (current?.owner === owner) {
        this.services.delete(service)
        this.notify()
      }
      return
    }
    for (const [name, record] of this.services.entries()) {
      if (record.owner === owner) {
        this.services.delete(name)
      }
    }
    this.notify()
  }

  snapshot(): ServiceProviderRecord[] {
    return Array.from(this.services.entries()).map(([name, record]) => ({
      name,
      owner: record.owner,
      value: undefined
    }))
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
  private channelPrefix = 'plugin'

  constructor(private options: PluginHostOptions) {
    super()
    this.services = new ServiceRegistry(() => this.broadcastState())
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
    ipcMain.handle(`${channelPrefix}:service`, async (_e, name: string) =>
      this.peekServiceValue(name)
    )
    ipcMain.handle(`${channelPrefix}:get-config`, async (_e, name: string) => this.getConfig(name))
    ipcMain.handle(`${channelPrefix}:set-config`, async (_e, name: string, config: any) => {
      await this.setConfig(name, config)
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
    return this.options.preferences?.getConfig?.(name) ?? {}
  }

  private async setConfig(name: string, config: Record<string, any>) {
    await this.options.preferences?.setConfig?.(name, config)
  }

  private getServiceSnapshot(): ServiceProviderRecord[] {
    return this.services.snapshot()
  }

  private getRendererEntryUrl(name: string) {
    const record = this.records.get(name)
    if (!record?.manifest.targets.renderer) return undefined
    return pathToFileURL(record.manifest.targets.renderer.file).href
  }

  private peekServiceValue(name: string) {
    try {
      return this.services.getValue(name)
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

    return {
      app: 'main',
      logger,
      config: this.getConfig(record.name),
      effect,
      services: {
        provide: (name: string, value: unknown) => {
          const disposer = this.services.provide(record.name, name, value)
          record.group.add(disposer)
          return disposer
        },
        inject: <T = unknown>(name: string): T => this.services.inject<T>(name),
        injectAsync: <T = unknown>(name: string) => Promise.resolve(this.services.inject<T>(name)),
        has: (name: string) => this.services.has(name)
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
        }
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
