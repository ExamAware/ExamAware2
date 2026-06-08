/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

function useCollapseAnimation() {
  var beforeEnter = function beforeEnter(el) {
    el.dataset.oldPaddingTop = el.style.paddingTop;
    el.dataset.oldPaddingBottom = el.style.paddingBottom;
    el.style.height = "0";
    el.style.paddingTop = "0";
    el.style.paddingBottom = "0";
  };
  var enter = function enter(el) {
    el.dataset.oldOverflow = el.style.overflow;
    el.style.height = "".concat(el.scrollHeight, "px");
    el.style.paddingTop = el.dataset.oldPaddingTop;
    el.style.paddingBottom = el.dataset.oldPaddingBottom;
    el.style.overflow = "hidden";
  };
  var afterEnter = function afterEnter(el) {
    el.style.height = "";
    el.style.overflow = el.dataset.oldOverflow;
  };
  var beforeLeave = function beforeLeave(el) {
    el.dataset.oldPaddingTop = el.style.paddingTop;
    el.dataset.oldPaddingBottom = el.style.paddingBottom;
    el.dataset.oldOverflow = el.style.overflow;
    el.style.height = "".concat(el.scrollHeight, "px");
    el.style.overflow = "hidden";
  };
  var leave = function leave(el) {
    if (el.scrollHeight !== 0) {
      el.style.height = "0";
      el.style.paddingTop = "0";
      el.style.paddingBottom = "0";
    }
  };
  var afterLeave = function afterLeave(el) {
    el.style.height = "";
    el.style.overflow = el.dataset.oldOverflow;
    el.style.paddingTop = el.dataset.oldPaddingTop;
    el.style.paddingBottom = el.dataset.oldPaddingBottom;
  };
  return {
    beforeEnter: beforeEnter,
    enter: enter,
    afterEnter: afterEnter,
    beforeLeave: beforeLeave,
    leave: leave,
    afterLeave: afterLeave
  };
}

exports.useCollapseAnimation = useCollapseAnimation;
//# sourceMappingURL=dep-670d3f43.js.map
