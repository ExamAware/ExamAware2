<template>
  <div class="cast-window">
    <section class="section">
      <h3>可发现设备</h3>
      <t-card :bordered="true" hoverable>
        <t-empty v-if="!peers.length && !loading" description="暂无发现设备" />
        <t-list v-else :split="true">
          <t-list-item v-for="peer in peers" :key="peer.id">
            <div class="peer-header">
              <div class="peer-title">
                {{ peer.name }} <span class="peer-host">{{ peer.host }}:{{ peer.port }}</span>
              </div>
              <t-space align="center">
                <t-button
                  size="small"
                  :disabled="!sharedConfig || sendingId === peer.id"
                  :loading="sendingId === peer.id"
                  @click="sendToPeer(peer.id)"
                >
                  发送当前配置
                </t-button>
              </t-space>
            </div>
            <div class="peer-shares">
              <template v-if="peer.shares?.length">
                <div v-for="share in peer.shares" :key="share.id" class="share-card">
                  <div class="share-card-title">{{ share.examName }}</div>
                  <div class="share-card-desc">
                    {{ share.examCount || 0 }} 个考试条目 · 来自 {{ peer.name }}
                  </div>
                  <div class="share-card-actions">
                    <t-button size="small" variant="outline" @click="openShare(peer.id, share.id)">
                      编辑
                    </t-button>
                    <t-button size="small" theme="primary" @click="playShare(peer.id, share.id)">
                      放映
                    </t-button>
                    <t-button
                      size="small"
                      :variant="isFollowing(peer.id, share.id) ? 'outline' : 'dashed'"
                      @click="followShare(peer.id, share.id)"
                    >
                      {{ isFollowing(peer.id, share.id) ? '停止跟随' : '跟随放映' }}
                    </t-button>
                  </div>
                </div>
              </template>
              <span v-else class="muted">无共享信息</span>
            </div>
          </t-list-item>
        </t-list>
      </t-card>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, reactive, ref } from 'vue'
import { MessagePlugin } from 'tdesign-vue-next'

interface CastPeer {
  id: string
  name: string
  host: string
  port: number
  shares?: any[]
}

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
const peers = ref<CastPeer[]>([])
const sharedConfig = ref<string | null>(null)
const loading = ref(false)
const sendingId = ref<string | null>(null)
const followTimers = new Map<string, ReturnType<typeof setInterval> | null>()
const followHashes = new Map<string, number>()

async function loadConfig() {
  const cfg = (await window.api.cast.getConfig()) as CastConfig
  castConfig.enabled = !!cfg?.enabled
  castConfig.name = cfg?.name || castConfig.name
  castConfig.port = Number(cfg?.port) || castConfig.port
  castConfig.shareEnabled = !!cfg?.shareEnabled
}

async function loadLocalShares() {
  sharedConfig.value = (await window.api.cast.sharedConfig()) || null
}

async function loadPeers() {
  const list = ((await window.api.cast.listPeers()) as CastPeer[]) || []
  const withShares = await Promise.all(
    list.map(async (p) => {
      const shares = await window.api.cast.peerShares(p.id)
      return { ...p, shares }
    })
  )
  peers.value = withShares
}

async function refresh() {
  loading.value = true
  try {
    await loadConfig()
    await loadLocalShares()
    await loadPeers()
  } catch (err) {
    MessagePlugin.error('刷新失败')
  } finally {
    loading.value = false
  }
}

async function sendToPeer(peerId: string) {
  if (!sharedConfig.value) {
    MessagePlugin.warning('暂无可投送的配置，请先共享或打开考试配置')
    return
  }
  sendingId.value = peerId
  try {
    await window.api.cast.send(peerId, sharedConfig.value)
    MessagePlugin.success('已发送')
  } catch (err) {
    MessagePlugin.error('发送失败')
  } finally {
    sendingId.value = null
  }
}

async function openShare(peerId: string, shareId: string) {
  try {
    const cfg = await window.api.cast.peerConfig(peerId, shareId)
    if (!cfg) {
      MessagePlugin.warning('无法获取共享配置')
      return
    }
    const openFromEditor =
      window.api.player?.openFromEditor ??
      ((data: string) => window.api.ipc.invoke('player:open-from-editor', data))
    if (openFromEditor) {
      await openFromEditor(cfg)
      MessagePlugin.success('已打开配置')
    } else {
      MessagePlugin.warning('当前环境不支持直接打开配置')
    }
  } catch (err) {
    MessagePlugin.error('打开失败')
  }
}

async function playShare(peerId: string, shareId: string) {
  try {
    const cfg = await window.api.cast.peerConfig(peerId, shareId)
    if (!cfg) {
      MessagePlugin.warning('无法获取共享配置')
      return
    }
    const openFromEditor =
      window.api.player?.openFromEditor ??
      ((data: string) => window.api.ipc.invoke('player:open-from-editor', data))
    if (openFromEditor) {
      await openFromEditor(cfg)
      MessagePlugin.success('已启动放映')
    } else {
      MessagePlugin.warning('当前环境不支持放映')
    }
  } catch (err) {
    MessagePlugin.error('放映失败')
  }
}

function hashConfig(str: string) {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i)
    hash |= 0
  }
  return hash
}

function followKey(peerId: string, shareId: string) {
  return `${peerId}::${shareId}`
}

function isFollowing(peerId: string, shareId: string) {
  return followTimers.has(followKey(peerId, shareId))
}

function stopFollow(key: string) {
  if (!followTimers.has(key)) return
  const t = followTimers.get(key)
  if (t) clearInterval(t)
  followTimers.delete(key)
  followHashes.delete(key)
}

async function followShare(peerId: string, shareId: string) {
  const key = followKey(peerId, shareId)
  if (followTimers.has(key)) {
    stopFollow(key)
    MessagePlugin.info('已停止跟随')
    return
  }
  try {
    const cfg = await window.api.cast.peerConfig(peerId, shareId)
    if (!cfg) {
      MessagePlugin.warning('无法获取共享配置')
      return
    }
    const openFromEditor =
      window.api.player?.openFromEditor ??
      ((data: string) => window.api.ipc.invoke('player:open-from-editor', data))
    if (!openFromEditor) {
      MessagePlugin.warning('当前环境不支持放映')
      return
    }
    await openFromEditor(cfg)
    followHashes.set(key, hashConfig(cfg))
    const timer = setInterval(async () => {
      try {
        const next = await window.api.cast.peerConfig(peerId, shareId)
        if (!next) return
        const h = hashConfig(next)
        if (h !== followHashes.get(key)) {
          await openFromEditor(next)
          followHashes.set(key, h)
        }
      } catch (err) {
        // swallow
      }
    }, 3000)
    followTimers.set(key, timer)
    MessagePlugin.success('已开始跟随放映')
  } catch (err) {
    MessagePlugin.error('跟随放映失败')
  }
}

onMounted(() => {
  refresh()
})

onBeforeUnmount(() => {
  followTimers.forEach((t) => {
    if (t) clearInterval(t)
  })
  followTimers.clear()
  followHashes.clear()
})
</script>

<style scoped>
.cast-window {
  padding: 12px 16px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.section {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.cast-window h3 {
  margin: 0 0 10px 0;
  font-size: 20px;
  line-height: 1.4;
  font-weight: 600;
  color: var(--td-text-color-primary);
}

.cast-window :deep(.t-card__header) {
  padding: 8px 12px;
  min-height: 34px;
}

.cast-window :deep(.t-card__body) {
  padding: 8px 12px;
}

.cast-window :deep(.t-list-item) {
  padding: 10px 4px;
}

.toolbar {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.peer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.peer-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 8px;
}

.peer-title {
  font-weight: 600;
}

.peer-host {
  margin-left: 6px;
  color: var(--td-text-color-secondary);
  font-size: 12px;
}

.peer-shares {
  margin-top: 4px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  align-items: stretch;
}

.share-card {
  border: 1px solid var(--td-border-level-1-color);
  border-radius: 6px;
  padding: 8px 10px;
  min-width: 220px;
  max-width: 260px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.share-card-title {
  font-weight: 600;
}

.share-card-desc {
  color: var(--td-text-color-secondary);
  font-size: 12px;
}

.share-card-actions {
  display: flex;
  gap: 8px;
}

.muted {
  color: var(--td-text-color-secondary);
}
</style>
