import { defineStore } from 'pinia';
import type { RouteRecordNameGeneric } from 'vue-router';

export interface RouteTab {
  path: string;
  fullPath: string;
  title: string;
  name?: RouteRecordNameGeneric;
  isHome?: boolean;
}

const HOME_TAB: RouteTab = {
  path: '/overview',
  fullPath: '/overview',
  title: '运行总览',
  name: 'Overview',
  isHome: true
};

export const useTabsRouterStore = defineStore('tabsRouter', {
  state: () => ({
    tabs: [{ ...HOME_TAB }] as RouteTab[],
    refreshing: false
  }),
  actions: {
    append(tab: RouteTab) {
      const index = this.tabs.findIndex((item) => item.path === tab.path);
      if (index === -1) this.tabs.push(tab);
      else this.tabs.splice(index, 1, { ...this.tabs[index], ...tab });
    },
    remove(path: string) {
      this.tabs = this.tabs.filter((item) => item.isHome || item.path !== path);
    },
    closeLeft(path: string) {
      const index = this.tabs.findIndex((item) => item.path === path);
      if (index < 0) return;
      this.tabs = this.tabs.filter((item, itemIndex) => item.isHome || itemIndex >= index);
    },
    closeRight(path: string) {
      const index = this.tabs.findIndex((item) => item.path === path);
      if (index < 0) return;
      this.tabs = this.tabs.filter((item, itemIndex) => item.isHome || itemIndex <= index);
    },
    closeOthers(path: string) {
      this.tabs = this.tabs.filter((item) => item.isHome || item.path === path);
    },
    reorder(currentIndex: number, targetIndex: number) {
      if (currentIndex === targetIndex || currentIndex < 0 || targetIndex < 0) return;
      const next = [...this.tabs];
      const [moved] = next.splice(currentIndex, 1);
      if (!moved) return;
      next.splice(targetIndex, 0, moved);
      this.tabs = next;
    },
    setRefreshing(value: boolean) {
      this.refreshing = value;
    }
  },
  persist: {
    pick: ['tabs']
  }
});
