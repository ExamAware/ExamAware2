import { PluginWithOptions } from 'markdown-it';

interface MarkdownItIconOptions<MarkdownItEnv = unknown> {
    render?: (content: string, env: MarkdownItEnv) => string;
}

declare const icon: PluginWithOptions<MarkdownItIconOptions>;

/**
 * Default render for icons
 */
declare const defaultRender: (icon: string) => string;
/**
 * Render for [iconify-icon](https://iconify.design/docs/iconify-icon/)
 */
declare const iconifyRender: (icon: string) => string;
/**
 * Fontawesome families short aliases
 */
declare const FONTAWESOME_FAMILY_SHORT_ALIAS: string[];
/**
 * Fontawesome styles short aliases
 */
declare const FONTAWESOME_STYLES_SHORT_ALIAS: string[];
/**
 * Fontawesome short aliases
 */
declare const FONTAWESOME_SHORT_ALIAS: string[];
/**
 * Fontawesome families classes
 */
declare const FONTAWESOME_FAMILIES: string[];
/**
 * Fontawesome styles classes
 */
declare const FONTAWESOME_STYLES: string[];
/**
 * All fontawesome families and styles classes
 */
declare const FONTAWESOME_FAMILIES_AND_STYLES: string[];
/**
 * Check if a class is a valid fontawesome short alias
 */
declare const isFontawesomeShortAlias: (cls: string) => boolean;
/**
 * Check if a class is a valid fontawesome family
 */
declare const isFontawesomeFamily: (cls: string) => boolean;
/**
 * Ensure every class is prefixed with `fa-` or a valid short alias
 */
declare const appendFontawesomePrefix: (icon: string) => string;
/**
 * Render for [fontawesome](https://fontawesome.com/) icons
 */
declare const fontawesomeRender: (icon: string) => string;
/**
 * Render for [iconfont](https://www.iconfont.cn/) icons
 */
declare const iconfontRender: (icon: string) => string;

/**
 * Extract size from content
 */
declare const extractSize: <T extends {
    content: string;
}>(data: T & {
    size?: string;
}) => T & {
    size?: string;
};
/**
 * Extract color from content
 */
declare const extractColor: <T extends {
    content: string;
}>(data: T & {
    color?: string;
}) => T & {
    color?: string;
};
type AttrsInfo = Record<string, string>;
/**
 * Parse attrs string to object
 *
 * @param attrs
 * @returns
 */
declare const extractAttrs: <T extends {
    content: string;
}>(data: T & {
    attrs?: AttrsInfo;
}) => T & {
    attrs: AttrsInfo;
};
declare const extractInfo: <T extends {
    content: string;
}>(data: T & {
    attrs?: AttrsInfo;
    size?: string;
    color?: string;
}) => T & {
    attrs: AttrsInfo;
    size?: string;
    color?: string;
};
/**
 * append styles to attrs object
 *
 * @param attrs Attrs object
 * @param styleDefinition new style definition
 * @returns updated attrs object
 */
declare const appendStyle: (attrs: Record<string, string>, styleDefinition: string) => Record<string, string>;
/**
 * Stringify attrs object
 */
declare const stringifyAttrs: (attrs: Record<string, string>) => string;

export { FONTAWESOME_FAMILIES, FONTAWESOME_FAMILIES_AND_STYLES, FONTAWESOME_FAMILY_SHORT_ALIAS, FONTAWESOME_SHORT_ALIAS, FONTAWESOME_STYLES, FONTAWESOME_STYLES_SHORT_ALIAS, appendFontawesomePrefix, appendStyle, defaultRender, extractAttrs, extractColor, extractInfo, extractSize, fontawesomeRender, icon, iconfontRender, iconifyRender, isFontawesomeFamily, isFontawesomeShortAlias, stringifyAttrs };
export type { AttrsInfo, MarkdownItIconOptions };
