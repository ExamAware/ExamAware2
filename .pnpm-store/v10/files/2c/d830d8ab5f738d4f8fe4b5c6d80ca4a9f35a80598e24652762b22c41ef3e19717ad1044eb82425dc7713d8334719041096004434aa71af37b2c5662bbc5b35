import { InputValue, TdInputProps } from './../type';
export declare function getOutputValue(val: InputValue, type: TdInputProps['type']): InputValue;
export interface ExtendsTdInputProps extends TdInputProps {
    showInput: boolean;
    keepWrapperWidth: boolean;
}
export declare function useInput(props: ExtendsTdInputProps, expose: (exposed: Record<string, any>) => void): {
    isHover: import("vue").Ref<boolean>;
    focused: import("vue").Ref<boolean>;
    renderType: import("vue").Ref<"number" | "search" | "hidden" | "submit" | "text" | "url" | "tel" | "password">;
    showClear: import("vue").ComputedRef<boolean>;
    inputRef: import("vue").Ref<HTMLInputElement>;
    clearIconRef: any;
    inputValue: import("vue").Ref<InputValue>;
    isComposition: import("vue").Ref<boolean>;
    compositionValue: import("vue").Ref<InputValue>;
    limitNumber: import("vue").ComputedRef<string>;
    tStatus: import("vue").ComputedRef<"error" | "" | "default" | "success" | "warning">;
    emitFocus: (e: FocusEvent) => void;
    formatAndEmitBlur: (e: FocusEvent) => void;
    onHandleCompositionend: (e: CompositionEvent) => void;
    onHandleCompositionstart: (e: CompositionEvent) => void;
    onRootClick: (e: MouseEvent) => void;
    emitPassword: () => void;
    handleInput: (e: InputEvent) => void;
    emitClear: ({ e }: {
        e: MouseEvent;
    }) => void;
    onClearIconMousedown: (e: MouseEvent) => void;
    innerValue: import("vue").Ref<InputValue>;
};
