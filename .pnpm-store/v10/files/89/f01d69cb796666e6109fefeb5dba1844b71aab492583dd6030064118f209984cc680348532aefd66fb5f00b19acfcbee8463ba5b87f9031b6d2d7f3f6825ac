/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, toRefs, computed, createVNode, mergeProps } from 'vue';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _toConsumableArray from '@babel/runtime/helpers/toConsumableArray';
import { pick, get, camelCase } from 'lodash-es';
import TrElement, { ROW_LISTENERS, TABLE_PROPS } from './tr.js';
import '@babel/runtime/helpers/typeof';
import '../../_chunks/dep-fe23be6e.js';
import { u as useTNodeJSX } from '../../_chunks/dep-2accc95a.js';
import { useConfig } from '../../config-provider/hooks/useConfig.js';
import '@babel/runtime/helpers/slicedToArray';
import '../../_chunks/dep-880d05b9.js';
import useClassName from '../hooks/useClassName.js';
import baseTableProps from '../base-table-props.js';
import useRowspanAndColspan from '../hooks/useRowspanAndColspan.js';
import '../utils/index.js';
import '../hooks/useFixed.js';
import '../../_chunks/dep-8295e674.js';
import '../../_chunks/dep-167f0981.js';
import '../../_chunks/dep-80a99546.js';
import '@babel/runtime/helpers/objectWithoutProperties';
import '../../_chunks/dep-16bcfabc.js';
import '../../_chunks/dep-81b01cae.js';
import './ellipsis.js';
import '../../tooltip/index.js';
import '../../tooltip/tooltip.js';
import '../../tooltip/props.js';
import '../../popup/props.js';
import '../../popup/index.js';
import '../../popup/popup.js';
import '@popperjs/core';
import '../../_chunks/dep-4f8b6591.js';
import '../../_chunks/dep-9e6d8a78.js';
import '../../_chunks/dep-2ea19dca.js';
import '../../_chunks/dep-51e5a827.js';
import '../../popup/container.js';
import '../../_chunks/dep-80a77612.js';
import '../../_chunks/dep-fb805f69.js';
import '../../config-provider/utils/context.js';
import '../../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '../../_chunks/dep-664b8b22.js';
import '../../tooltip/utils/index.js';
import '../hooks/useLazyLoad.js';
import '../../_chunks/dep-6264b0a7.js';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var ROW_AND_TD_LISTENERS = [].concat(_toConsumableArray(ROW_LISTENERS), ["cell-click"]);
var extendTableProps = ["bordered", "rowKey", "rowClassName", "rowAttributes", "loading", "empty", "fixedRows", "firstFullRow", "lastFullRow", "rowspanAndColspan", "scroll", "cellEmptyContent", "pagination", "attach", "onCellClick", "onPageChange", "onRowClick", "onRowDblclick", "onRowMouseover", "onRowMousedown", "onRowMouseenter", "onRowMouseleave", "onRowMouseup", "onScroll", "onScrollX", "onScrollY"];
var TBody = defineComponent({
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
  }, pick(baseTableProps, extendTableProps)),
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var renderTNode = useTNodeJSX();
    var _toRefs = toRefs(props),
      data = _toRefs.data,
      columns = _toRefs.columns,
      rowKey = _toRefs.rowKey,
      rowspanAndColspan = _toRefs.rowspanAndColspan;
    var _useConfig = useConfig("table", props.locale),
      t = _useConfig.t,
      globalConfig = _useConfig.globalConfig;
    var _useClassName = useClassName(),
      tableFullRowClasses = _useClassName.tableFullRowClasses,
      tableBaseClass = _useClassName.tableBaseClass;
    var _useRowspanAndColspan = useRowspanAndColspan(data, columns, rowKey, rowspanAndColspan),
      skipSpansMap = _useRowspanAndColspan.skipSpansMap;
    var tbodyClasses = computed(function () {
      return [tableBaseClass.body];
    });
    return function () {
      var _data$value, _data$value2, _props$virtualConfig, _props$virtualConfig2;
      var renderEmpty = function renderEmpty(columns2) {
        var tableWidth = props.bordered ? props.tableWidth - 2 : props.tableWidth;
        return createVNode("tr", {
          "class": [tableBaseClass.emptyRow, _defineProperty({}, tableFullRowClasses.base, props.isWidthOverflow)]
        }, [createVNode("td", {
          "colspan": columns2.length
        }, [createVNode("div", {
          "class": [tableBaseClass.empty, _defineProperty({}, tableFullRowClasses.innerFullRow, props.isWidthOverflow)],
          "style": props.isWidthOverflow ? {
            width: "".concat(tableWidth, "px")
          } : {}
        }, [renderTNode("empty") || t(globalConfig.value.empty)])])]);
      };
      var getFullRow = function getFullRow(columnLength2, type) {
        var tType = camelCase(type);
        var fullRowNode = renderTNode(tType);
        if (["", null, void 0, false].includes(fullRowNode)) return null;
        var isFixedToLeft = props.isWidthOverflow && columns.value.find(function (col) {
          return col.fixed === "left";
        });
        var classes = [tableFullRowClasses.base, tableFullRowClasses[tType]];
        var tableWidth = props.bordered ? props.tableWidth - 2 : props.tableWidth;
        return createVNode("tr", {
          "class": classes,
          "key": "key-full-row-".concat(type)
        }, [createVNode("td", {
          "colspan": columnLength2
        }, [createVNode("div", {
          "class": _defineProperty({}, tableFullRowClasses.innerFullRow, isFixedToLeft),
          "style": isFixedToLeft ? {
            width: "".concat(tableWidth, "px")
          } : {}
        }, [createVNode("div", {
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
        var rowValue = get(row, rowKey2);
        var trProps = _objectSpread(_objectSpread({}, pick(props, TABLE_PROPS)), {}, {
          rowKey: rowKey2,
          row: row,
          columns: columns.value,
          rowIndex: row.VIRTUAL_SCROLL_INDEX || rowIndex,
          dataLength: dataLength,
          skipSpansMap: skipSpansMap.value,
          virtualConfig: props.virtualConfig,
          active: (_props$activeRow = props.activeRow) === null || _props$activeRow === void 0 ? void 0 : _props$activeRow.includes(rowValue),
          isHover: props.hoverRow === rowValue
        }, pick(props, properties));
        if (props.onCellClick) {
          trProps.onCellClick = props.onCellClick;
        }
        var trNode = createVNode(TrElement, mergeProps({
          "key": get(row, rowKey2 || "id") || rowIndex
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
      return createVNode("tbody", {
        "class": tbodyClasses.value,
        "style": _objectSpread({}, posStyle)
      }, [isEmpty ? renderEmpty(columns.value) : list]);
    };
  }
});

export { ROW_AND_TD_LISTENERS, TBody as default, extendTableProps };
//# sourceMappingURL=tbody.js.map
