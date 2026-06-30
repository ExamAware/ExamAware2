/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, ref, computed, toRefs, watch, onMounted, createVNode, Teleport, mergeProps } from 'vue';
import { _ as _slicedToArray } from '../_chunks/dep-9003fde5.mjs';
import { _ as _defineProperty } from '../_chunks/dep-1dacc319.mjs';
import GradientIcon from './icon/gradient.mjs';
import { a as addClass, r as removeClass } from '../_chunks/dep-51a43106.mjs';
import { u as usePrefixClass, a as useTNodeJSX, b as useContent, c as useCommonClassName, t as useTeleport, D as getPropertyValFromObj } from '../_chunks/dep-7673347f.mjs';
import props from './props.mjs';
import '../_chunks/dep-9f459d8b.mjs';
import '../_chunks/dep-257428bc.mjs';
import '../_chunks/dep-0cde7579.mjs';
import '../_chunks/dep-00b4e06a.mjs';
import '../_chunks/dep-0dcc778a.mjs';
import 'lodash-es';
import '../_chunks/dep-fe644854.mjs';
import '../config-provider/hooks/useConfig.mjs';
import '../config-provider/utils/context.mjs';
import '../_chunks/dep-a4c09318.mjs';
import '../_chunks/dep-ffb85102.mjs';
import '../_chunks/dep-ad588525.mjs';
import '../_chunks/dep-22ebd6af.mjs';
import '../_chunks/dep-cdd448ec.mjs';
import '../_chunks/dep-97ecacde.mjs';
import '../_chunks/dep-84fd47b3.mjs';
import '../_chunks/dep-d36c4a3f.mjs';

var useComponentClassName = function useComponentClassName() {
  return {
    name: usePrefixClass("loading"),
    centerClass: usePrefixClass("loading--center"),
    fullscreenClass: usePrefixClass("loading__fullscreen"),
    lockClass: usePrefixClass("loading--lock"),
    overlayClass: usePrefixClass("loading__overlay"),
    relativeClass: usePrefixClass("loading__parent"),
    fullClass: usePrefixClass("loading--full"),
    inheritColorClass: usePrefixClass("loading--inherit-color")
  };
};
var _Loading = defineComponent({
  name: "TLoading",
  inheritAttrs: false,
  props: props,
  setup: function setup(props2, _ref) {
    var slots = _ref.slots,
      attrs = _ref.attrs;
    var delayShowLoading = ref(false);
    var _useComponentClassNam = useComponentClassName(),
      name = _useComponentClassNam.name,
      centerClass = _useComponentClassNam.centerClass,
      fullscreenClass = _useComponentClassNam.fullscreenClass,
      lockClass = _useComponentClassNam.lockClass,
      overlayClass = _useComponentClassNam.overlayClass,
      relativeClass = _useComponentClassNam.relativeClass,
      fullClass = _useComponentClassNam.fullClass,
      inheritColorClass = _useComponentClassNam.inheritColorClass;
    var classPrefix = usePrefixClass();
    var renderTNodeJSX = useTNodeJSX();
    var renderContent = useContent();
    var _useCommonClassName = useCommonClassName(),
      SIZE = _useCommonClassName.SIZE;
    var countDelay = function countDelay() {
      delayShowLoading.value = false;
      var timer = setTimeout(function () {
        delayShowLoading.value = true;
        clearTimeout(timer);
      }, props2.delay);
    };
    var teleportElement = useTeleport(function () {
      return props2.attach;
    });
    var delayCounted = computed(function () {
      return Boolean(!props2.delay || props2.delay && delayShowLoading.value);
    });
    var styles = computed(function () {
      var styles2 = {};
      if (props2.zIndex !== void 0) {
        styles2.zIndex = props2.zIndex;
      }
      if (!["small", "medium", "large"].includes(props2.size)) {
        styles2["font-size"] = props2.size;
      }
      return styles2;
    });
    var hasContent = computed(function () {
      return Boolean(props2["default"] || slots["default"] || props2.content || slots.content);
    });
    var lockFullscreen = computed(function () {
      return props2.preventScrollThrough && props2.fullscreen;
    });
    var showText = computed(function () {
      return Boolean(props2.text || slots.text);
    });
    var showWrapLoading = computed(function () {
      return hasContent.value && props2.loading && delayCounted.value;
    });
    var showFullScreenLoading = computed(function () {
      return props2.fullscreen && props2.loading && delayCounted.value;
    });
    var showAttachedLoading = computed(function () {
      return props2.attach && props2.loading && delayCounted.value;
    });
    var classes = computed(function () {
      var baseClasses = [centerClass.value, getPropertyValFromObj(SIZE.value, props2.size), _defineProperty({}, inheritColorClass.value, props2.inheritColor)];
      var fullScreenClasses = [name.value, fullscreenClass.value, centerClass.value, overlayClass.value];
      return {
        baseClasses: baseClasses,
        attachClasses: baseClasses.concat([name.value, fullClass.value, _defineProperty({}, overlayClass.value, props2.showOverlay)]),
        withContentClasses: baseClasses.concat([name.value, fullClass.value, _defineProperty({}, overlayClass.value, props2.showOverlay)]),
        fullScreenClasses: fullScreenClasses,
        normalClasses: baseClasses.concat([name.value])
      };
    });
    var _toRefs = toRefs(props2),
      loading = _toRefs.loading;
    watch([loading], function (_ref5) {
      var _ref6 = _slicedToArray(_ref5, 1),
        isLoading = _ref6[0];
      if (isLoading) {
        countDelay();
        lockFullscreen.value && addClass(document.body, lockClass.value);
      } else {
        lockFullscreen.value && removeClass(document.body, lockClass.value);
      }
    });
    onMounted(function () {
      props2.delay && countDelay();
    });
    return function () {
      var _classes$value = classes.value,
        fullScreenClasses = _classes$value.fullScreenClasses,
        baseClasses = _classes$value.baseClasses,
        withContentClasses = _classes$value.withContentClasses,
        attachClasses = _classes$value.attachClasses,
        normalClasses = _classes$value.normalClasses;
      var defaultIndicator = createVNode(GradientIcon, {
        "size": props2.size
      }, null);
      var indicator = loading.value && renderTNodeJSX("indicator", defaultIndicator);
      var text = showText.value && createVNode("div", {
        "class": "".concat(classPrefix.value, "-loading__text")
      }, [renderTNodeJSX("text")]);
      if (props2.fullscreen) {
        if (!showFullScreenLoading.value || !props2.loading) return null;
        return createVNode(Teleport, {
          "disabled": !props2.attach || !teleportElement.value,
          "to": teleportElement.value
        }, {
          "default": function _default() {
            return [createVNode("div", mergeProps({
              "class": fullScreenClasses,
              "style": styles.value
            }, attrs), [createVNode("div", {
              "class": baseClasses
            }, [indicator, text])])];
          }
        });
      }
      if (hasContent.value) {
        return createVNode("div", mergeProps({
          "class": relativeClass.value
        }, attrs), [renderContent("default", "content"), showWrapLoading.value && createVNode("div", {
          "class": withContentClasses,
          "style": styles.value
        }, [indicator, text])]);
      }
      if (props2.attach) {
        if (!showAttachedLoading.value || !loading.value) return null;
        return createVNode(Teleport, {
          "disabled": !props2.attach || !teleportElement.value,
          "to": teleportElement.value
        }, {
          "default": function _default() {
            return [createVNode("div", mergeProps({
              "class": attachClasses,
              "style": styles.value
            }, attrs), [indicator, text])];
          }
        });
      }
      return loading.value ? createVNode("div", mergeProps({
        "class": normalClasses,
        "style": styles.value
      }, attrs), [indicator, text]) : null;
    };
  }
});

export { _Loading as default };
//# sourceMappingURL=loading.mjs.map
