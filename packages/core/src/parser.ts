import type { ExamConfig } from './types';
import { parseDateTime } from './utils';

export type ExamConfigIssueSeverity = 'error' | 'warning';

export interface ExamConfigIssue {
  code:
    | 'invalid-json'
    | 'invalid-type'
    | 'required'
    | 'invalid-time'
    | 'invalid-range'
    | 'invalid-number'
    | 'empty-exams'
    | 'overlap'
    | 'alert-outside-exam';
  severity: ExamConfigIssueSeverity;
  path: string;
  message: string;
}

export interface ExamConfigValidationOptions {
  allowEmptyExamInfos?: boolean;
  overlap?: 'error' | 'warning' | 'allow';
  sort?: boolean;
}

export interface ExamConfigValidationResult {
  valid: boolean;
  config?: ExamConfig;
  issues: ExamConfigIssue[];
  errors: ExamConfigIssue[];
  warnings: ExamConfigIssue[];
}

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
 * Parse and fully validate an exam configuration while preserving actionable diagnostics.
 */
export function parseExamConfigDetailed(
  jsonString: string,
  options: ExamConfigValidationOptions = {}
): ExamConfigValidationResult {
  let input: unknown;
  try {
    input = JSON.parse(jsonString);
  } catch (error) {
    return createValidationResult([
      {
        code: 'invalid-json',
        severity: 'error',
        path: '$',
        message: error instanceof Error ? error.message : '配置不是有效的 JSON'
      }
    ]);
  }
  return validateExamConfigDetailed(input, options);
}

/**
 * Validate structure and playback business rules in one pass.
 */
export function validateExamConfigDetailed(
  input: unknown,
  options: ExamConfigValidationOptions = {}
): ExamConfigValidationResult {
  const issues: ExamConfigIssue[] = [];
  const add = (
    code: ExamConfigIssue['code'],
    path: string,
    message: string,
    severity: ExamConfigIssueSeverity = 'error'
  ) => issues.push({ code, path, message, severity });

  if (!input || typeof input !== 'object' || Array.isArray(input)) {
    add('invalid-type', '$', '配置必须是对象');
    return createValidationResult(issues);
  }

  const raw = input as Record<string, unknown>;
  if (typeof raw.examName !== 'string' || !raw.examName.trim()) {
    add('required', '$.examName', '考试名称不能为空');
  }
  if (typeof raw.message !== 'string') {
    add('invalid-type', '$.message', '考试提示信息必须是字符串');
  }
  if (!Array.isArray(raw.examInfos)) {
    add('invalid-type', '$.examInfos', '考试信息必须是数组');
    return createValidationResult(issues);
  }
  if (!raw.examInfos.length && !options.allowEmptyExamInfos) {
    add('empty-exams', '$.examInfos', '至少需要一场考试');
  }

  const ranges: Array<{ index: number; startMs: number; endMs: number }> = [];
  raw.examInfos.forEach((entry, index) => {
    const base = `$.examInfos[${index}]`;
    if (!entry || typeof entry !== 'object' || Array.isArray(entry)) {
      add('invalid-type', base, `第 ${index + 1} 场考试必须是对象`);
      return;
    }
    const exam = entry as Record<string, unknown>;
    if (typeof exam.name !== 'string' || !exam.name.trim()) {
      add('required', `${base}.name`, `第 ${index + 1} 场考试名称不能为空`);
    }
    if (typeof exam.start !== 'string' || !exam.start.trim()) {
      add('required', `${base}.start`, `第 ${index + 1} 场考试开始时间不能为空`);
    }
    if (typeof exam.end !== 'string' || !exam.end.trim()) {
      add('required', `${base}.end`, `第 ${index + 1} 场考试结束时间不能为空`);
    }

    const startMs = typeof exam.start === 'string' ? parseDateTime(exam.start).getTime() : NaN;
    const endMs = typeof exam.end === 'string' ? parseDateTime(exam.end).getTime() : NaN;
    if (!Number.isFinite(startMs)) {
      add('invalid-time', `${base}.start`, `第 ${index + 1} 场考试开始时间格式无效`);
    }
    if (!Number.isFinite(endMs)) {
      add('invalid-time', `${base}.end`, `第 ${index + 1} 场考试结束时间格式无效`);
    }
    if (Number.isFinite(startMs) && Number.isFinite(endMs)) {
      if (startMs >= endMs) {
        add('invalid-range', base, `第 ${index + 1} 场考试开始时间必须早于结束时间`);
      } else {
        ranges.push({ index, startMs, endMs });
      }
    }

    if (
      typeof exam.alertTime !== 'number' ||
      !Number.isFinite(exam.alertTime) ||
      exam.alertTime < 0
    ) {
      add(
        'invalid-number',
        `${base}.alertTime`,
        `第 ${index + 1} 场考试提醒时间必须是非负有限数值`
      );
    } else if (
      Number.isFinite(startMs) &&
      Number.isFinite(endMs) &&
      exam.alertTime * 60_000 > endMs - startMs
    ) {
      add(
        'alert-outside-exam',
        `${base}.alertTime`,
        `第 ${index + 1} 场考试提醒时间超过考试时长`,
        'warning'
      );
    }

    if (exam.materials !== undefined) {
      if (!Array.isArray(exam.materials)) {
        add('invalid-type', `${base}.materials`, `第 ${index + 1} 场考试材料必须是数组`);
      } else {
        exam.materials.forEach((material, materialIndex) => {
          const materialPath = `${base}.materials[${materialIndex}]`;
          if (!material || typeof material !== 'object' || Array.isArray(material)) {
            add('invalid-type', materialPath, '考试材料必须是对象');
            return;
          }
          const value = material as Record<string, unknown>;
          if (typeof value.name !== 'string' || !value.name.trim()) {
            add('required', `${materialPath}.name`, '考试材料名称不能为空');
          }
          if (typeof value.unit !== 'string' || !value.unit.trim()) {
            add('required', `${materialPath}.unit`, '考试材料单位不能为空');
          }
          if (
            typeof value.quantity !== 'number' ||
            !Number.isFinite(value.quantity) ||
            value.quantity < 0
          ) {
            add('invalid-number', `${materialPath}.quantity`, '考试材料数量必须是非负有限数值');
          }
        });
      }
    }
  });

  if ((options.overlap ?? 'error') !== 'allow') {
    const sortedRanges = ranges.slice().sort((left, right) => left.startMs - right.startMs);
    for (let index = 0; index < sortedRanges.length - 1; index += 1) {
      const current = sortedRanges[index];
      const next = sortedRanges[index + 1];
      if (current.endMs > next.startMs) {
        add(
          'overlap',
          `$.examInfos[${next.index}]`,
          `第 ${current.index + 1} 场和第 ${next.index + 1} 场考试时间重叠`,
          options.overlap === 'warning' ? 'warning' : 'error'
        );
      }
    }
  }

  const result = createValidationResult(issues);
  if (result.valid) {
    const config = cloneExamConfig(raw as unknown as ExamConfig);
    result.config = options.sort === false ? config : getSortedExamConfig(config);
  }
  return result;
}

export function normalizeExamConfig(config: ExamConfig): ExamConfig {
  return getSortedExamConfig(cloneExamConfig(config));
}

function cloneExamConfig(config: ExamConfig): ExamConfig {
  return {
    ...config,
    examInfos: config.examInfos.map((exam) => ({
      ...exam,
      materials: exam.materials?.map((material) => ({ ...material }))
    }))
  };
}

function createValidationResult(issues: ExamConfigIssue[]): ExamConfigValidationResult {
  const errors = issues.filter((issue) => issue.severity === 'error');
  return {
    valid: errors.length === 0,
    issues,
    errors,
    warnings: issues.filter((issue) => issue.severity === 'warning')
  };
}

/**
 * 验证配置是否具备编辑器可加载的结构。
 *
 * 这里只校验字段类型，不校验时间先后等可在编辑器中修复的业务规则。
 */
export function validateExamConfigStructure(config: unknown): config is ExamConfig {
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

  return examInfos.every((info) => {
    if (!info || typeof info !== 'object') return false;
    const { name, start, end, alertTime } = info as ExamConfig['examInfos'][number];
    return (
      typeof name === 'string' &&
      typeof start === 'string' &&
      typeof end === 'string' &&
      typeof alertTime === 'number' &&
      Number.isFinite(alertTime)
    );
  });
}

/**
 * 验证考试配置是否有效
 *
 * @param config - 考试配置对象
 * @returns 如果配置有效则返回 true，否则返回 false
 */
export function validateExamConfig(config: ExamConfig): boolean {
  if (!validateExamConfigStructure(config)) {
    return false;
  }

  const { examInfos } = config;

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
