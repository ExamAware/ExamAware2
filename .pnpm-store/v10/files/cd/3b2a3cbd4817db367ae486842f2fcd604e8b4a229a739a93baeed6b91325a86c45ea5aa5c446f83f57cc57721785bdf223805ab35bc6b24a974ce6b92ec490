import { HeaderItem } from '@vuepress/helper/client';
import { ReadingTime, ReadingTimeLocale } from '@vuepress/plugin-reading-time/client';
import { PageFrontmatter } from 'vuepress/shared';

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

type SidebarLinkItem = SidebarLinkOptions;
interface SidebarGroupItem extends SidebarGroupOptions {
    prefix: string;
    children: SidebarItem[];
}
type SidebarItem = SidebarLinkItem | SidebarGroupItem;

interface PageCategory {
    /**
     * Category name
     *
     * 分类名称
     */
    name: string;
    /**
     * Category path
     *
     * 分类路径
     */
    path?: string;
}
type PageTag = PageCategory;

interface PageInfoProps {
    /**
     * Authors of article
     *
     * 文章作者
     */
    author?: AuthorInfo[];
    /**
     * Categories of article
     *
     * 文章分类
     */
    category?: PageCategory[];
    /**
     * Tags of article
     *
     * 文章标签
     */
    tag?: PageTag[];
    /**
     * Writing Date
     *
     * 写作日期
     */
    date?: Date | null;
    /**
     * Whether the article is original
     *
     * 文章是否原创
     */
    isOriginal?: boolean;
    /**
     * Whether enable pageview
     *
     * If the value is a string, it will use as search id
     *
     * 是否启用访问量
     *
     * 如果值为字符串，会用做查询 id
     */
    pageview?: string | boolean;
    /**
     * ReadingTime info
     *
     * 阅读时间
     */
    readingTime?: ReadingTime | null;
    /**
     * ReadingTime Locales
     *
     * 阅读时间多语言
     */
    readingTimeLocale?: ReadingTimeLocale | null;
}

type SidebarItemsSlotData = SidebarItem[];
type TocSlotData = HeaderItem[];
type Style = string | Record<string, string>;
interface HeroInfoSlotData {
    text: string | null;
    tagline: string | null;
    isFullScreen: boolean;
    style: Style | null;
}
interface HeroLogoSlotData {
    image: string | null;
    imageDark: string | null;
    alt: string;
    style: Style | null;
}
interface HeroBackgroundSlotData {
    image: string | null;
    imageDark: string | null;
    style: Style | null;
}
interface PortfolioAvatarSlotData {
    avatar: string | null;
    avatarDark: string | null;
    alt: string;
    style: Style | null;
}
interface PortfolioInfoSlotData {
    name: string;
    welcome: string;
    title: string;
    titles: string[];
    medias: PortfolioMedia[] | null;
}
interface PortfolioBackgroundSlotData {
    image: string | null;
    imageDark: string | null;
    style: Style | null;
}
interface ArticleTitleSlotData {
    title: string;
    isEncrypted: boolean;
    type: string;
}
interface ArticleCoverSlotData {
    cover: string | null;
}
interface ArticleExcerptSlotData {
    excerpt: string | null;
}
type ArticleInfoSlotData = PageInfoProps;
interface BloggerInfoSlotData {
    name: string;
    avatar: string | null;
    description: string | null;
}

export type { ArticleCoverSlotData as A, BloggerInfoSlotData as B, HeroInfoSlotData as H, NavItemOptions as N, PortfolioInfoSlotData as P, SidebarItemsSlotData as S, TocSlotData as T, ArticleTitleSlotData as a, ArticleInfoSlotData as b, ArticleExcerptSlotData as c, HeroLogoSlotData as d, HeroBackgroundSlotData as e, PortfolioAvatarSlotData as f, PortfolioBackgroundSlotData as g, Author as h, ThemeBasePageFrontmatter as i, PageInfoProps as j, AuthorInfo as k, AutoLinkOptions as l, SidebarOptions as m, SidebarLinkItem as n, SidebarGroupItem as o, SidebarItem as p, Style as q, AuthorName as r, PortfolioMedia as s, ThemePortfolioFrontmatter as t, SidebarLinkOptions as u, SidebarGroupOptions as v, SidebarStructureOptions as w, SidebarItemOptions as x, SidebarArrayOptions as y, SidebarObjectOptions as z };
