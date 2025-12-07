import { inject, type App, type Ref } from 'vue'
import { setActivePinia } from 'pinia'
import type { AppContext } from '../app/types'
import type { UIDensity } from '@dsz-examaware/player'
import { DisposerGroup } from './disposable'
import { useSettingsStore } from '../stores/settingsStore'
import { useSettingRef, type UseSettingOptions } from '../composables/useSetting'
import {
  usePlaybackSettings,
  clampUiScale,
  clampLargeClockScale,
  normalizeDensity,
  type PlaybackSettingsRefs
} from '../composables/usePlaybackSettings'
import { createDesktopPluginHost } from './desktopPluginHost'
import type { PluginListItem, ServiceProviderRecord } from '../../../main/plugin/types'
import type { SettingsPageMeta } from '../app/modules/settings'

const DESKTOP_API_KEY = Symbol('DesktopAPI')

export interface DisposableHandle {
  dispose(): void
}

export interface SettingsGateway {
  all: ReturnType<typeof useSettingsStore>['all']
  get<T = any>(key: string, def?: T): T
  set(key: string, value: any): void
  patch(obj: Record<string, any>): void
  ref<T = any>(key: string, def?: T, options?: UseSettingOptions<T>): Ref<T>
}

export interface PlaybackAPI extends PlaybackSettingsRefs {
  reset(): void
}

export interface DesktopPlugin {
  name: string
  install(api: DesktopAPI): void | (() => void) | Promise<void | (() => void)>
}

export interface PluginRegistry {
  list(): string[]
  dispose(name: string): void
  register(plugin: DesktopPlugin): Promise<DisposableHandle>
  installed: Ref<PluginListItem[]>
  serviceProviders: Ref<ServiceProviderRecord[]>
  loading: Ref<boolean>
  error: Ref<string | null>
  refresh(): Promise<void>
  toggle(name: string, enabled: boolean): Promise<void>
  reload(name: string): Promise<void>
  getConfig<T = Record<string, any>>(name: string): Promise<T | undefined>
  setConfig<T = Record<string, any>>(name: string, config: T): Promise<T | undefined>
  onStateChanged(cb: (items: PluginListItem[]) => void): () => void
}

export interface UiSettingsAPI {
  registerPage(meta: SettingsPageMeta): Promise<DisposableHandle>
}

export interface UiAPI {
  settings: UiSettingsAPI
}

export interface DesktopServicesAPI {
  providers: Ref<ServiceProviderRecord[]>
  has(name: string): boolean
  ownerOf(name: string): string | undefined
  inject<T = unknown>(name: string): Promise<T | undefined>
}

export interface DesktopAPI {
  ctx: AppContext
  settings: SettingsGateway
  playback: PlaybackAPI
  plugins: PluginRegistry
  services: DesktopServicesAPI
  ui: UiAPI
  useDisposer(disposer: () => void): void
  createDisposerGroup(): DisposerGroup
}

export function initDesktopApi(ctx: AppContext, app?: App): DesktopAPI {
  if (ctx.desktopApi) {
    return ctx.desktopApi
  }
  if (ctx.pinia) {
    setActivePinia(ctx.pinia)
  }

  const settingsGateway = createSettingsGateway()
  const playback = createPlaybackApi()
  const pluginRegistry = createPluginRegistry(ctx)
  const pluginHost = createDesktopPluginHost(ctx)

  const api: DesktopAPI = {
    ctx,
    settings: settingsGateway,
    playback,
    plugins: {
      list: pluginRegistry.list,
      dispose: pluginRegistry.dispose,
      register(plugin) {
        return pluginRegistry.register(plugin, api)
      },
      installed: pluginHost.installed,
      serviceProviders: pluginHost.providers,
      loading: pluginHost.loading,
      error: pluginHost.error,
      refresh: () => pluginHost.refresh(),
      toggle: (name: string, enabled: boolean) => pluginHost.toggle(name, enabled),
      reload: (name: string) => pluginHost.reload(name),
      getConfig: <T = Record<string, any>>(name: string) => pluginHost.getConfig<T>(name),
      setConfig: <T = Record<string, any>>(name: string, config: T) =>
        pluginHost.setConfig<T>(name, config),
      onStateChanged: (cb: (items: PluginListItem[]) => void) => pluginHost.onStateChanged(cb)
    },
    services: {
      providers: pluginHost.providers,
      has: (name: string) => pluginHost.providers.value.some((svc) => svc.name === name),
      ownerOf: (name: string) => pluginHost.providers.value.find((svc) => svc.name === name)?.owner,
      inject: <T = unknown>(name: string) => pluginHost.getServiceValue<T>(name)
    },
    ui: createUiApi(ctx),
    useDisposer(disposer: () => void) {
      ctx.effect?.(disposer)
    },
    createDisposerGroup() {
      const group = new DisposerGroup()
      ctx.effect?.(() => group.disposeAll())
      return group
    }
  }

  ctx.desktopApi = api
  ctx.provide?.(DESKTOP_API_KEY, api)
  app?.provide(DESKTOP_API_KEY, api)
  pluginHost.attachDesktopApi?.(api)
  ctx.effect?.(() => pluginRegistry.disposeAll())

  return api
}

export function useDesktopApi(): DesktopAPI {
  const api = inject<DesktopAPI>(DESKTOP_API_KEY)
  if (!api) {
    throw new Error('Desktop API 尚未初始化，请确认 createDesktopApp 已完成')
  }
  return api
}

function createSettingsGateway(): SettingsGateway {
  const store = useSettingsStore()
  return {
    all: store.all,
    get: store.get,
    set: store.set,
    patch: store.patch,
    ref<T = any>(key: string, def?: T, options?: UseSettingOptions<T>) {
      return useSettingRef<T>(key, def, options) as Ref<T>
    }
  }
}

function createPlaybackApi(): PlaybackAPI {
  const refs = usePlaybackSettings()
  return {
    ...refs,
    reset() {
      refs.uiScale.value = clampUiScale(1)
      refs.uiDensity.value = normalizeDensity('comfortable' as UIDensity)
      refs.largeClockEnabled.value = false
      refs.largeClockScale.value = clampLargeClockScale(1)
    }
  }
}

function createPluginRegistry(ctx: AppContext) {
  const disposers = new Map<string, () => void>()

  const dispose = (name: string) => {
    const disposer = disposers.get(name)
    if (!disposer) return
    disposers.delete(name)
    try {
      disposer()
    } catch (error) {
      console.warn(`[DesktopAPI][plugin:${name}] dispose 失败`, error)
    }
  }

  return {
    list: () => Array.from(disposers.keys()),
    dispose,
    async register(plugin: DesktopPlugin, api: DesktopAPI): Promise<DisposableHandle> {
      if (!plugin?.name) {
        throw new Error('Desktop 插件必须提供唯一的 name')
      }
      if (disposers.has(plugin.name)) {
        throw new Error(`插件 ${plugin.name} 已注册，无法重复注册`)
      }
      const cleanup = await plugin.install(api)
      const wrapped = typeof cleanup === 'function' ? cleanup : () => {}
      disposers.set(plugin.name, wrapped)

      const handle: DisposableHandle = {
        dispose: () => dispose(plugin.name)
      }
      ctx.effect?.(() => handle.dispose())
      return handle
    },
    disposeAll() {
      Array.from(disposers.keys()).forEach(dispose)
    }
  }
}

function createUiApi(ctx: AppContext): UiAPI {
  return {
    settings: {
      async registerPage(meta: SettingsPageMeta): Promise<DisposableHandle> {
        if (!ctx.addSettingsPage) {
          throw new Error('settings 模块尚未初始化，无法注册页面')
        }
        const handle = await ctx.addSettingsPage(meta)
        return {
          dispose: () => handle.dispose()
        }
      }
    }
  }
}

export type { UIDensity } from '@dsz-examaware/player'
export type { PlaybackSettingsRefs } from '../composables/usePlaybackSettings'
export { DESKTOP_API_KEY }
