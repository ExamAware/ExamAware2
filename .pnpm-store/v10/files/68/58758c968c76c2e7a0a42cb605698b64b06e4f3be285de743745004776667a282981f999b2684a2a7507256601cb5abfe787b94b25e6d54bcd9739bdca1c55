/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { _ as _defineProperty } from '../../_chunks/dep-1dacc319.mjs';
import { ref, computed } from 'vue';
import '../../_chunks/dep-257428bc.mjs';

function getSizeDraggable(sizeDraggable, limit) {
  if (typeof sizeDraggable === "boolean") {
    return {
      allowSizeDraggable: sizeDraggable,
      max: limit.max,
      min: limit.min
    };
  }
  return {
    allowSizeDraggable: true,
    max: sizeDraggable.max,
    min: sizeDraggable.min
  };
}
function calcSizeRange(size, min, max) {
  return Math.min(Math.max(size, min), max);
}
function calcMoveSize(placement, opts) {
  var x = opts.x,
    y = opts.y,
    max = opts.max,
    min = opts.min,
    maxWidth = opts.maxWidth,
    maxHeight = opts.maxHeight;
  var moveSize;
  switch (placement) {
    case "right":
      moveSize = calcSizeRange(maxWidth - x, min, max);
      break;
    case "left":
      moveSize = calcSizeRange(x, min, max);
      break;
    case "top":
      moveSize = calcSizeRange(y, min, max);
      break;
    case "bottom":
      moveSize = calcSizeRange(maxHeight - y, min, max);
      break;
    default:
      return moveSize;
  }
  return moveSize;
}

var useDrag = function useDrag(props) {
  var isSizeDragging = ref(false);
  var draggedSizeValue = ref(null);
  var enableDrag = function enableDrag(e) {
    e.stopPropagation();
    document.addEventListener("mouseup", _handleMouseup, true);
    document.addEventListener("mousemove", handleMousemove, true);
    isSizeDragging.value = true;
  };
  var _handleMouseup = function handleMouseup() {
    document.removeEventListener("mouseup", _handleMouseup, true);
    document.removeEventListener("mousemove", handleMousemove, true);
    isSizeDragging.value = false;
  };
  var handleMousemove = function handleMousemove(e) {
    var _props$onSizeDragEnd;
    var x = e.x,
      y = e.y;
    var maxHeight = document.documentElement.clientHeight;
    var maxWidth = document.documentElement.clientWidth;
    var offsetHeight = 8;
    var offsetWidth = 8;
    var max = props.placement === "left" || props.placement === "right" ? maxWidth : maxHeight;
    var min = props.placement === "left" || props.placement === "right" ? offsetWidth : offsetHeight;
    var _getSizeDraggable = getSizeDraggable(props.sizeDraggable, {
        max: max,
        min: min
      }),
      allowSizeDraggable = _getSizeDraggable.allowSizeDraggable,
      limitMax = _getSizeDraggable.max,
      limitMin = _getSizeDraggable.min;
    if (!allowSizeDraggable || !isSizeDragging.value) return;
    var moveSize = calcMoveSize(props.placement, {
      x: x,
      y: y,
      maxWidth: maxWidth,
      maxHeight: maxHeight,
      max: limitMax,
      min: limitMin
    });
    if (typeof moveSize === "undefined") return;
    draggedSizeValue.value = "".concat(moveSize, "px");
    (_props$onSizeDragEnd = props.onSizeDragEnd) === null || _props$onSizeDragEnd === void 0 || _props$onSizeDragEnd.call(props, {
      e: e,
      size: moveSize
    });
  };
  var draggableLineStyles = computed(function () {
    var isHorizontal = ["right", "left"].includes(props.placement);
    var oppositeMap = {
      left: "right",
      right: "left",
      top: "bottom",
      bottom: "top"
    };
    return _defineProperty(_defineProperty(_defineProperty(_defineProperty({
      zIndex: 1,
      position: "absolute",
      background: "transparent"
    }, oppositeMap[props.placement], 0), "width", isHorizontal ? "16px" : "100%"), "height", isHorizontal ? "100%" : "16px"), "cursor", isHorizontal ? "col-resize" : "row-resize");
  });
  var draggingStyles = computed(function () {
    return isSizeDragging.value ? {
      userSelect: "none"
    } : {};
  });
  return {
    draggedSizeValue: draggedSizeValue,
    enableDrag: enableDrag,
    draggableLineStyles: draggableLineStyles,
    draggingStyles: draggingStyles
  };
};

export { useDrag };
//# sourceMappingURL=index.mjs.map
