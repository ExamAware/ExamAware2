import { ref, shallowRef, type Ref } from 'vue'
import type {
  PluginFactory,
  PluginListItem,
  PluginModuleExport,
  PluginRuntimeContext,
  ServiceProviderRecord
} from '../../../main/plugin/types'
import type { AppContext } from '../app/types'
import { DisposerGroup } from './disposable'
import type { DesktopAPI } from './desktopApi'

type AnyRecord = Record<string, any>

function cloneConfig<T>(value: T): T {
  if (value == null || typeof value !== 'object') return value
  if (Array.isArray(value)) return value.map((item) => cloneConfig(item)) as unknown as T
  const next: AnyRecord = {}
  for (const key of Object.keys(value as AnyRecord)) {
    next[key] = cloneConfig((value as AnyRecord)[key])
  }
  return next as T
}

function buildPatchFromPath(path: string, value: any) {
  const segments = path.split('.')
  const root: AnyRecord = {}
  let cursor = root
  for (let i = 0; i < segments.length - 1; i++) {
    const seg = segments[i]
    cursor[seg] = cursor[seg] ?? {}
    cursor = cursor[seg]
  }
  cursor[segments[segments.length - 1]] = value
  return root
}

function readFromPath(obj: AnyRecord, path?: string) {
  if (!path) return obj
  const segments = path.split('.')
  let cursor: any = obj
  for (const seg of segments) {
    if (cursor == null) return undefined
    cursor = cursor[seg]
  }
  return cursor
}

interface PluginStatePayload {
  list: PluginListItem[]
  services: ServiceProviderRecord[]
}

interface RendererRuntimeRecord {
  name: string
  entryUrl: string
  group: DisposerGroup
  disposer?: (() => void) | (() => Promise<void>)
}

export interface RendererPluginHost {
  installed: Ref<PluginListItem[]>
  providers: Ref<ServiceProviderRecord[]>
  loading: Ref<boolean>
  error: Ref<string | null>
  refresh(): Promise<void>
  toggle(name: string, enabled: boolean): Promise<void>
  reload(name: string): Promise<void>
  getConfig<T = Record<string, any>>(name: string): Promise<T | undefined>
  setConfig<T = Record<string, any>>(name: string, config: T): Promise<T | undefined>
  patchConfig<T = Record<string, any>>(name: string, partial: Partial<T>): Promise<T | undefined>
  onStateChanged(cb: (items: PluginListItem[]) => void): () => void
  getServiceValue<T = unknown>(name: string, owner?: string): Promise<T | undefined>
  onConfig(name: string, listener: (config: Record<string, any>) => void): () => void
  attachDesktopApi(api: DesktopAPI): void
}

export function createDesktopPluginHost(ctx: AppContext): RendererPluginHost {
  const installed = shallowRef<PluginListItem[]>([])
  const providers = shallowRef<ServiceProviderRecord[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)
  const listeners = new Set<(items: PluginListItem[]) => void>()
  const rendererRuntimes = new Map<string, RendererRuntimeRecord>()
  const bridge = window.api?.plugins
  let desktopApiRef: DesktopAPI | undefined = ctx.desktopApi

  if (!bridge) {
    throw new Error('window.api.plugins is not available in renderer context')
  }

  let syncing = false
  let pendingSync = false

  const notifyListeners = () => {
    listeners.forEach((cb) => {
      try {
        cb(installed.value)
      } catch (err) {
        console.warn('[DesktopPluginHost] listener error', err)
      }
    })
  }

  const scheduleRendererSync = () => {
    if (syncing) {
      pendingSync = true
      return
    }
    syncing = true
    syncRendererPlugins()
      .catch((err) => console.error('[DesktopPluginHost] renderer sync failed', err))
      .finally(() => {
        syncing = false
        if (pendingSync) {
          pendingSync = false
          scheduleRendererSync()
        }
      })
  }

  const applyPayload = (payload: PluginStatePayload) => {
    installed.value = payload.list ?? []
    providers.value = payload.services ?? []
    notifyListeners()
    scheduleRendererSync()
  }

  const unsubscribe = bridge.onState((payload) => applyPayload(payload))
  ctx.effect?.(() => unsubscribe?.())

  const refresh = async () => {
    loading.value = true
    try {
      const [list, services] = await Promise.all([bridge.list(), bridge.services()])
      applyPayload({ list, services })
      error.value = null
    } catch (err) {
      error.value = (err as Error).message
      console.error('[DesktopPluginHost] refresh failed', err)
    } finally {
      loading.value = false
    }
  }

  const syncRendererPlugins = async () => {
    const desired = new Set(
      installed.value
        .filter((plugin) => plugin.enabled && plugin.status === 'active' && plugin.hasRendererEntry)
        .map((plugin) => plugin.name)
    )

    for (const name of Array.from(rendererRuntimes.keys())) {
      if (!desired.has(name)) {
        await unloadRendererPlugin(name)
      }
    }

    for (const plugin of installed.value) {
      if (desired.has(plugin.name)) {
        try {
          await loadRendererPlugin(plugin)
        } catch (err) {
          console.error('[DesktopPluginHost] renderer plugin load failed', plugin.name, err)
          error.value = (err as Error).message
        }
      }
    }
  }

  const loadRendererPlugin = async (plugin: PluginListItem) => {
    if (rendererRuntimes.has(plugin.name)) return
    if (!plugin.hasRendererEntry) return

    try {
      if (typeof bridge.rendererEntry !== 'function') {
        throw new Error('rendererEntry IPC 尚未就绪')
      }
      const entryUrl = await bridge.rendererEntry(plugin.name)
      if (!entryUrl) return
      const mod = (await import(/* @vite-ignore */ entryUrl)) as PluginModuleExport
      const factory = resolveFactory(mod)
      const group = new DisposerGroup()
      const config = (await bridge.getConfig(plugin.name)) ?? {}
      const runtimeCtx = createRendererRuntimeContext(
        plugin,
        config,
        group,
        providers,
        bridge,
        () => desktopApiRef
      )
      const cleanup = await factory(runtimeCtx as PluginRuntimeContext, config)
      const record: RendererRuntimeRecord = { name: plugin.name, entryUrl, group }
      if (typeof cleanup === 'function') {
        record.disposer = cleanup
      }
      rendererRuntimes.set(plugin.name, record)
    } catch (err) {
      console.error(`[DesktopPluginHost] Failed to load renderer plugin ${plugin.name}`, err)
      throw err
    }
  }

  const unloadRendererPlugin = async (name: string) => {
    const runtime = rendererRuntimes.get(name)
    if (!runtime) return
    rendererRuntimes.delete(name)
    try {
      runtime.group.disposeAll()
      if (runtime.disposer) {
        await Promise.resolve(runtime.disposer())
      }
    } catch (err) {
      console.warn(`[DesktopPluginHost] dispose renderer plugin ${name} failed`, err)
    }
  }

  const toggle = async (name: string, enabled: boolean) => {
    await bridge.toggle(name, enabled)
    await refresh()
  }

  const reload = async (name: string) => {
    await bridge.reload(name)
    await refresh()
  }

  const getConfig = <T = Record<string, any>>(name: string) => bridge.getConfig<T>(name)
  const setConfig = <T = Record<string, any>>(name: string, config: T) =>
    bridge.setConfig<T>(name, config)
  const patchConfig = async <T = Record<string, any>>(name: string, partial: Partial<T>) => {
    if (typeof bridge.patchConfig !== 'function') return undefined
    return bridge.patchConfig<T>(name, partial as T)
  }

  const onStateChanged = (cb: (items: PluginListItem[]) => void) => {
    listeners.add(cb)
    return () => listeners.delete(cb)
  }

  const getServiceValue = <T = unknown>(name: string, owner?: string) =>
    bridge.service<T>(name, owner)
  const onConfigChanged = (name: string, listener: (config: Record<string, any>) => void) => {
    if (typeof bridge.onConfig !== 'function') return () => {}
    return bridge.onConfig(name, listener)
  }

  const attachDesktopApi = (api: DesktopAPI) => {
    desktopApiRef = api
  }

  refresh().catch((err) => {
    error.value = (err as Error).message
  })

  ctx.effect?.(() => {
    listeners.clear()
    const pending = Array.from(rendererRuntimes.keys())
    pending.forEach((name) => {
      unloadRendererPlugin(name).catch((err) =>
        console.warn(`[DesktopPluginHost] renderer cleanup for ${name} failed`, err)
      )
    })
  })

  return {
    installed,
    providers,
    loading,
    error,
    refresh,
    toggle,
    reload,
    getConfig,
    setConfig,
    patchConfig,
    onStateChanged,
    getServiceValue,
    onConfig: onConfigChanged,
    attachDesktopApi
  }
}

function resolveFactory(mod: PluginModuleExport): PluginFactory {
  if (typeof (mod as any) === 'function') {
    return mod as unknown as PluginFactory
  }
  if (typeof mod?.default === 'function') {
    return mod.default as PluginFactory
  }
  if (typeof mod?.apply === 'function') {
    return mod.apply as PluginFactory
  }
  if (typeof mod?.default === 'object' && typeof mod.default?.apply === 'function') {
    return mod.default.apply as PluginFactory
  }
  throw new Error('Renderer plugin entry does not export an apply/default factory function')
}

function createRendererRuntimeContext(
  plugin: PluginListItem,
  config: Record<string, any>,
  group: DisposerGroup,
  providers: Ref<ServiceProviderRecord[]>,
  bridge: Window['api']['plugins'],
  desktopApiResolver: () => DesktopAPI | undefined
): PluginRuntimeContext {
  const logger = {
    info: (...args: any[]) => console.info(`[RendererPlugin:${plugin.name}]`, ...args),
    warn: (...args: any[]) => console.warn(`[RendererPlugin:${plugin.name}]`, ...args),
    error: (...args: any[]) => console.error(`[RendererPlugin:${plugin.name}]`, ...args)
  }

  let currentConfig = cloneConfig(config ?? {})
  const configListeners = new Set<(cfg: Record<string, any>) => void>()

  const notifyConfigListeners = () => {
    const snapshot = cloneConfig(currentConfig)
    configListeners.forEach((listener) => {
      try {
        listener(snapshot)
      } catch (err) {
        logger.warn('settings listener failed', err)
      }
    })
  }

  const setLocalConfig = (next?: Record<string, any>) => {
    currentConfig = cloneConfig(next ?? {})
    notifyConfigListeners()
  }

  const stopConfigSubscription = bridge.onConfig?.(plugin.name, (next) => {
    setLocalConfig(next ?? currentConfig)
  })
  if (stopConfigSubscription) {
    group.add(() => stopConfigSubscription())
  }

  const settings = {
    all: () => cloneConfig(currentConfig),
    get: <T = unknown>(key?: string, def?: T) => {
      if (!key) return cloneConfig(currentConfig) as T
      const value = readFromPath(currentConfig, key)
      return (value === undefined ? def : value) as T
    },
    set: async (key: string, value: any) => {
      const patch = buildPatchFromPath(key, value)
      const next = await bridge.patchConfig?.(plugin.name, patch)
      if (typeof next !== 'undefined') {
        setLocalConfig(next as Record<string, any>)
        return
      }
      const refreshed = await bridge.getConfig?.(plugin.name)
      setLocalConfig((refreshed as Record<string, any>) ?? currentConfig)
    },
    patch: async (partial: Record<string, any>) => {
      const next = await bridge.patchConfig?.(plugin.name, partial)
      if (typeof next !== 'undefined') {
        setLocalConfig(next as Record<string, any>)
      }
    },
    reset: async () => {
      const next = await bridge.setConfig?.(plugin.name, {})
      if (typeof next !== 'undefined') {
        setLocalConfig(next as Record<string, any>)
      } else {
        setLocalConfig({})
      }
    },
    onChange: (listener: (cfg: Record<string, any>) => void) => {
      configListeners.add(listener)
      try {
        listener(cloneConfig(currentConfig))
      } catch (err) {
        logger.warn('settings listener failed', err)
      }
      const disposer = () => {
        configListeners.delete(listener)
      }
      group.add(disposer)
      return disposer
    }
  }
  group.add(() => configListeners.clear())

  const effect = (fn: () => void | (() => void) | Promise<void | (() => void)>) => {
    try {
      const result = fn()
      if (typeof result === 'function') {
        group.add(result)
      } else if (result && typeof (result as any).then === 'function') {
        ;(result as Promise<void | (() => void)>)
          .then((cleanup) => {
            if (typeof cleanup === 'function') group.add(cleanup)
          })
          .catch((err) => logger.error('effect promise rejected', err))
      }
    } catch (err) {
      logger.error('effect invocation failed', err)
    }
  }

  const runtimeCtx: PluginRuntimeContext = {
    app: 'renderer',
    logger,
    config: cloneConfig(currentConfig),
    settings,
    effect,
    services: {
      provide: () => {
        throw new Error('renderer 插件暂不支持 ctx.services.provide，请在 main 入口提供服务')
      },
      inject: () => {
        throw new Error('renderer 插件请改用 ctx.services.injectAsync(name) 获取服务')
      },
      injectAsync: <T = unknown>(name: string, owner?: string) =>
        bridge.service<T>(name, owner).then((value) => {
          if (typeof value === 'undefined') {
            throw new Error(
              `服务 ${name}${owner ? `@${owner}` : ''} 不存在，无法在 renderer 插件中注入`
            )
          }
          return value
        }),
      has: (name: string, owner?: string) =>
        providers.value.some((svc) => svc.name === name && (!owner || svc.owner === owner))
    }
  }

  Object.defineProperty(runtimeCtx, 'desktopApi', {
    get: () => desktopApiResolver(),
    enumerable: true,
    configurable: true
  })

  return runtimeCtx
}
