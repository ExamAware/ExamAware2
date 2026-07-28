import { BrowserWindow } from 'electron'
import { windowManager } from './windowManager'

export function createSettingsWindow(page?: string): BrowserWindow {
  return windowManager.open(({ commonOptions }) => {
    const options: Electron.BrowserWindowConstructorOptions = {
      ...commonOptions(),
      width: 1280,
      height: 700,
      title: '应用设置'
    }

    return {
      id: 'settings',
      route: page ? `settings/${page}` : 'settings',
      options
    }
  }) as unknown as BrowserWindow
}
