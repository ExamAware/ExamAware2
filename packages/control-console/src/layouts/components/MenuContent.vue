<template>
  <template v-for="item in menuItems" :key="item.path">
    <t-menu-item v-if="!item.children.length" :value="item.path" :to="item.path">
      <template #icon><t-icon v-if="item.icon" :name="item.icon" /></template>
      {{ item.title }}
    </t-menu-item>
    <t-submenu v-else :value="item.path" :title="item.title">
      <template #icon><t-icon v-if="item.icon" :name="item.icon" /></template>
      <menu-content :nav-data="item.children" :base-path="item.path" />
    </t-submenu>
  </template>
</template>

<script setup lang="ts">
import { computed, type PropType } from 'vue';
import type { RouteRecordRaw } from 'vue-router';

interface MenuItem {
  path: string;
  title: string;
  icon?: string;
  children: MenuItem[];
}

const props = defineProps({
  navData: { type: Array as PropType<RouteRecordRaw[]>, default: () => [] },
  basePath: { type: String, default: '' }
});

const menuItems = computed(() => buildMenu(props.navData, props.basePath));

function buildMenu(routes: RouteRecordRaw[], basePath = ''): MenuItem[] {
  return routes
    .filter((route) => route.meta?.hidden !== true)
    .map((route) => {
      const path = route.path.startsWith('/') ? route.path : `${basePath}/${route.path}`;
      return {
        path,
        title: String(route.meta?.title ?? ''),
        icon: typeof route.meta?.icon === 'string' ? route.meta.icon : undefined,
        children: buildMenu(route.children ?? [], path)
      };
    });
}
</script>
