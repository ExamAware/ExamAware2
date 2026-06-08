type Placement = 'left' | 'right' | 'top' | 'bottom';
interface SizeDragLimit {
    max: number;
    min: number;
}
export declare function getSizeDraggable(sizeDraggable: boolean | SizeDragLimit, limit: {
    max: number;
    min: number;
}): {
    allowSizeDraggable: boolean;
    max: number;
    min: number;
};
type IOptions = {
    x: number;
    y: number;
    maxWidth: number;
    maxHeight: number;
    min: number;
    max: number;
};
export declare function calcMoveSize(placement: Placement, opts: IOptions): number;
export {};
