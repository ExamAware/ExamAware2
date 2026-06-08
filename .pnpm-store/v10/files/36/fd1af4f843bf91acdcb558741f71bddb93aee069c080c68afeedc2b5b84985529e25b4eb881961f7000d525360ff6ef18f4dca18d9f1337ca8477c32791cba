import { ComputedRef, Ref } from 'vue';
import type { SelectOption, TdOptionProps, SelectValue } from '../type';
import type { ChangeHandler } from '@tdesign/shared-hooks';
import type { PopupVisibleChangeContext } from '../../popup';
export type useKeyboardControlType = {
    displayOptions: ComputedRef<SelectOption[]>;
    optionsList: ComputedRef<TdOptionProps[]>;
    innerPopupVisible: Ref<boolean>;
    setInnerPopupVisible: ChangeHandler<boolean, [context: PopupVisibleChangeContext]>;
    selectPanelRef: Ref<{
        isVirtual: boolean;
        innerRef: HTMLDivElement;
    }>;
    isFilterable: ComputedRef<boolean>;
    isRemoteSearch: ComputedRef<boolean>;
    getSelectedOptions: (selectValue?: SelectValue[] | SelectValue) => TdOptionProps[];
    setInnerValue: Function;
    onCheckAllChange: Function;
    isCheckAll: ComputedRef<boolean>;
    innerValue: Ref<SelectValue[]>;
    popupContentRef: ComputedRef<HTMLElement>;
    multiple: boolean;
    max: number;
};
export declare function useKeyboardControl({ displayOptions, optionsList, innerPopupVisible, setInnerPopupVisible, selectPanelRef, isFilterable, isRemoteSearch, getSelectedOptions, setInnerValue, onCheckAllChange, innerValue, popupContentRef, multiple, max, isCheckAll, }: useKeyboardControlType): {
    hoverIndex: Ref<number>;
    handleKeyDown: (e: KeyboardEvent) => void;
    virtualFilteredOptions: Ref<any[]>;
    filteredOptions: Ref<any[]>;
};
