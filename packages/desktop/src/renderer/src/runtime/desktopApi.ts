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
}

export interface DesktopAPI {
  ctx: AppContext
  settings: SettingsGateway
  playback: PlaybackAPI
  plugins: PluginRegistry
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

  const api: DesktopAPI = {
    ctx,
    settings: settingsGateway,
    playback,
    plugins: {
      list: pluginRegistry.list,
      dispose: pluginRegistry.dispose,
      register(plugin) {
        return pluginRegistry.register(plugin, api)
      }
    },
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

export type { UIDensity } from '@dsz-examaware/player'
export type { PlaybackSettingsRefs } from '../composables/usePlaybackSettings'
export { DESKTOP_API_KEY }
