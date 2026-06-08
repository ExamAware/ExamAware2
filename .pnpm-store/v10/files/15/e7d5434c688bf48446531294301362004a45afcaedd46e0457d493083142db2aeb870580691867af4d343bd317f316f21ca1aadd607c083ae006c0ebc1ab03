import type { App } from 'vuepress';
import type { LocaleConfig, LocaleData } from 'vuepress/shared';
import type { ExactLocaleConfig } from '../../shared/index.js';
import { Logger } from '../utils/index.js';
import type { DefaultLocaleInfo } from './types.js';
/**
 * Get locale info
 *
 * 获取本地化信息
 *
 * @param app - VuePress App / VuePress 应用
 * @param logger - Logger / 日志记录器
 *
 * @returns Array of locale path and language pairs / 本地化路径和语言对的数组
 */
export declare const getLocaleInfo: (app: App, logger?: Logger) => [localePath: string, lang: string][];
export declare const getLocaleData: <T extends LocaleData>(info: DefaultLocaleInfo<T>, lang: string, logger?: Logger) => T;
export interface GetLocaleConfigOption<T extends LocaleData> {
    /** VuePress Node app */
    app: App;
    /** Default locale config */
    default: DefaultLocaleInfo<T>;
    /** user locale config */
    config?: LocaleConfig<T> | undefined;
    /** plugin name */
    name?: string;
}
/**
 * Get final locale config for client
 *
 * 获取客户端的最终本地化配置
 *
 * @param options - Configuration options / 配置选项
 *
 * @returns Final locale config / 最终本地化配置
 */
export declare const getFullLocaleConfig: <T extends LocaleData>({ app, name, default: defaultLocaleData, config: userLocalesConfig, }: GetLocaleConfigOption<T>) => ExactLocaleConfig<T>;
