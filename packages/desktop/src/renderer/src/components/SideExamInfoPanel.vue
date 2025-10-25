<template>
  <div class="exam_info_editor">
    <t-form labelAlign="top">
      <t-form-item label="考试名称" name="examName">
        <t-input v-model="localProfile.examName" @blur="handleUpdate" />
      </t-form-item>
      <t-form-item label="考试信息" name="message">
        <t-textarea
          v-model="localProfile.message"
          :autosize="{ minRows: 3, maxRows: 6 }"
          placeholder="请输入考试相关信息..."
          @blur="handleUpdate"
        />
      </t-form-item>
    </t-form>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, watch, ref } from 'vue'
import type { ExamConfig } from '@renderer/core/configTypes'

const props = defineProps({
  profile: Object as () => ExamConfig
})

const emit = defineEmits(['update:profile'])

const localProfile = ref({ ...props.profile })

watch(
  () => props.profile,
  (newProfile) => {
    localProfile.value = { ...newProfile }
  },
  { deep: true }
)

// 处理更新
const handleUpdate = () => {
  emit('update:profile', localProfile.value)
}
</script>

<style scoped>
.exam_info_editor {
  padding: 20px;
  overflow: auto;
}
</style>
