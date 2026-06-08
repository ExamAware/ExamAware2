import type { GitContributorInfo, KnownGitProvider } from '../shared/index.js';
import type { ContributorsOptions } from './options.js';
import type { MergedRawCommit } from './typings.js';
/**
 * Get raw contributors from commits
 *
 * 从提交记录中获取原始贡献者信息
 *
 * @param commits - Git commits
 *
 * Git 提交记录
 *
 * @param options - Contributors options
 *
 * 贡献者选项
 *
 * @param gitProvider - Git provider
 *
 * Git 提供商
 */
export declare const getRawContributors: (commits: MergedRawCommit[], options: ContributorsOptions, gitProvider: KnownGitProvider | null) => GitContributorInfo[];
/**
 * Resolve contributors
 *
 * 解析贡献者
 *
 * @param commits - Git commits
 *
 * Git 提交记录
 *
 * @param gitProvider - Git provider
 *
 * Git 提供商
 *
 * @param options - Contributors options
 *
 * 贡献者选项
 *
 * @param extraContributors - Extra contributors
 *
 * 额外贡献者
 *
 * @default []
 */
export declare const resolveContributors: (commits: MergedRawCommit[], gitProvider: KnownGitProvider | null, options: ContributorsOptions, extraContributors?: string[]) => GitContributorInfo[];
