import { defineComponent, h, toRef } from "vue";
import { RouteLink, useRouter, withBase } from "vuepress/client";
import { SlideIcon, StickyIcon } from "@theme-hope/components/blog/icons";
import LockIcon from "@theme-hope/components/encrypt/LockIcon";
import PageInfo from "@theme-hope/components/info/PageInfo";
import { useArticleInfo } from "@theme-hope/composables/blog/useArticleInfo";
import "../../styles/blog/article-item.scss";
export default defineComponent({
    name: "ArticleItem",
    props: {
        /**
         * Article information
         *
         * 文章信息
         */
        info: {
            type: Object,
            required: true,
        },
        /**
         * Article path
         *
         * 文章路径
         */
        path: { type: String, required: true },
    },
    slots: Object,
    setup(props, { slots }) {
        const articleInfo = toRef(props, "info");
        const { info: pageInfo, items } = useArticleInfo(props);
        const router = useRouter();
        return () => {
            const { title, type, isEncrypted = false, cover = null, excerpt, sticky, } = articleInfo.value;
            const info = pageInfo.value;
            return h("div", {
                class: "vp-article-wrapper",
                onClick: (event) => {
                    if (event.target?.matches("summary"))
                        return;
                    event.preventDefault();
                    void router.push(props.path);
                },
            }, h("article", {
                class: "vp-article-item",
                vocab: "https://schema.org/",
                typeof: "Article",
            }, [
                slots.articleCover?.({ cover }) ??
                    (cover
                        ? [
                            h("img", {
                                class: "vp-article-cover",
                                src: withBase(cover),
                                alt: "",
                                loading: "lazy",
                            }),
                            h("meta", {
                                property: "image",
                                content: withBase(cover),
                            }),
                        ]
                        : []),
                sticky ? h(StickyIcon) : null,
                h(RouteLink, { to: props.path }, () => slots.articleTitle?.({ title, isEncrypted, type }) ??
                    h("header", { class: "vp-article-title" }, [
                        isEncrypted ? h(LockIcon) : null,
                        type === "slide" ? h(SlideIcon) : null,
                        h("span", { property: "headline" }, title),
                    ])),
                slots.articleExcerpt?.({ excerpt }) ??
                    (excerpt
                        ? h("div", {
                            class: "vp-article-excerpt",
                            innerHTML: excerpt,
                        })
                        : null),
                h("hr", { class: "vp-article-hr" }),
                slots.articleInfo?.(info) ??
                    h(PageInfo, {
                        info,
                        items: items.value,
                        onClick: (event) => {
                            event.stopPropagation();
                        },
                    }),
            ]));
        };
    },
});
//# sourceMappingURL=ArticleItem.js.map