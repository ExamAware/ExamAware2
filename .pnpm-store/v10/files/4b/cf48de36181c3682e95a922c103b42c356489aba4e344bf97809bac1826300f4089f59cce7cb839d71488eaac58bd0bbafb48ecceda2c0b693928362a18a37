import { useBlogType } from "@vuepress/plugin-blog/client";
import { inject, provide } from "vue";
export const articlesSymbol = Symbol(__VUEPRESS_DEV__ ? "articles" : "");
/**
 * Inject articles
 */
export const useArticles = () => {
    const articles = inject(articlesSymbol);
    if (!articles)
        throw new Error("useArticles() is called without provider.");
    return articles;
};
export const setupArticles = () => {
    const articles = useBlogType("article");
    provide(articlesSymbol, articles);
};
//# sourceMappingURL=useArticles.js.map