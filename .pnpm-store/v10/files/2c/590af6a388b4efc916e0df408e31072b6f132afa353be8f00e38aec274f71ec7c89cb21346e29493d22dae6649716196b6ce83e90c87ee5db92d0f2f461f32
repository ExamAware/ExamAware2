/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var dom = require('../../_chunks/dep-06276759.js');
var common = require('../../_chunks/dep-6280a7f6.js');
var get = require('../../_chunks/dep-cd8cfdc0.js');
require('../../_chunks/dep-953a77eb.js');
require('../../_chunks/dep-8abdfb41.js');
require('../../_chunks/dep-48f60c78.js');
require('../../_chunks/dep-b3b464e8.js');
require('@babel/runtime/helpers/typeof');
require('../../_chunks/dep-0813861e.js');
require('../../_chunks/dep-a55e8a08.js');
require('../../_chunks/dep-87589faa.js');
require('../../_chunks/dep-05f89f0d.js');
require('../../_chunks/dep-ac11336c.js');
require('../../_chunks/dep-80a478d7.js');
require('../../_chunks/dep-a8a3d718.js');
require('../../_chunks/dep-5f52cd42.js');
require('../../_chunks/dep-f57bcb19.js');
require('../../_chunks/dep-71fa6bfc.js');

function useHoverKeyboardEvent(props, tableRef) {
  var _toRefs = Vue.toRefs(props),
    hover = _toRefs.hover,
    data = _toRefs.data,
    activeRowType = _toRefs.activeRowType,
    keyboardRowHover = _toRefs.keyboardRowHover,
    disableSpaceInactiveRow = _toRefs.disableSpaceInactiveRow;
  var hoverRow = Vue.ref();
  var currentHoverRowIndex = Vue.ref(-1);
  var tableRefTabIndex = Vue.ref(0);
  var needKeyboardRowHover = Vue.computed(function () {
    if (activeRowType.value === "single") return false;
    if (activeRowType.value === "multiple") return true;
    return hover.value || keyboardRowHover.value;
  });
  var onHoverRow = function onHoverRow(ctx, extra) {
    var rowValue = get.get(ctx.row, props.rowKey);
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
    if (common.ARROW_DOWN_REG.test(code)) {
      e.preventDefault();
      var index = Math.min(data.value.length - 1, currentHoverRowIndex.value + 1);
      onHoverRow({
        row: data.value[index],
        index: index,
        e: e
      }, {
        action: "hover"
      });
    } else if (common.ARROW_UP_REG.test(code)) {
      e.preventDefault();
      var _index = Math.max(0, currentHoverRowIndex.value - 1);
      onHoverRow({
        row: data.value[_index],
        index: _index,
        e: e
      }, {
        action: "hover"
      });
    } else if (common.SPACE_REG.test(code) && props.activeRowType !== "multiple") {
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
    } else if (common.ESCAPE_REG.test(code) && !props.activeRowType) {
      var _props$onActiveRowAct2;
      hoverRow.value = void 0;
      (_props$onActiveRowAct2 = props.onActiveRowAction) === null || _props$onActiveRowAct2 === void 0 || _props$onActiveRowAct2.call(props, {
        action: "clear",
        activeRowList: []
      });
    } else if (common.ALL_REG.test(code) && !props.activeRowType) {
      var _props$onActiveRowAct3;
      (_props$onActiveRowAct3 = props.onActiveRowAction) === null || _props$onActiveRowAct3 === void 0 || _props$onActiveRowAct3.call(props, {
        action: "select-all",
        activeRowList: []
      });
    } else if (common.CLEAR_REG.test(code) && !props.activeRowType && !e.ctrlKey && !e.metaKey) {
      var _props$onActiveRowAct4;
      (_props$onActiveRowAct4 = props.onActiveRowAction) === null || _props$onActiveRowAct4 === void 0 || _props$onActiveRowAct4.call(props, {
        action: "clear",
        activeRowList: []
      });
    }
    if (common.ARROW_LEFT_REG.test(code) || common.ARROW_RIGHT_REG.test(code)) {
      tableRefTabIndex.value = void 0;
    } else {
      tableRefTabIndex.value = 0;
    }
  };
  var addRowHoverKeyboardListener = function addRowHoverKeyboardListener() {
    dom.on(tableRef.value, "keydown", keyboardDownListener);
  };
  var removeRowHoverKeyboardListener = function removeRowHoverKeyboardListener() {
    dom.off(tableRef.value, "keydown", keyboardDownListener);
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

exports["default"] = useHoverKeyboardEvent;
exports.useHoverKeyboardEvent = useHoverKeyboardEvent;
//# sourceMappingURL=useHoverKeyboardEvent.js.map
