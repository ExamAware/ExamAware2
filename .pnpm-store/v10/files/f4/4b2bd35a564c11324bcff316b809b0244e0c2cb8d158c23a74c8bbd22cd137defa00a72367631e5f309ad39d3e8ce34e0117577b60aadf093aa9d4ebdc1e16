import { watchImmediate } from "@vueuse/core";
import { computed, defineComponent, h, onMounted, resolveComponent, shallowRef, } from "vue";
import { RouteLink, resolveRoute } from "vuepress/client";
import { useData } from "@theme-hope/composables/useData";
import { getAncestorLinks } from "@theme-hope/utils/getAncestorLinks";
import "../../styles/base/breadcrumb.scss";
export default defineComponent({
    name: "BreadCrumb",
    setup() {
        const { frontmatter, page, routeLocale, routePath, themeLocale } = useData();
        const config = shallowRef([]);
        const enable = computed(() => (frontmatter.value.breadcrumb ??
            themeLocale.value.breadcrumb ??
            true) &&
            config.value.length > 1);
        const enableIcon = computed(() => frontmatter.value.breadcrumbIcon ??
            themeLocale.value.breadcrumbIcon ??
            true);
        const getBreadCrumbConfig = () => {
            const breadcrumbConfig = getAncestorLinks(page.value.path, routeLocale.value)
                .map(({ link, name }) => {
                const { path, meta, notFound } = resolveRoute(link);
                if (notFound || meta.breadcrumbExclude)
                    return null;
                return {
                    title: meta.shortTitle || meta.title || name,
                    icon: meta.icon,
                    path,
                };
            })
                .filter((item) => item !== null);
            if (breadcrumbConfig.length > 1)
                config.value = breadcrumbConfig;
        };
        onMounted(() => {
            watchImmediate(routePath, getBreadCrumbConfig);
        });
        return () => h("nav", { class: ["vp-breadcrumb", { disable: !enable.value }] }, enable.value
            ? h("ol", {
                vocab: "https://schema.org/",
                typeof: "BreadcrumbList",
            }, config.value.map((item, index) => h("li", {
                class: { "is-active": config.value.length - 1 === index },
                property: "itemListElement",
                typeof: "ListItem",
            }, [
                h(RouteLink, {
                    to: item.path,
                    property: "item",
                    typeof: "WebPage",
                }, () => [
                    // Icon
                    enableIcon.value
                        ? h(resolveComponent("VPIcon"), { icon: item.icon })
                        : null,
                    // Text
                    h("span", { property: "name" }, item.title || "Unknown"),
                ]),
                // Meta
                h("meta", { property: "position", content: index + 1 }),
            ])))
            : []);
    },
});
//# sourceMappingURL=BreadCrumb.js.map