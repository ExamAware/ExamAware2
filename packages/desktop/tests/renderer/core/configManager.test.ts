/**
 * @vitest-environment jsdom
 */

import { describe, expect, it } from 'vitest'
import { ExamConfigManager } from '@renderer/core/configManager'

const repairableSample = JSON.stringify({
  examName: '期中考试',
  message: '考试信息',
  examInfos: [
    {
      name: '数学',
      start: '2026-07-15 15:00:00',
      end: '2026-07-15 15:00:00',
      alertTime: 15,
      materials: []
    }
  ]
})

describe('ExamConfigManager loading', () => {
  it('opens a structurally valid file with a repairable time error', () => {
    const manager = new ExamConfigManager()

    expect(manager.loadFromJson(repairableSample)).toBe(true)
    expect(manager.getConfig().examInfos[0]).toMatchObject({
      start: '2026-07-15 15:00:00',
      end: '2026-07-15 15:00:00'
    })
    expect(manager.validate()).toBe(false)
  })

  it('rejects malformed configuration structures', () => {
    const manager = new ExamConfigManager()

    expect(manager.loadFromJson('{"examInfos":"invalid"}')).toBe(false)
  })
})
