/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var qrcode_props = require('./props.js');
var qrcode_hooks_useQRCode = require('../_chunks/dep-732976b1.js');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../_chunks/dep-953a77eb.js');
var index$1 = require('../_chunks/dep-47c460dd.js');
var index = require('../_chunks/dep-ecaaae91.js');
require('@babel/runtime/helpers/slicedToArray');
require('../_chunks/dep-cc66acf1.js');
var index$2 = require('../_chunks/dep-f927fdb9.js');
var qrcode_components_qrcodeCanvas = require('./components/qrcode-canvas.js');
var qrcode_components_qrcodeSvg = require('./components/qrcode-svg.js');
var qrcode_components_qrcodeStatus = require('./components/qrcode-status.js');
var isNumber = require('../_chunks/dep-990979bb.js');
var configProvider_hooks_useConfig = require('../config-provider/hooks/useConfig.js');
require('@babel/runtime/helpers/classCallCheck');
require('@babel/runtime/helpers/createClass');
require('../_chunks/dep-8abdfb41.js');
require('../_chunks/dep-06276759.js');
require('../_chunks/dep-48f60c78.js');
require('../_chunks/dep-b3b464e8.js');
require('../_chunks/dep-0813861e.js');
require('../_chunks/dep-a55e8a08.js');
require('../_chunks/dep-87589faa.js');
require('../_chunks/dep-05f89f0d.js');
require('../_chunks/dep-4fa46641.js');
require('../_chunks/dep-422dd97f.js');
require('../_chunks/dep-71fa6bfc.js');
require('../_chunks/dep-80a478d7.js');
require('../_chunks/dep-427dabac.js');
require('../_chunks/dep-72c4cc44.js');
require('../_chunks/dep-ee355a9a.js');
require('../_chunks/dep-23f77e26.js');
require('../_chunks/dep-5d7e2375.js');
require('../_chunks/dep-94a7dc2d.js');
require('dayjs');
require('../_chunks/dep-92e23f17.js');
require('../_chunks/dep-0ff616fe.js');
require('../_chunks/dep-5f52cd42.js');
require('../_chunks/dep-f57bcb19.js');
require('../_chunks/dep-dc4bbc14.js');
require('../_chunks/dep-e27ea667.js');
require('../_chunks/dep-165ca38a.js');
require('../_chunks/dep-32412d92.js');
require('../_chunks/dep-a8a3d718.js');
require('../_chunks/dep-54e566d9.js');
require('../_chunks/dep-591a72de.js');
require('../_chunks/dep-6280a7f6.js');
require('../_chunks/dep-9cc695aa.js');
require('../_chunks/dep-48de95ee.js');
require('../_chunks/dep-8b33876c.js');
require('../_chunks/dep-912c9727.js');
require('../_chunks/dep-8adeee89.js');
require('../_chunks/dep-4d2ef282.js');
require('../_chunks/dep-929933ce.js');
require('../_chunks/dep-6b1f0ef8.js');
require('../_chunks/dep-441a3b7b.js');
require('../_chunks/dep-e86abdd2.js');
require('./components/props.js');
require('tdesign-icons-vue-next');
require('../loading/index.js');
require('../_chunks/dep-95261778.js');
require('../loading/plugin.js');
require('../_chunks/dep-237ed01f.js');
require('../loading/icon/gradient.js');
require('../_chunks/dep-c3dee00a.js');
require('../_chunks/dep-55c70201.js');
require('@babel/runtime/helpers/objectWithoutProperties');
require('../_chunks/dep-fd5a369e.js');
require('../_chunks/dep-4ccaead1.js');
require('../_chunks/dep-8382953f.js');
require('../loading/props.js');
require('../_chunks/dep-0b8a4740.js');
require('../_chunks/dep-cd8cfdc0.js');
require('../_chunks/dep-ac11336c.js');
require('../_chunks/dep-9ce6873a.js');
require('../_chunks/dep-779f6290.js');
require('../_chunks/dep-d62a674d.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

var _QRCode = Vue.defineComponent({
  name: "TQRCode",
  props: qrcode_props["default"],
  setup: function setup(props2) {
    var classPrefix = index.usePrefixClass();
    var renderTNodeJSX = index$1.useTNodeJSX();
    var _useConfig = configProvider_hooks_useConfig.useConfig("qrcode"),
      globalConfig = _useConfig.globalConfig;
    var _useVariables = index$2.useVariables({
        themeFgColor: "--td-text-color-primary",
        themeBgColor: "--td-bg-color-specialcomponent"
      }),
      themeFgColor = _useVariables.themeFgColor,
      themeBgColor = _useVariables.themeBgColor;
    var finalBgColor = Vue.computed(function () {
      return props2.bgColor || themeBgColor.value || "transparent";
    });
    var finalFgColor = Vue.computed(function () {
      return props2.color || themeFgColor.value || qrcode_hooks_useQRCode.DEFAULT_FRONT_COLOR;
    });
    var imageSettings = Vue.computed(function () {
      var _props2$iconSize$heig, _props2$iconSize, _props2$iconSize$widt, _props2$iconSize2;
      return {
        src: props2.icon,
        x: void 0,
        y: void 0,
        height: isNumber.isNumber(props2.iconSize) ? props2.iconSize : (_props2$iconSize$heig = (_props2$iconSize = props2.iconSize) === null || _props2$iconSize === void 0 ? void 0 : _props2$iconSize.height) !== null && _props2$iconSize$heig !== void 0 ? _props2$iconSize$heig : 40,
        width: isNumber.isNumber(props2.iconSize) ? props2.iconSize : (_props2$iconSize$widt = (_props2$iconSize2 = props2.iconSize) === null || _props2$iconSize2 === void 0 ? void 0 : _props2$iconSize2.width) !== null && _props2$iconSize$widt !== void 0 ? _props2$iconSize$widt : 40,
        excavate: true,
        crossOrigin: "anonymous"
      };
    });
    var classes = Vue.computed(function () {
      return ["".concat(classPrefix.value, "-qrcode"), _defineProperty__default["default"](_defineProperty__default["default"]({}, "".concat(classPrefix.value, "-borderless"), props2.borderless), "".concat(classPrefix.value, "-qrcode-svg"), props2.type === "svg")];
    });
    var mergedStyle = Vue.computed(function () {
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
      return Vue.createVNode("div", Vue.mergeProps({
        "class": classes.value,
        "style": mergedStyle.value
      }, {
        level: props2.level
      }), [props2.status !== "active" && Vue.createVNode("div", {
        "class": ["".concat(classPrefix.value, "-mask"), _defineProperty__default["default"]({}, "".concat(classPrefix.value, "-").concat(props2.status), props2.status !== "loading")]
      }, [Vue.createVNode(qrcode_components_qrcodeStatus["default"], {
        "locale": globalConfig.value,
        "status": props2.status,
        "onRefresh": props2.onRefresh,
        "statusRender": renderTNodeJSX("statusRender", {
          params: {
            status: props2.status,
            onRefresh: props2.onRefresh
          }
        })
      }, null)]), props2.type === "canvas" ? Vue.createVNode(qrcode_components_qrcodeCanvas["default"], Vue.mergeProps(QRCodeProps, {
        "size": props2.size
      }), null) : Vue.createVNode(qrcode_components_qrcodeSvg["default"], Vue.mergeProps(QRCodeProps, {
        "size": props2.size
      }), null)]);
    };
  }
});

exports["default"] = _QRCode;
//# sourceMappingURL=qrcode.js.map
