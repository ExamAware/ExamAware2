export interface Coordinate {
    x: number;
    y: number;
}
export type DraggableEvent = MouseEvent;
interface DraggableCallback {
    (coordinate: Coordinate, event?: DraggableEvent): void;
}
export interface DraggableProps {
    start?: DraggableCallback;
    drag?: DraggableCallback;
    end?: DraggableCallback;
}
export declare class Draggable {
    #private;
    private dragging;
    private $el;
    private props;
    private handles;
    constructor(el: HTMLElement, options?: DraggableProps);
    destroy(): void;
}
export default Draggable;
