/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import _typeof from '@babel/runtime/helpers/typeof';
import { isFunction, isObject, get } from 'lodash-es';

function toString(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
}
function debounce(fn) {
  var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;
  var timer;
  return function newFn() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var context = this;
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  };
}
function formatRowAttributes(attributes, params) {
  if (!attributes) return void 0;
  var attrList = attributes instanceof Array ? attributes : [attributes];
  var result = {};
  for (var i = 0; i < attrList.length; i++) {
    var attrItem = attrList[i];
    if (!attrItem) continue;
    var attrProperty = isFunction(attrItem) ? attrItem(params) : attrItem;
    result = attrProperty instanceof Array ? formatRowAttributes(attrProperty, params) : Object.assign(result, attrProperty);
  }
  return result;
}
function formatRowClassNames(rowClassNames, params, rowKey) {
  var rowClassList = rowClassNames instanceof Array ? rowClassNames : [rowClassNames];
  var row = params.row,
    rowIndex = params.rowIndex;
  var customClasses = [];
  for (var i = 0, len = rowClassList.length; i < len; i++) {
    var rName = rowClassList[i];
    var tClass = isFunction(rName) ? rName(params) : rName;
    if (isObject(tClass) && !(tClass instanceof Array)) {
      tClass[rowIndex] && (tClass = tClass[rowIndex]);
      var rowId = get(row, rowKey || "id");
      tClass[rowId] && (tClass = tClass[rowId]);
    } else if (tClass instanceof Array) {
      tClass = formatRowClassNames(tClass, params, rowKey);
    }
    customClasses = customClasses.concat(tClass);
  }
  return customClasses;
}
function formatClassNames(classNames, params) {
  var classes = classNames instanceof Array ? classNames : [classNames];
  var arr = [];
  for (var i = 0, len = classes.length; i < len; i++) {
    var cls = classes[i];
    if (isFunction(cls)) {
      arr.push(cls(params));
    } else {
      arr.push(cls);
    }
  }
  return arr;
}
var INNER_PRE_NAME = "@@inner-";
function getCurrentRowByKey(columns, key) {
  if (!columns || !key) return;
  var col = columns === null || columns === void 0 ? void 0 : columns.find(function (t) {
    return t.colKey === key;
  });
  if (col) return col;
  for (var i = 0, len = columns.length; i < len; i++) {
    var _columns$i;
    if ((_columns$i = columns[i]) !== null && _columns$i !== void 0 && (_columns$i = _columns$i.children) !== null && _columns$i !== void 0 && _columns$i.length) {
      var _columns$i2;
      return getCurrentRowByKey((_columns$i2 = columns[i]) === null || _columns$i2 === void 0 ? void 0 : _columns$i2.children, key);
    }
  }
}
function getAffixProps(mainAffixProps, subAffixProps) {
  if (_typeof(mainAffixProps) === "object") return mainAffixProps;
  if (_typeof(subAffixProps) === "object") return subAffixProps;
  return {};
}

export { INNER_PRE_NAME, debounce, formatClassNames, formatRowAttributes, formatRowClassNames, getAffixProps, getCurrentRowByKey, toString };
//# sourceMappingURL=index.js.map
