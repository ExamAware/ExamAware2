/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var number = require('../../_chunks/dep-2359c164.js');
var Vue = require('vue');
var throttle = require('../../_chunks/dep-9071ce5e.js');
require('../../_chunks/dep-48e7c2a2.js');
require('@babel/runtime/helpers/slicedToArray');
require('../../_chunks/dep-733b2b51.js');
require('../../_chunks/dep-0813861e.js');
require('@babel/runtime/helpers/typeof');
require('../../_chunks/dep-a55e8a08.js');
require('../../_chunks/dep-b3b464e8.js');
require('../../_chunks/dep-87589faa.js');
require('../../_chunks/dep-05f89f0d.js');
require('../../_chunks/dep-990979bb.js');
require('../../_chunks/dep-fd5a369e.js');
require('../../_chunks/dep-441a3b7b.js');
require('../../_chunks/dep-e86abdd2.js');
require('../../_chunks/dep-80a478d7.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function useDrag(initTransform) {
  var transform = Vue.ref(initTransform);
  var mouseDownHandler = function mouseDownHandler(e) {
    if ("button" in e && e.button !== 0) return;
    var startX = e.pageX,
      startY = e.pageY;
    var _transform$value = transform.value,
      translateX = _transform$value.translateX,
      translateY = _transform$value.translateY;
    var mouseMoveHandler = function mouseMoveHandler(e2) {
      var pageX = e2.pageX,
        pageY = e2.pageY;
      transform.value = {
        translateX: translateX + pageX - startX,
        translateY: translateY + pageY - startY
      };
    };
    var removeHandler = function removeHandler() {
      document.removeEventListener("mousemove", mouseMoveHandler);
      document.removeEventListener("mouseup", mouseUpHandler);
      document.removeEventListener("mouseleave", mouseLeaveHandler);
    };
    var mouseUpHandler = function mouseUpHandler() {
      return removeHandler();
    };
    var mouseLeaveHandler = function mouseLeaveHandler() {
      return removeHandler();
    };
    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseup", mouseUpHandler);
    document.addEventListener("mouseleave", mouseLeaveHandler);
  };
  var resetTransform = function resetTransform() {
    transform.value = _objectSpread({}, initTransform);
  };
  return {
    transform: transform,
    mouseDownHandler: mouseDownHandler,
    resetTransform: resetTransform
  };
}
function useMirror() {
  var mirror = Vue.ref(1);
  var onMirror = function onMirror() {
    mirror.value *= -1;
  };
  var resetMirror = function resetMirror() {
    mirror.value = 1;
  };
  return {
    mirror: mirror,
    onMirror: onMirror,
    resetMirror: resetMirror
  };
}
function useScale(imageScale) {
  var params = _objectSpread({
    max: 2,
    min: 0.5,
    step: 0.2,
    defaultScale: 1
  }, imageScale);
  var max = params.max,
    min = params.min,
    step = params.step,
    defaultScale = params.defaultScale;
  var scale = Vue.ref(defaultScale);
  var onZoomIn = throttle.throttle(function () {
    var result = number.positiveAdd(scale.value, step);
    setScale(result);
  }, 50);
  var onZoomOut = throttle.throttle(function () {
    var result = number.positiveSubtract(scale.value, step);
    setScale(result);
  }, 50);
  var resetScale = function resetScale() {
    scale.value = defaultScale;
  };
  var setScale = function setScale(newScale) {
    var value = newScale;
    if (newScale < min) {
      value = min;
    }
    if (newScale > max) {
      value = max;
    }
    scale.value = value;
  };
  Vue.watch(function () {
    return imageScale;
  }, function () {
    return resetScale();
  });
  return {
    scale: scale,
    onZoomIn: onZoomIn,
    onZoomOut: onZoomOut,
    resetScale: resetScale
  };
}
function useRotate() {
  var rotate = Vue.ref(0);
  var ROTATE_DEG = 90;
  var onRotate = function onRotate() {
    rotate.value += ROTATE_DEG;
  };
  var resetRotate = function resetRotate() {
    rotate.value = 0;
  };
  return {
    rotate: rotate,
    onRotate: onRotate,
    resetRotate: resetRotate
  };
}

exports.useDrag = useDrag;
exports.useMirror = useMirror;
exports.useRotate = useRotate;
exports.useScale = useScale;
//# sourceMappingURL=index.js.map
