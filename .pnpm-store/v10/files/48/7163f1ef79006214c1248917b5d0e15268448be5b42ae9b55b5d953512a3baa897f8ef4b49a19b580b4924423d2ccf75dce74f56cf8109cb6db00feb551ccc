import { PluginSimple } from 'markdown-it';
import { Plugin } from 'vuepress/core';

/**
 * Markdown-it plugin for code tabs
 *
 * 用于代码选项卡的 Markdown-it 插件
 */
declare const codeTabs: PluginSimple;

/**
 * Markdown tab plugin configuration
 *
 * Markdown 选项卡插件配置
 */
interface MarkdownTabPluginOptions {
    /**
     * Whether to enable code tabs
     *
     * 是否启用代码选项卡
     *
     * @default false
     */
    codeTabs?: boolean;
    /**
     * Whether to enable tabs
     *
     * 是否启用选项卡
     *
     * @default false
     */
    tabs?: boolean;
}

/**
 * Markdown tab plugin
 *
 * Markdown 选项卡插件
 *
 * @param options - Plugin options / 插件选项
 * @returns VuePress plugin / VuePress 插件
 *
 * @example
 * ```ts
 * import { markdownTabPlugin } from '@vuepress/plugin-markdown-tab'
 *
 * export default {
 *   plugins: [
 *     markdownTabPlugin({
 *       codeTabs: true,
 *       tabs: true,
 *     }),
 *   ],
 * }
 * ```
 */
declare const markdownTabPlugin: (options: MarkdownTabPluginOptions) => Plugin;

/**
 * Markdown-it plugin for tabs
 *
 * 用于选项卡的 Markdown-it 插件
 */
declare const tabs: PluginSimple;

export { codeTabs, markdownTabPlugin, tabs };
export type { MarkdownTabPluginOptions };
