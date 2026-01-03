<template>
  <div class="settings-page plugin-settings">
    <h2>插件</h2>
    <p class="page-desc">插件可以扩展能力，支持本地和注册表安装。</p>

    <t-space direction="vertical" size="small" style="width: 100%">
      <t-card title="安装" theme="poster2">
        <div class="settings-item">
          <div class="settings-item-icon">
            <TIcon name="cloud-download" size="22px" />
          </div>
          <div class="settings-item-main">
            <div class="settings-item-title">从注册表安装</div>
            <div class="settings-item-desc">
              输入包名即可从 npm registry 下载并安装插件包，支持版本范围和自定义 registry。
            </div>
            <div v-if="currentProgress" class="registry-progress">
              <div class="progress-head">
                <span class="progress-step">
                  {{ formatRegistryStep(currentProgress.step) }}
                </span>
                <span v-if="currentProgress.version" class="muted"
                  >v{{ currentProgress.version }}</span
                >
              </div>
              <div v-if="currentProgress.detail" class="progress-detail">
                {{ currentProgress.detail }}
              </div>
              <t-progress
                v-if="progressPercent !== undefined"
                :percentage="progressPercent"
                size="small"
                theme="primary"
              />
              <t-tag v-else size="small" variant="light-outline">
                {{ currentProgress.step }}
              </t-tag>
            </div>
          </div>
          <div class="settings-item-action registry-action">
            <t-input
              v-model="registryPackage"
              size="small"
              placeholder="包名，例如 @scope/plugin"
              :disabled="registryInstalling"
            />
            <t-input
              v-model="registryVersionRange"
              size="small"
              placeholder="版本范围（可选，例如 ^1.0.0）"
              :disabled="registryInstalling"
            />
            <t-input
              v-model="registryRegistry"
              size="small"
              placeholder="Registry URL（可选）"
              :disabled="registryInstalling"
            />
            <t-button
              theme="primary"
              size="small"
              :loading="registryInstalling"
              @click="handleRegistryInstall"
            >
              <template #icon><CloudUploadIcon /></template>
              开始安装
            </t-button>
          </div>
        </div>

        <t-divider />

        <div class="settings-item">
          <div class="settings-item-icon">
            <TIcon name="folder-add" size="22px" />
          </div>
          <div class="settings-item-main">
            <div class="settings-item-title">本地安装</div>
            <div class="settings-item-desc">
              支持解压后的插件目录或 .ea2x 插件包，方便离线部署或本地调试。
            </div>
          </div>
          <div class="settings-item-action local-actions">
            <t-button
              theme="default"
              size="small"
              variant="outline"
              @click="handleInstallExtracted"
            >
              <template #icon><CloudUploadIcon /></template>
              解压缩插件
            </t-button>
            <t-button theme="success" size="small" variant="outline" @click="handleInstallPackage">
              <template #icon><FileZipIcon /></template>
              插件包 (.ea2x)
            </t-button>
          </div>
        </div>
      </t-card>

      <t-card class="plugin-table-card" title="插件列表" :loading="manager.loading.value">
        <div class="card-toolbar">
          <div class="card-meta">
            <t-tag size="small" variant="light">总数 {{ pluginList.length }}</t-tag>
            <span class="muted">启用 {{ enabledCount }}</span>
          </div>
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
          :data="pluginList"
          :columns="columns"
          size="medium"
          table-layout="auto"
          :row-class-name="rowClassName"
          :pagination="false"
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
                <t-button
                  shape="circle"
                  variant="text"
                  @click.stop="handleToggle(row, !row.enabled)"
                >
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
    </t-space>

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
            <t-tag
              v-for="svc in detailTarget.injects || []"
              :key="svc"
              size="small"
              variant="outline"
            >
              {{ svc }}
            </t-tag>
            <span v-if="!(detailTarget.injects || []).length" class="muted">无</span>
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
  CloudUploadIcon,
  DeleteIcon,
  FileZipIcon,
  Icon as TIcon,
  InfoCircleIcon,
  PlayCircleIcon,
  PoweroffIcon,
  RefreshIcon
} from 'tdesign-icons-vue-next'
import { useDesktopApi } from '@renderer/runtime/desktopApi'
import type {
  PluginListItem,
  RegistryInstallProgress,
  ServiceProviderRecord
} from '../../../../main/plugin/types'
import 'katex/dist/katex.min.css'

const desktopApi = useDesktopApi()
const manager = desktopApi.plugins
const plugins = manager.installed
const pluginList = computed(() => plugins.value ?? [])
const registryProgress = manager.registryProgress
const selectedName = ref<string | null>(null)
const registryInstalling = ref(false)
const registryPackage = ref('')
const registryVersionRange = ref('')
const registryRegistry = ref('')
const currentProgress = computed(() => registryProgress.value)
const progressPercent = computed(() => {
  const pct = registryProgress.value?.percent
  if (pct === undefined || pct === null) return undefined
  return Math.max(0, Math.min(100, Number(pct)))
})

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

const enabledCount = computed(() => pluginList.value.filter((item) => item.enabled).length)

const providerMap = computed(() => {
  const map = new Map<string, ServiceProviderRecord[]>()
  const services = manager.serviceProviders.value ?? []
  services.forEach((svc) => {
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

function formatRegistryStep(step: RegistryInstallProgress['step']) {
  switch (step) {
    case 'resolving':
      return '解析版本'
    case 'downloading':
      return '下载插件包'
    case 'verifying':
      return '校验完整性'
    case 'extracting':
      return '解压缩'
    case 'installing':
      return '安装中'
    case 'reloading':
      return '重载插件'
    default:
      return step
  }
}

watch(
  pluginList,
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

async function handleToggle(plugin: PluginListItem, enabled: boolean) {
  try {
    await manager.toggle(plugin.name, enabled)
    MessagePlugin.success(enabled ? '已启用插件' : '已禁用插件')
  } catch (error) {
    const msg = (error as Error).message
    MessagePlugin.error(msg)
  }
}

async function handleRegistryInstall() {
  if (!registryPackage.value.trim()) {
    MessagePlugin.warning('请输入包名')
    return
  }
  registryInstalling.value = true
  try {
    const requestId =
      typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function'
        ? crypto.randomUUID()
        : String(Date.now())
    const result = await manager.installFromRegistry(registryPackage.value.trim(), {
      versionRange: registryVersionRange.value.trim() || undefined,
      registry: registryRegistry.value.trim() || undefined,
      requestId
    })
    MessagePlugin.success(`已安装 ${result.name}@${result.version}`)
  } catch (error) {
    const msg = (error as Error).message
    MessagePlugin.error(msg)
  } finally {
    registryInstalling.value = false
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

function handleInstallExtracted() {
  window.api
    ?.openFileDialog({ properties: ['openDirectory', 'openFile'] })
    .then(async (dirPath) => {
      if (!dirPath) return
      try {
        const result = await manager.installDir(dirPath)
        MessagePlugin.success(`已安装至 ${result.installedPath}`)
      } catch (error) {
        MessagePlugin.error((error as Error).message)
      }
    })
    .catch((err) => MessagePlugin.error((err as Error).message))
}

function handleInstallPackage() {
  window.api
    ?.openFileDialog({
      properties: ['openFile'],
      filters: [
        { name: 'ExamAware 插件包', extensions: ['ea2x'] },
        { name: '所有文件', extensions: ['*'] }
      ]
    })
    .then(async (filePath) => {
      if (!filePath) return
      if (!filePath.toLowerCase().endsWith('.ea2x')) {
        MessagePlugin.warning('请选择 .ea2x 插件包')
        return
      }
      try {
        const result = await manager.installPackage(filePath)
        MessagePlugin.success(`已安装插件包：${result.installedPath}`)
      } catch (error) {
        MessagePlugin.error((error as Error).message)
      }
    })
    .catch((err) => MessagePlugin.error((err as Error).message))
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
          selectedName.value = pluginList.value.find((p) => p.name !== plugin.name)?.name ?? null
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
  gap: 12px;
}
.page-desc {
  margin: 0 0 12px;
  color: var(--td-text-color-secondary);
}
.plugin-table-card {
  width: 100%;
}
.card-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
}
.card-meta {
  display: flex;
  align-items: center;
  gap: 8px;
}
.registry-action {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 8px;
  min-width: 340px;
  align-items: center;
}
.local-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: flex-end;
}
.registry-progress {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 6px;
}
.progress-head {
  display: flex;
  gap: 8px;
  align-items: baseline;
  flex-wrap: wrap;
}
.progress-step {
  font-weight: 600;
}
.progress-detail {
  color: var(--td-text-color-secondary);
  font-size: 12px;
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
