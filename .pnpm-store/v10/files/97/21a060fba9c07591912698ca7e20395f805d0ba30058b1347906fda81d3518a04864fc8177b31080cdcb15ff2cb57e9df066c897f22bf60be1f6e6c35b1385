import { InputNumberValue, TdInputNumberProps } from '../type';
export default function useInputNumber(props: TdInputNumberProps): {
    classPrefix: import("vue").ComputedRef<string>;
    wrapClasses: import("vue").ComputedRef<(string | {
        [x: string]: boolean | "normal" | "row" | "column";
    })[]>;
    reduceClasses: import("vue").ComputedRef<(string | {
        [x: string]: boolean;
    })[]>;
    addClasses: import("vue").ComputedRef<(string | {
        [x: string]: boolean;
    })[]>;
    tDisabled: import("vue").ComputedRef<boolean>;
    isError: import("vue").Ref<"exceed-maximum" | "below-minimum">;
    listeners: {
        onBlur: (value: string, ctx: {
            e: FocusEvent;
        }) => void;
        onFocus: (value: string, ctx: {
            e: FocusEvent;
        }) => void;
        onKeydown: (value: string, ctx: {
            e: KeyboardEvent;
        }) => void;
        onKeyup: (value: string, ctx: {
            e: KeyboardEvent;
        }) => void;
        onKeypress: (value: string, ctx: {
            e: KeyboardEvent;
        }) => void;
        onEnter: (value: string, ctx: {
            e: KeyboardEvent;
        }) => void;
        onClick: () => void;
    };
    userInput: import("vue").Ref<string>;
    tValue: import("vue").Ref<InputNumberValue>;
    inputRef: import("vue").Ref<any>;
    focus: () => void;
    blur: () => void;
    handleReduce: (e: KeyboardEvent | MouseEvent) => void;
    handleAdd: (e: KeyboardEvent | MouseEvent) => void;
    onInnerInputChange: (value: string, context?: {
        e?: InputEvent | MouseEvent | CompositionEvent;
        trigger: "input" | "initial" | "clear";
    }) => void;
    isReadonly: import("vue").ComputedRef<boolean>;
};
