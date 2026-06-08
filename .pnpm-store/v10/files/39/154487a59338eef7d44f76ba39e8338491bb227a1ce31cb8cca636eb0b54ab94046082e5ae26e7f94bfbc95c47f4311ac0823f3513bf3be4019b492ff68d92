import { ExactLocaleConfig } from '@vuepress/helper/client';

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

type CopyrightPluginClientOptions = CopyrightPluginSharedOptions;

declare const setupCopyright: (options: CopyrightPluginClientOptions, locales: ExactLocaleConfig<CopyrightPluginLocaleData>) => void;

export { setupCopyright };
export type { CopyrightPluginClientOptions };
