import { MarkdownItHeader } from "@mdit-vue/types";
import Token from "markdown-it/lib/token.mjs";

//#region src/html-escape.d.ts
/**
 * Escape html chars
 */
declare const htmlEscape: (str: string) => string;
//#endregion
//#region src/html-unescape.d.ts
/**
 * Unescape html chars
 */
declare const htmlUnescape: (str: string) => string;
//#endregion
//#region src/resolve-title-from-token.d.ts
interface ResolveTitleOptions {
  /**
   * Should allow inline HTML tags or not.
   *
   * If the result is going to be used as Vue template, it should allow inline
   * HTML tags so that Vue custom components would be kept.
   */
  shouldAllowHtml: boolean;
  /**
   * Should escape the text content or not.
   *
   * If the result is going to be used in HTML directly, it should be escaped
   * so that the text content won't be wrongly treated as HTML tags.
   */
  shouldEscapeText: boolean;
}
/**
 * Resolve header title from markdown-it token
 *
 * Typically using the next token of `heading_open` token
 */
declare const resolveTitleFromToken: (token: Token, {
  shouldAllowHtml,
  shouldEscapeText
}: ResolveTitleOptions) => string;
//#endregion
//#region src/resolve-headers-from-tokens.d.ts
interface ResolveHeadersOptions extends ResolveTitleOptions {
  /**
   * Heading level that going to be resolved
   */
  level: number[];
  /**
   * Should allow headers inside nested blocks or not
   *
   * If set to `true`, headers inside blockquote, list, etc. would also be resolved.
   */
  shouldAllowNested: boolean;
  /**
   * A custom slugification function
   *
   * Would be ignored if the `id` attr of the token is set.
   */
  slugify: (str: string) => string;
  /**
   * A function for formatting headings
   */
  format?: (str: string) => string;
}
/**
 * Resolve headers from markdown-it tokens
 */
declare const resolveHeadersFromTokens: (tokens: Token[], {
  level,
  shouldAllowHtml,
  shouldAllowNested,
  shouldEscapeText,
  slugify,
  format
}: ResolveHeadersOptions) => MarkdownItHeader[];
//#endregion
//#region src/slugify.d.ts
/**
 * Default slugification function
 */
declare const slugify$1: (str: string) => string;
//#endregion
export { ResolveHeadersOptions, ResolveTitleOptions, htmlEscape, htmlUnescape, resolveHeadersFromTokens, resolveTitleFromToken, slugify$1 as slugify };