/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var _toConsumableArray = require('@babel/runtime/helpers/toConsumableArray');
var table_components_tr = require('./tr.js');
require('@babel/runtime/helpers/typeof');
require('../../_chunks/dep-953a77eb.js');
var index = require('../../_chunks/dep-47c460dd.js');
var configProvider_hooks_useConfig = require('../../config-provider/hooks/useConfig.js');
require('@babel/runtime/helpers/slicedToArray');
require('../../_chunks/dep-cc66acf1.js');
var table_hooks_useClassName = require('../hooks/useClassName.js');
var table_baseTableProps = require('../base-table-props.js');
var table_hooks_useRowspanAndColspan = require('../hooks/useRowspanAndColspan.js');
var pick = require('../../_chunks/dep-b5e1f81f.js');
var get = require('../../_chunks/dep-cd8cfdc0.js');
var camelCase = require('../../_chunks/dep-422dd97f.js');
require('../utils/index.js');
require('../../_chunks/dep-48f60c78.js');
require('../../_chunks/dep-b3b464e8.js');
require('../../_chunks/dep-0813861e.js');
require('../hooks/useFixed.js');
require('../../_chunks/dep-733b2b51.js');
require('../../_chunks/dep-7067edce.js');
require('../../_chunks/dep-55c70201.js');
require('@babel/runtime/helpers/objectWithoutProperties');
require('../../_chunks/dep-fd5a369e.js');
require('../../_chunks/dep-4ccaead1.js');
require('../../_chunks/dep-a55e8a08.js');
require('../../_chunks/dep-87589faa.js');
require('../../_chunks/dep-05f89f0d.js');
require('../../_chunks/dep-990979bb.js');
require('../../_chunks/dep-06276759.js');
require('../../_chunks/dep-6b1f0ef8.js');
require('../../_chunks/dep-54e566d9.js');
require('../../_chunks/dep-0ff616fe.js');
require('../../_chunks/dep-5f52cd42.js');
require('../../_chunks/dep-f57bcb19.js');
require('../../_chunks/dep-165ca38a.js');
require('../../_chunks/dep-01738d56.js');
require('../../_chunks/dep-8b33876c.js');
require('../../_chunks/dep-a8a3d718.js');
require('../../_chunks/dep-445924d5.js');
require('../../_chunks/dep-71fa6bfc.js');
require('../../_chunks/dep-80a478d7.js');
require('../../_chunks/dep-dc4bbc14.js');
require('../../_chunks/dep-dcb859c6.js');
require('../../_chunks/dep-0e08f598.js');
require('../../_chunks/dep-929933ce.js');
require('../../_chunks/dep-912c9727.js');
require('../../_chunks/dep-11b67e11.js');
require('../../_chunks/dep-441a3b7b.js');
require('../../_chunks/dep-e86abdd2.js');
require('../../_chunks/dep-8abdfb41.js');
require('../../_chunks/dep-ac11336c.js');
require('../../_chunks/dep-04599720.js');
require('../../_chunks/dep-32412d92.js');
require('../../_chunks/dep-9ce6873a.js');
require('./ellipsis.js');
require('../../tooltip/index.js');
require('../../tooltip/tooltip.js');
require('../../tooltip/props.js');
require('../../popup/props.js');
require('../../popup/index.js');
require('../../popup/popup.js');
require('@popperjs/core');
require('../../_chunks/dep-8382953f.js');
require('../../_chunks/dep-ecaaae91.js');
require('../../_chunks/dep-c3dee00a.js');
require('../../_chunks/dep-e8ff2c13.js');
require('../../_chunks/dep-23f77e26.js');
require('../../_chunks/dep-ee355a9a.js');
require('../../popup/container.js');
require('../../_chunks/dep-b6058ff9.js');
require('../../_chunks/dep-39403bd1.js');
require('../../_chunks/dep-3a7785db.js');
require('../../_chunks/dep-4fa46641.js');
require('../../_chunks/dep-427dabac.js');
require('../../_chunks/dep-72c4cc44.js');
require('../../_chunks/dep-5d7e2375.js');
require('../../_chunks/dep-94a7dc2d.js');
require('dayjs');
require('../../_chunks/dep-92e23f17.js');
require('../../_chunks/dep-e27ea667.js');
require('../../_chunks/dep-591a72de.js');
require('../../_chunks/dep-8adeee89.js');
require('../../_chunks/dep-4d2ef282.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');
require('../../_chunks/dep-d62a674d.js');
require('../../tooltip/utils/index.js');
require('../../_chunks/dep-ace0b57c.js');
require('../hooks/useLazyLoad.js');
require('../../_chunks/dep-fb83a452.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);
var _toConsumableArray__default = /*#__PURE__*/_interopDefaultLegacy(_toConsumableArray);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var ROW_AND_TD_LISTENERS = [].concat(_toConsumableArray__default["default"](table_components_tr.ROW_LISTENERS), ["cell-click"]);
var extendTableProps = ["bordered", "rowKey", "rowClassName", "rowAttributes", "loading", "empty", "fixedRows", "firstFullRow", "lastFullRow", "rowspanAndColspan", "scroll", "cellEmptyContent", "pagination", "attach", "onCellClick", "onPageChange", "onRowClick", "onRowDblclick", "onRowMouseover", "onRowMousedown", "onRowMouseenter", "onRowMouseleave", "onRowMouseup", "onScroll", "onScrollX", "onScrollY"];
var TBody = Vue.defineComponent({
  name: "TBody",
  props: _objectSpread({
    classPrefix: String,
    data: Array,
    columns: Array,
    ellipsisOverlayClassName: String,
    rowAndColFixedPosition: Map,
    showColumnShadow: Object,
    tableElm: {},
    tableWidth: Number,
    isWidthOverflow: Boolean,
    virtualConfig: Object,
    tableContentElm: {},
    handleRowMounted: Function,
    renderExpandedRow: Function,
    firstFullRow: [String, Function],
    lastFullRow: [String, Function],
    activeRow: [Array],
    hoverRow: [String, Number]
  }, pick.pick(table_baseTableProps["default"], extendTableProps)),
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var renderTNode = index.useTNodeJSX();
    var _toRefs = Vue.toRefs(props),
      data = _toRefs.data,
      columns = _toRefs.columns,
      rowKey = _toRefs.rowKey,
      rowspanAndColspan = _toRefs.rowspanAndColspan;
    var _useConfig = configProvider_hooks_useConfig.useConfig("table", props.locale),
      t = _useConfig.t,
      globalConfig = _useConfig.globalConfig;
    var _useClassName = table_hooks_useClassName["default"](),
      tableFullRowClasses = _useClassName.tableFullRowClasses,
      tableBaseClass = _useClassName.tableBaseClass;
    var _useRowspanAndColspan = table_hooks_useRowspanAndColspan["default"](data, columns, rowKey, rowspanAndColspan),
      skipSpansMap = _useRowspanAndColspan.skipSpansMap;
    var tbodyClasses = Vue.computed(function () {
      return [tableBaseClass.body];
    });
    return function () {
      var _data$value, _data$value2, _props$virtualConfig, _props$virtualConfig2;
      var renderEmpty = function renderEmpty(columns2) {
        var tableWidth = props.bordered ? props.tableWidth - 2 : props.tableWidth;
        return Vue.createVNode("tr", {
          "class": [tableBaseClass.emptyRow, _defineProperty__default["default"]({}, tableFullRowClasses.base, props.isWidthOverflow)]
        }, [Vue.createVNode("td", {
          "colspan": columns2.length
        }, [Vue.createVNode("div", {
          "class": [tableBaseClass.empty, _defineProperty__default["default"]({}, tableFullRowClasses.innerFullRow, props.isWidthOverflow)],
          "style": props.isWidthOverflow ? {
            width: "".concat(tableWidth, "px")
          } : {}
        }, [renderTNode("empty") || t(globalConfig.value.empty)])])]);
      };
      var getFullRow = function getFullRow(columnLength2, type) {
        var tType = camelCase.camelCase(type);
        var fullRowNode = renderTNode(tType);
        if (["", null, void 0, false].includes(fullRowNode)) return null;
        var isFixedToLeft = props.isWidthOverflow && columns.value.find(function (col) {
          return col.fixed === "left";
        });
        var classes = [tableFullRowClasses.base, tableFullRowClasses[tType]];
        var tableWidth = props.bordered ? props.tableWidth - 2 : props.tableWidth;
        return Vue.createVNode("tr", {
          "class": classes,
          "key": "key-full-row-".concat(type)
        }, [Vue.createVNode("td", {
          "colspan": columnLength2
        }, [Vue.createVNode("div", {
          "class": _defineProperty__default["default"]({}, tableFullRowClasses.innerFullRow, isFixedToLeft),
          "style": isFixedToLeft ? {
            width: "".concat(tableWidth, "px")
          } : {}
        }, [Vue.createVNode("div", {
          "class": tableFullRowClasses.innerFullElement
        }, [fullRowNode])])])]);
      };
      var columnLength = columns.value.length;
      var dataLength = (_data$value = data.value) === null || _data$value === void 0 ? void 0 : _data$value.length;
      var trNodeList = [];
      var properties = ["classPrefix", "ellipsisOverlayClassName", "rowAndColFixedPosition", "scroll", "tableElm", "tableContentElm", "pagination", "attach"];
      var renderData = props.virtualConfig.isVirtualScroll.value ? props.virtualConfig.visibleData.value : data.value;
      renderData === null || renderData === void 0 || renderData.forEach(function (row, rowIndex) {
        var _props$activeRow;
        var rowKey2 = props.rowKey || "id";
        var rowValue = get.get(row, rowKey2);
        var trProps = _objectSpread(_objectSpread({}, pick.pick(props, table_components_tr.TABLE_PROPS)), {}, {
          rowKey: rowKey2,
          row: row,
          columns: columns.value,
          rowIndex: row.VIRTUAL_SCROLL_INDEX || rowIndex,
          dataLength: dataLength,
          skipSpansMap: skipSpansMap.value,
          virtualConfig: props.virtualConfig,
          active: (_props$activeRow = props.activeRow) === null || _props$activeRow === void 0 ? void 0 : _props$activeRow.includes(rowValue),
          isHover: props.hoverRow === rowValue
        }, pick.pick(props, properties));
        if (props.onCellClick) {
          trProps.onCellClick = props.onCellClick;
        }
        var trNode = Vue.createVNode(table_components_tr["default"], Vue.mergeProps({
          "key": get.get(row, rowKey2 || "id") || rowIndex
        }, trProps, {
          "onRowMounted": props.handleRowMounted
        }), slots);
        trNodeList.push(trNode);
        if (props.renderExpandedRow) {
          var p = {
            row: row,
            index: rowIndex,
            columns: columns.value,
            tableWidth: props.tableWidth,
            isWidthOverflow: props.isWidthOverflow
          };
          var expandedContent = props.renderExpandedRow(p);
          expandedContent && trNodeList.push(expandedContent);
        }
      });
      var list = [getFullRow(columnLength, "first-full-row")].concat(trNodeList, [getFullRow(columnLength, "last-full-row")]);
      var isEmpty = !((_data$value2 = data.value) !== null && _data$value2 !== void 0 && _data$value2.length) && !props.loading && !props.firstFullRow && !props.lastFullRow;
      var translate = "translateY(".concat((_props$virtualConfig = props.virtualConfig) === null || _props$virtualConfig === void 0 ? void 0 : _props$virtualConfig.translateY.value, "px)");
      var posStyle = (_props$virtualConfig2 = props.virtualConfig) !== null && _props$virtualConfig2 !== void 0 && _props$virtualConfig2.isVirtualScroll.value ? {
        transform: translate,
        "-ms-transform": translate,
        "-moz-transform": translate,
        "-webkit-transform": translate
      } : void 0;
      return Vue.createVNode("tbody", {
        "class": tbodyClasses.value,
        "style": _objectSpread({}, posStyle)
      }, [isEmpty ? renderEmpty(columns.value) : list]);
    };
  }
});

exports.ROW_AND_TD_LISTENERS = ROW_AND_TD_LISTENERS;
exports["default"] = TBody;
exports.extendTableProps = extendTableProps;
//# sourceMappingURL=tbody.js.map
