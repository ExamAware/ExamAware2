/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var _typeof = require('@babel/runtime/helpers/typeof');
var tdesignIconsVueNext = require('tdesign-icons-vue-next');
var dom = require('../_chunks/dep-06276759.js');
var index$3 = require('../_chunks/dep-3565d523.js');
var index$2 = require('../_chunks/dep-47c460dd.js');
var index = require('../_chunks/dep-ecaaae91.js');
var index$1 = require('../_chunks/dep-31c76dc6.js');
require('@babel/runtime/helpers/slicedToArray');
require('../_chunks/dep-cc66acf1.js');
require('@babel/runtime/helpers/toConsumableArray');
var backTop_props = require('./props.js');
var configProvider_hooks_useConfig = require('../config-provider/hooks/useConfig.js');
require('../_chunks/dep-953a77eb.js');
require('../_chunks/dep-8abdfb41.js');
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
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');
require('../_chunks/dep-8adeee89.js');
require('../_chunks/dep-4d2ef282.js');
require('../_chunks/dep-929933ce.js');
require('../_chunks/dep-6b1f0ef8.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);
var _typeof__default = /*#__PURE__*/_interopDefaultLegacy(_typeof);

var _BackTop = Vue.defineComponent({
  name: "TBackTop",
  props: backTop_props["default"],
  setup: function setup(props2) {
    var visible = Vue.ref(false);
    var containerRef = Vue.ref(null);
    var componentName = index.usePrefixClass("back-top");
    var _useConfig = configProvider_hooks_useConfig.useConfig("alert"),
      classPrefix = _useConfig.classPrefix;
    var _useGlobalIcon = index$1.useGlobalIcon({
        BacktopIcon: tdesignIconsVueNext.BacktopIcon
      }),
      BacktopIcon = _useGlobalIcon.BacktopIcon;
    var renderContent = index$2.useContent();
    var getContainer = function getContainer(container) {
      if (typeof container === "string" && (typeof document === "undefined" ? "undefined" : _typeof__default["default"](document)) !== void 0) {
        if (container === "body") {
          return document;
        }
        return document.querySelector(container);
      }
      if (typeof container === "function") {
        return container();
      }
      return null;
    };
    Vue.onMounted(function () {
      containerRef.value = getContainer(props2.container);
      var visibleHeight;
      if (typeof props2.visibleHeight === "string") {
        visibleHeight = Number(props2.visibleHeight.replace("px", ""));
      } else {
        visibleHeight = props2.visibleHeight;
      }
      if (visibleHeight === 0) {
        visible.value = true;
        return;
      }
      var scrollDOM;
      if (containerRef.value.scrollTop === void 0) {
        scrollDOM = document.documentElement;
      } else {
        scrollDOM = containerRef.value;
      }
      containerRef.value.onscroll = function () {
        var _scrollDOM;
        var scrollTop = (_scrollDOM = scrollDOM) === null || _scrollDOM === void 0 ? void 0 : _scrollDOM.scrollTop;
        if (scrollTop >= visibleHeight) {
          visible.value = true;
        }
        if (scrollTop < visibleHeight && visible.value) {
          visible.value = false;
        }
      };
    });
    Vue.onBeforeUnmount(function () {
      containerRef.value.onscroll = null;
    });
    return function () {
      var theme = props2.theme,
        shape = props2.shape,
        size = props2.size,
        target = props2.target,
        duration = props2.duration,
        offset = props2.offset,
        container = props2.container;
      var getChild = index$3.useChildSlots();
      var children = getChild();
      if (children.length < 1) children = null;
      var cls = Vue.computed(function () {
        return _defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"]({}, componentName.value, true), "".concat(componentName.value, "--theme-").concat(theme), true), "".concat(componentName.value, "--").concat(shape), true), "".concat(componentName.value, "--show"), visible.value), "".concat(classPrefix.value, "-size-s"), size === "small"), "".concat(classPrefix.value, "-size-m"), size === "medium");
      });
      var defaultContent = Vue.createVNode(Vue.Fragment, null, [Vue.createVNode(BacktopIcon, {
        "class": "".concat(componentName.value, "__icon"),
        "size": "24"
      }, null), Vue.createVNode("span", {
        "class": "".concat(componentName.value, "__text")
      }, [Vue.createTextVNode("TOP")])]);
      var getBackTo = function getBackTo() {
        if (target === container) return 0;
        if (target === "body") return 0;
        if (!target) return 0;
        var targetNode = getContainer(target);
        if (!targetNode) return 0;
        var y = targetNode.getBoundingClientRect().y;
        return y;
      };
      var handleClick = function handleClick(e) {
        var _props2$onClick;
        var y = getBackTo();
        dom.scrollTo(y, {
          container: containerRef.value,
          duration: duration
        });
        (_props2$onClick = props2.onClick) === null || _props2$onClick === void 0 || _props2$onClick.call(props2, {
          e: e
        });
      };
      var positionStyle = Vue.computed(function () {
        return {
          insetInlineEnd: offset[0],
          insetBlockEnd: offset[1]
        };
      });
      return Vue.createVNode("button", {
        "type": "button",
        "class": cls.value,
        "style": positionStyle.value,
        "onClick": handleClick
      }, [renderContent("content", "default", defaultContent)]);
    };
  }
});

exports["default"] = _BackTop;
//# sourceMappingURL=back-top.js.map
