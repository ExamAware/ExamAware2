/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

var Vue = require('vue');
var index$1 = require('./dep-cc66acf1.js');
var index = require('./dep-ecaaae91.js');
var setStyle = require('./dep-c3dee00a.js');

var period = 200;
var noneRippleBg = "rgba(0, 0, 0, 0)";
var defaultRippleColor = "rgba(0, 0, 0, 0.35)";
var getRippleColor = function getRippleColor(el, fixedRippleColor) {
  var _el$dataset;
  if (fixedRippleColor) {
    return fixedRippleColor;
  }
  if (el !== null && el !== void 0 && (_el$dataset = el.dataset) !== null && _el$dataset !== void 0 && _el$dataset.ripple) {
    var rippleColor = el.dataset.ripple;
    return rippleColor;
  }
  if (el instanceof Element) {
    var cssVariable = getComputedStyle(el).getPropertyValue("--ripple-color");
    if (cssVariable) {
      return cssVariable;
    }
  }
  return defaultRippleColor;
};
function useRipple(el, fixedRippleColor) {
  var rippleContainer = Vue.ref(null);
  var classPrefix = index.usePrefixClass();
  var _useKeepAnimation = index$1.useKeepAnimation(),
    keepRipple = _useKeepAnimation.keepRipple;
  var handleAddRipple = function handleAddRipple(e) {
    var dom = el.value;
    if (!dom || !(dom instanceof Element)) return;
    var rippleColor = getRippleColor(dom, fixedRippleColor === null || fixedRippleColor === void 0 ? void 0 : fixedRippleColor.value);
    if (e.button !== 0 || !el || !keepRipple) return;
    if (dom.classList.contains("".concat(classPrefix.value, "-is-active")) || dom.classList.contains("".concat(classPrefix.value, "-is-disabled")) || dom.classList.contains("".concat(classPrefix.value, "-is-checked")) || dom.classList.contains("".concat(classPrefix.value, "-is-loading"))) return;
    if (!(dom instanceof Element)) return;
    var elStyle = getComputedStyle(dom);
    var elBorder = parseInt(elStyle.borderWidth, 10);
    var border = elBorder > 0 ? elBorder : 0;
    var width = dom.offsetWidth;
    var height = dom.offsetHeight;
    if (rippleContainer.value.parentNode === null) {
      setStyle.setStyle(rippleContainer.value, {
        position: "absolute",
        left: "".concat(0 - border, "px"),
        top: "".concat(0 - border, "px"),
        width: "".concat(width, "px"),
        height: "".concat(height, "px"),
        borderRadius: elStyle.borderRadius,
        pointerEvents: "none",
        overflow: "hidden"
      });
      dom.appendChild(rippleContainer.value);
    }
    var ripple = document.createElement("div");
    setStyle.setStyle(ripple, {
      marginTop: "0",
      marginLeft: "0",
      right: "".concat(width, "px"),
      width: "".concat(width + 20, "px"),
      height: "100%",
      transition: "transform ".concat(period, "ms cubic-bezier(.38, 0, .24, 1), background ").concat(period * 2, "ms linear"),
      transform: "skewX(-8deg)",
      pointerEvents: "none",
      position: "absolute",
      zIndex: 0,
      backgroundColor: rippleColor,
      opacity: "0.9"
    });
    var elMap = /* @__PURE__ */new WeakMap();
    for (var n = dom.children.length, i = 0; i < n; ++i) {
      var child = dom.children[i];
      if (child.style.zIndex === "" && child !== rippleContainer.value) {
        child.style.zIndex = "1";
        elMap.set(child, true);
      }
    }
    var initPosition = dom.style.position;
    if (!initPosition && dom instanceof Element) {
      initPosition = getComputedStyle(dom).position;
    }
    if (initPosition === "" || initPosition === "static") {
      dom.style.position = "relative";
    }
    rippleContainer.value.insertBefore(ripple, rippleContainer.value.firstChild);
    setTimeout(function () {
      ripple.style.transform = "translateX(".concat(width, "px)");
    }, 0);
    var _handleClearRipple = function handleClearRipple() {
      ripple.style.backgroundColor = noneRippleBg;
      if (!el.value) return;
      el.value.removeEventListener("pointerup", _handleClearRipple, false);
      el.value.removeEventListener("pointerleave", _handleClearRipple, false);
      setTimeout(function () {
        ripple.remove();
        if (rippleContainer.value.children.length === 0) rippleContainer.value.remove();
      }, period * 2 + 100);
    };
    el.value.addEventListener("pointerup", _handleClearRipple, false);
    el.value.addEventListener("pointerleave", _handleClearRipple, false);
  };
  Vue.onMounted(function () {
    var dom = el === null || el === void 0 ? void 0 : el.value;
    if (!dom) return;
    rippleContainer.value = document.createElement("div");
    dom.addEventListener("pointerdown", handleAddRipple, false);
  });
  Vue.onUnmounted(function () {
    var _el$value;
    el === null || el === void 0 || (_el$value = el.value) === null || _el$value === void 0 || _el$value.removeEventListener("pointerdown", handleAddRipple, false);
  });
}

exports.useRipple = useRipple;
//# sourceMappingURL=dep-0b6215b5.js.map
