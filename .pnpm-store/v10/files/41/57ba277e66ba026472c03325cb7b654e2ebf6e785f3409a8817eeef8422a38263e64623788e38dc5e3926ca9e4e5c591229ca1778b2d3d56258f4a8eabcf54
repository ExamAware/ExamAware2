import { Plugin } from 'vuepress/core';
import { MarkdownItFigureOptions } from '@mdit/plugin-figure';
import { MarkdownItImgMarkOptions } from '@mdit/plugin-img-mark';

interface MarkdownImagePluginOptions {
    /**
     * Whether render figure with standalone image
     *
     * 是否将单独的图片渲染为 figure
     *
     * @default false
     */
    figure?: MarkdownItFigureOptions | boolean;
    /**
     * Whether enable native image lazy loading
     *
     * 是否启用原生的图片懒加载。
     *
     * @default false
     */
    lazyload?: boolean;
    /**
     * Whether to enable gfm image id mark support
     *
     * 是否启用 GFM 图片 ID 标记。
     *
     * @default false
     */
    mark?: MarkdownItImgMarkOptions | boolean;
    /**
     * Whether to enable image size support
     *
     * 是否启用图片大小支持。
     *
     * @default false
     */
    size?: boolean;
    /**
     * Whether to enable obsidian image size support
     *
     * 是否启用 Obsidian 图片大小支持。
     *
     * @default false
     */
    obsidianSize?: boolean;
    /**
     * @deprecated
     *
     * Whether to enable legacy image size support
     *
     * 是否启用旧版图片大小支持。
     *
     * @default false
     */
    legacySize?: boolean;
}

/**
 * Create markdown image plugin
 *
 * 创建 markdown 图片插件
 *
 * @param options - Plugin options / 插件配置项
 *
 * @example
 * ```ts
 * import { markdownImagePlugin } from '@vuepress/plugin-markdown-image'
 *
 * markdownImagePlugin({
 *   figure: true,
 *   lazyload: true,
 *   mark: true,
 *   size: true,
 * })
 * ```
 */
declare const markdownImagePlugin: (options: MarkdownImagePluginOptions) => Plugin;

export { markdownImagePlugin };
export type { MarkdownImagePluginOptions };
