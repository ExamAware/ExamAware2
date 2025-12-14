<template>
  <div class="settings-page plugin-settings">
    <h2>插件</h2>
    <p class="page-desc">管理已安装插件，查看依赖与日志，并调整插件配置。</p>

    <t-row :gutter="16" class="plugin-layout">
      <t-col :xs="12" :md="6">
        <t-card title="插件列表" :loading="manager.loading.value">
          <div v-if="!plugins.length && !manager.loading.value" class="empty">暂无插件</div>
          <div v-else class="plugin-list">
            <div
              v-for="plugin in plugins"
              :key="plugin.name"
              class="plugin-item"
              :class="{ active: plugin.name === selectedName }"
              @click="select(plugin.name)"
            >
              <div class="plugin-item-main">
                <div class="plugin-name">{{ plugin.displayName || plugin.name }}</div>
                <div class="plugin-desc">{{ plugin.description || '未提供描述' }}</div>
                <div class="plugin-meta">
                  <t-tag size="small" variant="light">v{{ plugin.version }}</t-tag>
                  <t-tag v-if="plugin.status === 'active'" theme="success" variant="light"
                    >已激活</t-tag
                  >
                  <t-tag v-else-if="plugin.status === 'loading'" theme="warning" variant="light"
                    >加载中</t-tag
                  >
                  <t-tag v-else-if="plugin.status === 'error'" theme="danger" variant="light"
                    >异常</t-tag
                  >
                  <t-tag v-else-if="plugin.status === 'disabled'" variant="light">已禁用</t-tag>
                </div>
              </div>
              <t-switch
                :value="plugin.enabled"
                size="small"
                @click.stop
                @change="(val) => handleToggle(plugin, val)"
              />
            </div>
          </div>
        </t-card>
      </t-col>

      <t-col :xs="12" :md="6">
        <t-card v-if="current" title="插件详情" class="plugin-detail">
          <div class="detail-section">
            <div class="label">名称</div>
            <div>{{ current.displayName || current.name }}</div>
          </div>
          <div class="detail-section">
            <div class="label">描述</div>
            <div>{{ current.description || '暂无描述' }}</div>
          </div>
          <div class="detail-section">
            <div class="label">状态</div>
            <div>
              <t-tag v-if="current.status === 'active'" theme="success" variant="light"
                >运行中</t-tag
              >
              <t-tag v-else-if="current.status === 'loading'" theme="warning" variant="light"
                >加载中</t-tag
              >
              <t-tag v-else-if="current.status === 'disabled'" variant="light">已禁用</t-tag>
              <t-tag v-else-if="current.status === 'error'" theme="danger" variant="light">
                {{ current.error?.message || '异常' }}
              </t-tag>
              <t-tag v-else variant="outline">{{ current.status }}</t-tag>
            </div>
          </div>
          <div class="detail-section">
            <div class="label">依赖服务</div>
            <div class="chip-group">
              <t-tag v-for="svc in current.injects" :key="svc" size="small" variant="outline">
                {{ svc }}
              </t-tag>
              <span v-if="!current.injects.length" class="muted">无</span>
            </div>
          </div>
          <div class="detail-section">
            <div class="label">提供服务</div>
            <div class="chip-group">
              <t-tag
                v-for="svc in providedServices"
                :key="svc.name"
                size="small"
                variant="light-outline"
                class="service-chip"
              >
                <span>{{ svc.name }}</span>
                <span class="svc-meta">/{{ svc.scope ?? 'main' }}</span>
                <span v-if="svc.isDefault" class="svc-meta svc-default">默认</span>
              </t-tag>
              <span v-if="!providedServices.length" class="muted">无</span>
            </div>
          </div>
          <div class="detail-actions">
            <t-button
              size="small"
              variant="outline"
              @click="() => current && handleReload(current)"
              :disabled="manager.loading.value"
              >重载插件</t-button
            >
            <t-button
              size="small"
              variant="outline"
              theme="primary"
              @click="() => manager.refresh()"
              :loading="manager.loading.value"
              >刷新状态</t-button
            >
          </div>
        </t-card>
        <t-card v-else title="插件详情">
          <div class="empty">请选择一个插件查看详情</div>
        </t-card>
      </t-col>
    </t-row>

    <t-card v-if="current" title="配置 (JSON)">
      <t-textarea
        v-model="configText"
        :autosize="{ minRows: 6, maxRows: 12 }"
        placeholder="请输入 JSON 配置"
      />
      <div class="config-actions">
        <t-space>
          <t-button
            size="small"
            variant="outline"
            @click="() => current && loadConfig(current.name)"
          >
            重置
          </t-button>
          <t-button size="small" theme="primary" :loading="saving" @click="saveConfig">
            保存配置
          </t-button>
        </t-space>
        <span v-if="configError" class="error">{{ configError }}</span>
      </div>
    </t-card>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { useDesktopApi } from '@renderer/runtime/desktopApi'
import type { PluginListItem } from '../../../../main/plugin/types'

const desktopApi = useDesktopApi()
const manager = desktopApi.plugins
const plugins = manager.installed
const selectedName = ref<string | null>(null)
const configText = ref('')
const configError = ref<string | null>(null)
const saving = ref(false)

const current = computed<PluginListItem | undefined>(() => {
  if (!plugins.value.length) return undefined
  const target = plugins.value.find((p) => p.name === selectedName.value)
  return target ?? plugins.value[0]
})

const providedServices = computed(() => {
  if (!current.value) return []
  return manager.serviceProviders.value.filter((svc) => svc.owner === current.value?.name)
})

watch(
  plugins,
  (list) => {
    if (!list.length) {
      selectedName.value = null
      return
    }
    if (!selectedName.value || !list.find((p) => p.name === selectedName.value)) {
      selectedName.value = list[0].name
    }
  },
  { immediate: true }
)

watch(
  current,
  (plugin) => {
    if (plugin) {
      loadConfig(plugin.name)
    } else {
      configText.value = ''
    }
  },
  { immediate: true }
)

async function loadConfig(name: string) {
  try {
    const cfg = await manager.getConfig(name)
    configText.value = cfg ? JSON.stringify(cfg, null, 2) : '{\n  \n}'
    configError.value = null
  } catch (error) {
    configError.value = (error as Error).message
  }
}

async function select(name: string) {
  selectedName.value = name
}

async function handleToggle(plugin: PluginListItem, enabled: boolean) {
  try {
    await manager.toggle(plugin.name, enabled)
  } catch (error) {
    configError.value = (error as Error).message
  }
}

async function handleReload(plugin: PluginListItem) {
  try {
    await manager.reload(plugin.name)
  } catch (error) {
    configError.value = (error as Error).message
  }
}

async function saveConfig() {
  if (!current.value) return
  try {
    const payload = configText.value.trim() ? JSON.parse(configText.value) : {}
    saving.value = true
    await manager.setConfig(current.value.name, payload)
    await manager.refresh()
    configError.value = null
  } catch (error) {
    configError.value = (error as Error).message
  } finally {
    saving.value = false
  }
}

onMounted(() => {
  manager.refresh()
})
</script>

<style scoped>
.plugin-settings {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.page-desc {
  margin: 0 0 12px;
  color: var(--td-text-color-secondary);
}
.plugin-layout {
  width: 100%;
}
.plugin-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.plugin-item {
  border: 1px solid var(--td-border-level-1-color);
  border-radius: 8px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: border-color 0.2s ease;
}
.plugin-item.active {
  border-color: var(--td-brand-color);
  box-shadow: 0 0 0 1px color-mix(in srgb, var(--td-brand-color) 40%, transparent);
}
.plugin-item-main {
  flex: 1;
  min-width: 0;
  margin-right: 12px;
}
.plugin-name {
  font-weight: 600;
}
.plugin-desc {
  font-size: 12px;
  color: var(--td-text-color-secondary);
  margin-top: 4px;
}
.plugin-meta {
  display: flex;
  gap: 6px;
  margin-top: 6px;
}
.detail-section {
  margin-bottom: 12px;
}
.detail-section .label {
  font-size: 12px;
  color: var(--td-text-color-secondary);
}
.chip-group {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 6px;
}
.detail-actions {
  display: flex;
  gap: 8px;
  margin-top: 12px;
}
.empty {
  padding: 8px 0;
  color: var(--td-text-color-secondary);
  text-align: center;
}
.config-actions {
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.error {
  color: var(--td-color-error);
  font-size: 12px;
}
.muted {
  color: var(--td-text-color-placeholder);
}
.service-chip {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}
.svc-meta {
  font-size: 11px;
  color: var(--td-text-color-placeholder);
}
.svc-default {
  color: var(--td-brand-color);
  font-weight: 600;
}
</style>
