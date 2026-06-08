import { inject, readonly, ref } from 'vue';
import { getDarkMode } from '../utils/index.js';
export const darkModeSymbol = Symbol(__VUEPRESS_DEV__ ? 'darkMode' : '');
const darkmode = ref(false);
// Ensure darkmode is initialized only once in client-side
if (typeof document !== 'undefined') {
    darkmode.value = getDarkMode();
    const mutationObserver = new MutationObserver(() => {
        darkmode.value = getDarkMode();
    });
    mutationObserver.observe(document.documentElement, {
        attributeFilter: ['data-theme'],
        attributes: true,
    });
}
/**
 * Get darkmode status
 *
 * 获取暗色模式状态
 *
 * @returns Readonly darkmode ref / 只读的暗色模式响应式引用
 */
export const useDarkMode = () => readonly(inject(darkModeSymbol, darkmode));
