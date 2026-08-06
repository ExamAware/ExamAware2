import { app, BrowserWindow, dialog, type MessageBoxOptions, type WebContents } from 'electron'
import * as fs from 'fs'
import * as path from 'path'
import { ipcChannels } from '../../../shared/ipc/channels'
import { appLogger } from '../../logging/logger'
import { controlService } from '../../control/controlService'
import { createMainWindow } from '../../windows/mainWindow'
import type { IpcRegistrar } from '../ipcRegistrar'
import { deepLinkManager } from '../../deepLink/deepLinkManager'

export function registerAppHandlers(ipc: IpcRegistrar) {
  ipc.handle(ipcChannels.app.getInfo, () => ({
    name: app.getName(),
    version: app.getVersion(),
    platform: process.platform,
    packaged: app.isPackaged
  }))
  ipc.on(ipcChannels.app.ping, () => appLogger.debug('[ipc] pong'))
  ipc.handle(ipcChannels.app.getVersion, () => app.getVersion())
  ipc.handle(ipcChannels.app.showMessageBox, (event, options: MessageBoxOptions) =>
    showMessageBox(event, options)
  )
  ipc.handle(ipcChannels.app.getAutoStart, () => getAutoStart())
  ipc.handle(ipcChannels.app.setAutoStart, (_event, enabled) => setAutoStart(enabled))
  ipc.handle(ipcChannels.deepLink.dispatch, (_event, url) => deepLinkManager.dispatch(url))
  ipc.on(ipcChannels.windows.openMain, () => createMainWindow())
  ipc.on(ipcChannels.app.quit, () => {
    if (controlService.isQuitPrevented()) {
      appLogger.warn('[app] quit blocked by control policy')
      return
    }
    ;(app as any).isQuitting = true
    app.quit()
  })
}

function showMessageBox(event: { sender: WebContents }, options: MessageBoxOptions) {
  const window = BrowserWindow.fromWebContents(event.sender)
  return window ? dialog.showMessageBox(window, options) : dialog.showMessageBox(options)
}

function getAutoStart() {
  try {
    if (process.platform === 'darwin' || process.platform === 'win32') {
      return !!app.getLoginItemSettings().openAtLogin
    }
    if (process.platform === 'linux') {
      return fs.existsSync(getLinuxDesktopEntryPath())
    }
  } catch (error) {
    appLogger.error('autostart:get failed', error as Error)
  }
  return false
}

function setAutoStart(enabled: boolean) {
  try {
    if (process.platform === 'darwin' || process.platform === 'win32') {
      app.setLoginItemSettings({ openAtLogin: enabled })
      return true
    }
    if (process.platform === 'linux') {
      const file = getLinuxDesktopEntryPath()
      if (!enabled) {
        try {
          fs.unlinkSync(file)
        } catch {}
        return true
      }

      fs.mkdirSync(path.dirname(file), { recursive: true })
      const executable = process.env.APPIMAGE || process.execPath
      fs.writeFileSync(
        file,
        buildDesktopEntry({
          name: app.getName(),
          comment: 'Start this application on login',
          exec: `${executable} --autostart`,
          icon: getLinuxIconPath()
        }),
        'utf-8'
      )
      return true
    }
  } catch (error) {
    appLogger.error('autostart:set failed', error as Error)
    return false
  }
  return false
}

function getLinuxDesktopEntryPath() {
  const fileName = app.getName().replace(/\s+/g, '-')
  return path.join(app.getPath('home'), '.config', 'autostart', `${fileName}.desktop`)
}

function buildDesktopEntry(options: {
  name: string
  comment?: string
  exec: string
  icon?: string
}) {
  const escapedExec = options.exec.replace(/\\/g, '\\\\').replace(/ /g, '\\ ')
  const iconLine = options.icon ? `Icon=${options.icon}` : ''
  return (
    [
      '[Desktop Entry]',
      'Type=Application',
      `Name=${options.name}`,
      `Comment=${options.comment || ''}`,
      `Exec=${escapedExec}`,
      'Terminal=false',
      'X-GNOME-Autostart-enabled=true',
      iconLine,
      'Categories=Utility;'
    ]
      .filter(Boolean)
      .join('\n') + '\n'
  )
}

function getLinuxIconPath(): string | undefined {
  try {
    const candidates = [
      path.join(process.resourcesPath || '', 'icon.png'),
      path.join(__dirname, '../../resources/icon.png')
    ]
    return candidates.find((candidate) => candidate && fs.existsSync(candidate))
  } catch {
    return undefined
  }
}
