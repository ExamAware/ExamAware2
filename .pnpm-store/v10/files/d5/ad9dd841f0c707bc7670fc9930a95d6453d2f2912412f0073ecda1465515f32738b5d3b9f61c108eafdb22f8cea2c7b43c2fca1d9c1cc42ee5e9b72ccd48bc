import { PluginSimple } from "markdown-it";

//#region src/title-plugin.d.ts

/**
 * Get markdown page title info
 *
 * Extract it into env
 */
declare const titlePlugin: PluginSimple;
//#endregion
//#region src/types.d.ts
declare module '@mdit-vue/types' {
  interface MarkdownItEnv {
    /**
     * The title that extracted by `@mdit-vue/plugin-title`
     */
    title?: string;
  }
}
//#endregion
export { titlePlugin };