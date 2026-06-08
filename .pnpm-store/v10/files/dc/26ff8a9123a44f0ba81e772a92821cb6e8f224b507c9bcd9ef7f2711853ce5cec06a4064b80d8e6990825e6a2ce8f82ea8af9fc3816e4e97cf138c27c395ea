import { isLinkAbsolute } from "@vuepress/helper/client";
import { defineComponent, h, resolveComponent } from "vue";
import { withBase } from "vuepress/client";
import { generateIndexFromHash } from "vuepress-shared/client";
import { useNavigate } from "@theme-hope/composables/useNavigate";
import { usePure } from "@theme-hope/composables/usePure";
import cssVariables from "../../styles/variables.module.scss";
import "../../styles/blog/project-panel.scss";
export default defineComponent({
    name: "ProjectPanel",
    props: {
        /** 项目列表 */
        items: {
            type: Array,
            required: true,
        },
    },
    setup(props) {
        const isPure = usePure();
        const navigate = useNavigate();
        return () => h("div", { class: "vp-project-panel" }, props.items.map(({ icon, link, name, desc, background }) => h("a", {
            class: [
                "vp-project-card",
                {
                    [`color${generateIndexFromHash(name, Number(cssVariables.colorNumber))}`]: !isPure.value && !background,
                },
            ],
            ...(background ? { style: background } : {}),
            href: isLinkAbsolute(link) ? withBase(link) : link,
            onClick: (event) => {
                navigate(link);
                event.preventDefault();
            },
        }, [
            icon
                ? h(resolveComponent("VPIcon"), {
                    class: "vp-project-icon",
                    icon,
                })
                : null,
            h("div", { class: "vp-project-name" }, name),
            h("div", { class: "vp-project-desc" }, desc),
        ])));
    },
});
//# sourceMappingURL=ProjectPanel.js.map