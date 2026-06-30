/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, ref, h, createVNode, onBeforeMount, onMounted } from 'vue';
import { _ as _defineProperty } from '../_chunks/dep-1dacc319.mjs';
import { InfoCircleFilledIcon, CheckCircleFilledIcon, CloseIcon } from 'tdesign-icons-vue-next';
import { isFunction } from 'lodash-es';
import { u as usePrefixClass, i as useGlobalIcon, a as useTNodeJSX, b as useContent } from '../_chunks/dep-7673347f.mjs';
import props from './props.mjs';
import './utils/index.mjs';
import { useConfig } from '../config-provider/hooks/useConfig.mjs';
import { fadeOut, fadeIn } from './utils/animate.mjs';
import '../_chunks/dep-257428bc.mjs';
import '../_chunks/dep-00b4e06a.mjs';
import '../_chunks/dep-9f459d8b.mjs';
import '../_chunks/dep-51a43106.mjs';
import '../_chunks/dep-fe644854.mjs';
import '../_chunks/dep-22ebd6af.mjs';
import '../_chunks/dep-9003fde5.mjs';
import '../_chunks/dep-cdd448ec.mjs';
import '../_chunks/dep-97ecacde.mjs';
import '../config-provider/utils/context.mjs';
import '../_chunks/dep-a4c09318.mjs';
import '../_chunks/dep-ffb85102.mjs';
import '../_chunks/dep-ad588525.mjs';
import '../_chunks/dep-84fd47b3.mjs';
import '../_chunks/dep-d36c4a3f.mjs';
import './consts/index.mjs';

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
//# sourceMappingURL=notification.mjs.map
