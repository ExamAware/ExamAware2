import * as Vue from 'vue';
import { Ref, SetupContext, ToRefs, VNode, PropType, ComponentPublicInstance, UnwrapNestedRefs } from 'vue';
import { CheckboxProps } from '../../checkbox';
import { ClassName, TScroll, Styles, TNode, TreeOptionData, TNodeReturnValue } from '../../common';
import { TypeTreeEventState as TreeEventState } from 'tdesign-vue-next/es/common/js/tree/types';
import { TdTreeProps, TreeInstanceFunctions } from '../type';
import { VirtualScrollConfig, useVModel as tdUseVModel } from '@tdesign/shared-hooks';
import { TreeStore } from 'tdesign-vue-next/es/common/js/tree/tree-store';
export { ref, reactive, computed, watch, onMounted, toRefs, defineComponent, TransitionGroup } from 'vue';
export { CaretRightSmallIcon as TdCaretRightSmallIcon } from 'tdesign-icons-vue-next';
export { Checkbox as TCheckBox } from '../../checkbox';
export { Loading as TLoading } from '../../loading';
export { useConfig, usePrefixClass } from '@tdesign/shared-hooks';
export { useGlobalIcon } from '@tdesign/shared-hooks';
export { useLazyLoad } from '@tdesign/shared-hooks';
export { useVirtualScrollNew } from '@tdesign/shared-hooks';
export { TreeNode, privateKey } from 'tdesign-vue-next/es/common/js/tree/tree-node';
export type TypeVModel = ReturnType<typeof tdUseVModel>;
export type TypeRef<T> = Ref<T>;
export type TypeSetupContext = SetupContext;
export type TypeCreateElement = typeof Vue.h;
export type TypeVNode = VNode;
export type TypePropType<T> = PropType<T>;
export type TypeCheckboxProps = CheckboxProps;
export type TypeClassName = ClassName;
export type TypeScroll = TScroll;
export type TypeStyles = Styles;
export type TypeTNode<T> = TNode<T>;
export type TypeTNodeReturnValue = TNodeReturnValue;
export type TypeTreeOptionData = TreeOptionData;
export type TypeTreeEventState = TreeEventState;
export type TypeVirtualScrollConfig = VirtualScrollConfig;
export type TypeToRefs<T> = ToRefs<T>;
export type TypeUnwrapNestedRefs<T> = UnwrapNestedRefs<T>;
export interface TypeTreeInstance extends ComponentPublicInstance, TreeInstanceFunctions {
}
export type TreeProps<T extends TypeTreeOptionData = TypeTreeOptionData> = TdTreeProps<T> & {
    treeStore?: TreeStore;
};
export interface TypeOnDrag {
    default?: unknown;
}
export declare const isVueNext = true;
export declare const TreeItemDefinition: {
    name: string;
    inject: {
        onDrag: TypeOnDrag;
    };
};
export declare function useRipple(el: unknown): void;
export declare function withInstall<T>(construct: T): T & Vue.Plugin;
export interface UseVModelParams<T> {
    value: Ref<T>;
    eventName?: string;
    propName?: string;
}
export declare function getCreateElement(h?: TypeCreateElement): typeof Vue.h;
export declare function getScopedSlots(instance: ComponentPublicInstance): Readonly<{
    [name: string]: Vue.Slot<any>;
}>;
export declare function useVModel(props: TreeProps & Record<string, any>, refsProps: ToRefs<TreeProps> & Record<string, any>, propName?: string, defaultPropName?: string, eventPropName?: string, eventName?: string): [Vue.Ref<any>, import("@tdesign/shared-hooks").ChangeHandler<any, any[]>];
