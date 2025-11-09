import { BrowserWindow, nativeTheme } from 'electron'

export type OverlayTheme = 'light' | 'dark'

const TITLEBAR_HEIGHT = 35
const TRANSPARENT_COLOR = '#00000000'
const LIGHT_SYMBOL_COLOR = '#1f1f1f'
const DARK_SYMBOL_COLOR = '#ffffff'

const overlayThemeCache = new WeakMap<BrowserWindow, OverlayTheme | undefined>()
const lifecycleAttached = new WeakSet<BrowserWindow>()

function resolveTheme(theme?: OverlayTheme): OverlayTheme {
  if (theme === 'light' || theme === 'dark') {
    return theme
  }
  return nativeTheme.shouldUseDarkColors ? 'dark' : 'light'
}

export function buildTitleBarOverlay(theme?: OverlayTheme): Electron.TitleBarOverlayOptions {
  const effectiveTheme = resolveTheme(theme)
  return {
    color: TRANSPARENT_COLOR,
    height: TITLEBAR_HEIGHT,
    symbolColor: effectiveTheme === 'dark' ? DARK_SYMBOL_COLOR : LIGHT_SYMBOL_COLOR
  }
}

export function applyTitleBarOverlay(win: BrowserWindow, theme?: OverlayTheme) {
  if (typeof (win as any).setTitleBarOverlay !== 'function') {
    return
  }
  overlayThemeCache.set(win, theme)
  try {
    win.setTitleBarOverlay(buildTitleBarOverlay(theme))
  } catch (error) {
    console.error('Failed to update title bar overlay', error)
  }
}

export function attachTitleBarOverlayLifecycle(win: BrowserWindow) {
  if (process.platform !== 'win32') {
    return
  }
  if (typeof (win as any).setTitleBarOverlay !== 'function') {
    return
  }
  if (lifecycleAttached.has(win)) return
  lifecycleAttached.add(win)

  const reapply = () => {
    const theme = overlayThemeCache.get(win)
    applyTitleBarOverlay(win, theme)
  }

  win.on('show', reapply)
  win.on('focus', reapply)
  win.on('restore', reapply)
  win.on('resize', reapply)
  win.on('closed', () => {
    lifecycleAttached.delete(win)
    overlayThemeCache.delete(win)
  })
}
