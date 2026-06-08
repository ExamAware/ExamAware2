import type { AutoLinkOptions, NavItemOptions } from "./nav.js";
/**
 * Base nav group, has nav items children
 */
export interface NavGroup<Child> extends NavItemOptions {
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
export type NavbarLinkOptions = AutoLinkOptions | string;
export type NavbarGroupOptions = NavGroup<NavbarLinkOptions | NavGroup<NavbarLinkOptions>>;
export type NavbarOptions = (NavbarLinkOptions | NavbarGroupOptions)[];
//# sourceMappingURL=navbar.d.ts.map