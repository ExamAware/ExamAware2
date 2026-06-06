<template>
  <div class="store-shell">
    <div class="store-header">
      <div class="store-title">插件商店</div>
      <div class="store-actions">
        <t-input
          v-model="keyword"
          class="search-input"
          placeholder="搜索插件名称 / 描述"
          clearable
          @enter="doSearch"
        >
          <template #suffix-icon>
            <search-icon />
          </template>
        </t-input>
        <t-button variant="outline" @click="refreshSource">刷新</t-button>
      </div>
    </div>

    <div class="hero" :class="{ loading }">
      <t-skeleton v-if="loading" theme="paragraph" :row-col="[{ width: '100%' }, 2]" />
      <t-swiper v-else :autoplay="3000" :height="200" :interval="4000" :loop="true">
        <t-swiper-item v-for="banner in banners" :key="banner.id">
          <div class="banner" @click="openDetail(banner.plugin)">
            <div class="banner-overlay"></div>
            <img class="banner-cover" :src="banner.cover" alt="cover" @error="onImageError" />
            <div class="banner-content">
              <div class="banner-title">{{ banner.title }}</div>
              <div class="banner-desc">{{ banner.description }}</div>
              <t-tag v-if="banner.tag" theme="success" size="small">{{ banner.tag }}</t-tag>
            </div>
          </div>
        </t-swiper-item>
      </t-swiper>
    </div>

    <div class="list-head">
      <div class="muted">共 {{ filteredPlugins.length }} 个插件</div>
      <div class="toolbar-actions">
        <t-button size="small" variant="outline" @click="queueVisible = true">下载队列</t-button>
        <t-button variant="outline" size="small" @click="refreshSource">重新拉取</t-button>
      </div>
    </div>

    <div v-if="currentProgress" class="inline-progress">
      <div class="progress-head">
        <span>{{ formatRegistryStep(currentProgress.step) }}</span>
        <span v-if="currentProgress.version" class="muted">v{{ currentProgress.version }}</span>
      </div>
      <t-progress
        v-if="progressPercent !== undefined"
        :percentage="progressPercent"
        size="small"
        theme="primary"
      />
      <div v-else class="muted">{{ currentProgress.step }}</div>
    </div>

    <t-skeleton
      v-if="loading"
      theme="paragraph"
      :row-col="[{ width: '100%' }, { width: '95%' }, 5]"
    />
    <div v-else class="plugin-list">
      <t-empty v-if="!filteredPlugins.length" description="暂无插件" />
      <div v-else class="plugin-rows">
        <div
          v-for="plugin in filteredPlugins"
          :key="plugin.id || plugin.package"
          class="plugin-row"
          @click="openDetail(plugin)"
        >
          <img
            class="plugin-icon"
            :src="plugin.icon || fallbackIcon"
            alt="icon"
            @error="onImageError"
          />
          <div class="plugin-main">
            <div class="plugin-line">
              <div class="name">{{ plugin.displayName || plugin.id || plugin.package }}</div>
              <div class="id">{{ plugin.package }}</div>
            </div>
            <div class="desc">{{ plugin.description || '暂无描述' }}</div>
            <div class="meta">
              <t-tag size="small" theme="primary">{{ plugin.latestVersion || '未知版本' }}</t-tag>
              <t-tag v-if="plugin.categories?.length" size="small" theme="default" variant="light">
                {{ plugin.categories.slice(0, 2).join(' / ') }}
              </t-tag>
            </div>
            <div v-if="isInstalling(plugin)" class="row-progress">
              <div class="progress-head">
                <span>{{ formatRegistryStep(currentProgress?.step) }}</span>
                <span v-if="currentProgress?.version" class="muted"
                  >v{{ currentProgress?.version }}</span
                >
              </div>
              <t-progress
                v-if="progressPercent !== undefined"
                :percentage="progressPercent"
                size="small"
                theme="primary"
              />
            </div>
          </div>
          <div class="plugin-actions">
            <t-button
              size="small"
              theme="primary"
              :loading="isInstalling(plugin) || installing"
              @click.stop="installPlugin(plugin)"
            >
              {{ actionLabel(plugin) }}
            </t-button>
            <t-button size="small" variant="text" @click.stop="openDetail(plugin)"> 详情 </t-button>
          </div>
        </div>
      </div>
    </div>

    <t-drawer v-model:visible="detailVisible" size="720px" destroy-on-close :footer="false">
      <template #header>
        <div class="drawer-title">
          <div class="drawer-name">{{ detailTitle }}</div>
          <div class="drawer-sub">{{ detailTarget?.package }}</div>
        </div>
      </template>
      <div class="drawer-body">
        <div class="drawer-meta">
          <t-space size="small" break-line>
            <t-tag theme="primary" variant="light"
              >版本 {{ selectedVersion?.version || '未知' }}</t-tag
            >
            <t-tag v-if="detailTarget?.categories?.length" variant="light">{{
              detailTarget?.categories?.join(' / ')
            }}</t-tag>
            <t-tag v-if="selectedVersion?.desktopCompat" theme="success" variant="light">
              桌面 {{ selectedVersion?.desktopCompat }}
            </t-tag>
            <t-tag v-if="selectedVersion?.sdkCompat" theme="success" variant="light">
              SDK {{ selectedVersion?.sdkCompat }}
            </t-tag>
          </t-space>
          <div class="drawer-desc">{{ detailTarget?.description || '暂无描述' }}</div>
        </div>

        <div class="drawer-actions">
          <t-button theme="primary" :loading="installing" block @click="installDetail">
            {{ detailActionLabel }}
          </t-button>
        </div>

        <div v-if="detailProgress" class="drawer-progress">
          <div class="progress-head">
            <span>{{ formatRegistryStep(detailProgress.step) }}</span>
            <span v-if="detailProgress.version" class="muted">v{{ detailProgress.version }}</span>
          </div>
          <t-progress
            v-if="progressPercent !== undefined"
            :percentage="progressPercent"
            size="small"
            theme="primary"
          />
          <div v-else class="muted">{{ detailProgress.step }}</div>
        </div>

        <t-divider dashed />

        <div class="markdown-body" v-html="detailReadmeHtml"></div>
        <div v-if="detailReadmeError" class="error">{{ detailReadmeError }}</div>
      </div>
    </t-drawer>

    <t-drawer
      v-model:visible="queueVisible"
      size="480px"
      destroy-on-close
      :footer="false"
      header="下载队列"
    >
      <div class="queue-body">
        <div v-if="!currentProgress" class="muted">暂无任务</div>
        <div v-else class="queue-item">
          <div class="queue-title">{{ currentProgress.package }}</div>
          <div class="progress-head">
            <span>{{ formatRegistryStep(currentProgress.step) }}</span>
            <span v-if="currentProgress.version" class="muted">v{{ currentProgress.version }}</span>
          </div>
          <t-progress
            v-if="progressPercent !== undefined"
            :percentage="progressPercent"
            size="small"
            theme="primary"
          />
          <div v-else class="muted">{{ currentProgress.step }}</div>
          <div class="queue-actions">
            <t-button size="small" disabled>暂不支持中止</t-button>
          </div>
        </div>
      </div>
    </t-drawer>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { MessagePlugin } from 'tdesign-vue-next'
import { SearchIcon } from 'tdesign-icons-vue-next'
import MarkdownIt from 'markdown-it'
import markdownItKatex from 'markdown-it-katex'
import hljs from 'highlight.js'
import { useDesktopApi } from '@renderer/runtime/desktopApi'
import { useSettingRef } from '@renderer/composables/useSetting'
import type {
  PluginIndexItem,
  PluginIndexVersionEntry,
  PluginSourceFetchResult
} from '../../../main/plugin/types'
import { DEFAULT_PLUGIN_INDEX_URL } from '../../../shared/pluginSource'
import 'katex/dist/katex.min.css'
import 'highlight.js/styles/github-dark.css'

const desktopApi = useDesktopApi()
const manager = desktopApi.plugins
const installedList = manager.installed
const loading = ref(false)
const keyword = ref('')
const payload = ref<PluginSourceFetchResult | null>(null)
const detailVisible = ref(false)
const queueVisible = ref(false)
const detailTarget = ref<PluginIndexItem | null>(null)
const detailReadmeHtml = ref('<p class="muted">选择插件以查看 README</p>')
const detailReadmeError = ref<string | null>(null)
const installing = ref(false)
const registryProgress = manager.registryProgress
const fallbackIcon =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="%238a8f98"><rect width="64" height="64" rx="12" fill="%23f5f6f7"/><path d="M20 32h24M32 20v24" stroke-width="4" stroke-linecap="round"/></svg>'

const mdUtils = MarkdownIt().utils
const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  highlight(code, lang) {
    try {
      if (lang && hljs.getLanguage(lang)) {
        const value = hljs.highlight(code, { language: lang, ignoreIllegals: true }).value
        return `<pre class="hljs"><code>${value}</code></pre>`
      }
      return `<pre class="hljs"><code>${mdUtils.escapeHtml(code)}</code></pre>`
    } catch (error) {
      return `<pre class="hljs"><code>${mdUtils.escapeHtml(code)}</code></pre>`
    }
  }
}).use(markdownItKatex)

const sourceList = useSettingRef<string[]>('plugins.source.list', [DEFAULT_PLUGIN_INDEX_URL], {
  mapIn: (raw) => (Array.isArray(raw) ? raw.filter(Boolean) : [DEFAULT_PLUGIN_INDEX_URL]),
  mapOut: (val) => (Array.isArray(val) ? val.filter(Boolean) : [DEFAULT_PLUGIN_INDEX_URL])
})
const activeSource = useSettingRef<string>('plugins.source.active', DEFAULT_PLUGIN_INDEX_URL)
const activeRegistry = useSettingRef<string>(
  'plugins.registry.active',
  'https://registry.npmjs.org'
)

const plugins = computed(() => payload.value?.payload.plugins ?? [])
const filteredPlugins = computed(() => {
  if (!keyword.value.trim()) return plugins.value
  const term = keyword.value.trim().toLowerCase()
  return plugins.value.filter((p) =>
    [p.displayName, p.id, p.package, p.description].some((v) => v?.toLowerCase().includes(term))
  )
})

const normalizedSources = computed(() => {
  const list = Array.isArray(sourceList.value) ? sourceList.value : []
  const unique = Array.from(new Set(list.map((v) => v?.trim()).filter(Boolean)))
  return unique.length ? unique : [DEFAULT_PLUGIN_INDEX_URL]
})

watch(
  normalizedSources,
  (list) => {
    if (!list.includes(activeSource.value)) {
      activeSource.value = list[0]
    }
    if (list.length !== sourceList.value.length || list.some((v, i) => v !== sourceList.value[i])) {
      sourceList.value = list
    }
  },
  { immediate: true }
)

const effectiveSource = computed(() => activeSource.value?.trim() || normalizedSources.value[0])

const banners = computed(() => {
  const source = plugins.value.slice(0, 4)
  return source.map((p, idx) => ({
    id: p.id || p.package || String(idx),
    cover: p.cover || p.icon || fallbackIcon,
    title: p.displayName || p.id || p.package,
    description: p.description || '点击查看详情',
    tag: p.latestVersion,
    plugin: p
  }))
})

const detailTitle = computed(
  () => detailTarget.value?.displayName || detailTarget.value?.id || detailTarget.value?.package
)

const installedVersionMap = computed(() => {
  const map = new Map<string, string>()
  for (const item of installedList.value ?? []) {
    if (item?.name) {
      map.set(item.name, item.version)
    }
  }
  return map
})

function actionLabel(plugin: PluginIndexItem) {
  const installedVersion = installedVersionMap.value.get(plugin.package)
  if (!installedVersion) return '获取'
  if (plugin.latestVersion && plugin.latestVersion !== installedVersion) return '更新'
  return '重新安装'
}

const detailActionLabel = computed(() => {
  if (!detailTarget.value) return '获取'
  return actionLabel(detailTarget.value)
})

const selectedVersion = computed<PluginIndexVersionEntry | undefined>(() => {
  if (!detailTarget.value) return undefined
  const versions = detailTarget.value.versions ?? []
  if (!versions.length) return undefined
  if (detailTarget.value.latestVersion) {
    const match = versions.find((v) => v.version === detailTarget.value!.latestVersion)
    if (match) return match
  }
  return versions[0]
})

const currentProgress = computed(() => registryProgress.value)
const progressPercent = computed(() => {
  const pct = currentProgress.value?.percent
  if (pct === undefined || pct === null) return undefined
  const num = Number(pct)
  if (Number.isNaN(num)) return undefined
  return Math.max(0, Math.min(100, num))
})

function formatRegistryStep(step?: string) {
  switch (step) {
    case 'resolving':
      return '解析版本'
    case 'downloading':
      return '下载中'
    case 'verifying':
      return '校验'
    case 'extracting':
      return '解压缩'
    case 'installing':
      return '安装中'
    case 'reloading':
      return '安装完成'
    default:
      return step || '准备中'
  }
}

const detailProgress = computed(() => {
  if (!detailTarget.value) return null
  if (registryProgress.value?.package !== detailTarget.value.package) return null
  return registryProgress.value
})

function isInstalling(plugin: PluginIndexItem) {
  return currentProgress.value?.package === plugin.package
}

async function refreshSource() {
  loading.value = true
  try {
    const res = await manager.fetchSourceIndex({ url: effectiveSource.value })
    payload.value = res
  } catch (error) {
    MessagePlugin.error('拉取插件源失败')
  } finally {
    loading.value = false
  }
}

function doSearch() {
  // 仅依赖计算属性，不需要额外逻辑
}

function openDetail(plugin: PluginIndexItem) {
  detailTarget.value = plugin
  detailVisible.value = true
  loadDetailReadme(plugin)
}

function onImageError(event: Event) {
  const target = event.target as HTMLImageElement
  if (target && target.src !== fallbackIcon) {
    target.src = fallbackIcon
  }
}

async function fetchReadmeFromRegistry(plugin: PluginIndexItem, version?: PluginIndexVersionEntry) {
  const targetVersion = version?.version || plugin.latestVersion || plugin.versions?.[0]?.version
  const registry = version?.dist?.registry || activeRegistry.value || 'https://registry.npmjs.org'
  if (!plugin.package || !targetVersion) return null
  const result = await manager.fetchRegistryReadme(plugin.package, {
    version: targetVersion,
    registry
  })
  return result?.readme ?? null
}

async function loadDetailReadme(plugin: PluginIndexItem) {
  const version = selectedVersion.value ?? plugin.versions?.[0]
  detailReadmeError.value = null
  try {
    const content = await fetchReadmeFromRegistry(plugin, version)
    if (!content) {
      detailReadmeHtml.value = '<p class="muted">npm 未提供 README</p>'
      return
    }
    detailReadmeHtml.value = md.render(content)
  } catch (error) {
    detailReadmeError.value = (error as Error).message
    detailReadmeHtml.value = '<p class="muted">无法加载 README</p>'
  }
}

async function installPlugin(plugin: PluginIndexItem) {
  const version =
    plugin.versions?.find((v) => v.version === plugin.latestVersion) ?? plugin.versions?.[0]
  if (!version) {
    MessagePlugin.warning('该插件缺少可用版本信息')
    return
  }
  await installWithVersion(plugin, version)
}

async function installWithVersion(plugin: PluginIndexItem, version: PluginIndexVersionEntry) {
  installing.value = true
  try {
    await manager.installFromRegistry(plugin.package, {
      versionRange: version.version,
      registry: version.dist?.registry || activeRegistry.value,
      requestId: `store-${plugin.package}-${version.version}`
    })
    MessagePlugin.success('安装请求已提交，正在后台处理')
  } catch (error) {
    MessagePlugin.error((error as Error).message || '安装失败')
  } finally {
    installing.value = false
  }
}

async function installDetail() {
  if (!detailTarget.value || !selectedVersion.value) return
  await installWithVersion(detailTarget.value, selectedVersion.value)
}

onMounted(() => {
  refreshSource()
})
</script>

<style scoped>
.store-shell {
  padding: 16px;
  background: var(--td-bg-color-page);
  min-height: 100vh;
  color: var(--td-text-color-primary);
}

.store-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.store-title {
  font-size: 20px;
  font-weight: 600;
}

.store-actions {
  display: flex;
  gap: 12px;
  align-items: center;
}

.search-input {
  width: 280px;
}

.hero {
  border-radius: 12px;
  overflow: hidden;
  background: var(--td-bg-color-container);
  .drawer-progress {
    margin-bottom: 12px;
    padding: 12px;
    border: 1px solid var(--td-component-stroke);
    border-radius: 8px;
    background: var(--td-bg-color-component);
  }
  border: 1px solid var(--td-component-stroke);
  margin-bottom: 12px;
}

.banner {
  position: relative;
  height: 200px;
  cursor: pointer;
  background: var(--td-bg-color-component-hover);
}

.banner-cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.banner-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.6));
}

.banner-content {
  position: absolute;
  left: 16px;
  right: 16px;
  bottom: 16px;
  color: #fff;
}

.banner-title {
  font-size: 18px;
  font-weight: 600;
}

.banner-desc {
  margin-top: 4px;
  font-size: 13px;
  opacity: 0.9;
}

.list-head {
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: space-between;
  margin: 4px 0 12px;
}

.toolbar-actions {
  display: flex;
  gap: 8px;
}

.inline-progress {
  background: var(--td-bg-color-container);
  border: 1px solid var(--td-component-stroke);
  border-radius: 10px;
  padding: 8px 12px;
  margin-bottom: 12px;
}

.progress-head {
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 6px;
  font-weight: 600;
}

.plugin-list {
  background: var(--td-bg-color-container);
  border: 1px solid var(--td-component-stroke);
  border-radius: 12px;
  padding: 8px 0;
}

.plugin-rows {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.plugin-row {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 12px;
  align-items: center;
  padding: 12px 16px;
  cursor: pointer;
  transition: background 0.15s ease;
}

.plugin-row:hover {
  background: var(--td-bg-color-component-hover);
}

.plugin-icon {
  width: 52px;
  height: 52px;
  border-radius: 12px;
  object-fit: cover;
  background: var(--td-bg-color-component);
}

.plugin-main {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.plugin-line {
  display: flex;
  gap: 8px;
  align-items: center;
}

.plugin-line .name {
  font-weight: 600;
}

.plugin-line .id {
  font-size: 12px;
  color: var(--td-text-color-secondary);
}

.plugin-main .desc {
  color: var(--td-text-color-secondary);
}

.plugin-main .meta {
  display: flex;
  gap: 6px;
  align-items: center;
}

.row-progress {
  margin-top: 6px;
}

.plugin-actions {
  display: flex;
  gap: 6px;
}

.drawer-title {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.drawer-name {
  font-size: 18px;
  font-weight: 600;
}

.drawer-sub {
  font-size: 12px;
  color: var(--td-text-color-secondary);
}

.drawer-body {
  padding-right: 8px;
}

.drawer-meta {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.drawer-desc {
  color: var(--td-text-color-secondary);
}

.drawer-actions {
  display: flex;
  gap: 12px;
  margin: 12px 0;
}

.markdown-body {
  font-size: 14px;
  line-height: 1.6;
}

.markdown-body :global(code) {
  background: var(--td-bg-color-component);
  padding: 2px 4px;
  border-radius: 4px;
}

.markdown-body :global(pre) {
  background: var(--td-bg-color-component);
  padding: 12px;
  border-radius: 8px;
  overflow: auto;
}

.markdown-body :global(.hljs) {
  background: var(--td-bg-color-component);
  border-radius: 8px;
}

.markdown-body :global(a) {
  color: var(--td-brand-color);
}

.error {
  color: var(--td-error-color);
  margin-top: 8px;
}

.muted {
  color: var(--td-text-color-secondary);
}

.queue-body {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.queue-item {
  padding: 12px;
  border: 1px solid var(--td-component-stroke);
  border-radius: 10px;
  background: var(--td-bg-color-container);
}

.queue-title {
  font-weight: 600;
  margin-bottom: 6px;
}

.queue-actions {
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
}
</style>
