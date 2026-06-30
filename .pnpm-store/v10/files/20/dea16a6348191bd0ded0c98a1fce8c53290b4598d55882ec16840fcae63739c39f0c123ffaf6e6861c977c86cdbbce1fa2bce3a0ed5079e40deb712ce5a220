import * as vue from 'vue';
import { App, ComputedRef, Ref, VNode, SlotsType } from 'vue';
import { Slot } from '@vuepress/helper/client';
import { S as SidebarItemsSlotData, T as TocSlotData, H as HeroInfoSlotData, d as HeroLogoSlotData, e as HeroBackgroundSlotData, P as PortfolioInfoSlotData, f as PortfolioAvatarSlotData, g as PortfolioBackgroundSlotData } from './slots-Bt1PQIHa.js';

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

type DarkmodeStatus = "light" | "dark" | "auto";
type DarkModeRef = ComputedRef<boolean>;
type DarkModeStatusRef = Ref<DarkmodeStatus>;
interface DarkMode {
    isDarkMode: DarkModeRef;
    config: ComputedRef<DarkModeOptions>;
    status: DarkModeStatusRef;
    canToggle: ComputedRef<boolean>;
}
/**
 * Inject dark mode global computed
 */
declare const useDarkMode: () => DarkMode;
declare const injectDarkMode: (app: App) => void;
declare const setupDarkMode: () => void;
declare module "vue" {
    interface ComponentCustomProperties {
        $isDarkMode: boolean;
    }
}

declare const _default$1: vue.DefineComponent<{}, () => VNode[], {}, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.PublicProps, Readonly<{}> & Readonly<{}>, {}, SlotsType<{
    default?: Slot;
    navScreenTop?: Slot;
    navScreenBottom?: Slot;
    sidebarItems?: Slot<SidebarItemsSlotData>;
    sidebarTop?: Slot;
    sidebarBottom?: Slot;
    pageTop?: Slot;
    pageBottom?: Slot;
    content?: Slot;
    contentBefore?: Slot;
    contentAfter?: Slot;
    toc?: Slot<TocSlotData>;
    tocBefore?: Slot;
    tocAfter?: Slot;
    heroInfo?: Slot<HeroInfoSlotData>;
    heroLogo?: Slot<HeroLogoSlotData>;
    heroBg?: Slot<HeroBackgroundSlotData>;
    heroBefore?: Slot;
    heroAfter?: Slot;
    portfolioInfo?: Slot<PortfolioInfoSlotData>;
    portfolioAvatar?: Slot<PortfolioAvatarSlotData>;
    portfolioBg?: Slot<PortfolioBackgroundSlotData>;
}>, {}, {}, string, vue.ComponentProvideOptions, true, {}, any>;

declare const _default: vue.DefineComponent<{}, () => VNode[], {}, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.PublicProps, Readonly<{}> & Readonly<{}>, {}, SlotsType<{
    default?: Slot;
    navScreenTop?: Slot;
    navScreenBottom?: Slot;
}>, {}, {}, string, vue.ComponentProvideOptions, true, {}, any>;

export { _default$1 as _, _default as a, injectDarkMode as i, setupDarkMode as s, useDarkMode as u };
export type { AppearanceLocaleData as A, DarkModeOptions as D, OutlookLocaleData as O, AppearanceConfig as b, DeprecatedAppearanceOptions as c, AppearanceOptions as d };
