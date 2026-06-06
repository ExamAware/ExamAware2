import type { ExamConfig, ExamInfo } from '@renderer/core/configTypes'
import { validateExamConfig } from '@renderer/core/parser'

export type ValidationLevel = 'error' | 'warning'

export interface ValidationIssue {
  type: ValidationLevel
  message: string
  path?: string
  code?: string
}

export interface ValidationContext {
  config: ExamConfig
}

export type ValidationProvider = (ctx: ValidationContext) => ValidationIssue[] | void

export interface ValidationRegistry {
  register(provider: ValidationProvider): () => void
  validate(ctx: ValidationContext): ValidationIssue[]
  dispose(): void
}

export function createValidationRegistry(): ValidationRegistry {
  const providers = new Set<ValidationProvider>()
  const disposers: Array<() => void> = []

  const register = (provider: ValidationProvider) => {
    providers.add(provider)
    const disposer = () => providers.delete(provider)
    disposers.push(disposer)
    return disposer
  }

  const validate = (ctx: ValidationContext): ValidationIssue[] => {
    const issues: ValidationIssue[] = []
    providers.forEach((provider) => {
      const res = provider(ctx)
      if (Array.isArray(res)) issues.push(...res)
    })
    return issues
  }

  const dispose = () => {
    disposers.forEach((d) => d())
    providers.clear()
    disposers.length = 0
  }

  return { register, validate, dispose }
}

// 全局注册表，便于插件通过 DI 注入/追加校验规则
export const globalValidationRegistry = createValidationRegistry()

let builtinRegistered = false
export const registerBuiltinValidation = (): (() => void) | null => {
  if (builtinRegistered) return null
  builtinRegistered = true
  const disposer = globalValidationRegistry.register(builtinValidationProvider)
  return disposer
}

// 内置校验规则，源自原 useExamValidation 逻辑
function builtinValidationProvider({ config }: ValidationContext): ValidationIssue[] {
  const issues: ValidationIssue[] = []

  if (!config.examName?.trim()) {
    issues.push({ type: 'error', message: '考试名称不能为空', path: 'examName' })
  }

  config.examInfos.forEach((exam, index) => {
    const prefix = `examInfos[${index}]`
    issues.push(...validateExamInfo(exam, prefix))
  })

  issues.push(...validateTimeConflicts(config.examInfos))

  // 保留旧的整体校验（例如 JSON schema 或 parser 校验）
  if (!validateExamConfig(config)) {
    issues.push({ type: 'error', message: '配置结构校验未通过', code: 'parser-failed' })
  }

  return issues
}

function validateExamInfo(exam: ExamInfo, pathPrefix: string): ValidationIssue[] {
  const list: ValidationIssue[] = []

  if (!exam.name?.trim()) {
    list.push({ type: 'error', message: '考试名称不能为空', path: `${pathPrefix}.name` })
  }

  if (!exam.start) {
    list.push({ type: 'error', message: '开始时间不能为空', path: `${pathPrefix}.start` })
  }

  if (!exam.end) {
    list.push({ type: 'error', message: '结束时间不能为空', path: `${pathPrefix}.end` })
  }

  if (exam.start && exam.end) {
    const startTime = new Date(exam.start)
    const endTime = new Date(exam.end)

    if (isNaN(startTime.getTime())) {
      list.push({ type: 'error', message: '开始时间格式无效', path: `${pathPrefix}.start` })
    }

    if (isNaN(endTime.getTime())) {
      list.push({ type: 'error', message: '结束时间格式无效', path: `${pathPrefix}.end` })
    }

    if (startTime >= endTime) {
      list.push({ type: 'error', message: '结束时间必须晚于开始时间', path: `${pathPrefix}.end` })
    }
  }

  if (exam.alertTime < 1 || exam.alertTime > 120) {
    list.push({
      type: 'error',
      message: '提醒时间应在1-120分钟之间',
      path: `${pathPrefix}.alertTime`
    })
  }

  return list
}

function validateTimeConflicts(exams: ExamInfo[]): ValidationIssue[] {
  const warnings: ValidationIssue[] = []

  for (let i = 0; i < exams.length; i++) {
    for (let j = i + 1; j < exams.length; j++) {
      const exam1 = exams[i]
      const exam2 = exams[j]

      if (!exam1.start || !exam1.end || !exam2.start || !exam2.end) continue

      const start1 = new Date(exam1.start)
      const end1 = new Date(exam1.end)
      const start2 = new Date(exam2.start)
      const end2 = new Date(exam2.end)

      if (start1 < end2 && start2 < end1) {
        warnings.push({
          type: 'warning',
          message: `考试"${exam1.name}"与"${exam2.name}"的时间有重叠`,
          path: `examInfos[${i}]`
        })
      }
    }
  }

  return warnings
}
