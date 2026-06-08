/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { _ as _toConsumableArray } from '../../_chunks/dep-00b4e06a.mjs';
import { _ as _defineProperty } from '../../_chunks/dep-1dacc319.mjs';
import '../../_chunks/dep-9f459d8b.mjs';
import '../../_chunks/dep-257428bc.mjs';

function getFakeArrowIconClass(prefix, STATUS, cascaderContext) {
  var disabled = cascaderContext.disabled;
  return ["".concat(prefix, "-cascader__icon"), _defineProperty({}, STATUS.disabled, disabled)];
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
  return [_defineProperty(_defineProperty(_defineProperty({}, STATUS.selected, !isDisabled && isSelected), STATUS.expanded, !isDisabled && expandedActive), STATUS.disabled, isDisabled)];
}
function getCascaderItemClass(prefix, node, SIZE, STATUS, cascaderContext) {
  var size = cascaderContext.size,
    isParentFilterable = cascaderContext.isParentFilterable;
  return ["".concat(prefix, "-cascader__item")].concat(_toConsumableArray(getNodeStatusClass(node, STATUS, cascaderContext)), [SIZE[size], _defineProperty(_defineProperty({}, "".concat(prefix, "-cascader__item--with-icon"), !!node.children), "".concat(prefix, "-cascader__item--leaf"), node.isLeaf() || isParentFilterable)]);
}
function getCascaderItemIconClass(prefix, node, STATUS, cascaderContext) {
  return ["".concat(prefix, "-cascader__item-icon"), "".concat(prefix, "-icon")].concat(_toConsumableArray(getNodeStatusClass(node, STATUS, cascaderContext)));
}

export { getCascaderItemClass, getCascaderItemIconClass, getFakeArrowIconClass, getNodeStatusClass };
//# sourceMappingURL=className.mjs.map
