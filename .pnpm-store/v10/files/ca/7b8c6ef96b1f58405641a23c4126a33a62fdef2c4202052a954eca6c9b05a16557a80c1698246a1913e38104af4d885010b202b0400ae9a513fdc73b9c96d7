/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

var isFunction = require('./dep-48f60c78.js');
var get = require('./dep-cd8cfdc0.js');

function isRowSelectedDisabled(selectColumn, row, rowIndex) {
  if (!selectColumn) return false;
  var disabled = isFunction.isFunction(selectColumn.disabled) ? selectColumn.disabled({
    row: row,
    rowIndex: rowIndex
  }) : selectColumn.disabled;
  if (selectColumn.checkProps) {
    if (isFunction.isFunction(selectColumn.checkProps)) {
      disabled = disabled || selectColumn.checkProps({
        row: row,
        rowIndex: rowIndex
      }).disabled;
    } else if (selectColumn.checkProps === "object") {
      disabled = disabled || selectColumn.checkProps.disabled;
    }
  }
  return !!disabled;
}
function getEditableKeysMap(keys, list, rowKey) {
  var map = {};
  for (var i = 0, len = list.length; i < len; i++) {
    var rowValue = get.get(list[i], rowKey);
    if (keys.includes(rowValue)) {
      map[rowValue] = true;
    }
  }
  return map;
}
function getColumnDataByKey(columns, colKey) {
  for (var i = 0, len = columns.length; i < len; i++) {
    var _columns$i$children;
    if (columns[i].colKey === colKey) return columns[i];
    if ((_columns$i$children = columns[i].children) !== null && _columns$i$children !== void 0 && _columns$i$children.length) {
      var t = getColumnDataByKey(columns[i].children, colKey);
      if (t) return t;
    }
  }
  return null;
}
function getColumnIndexByKey(columns, colKey) {
  for (var i = 0, len = columns.length; i < len; i++) {
    var _columns$i$children2;
    if (columns[i].colKey === colKey) {
      return i;
    }
    if ((_columns$i$children2 = columns[i].children) !== null && _columns$i$children2 !== void 0 && _columns$i$children2.length) {
      var t = getColumnDataByKey(columns[i].children, colKey);
      if (t) return i;
    }
  }
  return -1;
}
function getColumnsResetValue(columns) {
  var resetValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  for (var i = 0, len = columns.length; i < len; i++) {
    var _col$children;
    var col = columns[i];
    if (col.filter && "resetValue" in col.filter) {
      resetValue[col.colKey] = col.filter.resetValue;
    }
    if ((_col$children = col.children) !== null && _col$children !== void 0 && _col$children.length) {
      getColumnsResetValue(col.children, resetValue);
    }
  }
  return resetValue;
}

exports.getColumnDataByKey = getColumnDataByKey;
exports.getColumnIndexByKey = getColumnIndexByKey;
exports.getColumnsResetValue = getColumnsResetValue;
exports.getEditableKeysMap = getEditableKeysMap;
exports.isRowSelectedDisabled = isRowSelectedDisabled;
//# sourceMappingURL=dep-7f185af2.js.map
