/** Load a typescript configuration file.
 * For speed, the typescript file is transpiled to javascript and cached.
 *
 * @param T type of default export value in the configuration file
 * @param outDir location to store the compiled javascript.
 *  Defaults to $HOME/.cache/config-file-ts/<ts-file-path>/
 * @returns the default exported value from the configuration file or undefined
 */
export declare function loadTsConfig<T>(tsFile: string, outDir?: string | undefined, strict?: boolean): T | undefined;
/** @return the directory that will be used to store transpilation output. */
export declare function defaultOutDir(tsFile: string, programName?: string): string;
