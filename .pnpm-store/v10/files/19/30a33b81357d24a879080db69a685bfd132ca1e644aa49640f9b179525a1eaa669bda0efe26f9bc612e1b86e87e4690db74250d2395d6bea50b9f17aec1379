import { MaybeRefOrGetter, Ref } from 'vue';
import { ArtalkConfig } from 'artalk';
import { B as BaseCommentPluginOptions, d as GiscusOptions } from './giscus-DkqKwsTo.js';
export { c as GiscusInputPosition, a as GiscusMapping, G as GiscusRepo, b as GiscusTheme } from './giscus-DkqKwsTo.js';
import { WalineInitOptions, WalineLocale } from '@waline/client';
import { PageFrontmatter } from 'vuepress/shared';

/**
 * Comment plugin frontmatter
 *
 * 评论插件 frontmatter
 */
interface CommentPluginFrontmatter extends PageFrontmatter {
    /**
     * Whether enable comment
     *
     * 是否启用评论
     *
     * @default true
     */
    comment?: boolean;
    /**
     * Comment identifier
     *
     * 评论标识符
     */
    commentID?: string;
    /**
     * Whether enable pageviews
     *
     * 是否启用访问量
     *
     * @description Only available when using waline
     *
     * 仅在使用 Waline 时可用
     *
     * @default true
     */
    pageview?: boolean;
}

/**
 * Artalk comment options
 *
 * Artalk 评论选项
 */
type ArtalkOptions = BaseCommentPluginOptions & Partial<Omit<ArtalkConfig, 'el' | 'pageKey'>>;

/**
 * No comment plugin options
 *
 * 禁用评论插件选项
 */
interface NoCommentPluginOptions extends BaseCommentPluginOptions {
    provider?: 'None';
    comment?: never;
}

/**
 * Twikoo initialization options
 *
 * Twikoo 初始化选项
 */
interface TwikooInitOptions {
    /**
     * Environment ID for TenCloud or deployment URL for Vercel
     *
     * 腾讯云环境 ID 或 Vercel 部署 URL
     */
    envId: string;
    /**
     * TenCloud region
     *
     * 腾讯云区域
     *
     * @default "ap-shanghai"
     */
    region?: string;
}
/**
 * Twikoo comment options
 *
 * Twikoo 评论选项
 */
type TwikooOptions = BaseCommentPluginOptions & TwikooInitOptions;

/**
 * Waline locale data
 *
 * Waline 语言包数据
 */
type WalineLocaleData = Partial<WalineLocale>;
/**
 * Waline comment options
 *
 * Waline 评论选项
 */
interface WalineOptions extends BaseCommentPluginOptions, Omit<WalineInitOptions, 'comment' | 'el' | 'locale'> {
    /**
     * Whether enable page views count by default
     *
     * 是否启用访问量
     *
     * @default true
     */
    pageview?: boolean;
}

/**
 * Comment options
 *
 * 评论选项
 */
type CommentOptions = ArtalkOptions | GiscusOptions | NoCommentPluginOptions | TwikooOptions | WalineOptions;

declare const defineArtalkConfig: (options: MaybeRefOrGetter<ArtalkOptions>) => void;
declare const useArtalkOptions: () => Ref<ArtalkOptions, ArtalkOptions>;
declare const defineGiscusConfig: (options: MaybeRefOrGetter<GiscusOptions>) => void;
declare const useGiscusOptions: () => Ref<GiscusOptions, GiscusOptions>;
declare const defineTwikooConfig: (options: MaybeRefOrGetter<TwikooOptions>) => void;
declare const useTwikooOptions: () => Ref<TwikooOptions, TwikooOptions>;
declare const defineWalineConfig: (options: MaybeRefOrGetter<WalineOptions>) => void;
declare const useWalineOptions: () => Ref<WalineOptions, WalineOptions>;

export { GiscusOptions, defineArtalkConfig, defineGiscusConfig, defineTwikooConfig, defineWalineConfig, useArtalkOptions, useGiscusOptions, useTwikooOptions, useWalineOptions };
export type { ArtalkOptions, CommentOptions, CommentPluginFrontmatter, NoCommentPluginOptions, TwikooInitOptions, TwikooOptions, WalineLocaleData, WalineOptions };
