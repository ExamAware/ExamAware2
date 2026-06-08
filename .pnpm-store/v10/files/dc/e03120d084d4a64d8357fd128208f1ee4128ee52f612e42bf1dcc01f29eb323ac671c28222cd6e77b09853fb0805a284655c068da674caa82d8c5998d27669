import { entries } from "@vuepress/helper/client";
import { defineComponent, h } from "vue";
import { RouteLink, useFrontmatter } from "vuepress/client";
import { generateIndexFromHash } from "vuepress-shared/client";
import { useTagMap } from "@theme-hope/composables/blog/useTagMap";
import cssVariables from "../../styles/variables.module.scss";
import "../../styles/blog/tag-list.scss";
export default defineComponent({
    name: "TagList",
    setup() {
        const frontmatter = useFrontmatter();
        const tagMap = useTagMap();
        const isActive = (name) => name === frontmatter.value.blog?.name;
        return () => h("ul", { class: "vp-tag-list" }, entries(tagMap.value.map)
            // Sort from more to less
            .sort(([, a], [, b]) => b.items.length - a.items.length)
            .map(([tag, { path, items }]) => h("li", { class: "vp-tag-item" }, h(RouteLink, {
            class: [
                "vp-tag",
                `color${generateIndexFromHash(tag, Number(cssVariables.colorNumber))}`,
                { active: isActive(tag) },
            ],
            to: path,
        }, () => [tag, h("span", { class: "vp-tag-count" }, items.length)]))));
    },
});
//# sourceMappingURL=TagList.js.map