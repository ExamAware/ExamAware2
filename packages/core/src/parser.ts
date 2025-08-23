import type { ExamConfig } from './types'

/**
 * 解析考试配置的 JSON 字符串，并返回 `ExamConfig` 对象。
 *
 * @param jsonString - 包含考试配置信息的 JSON 字符串。
 * @returns 如果解析成功且包含 `examInfos` 字段，则返回 `ExamConfig` 对象；否则返回 `null`。
 */
export function parseExamConfig(jsonString: string): ExamConfig | null {
  try {
    const data = JSON.parse(jsonString)
    if (!data.examInfos) return null
    return data as ExamConfig
  } catch {
    return null
  }
}

/**
 * 验证考试配置是否有效
 *
 * @param config - 考试配置对象
 * @returns 如果配置有效则返回 true，否则返回 false
 */
export function validateExamConfig(config: ExamConfig): boolean {
  if (!config.examName || !config.examInfos?.length) return false
  return config.examInfos.every((info) => info.name && info.start && info.end)
}

/**
 * 检查考试时间是否有重叠
 *
 * @param config - 包含考试信息的配置对象
 * @returns 如果考试时间有重叠则返回 true，否则返回 false
 */
export function hasExamTimeOverlap(config: ExamConfig): boolean {
  const sortedExams = config.examInfos
    .slice()
    .sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime())
  for (let i = 0; i < sortedExams.length - 1; i++) {
    if (new Date(sortedExams[i].end).getTime() > new Date(sortedExams[i + 1].start).getTime()) {
      return true
    }
  }
  return false
}

/**
 * 根据考试配置信息获取排序后的考试信息列表。
 *
 * @param config - 考试配置信息对象。
 * @returns 排序后的考试信息列表，按考试开始时间升序排列。
 */
export function getSortedExamInfos(config: ExamConfig) {
  return config.examInfos
    .slice()
    .sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime())
}

/**
 * 返回包含排序后考试信息的完整配置对象。
 *
 * @param config - 原始考试配置信息对象。
 * @returns 包含排序后考试信息的新配置对象，考试信息按开始时间升序排列。
 */
export function getSortedExamConfig(config: ExamConfig): ExamConfig {
  return {
    ...config,
    examInfos: getSortedExamInfos(config)
  }
}
