<template>
  <div class="settings-page plugin-settings">
    <h2>插件</h2>
    <p class="page-desc">插件可以实现很多好玩的东西。</p>

    <t-card class="plugin-table-card" title="插件列表" :loading="manager.loading.value">
      <div class="table-toolbar">
        <t-space size="small">
          <t-button
            variant="outline"
            size="small"
            @click="manager.refresh"
            :loading="manager.loading.value"
          >
            刷新
          </t-button>
        </t-space>
      </div>

      <t-table
        row-key="name"
        :data="plugins"
        :columns="columns"
        size="medium"
        table-layout="auto"
        :hover="true"
        :stripe="true"
        :row-class-name="rowClassName"
        :pagination="false"
        bordered
        @row-click="onRowClick"
      >
        <template #empty>
          <div class="empty">暂无插件</div>
        </template>

        <template #name="{ row }">
          <div class="plugin-name-col">
            <span class="plugin-name">{{ row.displayName || row.name }}</span>
          </div>
        </template>

        <template #description="{ row }">
          <div class="plugin-desc">{{ row.description || '未提供描述' }}</div>
        </template>

        <template #version="{ row }">
          <span>v{{ row.version }}</span>
        </template>

        <template #operations="{ row }">
          <t-space size="small">
            <t-tooltip content="查看详情">
              <t-button shape="circle" variant="text" @click.stop="openDetail(row)">
                <InfoCircleIcon />
              </t-button>
            </t-tooltip>
            <t-tooltip content="重载插件">
              <t-button shape="circle" variant="text" @click.stop="handleReload(row)">
                <RefreshIcon />
              </t-button>
            </t-tooltip>
            <t-tooltip :content="row.enabled ? '禁用插件' : '启用插件'">
              <t-button shape="circle" variant="text" @click.stop="handleToggle(row, !row.enabled)">
                <PoweroffIcon v-if="row.enabled" />
                <PlayCircleIcon v-else />
              </t-button>
            </t-tooltip>
            <t-tooltip content="卸载插件">
              <t-button
                shape="circle"
                variant="text"
                theme="danger"
                @click.stop="confirmUninstall(row)"
              >
                <DeleteIcon />
              </t-button>
            </t-tooltip>
          </t-space>
        </template>
      </t-table>
    </t-card>

    <t-drawer v-model:visible="detailVisible" :header="detailTitle" size="70%" :footer="false">
      <div v-if="detailTarget" class="drawer-body">
        <div class="drawer-meta">
          <t-tag
            size="small"
            theme="success"
            variant="light"
            v-if="detailTarget.status === 'active'"
            >运行中</t-tag
          >
          <t-tag
            size="small"
            theme="warning"
            variant="light"
            v-else-if="detailTarget.status === 'loading'"
            >加载中</t-tag
          >
          <t-tag size="small" variant="outline" v-else-if="detailTarget.status === 'disabled'"
            >已禁用</t-tag
          >
          <t-tag
            size="small"
            theme="danger"
            variant="light"
            v-else-if="detailTarget.status === 'error'"
          >
            {{ detailTarget.error?.message || '异常' }}
          </t-tag>
          <t-tag size="small" variant="outline" v-else>{{ detailTarget.status }}</t-tag>
          <t-tag size="small" variant="light">v{{ detailTarget.version }}</t-tag>
          <t-tag
            v-if="detailTarget.hasRendererEntry"
            size="small"
            variant="outline"
            theme="primary"
          >
            渲染入口
          </t-tag>
        </div>

        <div class="drawer-section">
          <div class="section-title">依赖服务</div>
          <div class="chip-group">
            <t-tag v-for="svc in detailTarget.injects" :key="svc" size="small" variant="outline">
              {{ svc }}
            </t-tag>
            <span v-if="!detailTarget.injects.length" class="muted">无</span>
          </div>
        </div>

        <div class="drawer-section">
          <div class="section-title">提供服务</div>
          <div class="chip-group">
            <t-tag
              v-for="svc in detailProvidedServices"
              :key="svc.name"
              size="small"
              variant="light-outline"
              class="service-chip"
            >
              <span>{{ svc.name }}</span>
              <span class="svc-meta">/{{ svc.scope ?? 'main' }}</span>
              <span v-if="svc.isDefault" class="svc-meta svc-default">默认</span>
            </t-tag>
            <span v-if="!detailProvidedServices.length" class="muted">无</span>
          </div>
        </div>

        <div class="drawer-section readme-block">
          <div class="section-title">README</div>
          <t-skeleton
            v-if="readmeLoading"
            :row-col="[{ width: '100%' }, { width: '95%' }, { width: '98%' }]"
          />
          <div v-else class="markdown-body" v-html="readmeHtml"></div>
          <div v-if="readmeError" class="error">{{ readmeError }}</div>
        </div>
      </div>
    </t-drawer>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import MarkdownIt from 'markdown-it'
import markdownItKatex from 'markdown-it-katex'
import { DialogPlugin, MessagePlugin } from 'tdesign-vue-next'
import {
  DeleteIcon,
  InfoCircleIcon,
  PlayCircleIcon,
  PoweroffIcon,
  RefreshIcon
} from 'tdesign-icons-vue-next'
import { useDesktopApi } from '@renderer/runtime/desktopApi'
import type { PluginListItem, ServiceProviderRecord } from '../../../../main/plugin/types'
import 'katex/dist/katex.min.css'

const desktopApi = useDesktopApi()
const manager = desktopApi.plugins
const plugins = manager.installed
const selectedName = ref<string | null>(null)

const detailVisible = ref(false)
const detailTarget = ref<PluginListItem | null>(null)
const detailTitle = computed(
  () => detailTarget.value?.displayName || detailTarget.value?.name || '插件详情'
)
const readmeHtml = ref('<p class="muted">暂无 README</p>')
const readmeError = ref<string | null>(null)
const readmeLoading = ref(false)

const md = new MarkdownIt({ html: true, linkify: true, typographer: true }).use(markdownItKatex)

const columns = [
  { colKey: 'name', title: '名称', width: 200 },
  { colKey: 'description', title: '简介' },
  { colKey: 'version', title: '版本', width: 120 },
  { colKey: 'operations', title: '操作', width: 220, align: 'center' }
]

const providerMap = computed(() => {
  const map = new Map<string, ServiceProviderRecord[]>()
  manager.serviceProviders.value.forEach((svc) => {
    const list = map.get(svc.owner) ?? []
    list.push(svc)
    map.set(svc.owner, list)
  })
  return map
})

const detailProvidedServices = computed(() => {
  if (!detailTarget.value) return []
  return providerMap.value.get(detailTarget.value.name) ?? []
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

function onRowClick({ row }: { row: PluginListItem }) {
  selectedName.value = row.name
}

function rowClassName({ row }: { row: PluginListItem }) {
  return row.name === selectedName.value ? 'is-selected-row' : ''
}

function providedFor(name: string) {
  return providerMap.value.get(name) ?? []
}

async function handleToggle(plugin: PluginListItem, enabled: boolean) {
  try {
    await manager.toggle(plugin.name, enabled)
    MessagePlugin.success(enabled ? '已启用插件' : '已禁用插件')
  } catch (error) {
    const msg = (error as Error).message
    MessagePlugin.error(msg)
  }
}

async function handleReload(plugin: PluginListItem) {
  try {
    await manager.reload(plugin.name)
    MessagePlugin.success('已重载插件')
  } catch (error) {
    const msg = (error as Error).message
    MessagePlugin.error(msg)
  }
}

async function confirmUninstall(plugin: PluginListItem) {
  const dialog = DialogPlugin.confirm({
    theme: 'danger',
    header: `卸载 ${plugin.displayName || plugin.name}`,
    body: '确认卸载后将删除本地插件文件和配置。',
    onConfirm: async () => {
      try {
        await manager.uninstall(plugin.name)
        MessagePlugin.success('插件已卸载')
        if (selectedName.value === plugin.name) {
          selectedName.value = plugins.value.find((p) => p.name !== plugin.name)?.name ?? null
        }
      } catch (error) {
        const msg = (error as Error).message
        MessagePlugin.error(msg)
      } finally {
        dialog.destroy?.()
      }
    },
    onClose: () => dialog.destroy?.(),
    onCancel: () => dialog.destroy?.()
  })
}

async function openDetail(plugin: PluginListItem) {
  detailTarget.value = plugin
  detailVisible.value = true
  readmeLoading.value = true
  readmeError.value = null
  try {
    const content = await manager.getReadme(plugin.name)
    readmeHtml.value = content ? md.render(content) : '<p class="muted">暂无 README</p>'
  } catch (error) {
    const msg = (error as Error).message
    readmeError.value = msg
    readmeHtml.value = '<p class="muted">README 读取失败</p>'
  } finally {
    readmeLoading.value = false
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
.plugin-table-card {
  width: 100%;
}
.table-toolbar {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 8px;
}
.page-desc {
  margin: 0 0 12px;
  color: var(--td-text-color-secondary);
}
.plugin-cell {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.plugin-name-col {
  display: flex;
  gap: 6px;
  align-items: center;
  flex-wrap: wrap;
}
.plugin-title {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}
.plugin-name {
  font-weight: 600;
  font-size: 14px;
}
.plugin-desc {
  color: var(--td-text-color-secondary);
}
.plugin-meta {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}
.empty {
  padding: 10px 0;
  color: var(--td-text-color-secondary);
  text-align: center;
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
.is-selected-row td {
  background-color: color-mix(in srgb, var(--td-brand-color) 6%, transparent);
}
.drawer-body {
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.drawer-meta {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
.drawer-section {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.section-title {
  font-weight: 600;
  font-size: 14px;
}
.chip-group {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.readme-block {
  border-top: 1px solid var(--td-border-level-1-color);
  padding-top: 8px;
}
.markdown-body :global(code) {
  background: var(--td-bg-color-component);
  padding: 2px 4px;
  border-radius: 4px;
}
.markdown-body {
  line-height: 1.6;
}
.markdown-body :global(pre) {
  background: var(--td-bg-color-component);
  padding: 8px;
  border-radius: 6px;
  overflow: auto;
}
.markdown-body :global(table) {
  border-collapse: collapse;
  width: 100%;
}
.markdown-body :global(th),
.markdown-body :global(td) {
  border: 1px solid var(--td-border-level-1-color);
  padding: 6px 8px;
}
.markdown-body :global(a) {
  color: var(--td-brand-color);
}
.markdown-body :global(img) {
  max-width: 100%;
}
.markdown-body :global(.katex) {
  font-size: 1em;
}
</style>
