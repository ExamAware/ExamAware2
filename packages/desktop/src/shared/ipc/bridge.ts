import type { MessageBoxOptions, MessageBoxReturnValue, OpenDialogOptions } from 'electron'
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
import type { WindowOpenRequest, WindowOpenResult } from './channels'
import type {
  FileStat,
  NetworkRequestOptions,
  PluginAppInfo,
  PlayerSessionEvent,
  PlayerSessionSnapshot,
  PlayerSource,
  PlayerStartOptions,
  PreparedPlayerSource
} from '@dsz-examaware/plugin-sdk'
import type { NetworkResponseWire } from './channels'

export interface PluginRpcTransport {
  send(message: string): void
  onMessage(listener: (message: string) => void): () => void
}

export interface DesktopBridge {
  app: {
    info(): Promise<PluginAppInfo>
    getVersion(): Promise<string>
    getAutoStart(): Promise<boolean>
    setAutoStart(enabled: boolean): Promise<boolean>
    quit(): void
  }
  dialogs: {
    showMessageBox(options: MessageBoxOptions): Promise<MessageBoxReturnValue>
  }
  config: {
    all(): Promise<AppConfig>
    get<T = unknown>(key?: string, defaultValue?: T): Promise<T>
    set(key: string, value: unknown): Promise<boolean>
    patch(partial: AppConfig): Promise<boolean>
    getPlayback(): Promise<string | null>
    setPlayback(data: string): void
    onChanged(listener: (config: AppConfig) => void): () => void
    onPlayback(listener: (data: string) => void): () => void
  }
  files: {
    selectExam(): Promise<string | null>
    open(options?: OpenDialogOptions): Promise<string | null>
    saveAs(): Promise<string | null>
    read(filePath: string): Promise<string | null>
    write(filePath: string, content: string): Promise<boolean>
    openMany(options?: OpenDialogOptions): Promise<string[]>
    save(options?: Electron.SaveDialogOptions): Promise<string | undefined>
    readText(filePath: string): Promise<string>
    readBytes(filePath: string): Promise<Uint8Array>
    writeText(filePath: string, content: string): Promise<void>
    writeBytes(filePath: string, content: Uint8Array): Promise<void>
    exists(filePath: string): Promise<boolean>
    stat(filePath: string): Promise<FileStat | undefined>
  }
  network: {
    request(url: string, options?: NetworkRequestOptions): Promise<NetworkResponseWire>
  }
  player: {
    prepare(source: PlayerSource, options?: PlayerStartOptions): Promise<PreparedPlayerSource>
    start(source: PlayerSource, options?: PlayerStartOptions): Promise<PlayerSessionSnapshot>
    replaceSession(
      id: string,
      source: PlayerSource,
      options?: PlayerStartOptions
    ): Promise<PlayerSessionSnapshot>
    getSession(id: string): Promise<PlayerSessionSnapshot | undefined>
    listSessions(): Promise<PlayerSessionSnapshot[]>
    focusSession(id: string): Promise<void>
    closeSession(id: string): Promise<void>
    onSessionChanged(listener: (event: PlayerSessionEvent) => void): () => void
    openFromEditor(data: string): Promise<string>
    openFromUrl(url: string): Promise<string>
    openWindow(configPath: string): void
    reportConfigStatus(status: PlayerConfigStatus): void
    exitWindow(): void
  }
  reminderSounds: {
    list(): Promise<ReminderSoundPackSummary[]>
    import(): Promise<ReminderSoundPackImportResult>
  }
  plugins: {
    list(): Promise<PluginListItem[]>
    toggle(name: string, enabled: boolean): Promise<PluginListItem[]>
    reload(name: string): Promise<PluginListItem[]>
    uninstall(name: string): Promise<PluginListItem[]>
    services(): Promise<ServiceProviderRecord[]>
    service<T = unknown>(name: string, owner?: string): Promise<T | undefined>
    getConfig<T = Record<string, any>>(name: string): Promise<T | undefined>
    setConfig<T = Record<string, any>>(name: string, config: T): Promise<T | undefined>
    patchConfig<T = Record<string, any>>(name: string, partial: Partial<T>): Promise<T | undefined>
    onState(listener: (payload: PluginStatePayload) => void): () => void
    onConfig(name: string, listener: (config: Record<string, any>) => void): () => void
    rendererEntry(name: string): Promise<string | undefined>
    readme(name: string): Promise<string | undefined>
    fetchSourceIndex(payload?: PluginSourceFetchRequest): Promise<PluginSourceFetchResult>
    installFromRegistry(payload: RegistryInstallRequest): Promise<RegistryInstallResult>
    fetchRegistryReadme(payload: RegistryReadmeRequest): Promise<RegistryReadmeResult>
    installPackage(filePath: string): Promise<PluginInstallResult>
    installDirectory(directory: string): Promise<PluginInstallResult>
    onRegistryProgress(listener: (progress: RegistryInstallProgress) => void): () => void
    rpc(pluginName: string): PluginRpcTransport
  }
  httpApi: {
    getConfig(): Promise<HttpApiConfig>
    setConfig(config: Partial<HttpApiConfig>): Promise<HttpApiConfig>
    restart(): Promise<HttpApiConfig>
  }
  cast: {
    getConfig(): Promise<CastConfig>
    setConfig(config: Partial<CastConfig>): Promise<CastConfig>
    restart(): Promise<CastConfig>
    listPeers(): Promise<CastPeer[]>
    peerShares(peerId: string): Promise<CastShareEntry[]>
    localShares(): Promise<CastShareEntry[]>
    sharedConfig(id?: string): Promise<string | null>
    setShares(shares: SharedConfigEntry[]): Promise<void>
    upsertShare(share: SharedConfigEntry): Promise<void>
    peerConfig(peerId: string, shareId?: string): Promise<string | null>
    send(peerId: string, config: string): Promise<boolean>
  }
  logging: {
    pushRendererLog(payload: RendererLogPayload): void
    getLogs(): Promise<LogEntry[]>
    clearLogs(): void
    getConfig(): Promise<LoggingConfig>
    setConfig(config: Partial<LoggingConfig>): Promise<LoggingConfig>
    openDirectory(): Promise<void>
    clearFiles(): Promise<void>
    onLogAdded(listener: (entry: LogEntry) => void): () => void
  }
  timeSync: {
    getTime(): Promise<number>
    getInfo(): Promise<TimeSyncInfo>
    synchronize(): Promise<TimeSyncInfo>
    updateConfig(config: Partial<TimeSyncConfig>): Promise<TimeSyncConfig>
    onChanged(listener: (info: TimeSyncInfo) => void): () => void
  }
  windows: {
    platform: string
    open(request?: WindowOpenRequest): Promise<WindowOpenResult>
    close(id: string): Promise<void>
    get(id: string): Promise<WindowOpenResult | undefined>
    focus(id: string): Promise<void>
    currentId(): Promise<number | undefined>
    openMain(): void
    openEditor(filePath?: string): void
    openCast(): void
    openLogs(): void
    openSettings(page?: string): void
    openPluginStore(): void
    minimize(): void
    closeCurrent(): void
    toggleMaximize(): void
    isMaximized(): Promise<boolean>
    setupStateListeners(): void
    setTitleBarTheme(theme: 'light' | 'dark'): void
    setNativeTheme(source: 'light' | 'dark' | 'system'): void
    rendererReady(windowId?: number): void
    onMaximized(listener: () => void): () => void
    onUnmaximized(listener: () => void): () => void
    onOpenFileAtStartup(listener: (filePath: string) => void): () => void
    onEditorCloseRequested(listener: () => void): () => void
  }
  deepLink: {
    dispatch(url: string): Promise<void>
    onOpened(listener: (payload: DeepLinkPayload) => void): () => void
  }
}
