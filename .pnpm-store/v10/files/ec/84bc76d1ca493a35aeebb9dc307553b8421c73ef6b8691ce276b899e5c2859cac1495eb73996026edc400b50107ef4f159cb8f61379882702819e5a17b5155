import { TypeRef } from '../utils/adapt';
import { TypeTreeState } from '../types';
import type { ComponentScrollToElementParams } from '../../common';
export default function useTreeScroll(state: TypeTreeState): {
    treeContentRef: TypeRef<HTMLDivElement>;
    onInnerVirtualScroll: (e: WheelEvent) => void;
    virtualConfig: {
        visibleData: import("vue").Ref<any[]>;
        translateY: import("vue").Ref<number>;
        scrollHeight: import("vue").Ref<number>;
        isVirtualScroll: import("vue").ComputedRef<boolean>;
        handleScroll: () => void;
        handleRowMounted: (rowData: any) => void;
        scrollToElement: (p: import("@tdesign/shared-hooks").ScrollToElementParams) => void;
    };
    scrollToElement: (params: ComponentScrollToElementParams) => void;
};
