import { PluginSimple, PluginWithOptions } from 'markdown-it';
import { CompilerOptions } from 'typescript';
import { PluginFunction } from 'vuepress/core';
import { SandpackProps } from 'sandpack-vue3';

/**
 * Code demo options
 */
interface CodeDemoOptions {
    /**
     * Whether to use babel to transpile to es5
     *
     * 是否使用 Babel 转义到 ES5
     *
     * @default false
     */
    useBabel: boolean;
    /**
     * JS Library links
     *
     * 引入的 JS 外部库链接
     */
    jsLib: string[];
    /**
     * CSS Library links
     *
     * 引入的 CSS 外部库链接
     */
    cssLib: string[];
    /**
     * Whether to display JSFiddle button
     *
     * 是否显示 JSFiddle 按钮
     *
     * @default true
     */
    jsfiddle?: boolean;
    /**
     * Whether to display CodePen button
     *
     * 是否显示 CodePen 按钮
     *
     * @default true
     */
    codepen?: boolean;
    /**
     * CodePen editor layout
     *
     * CodePen 编辑器布局
     *
     * @default "left"
     */
    codepenLayout: "top" | "left" | "right";
    /**
     * CodePen Editor Display
     *
     * CodePen 编辑器显示情况
     *
     * @default "101"
     */
    codepenEditors: "101" | "100" | "110" | "111" | "011" | "001" | "010";
    /**
     * Babel lib address
     *
     * Babel 库的地址
     *
     * @default "https://unpkg.com/@babel/standalone/babel.min.js"
     */
    babel: string;
    /**
     * Vue lib address
     *
     * Vue 库的地址
     *
     * @default "https://unpkg.com/vue/dist/vue.global.prod.js"
     */
    vue: string;
    /**
     * React lib address
     *
     * React 库的地址
     *
     * @default "https://unpkg.com/react/umd/react.production.min.js"
     */
    react: string;
    /**
     * ReactDOM lib address
     *
     * ReactDOM 库的地址
     *
     * @default "https://unpkg.com/react-dom/umd/react-dom.production.min.js"
     */
    reactDOM: string;
}

declare const CODE_DEMO_DEFAULT_SETTING: CodeDemoOptions;
declare const normalDemo: PluginSimple;
declare const vueDemo: PluginSimple;
declare const reactDemo: PluginSimple;

declare const kotlinPlayground: PluginSimple;

interface PlaygroundCodeConfig {
    /**
     * Code block extension
     *
     * @description It's based on filename, not code fence language
     *
     * 代码块扩展名
     *
     * @description 它基于文件名，而不是代码块语言
     */
    ext: string;
    /**
     * Code block content
     *
     * 代码块内容
     */
    content: string;
}
interface PlaygroundData {
    /**
     * Title of Playground
     *
     * 交互演示标题
     */
    title?: string;
    /**
     * Import map file name
     *
     * Import map 文件名
     *
     * @default "import-map.json"
     */
    importMap?: string;
    /**
     * Playground files info
     *
     * 交互演示文件信息
     */
    files: Record<
    /**
     * File name
     *
     * 文件名
     */
    string, 
    /**
     * File detail
     *
     * 文件详情
     */
    PlaygroundCodeConfig>;
    /**
     * Playground settings
     *
     * @description It's parsed result of json content after setting directive
     *
     * 交互演示设置
     *
     * @description 它是设置指令后的 json 内容的解析结果
     */
    settings: Record<string, unknown>;
    /**
     * Hash key based on playground content
     *
     * 根据交互演示内容生成的 hash key
     */
    key: string;
}
interface PlaygroundOptions {
    /**
     * Playground container name
     *
     * 交互演示容器名
     */
    name: string;
    /**
     * Playground component name
     *
     * 交互演示组件名称
     *
     * @default "Playground"
     */
    component?: string;
    /**
     * Props getter
     *
     * 属性获取器
     */
    propsGetter: (data: PlaygroundData) => Record<string, string>;
}
interface TSPresetPlaygroundOptions extends CompilerOptions {
    /**
     * External playground service url
     *
     * 交互演示外部地址
     *
     * @default "https://www.typescriptlang.org/play"
     */
    service?: string;
}
interface VuePresetPlaygroundOptions {
    /**
     * External playground service url
     *
     * 交互演示外部地址
     *
     * @default "https://sfc.vuejs.org/"
     */
    service?: string;
    /**
     * Whether to use dev version
     *
     * 是否启用开发版本
     *
     * @default false
     */
    dev?: boolean;
    /**
     * Whether to enable SSR
     *
     * 是否启用 SSR
     *
     * @default false
     */
    ssr?: boolean;
}
interface UnoPresetPlaygroundOptions {
    /**
     * External playground service url
     *
     * 交互演示外部地址
     *
     * @default "https://unocss.dev/play"
     */
    service?: string;
}
type BuiltInPlaygroundPreset = "ts" | "vue" | "unocss";
interface PlaygroundGlobalOptions {
    /**
     * Playground presets
     *
     * 交互演示预设
     */
    presets: (BuiltInPlaygroundPreset | PlaygroundOptions)[];
    /**
     * Playground config
     *
     * 交互演示配置
     */
    config?: {
        ts?: TSPresetPlaygroundOptions;
        vue?: VuePresetPlaygroundOptions;
        unocss?: UnoPresetPlaygroundOptions;
    };
}

interface SandpackData extends Required<Pick<SandpackProps, "files">>, Omit<SandpackProps, "files"> {
    /**
     * Title of sandpack
     *
     * 交互演示标题
     */
    title?: string;
}

interface VuePlaygroundOptions {
    /**
     * @default "codemirror"
     */
    editor?: "codemirror" | "monaco";
}

declare const playground: PluginWithOptions<PlaygroundOptions>;

/** Gets a query string representation (hash + queries) */
declare const getURL: (code: string, compilerOptions?: CompilerOptions) => string;
declare const getTSPlaygroundPreset: ({ service, ...compilerOptions }?: TSPresetPlaygroundOptions) => PlaygroundOptions;

declare const getVuePlaygroundPreset: (options?: VuePresetPlaygroundOptions) => PlaygroundOptions;

declare const generateUnoURL: (service: string, inputHTML: string, customCSS: string, customConfigRaw: string) => string;
declare const getUnoPlaygroundPreset: ({ service, }?: UnoPresetPlaygroundOptions) => PlaygroundOptions;

declare const vuePlayground: PluginSimple;

declare const sandpack: PluginSimple;

interface DeprecatedMarkdownEnhancePluginOptions {
    /**
     * @deprecated use `alert` from `@vuepress/plugin-markdown-hint` instead
     */
    alert?: never;
    /**
     * @deprecated use `@vuepress/plugin-markdown-hint` instead
     */
    hint?: never;
    /**
     * @deprecated use `@vuepress/plugin-markdown-math` instead
     */
    katex?: never;
    /**
     * @deprecated use `@vuepress/plugin-markdown-math` instead
     */
    mathjax?: never;
    /**
     * @deprecated use `figure` from `@vuepress/plugin-markdown-image` instead
     */
    figure?: never;
    /**
     * @deprecated use `lazyload` in `@vuepress/plugin-markdown-image` instead
     */
    imgLazyload?: never;
    /**
     * @deprecated use `mark` from `@vuepress/plugin-markdown-image` instead
     */
    imgMark?: never;
    /**
     * @deprecated use `size` from `@vuepress/plugin-markdown-image` instead
     */
    imgSize?: never;
    /**
     * @deprecated use `obsidianSize` from `@vuepress/plugin-markdown-image` instead
     */
    obsidianImgSize?: never;
    /**
     * @deprecated use `tabs` from `@vuepress/plugin-markdown-tab` instead
     */
    tabs?: never;
    /**
     * @deprecated use `codeTabs` from `@vuepress/plugin-markdown-tab` instead
     */
    codetabs?: never;
    /**
     * @deprecated use `@vuepress/plugin-revealjs` instead
     */
    revealJs?: never;
    /**
     * @deprecated use `@vuepress/plugin-markdown-ext` instead
     */
    footnote?: never;
    /**
     * @deprecated use `@vuepress/plugin-markdown-ext` instead
     */
    tasklist?: never;
    /**
     * @deprecated use `@vuepress/plugin-markdown-ext` instead
     */
    gfm?: never;
    /**
     * @deprecated use `@vuepress/plugin-markdown-ext` instead
     */
    vPre?: never;
    /**
     * @deprecated use `@vuepress/plugin-markdown-ext` instead
     */
    breaks?: never;
    /**
     * @deprecated use `@vuepress/plugin-markdown-ext` instead
     */
    linkify?: never;
    /**
     * @deprecated use `@vuepress/plugin-markdown-ext` instead
     */
    component?: never;
    /**
     * @deprecated use `@vuepress/plugin-markdown-stylize` instead
     */
    align?: never;
    /**
     * @deprecated use `@vuepress/plugin-markdown-stylize` instead
     */
    attrs?: never;
    /**
     * @deprecated use `@vuepress/plugin-markdown-stylize` instead
     */
    sup?: never;
    /**
     * @deprecated use `@vuepress/plugin-markdown-stylize` instead
     */
    sub?: never;
    /**
     * @deprecated use `@vuepress/plugin-markdown-stylize` instead
     */
    mark?: never;
    /**
     * @deprecated use `@vuepress/plugin-markdown-stylize` instead
     */
    spoiler?: never;
    /**
     * @deprecated use `@vuepress/plugin-markdown-stylize` instead
     */
    stylize?: never;
    /**
     * @deprecated use `@vuepress/plugin-markdown-include` instead
     */
    include?: never;
    /**
     * @deprecated use `chartjs` from `@vuepress/plugin-markdown-chart` instead
     */
    chart?: boolean;
    /**
     * @deprecated use `chartjs` from `@vuepress/plugin-markdown-chart` instead
     */
    chartjs?: never;
    /**
     * @deprecated use `echarts` from `@vuepress/plugin-markdown-chart` instead
     */
    echarts?: never;
    /**
     * @deprecated use `flowchart` from `@vuepress/plugin-markdown-chart` instead
     */
    flowchart?: never;
    /**
     * @deprecated use `markmap` from `@vuepress/plugin-markdown-chart` instead
     */
    markmap?: never;
    /**
     * @deprecated use `mermaid` from `@vuepress/plugin-markdown-chart` instead
     */
    mermaid?: never;
    /**
     * @deprecated use `plantuml` from `@vuepress/plugin-markdown-chart` instead
     */
    plantuml?: never;
}
/**
 * md-enhance plugin configuration
 */
interface MarkdownEnhancePluginOptions extends DeprecatedMarkdownEnhancePluginOptions {
    /**
     * Whether to enable code-demo support
     *
     * 是否启用代码示例功能
     *
     * @default false
     */
    demo?: Partial<CodeDemoOptions> | boolean;
    /**
     * Whether to enable playground support
     *
     * 是否启用 playground 支持
     */
    playground?: PlaygroundGlobalOptions;
    /**
     * Whether to enable kotlin playground support
     *
     * 是否启用 kotlin Playground 支持
     *
     * @default false
     */
    kotlinPlayground?: boolean;
    /**
     * Whether to enable vue playground support
     *
     * 是否启用 Vue Playground 支持
     *
     * @default false
     */
    vuePlayground?: VuePlaygroundOptions | boolean;
    /**
     * Whether to enable sandpack support
     *
     * 是否启用 Sandpack 支持
     *
     * @default false
     */
    sandpack?: boolean;
}

declare const mdEnhancePlugin: (options?: MarkdownEnhancePluginOptions, legacy?: boolean) => PluginFunction;

export { CODE_DEMO_DEFAULT_SETTING, generateUnoURL, getTSPlaygroundPreset, getURL, getUnoPlaygroundPreset, getVuePlaygroundPreset, kotlinPlayground, mdEnhancePlugin, normalDemo, playground, reactDemo, sandpack, vueDemo, vuePlayground };
export type { BuiltInPlaygroundPreset, DeprecatedMarkdownEnhancePluginOptions, MarkdownEnhancePluginOptions, PlaygroundCodeConfig, PlaygroundData, PlaygroundGlobalOptions, PlaygroundOptions, SandpackData, TSPresetPlaygroundOptions, UnoPresetPlaygroundOptions, VuePlaygroundOptions, VuePresetPlaygroundOptions };
