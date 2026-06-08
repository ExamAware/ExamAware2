import { BuildFromOxlintConfigOptions, OxlintConfig, OxlintConfigOverride, OxlintConfigRules } from './types.js';
/**
 * checks if the oxlint rule is activated/deactivated and append/remove it.
 */
export declare const handleRulesScope: (oxlintRules: OxlintConfigRules, rules: Record<string, "off">, options?: BuildFromOxlintConfigOptions) => void;
/**
 * tries to return the "rules" section from the config.
 * it returns `undefined` when not found or invalid.
 */
export declare const readRulesFromConfig: (config: OxlintConfig | OxlintConfigOverride) => OxlintConfigRules | undefined;
