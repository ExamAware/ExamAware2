import { TNode } from '../common';
export interface TdTabsProps {
    action?: string | TNode;
    addable?: boolean;
    disabled?: boolean;
    dragSort?: boolean;
    list?: Array<TdTabPanelProps>;
    placement?: 'left' | 'top' | 'bottom' | 'right';
    scrollPosition?: 'auto' | 'start' | 'center' | 'end';
    size?: 'medium' | 'large';
    theme?: 'normal' | 'card';
    value?: TabValue;
    defaultValue?: TabValue;
    modelValue?: TabValue;
    onAdd?: (context: {
        e: MouseEvent;
    }) => void;
    onChange?: (value: TabValue) => void;
    onDragSort?: (context: TabsDragSortContext) => void;
    onRemove?: (options: {
        value: TabValue;
        index: number;
        e: MouseEvent;
    }) => void;
}
export interface TdTabPanelProps {
    default?: TNode;
    destroyOnHide?: boolean;
    disabled?: boolean;
    draggable?: boolean;
    label?: string | TNode;
    lazy?: boolean;
    panel?: string | TNode;
    removable?: boolean;
    value?: TabValue;
    onRemove?: (options: {
        value: TabValue;
        e: MouseEvent;
    }) => void;
}
export type TabValue = string | number;
export interface TabsDragSortContext {
    currentIndex: number;
    current: TabValue;
    targetIndex: number;
    target: TabValue;
}
