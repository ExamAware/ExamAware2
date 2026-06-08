import { isArray } from "@vuepress/helper/client";
import { defineComponent, h } from "vue";
import { useFrontmatter } from "vuepress/client";
import MarkdownContent from "@theme-hope/components/base/MarkdownContent";
import FeatureSection from "@theme-hope/components/home/FeatureSection";
import HeroInfo from "@theme-hope/components/home/HeroInfo";
import HighlightPanel from "@theme-hope/components/home/HighlightSection";
import DropTransition from "@theme-hope/components/transitions/DropTransition";
import "../../styles/home/home-page.scss";
export default defineComponent({
    name: "HomePage",
    slots: Object,
    setup(_props, { slots }) {
        const frontmatter = useFrontmatter();
        return () => {
            const { features, highlights } = frontmatter.value;
            return h("main", {
                id: "main-content",
                class: "vp-page vp-project-home",
                "aria-labelledby": frontmatter.value.heroText === "" ? "" : "main-title",
            }, [
                slots.heroBefore?.(),
                h(HeroInfo, null, slots),
                slots.heroAfter?.(),
                isArray(highlights)
                    ? highlights.map((highlight) => "features" in highlight
                        ? h(FeatureSection, highlight)
                        : h(HighlightPanel, highlight))
                    : isArray(features)
                        ? h(DropTransition, { appear: true, delay: 0.24 }, () => h(FeatureSection, { features }))
                        : null,
                slots.content?.() ??
                    h(DropTransition, { appear: true, delay: 0.32 }, () => h(MarkdownContent, null, slots)),
            ]);
        };
    },
});
//# sourceMappingURL=HomePage.js.map