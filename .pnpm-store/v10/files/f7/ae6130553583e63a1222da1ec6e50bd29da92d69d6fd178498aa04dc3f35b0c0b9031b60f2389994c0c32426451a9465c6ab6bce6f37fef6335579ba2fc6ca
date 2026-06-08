import { PluginWithOptions } from 'markdown-it';

interface MarkdownItSpoilerOptions {
    /**
     * @default "span"
     */
    tag?: string;
    /**
     * @default [["class", "spoiler"], ["tabindex","-1"]]
     */
    attrs?: [string, string][];
}

/**
 * Forked and modified from https://github.com/markdown-it/markdown-it-mark/blob/master/index.mjs
 */

declare const spoiler: PluginWithOptions<MarkdownItSpoilerOptions>;

export { spoiler };
export type { MarkdownItSpoilerOptions };
