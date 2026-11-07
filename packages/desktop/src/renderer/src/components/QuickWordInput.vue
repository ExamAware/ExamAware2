<template>
  <div ref="rootRef" class="quick-word-input" @focusin="openQuickWords" @focusout="handleFocusOut">
    <t-input
      v-model="model"
      :placeholder="placeholder"
      :maxlength="maxlength"
      :clearable="clearable"
      :disabled="disabled"
      :size="size"
      @input="(value: string, context: unknown) => emit('input', value, context)"
      @blur="(value: string, context: unknown) => emit('blur', value, context)"
      @compositionstart="emit('compositionstart')"
      @compositionend="emit('compositionend')"
    />
  </div>

  <Teleport to="body">
    <div
      v-if="quickWordsVisible"
      ref="panelRef"
      class="quick-words"
      :style="panelStyle"
      @mousedown.prevent
    >
      <div v-for="group in wordGroups" :key="group.id || group.label" class="quick-word-group">
        <span class="quick-word-label">{{ group.label }}</span>
        <div class="quick-word-list">
          <button
            v-for="word in group.words"
            :key="word.label"
            type="button"
            class="quick-word"
            @click="insertQuickWord(word.value)"
          >
            <span class="quick-word-text">{{ word.label }}</span>
            <span v-if="word.hint" class="quick-word-hint">{{ word.hint }}</span>
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import { getSyncedTime, getTimeSyncInfo } from '@renderer/utils/timeUtils'
import { quickStartWordContributions } from '@renderer/runtime/pluginApi/contributions'

interface QuickWord {
  label: string
  value: string
  hint?: string
}

interface QuickWordGroup {
  id?: string
  label: string
  words: QuickWord[]
}

const props = withDefaults(
  defineProps<{
    modelValue?: string
    placeholder?: string
    maxlength?: number | string
    clearable?: boolean
    disabled?: boolean
    size?: 'small' | 'medium' | 'large'
  }>(),
  {
    placeholder: '',
    maxlength: undefined,
    clearable: false,
    disabled: false,
    size: 'medium'
  }
)

const emit = defineEmits<{
  'update:modelValue': [value: string]
  input: [value: string, context: unknown]
  blur: [value: string, context: unknown]
  compositionstart: []
  compositionend: []
}>()

const model = computed({
  get: () => props.modelValue ?? '',
  set: (value: string) => emit('update:modelValue', value)
})

const rootRef = ref<HTMLDivElement | null>(null)
const panelRef = ref<HTMLDivElement | null>(null)
const quickWordsVisible = ref(false)
const quickWordNow = ref(new Date(getSyncedTime()))
const panelStyle = ref<Record<string, string>>({})

function toWord(value: string): QuickWord {
  return { label: value, value }
}

function addWordDays(date: Date, days: number): Date {
  const next = new Date(date)
  next.setDate(next.getDate() + days)
  return next
}

function formatWordDate(date: Date): string {
  return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`
}

function dateWord(date: Date, hint: string): QuickWord {
  const value = formatWordDate(date)
  return { label: value, value, hint }
}

const dateWordGroup = computed<QuickWordGroup>(() => {
  const now = quickWordNow.value
  const tomorrow = addWordDays(now, 1)
  const nextMonday = addWordDays(now, 7 - ((now.getDay() + 6) % 7))
  const nextTuesday = addWordDays(nextMonday, 1)
  return {
    label: '日期',
    words: [
      toWord('年'),
      toWord('月'),
      toWord('日'),
      dateWord(now, '今天'),
      dateWord(tomorrow, '明天'),
      dateWord(nextMonday, '下周一'),
      dateWord(nextTuesday, '下周二')
    ]
  }
})

const staticWordGroups: QuickWordGroup[] = [
  { label: '常用', words: ['第', '次', '届', '学期', '学年', '上', '下'].map(toWord) },
  {
    label: '类型',
    words: ['月考', '期中', '期末', '周测', '联考', '统考', '一模', '二模', '三模'].map(toWord)
  },
  {
    label: '年级',
    words: ['初一', '初二', '初三', '初四', '高一', '高二', '高三', '年级', '级部', '年段'].map(
      toWord
    )
  },
  {
    label: '数字',
    words: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'].map(toWord)
  }
]

const wordGroups = computed<QuickWordGroup[]>(() => [
  staticWordGroups[0],
  dateWordGroup.value,
  ...staticWordGroups.slice(1),
  ...quickStartWordContributions.items.value.map((group) => ({
    id: group.id,
    label: group.label,
    words: group.words.map(toWord)
  }))
])

function updatePanelPosition(): void {
  const input = rootRef.value?.querySelector('input')
  if (!input) return
  const rect = input.getBoundingClientRect()
  const width = Math.min(560, Math.max(280, window.innerWidth - rect.left - 16))
  const maxHeight = Math.max(160, Math.min(420, window.innerHeight - rect.bottom - 20))
  panelStyle.value = {
    top: `${Math.round(rect.bottom + 6)}px`,
    left: `${Math.round(rect.left)}px`,
    width: `${Math.round(width)}px`,
    maxHeight: `${Math.round(maxHeight)}px`
  }
}

async function openQuickWords(): Promise<void> {
  updatePanelPosition()
  await getTimeSyncInfo()
  if (!rootRef.value?.contains(document.activeElement)) return
  quickWordNow.value = new Date(getSyncedTime())
  quickWordsVisible.value = true
  nextTick(updatePanelPosition)
}

function handleFocusOut(event: FocusEvent): void {
  const next = event.relatedTarget as Node | null
  if (next && (rootRef.value?.contains(next) || panelRef.value?.contains(next))) return
  quickWordsVisible.value = false
}

function insertQuickWord(word: string): void {
  const input = rootRef.value?.querySelector('input')
  if (!input) {
    model.value = `${model.value}${word}`
    return
  }
  const start = input.selectionStart ?? input.value.length
  const end = input.selectionEnd ?? start
  input.focus({ preventScroll: true })
  input.setRangeText(word, start, end, 'end')
  input.dispatchEvent(new Event('input', { bubbles: true }))
}

function hideQuickWords(): void {
  quickWordsVisible.value = false
}

function handleWindowScroll(event: Event): void {
  if (panelRef.value?.contains(event.target as Node)) return
  hideQuickWords()
}

onMounted(() => {
  window.addEventListener('resize', hideQuickWords)
  window.addEventListener('scroll', handleWindowScroll, true)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', hideQuickWords)
  window.removeEventListener('scroll', handleWindowScroll, true)
})
</script>

<style scoped>
.quick-word-input {
  width: 100%;
}
.quick-words {
  position: fixed;
  z-index: 3000;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 10px 12px;
  overflow: auto;
  border: 1px solid var(--td-border-level-1-color);
  border-radius: 6px;
  background: var(--td-bg-color-container);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18);
}
.quick-word-group {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}
.quick-word-label {
  flex: 0 0 28px;
  color: var(--td-text-color-secondary);
  font-size: 12px;
  line-height: 24px;
}
.quick-word-list {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.quick-word {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  height: 24px;
  padding: 0 6px;
  border: 1px solid var(--td-border-level-1-color);
  border-radius: 4px;
  background: var(--td-bg-color-secondarycontainer);
  color: var(--td-text-color-primary);
  font: inherit;
  font-size: 12px;
  line-height: 22px;
  cursor: pointer;
}
.quick-word-hint {
  color: var(--td-text-color-placeholder);
  font-size: 11px;
}
.quick-word:hover {
  color: var(--td-brand-color);
  border-color: var(--td-brand-color);
}
</style>
