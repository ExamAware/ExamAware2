import { computed, inject, provide } from "vue";
import { useData } from "@theme-hope/composables/useData";
import { resolveSidebarItems } from "@theme-hope/utils/sidebar/resolveSidebarItems";
export const sidebarItemsSymbol = Symbol(__VUEPRESS_DEV__ ? "sidebarItems" : "");
/**
 * Create sidebar items ref and provide as global computed in setup
 */
export const setupSidebarItems = () => {
    const { frontmatter, routeLocale, routePath, themeLocale } = useData();
    // Get sidebar options from frontmatter > themeConfig
    const sidebarOptions = computed(() => frontmatter.value.home
        ? false
        : (frontmatter.value.sidebar ?? themeLocale.value.sidebar ?? "structure"));
    const sidebarItems = computed(() => resolveSidebarItems({
        config: sidebarOptions.value,
        routeLocale: routeLocale.value,
        routePath: routePath.value,
    }));
    provide(sidebarItemsSymbol, sidebarItems);
};
/**
 * Inject sidebar items global computed
 */
export const useSidebarItems = () => {
    const sidebarItems = inject(sidebarItemsSymbol);
    if (!sidebarItems)
        throw new Error("useSidebarItems() is called without provider.");
    return sidebarItems;
};
//# sourceMappingURL=useSidebarItems.js.map