type VNode = import('vue').VNode;
export type AppContext = import('vue').AppContext;
export type ScopedSlot = () => SlotReturnValue;
export type SlotReturnValue = VNode | string | boolean | null | undefined | SlotReturnArray;
export type SlotReturnArray = Array<SlotReturnValue>;
export interface TVNode extends VNode {
    name: string;
}
export type TNodeReturnValue = SlotReturnValue;
export type TNode<T = undefined> = T extends undefined ? (h: typeof import('vue').h) => TNodeReturnValue : (h: typeof import('vue').h, props: T) => TNodeReturnValue;
export type AttachNodeReturnValue = HTMLElement | Element | Document;
export type AttachNode = CSSSelector | ((triggerNode?: HTMLElement) => AttachNodeReturnValue);
export type ScrollContainerElement = Window | HTMLElement;
export type ScrollContainer = (() => ScrollContainerElement) | CSSSelector;
export type ComponentType = any;
export type FormResetEvent = Event;
export type FormSubmitEvent = Event;
export interface Styles {
    [css: string]: string | number;
}
export interface UploadDisplayDragEvents {
    onDrop?: (event: DragEvent) => void;
    onDragenter?: (event: DragEvent) => void;
    onDragover?: (event: DragEvent) => void;
    onDragleave?: (event: DragEvent) => void;
}
export type ImageEvent = Event;
export type PlainObject = {
    [key: string]: any;
};
export type OptionData = {
    label?: string;
    value?: string | number;
} & PlainObject;
export type TreeOptionData<T = string | number> = {
    children?: Array<TreeOptionData<T>> | boolean;
    label?: string | TNode;
    text?: string;
    value?: T;
    content?: string | TNode;
} & PlainObject;
export type SizeEnum = 'small' | 'medium' | 'large';
export type ShapeEnum = 'circle' | 'round';
export type HorizontalAlignEnum = 'left' | 'center' | 'right';
export type VerticalAlignEnum = 'top' | 'middle' | 'bottom';
export type LayoutEnum = 'vertical' | 'horizontal';
export type ClassName = {
    [className: string]: any;
} | ClassName[] | string;
export type CSSSelector = string;
export interface KeysType {
    value?: string;
    label?: string;
    disabled?: string;
}
export interface TreeKeysType extends KeysType {
    children?: string;
}
export interface HTMLElementAttributes {
    [attribute: string]: string;
}
export interface TScroll {
    bufferSize?: number;
    isFixedRowHeight?: boolean;
    rowHeight?: number;
    threshold?: number;
    type: 'lazy' | 'virtual';
}
export type InfinityScroll = TScroll;
export interface ScrollToElementParams {
    index?: number;
    top?: number;
    time?: number;
    behavior?: 'auto' | 'smooth';
}
export interface ComponentScrollToElementParams extends ScrollToElementParams {
    key?: string | number;
}
export {};
