export { isFunction, isString, isPlainObject } from 'vuepress/shared';
/**
 * Check if a value is defined
 *
 * 检查值是否已定义
 *
 * @param val - The value to check / 要检查的值
 *
 * @returns Whether the value is defined / 值是否已定义
 *
 * @example
 * ```ts
 * isDef(undefined) // false
 * isDef(null) // true
 * isDef(0) // true
 * ```
 */
export declare const isDef: <T = any>(val?: T) => val is T;
/**
 * Check if a value is boolean
 *
 * 检查值是否为布尔值
 *
 * @param val - The value to check / 要检查的值
 *
 * @returns Whether the value is boolean / 值是否为布尔值
 *
 * @example
 * ```ts
 * isBoolean(true) // true
 * isBoolean(false) // true
 * isBoolean('true') // false
 * ```
 */
export declare const isBoolean: (val: any) => val is boolean;
/**
 * Check if a value is number
 *
 * 检查值是否为数字
 *
 * @param val - The value to check / 要检查的值
 *
 * @returns Whether the value is number / 值是否为数字
 *
 * @example
 * ```ts
 * isNumber(42) // true
 * isNumber('42') // false
 * isNumber(NaN) // true
 * ```
 */
export declare const isNumber: (val: any) => val is number;
/**
 * Check if a value is array
 *
 * 检查值是否为数组
 */
export declare const isArray: (arg: any) => arg is any[];
/**
 * Check if a value is regexp
 *
 * 检查值是否为正则表达式
 *
 * @param val - The value to check / 要检查的值
 *
 * @returns Whether the value is regexp / 值是否为正则表达式
 *
 * @example
 * ```ts
 * isRegExp(/test/) // true
 * isRegExp('test') // false
 * ```
 */
export declare const isRegExp: (val: unknown) => val is RegExp;
/**
 * Check if a value is starting with the given prefix
 *
 * 检查值是否以给定前缀开头
 *
 * @param str - The string to check / 要检查的字符串
 * @param prefix - The prefix to match / 要匹配的前缀
 *
 * @returns Whether the string starts with the prefix / 字符串是否以前缀开头
 *
 * @example
 * ```ts
 * startsWith('hello world', 'hello') // true
 * startsWith('hello world', 'world') // false
 * startsWith(123, 'hello') // false
 * ```
 */
export declare const startsWith: (str: unknown, prefix: string) => boolean;
/**
 * Check if a value is ending with the given suffix
 *
 * 检查值是否以给定后缀结尾
 *
 * @param str - The string to check / 要检查的字符串
 * @param suffix - The suffix to match / 要匹配的后缀
 *
 * @returns Whether the string ends with the suffix / 字符串是否以后缀结尾
 *
 * @example
 * ```ts
 * endsWith('hello world', 'world') // true
 * endsWith('hello world', 'hello') // false
 * endsWith(123, 'world') // false
 * ```
 */
export declare const endsWith: (str: unknown, suffix: string) => boolean;
export { ensureEndingSlash, ensureLeadingSlash, removeEndingSlash, removeLeadingSlash, } from 'vuepress/shared';
export declare const entries: {
    <T>(o: {
        [s: string]: T;
    } | ArrayLike<T>): [string, T][];
    (o: {}): [string, any][];
};
export declare const fromEntries: {
    <T = any>(entries: Iterable<readonly [PropertyKey, T]>): {
        [k: string]: T;
    };
    (entries: Iterable<readonly any[]>): any;
};
export declare const keys: {
    (o: object): string[];
    (o: {}): string[];
};
export declare const values: {
    <T>(o: {
        [s: string]: T;
    } | ArrayLike<T>): T[];
    (o: {}): any[];
};
