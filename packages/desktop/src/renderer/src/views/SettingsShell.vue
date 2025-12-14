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
          <component v-if="currentComponent" :is="currentComponent" :key="active" />
        </transition>
        <div v-if="!currentComponent" class="empty">暂无可用设置页面</div>
      </t-content>
    </t-layout>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch, inject, getCurrentInstance, provide } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useSettingsApi } from '@renderer/stores/settingsStore'
import { useSettingRef, useSettingsGroup, useSettingToggle } from '@renderer/composables/useSetting'

// 获取注册表（通过 provide/inject 或全局）
const registry =
  (inject('settings') as any) ||
  (getCurrentInstance()!.appContext.config.globalProperties as any).$settings
const router = useRouter()
const route = useRoute()

const pages = ref(registry?.list?.() ?? [])
let stopRegistryWatch: (() => void) | undefined
if (registry?.subscribe) {
  stopRegistryWatch = registry.subscribe(() => {
    pages.value = registry.list?.() ?? []
  })
}
onUnmounted(() => {
  stopRegistryWatch?.()
})
const active = ref<string | null>(null)

// 暴露设置 API 给子页面
const settingsApi = useSettingsApi()
provide('settingsApi', settingsApi)
// 额外提供便捷绑定工具，页面可通过 inject 使用
provide('useSettingRef', useSettingRef)
provide('useSettingsGroup', useSettingsGroup)
provide('useSettingToggle', useSettingToggle)

const currentComponent = ref<any>(null)

async function loadCurrent() {
  const id = active.value
  if (!id) {
    currentComponent.value = null
    return
  }
  const meta = registry.get(id)
  if (!meta) {
    currentComponent.value = null
    return
  }
  try {
    const comp = await meta.component()
    currentComponent.value = comp?.default || comp
  } catch (e) {
    currentComponent.value = {
      template: `<div style='padding:16px;color:var(--td-color-error)'>加载页面失败: ${String(e)}</div>`
    }
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
watch(pages, () => ensureActiveFromRoute())

onMounted(() => {
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
.empty {
  padding: 24px;
  color: var(--td-text-color-secondary);
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
