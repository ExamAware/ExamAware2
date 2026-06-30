import { defineComponent, h, shallowRef } from "vue";
import { onContentUpdated } from "vuepress/client";
import { useThemeLocale } from "@theme-hope/composables/useTheme";
import "../../styles/base/skip-link.scss";
const focusMainContent = ({ target }) => {
    const el = document.querySelector(target.hash);
    if (el) {
        const removeTabIndex = () => {
            el.removeAttribute("tabindex");
            el.removeEventListener("blur", removeTabIndex);
        };
        el.setAttribute("tabindex", "-1");
        el.addEventListener("blur", removeTabIndex);
        el.focus();
        window.scrollTo(0, 0);
    }
};
export default defineComponent({
    name: "SkipLink",
    props: {
        /** @description Content ID */
        content: {
            type: String,
            default: "main-content",
        },
    },
    setup(props) {
        const themeLocale = useThemeLocale();
        const skipToMainContent = shallowRef();
        onContentUpdated(() => {
            skipToMainContent.value?.focus();
        });
        return () => [
            h("span", {
                ref: skipToMainContent,
                tabindex: "-1",
            }),
            h("a", {
                href: `#${props.content}`,
                class: "vp-skip-link sr-only",
                onClick: focusMainContent,
            }, themeLocale.value.routerLocales.skipToContent),
        ];
    },
});
//# sourceMappingURL=SkipLink.js.map