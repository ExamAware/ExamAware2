import fs from 'node:fs'
import path from 'node:path'
import { describe, expect, it } from 'vitest'
import {
  DEFAULT_TIME_SYNC_CONFIG,
  mergeTimeSyncConfig,
  normalizeTimeSyncConfig
} from './timeConfig'

describe('normalizeTimeSyncConfig', () => {
  it.each([1, 0.5, 240])('preserves a positive finite sync interval: %s', (value) => {
    expect(normalizeTimeSyncConfig({ syncIntervalMinutes: value }).syncIntervalMinutes).toBe(value)
  })

  it.each([0, -1, Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY, '15'])(
    'defaults an invalid sync interval: %s',
    (value) => {
      expect(
        normalizeTimeSyncConfig({ syncIntervalMinutes: value as number }).syncIntervalMinutes
      ).toBe(60)
    }
  )

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
})

describe('time service integration', () => {
  const source = fs.readFileSync(path.join(__dirname, 'timeService.ts'), 'utf8')

  it('normalizes unified and legacy loaded configuration before applying offsets', () => {
    expect(source).toMatch(
      /timeSyncConfig = normalizeTimeSyncConfig\(\{ \.\.\.DEFAULT_TIME_SYNC_CONFIG, \.\.\.cfg \}\)[\s\S]*?setManualOffset/
    )
    expect(source).toMatch(
      /timeSyncConfig = normalizeTimeSyncConfig\(\{ \.\.\.DEFAULT_TIME_SYNC_CONFIG, \.\.\.config \}\)[\s\S]*?setManualOffset/
    )
  })

  it('merges apply and save input before offsets and timers are updated', () => {
    const applyBody = source.slice(
      source.indexOf('export function applyTimeConfig'),
      source.indexOf('// 保存配置')
    )
    const saveBody = source.slice(
      source.indexOf('export function saveTimeSyncConfig'),
      source.indexOf('// 执行时间同步')
    )
    expect(applyBody.indexOf('mergeTimeSyncConfig(timeSyncConfig, partial)')).toBeGreaterThan(-1)
    expect(applyBody.indexOf('mergeTimeSyncConfig(timeSyncConfig, partial)')).toBeLessThan(
      applyBody.indexOf('setManualOffset')
    )
    expect(applyBody.indexOf('mergeTimeSyncConfig(timeSyncConfig, partial)')).toBeLessThan(
      applyBody.indexOf('restartAutoSync')
    )
    expect(saveBody.indexOf('mergeTimeSyncConfig(timeSyncConfig, config)')).toBeGreaterThan(-1)
    expect(saveBody.indexOf('mergeTimeSyncConfig(timeSyncConfig, config)')).toBeLessThan(
      saveBody.indexOf('setManualOffset')
    )
    expect(saveBody.indexOf('mergeTimeSyncConfig(timeSyncConfig, config)')).toBeLessThan(
      saveBody.indexOf('restartAutoSync')
    )
  })
})
