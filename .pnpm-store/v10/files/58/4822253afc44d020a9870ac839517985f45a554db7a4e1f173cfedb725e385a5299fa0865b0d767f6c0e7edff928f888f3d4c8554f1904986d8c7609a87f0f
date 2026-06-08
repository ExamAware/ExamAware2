import { Plugin } from 'vuepress/core';
import { MarkdownItTaskListOptions } from '@mdit/plugin-tasklist';
import { PluginSimple } from 'markdown-it';

/**
 * Options of markdown-ext plugin
 *
 * markdown-ext 插件选项
 */
interface MarkdownExtPluginOptions {
    /**
     * Whether enable standard GFM support
     *
     * 是否启用标准的 GitHub Favor Markdown 支持
     *
     * @default false
     */
    gfm?: boolean;
    /**
     * Whether convert `\n` in paragraphs into `<br>`s
     *
     * 是否将段落中的 `\n` 转换为 `<br>`
     *
     * @description enabled in gfm mode
     *
     * @default false
     */
    breaks?: boolean;
    /**
     * Whether convert URL-like text into links
     *
     * 是否将文字中的链接格式文字转换为链接
     *
     * @description enabled in gfm mode
     *
     * @default false
     */
    linkify?: boolean;
    /**
     * Whether to enable footnote format support
     *
     * 是否启用脚注格式支持。
     *
     * @description enabled in gfm mode
     *
     * @default false
     */
    footnote?: boolean;
    /**
     * Whether to enable tasklist format support
     *
     * 是否启用任务列表支持
     *
     * @description enabled in gfm mode
     *
     * @default false
     */
    tasklist?: MarkdownItTaskListOptions | boolean;
    /**
     * Whether to enable component support
     *
     * 是否启用组件支持
     *
     * @default false
     */
    component?: boolean;
    /**
     * Whether to enable v-pre wrapper.
     *
     * 是否启用 v-pre 容器。
     *
     * @default false
     */
    vPre?: boolean;
}

/**
 * Markdown extensions plugin
 *
 * Markdown 扩展插件
 *
 * @param options - Plugin options / 插件选项
 * @returns VuePress plugin / VuePress 插件
 *
 * @example
 * ```ts
 * import { markdownExtPlugin } from '@vuepress/plugin-markdown-ext'
 *
 * export default {
 *   plugins: [
 *     markdownExtPlugin({
 *       gfm: true,
 *       component: true,
 *       vPre: true,
 *     }),
 *   ],
 * }
 * ```
 */
declare const markdownExtPlugin: ({ gfm, breaks, linkify, footnote, tasklist, component, vPre, }: MarkdownExtPluginOptions) => Plugin;

/**
 * Component fence support plugin
 *
 * 组件代码块支持插件
 */
declare const component: PluginSimple;

/**
 * v-pre container support plugin
 *
 * v-pre 容器支持插件
 */
declare const vPre: PluginSimple;

export { component, markdownExtPlugin, vPre };
export type { MarkdownExtPluginOptions };
