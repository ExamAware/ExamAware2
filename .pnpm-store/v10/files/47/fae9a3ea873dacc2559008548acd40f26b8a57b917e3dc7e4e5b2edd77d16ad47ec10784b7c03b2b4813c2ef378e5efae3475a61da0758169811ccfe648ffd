import type { PageHeader } from 'vuepress/shared';
import type { GetHeadersOptions, HeaderLevels } from '../../shared/index.js';
export type HeaderItem = Omit<PageHeader, 'children'> & {
    element: HTMLHeadingElement;
    children: HeaderItem[];
};
export declare const resolveHeaders: (headers: HeaderItem[], levels?: HeaderLevels) => HeaderItem[];
export declare const getHeadersFromDom: (selector?: string, ignore?: string[]) => HeaderItem[];
/**
 * Get headers of current page.
 *
 * 获取当前页面的标题
 *
 * @param options - Options for getting headers / 获取标题的选项
 *
 * @returns Array of header items / 标题项数组
 */
export declare const getHeaders: ({ selector, levels, ignore, }?: GetHeadersOptions) => HeaderItem[];
