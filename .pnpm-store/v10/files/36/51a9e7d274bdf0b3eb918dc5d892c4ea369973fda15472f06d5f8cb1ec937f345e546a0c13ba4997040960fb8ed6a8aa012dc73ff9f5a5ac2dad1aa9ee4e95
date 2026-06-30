/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, computed, createVNode } from 'vue';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import props from './props.js';
import 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-fe23be6e.js';
import { u as usePrefixClass } from '../_chunks/dep-9e6d8a78.js';
import '@babel/runtime/helpers/slicedToArray';
import '../_chunks/dep-880d05b9.js';
import '../_chunks/dep-81b01cae.js';
import '../config-provider/hooks/useConfig.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
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
var _SwiperItem = defineComponent({
  name: "TSwiperItem",
  props: _objectSpread(_objectSpread({}, props), swiperItemProps),
  setup: function setup(props2, _ref) {
    var slots = _ref.slots;
    var prefix = usePrefixClass();
    var active = computed(function () {
      return props2.index === props2.currentIndex;
    });
    var disposeIndex = computed(function () {
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
    var translateX = computed(function () {
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
    var zIndex = computed(function () {
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
    var itemStyle = computed(function () {
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
      return createVNode("div", {
        "class": ["".concat(prefix.value, "-swiper__container__item"), _defineProperty(_defineProperty(_defineProperty({}, "".concat(prefix.value, "-swiper__card"), props2.type === "card"), "".concat(prefix.value, "-is-active"), props2.type === "card" && active.value), "".concat(prefix.value, "-swiper__fade"), props2.animation === "fade")],
        "style": itemStyle.value
      }, [((_slots$default = slots["default"]) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots, {})) || []]);
    };
  }
});

export { _SwiperItem as default };
//# sourceMappingURL=swiper-item.js.map
