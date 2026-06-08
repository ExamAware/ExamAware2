import { Option } from 'artplayer';
import { DefaultLayoutTranslations } from 'vidstack';
import { LocaleConfig } from 'vuepress/shared';
import { PluginFunction } from 'vuepress/core';
import { DefaultLocaleInfo } from '@vuepress/helper';

type ArtPlayerOptions = Partial<Omit<Option, "container" | "url" | "type" | "customType" | "plugins" | "contextmenu" | "controls" | "layers" | "settings">>;

interface PDFLocaleData {
    /**
     * PDF hint text
     *
     * @description Only used if the browser does not support embedding PDF and no PDFJS URL is provided.
     * [url] will be replaced by actual PDF link.
     *
     * PDF 提示文字
     *
     * @description 只有在浏览器不支持嵌入 PDF 且没有提供 PDFJS URL 时才会使用
     * [url] 会被实际 PDF 链接替换
     */
    hint: string;
}
interface SiteInfoLocaleData {
    /**
     * Source text
     *
     * 源代码文字
     */
    source: string;
}
type VidstackLocaleData = Partial<DefaultLayoutTranslations>;

type ShareAction = "open" | "navigate" | "popup" | "qrcode";
type BuiltInShareService = "buffer" | "douban" | "email" | "evernote" | "facebook" | "flipboard" | "line" | "linkedin" | "messenger" | "pinterest" | "qq" | "qrcode" | "qzone" | "reddit" | "skype" | "sms" | "snapchat" | "telegram" | "tumblr" | "twitter" | "vk" | "weibo" | "whatsapp" | "wordpress";
type ShareServiceVariableName = "title" | "description" | "url" | "excerpt" | "summary" | "tags" | "cover" | "image" | "twitterUserName";
interface ShareServiceConfig {
    /**
     * Share link
     *
     * @description You can use `[` and `]` to wrap the variable name, and the variable will be replaced with the value of the page.:
     *
     * - `title` will be replaced with the title of the page
     * - `description` will be replaced with the description of the page
     * - `url` will be replaced with the url of the page
     * - `summary` will be replaced with the summary of the page
     * - `tags` will be replaced with the tags of the page
     * - `cover` will be replaced with the cover/banner of the page
     * - `image` will be replaced with the first image of the page
     *
     * 分享链接
     *
     * @description 你可以使用 `[` 和 `]` 包裹变量名，变量将会被替换为页面的值：
     *
     * - `title` 将会被替换为页面的标题
     * - `description` 将会被替换为页面的描述
     * - `url` 将会被替换为页面的链接
     * - `summary` 将会被替换为页面的综述
     * - `tags` 将会被替换为页面的标签
     * - `cover` 将会被替换为页面的封面
     * - `image` 将会被替换为页面的第一张图片
     */
    link: string;
    /**
     * Action of share button
     *
     * @description
     * - `open` will open the link in a new tab
     * - `navigate` will navigate to the link
     * - `popup` will open a popup window
     * - `qrcode` will show a QR code with link
     *
     * 分享按钮的行为
     *
     * @description
     * - `open` 将会在新标签页打开链接
     * - `navigate` 将会跳转到链接
     * - `popup` 将会打开一个弹窗
     * - `qrcode` 将会显示一个二维码
     *
     * @default "popup"
     */
    action?: ShareAction;
    /**
     * Theme color of icon
     *
     * 图标的主题色
     *
     * @default 'currentColor'
     */
    color?: string;
    /**
     * Plain icon shape
     *
     * 纯色图标的形状
     */
    shape: string;
    /**
     * Colorful icon
     *
     * 彩色图标
     */
    icon?: string;
}
interface ShareServiceOptions extends ShareServiceConfig {
    /**
     * Service name
     *
     * 服务名称
     */
    name: string;
}
type ShareService = BuiltInShareService | ShareServiceOptions;

declare const SHARE_CONFIG: Record<BuiltInShareService, ShareServiceConfig>;
declare const AVAILABLE_SERVICES: BuiltInShareService[];

interface ShareOptions {
    /**
     * Service to be enabled
     *
     * 需要被启用的服务
     */
    services: ShareService[];
    /**
     * Your twitter twitter user name
     *
     * @description required when you are using twitter service
     *
     * 你的 twitter 用户名
     *
     * @description required when you are using twitter service
     */
    twitterUserName?: string;
}

interface DeprecatedComponentGlobalOptions {
    /**
     * @deprecated Use `@vuepress/plugin-icon` instead
     */
    fontIcon?: never;
}
interface ComponentGlobalOptions extends DeprecatedComponentGlobalOptions {
    /**
     * ArtPlayer config
     *
     * ArtPlayer 配置
     */
    artPlayer?: ArtPlayerOptions;
    /**
     * PDF viewer config
     *
     * PDF 阅读器配置
     */
    pdf?: {
        /**
         * Location of pdfjs
         *
         * pdfjs 的位置
         */
        pdfjs?: string | boolean;
    };
    /**
     * Share config
     *
     * 分享配置
     */
    share?: ShareOptions;
}

/** @deprecated */
type DeprecatedComponent = "AudioPlayer" | "VideoPlayer" | "YouTube";
type AvailableComponent = "ArtPlayer" | "Badge" | "BiliBili" | "CodePen" | "PDF" | "Share" | "StackBlitz" | "SiteInfo" | "VPBanner" | "VPCard" | "VidStack";

interface ComponentLocaleOptions {
    /**
     * PDF Locales config
     *
     * PDF 组件国际化配置
     */
    pdf?: LocaleConfig<PDFLocaleData>;
    /**
     * SiteInfo Locales config
     *
     * 站点信息 组件国际化配置
     */
    siteInfo?: LocaleConfig<SiteInfoLocaleData>;
    /**
     * VidStack Locales config
     *
     * VidStack 组件国际化配置
     */
    vidstack?: LocaleConfig<VidstackLocaleData>;
}

interface RootComponentOptions {
    /**
     * @deprecated Please use "@vuepress/plugin-back-to-top instead"
     */
    backToTop?: never;
    /**
     * @deprecated Please use "@vuepress/plugin-notice instead"
     */
    notice?: never;
}

interface ComponentPluginOptions {
    /**
     * Components to be registered
     *
     * 需要被注册的组件
     *
     * @default []
     */
    components?: AvailableComponent[];
    /**
     * Global config for components
     *
     * 组件全局配置
     */
    componentOptions?: ComponentGlobalOptions;
    /**
     * Root config for components
     *
     * 根组件配置
     */
    rootComponents?: RootComponentOptions;
    /**
     * Component Locales
     *
     * 组件多语言
     */
    locales?: ComponentLocaleOptions;
}

declare const componentsPlugin: (options: ComponentPluginOptions, legacy?: boolean) => PluginFunction;

declare const pdfLocaleInfo: DefaultLocaleInfo<PDFLocaleData>;

declare const siteInfoLocaleInfo: DefaultLocaleInfo<SiteInfoLocaleData>;

declare const vidstackLocaleInfo: DefaultLocaleInfo<VidstackLocaleData>;

export { AVAILABLE_SERVICES, SHARE_CONFIG, componentsPlugin, pdfLocaleInfo, siteInfoLocaleInfo, vidstackLocaleInfo };
export type { ArtPlayerOptions, AvailableComponent, BuiltInShareService, ComponentGlobalOptions, ComponentLocaleOptions, ComponentPluginOptions, DeprecatedComponent, DeprecatedComponentGlobalOptions, PDFLocaleData, ShareAction, ShareOptions, ShareService, ShareServiceConfig, ShareServiceOptions, ShareServiceVariableName, SiteInfoLocaleData, VidstackLocaleData };
