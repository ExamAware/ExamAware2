<template>
  <ExamList
    :exam-list="props.profile?.examInfos || []"
    @add="addExam"
    @edit="switchExamInfo"
    @delete="deleteExam"
    @select="switchExamInfo"
    @duplicate="duplicateExam"
    @move-up="moveExamUp"
    @move-down="moveExamDown"
  />
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed } from 'vue'
import type { ExamConfig, ExamInfo } from '@renderer/core/configTypes'
import ExamList from './ExamList.vue'
import { formatLocalDateTime } from '@renderer/utils/dateFormat'
import { getSyncedTime } from '@renderer/utils/timeUtils'

const props = defineProps({
  profile: Object as () => ExamConfig
})

const emit = defineEmits(['switch-exam-info', 'update:profile'])

// 使用计算属性确保响应性
const currentProfile = computed(() => ({
  examName: '',
  message: '',
  examInfos: [],
  ...props.profile
}))

const createNewExam = (examInfos: ExamInfo[]): ExamInfo => {
  const now = new Date(getSyncedTime())
  const lastExam = examInfos[examInfos.length - 1]
  const start = lastExam ? new Date(new Date(lastExam.end).getTime() + 10 * 60000) : now
  const end = new Date(start.getTime() + 60 * 60000)

  return {
    name: `未命名考试${examInfos.length + 1}`,
    start: formatLocalDateTime(start),
    end: formatLocalDateTime(end),
    alertTime: 15,
    materials: []
  }
}

const addExam = () => {
  const examInfos = currentProfile.value.examInfos || []
  const updatedProfile = {
    ...currentProfile.value,
    examInfos: [...examInfos, createNewExam(examInfos)]
  }
  emit('update:profile', updatedProfile)
}

// 切换考试信息
const switchExamInfo = (index: number) => {
  emit('switch-exam-info', { examId: index })
}

// 删除考试
const deleteExam = (index: number) => {
  const examInfos = currentProfile.value.examInfos || []
  if (index >= 0 && index < examInfos.length) {
    const updatedExamInfos = [...examInfos]
    updatedExamInfos.splice(index, 1)
    const updatedProfile = {
      ...currentProfile.value,
      examInfos: updatedExamInfos
    }
    emit('update:profile', updatedProfile)
  }
}

// 复制考试
const duplicateExam = (index: number) => {
  const examInfos = currentProfile.value.examInfos || []
  if (index < 0 || index >= examInfos.length) {
    return
  }

  const originalExam = examInfos[index]

  // 计算原考试的时长（毫秒）
  const originalStart = new Date(originalExam.start)
  const originalEnd = new Date(originalExam.end)
  const duration = originalEnd.getTime() - originalStart.getTime()

  // 找到所有考试中最晚的结束时间
  let latestEndTime = new Date(0) // 初始化为最早时间
  examInfos.forEach((exam) => {
    const examEnd = new Date(exam.end)
    if (examEnd > latestEndTime) {
      latestEndTime = examEnd
    }
  })

  // 复制考试的开始时间 = 最晚结束时间 + 10分钟
  const newStartTime = new Date(latestEndTime.getTime() + 10 * 60 * 1000)
  const newEndTime = new Date(newStartTime.getTime() + duration)

  const duplicatedExam: ExamInfo = {
    ...originalExam,
    name: `${originalExam.name} (副本)`,
    start: formatLocalDateTime(newStartTime),
    end: formatLocalDateTime(newEndTime)
  }

  const updatedExamInfos = [...examInfos, duplicatedExam] // 添加到末尾而不是原位置
  const updatedProfile = {
    ...currentProfile.value,
    examInfos: updatedExamInfos
  }
  emit('update:profile', updatedProfile)
}

// 上移考试
const moveExamUp = (index: number) => {
  const examInfos = currentProfile.value.examInfos || []
  if (index > 0 && index < examInfos.length) {
    const updatedExamInfos = [...examInfos]
    const exam = updatedExamInfos.splice(index, 1)[0]
    updatedExamInfos.splice(index - 1, 0, exam)
    const updatedProfile = {
      ...currentProfile.value,
      examInfos: updatedExamInfos
    }
    emit('update:profile', updatedProfile)
  }
}

// 下移考试
const moveExamDown = (index: number) => {
  const examInfos = currentProfile.value.examInfos || []
  if (index >= 0 && index < examInfos.length - 1) {
    const updatedExamInfos = [...examInfos]
    const exam = updatedExamInfos.splice(index, 1)[0]
    updatedExamInfos.splice(index + 1, 0, exam)
    const updatedProfile = {
      ...currentProfile.value,
      examInfos: updatedExamInfos
    }
    emit('update:profile', updatedProfile)
  }
}
</script>
