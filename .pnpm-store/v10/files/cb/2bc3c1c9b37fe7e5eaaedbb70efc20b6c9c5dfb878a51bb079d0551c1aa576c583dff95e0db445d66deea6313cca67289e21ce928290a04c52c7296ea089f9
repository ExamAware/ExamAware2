/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { _ as _defineProperty } from '../../_chunks/dep-1dacc319.mjs';
import { p as positiveAdd, i as positiveSubtract } from '../../_chunks/dep-29754cb4.mjs';
import { ref, watch } from 'vue';
import { throttle } from 'lodash-es';
import '../../_chunks/dep-257428bc.mjs';
import '../../_chunks/dep-db81c302.mjs';
import '../../_chunks/dep-9003fde5.mjs';
import '../../_chunks/dep-9f459d8b.mjs';
import '../../_chunks/dep-97ecacde.mjs';
import '../../_chunks/dep-6d2705e1.mjs';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function useDrag(initTransform) {
  var transform = ref(initTransform);
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
  var mirror = ref(1);
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
  var scale = ref(defaultScale);
  var onZoomIn = throttle(function () {
    var result = positiveAdd(scale.value, step);
    setScale(result);
  }, 50);
  var onZoomOut = throttle(function () {
    var result = positiveSubtract(scale.value, step);
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
  watch(function () {
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
  var rotate = ref(0);
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

export { useDrag, useMirror, useRotate, useScale };
//# sourceMappingURL=index.mjs.map
