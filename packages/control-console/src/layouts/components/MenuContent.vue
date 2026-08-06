<template>
  <template v-for="item in menuItems" :key="item.path">
    <t-menu-item v-if="!item.children.length" :value="item.path" :to="item.path">
      <template #icon><ConsoleIcon v-if="item.icon" :name="item.icon" /></template>
      {{ item.title }}
    </t-menu-item>
    <t-submenu v-else :value="item.path" :title="item.title">
      <template #icon><ConsoleIcon v-if="item.icon" :name="item.icon" /></template>
      <t-menu-item
        v-for="child in item.children"
        :key="child.path"
        :value="child.path"
        :to="child.path"
      >
        {{ child.title }}
      </t-menu-item>
    </t-submenu>
  </template>
</template>

<script setup lang="ts">
import { computed, type PropType } from 'vue';
import type { RouteRecordRaw } from 'vue-router';

import { useSessionStore } from '@/store';
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

const session = useSessionStore();
const menuItems = computed(() => buildMenu(props.navData, props.basePath));

function buildMenu(routes: RouteRecordRaw[], basePath = ''): MenuItem[] {
  return routes
    .filter((route) => route.meta?.hidden !== true)
    .filter((route) => {
      const roles = route.meta?.roles;
      return !Array.isArray(roles) || roles.includes(session.user?.role ?? '');
    })
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
