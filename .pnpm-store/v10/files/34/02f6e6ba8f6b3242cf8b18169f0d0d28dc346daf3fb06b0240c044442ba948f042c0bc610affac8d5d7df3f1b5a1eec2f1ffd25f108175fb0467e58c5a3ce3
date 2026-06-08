import { defineComponent, h } from "vue";
import { AuthorIcon } from "@theme-hope/components/info/icons";
import { useMetaLocale } from "@theme-hope/composables/info/useMetaLocale";
import { usePure } from "@theme-hope/composables/usePure";
import "../../styles/info/author-info.scss";
export default defineComponent({
    name: "AuthorInfo",
    inheritAttrs: false,
    props: {
        /**
         * Author information
         *
         * 作者信息
         */
        author: {
            type: Array,
            required: true,
        },
    },
    setup(props) {
        const metaLocale = useMetaLocale();
        const isPure = usePure();
        return () => props.author.length > 0
            ? h("span", {
                class: "page-author-info",
                "aria-label": `${metaLocale.value.author}${isPure.value ? "" : "🖊"}`,
                ...(isPure.value ? {} : { "data-balloon-pos": "up" }),
            }, [
                h(AuthorIcon),
                h("span", props.author.map((item) => item.url
                    ? h("a", {
                        class: "page-author-item",
                        href: item.url,
                        target: "_blank",
                        rel: "noopener noreferrer",
                    }, item.name)
                    : h("span", { class: "page-author-item" }, item.name))),
                h("span", {
                    property: "author",
                    content: props.author.map((item) => item.name).join(", "),
                }),
            ])
            : null;
    },
});
//# sourceMappingURL=AuthorInfo.js.map