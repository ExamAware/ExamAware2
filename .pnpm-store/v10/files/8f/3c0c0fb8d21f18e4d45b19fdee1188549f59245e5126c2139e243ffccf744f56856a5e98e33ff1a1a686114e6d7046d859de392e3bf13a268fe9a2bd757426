/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, computed, createVNode, mergeProps } from 'vue';
import { _ as _defineProperty } from '../_chunks/dep-1dacc319.mjs';
import props from './props.mjs';
import { D as DEFAULT_FRONT_COLOR } from '../_chunks/dep-b5e67474.mjs';
import { u as usePrefixClass, a as useTNodeJSX, z as useVariables } from '../_chunks/dep-7673347f.mjs';
import QRCodeCanvas from './components/qrcode-canvas.mjs';
import QRCodeSVG from './components/qrcode-svg.mjs';
import QRcodeStatus from './components/qrcode-status.mjs';
import { isNumber } from 'lodash-es';
import { useConfig } from '../config-provider/hooks/useConfig.mjs';
import '../_chunks/dep-257428bc.mjs';
import '../_chunks/dep-84fd47b3.mjs';
import '../_chunks/dep-00b4e06a.mjs';
import '../_chunks/dep-9f459d8b.mjs';
import '../_chunks/dep-51a43106.mjs';
import '../_chunks/dep-fe644854.mjs';
import '../_chunks/dep-22ebd6af.mjs';
import '../_chunks/dep-9003fde5.mjs';
import '../_chunks/dep-cdd448ec.mjs';
import '../_chunks/dep-97ecacde.mjs';
import '../config-provider/utils/context.mjs';
import '../_chunks/dep-a4c09318.mjs';
import '../_chunks/dep-ffb85102.mjs';
import '../_chunks/dep-ad588525.mjs';
import '../_chunks/dep-d36c4a3f.mjs';
import './components/props.mjs';
import 'tdesign-icons-vue-next';
import '../loading/index.mjs';
import '../loading/directive.mjs';
import '../loading/plugin.mjs';
import '../loading/loading.mjs';
import '../loading/icon/gradient.mjs';
import '../_chunks/dep-0cde7579.mjs';
import '../_chunks/dep-0dcc778a.mjs';
import '../loading/props.mjs';
import './style/css.mjs';

var _QRCode = defineComponent({
  name: "TQRCode",
  props: props,
  setup: function setup(props2) {
    var classPrefix = usePrefixClass();
    var renderTNodeJSX = useTNodeJSX();
    var _useConfig = useConfig("qrcode"),
      globalConfig = _useConfig.globalConfig;
    var _useVariables = useVariables({
        themeFgColor: "--td-text-color-primary",
        themeBgColor: "--td-bg-color-specialcomponent"
      }),
      themeFgColor = _useVariables.themeFgColor,
      themeBgColor = _useVariables.themeBgColor;
    var finalBgColor = computed(function () {
      return props2.bgColor || themeBgColor.value || "transparent";
    });
    var finalFgColor = computed(function () {
      return props2.color || themeFgColor.value || DEFAULT_FRONT_COLOR;
    });
    var imageSettings = computed(function () {
      var _props2$iconSize$heig, _props2$iconSize, _props2$iconSize$widt, _props2$iconSize2;
      return {
        src: props2.icon,
        x: void 0,
        y: void 0,
        height: isNumber(props2.iconSize) ? props2.iconSize : (_props2$iconSize$heig = (_props2$iconSize = props2.iconSize) === null || _props2$iconSize === void 0 ? void 0 : _props2$iconSize.height) !== null && _props2$iconSize$heig !== void 0 ? _props2$iconSize$heig : 40,
        width: isNumber(props2.iconSize) ? props2.iconSize : (_props2$iconSize$widt = (_props2$iconSize2 = props2.iconSize) === null || _props2$iconSize2 === void 0 ? void 0 : _props2$iconSize2.width) !== null && _props2$iconSize$widt !== void 0 ? _props2$iconSize$widt : 40,
        excavate: true,
        crossOrigin: "anonymous"
      };
    });
    var classes = computed(function () {
      return ["".concat(classPrefix.value, "-qrcode"), _defineProperty(_defineProperty({}, "".concat(classPrefix.value, "-borderless"), props2.borderless), "".concat(classPrefix.value, "-qrcode-svg"), props2.type === "svg")];
    });
    var mergedStyle = computed(function () {
      return {
        backgroundColor: finalBgColor.value,
        width: "".concat(props2.size, "px"),
        height: "".concat(props2.size, "px")
      };
    });
    return function () {
      var QRCodeProps = {
        value: props2.value,
        size: props2.size,
        bgColor: finalBgColor.value,
        fgColor: finalFgColor.value,
        imageSettings: props2.icon ? imageSettings.value : void 0,
        level: props2.level
      };
      return createVNode("div", mergeProps({
        "class": classes.value,
        "style": mergedStyle.value
      }, {
        level: props2.level
      }), [props2.status !== "active" && createVNode("div", {
        "class": ["".concat(classPrefix.value, "-mask"), _defineProperty({}, "".concat(classPrefix.value, "-").concat(props2.status), props2.status !== "loading")]
      }, [createVNode(QRcodeStatus, {
        "locale": globalConfig.value,
        "status": props2.status,
        "onRefresh": props2.onRefresh,
        "statusRender": renderTNodeJSX("statusRender", {
          params: {
            status: props2.status,
            onRefresh: props2.onRefresh
          }
        })
      }, null)]), props2.type === "canvas" ? createVNode(QRCodeCanvas, mergeProps(QRCodeProps, {
        "size": props2.size
      }), null) : createVNode(QRCodeSVG, mergeProps(QRCodeProps, {
        "size": props2.size
      }), null)]);
    };
  }
});

export { _QRCode as default };
//# sourceMappingURL=qrcode.mjs.map
