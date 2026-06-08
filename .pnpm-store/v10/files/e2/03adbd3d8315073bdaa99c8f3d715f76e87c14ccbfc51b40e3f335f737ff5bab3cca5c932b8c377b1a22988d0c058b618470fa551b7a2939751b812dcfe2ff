export type PackageManager = 'bun' | 'npm' | 'pnpm' | 'yarn';
/**
 * Check if a package manager is installed globally.
 *
 * 检查包管理器是否已全局安装
 *
 * @param packageManager - Package manager / 包管理器
 *
 * @returns Whether the package manager is installed / 包管理器是否已安装
 */
export declare const isPackageManagerInstalled: (packageManager: PackageManager) => boolean;
/**
 * Get package manager setting in package.json
 *
 * 获取 package.json 中的包管理器设置
 *
 * @param cwd - Current working directory / 当前工作目录
 * @param deep - Whether to search in parent directories / 是否在父目录中搜索
 *
 * @returns The type of package manager / 包管理器类型
 */
export declare const getPackageManagerSetting: (cwd?: string, deep?: boolean) => PackageManager | null;
/**
 * Get the type of lock file.
 *
 * 获取锁文件的类型
 *
 * @param cwd - Current working directory / 当前工作目录
 * @param deep - Whether to search in parent directories / 是否在父目录中搜索
 *
 * @returns The type of lock file / 锁文件类型
 */
export declare const getTypeofLockFile: (cwd?: string, deep?: boolean) => PackageManager | null;
/**
 * Detect the package manager used in the current project.
 *
 * 检测当前项目使用的包管理器
 *
 * @param cwd - Current working directory / 当前工作目录
 * @param deep - Whether to search in parent directories / 是否在父目录中搜索
 *
 * @returns The type of package manager / 包管理器类型
 */
export declare const getPackageManager: (cwd?: string, deep?: boolean) => PackageManager;
