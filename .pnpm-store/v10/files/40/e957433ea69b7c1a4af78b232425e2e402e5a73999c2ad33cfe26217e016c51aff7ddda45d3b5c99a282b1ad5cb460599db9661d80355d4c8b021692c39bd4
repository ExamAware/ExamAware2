import { DefaultLocaleInfo } from '@vuepress/helper';
import { PluginFunction } from 'vuepress/core';
import { LocaleConfig } from 'vuepress/shared';

interface PhotoSwipePluginLocaleData {
    /**
     * Close button label text
     *
     * 关闭按钮标签文字
     */
    close: string;
    /**
     * Download button label text
     *
     * 下载按钮标签文字
     */
    download: string;
    /**
     * Full screen button label text
     *
     * 全屏按钮标签文字
     */
    fullscreen: string;
    /**
     * Zoom button label text
     *
     * 缩放按钮标签文字
     */
    zoom: string;
    /**
     * Previous image button label text
     *
     * 上一张图片按钮标签文字
     */
    arrowPrev: string;
    /**
     * Next image button label text
     *
     * 下一张图片按钮标签文字
     */
    arrowNext: string;
}

/**
 * Default locale info for PhotoSwipe plugin
 *
 * PhotoSwipe 插件的默认多语言信息
 */
declare const photoSwipeLocaleInfo: DefaultLocaleInfo<PhotoSwipePluginLocaleData>;

interface PhotoSwipePluginOptions {
    /**
     * Image selector
     *
     * 图片选择器
     *
     * @default "[vp-content] :not(a) > img:not([no-view])"
     */
    selector?: string[] | string;
    /**
     * Whether to enable the download button
     *
     * 是否启用下载按钮
     *
     * @default true
     */
    download?: boolean;
    /**
     * Whether to enable the fullscreen button
     *
     * 是否启用全屏按钮
     *
     * @default true
     */
    fullscreen?: boolean;
    /**
     * Whether close the current image when scrolling
     *
     * 是否在滚动时关闭当前图片
     *
     * @default true
     */
    scrollToClose?: boolean;
    /**
     * Locale config
     *
     * 国际化配置
     */
    locales?: LocaleConfig<PhotoSwipePluginLocaleData>;
}

/**
 * VuePress PhotoSwipe plugin
 *
 * VuePress PhotoSwipe 插件
 *
 * @param [options={}] - Plugin options / 插件选项
 *
 * @example
 * ```ts
 * import { photoSwipePlugin } from '@vuepress/plugin-photo-swipe'
 *
 * export default {
 *   plugins: [
 *     photoSwipePlugin({
 *       selector: '[vp-content] :not(a) > img:not([no-view])',
 *       download: true,
 *       fullscreen: true,
 *       scrollToClose: true,
 *     }),
 *   ],
 * }
 * ```
 */
declare const photoSwipePlugin: (options?: PhotoSwipePluginOptions) => PluginFunction;

export { photoSwipeLocaleInfo, photoSwipePlugin };
export type { PhotoSwipePluginLocaleData, PhotoSwipePluginOptions };
