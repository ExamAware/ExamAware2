import { computed } from "vue";
import { resolveRepoLink, resolveRepoType } from "vuepress-shared/client";
import { useThemeLocale } from "@theme-hope/composables/useTheme";
/**
 * Get navbar config of repository link
 */
export const useNavbarRepo = () => {
    const themeLocale = useThemeLocale();
    const repo = computed(() => themeLocale.value.repo);
    const repoLink = computed(() => repo.value ? resolveRepoLink(repo.value) : null);
    const repoType = computed(() => repo.value ? resolveRepoType(repo.value) : null);
    const repoLabel = computed(() => repoLink.value
        ? (themeLocale.value.repoLabel ?? repoType.value ?? "Source")
        : null);
    return computed(() => {
        if (!repoLink.value ||
            !repoLabel.value ||
            themeLocale.value.repoDisplay === false)
            return null;
        return {
            type: repoType.value ?? "Source",
            label: repoLabel.value,
            link: repoLink.value,
        };
    });
};
//# sourceMappingURL=useNavbarRepo.js.map