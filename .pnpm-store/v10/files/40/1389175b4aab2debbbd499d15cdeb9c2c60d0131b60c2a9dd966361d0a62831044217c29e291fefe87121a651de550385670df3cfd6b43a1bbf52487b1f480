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
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../_chunks/dep-953a77eb.js');
var index$2 = require('../_chunks/dep-47c460dd.js');
var index = require('../_chunks/dep-ecaaae91.js');
var index$1 = require('../_chunks/dep-31c76dc6.js');
require('@babel/runtime/helpers/slicedToArray');
require('../_chunks/dep-cc66acf1.js');
var notification_props = require('./props.js');
var notification_utils_animate = require('./utils/animate.js');
var isFunction = require('../_chunks/dep-48f60c78.js');
var configProvider_hooks_useConfig = require('../config-provider/hooks/useConfig.js');
require('../_chunks/dep-8abdfb41.js');
require('../_chunks/dep-06276759.js');
require('../_chunks/dep-a55e8a08.js');
require('../_chunks/dep-b3b464e8.js');
require('../_chunks/dep-87589faa.js');
require('../_chunks/dep-05f89f0d.js');
require('../_chunks/dep-4fa46641.js');
require('../_chunks/dep-0813861e.js');
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
require('./consts/index.js');
require('../_chunks/dep-8adeee89.js');
require('../_chunks/dep-4d2ef282.js');
require('../_chunks/dep-929933ce.js');
require('../_chunks/dep-6b1f0ef8.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var _Notification = Vue.defineComponent({
  name: "TNotification",
  props: _objectSpread(_objectSpread({}, notification_props["default"]), {}, {
    placement: String
  }),
  setup: function setup(props2, _ref) {
    var slots = _ref.slots,
      expose = _ref.expose;
    var COMPONENT_NAME = index.usePrefixClass("notification");
    var _useConfig = configProvider_hooks_useConfig.useConfig("classPrefix"),
      classPrefix = _useConfig.classPrefix;
    var _useGlobalIcon = index$1.useGlobalIcon({
        InfoCircleFilledIcon: tdesignIconsVueNext.InfoCircleFilledIcon,
        CheckCircleFilledIcon: tdesignIconsVueNext.CheckCircleFilledIcon,
        CloseIcon: tdesignIconsVueNext.CloseIcon
      }),
      InfoCircleFilledIcon = _useGlobalIcon.InfoCircleFilledIcon,
      CheckCircleFilledIcon = _useGlobalIcon.CheckCircleFilledIcon,
      CloseIcon = _useGlobalIcon.CloseIcon;
    var renderTNode = index$2.useTNodeJSX();
    var renderContent = index$2.useContent();
    var timer = Vue.ref(null);
    var notificationRef = Vue.ref(null);
    var handleCloseBtnClick = function handleCloseBtnClick(e) {
      var dom = notificationRef.value;
      notification_utils_animate.fadeOut(dom, props2.placement, function () {
        var _props2$onCloseBtnCli;
        (_props2$onCloseBtnCli = props2.onCloseBtnClick) === null || _props2$onCloseBtnCli === void 0 || _props2$onCloseBtnCli.call(props2, {
          e: e
        });
      });
    };
    var close = function close() {
      var dom = notificationRef.value;
      notification_utils_animate.fadeOut(dom, props2.placement, function () {
        var _props2$onClose;
        (_props2$onClose = props2.onClose) === null || _props2$onClose === void 0 || _props2$onClose.call(props2);
      });
    };
    var renderIcon = function renderIcon() {
      var iconContent;
      if (props2.icon === false) return null;
      if (isFunction.isFunction(props2.icon)) {
        iconContent = props2.icon(Vue.h);
      } else if (slots.icon) {
        iconContent = slots.icon(null);
      } else if (props2.theme) {
        var iconType = props2.theme === "success" ? Vue.createVNode(CheckCircleFilledIcon, {
          "class": "".concat(classPrefix.value, "-is-").concat(props2.theme)
        }, null) : Vue.createVNode(InfoCircleFilledIcon, {
          "class": "".concat(classPrefix.value, "-is-").concat(props2.theme)
        }, null);
        iconContent = Vue.createVNode("div", {
          "class": "".concat(classPrefix.value, "-notification__icon")
        }, [iconType]);
      }
      return iconContent;
    };
    var renderClose = function renderClose() {
      var defaultClose = Vue.createVNode(CloseIcon, null, null);
      return Vue.createVNode("span", {
        "class": "".concat(classPrefix.value, "-message__close"),
        "onClick": handleCloseBtnClick
      }, [renderTNode("closeBtn", defaultClose)]);
    };
    var renderMainContent = function renderMainContent() {
      return Vue.createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__content")
      }, [renderContent("default", "content")]);
    };
    var clearTimer = function clearTimer() {
      props2.duration && clearTimeout(timer.value);
    };
    var setTimer = function setTimer() {
      if (!props2.duration) {
        return;
      }
      timer.value = Number(setTimeout(function () {
        clearTimer();
        var dom = notificationRef.value;
        notification_utils_animate.fadeOut(dom, props2.placement, function () {
          var _props2$onDurationEnd;
          (_props2$onDurationEnd = props2.onDurationEnd) === null || _props2$onDurationEnd === void 0 || _props2$onDurationEnd.call(props2);
        });
      }, props2.duration));
    };
    Vue.onBeforeMount(function () {
      props2.duration && setTimer();
    });
    Vue.onMounted(function () {
      var dom = notificationRef.value;
      notification_utils_animate.fadeIn(dom, props2.placement);
    });
    expose({
      close: close
    });
    return function () {
      return Vue.createVNode("div", {
        "ref": notificationRef,
        "class": "".concat(COMPONENT_NAME.value),
        "onMouseenter": clearTimer,
        "onMouseleave": setTimer
      }, [renderIcon(), Vue.createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__main")
      }, [Vue.createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__title__wrap")
      }, [Vue.createVNode("span", {
        "class": "".concat(COMPONENT_NAME.value, "__title")
      }, [renderTNode("title")]), renderClose()]), renderMainContent(), renderTNode("footer")])]);
    };
  }
});

exports["default"] = _Notification;
//# sourceMappingURL=notification.js.map
