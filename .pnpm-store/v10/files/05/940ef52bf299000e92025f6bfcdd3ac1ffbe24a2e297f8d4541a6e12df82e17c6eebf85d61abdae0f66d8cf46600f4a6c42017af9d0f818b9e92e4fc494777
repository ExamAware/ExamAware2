import { isString } from "@vuepress/helper/client";
import { computed } from "vue";
import { resolveRoute } from "vuepress/client";
import { useThemeLocale } from "@theme-hope/composables/useTheme";
import { isLinkInternal } from "@theme-hope/utils/isLinkInternal";
import { resolveLinkInfo } from "@theme-hope/utils/resolveLinkInfo";
import { resolvePrefix } from "@theme-hope/utils/resolvePrefix";
export const resolveNavbarItem = (item, prefix = "") => {
    if (isString(item))
        return resolveLinkInfo(resolvePrefix(prefix, item));
    if ("children" in item)
        return {
            ...item,
            ...(item.link && isLinkInternal(item.link)
                ? { link: resolveRoute(resolvePrefix(prefix, item.link)).path }
                : {}),
            children: item.children.map((child) => resolveNavbarItem(child, resolvePrefix(prefix, item.prefix))),
        };
    return {
        ...item,
        link: isLinkInternal(item.link)
            ? resolveRoute(resolvePrefix(prefix, item.link)).path
            : item.link,
    };
};
export const useNavbarItems = () => {
    const themeLocaleData = useThemeLocale();
    return computed(() => 
    // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
    (themeLocaleData.value.navbar || []).map((item) => resolveNavbarItem(item)));
};
//# sourceMappingURL=useNavbarItems.js.map