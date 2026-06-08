import { defineComponent, h } from "vue";
import { useFrontmatter } from "vuepress/client";
import MarkdownContent from "@theme-hope/components/base/MarkdownContent";
import PortfolioHero from "@theme-hope/components/home/PortfolioHero";
import DropTransition from "@theme-hope/components/transitions/DropTransition";
import "../../styles/home/portfolio-home.scss";
export default defineComponent({
    name: "PortfolioHome",
    slots: Object,
    setup(_props, { slots }) {
        const frontmatter = useFrontmatter();
        return () => {
            const content = frontmatter.value.content ?? "portfolio";
            return h("main", {
                id: "main-content",
                class: "vp-page vp-portfolio-home",
                "aria-labelledby": "main-title",
            }, [
                h(PortfolioHero, null, slots),
                content === "none"
                    ? null
                    : (slots.content?.() ??
                        h("div", h(DropTransition, { appear: true, delay: 0.24 }, () => h(MarkdownContent, {
                            class: {
                                "vp-portfolio-content": content === "portfolio",
                            },
                        }, slots)))),
            ]);
        };
    },
});
//# sourceMappingURL=PortfolioHome.js.map