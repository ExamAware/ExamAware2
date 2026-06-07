<template>
  <div class="plugin-view">
    <h2>放映器</h2>
    <p>选择一个 ExamAware 2 档案文件以开始放映。</p>
    <t-row :gutter="25">
      <t-col :span="4">
        <t-card class="card-button" @click="selectFile">
          <div class="card-content">
            <t-icon name="file" size="60px" class="card-button-icon"></t-icon>
            <p>本地文件</p>
          </div>
        </t-card>
      </t-col>
      <t-col :span="8">
        <t-card class="card-button" @click="openUrl">
          <div class="card-content">
            <t-icon name="link" size="60px" class="card-button-icon"></t-icon>
            <p>从 URL 放映</p>
          </div>
        </t-card>
      </t-col>
      <!-- <t-col :span="4">
        <t-card class="card-button" @click="selectFile">
          <div class="card-content">
            <t-icon name="server" size="60px" class="card-button-icon"></t-icon>
            <p>连接服务器</p>
          </div>
        </t-card>
      </t-col> -->
    </t-row>

    <!-- 上次放映的文件 -->
    <div v-if="lastFilePath" class="last-file-section">
      <t-divider />
      <p class="last-file-title">上次放映</p>
      <t-card class="card-button last-file-card" @click="playLastFile">
        <div class="card-content last-file-content">
          <t-icon name="history" size="32px" class="card-button-icon"></t-icon>
          <div class="last-file-info">
            <p class="last-file-name">{{ lastFileName }}</p>
            <p class="last-file-path">{{ lastFilePath }}</p>
          </div>
          <t-button theme="primary" size="small" @click.stop="playLastFile">
            <template #icon><t-icon name="play-circle" /></template>
            放映
          </t-button>
        </div>
      </t-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref, computed, onMounted } from 'vue'
import { createPlayerLauncher } from '@renderer/services/playerLauncher'
import { MessagePlugin } from 'tdesign-vue-next'

const LAST_FILE_KEY = 'examaware:last-played-file'

const launcher = createPlayerLauncher()
const router = useRouter()
const lastFilePath = ref('')

const lastFileName = computed(() => {
  if (!lastFilePath.value) return ''
  const parts = lastFilePath.value.split(/[\\/]/)
  return parts[parts.length - 1] || lastFilePath.value
})

const loadLastFile = () => {
  try {
    const stored = localStorage.getItem(LAST_FILE_KEY)
    if (stored) lastFilePath.value = stored
  } catch {}
}

const saveLastFile = (path: string) => {
  try {
    localStorage.setItem(LAST_FILE_KEY, path)
  } catch {}
}

const selectFile = async () => {
  const path = await launcher.selectLocalAndOpen()
  if (path) {
    saveLastFile(path)
    lastFilePath.value = path
  }
}

const playLastFile = async () => {
  if (!lastFilePath.value) {
    MessagePlugin.warning('没有上次放映的记录')
    return
  }
  try {
    await launcher.openWith({ source: 'file', pathOrUrl: lastFilePath.value })
  } catch (error) {
    const message = error instanceof Error ? error.message : '打开失败'
    MessagePlugin.error(message)
  }
}

const openUrl = async () => {
  await router.push('/playerhome/url')
}

onMounted(() => {
  loadLastFile()
})
</script>

<style scoped>
.plugin-view {
  padding: 20px;
  height: 100%;
}

h2,
p {
  user-select: none;
}

.card-button {
  cursor: pointer;
  text-align: center;
  padding: 20px;
  margin-bottom: 10px;
}

.card-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card-content t-icon {
  margin-bottom: 10px;
}

.card-content p {
  margin: 0;
}

.card-button-icon {
  padding-bottom: 15px;
}

/* 上次放映 */
.last-file-section {
  margin-top: 10px;
}

.last-file-title {
  font-size: 14px;
  color: var(--td-text-color-secondary);
  margin-bottom: 12px;
}

.last-file-card {
  text-align: left;
}

.last-file-content {
  flex-direction: row;
  gap: 12px;
  align-items: center;
  padding: 8px;
}

.last-file-content .card-button-icon {
  padding-bottom: 0;
  flex-shrink: 0;
}

.last-file-info {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.last-file-name {
  font-size: 15px;
  font-weight: 500;
  color: var(--td-text-color-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.last-file-path {
  font-size: 12px;
  color: var(--td-text-color-secondary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
