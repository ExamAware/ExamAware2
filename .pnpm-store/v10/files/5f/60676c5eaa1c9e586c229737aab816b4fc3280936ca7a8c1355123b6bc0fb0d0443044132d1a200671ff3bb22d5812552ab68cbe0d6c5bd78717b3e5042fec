/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _typeof = require('@babel/runtime/helpers/typeof');
var isFunction = require('../../_chunks/dep-48f60c78.js');
var isObject = require('../../_chunks/dep-0813861e.js');
var get = require('../../_chunks/dep-cd8cfdc0.js');
require('../../_chunks/dep-b3b464e8.js');
require('../../_chunks/dep-ac11336c.js');
require('../../_chunks/dep-87589faa.js');
require('../../_chunks/dep-80a478d7.js');
require('../../_chunks/dep-05f89f0d.js');
require('../../_chunks/dep-a8a3d718.js');
require('../../_chunks/dep-5f52cd42.js');
require('../../_chunks/dep-f57bcb19.js');
require('../../_chunks/dep-71fa6bfc.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _typeof__default = /*#__PURE__*/_interopDefaultLegacy(_typeof);

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
    var attrProperty = isFunction.isFunction(attrItem) ? attrItem(params) : attrItem;
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
    var tClass = isFunction.isFunction(rName) ? rName(params) : rName;
    if (isObject.isObject(tClass) && !(tClass instanceof Array)) {
      tClass[rowIndex] && (tClass = tClass[rowIndex]);
      var rowId = get.get(row, rowKey || "id");
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
    if (isFunction.isFunction(cls)) {
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
  if (_typeof__default["default"](mainAffixProps) === "object") return mainAffixProps;
  if (_typeof__default["default"](subAffixProps) === "object") return subAffixProps;
  return {};
}

exports.INNER_PRE_NAME = INNER_PRE_NAME;
exports.debounce = debounce;
exports.formatClassNames = formatClassNames;
exports.formatRowAttributes = formatRowAttributes;
exports.formatRowClassNames = formatRowClassNames;
exports.getAffixProps = getAffixProps;
exports.getCurrentRowByKey = getCurrentRowByKey;
exports.toString = toString;
//# sourceMappingURL=index.js.map
