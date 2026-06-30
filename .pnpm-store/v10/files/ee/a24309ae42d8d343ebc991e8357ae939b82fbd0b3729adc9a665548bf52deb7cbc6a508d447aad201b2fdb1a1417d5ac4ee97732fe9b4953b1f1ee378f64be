import { useBlogCategory } from "@vuepress/plugin-blog/client";
import { inject, provide } from "vue";
export const categoryMapSymbol = Symbol.for("categoryMap");
/**
 * Inject categoryMap
 */
export const useCategoryMap = () => {
    const categoryMap = inject(categoryMapSymbol);
    if (!categoryMap)
        throw new Error("useCategoryMap() is called without provider.");
    return categoryMap;
};
/**
 * Provide categoryMap
 */
export const setupCategoryMap = () => {
    const categoryMap = useBlogCategory("category");
    provide(categoryMapSymbol, categoryMap);
};
//# sourceMappingURL=useCategoryMap.js.map