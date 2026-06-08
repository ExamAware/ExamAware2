/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _toConsumableArray = require('@babel/runtime/helpers/toConsumableArray');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _toConsumableArray__default = /*#__PURE__*/_interopDefaultLegacy(_toConsumableArray);
var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

function getFakeArrowIconClass(prefix, STATUS, cascaderContext) {
  var disabled = cascaderContext.disabled;
  return ["".concat(prefix, "-cascader__icon"), _defineProperty__default["default"]({}, STATUS.disabled, disabled)];
}
function getNodeStatusClass(node, STATUS, cascaderContext) {
  var checkStrictly = cascaderContext.checkStrictly,
    multiple = cascaderContext.multiple,
    value = cascaderContext.value,
    max = cascaderContext.max,
    isParentFilterable = cascaderContext.isParentFilterable;
  var expandedActive = !checkStrictly && node.expanded && (multiple ? !node.isLeaf() : true) || checkStrictly && node.expanded && !isParentFilterable;
  var isLeaf = node.isLeaf();
  var isDisabled = node.disabled || multiple && value.length >= max && max !== 0;
  var isSelected = node.checked || multiple && !checkStrictly && node.expanded && !isLeaf;
  if (!multiple && !checkStrictly && !isLeaf) {
    isSelected = node.expanded;
  }
  return [_defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"]({}, STATUS.selected, !isDisabled && isSelected), STATUS.expanded, !isDisabled && expandedActive), STATUS.disabled, isDisabled)];
}
function getCascaderItemClass(prefix, node, SIZE, STATUS, cascaderContext) {
  var size = cascaderContext.size,
    isParentFilterable = cascaderContext.isParentFilterable;
  return ["".concat(prefix, "-cascader__item")].concat(_toConsumableArray__default["default"](getNodeStatusClass(node, STATUS, cascaderContext)), [SIZE[size], _defineProperty__default["default"](_defineProperty__default["default"]({}, "".concat(prefix, "-cascader__item--with-icon"), !!node.children), "".concat(prefix, "-cascader__item--leaf"), node.isLeaf() || isParentFilterable)]);
}
function getCascaderItemIconClass(prefix, node, STATUS, cascaderContext) {
  return ["".concat(prefix, "-cascader__item-icon"), "".concat(prefix, "-icon")].concat(_toConsumableArray__default["default"](getNodeStatusClass(node, STATUS, cascaderContext)));
}

exports.getCascaderItemClass = getCascaderItemClass;
exports.getCascaderItemIconClass = getCascaderItemIconClass;
exports.getFakeArrowIconClass = getFakeArrowIconClass;
exports.getNodeStatusClass = getNodeStatusClass;
//# sourceMappingURL=className.js.map
