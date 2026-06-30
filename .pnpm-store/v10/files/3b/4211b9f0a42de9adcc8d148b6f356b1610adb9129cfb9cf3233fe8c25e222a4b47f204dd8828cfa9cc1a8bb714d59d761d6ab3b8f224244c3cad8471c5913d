import { App, ThemeFunction, PluginConfig, Page } from 'vuepress/core';
import { PageFrontmatter, LocaleData } from 'vuepress/shared';
import { ThemeData as ThemeData$1 } from '@vuepress/plugin-theme-data';
import { LinksCheckPluginOptions } from '@vuepress/plugin-links-check';
import { MarkdownChartPluginOptions } from '@vuepress/plugin-markdown-chart';
import { MarkdownExtPluginOptions } from '@vuepress/plugin-markdown-ext';
import { MarkdownHintPluginOptions } from '@vuepress/plugin-markdown-hint';
import { MarkdownImagePluginOptions } from '@vuepress/plugin-markdown-image';
import { MarkdownIncludePluginOptions } from '@vuepress/plugin-markdown-include';
import { MarkdownMathPluginOptions } from '@vuepress/plugin-markdown-math';
import { MarkdownStylizePluginOptions } from '@vuepress/plugin-markdown-stylize';
import { MarkdownTabPluginOptions } from '@vuepress/plugin-markdown-tab';
import { PrismjsPluginOptions } from '@vuepress/plugin-prismjs';
import { RevealJsPluginOptions } from '@vuepress/plugin-revealjs';
import { ShikiPluginOptions } from '@vuepress/plugin-shiki';
import { MarkdownEnhancePluginOptions } from 'vuepress-plugin-md-enhance';
import { BackToTopPluginOptions } from '@vuepress/plugin-back-to-top';
import { CatalogPluginOptions } from '@vuepress/plugin-catalog';
import { CommentPluginOptions, CommentOptions } from '@vuepress/plugin-comment';
import { CopyCodePluginOptions } from '@vuepress/plugin-copy-code';
import { CopyrightPluginOptions } from '@vuepress/plugin-copyright';
import { DocSearchPluginOptions } from '@vuepress/plugin-docsearch';
import { FeedPluginOptions } from '@vuepress/plugin-feed';
import { GitPluginPageData, GitPluginOptions } from '@vuepress/plugin-git';
import { IconPluginOptions } from '@vuepress/plugin-icon';
import { MeiliSearchPluginOptions } from '@vuepress/plugin-meilisearch';
import { NoticeOptions, NoticePluginOptions } from '@vuepress/plugin-notice';
import { PhotoSwipePluginOptions } from '@vuepress/plugin-photo-swipe';
import { PwaPluginOptions } from '@vuepress/plugin-pwa';
import { ReadingTime, ReadingTimePluginPageData, ReadingTimePluginOptions } from '@vuepress/plugin-reading-time';
import { RedirectPluginOptions } from '@vuepress/plugin-redirect';
import { SearchPluginOptions } from '@vuepress/plugin-search';
import { SeoPluginPageData, SeoPluginOptions } from '@vuepress/plugin-seo';
import { SitemapPluginOptions } from '@vuepress/plugin-sitemap';
import { SlimSearchPluginOptions } from '@vuepress/plugin-slimsearch';
import { WatermarkPluginOptions } from '@vuepress/plugin-watermark';
import { ComponentPluginOptions } from 'vuepress-plugin-components';
import { BlogPluginPageData, BlogPluginOptions, BlogTypeOptions } from '@vuepress/plugin-blog';
import { GetHeadersOptions } from '@vuepress/helper/shared';
import { DefaultLocaleInfo } from '@vuepress/helper';
import { CSSProperties } from 'vue';

/**
 * @deprecated You should use scss style files in v2 and avoid using it
 */
declare const checkLegacyStyle: (app: App) => void;

type AuthorName = string;
interface AuthorInfo {
    /**
     * Author name
     *
     * 作者姓名
     */
    name: string;
    /**
     * Author website
     *
     * 作者网站
     */
    url?: string;
    /**
     * Author email
     *
     * 作者 Email
     */
    email?: string;
}
type Author = AuthorName | AuthorName[] | AuthorInfo | AuthorInfo[];

declare const getAuthor: (author: Author | false | undefined, canDisable?: boolean) => AuthorInfo[];
declare const getStringArray: (value: string[] | string | undefined, optionName: string) => string[];
declare const getCategory: (category: string[] | string | undefined) => string[];
declare const getTag: (tag: string[] | string | undefined) => string[];

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

type DarkModeOptions = "switch" | "auto" | "toggle" | "enable" | "disable";
interface OutlookLocaleData {
    /**
     * Theme Color
     */
    themeColor: string;
    /**
     * Theme mode
     */
    darkmode: string;
    /**
     * Theme mode
     */
    fullscreen: string;
}
interface AppearanceLocaleData {
    outlookLocales: {
        /**
         * Theme Color
         *
         * 主题色
         */
        themeColor: string;
        /**
         * Theme mode
         *
         * 夜间模式
         */
        darkmode: string;
        /**
         * Fullscreen text
         *
         * 全屏文字
         */
        fullscreen: string;
    };
}
interface DeprecatedAppearanceOptions {
    /**
     * @deprecated Use `plugins.icon.assets` instead
     */
    iconAssets?: never;
    /**
     * @deprecated Use `plugins.icon.prefix` instead
     */
    iconPrefix?: never;
}
/**
 * @kind root
 */
interface AppearanceOptions extends DeprecatedAppearanceOptions {
    /**
     * Whether enable pure mode
     *
     * 是否开启纯净模式
     *
     * @default false
     */
    pure?: boolean;
    /**
     * Whether enable focus mode
     *
     * @description Focus mode will be enabled by default when the `pure` mode is enabled
     * Fill in a number to indicate the delay time
     *
     * 是否开启沉浸模式
     *
     * @description 当 `pure` 模式启用时，沉浸模式将被默认启用，填入数字表示延迟时间
     *
     * @default false
     */
    focus?: number | boolean;
    /**
     * Dark mode options
     *
     * - `"switch"`: switch between dark, light and auto (default)
     * - `"toggle"`: toggle between lightmode and darkmode
     * - `"auto"`: Automatically decide whether to apply dark mode based on user device’s color-scheme or current time
     * - `"enable"`: only dark mode
     * - `"disable"`: disable dark mode
     *
     * 深色模式选项
     *
     * - `"switch"`: 在深色模式，浅色模式和自动之间切换 (默认)
     * - `"toggle"`: 在深色模式和浅色模式之间切换
     * - `"auto"`: 自动根据用户设备主题或当前时间决定是否应用深色模式
     * - `"enable"`: 强制深色模式
     * - `"disable"`: 禁用深色模式
     *
     * @default "auto-switch"
     */
    darkmode?: DarkModeOptions;
    /**
     * Whether show external link icon
     *
     * 是否显示外部链接图标
     *
     * @default true
     */
    externalLinkIcon?: boolean;
    /**
     * Whether enable theme color picker
     *
     * 是否启用主题色选择器
     *
     * @default false
     */
    themeColor?: boolean;
    /**
     * Whether display print button in desktop mode
     *
     * 是否在桌面模式下显示打印按钮
     *
     * @default true
     */
    print?: boolean;
    /**
     * Full screen button
     *
     * 全屏按钮
     *
     * @default false
     */
    fullscreen?: boolean;
}
type AppearanceConfig = AppearanceOptions;

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

interface EncryptLocaleData {
    /**
     * Aria label for encrypt icon
     *
     * 加密图标的无障碍标签
     */
    iconLabel: string;
    /**
     * Password placeholder
     *
     * 密码输入框的默认占位符
     */
    placeholder: string;
    /**
     * Whether remember password
     *
     * 是否记忆密码
     */
    remember: string;
    /**
     * Password error hint
     *
     * 密码错误提示
     */
    errorHint: string;
}
type PasswordOptions = string | string[] | {
    password: string | string[];
    hint: string;
};
/**
 * Encrypt Options
 *
 * 加密选项
 *
 * @kind root
 */
interface EncryptOptions {
    /**
     * Whether encrypt globally
     *
     * 是否全局加密
     *
     * @default false
     */
    global?: boolean;
    /**
     * Admin passwords, which has the highest authority
     *
     * 最高权限密码
     */
    admin?: PasswordOptions;
    /**
     * Encrypt Configuration
     *
     * @example
     *
     * ```json
     * {
     *   // This will encrypt the entire guide directory and both passwords will be available
     *   "/guide/": ["1234", "5678"],
     *   // this will only encrypt /config/page.html
     *   "/config/page.html": {
     *     password: "1234"
     *     hint: "This is a hint"
     *   }
     * }
     * ```
     *
     * 加密配置
     *
     * @example
     *
     * ```json
     * {
     *   // 这会加密整个 guide 目录，并且两个密码都是可用的
     *   "/guide/": ["1234", "5678"],
     *   // 这只会加密 /config/page.html
     *   "/config/page.html": {
     *     password: "1234"
     *     hint: "这是一个提示"
     *   }
     * }
     * ```
     */
    config?: Record<string, PasswordOptions>;
}
interface PasswordConfig {
    tokens: string[];
    hint?: string;
}
/**
 * Encrypt Config
 *
 * 加密配置
 *
 * @kind root
 */
interface EncryptConfig {
    /**
     * Whether encrypt globally
     *
     * 是否全局加密
     *
     * @default false
     */
    global?: boolean;
    /**
     * Admin passwords, which has the highest authority
     *
     * 最高权限密码
     */
    admin?: PasswordConfig;
    /**
     * Encrypt Configuration
     *
     * 加密配置
     */
    config?: Record<string, PasswordConfig>;
}

interface FeatureLocaleData {
    /**
     * Blog related i18n config
     *
     * 博客相关多语言配置
     */
    blogLocales: BlogLocaleData;
    /**
     * Pagination related i18n config
     *
     * 分页相关多语言配置
     */
    paginationLocales: PaginationLocaleData;
    /**
     * Encrypt related i18n config
     *
     * 加密相关多语言配置
     */
    encryptLocales: EncryptLocaleData;
}
interface FeatureLocaleOptions {
    /**
     * Blog feature options
     *
     * 博客功能配置
     */
    blog?: BlogLocaleOptions;
}
interface FeatureLocaleConfig {
    blog?: BlogLocaleConfig;
}
/**
 * @kind root
 */
interface FeatureOptions {
    /**
     * Encrypt config
     *
     * 加密配置
     */
    encrypt?: EncryptOptions;
    /**
     * Whether enable hotReload for features that requires app to restart
     *
     * @description These features includes blog support and structure sidebar feature
     *
     * 是否为需要重启整个 app 的功能启用热更新
     *
     * @description 这些功能包括博客支持和结构侧边栏功能
     *
     * @default app.env.isDebug
     */
    hotReload?: boolean;
}
interface FeatureConfig extends FeatureLocaleConfig {
    /**
     * Encrypt config
     *
     * 加密配置
     */
    encrypt: EncryptConfig;
}

interface InfoOptions {
    /**
     * Site favicon
     *
     * 站点图标
     */
    favicon?: string;
    /**
     * Domain which to be deployed to
     *
     * 网站部署域名
     */
    hostname?: string;
    /**
     * Global default author
     *
     * 全局默认作者
     */
    author?: Author;
    /**
     * Global default license
     *
     * 全局默认协议
     */
    license?: string;
    /**
     * Extra i18n sites
     *
     * @description key is the name of language, and value is the path of site, `:route` will be replaced by current route
     *
     * 额外的多语言站点
     *
     * @description 键是语言的名称，值是站点的路径，`:route` 会被替换为当前路由
     */
    extraLocales?: Record<string, string>;
}
type InfoConfig = Omit<InfoOptions, "favicon" | "hostname">;

type LocaleDataToOption<LocaleData> = {
    [Key in keyof LocaleData]?: Partial<LocaleData[Key]>;
};

/**
 * 页脚选项
 *
 * Footer options
 */
interface FooterLocaleOptions {
    /**
     * The default content for the footer, supports HTMLString.
     *
     * 页脚的默认内容，支持 HTMLString
     */
    footer?: string;
    /**
     * The default copyright info, set it to `false` to disable it by default.
     *
     * 默认的版权信息，设置为 `false` 来默认禁用它
     */
    copyright?: string | false;
    /**
     * Whether to display footer by default
     *
     * 是否默认显示页脚
     *
     * @default false
     */
    displayFooter?: boolean;
}

interface DocsRepoLocaleOptions {
    /**
     * Pattern of edit link, we provide built-in support for GitHub, Gitlab, Gitee, Bitbucket
     *
     * 编辑链接的匹配，我们已经为 GitHub、Gitlab、Gitee 和 Bitbucket 提供了内置支持
     *
     * @example ":repo/edit/:branch/:path"
     */
    editLinkPattern?: string;
    /**
     * The repo of your docs
     *
     * 文档仓库
     *
     * @default themeConfig.repo
     */
    docsRepo?: string;
    /**
     * The branch of your docs
     *
     * 文档所在分支
     *
     * @default "main"
     */
    docsBranch?: string;
    /**
     * Docs dir location in repo
     *
     * 文档在仓库中的目录
     *
     * @default ""
     */
    docsDir?: string;
}

interface MetaLocateData {
    /**
     * Author label text
     *
     * 作者文字
     */
    author: string;
    /**
     * Writing date label text
     *
     * 写作日期文字
     */
    date: string;
    /**
     * Label text marked as original
     *
     * 标记原创的文字
     */
    origin: string;
    /**
     * Page views label text
     *
     * 访问量文字
     */
    views: string;
    /**
     * Tag label text
     *
     * 标签文字
     */
    tag: string;
    /**
     * Category label text
     *
     * 分类文字
     */
    category: string;
    /**
     * Expect reading time label text
     *
     * 期望阅读时间文字
     */
    readingTime: string;
    /**
     * Words label Text
     *
     * 文章字数
     */
    words: string;
    /**
     * Table of contents
     *
     * 此页内容
     */
    toc: string;
    /**
     * Previous link
     *
     * 上一页
     */
    prev: string;
    /**
     * Next link
     *
     * 下一页
     */
    next: string;
    /**
     * Contributors text
     *
     * 贡献者
     */
    contributors: string;
    /**
     * Edit link text
     *
     * 编辑此页
     */
    editLink: string;
    /**
     * Print button
     *
     * 打印按钮
     */
    print: string;
}
interface MetaLocaleOptions {
    /**
     * Whether to show "Last Updated" or not
     *
     * 是否显示页面最后更新时间
     *
     * @default true
     */
    lastUpdated?: boolean;
    /**
     * Whether to show "changelog" or not
     *
     * 是否显示页面变更历史
     *
     * @default false
     */
    changelog?: boolean;
    /**
     * Whether to show "Contributors" or not
     *
     * @description `true` means `meta`
     *
     * 是否显示页面贡献者
     *
     * @description `true` 表示 `meta`
     *
     * @default "meta"
     */
    contributors?: "content" | "meta" | boolean;
    /**
     * Whether to show "Edit this page" or not
     *
     * 是否展示编辑此页链接
     *
     * @default true
     */
    editLink?: boolean;
}

/**
 * Base nav item, displayed as text
 */
interface NavItemOptions {
    /**
     * Text of item
     *
     * 项目文字
     */
    text: string;
    /**
     * Icon of item
     *
     * 项目图标
     */
    icon?: string;
    /**
     * Aria label of item
     *
     * 项目无障碍标签
     */
    ariaLabel?: string;
}
/**
 * Options for `<AutoLink>`
 */
interface AutoLinkOptions extends NavItemOptions {
    /**
     * Link of item
     *
     * 当前页面链接
     */
    link: string;
    /**
     * Rel of `<a>` tag
     *
     * `<a>` 标签的 `rel` 属性
     */
    rel?: string;
    /**
     * Target of `<a>` tag
     *
     * `<a>` 标签的 `target` 属性
     */
    target?: string;
    /**
     * RegExp mode to be active
     *
     * 匹配激活的正则表达式
     */
    activeMatch?: string;
    /**
     * Whether it's active only when exact match
     *
     * 是否仅在完全匹配时激活
     */
    exact?: boolean;
}

/**
 * Base nav group, has nav items children
 */
interface NavGroup<Child> extends NavItemOptions {
    /**
     * Link prefix of current group
     *
     * 当前分组的页面前缀
     */
    prefix?: string;
    /**
     * Link of current group
     *
     * 当前分组的链接
     */
    link?: string;
    /**
     * Children of current group
     *
     * 当前分组的子项
     */
    children: Child[];
}
type NavbarLinkOptions = AutoLinkOptions | string;
type NavbarGroupOptions = NavGroup<NavbarLinkOptions | NavGroup<NavbarLinkOptions>>;
type NavbarOptions = (NavbarLinkOptions | NavbarGroupOptions)[];

interface NavbarLocaleData {
    /**
     * Aria label of of the language selection dropdown
     *
     * 语言下拉列表的无障碍标签
     */
    selectLangAriaLabel: string;
    /**
     * Language name of current locale
     *
     * 当前语言的名称
     */
    langName: string;
}
/**
 * Navbar component
 *
 * 导航栏组件
 */
type NavbarComponent = "Brand" | "Links" | "Language" | "Search" | "Outlook" | "Repo";
/**
 * Navbar layout options
 *
 * 导航栏布局选项
 */
interface NavbarLayoutOptions {
    start?: string[];
    center?: string[];
    end?: string[];
}
interface NavbarLocaleOptions {
    /**
     * Navbar config
     *
     * @description Set to `false` to disable navbar in current locale
     *
     * @see https://theme-hope.vuejs.press/guide/layout/navbar.html
     *
     * 导航栏配置
     *
     * @description 设置 `false` 以在当前语言中禁用导航栏
     *
     * @see https://theme-hope.vuejs.press/v2/zh/guide/layout/navbar.html
     */
    navbar?: NavbarOptions | false;
    /**
     * Navbar logo
     *
     * @description should be absolute path relative to `.vuepress/public` folder
     *
     * 导航栏图标
     *
     * @description 应为基于 `.vuepress/public` 文件夹的绝对路径
     */
    logo?: string;
    /**
     * Navbar logo under darkmode
     *
     * @description should be absolute path relative to `.vuepress/public` folder
     *
     * 夜间模式下导航栏图标
     *
     * @description 应为基于 `.vuepress/public` 文件夹的绝对路径
     */
    logoDark?: string;
    /**
     * Navbar title
     *
     * 导航栏标题
     *
     * @default $siteLocale.title
     */
    navbarTitle?: string;
    /**
     * Repository link
     *
     * 仓库链接
     */
    repo?: string;
    /**
     * Whether display repo link in navbar.
     *
     * 是否在导航栏显示仓库链接。
     *
     * @default true
     */
    repoDisplay?: boolean;
    /**
     * Repository aria label of navbar
     *
     * 导航栏仓库按钮的无障碍标签
     */
    repoLabel?: string;
    /**
     * Whether to hide navbar when scrolling down
     *
     * 是否在向下滚动时自动隐藏导航栏
     *
     * @default "mobile"
     */
    navbarAutoHide?: "always" | "mobile" | "none";
    /**
     * Navbar layout config
     *
     * 导航栏布局设置
     *
     * @default { start: ["Brand"], center: ["Links"], end: ["Language", "Repo", "Outlook", "Search"] }
     */
    navbarLayout?: NavbarLayoutOptions;
    /**
     * Whether hide site title on mobile
     *
     * 是否在移动视图下隐藏站点名称
     *
     * @default true
     */
    hideSiteNameOnMobile?: boolean;
}

interface RouteLocaleData {
    /**
     * Skip to main content
     */
    skipToContent: string;
    /**
     * 404 page title
     *
     * 404 页面的标题
     */
    notFoundTitle: string;
    /**
     * 404 page msgs
     *
     * 404 页面的提示信息
     */
    notFoundMsg: string[];
    /**
     * Back to homepage
     *
     * 返回主页
     */
    home: string;
    /**
     * Back to last page
     *
     * 返回上一页
     */
    back: string;
}

type SidebarLinkOptions = AutoLinkOptions;
interface SidebarGroupOptions extends NavItemOptions {
    /**
     * Link prefix of current group
     *
     * 当前分组的页面前缀
     */
    prefix?: string;
    /**
     * Link of current group
     *
     * 当前分组的链接
     */
    link?: string;
    /**
     * Whether current group is expanded by default
     *
     * 当前分组的链接是否默认展开
     *
     * @default false
     */
    expanded?: boolean;
    /**
     * Whether current group is collapsible
     *
     * 当前分组的链接是否可折叠
     *
     * @default false
     */
    collapsible?: boolean;
    /**
     * Children of current group
     *
     * 当前分组的子项
     */
    children: SidebarItemOptions[];
}
interface SidebarStructureOptions extends NavItemOptions {
    /**
     * Link prefix of current group
     *
     * 当前分组的页面前缀
     */
    prefix?: string;
    /**
     * Link of current group
     *
     * 当前分组的链接
     */
    link?: string;
    /**
     * Whether current group is expanded by default
     *
     * 当前分组的链接是否默认展开
     *
     * @default false
     */
    expanded?: boolean;
    /**
     * Whether current group is collapsible
     *
     * 当前分组的链接是否可折叠
     *
     * @default false
     */
    collapsible?: boolean;
    children: "structure";
}
type SidebarItemOptions = SidebarLinkOptions | SidebarGroupOptions | SidebarStructureOptions | string;
type SidebarArrayOptions = SidebarItemOptions[];
type SidebarObjectOptions = Record<string, SidebarArrayOptions | "structure" | false>;
type SidebarOptions = SidebarArrayOptions | SidebarObjectOptions | "structure" | false;

interface ThemeBasePageFrontmatter extends PageFrontmatter {
    /**
     * Page icon
     *
     * 页面图标
     */
    icon?: string;
    /**
     * Page Author(s)
     *
     * 页面作者
     */
    author?: Author | false;
    /**
     * Writing Date
     *
     * 写作日期
     */
    date?: Date | string;
    /**
     * Page Category(ies)
     *
     * 页面分类
     */
    category?: string | string[];
    categories?: string[];
    /**
     * Page Tag(s)
     *
     * 页面标签
     */
    tag?: string[] | string;
    tags?: string[];
    /**
     * Whether the content is original
     *
     * 是否原创
     */
    isOriginal?: boolean;
    /**
     * Whether the page is an article
     *
     * 页面是否是文章
     */
    article?: boolean;
    /**
     * Page Cover
     *
     * 页面封面
     */
    cover?: string;
    /**
     * Page Banner
     *
     * 页面 Banner 图
     */
    banner?: string;
    /**
     * Footer text
     *
     * 页脚文字
     */
    footer?: string | boolean;
    /**
     * License text
     *
     * 协议文字
     */
    license?: string;
    /**
     * Copyright text
     *
     * 版权文字
     */
    copyright?: string | false;
    /**
     * Whether is home page
     *
     * 是否是主页
     *
     * @default false
     */
    home?: boolean;
    /**
     * Whether enable navbar
     *
     * 是否启用导航栏
     *
     * @default true
     */
    navbar?: boolean;
    /**
     * Sidebar configuration
     *
     * 侧边栏配置
     */
    sidebar?: false | SidebarArrayOptions;
    /**
     * Additional Class for Page container
     *
     * 页面容器的额外类名
     */
    containerClass?: string;
    /**
     * Whether show external link icon
     *
     * 是否启用外部链接图标
     *
     * @default true
     */
    externalLinkIcon?: boolean;
}

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

interface StructureSidebarDirOptions {
    /**
     * Dir title
     *
     * @default title of README.md
     *
     * 目录标题
     *
     * @default README.md 标题
     */
    text?: string;
    /**
     * Dir icon
     *
     * @default icon of README.md
     *
     * 目录图标
     *
     * @default README.md 图标
     */
    icon?: string;
    /**
     * Whether dir is expanded by default
     *
     * 当前目录是否默认展开
     *
     * @default false
     */
    expanded?: boolean;
    /**
     * Whether Dir is collapsible
     *
     * 目录是否可折叠
     *
     * @default true
     */
    collapsible?: boolean;
    /**
     * Whether Dir is clickable
     *
     * @description Will set group link to link of README.md
     *
     * 目录是否可点击
     *
     * @description 将会将目录分组的链接设置为 README.md 对应的链接
     *
     * @default false
     */
    link?: boolean;
    /**
     * Whether index current dir
     *
     * 是否索引此目录
     *
     * @default true
     */
    index?: boolean;
    /**
     * Dir order in sidebar
     *
     * 目录在侧边栏中的顺序
     *
     * @default 0
     */
    order?: number;
}
interface ThemeNormalPageFrontmatter extends ThemeBasePageFrontmatter {
    /**
     * Whether is homepage
     *
     * 是否是主页
     */
    home?: false;
    /**
     * Whether index current page
     *
     * 是否索引此页面
     *
     * @default true
     */
    index?: boolean;
    /**
     * Page order in sidebar
     *
     * 页面在侧边栏的顺序
     *
     * @default 0
     */
    order?: number;
    /**
     * Dir config
     *
     * @description Only available at README.md
     *
     * 目录配置
     *
     * @description 仅在 README.md 中可用
     */
    dir?: StructureSidebarDirOptions;
    /**
     * A short title used in navbar, sidebar and breadcrumb
     *
     * 用于导航栏，侧边栏和路径导航的短标题
     */
    shortTitle?: string;
    /**
     * Whether display lastUpdated time
     *
     * 是否显示最后更新事件
     */
    lastUpdated?: boolean;
    /**
     * Whether display changelog
     *
     * 是否显示变更历史
     */
    changelog?: boolean;
    /**
     * Whether display contributors
     *
     * 是否显示贡献者
     */
    contributors?: boolean | string[];
    /**
     * Whether show Edit link
     *
     * 是否显示编辑此页链接
     */
    editLink?: boolean;
    /**
     * Previous page link
     *
     * 上一页链接
     */
    prev?: string | AutoLinkOptions;
    /**
     * Next page link
     *
     * 下一页链接
     */
    next?: string | AutoLinkOptions;
    /**
     * Whether show toc list in desktop mode
     *
     * 是否在桌面模式下展示标题列表
     */
    toc?: GetHeadersOptions | boolean;
    /**
     * PageInfo items
     *
     * 页面信息项
     *
     * @default ["Author", "Visitor", "Time", "Category", "Tag", "ReadTime"]
     */
    pageInfo?: PageInfoType[] | false;
    /**
     * Whether enable breadcrumb
     *
     * 是否启用路径导航
     */
    breadcrumb?: boolean;
    /**
     * Whether enable breadcrumb icon
     *
     * 是否启用路径导航图标
     */
    breadcrumbIcon?: boolean;
    /**
     * Whether exclude current page in breadcrumb
     *
     * 是否在路径导航中排除
     */
    breadcrumbExclude?: boolean;
    /**
     *
     * Whether enable pageviews
     *
     * @description Only available when using artalk or waline comment service
     *
     * 是否启用访问量
     *
     * @description 仅在使用 Artalk 或 Waline 评论服务时有效
     *
     * @default true
     */
    pageview?: boolean;
    /**
     * Whether this page is an article
     */
    article?: boolean;
    /**
     * Whether the article be sticky in list
     *
     * If a number fill in, greater number will appear in front
     *
     * 是否置顶，如果填入数字，更大值会出现在前面
     */
    sticky?: boolean | number;
    /**
     * Whether the article be stared
     *
     * If a number fill in, greater number will appear in front
     *
     * 是否标为星标，如果填入数字，更大值会出现在前面
     */
    star?: boolean | number;
    /**
     * Page excerpt
     *
     * 页面的摘要
     */
    excerpt?: string;
}

interface PortfolioMedia {
    name?: string;
    icon: string;
    url: string;
}
interface ThemePortfolioFrontmatter extends ThemeBasePageFrontmatter {
    portfolio: true;
    home?: boolean;
    name?: string;
    avatar?: string;
    avatarDark?: string;
    avatarStyle?: Record<string, string> | string;
    avatarAlt: string;
    titles?: string[];
    bgImage?: string;
    bgImageDark?: string;
    bgImageStyle?: Record<string, string> | string;
    welcome?: string;
    medias?: PortfolioMedia[];
    /**
     * @default 'portfolio'
     */
    content?: "portfolio" | "doc" | "none";
}

interface ThemeProjectHomeActionOptions {
    /**
     * Action name
     *
     * 操作名称
     */
    text: string;
    /**
     * Action link
     *
     * 操作链接
     */
    link: string;
    /**
     * Type of action
     *
     * 操作类型
     *
     * @default "default"
     */
    type?: "primary" | "default";
    /**
     * Action icon
     *
     * 操作图标
     */
    icon?: string;
}
interface ThemeProjectHomeHighlightItem {
    /**
     * Item name, supports HTML string
     *
     * 项目名称，支持 HTML 字符串
     */
    title: string;
    /**
     * Item description, supports HTML string
     *
     * 项目描述，支持 HTML 字符串
     */
    details?: string;
    /**
     * Item icon
     *
     * @description image link or icon fontClass are supported
     *
     * 项目图标
     *
     * @description 支持图片链接或者图标字体类
     */
    icon?: string;
    /**
     * Item link
     *
     * 项目链接
     */
    link?: string;
}
type ThemeProjectHomeFeatureItem = ThemeProjectHomeHighlightItem;
interface ThemeProjectHomeHighlightOptions {
    /**
     * Highlight section header, supports HTML string
     *
     * 亮点标题，支持 HTML 字符串
     */
    header: string;
    /**
     * Highlight section description, supports HTML string
     *
     * 亮点描述，支持 HTML 字符串
     */
    description?: string;
    /**
     * Text color
     *
     * 文字颜色
     */
    color?: string;
    /**
     * Highlight section image
     *
     * 亮点图像
     */
    image?: string;
    /**
     * Highlight section image used in darkmode
     *
     * 夜间模式使用的亮点图片
     *
     * @default image
     */
    imageDark?: string;
    /**
     * Highlight Background image
     *
     * 亮点背景图
     */
    bgImage?: string;
    /**
     * Highlight Background image used in darkmode
     *
     * 夜间模式使用的亮点背景图
     *
     * @default bgImage
     */
    bgImageDark?: string;
    /**
     * Highlight Background image style
     *
     * 亮点背景图样式
     */
    bgImageStyle?: CSSProperties | string;
    /**
     * Highlight section list type
     *
     * 亮点列表类型
     *
     * @default un-order
     */
    type?: "order" | "un-order" | "no-order";
    /**
     * Highlights
     *
     * 亮点
     */
    highlights?: ThemeProjectHomeHighlightItem[];
}
interface ThemeProjectHomeFeatureOptions {
    /**
     * Feature header
     *
     * 功能标题
     */
    header?: string;
    /**
     * Feature section description, supports HTML string
     *
     * 功能描述，支持 HTML 字符串
     */
    description?: string;
    /**
     * Text color
     *
     * 文字颜色
     */
    color?: string;
    /**
     * Feature section image
     *
     * 功能图像
     */
    image?: string;
    /**
     * Feature section image used in darkmode
     *
     * 夜间模式使用的功能图片
     *
     * @default image
     */
    imageDark?: string;
    /**
     * Feature Background image
     *
     * 功能背景图
     */
    bgImage?: string;
    /**
     * Feature Background image used in darkmode
     *
     * 夜间模式使用的功能背景图
     *
     * @default bgImage
     */
    bgImageDark?: string;
    /**
     * Feature Background image style
     *
     * 功能背景图样式
     */
    bgImageStyle?: CSSProperties | string;
    /**
     * Features
     *
     * 功能
     */
    features: ThemeProjectHomeFeatureItem[];
}
interface ThemeProjectHomePageFrontmatter extends ThemeHomePageFrontmatter {
    actions?: ThemeProjectHomeActionOptions[];
    features?: ThemeProjectHomeFeatureItem[];
    highlights?: (ThemeProjectHomeFeatureOptions | ThemeProjectHomeHighlightOptions)[];
}

interface ThemePageData extends BlogPluginPageData, Partial<GitPluginPageData>, Partial<ReadingTimePluginPageData>, Partial<SeoPluginPageData> {
    filePathRelative: string | null;
}

interface SidebarFileInfo {
    type: "file";
    filename: string;
    title: string;
    order: number | null;
    path?: string | null;
    frontmatter: ThemeNormalPageFrontmatter;
    pageData: ThemePageData;
}
interface SidebarDirInfo {
    type: "dir";
    dirname: string;
    children: SidebarInfo[];
    title: string;
    order: number | null;
    groupInfo: {
        icon?: string;
        expanded?: boolean;
        collapsible?: boolean;
        link?: string;
    };
    frontmatter: ThemeNormalPageFrontmatter | null;
    pageData: ThemePageData | null;
}
type SidebarInfo = SidebarFileInfo | SidebarDirInfo;
type SidebarSorterKeyword = "readme" | "order" | "date" | "date-desc" | "filename" | "title";
type SidebarSorterFunction = (infoA: SidebarInfo, infoB: SidebarInfo) => number;
type SidebarSorter = SidebarSorterFunction | SidebarSorterKeyword | (SidebarSorterKeyword | SidebarSorterFunction)[];
interface SidebarLocaleOptions {
    /**
     * Sidebar config
     *
     * @description Set to `false` to disable sidebar in current locale
     * @see https://theme-hope.vuejs.press/guide/layout/sidebar.html
     *
     * 侧边栏配置
     *
     * @description 设置为 `false` 以在当前语言中禁用侧边栏
     * @see https://theme-hope.vuejs.press/zh/guide/layout/sidebar.html
     */
    sidebar?: SidebarOptions;
}

interface LayoutLocaleData {
    /**
     * Navbar related i18n config
     */
    navbarLocales: NavbarLocaleData;
    /**
     * Meta related i18n config
     */
    metaLocales: MetaLocateData;
    /**
     * Router related i18n config
     */
    routerLocales: RouteLocaleData;
}
interface DeprecatedLayoutOptions {
    /**
     * @deprecated Use `toc.levels` instead
     */
    headerDepth?: number;
}
interface LayoutLocaleOptions extends NavbarLocaleOptions, SidebarLocaleOptions, DocsRepoLocaleOptions, MetaLocaleOptions, FooterLocaleOptions {
    /**
     * Home path of current locale
     *
     * @description Used as the link of back-to-home and navbar logo
     *
     * 当前语言的主页路径
     *
     * @description 用于导航栏图标和返回主页按钮的链接
     */
    home?: string;
    /**
     * Whether enable breadcrumb globally
     *
     * 是否全局启用路径导航
     *
     * @default true
     */
    breadcrumb?: boolean;
    /**
     * Whether display icon in breadcrumb
     *
     * 是否在路径导航显示图标
     *
     * @default true
     */
    breadcrumbIcon?: boolean;
    /**
     * Whether display icon besides page title
     *
     * 是否在页面标题旁显示图标
     *
     * @default true
     */
    titleIcon?: boolean;
    /**
     * Article Info display configuration
     *
     * @see https://theme-hope.vuejs.press/guide/feature/page-info.html
     *
     * 文章信息配置
     *
     * @see https://theme-hope.vuejs.press/zh/guide/feature/page-info.html
     *
     * @default ["Author", "Original", "Date", "PageView", "ReadingTime", "Category", "Tag"]
     */
    pageInfo?: PageInfoType[] | false;
    /**
     * Whether show toc list in desktop mode
     *
     * An object with the following properties can be set:
     *
     * - `selector`: The selector of the headers.
     * - `ignore`: Ignore specific elements within the header.
     * - `levels`: The levels of the headers.
     *
     * 是否在桌面模式下展示标题列表
     *
     * 可以设置一个对象，包含以下属性：
     *
     * - `selector`: 选择器
     * - `ignore`: 忽略特定元素
     * - `levels`: 标题的级别
     *
     * @default true
     */
    toc?: GetHeadersOptions | boolean;
    /**
     * Whether rtl layout should be used
     *
     * 是否使用 rtl 布局
     *
     * @default false
     */
    rtl?: boolean;
    /**
     * Whether display nextLink
     *
     * 是否显示 下一篇 链接
     *
     * @default true
     */
    nextLink?: boolean;
    /**
     * Whether display prevLink
     *
     * 是否显示 上一篇 链接
     *
     * @default true
     */
    prevLink?: boolean;
}
type LayoutLocaleConfig = LayoutLocaleOptions;
/**
 * @kind root
 */
interface LayoutOptions {
    /**
     * Sorter of structure sidebar
     *
     * 结构化侧边栏排序器
     *
     * @default ["readme", "order", "title", "filename"]
     */
    sidebarSorter?: SidebarSorter;
}

interface ThemeLocaleData extends AppearanceLocaleData, FeatureLocaleData, LayoutLocaleData {
    /**
     * Current lang code
     */
    lang: string;
}
interface ThemeLocaleOptions extends LocaleData, LocaleDataToOption<AppearanceLocaleData>, LocaleDataToOption<FeatureLocaleData>, FeatureLocaleOptions, LocaleDataToOption<LayoutLocaleData>, LayoutLocaleOptions {
    /**
     * Global default author
     *
     * 全局默认作者
     */
    author?: Author;
}
interface ThemeLocaleConfig extends LocaleData, ThemeLocaleData, FeatureLocaleConfig, LayoutLocaleConfig {
    /**
     * Global default author
     *
     * 全局默认作者
     */
    author?: Author;
}

interface ThemeData extends AppearanceConfig, FeatureConfig, InfoConfig {
    locales: Record<string, ThemeLocaleConfig>;
}

/**
 * @deprecated You should use V2 standard frontmatter and avoid using it
 */
declare const convertFrontmatter: (frontmatter: PageFrontmatter & Record<string, unknown>, filePathRelative: string) => ThemeBasePageFrontmatter & Record<string, unknown>;

/**
 * @deprecated You should use V2 standard navbar config and avoid using it
 */
declare const convertNavbarOptions: (config: unknown, localePath?: string) => NavbarOptions | false;
/**
 * @deprecated You should use V2 standard navbar config and avoid using it
 */
declare const convertNavbarLayoutOptions: (options: Record<string, unknown>) => void;

/**
 * @deprecated You should use V2 standard sidebar config and avoid using it
 */
declare const convertSidebarOptions: (config: unknown, localePath?: string) => SidebarOptions;

interface ThemeBehaviorOptions {
    /**
     * Whether to perform extra checks
     *
     * 是否执行额外检查
     *
     * @default true
     */
    check?: boolean;
    /**
     * Whether to compact with historical versions
     *
     * 是否兼容历史版本
     *
     * @default true
     */
    compact?: boolean;
    /**
     * Whether to enable customization
     *
     * 是否启用自定义
     *
     * @default false
     */
    custom?: boolean;
    /**
     * Whether to enable debug mode
     *
     * 是否启用调试模式
     *
     * @default false
     */
    debug?: boolean;
    /**
     * Whether to check VuePress version
     *
     * 是否检查 VuePress 版本
     *
     * @default true
     */
    checkVuePress?: boolean;
}

interface BlogOptions extends Partial<Pick<BlogPluginOptions, "excerptFilter" | "excerptLength" | "excerptSeparator" | "filter" | "slugify" | "hotReload">> {
    /**
     * Path of article list
     *
     * 文章列表的路径
     *
     * @default "/article/"
     */
    article?: string;
    /**
     * Path of category map
     *
     * 分类地图页的地址
     *
     * @default "/category/"
     */
    category?: string;
    /**
     * Path to navigate when clicking category label
     *
     * `:name` will be automatically replaced by current category name
     *
     * 点击分类标签时跳转的路径。
     *
     * 其中 `:name` 会被自动替换为当前分类名称
     *
     * @default "/category/:name/"
     */
    categoryItem?: string;
    /**
     * Path of tag map
     *
     * 标签地图页的地址
     *
     * @default "/tag/"
     */
    tag?: string;
    /**
     * Path to navigate when clicking tag label
     *
     * `:name` will be automatically replaced by current tag name
     *
     * 点击标签跳转的路径。
     *
     * 其中 `:name` 会被自动替换为当前分类名称
     *
     * @default "/tag/:name/"
     */
    tagItem?: string;
    /**
     * Path of star article list
     *
     * 星标文章列表的路径
     *
     * @default "/star/""
     */
    star?: string;
    /**
     * Path of timeline
     *
     * 时间线路径
     *
     * @default "/timeline/"
     */
    timeline?: string;
    /**
     * Excerpt generation
     *
     * 摘要生成
     *
     * @default true
     */
    excerpt?: boolean;
    /**
     * Additional Article Type
     *
     * @description This is an advanced option, please refer to the [blog plugin documentation](https://ecosystem.vuejs.press/plugins/blog/blog/) for details
     *
     * 额外的文章类型
     *
     * @description 这是一个高级选项，请参考 [blog 插件文档](https://ecosystem.vuejs.press/zh/plugins/blog/blog/) 了解详情
     *
     * @default []
     */
    type?: BlogTypeOptions[];
}

interface DeprecatedThemePluginsOptions {
    /**
     * @deprecated Use `markdown.linksCheck` instead
     */
    linksCheck?: never;
    /**
     * @deprecated Use `markdown.alert` and `markdown.hint` instead
     */
    markdownHint?: never;
    /**
     * @deprecated Use `markdown.figure` `markdown.imgLazyload` `markdown.imgMark` `markdown.imgSize` and `markdown.obsidianImgSize` instead
     */
    markdownImage?: never;
    /**
     * @deprecated Use `markdown.math` instead
     */
    markdownMath?: never;
    /**
     * @deprecated Use `markdown.codeTabs` and `markdown.tabs` instead
     */
    markdownTab?: never;
    /**
     * @deprecated Use `markdown.revealjs` instead
     */
    revealjs?: never;
    /**
     * @deprecated Use `markdown.highlighter` instead
     */
    prismjs?: never;
    /**
     * @deprecated Use `markdown.highlighter` instead
     */
    shiki?: never;
    /**
     * @deprecated Use `plugins.slimsearch` instead
     */
    searchPro?: never;
    /**
     * @deprecated Use `markdown` instead
     */
    mdEnhance?: never;
}
interface ThemePluginsOptions extends DeprecatedThemePluginsOptions {
    /**
     * Enable active-header-links plugin or not
     *
     * @see https://ecosystem.vuejs.press/plugins/development/active-header-links.html
     *
     * 是否启用 active-header-links 插件
     *
     * @see https://ecosystem.vuejs.press/zh/plugins/development/active-header-links.html
     *
     * @default true
     */
    activeHeaderLinks?: boolean;
    /**
     * Back to top plugin options
     *
     * @see https://ecosystem.vuejs.press/plugins/features/back-to-top.html
     *
     * 返回顶部插件配置
     *
     * @see https://ecosystem.vuejs.press/zh/plugins/features/back-to-top.html
     *
     * @default true
     */
    backToTop?: BackToTopPluginOptions | boolean;
    /**
     * Blog plugin options
     *
     * 博客插件选项
     *
     * @default false
     */
    blog?: BlogOptions | boolean;
    /**
     * Catalog plugin options
     *
     * @see https://ecosystem.vuejs.press/plugins/features/catalog.html
     *
     * 自动目录插件选项
     *
     * @see https://ecosystem.vuejs.press/plugins/features/catalog.html
     *
     * @default true
     */
    catalog?: CatalogPluginOptions | boolean;
    /**
     * Components plugin options
     *
     * @see https://plugin-components.vuejs.press/config.html
     *
     * 插件选项配置
     *
     * @see https://plugin-components.vuejs.press/zh/config.html
     */
    components?: ComponentPluginOptions | false;
    /**
     * Comment plugin options
     *
     * @see https://ecosystem.vuejs.press/plugins/blog/comment/
     *
     * 评论插件配置
     *
     * @see https://ecosystem.vuejs.press/zh/plugins/blog/comment/
     */
    comment?: CommentPluginOptions | false;
    /**
     * Copy code plugin options
     *
     * @see https://ecosystem.vuejs.press/plugins/features/copy-code.html
     *
     * 代码复制插件配置
     *
     * @see https://ecosystem.vuejs.press/zh/plugins/features/copy-code.html
     */
    copyCode?: CopyCodePluginOptions | boolean;
    /**
     * Copyright plugin options
     *
     * @see https://ecosystem.vuejs.press/plugins/features/copyright.html
     *
     * 版权信息插件配置
     *
     * @see https://ecosystem.vuejs.press/zh/plugins/features/copyright.html
     *
     * @default false
     */
    copyright?: CopyrightPluginOptions | boolean;
    /**
     * DocSearch plugin options
     *
     * @see https://ecosystem.vuejs.press/plugins/search/docsearch.html
     *
     * @vuepress/docsearch 选项
     *
     * @see https://ecosystem.vuejs.press/zh/plugins/search/docsearch.html
     */
    docsearch?: DocSearchPluginOptions;
    /**
     * Feed plugin options
     *
     * @see https://ecosystem.vuejs.press/plugins/blog/feed/config.html
     *
     * Feed 插件配置
     *
     * @see https://ecosystem.vuejs.press/zh/plugins/blog/feed/config.html
     */
    feed?: Omit<FeedPluginOptions, "hostname"> | boolean;
    /**
     * Git plugin options
     *
     * @description By default this plugin is only enabled in production mode for performance reasons.
     *
     * @see https://ecosystem.vuejs.press/plugins/development/git.html
     *
     * Git 插件配置
     *
     * @description 默认情况下，出于性能原因，此插件仅在生产模式下启用。
     *
     * @see https://ecosystem.vuejs.press/zh/plugins/development/git.html
     */
    git?: GitPluginOptions | boolean;
    /**
     * Icon plugin options
     *
     * 图标插件选项
     */
    icon?: Omit<IconPluginOptions, "component"> | boolean;
    /**
     * MeiliSearch plugin options
     *
     * @see https://ecosystem.vuejs.press/plugins/search/meilisearch.html
     *
     * meilisearch 插件配置
     *
     * @see https://ecosystem.vuejs.press/zh/plugins/search/meilisearch.html
     */
    meilisearch?: MeiliSearchPluginOptions;
    /**
     * Notice options
     *
     * 公告选项
     *
     * @default true
     */
    notice?: NoticeOptions[] | NoticePluginOptions;
    /**
     * Enable nprogress plugin or not
     *
     * 是否启用 nprogress 插件
     *
     * @default true
     */
    nprogress?: boolean;
    /**
     * photo-swipe plugin options
     *
     * @see https://ecosystem.vuejs.press/plugins/features/photo-swipe.html
     *
     * 图片预览插件配置
     *
     * @see https://ecosystem.vuejs.press/zh/plugins/features/photo-swipe.html
     *
     * @default true
     */
    photoSwipe?: PhotoSwipePluginOptions | boolean;
    /**
     * PWA plugin options
     *
     * @see https://ecosystem.vuejs.press/plugins/pwa/pwa/config.html
     *
     * PWA 插件配置
     *
     * @see https://ecosystem.vuejs.press/zh/plugins/pwa/pwa/config.html
     *
     * @default false
     */
    pwa?: PwaPluginOptions | boolean;
    /**
     * Reading time plugin options
     *
     * @see https://ecosystem.vuejs.press/plugins/development/reading-time.html
     *
     * 阅读时间插件配置
     *
     * @see https://ecosystem.vuejs.press/zh/plugins/development/reading-time.html
     *
     * @default true
     */
    readingTime?: ReadingTimePluginOptions | boolean;
    /**
     * Redirect plugin options
     *
     * @see https://ecosystem.vuejs.press/plugins/tools/redirect.html
     *
     * 重定向插件配置
     *
     * @see https://ecosystem.vuejs.press/zh/plugins/tools/redirect.html
     */
    redirect?: RedirectPluginOptions | boolean;
    /**
     * Search plugin options
     *
     * @see https://ecosystem.vuejs.press/plugins/search/search.html
     *
     * @vuepress/search 插件配置
     *
     * @see https://ecosystem.vuejs.press/zh/plugins/search/search.html
     */
    search?: SearchPluginOptions | boolean;
    /**
     * Slimsearch plugin options
     *
     * @see https://ecosystem.vuejs.press/zh/plugins/search/slimsearch.html
     *
     * slimsearch 插件配置
     *
     * @see https://ecosystem.vuejs.press/zh/plugins/search/slimsearch.html
     */
    slimsearch?: SlimSearchPluginOptions | boolean;
    /**
     * SEO plugin options
     *
     * @see https://ecosystem.vuejs.press/plugins/seo/seo/config.html
     *
     * SEO 插件配置
     *
     * @see https://ecosystem.vuejs.press/zh/plugins/seo/seo/config.html
     *
     * @default true
     */
    seo?: Omit<SeoPluginOptions, "hostname" | "author"> | boolean;
    /**
     * Sitemap plugin options
     *
     * @see https://ecosystem.vuejs.press/plugins/seo/sitemap/config.html
     *
     * Sitemap 插件配置
     *
     * @see https://ecosystem.vuejs.press/zh/plugins/seo/sitemap/config.html
     *
     * @default true
     */
    sitemap?: Omit<SitemapPluginOptions, "hostname"> | boolean;
    /**
     * Watermark plugin options
     *
     * @see https://ecosystem.vuejs.press/plugins/features/watermark.html
     *
     * 水印插件配置
     *
     * @see https://ecosystem.vuejs.press/zh/plugins/features/watermark.html
     *
     * @default false
     */
    watermark?: WatermarkPluginOptions | boolean;
}

type Helper<Options> = (options: Options) => Options;
type ThemeNavbarHelper = Helper<NavbarOptions>;
type ThemeSidebarHelper = Helper<SidebarOptions>;
type ThemeSidebarArrayHelper = Helper<SidebarArrayOptions>;
type ThemeSidebarObjectHelper = Helper<SidebarObjectOptions>;
type ThemeBackToTopPluginHelper = Helper<BackToTopPluginOptions | boolean>;
type ThemeBlogPluginHelper = Helper<BlogOptions | boolean>;
type ThemeCatalogPluginHelper = Helper<CatalogPluginOptions | boolean>;
type ThemeCommentPluginHelper = Helper<CommentOptions | false>;
type ThemeComponentPluginHelper = Helper<ComponentPluginOptions>;
type ThemeCopyCodePluginHelper = Helper<CopyCodePluginOptions | boolean>;
type ThemeCopyrightPluginHelper = Helper<CopyrightPluginOptions | boolean>;
type ThemeFeedPluginHelper = Helper<Omit<FeedPluginOptions, "hostname"> | boolean>;
type ThemeGitPluginHelper = Helper<GitPluginOptions | boolean>;
type ThemeLinksCheckPluginHelper = Helper<LinksCheckPluginOptions | boolean>;
type ThemeNoticePluginHelper = Helper<NoticePluginOptions | NoticeOptions[]>;
type ThemePhotoSwipePluginHelper = Helper<PhotoSwipePluginOptions | boolean>;
type ThemePrismJsPluginHelper = Helper<PrismjsPluginOptions | boolean>;
type ThemePwaPluginHelper = Helper<PwaPluginOptions | boolean>;
type ThemeReadingTimePluginHelper = Helper<ReadingTimePluginOptions | false>;
type ThemeRedirectPluginHelper = Helper<RedirectPluginOptions | boolean>;
type ThemeRevealPluginHelper = Helper<Omit<RevealJsPluginOptions, "layout"> | boolean>;
type ThemeSEOPluginHelper = Helper<Omit<SeoPluginOptions, "hostname" | "author"> | boolean>;
type ThemeShikiPluginHelper = Helper<ShikiPluginOptions | boolean>;
type ThemeSitemapPluginHelper = Helper<Omit<SitemapPluginOptions, "hostname"> | boolean>;
type ThemeWatermarkPluginHelper = Helper<WatermarkPluginOptions | boolean>;

type MarkdownHighlighterOptions = ({
    type: "prismjs";
} & PrismjsPluginOptions) | ({
    type: "shiki";
} & ShikiPluginOptions);
interface ThemeMarkdownOptions extends MarkdownChartPluginOptions, MarkdownExtPluginOptions, Pick<MarkdownHintPluginOptions, "alert" | "hint">, Pick<MarkdownImagePluginOptions, "figure">, Omit<MarkdownStylizePluginOptions, "custom">, MarkdownTabPluginOptions, Pick<MarkdownEnhancePluginOptions, "demo" | "playground" | "kotlinPlayground" | "vuePlayground" | "sandpack"> {
    /**
     * Options for @vuepress/links-check
     *
     * @see https://ecosystem.vuejs.press/plugins/markdown/links-check.html
     *
     * @vuepress/links-check 插件配置
     *
     * @see https://ecosystem.vuejs.press/zh/plugins/markdown/links-check.html
     */
    linksCheck?: LinksCheckPluginOptions | boolean;
    /**
     * Whether enable native image lazy loading
     *
     * 是否启用原生的图片懒加载。
     *
     * @default false
     */
    imgLazyload?: MarkdownImagePluginOptions["lazyload"];
    /**
     * Whether to enable gfm image id mark support
     *
     * 是否启用 GFM 图片 ID 标记。
     *
     * @default false
     */
    imgMark?: MarkdownImagePluginOptions["mark"];
    /**
     * Whether to enable image size mark support
     *
     * 是否启用图片大小标记支持。
     *
     * @default false
     */
    imgSize?: MarkdownImagePluginOptions["size"];
    /**
     *
     * Whether to enable obsidian image size mark support
     *
     * 是否启用 Obsidian 图片大小标记支持。
     *
     * @default false
     */
    obsidianImgSize?: MarkdownImagePluginOptions["obsidianSize"];
    /**
     * @deprecated
     *
     * Whether to enable legacy image size mark support
     *
     * 是否启用旧版图片大小标记支持。
     *
     * @default false
     */
    legacyImgSize?: MarkdownImagePluginOptions["legacySize"];
    /**
     * Whether to enable markdown include support
     *
     * 是否启用 markdown include 支持。
     *
     * @default false
     */
    include?: MarkdownIncludePluginOptions | boolean;
    /**
     * Whether to enable markdown math support
     *
     * 是否启用 markdown math 支持。
     *
     * @default false
     */
    math?: MarkdownMathPluginOptions | boolean;
    /**
     * Whether to enable preview support
     *
     * 是否启用预览支持
     */
    preview?: boolean;
    /**
     * Customizing token stylize
     *
     * 自定义标记样式
     */
    stylize?: MarkdownStylizePluginOptions["custom"];
    /**
     * Whether to enable revealjs support
     *
     * 是否启用 revealjs 支持
     */
    revealjs?: Omit<RevealJsPluginOptions, "layout"> | boolean;
    /**
     * Markdown highlighter options
     *
     * Markdown 高亮器选项
     *
     * @default "shiki"
     */
    highlighter?: MarkdownHighlighterOptions | "prismjs" | "shiki" | false;
}

interface ThemeOptions extends ThemeData$1<ThemeLocaleOptions>, AppearanceOptions, FeatureOptions, InfoOptions, LayoutOptions {
    /**
     * Theme markdown options
     *
     * 主题 Markdown 选项
     */
    markdown?: ThemeMarkdownOptions;
    /**
     * Theme plugins options
     *
     * 主题插件选项
     */
    plugins?: ThemePluginsOptions;
}

/**
 * @deprecated You should use V2 standard options and avoid using it
 */
declare const convertThemeOptions: (themeOptions: Record<string, unknown>) => ThemeOptions;

declare const navbar: ThemeNavbarHelper;
declare const sidebar: ThemeSidebarHelper;
declare const arraySidebar: ThemeSidebarArrayHelper;
declare const objectSidebar: ThemeSidebarObjectHelper;
declare const backToTop: ThemeBackToTopPluginHelper;
declare const blog: ThemeBlogPluginHelper;
declare const catalog: ThemeCatalogPluginHelper;
declare const comment: ThemeCommentPluginHelper;
declare const components: ThemeComponentPluginHelper;
declare const copyCode: ThemeCopyCodePluginHelper;
declare const copyright: ThemeCopyrightPluginHelper;
declare const feed: ThemeFeedPluginHelper;
declare const git: ThemeGitPluginHelper;
declare const linksCheck: ThemeLinksCheckPluginHelper;
declare const notice: ThemeNoticePluginHelper;
declare const photoSwipe: ThemePhotoSwipePluginHelper;
declare const prismjs: ThemePrismJsPluginHelper;
declare const pwa: ThemePwaPluginHelper;
declare const readingTime: ThemeReadingTimePluginHelper;
declare const redirect: ThemeRedirectPluginHelper;
declare const revealjs: ThemeRevealPluginHelper;
declare const seo: ThemeSEOPluginHelper;
declare const shiki: ThemeShikiPluginHelper;
declare const sitemap: ThemeSitemapPluginHelper;
declare const watermark: ThemeWatermarkPluginHelper;

/**
 * VuePress Theme Hope
 *
 * @param themeOptions - theme options
 * @param behaviorOptions - theme behavior options
 */
declare const hopeTheme: (themeOptions: ThemeOptions, behaviorOptions?: ThemeBehaviorOptions | boolean) => ThemeFunction;

declare const themeLocaleInfo: DefaultLocaleInfo<ThemeLocaleData>;

/** @private */
declare const getEncryptConfig: ({ admin, config, global, }?: EncryptOptions) => EncryptConfig;

/** @private */
declare const getSocialMediaIcons: (themeData: ThemeData) => Record<string, string>;

interface BlogTypeInfo {
    key: string;
    path: string;
}
interface ThemeStatus {
    enableBlog: boolean;
    enableCatalog: boolean;
    enableEncrypt: boolean;
    enableIcon: boolean;
    enableReadingTime: boolean;
    blogTypes: BlogTypeInfo[];
    isI18nProject: boolean;
    hasRepo: boolean;
}
/** @private */
declare const getThemeStatus: (app: App, themeOptions: ThemeOptions) => ThemeStatus;

/**
 * @private
 *
 * Get client-side `themeData`
 */
declare const getThemeData: (app: App, { encrypt, ...themeOptions }: ThemeOptions, { enableBlog, enableEncrypt }: ThemeStatus) => ThemeData;

/**
 * @private
 */
declare const extendsBundlerOptions: (bundlerOptions: unknown, app: App, custom?: boolean) => void;

/**
 * @private
 *
 * Get theme plugins
 */
declare const getPlugins: (app: App, themeData: ThemeData, { markdown: markdownOptions, plugins: pluginsOptions, ...options }: Pick<ThemeOptions, "hostname" | "hotReload" | "favicon" | "plugins" | "markdown">, compact?: boolean) => PluginConfig;

/**
 * @private
 *
 * Composition Api to use `@vuepress/plugin-prismjs`
 */
declare const usePrismjsPlugin: (app: App, options?: PrismjsPluginOptions) => void;
/**
 * @private
 *
 * Composition Api to remove `@vuepress/plugin-prismjs`
 */
declare const removePrismjsPlugin: (app: App) => void;

/**
 * @private
 *
 * Composition Api to use `@vuepress/plugin-shiki`
 */
declare const useShikiPlugin: (app: App, options?: ShikiPluginOptions) => void;
/**
 * @private
 *
 * Composition Api to remove `@vuepress/plugin-shiki`
 */
declare const removeShikiPlugin: (app: App) => void;

/**
 * @private
 *
 * Use plugins to ensure they apply first
 */
declare const usePlugins: (app: App, themeData: ThemeData, { highlighter }: ThemeMarkdownOptions, plugins: ThemePluginsOptions, hotReload: boolean, behavior: ThemeBehaviorOptions) => void;

/**
 * @private
 */
declare const prepareConfigFile: (app: App, { enableCatalog, enableBlog, enableEncrypt, enableIcon }: ThemeStatus, { custom }: ThemeBehaviorOptions) => Promise<string>;

/**
 * @private
 */
declare const prepareHighLighterScss: (app: App) => Promise<void>;

/**
 * @private
 */
declare const prepareSocialMediaIcons: (app: App, icons?: Record<string, string> | null) => Promise<void>;

interface ThemeSidebarInfoOptions {
    pages: Page[];
    sorters: SidebarSorterFunction[];
    scope: string;
}
/**
 * @private
 */
declare const getSidebarInfo: ({ pages, sorters, scope, }: ThemeSidebarInfoOptions) => SidebarInfo[];

declare const sidebarReadmeSorter: (infoA: SidebarInfo, infoB: SidebarInfo) => number;
declare const sidebarOrderSorter: (infoA: SidebarInfo, infoB: SidebarInfo) => number;
declare const sidebarDateSorter: (infoA: SidebarInfo, infoB: SidebarInfo) => number;
declare const sidebarDateDescSorter: (infoA: SidebarInfo, infoB: SidebarInfo) => number;
declare const sidebarFilenameSorter: (infoA: SidebarInfo, infoB: SidebarInfo) => number;
declare const sidebarTitleSorter: (infoA: SidebarInfo, infoB: SidebarInfo) => number;
/** @private */
declare const getSidebarSorter: (sorter?: SidebarSorter) => SidebarSorterFunction[];

interface FileInfo {
    type: "file";
    filename: string;
    path: string;
}
interface DirInfo {
    type: "dir";
    dirname: string;
    path: string;
    children: StructureInfo[];
}
type StructureInfo = DirInfo | FileInfo;
/**
 * @private
 */
declare const getStructureInfo: (pages: Page[], scope: string) => StructureInfo[];

declare const getTitleFromFilename: (filename: string) => string;

/**
 * @private
 */
declare const getSidebarData: (app: App, themeData: ThemeData, sorter?: SidebarSorter) => SidebarOptions;
/**
 * @private
 */
declare const prepareSidebarData: (app: App, themeData: ThemeData, sorter?: SidebarSorter) => Promise<void>;

export { arraySidebar, backToTop, blog, catalog, checkLegacyStyle, comment, components, convertFrontmatter, convertNavbarLayoutOptions, convertNavbarOptions, convertSidebarOptions, convertThemeOptions, copyCode, copyright, extendsBundlerOptions, feed, getAuthor, getCategory, getEncryptConfig, getPlugins, getSidebarData, getSidebarInfo, getSidebarSorter, getSocialMediaIcons, getStringArray, getStructureInfo, getTag, getThemeData, getThemeStatus, getTitleFromFilename, git, hopeTheme, linksCheck, navbar, notice, objectSidebar, photoSwipe, prepareConfigFile, prepareHighLighterScss, prepareSidebarData, prepareSocialMediaIcons, prismjs, pwa, readingTime, redirect, removePrismjsPlugin, removeShikiPlugin, revealjs, seo, shiki, sidebar, sidebarDateDescSorter, sidebarDateSorter, sidebarFilenameSorter, sidebarOrderSorter, sidebarReadmeSorter, sidebarTitleSorter, sitemap, themeLocaleInfo, usePlugins, usePrismjsPlugin, useShikiPlugin, watermark };
export type { AppearanceConfig, AppearanceLocaleData, AppearanceOptions, ArticleInfoData, Author, AuthorInfo, AuthorName, AutoLinkOptions, BlogLocaleConfig, BlogLocaleData, BlogLocaleOptions, BlogOptions, BlogTypeInfo, DarkModeOptions, DeprecatedAppearanceOptions, DeprecatedBlogLocaleData, DeprecatedLayoutOptions, DeprecatedThemePluginsOptions, DirInfo, DocsRepoLocaleOptions, EncryptConfig, EncryptLocaleData, EncryptOptions, FeatureConfig, FeatureLocaleConfig, FeatureLocaleData, FeatureLocaleOptions, FeatureOptions, FileInfo, FooterLocaleOptions, InfoConfig, InfoOptions, LayoutLocaleConfig, LayoutLocaleData, LayoutLocaleOptions, LayoutOptions, MarkdownHighlighterOptions, MetaLocaleOptions, MetaLocateData, NavGroup, NavItemOptions, NavbarComponent, NavbarGroupOptions, NavbarLayoutOptions, NavbarLinkOptions, NavbarLocaleData, NavbarLocaleOptions, NavbarOptions, OutlookLocaleData, PageInfoData, PageInfoType, PageType, PaginationLocaleData, PasswordConfig, PasswordOptions, PortfolioMedia, RouteLocaleData, SidebarArrayOptions, SidebarDirInfo, SidebarFileInfo, SidebarGroupOptions, SidebarInfo, SidebarItemOptions, SidebarLinkOptions, SidebarLocaleOptions, SidebarObjectOptions, SidebarOptions, SidebarSorter, SidebarSorterFunction, SidebarSorterKeyword, SidebarStructureOptions, StructureInfo, StructureSidebarDirOptions, ThemeBackToTopPluginHelper, ThemeBasePageFrontmatter, ThemeBehaviorOptions, ThemeBlogHomePageFrontmatter, ThemeBlogHomeProjectOptions, ThemeBlogPluginHelper, ThemeCatalogPluginHelper, ThemeCommentPluginHelper, ThemeComponentPluginHelper, ThemeCopyCodePluginHelper, ThemeCopyrightPluginHelper, ThemeData, ThemeFeedPluginHelper, ThemeGitPluginHelper, ThemeHomePageFrontmatter, ThemeLinksCheckPluginHelper, ThemeLocaleConfig, ThemeLocaleData, ThemeLocaleOptions, ThemeMarkdownOptions, ThemeNavbarHelper, ThemeNormalPageFrontmatter, ThemeNoticePluginHelper, ThemeOptions, ThemePageData, ThemePhotoSwipePluginHelper, ThemePluginsOptions, ThemePortfolioFrontmatter, ThemePrismJsPluginHelper, ThemeProjectHomeActionOptions, ThemeProjectHomeFeatureItem, ThemeProjectHomeFeatureOptions, ThemeProjectHomeHighlightItem, ThemeProjectHomeHighlightOptions, ThemeProjectHomePageFrontmatter, ThemePwaPluginHelper, ThemeReadingTimePluginHelper, ThemeRedirectPluginHelper, ThemeRevealPluginHelper, ThemeSEOPluginHelper, ThemeShikiPluginHelper, ThemeSidebarArrayHelper, ThemeSidebarHelper, ThemeSidebarInfoOptions, ThemeSidebarObjectHelper, ThemeSitemapPluginHelper, ThemeStatus, ThemeWatermarkPluginHelper };
