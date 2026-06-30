/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, computed, createVNode } from 'vue';
import { QRCodeSubComponentProps } from './props.js';
import { u as useQRCode, a as DEFAULT_MINVERSION, b as DEFAULT_NEED_MARGIN, e as excavateModules, g as generatePath } from '../../_chunks/dep-b095b7ad.js';
import '@babel/runtime/helpers/classCallCheck';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/defineProperty';

var QRCodeSVG = defineComponent({
  name: "QRCodeSVG",
  props: QRCodeSubComponentProps,
  setup: function setup(props) {
    var qrCodeData = computed(function () {
      return useQRCode({
        value: props.value,
        level: props.level,
        minVersion: DEFAULT_MINVERSION,
        includeMargin: DEFAULT_NEED_MARGIN,
        marginSize: props.marginSize,
        imageSettings: props.imageSettings,
        size: props.size
      });
    });
    var cellsToDraw = computed(function () {
      var _calculatedImageSetti;
      var _qrCodeData$value = qrCodeData.value,
        cells = _qrCodeData$value.cells,
        calculatedImageSettings = _qrCodeData$value.calculatedImageSettings;
      if (props.imageSettings && ((_calculatedImageSetti = calculatedImageSettings.value) === null || _calculatedImageSetti === void 0 ? void 0 : _calculatedImageSetti.excavation) != null) {
        return excavateModules(cells.value, calculatedImageSettings.value.excavation);
      }
      return cells.value;
    });
    var imageNode = computed(function () {
      var _qrCodeData$value2 = qrCodeData.value,
        calculatedImageSettings = _qrCodeData$value2.calculatedImageSettings,
        margin = _qrCodeData$value2.margin;
      if (!props.imageSettings || !calculatedImageSettings.value) return null;
      return createVNode("image", {
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
      var fgPath = generatePath(cellsToDraw.value, margin.value);
      return createVNode("svg", {
        "height": props.size,
        "width": props.size,
        "viewBox": "0 0 ".concat(numCells.value, " ").concat(numCells.value),
        "role": "img",
        "style": props.style
      }, [!!props.title && createVNode("title", null, [props.title]), createVNode("path", {
        "fill": props.bgColor,
        "d": "M0,0 h".concat(numCells.value, "v").concat(numCells.value, "H0z"),
        "shape-rendering": "crispEdges"
      }, null), createVNode("path", {
        "fill": props.fgColor,
        "d": fgPath,
        "shape-rendering": "crispEdges"
      }, null), imageNode.value]);
    };
  }
});

export { QRCodeSVG as default };
//# sourceMappingURL=qrcode-svg.js.map
