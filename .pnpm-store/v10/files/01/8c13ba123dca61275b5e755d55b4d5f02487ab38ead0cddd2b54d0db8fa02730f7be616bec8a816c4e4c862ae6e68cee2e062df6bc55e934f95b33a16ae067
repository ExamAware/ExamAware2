import { Logger, DefaultLocaleInfo } from '@vuepress/helper';
import { Page, PluginFunction } from 'vuepress/core';
import { PageFrontmatter, LocaleConfig } from 'vuepress/shared';

/**
 * Copyright information data
 *
 * 版权信息数据
 */
interface CopyrightInfoData {
    /**
     * Author information
     *
     * 作者信息
     */
    author?: string;
    /**
     * License information
     *
     * 协议信息
     */
    license?: string;
}
/**
 * Copyright plugin page data
 *
 * 版权插件页面数据
 */
interface CopyrightPluginPageData extends Record<string, unknown> {
    /**
     * Copyright information
     *
     * 版权信息
     */
    copyright?: CopyrightInfoData | string;
}

interface CopyrightPluginFrontmatter extends PageFrontmatter {
    copy?: boolean | {
        /**
         * Min length triggering copyright append
         *
         * 触发附加版权的最小长度
         *
         * @default 100
         */
        triggerLength?: number;
        /**
         * Max length that allows to copy
         *
         * @description 0 means unlimited
         *
         * 允许复制的最大长度
         *
         * @description 0 表示无限制
         *
         * @default 0
         */
        maxLength?: number;
        /**
         * Disable copy
         *
         * 禁用复制
         *
         * @default false
         */
        disableCopy?: boolean;
        /**
         * Disable selection
         *
         * 禁用选择
         *
         * @default false
         */
        disableSelection?: boolean;
    };
}

interface CopyrightPluginLocaleData {
    /**
     * Author text
     *
     * 作者文字
     *
     * @description `:author` will be replaced by author
     *
     * `:author` 将会被作者替换
     */
    author: string;
    /**
     * License text
     *
     * 协议文字
     *
     * @description `:license` will be replaced by current license
     *
     * `:license` 会被当前协议替换
     */
    license: string;
    /**
     * Link text
     *
     * 链接文字
     *
     * @description `:link` will be replaced by current page link
     *
     * `:link` 会替换为当前页面链接
     */
    link: string;
}

interface CopyrightPluginSharedOptions {
    /**
     * Default author information
     *
     * 默认作者信息
     */
    author?: string;
    /**
     * Default license information
     *
     * 默认协议信息
     */
    license?: string;
    /**
     * Canonical hostname with base
     *
     * @description This is useful when your content are deployed in multiple places
     *
     * 首选域名与部署目录
     *
     * @description 当你在多个站点部署内容时很有用。
     */
    canonical?: string;
    /**
     * Whether enabled globally
     *
     * 是否全局启用
     *
     * @default false
     */
    global?: boolean;
    /**
     * Disable copy
     *
     * 禁用复制
     *
     * @default false
     */
    disableCopy?: boolean;
    /**
     * Disable selection
     *
     * 禁用选择
     *
     * @default false
     */
    disableSelection?: boolean;
    /**
     * Min length triggering copyright append
     *
     * 触发附加版权的最小长度
     *
     * @default 100
     */
    triggerLength?: number;
    /**
     * Max length that allows to copy
     *
     * @description 0 means unlimited
     *
     * 允许复制的最大字数
     *
     * @description 0 表示无限制
     *
     * @default 0
     */
    maxLength?: number;
}

interface CopyrightPluginOptions extends CopyrightPluginSharedOptions {
    /**
     * Author getter
     *
     * 作者获取器
     *
     * @param page - Page object / 页面对象
     */
    authorGetter?: <ExtraPageData extends Record<string, unknown> = Record<never, never>, ExtraPageFrontmatter extends Record<string, unknown> = Record<string, unknown>, ExtraPageFields extends Record<string, unknown> = Record<never, never>>(page: Page<ExtraPageData, ExtraPageFrontmatter, ExtraPageFields>) => string | null;
    /**
     * License getter
     *
     * 协议信息获取器
     *
     * @param page - Page object / 页面对象
     */
    licenseGetter?: <ExtraPageData extends Record<string, unknown> = Record<never, never>, ExtraPageFrontmatter extends Record<string, unknown> = Record<string, unknown>, ExtraPageFields extends Record<string, unknown> = Record<never, never>>(page: Page<ExtraPageData, ExtraPageFrontmatter, ExtraPageFields>) => string | null;
    /**
     * Copyright getter
     *
     * 版权信息获取器
     *
     * @param page - Page object / 页面对象
     */
    copyrightGetter?: <ExtraPageData extends Record<string, unknown> = Record<never, never>, ExtraPageFrontmatter extends Record<string, unknown> = Record<string, unknown>, ExtraPageFields extends Record<string, unknown> = Record<never, never>>(page: Page<ExtraPageData, ExtraPageFrontmatter, ExtraPageFields>) => string | null;
    /**
     * Locales config for copyright
     *
     * 版权插件的多语言配置
     */
    locales?: LocaleConfig<CopyrightPluginLocaleData>;
}

declare const logger: Logger;
/**
 * Copyright plugin
 *
 * 版权插件
 *
 * @param options - Plugin options / 插件选项
 *
 * @example
 * ```ts
 * import { copyrightPlugin } from '@vuepress/plugin-copyright'
 *
 * export default {
 *   plugins: [
 *     copyrightPlugin({
 *       author: 'Your Name',
 *       license: 'MIT',
 *       global: true,
 *     }),
 *   ],
 * }
 * ```
 */
declare const copyrightPlugin: (options?: CopyrightPluginOptions) => PluginFunction;

/**
 * Default locale info for copyright plugin
 *
 * 版权插件的默认多语言信息
 */
declare const copyrightLocaleInfo: DefaultLocaleInfo<CopyrightPluginLocaleData>;

export { copyrightLocaleInfo, copyrightPlugin, logger };
export type { CopyrightInfoData, CopyrightPluginFrontmatter, CopyrightPluginLocaleData, CopyrightPluginOptions, CopyrightPluginPageData, CopyrightPluginSharedOptions };
