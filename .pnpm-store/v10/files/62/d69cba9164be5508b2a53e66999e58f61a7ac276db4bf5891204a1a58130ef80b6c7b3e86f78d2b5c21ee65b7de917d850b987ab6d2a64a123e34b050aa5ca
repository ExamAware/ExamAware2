type LegacyConfig = {
    rules?: Record<string, 'off'>;
    overrides?: {
        files: string[];
        excludedFiles?: string[];
        rules?: Record<string, 'off'>;
    }[];
};
type FlatConfig = {
    name?: string;
    rules?: Record<string, 'off'>;
    ignores?: string[];
};
export declare const overrideDisabledRulesForVueAndSvelteFiles: <C extends LegacyConfig>(config: C) => C;
export type SplittedFlatConfig<C extends FlatConfig> = [C] | [C, FlatConfig];
export declare const splitDisabledRulesForVueAndSvelteFiles: <C extends FlatConfig>(config: C) => SplittedFlatConfig<C>;
export declare const splitDisabledRulesForVueAndSvelteFilesDeep: <T extends Record<string, FlatConfig>>(config: T) => { [K in keyof T]: SplittedFlatConfig<T[K]>; };
export {};
