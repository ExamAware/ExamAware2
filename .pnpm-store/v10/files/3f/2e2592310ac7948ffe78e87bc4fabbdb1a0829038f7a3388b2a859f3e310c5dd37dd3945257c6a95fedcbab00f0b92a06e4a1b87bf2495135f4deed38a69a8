/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

var Vue = require('vue');
var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var loading_icon_gradient = require('../loading/icon/gradient.js');
var dom = require('./dep-06276759.js');
var index$1 = require('./dep-47c460dd.js');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
var index$2 = require('./dep-8382953f.js');
var index = require('./dep-ecaaae91.js');
require('./dep-cc66acf1.js');
var isFunction = require('./dep-48f60c78.js');
var loading_props = require('../loading/props.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);
var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

function useTeleport(attach, triggerNode) {
  var to = isFunction.isFunction(attach) ? Vue.computed(attach) : Vue.ref(attach);
  var innerTriggerNode = isFunction.isFunction(triggerNode) ? Vue.computed(triggerNode) : Vue.ref(triggerNode);
  var element = Vue.ref();
  var getElement = function getElement() {
    element.value = dom.getAttach(to.value, innerTriggerNode.value);
  };
  Vue.onMounted(function () {
    return getElement();
  });
  Vue.watch([to, innerTriggerNode], function () {
    return getElement();
  });
  return element;
}

var useComponentClassName = function useComponentClassName() {
  return {
    name: index.usePrefixClass("loading"),
    centerClass: index.usePrefixClass("loading--center"),
    fullscreenClass: index.usePrefixClass("loading__fullscreen"),
    lockClass: index.usePrefixClass("loading--lock"),
    overlayClass: index.usePrefixClass("loading__overlay"),
    relativeClass: index.usePrefixClass("loading__parent"),
    fullClass: index.usePrefixClass("loading--full"),
    inheritColorClass: index.usePrefixClass("loading--inherit-color")
  };
};
var _Loading = Vue.defineComponent({
  name: "TLoading",
  inheritAttrs: false,
  props: loading_props["default"],
  setup: function setup(props2, _ref) {
    var slots = _ref.slots,
      attrs = _ref.attrs;
    var delayShowLoading = Vue.ref(false);
    var _useComponentClassNam = useComponentClassName(),
      name = _useComponentClassNam.name,
      centerClass = _useComponentClassNam.centerClass,
      fullscreenClass = _useComponentClassNam.fullscreenClass,
      lockClass = _useComponentClassNam.lockClass,
      overlayClass = _useComponentClassNam.overlayClass,
      relativeClass = _useComponentClassNam.relativeClass,
      fullClass = _useComponentClassNam.fullClass,
      inheritColorClass = _useComponentClassNam.inheritColorClass;
    var classPrefix = index.usePrefixClass();
    var renderTNodeJSX = index$1.useTNodeJSX();
    var renderContent = index$1.useContent();
    var _useCommonClassName = index$2.useCommonClassName(),
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
    var delayCounted = Vue.computed(function () {
      return Boolean(!props2.delay || props2.delay && delayShowLoading.value);
    });
    var styles = Vue.computed(function () {
      var styles2 = {};
      if (props2.zIndex !== void 0) {
        styles2.zIndex = props2.zIndex;
      }
      if (!["small", "medium", "large"].includes(props2.size)) {
        styles2["font-size"] = props2.size;
      }
      return styles2;
    });
    var hasContent = Vue.computed(function () {
      return Boolean(props2["default"] || slots["default"] || props2.content || slots.content);
    });
    var lockFullscreen = Vue.computed(function () {
      return props2.preventScrollThrough && props2.fullscreen;
    });
    var showText = Vue.computed(function () {
      return Boolean(props2.text || slots.text);
    });
    var showWrapLoading = Vue.computed(function () {
      return hasContent.value && props2.loading && delayCounted.value;
    });
    var showFullScreenLoading = Vue.computed(function () {
      return props2.fullscreen && props2.loading && delayCounted.value;
    });
    var showAttachedLoading = Vue.computed(function () {
      return props2.attach && props2.loading && delayCounted.value;
    });
    var classes = Vue.computed(function () {
      var baseClasses = [centerClass.value, index$1.getPropertyValFromObj(SIZE.value, props2.size), _defineProperty__default["default"]({}, inheritColorClass.value, props2.inheritColor)];
      var fullScreenClasses = [name.value, fullscreenClass.value, centerClass.value, overlayClass.value];
      return {
        baseClasses: baseClasses,
        attachClasses: baseClasses.concat([name.value, fullClass.value, _defineProperty__default["default"]({}, overlayClass.value, props2.showOverlay)]),
        withContentClasses: baseClasses.concat([name.value, fullClass.value, _defineProperty__default["default"]({}, overlayClass.value, props2.showOverlay)]),
        fullScreenClasses: fullScreenClasses,
        normalClasses: baseClasses.concat([name.value])
      };
    });
    var _toRefs = Vue.toRefs(props2),
      loading = _toRefs.loading;
    Vue.watch([loading], function (_ref5) {
      var _ref6 = _slicedToArray__default["default"](_ref5, 1),
        isLoading = _ref6[0];
      if (isLoading) {
        countDelay();
        lockFullscreen.value && dom.addClass(document.body, lockClass.value);
      } else {
        lockFullscreen.value && dom.removeClass(document.body, lockClass.value);
      }
    });
    Vue.onMounted(function () {
      props2.delay && countDelay();
    });
    return function () {
      var _classes$value = classes.value,
        fullScreenClasses = _classes$value.fullScreenClasses,
        baseClasses = _classes$value.baseClasses,
        withContentClasses = _classes$value.withContentClasses,
        attachClasses = _classes$value.attachClasses,
        normalClasses = _classes$value.normalClasses;
      var defaultIndicator = Vue.createVNode(loading_icon_gradient["default"], {
        "size": props2.size
      }, null);
      var indicator = loading.value && renderTNodeJSX("indicator", defaultIndicator);
      var text = showText.value && Vue.createVNode("div", {
        "class": "".concat(classPrefix.value, "-loading__text")
      }, [renderTNodeJSX("text")]);
      if (props2.fullscreen) {
        if (!showFullScreenLoading.value || !props2.loading) return null;
        return Vue.createVNode(Vue.Teleport, {
          "disabled": !props2.attach || !teleportElement.value,
          "to": teleportElement.value
        }, {
          "default": function _default() {
            return [Vue.createVNode("div", Vue.mergeProps({
              "class": fullScreenClasses,
              "style": styles.value
            }, attrs), [Vue.createVNode("div", {
              "class": baseClasses
            }, [indicator, text])])];
          }
        });
      }
      if (hasContent.value) {
        return Vue.createVNode("div", Vue.mergeProps({
          "class": relativeClass.value
        }, attrs), [renderContent("default", "content"), showWrapLoading.value && Vue.createVNode("div", {
          "class": withContentClasses,
          "style": styles.value
        }, [indicator, text])]);
      }
      if (props2.attach) {
        if (!showAttachedLoading.value || !loading.value) return null;
        return Vue.createVNode(Vue.Teleport, {
          "disabled": !props2.attach || !teleportElement.value,
          "to": teleportElement.value
        }, {
          "default": function _default() {
            return [Vue.createVNode("div", Vue.mergeProps({
              "class": attachClasses,
              "style": styles.value
            }, attrs), [indicator, text])];
          }
        });
      }
      return loading.value ? Vue.createVNode("div", Vue.mergeProps({
        "class": normalClasses,
        "style": styles.value
      }, attrs), [indicator, text]) : null;
    };
  }
});

exports._Loading = _Loading;
exports.useTeleport = useTeleport;
//# sourceMappingURL=dep-237ed01f.js.map
