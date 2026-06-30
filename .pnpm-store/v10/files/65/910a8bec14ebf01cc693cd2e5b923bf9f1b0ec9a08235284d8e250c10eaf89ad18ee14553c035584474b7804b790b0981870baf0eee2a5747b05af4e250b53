/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _typeof = require('@babel/runtime/helpers/typeof');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var table_utils_index = require('../utils/index.js');
var table_hooks_useFixed = require('../hooks/useFixed.js');
var table_hooks_useClassName = require('../hooks/useClassName.js');
var table_components_ellipsis = require('./ellipsis.js');
var table_baseTableProps = require('../base-table-props.js');
var table_hooks_useLazyLoad = require('../hooks/useLazyLoad.js');
var table_hooks_useRowspanAndColspan = require('../hooks/useRowspanAndColspan.js');
var pick = require('../../_chunks/dep-b5e1f81f.js');
var get = require('../../_chunks/dep-cd8cfdc0.js');
var isFunction = require('../../_chunks/dep-48f60c78.js');
var isString = require('../../_chunks/dep-a55e8a08.js');
var camelCase = require('../../_chunks/dep-422dd97f.js');
require('../../_chunks/dep-0813861e.js');
require('@babel/runtime/helpers/slicedToArray');
require('../../_chunks/dep-733b2b51.js');
require('../../_chunks/dep-7067edce.js');
require('../../_chunks/dep-55c70201.js');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/objectWithoutProperties');
require('../../_chunks/dep-fd5a369e.js');
require('../../_chunks/dep-4ccaead1.js');
require('../../_chunks/dep-87589faa.js');
require('../../_chunks/dep-990979bb.js');
require('../../_chunks/dep-b3b464e8.js');
require('../../_chunks/dep-05f89f0d.js');
require('../../_chunks/dep-06276759.js');
require('../../_chunks/dep-953a77eb.js');
require('../../_chunks/dep-8abdfb41.js');
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
require('../../_chunks/dep-ac11336c.js');
require('../../_chunks/dep-04599720.js');
require('../../_chunks/dep-32412d92.js');
require('../../_chunks/dep-9ce6873a.js');
require('../../_chunks/dep-ecaaae91.js');
require('../../config-provider/hooks/useConfig.js');
require('../../_chunks/dep-5d7e2375.js');
require('../../_chunks/dep-94a7dc2d.js');
require('dayjs');
require('../../_chunks/dep-92e23f17.js');
require('../../_chunks/dep-e27ea667.js');
require('../../_chunks/dep-591a72de.js');
require('../../_chunks/dep-8adeee89.js');
require('../../_chunks/dep-4d2ef282.js');
require('../../_chunks/dep-cc66acf1.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');
require('../../_chunks/dep-47c460dd.js');
require('../../_chunks/dep-4fa46641.js');
require('../../_chunks/dep-23f77e26.js');
require('../../_chunks/dep-ee355a9a.js');
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
require('../../_chunks/dep-427dabac.js');
require('../../_chunks/dep-72c4cc44.js');
require('../../_chunks/dep-d62a674d.js');
require('../../tooltip/utils/index.js');
require('../../_chunks/dep-ace0b57c.js');
require('../../_chunks/dep-fb83a452.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _typeof__default = /*#__PURE__*/_interopDefaultLegacy(_typeof);
var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !Vue.isVNode(s);
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
  if (isFunction.isFunction(col.cell)) {
    return col.cell(Vue.h, params);
  }
  if (slots[col.colKey]) {
    return slots[col.colKey](params);
  }
  if (isString.isString(col.cell) && slots[col.cell]) {
    return slots[col.cell](params);
  }
  if (isFunction.isFunction(col.render)) {
    return col.render(Vue.h, _objectSpread(_objectSpread({}, params), {}, {
      type: "cell"
    }));
  }
  var r = get.get(row, col.colKey);
  if (![void 0, "", null].includes(r)) return r;
  if (extra !== null && extra !== void 0 && extra.cellEmptyContent) {
    return isFunction.isFunction(extra.cellEmptyContent) ? extra.cellEmptyContent(Vue.h, params) : extra.cellEmptyContent;
  }
  if (slots.cellEmptyContent) return slots.cellEmptyContent(params);
  if (slots["cell-empty-content"]) return slots["cell-empty-content"](params);
  return r;
}
var TrElement = Vue.defineComponent({
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
  }, pick.pick(table_baseTableProps["default"], TABLE_PROPS)), {}, {
    tableElm: {},
    tableContentElm: {}
  }),
  emits: ["row-mounted"],
  setup: function setup(props, context) {
    var _toRefs = Vue.toRefs(props),
      tableContentElm = _toRefs.tableContentElm,
      active = _toRefs.active,
      isHover = _toRefs.isHover;
    var trRef = Vue.ref(null);
    var _useClassName = table_hooks_useClassName["default"](),
      tdEllipsisClass = _useClassName.tdEllipsisClass,
      tableBaseClass = _useClassName.tableBaseClass,
      tableColFixedClasses = _useClassName.tableColFixedClasses,
      tableRowFixedClasses = _useClassName.tableRowFixedClasses,
      tdAlignClasses = _useClassName.tdAlignClasses,
      tableDraggableClasses = _useClassName.tableDraggableClasses;
    var trStyles = Vue.computed(function () {
      return table_hooks_useFixed.getRowFixedStyles(get.get(props.row, props.rowKey || "id"), props.rowIndex, props.dataLength, props.fixedRows, props.rowAndColFixedPosition, tableRowFixedClasses, props.virtualConfig.isVirtualScroll.value ? props.virtualConfig.translateY.value : 0);
    });
    var trAttributes = Vue.computed(function () {
      return table_utils_index.formatRowAttributes(props.rowAttributes, {
        row: props.row,
        rowIndex: props.rowIndex,
        type: "body"
      }) || {};
    });
    var classes = Vue.computed(function () {
      var _trStyles$value;
      var customClasses = table_utils_index.formatRowClassNames(props.rowClassName, {
        row: props.row,
        rowKey: props.rowKey,
        rowIndex: props.rowIndex,
        type: "body"
      }, props.rowKey || "id");
      return [(_trStyles$value = trStyles.value) === null || _trStyles$value === void 0 ? void 0 : _trStyles$value.classes, customClasses, _defineProperty__default["default"](_defineProperty__default["default"]({}, "".concat(props.classPrefix, "-table__row--active"), active.value), "".concat(props.classPrefix, "-table__row--hover"), isHover.value)].filter(function (v) {
        return v;
      });
    });
    var _useLazyLoad = table_hooks_useLazyLoad["default"](tableContentElm, trRef, Vue.reactive(_objectSpread(_objectSpread({}, props.scroll), {}, {
        rowIndex: props.rowIndex
      }))),
      hasLazyLoadHolder = _useLazyLoad.hasLazyLoadHolder,
      tRowHeight = _useLazyLoad.tRowHeight;
    var getTrListeners = function getTrListeners(row, rowIndex) {
      var trListeners = {};
      ROW_LISTENERS.forEach(function (eventName) {
        trListeners["on".concat(camelCase.upperFirst(eventName))] = function (e) {
          var _props;
          var p = {
            e: e,
            row: row,
            index: rowIndex
          };
          (_props = props["onRow".concat(camelCase.upperFirst(eventName))]) === null || _props === void 0 || _props.call(props, p);
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
    Vue.onMounted(function () {
      Vue.nextTick(function () {
        notifyVirtualSizeUpdate();
      });
    });
    Vue.onUpdated(function () {
      Vue.nextTick(function () {
        notifyVirtualSizeUpdate();
      });
    });
    function renderEllipsisCell(cellParams, params) {
      var cellNode = params.cellNode;
      var col = cellParams.col,
        colIndex = cellParams.colIndex;
      var content;
      if (isFunction.isFunction(col.ellipsis)) {
        content = col.ellipsis(Vue.h, cellParams);
      } else if (_typeof__default["default"](col.ellipsis) === "object" && isFunction.isFunction(col.ellipsis.content)) {
        content = col.ellipsis.content(Vue.h, cellParams);
      } else if (context.slots["ellipsis-".concat(col.colKey)]) {
        content = context.slots["ellipsis-".concat(col.colKey)](cellParams);
      } else if (context.slots.ellipsis) {
        content = context.slots.ellipsis(cellParams);
      }
      var tooltipProps = {};
      if (_typeof__default["default"](col.ellipsis) === "object") {
        tooltipProps = "props" in col.ellipsis ? col.ellipsis.props : col.ellipsis || void 0;
      }
      var tableElement = props.tableElm;
      var placement = colIndex === 0 ? "top-left" : "top";
      placement = colIndex === props.columns.length - 1 ? "top-right" : placement;
      return Vue.createVNode(table_components_ellipsis["default"], {
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
      var tdStyles = table_hooks_useFixed.getColumnFixedStyles(col, colIndex, rowAndColFixedPosition, tableColFixedClasses);
      var customClasses = table_utils_index.formatClassNames(col.className, _objectSpread(_objectSpread({}, params), {}, {
        type: "td"
      }));
      var classes2 = [tdStyles.classes, customClasses, _defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"]({}, tdEllipsisClass, col.ellipsis), tableBaseClass.tdLastRow, rowIndex + cellSpans.rowspan === dataLength), tableBaseClass.tdFirstCol, colIndex === 0 && props.rowspanAndColspan), tdAlignClasses[col.align], col.align && col.align !== "left"), tableDraggableClasses.handle, col.colKey === "drag")];
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
      var normalAttrs = isFunction.isFunction(col.attrs) ? col.attrs(_objectSpread(_objectSpread({}, params), {}, {
        type: "td"
      })) : col.attrs;
      var attrs = _objectSpread(_objectSpread({}, normalAttrs), cellSpans);
      return Vue.createVNode("td", Vue.mergeProps({
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
          var cellKey = table_hooks_useRowspanAndColspan.getCellKey(row, props.rowKey, col.colKey, colIndex);
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
      return Vue.createVNode("tr", Vue.mergeProps({
        "ref": trRef
      }, trAttributes.value, {
        "style": (_trStyles$value2 = trStyles.value) === null || _trStyles$value2 === void 0 ? void 0 : _trStyles$value2.style,
        "class": classes.value
      }, getTrListeners(row, props.rowIndex)), [hasLazyLoadHolder.value ? [Vue.createVNode("td", {
        "style": {
          height: "".concat(tRowHeight.value, "px"),
          border: "none"
        }
      }, null)] : columnVNodeList]);
    };
  }
});

exports.ROW_LISTENERS = ROW_LISTENERS;
exports.TABLE_PROPS = TABLE_PROPS;
exports["default"] = TrElement;
exports.renderCell = renderCell;
//# sourceMappingURL=tr.js.map
