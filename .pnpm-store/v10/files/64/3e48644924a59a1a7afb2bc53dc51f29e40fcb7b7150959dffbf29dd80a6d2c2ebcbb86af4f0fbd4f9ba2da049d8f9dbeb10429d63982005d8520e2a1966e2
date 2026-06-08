import { useBlogType } from "@vuepress/plugin-blog/client";
import { inject, provide } from "vue";
export const starsSymbol = Symbol(__VUEPRESS_DEV__ ? "stars" : "");
/**
 * Inject stars
 */
export const useStars = () => {
    const stars = inject(starsSymbol);
    if (!stars)
        throw new Error("useStars() is called without provider.");
    return stars;
};
export const setupStars = () => {
    const stars = useBlogType("star");
    provide(starsSymbol, stars);
};
//# sourceMappingURL=useStars.js.map