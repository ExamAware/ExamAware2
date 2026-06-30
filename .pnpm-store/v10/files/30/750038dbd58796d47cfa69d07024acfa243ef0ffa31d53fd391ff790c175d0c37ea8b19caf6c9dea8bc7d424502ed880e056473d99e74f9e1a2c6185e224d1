import { Slots, Ref } from 'vue';
import { TdSelectProps, TdOptionProps, SelectOptionGroup, SelectValue, SelectOption } from '../type';
import { KeysType } from '../../common';
type UniOption = (TdOptionProps | SelectOptionGroup) & {
    index?: number;
    slots?: Slots;
};
export declare const useSelectOptions: (props: TdSelectProps, keys: Ref<KeysType>, inputValue: Ref<string>, innerValue: Ref<SelectValue<SelectOption>>) => {
    options: import("vue").ComputedRef<UniOption[]>;
    optionsMap: import("vue").ComputedRef<Map<SelectValue, TdOptionProps>>;
    optionsList: import("vue").ComputedRef<TdOptionProps[]>;
    optionsCache: Ref<(import("../..").PlainObject | {
        checkAll?: boolean;
        content?: string | import("../..").TNode;
        default?: string | import("../..").TNode;
        disabled?: boolean;
        label?: string;
        title?: string;
        value?: string | number | boolean;
    } | {
        group: string;
        children: {
            checkAll?: boolean;
            content?: string | import("../..").TNode;
            default?: string | import("../..").TNode;
            disabled?: boolean;
            label?: string;
            title?: string;
            value?: string | number | boolean;
        }[];
        divider?: boolean;
        label?: string;
    })[]>;
    displayOptions: import("vue").ComputedRef<SelectOption[]>;
    filterMethods: (option: SelectOption) => boolean | Promise<boolean>;
    searchDisplayOptions: import("vue").ComputedRef<TdOptionProps[]>;
};
export {};
