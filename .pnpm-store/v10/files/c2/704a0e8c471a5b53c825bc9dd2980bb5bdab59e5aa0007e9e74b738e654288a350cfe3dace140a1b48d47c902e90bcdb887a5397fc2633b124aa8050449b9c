import { defineComponent, h } from "vue";
import { generateIndexFromHash } from "vuepress-shared/client";
import { TagIcon } from "@theme-hope/components/info/icons";
import { useMetaLocale } from "@theme-hope/composables/info/useMetaLocale";
import { useNavigate } from "@theme-hope/composables/useNavigate";
import { usePure } from "@theme-hope/composables/usePure";
import cssVariables from "../../styles/variables.module.scss";
import "../../styles/info/tag-info.scss";
export default defineComponent({
    name: "TagInfo",
    inheritAttrs: false,
    props: {
        /**
         * Tag information
         *
         * 标签信息
         */
        tag: Array,
    },
    setup(props) {
        const metaLocale = useMetaLocale();
        const navigate = useNavigate();
        const isPure = usePure();
        return () => props.tag?.length
            ? h("span", {
                class: "page-tag-info",
                "aria-label": `${metaLocale.value.tag}${isPure.value ? "" : "🏷"}`,
                ...(isPure.value ? {} : { "data-balloon-pos": "up" }),
            }, [
                h(TagIcon),
                props.tag.map(({ name, path }) => h("span", {
                    class: [
                        "page-tag-item",
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
                    property: "keywords",
                    content: props.tag.map(({ name }) => name).join(","),
                }),
            ])
            : null;
    },
});
//# sourceMappingURL=TagInfo.js.map