import { Slot } from 'vue';
import type { TdMenuItemProps } from '../type';
type MenuValue = string | number;
type MenuNode = MenuValue | VMenuData;
interface VMenuData {
    value: MenuValue;
    parent?: MenuNode;
    children: VMenuData[];
    vnode?: Slot;
}
interface VMenuItem extends TdMenuItemProps {
    value?: MenuValue;
    parent: MenuValue;
    vnode?: Slot;
}
export declare class VMenu {
    data: VMenuData;
    cache: Set<VMenuData>;
    isMutex: import("vue").Ref<boolean>;
    expandValues: Set<MenuValue>;
    constructor(options: Record<string, any>);
    add(item: VMenuItem): void;
    select(val: MenuValue): MenuValue[];
    expand(val: MenuValue): MenuValue[];
    getChild(value: MenuValue): VMenuData[];
}
export {};
