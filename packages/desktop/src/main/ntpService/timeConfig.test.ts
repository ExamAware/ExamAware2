import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import {
  DEFAULT_TIME_SYNC_CONFIG,
  mergeTimeSyncConfig,
  normalizeTimeSyncConfig
} from './timeConfig'

describe('normalizeTimeSyncConfig', () => {
  it.each([1, 240, 35791])('preserves an in-range whole sync interval: %s', (value) => {
    expect(normalizeTimeSyncConfig({ syncIntervalMinutes: value }).syncIntervalMinutes).toBe(value)
  })

  it.each([
    0,
    -1,
    Number.MIN_VALUE,
    0.5,
    1.5,
    35792,
    Number.NaN,
    Number.POSITIVE_INFINITY,
    Number.NEGATIVE_INFINITY,
    '15'
  ])('defaults an invalid sync interval: %s', (value) => {
    expect(
      normalizeTimeSyncConfig({ syncIntervalMinutes: value as number }).syncIntervalMinutes
    ).toBe(60)
  })

  it.each([0, -30, 12.5])('preserves finite offsets and increments: %s', (value) => {
    const result = normalizeTimeSyncConfig({
      manualOffsetSeconds: value,
      autoIncrementSeconds: value
    })
    expect(result.manualOffsetSeconds).toBe(value)
    expect(result.autoIncrementSeconds).toBe(value)
  })

  it.each([Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY, '12'])(
    'defaults invalid offsets and increments: %s',
    (value) => {
      const result = normalizeTimeSyncConfig({
        manualOffsetSeconds: value as number,
        autoIncrementSeconds: value as number
      })
      expect(result.manualOffsetSeconds).toBe(0)
      expect(result.autoIncrementSeconds).toBe(0)
    }
  )

  it('keeps unrelated fields and a valid last increment date intact', () => {
    expect(
      normalizeTimeSyncConfig({
        ntpServer: 'time.example.test',
        autoSync: false,
        autoIncrementEnabled: true,
        lastIncrementDate: '2026-07-10'
      })
    ).toEqual({
      ...DEFAULT_TIME_SYNC_CONFIG,
      ntpServer: 'time.example.test',
      autoSync: false,
      autoIncrementEnabled: true,
      lastIncrementDate: '2026-07-10'
    })
  })

  it('validates non-numeric fields and drops unknown keys', () => {
    expect(
      normalizeTimeSyncConfig({
        ntpServer: '   ',
        autoSync: 'true',
        autoIncrementEnabled: 1,
        lastIncrementDate: '2025-02-29',
        injected: 'discard me'
      } as unknown as Parameters<typeof normalizeTimeSyncConfig>[0])
    ).toEqual(DEFAULT_TIME_SYNC_CONFIG)
  })

  it.each([
    ['0001-01-01', '0001-01-01'],
    ['2024-02-29', '2024-02-29'],
    ['2026-07-11', '2026-07-11'],
    ['2026-02-29', undefined],
    ['2026-13-01', undefined],
    ['2026-01-32', undefined],
    ['2026-1-01', undefined],
    ['0000-01-01', undefined],
    ['not-a-date', undefined]
  ])('validates last increment date %s', (value, expected) => {
    expect(normalizeTimeSyncConfig({ lastIncrementDate: value }).lastIncrementDate).toBe(expected)
  })
})

describe('mergeTimeSyncConfig', () => {
  it('retains omitted fields, normalizes present invalid values, and does not mutate inputs', () => {
    const current = {
      ...DEFAULT_TIME_SYNC_CONFIG,
      ntpServer: 'current.example.test',
      syncIntervalMinutes: 30,
      manualOffsetSeconds: 10,
      autoIncrementSeconds: -5
    }
    const partial = {
      syncIntervalMinutes: Number.NaN,
      manualOffsetSeconds: Number.POSITIVE_INFINITY
    }
    const currentSnapshot = { ...current }
    const partialSnapshot = { ...partial }

    expect(mergeTimeSyncConfig(current, partial)).toEqual({
      ...current,
      syncIntervalMinutes: 60,
      manualOffsetSeconds: 0
    })
    expect(current).toEqual(currentSnapshot)
    expect(partial).toEqual(partialSnapshot)
  })

  it('treats explicit undefined as omitted for every field', () => {
    const current = {
      ntpServer: 'current.example.test',
      manualOffsetSeconds: -10,
      autoSync: false,
      syncIntervalMinutes: 30,
      autoIncrementEnabled: true,
      autoIncrementSeconds: 5,
      lastIncrementDate: '2026-07-10'
    }
    const partial = Object.fromEntries(Object.keys(current).map((key) => [key, undefined]))

    expect(mergeTimeSyncConfig(current, partial)).toEqual(current)
  })
})

const mocks = vi.hoisted(() => ({
  getConfig: vi.fn(),
  setConfig: vi.fn(),
  existsSync: vi.fn(),
  readFileSync: vi.fn(),
  writeFileSync: vi.fn(),
  setManualOffset: vi.fn(),
  syncTimeWithNTP: vi.fn().mockResolvedValue({}),
  getTimeSyncInfo: vi.fn().mockReturnValue({}),
  disableTimeSync: vi.fn()
}))

vi.mock('electron', () => ({
  app: { getPath: vi.fn(() => '/tmp'), isReady: vi.fn(() => true), once: vi.fn() },
  BrowserWindow: { getAllWindows: vi.fn(() => []) }
}))
vi.mock('fs', () => ({
  default: {
    existsSync: mocks.existsSync,
    readFileSync: mocks.readFileSync,
    writeFileSync: mocks.writeFileSync
  }
}))
vi.mock('../configStore', () => ({ getConfig: mocks.getConfig, setConfig: mocks.setConfig }))
vi.mock('../logging/winstonLogger', () => ({
  appLogger: { info: vi.fn(), error: vi.fn() }
}))
vi.mock('./ntpClient', () => ({
  syncTimeWithNTP: mocks.syncTimeWithNTP,
  getTimeSyncInfo: mocks.getTimeSyncInfo,
  setManualOffset: mocks.setManualOffset,
  getSyncedTime: vi.fn(() => 0),
  disableTimeSync: mocks.disableTimeSync
}))

describe('time service integration', () => {
  beforeEach(() => {
    vi.resetModules()
    vi.useFakeTimers()
    vi.clearAllMocks()
    mocks.getConfig.mockReturnValue({})
    mocks.existsSync.mockReturnValue(false)
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('normalizes unified and legacy loaded values before applying offsets', async () => {
    mocks.getConfig.mockReturnValueOnce({ manualOffsetSeconds: Number.POSITIVE_INFINITY })
    let service = await import('./timeService')
    expect(service.loadTimeSyncConfig().manualOffsetSeconds).toBe(0)
    expect(mocks.setManualOffset).not.toHaveBeenCalled()

    vi.resetModules()
    mocks.getConfig.mockReturnValue({})
    mocks.existsSync.mockReturnValue(true)
    mocks.readFileSync.mockReturnValue(JSON.stringify({ manualOffsetSeconds: -15 }))
    service = await import('./timeService')
    expect(service.loadTimeSyncConfig().manualOffsetSeconds).toBe(-15)
    expect(mocks.setManualOffset).toHaveBeenCalledWith(-15)
  })

  it('uses safe normalized interval delays for apply and save', async () => {
    const intervalSpy = vi.spyOn(globalThis, 'setInterval')
    const service = await import('./timeService')

    service.applyTimeConfig({ syncIntervalMinutes: 1 })
    service.applyTimeConfig({ syncIntervalMinutes: 35791 })
    service.applyTimeConfig({ syncIntervalMinutes: Number.MIN_VALUE })
    service.saveTimeSyncConfig({ syncIntervalMinutes: 0.5 })

    expect(intervalSpy).toHaveBeenNthCalledWith(1, expect.any(Function), 60_000)
    expect(intervalSpy).toHaveBeenNthCalledWith(2, expect.any(Function), 2_147_460_000)
    expect(intervalSpy).toHaveBeenNthCalledWith(3, expect.any(Function), 3_600_000)
    expect(intervalSpy).toHaveBeenNthCalledWith(4, expect.any(Function), 3_600_000)
    expect(intervalSpy.mock.calls.some(([, delay]) => delay === 1)).toBe(false)
  })

  it('applies and persists normalized offsets', async () => {
    const service = await import('./timeService')
    expect(service.applyTimeConfig({ manualOffsetSeconds: Number.NaN }).manualOffsetSeconds).toBe(0)
    expect(mocks.setManualOffset).toHaveBeenLastCalledWith(0)

    const saved = service.saveTimeSyncConfig({ manualOffsetSeconds: Number.POSITIVE_INFINITY })
    expect(saved.manualOffsetSeconds).toBe(0)
    expect(mocks.writeFileSync).toHaveBeenCalledWith(
      '/tmp/timeSync.json',
      expect.stringContaining('"manualOffsetSeconds": 0'),
      'utf-8'
    )
  })
})
