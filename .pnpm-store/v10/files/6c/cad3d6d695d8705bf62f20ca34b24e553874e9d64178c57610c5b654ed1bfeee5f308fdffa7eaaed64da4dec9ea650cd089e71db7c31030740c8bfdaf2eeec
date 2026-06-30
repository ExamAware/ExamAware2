/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var tdesignIconsVueNext = require('tdesign-icons-vue-next');
var index$3 = require('../_chunks/dep-3565d523.js');
var index$1 = require('../_chunks/dep-47c460dd.js');
var index = require('../_chunks/dep-ecaaae91.js');
var index$2 = require('../_chunks/dep-31c76dc6.js');
require('@babel/runtime/helpers/slicedToArray');
require('../_chunks/dep-cc66acf1.js');
require('../_chunks/dep-953a77eb.js');
require('@babel/runtime/helpers/toConsumableArray');
var swiper_props = require('./props.js');
var swiper_swiperItem = require('./swiper-item.js');
require('@babel/runtime/helpers/typeof');
require('../_chunks/dep-4fa46641.js');
require('../_chunks/dep-0813861e.js');
require('../_chunks/dep-a55e8a08.js');
require('../_chunks/dep-b3b464e8.js');
require('../_chunks/dep-87589faa.js');
require('../_chunks/dep-05f89f0d.js');
require('../_chunks/dep-06276759.js');
require('../_chunks/dep-48f60c78.js');
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
require('../_chunks/dep-8abdfb41.js');
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

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !Vue.isVNode(s);
}
var defaultNavigation = {
  placement: "inside",
  showSlideBtn: "always",
  size: "medium",
  type: "bars"
};
var _Swiper = Vue.defineComponent({
  name: "TSwiper",
  props: swiper_props["default"],
  emits: ["update:current"],
  setup: function setup(props2, _ref) {
    var emit = _ref.emit;
    var prefix = index.usePrefixClass();
    var renderTNodeJSX = index$1.useTNodeJSX();
    var _useGlobalIcon = index$2.useGlobalIcon({
        ChevronLeftIcon: tdesignIconsVueNext.ChevronLeftIcon,
        ChevronRightIcon: tdesignIconsVueNext.ChevronRightIcon
      }),
      ChevronLeftIcon = _useGlobalIcon.ChevronLeftIcon,
      ChevronRightIcon = _useGlobalIcon.ChevronRightIcon;
    var swiperTimer = null;
    var swiperSwitchingTimer = 0;
    var isBeginToEnd = false;
    var isEndToBegin = false;
    var currentIndex = Vue.ref(props2.current || props2.defaultCurrent);
    var navActiveIndex = Vue.ref(props2.current || props2.defaultCurrent);
    var isHovering = Vue.ref(false);
    var isSwitching = Vue.ref(false);
    var showArrow = Vue.ref(false);
    var swiperWrap = Vue.ref();
    var getChildComponentByName = index$3.useChildComponentSlots();
    var swiperItemLength = Vue.ref(0);
    var navigationConfig = Vue.computed(function () {
      return _objectSpread(_objectSpread({}, defaultNavigation), Vue.isVNode(props2.navigation) ? {} : props2.navigation);
    });
    var isEnd = Vue.computed(function () {
      if (props2.type === "card") {
        return !props2.loop && currentIndex.value + 1 >= swiperItemLength.value;
      }
      return !props2.loop && currentIndex.value + 2 >= swiperItemLength.value;
    });
    var propsToUpdateSetTimer = Vue.computed(function () {
      return [props2.autoplay, currentIndex.value, props2.duration, props2.interval];
    });
    var swiperWrapClass = Vue.computed(function () {
      return _defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"]({}, "".concat(prefix.value, "-swiper__wrap"), true), "".concat(prefix.value, "-swiper--inside"), navigationConfig.value.placement === "inside"), "".concat(prefix.value, "-swiper--outside"), navigationConfig.value.placement === "outside"), "".concat(prefix.value, "-swiper--vertical"), props2.direction === "vertical"), "".concat(prefix.value, "-swiper--large"), navigationConfig.value.size === "large"), "".concat(prefix.value, "-swiper--small"), navigationConfig.value.size === "small");
    });
    var containerStyle = Vue.computed(function () {
      var offsetHeight = props2.height ? "".concat(props2.height, "px") : "".concat(getWrapAttribute("offsetHeight"), "px");
      if (props2.type === "card" || props2.animation === "fade") {
        return {
          height: offsetHeight
        };
      }
      if (props2.animation === "slide") {
        var style = {
          transition: isSwitching.value ? "transform ".concat(props2.duration / 1e3, "s ease") : ""
        };
        var active = currentIndex.value;
        if (swiperItemLength.value > 1) {
          active += 1;
          if (isBeginToEnd || isEndToBegin) {
            style.transition = "";
          }
        }
        if (props2.direction === "vertical") {
          style.height = offsetHeight;
          style.transform = "translate3d(0, -".concat(active * 100, "%, 0px)");
        } else {
          style.transform = "translate3d(-".concat(active * 100, "%, 0px, 0px)");
        }
        ["msTransform", "WebkitTransform"].forEach(function (key) {
          style[key] = style.transform;
        });
        return style;
      }
      return {};
    });
    var swiperItems = function swiperItems() {
      var swiperItemList = getChildComponentByName("SwiperItem");
      swiperItemLength.value = swiperItemList.length;
      var items = swiperItemList.map(function (swiperItem, index) {
        var _slot;
        var p = _objectSpread(_objectSpread({}, props2), swiperItem.props);
        return Vue.createVNode(swiper_swiperItem["default"], Vue.mergeProps({
          "index": index,
          "currentIndex": currentIndex.value,
          "isSwitching": isSwitching.value,
          "getWrapAttribute": getWrapAttribute,
          "swiperItemLength": swiperItemLength.value
        }, p), _isSlot(_slot = swiperItem.children["default"]()) ? _slot : {
          "default": function _default() {
            return [_slot];
          }
        });
      });
      if (props2.animation === "slide" && items.length > 1) {
        var first = Vue.cloneVNode(items[0], {
          key: "swiper-item-append-".concat(0)
        });
        var last = Vue.cloneVNode(items[items.length - 1], {
          key: "swiper-item-prepend-".concat(items.length - 1)
        });
        items.unshift(last);
        items.push(first);
      }
      return items;
    };
    var swiperTo = function swiperTo(index, context) {
      var _props2$onChange;
      var targetIndex = index % swiperItemLength.value;
      navActiveIndex.value = targetIndex;
      emit("update:current", targetIndex);
      (_props2$onChange = props2.onChange) === null || _props2$onChange === void 0 || _props2$onChange.call(props2, targetIndex, context);
      isSwitching.value = true;
      if (props2.animation === "slide" && swiperItemLength.value > 1 && props2.type !== "card") {
        targetIndex = index;
        isBeginToEnd = false;
        isEndToBegin = false;
        if (index >= swiperItemLength.value) {
          clearTimer();
          setTimeout(function () {
            isEndToBegin = true;
            currentIndex.value = 0;
          }, props2.duration);
        }
        if (currentIndex.value === 0) {
          if (swiperItemLength.value >= 2 && index === swiperItemLength.value - 1) {
            targetIndex = -1;
            navActiveIndex.value = swiperItemLength.value - 1;
            clearTimer();
            setTimeout(function () {
              isBeginToEnd = true;
              currentIndex.value = swiperItemLength.value - 1;
            }, props2.duration);
          }
        }
      }
      currentIndex.value = targetIndex;
    };
    var clearTimer = function clearTimer() {
      if (swiperTimer) {
        clearTimeout(swiperTimer);
        swiperTimer = null;
      }
    };
    var setTimer = function setTimer() {
      if (props2.autoplay && props2.interval > 0) {
        clearTimer();
        swiperTimer = setTimeout(function () {
          swiperTo(currentIndex.value + 1, {
            source: "autoplay"
          });
        }, currentIndex.value === 0 ? props2.interval - (props2.duration + 50) : props2.interval);
      }
    };
    var onMouseEnter = function onMouseEnter() {
      isHovering.value = true;
      if (props2.stopOnHover) {
        clearTimer();
      }
      if (navigationConfig.value.showSlideBtn === "hover") {
        showArrow.value = true;
      }
    };
    var onMouseLeave = function onMouseLeave() {
      isHovering.value = false;
      if (!isEnd.value) {
        setTimer();
      }
      if (navigationConfig.value.showSlideBtn === "hover") {
        showArrow.value = false;
      }
    };
    var onMouseEnterNavigationItem = function onMouseEnterNavigationItem(i) {
      if (props2.trigger === "hover") {
        swiperTo(i, {
          source: "hover"
        });
      }
    };
    var onClickNavigationItem = function onClickNavigationItem(i) {
      if (props2.trigger === "click") {
        swiperTo(i, {
          source: "click"
        });
      }
    };
    var goNext = function goNext(context) {
      if (isSwitching.value) return;
      if (props2.type === "card") {
        return swiperTo(currentIndex.value + 1 >= swiperItemLength.value ? 0 : currentIndex.value + 1, context);
      }
      return swiperTo(currentIndex.value + 1, context);
    };
    var goPrevious = function goPrevious(context) {
      if (isSwitching.value) return;
      if (currentIndex.value - 1 < 0) {
        if (props2.animation === "slide" && swiperItemLength.value === 2) {
          return swiperTo(0, context);
        }
        return swiperTo(swiperItemLength.value - 1, context);
      }
      return swiperTo(currentIndex.value - 1, context);
    };
    var getWrapAttribute = function getWrapAttribute(attr) {
      var _swiperWrap$value;
      return (_swiperWrap$value = swiperWrap.value) === null || _swiperWrap$value === void 0 || (_swiperWrap$value = _swiperWrap$value.parentNode) === null || _swiperWrap$value === void 0 ? void 0 : _swiperWrap$value[attr];
    };
    var renderPagination = function renderPagination() {
      var fractionIndex = currentIndex.value + 1 > swiperItemLength.value ? 1 : currentIndex.value + 1;
      return Vue.createVNode("div", {
        "class": "".concat(prefix.value, "-swiper__arrow")
      }, [Vue.createVNode("div", {
        "class": "".concat(prefix.value, "-swiper__arrow-left"),
        "onClick": function onClick() {
          return goPrevious({
            source: "click"
          });
        }
      }, [Vue.createVNode(ChevronLeftIcon, null, null)]), Vue.createVNode("div", {
        "class": "".concat(prefix.value, "-swiper__navigation-text-fraction")
      }, [fractionIndex, "/", swiperItemLength.value]), Vue.createVNode("div", {
        "class": "".concat(prefix.value, "-swiper__arrow-right"),
        "onClick": function onClick() {
          return goNext({
            source: "click"
          });
        }
      }, [Vue.createVNode(ChevronRightIcon, null, null)])]);
    };
    var renderArrow = function renderArrow() {
      if (!showArrow.value) return null;
      return Vue.createVNode("div", {
        "class": ["".concat(prefix.value, "-swiper__arrow"), "".concat(prefix.value, "-swiper__arrow--default")]
      }, [Vue.createVNode("div", {
        "class": "".concat(prefix.value, "-swiper__arrow-left"),
        "onClick": function onClick() {
          return goPrevious({
            source: "click"
          });
        }
      }, [Vue.createVNode(ChevronLeftIcon, null, null)]), Vue.createVNode("div", {
        "class": "".concat(prefix.value, "-swiper__arrow-right"),
        "onClick": function onClick() {
          return goNext({
            source: "click"
          });
        }
      }, [Vue.createVNode(ChevronRightIcon, null, null)])]);
    };
    var renderNavigation = function renderNavigation() {
      if (Vue.isVNode(props2.navigation)) return props2.navigation;
      var navigationSlot = renderTNodeJSX("navigation");
      if (navigationSlot && Vue.isVNode(navigationSlot === null || navigationSlot === void 0 ? void 0 : navigationSlot[0])) return navigationSlot;
      if (navigationConfig.value.type === "fraction") {
        return Vue.createVNode("div", {
          "class": ["".concat(prefix.value, "-swiper__navigation"), "".concat(prefix.value, "-swiper__navigation--fraction")]
        }, [renderPagination()]);
      }
      var swiperItemList = getChildComponentByName("SwiperItem");
      return Vue.createVNode("ul", {
        "class": ["".concat(prefix.value, "-swiper__navigation"), _defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"]({}, "".concat(prefix.value, "-swiper__navigation-bars"), navigationConfig.value.type === "bars"), "".concat(prefix.value, "-swiper__navigation-dots"), navigationConfig.value.type === "dots"), "".concat(prefix.value, "-swiper__navigation-dots-bar"), navigationConfig.value.type === "dots-bar")]
      }, [swiperItemList.map(function (_, i) {
        return Vue.createVNode("li", {
          "key": i,
          "class": ["".concat(prefix.value, "-swiper__navigation-item"), _defineProperty__default["default"]({}, "".concat(prefix.value, "-is-active"), i === navActiveIndex.value)],
          "onMouseenter": function onMouseenter() {
            return onMouseEnterNavigationItem(i);
          },
          "onClick": function onClick() {
            return onClickNavigationItem(i);
          }
        }, [Vue.createVNode("span", null, null)]);
      })]);
    };
    var renderSwiperItems = function renderSwiperItems() {
      return swiperItems();
    };
    Vue.watch(function () {
      return propsToUpdateSetTimer.value;
    }, function () {
      setTimer();
    });
    Vue.watch(function () {
      return isSwitching.value;
    }, function () {
      if (isSwitching.value) {
        if (swiperSwitchingTimer) clearTimeout(swiperSwitchingTimer);
        swiperSwitchingTimer = setTimeout(function () {
          isSwitching.value = false;
          swiperSwitchingTimer = 0;
          if (isEnd.value) {
            clearTimer();
          }
        }, props2.duration + 50);
      }
    });
    Vue.watch(function () {
      return props2.current;
    }, function () {
      swiperTo(props2.current, {
        source: "autoplay"
      });
    });
    Vue.onMounted(function () {
      setTimer();
      showArrow.value = navigationConfig.value.showSlideBtn === "always";
    });
    return function () {
      return Vue.createVNode("div", {
        "class": ["".concat(prefix.value, "-swiper")],
        "onMouseenter": onMouseEnter,
        "onMouseleave": onMouseLeave,
        "ref": swiperWrap
      }, [Vue.createVNode("div", {
        "class": swiperWrapClass.value
      }, [Vue.createVNode("div", {
        "class": ["".concat(prefix.value, "-swiper__content"), _defineProperty__default["default"](_defineProperty__default["default"]({}, "".concat(prefix.value, "-swiper-fade"), props2.animation === "fade"), "".concat(prefix.value, "-swiper-card"), props2.type === "card")]
      }, [Vue.createVNode("div", {
        "class": "".concat(prefix.value, "-swiper__container"),
        "style": containerStyle.value
      }, [renderSwiperItems()])]), renderNavigation(), renderArrow()])]);
    };
  }
});

exports["default"] = _Swiper;
//# sourceMappingURL=swiper.js.map
