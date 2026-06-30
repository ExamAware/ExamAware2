import { defineComponent, h } from "vue";
import MainLayout from "@theme-hope/components/base/MainLayout";
import SkipLink from "@theme-hope/components/base/SkipLink";
import BloggerInfo from "@theme-hope/components/blog/BloggerInfo";
import InfoList from "@theme-hope/components/blog/InfoList";
import { useWindowSize } from "@theme-hope/composables/useWindowSize";
import "../../styles/blog/blog-main-layout.scss";
export default defineComponent({
    name: "BlogMainLayout",
    slots: Object,
    setup(_props, { slots }) {
        const { isMobile } = useWindowSize();
        return () => [
            h(SkipLink),
            h(MainLayout, { noSidebar: !isMobile.value, noToc: true }, {
                ...slots,
                navScreenBottom: () => slots.navScreenBottom?.() ?? h(BloggerInfo, {}, slots),
                sidebarItems: (sidebarItems) => slots.sidebarItems?.(sidebarItems) ??
                    (isMobile.value ? h(InfoList) : null),
            }),
        ];
    },
});
//# sourceMappingURL=BlogMainLayout.js.map