/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { isFunction, isNumber, get } from 'lodash-es';

function filterDataByIds() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var ids = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var byId = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "id";
  return data.filter(function () {
    var d = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return ids.includes(d[byId]);
  });
}
var SCROLL_DIRECTION = /* @__PURE__ */function (SCROLL_DIRECTION2) {
  SCROLL_DIRECTION2["X"] = "x";
  SCROLL_DIRECTION2["Y"] = "y";
  SCROLL_DIRECTION2["UNKNOWN"] = "unknown";
  return SCROLL_DIRECTION2;
}(SCROLL_DIRECTION || {});
var preScrollLeft;
var preScrollTop;
var getScrollDirection = function getScrollDirection(scrollLeft, scrollTop) {
  var direction = "unknown" /* UNKNOWN */;
  if (preScrollTop !== scrollTop) {
    direction = "y" /* Y */;
  } else if (preScrollLeft !== scrollLeft) {
    direction = "x" /* X */;
  }
  preScrollTop = scrollTop;
  preScrollLeft = scrollLeft;
  return direction;
};
function isRowSelectedDisabled(selectColumn, row, rowIndex) {
  if (!selectColumn) return false;
  var disabled = isFunction(selectColumn.disabled) ? selectColumn.disabled({
    row: row,
    rowIndex: rowIndex
  }) : selectColumn.disabled;
  if (selectColumn.checkProps) {
    if (isFunction(selectColumn.checkProps)) {
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
function getColWidthAttr(col, attrKey) {
  var attr = col[attrKey];
  return isNumber(attr) ? attr : parseFloat(attr);
}
function getEditableKeysMap(keys, list, rowKey) {
  var map = {};
  for (var i = 0, len = list.length; i < len; i++) {
    var rowValue = get(list[i], rowKey);
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

export { getColumnDataByKey as a, getColumnIndexByKey as b, getEditableKeysMap as c, getColumnsResetValue as g, isRowSelectedDisabled as i };
//# sourceMappingURL=dep-ec9bd76e.mjs.map
