import { removeLeadingSlash } from 'vuepress/shared';
import { getBundlerName } from './getBundlerName.js';
import { mergeViteConfig } from './vite/index.js';
/**
 * Handle specific path when running VuePress Dev Server
 *
 * 在运行 VuePress 开发服务器时处理特定路径
 *
 * @param bundlerOptions - VuePress Bundler config / VuePress 打包器配置
 * @param app - VuePress Node App / VuePress Node 应用
 * @param options - Dev server options / 开发服务器选项
 */
export const customizeDevServer = (bundlerOptions, app, { errMsg = 'The server encountered an error', response: responseHandler, path, }) => {
    const { base } = app.siteData;
    const bundlerName = getBundlerName(app);
    // in dev
    if (app.env.isDev) {
        // for vite
        if (bundlerName === 'vite') {
            const viteBundlerOptions = bundlerOptions;
            const handler = (request, response) => {
                responseHandler(request, response)
                    .then((data) => {
                    response.statusCode = 200;
                    response.end(data);
                })
                    .catch(() => {
                    response.statusCode = 500;
                    response.end(errMsg);
                });
            };
            const viteMockRequestPlugin = {
                name: `virtual:dev-server-mock/${path}`,
                configureServer: ({ middlewares }) => {
                    middlewares.use(`${base}${removeLeadingSlash(path)}`, handler);
                },
            };
            viteBundlerOptions.viteOptions = mergeViteConfig(viteBundlerOptions.viteOptions ?? {}, { plugins: [viteMockRequestPlugin] });
        }
        // for webpack
        else if (bundlerName === 'webpack') {
            const webpackBundlerOptions = bundlerOptions;
            const { devServerSetupMiddlewares } = webpackBundlerOptions;
            webpackBundlerOptions.devServerSetupMiddlewares = (middlewares, server) => {
                server.app?.get(`${base}${removeLeadingSlash(path)}`, (request, response) => {
                    responseHandler(request, response)
                        .then((data) => response.status(200).send(data))
                        .catch(() => response.status(500).send(errMsg));
                });
                return devServerSetupMiddlewares
                    ? devServerSetupMiddlewares(middlewares, server)
                    : middlewares;
            };
        }
    }
};
