/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { toRefs, ref, computed } from 'vue';
import { get } from 'lodash-es';
import { o as on, c as off } from '../../_chunks/dep-51a43106.mjs';
import { a as ARROW_DOWN_REG, A as ARROW_UP_REG, S as SPACE_REG, c as ESCAPE_REG, e as ALL_REG, d as CLEAR_REG, f as ARROW_LEFT_REG, g as ARROW_RIGHT_REG } from '../../_chunks/dep-d36c4a3f.mjs';
import '../../_chunks/dep-fe644854.mjs';

function useHoverKeyboardEvent(props, tableRef) {
  var _toRefs = toRefs(props),
    hover = _toRefs.hover,
    data = _toRefs.data,
    activeRowType = _toRefs.activeRowType,
    keyboardRowHover = _toRefs.keyboardRowHover,
    disableSpaceInactiveRow = _toRefs.disableSpaceInactiveRow;
  var hoverRow = ref();
  var currentHoverRowIndex = ref(-1);
  var tableRefTabIndex = ref(0);
  var needKeyboardRowHover = computed(function () {
    if (activeRowType.value === "single") return false;
    if (activeRowType.value === "multiple") return true;
    return hover.value || keyboardRowHover.value;
  });
  var onHoverRow = function onHoverRow(ctx, extra) {
    var rowValue = get(ctx.row, props.rowKey);
    if (hoverRow.value === rowValue && (extra === null || extra === void 0 ? void 0 : extra.action) !== "hover") {
      if (!disableSpaceInactiveRow.value) {
        hoverRow.value = void 0;
      }
    } else {
      hoverRow.value = rowValue;
    }
    currentHoverRowIndex.value = ctx.index;
  };
  var clearHoverRow = function clearHoverRow() {
    hoverRow.value = void 0;
    currentHoverRowIndex.value = -1;
  };
  var keyboardDownListener = function keyboardDownListener(e) {
    var _e$key;
    if (!needKeyboardRowHover.value) return;
    var code = e.code || ((_e$key = e.key) === null || _e$key === void 0 ? void 0 : _e$key.trim());
    if (ARROW_DOWN_REG.test(code)) {
      e.preventDefault();
      var index = Math.min(data.value.length - 1, currentHoverRowIndex.value + 1);
      onHoverRow({
        row: data.value[index],
        index: index,
        e: e
      }, {
        action: "hover"
      });
    } else if (ARROW_UP_REG.test(code)) {
      e.preventDefault();
      var _index = Math.max(0, currentHoverRowIndex.value - 1);
      onHoverRow({
        row: data.value[_index],
        index: _index,
        e: e
      }, {
        action: "hover"
      });
    } else if (SPACE_REG.test(code) && props.activeRowType !== "multiple") {
      var _index2 = currentHoverRowIndex.value;
      onHoverRow({
        row: data.value[_index2],
        index: _index2,
        e: e
      });
      if (!props.activeRowType) {
        var _props$onActiveRowAct;
        (_props$onActiveRowAct = props.onActiveRowAction) === null || _props$onActiveRowAct === void 0 || _props$onActiveRowAct.call(props, {
          action: "space-one-selection",
          activeRowList: [{
            row: data.value[_index2],
            rowIndex: _index2
          }]
        });
      }
    } else if (ESCAPE_REG.test(code) && !props.activeRowType) {
      var _props$onActiveRowAct2;
      hoverRow.value = void 0;
      (_props$onActiveRowAct2 = props.onActiveRowAction) === null || _props$onActiveRowAct2 === void 0 || _props$onActiveRowAct2.call(props, {
        action: "clear",
        activeRowList: []
      });
    } else if (ALL_REG.test(code) && !props.activeRowType) {
      var _props$onActiveRowAct3;
      (_props$onActiveRowAct3 = props.onActiveRowAction) === null || _props$onActiveRowAct3 === void 0 || _props$onActiveRowAct3.call(props, {
        action: "select-all",
        activeRowList: []
      });
    } else if (CLEAR_REG.test(code) && !props.activeRowType && !e.ctrlKey && !e.metaKey) {
      var _props$onActiveRowAct4;
      (_props$onActiveRowAct4 = props.onActiveRowAction) === null || _props$onActiveRowAct4 === void 0 || _props$onActiveRowAct4.call(props, {
        action: "clear",
        activeRowList: []
      });
    }
    if (ARROW_LEFT_REG.test(code) || ARROW_RIGHT_REG.test(code)) {
      tableRefTabIndex.value = void 0;
    } else {
      tableRefTabIndex.value = 0;
    }
  };
  var addRowHoverKeyboardListener = function addRowHoverKeyboardListener() {
    on(tableRef.value, "keydown", keyboardDownListener);
  };
  var removeRowHoverKeyboardListener = function removeRowHoverKeyboardListener() {
    off(tableRef.value, "keydown", keyboardDownListener);
  };
  return {
    hoverRow: hoverRow,
    needKeyboardRowHover: needKeyboardRowHover,
    clearHoverRow: clearHoverRow,
    addRowHoverKeyboardListener: addRowHoverKeyboardListener,
    removeRowHoverKeyboardListener: removeRowHoverKeyboardListener,
    tableRefTabIndex: tableRefTabIndex
  };
}

export { useHoverKeyboardEvent as default, useHoverKeyboardEvent };
//# sourceMappingURL=useHoverKeyboardEvent.mjs.map
