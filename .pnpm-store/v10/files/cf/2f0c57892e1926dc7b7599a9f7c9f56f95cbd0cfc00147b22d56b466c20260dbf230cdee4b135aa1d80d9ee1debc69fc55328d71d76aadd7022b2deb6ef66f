/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../../_chunks/dep-953a77eb.js');
var index = require('../../_chunks/dep-ecaaae91.js');
require('@babel/runtime/helpers/slicedToArray');
require('../../_chunks/dep-cc66acf1.js');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var setStyle = require('../../_chunks/dep-c3dee00a.js');
var helper = require('../../_chunks/dep-55c70201.js');
require('../../_chunks/dep-8abdfb41.js');
require('../../config-provider/hooks/useConfig.js');
require('../../_chunks/dep-5d7e2375.js');
require('../../_chunks/dep-94a7dc2d.js');
require('dayjs');
require('../../_chunks/dep-92e23f17.js');
require('../../_chunks/dep-0ff616fe.js');
require('../../_chunks/dep-5f52cd42.js');
require('../../_chunks/dep-48f60c78.js');
require('../../_chunks/dep-b3b464e8.js');
require('../../_chunks/dep-0813861e.js');
require('../../_chunks/dep-f57bcb19.js');
require('../../_chunks/dep-dc4bbc14.js');
require('../../_chunks/dep-05f89f0d.js');
require('../../_chunks/dep-87589faa.js');
require('../../_chunks/dep-e27ea667.js');
require('../../_chunks/dep-165ca38a.js');
require('../../_chunks/dep-32412d92.js');
require('../../_chunks/dep-a8a3d718.js');
require('../../_chunks/dep-54e566d9.js');
require('../../_chunks/dep-591a72de.js');
require('../../_chunks/dep-a55e8a08.js');
require('../../_chunks/dep-8adeee89.js');
require('../../_chunks/dep-4d2ef282.js');
require('../../_chunks/dep-929933ce.js');
require('../../_chunks/dep-6b1f0ef8.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');
require('@babel/runtime/helpers/objectWithoutProperties');
require('../../_chunks/dep-fd5a369e.js');
require('../../_chunks/dep-4ccaead1.js');
require('../../_chunks/dep-990979bb.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
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
  if (color && helper.getIEVersion() > 11) {
    var matched = color.match(/[\d.]+/g);
    var endColor = matched ? "rgba(".concat(matched[0], ", ").concat(matched[1], ", ").concat(matched[2], ", 0)") : "";
    setStyle.setStyle(circleElem, _objectSpread(_objectSpread({}, basicStyle), {}, {
      background: "conic-gradient(from 90deg at 50% 50%,".concat(endColor, " 0deg, ").concat(color, " 360deg)")
    }));
  } else {
    setStyle.setStyle(circleElem, _objectSpread(_objectSpread({}, basicStyle), {}, {
      background: ""
    }));
  }
}

var GradientIcon = Vue.defineComponent({
  name: "TLoadingGradient",
  setup: function setup() {
    var classPrefix = index.usePrefixClass();
    var circleRef = Vue.ref();
    Vue.onMounted(function () {
      Vue.nextTick(function () {
        circleAdapter(circleRef.value);
      });
    });
    return function () {
      var name = "".concat(classPrefix.value, "-loading__gradient");
      var classes = [name, "".concat(classPrefix.value, "-icon-loading")];
      return Vue.createVNode("svg", {
        "class": classes,
        "viewBox": "0 0 12 12",
        "version": "1.1",
        "width": "1em",
        "height": "1em",
        "xmlns": "http://www.w3.org/2000/svg"
      }, [Vue.createVNode("foreignObject", {
        "x": "0",
        "y": "0",
        "width": "12",
        "height": "12"
      }, [Vue.createVNode("div", {
        "class": "".concat(name, "-conic"),
        "ref": circleRef
      }, null)])]);
    };
  }
});

exports["default"] = GradientIcon;
//# sourceMappingURL=gradient.js.map
