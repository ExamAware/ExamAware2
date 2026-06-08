import { SetupContext, Ref } from 'vue';
import { PopupInstanceFunctions } from '../../popup';
import { TdSelectInputProps } from '../type';
import { SelectInputCommonProperties } from '../types';
export interface SelectInputValueDisplayOptions {
    useInputDisplay: boolean;
    usePlaceholder: boolean;
}
export declare function useSingle(props: TdSelectInputProps & {
    valueDisplayOptions: SelectInputValueDisplayOptions;
}, context: SetupContext, popupRef: Ref<PopupInstanceFunctions>): {
    inputRef: Ref<any>;
    isSingleFocus: Ref<boolean>;
    commonInputProps: import("vue").ComputedRef<SelectInputCommonProperties>;
    singleInputValue: Ref<string>;
    onInnerClear: (context: {
        e: MouseEvent;
    }) => void;
    renderSelectSingle: (popupVisible: boolean) => JSX.Element;
};
