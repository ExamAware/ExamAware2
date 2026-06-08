import { useBlogCategory } from "@vuepress/plugin-blog/client";
import { inject, provide } from "vue";
export const tagMapSymbol = Symbol.for("tagMap");
/**
 * Inject tagMap
 */
export const useTagMap = () => {
    const tagMap = inject(tagMapSymbol);
    if (!tagMap)
        throw new Error("useTagMap() is called without provider.");
    return tagMap;
};
/**
 * Provide tagMap
 */
export const setupTagMap = () => {
    const tagMap = useBlogCategory("tag");
    provide(tagMapSymbol, tagMap);
};
//# sourceMappingURL=useTagMap.js.map