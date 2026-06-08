import { Ref } from 'vue';
import { TdListProps } from '../type';
import { Styles, type ComponentScrollToElementParams } from '../../common';
export declare const useListVirtualScroll: (scroll: TdListProps["scroll"], listRef: Ref<HTMLElement>, listItems: Ref<any[]>) => {
    virtualConfig: {
        visibleData: Ref<any[]>;
        translateY: Ref<number>;
        scrollHeight: Ref<number>;
        isVirtualScroll: import("vue").ComputedRef<boolean>;
        handleScroll: () => void;
        handleRowMounted: (rowData: any) => void;
        scrollToElement: (p: import("@tdesign/shared-hooks").ScrollToElementParams) => void;
    };
    cursorStyle: import("vue").ComputedRef<Styles>;
    listStyle: import("vue").ComputedRef<Styles>;
    isVirtualScroll: import("vue").ComputedRef<boolean>;
    onInnerVirtualScroll: (e: WheelEvent) => void;
    scrollToElement: (params: ComponentScrollToElementParams) => void;
};
