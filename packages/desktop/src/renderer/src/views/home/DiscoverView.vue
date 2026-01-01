<template>
  <div class="discover">
    <div class="header">
      <div class="title">发现</div>
      <t-space>
        <t-button size="small" variant="outline" @click="refresh" :loading="loading">刷新</t-button>
      </t-space>
    </div>

    <t-alert
      theme="info"
      message="可以快速发现局域网内已开启共享的配置。"
      style="margin-bottom: 12px"
    />

    <t-empty v-if="!peers.length && !loading" description="暂无发现共享" />
    <t-row v-else :gutter="12">
      <t-col v-for="peer in peers" :key="peer.id" :span="6">
        <t-card hoverable :title="peer.name" :subtitle="peer.host + ':' + peer.port">
          <div v-if="peer.shares?.length" class="share-tags">
            <t-tag
              v-for="share in peer.shares"
              :key="share.id"
              size="small"
              variant="light-outline"
            >
              {{ share.examName }}
            </t-tag>
          </div>
          <div v-else class="muted">未提供共享明细</div>
          <t-button
            block
            size="small"
            style="margin-top: 10px"
            :loading="openingId === peer.id"
            :disabled="!peer.shares?.length"
            @click="openPeer(peer.id)"
          >
            打开共享配置
          </t-button>
        </t-card>
      </t-col>
    </t-row>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { MessagePlugin } from 'tdesign-vue-next'

interface CastPeer {
  id: string
  name: string
  host: string
  port: number
  shares?: any[]
}

const peers = ref<CastPeer[]>([])
const loading = ref(false)
const openingId = ref<string | null>(null)

async function refresh() {
  loading.value = true
  try {
    const list = ((await window.api.cast.listPeers()) as CastPeer[]) || []
    const withShares = await Promise.all(
      list.map(async (p) => {
        const shares = await window.api.cast.peerShares(p.id)
        return { ...p, shares }
      })
    )
    peers.value = withShares
  } catch (err) {
    MessagePlugin.error('刷新失败')
  } finally {
    loading.value = false
  }
}

async function openPeer(peerId: string) {
  openingId.value = peerId
  try {
    const config = await window.api.cast.peerConfig(peerId)
    if (!config) {
      MessagePlugin.warning('对方未提供共享配置')
      return
    }
    await window.api.player.openFromEditor(config as string)
    MessagePlugin.success('已打开共享配置')
  } catch (err) {
    MessagePlugin.error('打开失败')
  } finally {
    openingId.value = null
  }
}

onMounted(() => {
  refresh()
})
</script>

<style scoped>
.discover {
  padding: 8px;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}

.title {
  font-size: 18px;
  font-weight: 600;
}

.share-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 8px;
}

.muted {
  color: var(--td-text-color-secondary);
}
</style>
