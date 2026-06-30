import { PropType } from 'vue';
declare function customScrollX(x: number): void;
declare function customScrollY(y: number): void;
export interface ScrollRectScrollBarSlotParams {
    scrollValue: {
        /**
         * Is scrollbar visible?
         */
        show: boolean;
        /**
         * Scroll bar calculation length (percentage, 0-100)
         */
        size: number;
        /**
         * Scroll bar calculation length (pixel)
         */
        sizeRaw: number;
        /**
         * Scroll bar scrolling position (percentage, 0-100)
         */
        pos: number;
    };
    /**
     * Scroll bar scrolling position callback
     * @param pec (percentage, 0-100)
     */
    onScroll: (pec: number) => void;
}
export interface ScrollRectInstance {
    /**
     * Force update scrollbar state
     */
    refreshScrollState(): void;
    /**
     * Get scroll containerElement
     */
    getScrollContainer(): HTMLElement | undefined;
    /**
     * Scroll to position
     * @param x X scroll pos (pixel)
     * @param y Y scroll pos (pixel)
     */
    scrollTo(x: number, y: number): void;
    /**
     * Scroll to top
     */
    scrollToTop(): void;
    /**
     * Scroll to bottom
     */
    scrollToBottom(): void;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
        scrollBarX?(_: {
            scrollBarValue: {
                show: boolean;
                size: number;
                sizeRaw: number;
                pos: number;
            };
            onScroll: typeof customScrollX;
        }): any;
        scrollBarY?(_: {
            scrollBarValue: {
                show: boolean;
                size: number;
                sizeRaw: number;
                pos: number;
            };
            onScroll: typeof customScrollY;
        }): any;
    };
    refs: {
        scrollrect: HTMLDivElement;
        container: HTMLDivElement;
        scrollBarRefX: HTMLDivElement;
        scrollBarThumbRefX: HTMLDivElement;
        scrollBarRefY: HTMLDivElement;
        scrollBarThumbRefY: HTMLDivElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    /**
     * Scroll direction
     *
     * * both : Scroll in both directions
     * * vertical : Scroll only in vertical direction
     * * horizontal : Scroll only in horizontal direction
     * * none : Disable scroll
     *
     * @default both
     */
    scroll: {
        type: PropType<"both" | "none" | "vertical" | "horizontal">;
        default: string;
    };
    /**
     * Show scroll bar always, otherwise show scroll bar when mouse over
     * @default false
     */
    scrollBarAlwaysShow: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Is able to click scroll bar background to set scroll position? (When `scrollBarAlwaysShow` is true)
     * @default true
     */
    scrollBarBackgroundClickable: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Height of scroll rect
     */
    height: {
        type: NumberConstructor;
        default: undefined;
    };
    /**
     * Width of scroll rect
     */
    width: {
        type: NumberConstructor;
        default: undefined;
    };
    /**
     * Max height of inner container
     */
    maxHeight: {
        type: NumberConstructor;
        default: undefined;
    };
    /**
     * Max width of inner container
     */
    maxWidth: {
        type: NumberConstructor;
        default: undefined;
    };
    /**
     * CSS class of inner container
     */
    containerClass: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Container style
     */
    containerStyle: {
        type: null;
    };
    /**
     * Specify how many pixels of scroll distance trigger `scrollToStart` event.
     * @default 50
     */
    scrollToStartThreshold: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * Specify how many pixels of scroll distance trigger `scrollToEnd` event.
     * @default 50
     */
    scrollToEndThreshold: {
        type: NumberConstructor;
        default: number;
    };
}>, {
    /**
     * Force update scrollbar state
     */
    refreshScrollState(): void;
    /**
     * Get scroll containerElement
     */
    getScrollContainer(): HTMLElement | undefined;
    /**
     * Scroll to position
     * @param x X scroll pos (pixel)
     * @param y Y scroll pos (pixel)
     */
    scrollTo(x: number, y: number): void;
    /**
     * Scroll to top
     */
    scrollToTop(): void;
    /**
     * Scroll to bottom
     */
    scrollToBottom(): void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    scroll: (...args: any[]) => void;
    resized: (...args: any[]) => void;
    scrollToStart: (...args: any[]) => void;
    scrollToEnd: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    /**
     * Scroll direction
     *
     * * both : Scroll in both directions
     * * vertical : Scroll only in vertical direction
     * * horizontal : Scroll only in horizontal direction
     * * none : Disable scroll
     *
     * @default both
     */
    scroll: {
        type: PropType<"both" | "none" | "vertical" | "horizontal">;
        default: string;
    };
    /**
     * Show scroll bar always, otherwise show scroll bar when mouse over
     * @default false
     */
    scrollBarAlwaysShow: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Is able to click scroll bar background to set scroll position? (When `scrollBarAlwaysShow` is true)
     * @default true
     */
    scrollBarBackgroundClickable: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Height of scroll rect
     */
    height: {
        type: NumberConstructor;
        default: undefined;
    };
    /**
     * Width of scroll rect
     */
    width: {
        type: NumberConstructor;
        default: undefined;
    };
    /**
     * Max height of inner container
     */
    maxHeight: {
        type: NumberConstructor;
        default: undefined;
    };
    /**
     * Max width of inner container
     */
    maxWidth: {
        type: NumberConstructor;
        default: undefined;
    };
    /**
     * CSS class of inner container
     */
    containerClass: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Container style
     */
    containerStyle: {
        type: null;
    };
    /**
     * Specify how many pixels of scroll distance trigger `scrollToStart` event.
     * @default 50
     */
    scrollToStartThreshold: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * Specify how many pixels of scroll distance trigger `scrollToEnd` event.
     * @default 50
     */
    scrollToEndThreshold: {
        type: NumberConstructor;
        default: number;
    };
}>> & Readonly<{
    onScroll?: ((...args: any[]) => any) | undefined;
    onResized?: ((...args: any[]) => any) | undefined;
    onScrollToStart?: ((...args: any[]) => any) | undefined;
    onScrollToEnd?: ((...args: any[]) => any) | undefined;
}>, {
    scroll: "both" | "none" | "vertical" | "horizontal";
    scrollBarAlwaysShow: boolean;
    scrollBarBackgroundClickable: boolean;
    height: number;
    width: number;
    maxHeight: number;
    maxWidth: number;
    containerClass: string;
    scrollToStartThreshold: number;
    scrollToEndThreshold: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {
    scrollrect: HTMLDivElement;
    container: HTMLDivElement;
    scrollBarRefX: HTMLDivElement;
    scrollBarThumbRefX: HTMLDivElement;
    scrollBarRefY: HTMLDivElement;
    scrollBarThumbRefY: HTMLDivElement;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
