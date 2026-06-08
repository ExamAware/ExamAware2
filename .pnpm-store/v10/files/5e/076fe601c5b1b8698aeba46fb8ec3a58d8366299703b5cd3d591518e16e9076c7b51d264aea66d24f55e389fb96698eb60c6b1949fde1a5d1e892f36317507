/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, ref, onBeforeMount, onMounted, createVNode, h } from 'vue';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { InfoCircleFilledIcon, CheckCircleFilledIcon, CloseIcon } from 'tdesign-icons-vue-next';
import { isFunction } from 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-fe23be6e.js';
import { u as useTNodeJSX, a as useContent } from '../_chunks/dep-2accc95a.js';
import { u as usePrefixClass } from '../_chunks/dep-9e6d8a78.js';
import { u as useGlobalIcon } from '../_chunks/dep-3a7a2ef1.js';
import '@babel/runtime/helpers/slicedToArray';
import '../_chunks/dep-880d05b9.js';
import props from './props.js';
import { fadeIn, fadeOut } from './utils/animate.js';
import { useConfig } from '../config-provider/hooks/useConfig.js';
import '../_chunks/dep-81b01cae.js';
import '../_chunks/dep-16bcfabc.js';
import '../_chunks/dep-fb805f69.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import './consts/index.js';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var _Notification = defineComponent({
  name: "TNotification",
  props: _objectSpread(_objectSpread({}, props), {}, {
    placement: String
  }),
  setup: function setup(props2, _ref) {
    var slots = _ref.slots,
      expose = _ref.expose;
    var COMPONENT_NAME = usePrefixClass("notification");
    var _useConfig = useConfig("classPrefix"),
      classPrefix = _useConfig.classPrefix;
    var _useGlobalIcon = useGlobalIcon({
        InfoCircleFilledIcon: InfoCircleFilledIcon,
        CheckCircleFilledIcon: CheckCircleFilledIcon,
        CloseIcon: CloseIcon
      }),
      InfoCircleFilledIcon$1 = _useGlobalIcon.InfoCircleFilledIcon,
      CheckCircleFilledIcon$1 = _useGlobalIcon.CheckCircleFilledIcon,
      CloseIcon$1 = _useGlobalIcon.CloseIcon;
    var renderTNode = useTNodeJSX();
    var renderContent = useContent();
    var timer = ref(null);
    var notificationRef = ref(null);
    var handleCloseBtnClick = function handleCloseBtnClick(e) {
      var dom = notificationRef.value;
      fadeOut(dom, props2.placement, function () {
        var _props2$onCloseBtnCli;
        (_props2$onCloseBtnCli = props2.onCloseBtnClick) === null || _props2$onCloseBtnCli === void 0 || _props2$onCloseBtnCli.call(props2, {
          e: e
        });
      });
    };
    var close = function close() {
      var dom = notificationRef.value;
      fadeOut(dom, props2.placement, function () {
        var _props2$onClose;
        (_props2$onClose = props2.onClose) === null || _props2$onClose === void 0 || _props2$onClose.call(props2);
      });
    };
    var renderIcon = function renderIcon() {
      var iconContent;
      if (props2.icon === false) return null;
      if (isFunction(props2.icon)) {
        iconContent = props2.icon(h);
      } else if (slots.icon) {
        iconContent = slots.icon(null);
      } else if (props2.theme) {
        var iconType = props2.theme === "success" ? createVNode(CheckCircleFilledIcon$1, {
          "class": "".concat(classPrefix.value, "-is-").concat(props2.theme)
        }, null) : createVNode(InfoCircleFilledIcon$1, {
          "class": "".concat(classPrefix.value, "-is-").concat(props2.theme)
        }, null);
        iconContent = createVNode("div", {
          "class": "".concat(classPrefix.value, "-notification__icon")
        }, [iconType]);
      }
      return iconContent;
    };
    var renderClose = function renderClose() {
      var defaultClose = createVNode(CloseIcon$1, null, null);
      return createVNode("span", {
        "class": "".concat(classPrefix.value, "-message__close"),
        "onClick": handleCloseBtnClick
      }, [renderTNode("closeBtn", defaultClose)]);
    };
    var renderMainContent = function renderMainContent() {
      return createVNode("div", {
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
        fadeOut(dom, props2.placement, function () {
          var _props2$onDurationEnd;
          (_props2$onDurationEnd = props2.onDurationEnd) === null || _props2$onDurationEnd === void 0 || _props2$onDurationEnd.call(props2);
        });
      }, props2.duration));
    };
    onBeforeMount(function () {
      props2.duration && setTimer();
    });
    onMounted(function () {
      var dom = notificationRef.value;
      fadeIn(dom, props2.placement);
    });
    expose({
      close: close
    });
    return function () {
      return createVNode("div", {
        "ref": notificationRef,
        "class": "".concat(COMPONENT_NAME.value),
        "onMouseenter": clearTimer,
        "onMouseleave": setTimer
      }, [renderIcon(), createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__main")
      }, [createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__title__wrap")
      }, [createVNode("span", {
        "class": "".concat(COMPONENT_NAME.value, "__title")
      }, [renderTNode("title")]), renderClose()]), renderMainContent(), renderTNode("footer")])]);
    };
  }
});

export { _Notification as default };
//# sourceMappingURL=notification.js.map
