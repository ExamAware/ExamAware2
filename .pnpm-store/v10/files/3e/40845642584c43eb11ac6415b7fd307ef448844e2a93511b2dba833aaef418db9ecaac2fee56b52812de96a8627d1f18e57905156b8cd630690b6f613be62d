/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { _ as _defineProperty } from '../../_chunks/dep-1dacc319.mjs';
import { _ as _toConsumableArray } from '../../_chunks/dep-00b4e06a.mjs';
import { toRefs, computed } from 'vue';
import '../../_chunks/dep-6d2705e1.mjs';
import { l as log } from '../../_chunks/dep-97ecacde.mjs';
import '../../_chunks/dep-257428bc.mjs';
import '../../_chunks/dep-9f459d8b.mjs';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function valueIsZeroOrUndefined(val) {
  return val === 0 || val === void 0;
}
var useEllipsis = function useEllipsis(props, getBreadcrumbItems, ellipsisContent) {
  var _toRefs = toRefs(props),
    maxItems = _toRefs.maxItems,
    itemsBeforeCollapse = _toRefs.itemsBeforeCollapse,
    itemsAfterCollapse = _toRefs.itemsAfterCollapse;
  var shouldShowEllipsis = computed(function () {
    var _maxItems$value;
    var items = getBreadcrumbItems.value;
    var currentMaxItems = (_maxItems$value = maxItems.value) !== null && _maxItems$value !== void 0 ? _maxItems$value : 0;
    var totalItems = items.length;
    var itemsCollapseSum = itemsBeforeCollapse.value + itemsAfterCollapse.value;
    if (currentMaxItems > 0 && (valueIsZeroOrUndefined(itemsBeforeCollapse.value) || valueIsZeroOrUndefined(itemsAfterCollapse.value))) {
      log.error("Breadcrumb", "\u9700\u8981\u8BBE\u7F6E itemsBeforeCollapse \u548C itemsAfterCollapse \u5C5E\u6027\u6765\u63A7\u5236\u7701\u7565\u53F7\u524D\u540E\u7684\u663E\u793A\u9879\u6570\u3002");
      return false;
    }
    if (currentMaxItems <= 0 || totalItems <= currentMaxItems || itemsCollapseSum >= totalItems) {
      return false;
    }
    return true;
  });
  var getDisplayItems = computed(function () {
    var items = getBreadcrumbItems.value;
    var showEllipsis = shouldShowEllipsis.value;
    if (!showEllipsis) {
      return items;
    }
    var totalItems = items.length;
    var beforeItems = items.slice(0, itemsBeforeCollapse.value);
    var afterItems = items.slice(totalItems - itemsAfterCollapse.value, totalItems);
    return [].concat(_toConsumableArray(beforeItems), [{
      content: ellipsisContent,
      disabled: true,
      isEllipsisItem: true
    }], _toConsumableArray(afterItems));
  });
  var getEllipsisItems = computed(function () {
    var items = getBreadcrumbItems.value;
    if (!shouldShowEllipsis.value) {
      return [];
    }
    var sliceItems = items.slice(itemsBeforeCollapse.value, items.length - itemsAfterCollapse.value);
    return sliceItems.map(function (item, index) {
      return _objectSpread(_objectSpread({}, item), {}, {
        isLast: index === sliceItems.length - 1
      });
    });
  });
  return {
    getDisplayItems: getDisplayItems,
    getEllipsisItems: getEllipsisItems
  };
};

export { useEllipsis };
//# sourceMappingURL=useEllipsis.mjs.map
