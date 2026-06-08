import { computed, toValue } from 'vue';
import { useData } from 'vuepress/client';
/**
 * Contributors composable
 *
 * 贡献者组合式函数
 *
 * @param enabled - Whether to enable contributors
 *
 * 是否启用贡献者
 *
 * @default true
 */
export const useContributors = typeof __GIT_CONTRIBUTORS__ === 'boolean' && __GIT_CONTRIBUTORS__
    ? (enabled = true) => {
        const { frontmatter, page } = useData();
        return computed(() => {
            if (frontmatter.value.contributors === false || !toValue(enabled))
                return [];
            return page.value.git.contributors ?? [];
        });
    }
    : () => computed(() => []);
