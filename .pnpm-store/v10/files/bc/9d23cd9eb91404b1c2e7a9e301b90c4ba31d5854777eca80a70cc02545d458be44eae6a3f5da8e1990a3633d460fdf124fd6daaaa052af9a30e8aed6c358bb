import { PluginObject } from 'vuepress/core';

/**
 * Options for RTL plugin
 *
 * RTL 插件选项
 */
interface RTLPluginOptions {
    /**
     * RTL locales
     *
     * RTL 语言路径
     *
     * @default ['/']
     */
    locales?: string[];
    /**
     * RTL selector
     *
     * RTL 选择器
     *
     * @default { 'html': { dir: 'rtl' } }
     */
    selector?: {
        [cssSelector: string]: {
            [attr: string]: string;
        };
    };
}
/**
 * Create RTL plugin
 *
 * 创建 RTL 插件
 *
 * @param options - Plugin options
 *
 * @example
 * ```ts
 * import { rtlPlugin } from '@vuepress/plugin-rtl'
 *
 * export default {
 *   plugins: [
 *     rtlPlugin({
 *       locales: ['/ar/', '/he/'],
 *       selector: { 'html': { dir: 'rtl' } }
 *     })
 *   ]
 * }
 * ```
 */
declare const rtlPlugin: (options?: RTLPluginOptions) => PluginObject;

export { rtlPlugin };
export type { RTLPluginOptions };
