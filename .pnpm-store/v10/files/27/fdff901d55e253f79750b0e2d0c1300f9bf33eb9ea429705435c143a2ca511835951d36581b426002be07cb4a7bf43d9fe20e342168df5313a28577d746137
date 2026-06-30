/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { _ as _defineProperty } from '../../_chunks/dep-1dacc319.mjs';
import { computed, isVNode } from 'vue';
import { isArray, isString } from 'lodash-es';
import { h as useChildComponentSlots } from '../../_chunks/dep-7673347f.mjs';
import '../../_chunks/dep-257428bc.mjs';
import '../../_chunks/dep-00b4e06a.mjs';
import '../../_chunks/dep-9f459d8b.mjs';
import '../../_chunks/dep-51a43106.mjs';
import '../../_chunks/dep-fe644854.mjs';
import '../../config-provider/hooks/useConfig.mjs';
import '../../config-provider/utils/context.mjs';
import '../../_chunks/dep-a4c09318.mjs';
import '../../_chunks/dep-ffb85102.mjs';
import '../../_chunks/dep-ad588525.mjs';
import '../../_chunks/dep-9003fde5.mjs';
import '../../_chunks/dep-22ebd6af.mjs';
import '../../_chunks/dep-cdd448ec.mjs';
import '../../_chunks/dep-97ecacde.mjs';
import '../../_chunks/dep-84fd47b3.mjs';
import '../../_chunks/dep-d36c4a3f.mjs';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var useBreadcrumbOptions = function useBreadcrumbOptions(props) {
  var getChildComponentSlots = useChildComponentSlots();
  var breadcrumbOptions = computed(function () {
    var _props$options;
    var breadcrumbItems = [];
    var currentIndex = 0;
    if ((_props$options = props.options) !== null && _props$options !== void 0 && _props$options.length) {
      props.options.forEach(function (option) {
        breadcrumbItems.push(_objectSpread(_objectSpread({}, option), {}, {
          index: currentIndex++
        }));
      });
    }
    var itemsSlots = getChildComponentSlots("TBreadcrumbItem");
    if (isArray(itemsSlots)) {
      itemsSlots.forEach(function (child) {
        var getSlotOrProp = function getSlotOrProp(slotName, propName) {
          var _child$props;
          if (child !== null && child !== void 0 && child.children) {
            var _children$slotName;
            var children = child.children;
            var slotContent = (_children$slotName = children[slotName]) === null || _children$slotName === void 0 ? void 0 : _children$slotName.call(children);
            if (slotContent) {
              if (slotName === "default" && isArray(slotContent)) {
                var textContent = slotContent.filter(function (item) {
                  return isVNode(item) && isString(item === null || item === void 0 ? void 0 : item.children);
                }).map(function (item) {
                  return item === null || item === void 0 ? void 0 : item.children;
                }).join("");
                return textContent || slotContent;
              }
              return slotContent;
            }
          }
          return (_child$props = child.props) === null || _child$props === void 0 ? void 0 : _child$props[propName];
        };
        breadcrumbItems.push(_objectSpread(_objectSpread({}, child.props), {}, {
          content: getSlotOrProp("default", "content"),
          icon: function icon() {
            return getSlotOrProp("icon", "icon");
          },
          index: currentIndex++
        }));
      });
    }
    return breadcrumbItems;
  });
  return {
    breadcrumbOptions: breadcrumbOptions
  };
};

export { useBreadcrumbOptions };
//# sourceMappingURL=useBreadcrumbOptions.mjs.map
