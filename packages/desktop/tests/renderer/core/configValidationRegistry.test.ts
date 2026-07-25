import { describe, expect, it } from 'vitest'
import type { ExamConfig } from '@renderer/core/configTypes'
import {
  globalValidationRegistry,
  registerBuiltinValidation
} from '@renderer/core/configValidationRegistry'

describe('built-in config validation', () => {
  it('reports a repairable time error without mislabeling it as a structure error', () => {
    const config: ExamConfig = {
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
    }

    registerBuiltinValidation()
    const issues = globalValidationRegistry.validate({ config })

    expect(issues.map((issue) => issue.message)).toContain('结束时间必须晚于开始时间')
    expect(issues.map((issue) => issue.code)).not.toContain('parser-failed')
  })
})
