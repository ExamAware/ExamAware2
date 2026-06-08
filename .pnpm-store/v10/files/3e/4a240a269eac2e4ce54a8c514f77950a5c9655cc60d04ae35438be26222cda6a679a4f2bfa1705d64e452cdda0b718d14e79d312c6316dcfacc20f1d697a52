import { MarkdownItTexOptions } from '@mdit/plugin-tex';
import { Token, KatexOptions } from 'katex';
import MarkdownIt from 'markdown-it';

type KatexLogger<MarkdownItEnv = unknown> = (errorCode: "unknownSymbol" | "unicodeTextInMathMode" | "mathVsTextUnits" | "commentAtEnd" | "htmlExtension" | "newLineInDisplayMode", errorMsg: string, token: Token, env: MarkdownItEnv) => "error" | "warn" | "ignore" | boolean | void;
type TeXTransformer = (content: string, displayMode: boolean) => string;
interface MarkdownItKatexOptions<MarkdownItEnv = unknown> extends KatexOptions, Pick<MarkdownItTexOptions, "allowInlineWithSpace" | "delimiters" | "mathFence"> {
    /**
     * Error logger
     *
     * 错误日志记录器
     */
    logger?: KatexLogger<MarkdownItEnv>;
    /**
     * transformer on output content
     *
     * 输出内容的转换器
     */
    transformer?: TeXTransformer;
}

declare const katex: <MarkdownItEnv = unknown>(md: MarkdownIt, options?: MarkdownItKatexOptions<MarkdownItEnv>) => void;

export { katex };
export type { KatexLogger, MarkdownItKatexOptions, TeXTransformer };
