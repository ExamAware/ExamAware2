import { getBundlerName } from '../getBundlerName.js';
/**
 * Chain webpack
 *
 * 链式配置 webpack
 *
 * @param bundlerOptions - VuePress Bundler config / VuePress 打包器配置
 * @param app - VuePress Node App / VuePress Node 应用
 * @param chain - Chain function / 链式配置函数
 */
export const chainWebpack = (bundlerOptions, app, chain) => {
    if (getBundlerName(app) === 'webpack') {
        const webpackBundlerOptions = bundlerOptions;
        const { chainWebpack: originalChainWebpack } = webpackBundlerOptions;
        webpackBundlerOptions.chainWebpack = (config, isServer, isBuild) => {
            originalChainWebpack?.(config, isServer, isBuild);
            chain(config, isServer, isBuild);
        };
    }
};
