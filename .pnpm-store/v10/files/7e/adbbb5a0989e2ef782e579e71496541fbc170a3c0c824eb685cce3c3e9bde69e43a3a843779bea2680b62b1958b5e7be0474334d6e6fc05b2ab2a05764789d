import type { GitPluginOptions } from '../options.js';
import type { MergedRawCommit, RawCommit } from '../typings.js';
/**
 * Get raw commits for a specific file
 *
 * ${commit_hash} ${author_name} ${author_email} ${author_date} ${subject} ${ref} ${body}
 *
 * @see {@link https://git-scm.com/docs/pretty-formats | documentation} for details.
 */
export declare const getRawCommits: (filepath: string, cwd: string, options: GitPluginOptions) => Promise<RawCommit[]>;
/**
 * Merge raw commits by hash
 *
 * 按哈希值合并原始提交记录
 *
 * @param commits - Raw commits
 *
 * 原始提交记录
 */
export declare const mergeRawCommits: (commits: RawCommit[]) => MergedRawCommit[];
/**
 * Get merged commits for multiple file paths
 *
 * 获取多个文件路径的合并提交记录
 *
 * @param filepaths - File paths to get commits for
 *
 * 要获取提交记录的文件路径
 *
 * @param cwd - Working directory
 *
 * 工作目录
 *
 * @param options - Git plugin options
 *
 * Git 插件选项
 */
export declare const getCommits: (filepaths: string[], cwd: string, options: GitPluginOptions) => Promise<MergedRawCommit[]>;
