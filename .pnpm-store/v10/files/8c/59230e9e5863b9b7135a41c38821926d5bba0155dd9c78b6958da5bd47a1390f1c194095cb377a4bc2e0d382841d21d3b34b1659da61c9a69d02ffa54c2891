/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var Vue = require('vue');
var index = require('../../_chunks/dep-3565d523.js');
require('../../_chunks/dep-953a77eb.js');
require('../../config-provider/hooks/useConfig.js');
require('@babel/runtime/helpers/slicedToArray');
require('../../_chunks/dep-cc66acf1.js');
require('@babel/runtime/helpers/toConsumableArray');
var isArray = require('../../_chunks/dep-87589faa.js');
var isString = require('../../_chunks/dep-a55e8a08.js');
require('@babel/runtime/helpers/typeof');
require('../../_chunks/dep-4fa46641.js');
require('../../_chunks/dep-0813861e.js');
require('../../_chunks/dep-8abdfb41.js');
require('../../_chunks/dep-5d7e2375.js');
require('../../_chunks/dep-94a7dc2d.js');
require('dayjs');
require('../../_chunks/dep-92e23f17.js');
require('../../_chunks/dep-0ff616fe.js');
require('../../_chunks/dep-5f52cd42.js');
require('../../_chunks/dep-48f60c78.js');
require('../../_chunks/dep-b3b464e8.js');
require('../../_chunks/dep-f57bcb19.js');
require('../../_chunks/dep-dc4bbc14.js');
require('../../_chunks/dep-05f89f0d.js');
require('../../_chunks/dep-e27ea667.js');
require('../../_chunks/dep-165ca38a.js');
require('../../_chunks/dep-32412d92.js');
require('../../_chunks/dep-a8a3d718.js');
require('../../_chunks/dep-54e566d9.js');
require('../../_chunks/dep-591a72de.js');
require('../../_chunks/dep-8adeee89.js');
require('../../_chunks/dep-4d2ef282.js');
require('../../_chunks/dep-929933ce.js');
require('../../_chunks/dep-6b1f0ef8.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var useBreadcrumbOptions = function useBreadcrumbOptions(props) {
  var getChildComponentSlots = index.useChildComponentSlots();
  var breadcrumbOptions = Vue.computed(function () {
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
    if (isArray.isArray(itemsSlots)) {
      itemsSlots.forEach(function (child) {
        var getSlotOrProp = function getSlotOrProp(slotName, propName) {
          var _child$props;
          if (child !== null && child !== void 0 && child.children) {
            var _children$slotName;
            var children = child.children;
            var slotContent = (_children$slotName = children[slotName]) === null || _children$slotName === void 0 ? void 0 : _children$slotName.call(children);
            if (slotContent) {
              if (slotName === "default" && isArray.isArray(slotContent)) {
                var textContent = slotContent.filter(function (item) {
                  return Vue.isVNode(item) && isString.isString(item === null || item === void 0 ? void 0 : item.children);
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

exports.useBreadcrumbOptions = useBreadcrumbOptions;
//# sourceMappingURL=useBreadcrumbOptions.js.map
