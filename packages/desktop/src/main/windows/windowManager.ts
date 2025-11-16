import { BrowserWindow, shell } from 'electron'
import type { MainContext } from '../runtime/context'
import * as path from 'path'
import { is } from '@electron-toolkit/utils'

export interface CreateContext {
  isDev: boolean
  resolveRendererUrl: (route: string) => string | { file: string; hash: string }
  commonOptions: () => Electron.BrowserWindowConstructorOptions
}

export interface WindowFactoryResult {
  id: string
  route: string
  options: Electron.BrowserWindowConstructorOptions
  setup?: (win: BrowserWindow) => void | (() => void)
  externalOpenHandler?: boolean
}

type WindowRecord = { win: BrowserWindow; cleanup?: () => void }

export class WindowManager {
  private windows = new Map<string, WindowRecord>()
  private ctx: MainContext | undefined

  setContext(ctx: MainContext) {
    this.ctx = ctx
  }

  get(id: string): BrowserWindow | undefined {
    return this.windows.get(id)?.win
  }

  isOpen(id: string): boolean {
    return this.windows.has(id) && !this.windows.get(id)!.win.isDestroyed()
  }

  close(id: string): void {
    const rec = this.windows.get(id)
    if (rec) {
      rec.win.close()
    }
  }

  async open(
    factory: (ctx: CreateContext) => WindowFactoryResult,
    forceRecreate = false
  ): Promise<BrowserWindow> {
    const ctx: CreateContext = {
      isDev: is.dev,
      resolveRendererUrl: (route: string) => {
        if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
          return `${process.env['ELECTRON_RENDERER_URL']}#/${route}`
        }
        return { file: path.resolve(__dirname, '../renderer/index.html'), hash: route }
      },
      commonOptions: () => ({
        show: false,
        autoHideMenuBar: true,
        webPreferences: {
          preload: path.join(__dirname, '../preload/index.mjs'),
          sandbox: false
        }
      })
    }

    const { id, route, options, setup, externalOpenHandler = true } = factory(ctx)

    const existing = this.windows.get(id)
    if (existing && !existing.win.isDestroyed() && !forceRecreate) {
      const { win } = existing
      try {
        let didRevive = false
        if (win.isMinimized()) {
          win.restore()
          didRevive = true
        }
        if (!win.isVisible()) {
          win.show()
          didRevive = true
        }
        if (didRevive && !win.isFocused()) {
          win.focus()
        }
      } catch (error) {
        console.error('[windowManager] failed to revive existing window', error)
      }
      return win
    }

    if (existing && !existing.win.isDestroyed()) {
      existing.win.destroy()
      this.windows.delete(id)
    }

    const win = new BrowserWindow(options)
    // track window for disposal safety
    this.ctx?.windows.track(win)

    // default: open external links in system browser
    if (externalOpenHandler) {
      win.webContents.setWindowOpenHandler((details) => {
        shell.openExternal(details.url)
        return { action: 'deny' }
      })
    }

    // Load renderer by route
    const resolved = ctx.resolveRendererUrl(route)
    if (typeof resolved === 'string') {
      win.loadURL(resolved)
    } else {
      win.loadFile(resolved.file, { hash: resolved.hash })
    }

    let cleanup: (() => void) | undefined
    if (setup) {
      const res = setup(win)
      if (typeof res === 'function') cleanup = res
    }

    win.on('ready-to-show', () => {
      win.show()
    })

    win.on('closed', () => {
      if (cleanup) {
        try {
          cleanup()
        } catch {}
      }
      this.windows.delete(id)
    })

    this.windows.set(id, { win, cleanup })
    return win
  }
}

export const windowManager = new WindowManager()
