/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { ref, watch, createVNode } from 'vue';
import 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../../_chunks/dep-fe23be6e.js';
import '../../config-provider/hooks/useConfig.js';
import '@babel/runtime/helpers/slicedToArray';
import '../../_chunks/dep-880d05b9.js';
import '@babel/runtime/helpers/defineProperty';
import 'tdesign-icons-vue-next';
import '../../checkbox/index.js';
import '../../loading/index.js';
import { p as privateKey } from '../../_chunks/dep-423bbe8d.js';
import TreeItem from '../tree-item.js';
import useTreeEvents from './useTreeEvents.js';
import '../../_chunks/dep-81b01cae.js';
import '../../config-provider/utils/context.js';
import '../../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '../../checkbox/checkbox.js';
import '../../checkbox/props.js';
import '../../_chunks/dep-2accc95a.js';
import '../../_chunks/dep-16bcfabc.js';
import '../../_chunks/dep-fb805f69.js';
import '../../_chunks/dep-4f8b6591.js';
import '../../_chunks/dep-9e6d8a78.js';
import '../../_chunks/dep-f7dd3c12.js';
import '../../_chunks/dep-47b13687.js';
import '../../_chunks/dep-d2a6e7a4.js';
import '../../_chunks/dep-2ea19dca.js';
import '../../_chunks/dep-51e5a827.js';
import '../../checkbox/consts/index.js';
import '../../checkbox/hooks/useCheckboxLazyLoad.js';
import '../../_chunks/dep-6264b0a7.js';
import '../../checkbox/hooks/useKeyboardEvent.js';
import '../../_chunks/dep-30c631d1.js';
import '../../checkbox/group.js';
import '../../checkbox/checkbox-group-props.js';
import '../../_chunks/dep-e3ce8c8f.js';
import '../../_chunks/dep-664b8b22.js';
import '../../loading/directive.js';
import '../../loading/plugin.js';
import '../../_chunks/dep-ee693784.js';
import '../../loading/icon/gradient.js';
import '../../_chunks/dep-80a99546.js';
import '@babel/runtime/helpers/objectWithoutProperties';
import '../../loading/props.js';
import '@babel/runtime/helpers/asyncToGenerator';
import '@babel/runtime/regenerator';
import '../../_chunks/dep-8295e674.js';
import '../utils/adapt.js';
import '../../_chunks/dep-aa34a263.js';
import '../../_chunks/dep-3a7a2ef1.js';
import '../../_chunks/dep-1da4c51c.js';
import '../../_chunks/dep-90df3fa4.js';
import '../../_chunks/dep-80a77612.js';
import './useItemState.js';
import './useTreeItem.js';
import './useItemEvents.js';
import './useRenderIcon.js';
import '../utils/index.js';
import './useRenderLabel.js';
import './useRenderLine.js';
import './useRenderOperations.js';
import './useDraggable.js';
import './useTreeAction.js';

function useTreeNodes(state) {
  var store = state.store,
    scope = state.scope,
    allNodes = state.allNodes,
    nodes = state.nodes,
    virtualConfig = state.virtualConfig;
  var _useTreeEvents = useTreeEvents(state),
    handleClick = _useTreeEvents.handleClick,
    handleChange = _useTreeEvents.handleChange;
  var nodesEmpty = ref(false);
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
    var nodeUniqueId = node[privateKey];
    var treeItem = createVNode(TreeItem, {
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
  watch(allNodes, refreshVisibleNodes);
  watch(virtualConfig.visibleData, refreshVirtualNodes);
  refresh();
  refreshVisibleNodes();
  refreshVirtualNodes();
  store.emitter.on("update", refresh);
  return {
    nodesEmpty: nodesEmpty,
    renderTreeNodes: renderTreeNodes
  };
}

export { useTreeNodes as default };
//# sourceMappingURL=useTreeNodes.js.map
