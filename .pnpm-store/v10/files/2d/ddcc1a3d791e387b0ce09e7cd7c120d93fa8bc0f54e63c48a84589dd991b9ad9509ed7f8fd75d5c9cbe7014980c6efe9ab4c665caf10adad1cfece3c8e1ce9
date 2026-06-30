/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var qrcode_components_props = require('./props.js');
var qrcode_hooks_useQRCode = require('../../_chunks/dep-732976b1.js');
require('@babel/runtime/helpers/classCallCheck');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/defineProperty');

var QRCodeCanvas = Vue.defineComponent({
  name: "QRCodeCanvas",
  props: qrcode_components_props.QRCodeSubComponentProps,
  setup: function setup(props) {
    var imgSrc = Vue.computed(function () {
      var _props$imageSettings;
      return (_props$imageSettings = props.imageSettings) === null || _props$imageSettings === void 0 ? void 0 : _props$imageSettings.src;
    });
    var imageRef = Vue.ref(null);
    var canvasRef = Vue.ref(null);
    var imgCrossOrigin = Vue.ref("");
    var renderQRCode = function renderQRCode() {
      var _calculatedImageSetti;
      var _useQRCode = qrcode_hooks_useQRCode.useQRCode({
          value: props.value,
          level: props.level,
          minVersion: qrcode_hooks_useQRCode.DEFAULT_MINVERSION,
          includeMargin: qrcode_hooks_useQRCode.DEFAULT_NEED_MARGIN,
          marginSize: props.marginSize,
          imageSettings: props.imageSettings,
          size: props.size
        }),
        margin = _useQRCode.margin,
        cells = _useQRCode.cells,
        numCells = _useQRCode.numCells,
        calculatedImageSettings = _useQRCode.calculatedImageSettings;
      if (!canvasRef.value) {
        return;
      }
      var canvas = canvasRef.value;
      var ctx = canvas.getContext("2d");
      if (!ctx) {
        return;
      }
      imgCrossOrigin.value = (_calculatedImageSetti = calculatedImageSettings.value) === null || _calculatedImageSetti === void 0 ? void 0 : _calculatedImageSetti.crossOrigin;
      var cellsToDraw = cells;
      var image = imageRef.value;
      if (image) {
        image.crossOrigin = calculatedImageSettings.value.crossOrigin;
      }
      var haveImageToRender = calculatedImageSettings.value && image !== null && image.complete && image.naturalHeight !== 0 && image.naturalWidth !== 0;
      if (haveImageToRender && calculatedImageSettings.value.excavation != null) {
        cellsToDraw = Vue.computed(function () {
          return qrcode_hooks_useQRCode.excavateModules(cells.value, calculatedImageSettings.value.excavation);
        });
      }
      var pixelRatio = window.devicePixelRatio || 1;
      canvas.height = props.size * pixelRatio;
      canvas.width = props.size * pixelRatio;
      var scale = props.size / numCells.value * pixelRatio;
      ctx.scale(scale, scale);
      ctx.fillStyle = props.bgColor;
      ctx.fillRect(0, 0, numCells.value, numCells.value);
      ctx.fillStyle = props.fgColor;
      if (qrcode_hooks_useQRCode.isSupportPath2d) {
        ctx.fill(new Path2D(qrcode_hooks_useQRCode.generatePath(cellsToDraw.value, margin.value)));
      } else {
        cells.value.forEach(function (row, rdx) {
          row.forEach(function (cell, cdx) {
            if (cell) {
              ctx.fillRect(cdx + margin.value, rdx + margin.value, 1, 1);
            }
          });
        });
      }
      if (calculatedImageSettings) {
        ctx.globalAlpha = calculatedImageSettings.value.opacity;
      }
      if (haveImageToRender) {
        ctx.globalAlpha = calculatedImageSettings.value.opacity;
        ctx.drawImage(image, calculatedImageSettings.value.x + margin.value, calculatedImageSettings.value.y + margin.value, calculatedImageSettings.value.w, calculatedImageSettings.value.h);
      }
    };
    Vue.watchEffect(function () {
      renderQRCode();
    });
    Vue.onMounted(function () {
      renderQRCode();
    });
    return function () {
      return Vue.createVNode(Vue.Fragment, null, [Vue.createVNode("canvas", {
        "ref": canvasRef,
        "role": "img"
      }, null), imgSrc.value != null ? Vue.createVNode("img", {
        "ref": imageRef,
        "onLoad": renderQRCode,
        "style": {
          display: "none"
        },
        "src": imgSrc.value
      }, null) : null]);
    };
  }
});

exports["default"] = QRCodeCanvas;
//# sourceMappingURL=qrcode-canvas.js.map
