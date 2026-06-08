/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, ref, shallowRef, reactive, computed, onMounted, watch, createVNode } from 'vue';
import props from './props.js';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-fe23be6e.js';
import { a as useContent } from '../_chunks/dep-2accc95a.js';
import { u as usePrefixClass } from '../_chunks/dep-9e6d8a78.js';
import '@babel/runtime/helpers/slicedToArray';
import '../_chunks/dep-880d05b9.js';
import { s as setStyle } from '../_chunks/dep-2ea19dca.js';
import { u as useVariables } from '../_chunks/dep-39f00c42.js';
import { useMutationObserver } from './hooks/index.js';
import '../_chunks/dep-81b01cae.js';
import '../_chunks/dep-16bcfabc.js';
import '../_chunks/dep-fb805f69.js';
import '../config-provider/hooks/useConfig.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '../_chunks/dep-30c631d1.js';
import '@babel/runtime/helpers/objectWithoutProperties';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function generateBase64Url(_ref, onFinish) {
  var width = _ref.width,
    height = _ref.height,
    gapX = _ref.gapX,
    gapY = _ref.gapY,
    offsetLeft = _ref.offsetLeft,
    offsetTop = _ref.offsetTop,
    rotate = _ref.rotate,
    alpha = _ref.alpha,
    watermarkContent = _ref.watermarkContent,
    lineSpace = _ref.lineSpace,
    _ref$fontColor = _ref.fontColor,
    fontColor = _ref$fontColor === void 0 ? "rgba(0,0,0,0.1)" : _ref$fontColor,
    layout = _ref.layout;
  var isHexagonal = layout === "hexagonal";
  var canvas = document.createElement("canvas");
  var ctx = canvas.getContext("2d");
  if (!ctx) {
    console.warn("\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301Canvas, \u65E0\u6CD5\u7ED8\u5236\u6C34\u5370");
    onFinish("");
    return;
  }
  var ratio = window.devicePixelRatio || 1;
  var actualBackgroundSize = {
    width: gapX + width
  };
  var canvasWidth = (gapX + width) * ratio;
  var canvasHeight = (gapY + height) * ratio;
  var markWidth = width * ratio;
  var markHeight = height * ratio;
  var dislocationRotateX = canvasWidth;
  var dislocationRotateY = canvasHeight;
  var dislocationDrawX = (gapX + width) * ratio;
  var dislocationDrawY = (gapY + height) * ratio;
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
  canvas.style.width = "".concat(gapX + width, "px");
  canvas.style.height = "".concat(gapY + height, "px");
  if (isHexagonal) {
    canvas.style.width = "".concat(canvasWidth * 2, "px");
    canvas.style.height = "".concat(canvasHeight * 2, "px");
    canvas.width = canvasWidth * 2;
    canvas.height = canvasHeight * 2;
    actualBackgroundSize = {
      width: gapX + width * 2 + width / 2
    };
  }
  ctx.translate(offsetLeft * ratio, offsetTop * ratio);
  ctx.globalAlpha = alpha;
  ctx.fillStyle = "transparent";
  ctx.fillRect(0, 0, markWidth, markHeight);
  var drawRotate = function drawRotate(ctx2, x, y, rotate2) {
    ctx2.translate(x, y);
    ctx2.rotate(Math.PI / 180 * Number(rotate2));
    ctx2.translate(-x, -y);
  };
  var drawText = function drawText(ctx2, x, y, markHeight2, text, fontWeight, fontSize, fontFamily, fillStyle) {
    ctx2.font = "normal normal ".concat(fontWeight, " ").concat(fontSize * ratio, "px/").concat(markHeight2, "px ").concat(fontFamily);
    ctx2.fillStyle = fillStyle;
    ctx2.textAlign = "start";
    ctx2.textBaseline = "top";
    ctx2.fillText(text, x, y);
  };
  var contents = Array.isArray(watermarkContent) ? watermarkContent : [_objectSpread({}, watermarkContent)];
  var top = 0;
  var imageLoadCount = 0;
  var totalImages = 0;
  contents.forEach(function (item) {
    item.top = top;
    if (item.url) {
      top += height;
      totalImages += isHexagonal ? 2 : 1;
    } else if (item.text) {
      top += lineSpace;
    }
  });
  var renderWatermarkItem = function renderWatermarkItem(item) {
    var offsetX = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var offsetY = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var rotateX = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var rotateY = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
    if (item.url) {
      var url = item.url,
        _item$isGrayscale = item.isGrayscale,
        isGrayscale = _item$isGrayscale === void 0 ? false : _item$isGrayscale;
      var img = new Image();
      img.crossOrigin = "anonymous";
      img.referrerPolicy = "no-referrer";
      img.src = url;
      img.onload = function () {
        var _ctx$save, _ctx$restore;
        (_ctx$save = ctx.save) === null || _ctx$save === void 0 || _ctx$save.call(ctx);
        drawRotate(ctx, rotateX, rotateY, rotate);
        if (isGrayscale) {
          var tempCanvas = document.createElement("canvas");
          var tempCtx = tempCanvas.getContext("2d");
          tempCanvas.width = width * ratio;
          tempCanvas.height = height * ratio;
          tempCtx.drawImage(img, 0, 0, width * ratio, height * ratio);
          var imgData = tempCtx.getImageData(0, 0, width * ratio, height * ratio);
          var pixels = imgData.data;
          for (var i = 0; i < pixels.length; i += 4) {
            var lightness = (pixels[i] + pixels[i + 1] + pixels[i + 2]) / 3;
            pixels[i] = lightness;
            pixels[i + 1] = lightness;
            pixels[i + 2] = lightness;
          }
          tempCtx.putImageData(imgData, 0, 0);
          ctx.drawImage(tempCanvas, offsetX, offsetY + item.top * ratio, width * ratio, height * ratio);
        } else {
          ctx.drawImage(img, offsetX, offsetY + item.top * ratio, width * ratio, height * ratio);
        }
        (_ctx$restore = ctx.restore) === null || _ctx$restore === void 0 || _ctx$restore.call(ctx);
        imageLoadCount += 1;
        if (imageLoadCount === totalImages) {
          onFinish(canvas.toDataURL(), actualBackgroundSize);
        }
      };
    } else if (item.text) {
      var _ctx$save2, _ctx$restore2;
      var text = item.text,
        _item$fontSize = item.fontSize,
        fontSize = _item$fontSize === void 0 ? 16 : _item$fontSize,
        _item$fontFamily = item.fontFamily,
        fontFamily = _item$fontFamily === void 0 ? "normal" : _item$fontFamily,
        _item$fontWeight = item.fontWeight,
        fontWeight = _item$fontWeight === void 0 ? "normal" : _item$fontWeight;
      var fillStyle = (item === null || item === void 0 ? void 0 : item.fontColor) || fontColor;
      (_ctx$save2 = ctx.save) === null || _ctx$save2 === void 0 || _ctx$save2.call(ctx);
      drawRotate(ctx, rotateX, rotateY, rotate);
      drawText(ctx, offsetX, offsetY + item.top * ratio, markHeight, text, fontWeight, fontSize, fontFamily, fillStyle);
      (_ctx$restore2 = ctx.restore) === null || _ctx$restore2 === void 0 || _ctx$restore2.call(ctx);
    }
  };
  contents.forEach(function (item) {
    renderWatermarkItem(item, 0, 0, 0, 0);
  });
  if (isHexagonal) {
    contents.forEach(function (item) {
      renderWatermarkItem(item, dislocationDrawX, dislocationDrawY, dislocationRotateX, dislocationRotateY);
    });
  }
  if (totalImages === 0) {
    onFinish(canvas.toDataURL(), actualBackgroundSize);
  }
}

function randomMovingStyle() {
  var align = Math.floor(Math.random() * 4);
  var p1 = Math.floor(Math.random() * 70) + 30;
  var leftTopLimit = 0;
  var bottomLimit = 95;
  var rightLimit = 90;
  var keyframesStyle = "\n  @keyframes watermark {\n    0%   {left: ".concat(align === 1 ? rightLimit : align === 3 ? leftTopLimit : p1, "%; top: ").concat(align === 0 ? leftTopLimit : align === 2 ? bottomLimit : p1, "%;}\n    25% {left: ").concat(align === 0 ? rightLimit : align === 2 ? leftTopLimit : 100 - p1, "%; top: ").concat(align === 1 ? bottomLimit : align === 3 ? leftTopLimit : p1, "%;}\n    50% {left: ").concat(align === 1 ? leftTopLimit : align === 3 ? rightLimit : 100 - p1, "%; top: ").concat(align === 0 ? bottomLimit : align === 2 ? leftTopLimit : 100 - p1, "%; transform: translateX(-100%);}\n    75% {left: ").concat(align === 0 ? leftTopLimit : align === 2 ? rightLimit : p1, "%; top: ").concat(align === 1 ? leftTopLimit : align === 3 ? bottomLimit : 100 - p1, "%;}\n    100% {left: ").concat(align === 1 ? rightLimit : align === 3 ? leftTopLimit : p1, "%; top: ").concat(align === 0 ? leftTopLimit : align === 2 ? bottomLimit : p1, "%;}\n  }\n  ");
  return keyframesStyle;
}

var injectStyle = function injectStyle(style) {
  var styleElement = document.createElement("style");
  var styleSheet = null;
  document.head.appendChild(styleElement);
  styleSheet = styleElement.sheet;
  styleSheet.insertRule(style, styleSheet.cssRules.length);
};

function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var _Watermark = defineComponent({
  name: "TWatermark",
  props: props,
  setup: function setup(props2) {
    var backgroundImage = ref("");
    var watermarkRef = shallowRef();
    var watermarkContentRef = shallowRef();
    var offset = reactive(props2.offset || []);
    var gapX = computed(function () {
      return props2.movable ? 0 : props2.x;
    });
    var gapY = computed(function () {
      return props2.movable ? 0 : props2.y;
    });
    var rotate = computed(function () {
      return props2.movable ? 0 : props2.rotate;
    });
    var backgroundRepeat = computed(function () {
      if (props2.movable) {
        return "no-repeat";
      }
      return props2.isRepeat ? "repeat" : "no-repeat";
    });
    var offsetLeft = computed(function () {
      return offset[0] || gapX.value / 2;
    });
    var offsetTop = computed(function () {
      return offset[1] || gapY.value / 2;
    });
    var _useVariables = useVariables({
        fontColor: "--td-text-color-watermark"
      }),
      fontColor = _useVariables.fontColor;
    var bgImageOptions = computed(function () {
      return {
        width: props2.width,
        height: props2.height,
        rotate: rotate.value,
        lineSpace: props2.lineSpace,
        alpha: props2.alpha,
        gapX: gapX.value,
        gapY: gapY.value,
        watermarkContent: props2.watermarkContent,
        offsetLeft: offsetLeft.value,
        offsetTop: offsetTop.value,
        fontColor: fontColor.value,
        layout: props2.layout
      };
    });
    var removeWaterMark = function removeWaterMark() {
      if (!watermarkContentRef.value) return;
      watermarkContentRef.value.remove();
      watermarkContentRef.value = null;
    };
    var injectWaterMark = function injectWaterMark() {
      generateBase64Url(bgImageOptions.value, function (base64Url, backgroundSize) {
        var _watermarkRef$value;
        removeWaterMark();
        backgroundImage.value = base64Url;
        watermarkContentRef.value = document.createElement("div");
        setStyle(watermarkContentRef.value, {
          zIndex: props2.zIndex,
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          width: "100%",
          height: "100%",
          backgroundSize: "".concat((backgroundSize === null || backgroundSize === void 0 ? void 0 : backgroundSize.width) || gapX.value + props2.width, "px"),
          pointerEvents: "none",
          backgroundRepeat: backgroundRepeat.value,
          backgroundImage: "url('".concat(backgroundImage.value, "')"),
          animation: props2.movable ? "watermark infinite ".concat(props2.moveInterval * 4 / 60, "s") : "none"
        });
        (_watermarkRef$value = watermarkRef.value) === null || _watermarkRef$value === void 0 || _watermarkRef$value.append(watermarkContentRef.value);
      });
      if (props2.movable) {
        var keyframesStyle = randomMovingStyle();
        injectStyle(keyframesStyle);
      }
    };
    onMounted(function () {
      injectWaterMark();
      useMutationObserver(watermarkRef.value, function (mutations) {
        if (props2.removable || !watermarkContentRef.value) return;
        var _iterator = _createForOfIteratorHelper(mutations),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var mutation = _step.value;
            var isRemoved = Array.from(mutation.removedNodes).includes(watermarkContentRef.value);
            var isModified = mutation.type === "attributes" && watermarkContentRef.value === mutation.target;
            if (isRemoved || isModified) {
              injectWaterMark();
              break;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }, {
        attributes: true,
        childList: true,
        characterData: true,
        subtree: true
      });
    });
    watch(function () {
      return [props2, fontColor.value];
    }, injectWaterMark, {
      deep: true,
      flush: "post"
    });
    return function () {
      var COMPONENT_NAME = usePrefixClass("watermark");
      var renderContent = useContent();
      return createVNode("div", {
        "style": {
          position: "relative",
          overflow: "hidden",
          width: "100%"
        },
        "class": COMPONENT_NAME.value,
        "ref": watermarkRef
      }, [renderContent("default", "content")]);
    };
  }
});

export { _Watermark as default };
//# sourceMappingURL=watermark.js.map
