import { computed, ref, watch } from 'vue'
import type { ExamConfig, ExamInfo } from '@renderer/core/configTypes'
import { validateExamConfig } from '@renderer/core/parser'

/**
 * 考试验证相关的组合式函数
 */
export function useExamValidation(examConfig: ExamConfig) {
  const validationErrors = ref<string[]>([])
  const validationWarnings = ref<string[]>([])

  // 验证单个考试信息
  const validateExamInfo = (examInfo: ExamInfo): string[] => {
    const errors: string[] = []

    if (!examInfo.name?.trim()) {
      errors.push('考试名称不能为空')
    }

    if (!examInfo.start) {
      errors.push('开始时间不能为空')
    }

    if (!examInfo.end) {
      errors.push('结束时间不能为空')
    }

    if (examInfo.start && examInfo.end) {
      const startTime = new Date(examInfo.start)
      const endTime = new Date(examInfo.end)

      if (isNaN(startTime.getTime())) {
        errors.push('开始时间格式无效')
      }

      if (isNaN(endTime.getTime())) {
        errors.push('结束时间格式无效')
      }

      if (startTime >= endTime) {
        errors.push('结束时间必须晚于开始时间')
      }

      // 检查考试时长是否合理（不少于5分钟，不超过24小时）
      // const duration = endTime.getTime() - startTime.getTime()
      // const minutes = duration / (1000 * 60)

      // if (minutes < 5) {
      //   errors.push('考试时长不能少于5分钟')
      // }

      // if (minutes > 24 * 60) {
      //   errors.push('考试时长不能超过24小时')
      // }
    }

    if (examInfo.alertTime < 1 || examInfo.alertTime > 120) {
      errors.push('提醒时间应在1-120分钟之间')
    }

    return errors
  }

  // 验证考试时间冲突
  const validateTimeConflicts = (examInfos: ExamInfo[]): string[] => {
    const warnings: string[] = []

    for (let i = 0; i < examInfos.length; i++) {
      for (let j = i + 1; j < examInfos.length; j++) {
        const exam1 = examInfos[i]
        const exam2 = examInfos[j]

        if (!exam1.start || !exam1.end || !exam2.start || !exam2.end) continue

        const start1 = new Date(exam1.start)
        const end1 = new Date(exam1.end)
        const start2 = new Date(exam2.start)
        const end2 = new Date(exam2.end)

        // 检查时间重叠
        if (start1 < end2 && start2 < end1) {
          warnings.push(`考试"${exam1.name}"与"${exam2.name}"的时间有重叠`)
        }
      }
    }

    return warnings
  }

  // 计算属性：总体验证状态
  const isValid = computed(() => {
    return validateExamConfig(examConfig) && validationErrors.value.length === 0
  })

  const hasWarnings = computed(() => {
    return validationWarnings.value.length > 0
  })

  const hasErrors = computed(() => {
    return validationErrors.value.length > 0
  })

  // 执行全面验证
  const validate = () => {
    const errors: string[] = []
    const warnings: string[] = []

    // 验证基本配置
    if (!examConfig.examName?.trim()) {
      errors.push('考试名称不能为空')
    }

    // 验证每个考试信息
    examConfig.examInfos.forEach((examInfo, index) => {
      const examErrors = validateExamInfo(examInfo)
      errors.push(...examErrors.map(error => `考试${index + 1}: ${error}`))
    })

    // 验证时间冲突
    const conflictWarnings = validateTimeConflicts(examConfig.examInfos)
    warnings.push(...conflictWarnings)

    validationErrors.value = errors
    validationWarnings.value = warnings

    return {
      isValid: errors.length === 0,
      errors,
      warnings,
    }
  }

  // 监听配置变化，自动验证
  watch(
    () => examConfig,
    () => {
      validate()
    },
    { deep: true, immediate: true }
  )

  return {
    validationErrors,
    validationWarnings,
    isValid,
    hasWarnings,
    hasErrors,
    validate,
    validateExamInfo,
    validateTimeConflicts,
  }
}
