/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { _ as _toConsumableArray } from '../../_chunks/dep-00b4e06a.mjs';
import { toRefs, ref, shallowRef, computed, watch, h, createVNode, onUnmounted } from 'vue';
import { _ as _defineProperty } from '../../_chunks/dep-1dacc319.mjs';
import { AddRectangleIcon, MinusRectangleIcon } from 'tdesign-icons-vue-next';
import { get } from 'lodash-es';
import { T as TableTreeStore, u as useTreeDataExpand } from '../../_chunks/dep-8d7b8b7d.mjs';
import useClassName from './useClassName.mjs';
import { renderCell } from '../components/tr.mjs';
import { i as useGlobalIcon, q as useTNodeDefault } from '../../_chunks/dep-7673347f.mjs';
import { useConfig } from '../../config-provider/hooks/useConfig.mjs';
import '../../_chunks/dep-9f459d8b.mjs';
import '../../_chunks/dep-257428bc.mjs';
import '../../_chunks/dep-9003fde5.mjs';
import '../../_chunks/dep-84fd47b3.mjs';
import '../../_chunks/dep-ec9bd76e.mjs';
import '../../_chunks/dep-6d2705e1.mjs';
import '../../_chunks/dep-97ecacde.mjs';
import '../../_chunks/dep-51a43106.mjs';
import '../../_chunks/dep-fe644854.mjs';
import '../../config-provider/utils/context.mjs';
import '../../_chunks/dep-a4c09318.mjs';
import '../../_chunks/dep-ffb85102.mjs';
import '../../_chunks/dep-ad588525.mjs';
import '../../_chunks/dep-22ebd6af.mjs';
import '../../_chunks/dep-cdd448ec.mjs';
import '../../_chunks/dep-d36c4a3f.mjs';
import '../utils/index.mjs';
import './useFixed.mjs';
import '../../_chunks/dep-03148507.mjs';
import '../../_chunks/dep-0cde7579.mjs';
import '../../_chunks/dep-0dcc778a.mjs';
import '../components/ellipsis.mjs';
import '../../tooltip/index.mjs';
import '../../tooltip/tooltip.mjs';
import '../../tooltip/props.mjs';
import '../../popup/props.mjs';
import '../../popup/index.mjs';
import '../../popup/popup.mjs';
import '@popperjs/core';
import '../../popup/container.mjs';
import './style/css.mjs';
import '../../tooltip/utils/index.mjs';
import '../base-table-props.mjs';
import './useLazyLoad.mjs';
import './useRowspanAndColspan.mjs';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function useTreeData(props, context) {
  var _toRefs = toRefs(props),
    data = _toRefs.data,
    columns = _toRefs.columns;
  var _useConfig = useConfig("table", props.locale),
    t = _useConfig.t,
    globalConfig = _useConfig.globalConfig;
  var _useGlobalIcon = useGlobalIcon({
      AddRectangleIcon: AddRectangleIcon,
      MinusRectangleIcon: MinusRectangleIcon
    }),
    AddRectangleIcon$1 = _useGlobalIcon.AddRectangleIcon,
    MinusRectangleIcon$1 = _useGlobalIcon.MinusRectangleIcon;
  var store = ref(new TableTreeStore());
  var treeNodeCol = shallowRef();
  var dataSource = ref([]);
  var _useClassName = useClassName(),
    tableTreeClasses = _useClassName.tableTreeClasses;
  var renderTNode = useTNodeDefault();
  var rowDataKeys = computed(function () {
    var _props$tree;
    return {
      rowKey: props.rowKey || "id",
      childrenKey: ((_props$tree = props.tree) === null || _props$tree === void 0 ? void 0 : _props$tree.childrenKey) || "children"
    };
  });
  var _useTreeDataExpand = useTreeDataExpand(props, {
      store: store,
      dataSource: dataSource,
      rowDataKeys: rowDataKeys
    }),
    tExpandedTreeNode = _useTreeDataExpand.tExpandedTreeNode,
    isDefaultExpandAllExecute = _useTreeDataExpand.isDefaultExpandAllExecute,
    isDefaultExpandedTreeNodesExecute = _useTreeDataExpand.isDefaultExpandedTreeNodesExecute,
    expandAll = _useTreeDataExpand.expandAll,
    foldAll = _useTreeDataExpand.foldAll,
    updateExpandOnDataChange = _useTreeDataExpand.updateExpandOnDataChange,
    onExpandFoldIconClick = _useTreeDataExpand.onExpandFoldIconClick;
  var checkedColumn = computed(function () {
    return columns.value.find(function (col) {
      return col.colKey === "row-select";
    });
  });
  watch(checkedColumn, function (column) {
    if (!store.value) return;
    store.value.updateDisabledState(dataSource.value, column, rowDataKeys.value);
  });
  var foldIcon = function foldIcon(context2) {
    var params = _objectSpread(_objectSpread({}, context2), {}, {
      type: "fold"
    });
    var defaultFoldIcon = t(globalConfig.value.treeExpandAndFoldIcon, h, params) || createVNode(MinusRectangleIcon$1, null, null);
    return renderTNode("treeExpandAndFoldIcon", {
      defaultNode: defaultFoldIcon,
      params: params
    });
  };
  var expandIcon = function expandIcon(context2) {
    var params = _objectSpread(_objectSpread({}, context2), {}, {
      type: "expand"
    });
    var defaultExpandIcon = t(globalConfig.value.treeExpandAndFoldIcon, h, params) || createVNode(AddRectangleIcon$1, null, null);
    return renderTNode("treeExpandAndFoldIcon", {
      defaultNode: defaultExpandIcon,
      params: params
    });
  };
  watch([data], function () {
    if (props.tree) {
      resetData(data.value);
    } else {
      dataSource.value = data.value;
    }
  }, {
    immediate: true
  });
  onUnmounted(function () {
    var _store$value$treeData;
    if (!props.tree) return;
    (_store$value$treeData = store.value.treeDataMap) === null || _store$value$treeData === void 0 || _store$value$treeData.clear();
    store.value = null;
  });
  watch(function () {
    var _props$tree2;
    return [columns, (_props$tree2 = props.tree) === null || _props$tree2 === void 0 ? void 0 : _props$tree2.treeNodeColumnIndex];
  }, function () {
    treeNodeCol.value = getTreeNodeColumnCol();
  }, {
    immediate: true
  });
  function resetData(data2) {
    var _tExpandedTreeNode$va;
    var columns2 = props.columns,
      expandedTreeNodes = props.expandedTreeNodes,
      defaultExpandedTreeNodes = props.defaultExpandedTreeNodes,
      tree = props.tree;
    store.value.initialTreeStore(data2, columns2, rowDataKeys.value);
    var defaultNeedExpand = Boolean(!isDefaultExpandedTreeNodesExecute.value && (defaultExpandedTreeNodes === null || defaultExpandedTreeNodes === void 0 ? void 0 : defaultExpandedTreeNodes.length));
    var needExpandAll = Boolean((tree === null || tree === void 0 ? void 0 : tree.defaultExpandAll) && !isDefaultExpandAllExecute.value);
    if ((_tExpandedTreeNode$va = tExpandedTreeNode.value) !== null && _tExpandedTreeNode$va !== void 0 && _tExpandedTreeNode$va.length && !!(expandedTreeNodes || defaultNeedExpand) || needExpandAll) {
      updateExpandOnDataChange(data2);
      isDefaultExpandedTreeNodesExecute.value = true;
    } else {
      dataSource.value = _toConsumableArray(data2);
    }
  }
  function getTreeNodeStyle(level) {
    var _props$tree3, _props$tree4;
    if (level === void 0) return;
    var indent = ((_props$tree3 = props.tree) === null || _props$tree3 === void 0 ? void 0 : _props$tree3.indent) === void 0 ? 24 : (_props$tree4 = props.tree) === null || _props$tree4 === void 0 ? void 0 : _props$tree4.indent;
    return indent ? {
      paddingLeft: "".concat(level * indent || 1, "px")
    } : {};
  }
  function toggleExpandData(p, trigger) {
    var _store$value, _props$onTreeExpandCh;
    var currentData = _objectSpread({}, p);
    if (p.row.VIRTUAL_SCROLL_INDEX !== void 0) {
      currentData.rowIndex = p.row.VIRTUAL_SCROLL_INDEX;
    }
    dataSource.value = _toConsumableArray(store.value.toggleExpandData(currentData, dataSource.value, rowDataKeys.value));
    var rowValue = get(p.row, rowDataKeys.value.rowKey);
    var rowState = (_store$value = store.value) === null || _store$value === void 0 || (_store$value = _store$value.treeDataMap) === null || _store$value === void 0 ? void 0 : _store$value.get(rowValue);
    (_props$onTreeExpandCh = props.onTreeExpandChange) === null || _props$onTreeExpandCh === void 0 || _props$onTreeExpandCh.call(props, {
      row: p.row,
      rowIndex: p.rowIndex,
      rowState: rowState,
      trigger: trigger
    });
  }
  function getTreeNodeColumnCol() {
    var _props$tree5;
    var columns2 = props.columns;
    var treeNodeColumnIndex = ((_props$tree5 = props.tree) === null || _props$tree5 === void 0 ? void 0 : _props$tree5.treeNodeColumnIndex) || 0;
    while ((_columns2$treeNodeCol = columns2[treeNodeColumnIndex]) !== null && _columns2$treeNodeCol !== void 0 && _columns2$treeNodeCol.type || ((_columns2$treeNodeCol2 = columns2[treeNodeColumnIndex]) === null || _columns2$treeNodeCol2 === void 0 ? void 0 : _columns2$treeNodeCol2.colKey) === "__EXPAND_ROW_ICON_COLUMN__") {
      var _columns2$treeNodeCol, _columns2$treeNodeCol2;
      treeNodeColumnIndex += 1;
    }
    return columns2[treeNodeColumnIndex];
  }
  function formatTreeColumn(col) {
    if (!props.tree || col.colKey !== treeNodeCol.value.colKey) return col;
    var newCol = _objectSpread({}, treeNodeCol.value);
    newCol.cell = function (h2, p) {
      var cellInfo = renderCell(_objectSpread(_objectSpread({}, p), {}, {
        col: _objectSpread({}, treeNodeCol.value)
      }), context.slots, {
        cellEmptyContent: props.cellEmptyContent
      });
      var currentState = store.value.treeDataMap.get(get(p.row, rowDataKeys.value.rowKey));
      var colStyle = getTreeNodeStyle(currentState === null || currentState === void 0 ? void 0 : currentState.level);
      var classes = _defineProperty({}, tableTreeClasses.inlineCol, !!col.ellipsis);
      var childrenNodes = get(p.row, rowDataKeys.value.childrenKey);
      if (childrenNodes && childrenNodes instanceof Array || childrenNodes === true) {
        var _store$value$treeData2;
        var iconNode = (_store$value$treeData2 = store.value.treeDataMap.get(get(p.row, rowDataKeys.value.rowKey))) !== null && _store$value$treeData2 !== void 0 && _store$value$treeData2.expanded ? foldIcon(p) : expandIcon(p);
        return createVNode("div", {
          "class": [tableTreeClasses.col, classes],
          "style": colStyle
        }, [!!(childrenNodes.length || childrenNodes === true) && createVNode("span", {
          "class": tableTreeClasses.icon,
          "onClick": function onClick(e) {
            onExpandFoldIconClick(p, "expand-fold-icon");
            e.stopPropagation();
          }
        }, [iconNode]), cellInfo]);
      }
      return createVNode("div", {
        "style": colStyle,
        "class": [classes, tableTreeClasses.leafNode]
      }, [createVNode("span", {
        "class": tableTreeClasses.icon
      }, null), cellInfo]);
    };
    if (newCol.ellipsis === true) {
      newCol.ellipsis = function (h2, p) {
        return renderCell(_objectSpread(_objectSpread({}, p), {}, {
          col: _objectSpread({}, treeNodeCol.value)
        }), context.slots);
      };
    }
    return newCol;
  }
  function setData(key, newRowData) {
    var rowIndex = store.value.updateData(key, newRowData, dataSource.value, rowDataKeys.value);
    var newData = _toConsumableArray(dataSource.value);
    newData[rowIndex] = newRowData;
    dataSource.value = newData;
  }
  function getData(key) {
    return store.value.getData(key);
  }
  function remove(key) {
    dataSource.value = _toConsumableArray(store.value.remove(key, dataSource.value, rowDataKeys.value));
  }
  function removeChildren(key) {
    dataSource.value = _toConsumableArray(store.value.removeChildren(key, dataSource.value, rowDataKeys.value));
  }
  function appendTo() {
    var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var newData = arguments.length > 1 ? arguments[1] : undefined;
    if (!key) {
      dataSource.value = store.value.appendToRoot(newData, dataSource.value, rowDataKeys.value);
      return;
    }
    dataSource.value = _toConsumableArray(store.value.appendTo(key, newData, dataSource.value, rowDataKeys.value));
  }
  function insertAfter(rowValue, newData) {
    dataSource.value = _toConsumableArray(store.value.insertAfter(rowValue, newData, dataSource.value, rowDataKeys.value));
  }
  function insertBefore(rowValue, newData) {
    dataSource.value = _toConsumableArray(store.value.insertBefore(rowValue, newData, dataSource.value, rowDataKeys.value));
  }
  function swapData(params) {
    var r = store.value.swapData(dataSource.value, params, rowDataKeys.value);
    if (r.result) {
      dataSource.value = _toConsumableArray(r.dataSource);
    } else {
      var _props$onAbnormalDrag;
      var params2 = {
        code: r.code,
        reason: r.reason
      };
      (_props$onAbnormalDrag = props.onAbnormalDragSort) === null || _props$onAbnormalDrag === void 0 || _props$onAbnormalDrag.call(props, params2);
    }
  }
  function getTreeNode() {
    return store.value.getTreeNode(dataSource.value, rowDataKeys.value);
  }
  function getTreeExpandedRow() {
    var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "data";
    return store.value.getTreeExpandedRow(dataSource.value, rowDataKeys.value, type);
  }
  return {
    store: store,
    rowDataKeys: rowDataKeys,
    dataSource: dataSource,
    swapData: swapData,
    setData: setData,
    getData: getData,
    remove: remove,
    removeChildren: removeChildren,
    appendTo: appendTo,
    insertAfter: insertAfter,
    insertBefore: insertBefore,
    formatTreeColumn: formatTreeColumn,
    toggleExpandData: toggleExpandData,
    expandAll: expandAll,
    foldAll: foldAll,
    getTreeNode: getTreeNode,
    resetData: resetData,
    getTreeExpandedRow: getTreeExpandedRow,
    onExpandFoldIconClick: onExpandFoldIconClick
  };
}

export { useTreeData as default };
//# sourceMappingURL=useTreeData.mjs.map
