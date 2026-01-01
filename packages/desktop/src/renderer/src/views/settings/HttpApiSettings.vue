<template>
  <div class="settings-page">
    <h2>HTTP API</h2>
    <t-space direction="vertical" size="small" style="width: 100%">
      <t-card :title="'HTTP 服务'" theme="poster2">
        <div class="settings-item">
          <div class="settings-item-icon">
            <TIcon name="api" size="22px" />
          </div>
          <div class="settings-item-main">
            <div class="settings-item-title">启用 HTTP API</div>
            <div class="settings-item-desc">用于本地或远程控制的 REST 接口。</div>
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
            <TIcon name="server" size="22px" />
          </div>
          <div class="settings-item-main">
            <div class="settings-item-title">监听端口</div>
            <div class="settings-item-desc">端口占用时会自动上移尝试，保存后将自动重启。</div>
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
            <TIcon name="secured" size="22px" />
          </div>
          <div class="settings-item-main">
            <div class="settings-item-title">访问令牌</div>
            <div class="settings-item-desc">留空则不校验；推荐在远程访问时设置。</div>
          </div>
          <div class="settings-item-action" style="display: flex; align-items: center; gap: 8px">
            <t-input
              v-model="form.token"
              :disabled="!form.enabled"
              type="password"
              placeholder="可选"
              style="width: 220px"
            />
            <t-button variant="outline" size="small" @click="clearToken" :disabled="!form.enabled">
              清空
            </t-button>
          </div>
        </div>

        <t-divider />

        <div class="settings-item">
          <div class="settings-item-icon">
            <TIcon name="api" size="22px" />
          </div>
          <div class="settings-item-main">
            <div class="settings-item-title">Swagger 文档</div>
            <div class="settings-item-desc">内置 Swagger UI，可供插件/外部系统查看接口。</div>
            <div style="margin-top: 4px; display: flex; align-items: center; gap: 8px">
              <t-tag v-if="form.swagger?.enabled" theme="success" variant="light-outline">
                {{ swaggerUrl }}
              </t-tag>
              <t-tag v-else theme="default" variant="light-outline">未开启</t-tag>
              <t-button
                variant="outline"
                size="small"
                :disabled="!form.swagger?.enabled"
                @click="copySwaggerUrl"
              >
                复制地址
              </t-button>
            </div>
          </div>
          <div class="settings-item-action">
            <t-switch
              v-model="form.swagger.enabled"
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
            <TIcon name="wifi" size="22px" />
          </div>
          <div class="settings-item-main">
            <div class="settings-item-title">允许远程访问</div>
            <div class="settings-item-desc">
              默认仅允许本机访问；启用后请确保网络安全，并建议设置访问令牌。
            </div>
          </div>
          <div class="settings-item-action">
            <t-switch
              v-model="form.allowRemote"
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
            <div class="settings-item-title">状态与控制</div>
            <div class="settings-item-desc">自动保存生效，可手动重启以立即应用。</div>
            <div style="margin-top: 4px; display: flex; align-items: center; gap: 8px">
              <t-tag v-if="form.enabled" theme="success" variant="light-outline">{{
                baseUrl
              }}</t-tag>
              <t-tag v-else theme="default" variant="light-outline">服务已关闭</t-tag>
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

        <t-alert
          v-if="form.allowRemote && form.enabled"
          theme="warning"
          message="已允许远程访问，请确保网络安全并优先配置访问令牌。"
          style="margin-top: 12px"
        />
      </t-card>
    </t-space>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref, watch } from 'vue'
import { MessagePlugin } from 'tdesign-vue-next'
import { Icon as TIcon } from 'tdesign-icons-vue-next'

interface HttpApiConfig {
  enabled: boolean
  port: number
  token?: string
  allowRemote?: boolean
  tokenRequired?: boolean
  tokens?: { value: string; label?: string; expiresAt?: number; role?: 'read' | 'write' }[]
  swagger?: { enabled: boolean; title?: string; description?: string; version?: string }
}

const loading = ref(false)
const applying = ref(false)
const hydrated = ref(false)
const suppressWatch = ref(false)
let applyTimer: ReturnType<typeof setTimeout> | null = null

const form = reactive<HttpApiConfig>({
  enabled: false,
  port: 31234,
  token: '',
  allowRemote: false,
  tokenRequired: false,
  swagger: { enabled: false, title: 'ExamAware HTTP API', description: '', version: 'v1' }
})

const baseUrl = computed(() => `http://127.0.0.1:${form.port || 0}`)
const swaggerUrl = computed(() => `${baseUrl.value}/api/v1/swagger`)

async function load() {
  hydrated.value = false
  try {
    const cfg = (await window.api.http.getConfig()) as HttpApiConfig
    suppressWatch.value = true
    form.enabled = !!cfg?.enabled
    form.port = Number(cfg?.port) || 31234
    form.allowRemote = !!cfg?.allowRemote
    form.tokenRequired = !!cfg?.tokenRequired
    form.token = cfg?.token || ''
    form.tokens = cfg?.tokens
    form.swagger = {
      enabled: !!cfg?.swagger?.enabled,
      title: cfg?.swagger?.title || 'ExamAware HTTP API',
      description: cfg?.swagger?.description || '',
      version: cfg?.swagger?.version || 'v1'
    }
    hydrated.value = true
  } catch (err) {
    MessagePlugin.error('加载 HTTP API 配置失败')
  } finally {
    suppressWatch.value = false
    loading.value = false
  }
}

async function applyConfig() {
  if (!hydrated.value) return
  applying.value = true
  try {
    const cfg = (await window.api.http.setConfig({
      enabled: form.enabled,
      port: form.port,
      token: form.token?.trim() || undefined,
      tokenRequired: !!form.tokenRequired,
      allowRemote: form.allowRemote,
      swagger: {
        enabled: !!form.swagger?.enabled,
        title: form.swagger?.title?.trim() || 'ExamAware HTTP API',
        description: form.swagger?.description?.trim() || '',
        version: form.swagger?.version?.trim() || 'v1'
      }
    })) as HttpApiConfig
    suppressWatch.value = true
    form.enabled = !!cfg?.enabled
    form.port = Number(cfg?.port) || form.port
    form.allowRemote = !!cfg?.allowRemote
    form.tokenRequired = !!cfg?.tokenRequired
    form.token = cfg?.token || ''
    form.tokens = cfg?.tokens
    form.swagger = {
      enabled: !!cfg?.swagger?.enabled,
      title: cfg?.swagger?.title || 'ExamAware HTTP API',
      description: cfg?.swagger?.description || '',
      version: cfg?.swagger?.version || 'v1'
    }
  } catch (err) {
    MessagePlugin.error('保存 HTTP API 配置失败')
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

function clearToken() {
  form.token = ''
}

async function copyBaseUrl() {
  if (!form.enabled) return
  try {
    await navigator.clipboard.writeText(baseUrl.value)
    MessagePlugin.success('已复制地址')
  } catch (err) {
    MessagePlugin.error('复制失败')
  }
}

async function copySwaggerUrl() {
  if (!form.enabled || !form.swagger?.enabled) return
  try {
    await navigator.clipboard.writeText(swaggerUrl.value)
    MessagePlugin.success('已复制 Swagger 地址')
  } catch (err) {
    MessagePlugin.error('复制失败')
  }
}

async function restart() {
  if (!form.enabled) return
  applying.value = true
  try {
    await window.api.http.restart()
    MessagePlugin.success('HTTP API 已重启')
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

<style scoped></style>
