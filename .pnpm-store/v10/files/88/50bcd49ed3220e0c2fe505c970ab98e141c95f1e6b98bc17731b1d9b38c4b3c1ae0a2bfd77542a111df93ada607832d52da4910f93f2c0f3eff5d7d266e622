import { PhotoSwipeOptions as PhotoSwipeOptions$1 } from 'photoswipe';
import { Ref, MaybeRefOrGetter, App } from 'vue';

/**
 * PhotoSwipe options for VuePress
 *
 * VuePress 中的 PhotoSwipe 选项
 */
type PhotoSwipeOptions = Omit<PhotoSwipeOptions$1, 'dataSource' | 'index'>;
/**
 * PhotoSwipe options ref
 *
 * PhotoSwipe 选项响应式引用
 */
type PhotoSwipeOptionsRef = Ref<PhotoSwipeOptions>;
/**
 * Define PhotoSwipe config
 *
 * 定义 PhotoSwipe 配置
 *
 * @param options - PhotoSwipe options / PhotoSwipe 选项
 *
 * @example
 * ```ts
 * import { definePhotoSwipeConfig } from '@vuepress/plugin-photo-swipe/client'
 *
 * definePhotoSwipeConfig({
 *   bgOpacity: 0.8,
 *   spacing: 0.1,
 * })
 * ```
 */
declare const definePhotoSwipeConfig: (options: MaybeRefOrGetter<PhotoSwipeOptions>) => void;
/**
 * Get PhotoSwipe options
 *
 * 获取 PhotoSwipe 选项
 */
declare const usePhotoSwipeOptions: () => PhotoSwipeOptionsRef;
declare const injectPhotoSwipeConfig: (app: App) => void;

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
 * PhotoSwipe behavior options
 *
 * PhotoSwipe 行为选项
 */
interface PhotoSwipeBehaviorOptions {
    /**
     * Whether to enable download button
     *
     * 是否启用下载按钮
     */
    download?: boolean;
    /**
     * Whether to enable fullscreen button
     *
     * 是否启用全屏按钮
     */
    fullscreen?: boolean;
    /**
     * Whether to close when scrolling
     *
     * 是否在滚动时关闭
     */
    scrollToClose?: boolean;
}

/**
 * Options for usePhotoSwipe composable
 *
 * usePhotoSwipe 组合式函数的选项
 */
interface UsePhotoSwipeOptions extends PhotoSwipeBehaviorOptions {
    /**
     * Image selector
     *
     * 图片选择器
     */
    selector: string[] | string;
    /**
     * Locale data
     *
     * 多语言数据
     */
    locales: Record<string, Record<`${keyof PhotoSwipePluginLocaleData}Title`, string>>;
}
/**
 * Use PhotoSwipe composable
 *
 * 使用 PhotoSwipe 组合式函数
 *
 * @param options - PhotoSwipe options / PhotoSwipe 选项
 *
 * @example
 * ```ts
 * import { usePhotoSwipe } from '@vuepress/plugin-photo-swipe/client'
 *
 * usePhotoSwipe({
 *   selector: 'img',
 *   locales: {
 *     '/': {
 *       closeTitle: 'Close',
 *       downloadTitle: 'Download',
 *     },
 *   },
 *   download: true,
 *   fullscreen: true,
 * })
 * ```
 */
declare const usePhotoSwipe: ({ selector, locales, download, fullscreen, scrollToClose, }: UsePhotoSwipeOptions) => void;

/**
 * PhotoSwipe state interface
 *
 * PhotoSwipe 状态接口
 */
interface PhotoSwipeState {
    /**
     * Open PhotoSwipe at specific index
     *
     * 在指定索引打开 PhotoSwipe
     *
     * @param index - Image index / 图片索引
     */
    open: (index: number) => void;
    /**
     * Close PhotoSwipe
     *
     * 关闭 PhotoSwipe
     */
    close: () => void;
    /**
     * Destroy PhotoSwipe instance
     *
     * 销毁 PhotoSwipe 实例
     */
    destroy: () => void;
}
/**
 * Create PhotoSwipe instance
 *
 * 创建 PhotoSwipe 实例
 *
 * @param images - Image links / 图片链接
 * @param options - PhotoSwipe options / PhotoSwipe 选项
 *
 * @example
 * ```ts
 * import { createPhotoSwipe } from '@vuepress/plugin-photo-swipe/client'
 *
 * const state = await createPhotoSwipe([
 *   'https://example.com/image1.jpg',
 *   'https://example.com/image2.jpg',
 * ], {
 *   download: true,
 *   fullscreen: true,
 * })
 *
 * // Open first image
 * state.open(0)
 * ```
 */
declare const createPhotoSwipe: (images: string[], { scrollToClose, download, fullscreen, ...photoSwipeOptions }: PhotoSwipeBehaviorOptions & PhotoSwipeOptions) => Promise<PhotoSwipeState>;

export { createPhotoSwipe, definePhotoSwipeConfig, injectPhotoSwipeConfig, usePhotoSwipe, usePhotoSwipeOptions };
export type { PhotoSwipeBehaviorOptions, PhotoSwipeOptions, PhotoSwipeOptionsRef, PhotoSwipePluginLocaleData, UsePhotoSwipeOptions };
