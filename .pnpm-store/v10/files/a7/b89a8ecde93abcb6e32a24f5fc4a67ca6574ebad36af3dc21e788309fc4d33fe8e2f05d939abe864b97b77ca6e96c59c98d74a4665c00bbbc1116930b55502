/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tree_utils_adapt = require('../utils/adapt.js');
var Vue = require('vue');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../../_chunks/dep-953a77eb.js');
require('../../_chunks/dep-8abdfb41.js');
require('../../_chunks/dep-d62a674d.js');
require('../../_chunks/dep-ecaaae91.js');
require('../../config-provider/hooks/useConfig.js');
require('../../_chunks/dep-5d7e2375.js');
require('../../_chunks/dep-94a7dc2d.js');
require('dayjs');
require('../../_chunks/dep-92e23f17.js');
require('../../_chunks/dep-0ff616fe.js');
require('../../_chunks/dep-5f52cd42.js');
require('../../_chunks/dep-48f60c78.js');
require('../../_chunks/dep-b3b464e8.js');
require('../../_chunks/dep-0813861e.js');
require('../../_chunks/dep-f57bcb19.js');
require('../../_chunks/dep-dc4bbc14.js');
require('../../_chunks/dep-05f89f0d.js');
require('../../_chunks/dep-87589faa.js');
require('../../_chunks/dep-e27ea667.js');
require('../../_chunks/dep-165ca38a.js');
require('../../_chunks/dep-32412d92.js');
require('../../_chunks/dep-a8a3d718.js');
require('../../_chunks/dep-54e566d9.js');
require('../../_chunks/dep-591a72de.js');
require('@babel/runtime/helpers/slicedToArray');
require('../../_chunks/dep-a55e8a08.js');
require('../../_chunks/dep-8adeee89.js');
require('../../_chunks/dep-4d2ef282.js');
require('../../_chunks/dep-929933ce.js');
require('../../_chunks/dep-6b1f0ef8.js');
require('../../_chunks/dep-f20044b8.js');
require('../../_chunks/dep-23f77e26.js');
require('../../_chunks/dep-ee355a9a.js');
require('../../_chunks/dep-71fa6bfc.js');
require('../../_chunks/dep-80a478d7.js');
require('../../_chunks/dep-31c76dc6.js');
require('../../_chunks/dep-cc66acf1.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');
require('@babel/runtime/helpers/defineProperty');
require('../../_chunks/dep-f75abe2a.js');
require('../../_chunks/dep-fb83a452.js');
require('../../_chunks/dep-06276759.js');
require('../../_chunks/dep-e8ff2c13.js');
require('../../_chunks/dep-e4d1d84d.js');
require('../../_chunks/dep-b6058ff9.js');
require('../../_chunks/dep-9071ce5e.js');
require('../../_chunks/dep-441a3b7b.js');
require('../../_chunks/dep-e86abdd2.js');
require('../../_chunks/dep-3a7785db.js');
require('tdesign-icons-vue-next');
require('../../checkbox/index.js');
require('../../checkbox/checkbox.js');
require('../../checkbox/props.js');
require('../../_chunks/dep-47c460dd.js');
require('../../_chunks/dep-4fa46641.js');
require('../../_chunks/dep-422dd97f.js');
require('../../_chunks/dep-427dabac.js');
require('../../_chunks/dep-72c4cc44.js');
require('../../_chunks/dep-8382953f.js');
require('../../_chunks/dep-874d2900.js');
require('../../_chunks/dep-d45110a6.js');
require('../../_chunks/dep-bc848944.js');
require('../../_chunks/dep-0b6215b5.js');
require('../../_chunks/dep-c3dee00a.js');
require('../../checkbox/consts/index.js');
require('../../checkbox/hooks/useCheckboxLazyLoad.js');
require('../../checkbox/hooks/useKeyboardEvent.js');
require('../../_chunks/dep-6280a7f6.js');
require('../../checkbox/group.js');
require('../../checkbox/checkbox-group-props.js');
require('../../_chunks/dep-3565d523.js');
require('../../_chunks/dep-a58d79da.js');
require('../../_chunks/dep-8b33876c.js');
require('../../_chunks/dep-445924d5.js');
require('../../_chunks/dep-fd5a369e.js');
require('../../loading/index.js');
require('../../_chunks/dep-95261778.js');
require('../../loading/plugin.js');
require('../../_chunks/dep-237ed01f.js');
require('../../loading/icon/gradient.js');
require('../../_chunks/dep-55c70201.js');
require('@babel/runtime/helpers/objectWithoutProperties');
require('../../_chunks/dep-4ccaead1.js');
require('../../_chunks/dep-990979bb.js');
require('../../loading/props.js');
require('../../_chunks/dep-9cc695aa.js');
require('../../_chunks/dep-48de95ee.js');
require('../../_chunks/dep-912c9727.js');
require('../../_chunks/dep-0b8a4740.js');
require('../../_chunks/dep-cd8cfdc0.js');
require('../../_chunks/dep-ac11336c.js');
require('../../_chunks/dep-9ce6873a.js');
require('../../_chunks/dep-779f6290.js');
require('../../_chunks/dep-08a97e23.js');
require('@babel/runtime/helpers/asyncToGenerator');
require('@babel/runtime/regenerator');
require('../../_chunks/dep-733b2b51.js');
require('../../_chunks/dep-ace0b57c.js');
require('../../_chunks/dep-11b67e11.js');
require('../../_chunks/dep-dcb859c6.js');
require('../../_chunks/dep-6f2064e4.js');

function useTreeState(props, context) {
  var treeContentRef = Vue.ref();
  var nodes = Vue.ref([]);
  var allNodes = Vue.ref([]);
  var isScrolling = Vue.ref(false);
  var refProps = Vue.toRefs(props);
  var vmValue = tree_utils_adapt.useVModel(props, refProps, "value", "defaultValue", "onChange", "change");
  var vmActived = tree_utils_adapt.useVModel(props, refProps, "actived", "defaultActived", "onActive", "active");
  var vmExpanded = tree_utils_adapt.useVModel(props, refProps, "expanded", "defaultExpanded", "onExpand", "expand");
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

exports["default"] = useTreeState;
//# sourceMappingURL=useTreeState.js.map
