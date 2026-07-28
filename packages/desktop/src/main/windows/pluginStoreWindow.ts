import { BrowserWindow } from 'electron'
import { windowManager } from './windowManager'

export function createPluginStoreWindow(): BrowserWindow {
  return windowManager.open(({ commonOptions }) => {
    const options: Electron.BrowserWindowConstructorOptions = {
      ...commonOptions(),
      width: 1120,
      height: 780,
      minWidth: 960,
      minHeight: 640,
      title: '插件商店'
    }

    return {
      id: 'plugin-store',
      route: 'plugin-store',
      options
    }
  }) as unknown as BrowserWindow
}
