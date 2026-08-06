<template>
  <t-aside :class="sideNavClass">
    <t-menu
      class="side-nav-menu"
      :value="active"
      :collapsed="isCompact"
      :expanded="expanded"
      :expand-mutex="true"
      :width="isCompact ? '64px' : '232px'"
      @expand="expanded = $event"
    >
      <template #logo>
        <span
          class="side-nav__brand"
          role="button"
          tabindex="0"
          @click="router.push('/overview')"
          @keydown.enter="router.push('/overview')"
        >
          <img class="side-nav__brand-logo" :src="ExamAwareLogo" alt="ExamAware" />
          <span v-if="!isCompact" class="side-nav__brand-copy">
            <strong>ExamAware</strong>
            <span>集控中心</span>
          </span>
        </span>
      </template>
      <menu-content :nav-data="asyncRouterList" />
      <template #operations>
        <t-tooltip :content="isCompact ? '展开侧边栏' : '收起侧边栏'" placement="right">
          <t-button
            :aria-label="isCompact ? '展开侧边栏' : '收起侧边栏'"
            theme="default"
            variant="text"
            shape="square"
            @click="settingStore.toggleSidebar"
          >
            <template #icon>
              <ConsoleIcon :name="isCompact ? 'chevron-right' : 'chevron-left'" />
            </template>
          </t-button>
        </t-tooltip>
        <span v-show="!isCompact" class="version-container"
          >集控中心 {{ consolePackage.version }}</span
        >
      </template>
    </t-menu>
  </t-aside>
</template>

<script setup lang="ts">
import type { MenuValue } from 'tdesign-vue-next';
import { computed, onMounted, onUnmounted, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import ExamAwareLogo from '../../../../desktop/src/renderer/src/assets/logo.svg';
import { asyncRouterList, getActive } from '@/router';
import { prefix } from '@/config/global';
import { useSettingStore } from '@/store';
import consolePackage from '../../../package.json';
import MenuContent from './MenuContent.vue';

const router = useRouter();
const settingStore = useSettingStore();
const isNarrow = ref(false);
const expanded = ref<MenuValue[]>([]);
const isCompact = computed(() => isNarrow.value || settingStore.isSidebarCompact);
const active = computed(() => getActive());
const sideNavClass = computed(() => [
  `${prefix}-side-nav`,
  { [`${prefix}-side-nav--compact`]: isCompact.value }
]);
let mediaQuery: MediaQueryList | undefined;

function syncExpanded() {
  const parts = active.value.split('/').filter(Boolean);
  expanded.value = parts.map((_, index) => `/${parts.slice(0, index + 1).join('/')}`);
}

function syncNarrow(event: MediaQueryList | MediaQueryListEvent) {
  isNarrow.value = event.matches;
}

watch(active, syncExpanded);
onMounted(() => {
  syncExpanded();
  mediaQuery = window.matchMedia('(max-width: 991px)');
  syncNarrow(mediaQuery);
  mediaQuery.addEventListener('change', syncNarrow);
});
onUnmounted(() => mediaQuery?.removeEventListener('change', syncNarrow));
</script>
