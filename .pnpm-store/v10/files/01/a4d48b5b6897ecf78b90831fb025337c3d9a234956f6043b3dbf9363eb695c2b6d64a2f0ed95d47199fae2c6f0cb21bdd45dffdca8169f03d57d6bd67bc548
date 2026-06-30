import { hasGlobalComponent } from "@vuepress/helper/client";
import { defineComponent, h, resolveComponent } from "vue";
import MainFadeInUpTransition from "@theme-hope/components/base/MainFadeInUpTransition";
import MainLayout from "@theme-hope/components/base/MainLayout";
import PageContent from "@theme-hope/components/base/PageContent";
import SkipLink from "@theme-hope/components/base/SkipLink";
import HomePage from "@theme-hope/components/home/HomePage";
import PortfolioHome from "@theme-hope/components/home/PortfolioHome";
import { useData } from "@theme-hope/composables/useData";
export default defineComponent({
    name: "Layout",
    slots: Object,
    setup(_props, { slots }) {
        const { frontmatter, page } = useData();
        return () => [
            h(SkipLink),
            h(MainLayout, null, {
                ...slots,
                default: slots.default ??
                    (() => frontmatter.value.portfolio
                        ? h(PortfolioHome, null, slots)
                        : frontmatter.value.home
                            ? h(HomePage, null, slots)
                            : h(MainFadeInUpTransition, () => h(PageContent, { key: page.value.path }, slots))),
                navScreenBottom: slots.navScreenBottom ??
                    (hasGlobalComponent("BloggerInfo")
                        ? () => h(resolveComponent("BloggerInfo"))
                        : null),
            }),
        ];
    },
});
//# sourceMappingURL=Layout.js.map