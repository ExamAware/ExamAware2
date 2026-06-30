import type { CopyCodePluginLocaleConfig } from '../types.js';
import '@vuepress/helper/message.css';
import '../styles/copy-code.css';
import '../styles/vars.css';
/**
 * Options for the useCopyCode composable
 *
 * useCopyCode 组合式 API 的选项
 */
export interface UseCopyCodeOptions {
    /**
     * Locale config for copy button
     *
     * 复制按钮的多语言配置
     */
    locales: CopyCodePluginLocaleConfig;
    /**
     * Code block selector
     *
     * 代码块选择器
     */
    selector: string;
    /**
     * Elements selector in code blocks to ignore when copying
     *
     * 复制时忽略的代码块中的元素选择器
     */
    ignoreSelector?: string;
    /**
     * Inline code selector
     *
     * 行内代码选择器
     */
    inlineSelector?: string;
    /**
     * Prompt message display time
     *
     * 提示消息显示时间
     *
     * @default 2000
     */
    duration: number;
    /**
     * Whether to display on the mobile devices
     *
     * 是否在移动设备上显示
     *
     * @default false
     */
    showInMobile?: boolean;
    /**
     * Transform pre element before copy
     *
     * 转换复制前的 pre 元素
     *
     * @description
     * For example, deleting certain elements before copying, or inserting copyright information.
     *
     * 例如，在复制前删除特定元素，或插入版权信息。
     *
     * @param preElement `<pre>` clone Node
     *
     * @example
     * ```ts
     * {
     *   transform(pre) {
     *     // Remove all `.ignore` elements
     *     pre.querySelectorAll('.ignore').forEach((el) => el.remove())
     *     // insert copyright
     *     pre.innerHTML += `\n Copied by VuePress`
     *   }
     * }
     * ```
     */
    transform?: (preElement: HTMLElement) => void;
}
/**
 * Use copy code function
 *
 * 使用复制代码功能
 *
 * @example
 * ```ts
 * // .vuepress/client.ts
 * import { useCopyCode } from '@vuepress/plugin-copy-code/client'
 *
 * export default {
 *   setup() {
 *     useCopyCode({
 *       selector: '.custom-code',
 *       duration: 3000,
 *       showInMobile: true
 *     })
 *   }
 * }
 * ```
 */
export declare const useCopyCode: ({ selector, ignoreSelector, inlineSelector, duration, locales, showInMobile, transform, }: UseCopyCodeOptions) => void;
