import { ref, toValue } from 'vue';
import { onContentUpdated } from 'vuepress/client';
import { getHeaders } from '../utils/index.js';
/**
 * Composables for page headers
 *
 * 页面标题的组合函数
 *
 * @param options - Options for getting headers / 获取标题的选项
 *
 * @returns Reactive headers reference / 响应式标题引用
 */
export const useHeaders = (options = {}) => {
    const headersRef = ref([]);
    onContentUpdated((reason) => {
        headersRef.value =
            reason === 'beforeUnmount' ? [] : getHeaders(toValue(options));
    });
    return headersRef;
};
