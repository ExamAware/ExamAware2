import { BuildFromOxlintConfigOptions, OxlintConfig, OxlintConfigCategories, OxlintConfigPlugins } from './types.js';
export declare const defaultCategories: OxlintConfigCategories;
/**
 * appends all rules which are enabled by a plugin and falls into a specific category
 */
export declare const handleCategoriesScope: (plugins: OxlintConfigPlugins, categories: OxlintConfigCategories, rules: Record<string, "off">, options?: BuildFromOxlintConfigOptions) => void;
/**
 * tries to return the "categories" section from the config.
 * it returns `undefined` when not found or invalid.
 */
export declare const readCategoriesFromConfig: (config: OxlintConfig) => OxlintConfigCategories | undefined;
