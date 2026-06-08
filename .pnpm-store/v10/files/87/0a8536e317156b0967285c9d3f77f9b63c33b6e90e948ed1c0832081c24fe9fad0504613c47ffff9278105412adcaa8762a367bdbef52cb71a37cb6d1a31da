import { isArray } from "@vuepress/helper/client";
import { computed } from "vue";
import { useData } from "@theme-hope/composables/useData";
export const useMetaInfo = () => {
    const { frontmatter, themeLocale } = useData();
    const changelog = computed(() => frontmatter.value.changelog ??
        ((themeLocale.value.changelog ?? false) && !frontmatter.value.home));
    const contributors = computed(() => {
        const { contributors, home } = frontmatter.value;
        return isArray(contributors)
            ? home
                ? false
                : (themeLocale.value.contributors ?? true)
            : (contributors ??
                (home
                    ? false
                    : (themeLocale.value.contributors ?? true)));
    });
    const lastUpdated = computed(() => frontmatter.value.lastUpdated ?? themeLocale.value.lastUpdated ?? true);
    return {
        changelog,
        contributors,
        lastUpdated,
    };
};
//# sourceMappingURL=useMetaInfo.js.map