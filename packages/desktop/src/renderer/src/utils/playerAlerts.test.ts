import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'
import { formatExamAlertMessage } from './playerAlerts'

describe('formatExamAlertMessage', () => {
  it('formats an integer alert time as minutes until the exam ends', () => {
    expect(formatExamAlertMessage({ name: 'Math' }, 15)).toBe('Math 将在 15 分钟后结束')
  })

  it('preserves fractional alert minutes', () => {
    expect(formatExamAlertMessage({ name: 'Math' }, 15.5)).toBe('Math 将在 15.5 分钟后结束')
  })
})

describe('desktop exam alert integration', () => {
  it('uses the shared alert formatter without converting units or selecting start text', () => {
    const playerView = readFileSync(
      fileURLToPath(new URL('../views/PlayerView.vue', import.meta.url)),
      'utf8'
    )

    expect(playerView).not.toContain('alertTime / 60000')
    expect(playerView).not.toMatch(/alertTime\s*>\s*0\s*\?\s*['"]开始['"]\s*:/)
    expect(playerView).toContain('formatExamAlertMessage(exam, alertTime)')
  })
})
