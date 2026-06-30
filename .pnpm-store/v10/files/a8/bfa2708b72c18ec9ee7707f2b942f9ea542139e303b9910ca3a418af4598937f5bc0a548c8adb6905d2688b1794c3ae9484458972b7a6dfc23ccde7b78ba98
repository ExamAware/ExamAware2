import { defineComponent, h } from "vue";
import { generateIndexFromHash } from "vuepress-shared/client";
import { CategoryIcon } from "@theme-hope/components/info/icons";
import { useMetaLocale } from "@theme-hope/composables/info/useMetaLocale";
import { useNavigate } from "@theme-hope/composables/useNavigate";
import { usePure } from "@theme-hope/composables/usePure";
import cssVariables from "../../styles/variables.module.scss";
import "../../styles/info/category-info.scss";
export default defineComponent({
    name: "CategoryInfo",
    inheritAttrs: false,
    props: {
        /**
         * Category information
         *
         * 分类信息
         */
        category: {
            type: Array,
            required: true,
        },
    },
    setup(props) {
        const metaLocale = useMetaLocale();
        const navigate = useNavigate();
        const isPure = usePure();
        return () => props.category.length > 0
            ? h("span", {
                class: "page-category-info",
                "aria-label": `${metaLocale.value.category}${isPure.value ? "" : "🌈"}`,
                ...(isPure.value ? {} : { "data-balloon-pos": "up" }),
            }, [
                h(CategoryIcon),
                props.category.map(({ name, path }) => h("span", {
                    class: [
                        "page-category-item",
                        {
                            [`color${generateIndexFromHash(name, Number(cssVariables.colorNumber))}`]: !isPure.value,
                            clickable: path,
                        },
                    ],
                    role: path ? "navigation" : "",
                    onClick: () => {
                        if (path)
                            navigate(path);
                    },
                }, name)),
                h("meta", {
                    property: "articleSection",
                    content: props.category.map(({ name }) => name).join(","),
                }),
            ])
            : null;
    },
});
//# sourceMappingURL=CategoryInfo.js.map