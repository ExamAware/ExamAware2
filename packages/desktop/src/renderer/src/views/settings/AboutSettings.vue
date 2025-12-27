<template>
  <div class="settings-page about-settings">
    <div class="logo-wrap">
      <img :src="logo" alt="logo" class="logo" />
    </div>
    <h2 class="app-name">ExamAware</h2>
    <p class="version">版本：{{ version }}</p>
    <p class="codename">Codename：Lighthouse / 灯塔</p>
    <div class="actions">
      <t-button size="small" theme="primary" variant="base" @click="openGithub">
        <t-icon name="logo-github" />
        <span>GitHub</span>
      </t-button>
      <t-button size="small" variant="outline" @click="showLicense = true">开源协议</t-button>
    </div>

    <t-dialog
      v-model:visible="showLicense"
      header="GPLv3 许可"
      :footer="false"
      width="720px"
      placement="center"
    >
      <div class="license-box" v-if="licenseText">
        <pre>{{ licenseText }}</pre>
      </div>
      <div v-else class="license-loading">加载中...</div>
    </t-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import logoUrl from '@renderer/assets/logo.svg'
const DESKTOP_VERSION = ((import.meta as any).env?.VITE_APP_VERSION as string) || ''
import gplText from '@renderer/assets/licenses/gpl-3.0.txt?raw'

const logo = logoUrl
const version = ref(DESKTOP_VERSION)
const codename = 'Lighthouse / 灯塔'
const showLicense = ref(false)
const licenseText = ref(gplText)

function openGithub() {
  window.open('https://github.com/ExamAware/ExamAware2', '_blank')
}

async function ensureVersion() {
  if (version.value) return
  try {
    const remoteVersion = await window.api?.app?.getVersion?.()
    if (remoteVersion) {
      version.value = remoteVersion
      return
    }
  } catch {}
  const match = navigator.userAgent.match(/ExamAware\/([\w.]+)/)
  version.value = match?.[1] || 'dev'
}

onMounted(() => {
  ensureVersion()
})

// 许可证文本已随应用打包（本地文件），无需网络
</script>

<style scoped>
.about-settings {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 24px 0;
  text-align: center;
}
.logo-wrap {
  width: 72px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo {
  width: 64px;
  height: 64px;
}
.app-name {
  margin: 0;
  font-size: 24px;
  font-weight: 600;
}
.version {
  margin: 0;
  font-size: 14px;
  color: var(--td-text-color-secondary);
}
.codename {
  margin: 0;
  font-size: 14px;
  color: var(--td-text-color-secondary);
}
.actions {
  display: flex;
  gap: 12px;
  margin-top: 4px;
}
.license-box {
  max-height: 400px;
  overflow: auto;
  background: var(--td-bg-color-page);
  padding: 16px;
  border-radius: 8px;
  font-size: 12px;
  line-height: 1.4;
}
.license-loading {
  padding: 24px;
  text-align: center;
  color: var(--td-text-color-secondary);
}
</style>
