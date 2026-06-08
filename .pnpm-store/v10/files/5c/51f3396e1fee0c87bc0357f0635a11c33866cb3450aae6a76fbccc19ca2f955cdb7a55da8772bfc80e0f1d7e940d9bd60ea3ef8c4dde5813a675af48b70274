import type { SidebarGroupItem, SidebarItem, SidebarLinkItem } from "@theme-hope/typings/sidebar";
import type { SidebarArrayOptions, SidebarItemOptions, SidebarObjectOptions, SidebarOptions } from "../../../shared/index.js";
export interface SidebarArrayItem {
    config: SidebarArrayOptions;
    prefix?: string;
}
/**
 * Resolve sidebar item
 */
export declare const resolveSidebarItem: (item: SidebarItemOptions, pathPrefix: string) => SidebarLinkItem | SidebarGroupItem;
/**
 * Resolve sidebar items if the config is an array
 */
export declare const resolveArraySidebarItems: ({ config, prefix, }: SidebarArrayItem) => SidebarItem[];
export interface ResolveMultiSidebarOptions {
    config: SidebarObjectOptions;
    routePath: string;
}
/**
 * Resolve sidebar items if the config is a key -> value (path-prefix -> array) object
 */
export declare const resolveMultiSidebarItems: ({ config, routePath, }: ResolveMultiSidebarOptions) => SidebarItem[];
export interface ResolveSidebarOptions {
    config: SidebarOptions;
    routeLocale: string;
    routePath: string;
}
/**
 * Resolve sidebar items global computed
 *
 * It should only be resolved and provided once
 */
export declare const resolveSidebarItems: ({ config, routeLocale, routePath, }: ResolveSidebarOptions) => SidebarItem[];
//# sourceMappingURL=resolveSidebarItems.d.ts.map