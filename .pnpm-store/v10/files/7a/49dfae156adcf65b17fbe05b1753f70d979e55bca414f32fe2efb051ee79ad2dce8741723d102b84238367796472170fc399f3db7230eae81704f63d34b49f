import { computed, toValue } from 'vue';
import { useData } from 'vuepress/client';
import { useGitLocale } from './useGitLocales.js';
/**
 * Last updated composable
 *
 * 最后更新组合式函数
 *
 * @param enabled - Whether to enable last updated
 *
 * 是否启用最后更新
 *
 * @default true
 */
export const useLastUpdated = (enabled = true) => {
    const { lang, page } = useData();
    const locale = useGitLocale();
    return computed(() => {
        if (!toValue(enabled))
            return null;
        const timeStamp = page.value.git?.updatedTime ?? page.value.git?.changelog?.[0].time;
        if (!timeStamp)
            return null;
        const date = new Date(timeStamp);
        const text = new Intl.DateTimeFormat(lang.value, {
            dateStyle: 'short',
            timeStyle: 'short',
        }).format(timeStamp);
        return {
            date,
            text,
            iso: date.toISOString(),
            locale: locale.value.latestUpdateAt,
        };
    });
};
