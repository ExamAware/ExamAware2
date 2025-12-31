<template>
  <div class="settings-page">
    <h2>日志</h2>
    <t-space direction="vertical" size="small" style="width: 100%">
      <t-card :title="'全局日志设置'" theme="poster2">
        <div class="settings-item">
          <div class="settings-item-icon">
            <t-icon name="notification" size="22px" />
          </div>
          <div class="settings-item-main">
            <div class="settings-item-title">最低日志等级</div>
            <div class="settings-item-desc">控制全局输出的最低等级。</div>
          </div>
          <div class="settings-item-action">
            <t-select v-model="form.level" :options="levelOptions" style="width: 220px" />
          </div>
        </div>

        <t-divider />

        <div class="settings-item">
          <div class="settings-item-icon">
            <t-icon name="system-code" size="22px" />
          </div>
          <div class="settings-item-main">
            <div class="settings-item-title">控制台输出等级</div>
            <div class="settings-item-desc">开发时查看的实时输出等级。</div>
          </div>
          <div class="settings-item-action">
            <t-select v-model="form.consoleLevel" :options="levelOptions" style="width: 220px" />
          </div>
        </div>

        <t-divider />

        <div class="settings-item">
          <div class="settings-item-icon">
            <t-icon name="file-copy" size="22px" />
          </div>
          <div class="settings-item-main">
            <div class="settings-item-title">文件输出等级</div>
            <div class="settings-item-desc">写入日志文件的最低等级。</div>
          </div>
          <div class="settings-item-action">
            <t-select v-model="form.fileLevel" :options="levelOptions" style="width: 220px" />
          </div>
        </div>

        <t-divider />

        <div class="settings-item">
          <div class="settings-item-icon">
            <t-icon name="chart-bar" size="22px" />
          </div>
          <div class="settings-item-main">
            <div class="settings-item-title">文件大小上限 (MB)</div>
            <div class="settings-item-desc">单个日志文件的最大大小。</div>
          </div>
          <div class="settings-item-action">
            <t-input-number v-model="form.maxSizeMB" :min="1" :step="1" style="width: 180px" />
          </div>
        </div>

        <t-divider />

        <div class="settings-item">
          <div class="settings-item-icon">
            <t-icon name="layers" size="22px" />
          </div>
          <div class="settings-item-main">
            <div class="settings-item-title">保留文件个数 (近似天数)</div>
            <div class="settings-item-desc">决定滚动保留的文件数量。</div>
          </div>
          <div class="settings-item-action" style="display: flex; align-items: center; gap: 8px">
            <t-input-number
              v-model="form.maxFiles"
              :min="1"
              :max="30"
              :step="1"
              style="width: 180px"
            />
          </div>
        </div>

        <t-divider />

        <div class="settings-item">
          <div class="settings-item-icon">
            <t-icon name="tools" size="22px" />
          </div>
          <div class="settings-item-main">
            <div class="settings-item-title">操作</div>
            <div class="settings-item-desc">一些常用的操作。</div>
          </div>
          <div class="settings-item-action">
            <t-space>
              <t-button variant="outline" @click="openDir">打开日志目录</t-button>
              <t-button variant="outline" theme="danger" @click="clearFiles">清理日志文件</t-button>
            </t-space>
          </div>
        </div>
      </t-card>
    </t-space>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref, watch } from 'vue'
import { MessagePlugin } from 'tdesign-vue-next'
import { Icon as TIcon } from 'tdesign-icons-vue-next'

interface LoggingConfig {
  level: string
  consoleLevel?: string
  fileLevel?: string
  enableConsole?: boolean
  enableFile?: boolean
  maxSizeMB?: number
  maxFiles?: number
  retentionDays?: number
}

const loading = ref(false)
const applying = ref(false)
const hydrated = ref(false)
let applyTimer: ReturnType<typeof setTimeout> | null = null
const form = reactive<LoggingConfig>({
  level: 'info',
  consoleLevel: 'info',
  fileLevel: 'info',
  enableConsole: true,
  enableFile: true,
  maxSizeMB: 5,
  maxFiles: 3,
  retentionDays: 7
})

const levelOptions = [
  { label: 'Error', value: 'error' },
  { label: 'Warn', value: 'warn' },
  { label: 'Info', value: 'info' },
  { label: 'Debug', value: 'debug' }
]

async function load() {
  loading.value = true
  try {
    const cfg = (await window.api.logging.getConfig()) as Partial<LoggingConfig>
    Object.assign(form, cfg)
    hydrated.value = true
  } catch (err) {
    MessagePlugin.error('加载日志配置失败')
  } finally {
    loading.value = false
  }
}

async function applyConfig() {
  if (!hydrated.value) return
  applying.value = true
  try {
    await window.api.logging.setConfig({ ...form })
  } catch (err) {
    MessagePlugin.error('应用日志配置失败')
  } finally {
    applying.value = false
  }
}

watch(
  () => ({ ...form }),
  () => {
    if (!hydrated.value) return
    if (applyTimer) {
      clearTimeout(applyTimer)
    }
    applyTimer = setTimeout(() => {
      applyConfig()
    }, 400)
  },
  { deep: true }
)

async function openDir() {
  try {
    await window.api.logging.openDir()
  } catch (err) {
    MessagePlugin.error('打开日志目录失败')
  }
}

async function clearFiles() {
  try {
    await window.api.logging.clearFiles()
    MessagePlugin.success('日志文件已清理')
  } catch (err) {
    MessagePlugin.error('清理日志文件失败')
  }
}

onMounted(() => {
  load()
})
</script>
