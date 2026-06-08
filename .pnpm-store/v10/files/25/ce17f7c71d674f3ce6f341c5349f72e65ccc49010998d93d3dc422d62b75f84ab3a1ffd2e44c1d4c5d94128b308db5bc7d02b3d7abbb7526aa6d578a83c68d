import { SetupContext, Ref } from 'vue';
import { TdSelectInputProps } from '../type';
import { SelectInputCommonProperties } from '../types';
import { TagInputValue } from '../../tag-input';
import { PopupInstanceFunctions } from '../../popup';
export interface RenderSelectMultipleParams {
    commonInputProps: SelectInputCommonProperties;
    onInnerClear: (context: {
        e: MouseEvent;
    }) => void;
    popupVisible: boolean;
    allowInput: boolean;
}
export declare function useMultiple(props: TdSelectInputProps, context: SetupContext, popupRef: Ref<PopupInstanceFunctions>): {
    tags: import("vue").ComputedRef<TagInputValue>;
    tPlaceholder: import("vue").ComputedRef<string>;
    tagInputRef: Ref<any>;
    isMultipleFocus: Ref<boolean>;
    multipleInputValue: Ref<string>;
    renderSelectMultiple: (p: RenderSelectMultipleParams) => JSX.Element;
};
