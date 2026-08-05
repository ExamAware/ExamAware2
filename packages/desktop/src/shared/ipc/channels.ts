import type {
  BrowserWindowConstructorOptions,
  MessageBoxOptions,
  MessageBoxReturnValue,
  OpenDialogOptions
} from 'electron'
import {
  dynamicEventEndpoint,
  dynamicSendEndpoint,
  eventEndpoint,
  invokeEndpoint,
  sendEndpoint
} from './contract'
import type { DeepLinkPayload } from '../types/deepLink'
import type {
  AppConfig,
  CastConfig,
  CastPeer,
  CastShareEntry,
  LogEntry,
  LoggingConfig,
  PlayerConfigStatus,
  RendererLogPayload,
  SharedConfigEntry,
  TimeSyncConfig,
  TimeSyncInfo
} from '../types/desktop'
import type { HttpApiConfig } from '../types/httpApi'
import type {
  PluginConfigPayload,
  PluginInstallResult,
  PluginListItem,
  PluginStatePayload,
  RegistryInstallProgress,
  RegistryInstallRequest,
  RegistryInstallResult,
  RegistryReadmeRequest,
  RegistryReadmeResult,
  ServiceProviderRecord
} from '../types/plugins'
import type { PluginSourceFetchRequest, PluginSourceFetchResult } from '../pluginSource'
import type { ReminderSoundPackImportResult, ReminderSoundPackSummary } from '../reminderSoundPack'
import type {
  ControlStatusSnapshot,
  FileStat,
  NetworkRequestOptions,
  PluginAppInfo,
  PlayerSessionEvent,
  PlayerSessionSnapshot,
  PlayerSource,
  PlayerStartOptions,
  PreparedPlayerSource
} from '@dsz-examaware/plugin-sdk'
import type { ControlAgentEvent } from '../types/control'

export interface WindowOpenRequest {
  id?: string
  route?: string
  options?: BrowserWindowConstructorOptions
}

export interface WindowOpenResult {
  id: string
  browserWindowId: number
}

export interface NetworkResponseWire {
  status: number
  headers: Record<string, string>
  body: Uint8Array
}

export const ipcChannels = {
  app: {
    getInfo: invokeEndpoint<[], PluginAppInfo>('app:info'),
    getVersion: invokeEndpoint<[], string>('app:get-version'),
    getAutoStart: invokeEndpoint<[], boolean>('autostart:get'),
    setAutoStart: invokeEndpoint<[enabled: boolean], boolean>('autostart:set'),
    showMessageBox: invokeEndpoint<[options: MessageBoxOptions], MessageBoxReturnValue>(
      'dialog:show-message-box'
    ),
    ping: sendEndpoint('ping'),
    quit: sendEndpoint('ui:app-quit')
  },
  config: {
    all: invokeEndpoint<[], AppConfig>('config:all'),
    get: invokeEndpoint<[key?: string, defaultValue?: any], any>('config:get'),
    set: invokeEndpoint<[key: string, value: any], boolean>('config:set'),
    patch: invokeEndpoint<[partial: AppConfig], boolean>('config:patch'),
    getPlayback: invokeEndpoint<[], string | null>('get-config'),
    setPlayback: sendEndpoint<[data: string]>('set-config'),
    changed: eventEndpoint<[config: AppConfig]>('config:changed'),
    loadPlayback: eventEndpoint<[data: string]>('load-config')
  },
  files: {
    selectExam: invokeEndpoint<[], string | null>('select-file'),
    open: invokeEndpoint<[options?: OpenDialogOptions], string | null>('open-file-dialog'),
    saveAs: invokeEndpoint<[], string | null>('save-file-dialog'),
    read: invokeEndpoint<[filePath: string], string | null>('read-file'),
    write: invokeEndpoint<[filePath: string, content: string], boolean>('save-file'),
    openMany: invokeEndpoint<[options?: OpenDialogOptions], string[]>('files:open'),
    save: invokeEndpoint<[options?: Electron.SaveDialogOptions], string | undefined>('files:save'),
    readText: invokeEndpoint<[filePath: string], string>('files:read-text'),
    readBytes: invokeEndpoint<[filePath: string], Uint8Array>('files:read-bytes'),
    writeText: invokeEndpoint<[filePath: string, content: string], void>('files:write-text'),
    writeBytes: invokeEndpoint<[filePath: string, content: Uint8Array], void>('files:write-bytes'),
    exists: invokeEndpoint<[filePath: string], boolean>('files:exists'),
    stat: invokeEndpoint<[filePath: string], FileStat | undefined>('files:stat')
  },
  network: {
    request: invokeEndpoint<[url: string, options?: NetworkRequestOptions], NetworkResponseWire>(
      'network:request'
    )
  },
  control: {
    getSnapshot: invokeEndpoint<[], ControlStatusSnapshot>('control:get-snapshot'),
    enroll: invokeEndpoint<
      [input: { serverUrl: string; enrollmentCode: string; displayName?: string }],
      ControlStatusSnapshot
    >('control:enroll'),
    clearEnrollment: invokeEndpoint<[], ControlStatusSnapshot>('control:clear-enrollment'),
    callProctor: invokeEndpoint<[input: { occurredAt: string }], void>('control:call-proctor'),
    onEvent: eventEndpoint<[event: ControlAgentEvent]>('control:event')
  },
  player: {
    prepare: invokeEndpoint<
      [source: PlayerSource, options?: PlayerStartOptions],
      PreparedPlayerSource
    >('player:prepare'),
    start: invokeEndpoint<
      [source: PlayerSource, options?: PlayerStartOptions],
      PlayerSessionSnapshot
    >('player:start'),
    replaceSession: invokeEndpoint<
      [id: string, source: PlayerSource, options?: PlayerStartOptions],
      PlayerSessionSnapshot
    >('player:session-replace'),
    getSession: invokeEndpoint<[id: string], PlayerSessionSnapshot | undefined>('player:session'),
    listSessions: invokeEndpoint<[], PlayerSessionSnapshot[]>('player:sessions'),
    focusSession: invokeEndpoint<[id: string], void>('player:session-focus'),
    closeSession: invokeEndpoint<[id: string], void>('player:session-close'),
    sessionChanged: eventEndpoint<[event: PlayerSessionEvent]>('player:session-changed'),
    openFromEditor: invokeEndpoint<[data: string], string>('player:open-from-editor'),
    openFromUrl: invokeEndpoint<[url: string], string>('player:open-from-url'),
    openWindow: sendEndpoint<[configPath: string]>('open-player-window'),
    configStatus: sendEndpoint<[status: PlayerConfigStatus]>('player:config-status'),
    exitWindow: sendEndpoint('player-window-exit')
  },
  reminderSounds: {
    list: invokeEndpoint<[], ReminderSoundPackSummary[]>('reminder-sounds:list'),
    import: invokeEndpoint<[], ReminderSoundPackImportResult>('reminder-sounds:import')
  },
  plugins: {
    list: invokeEndpoint<[], PluginListItem[]>('plugin:list'),
    toggle: invokeEndpoint<[name: string, enabled: boolean], PluginListItem[]>('plugin:toggle'),
    reload: invokeEndpoint<[name: string], PluginListItem[]>('plugin:reload'),
    uninstall: invokeEndpoint<[name: string], PluginListItem[]>('plugin:uninstall'),
    services: invokeEndpoint<[], ServiceProviderRecord[]>('plugin:services'),
    service: invokeEndpoint<[name: string, owner?: string], unknown>('plugin:service'),
    getConfig: invokeEndpoint<[name: string], Record<string, any> | undefined>('plugin:get-config'),
    setConfig: invokeEndpoint<
      [name: string, config: Record<string, any>],
      Record<string, any> | undefined
    >('plugin:set-config'),
    patchConfig: invokeEndpoint<
      [name: string, partial: Record<string, any>],
      Record<string, any> | undefined
    >('plugin:patch-config'),
    rendererEntry: invokeEndpoint<[name: string], string | undefined>('plugin:renderer-entry'),
    readme: invokeEndpoint<[name: string], string | undefined>('plugin:readme'),
    fetchSource: invokeEndpoint<[payload?: PluginSourceFetchRequest], PluginSourceFetchResult>(
      'plugin:fetch-source'
    ),
    installRegistry: invokeEndpoint<[request: RegistryInstallRequest], RegistryInstallResult>(
      'plugin:install-registry'
    ),
    registryReadme: invokeEndpoint<[request: RegistryReadmeRequest], RegistryReadmeResult>(
      'plugin:registry-readme'
    ),
    installPackage: invokeEndpoint<[filePath: string], PluginInstallResult>(
      'plugin:install-package'
    ),
    installDirectory: invokeEndpoint<[directory: string], PluginInstallResult>(
      'plugin:install-dir'
    ),
    stateChanged: eventEndpoint<[payload: PluginStatePayload]>('plugin:state'),
    configChanged: eventEndpoint<[payload: PluginConfigPayload]>('plugin:config'),
    registryProgress: eventEndpoint<[progress: RegistryInstallProgress]>('plugin:registry-progress')
  },
  httpApi: {
    getConfig: invokeEndpoint<[], HttpApiConfig>('http:get-config'),
    setConfig: invokeEndpoint<[config: Partial<HttpApiConfig>], HttpApiConfig>('http:set-config'),
    restart: invokeEndpoint<[], HttpApiConfig>('http:restart')
  },
  cast: {
    getConfig: invokeEndpoint<[], CastConfig>('cast:get-config'),
    setConfig: invokeEndpoint<[config: Partial<CastConfig>], CastConfig>('cast:set-config'),
    restart: invokeEndpoint<[], CastConfig>('cast:restart'),
    listPeers: invokeEndpoint<[], CastPeer[]>('cast:list-peers'),
    peerShares: invokeEndpoint<[peerId: string], CastShareEntry[]>('cast:peer-shares'),
    localShares: invokeEndpoint<[], CastShareEntry[]>('cast:local-shares'),
    sharedConfig: invokeEndpoint<[id?: string], string | null>('cast:shared-config'),
    setShares: invokeEndpoint<[shares: SharedConfigEntry[]], void>('cast:set-shares'),
    upsertShare: invokeEndpoint<[share: SharedConfigEntry], void>('cast:upsert-share'),
    peerConfig: invokeEndpoint<[payload: { peerId: string; shareId?: string }], string | null>(
      'cast:peer-config'
    ),
    send: invokeEndpoint<[payload: { peerId: string; config: string }], boolean>('cast:send')
  },
  logging: {
    pushRendererLog: sendEndpoint<[payload: RendererLogPayload]>('logs:renderer'),
    getLogs: invokeEndpoint<[], LogEntry[]>('logs:get'),
    clearLogs: sendEndpoint('logs:clear'),
    getConfig: invokeEndpoint<[], LoggingConfig>('logging:get-config'),
    setConfig: invokeEndpoint<[config: Partial<LoggingConfig>], LoggingConfig>(
      'logging:set-config'
    ),
    openDirectory: invokeEndpoint<[], void>('logging:open-dir'),
    clearFiles: invokeEndpoint<[], void>('logging:clear-files'),
    logAdded: eventEndpoint<[entry: LogEntry]>('logs:push')
  },
  timeSync: {
    getTime: invokeEndpoint<[], number>('time:get-synced-time'),
    getInfo: invokeEndpoint<[], TimeSyncInfo>('time:get-sync-info'),
    synchronize: invokeEndpoint<[], TimeSyncInfo>('time:sync-now'),
    updateConfig: invokeEndpoint<[config: Partial<TimeSyncConfig>], TimeSyncConfig>(
      'time:update-config'
    ),
    changed: eventEndpoint<[info: TimeSyncInfo]>('time:sync-changed')
  },
  windows: {
    open: invokeEndpoint<[request?: WindowOpenRequest], WindowOpenResult>('window:open'),
    close: invokeEndpoint<[id: string], void>('window:close'),
    get: invokeEndpoint<[id: string], WindowOpenResult | undefined>('window:get'),
    focus: invokeEndpoint<[id: string], void>('window:focus'),
    getCurrentId: invokeEndpoint<[], number | undefined>('window:id'),
    openMain: sendEndpoint('ui:open-main'),
    openEditor: sendEndpoint<[filePath?: string]>('open-editor-window'),
    openCast: sendEndpoint('open-cast-window'),
    openLogs: sendEndpoint('open-logs-window'),
    openSettings: sendEndpoint<[page?: string]>('open-settings-window'),
    openBindControl: sendEndpoint('open-bind-control-window'),
    settingsNavigate: eventEndpoint<[page: string]>('settings:navigate'),
    openPluginStore: sendEndpoint('open-plugin-store-window'),
    minimize: sendEndpoint('window-minimize'),
    closeCurrent: sendEndpoint('window-close'),
    toggleMaximize: sendEndpoint('window-maximize'),
    isMaximized: invokeEndpoint<[], boolean>('window-is-maximized'),
    setupStateListeners: sendEndpoint('setup-window-listeners'),
    setTitleBarTheme: sendEndpoint<[theme: 'light' | 'dark']>('window-titlebar-theme'),
    setNativeTheme: sendEndpoint<[source: 'light' | 'dark' | 'system']>('native-theme:set'),
    rendererReady: sendEndpoint<[payload: { windowId?: number }]>('renderer:ready'),
    maximized: eventEndpoint('window-maximize'),
    unmaximized: eventEndpoint('window-unmaximize'),
    openFileAtStartup: eventEndpoint<[filePath: string]>('open-file-at-startup'),
    requestEditorClose: eventEndpoint('editor:request-close')
  },
  deepLink: {
    dispatch: invokeEndpoint<[url: string], void>('deeplink:dispatch'),
    opened: eventEndpoint<[payload: DeepLinkPayload]>('deeplink:open')
  }
} as const

export function pluginRpcChannels(pluginName: string) {
  const channel = `plugin:rpc:${pluginName}`
  return {
    toMain: dynamicSendEndpoint<[message: string]>(channel),
    toRenderer: dynamicEventEndpoint<[message: string]>(channel)
  } as const
}
