import { app } from 'electron'
import * as fs from 'fs'
import * as path from 'path'
import { appLogger } from '../logging/winstonLogger'

export function getSystemAutoStart(): boolean {
  try {
    // macOS / Windows：内置 API
    if (process.platform === 'darwin' || process.platform === 'win32') {
      const s = app.getLoginItemSettings()
      return !!s.openAtLogin
    }
    // Linux：通过 ~/.config/autostart/*.desktop 判断
    if (process.platform === 'linux') {
      const desktopPath = path.join(app.getPath('home'), '.config', 'autostart')
      const file = path.join(desktopPath, `${sanitizeDesktopFileName(app.getName())}.desktop`)
      return fs.existsSync(file)
    }
  } catch (e) {
    appLogger.error('[autoStart] get failed', e as Error)
  }
  return false
}

export function setSystemAutoStart(enable: boolean): boolean {
  try {
    if (process.platform === 'darwin' || process.platform === 'win32') {
      app.setLoginItemSettings({ openAtLogin: enable })
      return true
    }
    if (process.platform === 'linux') {
      const desktopDir = path.join(app.getPath('home'), '.config', 'autostart')
      const file = path.join(desktopDir, `${sanitizeDesktopFileName(app.getName())}.desktop`)
      if (!enable) {
        try {
          fs.unlinkSync(file)
        } catch {}
        return true
      }
      fs.mkdirSync(desktopDir, { recursive: true })
      const execPath = process.env.APPIMAGE || process.execPath
      const content = buildDesktopEntry({
        name: app.getName(),
        comment: 'Start this application on login',
        exec: execPath + ' --autostart',
        icon: getLinuxIconPathSafe()
      })
      fs.writeFileSync(file, content, 'utf-8')
      return true
    }
  } catch (e) {
    appLogger.error('[autoStart] set failed', e as Error)
    return false
  }
  return false
}

function sanitizeDesktopFileName(name: string) {
  return name.replace(/\s+/g, '-')
}

function buildDesktopEntry(opts: { name: string; comment?: string; exec: string; icon?: string }) {
  // 注意：Exec 需转义空格与反斜杠，避免生成的 desktop 文件被错误解析
  const execEscaped = opts.exec.replace(/\\/g, '\\\\').replace(/ /g, '\\ ')
  const iconLine = opts.icon ? `Icon=${opts.icon}\n` : ''
  return (
    [
      '[Desktop Entry]',
      'Type=Application',
      `Name=${opts.name}`,
      `Comment=${opts.comment || ''}`,
      `Exec=${execEscaped}`,
      'Terminal=false',
      'X-GNOME-Autostart-enabled=true',
      iconLine.trimEnd(),
      'Categories=Utility;'
    ]
      .filter(Boolean)
      .join('\n') + '\n'
  )
}

function getLinuxIconPathSafe(): string | undefined {
  try {
    // 尝试使用打包资源图标
    const possible = [
      path.join(process.resourcesPath || '', 'icon.png'),
      path.join(__dirname, '../../resources/icon.png')
    ]
    for (const p of possible) {
      if (p && fs.existsSync(p)) return p
    }
  } catch {}
  return undefined
}
