<template>
  <t-aside :class="sideNavClass">
    <div class="side-nav__brand" @click="router.push('/dashboard/base')">
      <strong v-if="!settingStore.isSidebarCompact">ExamAware</strong>
      <strong v-else>EA</strong>
      <span v-if="!settingStore.isSidebarCompact">集控中心</span>
    </div>
    <t-menu
      theme="dark"
      :collapsed="settingStore.isSidebarCompact"
      :value="active"
      :width="settingStore.isSidebarCompact ? '64px' : '232px'"
    >
      <menu-content :nav-data="asyncRouterList" />
    </t-menu>
  </t-aside>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { asyncRouterList, getActive } from '@/router';
import { prefix } from '@/config/global';
import { useSettingStore } from '@/store';
import MenuContent from './MenuContent.vue';

const router = useRouter();
const settingStore = useSettingStore();
const active = computed(() => getActive());
const sideNavClass = computed(() => [
  `${prefix}-side-nav`,
  { [`${prefix}-side-nav--compact`]: settingStore.isSidebarCompact }
]);
</script>
