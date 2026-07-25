import { describe, expect, it } from 'vitest'
import type { ExamInfo } from '@renderer/core/configTypes'
import { updateExamPickerTime } from '@renderer/utils/examTimeEditor'

function makeExam(): ExamInfo {
  return {
    name: '数学',
    start: '2026-07-15 13:00:00',
    end: '2026-07-15 15:00:00',
    alertTime: 15,
    materials: []
  }
}

describe('updateExamPickerTime', () => {
  it('moves the end forward when a start edit would make the range equal', () => {
    const exam = makeExam()

    updateExamPickerTime(exam, 'start', new Date(2026, 6, 15, 15, 0, 0))

    expect(exam.start).toBe('2026-07-15 15:00:00')
    expect(exam.end).toBe('2026-07-15 17:00:00')
  })

  it('keeps the existing end when the new start is still earlier', () => {
    const exam = makeExam()

    updateExamPickerTime(exam, 'start', new Date(2026, 6, 15, 14, 0, 0))

    expect(exam.start).toBe('2026-07-15 14:00:00')
    expect(exam.end).toBe('2026-07-15 15:00:00')
  })
})
