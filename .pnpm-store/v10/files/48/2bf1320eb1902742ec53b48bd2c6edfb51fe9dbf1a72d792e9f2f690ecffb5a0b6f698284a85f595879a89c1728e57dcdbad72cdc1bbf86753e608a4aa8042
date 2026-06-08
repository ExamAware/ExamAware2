/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, ref, onMounted, nextTick, createVNode } from 'vue';
import { s as setStyle, u as usePrefixClass } from '../../_chunks/dep-7673347f.mjs';
import { _ as _defineProperty } from '../../_chunks/dep-1dacc319.mjs';
import { e as getIEVersion } from '../../_chunks/dep-0cde7579.mjs';
import 'lodash-es';
import '../../_chunks/dep-00b4e06a.mjs';
import '../../_chunks/dep-9f459d8b.mjs';
import '../../_chunks/dep-257428bc.mjs';
import '../../_chunks/dep-51a43106.mjs';
import '../../_chunks/dep-fe644854.mjs';
import '../../config-provider/hooks/useConfig.mjs';
import '../../config-provider/utils/context.mjs';
import '../../_chunks/dep-a4c09318.mjs';
import '../../_chunks/dep-ffb85102.mjs';
import '../../_chunks/dep-ad588525.mjs';
import '../../_chunks/dep-9003fde5.mjs';
import '../../_chunks/dep-22ebd6af.mjs';
import '../../_chunks/dep-cdd448ec.mjs';
import '../../_chunks/dep-97ecacde.mjs';
import '../../_chunks/dep-84fd47b3.mjs';
import '../../_chunks/dep-d36c4a3f.mjs';
import '../../_chunks/dep-0dcc778a.mjs';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function circleAdapter(circleElem) {
  var _window$getComputedSt, _window, _window2;
  var basicStyle = {};
  if (!circleElem || typeof window === "undefined") {
    return;
  }
  var computedStyle = (_window$getComputedSt = (_window = window).getComputedStyle) === null || _window$getComputedSt === void 0 ? void 0 : _window$getComputedSt.call(_window, circleElem);
  var color = (computedStyle === null || computedStyle === void 0 ? void 0 : computedStyle.color) || "";
  var fontSize = (computedStyle === null || computedStyle === void 0 ? void 0 : computedStyle.fontSize) || "12px";
  var ua = (_window2 = window) === null || _window2 === void 0 || (_window2 = _window2.navigator) === null || _window2 === void 0 ? void 0 : _window2.userAgent;
  var isSafari = /Safari/.test(ua) && !/Chrome/.test(ua);
  var isIosWechat = /(?=.*iPhone)[?=.*MicroMessenger]/.test(ua) && !/Chrome/.test(ua);
  var isIpadWechat = /(?=.*iPad)[?=.*MicroMessenger]/.test(ua) && !/Chrome/.test(ua);
  if (isSafari || isIosWechat || isIpadWechat) {
    basicStyle = {
      transformOrigin: "0px 0px",
      transform: "scale(".concat(parseInt(fontSize, 10) / 12, ")")
    };
  }
  if (color && getIEVersion() > 11) {
    var matched = color.match(/[\d.]+/g);
    var endColor = matched ? "rgba(".concat(matched[0], ", ").concat(matched[1], ", ").concat(matched[2], ", 0)") : "";
    setStyle(circleElem, _objectSpread(_objectSpread({}, basicStyle), {}, {
      background: "conic-gradient(from 90deg at 50% 50%,".concat(endColor, " 0deg, ").concat(color, " 360deg)")
    }));
  } else {
    setStyle(circleElem, _objectSpread(_objectSpread({}, basicStyle), {}, {
      background: ""
    }));
  }
}

var GradientIcon = defineComponent({
  name: "TLoadingGradient",
  setup: function setup() {
    var classPrefix = usePrefixClass();
    var circleRef = ref();
    onMounted(function () {
      nextTick(function () {
        circleAdapter(circleRef.value);
      });
    });
    return function () {
      var name = "".concat(classPrefix.value, "-loading__gradient");
      var classes = [name, "".concat(classPrefix.value, "-icon-loading")];
      return createVNode("svg", {
        "class": classes,
        "viewBox": "0 0 12 12",
        "version": "1.1",
        "width": "1em",
        "height": "1em",
        "xmlns": "http://www.w3.org/2000/svg"
      }, [createVNode("foreignObject", {
        "x": "0",
        "y": "0",
        "width": "12",
        "height": "12"
      }, [createVNode("div", {
        "class": "".concat(name, "-conic"),
        "ref": circleRef
      }, null)])]);
    };
  }
});

export { GradientIcon as default };
//# sourceMappingURL=gradient.mjs.map
