/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { isVNode, defineComponent, ref, computed, createVNode, mergeProps, cloneVNode, watch, onMounted } from 'vue';
import { _ as _defineProperty } from '../_chunks/dep-1dacc319.mjs';
import { ChevronLeftIcon, ChevronRightIcon } from 'tdesign-icons-vue-next';
import { u as usePrefixClass, a as useTNodeJSX, i as useGlobalIcon, h as useChildComponentSlots } from '../_chunks/dep-7673347f.mjs';
import props from './props.mjs';
import _SwiperItem from './swiper-item.mjs';
import '../_chunks/dep-257428bc.mjs';
import 'lodash-es';
import '../_chunks/dep-00b4e06a.mjs';
import '../_chunks/dep-9f459d8b.mjs';
import '../_chunks/dep-51a43106.mjs';
import '../_chunks/dep-fe644854.mjs';
import '../config-provider/hooks/useConfig.mjs';
import '../config-provider/utils/context.mjs';
import '../_chunks/dep-a4c09318.mjs';
import '../_chunks/dep-ffb85102.mjs';
import '../_chunks/dep-ad588525.mjs';
import '../_chunks/dep-9003fde5.mjs';
import '../_chunks/dep-22ebd6af.mjs';
import '../_chunks/dep-cdd448ec.mjs';
import '../_chunks/dep-97ecacde.mjs';
import '../_chunks/dep-84fd47b3.mjs';
import '../_chunks/dep-d36c4a3f.mjs';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !isVNode(s);
}
var defaultNavigation = {
  placement: "inside",
  showSlideBtn: "always",
  size: "medium",
  type: "bars"
};
var _Swiper = defineComponent({
  name: "TSwiper",
  props: props,
  emits: ["update:current"],
  setup: function setup(props2, _ref) {
    var emit = _ref.emit;
    var prefix = usePrefixClass();
    var renderTNodeJSX = useTNodeJSX();
    var _useGlobalIcon = useGlobalIcon({
        ChevronLeftIcon: ChevronLeftIcon,
        ChevronRightIcon: ChevronRightIcon
      }),
      ChevronLeftIcon$1 = _useGlobalIcon.ChevronLeftIcon,
      ChevronRightIcon$1 = _useGlobalIcon.ChevronRightIcon;
    var swiperTimer = null;
    var swiperSwitchingTimer = 0;
    var isBeginToEnd = false;
    var isEndToBegin = false;
    var currentIndex = ref(props2.current || props2.defaultCurrent);
    var navActiveIndex = ref(props2.current || props2.defaultCurrent);
    var isHovering = ref(false);
    var isSwitching = ref(false);
    var showArrow = ref(false);
    var swiperWrap = ref();
    var getChildComponentByName = useChildComponentSlots();
    var swiperItemLength = ref(0);
    var navigationConfig = computed(function () {
      return _objectSpread(_objectSpread({}, defaultNavigation), isVNode(props2.navigation) ? {} : props2.navigation);
    });
    var isEnd = computed(function () {
      if (props2.type === "card") {
        return !props2.loop && currentIndex.value + 1 >= swiperItemLength.value;
      }
      return !props2.loop && currentIndex.value + 2 >= swiperItemLength.value;
    });
    var propsToUpdateSetTimer = computed(function () {
      return [props2.autoplay, currentIndex.value, props2.duration, props2.interval];
    });
    var swiperWrapClass = computed(function () {
      return _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(prefix.value, "-swiper__wrap"), true), "".concat(prefix.value, "-swiper--inside"), navigationConfig.value.placement === "inside"), "".concat(prefix.value, "-swiper--outside"), navigationConfig.value.placement === "outside"), "".concat(prefix.value, "-swiper--vertical"), props2.direction === "vertical"), "".concat(prefix.value, "-swiper--large"), navigationConfig.value.size === "large"), "".concat(prefix.value, "-swiper--small"), navigationConfig.value.size === "small");
    });
    var containerStyle = computed(function () {
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
        return createVNode(_SwiperItem, mergeProps({
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
        var first = cloneVNode(items[0], {
          key: "swiper-item-append-".concat(0)
        });
        var last = cloneVNode(items[items.length - 1], {
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
      return createVNode("div", {
        "class": "".concat(prefix.value, "-swiper__arrow")
      }, [createVNode("div", {
        "class": "".concat(prefix.value, "-swiper__arrow-left"),
        "onClick": function onClick() {
          return goPrevious({
            source: "click"
          });
        }
      }, [createVNode(ChevronLeftIcon$1, null, null)]), createVNode("div", {
        "class": "".concat(prefix.value, "-swiper__navigation-text-fraction")
      }, [fractionIndex, "/", swiperItemLength.value]), createVNode("div", {
        "class": "".concat(prefix.value, "-swiper__arrow-right"),
        "onClick": function onClick() {
          return goNext({
            source: "click"
          });
        }
      }, [createVNode(ChevronRightIcon$1, null, null)])]);
    };
    var renderArrow = function renderArrow() {
      if (!showArrow.value) return null;
      return createVNode("div", {
        "class": ["".concat(prefix.value, "-swiper__arrow"), "".concat(prefix.value, "-swiper__arrow--default")]
      }, [createVNode("div", {
        "class": "".concat(prefix.value, "-swiper__arrow-left"),
        "onClick": function onClick() {
          return goPrevious({
            source: "click"
          });
        }
      }, [createVNode(ChevronLeftIcon$1, null, null)]), createVNode("div", {
        "class": "".concat(prefix.value, "-swiper__arrow-right"),
        "onClick": function onClick() {
          return goNext({
            source: "click"
          });
        }
      }, [createVNode(ChevronRightIcon$1, null, null)])]);
    };
    var renderNavigation = function renderNavigation() {
      if (isVNode(props2.navigation)) return props2.navigation;
      var navigationSlot = renderTNodeJSX("navigation");
      if (navigationSlot && isVNode(navigationSlot === null || navigationSlot === void 0 ? void 0 : navigationSlot[0])) return navigationSlot;
      if (navigationConfig.value.type === "fraction") {
        return createVNode("div", {
          "class": ["".concat(prefix.value, "-swiper__navigation"), "".concat(prefix.value, "-swiper__navigation--fraction")]
        }, [renderPagination()]);
      }
      var swiperItemList = getChildComponentByName("SwiperItem");
      return createVNode("ul", {
        "class": ["".concat(prefix.value, "-swiper__navigation"), _defineProperty(_defineProperty(_defineProperty({}, "".concat(prefix.value, "-swiper__navigation-bars"), navigationConfig.value.type === "bars"), "".concat(prefix.value, "-swiper__navigation-dots"), navigationConfig.value.type === "dots"), "".concat(prefix.value, "-swiper__navigation-dots-bar"), navigationConfig.value.type === "dots-bar")]
      }, [swiperItemList.map(function (_, i) {
        return createVNode("li", {
          "key": i,
          "class": ["".concat(prefix.value, "-swiper__navigation-item"), _defineProperty({}, "".concat(prefix.value, "-is-active"), i === navActiveIndex.value)],
          "onMouseenter": function onMouseenter() {
            return onMouseEnterNavigationItem(i);
          },
          "onClick": function onClick() {
            return onClickNavigationItem(i);
          }
        }, [createVNode("span", null, null)]);
      })]);
    };
    var renderSwiperItems = function renderSwiperItems() {
      return swiperItems();
    };
    watch(function () {
      return propsToUpdateSetTimer.value;
    }, function () {
      setTimer();
    });
    watch(function () {
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
    watch(function () {
      return props2.current;
    }, function () {
      swiperTo(props2.current, {
        source: "autoplay"
      });
    });
    onMounted(function () {
      setTimer();
      showArrow.value = navigationConfig.value.showSlideBtn === "always";
    });
    return function () {
      return createVNode("div", {
        "class": ["".concat(prefix.value, "-swiper")],
        "onMouseenter": onMouseEnter,
        "onMouseleave": onMouseLeave,
        "ref": swiperWrap
      }, [createVNode("div", {
        "class": swiperWrapClass.value
      }, [createVNode("div", {
        "class": ["".concat(prefix.value, "-swiper__content"), _defineProperty(_defineProperty({}, "".concat(prefix.value, "-swiper-fade"), props2.animation === "fade"), "".concat(prefix.value, "-swiper-card"), props2.type === "card")]
      }, [createVNode("div", {
        "class": "".concat(prefix.value, "-swiper__container"),
        "style": containerStyle.value
      }, [renderSwiperItems()])]), renderNavigation(), renderArrow()])]);
    };
  }
});

export { _Swiper as default };
//# sourceMappingURL=swiper.mjs.map
