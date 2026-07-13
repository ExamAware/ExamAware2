import { beforeEach, describe, expect, it, vi } from 'vitest'
import {
  getSharedConfigPayload,
  listSharedConfigs,
  removeSharedConfig,
  setSharedConfig,
  setSharedConfigs,
  upsertSharedConfig
} from '../../../src/main/state/sharedConfigStore'

const entry = (id: string, updatedAt: number, payload = `{ "id": "${id}" }`) => ({
  id,
  examName: id,
  examCount: 1,
  updatedAt,
  payload
})

describe('sharedConfigStore', () => {
  beforeEach(() => setSharedConfigs([]))

  it('filters empty entries and sorts newest entries first', () => {
    setSharedConfigs([
      entry('older', 10),
      entry('newer', 20),
      { ...entry('', 30), id: '' },
      { ...entry('empty', 40), payload: '' }
    ])
    expect(listSharedConfigs().map(({ id }) => id)).toEqual(['newer', 'older'])
  })

  it('returns null for an explicitly requested missing id instead of another config', () => {
    setSharedConfigs([entry('existing', 10)])
    expect(getSharedConfigPayload('missing')).toBeNull()
    expect(getSharedConfigPayload()).toContain('existing')
  })

  it('does not expose mutable internal entries through list results', () => {
    setSharedConfigs([entry('one', 10)])
    const listed = listSharedConfigs()
    listed[0].payload = 'mutated'
    listed[0].updatedAt = 999

    expect(getSharedConfigPayload('one')).toContain('one')
    expect(listSharedConfigs()[0].updatedAt).toBe(10)
  })

  it('preserves an existing timestamp when an upsert omits a usable timestamp', () => {
    setSharedConfigs([entry('one', 10)])
    upsertSharedConfig(entry('one', 0, 'updated'))
    expect(listSharedConfigs()[0]).toMatchObject({ updatedAt: 10, payload: 'updated' })
  })

  it('removes entries idempotently', () => {
    setSharedConfigs([entry('one', 10)])
    removeSharedConfig('one')
    removeSharedConfig('one')
    expect(listSharedConfigs()).toEqual([])
  })

  it('derives legacy metadata from valid JSON and retains invalid legacy payloads', () => {
    vi.spyOn(Date, 'now').mockReturnValue(123)
    setSharedConfig(JSON.stringify({ examName: 'Final', examInfos: [{}, {}] }))
    expect(listSharedConfigs()[0]).toMatchObject({
      id: 'legacy',
      examName: 'Final',
      examCount: 2,
      updatedAt: 123
    })

    setSharedConfig('not-json')
    expect(listSharedConfigs()[0]).toMatchObject({
      examName: '未命名考试',
      examCount: 0,
      payload: 'not-json'
    })
    setSharedConfig(null)
    expect(listSharedConfigs()).toEqual([])
  })
})
