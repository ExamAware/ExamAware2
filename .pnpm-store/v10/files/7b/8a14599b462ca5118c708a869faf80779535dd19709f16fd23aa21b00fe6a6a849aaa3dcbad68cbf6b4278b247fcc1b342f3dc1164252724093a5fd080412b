/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _toConsumableArray = require('@babel/runtime/helpers/toConsumableArray');
var Vue = require('vue');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var tdesignIconsVueNext = require('tdesign-icons-vue-next');
var table_hooks_useTreeDataExpand = require('../../_chunks/dep-2bbf5139.js');
var table_hooks_useClassName = require('./useClassName.js');
var table_components_tr = require('../components/tr.js');
require('@babel/runtime/helpers/typeof');
require('../../_chunks/dep-953a77eb.js');
var index$1 = require('../../_chunks/dep-47c460dd.js');
var configProvider_hooks_useConfig = require('../../config-provider/hooks/useConfig.js');
var index = require('../../_chunks/dep-31c76dc6.js');
require('@babel/runtime/helpers/slicedToArray');
require('../../_chunks/dep-cc66acf1.js');
var get = require('../../_chunks/dep-cd8cfdc0.js');
require('../../_chunks/dep-f20044b8.js');
require('../../_chunks/dep-23f77e26.js');
require('../../_chunks/dep-ee355a9a.js');
require('../../_chunks/dep-71fa6bfc.js');
require('../../_chunks/dep-b3b464e8.js');
require('../../_chunks/dep-87589faa.js');
require('../../_chunks/dep-80a478d7.js');
require('../../_chunks/dep-05f89f0d.js');
require('@babel/runtime/helpers/classCallCheck');
require('@babel/runtime/helpers/createClass');
require('../../_chunks/dep-7f185af2.js');
require('../../_chunks/dep-48f60c78.js');
require('../../_chunks/dep-0813861e.js');
require('../../_chunks/dep-733b2b51.js');
require('../../_chunks/dep-fd5a369e.js');
require('../../_chunks/dep-e37d2fc0.js');
require('../../_chunks/dep-04599720.js');
require('../../_chunks/dep-0ff616fe.js');
require('../../_chunks/dep-5f52cd42.js');
require('../../_chunks/dep-f57bcb19.js');
require('../../_chunks/dep-ac11336c.js');
require('../../_chunks/dep-a8a3d718.js');
require('../../_chunks/dep-32412d92.js');
require('../../_chunks/dep-ecaaae91.js');
require('../../_chunks/dep-8abdfb41.js');
require('../../_chunks/dep-5d7e2375.js');
require('../../_chunks/dep-94a7dc2d.js');
require('dayjs');
require('../../_chunks/dep-92e23f17.js');
require('../../_chunks/dep-dc4bbc14.js');
require('../../_chunks/dep-e27ea667.js');
require('../../_chunks/dep-165ca38a.js');
require('../../_chunks/dep-54e566d9.js');
require('../../_chunks/dep-591a72de.js');
require('../../_chunks/dep-a55e8a08.js');
require('../../_chunks/dep-8adeee89.js');
require('../../_chunks/dep-4d2ef282.js');
require('../../_chunks/dep-929933ce.js');
require('../../_chunks/dep-6b1f0ef8.js');
require('../utils/index.js');
require('./useFixed.js');
require('../../_chunks/dep-7067edce.js');
require('../../_chunks/dep-55c70201.js');
require('@babel/runtime/helpers/objectWithoutProperties');
require('../../_chunks/dep-4ccaead1.js');
require('../../_chunks/dep-990979bb.js');
require('../../_chunks/dep-06276759.js');
require('../../_chunks/dep-01738d56.js');
require('../../_chunks/dep-8b33876c.js');
require('../../_chunks/dep-445924d5.js');
require('../../_chunks/dep-dcb859c6.js');
require('../../_chunks/dep-0e08f598.js');
require('../../_chunks/dep-912c9727.js');
require('../../_chunks/dep-11b67e11.js');
require('../../_chunks/dep-b5e1f81f.js');
require('../../_chunks/dep-9ce6873a.js');
require('../../_chunks/dep-441a3b7b.js');
require('../../_chunks/dep-e86abdd2.js');
require('../components/ellipsis.js');
require('../../tooltip/index.js');
require('../../tooltip/tooltip.js');
require('../../tooltip/props.js');
require('../../popup/props.js');
require('../../popup/index.js');
require('../../popup/popup.js');
require('@popperjs/core');
require('../../_chunks/dep-8382953f.js');
require('../../_chunks/dep-c3dee00a.js');
require('../../_chunks/dep-e8ff2c13.js');
require('../../popup/container.js');
require('../../_chunks/dep-b6058ff9.js');
require('../../_chunks/dep-39403bd1.js');
require('../../_chunks/dep-3a7785db.js');
require('../../_chunks/dep-4fa46641.js');
require('../../_chunks/dep-422dd97f.js');
require('../../_chunks/dep-427dabac.js');
require('../../_chunks/dep-72c4cc44.js');
require('../../_chunks/dep-d62a674d.js');
require('../../tooltip/utils/index.js');
require('../../_chunks/dep-ace0b57c.js');
require('../base-table-props.js');
require('./useLazyLoad.js');
require('../../_chunks/dep-fb83a452.js');
require('./useRowspanAndColspan.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _toConsumableArray__default = /*#__PURE__*/_interopDefaultLegacy(_toConsumableArray);
var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function useTreeData(props, context) {
  var _toRefs = Vue.toRefs(props),
    data = _toRefs.data,
    columns = _toRefs.columns;
  var _useConfig = configProvider_hooks_useConfig.useConfig("table", props.locale),
    t = _useConfig.t,
    globalConfig = _useConfig.globalConfig;
  var _useGlobalIcon = index.useGlobalIcon({
      AddRectangleIcon: tdesignIconsVueNext.AddRectangleIcon,
      MinusRectangleIcon: tdesignIconsVueNext.MinusRectangleIcon
    }),
    AddRectangleIcon = _useGlobalIcon.AddRectangleIcon,
    MinusRectangleIcon = _useGlobalIcon.MinusRectangleIcon;
  var store = Vue.ref(new table_hooks_useTreeDataExpand.TableTreeStore());
  var treeNodeCol = Vue.shallowRef();
  var dataSource = Vue.ref([]);
  var _useClassName = table_hooks_useClassName["default"](),
    tableTreeClasses = _useClassName.tableTreeClasses;
  var renderTNode = index$1.useTNodeDefault();
  var rowDataKeys = Vue.computed(function () {
    var _props$tree;
    return {
      rowKey: props.rowKey || "id",
      childrenKey: ((_props$tree = props.tree) === null || _props$tree === void 0 ? void 0 : _props$tree.childrenKey) || "children"
    };
  });
  var _useTreeDataExpand = table_hooks_useTreeDataExpand.useTreeDataExpand(props, {
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
  var checkedColumn = Vue.computed(function () {
    return columns.value.find(function (col) {
      return col.colKey === "row-select";
    });
  });
  Vue.watch(checkedColumn, function (column) {
    if (!store.value) return;
    store.value.updateDisabledState(dataSource.value, column, rowDataKeys.value);
  });
  var foldIcon = function foldIcon(context2) {
    var params = _objectSpread(_objectSpread({}, context2), {}, {
      type: "fold"
    });
    var defaultFoldIcon = t(globalConfig.value.treeExpandAndFoldIcon, Vue.h, params) || Vue.createVNode(MinusRectangleIcon, null, null);
    return renderTNode("treeExpandAndFoldIcon", {
      defaultNode: defaultFoldIcon,
      params: params
    });
  };
  var expandIcon = function expandIcon(context2) {
    var params = _objectSpread(_objectSpread({}, context2), {}, {
      type: "expand"
    });
    var defaultExpandIcon = t(globalConfig.value.treeExpandAndFoldIcon, Vue.h, params) || Vue.createVNode(AddRectangleIcon, null, null);
    return renderTNode("treeExpandAndFoldIcon", {
      defaultNode: defaultExpandIcon,
      params: params
    });
  };
  Vue.watch([data], function () {
    if (props.tree) {
      resetData(data.value);
    } else {
      dataSource.value = data.value;
    }
  }, {
    immediate: true
  });
  Vue.onUnmounted(function () {
    var _store$value$treeData;
    if (!props.tree) return;
    (_store$value$treeData = store.value.treeDataMap) === null || _store$value$treeData === void 0 || _store$value$treeData.clear();
    store.value = null;
  });
  Vue.watch(function () {
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
      dataSource.value = _toConsumableArray__default["default"](data2);
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
    dataSource.value = _toConsumableArray__default["default"](store.value.toggleExpandData(currentData, dataSource.value, rowDataKeys.value));
    var rowValue = get.get(p.row, rowDataKeys.value.rowKey);
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
      var cellInfo = table_components_tr.renderCell(_objectSpread(_objectSpread({}, p), {}, {
        col: _objectSpread({}, treeNodeCol.value)
      }), context.slots, {
        cellEmptyContent: props.cellEmptyContent
      });
      var currentState = store.value.treeDataMap.get(get.get(p.row, rowDataKeys.value.rowKey));
      var colStyle = getTreeNodeStyle(currentState === null || currentState === void 0 ? void 0 : currentState.level);
      var classes = _defineProperty__default["default"]({}, tableTreeClasses.inlineCol, !!col.ellipsis);
      var childrenNodes = get.get(p.row, rowDataKeys.value.childrenKey);
      if (childrenNodes && childrenNodes instanceof Array || childrenNodes === true) {
        var _store$value$treeData2;
        var iconNode = (_store$value$treeData2 = store.value.treeDataMap.get(get.get(p.row, rowDataKeys.value.rowKey))) !== null && _store$value$treeData2 !== void 0 && _store$value$treeData2.expanded ? foldIcon(p) : expandIcon(p);
        return Vue.createVNode("div", {
          "class": [tableTreeClasses.col, classes],
          "style": colStyle
        }, [!!(childrenNodes.length || childrenNodes === true) && Vue.createVNode("span", {
          "class": tableTreeClasses.icon,
          "onClick": function onClick(e) {
            onExpandFoldIconClick(p, "expand-fold-icon");
            e.stopPropagation();
          }
        }, [iconNode]), cellInfo]);
      }
      return Vue.createVNode("div", {
        "style": colStyle,
        "class": [classes, tableTreeClasses.leafNode]
      }, [Vue.createVNode("span", {
        "class": tableTreeClasses.icon
      }, null), cellInfo]);
    };
    if (newCol.ellipsis === true) {
      newCol.ellipsis = function (h2, p) {
        return table_components_tr.renderCell(_objectSpread(_objectSpread({}, p), {}, {
          col: _objectSpread({}, treeNodeCol.value)
        }), context.slots);
      };
    }
    return newCol;
  }
  function setData(key, newRowData) {
    var rowIndex = store.value.updateData(key, newRowData, dataSource.value, rowDataKeys.value);
    var newData = _toConsumableArray__default["default"](dataSource.value);
    newData[rowIndex] = newRowData;
    dataSource.value = newData;
  }
  function getData(key) {
    return store.value.getData(key);
  }
  function remove(key) {
    dataSource.value = _toConsumableArray__default["default"](store.value.remove(key, dataSource.value, rowDataKeys.value));
  }
  function removeChildren(key) {
    dataSource.value = _toConsumableArray__default["default"](store.value.removeChildren(key, dataSource.value, rowDataKeys.value));
  }
  function appendTo() {
    var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var newData = arguments.length > 1 ? arguments[1] : undefined;
    if (!key) {
      dataSource.value = store.value.appendToRoot(newData, dataSource.value, rowDataKeys.value);
      return;
    }
    dataSource.value = _toConsumableArray__default["default"](store.value.appendTo(key, newData, dataSource.value, rowDataKeys.value));
  }
  function insertAfter(rowValue, newData) {
    dataSource.value = _toConsumableArray__default["default"](store.value.insertAfter(rowValue, newData, dataSource.value, rowDataKeys.value));
  }
  function insertBefore(rowValue, newData) {
    dataSource.value = _toConsumableArray__default["default"](store.value.insertBefore(rowValue, newData, dataSource.value, rowDataKeys.value));
  }
  function swapData(params) {
    var r = store.value.swapData(dataSource.value, params, rowDataKeys.value);
    if (r.result) {
      dataSource.value = _toConsumableArray__default["default"](r.dataSource);
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

exports["default"] = useTreeData;
//# sourceMappingURL=useTreeData.js.map
