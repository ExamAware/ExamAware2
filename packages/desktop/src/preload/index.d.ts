import { ElectronAPI } from '@electron-toolkit/preload'
import type { MessageBoxOptions, MessageBoxReturnValue } from 'electron'
import type {
  PluginListItem,
  RegistryInstallProgress,
  RegistryInstallResult,
  RegistryReadmeResult,
  ServiceProviderRecord,
  PluginSourceFetchRequest,
  PluginSourceFetchResult
} from '../main/plugin/types'
import type { HttpApiConfig } from '../main/http/httpApiService'
import type { CastConfig } from '../main/cast/castService'

declare global {
  interface Window {
    electron: ElectronAPI
    electronAPI: {
      minimize: () => void
      close: () => void
      maximize: () => void
      isMaximized: () => Promise<boolean>
      setupListeners: () => void
      platform: string
      onOpenFileAtStartup?: (callback: (filePath: string) => void) => void
      setTitlebarTheme?: (theme: 'light' | 'dark') => void
      setNativeTheme?: (source: 'light' | 'dark' | 'system') => void
    }
    api: {
      fileApi: any
      readFile: (filePath: string) => Promise<string>
      saveFile: (filePath: string, content: string) => Promise<boolean>
      saveFileDialog: () => Promise<string | undefined>
      openFileDialog: (
        options?: import('electron').OpenDialogOptions
      ) => Promise<string | undefined>
      config: {
        all: () => Promise<any>
        get: (key?: string, def?: any) => Promise<any>
        set: (key: string, value: any) => Promise<boolean>
        patch: (partial: any) => Promise<boolean>
        onChanged: (listener: (config: any) => void) => () => void
      }
      dialog: {
        showMessageBox: (options: MessageBoxOptions) => Promise<MessageBoxReturnValue>
      }
      player: {
        openFromEditor: (data: string) => Promise<string | void>
      }
      plugins: {
        list: () => Promise<PluginListItem[]>
        toggle: (name: string, enabled: boolean) => Promise<PluginListItem[]>
        reload: (name: string) => Promise<PluginListItem[]>
        uninstall: (name: string) => Promise<PluginListItem[]>
        services: () => Promise<ServiceProviderRecord[]>
        service: <T = unknown>(name: string, owner?: string) => Promise<T | undefined>
        getConfig: <T = Record<string, any>>(name: string) => Promise<T | undefined>
        setConfig: <T = Record<string, any>>(name: string, config: T) => Promise<T | undefined>
        patchConfig: <T = Record<string, any>>(
          name: string,
          partial: Partial<T>
        ) => Promise<T | undefined>
        onState: (
          listener: (payload: { list: PluginListItem[]; services: ServiceProviderRecord[] }) => void
        ) => () => void
        onRegistryProgress: (listener: (progress: RegistryInstallProgress) => void) => () => void
        onConfig: (name: string, listener: (config: Record<string, any>) => void) => () => void
        rendererEntry: (name: string) => Promise<string | undefined>
        readme: (name: string) => Promise<string | undefined>
        fetchSourceIndex: (payload?: PluginSourceFetchRequest) => Promise<PluginSourceFetchResult>
        installFromRegistry: (payload: {
          pkg: string
          versionRange?: string
          registry?: string
          requestId?: string
        }) => Promise<RegistryInstallResult>
        fetchRegistryReadme: (payload: {
          pkg: string
          version?: string
          registry?: string
        }) => Promise<RegistryReadmeResult>
        installPackage: (
          filePath: string
        ) => Promise<{ installedPath: string; list: PluginListItem[] }>
        installDir: (dirPath: string) => Promise<{ installedPath: string; list: PluginListItem[] }>
      }
      http: {
        getConfig: () => Promise<HttpApiConfig>
        setConfig: (cfg: Partial<HttpApiConfig>) => Promise<HttpApiConfig>
        restart: () => Promise<HttpApiConfig>
      }
      cast: {
        getConfig: () => Promise<CastConfig>
        setConfig: (cfg: Partial<CastConfig>) => Promise<CastConfig>
        restart: () => Promise<CastConfig>
        listPeers: () => Promise<any>
        peerShares: (peerId: string) => Promise<any>
        localShares: () => Promise<any>
        sharedConfig: (id?: string) => Promise<string | null>
        setShares: (shares: any[]) => Promise<void>
        upsertShare: (share: any) => Promise<void>
        peerConfig: (peerId: string, shareId?: string) => Promise<string | null>
        send: (peerId: string, config: string) => Promise<any>
      }
      logging: {
        getConfig: () => Promise<any>
        setConfig: (cfg: any) => Promise<any>
        openDir: () => Promise<void>
        clearFiles: () => Promise<void>
      }
      system: {
        autostart: {
          get: () => Promise<boolean>
          set: (enable: boolean) => Promise<boolean>
        }
      }
      app: {
        getVersion: () => Promise<string>
      }
      deeplink: {
        onOpen: (
          listener: (payload: import('../shared/types/deepLink').DeepLinkPayload) => void
        ) => () => void
      }
      ipc: {
        send: (channel: string, ...args: any[]) => void
        invoke: (channel: string, ...args: any[]) => Promise<any>
        on: (channel: string, listener: (...args: any[]) => void) => void
        off: (channel: string, listener: (...args: any[]) => void) => void
        removeAllListeners: (channel: string) => void
      }
      windows: {
        open: (payload?: {
          id?: string
          route?: string
          options?: Electron.BrowserWindowConstructorOptions
        }) => Promise<{ id: string; browserWindowId: number }>
        close: (id: string) => Promise<void>
        currentId: () => Promise<number | undefined>
      }
    }
  }
}
