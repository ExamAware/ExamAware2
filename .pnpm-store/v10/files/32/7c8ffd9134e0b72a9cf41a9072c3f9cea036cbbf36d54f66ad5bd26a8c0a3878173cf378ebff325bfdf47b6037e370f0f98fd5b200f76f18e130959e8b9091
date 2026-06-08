/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, computed, createVNode, mergeProps } from 'vue';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import props from './props.js';
import { D as DEFAULT_FRONT_COLOR } from '../_chunks/dep-b095b7ad.js';
import { isNumber } from 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-fe23be6e.js';
import { u as useTNodeJSX } from '../_chunks/dep-2accc95a.js';
import { u as usePrefixClass } from '../_chunks/dep-9e6d8a78.js';
import '@babel/runtime/helpers/slicedToArray';
import '../_chunks/dep-880d05b9.js';
import { u as useVariables } from '../_chunks/dep-39f00c42.js';
import QRCodeCanvas from './components/qrcode-canvas.js';
import QRCodeSVG from './components/qrcode-svg.js';
import QRcodeStatus from './components/qrcode-status.js';
import { useConfig } from '../config-provider/hooks/useConfig.js';
import '@babel/runtime/helpers/classCallCheck';
import '@babel/runtime/helpers/createClass';
import '../_chunks/dep-81b01cae.js';
import '../_chunks/dep-16bcfabc.js';
import '../_chunks/dep-fb805f69.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import 'dayjs';
import '../_chunks/dep-30c631d1.js';
import './components/props.js';
import 'tdesign-icons-vue-next';
import '../loading/index.js';
import '../loading/directive.js';
import '../loading/plugin.js';
import '../_chunks/dep-ee693784.js';
import '../loading/icon/gradient.js';
import '../_chunks/dep-2ea19dca.js';
import '../_chunks/dep-80a99546.js';
import '@babel/runtime/helpers/objectWithoutProperties';
import '../_chunks/dep-4f8b6591.js';
import '../loading/props.js';
import '../_chunks/dep-664b8b22.js';

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
//# sourceMappingURL=qrcode.js.map
