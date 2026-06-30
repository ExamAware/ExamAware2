import { Plugin } from 'vuepress/core';
import { MarkdownItKatexOptions } from '@mdit/plugin-katex-slim';
import { MarkdownItMathjaxOptions } from '@mdit/plugin-mathjax-slim';

/**
 * Options for KaTeX plugin
 *
 * KaTeX 插件选项
 */
interface MarkdownKatexPluginOptions extends Omit<MarkdownItKatexOptions, 'transformer'> {
    type?: 'katex';
    /**
     * Whether enable copy plugin
     *
     * 是否启用复制插件
     *
     * @default false
     */
    copy?: boolean;
    /**
     * Whether enable mhchem plugin
     *
     * 是否启用 mhchem 插件
     *
     * @default false
     */
    mhchem?: boolean;
}
/**
 * Options for MathJax plugin
 *
 * MathJax 插件选项
 */
interface MarkdownMathjaxPluginOptions extends Omit<MarkdownItMathjaxOptions, 'transformer'> {
    type?: 'mathjax';
}
/**
 * Options for Math plugin
 *
 * 数学插件选项
 */
type MarkdownMathPluginOptions = MarkdownKatexPluginOptions | MarkdownMathjaxPluginOptions;

/**
 * Math plugin for VuePress
 *
 * VuePress 数学插件
 *
 * @param [options={}] - Plugin options / 插件选项
 * @param options.type - Math renderer type / 数学渲染器类型
 *
 * @example
 * ```ts
 * import { markdownMathPlugin } from '@vuepress/plugin-markdown-math'
 *
 * export default {
 *   plugins: [
 *     markdownMathPlugin({
 *       type: 'katex'
 *     })
 *   ]
 * }
 * ```
 */
declare const markdownMathPlugin: ({ type, ...options }?: MarkdownMathPluginOptions) => Plugin;

export { markdownMathPlugin };
export type { MarkdownKatexPluginOptions, MarkdownMathPluginOptions, MarkdownMathjaxPluginOptions };
