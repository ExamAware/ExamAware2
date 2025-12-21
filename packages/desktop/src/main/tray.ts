import { Tray, Menu, app, nativeImage, screen, BrowserWindow } from 'electron'
import * as path from 'path'
import * as fs from 'fs'
import { createSettingsWindow } from './windows/settingsWindow'
import { createMainWindow } from './windows/mainWindow'
import { createOrGetTrayWindow } from './windows/trayWindow'

let tray: Tray | null = null
let trayMenu: ReturnType<typeof Menu.buildFromTemplate> | null = null
let lastShownAt = 0
let suppressActivateUntil = 0
let trayPopoverWin: BrowserWindow | null = null

function log(...args: any[]) {
  try {
    console.debug('[tray]', ...args)
  } catch {}
}

export function shouldSuppressActivate(): boolean {
  const s = Date.now() < suppressActivateUntil
  if (s) log('activate suppressed, until =', new Date(suppressActivateUntil).toISOString())
  return s
}

export function isTrayPopoverVisible(): boolean {
  try {
    return !!(trayPopoverWin && !trayPopoverWin.isDestroyed() && trayPopoverWin.isVisible())
  } catch {
    return false
  }
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

  // 右键保留原生菜单作为降级
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
  tray.on('right-click', () => {
    log('right-click: pop native context menu')
    if (tray && trayMenu) tray.popUpContextMenu(trayMenu)
  })

  // 左键点击：显示/隐藏自绘弹窗
  if (process.platform === 'darwin') {
    // 使用 mouse-up 避开状态栏点击激活的竞争
    tray.on('mouse-up', () => {
      log('mouse-up (darwin): toggle requested')
      markTrayInteractionSuppress(1500)
      void toggleTrayPopover()
    })
  } else {
    tray.on('click', () => {
      log('click (non-darwin): toggle requested')
      markTrayInteractionSuppress(800)
      void toggleTrayPopover()
    })
  }
  return tray
}

async function toggleTrayPopover() {
  const start = Date.now()
  log('toggleTrayPopover: start at', new Date(start).toISOString())
  const win = await createOrGetTrayWindow()
  log('toggleTrayPopover: got window, destroyed?', win.isDestroyed())
  if (!trayPopoverWin || trayPopoverWin.isDestroyed()) {
    trayPopoverWin = win
    try {
      win.on('closed', () => {
        log('tray popover: closed')
        trayPopoverWin = null
      })
    } catch {}
  }
  const visible = win.isVisible()
  log(
    'toggleTrayPopover: isVisible=',
    visible,
    'lastShownAt=',
    lastShownAt,
    'delta=',
    Date.now() - lastShownAt
  )
  if (visible) {
    // darwin: 第二次点击不隐藏，改为确保置顶与聚焦，避免“看起来什么都没出现”
    if (process.platform === 'darwin') {
      log('toggleTrayPopover: already visible (darwin), re-position and refocus instead of hide')
      positionTrayWindow(win)
      try {
        win.focus()
      } catch (e) {
        log('refocus error', e)
      }
      return
    }
    // 其他平台仍走切换隐藏
    if (Date.now() - lastShownAt < 320) return
    log('toggleTrayPopover: hide()')
    win.hide()
    return
  }
  // 先记录时间窗口，防止事件顺序导致的二次触发
  lastShownAt = Date.now()
  positionTrayWindow(win)
  if (process.platform === 'darwin') {
    // macOS：先以非激活方式显示，随后轻微延迟再聚焦，避免与系统激活/主窗拉前打架
    try {
      win.show()
      log('toggleTrayPopover: show() called')
    } catch (e) {
      log('toggleTrayPopover: show error', e)
    }
    setTimeout(() => {
      try {
        if (!win.isDestroyed()) {
          win.focus()
          log('toggleTrayPopover: focus() after delay')
        }
      } catch (e) {
        log('toggleTrayPopover: focus error', e)
      }
    }, 40)
  } else {
    log('toggleTrayPopover: show() + focus() (non-darwin)')
    win.show()
    try {
      win.focus()
    } catch (e) {
      log('toggleTrayPopover: focus error', e)
    }
  }
}

function positionTrayWindow(win: Electron.BrowserWindow) {
  try {
    const trayBounds = tray?.getBounds()
    if (!trayBounds) return
    const winBounds = win.getBounds()
    const display = screen.getDisplayNearestPoint({ x: trayBounds.x, y: trayBounds.y })
    const { width: dw, height: dh } = display.workArea

    let x = Math.round(trayBounds.x + trayBounds.width / 2 - winBounds.width / 2)
    let y = 0
    if (process.platform === 'darwin') {
      // 状态栏在顶部
      y = Math.round(trayBounds.y + trayBounds.height + 6)
    } else {
      // Windows/Linux：系统托盘通常在底部
      const maybeBottom = trayBounds.y > dh / 2
      y = maybeBottom
        ? Math.round(trayBounds.y - winBounds.height - 6)
        : Math.round(trayBounds.y + trayBounds.height + 6)
    }

    // 保证不出屏
    x = Math.max(display.workArea.x, Math.min(x, display.workArea.x + dw - winBounds.width))
    y = Math.max(display.workArea.y, Math.min(y, display.workArea.y + dh - winBounds.height))

    log('positionTrayWindow:', { trayBounds, winBounds, display: display.workArea, x, y })
    win.setPosition(x, y, false)
  } catch {}
}

export function destroyAppTray() {
  try {
    tray?.destroy()
  } catch {}
  tray = null
}
