import { BrowserWindow } from 'electron'
import { windowManager } from './windowManager'

export function createSettingsWindow(): BrowserWindow {
  return windowManager.open(({ commonOptions }) => {
    const options: Electron.BrowserWindowConstructorOptions = {
      ...commonOptions(),
      width: 920,
      height: 700,
      ...(process.platform !== 'linux'
        ? {
            titleBarStyle: 'hidden' as const,
            titleBarOverlay: { color: 'rgba(0,0,0,0)', height: 35, symbolColor: '#fff' }
          }
        : {}),
      title: '应用设置'
    }

    return {
      id: 'settings',
      route: 'settings',
      options
    }
  }) as unknown as BrowserWindow
}
