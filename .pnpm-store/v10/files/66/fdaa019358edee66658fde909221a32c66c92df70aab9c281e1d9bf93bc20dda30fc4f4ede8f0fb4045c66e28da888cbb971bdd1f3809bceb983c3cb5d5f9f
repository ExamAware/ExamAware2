import { Plugin } from 'vuepress/core';
import { LocaleConfig } from 'vuepress';
import { PluginSimple } from 'markdown-it';

interface MarkdownPreviewPluginLocaleData {
    /**
     * Toggle code button text
     *
     * 切换代码按钮文字
     */
    toggle: string;
}

interface MarkdownPreviewPluginOptions {
    /**
     * Localization config for preview component
     *
     * 预览组件的本地化配置
     */
    locales?: LocaleConfig<MarkdownPreviewPluginLocaleData>;
}

/**
 * Markdown preview plugin
 *
 * Markdown 预览插件
 *
 * @param options - plugin options / 插件选项
 *
 * @example
 * ```ts
 * import { markdownPreviewPlugin } from '@vuepress/plugin-markdown-preview'
 *
 * export default {
 *   plugins: [
 *     markdownPreviewPlugin(),
 *   ],
 * }
 * ```
 */
declare const markdownPreviewPlugin: (options?: MarkdownPreviewPluginOptions) => Plugin;

declare const preview: PluginSimple;

export { markdownPreviewPlugin, preview };
export type { MarkdownPreviewPluginOptions };
