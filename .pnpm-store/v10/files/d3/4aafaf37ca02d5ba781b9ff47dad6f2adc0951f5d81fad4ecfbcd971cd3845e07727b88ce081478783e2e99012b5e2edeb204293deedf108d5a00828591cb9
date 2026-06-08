import type { IncomingMessage, ServerResponse } from 'node:http';
import type { App } from 'vuepress/core';
/**
 * Options for customizing VuePress Dev Server
 */
export interface DevServerOptions {
    /**
     * Path to be responded
     */
    path: string;
    /**
     * Respond handler
     */
    response: (request: IncomingMessage, response: ServerResponse) => Promise<Buffer | string>;
    /**
     * error msg
     */
    errMsg?: string;
}
/**
 * Handle specific path when running VuePress Dev Server
 *
 * 在运行 VuePress 开发服务器时处理特定路径
 *
 * @param bundlerOptions - VuePress Bundler config / VuePress 打包器配置
 * @param app - VuePress Node App / VuePress Node 应用
 * @param options - Dev server options / 开发服务器选项
 */
export declare const customizeDevServer: (bundlerOptions: unknown, app: App, { errMsg, response: responseHandler, path, }: DevServerOptions) => void;
