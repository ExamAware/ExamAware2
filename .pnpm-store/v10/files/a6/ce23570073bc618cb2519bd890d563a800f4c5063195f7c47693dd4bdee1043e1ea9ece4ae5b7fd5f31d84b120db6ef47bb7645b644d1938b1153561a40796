/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { ref, createVNode, watch } from 'vue';
import '../utils/adapt.mjs';
import TreeItem from '../tree-item.mjs';
import useTreeEvents from './useTreeEvents.mjs';
import { p as privateKey } from '../../_chunks/dep-07809d3f.mjs';
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
import '../../_chunks/dep-88e5a7b0.mjs';
import '../../_chunks/dep-6d2705e1.mjs';
import './useItemState.mjs';
import './useTreeItem.mjs';
import './useItemEvents.mjs';
import './useRenderIcon.mjs';
import '../utils/index.mjs';
import './useRenderLabel.mjs';
import './useRenderLine.mjs';
import './useRenderOperations.mjs';
import './useDraggable.mjs';
import './useTreeAction.mjs';

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
//# sourceMappingURL=useTreeNodes.mjs.map
