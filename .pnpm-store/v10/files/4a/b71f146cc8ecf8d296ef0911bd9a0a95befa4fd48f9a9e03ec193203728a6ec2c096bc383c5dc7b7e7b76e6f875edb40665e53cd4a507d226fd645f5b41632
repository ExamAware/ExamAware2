import { Plugin } from 'vuepress/core';
import { MarkdownItIncludeOptions } from '@mdit/plugin-include';

/**
 * Options for @vuepress/plugin-markdown-include
 *
 * @vuepress/plugin-markdown-include 插件的选项
 */
type MarkdownIncludePluginOptions = Omit<MarkdownItIncludeOptions, 'currentPath'>;

/**
 * Markdown include plugin
 *
 * Markdown 导入插件
 *
 * @param options - Plugin options / 插件选项
 *
 * @example
 * ```ts
 * import { markdownIncludePlugin } from '@vuepress/plugin-markdown-include'
 *
 * export default {
 *   plugins: [
 *     markdownIncludePlugin({
 *       deep: true,
 *       useComment: true,
 *     }),
 *   ],
 * }
 * ```
 */
declare const markdownIncludePlugin: (options: MarkdownIncludePluginOptions) => Plugin;

export { markdownIncludePlugin };
export type { MarkdownIncludePluginOptions };
