import { Plugin } from 'vuepress/core';
import { MarkdownItAttrsOptions } from '@mdit/plugin-attrs';
import { MarkdownItStylizeConfig } from '@mdit/plugin-stylize';

interface MarkdownStylizePluginOptions {
    /**
     * Whether to enable align support
     *
     * 是否启用自定义对齐支持。
     *
     * @default false
     */
    align?: boolean;
    /**
     * Whether to enable attr support
     *
     * 是否启用属性支持。
     *
     * @default false
     */
    attrs?: MarkdownItAttrsOptions | boolean;
    /**
     * Whether to enable superscript format support
     *
     * 是否启用上角标格式支持。
     *
     * @default false
     */
    sup?: boolean;
    /**
     * Whether to enable subscript format support
     *
     * 是否启用下角标格式支持。
     *
     * @default false
     */
    sub?: boolean;
    /**
     * Whether to enable mark format support
     *
     * 是否启用标注支持。
     *
     * @default false
     */
    mark?: boolean;
    /**
     * Whether to enable spoiler support
     *
     * 是否启用剧透支持。
     *
     * @default false
     */
    spoiler?: boolean;
    /**
     * Customizing token stylize
     *
     * 自定义标记样式。
     */
    custom?: MarkdownItStylizeConfig[];
}

/**
 * Markdown stylize plugin
 *
 * Markdown 样式化插件
 *
 * @param options - plugin options / 插件选项
 *
 * @example
 * ```ts
 * import { markdownStylizePlugin } from '@vuepress/plugin-markdown-stylize'
 *
 * export default {
 *   plugins: [
 *     markdownStylizePlugin({
 *       align: true,
 *       attrs: true,
 *       mark: true,
 *       spoiler: true,
 *       sub: true,
 *       sup: true,
 *     }),
 *   ],
 * }
 * ```
 */
declare const markdownStylizePlugin: ({ attrs, align, custom, mark, spoiler, sup, sub, }: MarkdownStylizePluginOptions) => Plugin;

export { markdownStylizePlugin };
export type { MarkdownStylizePluginOptions };
