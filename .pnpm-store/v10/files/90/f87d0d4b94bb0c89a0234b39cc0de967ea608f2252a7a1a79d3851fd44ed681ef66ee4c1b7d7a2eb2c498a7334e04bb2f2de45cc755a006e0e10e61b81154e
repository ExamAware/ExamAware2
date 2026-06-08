import { TreeStore } from 'tdesign-vue-next/lib/common/js/tree/tree-store';
import { TreeProps, TypeTreeState } from '../types';
export default function useTreeStore(state: TypeTreeState): {
    store: TreeStore;
    rebuild: (list: TreeProps["data"]) => void;
    checkFilterExpand: (newFilter: null | Function, previousFilter: null | Function) => void;
    updateStoreConfig: () => void;
    updateExpanded: () => void;
    expandFilterPath: () => void;
};
