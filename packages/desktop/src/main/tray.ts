import { Tray, Menu, app, nativeImage } from 'electron'
import * as path from 'path'
import * as fs from 'fs'
import { appLogger } from './logging/winstonLogger'
import { createSettingsWindow } from './windows/settingsWindow'
import { createMainWindow } from './windows/mainWindow'
import { isHarmonyOS } from './platform'

let tray: Tray | null = null
let trayMenu: ReturnType<typeof Menu.buildFromTemplate> | null = null
let suppressActivateUntil = 0

function log(...args: any[]) {
  try {
    appLogger.debug('[tray]', ...args)
  } catch {}
}

export function shouldSuppressActivate(): boolean {
  const s = Date.now() < suppressActivateUntil
  if (s) log('activate suppressed, until =', new Date(suppressActivateUntil).toISOString())
  return s
}

function markTrayInteractionSuppress(ms = 1500) {
  suppressActivateUntil = Date.now() + ms
  log('mark suppress activate for', ms, 'ms, until', new Date(suppressActivateUntil).toISOString())
}

function resolveIcon(): string | undefined {
  try {
    const appPath = app.getAppPath?.() ?? ''
    // Prefer tray-specific assets if present, fall back to app icon
    const candidates = [
      // packaged extraResources (electron-builder asarUnpack)
      path.join(process.resourcesPath || '', 'resources/icon-tray.png'),
      path.join(process.resourcesPath || '', 'resources/trayTemplate.png'),
      path.join(process.resourcesPath || '', 'resources/icon.png'),
      // packaged root (some packagers flatten)
      path.join(process.resourcesPath || '', 'icon-tray.png'),
      path.join(process.resourcesPath || '', 'trayTemplate.png'),
      path.join(process.resourcesPath || '', 'icon.png'),
      // dev/as ar paths relative to compiled main
      path.join(__dirname, '../resources/icon-tray.png'),
      path.join(__dirname, '../resources/trayTemplate.png'),
      path.join(__dirname, '../resources/icon.png'),
      path.join(__dirname, '../../resources/icon-tray.png'),
      path.join(__dirname, '../../resources/trayTemplate.png'),
      path.join(__dirname, '../../resources/icon.png'),
      // project root fallback (dev when __dirname is dist/main)
      path.join(appPath, 'resources/icon-tray.png'),
      path.join(appPath, 'resources/trayTemplate.png'),
      path.join(appPath, 'resources/icon.png'),
      path.join(appPath, 'build/icon.png')
    ]
    for (const p of candidates) if (fs.existsSync(p)) return p
  } catch {}
  return undefined
}

function buildTrayImage(): Electron.NativeImage {
  const iconPath = resolveIcon()
  let image = iconPath ? nativeImage.createFromPath(iconPath) : nativeImage.createEmpty()
  if (process.platform === 'darwin') {
    // macOS 使用模板图标以适配浅/深色菜单栏
    // try { image.setTemplateImage(true) } catch {}
    return image
  }
  // Windows/Linux: scale down to typical tray sizes
  const width = process.platform === 'win32' ? 16 : 22
  try {
    image = image.resize({ width })
  } catch {}
  return image
}

export function ensureAppTray(): Tray {
  if (tray) return tray
  const image = buildTrayImage()
  tray = new Tray(image)
  tray.setToolTip(app.getName())
  log(
    'ensureAppTray: created tray. platform =',
    process.platform,
    'electron =',
    process.versions.electron
  )

  trayMenu = Menu.buildFromTemplate([
    {
      label: '打开主界面',
      click: () => {
        try {
          createMainWindow()
        } catch {}
      }
    },
    {
      label: '设置',
      click: () => {
        try {
          createSettingsWindow()
        } catch {}
      }
    },
    { type: 'separator' },
    { label: '退出', role: 'quit' }
  ])
  tray.setContextMenu(trayMenu)
  tray.on('click', () => {
    markTrayInteractionSuppress(process.platform === 'darwin' ? 1500 : 800)
    if (isHarmonyOS) {
      // HarmonyOS opens the native StatusBarViewExtension menu itself. The
      // Electron fork currently exposes popUpContextMenu(), but its OHOS
      // implementation is a no-op.
      log('click: HarmonyOS native quick-operation menu')
      return
    }
    log('click: pop native context menu')
    if (tray && trayMenu) tray.popUpContextMenu(trayMenu)
  })
  return tray
}

export function destroyAppTray() {
  try {
    tray?.destroy()
  } catch {}
  tray = null
}
