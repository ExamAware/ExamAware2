/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { ref, watch } from 'vue';
import { get } from 'lodash-es';
import '../../_chunks/dep-6d2705e1.mjs';
import { l as log } from '../../_chunks/dep-97ecacde.mjs';

function getCellKey(row, rowKey, colKey, colIndex) {
  var rowValue = get(row, rowKey);
  if (rowValue === void 0) {
    log.error("Table", "rowKey is wrong, can not get unique identifier of row.");
  }
  return [rowValue, colKey || colIndex].join("_");
}
function getRowKeyFromCell(cellKey) {
  var _cellKey$split;
  return (_cellKey$split = cellKey.split("_")) === null || _cellKey$split === void 0 ? void 0 : _cellKey$split[0];
}
function useRowspanAndColspan(data, columns, rowKey, rowspanAndColspan) {
  var skipSpansMap = ref(/* @__PURE__ */new Map());
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
  watch(function () {
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

export { useRowspanAndColspan as default, getCellKey, getRowKeyFromCell };
//# sourceMappingURL=useRowspanAndColspan.mjs.map
