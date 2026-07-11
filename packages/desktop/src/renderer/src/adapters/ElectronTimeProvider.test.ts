import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { ElectronTimeProvider } from './ElectronTimeProvider'

const syncInfo = {
  offset: 10,
  roundTripDelay: 1,
  lastSyncTime: 1,
  serverAddress: 'test',
  manualOffset: 5,
  syncStatus: 'success' as const
}

describe('ElectronTimeProvider lifecycle', () => {
  beforeEach(() => vi.useFakeTimers())
  afterEach(() => vi.useRealTimers())

  it('does not start its interval when destroyed during initialization', async () => {
    let resolveInfo!: (value: typeof syncInfo) => void
    const api = {
      invoke: vi.fn(() => new Promise<typeof syncInfo>((resolve) => (resolveInfo = resolve))),
      on: vi.fn(),
      off: vi.fn()
    }
    const provider = new ElectronTimeProvider(api)

    provider.destroy()
    resolveInfo(syncInfo)
    await Promise.resolve()
    await Promise.resolve()

    expect(vi.getTimerCount()).toBe(0)
  })

  it('stops notifications and scheduled sync checks after destroy', async () => {
    const api = {
      invoke: vi.fn().mockResolvedValue(syncInfo),
      on: vi.fn(),
      off: vi.fn()
    }
    const provider = new ElectronTimeProvider(api)
    const callback = vi.fn()
    provider.onTimeChange(callback)
    await Promise.resolve()
    await Promise.resolve()

    vi.advanceTimersByTime(1_000)
    expect(callback).toHaveBeenCalledOnce()
    provider.destroy()
    vi.advanceTimersByTime(60_000)
    expect(callback).toHaveBeenCalledOnce()
    expect(api.invoke).toHaveBeenCalledTimes(1)
  })
})
