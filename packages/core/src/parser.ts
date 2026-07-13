import type { ExamConfig } from './types';
import { parseDateTime } from './utils';

function getValidTimeRange(
  info: ExamConfig['examInfos'][number]
): { startMs: number; endMs: number } | null {
  const startMs = parseDateTime(info.start).getTime();
  const endMs = parseDateTime(info.end).getTime();

  if (!Number.isFinite(startMs) || !Number.isFinite(endMs) || startMs >= endMs) {
    return null;
  }

  return { startMs, endMs };
}

/**
 * 解析考试配置的 JSON 字符串，并返回 `ExamConfig` 对象。
 *
 * @param jsonString - 包含考试配置信息的 JSON 字符串。
 * @returns 如果解析成功且包含 `examInfos` 字段，则返回 `ExamConfig` 对象；否则返回 `null`。
 */
export function parseExamConfig(jsonString: string): ExamConfig | null {
  try {
    const data = JSON.parse(jsonString);
    if (!data.examInfos) return null;
    return data as ExamConfig;
  } catch {
    return null;
  }
}

/**
 * 验证考试配置是否有效
 *
 * @param config - 考试配置对象
 * @returns 如果配置有效则返回 true，否则返回 false
 */
export function validateExamConfig(config: ExamConfig): boolean {
  if (!config || typeof config !== 'object') {
    return false;
  }

  const { examName, message, examInfos } = config as Partial<ExamConfig>;

  if (examName != null && typeof examName !== 'string') {
    return false;
  }

  if (message != null && typeof message !== 'string') {
    return false;
  }

  if (!Array.isArray(examInfos)) {
    return false;
  }

  if (examInfos.length === 0) {
    return true;
  }

  return examInfos.every((info) => {
    if (!info || typeof info !== 'object') return false;
    const { name, start, end, alertTime } = info as ExamConfig['examInfos'][number];
    if (typeof name !== 'string' || !name.trim()) return false;
    if (typeof start !== 'string' || !start.trim()) return false;
    if (typeof end !== 'string' || !end.trim()) return false;
    if (typeof alertTime !== 'number' || !Number.isFinite(alertTime) || alertTime < 0) return false;
    return getValidTimeRange(info) !== null;
  });
}

/**
 * 检查考试时间是否有重叠
 *
 * @param config - 包含考试信息的配置对象
 * @returns 如果考试时间有重叠则返回 true，否则返回 false
 */
export function hasExamTimeOverlap(config: ExamConfig): boolean {
  const ranges = config.examInfos.map(getValidTimeRange);
  if (ranges.some((range) => range === null)) {
    return false;
  }

  const sortedRanges = ranges
    .filter((range): range is { startMs: number; endMs: number } => range !== null)
    .sort((a, b) => a.startMs - b.startMs);
  for (let i = 0; i < sortedRanges.length - 1; i++) {
    if (sortedRanges[i].endMs > sortedRanges[i + 1].startMs) {
      return true;
    }
  }
  return false;
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
    .sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime());
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
  };
}
