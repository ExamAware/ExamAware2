import { TypeTreeItemState } from '../types';
export interface TypeDragStates {
    isDragOver: boolean;
    isDragging: boolean;
    dropPosition: number;
}
export declare enum DragPosition {
    Before = -1,
    Inside = 0,
    After = 1
}
export default function useDraggable(state: TypeTreeItemState): {
    dragStates: {
        isDragOver: boolean;
        isDragging: boolean;
        dropPosition: DragPosition;
    };
    handleDragStart: (evt: DragEvent) => void;
    handleDragEnd: (evt: DragEvent) => void;
    handleDragOver: (evt: DragEvent) => void;
    handleDragLeave: (evt: DragEvent) => void;
    handleDrop: (evt: DragEvent) => void;
};
