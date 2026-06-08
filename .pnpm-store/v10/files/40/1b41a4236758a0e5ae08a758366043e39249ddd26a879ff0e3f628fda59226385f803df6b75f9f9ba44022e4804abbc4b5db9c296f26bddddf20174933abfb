import { DefaultLocaleInfo } from '@vuepress/helper';
import { LocaleConfig } from 'vuepress/shared';
import { PluginFunction, App } from 'vuepress/core';

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
 * Default locale info for `@vuepress/plugin-reading-time`
 */
declare const readingTimeLocaleInfo: DefaultLocaleInfo<ReadingTimePluginLocaleData>;

/**
 * Get word number of given string
 *
 * 获取给定字符串的字数
 *
 * @param content - content to count words
 * @returns word count
 *
 * @example
 * ```ts
 * getWordNumber('Hello world') // 2
 * getWordNumber('你好世界') // 4
 * ```
 */
declare const getWordNumber: (content: string) => number;
/**
 * Get reading time info
 *
 * 获取阅读时间信息
 *
 * @param content - content to calculate reading time
 * @param wordsPerMinute - reading speed in words per minute
 * @returns reading time information
 *
 * @default wordsPerMinute 300
 *
 * @example
 * ```ts
 * getReadingTime('Hello world', 300)
 * // { minutes: 0.01, words: 2 }
 * ```
 */
declare const getReadingTime: (content: string, wordsPerMinute?: number) => ReadingTime;

/**
 * Reading time plugin options
 *
 * 阅读时间插件选项
 */
interface ReadingTimePluginOptions {
    /**
     * Reading speed (words per minute)
     *
     * 每分钟阅读的字数
     *
     * @default 300
     */
    wordPerMinute?: number;
    /**
     * Locales config
     *
     * 多语言选项
     *
     * @see https://ecosystem.vuejs.press/plugins/reading-time.html#locales
     * @see https://ecosystem.vuejs.press/plugins/zh/reading-time.html#locales
     */
    locales?: LocaleConfig<ReadingTimePluginLocaleData>;
}

/**
 * Reading time plugin
 *
 * 阅读时间插件
 *
 * @param options - plugin options
 * @returns VuePress plugin function
 *
 * @example
 * ```ts
 * import { readingTimePlugin } from '@vuepress/plugin-reading-time'
 *
 * export default {
 *   plugins: [
 *     readingTimePlugin({
 *       wordPerMinute: 300
 *     })
 *   ]
 * }
 * ```
 */
declare const readingTimePlugin: (options?: ReadingTimePluginOptions) => PluginFunction;

/**
 * Composition API to use `@vuepress/plugin-reading-time`
 *
 * 使用 `@vuepress/plugin-reading-time` 的组合式 API
 *
 * @param app - VuePress app instance
 * @param options - plugin options
 *
 * @example
 * ```ts
 * import { useReadingTimePlugin } from '@vuepress/plugin-reading-time'
 *
 * export default (options) => (app) => {
 *   useReadingTimePlugin(app, {
 *     wordPerMinute: 250
 *   })
 *
 *   return {
 *     name: 'vuepress-plugin-xxx'
 *   }
 * }
 * ```
 */
declare const useReadingTimePlugin: (app: App, options?: ReadingTimePluginOptions) => void;
/**
 * Composition API to remove `@vuepress/plugin-reading-time`
 *
 * 移除 `@vuepress/plugin-reading-time` 的组合式 API
 *
 * @param app - VuePress app instance
 *
 * @example
 * ```ts
 * import { removeReadingTimePlugin } from '@vuepress/plugin-reading-time'
 *
 * export default (options) => (app) => {
 *   removeReadingTimePlugin(app)
 *
 *   return {
 *     name: 'vuepress-plugin-xxx'
 *   }
 * }
 * ```
 */
declare const removeReadingTimePlugin: (app: App) => void;

export { getReadingTime, getWordNumber, readingTimeLocaleInfo, readingTimePlugin, removeReadingTimePlugin, useReadingTimePlugin };
export type { ReadingTime, ReadingTimePluginLocaleData, ReadingTimePluginOptions, ReadingTimePluginPageData };
