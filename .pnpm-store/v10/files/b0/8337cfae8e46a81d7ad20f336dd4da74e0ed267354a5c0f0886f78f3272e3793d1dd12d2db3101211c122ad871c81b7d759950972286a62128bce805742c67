import type { ComputedRef, MaybeRefOrGetter } from 'vue';
import type { GitChangelogInfo } from '../../shared/index.js';
/**
 * Git changelog item
 *
 * Git 变更日志项目
 */
export interface GitChangelogItem extends GitChangelogInfo {
    date: string;
}
/**
 * Changelog composable
 *
 * 变更日志组合式函数
 *
 * @param enabled - Whether to enable changelog
 *
 * 是否启用变更日志
 *
 * @default true
 */
export declare const useChangelog: (enabled?: MaybeRefOrGetter<boolean>) => ComputedRef<GitChangelogItem[]>;
