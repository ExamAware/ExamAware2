/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
var Vue = require('vue');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
var dom = require('../../_chunks/dep-06276759.js');
require('../../config-provider/hooks/useConfig.js');
var index = require('../../_chunks/dep-f20044b8.js');
require('../../_chunks/dep-cc66acf1.js');
require('@babel/runtime/helpers/defineProperty');
var common = require('../../_chunks/dep-6280a7f6.js');
var get = require('../../_chunks/dep-cd8cfdc0.js');
require('../../_chunks/dep-953a77eb.js');
require('../../_chunks/dep-8abdfb41.js');
require('../../_chunks/dep-48f60c78.js');
require('../../_chunks/dep-b3b464e8.js');
require('../../_chunks/dep-0813861e.js');
require('../../_chunks/dep-a55e8a08.js');
require('../../_chunks/dep-87589faa.js');
require('../../_chunks/dep-05f89f0d.js');
require('../../_chunks/dep-5d7e2375.js');
require('../../_chunks/dep-94a7dc2d.js');
require('dayjs');
require('../../_chunks/dep-92e23f17.js');
require('../../_chunks/dep-0ff616fe.js');
require('../../_chunks/dep-5f52cd42.js');
require('../../_chunks/dep-f57bcb19.js');
require('../../_chunks/dep-dc4bbc14.js');
require('../../_chunks/dep-e27ea667.js');
require('../../_chunks/dep-165ca38a.js');
require('../../_chunks/dep-32412d92.js');
require('../../_chunks/dep-a8a3d718.js');
require('../../_chunks/dep-54e566d9.js');
require('../../_chunks/dep-591a72de.js');
require('../../_chunks/dep-8adeee89.js');
require('../../_chunks/dep-4d2ef282.js');
require('../../_chunks/dep-929933ce.js');
require('../../_chunks/dep-6b1f0ef8.js');
require('../../_chunks/dep-23f77e26.js');
require('../../_chunks/dep-ee355a9a.js');
require('../../_chunks/dep-71fa6bfc.js');
require('../../_chunks/dep-80a478d7.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');
require('../../_chunks/dep-ac11336c.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);

function useRowHighlight(props, tableRef) {
  var _toRefs = Vue.toRefs(props),
    data = _toRefs.data,
    activeRowType = _toRefs.activeRowType,
    activeRowKeys = _toRefs.activeRowKeys,
    defaultActiveRowKeys = _toRefs.defaultActiveRowKeys,
    disableSpaceInactiveRow = _toRefs.disableSpaceInactiveRow;
  var currentOperationRowIndex = Vue.ref(-1);
  var isShiftPressed = Vue.ref(false);
  var shiftSelectionState = Vue.ref(false);
  var areaSelectionStartIndex = Vue.ref(-1);
  var _useDefaultValue = index.useDefaultValue(activeRowKeys, defaultActiveRowKeys.value, props.onActiveChange, "activeRowKeys"),
    _useDefaultValue2 = _slicedToArray__default["default"](_useDefaultValue, 2),
    tActiveRow = _useDefaultValue2[0],
    setTActiveRow = _useDefaultValue2[1];
  var handleInactive = function handleInactive(ctx) {
    var row = ctx.row,
      index = ctx.index;
    var rowValue = get.get(row, props.rowKey);
    if (activeRowType.value === "single") {
      var newActiveRowKeys = tActiveRow.value.length > 1 ? [rowValue] : [];
      setTActiveRow(newActiveRowKeys, {
        type: "inactive",
        activeRowList: [{
          row: row,
          rowIndex: index
        }],
        currentRowData: row
      });
    } else if (activeRowType.value === "multiple") {
      var _newActiveRowKeys = tActiveRow.value.filter(function (t) {
        return t !== rowValue;
      });
      var activeRowList = [];
      for (var i = 0, len = data.value.length; i < len; i++) {
        var row2 = data.value[i];
        if (_newActiveRowKeys.includes(get.get(row2, props.rowKey))) {
          activeRowList.push({
            row: row2,
            rowIndex: i
          });
        }
      }
      setTActiveRow(_newActiveRowKeys, {
        type: "inactive",
        activeRowList: activeRowList,
        currentRowData: row
      });
    }
  };
  var handleActive = function handleActive(ctx) {
    var row = ctx.row;
    var rowValue = get.get(row, props.rowKey);
    if (activeRowType.value === "single") {
      setTActiveRow([rowValue], {
        activeRowList: [{
          row: row,
          rowIndex: ctx.index
        }],
        currentRowData: row,
        type: "active"
      });
    } else {
      var newActiveRowKeys = tActiveRow.value.concat(rowValue);
      var activeRowList = [];
      for (var i = 0, len = data.value.length; i < len; i++) {
        var row2 = data.value[i];
        if (newActiveRowKeys.includes(get.get(row2, props.rowKey))) {
          activeRowList.push({
            row: row2,
            rowIndex: i
          });
        }
      }
      setTActiveRow(newActiveRowKeys, {
        activeRowList: activeRowList,
        currentRowData: row,
        type: "active"
      });
    }
  };
  var handleShiftActive = function handleShiftActive(ctx) {
    document.getSelection().removeAllRanges();
    var row = ctx.row;
    var currentIndex = currentOperationRowIndex.value;
    var startIndex = Math.min(areaSelectionStartIndex.value, currentIndex);
    var endIndex = Math.max(areaSelectionStartIndex.value, currentIndex);
    var newActiveRowData = [];
    for (var i = startIndex; i <= endIndex; i++) {
      newActiveRowData.push({
        row: data.value[i],
        rowIndex: i
      });
    }
    var newActiveRowKeys = newActiveRowData.map(function (item) {
      return get.get(item.row, props.rowKey);
    });
    setTActiveRow(newActiveRowKeys, {
      activeRowList: newActiveRowData,
      type: "active",
      currentRowData: row
    });
  };
  var getActiveRowList = function getActiveRowList() {
    var list = [];
    for (var i = 0, len = data.value.length; i < len; i++) {
      var row = data.value[i];
      var rowValue = get.get(row, props.rowKey);
      if (tActiveRow.value.includes(rowValue)) {
        list.push({
          row: row,
          rowIndex: i
        });
      }
    }
    return list;
  };
  var onHighlightRow = function onHighlightRow(ctx, extra) {
    if (!activeRowType.value) return;
    var row = ctx.row,
      index = ctx.index;
    var rowValue = get.get(row, props.rowKey);
    if (isShiftPressed.value) {
      currentOperationRowIndex.value = index;
      handleShiftActive(ctx);
      shiftSelectionState.value = true;
    } else if (tActiveRow.value.includes(rowValue) && (extra === null || extra === void 0 ? void 0 : extra.action) !== "active") {
      if (!disableSpaceInactiveRow.value) {
        handleInactive(ctx);
        currentOperationRowIndex.value = index;
      }
    } else {
      handleActive(ctx);
      currentOperationRowIndex.value = index;
    }
  };
  var clearActive = function clearActive() {
    var _props$onActiveRowAct;
    setTActiveRow([], {
      activeRowList: [],
      currentRowData: void 0,
      type: "inactive"
    });
    (_props$onActiveRowAct = props.onActiveRowAction) === null || _props$onActiveRowAct === void 0 || _props$onActiveRowAct.call(props, {
      action: "clear",
      activeRowList: []
    });
    currentOperationRowIndex.value = -1;
  };
  var setAllActive = function setAllActive() {
    var _props$onActiveRowAct2;
    var activeKeys = data.value.map(function (item) {
      return get.get(item, props.rowKey);
    });
    var activeRowList = data.value.map(function (row, rowIndex) {
      return {
        row: row,
        rowIndex: rowIndex
      };
    });
    setTActiveRow(activeKeys, {
      activeRowList: activeRowList,
      currentRowData: void 0,
      type: "active"
    });
    (_props$onActiveRowAct2 = props.onActiveRowAction) === null || _props$onActiveRowAct2 === void 0 || _props$onActiveRowAct2.call(props, {
      action: "select-all",
      activeRowList: activeRowList
    });
    currentOperationRowIndex.value = -1;
  };
  var clearShiftAreaSelection = function clearShiftAreaSelection() {
    shiftSelectionState.value = false;
  };
  var keyboardDownListener = function keyboardDownListener(e) {
    var _e$key;
    var code = e.code || ((_e$key = e.key) === null || _e$key === void 0 ? void 0 : _e$key.trim());
    if (common.ARROW_DOWN_REG.test(code)) {
      e.preventDefault();
      var index = Math.min(data.value.length - 1, currentOperationRowIndex.value + 1);
      if (activeRowType.value === "single") {
        onHighlightRow({
          row: data.value[index],
          index: index,
          e: e
        }, {
          action: "active"
        });
      } else {
        currentOperationRowIndex.value = index;
      }
    } else if (common.ARROW_UP_REG.test(code)) {
      e.preventDefault();
      var _index = Math.max(0, currentOperationRowIndex.value - 1);
      if (activeRowType.value === "single") {
        onHighlightRow({
          row: data.value[_index],
          index: _index,
          e: e
        }, {
          action: "active"
        });
      } else {
        currentOperationRowIndex.value = _index;
      }
    } else if (common.SPACE_REG.test(code)) {
      e.preventDefault();
      var _index2 = currentOperationRowIndex.value;
      if (shiftSelectionState.value) {
        var _props$onActiveRowAct3;
        (_props$onActiveRowAct3 = props.onActiveRowAction) === null || _props$onActiveRowAct3 === void 0 || _props$onActiveRowAct3.call(props, {
          action: "shift-area-selection",
          activeRowList: getActiveRowList()
        });
      } else if (!disableSpaceInactiveRow.value) {
        onHighlightRow({
          row: data.value[_index2],
          index: _index2,
          e: e
        });
      } else {
        var _props$onActiveRowAct4;
        (_props$onActiveRowAct4 = props.onActiveRowAction) === null || _props$onActiveRowAct4 === void 0 || _props$onActiveRowAct4.call(props, {
          action: "space-one-selection",
          activeRowList: getActiveRowList()
        });
      }
    } else if (common.SHIFT_REG.test(code)) {
      isShiftPressed.value = true;
      areaSelectionStartIndex.value = currentOperationRowIndex.value;
    } else if (common.ESCAPE_REG.test(code) || common.CLEAR_REG.test(code)) {
      clearActive();
      clearShiftAreaSelection();
    } else if (common.ALL_REG.test(code)) {
      if (activeRowType.value === "multiple") {
        setAllActive();
      }
    }
    if (!common.SPACE_REG.test(code)) {
      clearShiftAreaSelection();
    }
  };
  var keyboardUpListener = function keyboardUpListener(e) {
    var _e$key2;
    var code = e.code || ((_e$key2 = e.key) === null || _e$key2 === void 0 ? void 0 : _e$key2.trim());
    if (common.SHIFT_REG.test(code)) {
      isShiftPressed.value = false;
    }
  };
  var addHighlightKeyboardListener = function addHighlightKeyboardListener() {
    dom.on(tableRef.value, "keydown", keyboardDownListener);
    dom.on(tableRef.value, "keyup", keyboardUpListener);
  };
  var removeHighlightKeyboardListener = function removeHighlightKeyboardListener() {
    dom.off(tableRef.value, "keydown", keyboardDownListener);
    dom.off(tableRef.value, "keyup", keyboardUpListener);
  };
  return {
    tActiveRow: tActiveRow,
    onHighlightRow: onHighlightRow,
    addHighlightKeyboardListener: addHighlightKeyboardListener,
    removeHighlightKeyboardListener: removeHighlightKeyboardListener
  };
}

exports["default"] = useRowHighlight;
exports.useRowHighlight = useRowHighlight;
//# sourceMappingURL=useRowHighlight.js.map
