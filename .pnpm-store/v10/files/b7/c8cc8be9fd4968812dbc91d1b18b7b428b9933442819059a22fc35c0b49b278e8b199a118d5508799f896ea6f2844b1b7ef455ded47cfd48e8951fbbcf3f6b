/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { PLACEMENT_LIST } from '../consts/index.js';

var ANIMATION_OPTION = {
  duration: 200,
  easing: "linear"
};
var getFadeInKeyframes = function getFadeInKeyframes(placement, offsetWidth, offsetHeight) {
  if (!PLACEMENT_LIST.includes(placement)) return null;
  if (placement === "top-right") {
    return [{
      opacity: 0,
      transform: "translateX(".concat(offsetWidth, "px)")
    }, {
      opacity: 1,
      transform: "translateX(0px)"
    }];
  }
  if (placement === "bottom-right") {
    return [{
      opacity: 0,
      transform: "translateX(".concat(offsetWidth, "px)"),
      marginBottom: "-".concat(offsetHeight, "px")
    }, {
      opacity: 1,
      transform: "translateX(0px)"
    }];
  }
  if (placement === "top-left") {
    return [{
      opacity: 0,
      transform: "translateX(-".concat(offsetWidth, "px)")
    }, {
      opacity: 1,
      transform: "translateX(0px)"
    }];
  }
  if (placement === "bottom-left") {
    return [{
      opacity: 0,
      transform: "translateX(-".concat(offsetWidth, "px)"),
      marginBottom: "-".concat(offsetHeight, "px")
    }, {
      opacity: 1,
      transform: "translateX(0px)"
    }];
  }
};
var getFadeOutKeyframes = function getFadeOutKeyframes(placement, offsetWidth, offsetHeight) {
  if (!PLACEMENT_LIST.includes(placement)) return null;
  if (placement === "top-right") {
    return [{
      opacity: 1,
      transform: "translateX(0px)"
    }, {
      opacity: 0,
      transform: "translateX(".concat(offsetWidth, "px)"),
      marginBottom: "-".concat(offsetHeight, "px")
    }];
  }
  if (placement === "bottom-right") {
    return [{
      opacity: 1,
      transform: "translateX(0px)"
    }, {
      opacity: 0,
      transform: "translateX(".concat(offsetWidth, "px)")
    }];
  }
  if (placement === "top-left") {
    return [{
      opacity: 1,
      transform: "translateX(0px)"
    }, {
      opacity: 0,
      transform: "translateX(-".concat(offsetWidth, "px)"),
      marginBottom: "-".concat(offsetHeight, "px")
    }];
  }
  if (placement === "bottom-left") {
    return [{
      opacity: 1,
      transform: "translateX(0px)"
    }, {
      opacity: 0,
      transform: "translateX(-".concat(offsetWidth, "px)")
    }];
  }
};
var fadeIn = function fadeIn(dom, placement) {
  if (!dom) return;
  var offsetHeight = (dom === null || dom === void 0 ? void 0 : dom.offsetHeight) || 0;
  var offsetWidth = (dom === null || dom === void 0 ? void 0 : dom.offsetWidth) || 0;
  var keyframes = getFadeInKeyframes(placement, offsetWidth, offsetHeight);
  if (!keyframes) return;
  dom.animate && dom.animate(keyframes, ANIMATION_OPTION);
};
var fadeOut = function fadeOut(dom, placement, onFinish) {
  if (!dom) return;
  var offsetHeight = (dom === null || dom === void 0 ? void 0 : dom.offsetHeight) || 0;
  var offsetWidth = (dom === null || dom === void 0 ? void 0 : dom.offsetWidth) || 0;
  var keyframes = getFadeOutKeyframes(placement, offsetWidth, offsetHeight);
  if (!keyframes) return onFinish();
  var animate = dom.animate && dom.animate(keyframes, ANIMATION_OPTION);
  if (animate) {
    animate.onfinish = function () {
      onFinish();
    };
  } else {
    dom.style.display = "none";
    onFinish();
  }
};

export { fadeIn, fadeOut };
//# sourceMappingURL=animate.js.map
