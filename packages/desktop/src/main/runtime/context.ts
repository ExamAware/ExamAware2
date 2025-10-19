import type { BrowserWindow } from 'electron'
import { ipcMain, globalShortcut, Menu, Tray, protocol } from 'electron'
import * as fs from 'fs'
import { DisposerGroup } from './disposable'

export interface MainContext {
  provides: Record<string | symbol, unknown>
  effect: (d: () => void) => void
  disposable: (fn: () => void | (() => void) | Promise<void | (() => void)>) => Promise<void>
  provide: (name: string | symbol, value: unknown) => void
  inject: <T = unknown>(name: string | symbol) => T | undefined
  windows: {
    track: (win: BrowserWindow) => void
  }
  ipc: {
    on: (channel: string, listener: Parameters<typeof ipcMain.on>[1]) => void
    handle: (channel: string, listener: Parameters<typeof ipcMain.handle>[1]) => void
  }
  shortcut: {
    register: (accelerator: string, callback: () => void) => void
  }
  tray: {
    set: (tray: Tray) => void
  }
  menu: {
    set: (menu: Electron.Menu) => void
  }
  protocol: {
    register: (scheme: string, handler: Parameters<typeof protocol.registerFileProtocol>[1]) => void
  }
  timer: {
    setInterval: (fn: () => void, ms: number) => void
    setTimeout: (fn: () => void, ms: number) => void
  }
  fs: {
    watch: (path: string, listener: fs.NoParamCallback | fs.WatchListener<string>) => void
  }
}

export function createMainContext(): { ctx: MainContext; dispose: () => void } {
  const provides: Record<string | symbol, unknown> = {}
  const group = new DisposerGroup()
  const tracked = new Set<BrowserWindow>()

  const ctx: MainContext = {
    provides,
    effect: (d) => group.add(d),
    disposable: async (fn) => {
      const res = await fn()
      if (typeof res === 'function') group.add(res)
    },
    provide: (n, v) => { provides[n as any] = v },
    inject: (n) => provides[n as any] as any,
    windows: {
      track: (win) => {
        tracked.add(win)
        group.add(() => {
          if (!win.isDestroyed()) try { win.close() } catch {}
        })
        win.on('closed', () => tracked.delete(win))
      }
    },
    ipc: {
      on: (channel, listener) => {
        ipcMain.on(channel, listener)
        group.add(() => ipcMain.removeListener(channel, listener))
      },
      handle: (channel, listener) => {
        ipcMain.handle(channel, listener)
        group.add(() => ipcMain.removeHandler(channel))
      }
    },
    shortcut: {
      register: (accelerator, callback) => {
        globalShortcut.register(accelerator, callback)
        group.add(() => globalShortcut.unregister(accelerator))
      }
    },
    tray: {
      set: (trayInstance) => {
        // When a Tray is provided, bind its destroy on dispose
        group.add(() => { try { trayInstance.destroy() } catch {} })
      }
    },
    menu: {
      set: (menuInstance) => {
        Menu.setApplicationMenu(menuInstance)
        // Restore to null on dispose
        group.add(() => Menu.setApplicationMenu(null))
      }
    },
    protocol: {
      register: (scheme, handler) => {
        // ensure scheme is registered for file protocol before app ready usages
        try { protocol.unregisterProtocol(scheme) } catch {}
        protocol.registerFileProtocol(scheme, handler)
        group.add(() => { try { protocol.unregisterProtocol(scheme) } catch {} })
      }
    },
    timer: {
      setInterval: (fn, ms) => {
        const id = setInterval(fn, ms)
        group.add(() => clearInterval(id))
      },
      setTimeout: (fn, ms) => {
        const id = setTimeout(fn, ms)
        group.add(() => clearTimeout(id))
      }
    },
    fs: {
      watch: (path, listener) => {
        const watcher = fs.watch(path, listener as any)
        group.add(() => { try { watcher.close() } catch {} })
      }
    }
  }

  return { ctx, dispose: () => group.disposeAll() }
}
