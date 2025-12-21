import { ElectronAPI } from '@electron-toolkit/preload'
import type { MessageBoxOptions, MessageBoxReturnValue } from 'electron'
import type { PluginListItem, ServiceProviderRecord } from '../main/plugin/types'

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
        onConfig: (name: string, listener: (config: Record<string, any>) => void) => () => void
        rendererEntry: (name: string) => Promise<string | undefined>
        readme: (name: string) => Promise<string | undefined>
        installPackage: (
          filePath: string
        ) => Promise<{ installedPath: string; list: PluginListItem[] }>
        installDir: (dirPath: string) => Promise<{ installedPath: string; list: PluginListItem[] }>
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
    }
  }
}
