<template>
  <div class="tray-popover">
    <div class="tray-header">
      <img v-if="logo" :src="logo" class="logo" alt="logo" />
      <div class="title">ExamAware</div>
    </div>

    <t-divider />

    <div class="tray-list" role="menu">
      <div class="menu-item" role="menuitem" tabindex="0" @click="openMain" @keydown.enter.prevent="openMain">
        <t-icon name="home" />
        <span>打开主界面</span>
      </div>
      <div class="menu-item" role="menuitem" tabindex="0" @click="openSettings" @keydown.enter.prevent="openSettings">
        <t-icon name="setting" />
        <span>设置</span>
      </div>
      <div class="menu-item" role="menuitem" tabindex="0" @click="openLogs" @keydown.enter.prevent="openLogs">
        <t-icon name="file-code" />
        <span>日志</span>
      </div>
    </div>

    <t-divider />

    <div class="tray-footer">
      <t-button theme="danger" variant="outline" size="small" @click="quit">退出</t-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import logoUrl from '@renderer/assets/logo.svg'

const logo = logoUrl

function openMain() {
  window.api.ipc.send('ui:open-main')
}
function openSettings() {
  window.api.ipc.send('open-settings-window')
}
function openLogs() {
  window.api.ipc.send('open-logs-window')
}
function quit() {
  window.api.ipc.send('ui:app-quit')
}
</script>

<style scoped>
.tray-popover {
  padding: 8px;
  background: color-mix(in srgb, var(--td-bg-color-page) 20%, transparent);
  color: var(--td-text-color-primary);
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25), 0 2px 12px rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  -webkit-app-region: no-drag;
  font-size: 13px;
  line-height: 1.4;
  -webkit-font-smoothing: antialiased;
}
.tray-header {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 2px 2px 4px 2px;
}
.logo {
  width: 18px;
  height: 18px;
}
.title {
  font-weight: 600;
}
.tray-list {
  display: grid;
  gap: 2px;
  padding: 2px 0;
}
.menu-item {
  display: flex;
  align-items: center;
  gap: 8px;
  height: 30px;
  padding: 6px 8px;
  border-radius: 8px;
  color: var(--td-text-color-primary);
  cursor: default;
}
.menu-item:hover,
.menu-item:focus-visible {
  background: var(--td-bg-color-component-hover);
}
.menu-item:active {
  background: var(--td-bg-color-component-active, var(--td-bg-color-component-hover));
}
.menu-item :deep(.t-icon) { font-size: 16px; color: var(--td-text-color-secondary); }
.menu-item span { flex: 1; }
.tray-footer {
  display: flex;
  justify-content: flex-end;
  padding: 4px 2px 0 2px;
}
.tray-popover :deep(.t-divider) { margin: 6px 0; }
</style>
