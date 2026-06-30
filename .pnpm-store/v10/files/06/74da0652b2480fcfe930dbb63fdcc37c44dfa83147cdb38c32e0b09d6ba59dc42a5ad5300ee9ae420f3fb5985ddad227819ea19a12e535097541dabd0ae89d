/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

var Vue = require('vue');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var tdesignIconsVueNext = require('tdesign-icons-vue-next');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('./dep-953a77eb.js');
var index$2 = require('./dep-47c460dd.js');
var index = require('./dep-ecaaae91.js');
var index$1 = require('./dep-31c76dc6.js');
require('@babel/runtime/helpers/slicedToArray');
require('./dep-cc66acf1.js');
var loading_index = require('../loading/index.js');
var message_props = require('../message/props.js');
var isFunction = require('./dep-48f60c78.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

var DISTANCE = "32px";
var THEME_LIST = ["info", "success", "warning", "error", "question", "loading"];
var PLACEMENT_OFFSET = {
  center: {
    left: "50%",
    top: "50%",
    transform: "translateX(-50%) translateY(-50%)"
  },
  left: {
    left: DISTANCE,
    top: "50%",
    transform: "translateY(-50%)"
  },
  bottom: {
    bottom: DISTANCE,
    left: "50%",
    transform: "translateX(-50%)"
  },
  right: {
    right: DISTANCE,
    top: "50%",
    transform: "translateY(-50%)"
  },
  top: {
    top: DISTANCE,
    left: "50%",
    transform: "translateX(-50%)"
  },
  "top-left": {
    left: DISTANCE,
    top: DISTANCE
  },
  "top-right": {
    right: DISTANCE,
    top: DISTANCE
  },
  "bottom-left": {
    left: DISTANCE,
    bottom: DISTANCE
  },
  "bottom-right": {
    right: DISTANCE,
    bottom: DISTANCE
  }
};
var PLACEMENT_LIST = Object.keys(PLACEMENT_OFFSET);

var ANIMATION_OPTION = {
  duration: 200,
  easing: "linear"
};
function setDomStyleAfterAnimation(dom, styleAfterAnimation) {
  var keys = Object.keys(styleAfterAnimation);
  for (var i = 0; i < keys.length; i += 1) {
    var key = keys[i];
    dom.style[key] = styleAfterAnimation[key];
  }
}
function getFadeInKeyframes(placement, offsetWidth, offsetHeight) {
  if (!PLACEMENT_LIST.includes(placement)) return null;
  if (["top-left", "left", "bottom-left"].includes(placement)) {
    return [{
      opacity: 0,
      marginLeft: "-".concat(offsetWidth, "px")
    }, {
      opacity: 1,
      marginLeft: "0"
    }];
  }
  if (["top-right", "right", "bottom-right"].includes(placement)) {
    return [{
      opacity: 0,
      marginRight: "-".concat(offsetWidth, "px")
    }, {
      opacity: 1,
      marginRight: "0"
    }];
  }
  if (["top", "center"].includes(placement)) {
    return [{
      opacity: 0,
      marginTop: "-".concat(offsetHeight, "px")
    }, {
      opacity: 1,
      marginTop: "0"
    }];
  }
  if (["bottom"].includes(placement)) {
    return [{
      opacity: 0,
      transform: "translate3d(0, ".concat(offsetHeight, "px, 0)")
    }, {
      opacity: 1,
      transform: "translate3d(0, 0, 0)"
    }];
  }
  return null;
}
function getFadeOutKeyframes(placement, offsetHeight) {
  if (!PLACEMENT_LIST.includes(placement)) return null;
  if (["bottom-left", "bottom", "bottom-right"].includes(placement)) {
    var marginOffset2 = "".concat(offsetHeight, "px");
    return [{
      opacity: 1,
      marginTop: "0px"
    }, {
      opacity: 0,
      marginTop: marginOffset2
    }];
  }
  var marginOffset = "-".concat(offsetHeight, "px");
  return [{
    opacity: 1,
    marginTop: "0px"
  }, {
    opacity: 0,
    marginTop: marginOffset
  }];
}
function fadeIn(dom, placement) {
  var _dom$animate;
  if (!dom) return;
  var offsetWidth = (dom === null || dom === void 0 ? void 0 : dom.offsetWidth) || 0;
  var offsetHeight = (dom === null || dom === void 0 ? void 0 : dom.offsetHeight) || 0;
  var fadeInKeyframes = getFadeInKeyframes(placement, offsetWidth, offsetHeight);
  if (!fadeInKeyframes) return;
  var styleAfterFadeIn = fadeInKeyframes[fadeInKeyframes.length - 1];
  setDomStyleAfterAnimation(dom, styleAfterFadeIn);
  (_dom$animate = dom.animate) === null || _dom$animate === void 0 || _dom$animate.call(dom, fadeInKeyframes, ANIMATION_OPTION);
}
function fadeOut(dom, placement, onFinish) {
  if (!dom) return;
  var offsetHeight = dom.offsetHeight || 0;
  var fadeOutKeyframes = getFadeOutKeyframes(placement, offsetHeight);
  if (!fadeOutKeyframes) {
    onFinish();
    return;
  }
  var styleAfterFadeOut = fadeOutKeyframes[fadeOutKeyframes.length - 1];
  setDomStyleAfterAnimation(dom, styleAfterFadeOut);
  var animation = dom.animate && dom.animate(fadeOutKeyframes, ANIMATION_OPTION);
  if (animation) {
    animation.onfinish = function () {
      dom.style.display = "none";
      onFinish();
    };
  } else {
    dom.style.display = "none";
    onFinish();
  }
}

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var _Message = Vue.defineComponent({
  name: "TMessage",
  props: _objectSpread(_objectSpread({}, message_props["default"]), {}, {
    placement: String,
    className: String
  }),
  setup: function setup(props2, _ref) {
    var slots = _ref.slots,
      expose = _ref.expose;
    var COMPONENT_NAME = index.usePrefixClass("message");
    var _useGlobalIcon = index$1.useGlobalIcon({
        InfoCircleFilledIcon: tdesignIconsVueNext.InfoCircleFilledIcon,
        CheckCircleFilledIcon: tdesignIconsVueNext.CheckCircleFilledIcon,
        ErrorCircleFilledIcon: tdesignIconsVueNext.ErrorCircleFilledIcon,
        HelpCircleFilledIcon: tdesignIconsVueNext.HelpCircleFilledIcon,
        CloseIcon: tdesignIconsVueNext.CloseIcon
      }),
      InfoCircleFilledIcon = _useGlobalIcon.InfoCircleFilledIcon,
      CheckCircleFilledIcon = _useGlobalIcon.CheckCircleFilledIcon,
      ErrorCircleFilledIcon = _useGlobalIcon.ErrorCircleFilledIcon,
      HelpCircleFilledIcon = _useGlobalIcon.HelpCircleFilledIcon,
      CloseIcon = _useGlobalIcon.CloseIcon;
    var classPrefix = index.usePrefixClass();
    var renderTNode = index$2.useTNodeJSX();
    var renderContent = index$2.useContent();
    var msgRef = Vue.ref(null);
    var timer = Vue.ref(null);
    var classes = Vue.computed(function () {
      var status = {};
      THEME_LIST.forEach(function (t) {
        return status["".concat(classPrefix.value, "-is-").concat(t)] = props2.theme === t;
      });
      return [COMPONENT_NAME.value, status, _defineProperty__default["default"]({}, "".concat(classPrefix.value, "-is-closable"), props2.closeBtn || slots.closeBtn), props2.className];
    });
    var close = function close(e) {
      var _props2$onClose, _props2$onCloseBtnCli;
      (_props2$onClose = props2.onClose) === null || _props2$onClose === void 0 || _props2$onClose.call(props2, {
        trigger: "close-click",
        e: e
      });
      (_props2$onCloseBtnCli = props2.onCloseBtnClick) === null || _props2$onCloseBtnCli === void 0 || _props2$onCloseBtnCli.call(props2, {
        e: e
      });
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
        var msgDom = msgRef.value;
        fadeOut(msgDom, props2.placement, function () {
          var _props2$onClose2, _props2$onDurationEnd;
          (_props2$onClose2 = props2.onClose) === null || _props2$onClose2 === void 0 || _props2$onClose2.call(props2, {
            trigger: "duration-end"
          });
          (_props2$onDurationEnd = props2.onDurationEnd) === null || _props2$onDurationEnd === void 0 || _props2$onDurationEnd.call(props2);
        });
      }, props2.duration));
    };
    var renderClose = function renderClose() {
      var defaultClose = Vue.createVNode(CloseIcon, null, null);
      return Vue.createVNode("span", {
        "class": "".concat(COMPONENT_NAME.value, "__close"),
        "onClick": close
      }, [renderTNode("closeBtn", defaultClose)]);
    };
    var renderIcon = function renderIcon() {
      if (props2.icon === false) return;
      if (isFunction.isFunction(props2.icon)) return props2.icon(Vue.h);
      if (slots.icon) {
        return slots.icon(null);
      }
      var Icon = {
        info: InfoCircleFilledIcon,
        success: CheckCircleFilledIcon,
        warning: ErrorCircleFilledIcon,
        error: ErrorCircleFilledIcon,
        question: HelpCircleFilledIcon,
        loading: loading_index.Loading
      }[props2.theme];
      return Vue.createVNode(Icon, null, null);
    };
    Vue.onBeforeMount(function () {
      props2.duration && setTimer();
    });
    Vue.onMounted(function () {
      var msgDom = msgRef.value;
      fadeIn(msgDom, props2.placement);
    });
    expose({
      close: close
    });
    return function () {
      return Vue.createVNode("div", {
        "ref": msgRef,
        "class": classes.value,
        "onMouseenter": clearTimer,
        "onMouseleave": setTimer
      }, [renderIcon(), renderContent("content", "default"), renderClose()]);
    };
  }
});

exports.PLACEMENT_OFFSET = PLACEMENT_OFFSET;
exports._Message = _Message;
//# sourceMappingURL=dep-56601f8d.js.map
