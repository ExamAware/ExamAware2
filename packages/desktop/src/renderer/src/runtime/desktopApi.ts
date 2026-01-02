import { inject, type App, type Ref } from 'vue'
import type { BrowserWindowConstructorOptions } from 'electron'
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
import {
  useEditorPluginStore,
  type EditorPluginPanelMeta,
  type EditorCenterViewMeta
} from '../stores/editorPluginStore'
import { onEditorRuntimeReady, type EditorRuntimeEnvironment } from '../core/editorBridge'
import type { DeepLinkPayload } from '../../../shared/types/deepLink'

const DESKTOP_API_KEY = Symbol('DesktopAPI')
const SETTINGS_BRIDGE_PROMISE = Symbol('SettingsBridgePromise')

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

export interface DeepLinkAPI {
  onOpen(listener: (payload: DeepLinkPayload) => void): DisposableHandle
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
  uninstall(name: string): Promise<void>
  getReadme(name: string): Promise<string | undefined>
  installPackage(filePath: string): Promise<{ installedPath: string; list: PluginListItem[] }>
  installDir(dirPath: string): Promise<{ installedPath: string; list: PluginListItem[] }>
  getConfig<T = Record<string, any>>(name: string): Promise<T | undefined>
  setConfig<T = Record<string, any>>(name: string, config: T): Promise<T | undefined>
  patchConfig<T = Record<string, any>>(name: string, partial: Partial<T>): Promise<T | undefined>
  onStateChanged(cb: (items: PluginListItem[]) => void): () => void
  onConfigChanged(name: string, cb: (config: Record<string, any>) => void): () => void
}

export interface UiSettingsAPI {
  registerPage(meta: SettingsPageMeta): Promise<DisposableHandle>
}

export interface UiWindowsAPI {
  open(payload?: {
    id?: string
    route?: string
    options?: BrowserWindowConstructorOptions
  }): Promise<{ id: string; browserWindowId: number } | undefined>
  close(id: string): Promise<void>
  currentId(): Promise<number | undefined>
}

export interface UiAPI {
  settings: UiSettingsAPI
  windows: UiWindowsAPI
}

export interface DesktopServicesAPI {
  providers: Ref<ServiceProviderRecord[]>
  has(name: string, owner?: string): boolean
  ownerOf(name: string): string | undefined
  resolveProvider(name: string, owner?: string): ServiceProviderRecord | undefined
  inject<T = unknown>(name: string, owner?: string): Promise<T | undefined>
}

export interface DesktopAPI {
  ctx: AppContext
  settings: SettingsGateway
  playback: PlaybackAPI
  deeplink: DeepLinkAPI
  plugins: PluginRegistry
  services: DesktopServicesAPI
  ui: UiAPI
  editor: EditorAPI
  useDisposer(disposer: () => void): void
  createDisposerGroup(): DisposerGroup
}

export interface EditorAPI {
  registerPanel(meta: EditorPluginPanelMeta): Promise<DisposableHandle>
  presentView(meta: EditorCenterViewMeta): DisposableHandle
  clearView(id?: string): void
  injectScript(
    effect: (
      env: EditorRuntimeEnvironment
    ) => void | (() => void | Promise<void>) | Promise<void | (() => void)>
  ): DisposableHandle
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
  const deeplink = createDeepLinkApi(ctx)
  const pluginRegistry = createPluginRegistry(ctx)
  const pluginHost = createDesktopPluginHost(ctx)
  const editorApi = createEditorApi(ctx)

  const api: DesktopAPI = {
    ctx,
    settings: settingsGateway,
    playback,
    deeplink,
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
      uninstall: (name: string) => pluginHost.uninstall(name),
      getReadme: (name: string) => pluginHost.getReadme(name),
      installPackage: (filePath: string) => pluginHost.installPackage(filePath),
      installDir: (dirPath: string) => pluginHost.installDir(dirPath),
      getConfig: <T = Record<string, any>>(name: string) => pluginHost.getConfig<T>(name),
      setConfig: <T = Record<string, any>>(name: string, config: T) =>
        pluginHost.setConfig<T>(name, config),
      patchConfig: <T = Record<string, any>>(name: string, partial: Partial<T>) =>
        pluginHost.patchConfig<T>(name, partial),
      onStateChanged: (cb: (items: PluginListItem[]) => void) => pluginHost.onStateChanged(cb),
      onConfigChanged: (name: string, cb: (config: Record<string, any>) => void) =>
        pluginHost.onConfig(name, cb)
    },
    services: {
      providers: pluginHost.providers,
      has: (name: string, owner?: string) =>
        pluginHost.providers.value.some(
          (svc) => svc.name === name && (!owner || svc.owner === owner)
        ),
      ownerOf: (name: string) =>
        pluginHost.providers.value.find((svc) => svc.name === name && svc.isDefault)?.owner ??
        pluginHost.providers.value.find((svc) => svc.name === name)?.owner,
      resolveProvider: (name: string, owner?: string) => {
        const matches = pluginHost.providers.value.filter((svc) => svc.name === name)
        if (!matches.length) return undefined
        if (owner) {
          return matches.find((svc) => svc.owner === owner)
        }
        return matches.find((svc) => svc.isDefault) ?? matches[0]
      },
      inject: <T = unknown>(name: string, owner?: string) =>
        pluginHost.getServiceValue<T>(name, owner)
    },
    ui: createUiApi(ctx),
    editor: editorApi,
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
  if (ctx.provide) ctx.provide(DESKTOP_API_KEY, api)
  else app?.provide(DESKTOP_API_KEY, api)
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
      refs.examInfoLargeFont.value = false
    }
  }
}

function createDeepLinkApi(ctx: AppContext): DeepLinkAPI {
  return {
    onOpen(listener: (payload: DeepLinkPayload) => void): DisposableHandle {
      const dispose =
        window.api?.deeplink?.onOpen?.((payload: DeepLinkPayload) => {
          try {
            listener(payload)
          } catch (err) {
            console.warn('[DesktopAPI][deeplink] listener failed', err)
          }
        }) ?? (() => {})
      ctx.effect?.(() => dispose())
      return { dispose }
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
        const registrar = ctx.addSettingsPage ?? (await waitForSettingsBridge(ctx))
        if (!registrar) {
          throw new Error('settings 模块尚未初始化或不可用，无法注册页面')
        }
        const handle = await registrar(meta)
        return {
          dispose: () => handle.dispose()
        }
      }
    },
    windows: {
      async open(payload) {
        if (typeof window.api?.windows?.open !== 'function') return undefined
        const result = await window.api.windows.open(payload)
        return result as { id: string; browserWindowId: number }
      },
      async close(id: string) {
        await window.api?.windows?.close?.(id)
      },
      async currentId() {
        return window.api?.windows?.currentId?.()
      }
    }
  }
}

function createEditorApi(ctx: AppContext): EditorAPI {
  const store = useEditorPluginStore()
  return {
    async registerPanel(meta: EditorPluginPanelMeta): Promise<DisposableHandle> {
      const disposePanel = store.registerPanel(meta)
      const handle: DisposableHandle = {
        dispose: () => disposePanel()
      }
      ctx.effect?.(() => handle.dispose())
      return handle
    },
    presentView(meta: EditorCenterViewMeta): DisposableHandle {
      const disposeView = store.presentCenterView(meta)
      const handle: DisposableHandle = {
        dispose: () => disposeView()
      }
      ctx.effect?.(() => handle.dispose())
      return handle
    },
    clearView(id?: string) {
      store.clearCenterView(id)
    },
    injectScript(effect) {
      let cleanup: void | (() => void | Promise<void>)
      const unsubscribe = onEditorRuntimeReady(async (env) => {
        try {
          const result = await effect(env)
          if (typeof result === 'function') {
            cleanup = result
          }
        } catch (error) {
          console.warn('[DesktopAPI][editor.injectScript] effect execution failed', error)
        }
      })
      const handle: DisposableHandle = {
        dispose: () => {
          unsubscribe()
          if (typeof cleanup === 'function') {
            try {
              const maybe = cleanup()
              if (maybe && typeof (maybe as Promise<void>).then === 'function') {
                ;(maybe as Promise<void>).catch((error) =>
                  console.warn('[DesktopAPI][editor.injectScript] cleanup failed', error)
                )
              }
            } catch (error) {
              console.warn('[DesktopAPI][editor.injectScript] cleanup failed', error)
            }
          }
        }
      }
      ctx.effect?.(() => handle.dispose())
      return handle
    }
  }
}

async function waitForSettingsBridge(
  ctx: AppContext,
  timeout = 5000
): Promise<NonNullable<AppContext['addSettingsPage']> | undefined> {
  if (ctx.addSettingsPage) {
    return ctx.addSettingsPage
  }
  const ctxWithHidden = ctx as AppContext & {
    [SETTINGS_BRIDGE_PROMISE]?: Promise<NonNullable<AppContext['addSettingsPage']> | undefined>
  }
  if (ctxWithHidden[SETTINGS_BRIDGE_PROMISE]) {
    return ctxWithHidden[SETTINGS_BRIDGE_PROMISE]
  }
  let resolveBridge:
    | ((fn: NonNullable<AppContext['addSettingsPage']> | undefined) => void)
    | undefined
  const ready = new Promise<NonNullable<AppContext['addSettingsPage']> | undefined>((resolve) => {
    resolveBridge = resolve
  })
  ctxWithHidden[SETTINGS_BRIDGE_PROMISE] = ready

  let settled = false
  const finalize = (fn?: NonNullable<AppContext['addSettingsPage']>) => {
    if (settled) return
    settled = true
    resolveBridge?.(fn)
    delete ctxWithHidden[SETTINGS_BRIDGE_PROMISE]
  }

  const timer = window.setTimeout(() => finalize(undefined), timeout)

  Object.defineProperty(ctx, 'addSettingsPage', {
    configurable: true,
    enumerable: true,
    get() {
      return undefined
    },
    set(fn) {
      window.clearTimeout(timer)
      Object.defineProperty(ctx, 'addSettingsPage', {
        configurable: true,
        enumerable: true,
        writable: true,
        value: fn
      })
      finalize(fn)
    }
  })

  return ready
}

export type { UIDensity } from '@dsz-examaware/player'
export type { PlaybackSettingsRefs } from '../composables/usePlaybackSettings'
export { DESKTOP_API_KEY }
export type { EditorPluginPanelMeta, EditorCenterViewMeta } from '../stores/editorPluginStore'
export type { EditorRuntimeEnvironment as EditorScriptEnvironment } from '../core/editorBridge'
