/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, computed, ref, watchEffect, onMounted, createVNode, Fragment } from 'vue';
import { QRCodeSubComponentProps } from './props.mjs';
import { u as useQRCode, a as DEFAULT_MINVERSION, b as DEFAULT_NEED_MARGIN, e as excavateModules, i as isSupportPath2d, g as generatePath } from '../../_chunks/dep-b5e67474.mjs';
import '../../_chunks/dep-84fd47b3.mjs';
import '../../_chunks/dep-1dacc319.mjs';
import '../../_chunks/dep-257428bc.mjs';

var QRCodeCanvas = defineComponent({
  name: "QRCodeCanvas",
  props: QRCodeSubComponentProps,
  setup: function setup(props) {
    var imgSrc = computed(function () {
      var _props$imageSettings;
      return (_props$imageSettings = props.imageSettings) === null || _props$imageSettings === void 0 ? void 0 : _props$imageSettings.src;
    });
    var imageRef = ref(null);
    var canvasRef = ref(null);
    var imgCrossOrigin = ref("");
    var renderQRCode = function renderQRCode() {
      var _calculatedImageSetti;
      var _useQRCode = useQRCode({
          value: props.value,
          level: props.level,
          minVersion: DEFAULT_MINVERSION,
          includeMargin: DEFAULT_NEED_MARGIN,
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
        cellsToDraw = computed(function () {
          return excavateModules(cells.value, calculatedImageSettings.value.excavation);
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
      if (isSupportPath2d) {
        ctx.fill(new Path2D(generatePath(cellsToDraw.value, margin.value)));
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
    watchEffect(function () {
      renderQRCode();
    });
    onMounted(function () {
      renderQRCode();
    });
    return function () {
      return createVNode(Fragment, null, [createVNode("canvas", {
        "ref": canvasRef,
        "role": "img"
      }, null), imgSrc.value != null ? createVNode("img", {
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

export { QRCodeCanvas as default };
//# sourceMappingURL=qrcode-canvas.mjs.map
