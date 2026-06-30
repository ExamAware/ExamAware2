/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { useVModel } from '../utils/adapt.js';
import { ref, toRefs } from 'vue';
import 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../../_chunks/dep-fe23be6e.js';
import '../../_chunks/dep-81b01cae.js';
import '../../_chunks/dep-664b8b22.js';
import '../../_chunks/dep-9e6d8a78.js';
import '../../config-provider/hooks/useConfig.js';
import '../../config-provider/utils/context.js';
import '../../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/slicedToArray';
import '../../_chunks/dep-aa34a263.js';
import '../../_chunks/dep-3a7a2ef1.js';
import '../../_chunks/dep-880d05b9.js';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '@babel/runtime/helpers/defineProperty';
import '../../_chunks/dep-1da4c51c.js';
import '../../_chunks/dep-6264b0a7.js';
import '../../_chunks/dep-16bcfabc.js';
import '../../_chunks/dep-51e5a827.js';
import '../../_chunks/dep-90df3fa4.js';
import '../../_chunks/dep-80a77612.js';
import 'tdesign-icons-vue-next';
import '../../checkbox/index.js';
import '../../checkbox/checkbox.js';
import '../../checkbox/props.js';
import '../../_chunks/dep-2accc95a.js';
import '../../_chunks/dep-fb805f69.js';
import '../../_chunks/dep-4f8b6591.js';
import '../../_chunks/dep-f7dd3c12.js';
import '../../_chunks/dep-47b13687.js';
import '../../_chunks/dep-d2a6e7a4.js';
import '../../_chunks/dep-2ea19dca.js';
import '../../checkbox/consts/index.js';
import '../../checkbox/hooks/useCheckboxLazyLoad.js';
import '../../checkbox/hooks/useKeyboardEvent.js';
import '../../_chunks/dep-30c631d1.js';
import '../../checkbox/group.js';
import '../../checkbox/checkbox-group-props.js';
import '../../_chunks/dep-e3ce8c8f.js';
import '../../loading/index.js';
import '../../loading/directive.js';
import '../../loading/plugin.js';
import '../../_chunks/dep-ee693784.js';
import '../../loading/icon/gradient.js';
import '../../_chunks/dep-80a99546.js';
import '@babel/runtime/helpers/objectWithoutProperties';
import '../../loading/props.js';
import '../../_chunks/dep-423bbe8d.js';
import '@babel/runtime/helpers/asyncToGenerator';
import '@babel/runtime/regenerator';
import '../../_chunks/dep-8295e674.js';

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
//# sourceMappingURL=useTreeState.js.map
