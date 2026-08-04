import { defineStore } from 'pinia';
import STYLE_CONFIG from '@/config/style';

export const useSettingStore = defineStore('setting', {
  state: () => ({ ...STYLE_CONFIG }),
  getters: {
    showSidebar: (state) => state.layout === 'side',
    displayMode: (state): 'dark' | 'light' => {
      if (state.mode === 'auto') {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      }
      return state.mode;
    }
  },
  actions: {
    changeMode(mode: 'dark' | 'light' | 'auto') {
      this.mode = mode;
      const actualMode =
        mode === 'auto'
          ? window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light'
          : mode;
      document.documentElement.setAttribute('theme-mode', actualMode === 'dark' ? 'dark' : '');
    },
    toggleMode() {
      this.changeMode(this.displayMode === 'dark' ? 'light' : 'dark');
    },
    toggleSidebar() {
      this.isSidebarCompact = !this.isSidebarCompact;
    },
    initializeAppearance() {
      this.changeMode(this.mode);
    }
  },
  persist: {
    pick: ['mode', 'isSidebarCompact']
  }
});
