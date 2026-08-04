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
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { prefix } from '@/config/global';
import { useSettingStore } from '@/store';
import LayoutContent from './components/LayoutContent.vue';
import LayoutHeader from './components/LayoutHeader.vue';
import LayoutSideNav from './components/LayoutSideNav.vue';
import '@/style/layout.less';

const settingStore = useSettingStore();

onMounted(() => settingStore.initializeAppearance());
</script>
