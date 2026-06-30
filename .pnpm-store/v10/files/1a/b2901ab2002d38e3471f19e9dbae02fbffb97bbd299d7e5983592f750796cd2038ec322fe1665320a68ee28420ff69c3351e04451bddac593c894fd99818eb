import { PluginWithOptions, PluginSimple } from 'markdown-it';
import { MarkdownItPlantumlOptions } from '@mdit/plugin-plantuml';
import { Plugin } from 'vuepress/core';

interface ChartJSPluginOptions {
    /**
     * Allow executing custom scripts inside Chart.js blocks.
     *
     * 允许在 Chart.js 块内执行自定义脚本。
     *
     * @default false
     */
    allowScripts?: boolean;
    /**
     * Allow all scripts to be executed inside Chart.js blocks.
     *
     * 允许在 Chart.js 块内执行所有脚本。
     *
     * @default false
     */
    allowAll?: boolean;
    /**
     * List of files allowed to execute scripts inside Chart.js blocks.
     *
     * 允许在 Chart.js 块内执行脚本的文件列表。
     *
     * @default new Set()
     */
    allowList?: Set<string>;
}
/**
 * Chart.js markdown-it plugin
 *
 * Chart.js markdown-it 插件
 */
declare const chartjs: PluginWithOptions<ChartJSPluginOptions>;

interface EChartsPluginOptions {
    /**
     * Allow executing custom scripts inside ECharts blocks.
     *
     * 允许在 ECharts 块内执行自定义脚本。
     *
     * @default false
     */
    allowScripts?: boolean;
    /**
     * Allow all scripts to be executed inside ECharts blocks.
     *
     * 允许在 ECharts 块内执行所有脚本。
     *
     * @default false
     */
    allowAll?: boolean;
    /**
     * List of files allowed to execute scripts inside ECharts blocks.
     *
     * 允许在 ECharts 块内执行脚本的文件列表。
     *
     * @default new Set()
     */
    allowList?: Set<string>;
}
/**
 * ECharts markdown-it plugin
 *
 * ECharts markdown-it 插件
 */
declare const echarts: PluginWithOptions<EChartsPluginOptions>;

/**
 * Flowchart markdown-it plugin
 *
 * Flowchart markdown-it 插件
 */
declare const flowchart: PluginSimple;

/**
 * Markmap markdown-it plugin
 *
 * Markmap markdown-it 插件
 */
declare const markmap: PluginSimple;

interface MermaidOptions {
    content: string;
    diagram?: string;
    title?: string;
    indent?: boolean;
}
/**
 * Get Mermaid content with proper formatting
 *
 * 获取格式化的 Mermaid 内容
 *
 * @param options - Mermaid options / Mermaid 选项
 *
 * @returns Formatted Mermaid content / 格式化的 Mermaid 内容
 */
declare const getMermaidContent: ({ diagram, content, title, indent, }: MermaidOptions) => string;
/**
 * Mermaid markdown-it plugin
 *
 * Mermaid markdown-it 插件
 */
declare const mermaid: PluginSimple;

/**
 * PlantUML markdown-it plugin
 *
 * PlantUML markdown-it 插件
 *
 * @param md - MarkdownIt instance / MarkdownIt 实例
 * @param options - PlantUML options / PlantUML 选项
 */
declare const plantuml: PluginWithOptions<MarkdownItPlantumlOptions[]>;

interface MarkdownChartPluginOptions {
    /**
     * Whether to enable chart support
     *
     * 是否启用 chart 图表支持
     *
     * @default false
     */
    chartjs?: boolean;
    /**
     * Whether to enable echarts support
     *
     * 是否启用 echarts 图表支持
     *
     * @default false
     */
    echarts?: boolean;
    /**
     * Whether to enable flowchart support
     *
     * 是否启用 flowchart 流程图支持
     *
     * @default false
     */
    flowchart?: boolean;
    /**
     * Whether to enable markmap support
     *
     * 是否启用 markmap 流程图支持
     *
     * @default false
     */
    markmap?: boolean;
    /**
     * Whether to enable mermaid support
     *
     * 是否启用 Mermaid 流程图支持
     *
     * @default false
     */
    mermaid?: boolean;
    /**
     * Whether enable plantuml support
     *
     * 是否启用 plantuml 支持
     *
     * @default false
     */
    plantuml?: MarkdownItPlantumlOptions[] | boolean;
    /**
     * Allow executing custom scripts inside chart blocks.
     *
     * 允许在图表代码块中执行自定义脚本。
     *
     * # Caution! Enabling this may introduce XSS or remote code risks.
     *
     * # 注意！启用可能带来 XSS 或远程代码风险。
     *
     * @default false
     */
    DANGEROUS_ALLOW_SCRIPT_EXECUTION?: boolean;
    /**
     * Allowlist of source files permitted to run chart scripts.
     *
     * 允许执行图表脚本的源文件列表（允许清单）。
     *
     * @description Only effective when `DANGEROUS_ALLOW_SCRIPT_EXECUTION` is set; paths must match real files.
     *
     * 仅在 `DANGEROUS_ALLOW_SCRIPT_EXECUTION` 被设置后生效；路径需与实际文件匹配。
     */
    DANGEROUS_SCRIPT_EXECUTION_ALLOWLIST?: string[] | '*';
}

/**
 * Markdown chart plugin
 *
 * Markdown 图表插件
 *
 * @param options - Plugin options / 插件选项
 * @returns VuePress plugin / VuePress 插件
 *
 * @example
 * ```ts
 * import { markdownChartPlugin } from '@vuepress/plugin-markdown-chart'
 *
 * export default {
 *   plugins: [
 *     markdownChartPlugin({
 *       chartjs: true,
 *       echarts: true,
 *       flowchart: true,
 *       markmap: true,
 *       mermaid: true,
 *       plantuml: true,
 *     }),
 *   ],
 * }
 * ```
 */
declare const markdownChartPlugin: (options?: MarkdownChartPluginOptions) => Plugin;

export { chartjs, echarts, flowchart, getMermaidContent, markdownChartPlugin, markmap, mermaid, plantuml };
export type { ChartJSPluginOptions, EChartsPluginOptions, MarkdownChartPluginOptions };
