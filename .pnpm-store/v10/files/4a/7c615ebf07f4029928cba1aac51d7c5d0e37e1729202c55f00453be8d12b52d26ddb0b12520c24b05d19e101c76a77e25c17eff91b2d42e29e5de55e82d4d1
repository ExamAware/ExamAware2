import { SetupContext, ComputedRef } from 'vue';
import { TdPrimaryTableProps } from '../type';
import { BaseTableColumns } from '../types';
export default function useDragSort(props: TdPrimaryTableProps, context: SetupContext, params: ComputedRef<{
    showElement: boolean;
}>): {
    innerPagination: import("vue").Ref<{
        current?: number;
        defaultCurrent?: number;
        modelValue?: number;
        disabled?: boolean;
        foldedMaxPageBtn?: number;
        maxPageBtn?: number;
        pageEllipsisMode?: "mid" | "both-ends";
        pageSize?: number;
        defaultPageSize?: number;
        pageSizeOptions?: (number | {
            label: string;
            value: number;
        })[];
        selectProps?: {
            autoWidth?: boolean;
            autofocus?: boolean;
            borderless?: boolean;
            clearable?: boolean;
            collapsedItems?: (h: typeof import("vue").h, props: {
                value: import("../..").SelectOption[];
                collapsedSelectedItems: import("../..").SelectOption[];
                count: number;
                onClose: (context: {
                    index: number;
                    e?: MouseEvent;
                }) => void;
            }) => import("../..").TNodeReturnValue;
            creatable?: boolean;
            disabled?: boolean;
            empty?: string | import("../..").TNode;
            filter?: (filterWords: string, option: import("../..").SelectOption) => boolean | Promise<boolean>;
            filterable?: boolean;
            inputProps?: {
                align?: "left" | "center" | "right";
                allowInputOverMax?: boolean;
                autoWidth?: boolean;
                autocomplete?: string;
                autofocus?: boolean;
                borderless?: boolean;
                clearable?: boolean;
                disabled?: boolean;
                format?: import("../..").InputFormatType;
                inputClass?: any;
                label?: string | import("../..").TNode;
                maxcharacter?: number;
                maxlength?: string | number;
                name?: string;
                placeholder?: string;
                prefixIcon?: import("../..").TNode;
                readonly?: boolean;
                showClearIconOnEmpty?: boolean;
                showLimitNumber?: boolean;
                size?: import("../..").SizeEnum;
                spellCheck?: boolean;
                status?: "default" | "success" | "warning" | "error";
                suffix?: string | import("../..").TNode;
                suffixIcon?: import("../..").TNode;
                tips?: string | import("../..").TNode;
                type?: "text" | "number" | "url" | "tel" | "password" | "search" | "submit" | "hidden";
                value?: import("../..").InputValue;
                defaultValue?: import("../..").InputValue;
                modelValue?: import("../..").InputValue;
                onBlur?: (value: import("../..").InputValue, context: {
                    e: FocusEvent;
                }) => void;
                onChange?: (value: import("../..").InputValue, context?: {
                    e?: InputEvent | MouseEvent | CompositionEvent;
                    trigger: "input" | "initial" | "clear";
                }) => void;
                onClear?: (context: {
                    e: MouseEvent;
                }) => void;
                onClick?: (context: {
                    e: MouseEvent;
                }) => void;
                onCompositionend?: (value: string, context: {
                    e: CompositionEvent;
                }) => void;
                onCompositionstart?: (value: string, context: {
                    e: CompositionEvent;
                }) => void;
                onEnter?: (value: import("../..").InputValue, context: {
                    e: KeyboardEvent;
                }) => void;
                onFocus?: (value: import("../..").InputValue, context: {
                    e: FocusEvent;
                }) => void;
                onKeydown?: (value: import("../..").InputValue, context: {
                    e: KeyboardEvent;
                }) => void;
                onKeypress?: (value: import("../..").InputValue, context: {
                    e: KeyboardEvent;
                }) => void;
                onKeyup?: (value: import("../..").InputValue, context: {
                    e: KeyboardEvent;
                }) => void;
                onMouseenter?: (context: {
                    e: MouseEvent;
                }) => void;
                onMouseleave?: (context: {
                    e: MouseEvent;
                }) => void;
                onPaste?: (context: {
                    e: ClipboardEvent;
                    pasteValue: string;
                }) => void;
                onValidate?: (context: {
                    error?: "exceed-maximum" | "below-minimum";
                }) => void;
                onWheel?: (context: {
                    e: WheelEvent;
                }) => void;
            };
            inputValue?: string;
            defaultInputValue?: string;
            keys?: {
                value?: string;
                label?: string;
                disabled?: string;
            };
            label?: string | import("../..").TNode;
            loading?: boolean;
            loadingText?: string | import("../..").TNode;
            max?: number;
            minCollapsedNum?: number;
            multiple?: boolean;
            options?: (import("../..").PlainObject | {
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
            })[];
            panelBottomContent?: string | import("../..").TNode;
            panelTopContent?: string | import("../..").TNode;
            placeholder?: string;
            popupProps?: {
                attach?: import("../..").AttachNode;
                content?: string | import("../..").TNode;
                default?: string | import("../..").TNode;
                delay?: number | Array<number>;
                destroyOnClose?: boolean;
                disabled?: boolean;
                hideEmptyPopup?: boolean;
                overlayClassName?: any;
                overlayInnerClassName?: any;
                overlayInnerStyle?: import("../..").Styles | ((triggerElement: HTMLElement, popupElement: HTMLElement) => import("../..").Styles);
                overlayStyle?: import("../..").Styles | ((triggerElement: HTMLElement, popupElement: HTMLElement) => import("../..").Styles);
                placement?: import("../..").PopupPlacement;
                popperOptions?: object;
                showArrow?: boolean;
                trigger?: "hover" | "click" | "focus" | "mousedown" | "context-menu";
                triggerElement?: string | import("../..").TNode;
                visible?: boolean;
                defaultVisible?: boolean;
                modelValue?: boolean;
                zIndex?: number;
                onOverlayClick?: (context: {
                    e: MouseEvent;
                }) => void;
                onScroll?: (context: {
                    e: WheelEvent;
                }) => void;
                onScrollToBottom?: (context: {
                    e: WheelEvent;
                }) => void;
                onVisibleChange?: (visible: boolean, context: import("../..").PopupVisibleChangeContext) => void;
            };
            popupVisible?: boolean;
            defaultPopupVisible?: boolean;
            prefixIcon?: import("../..").TNode;
            readonly?: boolean;
            reserveKeyword?: boolean;
            scroll?: {
                bufferSize?: number;
                isFixedRowHeight?: boolean;
                rowHeight?: number;
                threshold?: number;
                type: "lazy" | "virtual";
            };
            selectInputProps?: {
                allowInput?: boolean;
                autoWidth?: boolean;
                autofocus?: boolean;
                borderless?: boolean;
                clearable?: boolean;
                collapsedItems?: import("../..").TNode<{
                    value: import("../..").SelectInputValue;
                    collapsedSelectedItems: import("../..").SelectInputValue;
                    count: number;
                    onClose: (context: {
                        index: number;
                        e?: MouseEvent;
                    }) => void;
                }>;
                disabled?: boolean;
                inputProps?: {
                    align?: "left" | "center" | "right";
                    allowInputOverMax?: boolean;
                    autoWidth?: boolean;
                    autocomplete?: string;
                    autofocus?: boolean;
                    borderless?: boolean;
                    clearable?: boolean;
                    disabled?: boolean;
                    format?: import("../..").InputFormatType;
                    inputClass?: any;
                    label?: string | import("../..").TNode;
                    maxcharacter?: number;
                    maxlength?: string | number;
                    name?: string;
                    placeholder?: string;
                    prefixIcon?: import("../..").TNode;
                    readonly?: boolean;
                    showClearIconOnEmpty?: boolean;
                    showLimitNumber?: boolean;
                    size?: import("../..").SizeEnum;
                    spellCheck?: boolean;
                    status?: "default" | "success" | "warning" | "error";
                    suffix?: string | import("../..").TNode;
                    suffixIcon?: import("../..").TNode;
                    tips?: string | import("../..").TNode;
                    type?: "text" | "number" | "url" | "tel" | "password" | "search" | "submit" | "hidden";
                    value?: import("../..").InputValue;
                    defaultValue?: import("../..").InputValue;
                    modelValue?: import("../..").InputValue;
                    onBlur?: (value: import("../..").InputValue, context: {
                        e: FocusEvent;
                    }) => void;
                    onChange?: (value: import("../..").InputValue, context?: {
                        e?: InputEvent | MouseEvent | CompositionEvent;
                        trigger: "input" | "initial" | "clear";
                    }) => void;
                    onClear?: (context: {
                        e: MouseEvent;
                    }) => void;
                    onClick?: (context: {
                        e: MouseEvent;
                    }) => void;
                    onCompositionend?: (value: string, context: {
                        e: CompositionEvent;
                    }) => void;
                    onCompositionstart?: (value: string, context: {
                        e: CompositionEvent;
                    }) => void;
                    onEnter?: (value: import("../..").InputValue, context: {
                        e: KeyboardEvent;
                    }) => void;
                    onFocus?: (value: import("../..").InputValue, context: {
                        e: FocusEvent;
                    }) => void;
                    onKeydown?: (value: import("../..").InputValue, context: {
                        e: KeyboardEvent;
                    }) => void;
                    onKeypress?: (value: import("../..").InputValue, context: {
                        e: KeyboardEvent;
                    }) => void;
                    onKeyup?: (value: import("../..").InputValue, context: {
                        e: KeyboardEvent;
                    }) => void;
                    onMouseenter?: (context: {
                        e: MouseEvent;
                    }) => void;
                    onMouseleave?: (context: {
                        e: MouseEvent;
                    }) => void;
                    onPaste?: (context: {
                        e: ClipboardEvent;
                        pasteValue: string;
                    }) => void;
                    onValidate?: (context: {
                        error?: "exceed-maximum" | "below-minimum";
                    }) => void;
                    onWheel?: (context: {
                        e: WheelEvent;
                    }) => void;
                };
                inputValue?: string;
                defaultInputValue?: string;
                keys?: {
                    label?: string;
                    value?: string;
                    children?: string;
                };
                label?: string | import("../..").TNode;
                loading?: boolean;
                minCollapsedNum?: number;
                multiple?: boolean;
                panel?: string | import("../..").TNode;
                placeholder?: string;
                popupProps?: {
                    attach?: import("../..").AttachNode;
                    content?: string | import("../..").TNode;
                    default?: string | import("../..").TNode;
                    delay?: number | Array<number>;
                    destroyOnClose?: boolean;
                    disabled?: boolean;
                    hideEmptyPopup?: boolean;
                    overlayClassName?: any;
                    overlayInnerClassName?: any;
                    overlayInnerStyle?: import("../..").Styles | ((triggerElement: HTMLElement, popupElement: HTMLElement) => import("../..").Styles);
                    overlayStyle?: import("../..").Styles | ((triggerElement: HTMLElement, popupElement: HTMLElement) => import("../..").Styles);
                    placement?: import("../..").PopupPlacement;
                    popperOptions?: object;
                    showArrow?: boolean;
                    trigger?: "hover" | "click" | "focus" | "mousedown" | "context-menu";
                    triggerElement?: string | import("../..").TNode;
                    visible?: boolean;
                    defaultVisible?: boolean;
                    modelValue?: boolean;
                    zIndex?: number;
                    onOverlayClick?: (context: {
                        e: MouseEvent;
                    }) => void;
                    onScroll?: (context: {
                        e: WheelEvent;
                    }) => void;
                    onScrollToBottom?: (context: {
                        e: WheelEvent;
                    }) => void;
                    onVisibleChange?: (visible: boolean, context: import("../..").PopupVisibleChangeContext) => void;
                };
                popupVisible?: boolean;
                defaultPopupVisible?: boolean;
                prefixIcon?: import("../..").TNode;
                readonly?: boolean;
                reserveKeyword?: boolean;
                size?: import("../..").SizeEnum;
                status?: "default" | "success" | "warning" | "error";
                suffix?: string | import("../..").TNode;
                suffixIcon?: import("../..").TNode;
                tag?: string | import("../..").TNode<{
                    value: string | number;
                }>;
                tagInputProps?: {
                    autoWidth?: boolean;
                    borderless?: boolean;
                    clearable?: boolean;
                    collapsedItems?: import("../..").TNode<{
                        value: import("../..").TagInputValue;
                        collapsedSelectedItems: import("../..").TagInputValue;
                        count: number;
                        onClose: (context: {
                            index: number;
                            e?: MouseEvent;
                        }) => void;
                    }>;
                    disabled?: boolean;
                    dragSort?: boolean;
                    excessTagsDisplayType?: "scroll" | "break-line";
                    inputProps?: {
                        align?: "left" | "center" | "right";
                        allowInputOverMax?: boolean;
                        autoWidth?: boolean;
                        autocomplete?: string;
                        autofocus?: boolean;
                        borderless?: boolean;
                        clearable?: boolean;
                        disabled?: boolean;
                        format?: import("../..").InputFormatType;
                        inputClass?: any;
                        label?: string | import("../..").TNode;
                        maxcharacter?: number;
                        maxlength?: string | number;
                        name?: string;
                        placeholder?: string;
                        prefixIcon?: import("../..").TNode;
                        readonly?: boolean;
                        showClearIconOnEmpty?: boolean;
                        showLimitNumber?: boolean;
                        size?: import("../..").SizeEnum;
                        spellCheck?: boolean;
                        status?: "default" | "success" | "warning" | "error";
                        suffix?: string | import("../..").TNode;
                        suffixIcon?: import("../..").TNode;
                        tips?: string | import("../..").TNode;
                        type?: "text" | "number" | "url" | "tel" | "password" | "search" | "submit" | "hidden";
                        value?: import("../..").InputValue;
                        defaultValue?: import("../..").InputValue;
                        modelValue?: import("../..").InputValue;
                        onBlur?: (value: import("../..").InputValue, context: {
                            e: FocusEvent;
                        }) => void;
                        onChange?: (value: import("../..").InputValue, context?: {
                            e?: InputEvent | MouseEvent | CompositionEvent;
                            trigger: "input" | "initial" | "clear";
                        }) => void;
                        onClear?: (context: {
                            e: MouseEvent;
                        }) => void;
                        onClick?: (context: {
                            e: MouseEvent;
                        }) => void;
                        onCompositionend?: (value: string, context: {
                            e: CompositionEvent;
                        }) => void;
                        onCompositionstart?: (value: string, context: {
                            e: CompositionEvent;
                        }) => void;
                        onEnter?: (value: import("../..").InputValue, context: {
                            e: KeyboardEvent;
                        }) => void;
                        onFocus?: (value: import("../..").InputValue, context: {
                            e: FocusEvent;
                        }) => void;
                        onKeydown?: (value: import("../..").InputValue, context: {
                            e: KeyboardEvent;
                        }) => void;
                        onKeypress?: (value: import("../..").InputValue, context: {
                            e: KeyboardEvent;
                        }) => void;
                        onKeyup?: (value: import("../..").InputValue, context: {
                            e: KeyboardEvent;
                        }) => void;
                        onMouseenter?: (context: {
                            e: MouseEvent;
                        }) => void;
                        onMouseleave?: (context: {
                            e: MouseEvent;
                        }) => void;
                        onPaste?: (context: {
                            e: ClipboardEvent;
                            pasteValue: string;
                        }) => void;
                        onValidate?: (context: {
                            error?: "exceed-maximum" | "below-minimum";
                        }) => void;
                        onWheel?: (context: {
                            e: WheelEvent;
                        }) => void;
                    };
                    inputValue?: string;
                    defaultInputValue?: string;
                    label?: string | import("../..").TNode;
                    max?: number;
                    minCollapsedNum?: number;
                    placeholder?: string;
                    prefixIcon?: import("../..").TNode;
                    readonly?: boolean;
                    size?: import("../..").SizeEnum;
                    status?: "default" | "success" | "warning" | "error";
                    suffix?: string | import("../..").TNode;
                    suffixIcon?: import("../..").TNode;
                    tag?: string | import("../..").TNode<{
                        value: string | number;
                    }>;
                    tagProps?: {
                        closable?: boolean;
                        color?: string;
                        content?: string | import("../..").TNode;
                        default?: string | import("../..").TNode;
                        disabled?: boolean;
                        icon?: import("../..").TNode;
                        maxWidth?: string | number;
                        shape?: "square" | "round" | "mark";
                        size?: import("../..").SizeEnum;
                        theme?: "default" | "primary" | "warning" | "danger" | "success";
                        title?: string;
                        variant?: "dark" | "light" | "outline" | "light-outline";
                        onClick?: (context: {
                            e: MouseEvent;
                        }) => void;
                        onClose?: (context: {
                            e: MouseEvent;
                        }) => void;
                    };
                    tips?: string | import("../..").TNode;
                    value?: (string | number)[];
                    defaultValue?: (string | number)[];
                    modelValue?: (string | number)[];
                    valueDisplay?: string | import("../..").TNode<{
                        value: import("../..").TagInputValue;
                        onClose: (index: number, item?: any) => void;
                    }>;
                    onBlur?: (value: import("../..").TagInputValue, context: {
                        inputValue: string;
                        e: FocusEvent;
                    }) => void;
                    onChange?: (value: import("../..").TagInputValue, context: import("../..").TagInputChangeContext) => void;
                    onClear?: (context: {
                        e: MouseEvent;
                    }) => void;
                    onClick?: (context: {
                        e: MouseEvent;
                    }) => void;
                    onDragSort?: (context: import("../..").TagInputDragSortContext) => void;
                    onEnter?: (value: import("../..").TagInputValue, context: {
                        e: KeyboardEvent;
                        inputValue: string;
                    }) => void;
                    onFocus?: (value: import("../..").TagInputValue, context: {
                        inputValue: string;
                        e: FocusEvent;
                    }) => void;
                    onInputChange?: (value: string, context?: import("../..").InputValueChangeContext) => void;
                    onMouseenter?: (context: {
                        e: MouseEvent;
                    }) => void;
                    onMouseleave?: (context: {
                        e: MouseEvent;
                    }) => void;
                    onPaste?: (context: {
                        e: ClipboardEvent;
                        pasteValue: string;
                    }) => void;
                    onRemove?: (context: import("../..").TagInputRemoveContext) => void;
                };
                tagProps?: {
                    closable?: boolean;
                    color?: string;
                    content?: string | import("../..").TNode;
                    default?: string | import("../..").TNode;
                    disabled?: boolean;
                    icon?: import("../..").TNode;
                    maxWidth?: string | number;
                    shape?: "square" | "round" | "mark";
                    size?: import("../..").SizeEnum;
                    theme?: "default" | "primary" | "warning" | "danger" | "success";
                    title?: string;
                    variant?: "dark" | "light" | "outline" | "light-outline";
                    onClick?: (context: {
                        e: MouseEvent;
                    }) => void;
                    onClose?: (context: {
                        e: MouseEvent;
                    }) => void;
                };
                tips?: string | import("../..").TNode;
                value?: any;
                valueDisplay?: string | import("../..").TNode<{
                    value: import("../..").TagInputValue;
                    onClose: (index: number, item?: any) => void;
                }>;
                onBlur?: (value: import("../..").SelectInputValue, context: import("../..").SelectInputBlurContext) => void;
                onClear?: (context: {
                    e: MouseEvent;
                }) => void;
                onEnter?: (value: import("../..").SelectInputValue, context: {
                    e: KeyboardEvent;
                    inputValue: string;
                    tagInputValue?: import("../..").TagInputValue;
                }) => void;
                onFocus?: (value: import("../..").SelectInputValue, context: import("../..").SelectInputFocusContext) => void;
                onInputChange?: (value: string, context?: import("../..").SelectInputValueChangeContext) => void;
                onMouseenter?: (context: {
                    e: MouseEvent;
                }) => void;
                onMouseleave?: (context: {
                    e: MouseEvent;
                }) => void;
                onPaste?: (context: {
                    e: ClipboardEvent;
                    pasteValue: string;
                }) => void;
                onPopupVisibleChange?: (visible: boolean, context: import("../..").PopupVisibleChangeContext) => void;
                onTagChange?: (value: import("../..").TagInputValue, context: import("../..").SelectInputChangeContext) => void;
            };
            showArrow?: boolean;
            size?: import("../..").SizeEnum;
            status?: "default" | "success" | "warning" | "error";
            suffix?: string | import("../..").TNode;
            suffixIcon?: import("../..").TNode;
            tagInputProps?: {
                autoWidth?: boolean;
                borderless?: boolean;
                clearable?: boolean;
                collapsedItems?: import("../..").TNode<{
                    value: import("../..").TagInputValue;
                    collapsedSelectedItems: import("../..").TagInputValue;
                    count: number;
                    onClose: (context: {
                        index: number;
                        e?: MouseEvent;
                    }) => void;
                }>;
                disabled?: boolean;
                dragSort?: boolean;
                excessTagsDisplayType?: "scroll" | "break-line";
                inputProps?: {
                    align?: "left" | "center" | "right";
                    allowInputOverMax?: boolean;
                    autoWidth?: boolean;
                    autocomplete?: string;
                    autofocus?: boolean;
                    borderless?: boolean;
                    clearable?: boolean;
                    disabled?: boolean;
                    format?: import("../..").InputFormatType;
                    inputClass?: any;
                    label?: string | import("../..").TNode;
                    maxcharacter?: number;
                    maxlength?: string | number;
                    name?: string;
                    placeholder?: string;
                    prefixIcon?: import("../..").TNode;
                    readonly?: boolean;
                    showClearIconOnEmpty?: boolean;
                    showLimitNumber?: boolean;
                    size?: import("../..").SizeEnum;
                    spellCheck?: boolean;
                    status?: "default" | "success" | "warning" | "error";
                    suffix?: string | import("../..").TNode;
                    suffixIcon?: import("../..").TNode;
                    tips?: string | import("../..").TNode;
                    type?: "text" | "number" | "url" | "tel" | "password" | "search" | "submit" | "hidden";
                    value?: import("../..").InputValue;
                    defaultValue?: import("../..").InputValue;
                    modelValue?: import("../..").InputValue;
                    onBlur?: (value: import("../..").InputValue, context: {
                        e: FocusEvent;
                    }) => void;
                    onChange?: (value: import("../..").InputValue, context?: {
                        e?: InputEvent | MouseEvent | CompositionEvent;
                        trigger: "input" | "initial" | "clear";
                    }) => void;
                    onClear?: (context: {
                        e: MouseEvent;
                    }) => void;
                    onClick?: (context: {
                        e: MouseEvent;
                    }) => void;
                    onCompositionend?: (value: string, context: {
                        e: CompositionEvent;
                    }) => void;
                    onCompositionstart?: (value: string, context: {
                        e: CompositionEvent;
                    }) => void;
                    onEnter?: (value: import("../..").InputValue, context: {
                        e: KeyboardEvent;
                    }) => void;
                    onFocus?: (value: import("../..").InputValue, context: {
                        e: FocusEvent;
                    }) => void;
                    onKeydown?: (value: import("../..").InputValue, context: {
                        e: KeyboardEvent;
                    }) => void;
                    onKeypress?: (value: import("../..").InputValue, context: {
                        e: KeyboardEvent;
                    }) => void;
                    onKeyup?: (value: import("../..").InputValue, context: {
                        e: KeyboardEvent;
                    }) => void;
                    onMouseenter?: (context: {
                        e: MouseEvent;
                    }) => void;
                    onMouseleave?: (context: {
                        e: MouseEvent;
                    }) => void;
                    onPaste?: (context: {
                        e: ClipboardEvent;
                        pasteValue: string;
                    }) => void;
                    onValidate?: (context: {
                        error?: "exceed-maximum" | "below-minimum";
                    }) => void;
                    onWheel?: (context: {
                        e: WheelEvent;
                    }) => void;
                };
                inputValue?: string;
                defaultInputValue?: string;
                label?: string | import("../..").TNode;
                max?: number;
                minCollapsedNum?: number;
                placeholder?: string;
                prefixIcon?: import("../..").TNode;
                readonly?: boolean;
                size?: import("../..").SizeEnum;
                status?: "default" | "success" | "warning" | "error";
                suffix?: string | import("../..").TNode;
                suffixIcon?: import("../..").TNode;
                tag?: string | import("../..").TNode<{
                    value: string | number;
                }>;
                tagProps?: {
                    closable?: boolean;
                    color?: string;
                    content?: string | import("../..").TNode;
                    default?: string | import("../..").TNode;
                    disabled?: boolean;
                    icon?: import("../..").TNode;
                    maxWidth?: string | number;
                    shape?: "square" | "round" | "mark";
                    size?: import("../..").SizeEnum;
                    theme?: "default" | "primary" | "warning" | "danger" | "success";
                    title?: string;
                    variant?: "dark" | "light" | "outline" | "light-outline";
                    onClick?: (context: {
                        e: MouseEvent;
                    }) => void;
                    onClose?: (context: {
                        e: MouseEvent;
                    }) => void;
                };
                tips?: string | import("../..").TNode;
                value?: (string | number)[];
                defaultValue?: (string | number)[];
                modelValue?: (string | number)[];
                valueDisplay?: string | import("../..").TNode<{
                    value: import("../..").TagInputValue;
                    onClose: (index: number, item?: any) => void;
                }>;
                onBlur?: (value: import("../..").TagInputValue, context: {
                    inputValue: string;
                    e: FocusEvent;
                }) => void;
                onChange?: (value: import("../..").TagInputValue, context: import("../..").TagInputChangeContext) => void;
                onClear?: (context: {
                    e: MouseEvent;
                }) => void;
                onClick?: (context: {
                    e: MouseEvent;
                }) => void;
                onDragSort?: (context: import("../..").TagInputDragSortContext) => void;
                onEnter?: (value: import("../..").TagInputValue, context: {
                    e: KeyboardEvent;
                    inputValue: string;
                }) => void;
                onFocus?: (value: import("../..").TagInputValue, context: {
                    inputValue: string;
                    e: FocusEvent;
                }) => void;
                onInputChange?: (value: string, context?: import("../..").InputValueChangeContext) => void;
                onMouseenter?: (context: {
                    e: MouseEvent;
                }) => void;
                onMouseleave?: (context: {
                    e: MouseEvent;
                }) => void;
                onPaste?: (context: {
                    e: ClipboardEvent;
                    pasteValue: string;
                }) => void;
                onRemove?: (context: import("../..").TagInputRemoveContext) => void;
            };
            tagProps?: {
                closable?: boolean;
                color?: string;
                content?: string | import("../..").TNode;
                default?: string | import("../..").TNode;
                disabled?: boolean;
                icon?: import("../..").TNode;
                maxWidth?: string | number;
                shape?: "square" | "round" | "mark";
                size?: import("../..").SizeEnum;
                theme?: "default" | "primary" | "warning" | "danger" | "success";
                title?: string;
                variant?: "dark" | "light" | "outline" | "light-outline";
                onClick?: (context: {
                    e: MouseEvent;
                }) => void;
                onClose?: (context: {
                    e: MouseEvent;
                }) => void;
            };
            tips?: string | import("../..").TNode;
            value?: any;
            defaultValue?: any;
            modelValue?: any;
            valueDisplay?: string | import("../..").TNode<{
                value: import("../..").SelectValue;
                onClose: (index: number) => void;
                displayValue?: import("../..").SelectValue;
            } | import("../..").SelectValue>;
            valueType?: "value" | "object";
            onBlur?: (context: {
                value: import("../..").SelectValue;
                e: FocusEvent | KeyboardEvent;
            }) => void;
            onChange?: (value: import("../..").SelectValue, context: {
                option?: import("../..").SelectOption;
                selectedOptions: import("../..").SelectOption[];
                trigger: import("../..").SelectValueChangeTrigger;
                e?: MouseEvent | KeyboardEvent;
            }) => void;
            onClear?: (context: {
                e: MouseEvent;
            }) => void;
            onCreate?: (value: string | number | boolean) => void;
            onEnter?: (context: {
                inputValue: string;
                e: KeyboardEvent;
                value: import("../..").SelectValue;
            }) => void;
            onFocus?: (context: {
                value: import("../..").SelectValue;
                e: FocusEvent | KeyboardEvent;
            }) => void;
            onInputChange?: (value: string, context?: import("../..").SelectInputValueChangeContext) => void;
            onPopupVisibleChange?: (visible: boolean, context: import("../..").PopupVisibleChangeContext) => void;
            onRemove?: (options: import("../..").SelectRemoveContext<import("../..").SelectOption>) => void;
            onSearch?: (filterWords: string, context: {
                e: KeyboardEvent;
            }) => void;
        };
        showFirstAndLastPageBtn?: boolean;
        showJumper?: boolean;
        showPageNumber?: boolean;
        showPageSize?: boolean;
        showPreviousAndNextBtn?: boolean;
        size?: "small" | "medium";
        theme?: "default" | "simple";
        total?: number;
        totalContent?: boolean | import("../..").TNode;
        onChange?: (pageInfo: import("../..").PageInfo) => void;
        onCurrentChange?: (current: number, pageInfo: import("../..").PageInfo) => void;
        onPageSizeChange?: (pageSize: number, pageInfo: import("../..").PageInfo) => void;
    }>;
    isRowDraggable: ComputedRef<boolean>;
    isRowHandlerDraggable: ComputedRef<boolean>;
    isColDraggable: ComputedRef<boolean>;
    setDragSortPrimaryTableRef: (primaryTableElement: any) => void;
    setDragSortColumns: (val: BaseTableColumns) => void;
};
