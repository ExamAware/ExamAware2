import { AppConfig, PluginObject, App, Page } from '@vuepress/core';
import { FSWatcher } from 'chokidar';

/**
 * Base CLI options for commands
 */
interface BaseCommandCliOptions {
    temp?: string;
    cache?: string;
    debug?: boolean;
    config?: string;
    cleanTemp?: boolean;
    cleanCache?: boolean;
}
/**
 * Base options for commands
 */
interface BaseCommandOptions<T extends BaseCommandCliOptions> {
    defaultAppConfig: Partial<AppConfig>;
    sourceDir?: string;
    cliOptions?: T;
}
/**
 * CLI options of `build` command
 */
interface BuildCommandCliOptions extends BaseCommandCliOptions {
    dest?: string;
}
/**
 * Type of `build` command function
 */
type BuildCommand = (options: BaseCommandOptions<BuildCommandCliOptions>) => Promise<void>;
/**
 * CLI options of `dev` command
 */
interface DevCommandCliOptions extends BaseCommandCliOptions {
    port?: number;
    host?: string;
    open?: boolean;
    watch?: boolean;
}
/**
 * Type of `dev` command function
 */
type DevCommand = (options: BaseCommandOptions<DevCommandCliOptions>) => Promise<void>;
/**
 * Type of `info` command function
 */
type InfoCommand = () => Promise<void>;

/**
 * User config type of vuepress
 *
 * It will be transformed to `AppConfig` by cli
 */
type UserConfig = Omit<PluginObject, 'multiple' | 'name'> & Partial<AppConfig>;

declare const build: BuildCommand;

declare const dev: DevCommand;

/**
 * Event handler for page add event
 *
 * Returns the added page
 */
declare const handlePageAdd: (app: App, filePath: string) => Promise<Page | null>;

/**
 * Event handler for page change event
 *
 * Returns the old page and the new page tuple
 */
declare const handlePageChange: (app: App, filePath: string) => Promise<[Page, Page] | null>;

/**
 * Event handler for page unlink event
 *
 * Returns the removed page
 */
declare const handlePageUnlink: (app: App, filePath: string) => Promise<Page | null>;

/**
 * Page deps helper
 */
interface PageDepsHelper {
    /**
     * Handle deps when adding a page
     */
    add: (page: Page) => string[];
    /**
     * Handle deps when removing a page
     */
    remove: (page: Page) => string[];
    /**
     * Get all pages that depend on the `dep`
     */
    get: (dep: string) => string[];
}
/**
 * Create page deps helper
 */
declare const createPageDepsHelper: () => PageDepsHelper;

/**
 * Watch page files and deps, return file watchers
 */
declare const watchPageFiles: (app: App) => FSWatcher[];

declare const watchUserConfigFile: ({ userConfigPath, userConfigDependencies, restart, }: {
    userConfigPath: string;
    userConfigDependencies: string[];
    restart: () => Promise<void>;
}) => FSWatcher[];

declare const info: InfoCommand;

/**
 * Load user config file
 */
declare const loadUserConfig: (userConfigPath?: string) => Promise<{
    userConfig: UserConfig;
    userConfigDependencies: string[];
}>;

/**
 * Resolve app config according to:
 *
 * - default options
 * - user config file
 * - cli options
 */
declare const resolveAppConfig: ({ defaultAppConfig, cliAppConfig, userConfig, }: {
    defaultAppConfig: Partial<AppConfig>;
    cliAppConfig: Partial<AppConfig>;
    userConfig: Partial<AppConfig>;
}) => AppConfig | null;

/**
 * Resolve app config according to command options of cli
 */
declare const resolveCliAppConfig: (sourceDir: string, cliOptions: BaseCommandCliOptions, cwd?: string) => Partial<AppConfig> & Pick<AppConfig, "source">;

declare const resolveConfig: ({ sourceDir, cliOptions, defaultAppConfig, }: {
    sourceDir: string;
    cliOptions: BaseCommandCliOptions;
    defaultAppConfig: Partial<AppConfig>;
}) => Promise<{
    appConfig: AppConfig | null;
    userConfigDependencies: string[];
    userConfigPath?: string;
    userConfigPlugin: PluginObject;
}>;

declare const resolveUserConfig: ({ cliOptionsConfig, cliAppConfigSource, }: {
    cliOptionsConfig?: string;
    cliAppConfigSource: string;
}) => Promise<{
    userConfig: UserConfig;
    userConfigDependencies: string[];
    userConfigPath?: string;
}>;

/**
 * Resolve conventional user config file path
 */
declare const resolveUserConfigConventionalPath: (source: string, cwd?: string) => string | undefined;

/**
 * Resolve file path of user config
 */
declare const resolveUserConfigPath: (config: string, cwd?: string) => string;

/**
 * Transform user config to a vuepress plugin
 */
declare const transformUserConfigToPlugin: (userConfig: UserConfig, source: string, cwd?: string) => PluginObject;

/**
 * Vuepress cli
 */
declare const cli: (defaultAppConfig?: Partial<AppConfig>) => void;

declare const defineUserConfig: (config: UserConfig) => UserConfig;

export { type BaseCommandCliOptions, type BaseCommandOptions, type BuildCommand, type BuildCommandCliOptions, type DevCommand, type DevCommandCliOptions, type InfoCommand, type PageDepsHelper, type UserConfig, build, cli, createPageDepsHelper, defineUserConfig, dev, handlePageAdd, handlePageChange, handlePageUnlink, info, loadUserConfig, resolveAppConfig, resolveCliAppConfig, resolveConfig, resolveUserConfig, resolveUserConfigConventionalPath, resolveUserConfigPath, transformUserConfigToPlugin, watchPageFiles, watchUserConfigFile };
