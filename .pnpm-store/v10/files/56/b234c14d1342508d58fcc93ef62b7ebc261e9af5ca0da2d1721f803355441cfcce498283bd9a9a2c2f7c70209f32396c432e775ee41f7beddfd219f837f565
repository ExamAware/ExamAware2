/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var log = require('../../_chunks/dep-733b2b51.js');
var get = require('../../_chunks/dep-cd8cfdc0.js');
require('../../_chunks/dep-ac11336c.js');
require('../../_chunks/dep-87589faa.js');
require('@babel/runtime/helpers/typeof');
require('../../_chunks/dep-80a478d7.js');
require('../../_chunks/dep-b3b464e8.js');
require('../../_chunks/dep-05f89f0d.js');
require('../../_chunks/dep-a8a3d718.js');
require('../../_chunks/dep-5f52cd42.js');
require('../../_chunks/dep-48f60c78.js');
require('../../_chunks/dep-0813861e.js');
require('../../_chunks/dep-f57bcb19.js');
require('../../_chunks/dep-71fa6bfc.js');

function getCellKey(row, rowKey, colKey, colIndex) {
  var rowValue = get.get(row, rowKey);
  if (rowValue === void 0) {
    log.log.error("Table", "rowKey is wrong, can not get unique identifier of row.");
  }
  return [rowValue, colKey || colIndex].join("_");
}
function getRowKeyFromCell(cellKey) {
  var _cellKey$split;
  return (_cellKey$split = cellKey.split("_")) === null || _cellKey$split === void 0 ? void 0 : _cellKey$split[0];
}
function useRowspanAndColspan(data, columns, rowKey, rowspanAndColspan) {
  var skipSpansMap = Vue.ref(/* @__PURE__ */new Map());
  var onTrRowspanOrColspan = function onTrRowspanOrColspan(params, skipSpansValue) {
    var rowIndex = params.rowIndex,
      colIndex = params.colIndex;
    if (!skipSpansValue.rowspan && !skipSpansValue.colspan) return;
    var maxRowIndex = rowIndex + (skipSpansValue.rowspan || 1);
    var maxColIndex = colIndex + (skipSpansValue.colspan || 1);
    for (var i = rowIndex; i < maxRowIndex; i++) {
      for (var j = colIndex; j < maxColIndex; j++) {
        if (i !== rowIndex || j !== colIndex) {
          if (!data.value[i] || !columns.value[j]) return;
          var cellKey = getCellKey(data.value[i], rowKey.value, columns.value[j].colKey, j);
          var state = skipSpansMap.value.get(cellKey) || {};
          state.skipped = true;
          skipSpansMap.value.set(cellKey, state);
        }
      }
    }
  };
  var updateSkipSpansMap = function updateSkipSpansMap(data2, columns2, rowspanAndColspan2) {
    var _skipSpansMap$value;
    (_skipSpansMap$value = skipSpansMap.value) === null || _skipSpansMap$value === void 0 || _skipSpansMap$value.clear();
    if (!data2 || !rowspanAndColspan2) return;
    for (var i = 0, len = data2.length; i < len; i++) {
      var row = data2[i];
      for (var j = 0, colLen = columns2.length; j < colLen; j++) {
        var col = columns2[j];
        var params = {
          row: row,
          col: col,
          rowIndex: i,
          colIndex: j
        };
        var cellKey = getCellKey(row, rowKey.value, col.colKey, j);
        var state = skipSpansMap.value.get(cellKey) || {};
        var o = rowspanAndColspan2(params) || {};
        if (o.rowspan || o.colspan || state.rowspan || state.colspan) {
          o.rowspan && (state.rowspan = o.rowspan);
          o.colspan && (state.colspan = o.colspan);
          skipSpansMap.value.set(cellKey, state);
        }
        onTrRowspanOrColspan === null || onTrRowspanOrColspan === void 0 || onTrRowspanOrColspan(params, state);
      }
    }
  };
  Vue.watch(function () {
    return [data.value, columns.value, rowspanAndColspan];
  }, function () {
    updateSkipSpansMap(data.value, columns.value, rowspanAndColspan === null || rowspanAndColspan === void 0 ? void 0 : rowspanAndColspan.value);
  }, {
    immediate: true
  });
  return {
    skipSpansMap: skipSpansMap
  };
}

exports["default"] = useRowspanAndColspan;
exports.getCellKey = getCellKey;
exports.getRowKeyFromCell = getRowKeyFromCell;
//# sourceMappingURL=useRowspanAndColspan.js.map
