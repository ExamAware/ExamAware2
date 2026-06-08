/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var Vue = require('vue');
var _toConsumableArray = require('@babel/runtime/helpers/toConsumableArray');
var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
var tdesignIconsVueNext = require('tdesign-icons-vue-next');
var table_hooks_useClassName = require('./useClassName.js');
require('@babel/runtime/helpers/typeof');
require('../../_chunks/dep-953a77eb.js');
var index = require('../../_chunks/dep-47c460dd.js');
var configProvider_hooks_useConfig = require('../../config-provider/hooks/useConfig.js');
var index$2 = require('../../_chunks/dep-f20044b8.js');
var index$1 = require('../../_chunks/dep-31c76dc6.js');
require('../../_chunks/dep-cc66acf1.js');
var get = require('../../_chunks/dep-cd8cfdc0.js');
require('../../_chunks/dep-ecaaae91.js');
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
require('../../_chunks/dep-06276759.js');
require('../../_chunks/dep-4fa46641.js');
require('../../_chunks/dep-422dd97f.js');
require('../../_chunks/dep-71fa6bfc.js');
require('../../_chunks/dep-80a478d7.js');
require('../../_chunks/dep-427dabac.js');
require('../../_chunks/dep-72c4cc44.js');
require('../../_chunks/dep-ee355a9a.js');
require('../../_chunks/dep-23f77e26.js');
require('../../_chunks/dep-ac11336c.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);
var _toConsumableArray__default = /*#__PURE__*/_interopDefaultLegacy(_toConsumableArray);
var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);

function useRowExpand(props, context) {
  var _toRefs = Vue.toRefs(props),
    expandedRowKeys = _toRefs.expandedRowKeys;
  var renderTNode = index.useTNodeJSX();
  var _useConfig = configProvider_hooks_useConfig.useConfig("table", props.locale),
    t = _useConfig.t,
    globalConfig = _useConfig.globalConfig;
  var _useGlobalIcon = index$1.useGlobalIcon({
      ChevronRightCircleIcon: tdesignIconsVueNext.ChevronRightCircleIcon
    }),
    ChevronRightCircleIcon = _useGlobalIcon.ChevronRightCircleIcon;
  var _useClassName = table_hooks_useClassName["default"](),
    tableExpandClasses = _useClassName.tableExpandClasses,
    positiveRotate90 = _useClassName.positiveRotate90,
    tableFullRowClasses = _useClassName.tableFullRowClasses;
  var _useDefaultValue = index$2.useDefaultValue(expandedRowKeys, props.defaultExpandedRowKeys || [], props.onExpandChange, "expandedRowKeys"),
    _useDefaultValue2 = _slicedToArray__default["default"](_useDefaultValue, 2),
    tExpandedRowKeys = _useDefaultValue2[0],
    setTExpandedRowKeys = _useDefaultValue2[1];
  var showExpandedRow = Vue.computed(function () {
    return Boolean(props.expandedRow || context.slots.expandedRow || context.slots["expanded-row"]);
  });
  var showExpandIconColumn = Vue.computed(function () {
    return props.expandIcon !== false && showExpandedRow.value;
  });
  var isFirstColumnFixed = Vue.computed(function () {
    var _props$columns;
    return ((_props$columns = props.columns) === null || _props$columns === void 0 || (_props$columns = _props$columns[0]) === null || _props$columns === void 0 ? void 0 : _props$columns.fixed) === "left";
  });
  var getExpandedRowClass = function getExpandedRowClass(params) {
    var _tExpandedRowKeys$val;
    if (!showExpandedRow.value) return null;
    var row = params.row,
      rowKey = params.rowKey;
    var currentRowKey = get.get(row, rowKey || "id");
    return tableExpandClasses[(_tExpandedRowKeys$val = tExpandedRowKeys.value) !== null && _tExpandedRowKeys$val !== void 0 && _tExpandedRowKeys$val.includes(currentRowKey) ? "rowExpanded" : "rowFolded"];
  };
  var onToggleExpand = function onToggleExpand(e, row) {
    props.expandOnRowClick && e.stopPropagation();
    var currentId = get.get(row, props.rowKey || "id");
    var index = tExpandedRowKeys.value.indexOf(currentId);
    var newKeys = _toConsumableArray__default["default"](tExpandedRowKeys.value);
    index !== -1 ? newKeys.splice(index, 1) : newKeys.push(currentId);
    setTExpandedRowKeys(newKeys, {
      expandedRowData: props.data.filter(function (t2) {
        return newKeys.includes(get.get(t2, props.rowKey || "id"));
      }),
      currentRowData: row
    });
  };
  var renderExpandIcon = function renderExpandIcon(_, p) {
    var row = p.row,
      rowIndex = p.rowIndex;
    var currentId = get.get(row, props.rowKey || "id");
    var expanded = tExpandedRowKeys.value.includes(currentId);
    var icon = renderTNode("expandIcon", {
      defaultNode: t(globalConfig.value.expandIcon) || Vue.createVNode(ChevronRightCircleIcon, null, null),
      params: {
        row: row,
        index: rowIndex
      }
    });
    if (!icon) return null;
    var classes = [tableExpandClasses.iconBox, tableExpandClasses[expanded ? "expanded" : "collapsed"], _defineProperty__default["default"]({}, positiveRotate90, expanded)];
    return Vue.createVNode("span", {
      "class": classes,
      "onClick": function onClick(e) {
        return onToggleExpand(e, row);
      }
    }, [icon]);
  };
  var getExpandColumn = function getExpandColumn() {
    var expandCol = {
      colKey: "__EXPAND_ROW_ICON_COLUMN__",
      width: 46,
      className: tableExpandClasses.iconCell,
      fixed: isFirstColumnFixed.value ? "left" : void 0,
      cell: renderExpandIcon,
      stopPropagation: true
    };
    return expandCol;
  };
  var renderExpandedRow = function renderExpandedRow(p) {
    var rowId = get.get(p.row, props.rowKey || "id");
    if (!tExpandedRowKeys.value || !tExpandedRowKeys.value.includes(rowId)) return null;
    var isFixedLeft = p.isWidthOverflow && props.columns.find(function (item) {
      return item.fixed === "left";
    });
    return Vue.createVNode("tr", {
      "key": "expand_".concat(rowId),
      "class": [tableExpandClasses.row, _defineProperty__default["default"]({}, tableFullRowClasses.base, isFixedLeft)]
    }, [Vue.createVNode("td", {
      "colspan": p.columns.length
    }, [Vue.createVNode("div", {
      "class": [tableExpandClasses.rowInner, _defineProperty__default["default"]({}, tableFullRowClasses.innerFullRow, isFixedLeft)],
      "style": isFixedLeft ? {
        width: "".concat(p.tableWidth, "px")
      } : {}
    }, [Vue.createVNode("div", {
      "class": tableFullRowClasses.innerFullElement
    }, [renderTNode("expandedRow", {
      params: p
    })])])])]);
  };
  var onInnerExpandRowClick = function onInnerExpandRowClick(p) {
    onToggleExpand(p.e, p.row);
  };
  return {
    showExpandedRow: showExpandedRow,
    showExpandIconColumn: showExpandIconColumn,
    getExpandColumn: getExpandColumn,
    renderExpandedRow: renderExpandedRow,
    onInnerExpandRowClick: onInnerExpandRowClick,
    getExpandedRowClass: getExpandedRowClass
  };
}

exports["default"] = useRowExpand;
//# sourceMappingURL=useRowExpand.js.map
