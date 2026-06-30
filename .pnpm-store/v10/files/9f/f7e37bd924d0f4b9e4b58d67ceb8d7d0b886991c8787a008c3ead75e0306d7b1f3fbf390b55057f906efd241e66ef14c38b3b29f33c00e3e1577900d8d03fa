import { ReadingTime } from '@vuepress/plugin-reading-time';
import { h as Author, i as ThemeBasePageFrontmatter } from './slots-Bt1PQIHa.js';

type PageType = "article" | "home" | "slide" | "page";
interface PageInfoData extends Record<string, unknown> {
    /**
     * Article title
     */
    title: string;
    /**
     * Article short title
     */
    shortTitle: string;
    /**
     * Page icon
     */
    icon?: string;
    /**
     * Whether this page should be indexed
     *
     * used in other functions, e.g.: sidebar and catalog
     */
    index?: boolean;
    /**
     * The order of this page in same directory
     */
    order?: number;
}
interface ArticleInfoData extends PageInfoData {
    /**
     * Type
     */
    type: PageType;
    /**
     * Article author
     */
    author?: Author | false;
    /**
     * Writing date info
     */
    date?: number;
    /**
     * Article category
     */
    category?: string[];
    /**
     * Article tag
     */
    tag?: string[];
    /**
     * Reading time info
     */
    readingTime?: ReadingTime;
    /**
     * Article excerpt
     */
    excerpt: string;
    /**
     * Whether is encrypted
     */
    isEncrypted?: true;
    /**
     * Whether is original
     */
    isOriginal?: true;
    /**
     * Sticky info
     */
    sticky?: number | boolean;
    /**
     * Cover image
     */
    cover?: string;
}

/**
 * Type of page information
 *
 * 页面信息类型
 */
type PageInfoType = "Author" | "Category" | "Date" | "Original" | "PageView" | "Tag" | "ReadingTime" | "Word";

interface BlogLocaleData extends Record<string, string> {
    /** 文章文字 */
    article: string;
    /** 文章列表文字 */
    articleList: string;
    /** 分类文字 */
    category: string;
    /** 标签文字 */
    tag: string;
    /** 时间轴文字 */
    timeline: string;
    /** 时间轴标题文字 */
    timelineTitle: string;
    /** 全部文字 */
    all: string;
    /** 个人介绍 */
    intro: string;
    /** 星标文章 */
    star: string;
    /** 空文字 */
    empty: string;
}
interface PaginationLocaleData {
    /**
     * Previous page button label text
     *
     * 上一页文字
     */
    prev: string;
    /**
     * Next page button label text
     *
     * 下一页文字
     */
    next: string;
    /**
     * Navigation hint label text
     *
     * 跳转提示文字
     */
    navigate: string;
    /**
     * Navigation button label text
     *
     * 跳转按钮文字
     */
    action: string;
    /**
     * Error text when invalid page number
     *
     * @description `$page` will be replaced by total page number automatically
     *
     * 页码错误文字
     *
     * @description 其中 `$page` 会自动替换为当前的总页数
     */
    errorText: string;
}
/** @deprecated */
interface DeprecatedBlogLocaleData {
    /**
     * @deprecated Add the following styles to `.vuepress/styles/index.scss`:
     *
     * ```css
     * .vp-blogger-avatar {
     *   border-radius: 50%;
     * }
     * ```
     */
    roundAvatar?: never;
}
/**
 * 博客选项
 *
 * Blog configuration
 *
 * @kind locale
 */
interface BlogLocaleOptions extends DeprecatedBlogLocaleData {
    /**
     * Name of the Blogger
     *
     * 博主名称
     *
     * @default themeConfig.author
     */
    name?: string;
    /**
     * Blogger avatar, must be an absolute path
     *
     * 博主头像，应为绝对路径
     *
     * @default themeConfig.navbar.logo
     */
    avatar?: string;
    /**
     * Motto, slogan or a short description
     *
     * 口号、座右铭或介绍语
     */
    description?: string;
    /**
     * Blogger introduction page link
     *
     * 博主的个人介绍页地址
     */
    intro?: string;
    /**
     * 媒体链接配置
     *
     * Media links configuration
     *
     * @example
     *
     * ```js
     * {
     *   QQ: "http://wpa.qq.com/msgrd?v=3&uin=1178522294&site=qq&menu=yes",
     *   Qzone: "https://1178522294.qzone.qq.com/",
     *   Gmail: "mailto:mister-hope@outlook.com",
     *   Zhihu: "https://www.zhihu.com/people/mister-hope",
     *   Steam: "https://steamcommunity.com/id/Mr-Hope/",
     *   Weibo: "https://weibo.com/misterhope",
     * }
     * ```
     */
    medias?: Record<string, {
        icon: string;
        link: string;
    } | string>;
    /**
     * Custom text for timeline
     *
     * 时间轴自定义文字
     *
     * @default "Yesterday once more"
     */
    timeline?: string;
    /**
     * Article number per page
     *
     * 每页的文章数量
     *
     * @default 10
     */
    articlePerPage?: number;
    /**
     * Article info displayed in article list
     *
     * 文章列表中展示的文章信息
     *
     * @default ["Author", "Original", "Date", "PageView", "ReadingTime", "Category", "Tag"]
     */
    articleInfo?: PageInfoType[];
}
type BlogLocaleConfig = BlogLocaleOptions;

interface ThemeHomePageFrontmatter extends ThemeBasePageFrontmatter {
    home: true;
    /**
     * Hero text, if not set, will use the title of the current locale
     *
     * Hero 文本，如果没有设置，则使用当前语言环境的标题
     *
     * @default siteLocale.title
     */
    heroText?: string;
    /**
     * Hero tagline, if not set, will use the description of the current locale
     *
     * Hero 标语，如果没有设置，则使用当前语言环境的描述
     *
     * @default siteLocale.description
     */
    tagline?: string;
    /**
     * Hero image alt, if not set, will use the hero text
     *
     * Hero 图片替代文字，如果没有设置，则使用 Hero 文本
     *
     * @default heroText
     */
    heroAlt?: string;
    /**
     * Hero image
     *
     * Hero 图片
     */
    heroImage?: string;
    /**
     * Hero image used in dark mode
     *
     * 深色模式下使用的 Hero 图片
     */
    heroImageDark?: string;
    /**
     * Hero image CSS style
     */
    heroImageStyle?: Record<string, string> | string;
    /**
     * Whether to use full screen for hero
     *
     * 是否使用全屏 Hero
     *
     * @default false
     */
    heroFullScreen?: boolean;
    /**
     * Hero style
     *
     * Hero 样式
     */
    heroStyle?: string;
    /**
     * Hero background image
     *
     * Hero 背景图片
     */
    bgImage?: string | false;
    /**
     * Hero background image used in dark mode
     *
     * 深色模式下使用的 Hero 背景图片
     */
    bgImageDark?: string | false;
    /**
     * Hero background image CSS style
     *
     * Hero 背景图片 CSS 样式
     */
    bgImageStyle?: Record<string, string> | string;
}

interface ThemeBlogHomeProjectOptions {
    /**
     * Project name
     *
     * 项目名称
     */
    name: string;
    /**
     * Project description
     *
     * 项目描述
     */
    desc?: string;
    /**
     * Project link
     *
     * 项目链接
     */
    link: string;
    /**
     * Project icon
     *
     * @description image link or icon fontClass are supported, as well as `"link"`、`"project"`、`"book"`、`"article"`、`"friend"`
     *
     * 项目图标
     *
     * @description 支持图片链接或者图标字体类，同时也支持 `"link"`、`"project"`、`"book"`、`"article"`、`"friend"`
     */
    icon?: string;
    /**
     * Background color
     *
     * @description Can be css variables
     *
     * 背景颜色
     *
     * @description 可以是 CSS 变量
     */
    background?: string;
}
interface ThemeBlogHomePageFrontmatter extends ThemeHomePageFrontmatter {
    layout: "Blog";
    /**
     * @default true
     */
    hero?: boolean;
    /**
     * Projects
     *
     * 项目
     */
    projects: ThemeBlogHomeProjectOptions[];
}

export type { ArticleInfoData as A, BlogLocaleData as B, DeprecatedBlogLocaleData as D, PageInfoType as P, ThemeBlogHomeProjectOptions as T, BlogLocaleConfig as a, PaginationLocaleData as b, BlogLocaleOptions as c, ThemeHomePageFrontmatter as d, PageType as e, PageInfoData as f, ThemeBlogHomePageFrontmatter as g };
