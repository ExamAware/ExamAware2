<template>
  <div class="validation-panel">
    <div class="validation-header">
      <h4>配置验证</h4>
      <div class="validation-summary">
        <span v-if="errors.length > 0" class="error-count">
          <t-icon name="error-circle" />
          {{ errors.length }} 个错误
        </span>
        <span v-if="warnings.length > 0" class="warning-count">
          <t-icon name="warning-circle" />
          {{ warnings.length }} 个警告
        </span>
        <span v-if="errors.length === 0 && warnings.length === 0" class="success-message">
          <t-icon name="check-circle" />
          配置正常
        </span>
      </div>
    </div>

    <div class="validation-content">
      <!-- 错误列表 -->
      <div v-if="errors.length > 0" class="validation-section">
        <h5 class="section-title error-title">
          <t-icon name="error-circle" />
          错误
        </h5>
        <div class="validation-list">
          <div
            v-for="(error, index) in errors"
            :key="`error-${index}`"
            class="validation-item error-item"
          >
            <div class="validation-icon">
              <t-icon name="error-circle" />
            </div>
            <div class="validation-message">
              <div class="message-text">{{ error.message }}</div>
              <div v-if="error.field" class="message-field">字段: {{ error.field }}</div>
              <div v-if="error.examIndex !== undefined" class="message-context">
                考试 {{ error.examIndex + 1 }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 警告列表 -->
      <div v-if="warnings.length > 0" class="validation-section">
        <h5 class="section-title warning-title">
          <t-icon name="warning-circle" />
          警告
        </h5>
        <div class="validation-list">
          <div
            v-for="(warning, index) in warnings"
            :key="`warning-${index}`"
            class="validation-item warning-item"
          >
            <div class="validation-icon">
              <t-icon name="warning-circle" />
            </div>
            <div class="validation-message">
              <div class="message-text">{{ warning.message }}</div>
              <div v-if="warning.field" class="message-field">字段: {{ warning.field }}</div>
              <div v-if="warning.examIndex !== undefined" class="message-context">
                考试 {{ warning.examIndex + 1 }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 无问题时的状态 -->
      <div v-if="errors.length === 0 && warnings.length === 0" class="validation-empty">
        <t-empty description="当前配置没有发现问题">
          <template #image>
            <t-icon name="check-circle" size="48px" />
          </template>
        </t-empty>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue'

interface ValidationError {
  message: string
  field?: string
  examIndex?: number
  type: 'error' | 'warning'
}

interface Props {
  validationErrors?: ValidationError[]
}

const props = withDefaults(defineProps<Props>(), {
  validationErrors: () => []
})

// 分离错误和警告
const errors = computed(() =>
  props.validationErrors.filter(item => item.type === 'error')
)

const warnings = computed(() =>
  props.validationErrors.filter(item => item.type === 'warning')
)
</script>

<style scoped>
.validation-panel {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: var(--td-bg-color-container);
}

.validation-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border-bottom: 1px solid var(--td-border-level-1-color);
  background-color: var(--td-bg-color-container);
}

.validation-header h4 {
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  color: var(--td-text-color-primary);
}

.validation-summary {
  display: flex;
  gap: 16px;
  font-size: 12px;
}

.error-count {
  display: flex;
  align-items: center;
  gap: 4px;
  color: var(--td-error-color);
}

.warning-count {
  display: flex;
  align-items: center;
  gap: 4px;
  color: var(--td-warning-color);
}

.success-message {
  display: flex;
  align-items: center;
  gap: 4px;
  color: var(--td-success-color);
}

.validation-content {
  flex: 1;
  overflow-y: auto;
  padding: 8px 0;
}

.validation-section {
  margin-bottom: 16px;
}

.section-title {
  display: flex;
  align-items: center;
  gap: 6px;
  margin: 0 0 8px 0;
  padding: 0 16px;
  font-size: 13px;
  font-weight: 500;
}

.error-title {
  color: var(--td-error-color);
}

.warning-title {
  color: var(--td-warning-color);
}

.validation-list {
  display: flex;
  flex-direction: column;
}

.validation-item {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 8px 16px;
  border-left: 3px solid transparent;
  transition: background-color 0.2s;
}

.validation-item:hover {
  background-color: var(--td-bg-color-container-hover);
}

.error-item {
  border-left-color: var(--td-error-color);
}

.warning-item {
  border-left-color: var(--td-warning-color);
}

.validation-icon {
  margin-top: 2px;
  flex-shrink: 0;
}

.error-item .validation-icon {
  color: var(--td-error-color);
}

.warning-item .validation-icon {
  color: var(--td-warning-color);
}

.validation-message {
  flex: 1;
  min-width: 0;
}

.message-text {
  font-size: 13px;
  line-height: 1.4;
  color: var(--td-text-color-primary);
  margin-bottom: 2px;
}

.message-field,
.message-context {
  font-size: 11px;
  color: var(--td-text-color-secondary);
  line-height: 1.2;
}

.validation-empty {
  padding: 32px 16px;
  text-align: center;
}

/* 滚动条样式 */
.validation-content::-webkit-scrollbar {
  width: 6px;
}

.validation-content::-webkit-scrollbar-track {
  background: var(--td-bg-color-container);
}

.validation-content::-webkit-scrollbar-thumb {
  background: var(--td-border-level-2-color);
  border-radius: 3px;
}

.validation-content::-webkit-scrollbar-thumb:hover {
  background: var(--td-border-level-3-color);
}
</style>
