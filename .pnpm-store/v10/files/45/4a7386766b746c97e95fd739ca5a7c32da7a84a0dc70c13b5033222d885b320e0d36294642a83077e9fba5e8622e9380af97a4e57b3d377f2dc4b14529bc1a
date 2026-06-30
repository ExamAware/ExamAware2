import type { App, Page } from 'vuepress/core';
/**
 * Get raw content of excerpt from page content
 *
 * 从页面内容中获取摘要的原始内容
 *
 * @param content - Raw content of page / 页面的原始内容
 * @param separator - Excerpt separator / 摘要分隔符
 *
 * @returns Raw content of excerpt / 摘要的原始内容
 */
export declare const getPageRawExcerpt: (content: string, separator?: string) => string | undefined;
/**
 * Options for `getPageExcerpt`
 */
export interface PageExcerptOptions {
    /**
     * Excerpt separator
     *
     * 摘要分隔符
     *
     * @default "<!-- more -->"
     */
    separator?: string;
    /**
     * Length of excerpt
     *
     * @description Excerpt length will be the minimal possible length reaching this value
     *
     * 摘要的长度
     *
     * @description 摘要的长度会尽可能的接近这个值
     *
     * @default 300
     */
    length?: number;
    /**
     * Tags which is considered as custom elements
     *
     * @description This is used to determine whether a tag is a custom element since all unknown tags are removed in excerpt.
     *
     * 被认为是自定义元素的标签
     *
     * @description 用于判断一个标签是否是自定义元素，因为在摘要中，所有的未知标签都会被移除。
     */
    isCustomElement?: (tagName: string) => boolean;
    /**
     * Whether keep page title (first h1) in excerpt
     *
     * 是否保留页面标题 (第一个 h1)
     *
     * @default false
     */
    keepPageTitle?: boolean;
    /**
     * Whether preserve tags like line numbers and highlight lines for code blocks
     *
     * 是否保留代码块的标签，诸如行号和高亮行
     *
     * @default false
     */
    keepFenceDom?: boolean;
}
/**
 * Get excerpt content of a page
 *
 * 获取页面的摘要内容
 *
 * @param app - VuePress App / VuePress 应用
 * @param page - VuePress Page / VuePress 页面
 * @param excerptOptions - Excerpt behavior options / 摘要行为选项
 *
 * @returns Page excerpt / 页面摘要
 */
export declare const getPageExcerpt: ({ markdown, options: { base } }: App, { content, contentRendered, filePath, filePathRelative, frontmatter }: Page, { isCustomElement, separator, length, keepPageTitle, keepFenceDom, }?: PageExcerptOptions) => string;
