import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

const mocks = vi.hoisted(() => {
  const win = {
    id: 1,
    webContents: {
      setWindowOpenHandler: vi.fn()
    },
    isDestroyed: vi.fn(() => false),
    isVisible: vi.fn(() => true),
    loadFile: vi.fn(),
    loadURL: vi.fn(),
    on: vi.fn(),
    once: vi.fn(),
    off: vi.fn()
  }
  const BrowserWindow = vi.fn(function () {
    return win
  })

  return {
    BrowserWindow,
    win,
    ipcMain: { on: vi.fn(), off: vi.fn() },
    nativeTheme: { shouldUseDarkColors: false, on: vi.fn() },
    shell: { openExternal: vi.fn() },
    logger: { info: vi.fn(), warn: vi.fn(), error: vi.fn() }
  }
})

vi.mock('electron', () => ({
  BrowserWindow: mocks.BrowserWindow,
  ipcMain: mocks.ipcMain,
  nativeTheme: mocks.nativeTheme,
  shell: mocks.shell
}))
vi.mock('@electron-toolkit/utils', () => ({ is: { dev: false } }))
vi.mock('../../../src/main/config/configStore', () => ({
  getConfig: vi.fn(),
  onConfigChanged: vi.fn()
}))
vi.mock('../../../src/main/logging/logger', () => ({ appLogger: mocks.logger }))

import { WindowManager } from '../../../src/main/windows/windowManager'

describe('WindowManager release security', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.clearAllMocks()
  })

  afterEach(() => {
    vi.clearAllTimers()
    vi.useRealTimers()
  })

  it('disables DevTools after merging untrusted window options', () => {
    const manager = new WindowManager()

    manager.open(({ commonOptions }) => {
      const defaults = commonOptions()
      expect(defaults.webPreferences?.devTools).toBe(false)

      return {
        id: 'plugin-window',
        route: 'plugin-window',
        options: {
          ...defaults,
          webPreferences: {
            ...defaults.webPreferences,
            nodeIntegration: true,
            devTools: true
          }
        }
      }
    })

    expect(mocks.BrowserWindow).toHaveBeenCalledOnce()
    expect(mocks.BrowserWindow).toHaveBeenCalledWith(
      expect.objectContaining({
        webPreferences: expect.objectContaining({
          nodeIntegration: true,
          devTools: false
        })
      })
    )
  })
})
