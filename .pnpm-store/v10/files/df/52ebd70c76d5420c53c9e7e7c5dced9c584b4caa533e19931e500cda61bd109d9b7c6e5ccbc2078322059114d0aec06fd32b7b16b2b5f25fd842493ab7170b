import { PluginFunction } from 'vuepress/core';
import { PageFrontmatter, LocaleConfig } from 'vuepress/shared';
import { ArtalkConfig } from 'artalk';
import { WalineInitOptions, WalineLocale } from '@waline/client';
import { DefaultLocaleInfo } from '@vuepress/helper';

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
 * Base comment plugin options
 *
 * 基础评论插件选项
 */
interface BaseCommentPluginOptions {
    /**
     * Whether enable comment by default
     *
     * 是否默认启用评论
     *
     * @default true
     */
    comment?: boolean;
    /**
     * The delay of DOM operation, in ms
     *
     * If the theme you are using has a switching animation, it is recommended to configure this option to `Switch animation duration + 200`
     *
     * 进行 DOM 操作的延时，单位 ms
     *
     * 如果你使用的主题有切换动画，建议配置此选项为 `切换动画时长 + 200`
     *
     * @default 800
     */
    delay?: number;
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
 * Giscus repository format
 *
 * Giscus 仓库格式
 */
type GiscusRepo = `${string}/${string}`;
/**
 * Giscus mapping types
 *
 * Giscus 映射类型
 */
type GiscusMapping = 'number' | 'og:title' | 'pathname' | 'specific' | 'title' | 'url';
/**
 * Giscus input position
 *
 * Giscus 输入框位置
 */
type GiscusInputPosition = 'bottom' | 'top';
/**
 * Giscus theme options
 *
 * Giscus 主题选项
 */
type GiscusTheme = 'catppuccin_frappe' | 'catppuccin_latte' | 'catppuccin_macchiato' | 'catppuccin_mocha' | 'cobalt' | 'dark_dimmed' | 'dark_high_contrast' | 'dark_protanopia' | 'dark_tritanopia' | 'dark' | 'fro' | 'gruvbox_dark' | 'gruvbox_light' | 'gruvbox' | 'light_high_contrast' | 'light_protanopia' | 'light_tritanopia' | 'light' | 'noborder_dark' | 'noborder_gray' | 'noborder_light' | 'preferred_color_scheme' | 'purple_dark' | 'transparent_dark' | `https://${string}`;
/**
 * Giscus comment options
 *
 * Giscus 评论选项
 */
interface GiscusOptions extends BaseCommentPluginOptions {
    /**
     * The name of repository to store discussions.
     *
     * 存放评论的仓库
     */
    repo: GiscusRepo;
    /**
     * The ID of repository to store discussions.
     *
     * 仓库 ID
     */
    repoId: string;
    /**
     * The name of the discussion category.
     *
     * 讨论分类
     */
    category: string;
    /**
     * The ID of the discussion category.
     *
     * 分类 ID
     */
    categoryId: string;
    /**
     * Page - discussion mapping.
     *
     * 页面 ↔️ discussion 映射关系
     *
     * @default "pathname"
     */
    mapping?: GiscusMapping;
    /**
     * Whether enable strict mapping
     *
     * 是否启用严格匹配
     *
     * @default true
     */
    strict?: boolean;
    /**
     * Whether enable lazy loading
     *
     * 是否启用懒加载
     *
     * @default true
     */
    lazyLoading?: boolean;
    /**
     * Whether enable reactions or not
     *
     * 是否启用主帖子上的反应
     *
     * @default true
     */
    reactionsEnabled?: boolean;
    /**
     * Input position
     *
     * 输入框的位置
     *
     * @default "top"
     */
    inputPosition?: GiscusInputPosition;
    /**
     * Giscus theme used in lightmode
     *
     * @description Should be a built-in theme keyword or a css link starting with `https://`
     *
     * Giscus 在日间模式下使用的主题
     *
     * @description 应为一个内置主题关键词或者一个 CSS 链接
     *
     * @default "light"
     */
    lightTheme?: GiscusTheme;
    /**
     * Giscus theme used in darkmode
     *
     * @description Should be a built-in theme keyword or a css link starting with `https://`
     *
     * Giscus 在夜间模式下使用的主题
     *
     * @description 应为一个内置主题关键词或者一个 CSS 链接
     *
     * @default "dark"
     */
    darkTheme?: GiscusTheme;
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

/**
 * Artalk comment plugin options
 *
 * Artalk 评论插件选项
 */
interface ArtalkPluginOptions extends Omit<Partial<ArtalkOptions>, 'avatarURLBuilder' | 'imgUploader'> {
    provider: 'Artalk';
}
/**
 * Giscus comment plugin options
 *
 * Giscus 评论插件选项
 */
interface GiscusPluginOptions extends Partial<GiscusOptions> {
    provider: 'Giscus';
}
/**
 * Twikoo comment plugin options
 *
 * Twikoo 评论插件选项
 */
interface TwikooPluginOptions extends Partial<TwikooOptions> {
    provider: 'Twikoo';
}
/**
 * Waline comment plugin options
 *
 * Waline 评论插件选项
 */
interface WalinePluginOptions extends Omit<Partial<WalineOptions>, 'highlighter' | 'imageUploader' | 'search' | 'texRenderer'> {
    provider: 'Waline';
    /**
     * Whether import meta icons
     *
     * 是否导入 Meta 图标
     *
     * @default true
     */
    metaIcon?: boolean;
    /**
     * Locale config for waline
     *
     * Waline 本地化配置
     */
    locales?: LocaleConfig<WalineLocaleData>;
}
/**
 * Comment plugin options
 *
 * 评论插件选项
 */
type CommentPluginOptions = ArtalkPluginOptions | GiscusPluginOptions | NoCommentPluginOptions | TwikooPluginOptions | WalinePluginOptions;

/**
 * VuePress comment plugin
 *
 * VuePress 评论插件
 *
 * @param options - Plugin options
 * 插件选项
 *
 * @returns VuePress plugin
 * VuePress 插件
 *
 * @example
 * ```ts
 * import { commentPlugin } from '@vuepress/plugin-comment'
 *
 * export default {
 *   plugins: [
 *     commentPlugin({
 *       provider: 'Waline',
 *       serverURL: 'https://waline.example.com',
 *     }),
 *   ],
 * }
 * ```
 */
declare const commentPlugin: (options: CommentPluginOptions) => PluginFunction;

/**
 * Default locale info for Waline
 */
declare const walineLocalesInfo: DefaultLocaleInfo<WalineLocaleData>;

export { commentPlugin, walineLocalesInfo };
export type { ArtalkOptions, ArtalkPluginOptions, CommentOptions, CommentPluginFrontmatter, CommentPluginOptions, GiscusInputPosition, GiscusMapping, GiscusOptions, GiscusPluginOptions, GiscusRepo, GiscusTheme, NoCommentPluginOptions, TwikooInitOptions, TwikooOptions, TwikooPluginOptions, WalineLocaleData, WalineOptions, WalinePluginOptions };
