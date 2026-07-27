import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

const mocks = vi.hoisted(() => {
  const listeners = new Map<string, Set<(event: any) => void>>()
  const webContents = {
    on: vi.fn(),
    send: vi.fn()
  }
  const playerWindow = {
    webContents,
    close: vi.fn(),
    focus: vi.fn(),
    isDestroyed: vi.fn(() => false),
    on: vi.fn(),
    setAlwaysOnTop: vi.fn()
  }

  return {
    listeners,
    webContents,
    playerWindow,
    cleanup: undefined as (() => void) | undefined,
    readCallback: undefined as
      | ((error: NodeJS.ErrnoException | null, data: string) => void)
      | undefined,
    readFile: vi.fn(),
    open: vi.fn(),
    setSharedConfig: vi.fn(),
    logger: { debug: vi.fn(), info: vi.fn(), error: vi.fn() }
  }
})

vi.mock('electron', () => ({
  ipcMain: {
    on: vi.fn((channel: string, listener: (event: any) => void) => {
      const channelListeners = mocks.listeners.get(channel) ?? new Set()
      channelListeners.add(listener)
      mocks.listeners.set(channel, channelListeners)
    }),
    off: vi.fn((channel: string, listener: (event: any) => void) => {
      mocks.listeners.get(channel)?.delete(listener)
    })
  }
}))

vi.mock('fs', () => ({ readFile: mocks.readFile }))
vi.mock('@electron-toolkit/utils', () => ({ is: { dev: true } }))
vi.mock('../../../src/main/windows/windowManager', () => ({
  windowManager: { open: mocks.open }
}))
vi.mock('../../../src/main/logging/winstonLogger', () => ({ appLogger: mocks.logger }))
vi.mock('../../../src/main/state/sharedConfigStore', () => ({
  setSharedConfig: mocks.setSharedConfig
}))

import { createPlayerWindow } from '../../../src/main/windows/playerWindow'

const emit = (channel: string, sender: unknown, ...args: unknown[]) => {
  for (const listener of mocks.listeners.get(channel) ?? []) listener({ sender }, ...args)
}

describe('createPlayerWindow config delivery', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    mocks.listeners.clear()
    mocks.cleanup = undefined
    mocks.readCallback = undefined
    mocks.playerWindow.isDestroyed.mockReturnValue(false)
    mocks.readFile.mockImplementation((_path, _encoding, callback) => {
      mocks.readCallback = callback
    })
    mocks.open.mockImplementation((factory) => {
      const definition = factory({ commonOptions: () => ({}) })
      mocks.cleanup = definition.setup?.(mocks.playerWindow)
      return mocks.playerWindow
    })
  })

  afterEach(() => {
    mocks.cleanup?.()
    vi.clearAllTimers()
    vi.useRealTimers()
  })

  it('replaces an existing player and sends data after both file and renderer are ready', () => {
    createPlayerWindow('/tmp/finals.ea2')

    expect(mocks.open).toHaveBeenCalledWith(expect.any(Function), true)
    expect(mocks.readFile).toHaveBeenCalledWith('/tmp/finals.ea2', 'utf-8', expect.any(Function))
    expect(mocks.setSharedConfig).toHaveBeenNthCalledWith(1, null)

    mocks.readCallback?.(null, '{"examName":"Finals"}')
    expect(mocks.setSharedConfig).toHaveBeenNthCalledWith(2, '{"examName":"Finals"}')
    expect(mocks.webContents.send).not.toHaveBeenCalled()

    emit('renderer:ready', {})
    expect(mocks.webContents.send).not.toHaveBeenCalled()

    emit('renderer:ready', mocks.webContents)
    emit('renderer:ready', mocks.webContents)
    expect(mocks.webContents.send).toHaveBeenCalledTimes(1)
    expect(mocks.webContents.send).toHaveBeenCalledWith('load-config', '{"examName":"Finals"}')

    emit('player:config-status', mocks.webContents, {
      ok: true,
      examName: 'Finals',
      examCount: 1
    })
    expect(mocks.logger.info).toHaveBeenCalledWith(
      '[player] renderer loaded configuration',
      expect.objectContaining({ examName: 'Finals', examCount: 1 })
    )
  })

  it('also sends when the renderer becomes ready before the file read completes', () => {
    createPlayerWindow('/tmp/finals.ea2')

    emit('renderer:ready', mocks.webContents)
    expect(mocks.webContents.send).not.toHaveBeenCalled()

    mocks.readCallback?.(null, '{"examName":"Finals"}')
    expect(mocks.webContents.send).toHaveBeenCalledWith('load-config', '{"examName":"Finals"}')
  })

  it('removes its readiness listener when the player closes', () => {
    createPlayerWindow('/tmp/finals.ea2')
    expect(mocks.listeners.get('renderer:ready')?.size).toBe(1)

    mocks.cleanup?.()
    expect(mocks.listeners.get('renderer:ready')?.size).toBe(0)
    expect(mocks.listeners.get('player:config-status')?.size).toBe(0)
  })

  it('logs an error when the renderer does not acknowledge delivered data', async () => {
    createPlayerWindow('/tmp/finals.ea2')
    mocks.readCallback?.(null, '{"examName":"Finals"}')
    emit('renderer:ready', mocks.webContents)

    await vi.advanceTimersByTimeAsync(5000)

    expect(mocks.logger.error).toHaveBeenCalledWith(
      '[player] renderer did not acknowledge configuration',
      expect.objectContaining({ path: '/tmp/finals.ea2', length: 21, timeoutMs: 5000 })
    )
  })
})
