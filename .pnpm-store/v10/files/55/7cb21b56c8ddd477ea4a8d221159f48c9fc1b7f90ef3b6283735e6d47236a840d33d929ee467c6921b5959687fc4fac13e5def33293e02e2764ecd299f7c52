import type { ComputedRef, MaybeRefOrGetter } from 'vue';
/**
 * Last updated information
 *
 * 最后更新信息
 */
export interface LastUpdated {
    /**
     * The date object of the last updated time
     *
     * 最后更新时间的日期对象
     */
    date: Date;
    /**
     * The ISO string of the last updated time
     *
     * 最后更新时间的 ISO 字符串
     */
    iso: string;
    /**
     * The formatted text of the last updated time
     *
     * 最后更新时间的格式化文本
     */
    text: string;
    /**
     * The locale of the last updated time
     *
     * 最后更新时间的语言环境
     */
    locale: string;
}
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
export declare const useLastUpdated: (enabled?: MaybeRefOrGetter<boolean>) => ComputedRef<LastUpdated | null>;
