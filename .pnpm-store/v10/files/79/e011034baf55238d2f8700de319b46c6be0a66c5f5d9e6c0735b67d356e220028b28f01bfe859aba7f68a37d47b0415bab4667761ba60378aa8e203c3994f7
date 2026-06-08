/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import { toRefs, ref } from 'vue';
import { get } from 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import { o as on, c as off } from '../../_chunks/dep-16bcfabc.js';
import '../../config-provider/hooks/useConfig.js';
import { u as useDefaultValue } from '../../_chunks/dep-aa34a263.js';
import '../../_chunks/dep-880d05b9.js';
import '@babel/runtime/helpers/defineProperty';
import { a as ARROW_DOWN_REG, A as ARROW_UP_REG, S as SPACE_REG, b as SHIFT_REG, c as ESCAPE_REG, d as CLEAR_REG, e as ALL_REG } from '../../_chunks/dep-30c631d1.js';
import '../../_chunks/dep-fe23be6e.js';
import '../../_chunks/dep-81b01cae.js';
import '../../config-provider/utils/context.js';
import '../../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';

function useRowHighlight(props, tableRef) {
  var _toRefs = toRefs(props),
    data = _toRefs.data,
    activeRowType = _toRefs.activeRowType,
    activeRowKeys = _toRefs.activeRowKeys,
    defaultActiveRowKeys = _toRefs.defaultActiveRowKeys,
    disableSpaceInactiveRow = _toRefs.disableSpaceInactiveRow;
  var currentOperationRowIndex = ref(-1);
  var isShiftPressed = ref(false);
  var shiftSelectionState = ref(false);
  var areaSelectionStartIndex = ref(-1);
  var _useDefaultValue = useDefaultValue(activeRowKeys, defaultActiveRowKeys.value, props.onActiveChange, "activeRowKeys"),
    _useDefaultValue2 = _slicedToArray(_useDefaultValue, 2),
    tActiveRow = _useDefaultValue2[0],
    setTActiveRow = _useDefaultValue2[1];
  var handleInactive = function handleInactive(ctx) {
    var row = ctx.row,
      index = ctx.index;
    var rowValue = get(row, props.rowKey);
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
        if (_newActiveRowKeys.includes(get(row2, props.rowKey))) {
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
    var rowValue = get(row, props.rowKey);
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
        if (newActiveRowKeys.includes(get(row2, props.rowKey))) {
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
      return get(item.row, props.rowKey);
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
      var rowValue = get(row, props.rowKey);
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
    var rowValue = get(row, props.rowKey);
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
      return get(item, props.rowKey);
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
    if (ARROW_DOWN_REG.test(code)) {
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
    } else if (ARROW_UP_REG.test(code)) {
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
    } else if (SPACE_REG.test(code)) {
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
    } else if (SHIFT_REG.test(code)) {
      isShiftPressed.value = true;
      areaSelectionStartIndex.value = currentOperationRowIndex.value;
    } else if (ESCAPE_REG.test(code) || CLEAR_REG.test(code)) {
      clearActive();
      clearShiftAreaSelection();
    } else if (ALL_REG.test(code)) {
      if (activeRowType.value === "multiple") {
        setAllActive();
      }
    }
    if (!SPACE_REG.test(code)) {
      clearShiftAreaSelection();
    }
  };
  var keyboardUpListener = function keyboardUpListener(e) {
    var _e$key2;
    var code = e.code || ((_e$key2 = e.key) === null || _e$key2 === void 0 ? void 0 : _e$key2.trim());
    if (SHIFT_REG.test(code)) {
      isShiftPressed.value = false;
    }
  };
  var addHighlightKeyboardListener = function addHighlightKeyboardListener() {
    on(tableRef.value, "keydown", keyboardDownListener);
    on(tableRef.value, "keyup", keyboardUpListener);
  };
  var removeHighlightKeyboardListener = function removeHighlightKeyboardListener() {
    off(tableRef.value, "keydown", keyboardDownListener);
    off(tableRef.value, "keyup", keyboardUpListener);
  };
  return {
    tActiveRow: tActiveRow,
    onHighlightRow: onHighlightRow,
    addHighlightKeyboardListener: addHighlightKeyboardListener,
    removeHighlightKeyboardListener: removeHighlightKeyboardListener
  };
}

export { useRowHighlight as default, useRowHighlight };
//# sourceMappingURL=useRowHighlight.js.map
