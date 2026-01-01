<template>
  <div class="nearby-share">
    <div class="header">
      <div>
        <div class="title">就近共享</div>
        <div class="desc">开启后，本机配置会出现在“发现”里，其他设备可一键使用。</div>
      </div>
      <t-switch
        :value="shareSwitch"
        :loading="togglingShare"
        :label="[
          { value: true, label: '开' },
          { value: false, label: '关' }
        ]"
        @change="toggleShare"
      />
    </div>

    <div class="status">
      <t-tag :theme="castConfig.enabled ? 'success' : 'default'" variant="light-outline">
        服务：{{ castConfig.enabled ? '运行中' : '未启动' }}
      </t-tag>
      <t-tag :theme="shareSwitch ? 'success' : 'default'" variant="light-outline">
        共享：{{ shareSwitch ? '已开启' : '已关闭' }}
      </t-tag>
      <t-tag :theme="localShares.length ? 'success' : 'warning'" variant="light-outline">
        配置：{{ localShares.length ? '已准备' : '同步中' }}
      </t-tag>
    </div>

    <div v-if="shareSwitch && localShares.length" class="share-list">
      <div v-for="s in localShares" :key="s.id" class="share-item">
        <div class="share-title">{{ s.examName }}</div>
        <div class="share-desc">
          {{ s.examCount }} 个考试条目 · 更新 {{ formatTime(s.updatedAt) }}
        </div>
      </div>
    </div>
    <t-alert
      v-else-if="shareSwitch"
      theme="info"
      size="small"
      message="已开启共享，正在同步编辑器内容… 请等待几秒或点击刷新。"
      style="margin-top: 6px"
    />
    <t-alert
      v-else
      theme="info"
      size="small"
      message="关闭后，本机不会出现在“发现”的共享列表中。"
      style="margin-top: 6px"
    />

    <div class="actions">
      <t-space size="small">
        <t-button size="small" variant="outline" @click="refresh" :loading="loading">
          刷新状态
        </t-button>
        <t-button size="small" @click="openCastWindow">打开投送窗口</t-button>
      </t-space>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue'
import { MessagePlugin } from 'tdesign-vue-next'

interface CastConfig {
  enabled: boolean
  name: string
  port: number
  shareEnabled: boolean
}

const castConfig = reactive<CastConfig>({
  enabled: false,
  name: 'ExamAware',
  port: 31235,
  shareEnabled: false
})
const localShares = ref<any[]>([])
const loading = ref(false)
const togglingShare = ref(false)

const shareSwitch = computed(() => castConfig.enabled && castConfig.shareEnabled)

function applyConfig(cfg: CastConfig | null | undefined) {
  if (!cfg) return
  castConfig.enabled = !!cfg.enabled
  castConfig.name = cfg.name || castConfig.name
  castConfig.port = Number(cfg.port) || castConfig.port
  castConfig.shareEnabled = !!cfg.shareEnabled
}

async function loadConfig() {
  const cfg = (await window.api.cast.getConfig()) as CastConfig
  applyConfig(cfg)
}

async function loadLocalShares() {
  localShares.value = (await window.api.cast.localShares()) || []
}

async function refresh() {
  loading.value = true
  try {
    await loadConfig()
    await loadLocalShares()
  } catch (err) {
    MessagePlugin.error('刷新失败')
  } finally {
    loading.value = false
  }
}

async function toggleShare(enable: boolean) {
  togglingShare.value = true
  try {
    const cfg = (await window.api.cast.setConfig({
      enabled: enable ? true : castConfig.enabled,
      shareEnabled: enable
    })) as CastConfig
    applyConfig(cfg)
    await loadLocalShares()
    if (enable) {
      window.api.ipc.send('cast:sync-now')
      setTimeout(() => {
        void loadLocalShares()
      }, 800)
    }
    MessagePlugin.success(enable ? '共享已开启' : '共享已关闭')
  } catch (err) {
    MessagePlugin.error('切换共享失败')
    await loadConfig()
    await loadLocalShares()
  } finally {
    togglingShare.value = false
  }
}

function openCastWindow() {
  window.api.ipc.send('open-cast-window')
}

function formatTime(ts: number) {
  if (!ts) return ''
  const d = new Date(ts)
  return `${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`
}

onMounted(() => {
  refresh()
})
</script>

<style scoped>
.nearby-share {
  padding: 10px 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
}

.title {
  font-size: 16px;
  font-weight: 600;
}

.desc {
  margin-top: 4px;
  color: var(--td-text-color-secondary);
  font-size: 12px;
}

.status {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.share-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.share-item {
  border: 1px solid var(--td-border-level-1-color);
  border-radius: 6px;
  padding: 6px 8px;
}

.share-title {
  font-weight: 600;
}

.share-desc {
  color: var(--td-text-color-secondary);
  font-size: 12px;
  margin-top: 2px;
}

.actions {
  margin-top: 4px;
}
</style>
