import { ComputedRef } from 'vue';

/**
 * Reading time information
 *
 * 阅读时间信息
 */
interface ReadingTime {
    /**
     * Expected reading time in minutes
     *
     * 期望的阅读时间（分钟）
     */
    minutes: number;
    /**
     * Words count of current page
     *
     * 当前页的字数
     */
    words: number;
}
/**
 * Reading time plugin page data
 *
 * 阅读时间插件页面数据
 */
interface ReadingTimePluginPageData {
    readingTime: ReadingTime;
}

/**
 * Multi language config for `@vuepress/plugin-reading-time` plugin
 *
 * `@vuepress/plugin-reading-time` 插件的多语言配置
 */
interface ReadingTimePluginLocaleData {
    /**
     * Word template, `$word` will be automatically replaced by actual words
     *
     * 字数模板，模板中 `$word` 会被自动替换为字数
     */
    word: string;
    /**
     * Text for less than one minute
     *
     * 小于一分钟文字
     */
    less1Minute: string;
    /**
     * Time template
     *
     * 时间模板
     */
    time: string;
}

/**
 * Get reading time data of current page
 *
 * 获取当前页面的阅读时间数据
 *
 * @returns reading time data or null if plugin is disabled
 *
 * @example
 * ```ts
 * import { useReadingTimeData } from '@vuepress/plugin-reading-time/client'
 *
 * const readingTimeData = useReadingTimeData()
 * // { minutes: 1.1, words: 100 } or null
 * ```
 */
declare const useReadingTimeData: () => ComputedRef<ReadingTime | null>;

/**
 * Get reading time locale config
 *
 * 获取阅读时间多语言配置
 *
 * @returns reading time locale config or null if plugin is disabled
 */
declare const useReadingTimeLocaleConfig: () => ComputedRef<ReadingTimePluginLocaleData | null>;
/**
 * Reading time locale interface
 *
 * 阅读时间本地化接口
 */
interface ReadingTimeLocale {
    /**
     * Reading time text
     *
     * 阅读时间文字
     */
    time: string;
    /**
     * Words count text
     *
     * 字数统计文字
     */
    words: string;
}
/**
 * Get reading time locale data of current page
 *
 * 获取当前页面的阅读时间本地化数据
 *
 * @returns reading time locale data
 *
 * @example
 * ```ts
 * import { useReadingTimeLocale } from '@vuepress/plugin-reading-time/client'
 *
 * const readingTimeLocale = useReadingTimeLocale()
 * // { time: "1 minute", words: "100 words" }
 * ```
 */
declare const useReadingTimeLocale: () => ComputedRef<ReadingTimeLocale>;

/**
 * Get reading time locale text
 *
 * 获取阅读时间本地化文字
 *
 * @param readingTime - reading time data
 * @param locale - locale config
 * @returns localized reading time text
 *
 * @example
 * ```ts
 * getReadingTimeLocale(
 *   { minutes: 2.5, words: 500 },
 *   { less1Minute: "Less than 1 min", word: "$word words", time: "$time min" }
 * )
 * // { time: "3 min", words: "500 words" }
 * ```
 */
declare const getReadingTimeLocale: (readingTime: ReadingTime, locale: ReadingTimePluginLocaleData) => {
    time: string;
    words: string;
};

export { getReadingTimeLocale, useReadingTimeData, useReadingTimeLocale, useReadingTimeLocaleConfig };
export type { ReadingTime, ReadingTimeLocale, ReadingTimePluginLocaleData, ReadingTimePluginPageData };
