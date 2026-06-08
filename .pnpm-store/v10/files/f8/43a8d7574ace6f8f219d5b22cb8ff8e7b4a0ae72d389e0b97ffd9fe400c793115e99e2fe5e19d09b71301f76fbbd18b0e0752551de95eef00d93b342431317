export type IMouseEventHandlerEntry<T = any> = (e: MouseEvent, param?: T) => boolean;
declare class Vector2 {
    x: number;
    y: number;
    constructor(x?: number, y?: number);
    set(x: number, y: number): void;
    substract(other: Vector2): void;
}
/**
 * 创建鼠标按下移动处理器
 * @param options 处理器
 * @returns 返回入口，入口需要在 mousedown 事件中调用
 */
export declare function createMouseDragHandler<T = any>(options: {
    /**
     * 按下事件
     * @param e
     * @returns
     */
    onDown: (e: MouseEvent, param?: T) => boolean;
    /**
     * 按下并且移动事件
     * @param e
     * @returns
     */
    onMove: (downPos: Vector2, movedPos: Vector2, e: MouseEvent, param?: T) => void;
    /**
     * 释放事件
     * @param e
     * @returns
     */
    onUp: (e: MouseEvent, param?: T) => void;
}): IMouseEventHandlerEntry<T>;
/**
 * 创建鼠标按下并且放开处理器d
 * @param options
 * @returns
 */
export declare function createMouseDownAndUpHandler(options: {
    /**
     * 按下事件
     * @param e
     * @returns
     */
    onDown: (e: MouseEvent) => boolean;
    /**
     * 释放事件
     * @param e
     * @returns
     */
    onUp: (e: MouseEvent) => void;
}): IMouseEventHandlerEntry;
export {};
