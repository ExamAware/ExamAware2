<template>
  <div class="history-panel">
    <div class="header">
      <div>操作记录</div>
      <div class="actions">
        <t-button size="small" theme="default" variant="outline" :disabled="!canUndo" @click="undo"
          >撤销</t-button
        >
        <t-button size="small" theme="default" variant="outline" :disabled="!canRedo" @click="redo"
          >重做</t-button
        >
      </div>
    </div>
    <div class="list" role="list">
      <div
        v-for="(e, i) in entries"
        :key="e.id"
        class="item"
        :class="{ active: i === pointer }"
        @click="goto(i)"
      >
        <div class="dot" />
        <div class="label">{{ e.label }}</div>
        <div class="time">{{ fmt(e.timestamp) }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { historyStore } from '@renderer/core/historyStore'

const entries = historyStore.entries
const pointer = historyStore.pointer
const canUndo = historyStore.canUndo
const canRedo = historyStore.canRedo
const undo = () => historyStore.undo()
const redo = () => historyStore.redo()
const goto = (i: number) => historyStore.goto(i)

const fmt = (ts: number) => {
  const d = new Date(ts)
  const hh = String(d.getHours()).padStart(2, '0')
  const mm = String(d.getMinutes()).padStart(2, '0')
  const ss = String(d.getSeconds()).padStart(2, '0')
  return `${hh}:${mm}:${ss}`
}
</script>

<style scoped>
.history-panel {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  border-bottom: 1px solid var(--td-border-level-1-color);
}
.actions {
  display: flex;
  gap: 8px;
}
.list {
  flex: 1;
  min-height: 0;
  overflow: auto;
  padding: 8px 0;
}
.item {
  display: grid;
  grid-template-columns: 12px 1fr auto;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  cursor: pointer;
}
.item:hover {
  background: var(--td-bg-color-container-hover);
}
.item.active {
  background: var(--td-bg-color-container-active);
}
.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--td-brand-color);
}
.label {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.time {
  opacity: 0.6;
  font-size: 12px;
}
</style>
