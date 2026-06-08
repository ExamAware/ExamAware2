import { SandpackPredefinedTemplate, SandpackOptions, SandpackSetup } from 'sandpack-vue3';
import { ReplProps } from '@vue/repl';

type KotlinPlaygroundInstance = any;
interface KotlinPlaygroundOptions {
    server?: string;
    version?: string;
    onChange?: (code: string) => void;
    onRun?: () => void;
    onError?: () => void;
    getJsCode?: (code: string) => void;
    onTestPassed?: () => void;
    onTestFailed?: () => void;
    onOpenConsole?: () => void;
    onCloseConsole?: () => void;
    callback?: (targetNode: HTMLElement, mountNode: HTMLElement) => void;
    getInstance?: (instance: KotlinPlaygroundInstance) => void;
}

/**
 * Sandpack config
 *
 * @description Sandpack is using [`sandpack-vue3`](https://github.com/jerrywu001/sandpack-vue3)
 *
 * Sandpack 交互演示配置
 *
 * @description Sandpack 使用 [`sandpack-vue3`](https://github.com/jerrywu001/sandpack-vue3)
 */
interface SandpackConfig {
    /**
     * Specify the template
     *
     * 指定模板
     */
    template?: SandpackPredefinedTemplate;
    /**
     * Options to configure the sandpack
     *
     * sandpack 配置项
     */
    options?: SandpackOptions;
    /**
     * Options to configure the customSetup
     *
     * sandpack customSetup 配置项
     */
    customSetup?: SandpackSetup;
}

/**
 * Vue Playground options
 *
 * @description Vue playground is using [`@vue/repl`](https://github.com/vuejs/repl)
 *
 * Vue 交互演示配置
 *
 * @description Vue playground 使用 [`@vue/repl`](https://github.com/vuejs/repl)
 */
interface VuePlaygroundOptions extends Omit<ReplProps, "store" | "editor"> {
    /**
     * Specify the version of vue
     *
     * 指定 vue 版本
     */
    vueVersion?: string;
    /**
     * Specify default URL to import Vue dev runtime from in the sandbox
     *
     * 指定默认的 Vue 开发运行时
     *
     * @default "https://unpkg.com/@vue/runtime-dom@${version}/dist/runtime-dom.esm-browser.js"
     */
    vueRuntimeDevUrl?: string | (() => string);
    /**
     * Specify default URL to import Vue prod runtime from in the sandbox
     *
     * 指定默认的 Vue 生产运行时
     *
     * @default "https://unpkg.com/@vue/runtime-dom@${version}/dist/runtime-dom.esm-browser.prod.js"
     */
    vueRuntimeProdUrl?: string | (() => string);
    /**
     * Specify default URL to import Vue Server Renderer from in the sandbox
     *
     * 指定默认的 Vue 服务端渲染器
     *
     * @default "https://unpkg.com/@vue/server-renderer@${version}/dist/server-renderer.esm-browser.js"
     */
    vueServerRendererUrl?: string | (() => string);
}

declare const defineKotlinPlaygroundConfig: (options: KotlinPlaygroundOptions) => void;
declare const useKotlinPlaygroundConfig: () => KotlinPlaygroundOptions;

declare const defineSandpackConfig: (config: SandpackConfig) => void;
declare const useSandpackConfig: () => SandpackConfig;

declare const defineVuePlaygroundConfig: (options: VuePlaygroundOptions) => void;
declare const useVuePlaygroundConfig: () => VuePlaygroundOptions;

export { defineKotlinPlaygroundConfig, defineSandpackConfig, defineVuePlaygroundConfig, useKotlinPlaygroundConfig, useSandpackConfig, useVuePlaygroundConfig };
