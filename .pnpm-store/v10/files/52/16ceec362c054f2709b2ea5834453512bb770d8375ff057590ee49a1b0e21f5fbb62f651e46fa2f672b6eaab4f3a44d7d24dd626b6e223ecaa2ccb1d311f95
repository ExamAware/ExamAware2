import { computed } from "vue";
import { useData } from "@theme-hope/composables/useData";
export const useBlogOptions = () => {
    const { theme, themeLocale } = useData();
    return computed(() => ({
        ...theme.value.blog,
        ...themeLocale.value.blog,
    }));
};
//# sourceMappingURL=useBlogOptions.js.map