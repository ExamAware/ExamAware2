<template>
  <div class="exam-form">
    <div class="form-container">
      <t-form
        ref="formRef"
        :model="formData"
        :rules="rules"
        labelAlign="top"
        @submit.prevent="handleSubmit"
      >
        <t-form-item label="考试名称" name="name">
          <t-input
            v-model="formData.name"
            placeholder="请输入考试名称"
            @input="handleFieldChange('name')"
            @blur="flushAutoSave"
            @compositionstart="onNameCompositionStart"
            @compositionend="onNameCompositionEnd"
          />
        </t-form-item>

        <t-form-item label="开始时间" name="start">
          <t-date-picker
            v-model="startDateForPicker"
            enable-time-picker
            allow-input
            clearable
            placeholder="请选择开始时间"
            @change="handleFieldChange('start')"
            @blur="flushAutoSave"
          />
        </t-form-item>

        <t-form-item label="结束时间" name="end">
          <t-date-picker
            v-model="endDateForPicker"
            enable-time-picker
            allow-input
            clearable
            placeholder="请选择结束时间"
            @change="handleFieldChange('end')"
            @blur="flushAutoSave"
          />
        </t-form-item>

        <t-form-item label="考试结束提醒时间" name="alertTime">
          <t-input-number
            v-model="formData.alertTime"
            suffix="分钟"
            style="width: 200px"
            :min="1"
            :max="120"
            placeholder="提醒时间"
            @change="handleFieldChange('alertTime')"
            @input="handleFieldChange('alertTime')"
            @blur="flushAutoSave"
          />
        </t-form-item>

        <t-form-item label="考试材料">
          <ExamMaterialsPanel
            v-model="formData.materials"
            @update:modelValue="handleMaterialsChange"
            style="width: 100%"
          />
        </t-form-item>

        <t-form-item v-if="showActions && (allowDelete || allowReset)">
          <t-space>
            <t-button variant="outline" @click="handleReset" v-if="allowReset"> 重置 </t-button>
            <t-button variant="outline" theme="danger" @click="handleDelete" v-if="allowDelete">
              删除
            </t-button>
          </t-space>
        </t-form-item>
      </t-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, watch, computed, onBeforeUnmount } from 'vue'
import type { ExamInfo } from '@renderer/core/configTypes'
import type { FormRule } from 'tdesign-vue-next'
import { formatLocalDateTime, parseDateTime } from '@renderer/utils/dateFormat'
import ExamMaterialsPanel from './ExamMaterialsPanel.vue'
import type { ExamMaterial } from '@renderer/core/configTypes'

interface Props {
  modelValue?: ExamInfo
  showActions?: boolean
  allowDelete?: boolean
  allowReset?: boolean
  autoSave?: boolean
}

interface Emits {
  (e: 'update:modelValue', value: ExamInfo): void
  (e: 'save', value: ExamInfo): void
  (e: 'delete'): void
  (e: 'reset'): void
  (e: 'change', field: keyof ExamInfo, value: any): void
}

const props = withDefaults(defineProps<Props>(), {
  showActions: false,
  allowDelete: false,
  allowReset: false,
  autoSave: true
})

const emit = defineEmits<Emits>()

const formRef = ref()
const isComposing = ref(false)
const pendingSync = ref<ExamInfo | null>(null)

// 表单数据
const formData = reactive<ExamInfo>({
  name: '',
  start: '',
  end: '',
  alertTime: 15,
  materials: []
})

// 用于日期选择器的计算属性（转换格式）
const startDateForPicker = computed({
  get: () => {
    if (!formData.start) return ''
    // 将我们的格式转换为 Date 对象，再转为日期选择器可用的格式
    const date = parseDateTime(formData.start)
    return isNaN(date.getTime()) ? '' : date
  },
  set: (value) => {
    if (value instanceof Date) {
      formData.start = formatLocalDateTime(value)
    } else if (typeof value === 'string' && value) {
      const date = new Date(value)
      if (!isNaN(date.getTime())) {
        formData.start = formatLocalDateTime(date)
      }
    } else {
      formData.start = ''
    }
  }
})

const endDateForPicker = computed({
  get: () => {
    if (!formData.end) return ''
    const date = parseDateTime(formData.end)
    return isNaN(date.getTime()) ? '' : date
  },
  set: (value) => {
    if (value instanceof Date) {
      formData.end = formatLocalDateTime(value)
    } else if (typeof value === 'string' && value) {
      const date = new Date(value)
      if (!isNaN(date.getTime())) {
        formData.end = formatLocalDateTime(date)
      }
    } else {
      formData.end = ''
    }
  }
})

// 表单验证规则
const rules: Record<string, FormRule[]> = {
  name: [
    { required: true, message: '请输入考试名称' },
    { min: 1, max: 50, message: '考试名称长度应在1-50字符之间' }
  ],
  start: [{ required: true, message: '请选择开始时间' }],
  end: [
    { required: true, message: '请选择结束时间' },
    {
      validator: (val) => {
        if (!val || !formData.start) return true
        try {
          const startDate = parseDateTime(formData.start)
          const endDate = parseDateTime(val as string)
          if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
            return true // 如果日期解析失败，不显示时间比较错误
          }
          return endDate > startDate
        } catch {
          return true // 解析错误时不显示验证错误
        }
      },
      message: '结束时间必须晚于开始时间'
    }
  ],
  alertTime: [
    { required: true, message: '请输入提醒时间' },
    {
      validator: (val) => {
        const num = Number(val)
        return num >= 1 && num <= 120
      },
      message: '提醒时间应在1-120分钟之间'
    }
  ]
}

// 监听外部传入的值变化
watch(
  () => props.modelValue,
  (newValue) => {
    if (newValue) {
      if (isComposing.value) {
        pendingSync.value = { ...newValue }
      } else {
        Object.assign(formData, newValue)
      }
    }
  },
  { immediate: true, deep: true }
)

// 处理字段变化
const handleFieldChange = (field: keyof ExamInfo) => {
  const newValue = { ...formData }
  emit('update:modelValue', newValue)
  emit('change', field, formData[field])

  // 字段变化时清除相关的验证错误
  if (formRef.value) {
    if (field === 'start' || field === 'end') {
      // 时间字段变化时，清除开始时间和结束时间的验证错误
      formRef.value.clearValidate(['start', 'end'])
    } else {
      // 其他字段只清除自己的验证错误
      formRef.value.clearValidate([field])
    }
  }

  if (props.autoSave) {
    // 实时保存，稍微延迟避免频繁触发
    if (autoSaveTimer.value) clearTimeout(autoSaveTimer.value as any)
    autoSaveTimer.value = setTimeout(() => {
      handleSave()
      autoSaveTimer.value = null
    }, 300) as any // 减少延迟时间，让保存更及时
  }
}

// 处理材料变化
const handleMaterialsChange = (materials: ExamMaterial[]) => {
  formData.materials = materials
  handleFieldChange('materials' as keyof ExamInfo)
}

// 处理中文输入法合成标志
const onNameCompositionStart = () => {
  isComposing.value = true
}
const onNameCompositionEnd = () => {
  isComposing.value = false
  // 合成结束，若有待同步的外部值，应用之
  if (pendingSync.value) {
    Object.assign(formData, pendingSync.value)
    pendingSync.value = null
  }
  // 同步最新值并保存
  handleFieldChange('name')
  flushAutoSave()
}

const autoSaveTimer = ref<ReturnType<typeof setTimeout> | null>(null)

// 立刻冲刷自动保存，避免因页面切换或 IME 结束导致的丢失
const flushAutoSave = () => {
  if (autoSaveTimer.value) {
    clearTimeout(autoSaveTimer.value as any)
    autoSaveTimer.value = null
    // 先将最终值同步给父组件，避免丢失最后一次编辑
    emit('update:modelValue', { ...formData })
    handleSave()
  }
}

// 处理提交
const handleSubmit = async (e?: Event) => {
  e?.preventDefault() // 阻止默认的表单提交行为
  // 移除表单提交逻辑，因为现在是实时保存
}

// 处理保存
const handleSave = async () => {
  // 保存前先清除验证错误，避免显示不必要的红色提醒
  if (formRef.value) {
    formRef.value.clearValidate()
  }

  emit('save', { ...formData })
}

// 处理重置
const handleReset = () => {
  formRef.value?.reset()
  emit('reset')
}

// 处理删除
const handleDelete = () => {
  emit('delete')
}

// 验证表单
const validate = () => {
  return formRef.value?.validate()
}

// 重置验证
const resetValidation = () => {
  formRef.value?.clearValidate()
}

// 暴露方法给父组件
defineExpose({
  validate,
  resetValidation,
  formData,
  flushAutoSave
})

onBeforeUnmount(() => {
  flushAutoSave()
})
</script>

<style scoped>
.exam-form {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.form-container {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
}

.exam-form :deep(.t-form-item__label) {
  font-weight: 500;
}
</style>
