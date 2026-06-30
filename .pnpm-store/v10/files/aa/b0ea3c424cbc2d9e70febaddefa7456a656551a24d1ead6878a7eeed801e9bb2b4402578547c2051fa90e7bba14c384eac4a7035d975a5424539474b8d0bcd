import { defineComponent, h } from "vue";
import { useFrontmatter } from "vuepress/client";
import BlogHome from "@theme-hope/components/blog/BlogHome";
import BlogMainLayout from "@theme-hope/components/blog/BlogMainLayout";
import CategoryPage from "@theme-hope/components/blog/CategoryPage";
import TimelinePage from "@theme-hope/components/blog/TimelinePage";
import TypePage from "@theme-hope/components/blog/TypePage";
export default defineComponent({
    name: "Blog",
    slots: Object,
    setup(_props, { slots }) {
        const frontmatter = useFrontmatter();
        return () => {
            const { type, key } = frontmatter.value.blog ?? {};
            return h(BlogMainLayout, null, {
                ...slots,
                default: () => slots.default?.() ??
                    (type === "category"
                        ? h(CategoryPage, null, slots)
                        : type === "type"
                            ? key === "timeline"
                                ? h(TimelinePage, null, slots)
                                : h(TypePage, null, slots)
                            : h(BlogHome, null, slots)),
            });
        };
    },
});
//# sourceMappingURL=Blog.js.map