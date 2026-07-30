import { EventEmitter } from 'node:events'
import { promises as fs, watch as watchFile } from 'node:fs'
import { app, dialog, Notification } from 'electron'
import {
  PluginApiError,
  PluginPermissions,
  definePluginApiModule,
  definePluginApiModuleToken,
  type AppApi,
  type CastApi,
  type CommandsApi,
  type DeepLinksApi,
  type DialogsApi,
  type EventsApi,
  type ExamAwareMainApi,
  type ExamsApi,
  type FilesApi,
  type HttpApi,
  type LoggingApi,
  type MainPluginContext,
  type NetworkApi,
  type NetworkResponse,
  type NotificationsApi,
  type PlayerApi,
  type PlayerSession,
  type PlayerSessionSnapshot,
  type PluginInfo,
  type PluginsApi,
  type ServicesApi,
  type TimeApi,
  type WindowsApi
} from '@dsz-examaware/plugin-sdk'
import {
  normalizeExamConfig,
  parseExamConfigDetailed,
  validateExamConfigDetailed
} from '@dsz-examaware/core'
import {
  AsyncDisposableScope,
  PluginApiModuleRegistry,
  createPermissionApi,
  createPluginApiValueModule
} from '../../../shared/pluginApi/runtime'
import { secureFetch } from '../../network/secureFetch'
import { playerSessionService } from '../../player/playerSessionService'
import { createMainWindow } from '../../windows/mainWindow'
import { createEditorWindow } from '../../windows/editorWindow'
import { createSettingsWindow } from '../../windows/settingsWindow'
import { createCastWindow } from '../../windows/castWindow'
import { createLogsWindow } from '../../windows/logsWindow'
import { createPluginStoreWindow } from '../../windows/pluginStoreWindow'
import { windowManager } from '../../windows/windowManager'
import { castService } from '../../cast/castService'
import {
  applyTimeConfig,
  getCurrentTimeMs,
  getTimeSyncInfo,
  performTimeSync
} from '../../timeSync/timeService'
import { httpApiService } from '../../httpApi/httpApiService'
import { deepLinkManager } from '../../deepLink/deepLinkManager'
import { getLogs } from '../../logging/logStore'
import type { PluginRuntimeContext } from '../hosting'
import type { PluginListItem, ResolvedPluginManifest } from '../types'

type MainApiPart = Record<string, object>

const appModule = definePluginApiModule({
  token: definePluginApiModuleToken<MainApiPart>('core.app'),
  scope: 'main',
  create(ctx) {
    const api: AppApi = {
      info: async () => ({
        name: app.getName(),
        version: app.getVersion(),
        platform: process.platform,
        packaged: app.isPackaged
      }),
      getAutoStart: async () => app.getLoginItemSettings?.().openAtLogin ?? false,
      setAutoStart: async (enabled) => {
        ctx.requirePermission(PluginPermissions.App.Configure)
        app.setLoginItemSettings({ openAtLogin: enabled })
        return app.getLoginItemSettings?.().openAtLogin ?? enabled
      },
      quit: () => {
        ctx.requirePermission(PluginPermissions.App.Quit)
        app.quit()
      }
    }
    return { app: api }
  }
})

const examsModule = definePluginApiModule({
  token: definePluginApiModuleToken<MainApiPart>('core.exams'),
  scope: 'both',
  create() {
    const api: ExamsApi = {
      parse: (input) => parseExamConfigDetailed(input),
      validate: (input, options) => validateExamConfigDetailed(input, options),
      normalize: (config) => normalizeExamConfig(config),
      serialize: (config, pretty = true) => JSON.stringify(config, null, pretty ? 2 : undefined)
    }
    return { exams: api }
  }
})

// The public module context deliberately stays small. This helper attaches ownership without
// leaking the host scope onto SDK contracts.
function own<T extends { dispose(): void | Promise<void> }>(
  scope: AsyncDisposableScope,
  disposable: T
) {
  scope.add(disposable)
  return disposable
}

interface MainApiEnvironment {
  manifest: ResolvedPluginManifest
  runtime: PluginRuntimeContext
  listPlugins(): PluginListItem[]
  setEnabled(name: string, enabled: boolean): Promise<void>
  reload(name: string): Promise<void>
}

const commandHandlers = new Map<
  string,
  { owner: string; handler: (args: unknown) => unknown | Promise<unknown>; enabled?: () => boolean }
>()
const eventBus = new EventEmitter()

export async function createMainPluginContext(
  environment: MainApiEnvironment
): Promise<MainPluginContext> {
  const { manifest, runtime } = environment
  const scope = new AsyncDisposableScope()
  const permissions = createPermissionApi(manifest.name, manifest.permissions)

  const filesApi: FilesApi = {
    open: async (options = {}) => {
      permissions.require(PluginPermissions.Files.Dialog)
      const result = await dialog.showOpenDialog({
        title: options.title,
        defaultPath: options.defaultPath,
        filters: options.filters,
        properties: [
          options.directories ? 'openDirectory' : 'openFile',
          ...(options.multiple ? (['multiSelections'] as const) : [])
        ]
      })
      return result.canceled ? [] : result.filePaths
    },
    save: async (options = {}) => {
      permissions.require(PluginPermissions.Files.Dialog)
      const result = await dialog.showSaveDialog(options)
      return result.canceled ? undefined : result.filePath
    },
    readText: async (file) => {
      permissions.require(PluginPermissions.Files.Read)
      return fs.readFile(file, 'utf8')
    },
    readBytes: async (file) => {
      permissions.require(PluginPermissions.Files.Read)
      return new Uint8Array(await fs.readFile(file))
    },
    writeText: async (file, content) => {
      permissions.require(PluginPermissions.Files.Write)
      await fs.writeFile(file, content, 'utf8')
    },
    writeBytes: async (file, content) => {
      permissions.require(PluginPermissions.Files.Write)
      await fs.writeFile(file, content)
    },
    exists: async (file) => {
      permissions.require(PluginPermissions.Files.Read)
      return fs.access(file).then(
        () => true,
        () => false
      )
    },
    stat: async (file) => {
      permissions.require(PluginPermissions.Files.Read)
      const value = await fs.stat(file).catch(() => undefined)
      if (!value) return undefined
      return {
        path: file,
        size: value.size,
        modifiedAt: value.mtimeMs,
        kind: value.isFile() ? 'file' : value.isDirectory() ? 'directory' : 'other'
      }
    },
    watch: (file, listener) => {
      permissions.require(PluginPermissions.Files.Watch)
      const watcher = fsWatch(file, listener)
      return own(scope, { dispose: () => watcher.close() })
    }
  }

  const windowsApi: WindowsApi = {
    open: async (options = {}) => {
      permissions.require(PluginPermissions.Windows.Open)
      const localId = options.id?.trim() || `window-${Date.now()}`
      const id = `plugin:${manifest.name}:${localId}`
      const window = windowManager.open(({ commonOptions }) => ({
        id,
        route: (options.route ?? localId).replace(/^#?\/?/, ''),
        options: {
          ...commonOptions(),
          title: options.title,
          width: options.width ?? 800,
          height: options.height ?? 600,
          minWidth: options.minWidth,
          minHeight: options.minHeight,
          resizable: options.resizable,
          fullscreenable: options.fullscreenable,
          modal: options.modal,
          show: options.show ?? false
        }
      }))
      const handle = {
        id,
        browserWindowId: window.id,
        focus: async () => {
          if (window.isMinimized()) window.restore()
          if (!window.isVisible()) window.show()
          window.focus()
        },
        close: async () => windowManager.close(id),
        dispose: async () => windowManager.close(id)
      }
      return own(scope, handle)
    },
    get: async (id) => {
      permissions.require(PluginPermissions.Windows.Manage)
      const ownedId = id.startsWith(`plugin:${manifest.name}:`)
        ? id
        : `plugin:${manifest.name}:${id}`
      const window = windowManager.get(ownedId)
      if (!window) return undefined
      return {
        id: ownedId,
        browserWindowId: window.id,
        focus: async () => window.focus(),
        close: async () => windowManager.close(ownedId),
        dispose: async () => windowManager.close(ownedId)
      }
    },
    openMain: () => {
      permissions.require(PluginPermissions.Windows.Open)
      createMainWindow()
    },
    openEditor: (path) => {
      permissions.require(PluginPermissions.Windows.Open)
      createEditorWindow(path)
    },
    openSettings: (page) => {
      permissions.require(PluginPermissions.Windows.Open)
      createSettingsWindow(page)
    },
    openCast: () => {
      permissions.require(PluginPermissions.Windows.Open)
      createCastWindow()
    },
    openLogs: () => {
      permissions.require(PluginPermissions.Windows.Open)
      createLogsWindow()
    },
    openPluginStore: () => {
      permissions.require(PluginPermissions.Windows.Open)
      createPluginStoreWindow()
    }
  }

  const dialogsApi: DialogsApi = {
    message: async (options) => {
      permissions.require(PluginPermissions.Ui.Notify)
      return dialog.showMessageBox(options)
    },
    openFile: (options) => filesApi.open(options),
    saveFile: (options) => filesApi.save(options)
  }

  const commandsApi: CommandsApi = {
    register: (token, handler, options) => {
      permissions.require(PluginPermissions.Commands.Register)
      if (commandHandlers.has(token.id)) {
        throw new PluginApiError('already-exists', 'commands', `命令已注册：${token.id}`)
      }
      commandHandlers.set(token.id, {
        owner: manifest.name,
        handler: handler as (args: unknown) => unknown,
        enabled: options?.enabled
      })
      return own(scope, {
        dispose: () => {
          if (commandHandlers.get(token.id)?.owner === manifest.name)
            commandHandlers.delete(token.id)
        }
      })
    },
    execute: async (token, args) => {
      permissions.require(PluginPermissions.Commands.Execute)
      const command = commandHandlers.get(token.id)
      if (!command) throw new PluginApiError('not-found', 'commands', `命令不存在：${token.id}`)
      if (command.enabled && !command.enabled()) {
        throw new PluginApiError('conflict', 'commands', `命令当前不可用：${token.id}`)
      }
      return command.handler(args) as Promise<never>
    },
    has: (token) => commandHandlers.has(token.id)
  }

  const eventsApi: EventsApi = {
    on: (token, listener) => {
      permissions.require(PluginPermissions.Events.Subscribe)
      eventBus.on(token.id, listener)
      return own(scope, { dispose: () => void eventBus.off(token.id, listener) })
    },
    once: (token, listener) => {
      permissions.require(PluginPermissions.Events.Subscribe)
      eventBus.once(token.id, listener)
      return own(scope, { dispose: () => void eventBus.off(token.id, listener) })
    },
    emit: (token, payload) => {
      permissions.require(PluginPermissions.Events.Publish)
      eventBus.emit(token.id, payload)
    }
  }

  const notificationsApi: NotificationsApi = {
    show: async (options) => {
      permissions.require(PluginPermissions.Ui.Notify)
      if (Notification.isSupported()) {
        new Notification({ title: options.title ?? app.getName(), body: options.message }).show()
      } else {
        runtime.logger.info(options.title ?? 'notification', options.message)
      }
    }
  }

  const timeApi: TimeApi = {
    now: async () => {
      permissions.require(PluginPermissions.Time.Read)
      return getCurrentTimeMs()
    },
    info: async () => {
      permissions.require(PluginPermissions.Time.Read)
      return mapTimeInfo(getTimeSyncInfo())
    },
    synchronize: async () => {
      permissions.require(PluginPermissions.Time.Synchronize)
      await performTimeSync()
      return mapTimeInfo(getTimeSyncInfo())
    },
    configure: async (config) => {
      permissions.require(PluginPermissions.Time.Configure)
      return applyTimeConfig(config) as unknown as Record<string, unknown>
    },
    onChanged: (listener) => {
      permissions.require(PluginPermissions.Time.Read)
      const token = setInterval(() => listener(mapTimeInfo(getTimeSyncInfo())), 1_000)
      return own(scope, { dispose: () => clearInterval(token) })
    }
  }

  const castApi: CastApi = {
    peers: async () => {
      permissions.require(PluginPermissions.Cast.Read)
      return castService.listPeers()
    },
    localShares: async () => {
      permissions.require(PluginPermissions.Cast.Read)
      return castService.getLocalShares()
    },
    peerShares: async (peerId) => {
      permissions.require(PluginPermissions.Cast.Read)
      return castService.fetchPeerShares(peerId)
    },
    getPeerConfig: async (peerId, shareId) => {
      permissions.require(PluginPermissions.Cast.Read)
      return (await castService.fetchPeerConfig(peerId, shareId)) ?? undefined
    },
    send: async (peerId, source) => {
      permissions.require(PluginPermissions.Cast.Send)
      requireSourcePermissions(permissions, source)
      const prepared = await playerSessionService.prepare(
        source,
        {},
        {
          allowLocalNetwork: permissions.has(PluginPermissions.Network.Local)
        }
      )
      await castService.castToPeer(peerId, prepared.json)
    }
  }

  const networkApi: NetworkApi = {
    request: async (url, options = {}) => {
      permissions.require(PluginPermissions.Network.Http)
      if (options.allowLocalNetwork) permissions.require(PluginPermissions.Network.Local)
      return mapNetworkResponse(
        await secureFetch(url, {
          ...options,
          allowLocalNetwork: options.allowLocalNetwork === true
        })
      )
    },
    getText: async (url, options) =>
      new TextDecoder().decode((await networkApi.request(url, options)).body),
    getJson: async (url, options) =>
      JSON.parse(new TextDecoder().decode((await networkApi.request(url, options)).body))
  }

  const httpApi: HttpApi = {
    baseUrl: async () => httpApiService.getApiBaseUrl(),
    registerRoute: (route) => {
      permissions.require(PluginPermissions.Http.Routes)
      const dispose = httpApiService.registerRoute({
        method: route.method.toLowerCase() as 'get' | 'post' | 'put' | 'patch' | 'delete',
        path: route.path,
        namespace: manifest.name,
        requireAuth: route.requireAuth,
        summary: route.summary,
        description: route.description,
        handler: async (koaContext) => {
          const response = await route.handler({
            method: koaContext.method,
            path: koaContext.path,
            query: Object.fromEntries(
              Object.entries(koaContext.query).map(([key, value]) => [key, String(value)])
            ),
            headers: koaContext.headers as Record<string, string | string[]>,
            body: koaContext.request.body
          })
          if (response.status) koaContext.status = response.status
          if (response.headers) {
            for (const [name, value] of Object.entries(response.headers))
              koaContext.set(name, value)
          }
          return response.body
        }
      })
      return own(scope, { dispose })
    },
    configure: async (config) => {
      permissions.require(PluginPermissions.Http.Configure)
      return httpApiService.setConfig(config) as unknown as Record<string, unknown>
    },
    restart: async () => {
      permissions.require(PluginPermissions.Http.Configure)
      await httpApiService.restart()
    }
  }

  const deepLinksApi: DeepLinksApi = {
    register: (route, handler) => {
      permissions.require(PluginPermissions.DeepLinks.Register)
      const dispose = deepLinkManager.registerHandler(`${manifest.name}:${route}`, (payload) =>
        handler({ ...payload, query: { ...payload.query } })
      )
      return own(scope, { dispose })
    },
    dispatch: async (url) => {
      permissions.require(PluginPermissions.DeepLinks.Dispatch)
      await deepLinkManager.dispatch(url)
    },
    onOpened: (listener) => {
      permissions.require(PluginPermissions.Events.Subscribe)
      const dispose = deepLinkManager.registerHandler(
        `${manifest.name}:listener:${Date.now()}`,
        (payload) => {
          listener({ ...payload, query: { ...payload.query } })
          return false
        }
      )
      return own(scope, { dispose })
    }
  }

  const loggingApi: LoggingApi = {
    createLogger: (name) => ({
      debug: (message, ...details) => runtime.logger.debug?.(`[${name}] ${message}`, ...details),
      info: (message, ...details) => runtime.logger.info(`[${name}] ${message}`, ...details),
      warn: (message, ...details) => runtime.logger.warn(`[${name}] ${message}`, ...details),
      error: (message, ...details) => runtime.logger.error(`[${name}] ${message}`, ...details)
    }),
    entries: async () => {
      permissions.require(PluginPermissions.Logging.Read)
      return getLogs()
    }
  }

  const currentInfo = (): PluginInfo =>
    mapPluginInfo(environment.listPlugins().find((item) => item.name === manifest.name)!, manifest)
  const pluginsApi: PluginsApi = {
    current: currentInfo,
    list: async () => {
      permissions.require(PluginPermissions.Plugins.Read)
      return environment.listPlugins().map((item) => mapPluginInfo(item))
    },
    enable: async (name) => {
      permissions.require(PluginPermissions.Plugins.Manage)
      await environment.setEnabled(name, true)
    },
    disable: async (name) => {
      permissions.require(PluginPermissions.Plugins.Manage)
      await environment.setEnabled(name, false)
    },
    reload: async (name) => {
      permissions.require(PluginPermissions.Plugins.Manage)
      await environment.reload(name)
    }
  }

  const servicesApi: ServicesApi = {
    provide: (token, service) => {
      permissions.require(PluginPermissions.Services.Provide)
      return own(scope, { dispose: runtime.services.provide(token.id, service) })
    },
    use: async (token) => {
      permissions.require(PluginPermissions.Services.Consume)
      return runtime.services.inject(token.id)
    },
    has: (token) => runtime.services.has(token.id),
    rpc: (token) => {
      permissions.require(PluginPermissions.Services.Consume)
      return runtime.rpc.get(token)
    },
    exposeRpc: (token, service) => {
      permissions.require(PluginPermissions.Services.Provide)
      return own(scope, { dispose: runtime.rpc.expose(token, service) })
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
      own(scope, { dispose: runtime.settings.onChange(listener) })
  }

  const playerApi = createPlayerApiForContext(permissions, scope)
  const modules = [
    appModule,
    examsModule,
    createPluginApiValueModule('core.player', 'main', 'player', playerApi),
    createPluginApiValueModule('core.files', 'main', 'files', filesApi),
    createPluginApiValueModule('core.settings', 'main', 'settings', settingsApi),
    createPluginApiValueModule('core.windows', 'main', 'windows', windowsApi),
    createPluginApiValueModule('core.dialogs', 'main', 'dialogs', dialogsApi),
    createPluginApiValueModule('core.commands', 'main', 'commands', commandsApi),
    createPluginApiValueModule('core.events', 'main', 'events', eventsApi),
    createPluginApiValueModule('core.notifications', 'main', 'notifications', notificationsApi),
    createPluginApiValueModule('core.time', 'main', 'time', timeApi),
    createPluginApiValueModule('core.cast', 'main', 'cast', castApi),
    createPluginApiValueModule('core.network', 'main', 'network', networkApi),
    createPluginApiValueModule('core.http', 'main', 'http', httpApi),
    createPluginApiValueModule('core.deep-links', 'main', 'deepLinks', deepLinksApi),
    createPluginApiValueModule('core.logging', 'main', 'logging', loggingApi),
    createPluginApiValueModule('core.plugins', 'main', 'plugins', pluginsApi),
    createPluginApiValueModule('core.services', 'main', 'services', servicesApi)
  ] as const
  const registry = new PluginApiModuleRegistry(modules)
  const moduleApi = await registry.create({
    pluginName: manifest.name,
    process: 'main',
    permissions,
    scope
  })
  const api = moduleApi as unknown as ExamAwareMainApi

  return {
    process: 'main',
    plugin: {
      name: manifest.name,
      displayName: manifest.displayName,
      version: manifest.version,
      apiVersion: 2
    },
    logger: loggingApi.createLogger(manifest.name),
    permissions,
    scope,
    initialSettings: runtime.settings.all(),
    api
  }
}

function createPlayerApiForContext(
  permissions: ReturnType<typeof createPermissionApi>,
  scope: AsyncDisposableScope
): PlayerApi {
  const createHandle = (snapshot: PlayerSessionSnapshot): PlayerSession => ({
    id: snapshot.id,
    snapshot: async () => playerSessionService.get(snapshot.id),
    focus: async () => {
      permissions.require(PluginPermissions.Player.Control)
      playerSessionService.focus(snapshot.id)
    },
    close: async () => {
      permissions.require(PluginPermissions.Player.Control)
      await playerSessionService.close(snapshot.id)
    },
    replaceSource: async (source, options) => {
      permissions.require(PluginPermissions.Player.Start)
      requireSourcePermissions(permissions, source, options)
      return createHandle(
        await playerSessionService.replace(snapshot.id, source, options, {
          allowLocalNetwork: permissions.has(PluginPermissions.Network.Local)
        })
      )
    },
    dispose: async () => {
      permissions.require(PluginPermissions.Player.Control)
      if (playerSessionService.get(snapshot.id)?.state !== 'closed') {
        await playerSessionService.close(snapshot.id)
      }
    }
  })
  const start: PlayerApi['start'] = async (source, options) => {
    permissions.require(PluginPermissions.Player.Start)
    requireSourcePermissions(permissions, source, options)
    return createHandle(
      await playerSessionService.start(source, options, {
        allowLocalNetwork: permissions.has(PluginPermissions.Network.Local)
      })
    )
  }
  return {
    prepare: async (source, options) => {
      permissions.require(PluginPermissions.Player.Start)
      requireSourcePermissions(permissions, source, options)
      return playerSessionService.prepare(source, options, {
        allowLocalNetwork: permissions.has(PluginPermissions.Network.Local)
      })
    },
    start,
    startFromFile: (path, options) => start({ kind: 'file', path }, options),
    startFromConfig: (config, options) => start({ kind: 'config', config }, options),
    startFromJson: (data, options) => start({ kind: 'json', data }, options),
    startFromUrl: (url, options) => start({ kind: 'url', url }, options),
    getSession: async (id) => {
      permissions.require(PluginPermissions.Player.Observe)
      const snapshot = playerSessionService.get(id)
      return snapshot ? createHandle(snapshot) : undefined
    },
    listSessions: async () => {
      permissions.require(PluginPermissions.Player.Observe)
      return playerSessionService.list()
    },
    onSessionChanged: (listener) => {
      permissions.require(PluginPermissions.Player.Observe)
      const dispose = playerSessionService.onChanged(listener)
      return own(scope, { dispose: () => void dispose() })
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

function mapTimeInfo(info: ReturnType<typeof getTimeSyncInfo>) {
  return {
    now: getCurrentTimeMs(),
    offset: info.offset,
    lastSyncTime: info.lastSyncTime,
    serverAddress: info.serverAddress,
    status: info.syncStatus,
    errorMessage: info.errorMessage
  }
}

function mapNetworkResponse(result: Awaited<ReturnType<typeof secureFetch>>): NetworkResponse {
  return {
    status: result.status,
    headers: result.headers,
    body: result.body,
    text: () => new TextDecoder().decode(result.body),
    json: <T>() => JSON.parse(new TextDecoder().decode(result.body)) as T
  }
}

function mapPluginInfo(item: PluginListItem, manifest?: ResolvedPluginManifest): PluginInfo {
  return {
    name: item.name,
    displayName: item.displayName,
    version: item.version,
    status: item.status,
    enabled: item.enabled,
    apiVersion: manifest?.apiVersion ?? item.apiVersion ?? 1
  }
}

function fsWatch(path: string, listener: () => void) {
  return watchFile(path, listener)
}
