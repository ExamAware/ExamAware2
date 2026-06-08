/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
var badge_props = require('./props.js');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../_chunks/dep-953a77eb.js');
var index = require('../_chunks/dep-47c460dd.js');
var index$1 = require('../_chunks/dep-ecaaae91.js');
require('../_chunks/dep-cc66acf1.js');
require('../_chunks/dep-8abdfb41.js');
require('../_chunks/dep-06276759.js');
require('../_chunks/dep-48f60c78.js');
require('../_chunks/dep-b3b464e8.js');
require('../_chunks/dep-0813861e.js');
require('../_chunks/dep-a55e8a08.js');
require('../_chunks/dep-87589faa.js');
require('../_chunks/dep-05f89f0d.js');
require('../_chunks/dep-4fa46641.js');
require('../_chunks/dep-422dd97f.js');
require('../_chunks/dep-71fa6bfc.js');
require('../_chunks/dep-80a478d7.js');
require('../_chunks/dep-427dabac.js');
require('../_chunks/dep-72c4cc44.js');
require('../_chunks/dep-ee355a9a.js');
require('../_chunks/dep-23f77e26.js');
require('../config-provider/hooks/useConfig.js');
require('../_chunks/dep-5d7e2375.js');
require('../_chunks/dep-94a7dc2d.js');
require('dayjs');
require('../_chunks/dep-92e23f17.js');
require('../_chunks/dep-0ff616fe.js');
require('../_chunks/dep-5f52cd42.js');
require('../_chunks/dep-f57bcb19.js');
require('../_chunks/dep-dc4bbc14.js');
require('../_chunks/dep-e27ea667.js');
require('../_chunks/dep-165ca38a.js');
require('../_chunks/dep-32412d92.js');
require('../_chunks/dep-a8a3d718.js');
require('../_chunks/dep-54e566d9.js');
require('../_chunks/dep-591a72de.js');
require('../_chunks/dep-8adeee89.js');
require('../_chunks/dep-4d2ef282.js');
require('../_chunks/dep-929933ce.js');
require('../_chunks/dep-6b1f0ef8.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);
var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);

var _Badge = Vue.defineComponent({
  name: "TBadge",
  inheritAttrs: false,
  props: badge_props["default"],
  setup: function setup(props2, _ref) {
    var attrs = _ref.attrs;
    var renderContent = index.useContent();
    var renderTNodeJSX = index.useTNodeJSX();
    var displayCount = Vue.computed(function () {
      var count = renderTNodeJSX("count");
      if (Number.isNaN(Number(count))) {
        return count;
      }
      count = Number(props2.count);
      return count > props2.maxCount ? "".concat(props2.maxCount, "+") : count;
    });
    var getOffset = function getOffset() {
      if (!props2.offset) return {};
      var _props2$offset = _slicedToArray__default["default"](props2.offset, 2),
        xOffset = _props2$offset[0],
        yOffset = _props2$offset[1];
      xOffset = Number.isNaN(Number(xOffset)) ? xOffset : "".concat(xOffset, "px");
      yOffset = Number.isNaN(Number(yOffset)) ? yOffset : "".concat(yOffset, "px");
      return {
        xOffset: xOffset,
        yOffset: yOffset
      };
    };
    var classPrefix = index$1.usePrefixClass();
    var COMPONENT_NAME = index$1.usePrefixClass("badge");
    var isHidden = Vue.computed(function () {
      return !props2.showZero && (displayCount.value === 0 || displayCount.value === "0");
    });
    var badgeClassNames = Vue.computed(function () {
      return [_defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"]({}, "".concat(COMPONENT_NAME.value, "--dot"), !!props2.dot), "".concat(COMPONENT_NAME.value, "--circle"), !props2.dot && props2.shape === "circle"), "".concat(COMPONENT_NAME.value, "--round"), !props2.dot && props2.shape === "round"), "".concat(classPrefix.value, "-size-s"), props2.size === "small")];
    });
    var inlineStyle = Vue.computed(function () {
      var _getOffset = getOffset(),
        xOffset = _getOffset.xOffset,
        yOffset = _getOffset.yOffset;
      return {
        background: props2.color,
        right: xOffset,
        top: yOffset
      };
    });
    return function () {
      return Vue.createVNode("div", Vue.mergeProps({
        "class": COMPONENT_NAME.value
      }, attrs), [renderContent("default", "content"), isHidden.value ? null : Vue.createVNode("sup", {
        "class": badgeClassNames.value,
        "style": inlineStyle.value
      }, [props2.dot ? null : displayCount.value])]);
    };
  }
});

exports["default"] = _Badge;
//# sourceMappingURL=badge.js.map
