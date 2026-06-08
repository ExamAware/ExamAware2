/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { isVNode, h, defineComponent, toRefs, ref, computed, reactive, onMounted, nextTick, onUpdated, createVNode, mergeProps } from 'vue';
import { _ as _typeof } from '../../_chunks/dep-257428bc.mjs';
import { _ as _defineProperty } from '../../_chunks/dep-1dacc319.mjs';
import { isFunction, isString, get, pick, upperFirst } from 'lodash-es';
import { formatRowAttributes, formatRowClassNames, formatClassNames } from '../utils/index.mjs';
import { getRowFixedStyles, getColumnFixedStyles } from '../hooks/useFixed.mjs';
import useClassName from '../hooks/useClassName.mjs';
import TEllipsis from './ellipsis.mjs';
import baseTableProps from '../base-table-props.mjs';
import useLazyLoad from '../hooks/useLazyLoad.mjs';
import { getCellKey } from '../hooks/useRowspanAndColspan.mjs';
import '../../_chunks/dep-9003fde5.mjs';
import '../../_chunks/dep-9f459d8b.mjs';
import '../../_chunks/dep-6d2705e1.mjs';
import '../../_chunks/dep-97ecacde.mjs';
import '../../_chunks/dep-03148507.mjs';
import '../../_chunks/dep-0cde7579.mjs';
import '../../_chunks/dep-00b4e06a.mjs';
import '../../_chunks/dep-0dcc778a.mjs';
import '../../_chunks/dep-51a43106.mjs';
import '../../_chunks/dep-fe644854.mjs';
import '../../_chunks/dep-7673347f.mjs';
import '../../config-provider/hooks/useConfig.mjs';
import '../../config-provider/utils/context.mjs';
import '../../_chunks/dep-a4c09318.mjs';
import '../../_chunks/dep-ffb85102.mjs';
import '../../_chunks/dep-ad588525.mjs';
import '../../_chunks/dep-22ebd6af.mjs';
import '../../_chunks/dep-cdd448ec.mjs';
import '../../_chunks/dep-84fd47b3.mjs';
import '../../_chunks/dep-d36c4a3f.mjs';
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

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !isVNode(s);
}
var TABLE_PROPS = ["rowKey", "rowClassName", "columns", "fixedRows", "footData", "rowAttributes", "rowspanAndColspan", "scroll", "cellEmptyContent", "pagination", "attach", "onCellClick", "onRowClick", "onRowDblclick", "onRowMouseover", "onRowMousedown", "onRowMouseenter", "onRowMouseleave", "onRowMouseup"];
var ROW_LISTENERS = ["click", "dblclick", "mouseover", "mousedown", "mouseenter", "mouseleave", "mouseup"];
function renderCell(params, slots, extra) {
  var col = params.col,
    row = params.row,
    rowIndex = params.rowIndex;
  if (col.colKey === "serial-number") {
    var _ref = (extra === null || extra === void 0 ? void 0 : extra.pagination) || {},
      current = _ref.current,
      pageSize = _ref.pageSize,
      defaultCurrent = _ref.defaultCurrent,
      defaultPageSize = _ref.defaultPageSize;
    var tCurrent = current || defaultCurrent;
    var tPageSize = pageSize || defaultPageSize;
    if (tPageSize && tCurrent) {
      return tPageSize * (tCurrent - 1) + rowIndex + 1;
    }
    return rowIndex + 1;
  }
  if (isFunction(col.cell)) {
    return col.cell(h, params);
  }
  if (slots[col.colKey]) {
    return slots[col.colKey](params);
  }
  if (isString(col.cell) && slots[col.cell]) {
    return slots[col.cell](params);
  }
  if (isFunction(col.render)) {
    return col.render(h, _objectSpread(_objectSpread({}, params), {}, {
      type: "cell"
    }));
  }
  var r = get(row, col.colKey);
  if (![void 0, "", null].includes(r)) return r;
  if (extra !== null && extra !== void 0 && extra.cellEmptyContent) {
    return isFunction(extra.cellEmptyContent) ? extra.cellEmptyContent(h, params) : extra.cellEmptyContent;
  }
  if (slots.cellEmptyContent) return slots.cellEmptyContent(params);
  if (slots["cell-empty-content"]) return slots["cell-empty-content"](params);
  return r;
}
var TrElement = defineComponent({
  name: "TR",
  props: _objectSpread(_objectSpread({
    row: Object,
    rowIndex: Number,
    dataLength: Number,
    ellipsisOverlayClassName: String,
    classPrefix: String,
    rowAndColFixedPosition: Map,
    skipSpansMap: Map,
    virtualConfig: Object,
    active: Boolean,
    isHover: Boolean
  }, pick(baseTableProps, TABLE_PROPS)), {}, {
    tableElm: {},
    tableContentElm: {}
  }),
  emits: ["row-mounted"],
  setup: function setup(props, context) {
    var _toRefs = toRefs(props),
      tableContentElm = _toRefs.tableContentElm,
      active = _toRefs.active,
      isHover = _toRefs.isHover;
    var trRef = ref(null);
    var _useClassName = useClassName(),
      tdEllipsisClass = _useClassName.tdEllipsisClass,
      tableBaseClass = _useClassName.tableBaseClass,
      tableColFixedClasses = _useClassName.tableColFixedClasses,
      tableRowFixedClasses = _useClassName.tableRowFixedClasses,
      tdAlignClasses = _useClassName.tdAlignClasses,
      tableDraggableClasses = _useClassName.tableDraggableClasses;
    var trStyles = computed(function () {
      return getRowFixedStyles(get(props.row, props.rowKey || "id"), props.rowIndex, props.dataLength, props.fixedRows, props.rowAndColFixedPosition, tableRowFixedClasses, props.virtualConfig.isVirtualScroll.value ? props.virtualConfig.translateY.value : 0);
    });
    var trAttributes = computed(function () {
      return formatRowAttributes(props.rowAttributes, {
        row: props.row,
        rowIndex: props.rowIndex,
        type: "body"
      }) || {};
    });
    var classes = computed(function () {
      var _trStyles$value;
      var customClasses = formatRowClassNames(props.rowClassName, {
        row: props.row,
        rowKey: props.rowKey,
        rowIndex: props.rowIndex,
        type: "body"
      }, props.rowKey || "id");
      return [(_trStyles$value = trStyles.value) === null || _trStyles$value === void 0 ? void 0 : _trStyles$value.classes, customClasses, _defineProperty(_defineProperty({}, "".concat(props.classPrefix, "-table__row--active"), active.value), "".concat(props.classPrefix, "-table__row--hover"), isHover.value)].filter(function (v) {
        return v;
      });
    });
    var _useLazyLoad = useLazyLoad(tableContentElm, trRef, reactive(_objectSpread(_objectSpread({}, props.scroll), {}, {
        rowIndex: props.rowIndex
      }))),
      hasLazyLoadHolder = _useLazyLoad.hasLazyLoadHolder,
      tRowHeight = _useLazyLoad.tRowHeight;
    var getTrListeners = function getTrListeners(row, rowIndex) {
      var trListeners = {};
      ROW_LISTENERS.forEach(function (eventName) {
        trListeners["on".concat(upperFirst(eventName))] = function (e) {
          var _props;
          var p = {
            e: e,
            row: row,
            index: rowIndex
          };
          (_props = props["onRow".concat(upperFirst(eventName))]) === null || _props === void 0 || _props.call(props, p);
        };
      });
      return trListeners;
    };
    var notifyVirtualSizeUpdate = function notifyVirtualSizeUpdate() {
      var _props$virtualConfig;
      if ((_props$virtualConfig = props.virtualConfig) !== null && _props$virtualConfig !== void 0 && _props$virtualConfig.isVirtualScroll.value) {
        context.emit("row-mounted", {
          ref: trRef,
          data: props.row
        });
      }
    };
    onMounted(function () {
      nextTick(function () {
        notifyVirtualSizeUpdate();
      });
    });
    onUpdated(function () {
      nextTick(function () {
        notifyVirtualSizeUpdate();
      });
    });
    function renderEllipsisCell(cellParams, params) {
      var cellNode = params.cellNode;
      var col = cellParams.col,
        colIndex = cellParams.colIndex;
      var content;
      if (isFunction(col.ellipsis)) {
        content = col.ellipsis(h, cellParams);
      } else if (_typeof(col.ellipsis) === "object" && isFunction(col.ellipsis.content)) {
        content = col.ellipsis.content(h, cellParams);
      } else if (context.slots["ellipsis-".concat(col.colKey)]) {
        content = context.slots["ellipsis-".concat(col.colKey)](cellParams);
      } else if (context.slots.ellipsis) {
        content = context.slots.ellipsis(cellParams);
      }
      var tooltipProps = {};
      if (_typeof(col.ellipsis) === "object") {
        tooltipProps = "props" in col.ellipsis ? col.ellipsis.props : col.ellipsis || void 0;
      }
      var tableElement = props.tableElm;
      var placement = colIndex === 0 ? "top-left" : "top";
      placement = colIndex === props.columns.length - 1 ? "top-right" : placement;
      return createVNode(TEllipsis, {
        "placement": placement,
        "attach": tableElement ? function () {
          return tableElement;
        } : void 0,
        "tooltipContent": content && function () {
          return content;
        },
        "tooltipProps": tooltipProps,
        "overlayClassName": props.ellipsisOverlayClassName,
        "classPrefix": props.classPrefix
      }, _isSlot(cellNode) ? cellNode : {
        "default": function _default() {
          return [cellNode];
        }
      });
    }
    function renderTd(params, extra) {
      var col = params.col,
        colIndex = params.colIndex,
        rowIndex = params.rowIndex;
      var cellSpans = extra.cellSpans,
        dataLength = extra.dataLength,
        rowAndColFixedPosition = extra.rowAndColFixedPosition;
      var cellNode = renderCell(params, context.slots, {
        cellEmptyContent: extra.cellEmptyContent,
        pagination: props.pagination
      });
      var tdStyles = getColumnFixedStyles(col, colIndex, rowAndColFixedPosition, tableColFixedClasses);
      var customClasses = formatClassNames(col.className, _objectSpread(_objectSpread({}, params), {}, {
        type: "td"
      }));
      var classes2 = [tdStyles.classes, customClasses, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, tdEllipsisClass, col.ellipsis), tableBaseClass.tdLastRow, rowIndex + cellSpans.rowspan === dataLength), tableBaseClass.tdFirstCol, colIndex === 0 && props.rowspanAndColspan), tdAlignClasses[col.align], col.align && col.align !== "left"), tableDraggableClasses.handle, col.colKey === "drag")];
      var onClick = function onClick(e) {
        var _props$onCellClick;
        var p = _objectSpread(_objectSpread({}, params), {}, {
          e: e
        });
        if (col.stopPropagation) {
          e.stopPropagation();
        }
        (_props$onCellClick = props.onCellClick) === null || _props$onCellClick === void 0 || _props$onCellClick.call(props, p);
      };
      var normalAttrs = isFunction(col.attrs) ? col.attrs(_objectSpread(_objectSpread({}, params), {}, {
        type: "td"
      })) : col.attrs;
      var attrs = _objectSpread(_objectSpread({}, normalAttrs), cellSpans);
      return createVNode("td", mergeProps({
        "key": col.colKey || colIndex,
        "class": classes2,
        "style": tdStyles.style
      }, attrs, {
        "onClick": onClick
      }), [col.ellipsis ? renderEllipsisCell(params, {
        cellNode: cellNode
      }) : cellNode]);
    }
    return function () {
      var _trStyles$value2;
      var columns = props.columns,
        skipSpansMap = props.skipSpansMap,
        row = props.row,
        dataLength = props.dataLength,
        rowAndColFixedPosition = props.rowAndColFixedPosition;
      var columnVNodeList = columns === null || columns === void 0 ? void 0 : columns.map(function (col, colIndex) {
        var cellSpans = {};
        var params = {
          row: row,
          col: col,
          rowIndex: props.rowIndex,
          colIndex: colIndex
        };
        var spanState = null;
        if (props.skipSpansMap.size) {
          var _spanState, _spanState2;
          var cellKey = getCellKey(row, props.rowKey, col.colKey, colIndex);
          spanState = skipSpansMap.get(cellKey) || {};
          ((_spanState = spanState) === null || _spanState === void 0 ? void 0 : _spanState.rowspan) > 1 && (cellSpans.rowspan = spanState.rowspan);
          ((_spanState2 = spanState) === null || _spanState2 === void 0 ? void 0 : _spanState2.colspan) > 1 && (cellSpans.colspan = spanState.colspan);
          if (spanState.skipped) return null;
        }
        return renderTd(params, {
          dataLength: dataLength,
          rowAndColFixedPosition: rowAndColFixedPosition,
          columnLength: columns.length,
          cellSpans: cellSpans,
          cellEmptyContent: props.cellEmptyContent
        });
      });
      return createVNode("tr", mergeProps({
        "ref": trRef
      }, trAttributes.value, {
        "style": (_trStyles$value2 = trStyles.value) === null || _trStyles$value2 === void 0 ? void 0 : _trStyles$value2.style,
        "class": classes.value
      }, getTrListeners(row, props.rowIndex)), [hasLazyLoadHolder.value ? [createVNode("td", {
        "style": {
          height: "".concat(tRowHeight.value, "px"),
          border: "none"
        }
      }, null)] : columnVNodeList]);
    };
  }
});

export { ROW_LISTENERS, TABLE_PROPS, TrElement as default, renderCell };
//# sourceMappingURL=tr.mjs.map
