import { PluginSimple } from 'markdown-it';
import { RuleInline } from 'markdown-it/lib/parser_inline.mjs';

/**
 * Fork and edited from https://github.com/tatsy/markdown-it-imsize/blob/master/lib/index.js
 */

/**
 * @deprecated Recommended to use `imgSize` instead.
 */
declare const legacyImgSize: PluginSimple;

declare const obsidianImgSizeRule: RuleInline;
declare const obsidianImgSize: PluginSimple;

declare const imgSizeRule: RuleInline;
declare const imgSize: PluginSimple;

interface MarkdownReference {
    href: string;
    title?: string;
}
interface ImgSizeEnv extends Record<any, any> {
    references?: Record<string, MarkdownReference>;
}

export { imgSize, imgSizeRule, legacyImgSize, obsidianImgSize, obsidianImgSizeRule };
export type { ImgSizeEnv, MarkdownReference };
