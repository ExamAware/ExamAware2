import type { VNode } from "vue";
import type { MenuOptions } from "./ContextMenuDefine";
/**
 * Get absolute y position of HTMLElement
 * @param e Element
 * @param stopNode Specify the node for recursive termination, default to body
 * @returns
 */
export declare function getTop(e: HTMLElement, stopNode?: HTMLElement): number;
/**
 * Get absolute x position of HTMLElement
 * @param e Element
 * @param stopNode Specify the node for recursive termination, default to body
 * @returns
 */
export declare function getLeft(e: HTMLElement, stopNode?: HTMLElement): number;
/**
 * If your `body` element is in a scaled state (e.g. `transform: scale(0.5)`),
 * this may lead to the wrong position of the menu display.
 * You can use this function to transform the menu display position:
 *
 * ```ts
 *
  import ContextMenu from '@imengyu/vue3-context-menu'

  function onContextMenu(e: MouseEvent) {
    const scaledPosition = ContextMenu.transformMenuPosition(e.target as HTMLElement, e.offsetX, e.offsetY);
    //Full code of menuData is in `/examples/views/InScaledBody.vue`
    menuData.x = scaledPosition.x;
    menuData.y = scaledPosition.y;
    //show menu
    ContextMenu.showContextMenu(menuData);
  }
  * ```
  * @param e Current click element
  * @param offsetX MouseEvent.offsetX
  * @param offsetY MouseEvent.offsetY
  */
export declare function transformMenuPosition(e: HTMLElement, offsetX: number, offsetY: number, container?: HTMLElement): {
    x: number;
    y: number;
};
export declare function genSubContainerId(): string;
export declare function removeContainer(container: HTMLElement): void;
export declare function genContainer(options: MenuOptions): {
    eleId: string;
    container: HTMLElement;
    isNew: boolean;
};
export declare function hashCode(str: string): number;
/**
 * Number to px string
 * @param value
 * @returns
 */
export declare function solveNumberOrStringSize(value: string | number): string;
/**
 * Render a VNode
 */
export declare const VNodeRender: import("vue").DefineComponent<{
    /**
     * Can be VNode or (data: unknown) => VNode
     */
    vnode: {
        type: null;
    };
    /**
     * If vnode is a callback, this data will be passed to the callback first parameter.
     * @default null
     */
    data: {
        type: null;
        default: null;
    };
}, () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * Can be VNode or (data: unknown) => VNode
     */
    vnode: {
        type: null;
    };
    /**
     * If vnode is a callback, this data will be passed to the callback first parameter.
     * @default null
     */
    data: {
        type: null;
        default: null;
    };
}>>, {
    data: any;
}, {}>;
/**
 * 从对象中移除指定的键，并返回一个新对象，新对象不包含该键
 * @param obj 要操作的对象
 * @param key 要移除的键
 * @returns 移除指定键后的新对象
 */
export declare function removeObjectKey<T extends Record<string, unknown>>(obj: T, key: string): T;
