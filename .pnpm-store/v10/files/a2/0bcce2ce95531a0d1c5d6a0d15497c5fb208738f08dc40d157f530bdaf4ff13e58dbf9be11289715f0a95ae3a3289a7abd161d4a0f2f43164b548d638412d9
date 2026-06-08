/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../../_chunks/dep-953a77eb.js');
require('../../config-provider/hooks/useConfig.js');
require('@babel/runtime/helpers/slicedToArray');
require('../../_chunks/dep-cc66acf1.js');
require('@babel/runtime/helpers/defineProperty');
require('tdesign-icons-vue-next');
require('../../checkbox/index.js');
require('../../loading/index.js');
var treeNode = require('../../_chunks/dep-08a97e23.js');
var tree_treeItem = require('../tree-item.js');
var tree_hooks_useTreeEvents = require('./useTreeEvents.js');
require('../../_chunks/dep-8abdfb41.js');
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
require('../../_chunks/dep-a55e8a08.js');
require('../../_chunks/dep-8adeee89.js');
require('../../_chunks/dep-4d2ef282.js');
require('../../_chunks/dep-929933ce.js');
require('../../_chunks/dep-6b1f0ef8.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');
require('../../checkbox/checkbox.js');
require('../../checkbox/props.js');
require('../../_chunks/dep-47c460dd.js');
require('../../_chunks/dep-06276759.js');
require('../../_chunks/dep-4fa46641.js');
require('../../_chunks/dep-422dd97f.js');
require('../../_chunks/dep-71fa6bfc.js');
require('../../_chunks/dep-80a478d7.js');
require('../../_chunks/dep-427dabac.js');
require('../../_chunks/dep-72c4cc44.js');
require('../../_chunks/dep-ee355a9a.js');
require('../../_chunks/dep-23f77e26.js');
require('../../_chunks/dep-8382953f.js');
require('../../_chunks/dep-ecaaae91.js');
require('../../_chunks/dep-874d2900.js');
require('../../_chunks/dep-d45110a6.js');
require('../../_chunks/dep-bc848944.js');
require('../../_chunks/dep-0b6215b5.js');
require('../../_chunks/dep-c3dee00a.js');
require('../../_chunks/dep-e8ff2c13.js');
require('../../checkbox/consts/index.js');
require('../../checkbox/hooks/useCheckboxLazyLoad.js');
require('../../_chunks/dep-fb83a452.js');
require('../../checkbox/hooks/useKeyboardEvent.js');
require('../../_chunks/dep-6280a7f6.js');
require('../../checkbox/group.js');
require('../../checkbox/checkbox-group-props.js');
require('../../_chunks/dep-3565d523.js');
require('../../_chunks/dep-a58d79da.js');
require('../../_chunks/dep-8b33876c.js');
require('../../_chunks/dep-445924d5.js');
require('../../_chunks/dep-fd5a369e.js');
require('../../_chunks/dep-d62a674d.js');
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
require('@babel/runtime/helpers/asyncToGenerator');
require('@babel/runtime/regenerator');
require('../../_chunks/dep-733b2b51.js');
require('../../_chunks/dep-ace0b57c.js');
require('../../_chunks/dep-11b67e11.js');
require('../../_chunks/dep-dcb859c6.js');
require('../../_chunks/dep-6f2064e4.js');
require('../utils/adapt.js');
require('../../_chunks/dep-f20044b8.js');
require('../../_chunks/dep-31c76dc6.js');
require('../../_chunks/dep-f75abe2a.js');
require('../../_chunks/dep-e4d1d84d.js');
require('../../_chunks/dep-b6058ff9.js');
require('../../_chunks/dep-9071ce5e.js');
require('../../_chunks/dep-441a3b7b.js');
require('../../_chunks/dep-e86abdd2.js');
require('../../_chunks/dep-3a7785db.js');
require('./useItemState.js');
require('./useTreeItem.js');
require('./useItemEvents.js');
require('./useRenderIcon.js');
require('../utils/index.js');
require('./useRenderLabel.js');
require('./useRenderLine.js');
require('./useRenderOperations.js');
require('./useDraggable.js');
require('./useTreeAction.js');

function useTreeNodes(state) {
  var store = state.store,
    scope = state.scope,
    allNodes = state.allNodes,
    nodes = state.nodes,
    virtualConfig = state.virtualConfig;
  var _useTreeEvents = tree_hooks_useTreeEvents["default"](state),
    handleClick = _useTreeEvents.handleClick,
    handleChange = _useTreeEvents.handleChange;
  var nodesEmpty = Vue.ref(false);
  var cacheMap = /* @__PURE__ */new Map();
  var refresh = function refresh() {
    allNodes.value = store.getNodes();
  };
  var refreshVisibleNodes = function refreshVisibleNodes() {
    var isVirtual = virtualConfig === null || virtualConfig === void 0 ? void 0 : virtualConfig.isVirtualScroll.value;
    if (isVirtual) return;
    var list = [];
    var hasVisibleNode = false;
    allNodes.value.forEach(function (node) {
      if (node.visible) {
        hasVisibleNode = true;
        cacheMap.set(node.value, node.value);
      }
      if (cacheMap.has(node.value)) {
        list.push(node);
      }
    });
    cacheMap.forEach(function (value) {
      if (!store.getNode(value)) {
        cacheMap["delete"](value);
      }
    });
    nodes.value = list;
    nodesEmpty.value = !hasVisibleNode;
  };
  var refreshVirtualNodes = function refreshVirtualNodes() {
    var isVirtual = virtualConfig === null || virtualConfig === void 0 ? void 0 : virtualConfig.isVirtualScroll.value;
    if (!isVirtual) return;
    var list = virtualConfig.visibleData.value;
    nodes.value = list;
    nodesEmpty.value = list.length <= 0;
  };
  var renderItem = function renderItem(h, node, index, stateId) {
    var rowIndex = node.VIRTUAL_SCROLL_INDEX || index;
    var nodeUniqueId = node[treeNode.privateKey];
    var treeItem = Vue.createVNode(tree_treeItem["default"], {
      "key": nodeUniqueId,
      "rowIndex": rowIndex,
      "stateId": stateId,
      "itemKey": nodeUniqueId,
      "treeScope": scope,
      "onClick": handleClick,
      "onChange": handleChange
    }, null);
    return treeItem;
  };
  var renderTreeNodes = function renderTreeNodes(h) {
    var stateId = "render-".concat(new Date().getTime());
    var treeNodeViews = nodes.value.map(function (node, index) {
      return renderItem(h, node, index, stateId);
    });
    return treeNodeViews;
  };
  Vue.watch(allNodes, refreshVisibleNodes);
  Vue.watch(virtualConfig.visibleData, refreshVirtualNodes);
  refresh();
  refreshVisibleNodes();
  refreshVirtualNodes();
  store.emitter.on("update", refresh);
  return {
    nodesEmpty: nodesEmpty,
    renderTreeNodes: renderTreeNodes
  };
}

exports["default"] = useTreeNodes;
//# sourceMappingURL=useTreeNodes.js.map
