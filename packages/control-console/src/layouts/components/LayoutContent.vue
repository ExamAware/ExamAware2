<template>
  <t-layout :class="`${prefix}-layout`">
    <t-tabs
      drag-sort
      theme="card"
      :class="`${prefix}-layout-tabs-nav`"
      :value="route.path"
      @change="handleTabChange"
      @remove="handleRemove"
      @drag-sort="handleDragSort"
    >
      <t-tab-panel
        v-for="(routeItem, index) in tabsRouterStore.tabs"
        :key="routeItem.path"
        :value="routeItem.path"
        :removable="!routeItem.isHome"
        :draggable="!routeItem.isHome"
      >
        <template #label>
          <t-dropdown
            trigger="context-menu"
            :min-column-width="128"
            :popup-props="{
              overlayClassName: 'route-tabs-dropdown',
              onVisibleChange: (visible: boolean, context: PopupVisibleChangeContext) =>
                handleTabMenuVisible(visible, context, routeItem.path),
              visible: activeTabPath === routeItem.path
            }"
          >
            <template v-if="!routeItem.isHome">{{ routeItem.title }}</template>
            <ConsoleIcon v-else name="home" />
            <template #dropdown>
              <t-dropdown-menu>
                <t-dropdown-item @click="refreshCurrent(routeItem.path)">
                  <ConsoleIcon name="refresh" />
                  重新加载
                </t-dropdown-item>
                <t-dropdown-item v-if="index > 1" @click="closeLeft(routeItem.path)">
                  <ConsoleIcon name="arrow-left" />
                  关闭左侧
                </t-dropdown-item>
                <t-dropdown-item
                  v-if="index < tabsRouterStore.tabs.length - 1"
                  @click="closeRight(routeItem.path)"
                >
                  <ConsoleIcon name="arrow-right" />
                  关闭右侧
                </t-dropdown-item>
                <t-dropdown-item
                  v-if="tabsRouterStore.tabs.length > 2"
                  @click="closeOthers(routeItem.path)"
                >
                  <ConsoleIcon name="close-circle" />
                  关闭其他
                </t-dropdown-item>
              </t-dropdown-menu>
            </template>
          </t-dropdown>
        </template>
      </t-tab-panel>
    </t-tabs>

    <t-content :class="`${prefix}-content-layout`">
      <div class="layout-content-frame">
        <t-breadcrumb v-if="settingStore.showBreadcrumb" class="layout-breadcrumb">
          <t-breadcrumb-item to="/overview">集控中心</t-breadcrumb-item>
          <t-breadcrumb-item v-if="sectionTitle !== route.meta.title">{{
            sectionTitle
          }}</t-breadcrumb-item>
          <t-breadcrumb-item>{{ route.meta.title }}</t-breadcrumb-item>
        </t-breadcrumb>
        <main class="layout-page-container">
          <router-view v-if="!tabsRouterStore.refreshing" />
          <t-loading v-else />
        </main>
      </div>
    </t-content>
  </t-layout>
</template>

<script setup lang="ts">
import type { PopupVisibleChangeContext, TabValue } from 'tdesign-vue-next';
import { computed, nextTick, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { prefix } from '@/config/global';
import { useSettingStore, useTabsRouterStore } from '@/store';

const route = useRoute();
const router = useRouter();
const settingStore = useSettingStore();
const tabsRouterStore = useTabsRouterStore();
const activeTabPath = ref<string | null>('');
const sectionTitle = computed(() => String(route.matched[0]?.meta.title ?? route.meta.title ?? ''));

function handleTabChange(value: TabValue) {
  void router.push(String(value));
}

function handleRemove(options: { value: TabValue; index: number }) {
  const path = String(options.value);
  const nextTab =
    tabsRouterStore.tabs[options.index + 1] ?? tabsRouterStore.tabs[options.index - 1];
  tabsRouterStore.remove(path);
  if (path === route.path && nextTab) void router.push(nextTab.fullPath);
}

function handleDragSort(options: { currentIndex: number; targetIndex: number }) {
  tabsRouterStore.reorder(options.currentIndex, options.targetIndex);
}

async function refreshCurrent(path: string) {
  activeTabPath.value = null;
  if (path !== route.path) await router.push(path);
  tabsRouterStore.setRefreshing(true);
  await nextTick();
  tabsRouterStore.setRefreshing(false);
}

function closeLeft(path: string) {
  tabsRouterStore.closeLeft(path);
  activeTabPath.value = null;
  if (!tabsRouterStore.tabs.some((item) => item.path === route.path)) void router.push(path);
}

function closeRight(path: string) {
  tabsRouterStore.closeRight(path);
  activeTabPath.value = null;
  if (!tabsRouterStore.tabs.some((item) => item.path === route.path)) void router.push(path);
}

function closeOthers(path: string) {
  tabsRouterStore.closeOthers(path);
  activeTabPath.value = null;
  if (route.path !== path) void router.push(path);
}

function handleTabMenuVisible(visible: boolean, context: PopupVisibleChangeContext, path: string) {
  if (context.trigger === 'document') activeTabPath.value = null;
  if (visible) activeTabPath.value = path;
}
</script>
