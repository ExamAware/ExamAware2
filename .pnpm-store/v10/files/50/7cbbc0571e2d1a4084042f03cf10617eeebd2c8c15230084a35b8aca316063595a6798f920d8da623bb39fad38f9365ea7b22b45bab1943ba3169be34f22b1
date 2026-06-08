import { Ref, UnwrapRef } from 'vue';
export type UseLazyLoadParams = UnwrapRef<{
    type: 'lazy' | 'virtual';
    rowHeight?: number;
    bufferSize?: number;
}>;
export default function useLazyLoad(containerRef: Ref<HTMLElement>, childRef: Ref<HTMLTableRowElement>, params: UseLazyLoadParams): {
    hasLazyLoadHolder: import("vue").ComputedRef<boolean>;
    tRowHeight: import("vue").ComputedRef<number>;
};
