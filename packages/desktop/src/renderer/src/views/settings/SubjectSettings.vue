<template>
  <div class="settings-page subject-settings">
    <div class="subject-header">
      <h2>学科</h2>
      <t-button theme="primary" @click="openCreate">
        <template #icon><AddIcon /></template>
        添加学科
      </t-button>
    </div>

    <div class="subject-list">
      <div v-for="subject in subjects" :key="subject.id" class="subject-row">
        <div class="subject-info">
          <div class="subject-title">
            <span class="subject-name">{{ subject.name }}</span>
            <t-tag v-if="subject.enabled" size="small" variant="light">默认</t-tag>
          </div>
          <span class="subject-meta">{{ subject.duration }} 分钟</span>
        </div>
        <div class="subject-actions">
          <t-button variant="text" size="small" @click="openEdit(subject)">编辑</t-button>
          <t-button variant="text" size="small" theme="danger" @click="removeSubject(subject)">
            删除
          </t-button>
        </div>
      </div>
      <div v-if="!subjects.length" class="subject-empty">暂无学科</div>
    </div>

    <t-dialog
      v-model:visible="dialogVisible"
      :header="editingId ? '编辑学科' : '添加学科'"
      width="420px"
      :confirm-btn="{ content: '保存' }"
      @confirm="saveSubject"
    >
      <t-form :data="draft" label-align="top">
        <t-form-item label="学科名称" name="name">
          <t-input
            v-model="draft.name"
            placeholder="学科名称"
            :maxlength="20"
            @enter="saveSubject"
          />
        </t-form-item>
        <t-form-item label="默认时长" name="duration">
          <t-input-number
            v-model="draft.duration"
            theme="normal"
            :min="5"
            :max="480"
            :step="5"
            suffix="分钟"
          />
        </t-form-item>
        <t-form-item label="默认选中" name="enabled">
          <t-switch v-model="draft.enabled" />
        </t-form-item>
      </t-form>
    </t-dialog>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { DialogPlugin, MessagePlugin } from 'tdesign-vue-next'
import { AddIcon } from 'tdesign-icons-vue-next'
import {
  createSubjectId,
  loadSubjects,
  saveSubjects,
  type ManagedSubject
} from '@renderer/core/subjects'

const subjects = ref<ManagedSubject[]>(loadSubjects())
const dialogVisible = ref(false)
const editingId = ref<string | null>(null)
const draft = reactive({
  name: '',
  duration: 75,
  enabled: true
})

function openCreate(): void {
  editingId.value = null
  draft.name = ''
  draft.duration = 75
  draft.enabled = true
  dialogVisible.value = true
}

function openEdit(subject: ManagedSubject): void {
  editingId.value = subject.id
  draft.name = subject.name
  draft.duration = subject.duration
  draft.enabled = subject.enabled
  dialogVisible.value = true
}

function saveSubject(): void {
  const name = draft.name.trim()
  if (!name) {
    MessagePlugin.warning('学科名不能为空')
    return
  }
  if (subjects.value.some((subject) => subject.id !== editingId.value && subject.name === name)) {
    MessagePlugin.warning('学科已存在')
    return
  }
  const duration = Math.max(5, Math.min(480, Math.round(Number(draft.duration) || 75)))
  if (editingId.value) {
    const subject = subjects.value.find((item) => item.id === editingId.value)
    if (subject) {
      subject.name = name
      subject.duration = duration
      subject.enabled = draft.enabled
    }
  } else {
    subjects.value.push({
      id: createSubjectId(),
      name,
      duration,
      enabled: draft.enabled
    })
  }
  saveSubjects(subjects.value)
  dialogVisible.value = false
}

function removeSubject(subject: ManagedSubject): void {
  if (subjects.value.length <= 1) {
    MessagePlugin.warning('至少保留一个学科')
    return
  }
  const dialog = DialogPlugin.confirm({
    theme: 'danger',
    header: '删除学科',
    body: `确定删除「${subject.name}」？`,
    confirmBtn: '删除',
    cancelBtn: '取消',
    onConfirm: () => {
      subjects.value = subjects.value.filter((item) => item.id !== subject.id)
      saveSubjects(subjects.value)
      dialog.destroy?.()
    },
    onClose: () => dialog.destroy?.(),
    onCancel: () => dialog.destroy?.()
  })
}
</script>

<style scoped>
.subject-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}
.subject-list {
  border-top: 1px solid var(--td-border-level-1-color);
}
.subject-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 14px 4px;
  border-bottom: 1px solid var(--td-border-level-1-color);
}
.subject-info {
  display: flex;
  flex-direction: column;
  gap: 3px;
  min-width: 0;
}
.subject-title {
  display: flex;
  align-items: center;
  gap: 8px;
}
.subject-name {
  font-size: 15px;
  font-weight: 500;
  color: var(--td-text-color-primary);
}
.subject-meta {
  color: var(--td-text-color-secondary);
  font-size: 12px;
}
.subject-actions {
  display: flex;
  flex-shrink: 0;
  gap: 2px;
}
.subject-empty {
  padding: 40px 0;
  color: var(--td-text-color-placeholder);
  text-align: center;
}
</style>
