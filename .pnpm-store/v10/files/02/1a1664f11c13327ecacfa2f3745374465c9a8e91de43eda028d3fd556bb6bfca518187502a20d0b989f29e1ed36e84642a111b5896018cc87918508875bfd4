/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var swiper_props = require('./props.js');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../_chunks/dep-953a77eb.js');
var index = require('../_chunks/dep-ecaaae91.js');
require('@babel/runtime/helpers/slicedToArray');
require('../_chunks/dep-cc66acf1.js');
require('../_chunks/dep-8abdfb41.js');
require('../config-provider/hooks/useConfig.js');
require('../_chunks/dep-5d7e2375.js');
require('../_chunks/dep-94a7dc2d.js');
require('dayjs');
require('../_chunks/dep-92e23f17.js');
require('../_chunks/dep-0ff616fe.js');
require('../_chunks/dep-5f52cd42.js');
require('../_chunks/dep-48f60c78.js');
require('../_chunks/dep-b3b464e8.js');
require('../_chunks/dep-0813861e.js');
require('../_chunks/dep-f57bcb19.js');
require('../_chunks/dep-dc4bbc14.js');
require('../_chunks/dep-05f89f0d.js');
require('../_chunks/dep-87589faa.js');
require('../_chunks/dep-e27ea667.js');
require('../_chunks/dep-165ca38a.js');
require('../_chunks/dep-32412d92.js');
require('../_chunks/dep-a8a3d718.js');
require('../_chunks/dep-54e566d9.js');
require('../_chunks/dep-591a72de.js');
require('../_chunks/dep-a55e8a08.js');
require('../_chunks/dep-8adeee89.js');
require('../_chunks/dep-4d2ef282.js');
require('../_chunks/dep-929933ce.js');
require('../_chunks/dep-6b1f0ef8.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var swiperItemProps = {
  index: {
    type: Number
  },
  currentIndex: {
    type: Number
  },
  isSwitching: {
    type: Boolean,
    "default": false
  },
  getWrapAttribute: {
    type: Function
  },
  swiperItemLength: {
    type: Number,
    "default": 0
  }
};
var itemWidth = 0.415;
var _SwiperItem = Vue.defineComponent({
  name: "TSwiperItem",
  props: _objectSpread(_objectSpread({}, swiper_props["default"]), swiperItemProps),
  setup: function setup(props2, _ref) {
    var slots = _ref.slots;
    var prefix = index.usePrefixClass();
    var active = Vue.computed(function () {
      return props2.index === props2.currentIndex;
    });
    var disposeIndex = Vue.computed(function () {
      if (props2.type !== "card") return 0;
      if (props2.currentIndex === 0 && props2.index === props2.swiperItemLength - 1) {
        return -1;
      }
      if (props2.currentIndex === props2.swiperItemLength - 1 && props2.index === 0) {
        return props2.swiperItemLength;
      }
      if (props2.index < props2.currentIndex - 1 && props2.currentIndex - props2.index >= props2.swiperItemLength / 2) {
        return props2.swiperItemLength + 1;
      }
      if (props2.index > props2.currentIndex + 1 && props2.index - props2.currentIndex >= props2.swiperItemLength / 2) {
        return -2;
      }
      return props2.index;
    });
    var translateX = Vue.computed(function () {
      if (props2.type !== "card") return 0;
      var wrapWidth = props2.getWrapAttribute("offsetWidth") || 0;
      var translateIndex = !active.value && props2.swiperItemLength > 2 ? disposeIndex.value : props2.index;
      var inStage = Math.abs(translateIndex - props2.currentIndex) <= 1;
      if (inStage) {
        return wrapWidth * ((translateIndex - props2.currentIndex) * (1 - itemWidth * props2.cardScale) - itemWidth + 1) / 2;
      }
      if (translateIndex < props2.currentIndex) {
        return -itemWidth * (1 + props2.cardScale) * wrapWidth / 2;
      }
      return (2 + itemWidth * (props2.cardScale - 1)) * wrapWidth / 2;
    });
    var zIndex = Vue.computed(function () {
      if (props2.type !== "card") return 0;
      var translateIndex = !active.value && props2.swiperItemLength > 2 ? disposeIndex.value : props2.index;
      var isActivity = translateIndex === props2.currentIndex;
      var inStage = Math.round(Math.abs(translateIndex - props2.currentIndex)) <= 1;
      if (isActivity) {
        return 2;
      }
      if (inStage) {
        return 1;
      }
      return 0;
    });
    var itemStyle = Vue.computed(function () {
      if (props2.animation === "fade") {
        return {
          opacity: active.value ? 1 : 0,
          transition: props2.isSwitching ? "opacity ".concat(props2.duration / 1e3, "s") : "",
          zIndex: active.value ? 1 : 0
        };
      }
      if (props2.type === "card") {
        var translateIndex = !active.value && props2.swiperItemLength > 2 ? disposeIndex.value : props2.index;
        var isActivity = translateIndex === props2.currentIndex;
        return {
          transform: "translateX(".concat(translateX.value, "px) scale(").concat(isActivity ? 1 : props2.cardScale, ")"),
          transition: "transform ".concat(props2.duration / 1e3, "s ease"),
          zIndex: zIndex.value
        };
      }
      return {};
    });
    return function () {
      var _slots$default;
      return Vue.createVNode("div", {
        "class": ["".concat(prefix.value, "-swiper__container__item"), _defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"]({}, "".concat(prefix.value, "-swiper__card"), props2.type === "card"), "".concat(prefix.value, "-is-active"), props2.type === "card" && active.value), "".concat(prefix.value, "-swiper__fade"), props2.animation === "fade")],
        "style": itemStyle.value
      }, [((_slots$default = slots["default"]) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots, {})) || []]);
    };
  }
});

exports["default"] = _SwiperItem;
//# sourceMappingURL=swiper-item.js.map
