<template>
  <div class="settings-page">
    <h2>共享与投送</h2>
    <t-space direction="vertical" size="small" style="width: 100%">
      <t-card :title="'共享与投送'" theme="poster2" :loading="loading || applying">
        <div class="settings-item">
          <div class="settings-item-icon">
            <TIcon name="share" size="22px" />
          </div>
          <div class="settings-item-main">
            <div class="settings-item-title">启用共享与投送</div>
            <div class="settings-item-desc">在局域网广播服务，支持发现与接收投送。</div>
          </div>
          <div class="settings-item-action">
            <t-switch
              v-model="form.enabled"
              :label="[
                { value: true, label: '开' },
                { value: false, label: '关' }
              ]"
            />
          </div>
        </div>

        <t-divider />

        <div class="settings-item">
          <div class="settings-item-icon">
            <TIcon name="cast" size="22px" />
          </div>
          <div class="settings-item-main">
            <div class="settings-item-title">设备名称</div>
            <div class="settings-item-desc">用于 Bonjour 广播显示。</div>
          </div>
          <div class="settings-item-action" style="display: flex; align-items: center; gap: 8px">
            <t-input v-model="form.name" :disabled="!form.enabled" placeholder="如：考场主机" />
          </div>
        </div>

        <t-divider />

        <div class="settings-item">
          <div class="settings-item-icon">
            <TIcon name="server" size="22px" />
          </div>
          <div class="settings-item-main">
            <div class="settings-item-title">监听端口</div>
            <div class="settings-item-desc">占用时会自动上移尝试。</div>
          </div>
          <div class="settings-item-action" style="display: flex; align-items: center; gap: 8px">
            <t-input-number
              v-model="form.port"
              :min="1"
              :max="65535"
              :disabled="!form.enabled"
              :step="1"
              style="width: 160px"
            />
          </div>
        </div>

        <t-divider />

        <div class="settings-item">
          <div class="settings-item-icon">
            <TIcon name="folder" size="22px" />
          </div>
          <div class="settings-item-main">
            <div class="settings-item-title">在局域网共享配置</div>
            <div class="settings-item-desc">
              开启后其他客户端可在“发现”页看到本机共享的考试配置。
            </div>
          </div>
          <div class="settings-item-action">
            <t-switch
              v-model="form.shareEnabled"
              :disabled="!form.enabled"
              :label="[
                { value: true, label: '开' },
                { value: false, label: '关' }
              ]"
            />
          </div>
        </div>

        <t-divider />

        <div class="settings-item">
          <div class="settings-item-icon">
            <TIcon name="chart-line" size="22px" />
          </div>
          <div class="settings-item-main">
            <div class="settings-item-title">服务状态</div>
            <div class="settings-item-desc">用于投送与共享的内置服务。</div>
            <div style="margin-top: 4px; display: flex; align-items: center; gap: 8px">
              <t-tag v-if="form.enabled" theme="success" variant="light-outline">{{
                baseUrl
              }}</t-tag>
              <t-tag v-else theme="default" variant="light-outline">未启用</t-tag>
              <t-button
                variant="outline"
                size="small"
                :disabled="!form.enabled"
                @click="copyBaseUrl"
              >
                复制地址
              </t-button>
            </div>
          </div>
          <div class="settings-item-action">
            <t-space>
              <t-button variant="outline" :disabled="!form.enabled" @click="restart">
                重启服务
              </t-button>
            </t-space>
          </div>
        </div>
      </t-card>
    </t-space>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref, watch } from 'vue'
import { MessagePlugin } from 'tdesign-vue-next'
import { Icon as TIcon } from 'tdesign-icons-vue-next'

interface CastConfig {
  enabled: boolean
  name: string
  port: number
  shareEnabled: boolean
}

const loading = ref(false)
const applying = ref(false)
const hydrated = ref(false)
const suppressWatch = ref(false)
let applyTimer: ReturnType<typeof setTimeout> | null = null

const form = reactive<CastConfig>({
  enabled: false,
  name: 'ExamAware',
  port: 31235,
  shareEnabled: false
})

const baseUrl = computed(() => `http://127.0.0.1:${form.port || 0}`)

async function load() {
  hydrated.value = false
  loading.value = true
  try {
    const cfg = (await window.api.cast.getConfig()) as CastConfig
    suppressWatch.value = true
    form.enabled = !!cfg?.enabled
    form.name = cfg?.name || 'ExamAware'
    form.port = Number(cfg?.port) || 31235
    form.shareEnabled = !!cfg?.shareEnabled
    hydrated.value = true
  } catch (err) {
    MessagePlugin.error('加载共享与投送配置失败')
  } finally {
    suppressWatch.value = false
    loading.value = false
  }
}

async function applyConfig() {
  if (!hydrated.value) return
  applying.value = true
  try {
    const cfg = (await window.api.cast.setConfig({
      enabled: form.enabled,
      name: form.name?.trim() || 'ExamAware',
      port: form.port,
      shareEnabled: form.shareEnabled
    })) as CastConfig
    suppressWatch.value = true
    form.enabled = !!cfg?.enabled
    form.name = cfg?.name || form.name
    form.port = Number(cfg?.port) || form.port
    form.shareEnabled = !!cfg?.shareEnabled
  } catch (err) {
    MessagePlugin.error('保存共享与投送配置失败')
  } finally {
    suppressWatch.value = false
    applying.value = false
    loading.value = false
  }
}

watch(
  () => ({ ...form }),
  () => {
    if (!hydrated.value || suppressWatch.value) return
    if (applyTimer) clearTimeout(applyTimer)
    applyTimer = setTimeout(() => {
      applyConfig()
    }, 400)
  },
  { deep: true }
)

async function copyBaseUrl() {
  if (!form.enabled) return
  try {
    await navigator.clipboard.writeText(baseUrl.value)
    MessagePlugin.success('已复制地址')
  } catch (err) {
    MessagePlugin.error('复制失败')
  }
}

async function restart() {
  if (!form.enabled) return
  applying.value = true
  try {
    await window.api.cast.restart()
    MessagePlugin.success('共享与投送已重启')
    await load()
  } catch (err) {
    MessagePlugin.error('重启失败')
  } finally {
    applying.value = false
  }
}

onMounted(() => {
  load()
})
</script>
