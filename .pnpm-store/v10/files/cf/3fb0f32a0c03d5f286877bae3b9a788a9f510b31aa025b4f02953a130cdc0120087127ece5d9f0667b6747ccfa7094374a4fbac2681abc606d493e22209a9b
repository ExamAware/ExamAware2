import { isArray, isPlainObject, isString, keys, startsWith, } from "@vuepress/helper/client";
import { resolveRoute } from "vuepress/client";
import { sidebarData } from "@temp/theme-hope/sidebar.js";
import { isLinkInternal } from "@theme-hope/utils/isLinkInternal";
import { resolveLinkInfo } from "@theme-hope/utils/resolveLinkInfo";
import { resolvePrefix } from "@theme-hope/utils/resolvePrefix";
/**
 * Resolve sidebar item
 */
export const resolveSidebarItem = (item, pathPrefix) => {
    const config = isString(item)
        ? resolveLinkInfo(resolvePrefix(pathPrefix, item))
        : isString(item.link)
            ? {
                ...item,
                link: isLinkInternal(item.link)
                    ? resolveRoute(resolvePrefix(pathPrefix, item.link)).path
                    : item.link,
            }
            : item;
    // Resolved group item
    if ("children" in config) {
        const prefix = resolvePrefix(pathPrefix, config.prefix);
        const children = config.children === "structure" ? sidebarData[prefix] : config.children;
        return {
            ...config,
            prefix,
            children: children.map((item) => resolveSidebarItem(item, prefix)),
        };
    }
    return {
        ...config,
    };
};
/**
 * Resolve sidebar items if the config is an array
 */
export const resolveArraySidebarItems = ({ config, prefix = "", }) => config.map((item) => resolveSidebarItem(item, prefix));
/**
 * Resolve sidebar items if the config is a key -> value (path-prefix -> array) object
 */
export const resolveMultiSidebarItems = ({ config, routePath, }) => {
    const sidebarRoutes = keys(config).sort((x, y) => y.length - x.length);
    // Find matching config
    for (const base of sidebarRoutes)
        if (startsWith(decodeURI(routePath), base)) {
            const matched = config[base];
            return resolveArraySidebarItems({
                config: matched === "structure" ? sidebarData[base] : matched || [],
                prefix: base,
            });
        }
    // eslint-disable-next-line no-console
    console.warn(`${decodeURI(routePath)} is missing it's sidebar config.`);
    return [];
};
/**
 * Resolve sidebar items global computed
 *
 * It should only be resolved and provided once
 */
export const resolveSidebarItems = ({ config, routeLocale, routePath, }) => 
// Resolve sidebar items according to the config
config === "structure"
    ? resolveArraySidebarItems({
        config: sidebarData[routeLocale],
        prefix: routeLocale,
    })
    : isArray(config)
        ? resolveArraySidebarItems({ config })
        : isPlainObject(config)
            ? resolveMultiSidebarItems({ config, routePath })
            : [];
//# sourceMappingURL=resolveSidebarItems.js.map