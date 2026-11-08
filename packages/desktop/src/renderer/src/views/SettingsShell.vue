<template>
  <div class="settings-shell">
    <t-layout style="height: 100%">
      <t-aside width="220px" class="settings-sider">
        <t-menu v-model="active" @change="onChange" :collapsed="false">
          <template v-for="p in pages" :key="p.id">
            <t-menu-item :value="p.id">
              <template #icon>
                <t-icon :name="p.icon || 'settings'" />
              </template>
              {{ p.label }}
            </t-menu-item>
          </template>
        </t-menu>
      </t-aside>
      <t-content class="settings-content">
        <transition name="settings-fade-slide" mode="out-in">
          <div v-if="currentPage" :key="currentPage.id" class="settings-page-host">
            <component :is="currentPage.component" />
          </div>
        </transition>
        <div v-if="!currentPage" class="empty">
          <span v-if="loadError" class="error">{{ loadError }}</span>
          <span v-else>暂无可用设置页面</span>
        </div>
      </t-content>
    </t-layout>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, shallowRef, watch, inject, getCurrentInstance } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { settingsKey } from '@renderer/app/injectionKeys'

// 获取注册表（通过 provide/inject 或全局）
const registry =
  inject(settingsKey) || (getCurrentInstance()!.appContext.config.globalProperties as any).$settings
const router = useRouter()
const route = useRoute()

const pages = ref(registry?.list?.() ?? [])
let stopRegistryWatch: (() => void) | undefined
let stopSettingsNavigation: (() => void) | undefined
if (registry?.subscribe) {
  stopRegistryWatch = registry.subscribe(() => {
    pages.value = registry.list?.() ?? []
  })
}
onUnmounted(() => {
  stopRegistryWatch?.()
  stopSettingsNavigation?.()
})
const active = ref<string | null>(null)

interface LoadedSettingsPage {
  id: string
  component: any
}

// 页面组件与 key 必须同时切换，避免过渡期间 key 先变、组件后变导致离场动画卡死。
const currentPage = shallowRef<LoadedSettingsPage | null>(null)
const loadError = ref<string | null>(null)
let loadToken = 0

async function loadCurrent() {
  const id = active.value
  const token = ++loadToken
  if (!id) {
    currentPage.value = null
    loadError.value = null
    return
  }
  const meta = registry.get(id)
  if (!meta) {
    currentPage.value = null
    loadError.value = null
    return
  }
  // 已展示同一页面时无需重复加载（插件注册表刷新会触发重新校验）。
  if (currentPage.value?.id === id) return
  try {
    const comp = await meta.component()
    // 丢弃过期结果：快速切换时只允许最后一次请求生效。
    if (token !== loadToken || active.value !== id) return
    currentPage.value = { id, component: comp?.default || comp }
    loadError.value = null
  } catch (error) {
    if (token !== loadToken || active.value !== id) return
    currentPage.value = null
    loadError.value = `加载页面失败: ${String(error)}`
  }
}

function ensureActiveFromRoute() {
  const id = (route.params.page as string) || pages.value[0]?.id || null
  if (id && id !== active.value) active.value = id
}

function onChange(val: string) {
  router.replace({ path: `/settings/${val}` })
}

watch(
  () => route.fullPath,
  () => ensureActiveFromRoute()
)
watch(active, () => loadCurrent())
// 插件在窗口启动后才注册设置页，注册表变化时需要重新尝试加载当前页面。
watch(pages, () => {
  ensureActiveFromRoute()
  void loadCurrent()
})

onMounted(() => {
  stopSettingsNavigation = window.api.windows.onSettingsNavigate((page) => {
    if (registry?.get?.(page)) void router.replace({ path: `/settings/${page}` })
  })
  ensureActiveFromRoute()
  loadCurrent()
})
</script>

<style scoped>
.settings-shell {
  height: 100%;
}
.settings-sider {
  border-right: 1px solid var(--td-border-level-1-color);
}
.settings-content {
  height: 100%;
  overflow: auto;
}
.settings-page-host {
  min-height: 100%;
  box-sizing: border-box;
}
.empty {
  padding: 24px;
  color: var(--td-text-color-secondary);
}
.empty .error {
  color: var(--td-color-error);
}

/* 修复侧栏顶部出现的多余留白：覆盖 TDesign Menu 默认内边距 */
.settings-sider :deep(.t-default-menu) {
  height: 100%;
}
.settings-sider :deep(.t-default-menu__inner) {
  padding-top: 8px !important;
  padding-bottom: 8px !important;
}
.settings-sider :deep(.t-menu__scroll) {
  padding-top: 0 !important;
}
.settings-sider :deep(.t-menu__item:first-child) {
  margin-top: 0 !important;
}

/* 统一各设置页面的组件边距与排版 */
.settings-content :deep(.settings-page) {
  padding: 12px 16px;
}
.settings-content :deep(.t-card__header) {
  padding: 8px 12px;
  min-height: 34px;
}
.settings-content :deep(.t-card__body) {
  padding: 8px 12px;
}
.settings-content :deep(.t-divider) {
  margin: 8px 0;
}
.settings-content :deep(.settings-item) {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 6px 0;
}
.settings-content :deep(.settings-item + .settings-item) {
  margin-top: 6px;
}
.settings-content :deep(.settings-item-icon) {
  width: 32px;
  height: 32px;
  display: grid;
  place-items: center;
  color: var(--td-text-color-secondary);
}
.settings-content :deep(.settings-item-main) {
  flex: 1;
  min-width: 0;
}
.settings-content :deep(.settings-item-title) {
  font-size: 15px;
  font-weight: 600;
}
.settings-content :deep(.settings-item-desc) {
  color: var(--td-text-color-secondary);
  font-size: 12px;
}
.settings-content :deep(.settings-item-action) {
  display: flex;
  align-items: center;
  gap: 8px;
}

/* 浮入动画：淡入 + 轻微位移 */
.settings-fade-slide-enter-from {
  opacity: 0;
  transform: translateY(6px);
}
.settings-fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
.settings-fade-slide-enter-active {
  transition:
    opacity 160ms cubic-bezier(0.2, 0.8, 0.2, 1),
    transform 160ms cubic-bezier(0.2, 0.8, 0.2, 1);
}
.settings-fade-slide-leave-active {
  transition:
    opacity 140ms cubic-bezier(0.2, 0.8, 0.2, 1),
    transform 140ms cubic-bezier(0.2, 0.8, 0.2, 1);
}

@media (prefers-reduced-motion: reduce) {
  .settings-fade-slide-enter-from,
  .settings-fade-slide-leave-to {
    transform: none;
  }
  .settings-fade-slide-enter-active,
  .settings-fade-slide-leave-active {
    transition: opacity 120ms linear;
  }
}
/* 统一各页面顶级标题样式 */
.settings-content :deep(.settings-page h2) {
  margin: 0 0 10px 0;
  font-size: 24px;
  line-height: 1.4;
  font-weight: 600;
  color: var(--td-text-color-primary);
}
</style>
