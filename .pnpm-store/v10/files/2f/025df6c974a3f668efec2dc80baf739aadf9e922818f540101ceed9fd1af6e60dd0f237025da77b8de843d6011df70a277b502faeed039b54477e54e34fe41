/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { useVModel } from '../utils/adapt.mjs';
import { ref, toRefs } from 'vue';
import '../../_chunks/dep-7673347f.mjs';
import 'lodash-es';
import '../../_chunks/dep-00b4e06a.mjs';
import '../../_chunks/dep-9f459d8b.mjs';
import '../../_chunks/dep-257428bc.mjs';
import '../../_chunks/dep-51a43106.mjs';
import '../../_chunks/dep-fe644854.mjs';
import '../../config-provider/hooks/useConfig.mjs';
import '../../config-provider/utils/context.mjs';
import '../../_chunks/dep-a4c09318.mjs';
import '../../_chunks/dep-ffb85102.mjs';
import '../../_chunks/dep-ad588525.mjs';
import '../../_chunks/dep-9003fde5.mjs';
import '../../_chunks/dep-22ebd6af.mjs';
import '../../_chunks/dep-cdd448ec.mjs';
import '../../_chunks/dep-97ecacde.mjs';
import '../../_chunks/dep-84fd47b3.mjs';
import '../../_chunks/dep-1dacc319.mjs';
import '../../_chunks/dep-d36c4a3f.mjs';
import 'tdesign-icons-vue-next';
import '../../checkbox/index.mjs';
import '../../checkbox/checkbox.mjs';
import '../../checkbox/props.mjs';
import '../../checkbox/consts/index.mjs';
import '../../checkbox/hooks/useCheckboxLazyLoad.mjs';
import '../../checkbox/hooks/useKeyboardEvent.mjs';
import '../../checkbox/group.mjs';
import '../../checkbox/checkbox-group-props.mjs';
import './style/css.mjs';
import '../../loading/index.mjs';
import '../../loading/directive.mjs';
import '../../loading/plugin.mjs';
import '../../loading/loading.mjs';
import '../../loading/icon/gradient.mjs';
import '../../_chunks/dep-0cde7579.mjs';
import '../../_chunks/dep-0dcc778a.mjs';
import '../../loading/props.mjs';
import '../../_chunks/dep-07809d3f.mjs';
import '../../_chunks/dep-88e5a7b0.mjs';
import '../../_chunks/dep-6d2705e1.mjs';

function useTreeState(props, context) {
  var treeContentRef = ref();
  var nodes = ref([]);
  var allNodes = ref([]);
  var isScrolling = ref(false);
  var refProps = toRefs(props);
  var vmValue = useVModel(props, refProps, "value", "defaultValue", "onChange", "change");
  var vmActived = useVModel(props, refProps, "actived", "defaultActived", "onActive", "active");
  var vmExpanded = useVModel(props, refProps, "expanded", "defaultExpanded", "onExpand", "expand");
  function setStore(store) {
    state.store = store;
    state.scope.store = store;
    allNodes.value = store.getNodes();
  }
  var state = {
    props: props,
    context: context,
    store: null,
    treeContentRef: treeContentRef,
    nodes: nodes,
    allNodes: allNodes,
    isScrolling: isScrolling,
    mouseEvent: null,
    virtualConfig: null,
    scope: {
      store: null,
      treeContentRef: treeContentRef,
      treeProps: props,
      scopedSlots: {},
      virtualConfig: null
    },
    setStore: setStore,
    refProps: refProps,
    vmValue: vmValue,
    vmActived: vmActived,
    vmExpanded: vmExpanded
  };
  return {
    state: state
  };
}

export { useTreeState as default };
//# sourceMappingURL=useTreeState.mjs.map
