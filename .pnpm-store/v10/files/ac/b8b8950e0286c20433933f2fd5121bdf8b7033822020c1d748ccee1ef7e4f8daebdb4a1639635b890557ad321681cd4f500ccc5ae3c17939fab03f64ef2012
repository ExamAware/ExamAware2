import { WhitespacePosition, MarkdownItCodeBlockTitleOptions, MarkdownItLineNumbersOptions, MarkdownItCollapsedLinesOptions } from '@vuepress/highlighter-helper';
import { ShikiTwoslashOptions } from '@vuepress/shiki-twoslash';
import { StringLiteralUnion, BundledTheme, ThemeRegistrationAny, LanguageInput, SpecialLanguage, BundledLanguage, Highlighter, ShikiTransformer } from 'shiki';
import { Plugin } from 'vuepress/core';

/**
 * Shiki language type
 *
 * Shiki 语言类型
 */
type ShikiLang = LanguageInput | SpecialLanguage | StringLiteralUnion<BundledLanguage>;
/**
 * Shiki theme type
 *
 * Shiki 主题类型
 */
type ShikiTheme = StringLiteralUnion<BundledTheme> | ThemeRegistrationAny;
/**
 * Single theme options for Shiki
 *
 * Shiki 单主题配置
 */
interface ShikiSingleThemeOptions {
    /**
     * The single theme to use
     *
     * @see https://shiki.style/themes
     *
     * @default 'nord'
     */
    theme?: ShikiTheme;
}
/**
 * Dual theme options for Shiki
 *
 * Shiki 双主题配置
 */
interface ShikiDualThemeOptions {
    /**
     * The dark and light themes to use
     *
     * @see https://shiki.style/themes
     */
    themes: {
        dark: ShikiTheme;
        light: ShikiTheme;
    };
}
/**
 * Shiki theme options
 *
 * Shiki 主题配置选项
 */
type ShikiThemeOptions = ShikiDualThemeOptions | ShikiSingleThemeOptions;
/**
 * Shiki highlight options
 *
 * Shiki 高亮配置选项
 */
type ShikiHighlightOptions = ShikiThemeOptions & {
    /**
     * Languages to be loaded.
     *
     * Shiki does not preload any languages to avoid extra overhead. So you need
     * to specify the languages you want to use.
     *
     * 要加载的语言。
     *
     * Shiki 不会预加载任何语言以避免额外开销。所以你需要指定要使用的语言。
     *
     * @see https://shiki.style/languages
     */
    langs?: ShikiLang[];
    /**
     * Language alias
     *
     * 语言别名
     *
     * @see https://shiki.style/guide/load-lang#custom-language-aliases
     */
    langAlias?: Record<string, StringLiteralUnion<BundledLanguage>>;
    /**
     * Fallback language when the specified language is not available.
     *
     * 指定语言不可用时的备选语言。
     *
     * @default 'plain'
     */
    defaultLang?: string;
    /**
     * Function to customize Shiki highlighter instance.
     *
     * 自定义 Shiki 高亮器实例的函数。
     */
    shikiSetup?: (shiki: Highlighter) => Promise<void> | void;
    /**
     * Shiki transformers
     *
     * Shiki 转换器
     */
    transformers?: ShikiTransformer[];
    /**
     * Enable highlight lines or not
     *
     * 是否启用行高亮
     *
     * @default true
     */
    highlightLines?: boolean;
    /**
     * Enable notation diff transformer
     *
     * 是否启用差异标记转换器
     *
     * @default false
     *
     * @see https://shiki.style/packages/transformers#transformernotationdiff
     */
    notationDiff?: boolean;
    /**
     * Enable notation focus transformer
     *
     * 是否启用聚焦标记转换器
     *
     * @default false
     *
     * @see https://shiki.style/packages/transformers#transformernotationfocus
     */
    notationFocus?: boolean;
    /**
     * Enable notation highlight transformer
     *
     * 是否启用高亮标记转换器
     *
     * @default false
     *
     * @see https://shiki.style/packages/transformers#transformernotationhighlight
     */
    notationHighlight?: boolean;
    /**
     * Enable notation error level transformer
     *
     * 是否启用错误级别标记转换器
     *
     * @default false
     *
     * @see https://shiki.style/packages/transformers#transformernotationerrorlevel
     */
    notationErrorLevel?: boolean;
    /**
     * Enable notation word highlight transformer
     *
     * 是否启用单词高亮标记转换器
     *
     * @default false
     *
     * @see https://shiki.style/packages/transformers#transformernotationwordhighlight
     */
    notationWordHighlight?: boolean;
    /**
     * Enable whitespace
     * - true: enable whitespace, but not render any whitespace by default
     * - false: disable whitespace completely
     * - 'all': render all whitespace
     * - 'boundary': render leading and trailing whitespace of each line.
     * - 'trailing': render trailing whitespace of each line
     *
     * you are able to use `:whitespace` or `:no-whitespace` or `:whitespace=all|boundary|trailing` to set single code block
     *
     * 启用空白字符显示
     * - true: 启用空白字符，但默认不渲染任何空白字符
     * - false: 完全禁用空白字符
     * - 'all': 渲染所有空白字符
     * - 'boundary': 渲染每行的前导和尾随空白字符
     * - 'trailing': 渲染每行的尾随空白字符
     *
     * 你可以使用 `:whitespace` 或 `:no-whitespace` 或 `:whitespace=all|boundary|trailing` 来设置单个代码块
     *
     * @default false
     *
     * @see https://shiki.style/packages/transformers#transformerrenderwhitespace
     */
    whitespace?: WhitespacePosition | boolean;
    /**
     * Log level Highlighter language detecter
     *
     * 高亮器语言检测器的日志级别
     *
     * @description defaults to `'debug'` when `--debug` flag is enabled
     *
     * 当启用 `--debug` 标志时默认为 `'debug'`
     *
     * @default 'warn'
     */
    logLevel?: 'debug' | 'silent' | 'warn';
};

interface MarkdownItPreWrapperOptions {
    /**
     * Wrap the `<pre>` tag with an extra `<div>` or not. Do not disable it unless you
     * understand what's it for
     *
     * - Required for line numbers, title display and code block collapsing
     */
    preWrapper?: boolean;
}

/**
 * Options of @vuepress/plugin-shiki
 *
 * @vuepress/plugin-shiki 的选项
 */
type ShikiPluginOptions = MarkdownItCodeBlockTitleOptions & MarkdownItLineNumbersOptions & MarkdownItPreWrapperOptions & Pick<MarkdownItCollapsedLinesOptions, 'collapsedLines'> & ShikiHighlightOptions & {
    /**
     * Enable twoslash
     *
     * 启用 twoslash
     *
     * @description You should install `@shikijs/twoslash` manually.
     *
     * 你需要手动安装 `@shikijs/twoslash`。
     *
     * @default false
     */
    twoslash?: boolean | (ShikiTwoslashOptions & {
        /**
         * The options for caching resolved types
         *
         * 缓存解析类型的选项
         *
         * @default true
         */
        typesCache?: ShikiTwoslashOptions['typesCache'] | true;
    });
};

/**
 * Shiki plugin for VuePress
 *
 * VuePress 的 Shiki 插件
 *
 * @param options - Plugin options / 插件选项
 *
 * @returns VuePress plugin / VuePress 插件
 *
 * @example
 * ```ts
 * import { shikiPlugin } from '@vuepress/plugin-shiki'
 *
 * export default {
 *   plugins: [
 *     shikiPlugin({
 *       langs: ['ts', 'json', 'vue', 'md', 'bash', 'diff'],
 *       theme: 'nord',
 *       lineNumbers: true,
 *     }),
 *   ],
 * }
 * ```
 */
declare const shikiPlugin: (options?: ShikiPluginOptions) => Plugin;

export { shikiPlugin };
export type { ShikiDualThemeOptions, ShikiHighlightOptions, ShikiLang, ShikiPluginOptions, ShikiSingleThemeOptions, ShikiTheme, ShikiThemeOptions };
