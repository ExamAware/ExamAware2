import { ComputedRef, Ref } from 'vue';
import type { TransferValue } from '../type';
import type { TransferItemOption } from '../types';
export default function useDragSort(currentValue: Ref<Array<TransferValue>>, curPageData: ComputedRef<TransferItemOption[]>, handleDataChange: (data: Array<TransferValue>, movedValue: Array<TransferValue>) => void): {
    onDragStart: (e: DragEvent) => void;
    onDragEnd: () => void;
    onDrop: (e: DragEvent) => void;
    onDragOver: (e: DragEvent) => void;
    onDragLeave: () => void;
};
