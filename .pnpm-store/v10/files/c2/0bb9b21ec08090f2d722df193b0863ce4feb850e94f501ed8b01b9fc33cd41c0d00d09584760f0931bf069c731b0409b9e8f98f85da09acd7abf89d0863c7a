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

var QRCodeSVG = Vue.defineComponent({
  name: "QRCodeSVG",
  props: qrcode_components_props.QRCodeSubComponentProps,
  setup: function setup(props) {
    var qrCodeData = Vue.computed(function () {
      return qrcode_hooks_useQRCode.useQRCode({
        value: props.value,
        level: props.level,
        minVersion: qrcode_hooks_useQRCode.DEFAULT_MINVERSION,
        includeMargin: qrcode_hooks_useQRCode.DEFAULT_NEED_MARGIN,
        marginSize: props.marginSize,
        imageSettings: props.imageSettings,
        size: props.size
      });
    });
    var cellsToDraw = Vue.computed(function () {
      var _calculatedImageSetti;
      var _qrCodeData$value = qrCodeData.value,
        cells = _qrCodeData$value.cells,
        calculatedImageSettings = _qrCodeData$value.calculatedImageSettings;
      if (props.imageSettings && ((_calculatedImageSetti = calculatedImageSettings.value) === null || _calculatedImageSetti === void 0 ? void 0 : _calculatedImageSetti.excavation) != null) {
        return qrcode_hooks_useQRCode.excavateModules(cells.value, calculatedImageSettings.value.excavation);
      }
      return cells.value;
    });
    var imageNode = Vue.computed(function () {
      var _qrCodeData$value2 = qrCodeData.value,
        calculatedImageSettings = _qrCodeData$value2.calculatedImageSettings,
        margin = _qrCodeData$value2.margin;
      if (!props.imageSettings || !calculatedImageSettings.value) return null;
      return Vue.createVNode("image", {
        "href": props.imageSettings.src,
        "height": calculatedImageSettings.value.h,
        "width": calculatedImageSettings.value.w,
        "x": calculatedImageSettings.value.x + margin.value,
        "y": calculatedImageSettings.value.y + margin.value,
        "crossOrigin": calculatedImageSettings.value.crossOrigin
      }, null);
    });
    return function () {
      var _qrCodeData$value3 = qrCodeData.value,
        margin = _qrCodeData$value3.margin,
        numCells = _qrCodeData$value3.numCells;
      var fgPath = qrcode_hooks_useQRCode.generatePath(cellsToDraw.value, margin.value);
      return Vue.createVNode("svg", {
        "height": props.size,
        "width": props.size,
        "viewBox": "0 0 ".concat(numCells.value, " ").concat(numCells.value),
        "role": "img",
        "style": props.style
      }, [!!props.title && Vue.createVNode("title", null, [props.title]), Vue.createVNode("path", {
        "fill": props.bgColor,
        "d": "M0,0 h".concat(numCells.value, "v").concat(numCells.value, "H0z"),
        "shape-rendering": "crispEdges"
      }, null), Vue.createVNode("path", {
        "fill": props.fgColor,
        "d": fgPath,
        "shape-rendering": "crispEdges"
      }, null), imageNode.value]);
    };
  }
});

exports["default"] = QRCodeSVG;
//# sourceMappingURL=qrcode-svg.js.map
