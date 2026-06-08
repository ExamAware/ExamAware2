import { TreeNodeValue, TypeTreeState, TypeTargetNode } from '../types';
export default function useTreeAction(state: TypeTreeState): {
    setExpanded: (item: TypeTargetNode, isExpanded: boolean) => TreeNodeValue[];
    toggleExpanded: (item: TypeTargetNode) => TreeNodeValue[];
    setActived: (item: TypeTargetNode, isActived: boolean) => import("@common/js/tree/types").TreeNodeValue[];
    toggleActived: (item: TypeTargetNode) => TreeNodeValue[];
    setChecked: (item: TypeTargetNode, isChecked: boolean, ctx: {
        e: Event;
    }) => TreeNodeValue[];
    toggleChecked: (item: TypeTargetNode, ctx: {
        e: Event;
    }) => TreeNodeValue[];
};
