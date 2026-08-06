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
    setAlwaysOnTop: vi.fn(),
    removeMenu: vi.fn()
  }

  return {
    listeners,
    webContents,
    playerWindow,
    cleanup: undefined as (() => void) | undefined,
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

vi.mock('@electron-toolkit/utils', () => ({ is: { dev: true } }))
vi.mock('../../../src/main/windows/windowManager', () => ({
  windowManager: { open: mocks.open }
}))
vi.mock('../../../src/main/logging/logger', () => ({ appLogger: mocks.logger }))
vi.mock('../../../src/main/config/sharedConfigStore', () => ({
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
    mocks.playerWindow.isDestroyed.mockReturnValue(false)
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

  it('shows immediately and sends the prepared data when the renderer is ready', () => {
    createPlayerWindow({ data: '{"examName":"Finals"}', source: '/tmp/finals.ea2' })

    expect(mocks.open).toHaveBeenCalledWith(expect.any(Function), true)
    const definition = mocks.open.mock.calls[0][0]({ commonOptions: () => ({ show: false }) })
    expect(definition.options.show).toBe(true)
    expect(mocks.setSharedConfig).toHaveBeenCalledWith('{"examName":"Finals"}')
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

  it('removes the Windows/Linux menu and blocks bare Alt activation', () => {
    createPlayerWindow({ data: '{}', source: 'config' })

    expect(mocks.playerWindow.removeMenu).toHaveBeenCalledOnce()

    const beforeInput = mocks.webContents.on.mock.calls.find(
      ([eventName]) => eventName === 'before-input-event'
    )?.[1]
    expect(beforeInput).toBeTypeOf('function')
    const preventDefault = vi.fn()
    beforeInput(
      { preventDefault },
      { key: 'Alt', alt: true, control: false, meta: false, shift: false }
    )
    expect(preventDefault).toHaveBeenCalledOnce()

    preventDefault.mockClear()
    beforeInput(
      { preventDefault },
      { key: 'Tab', alt: true, control: false, meta: false, shift: false }
    )
    expect(preventDefault).not.toHaveBeenCalled()
  })

  it('removes its readiness listener when the player closes', () => {
    createPlayerWindow({ data: '{}', source: 'config' })
    expect(mocks.listeners.get('renderer:ready')?.size).toBe(1)

    mocks.cleanup?.()
    expect(mocks.listeners.get('renderer:ready')?.size).toBe(0)
    expect(mocks.listeners.get('player:config-status')?.size).toBe(0)
  })

  it('accepts configuration acknowledgements only from its own renderer', () => {
    const onConfigStatus = vi.fn()
    createPlayerWindow({ data: '{}', source: 'config' }, { onConfigStatus })

    emit('player:config-status', {}, { ok: true })
    expect(onConfigStatus).not.toHaveBeenCalled()

    const status = { ok: true, examName: 'Finals', examCount: 1 }
    emit('player:config-status', mocks.webContents, status)
    expect(onConfigStatus).toHaveBeenCalledOnce()
    expect(onConfigStatus).toHaveBeenCalledWith(status)
  })

  it('blocks renderer exit requests when the session policy forbids them', () => {
    const allowUserExit = vi.fn(() => false)
    createPlayerWindow({ data: '{}', source: 'config' }, { allowUserExit })

    emit('player-window-exit', mocks.webContents)
    expect(mocks.playerWindow.focus).toHaveBeenCalledOnce()
    expect(mocks.playerWindow.close).not.toHaveBeenCalled()

    allowUserExit.mockReturnValue(true)
    emit('player-window-exit', mocks.webContents)
    expect(mocks.playerWindow.close).toHaveBeenCalledOnce()
  })

  it('logs an error when the renderer does not acknowledge delivered data', async () => {
    createPlayerWindow({ data: '{"examName":"Finals"}', source: '/tmp/finals.ea2' })
    emit('renderer:ready', mocks.webContents)

    await vi.advanceTimersByTimeAsync(5000)

    expect(mocks.logger.error).toHaveBeenCalledWith(
      '[player] renderer did not acknowledge configuration',
      expect.objectContaining({ source: '/tmp/finals.ea2', length: 21, timeoutMs: 5000 })
    )
  })
})
