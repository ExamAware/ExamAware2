import { useBlogType } from "@vuepress/plugin-blog/client";
import { computed, defineComponent, h } from "vue";
import { useFrontmatter, usePage } from "vuepress/client";
import ArticleList from "@theme-hope/components/blog/ArticleList";
import ArticleType from "@theme-hope/components/blog/ArticleType";
import InfoPanel from "@theme-hope/components/blog/InfoPanel";
import DropTransition from "@theme-hope/components/transitions/DropTransition";
import { useArticles } from "@theme-hope/composables/blog/useArticles";
import { useStars } from "@theme-hope/composables/blog/useStars";
export default defineComponent({
    name: "TypePage",
    slots: Object,
    setup(_props, { slots }) {
        const blogType = useBlogType();
        const frontmatter = useFrontmatter();
        const page = usePage();
        const articles = useArticles();
        const stars = useStars();
        const items = computed(() => {
            const blogConfig = frontmatter.value.blog;
            if (blogConfig?.type !== "type" || !blogConfig.key)
                return articles.value.items;
            return blogConfig.key === "star"
                ? stars.value.items
                : blogType.value.items;
        });
        return () => h("div", { class: "vp-page vp-blog" }, h("div", { class: "blog-page-wrapper" }, [
            h("main", { id: "main-content", class: "vp-blog-main" }, slots.default?.() ?? [
                h(DropTransition, () => h(ArticleType)),
                slots.articlesBefore?.(),
                h(DropTransition, { appear: true, delay: 0.08 }, () => h(ArticleList, { key: page.value.path, items: items.value })),
                slots.articlesAfter?.(),
            ]),
            h(DropTransition, { appear: true, delay: 0.08 }, () => h(InfoPanel, { key: "blog" }, slots)),
        ]));
    },
});
//# sourceMappingURL=TypePage.js.map