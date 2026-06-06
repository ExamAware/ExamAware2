import { computed, ref, watch } from 'vue'
import type { ExamConfig } from '@renderer/core/configTypes'
import {
  globalValidationRegistry,
  registerBuiltinValidation,
  type ValidationIssue
} from '@renderer/core/configValidationRegistry'

/**
 * 考试验证相关的组合式函数
 */
export function useExamValidation(examConfig: ExamConfig) {
  // 确保内置校验已注册（仅注册一次）
  registerBuiltinValidation()

  const issues = ref<ValidationIssue[]>([])

  const errors = computed(() => issues.value.filter((i) => i.type === 'error'))
  const warnings = computed(() => issues.value.filter((i) => i.type === 'warning'))

  const isValid = computed(() => errors.value.length === 0)
  const hasWarnings = computed(() => warnings.value.length > 0)
  const hasErrors = computed(() => errors.value.length > 0)

  const validate = () => {
    issues.value = globalValidationRegistry.validate({ config: examConfig })
    return {
      isValid: errors.value.length === 0,
      errors: errors.value,
      warnings: warnings.value
    }
  }

  watch(
    () => examConfig,
    () => {
      validate()
    },
    { deep: true, immediate: true }
  )

  return {
    validationErrors: errors,
    validationWarnings: warnings,
    isValid,
    hasWarnings,
    hasErrors,
    validate
  }
}
