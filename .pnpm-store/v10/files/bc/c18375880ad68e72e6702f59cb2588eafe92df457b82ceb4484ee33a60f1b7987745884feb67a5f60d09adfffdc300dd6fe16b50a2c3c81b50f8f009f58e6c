import { watchImmediate } from "@vueuse/core";
import { defineComponent, h, ref } from "vue";
import { useRoute, useRoutePath } from "vuepress/client";
import SidebarChild from "@theme-hope/components/sidebar/SidebarChild";
import SidebarGroup from "@theme-hope/components/sidebar/SidebarGroup";
import { isActiveSidebarItem } from "@theme-hope/utils/sidebar/isActiveSidebarItem";
import "../../styles/sidebar/sidebar-links.scss";
export default defineComponent({
    name: "SidebarLinks",
    props: {
        /**
         * Sidebar links config
         *
         * 侧边栏链接配置
         */
        config: {
            type: Array,
            required: true,
        },
    },
    setup(props) {
        const route = useRoute();
        const routePath = useRoutePath();
        const openGroupIndex = ref(-1);
        const toggleGroup = (index) => {
            openGroupIndex.value = index === openGroupIndex.value ? -1 : index;
        };
        watchImmediate(routePath, () => {
            const index = props.config.findIndex((item) => isActiveSidebarItem(route, item));
            openGroupIndex.value = index;
        }, { flush: "post" });
        return () => h("ul", { class: "vp-sidebar-links" }, props.config.map((config, index) => h("li", "children" in config
            ? h(SidebarGroup, {
                config,
                open: index === openGroupIndex.value,
                onToggle: () => {
                    toggleGroup(index);
                },
            })
            : h(SidebarChild, { config }))));
    },
});
//# sourceMappingURL=SidebarLinks.js.map