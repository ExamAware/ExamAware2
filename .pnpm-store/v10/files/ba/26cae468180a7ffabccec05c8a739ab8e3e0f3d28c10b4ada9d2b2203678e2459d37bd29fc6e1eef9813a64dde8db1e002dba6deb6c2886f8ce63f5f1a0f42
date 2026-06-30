import { themeData as themeDataRaw } from '@internal/themeData';
import { ref } from 'vue';
export const themeData = ref(themeDataRaw);
/**
 * Use theme data
 *
 * 使用主题数据
 *
 * @returns Theme data ref object / 主题数据响应式引用对象
 */
export const useThemeData = () => themeData;
if (__VUEPRESS_DEV__ && (import.meta.webpackHot || import.meta.hot)) {
    __VUE_HMR_RUNTIME__.updateThemeData = (data) => {
        themeData.value = data;
    };
}
