<template>
  <t-layout :class="`${prefix}-wrapper`">
    <t-aside v-if="settingStore.showSidebar">
      <layout-side-nav />
    </t-aside>
    <t-layout>
      <t-header v-if="settingStore.showHeader">
        <layout-header />
      </t-header>
      <layout-content />
    </t-layout>
  </t-layout>
  <ProctorCallAlert />
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { prefix } from '@/config/global';
import { useSettingStore, useTabsRouterStore } from '@/store';
import LayoutContent from './components/LayoutContent.vue';
import LayoutHeader from './components/LayoutHeader.vue';
import ProctorCallAlert from './components/ProctorCallAlert.vue';
import LayoutSideNav from './components/LayoutSideNav.vue';
import '@/style/layout.less';

const route = useRoute();
const settingStore = useSettingStore();
const tabsRouterStore = useTabsRouterStore();

onMounted(() => settingStore.initializeAppearance());
watch(
  () => route.fullPath,
  () => {
    if (route.meta.anonymous) return;
    tabsRouterStore.append({
      path: route.path,
      fullPath: route.fullPath,
      title: String(route.meta.title ?? route.name ?? route.path),
      name: route.name
    });
    document.querySelector(`.${prefix}-layout`)?.scrollTo({ top: 0, behavior: 'smooth' });
  },
  { immediate: true }
);
</script>
