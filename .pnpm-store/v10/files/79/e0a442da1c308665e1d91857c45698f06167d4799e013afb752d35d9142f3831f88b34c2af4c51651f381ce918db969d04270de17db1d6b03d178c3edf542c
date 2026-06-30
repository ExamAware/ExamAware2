/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { computed, isVNode } from 'vue';
import { isArray, isString } from 'lodash-es';
import { b as useChildComponentSlots } from '../../_chunks/dep-e3ce8c8f.js';
import '../../_chunks/dep-fe23be6e.js';
import '../../config-provider/hooks/useConfig.js';
import '@babel/runtime/helpers/slicedToArray';
import '../../_chunks/dep-880d05b9.js';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../../_chunks/dep-fb805f69.js';
import '../../_chunks/dep-81b01cae.js';
import '../../config-provider/utils/context.js';
import '../../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';

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
//# sourceMappingURL=useBreadcrumbOptions.js.map
