import type { ExamConfig } from '@dsz-examaware/core'

export interface TimeProvider {
  getCurrentTime: () => number
  onTimeChange?: (callback: () => void) => void
  offTimeChange?: (callback: () => void) => void
}

export interface IExamConfigService {
  validate(config: ExamConfig): boolean
  hasOverlap(config: ExamConfig): boolean
  getSortedConfig(config: ExamConfig): ExamConfig
  parse(dateStr: string): Date
}
