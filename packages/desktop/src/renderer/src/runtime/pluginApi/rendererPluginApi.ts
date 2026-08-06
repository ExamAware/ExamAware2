import { MessagePlugin } from 'tdesign-vue-next'
import {
  PluginApiError,
  PluginPermissions,
  type AppApi,
  type CastApi,
  type ControlApi,
  type CommandsApi,
  type DeepLinkClientApi,
  type DialogsApi,
  type EventsApi,
  type ExamAwareRendererApi,
  type ExamsApi,
  type FilesApi,
  type HttpControlApi,
  type LoggingApi,
  type NetworkApi,
  type NetworkResponse,
  type NotificationsApi,
  type PlayerApi,
  type PlayerSession,
  type PlayerSessionSnapshot,
  type PluginInfo,
  type PluginsApi,
  type PluginWindowKind,
  type RendererPluginContext,
  type ServicesApi,
  type TimeApi,
  type UiApi,
  type WindowsApi,
  type PluginRuntimeContext
} from '@dsz-examaware/plugin-sdk'
import {
  normalizeExamConfig,
  parseExamConfigDetailed,
  validateExamConfigDetailed
} from '@dsz-examaware/core'
import type { AppContext } from '../../app/types'
import type { HomeButtonsRegistry } from '../../app/modules/homeButtons'
import type { PagesRegistry } from '../../app/modules/pages'
import type { DesktopAPI } from '../desktopApi'
import type { PluginListItem, ServiceProviderRecord } from '../../../../shared/types/plugins'
import {
  AsyncDisposableScope,
  PluginApiModuleRegistry,
  createPermissionApi,
  createPluginApiValueModule
} from '../../../../shared/pluginApi/runtime'
import { playerToolbarContributions, pluginMenuContributions } from './contributions'

type CommandRecord = {
  owner: string
  handler: (args: unknown) => unknown | Promise<unknown>
  enabled?: () => boolean
}

const commands = new Map<string, CommandRecord>()
const eventListeners = new Map<string, Set<(payload: unknown) => void>>()
const localServices = new Map<string, { owner: string; service: object }>()

export interface RendererPluginApiEnvironment {
  plugin: PluginListItem
  config: Record<string, unknown>
  runtime: PluginRuntimeContext
  appContext: AppContext
  desktopApi: DesktopAPI
  providers: Readonly<{ value: ServiceProviderRecord[] }>
}

export async function createRendererPluginContext(
  environment: RendererPluginApiEnvironment
): Promise<RendererPluginContext> {
  const { plugin, runtime, desktopApi, appContext } = environment
  const scope = new AsyncDisposableScope()
  const permissions = createPermissionApi(plugin.name, plugin.permissions)
  const own = <T extends { dispose(): void | Promise<void> }>(value: T) => {
    scope.add(value)
    return value
  }

  const appApi: AppApi = {
    info: () => window.api.app.info(),
    getAutoStart: () => window.api.app.getAutoStart(),
    setAutoStart: (enabled) => {
      permissions.require(PluginPermissions.App.Configure)
      return window.api.app.setAutoStart(enabled)
    },
    quit: () => {
      permissions.require(PluginPermissions.App.Quit)
      window.api.app.quit()
    }
  }

  const examsApi: ExamsApi = {
    parse: (input) => parseExamConfigDetailed(input),
    validate: (input, options) => validateExamConfigDetailed(input, options),
    normalize: (config) => normalizeExamConfig(config),
    serialize: (config, pretty = true) => JSON.stringify(config, null, pretty ? 2 : undefined)
  }

  const filesApi: FilesApi = {
    open: async (options = {}) => {
      permissions.require(PluginPermissions.Files.Dialog)
      return window.api.files.openMany({
        title: options.title,
        defaultPath: options.defaultPath,
        filters: options.filters,
        properties: [
          options.directories ? 'openDirectory' : 'openFile',
          ...(options.multiple ? (['multiSelections'] as const) : [])
        ]
      })
    },
    save: async (options = {}) => {
      permissions.require(PluginPermissions.Files.Dialog)
      return window.api.files.save(options)
    },
    readText: (path) => {
      permissions.require(PluginPermissions.Files.Read)
      return window.api.files.readText(path)
    },
    readBytes: (path) => {
      permissions.require(PluginPermissions.Files.Read)
      return window.api.files.readBytes(path)
    },
    writeText: (path, content) => {
      permissions.require(PluginPermissions.Files.Write)
      return window.api.files.writeText(path, content)
    },
    writeBytes: (path, content) => {
      permissions.require(PluginPermissions.Files.Write)
      return window.api.files.writeBytes(path, content)
    },
    exists: (path) => {
      permissions.require(PluginPermissions.Files.Read)
      return window.api.files.exists(path)
    },
    stat: (path) => {
      permissions.require(PluginPermissions.Files.Read)
      return window.api.files.stat(path)
    },
    watch: (path, listener) => {
      permissions.require(PluginPermissions.Files.Watch)
      let previous: string | undefined
      let running = false
      const poll = async () => {
        if (running) return
        running = true
        try {
          const stat = await window.api.files.stat(path)
          const signature = stat ? `${stat.kind}:${stat.size}:${stat.modifiedAt}` : 'missing'
          if (previous !== undefined && signature !== previous) listener()
          previous = signature
        } finally {
          running = false
        }
      }
      void poll()
      const timer = window.setInterval(() => void poll(), 750)
      return own({ dispose: () => window.clearInterval(timer) })
    }
  }

  const playerApi = createPlayerApi(permissions, scope)
  const ownedWindowId = (id: string) =>
    id.startsWith(`plugin:${plugin.name}:`) ? id : `plugin:${plugin.name}:${id}`
  const createWindowHandle = (result: { id: string; browserWindowId: number }) => ({
    ...result,
    focus: () => window.api.windows.focus(result.id),
    close: () => window.api.windows.close(result.id),
    dispose: () => window.api.windows.close(result.id)
  })
  const windowsApi: WindowsApi = {
    open: async (options = {}) => {
      permissions.require(PluginPermissions.Windows.Open)
      const localId = options.id?.trim() || `window-${Date.now()}`
      const result = await window.api.windows.open({
        id: ownedWindowId(localId),
        route: (options.route ?? localId).replace(/^#?\/?/, ''),
        options: {
          title: options.title,
          width: options.width,
          height: options.height,
          minWidth: options.minWidth,
          minHeight: options.minHeight,
          resizable: options.resizable,
          fullscreenable: options.fullscreenable,
          modal: options.modal,
          show: options.show
        }
      })
      return own(createWindowHandle(result))
    },
    get: async (id) => {
      permissions.require(PluginPermissions.Windows.Manage)
      const result = await window.api.windows.get(ownedWindowId(id))
      return result ? createWindowHandle(result) : undefined
    },
    openMain: () => {
      permissions.require(PluginPermissions.Windows.Open)
      window.api.windows.openMain()
    },
    openEditor: (path) => {
      permissions.require(PluginPermissions.Windows.Open)
      window.api.windows.openEditor(path)
    },
    openSettings: (page) => {
      permissions.require(PluginPermissions.Windows.Open)
      window.api.windows.openSettings(page)
    },
    openCast: () => {
      permissions.require(PluginPermissions.Windows.Open)
      window.api.windows.openCast()
    },
    openLogs: () => {
      permissions.require(PluginPermissions.Windows.Open)
      window.api.windows.openLogs()
    },
    openPluginStore: () => {
      permissions.require(PluginPermissions.Windows.Open)
      window.api.windows.openPluginStore()
    }
  }

  const dialogsApi: DialogsApi = {
    message: async (options) => {
      permissions.require(PluginPermissions.Ui.Notify)
      return window.api.dialogs.showMessageBox(options)
    },
    openFile: (options) => filesApi.open(options),
    saveFile: (options) => filesApi.save(options)
  }

  const commandsApi: CommandsApi = {
    register: (token, handler, options) => {
      permissions.require(PluginPermissions.Commands.Register)
      if (commands.has(token.id)) {
        throw new PluginApiError('already-exists', 'commands', `命令已注册：${token.id}`)
      }
      commands.set(token.id, {
        owner: plugin.name,
        handler: handler as (args: unknown) => unknown,
        enabled: options?.enabled
      })
      return own({
        dispose: () => {
          if (commands.get(token.id)?.owner === plugin.name) commands.delete(token.id)
        }
      })
    },
    execute: async (token, args) => {
      permissions.require(PluginPermissions.Commands.Execute)
      const command = commands.get(token.id)
      if (!command) throw new PluginApiError('not-found', 'commands', `命令不存在：${token.id}`)
      if (command.enabled && !command.enabled()) {
        throw new PluginApiError('conflict', 'commands', `命令当前不可用：${token.id}`)
      }
      return command.handler(args) as Promise<never>
    },
    has: (token) => commands.has(token.id)
  }

  const eventsApi: EventsApi = {
    on: (token, listener) => {
      permissions.require(PluginPermissions.Events.Subscribe)
      return subscribeEvent(token.id, listener, false, own)
    },
    once: (token, listener) => {
      permissions.require(PluginPermissions.Events.Subscribe)
      return subscribeEvent(token.id, listener, true, own)
    },
    emit: (token, payload) => {
      permissions.require(PluginPermissions.Events.Publish)
      for (const listener of eventListeners.get(token.id) ?? []) listener(payload)
    }
  }

  const notificationsApi: NotificationsApi = {
    show: async (options) => {
      permissions.require(PluginPermissions.Ui.Notify)
      const message = options.title ? `${options.title}: ${options.message}` : options.message
      await MessagePlugin[options.level ?? 'info'](message, options.durationMs)
    }
  }

  const timeApi: TimeApi = {
    now: () => {
      permissions.require(PluginPermissions.Time.Read)
      return window.api.timeSync.getTime()
    },
    info: async () => {
      permissions.require(PluginPermissions.Time.Read)
      return mapTimeInfo(await window.api.timeSync.getInfo())
    },
    synchronize: async () => {
      permissions.require(PluginPermissions.Time.Synchronize)
      return mapTimeInfo(await window.api.timeSync.synchronize())
    },
    configure: async (config) => {
      permissions.require(PluginPermissions.Time.Configure)
      return window.api.timeSync.updateConfig(config) as unknown as Promise<Record<string, unknown>>
    },
    onChanged: (listener) => {
      permissions.require(PluginPermissions.Time.Read)
      const dispose = window.api.timeSync.onChanged((info) => listener(mapTimeInfo(info)))
      return own({ dispose })
    }
  }

  const castApi: CastApi = {
    peers: () => {
      permissions.require(PluginPermissions.Cast.Read)
      return window.api.cast.listPeers()
    },
    localShares: () => {
      permissions.require(PluginPermissions.Cast.Read)
      return window.api.cast.localShares()
    },
    peerShares: (peerId) => {
      permissions.require(PluginPermissions.Cast.Read)
      return window.api.cast.peerShares(peerId)
    },
    getPeerConfig: async (peerId, shareId) => {
      permissions.require(PluginPermissions.Cast.Read)
      return (await window.api.cast.peerConfig(peerId, shareId)) ?? undefined
    },
    send: async (peerId, source) => {
      permissions.require(PluginPermissions.Cast.Send)
      requireSourcePermissions(permissions, source)
      const prepared = await window.api.player.prepare(source)
      await window.api.cast.send(peerId, prepared.json)
    }
  }

  const networkApi: NetworkApi = {
    request: async (url, options = {}) => {
      permissions.require(PluginPermissions.Network.Http)
      if (options.allowLocalNetwork) permissions.require(PluginPermissions.Network.Local)
      return mapNetworkResponse(await window.api.network.request(url, options))
    },
    getText: async (url, options) => (await networkApi.request(url, options)).text(),
    getJson: async (url, options) => (await networkApi.request(url, options)).json()
  }

  const httpApi: HttpControlApi = {
    baseUrl: async () => {
      const config = await window.api.httpApi.getConfig()
      return `http://127.0.0.1:${config.port}`
    },
    configure: async (config) => {
      permissions.require(PluginPermissions.Http.Configure)
      return window.api.httpApi.setConfig(config) as unknown as Promise<Record<string, unknown>>
    },
    restart: async () => {
      permissions.require(PluginPermissions.Http.Configure)
      await window.api.httpApi.restart()
    }
  }

  const deepLinksApi: DeepLinkClientApi = {
    dispatch: async (url) => {
      permissions.require(PluginPermissions.DeepLinks.Dispatch)
      await window.api.deepLink.dispatch(url)
    },
    onOpened: (listener) => {
      permissions.require(PluginPermissions.Events.Subscribe)
      return own({ dispose: window.api.deepLink.onOpened(listener) })
    }
  }

  const loggingApi: LoggingApi = {
    createLogger: (name) => ({
      debug: (message, ...details) =>
        console.debug(`[${plugin.name}:${name}] ${message}`, ...details),
      info: (message, ...details) =>
        console.info(`[${plugin.name}:${name}] ${message}`, ...details),
      warn: (message, ...details) =>
        console.warn(`[${plugin.name}:${name}] ${message}`, ...details),
      error: (message, ...details) =>
        console.error(`[${plugin.name}:${name}] ${message}`, ...details)
    }),
    entries: async () => {
      permissions.require(PluginPermissions.Logging.Read)
      return window.api.logging.getLogs()
    }
  }

  const pluginsApi: PluginsApi = {
    current: () => mapPluginInfo(plugin),
    list: async () => {
      permissions.require(PluginPermissions.Plugins.Read)
      return (await window.api.plugins.list()).map(mapPluginInfo)
    },
    enable: async (name) => {
      permissions.require(PluginPermissions.Plugins.Manage)
      await window.api.plugins.toggle(name, true)
    },
    disable: async (name) => {
      permissions.require(PluginPermissions.Plugins.Manage)
      await window.api.plugins.toggle(name, false)
    },
    reload: async (name) => {
      permissions.require(PluginPermissions.Plugins.Manage)
      await window.api.plugins.reload(name)
    }
  }

  const servicesApi: ServicesApi = {
    provide: (token, service) => {
      permissions.require(PluginPermissions.Services.Provide)
      if (localServices.has(token.id)) {
        throw new PluginApiError('already-exists', 'services', `服务已注册：${token.id}`)
      }
      localServices.set(token.id, { owner: plugin.name, service })
      return own({
        dispose: () => {
          if (localServices.get(token.id)?.owner === plugin.name) localServices.delete(token.id)
        }
      })
    },
    use: async (token) => {
      permissions.require(PluginPermissions.Services.Consume)
      const local = localServices.get(token.id)?.service
      if (local) return local as never
      throw new PluginApiError(
        'not-found',
        'services',
        `当前 renderer 中不存在服务：${token.id}；跨进程服务请使用 api.services.rpc()`
      )
    },
    has: (token) => localServices.has(token.id),
    rpc: (token) => {
      permissions.require(PluginPermissions.Services.Consume)
      return runtime.rpc.get(token)
    },
    exposeRpc: (token, service) => {
      permissions.require(PluginPermissions.Services.Provide)
      return own({ dispose: runtime.rpc.expose(token, service) })
    }
  }

  const settingsApi = {
    get: () => runtime.settings.all(),
    replace: async (settings: Record<string, unknown>) => {
      await runtime.settings.reset()
      await runtime.settings.patch(settings)
    },
    patch: (settings: Record<string, unknown>) => runtime.settings.patch(settings),
    reset: () => runtime.settings.reset(),
    onChanged: (listener: (settings: Readonly<Record<string, unknown>>) => void) =>
      own({ dispose: runtime.settings.onChange(listener) })
  }

  const controlApi: ControlApi = {
    getStatus: () => {
      permissions.require(PluginPermissions.Control.Read)
      return window.api.control.getSnapshot()
    },
    onStatusChanged: (listener) => {
      permissions.require(PluginPermissions.Control.Read)
      let active = true
      void window.api.control.getSnapshot().then((snapshot) => {
        if (active) listener(snapshot)
      })
      const dispose = window.api.control.onEvent((event) => {
        if (event.type === 'state-changed') listener(event.snapshot)
      })
      return own({
        dispose: () => {
          active = false
          dispose()
        }
      })
    },
    bind: (input) => {
      permissions.require(PluginPermissions.Control.Manage)
      return window.api.control.enroll(input)
    },
    unbind: () => {
      permissions.require(PluginPermissions.Control.Manage)
      return window.api.control.clearEnrollment()
    },
    callProctor: (input) => {
      permissions.require(PluginPermissions.Control.Manage)
      return window.api.control.callProctor(input)
    }
  }

  const uiApi = createUiApi(plugin, permissions, scope, appContext, desktopApi, commandsApi)
  const modules = [
    createPluginApiValueModule('core.app', 'renderer', 'app', appApi),
    createPluginApiValueModule('core.player', 'renderer', 'player', playerApi),
    createPluginApiValueModule('core.exams', 'renderer', 'exams', examsApi),
    createPluginApiValueModule('core.files', 'renderer', 'files', filesApi),
    createPluginApiValueModule('core.settings', 'renderer', 'settings', settingsApi),
    createPluginApiValueModule('core.windows', 'renderer', 'windows', windowsApi),
    createPluginApiValueModule('core.dialogs', 'renderer', 'dialogs', dialogsApi),
    createPluginApiValueModule('core.commands', 'renderer', 'commands', commandsApi),
    createPluginApiValueModule('core.events', 'renderer', 'events', eventsApi),
    createPluginApiValueModule('core.notifications', 'renderer', 'notifications', notificationsApi),
    createPluginApiValueModule('core.time', 'renderer', 'time', timeApi),
    createPluginApiValueModule('core.cast', 'renderer', 'cast', castApi),
    createPluginApiValueModule('core.network', 'renderer', 'network', networkApi),
    createPluginApiValueModule('core.http', 'renderer', 'http', httpApi),
    createPluginApiValueModule('core.deep-links', 'renderer', 'deepLinks', deepLinksApi),
    createPluginApiValueModule('core.logging', 'renderer', 'logging', loggingApi),
    createPluginApiValueModule('core.plugins', 'renderer', 'plugins', pluginsApi),
    createPluginApiValueModule('core.services', 'renderer', 'services', servicesApi),
    createPluginApiValueModule('core.control', 'renderer', 'control', controlApi),
    createPluginApiValueModule('core.ui', 'renderer', 'ui', uiApi)
  ] as const
  const api = (await new PluginApiModuleRegistry(modules).create({
    pluginName: plugin.name,
    process: 'renderer',
    permissions,
    scope
  })) as unknown as ExamAwareRendererApi
  const currentWindowId = await window.api.windows.currentId()
  const location = describeCurrentPluginWindow(currentWindowId)

  return {
    process: 'renderer',
    plugin: {
      name: plugin.name,
      displayName: plugin.displayName,
      version: plugin.version,
      apiVersion: 2
    },
    logger: loggingApi.createLogger('plugin'),
    permissions,
    scope,
    initialSettings: { ...environment.config },
    window: location,
    api
  }
}

function createPlayerApi(
  permissions: ReturnType<typeof createPermissionApi>,
  scope: AsyncDisposableScope
): PlayerApi {
  const createHandle = (snapshot: PlayerSessionSnapshot): PlayerSession => ({
    id: snapshot.id,
    snapshot: () => window.api.player.getSession(snapshot.id),
    focus: async () => {
      permissions.require(PluginPermissions.Player.Control)
      await window.api.player.focusSession(snapshot.id)
    },
    close: async () => {
      permissions.require(PluginPermissions.Player.Control)
      await window.api.player.closeSession(snapshot.id)
    },
    replaceSource: async (source, options) => {
      permissions.require(PluginPermissions.Player.Start)
      requireSourcePermissions(permissions, source, options)
      return createHandle(await window.api.player.replaceSession(snapshot.id, source, options))
    },
    dispose: () => {
      permissions.require(PluginPermissions.Player.Control)
      return window.api.player.closeSession(snapshot.id)
    }
  })
  const start: PlayerApi['start'] = async (source, options) => {
    permissions.require(PluginPermissions.Player.Start)
    requireSourcePermissions(permissions, source, options)
    return createHandle(await window.api.player.start(source, options))
  }
  return {
    prepare: (source, options) => {
      permissions.require(PluginPermissions.Player.Start)
      requireSourcePermissions(permissions, source, options)
      return window.api.player.prepare(source, options)
    },
    start,
    startFromFile: (path, options) => start({ kind: 'file', path }, options),
    startFromConfig: (config, options) => start({ kind: 'config', config }, options),
    startFromJson: (data, options) => start({ kind: 'json', data }, options),
    startFromUrl: (url, options) => start({ kind: 'url', url }, options),
    getSession: async (id) => {
      permissions.require(PluginPermissions.Player.Observe)
      const snapshot = await window.api.player.getSession(id)
      return snapshot ? createHandle(snapshot) : undefined
    },
    listSessions: () => {
      permissions.require(PluginPermissions.Player.Observe)
      return window.api.player.listSessions()
    },
    onSessionChanged: (listener) => {
      permissions.require(PluginPermissions.Player.Observe)
      const disposable = { dispose: window.api.player.onSessionChanged(listener) }
      scope.add(disposable)
      return disposable
    }
  }
}

function requireSourcePermissions(
  permissions: ReturnType<typeof createPermissionApi>,
  source: Parameters<PlayerApi['start']>[0],
  options?: Parameters<PlayerApi['start']>[1]
) {
  if (source.kind === 'file') permissions.require(PluginPermissions.Files.Read)
  if (source.kind === 'url') permissions.require(PluginPermissions.Network.Http)
  if (options?.allowLocalNetwork) permissions.require(PluginPermissions.Network.Local)
}

function createUiApi(
  plugin: PluginListItem,
  permissions: ReturnType<typeof createPermissionApi>,
  scope: AsyncDisposableScope,
  appContext: AppContext,
  desktopApi: DesktopAPI,
  commandsApi: CommandsApi
): UiApi {
  const own = <T extends { dispose(): void | Promise<void> }>(value: T) => {
    scope.add(value)
    return value
  }
  const requireContribution = () => permissions.require(PluginPermissions.Ui.Contribute)
  const contributionId = (id: string) => `${plugin.name}:${id}`
  return {
    home: {
      register: (item) => {
        requireContribution()
        const registry = appContext.provides.homeButtons as HomeButtonsRegistry | undefined
        if (!registry) throw new PluginApiError('not-ready', 'ui.home', '主页贡献模块不可用')
        return own({ dispose: registry.register({ ...item, id: contributionId(item.id) }) })
      }
    },
    pages: {
      register: (page) => {
        requireContribution()
        const registry = appContext.provides.pages as PagesRegistry | undefined
        if (!registry) throw new PluginApiError('not-ready', 'ui.pages', '页面贡献模块不可用')
        const id = contributionId(page.id)
        return own({
          dispose: registry.register({
            ...page,
            id,
            routeName: id,
            component: page.component as () => Promise<never>
          })
        })
      }
    },
    settings: {
      registerPage: async (page) => {
        requireContribution()
        const handle = await desktopApi.ui.settings.registerPage({
          ...page,
          id: contributionId(page.id),
          component: page.component as () => Promise<never>
        })
        return own(handle)
      }
    },
    editor: {
      registerPanel: async (panel) => {
        requireContribution()
        return own(
          await desktopApi.editor.registerPanel({
            ...panel,
            id: contributionId(panel.id),
            component: panel.component as never
          })
        )
      },
      presentView: (view) => {
        requireContribution()
        return own(
          desktopApi.editor.presentView({
            ...view,
            id: contributionId(view.id),
            component: view.component as never
          })
        )
      },
      clearView: (id) => desktopApi.editor.clearView(id ? contributionId(id) : undefined)
    },
    player: {
      registerToolbarItem: (item) => {
        permissions.require(PluginPermissions.Player.Contribute)
        return own({
          dispose: playerToolbarContributions.register({ ...item, id: contributionId(item.id) })
        })
      }
    },
    menus: {
      register: (item) => {
        requireContribution()
        return own({
          dispose: pluginMenuContributions.register({
            id: contributionId(item.id),
            label: item.label,
            order: item.order,
            action: async () => {
              await commandsApi.execute(item.command, undefined)
            }
          })
        })
      }
    }
  }
}

function subscribeEvent<T>(
  id: string,
  listener: (payload: T) => void,
  once: boolean,
  own: <D extends { dispose(): void }>(value: D) => D
) {
  const listeners = eventListeners.get(id) ?? new Set<(payload: unknown) => void>()
  eventListeners.set(id, listeners)
  const wrapped = (payload: unknown) => {
    if (once) listeners.delete(wrapped)
    listener(payload as T)
  }
  listeners.add(wrapped)
  return own({
    dispose: () => {
      listeners.delete(wrapped)
      if (!listeners.size) eventListeners.delete(id)
    }
  })
}

function mapTimeInfo(info: Awaited<ReturnType<Window['api']['timeSync']['getInfo']>>) {
  return {
    now: Date.now() + info.offset,
    offset: info.offset,
    lastSyncTime: info.lastSyncTime,
    serverAddress: info.serverAddress,
    status: info.syncStatus,
    errorMessage: info.errorMessage
  }
}

function mapNetworkResponse(response: {
  status: number
  headers: Record<string, string>
  body: Uint8Array
}): NetworkResponse {
  const body = new Uint8Array(response.body)
  return {
    status: response.status,
    headers: response.headers,
    body,
    text: () => new TextDecoder().decode(body),
    json: <T>() => JSON.parse(new TextDecoder().decode(body)) as T
  }
}

function mapPluginInfo(plugin: PluginListItem): PluginInfo {
  return {
    name: plugin.name,
    displayName: plugin.displayName,
    version: plugin.version,
    status: plugin.status,
    enabled: plugin.enabled,
    apiVersion: plugin.apiVersion
  }
}

export function getCurrentPluginWindowKind(hash = window.location.hash): PluginWindowKind {
  const route = hash.replace(/^#/, '').split('?')[0]
  if (route.startsWith('/editor')) return 'editor'
  if (route.startsWith('/playerview')) return 'player'
  if (route.startsWith('/settings')) return 'settings'
  if (route.startsWith('/cast')) return 'cast'
  if (route.startsWith('/logs')) return 'logs'
  if (route.startsWith('/plugin-store')) return 'plugin-store'
  if (route.startsWith('/tray')) return 'tray'
  if (
    route === '/' ||
    route.startsWith('/mainpage') ||
    route.startsWith('/playerhome') ||
    route.startsWith('/discover') ||
    route.startsWith('/ntpsettings')
  ) {
    return 'main'
  }
  return 'plugin'
}

function describeCurrentPluginWindow(id?: number) {
  return {
    id,
    kind: getCurrentPluginWindowKind(),
    route: window.location.hash.replace(/^#/, '') || '/'
  }
}
