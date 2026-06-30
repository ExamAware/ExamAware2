import type { App, Page } from 'vuepress/core';
export interface PageTextOptions {
    /**
     * Whether convert text to single line content
     *
     * 是否将文字转换成单行内容
     *
     * @default false
     */
    singleLine?: boolean;
    /**
     * Length of text
     *
     * @description Text length will be the minimal possible length reaching this value
     *
     * 文字的长度
     *
     * @description 文字的长度会尽可能的接近这个值
     *
     * @default 300
     */
    length?: number;
    /**
     * Tags to be removed
     *
     * @description Table and code blocks are removed by default.
     *
     * 需要移除的标签
     *
     * @description 默认情况下表格和代码块会被移除
     *
     * @default ['table', 'pre']
     */
    removedTags?: string[];
}
/**
 * Get plain text from html content
 *
 * 从 HTML 内容中获取纯文本
 *
 * @param html - HTML content / HTML 内容
 * @param base - Base url of site / 站点的基础 URL
 * @param options - Options for getting text / 获取文本的选项
 *
 * @returns Plain text content / 纯文本内容
 */
export declare const getText: (html: string, base: string, { length, singleLine, removedTags, }?: PageTextOptions) => string;
/**
 * Get plain text of page content
 *
 * 获取页面内容的纯文本
 *
 * @param app - VuePress App / VuePress 应用
 * @param page - VuePress Page / VuePress 页面
 * @param options - Options for getting text / 获取文本的选项
 *
 * @returns Plain text of page content / 页面内容的纯文本
 */
export declare const getPageText: ({ options: { base } }: App, { contentRendered, }: Page<Record<string, any>, Record<string, any>, Record<string, any>>, options?: PageTextOptions) => string;
