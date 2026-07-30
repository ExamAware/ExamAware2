import { contextBridge, ipcRenderer } from 'electron'
import type { DesktopBridge } from '../shared/ipc/bridge'
import { ipcChannels, pluginRpcChannels } from '../shared/ipc/channels'
import { createIpcClient } from '../shared/ipc/client'

const ipc = createIpcClient(ipcRenderer)
const LOG_COOLDOWN_MS = 50
const lastLogSent: Partial<Record<'log' | 'info' | 'warn' | 'error' | 'debug', number>> = {}

const serializeLogValue = (value: unknown) => {
  if (value instanceof Error) return value.stack || value.message
  if (typeof value === 'string') return value
  try {
    return JSON.stringify(value)
  } catch {
    return String(value)
  }
}

const sendLogThrottled = (level: 'log' | 'info' | 'warn' | 'error' | 'debug', message: string) => {
  const now = Date.now()
  const last = lastLogSent[level] ?? 0
  if (now - last < LOG_COOLDOWN_MS) return
  lastLogSent[level] = now
  ipc.send(ipcChannels.logging.pushRendererLog, { level, message })
}

const api: DesktopBridge = {
  app: {
    info: () => ipc.invoke(ipcChannels.app.getInfo),
    getVersion: () => ipc.invoke(ipcChannels.app.getVersion),
    getAutoStart: () => ipc.invoke(ipcChannels.app.getAutoStart),
    setAutoStart: (enabled) => ipc.invoke(ipcChannels.app.setAutoStart, enabled),
    quit: () => ipc.send(ipcChannels.app.quit)
  },
  dialogs: {
    showMessageBox: (options) => ipc.invoke(ipcChannels.app.showMessageBox, options)
  },
  config: {
    all: () => ipc.invoke(ipcChannels.config.all),
    get: (key, defaultValue) => ipc.invoke(ipcChannels.config.get, key, defaultValue),
    set: (key, value) => ipc.invoke(ipcChannels.config.set, key, value),
    patch: (partial) => ipc.invoke(ipcChannels.config.patch, partial),
    getPlayback: () => ipc.invoke(ipcChannels.config.getPlayback),
    setPlayback: (data) => ipc.send(ipcChannels.config.setPlayback, data),
    onChanged: (listener) => ipc.on(ipcChannels.config.changed, listener),
    onPlayback: (listener) => ipc.on(ipcChannels.config.loadPlayback, listener)
  },
  files: {
    selectExam: () => ipc.invoke(ipcChannels.files.selectExam),
    open: (options) => ipc.invoke(ipcChannels.files.open, options),
    saveAs: () => ipc.invoke(ipcChannels.files.saveAs),
    read: (filePath) => ipc.invoke(ipcChannels.files.read, filePath),
    write: (filePath, content) => ipc.invoke(ipcChannels.files.write, filePath, content),
    openMany: (options) => ipc.invoke(ipcChannels.files.openMany, options),
    save: (options) => ipc.invoke(ipcChannels.files.save, options),
    readText: (filePath) => ipc.invoke(ipcChannels.files.readText, filePath),
    readBytes: (filePath) => ipc.invoke(ipcChannels.files.readBytes, filePath),
    writeText: (filePath, content) => ipc.invoke(ipcChannels.files.writeText, filePath, content),
    writeBytes: (filePath, content) => ipc.invoke(ipcChannels.files.writeBytes, filePath, content),
    exists: (filePath) => ipc.invoke(ipcChannels.files.exists, filePath),
    stat: (filePath) => ipc.invoke(ipcChannels.files.stat, filePath)
  },
  network: {
    request: (url, options) => ipc.invoke(ipcChannels.network.request, url, options)
  },
  player: {
    prepare: (source, options) => ipc.invoke(ipcChannels.player.prepare, source, options),
    start: (source, options) => ipc.invoke(ipcChannels.player.start, source, options),
    replaceSession: (id, source, options) =>
      ipc.invoke(ipcChannels.player.replaceSession, id, source, options),
    getSession: (id) => ipc.invoke(ipcChannels.player.getSession, id),
    listSessions: () => ipc.invoke(ipcChannels.player.listSessions),
    focusSession: (id) => ipc.invoke(ipcChannels.player.focusSession, id),
    closeSession: (id) => ipc.invoke(ipcChannels.player.closeSession, id),
    onSessionChanged: (listener) => ipc.on(ipcChannels.player.sessionChanged, listener),
    openFromEditor: (data) => ipc.invoke(ipcChannels.player.openFromEditor, data),
    openFromUrl: (url) => ipc.invoke(ipcChannels.player.openFromUrl, url),
    openWindow: (configPath) => ipc.send(ipcChannels.player.openWindow, configPath),
    reportConfigStatus: (status) => ipc.send(ipcChannels.player.configStatus, status),
    exitWindow: () => ipc.send(ipcChannels.player.exitWindow)
  },
  reminderSounds: {
    list: () => ipc.invoke(ipcChannels.reminderSounds.list),
    import: () => ipc.invoke(ipcChannels.reminderSounds.import)
  },
  plugins: {
    list: () => ipc.invoke(ipcChannels.plugins.list),
    toggle: (name, enabled) => ipc.invoke(ipcChannels.plugins.toggle, name, enabled),
    reload: (name) => ipc.invoke(ipcChannels.plugins.reload, name),
    uninstall: (name) => ipc.invoke(ipcChannels.plugins.uninstall, name),
    services: () => ipc.invoke(ipcChannels.plugins.services),
    service: (name, owner) => ipc.invoke(ipcChannels.plugins.service, name, owner) as any,
    getConfig: (name) => ipc.invoke(ipcChannels.plugins.getConfig, name) as any,
    setConfig: (name, config) =>
      ipc.invoke(ipcChannels.plugins.setConfig, name, config as Record<string, any>) as any,
    patchConfig: (name, partial) =>
      ipc.invoke(ipcChannels.plugins.patchConfig, name, partial) as any,
    onState: (listener) => ipc.on(ipcChannels.plugins.stateChanged, listener),
    onConfig: (name, listener) =>
      ipc.on(ipcChannels.plugins.configChanged, (payload) => {
        if (payload.name === name) listener(payload.config ?? {})
      }),
    rendererEntry: (name) => ipc.invoke(ipcChannels.plugins.rendererEntry, name),
    readme: (name) => ipc.invoke(ipcChannels.plugins.readme, name),
    fetchSourceIndex: (payload) => ipc.invoke(ipcChannels.plugins.fetchSource, payload),
    installFromRegistry: (payload) => ipc.invoke(ipcChannels.plugins.installRegistry, payload),
    fetchRegistryReadme: (payload) => ipc.invoke(ipcChannels.plugins.registryReadme, payload),
    installPackage: (filePath) => ipc.invoke(ipcChannels.plugins.installPackage, filePath),
    installDirectory: (directory) => ipc.invoke(ipcChannels.plugins.installDirectory, directory),
    onRegistryProgress: (listener) => ipc.on(ipcChannels.plugins.registryProgress, listener),
    rpc: (pluginName) => {
      const channels = pluginRpcChannels(pluginName)
      return {
        send: (message) => ipc.send(channels.toMain, message),
        onMessage: (listener) => ipc.on(channels.toRenderer, listener)
      }
    }
  },
  httpApi: {
    getConfig: () => ipc.invoke(ipcChannels.httpApi.getConfig),
    setConfig: (config) => ipc.invoke(ipcChannels.httpApi.setConfig, config),
    restart: () => ipc.invoke(ipcChannels.httpApi.restart)
  },
  cast: {
    getConfig: () => ipc.invoke(ipcChannels.cast.getConfig),
    setConfig: (config) => ipc.invoke(ipcChannels.cast.setConfig, config),
    restart: () => ipc.invoke(ipcChannels.cast.restart),
    listPeers: () => ipc.invoke(ipcChannels.cast.listPeers),
    peerShares: (peerId) => ipc.invoke(ipcChannels.cast.peerShares, peerId),
    localShares: () => ipc.invoke(ipcChannels.cast.localShares),
    sharedConfig: (id) => ipc.invoke(ipcChannels.cast.sharedConfig, id),
    setShares: (shares) => ipc.invoke(ipcChannels.cast.setShares, shares),
    upsertShare: (share) => ipc.invoke(ipcChannels.cast.upsertShare, share),
    peerConfig: (peerId, shareId) => ipc.invoke(ipcChannels.cast.peerConfig, { peerId, shareId }),
    send: (peerId, config) => ipc.invoke(ipcChannels.cast.send, { peerId, config })
  },
  logging: {
    pushRendererLog: (payload) => ipc.send(ipcChannels.logging.pushRendererLog, payload),
    getLogs: () => ipc.invoke(ipcChannels.logging.getLogs),
    clearLogs: () => ipc.send(ipcChannels.logging.clearLogs),
    getConfig: () => ipc.invoke(ipcChannels.logging.getConfig),
    setConfig: (config) => ipc.invoke(ipcChannels.logging.setConfig, config),
    openDirectory: () => ipc.invoke(ipcChannels.logging.openDirectory),
    clearFiles: () => ipc.invoke(ipcChannels.logging.clearFiles),
    onLogAdded: (listener) => ipc.on(ipcChannels.logging.logAdded, listener)
  },
  timeSync: {
    getTime: () => ipc.invoke(ipcChannels.timeSync.getTime),
    getInfo: () => ipc.invoke(ipcChannels.timeSync.getInfo),
    synchronize: () => ipc.invoke(ipcChannels.timeSync.synchronize),
    updateConfig: (config) => ipc.invoke(ipcChannels.timeSync.updateConfig, config),
    onChanged: (listener) => ipc.on(ipcChannels.timeSync.changed, listener)
  },
  windows: {
    platform: process.platform,
    open: (request) => ipc.invoke(ipcChannels.windows.open, request),
    close: (id) => ipc.invoke(ipcChannels.windows.close, id),
    get: (id) => ipc.invoke(ipcChannels.windows.get, id),
    focus: (id) => ipc.invoke(ipcChannels.windows.focus, id),
    currentId: () => ipc.invoke(ipcChannels.windows.getCurrentId),
    openMain: () => ipc.send(ipcChannels.windows.openMain),
    openEditor: (filePath) => ipc.send(ipcChannels.windows.openEditor, filePath),
    openCast: () => ipc.send(ipcChannels.windows.openCast),
    openLogs: () => ipc.send(ipcChannels.windows.openLogs),
    openSettings: (page) => ipc.send(ipcChannels.windows.openSettings, page),
    openPluginStore: () => ipc.send(ipcChannels.windows.openPluginStore),
    minimize: () => ipc.send(ipcChannels.windows.minimize),
    closeCurrent: () => ipc.send(ipcChannels.windows.closeCurrent),
    toggleMaximize: () => ipc.send(ipcChannels.windows.toggleMaximize),
    isMaximized: () => ipc.invoke(ipcChannels.windows.isMaximized),
    setupStateListeners: () => ipc.send(ipcChannels.windows.setupStateListeners),
    setTitleBarTheme: (theme) => ipc.send(ipcChannels.windows.setTitleBarTheme, theme),
    setNativeTheme: (source) => ipc.send(ipcChannels.windows.setNativeTheme, source),
    rendererReady: (windowId) => ipc.send(ipcChannels.windows.rendererReady, { windowId }),
    onMaximized: (listener) => ipc.on(ipcChannels.windows.maximized, listener),
    onUnmaximized: (listener) => ipc.on(ipcChannels.windows.unmaximized, listener),
    onOpenFileAtStartup: (listener) => ipc.on(ipcChannels.windows.openFileAtStartup, listener),
    onEditorCloseRequested: (listener) => ipc.on(ipcChannels.windows.requestEditorClose, listener)
  },
  deepLink: {
    dispatch: (url) => ipc.invoke(ipcChannels.deepLink.dispatch, url),
    onOpened: (listener) => ipc.on(ipcChannels.deepLink.opened, listener)
  }
}

function installConsoleForwarding() {
  const levels: Array<'log' | 'info' | 'warn' | 'error' | 'debug'> = [
    'log',
    'info',
    'warn',
    'error',
    'debug'
  ]
  const original: Partial<Record<(typeof levels)[number], (...args: any[]) => void>> = {}
  levels.forEach((level) => {
    original[level] = console[level]
    console[level] = (...args: any[]) => {
      try {
        sendLogThrottled(level, args.map(serializeLogValue).join(' '))
      } catch {}
      try {
        original[level]?.apply(console, args)
      } catch {}
    }
  })
}

if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('api', api)
    installConsoleForwarding()
  } catch (error) {
    console.error(error)
  }
} else {
  Object.assign(globalThis, { api })
  installConsoleForwarding()
}
