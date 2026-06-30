import type { Plugin } from 'vuepress';
import type { LinksCheckPluginOptions } from './options.js';
/**
 * VuePress plugin to check dead links in markdown files
 *
 * VuePress 插件，用于检查 Markdown 文件中的死链接
 *
 * @param options - Plugin options / 插件选项
 *
 * @example
 * ```ts
 * import { linksCheckPlugin } from '@vuepress/plugin-links-check'
 *
 * export default {
 *   plugins: [
 *     // Basic usage
 *     linksCheckPlugin(),
 *
 *     // With options
 *     linksCheckPlugin({
 *       dev: true,
 *       build: 'error', // Fail build on dead links
 *       exclude: [
 *         /^https?:\/\/example\.com/,
 *         'mailto:example@example.com',
 *         (link, isDev) => isDev && link.startsWith('/api/')
 *       ]
 *     })
 *   ]
 * }
 * ```
 */
export declare const linksCheckPlugin: ({ dev, build, exclude: ignore, }: LinksCheckPluginOptions) => Plugin;
