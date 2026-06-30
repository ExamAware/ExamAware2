import { entries, fromEntries } from "@vuepress/helper/client";
import { defineComponent, h } from "vue";
import ThemeColorPicker from "@theme-hope/components/appearance/ThemeColorPicker";
import { useAppearanceLocale } from "@theme-hope/composables/appearance/useAppearanceLocale";
import cssVariables from "../../styles/variables.module.scss";
import "../../styles/appearance/theme-color.scss";
export const hasMultipleThemeColors = cssVariables.hasMultipleThemeColors === "true";
const themeColors = hasMultipleThemeColors
    ? fromEntries(entries(cssVariables).filter(([key]) => key.startsWith("theme-")))
    : {};
export default defineComponent({
    name: "ThemeColor",
    setup() {
        const appearanceLocale = useAppearanceLocale();
        return () => hasMultipleThemeColors
            ? h("div", { class: "vp-theme-color" }, [
                h("label", { class: "vp-theme-color-title", for: "theme-color-picker" }, appearanceLocale.value.themeColor),
                h(ThemeColorPicker, { themeColors }),
            ])
            : null;
    },
});
//# sourceMappingURL=ThemeColor.js.map