<template>
  <div class="exam-list">
    <div class="exam-list-content" v-if="examList.length > 0">
      <t-list :split="true">
        <t-list-item
          v-for="(exam, index) in examList"
          :key="index"
          :class="{ active: index === activeIndex }"
          @click="handleSelectExam(index)"
        >
          <t-list-item-meta>
            <template #title>
              {{ exam.name || `考试 ${index + 1}` }}
            </template>
            <template #description>
              <div class="exam-time">
                <component :is="renderTimeIcon" />
                {{ formatExamTime(exam) }}
              </div>
              <div class="exam-status">
                <t-tag
                  size="small"
                  :theme="getExamStatusTheme(exam)"
                  :variant="getExamStatusVariant(exam)"
                >
                  {{ getExamStatus(exam) }}
                </t-tag>
              </div>
            </template>
          </t-list-item-meta>

          <template #action>
            <t-space>
              <t-button
                size="small"
                variant="text"
                theme="primary"
                @click.stop="handleEditExam(index)"
              >
                编辑
              </t-button>
              <t-dropdown :options="getDropdownOptions(index)" @click="handleDropdownClick">
                <t-button size="small" variant="text" :icon="renderMoreIcon" />
              </t-dropdown>
            </t-space>
          </template>
        </t-list-item>
      </t-list>
    </div>

    <div class="exam-list-empty" v-else>
      <div class="exam-list-empty-vertical">
        <t-empty description="暂无考试">
          <template #image>
            <component :is="renderCalendarIcon" />
          </template>
        </t-empty>
        <t-button theme="primary" size="medium" style="margin-top: 24px" @click="$emit('add')">
          添加考试
        </t-button>
      </div>
    </div>

    <!-- 确认删除对话框 -->
    <t-dialog
      v-model:visible="showDeleteDialog"
      header="确认删除"
      @confirm="handleConfirmDelete"
      @cancel="showDeleteDialog = false"
    >
      <p>确定要删除考试 "{{ deleteTarget?.name }}" 吗？此操作不可撤销。</p>
    </t-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import type { ExamInfo } from '@renderer/core/configTypes'
import { MoreIcon, TimeIcon, CalendarIcon } from 'tdesign-icons-vue-next'
import { formatTimeRange } from '@renderer/utils/dateFormat'
import { getSyncedTime } from '@renderer/utils/timeUtils'

interface Props {
  examList: ExamInfo[]
  activeIndex?: number | null
}

interface Emits {
  (e: 'add'): void
  (e: 'edit', index: number): void
  (e: 'delete', index: number): void
  (e: 'select', index: number): void
  (e: 'duplicate', index: number): void
  (e: 'move-up', index: number): void
  (e: 'move-down', index: number): void
}

const props = withDefaults(defineProps<Props>(), {
  activeIndex: null
})

const emit = defineEmits<Emits>()

const showDeleteDialog = ref(false)
const deleteTarget = ref<ExamInfo | null>(null)
const deleteIndex = ref<number>(-1)

// 图标渲染函数
const renderMoreIcon = () => h(MoreIcon)
const renderTimeIcon = () => h(TimeIcon, { size: '12px' })
const renderCalendarIcon = () => h(CalendarIcon, { size: '48px' })

// 格式化考试时间
const formatExamTime = (exam: ExamInfo) => {
  const start = new Date(exam.start)
  const end = new Date(exam.end)
  return formatTimeRange(start, end)
}

// 获取考试状态
const getExamStatus = (exam: ExamInfo) => {
  const now = new Date(getSyncedTime())
  const start = new Date(exam.start)
  const end = new Date(exam.end)

  if (isNaN(start.getTime()) || isNaN(end.getTime())) {
    return '待设置'
  }

  if (now < start) {
    return '未开始'
  } else if (now >= start && now <= end) {
    return '进行中'
  } else {
    return '已结束'
  }
}

// 获取状态主题
const getExamStatusTheme = (exam: ExamInfo) => {
  const status = getExamStatus(exam)
  switch (status) {
    case '未开始':
      return 'warning'
    case '进行中':
      return 'success'
    case '已结束':
      return 'default'
    default:
      return 'default'
  }
}

// 获取状态变体
const getExamStatusVariant = (exam: ExamInfo) => {
  const status = getExamStatus(exam)
  return status === '进行中' ? 'dark' : 'light'
}

// 处理选择考试
const handleSelectExam = (index: number) => {
  emit('select', index)
}

// 处理编辑考试
const handleEditExam = (index: number) => {
  emit('edit', index)
}

// 获取下拉菜单选项
const getDropdownOptions = (index: number) => {
  return [
    {
      content: '复制',
      value: `duplicate-${index}`
    },
    {
      content: '上移',
      value: `move-up-${index}`,
      disabled: index === 0
    },
    {
      content: '下移',
      value: `move-down-${index}`,
      disabled: index === props.examList.length - 1
    },
    {
      content: '删除',
      value: `delete-${index}`,
      theme: 'error'
    }
  ]
}

// 处理下拉菜单点击
const handleDropdownClick = (data: any) => {
  const [action, indexStr] = data.value.split('-')
  const index = parseInt(indexStr)

  switch (action) {
    case 'duplicate':
      emit('duplicate', index)
      break
    case 'move-up':
      emit('move-up', index)
      break
    case 'move-down':
      emit('move-down', index)
      break
    case 'delete':
      showDeleteConfirm(index)
      break
  }
}

// 显示删除确认
const showDeleteConfirm = (index: number) => {
  deleteTarget.value = props.examList[index]
  deleteIndex.value = index
  showDeleteDialog.value = true
}

// 确认删除
const handleConfirmDelete = () => {
  if (deleteIndex.value >= 0) {
    emit('delete', deleteIndex.value)
  }
  showDeleteDialog.value = false
  deleteTarget.value = null
  deleteIndex.value = -1
}
</script>

<style scoped>
.exam-list {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.exam-list-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border-bottom: 1px solid var(--td-border-level-1-color);
}

.exam-list-title {
  font-weight: 500;
  font-size: 14px;
}

.exam-list-content {
  flex: 1;
  overflow-y: auto;
}

.exam-list-empty {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px 16px;
}

.exam-list-empty-vertical {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.exam-time {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  color: var(--td-text-color-secondary);
  margin-bottom: 2px;
  line-height: 1.2;
}

.exam-status {
  display: flex;
  align-items: center;
}

:deep(.t-list-item) {
  cursor: pointer;
  transition: background-color 0.2s;
  padding: 16px 8px 0px 8px !important;
}

:deep(.t-list-item:hover) {
  background-color: var(--td-bg-color-container-hover);
}

:deep(.t-list-item.active) {
  background-color: var(--td-bg-color-container-active);
}

:deep(.t-list-item .t-list-item__meta) {
  gap: 4px;
}

:deep(.t-list-item .t-list-item__meta-title) {
  font-size: 14px;
  line-height: 1.3;
  margin-bottom: 2px;
}

:deep(.t-list-item .t-list-item__meta-description) {
  margin-top: 0;
  gap: 6px;
}
</style>
