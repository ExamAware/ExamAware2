interface CodePenStyleOptions {
    /**
     * @default 300
     */
    height?: number | string;
    /**
     * @default "none"
     */
    border?: "none" | "thin" | "thick";
    /**
     * @default "#000000"
     */
    "border-color"?: string;
    /**
     * @default "#3d3d3e"
     */
    "tab-bar-color"?: string;
    /**
     * @default "#76daff"
     */
    "tab-link-color"?: string;
    /**
     * @default "#cccccc"
     */
    "active-tab-color"?: string;
    /**
     * @default "#000000"
     */
    "active-link-color"?: string;
    /**
     * @default #ffffff
     */
    "link-logo-color"?: string;
    /**
     * Additional class name
     */
    class?: string;
    /**
     * Custom css link
     */
    "custom-css-url"?: string;
}
interface CodePenDomOptions extends CodePenStyleOptions, Record<string, unknown> {
    /**
     * Id of theme
     *
     * @default 0
     */
    "theme-id"?: string | number;
    "slug-hash"?: string;
    user?: string;
    /**
     * @description one of or a set of "html" | "css" | "js" | "result"
     *
     * @default "result"
     */
    "default-tab"?: string;
    animations?: "run" | "stop-after-5";
    preview?: "true" | "false";
    /**
     * @default 1
     */
    zoom?: 1 | 0.5 | 0.25;
    token?: string;
    "pen-title"?: string;
    /**
     * @default "false"
     */
    open?: "true" | "false";
}
interface CodePenPrefillOptions {
    title?: string;
    description?: string;
    head?: string;
    tags?: string | string[];
    html_classes?: string | string[];
    stylesheets?: string | string[];
    scripts?: string | string[];
}
interface CodePenOptions extends CodePenDomOptions {
    prefill?: CodePenPrefillOptions;
    /**
     * @default "false"
     */
    editable?: "true" | "false";
}

declare const renderCodePen: (options: CodePenOptions, selector?: string | HTMLElement) => void;

declare const loadCodePens: (selector?: string, options?: CodePenDomOptions) => void;
declare const openCodePens: (selector?: string) => void;

export { type CodePenDomOptions, type CodePenOptions, type CodePenPrefillOptions, type CodePenStyleOptions, loadCodePens, openCodePens, renderCodePen };
