/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var tdesignIconsVueNext = require('tdesign-icons-vue-next');
var tinyColor = require('tinycolor2');
var tag_props = require('./props.js');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../_chunks/dep-953a77eb.js');
var index$2 = require('../_chunks/dep-47c460dd.js');
var index$3 = require('../_chunks/dep-8382953f.js');
var index = require('../_chunks/dep-ecaaae91.js');
var index$1 = require('../_chunks/dep-31c76dc6.js');
require('@babel/runtime/helpers/slicedToArray');
require('../_chunks/dep-cc66acf1.js');
var isString = require('../_chunks/dep-a55e8a08.js');
var configProvider_hooks_useConfig = require('../config-provider/hooks/useConfig.js');
require('../_chunks/dep-8abdfb41.js');
require('../_chunks/dep-06276759.js');
require('../_chunks/dep-48f60c78.js');
require('../_chunks/dep-b3b464e8.js');
require('../_chunks/dep-0813861e.js');
require('../_chunks/dep-4fa46641.js');
require('../_chunks/dep-87589faa.js');
require('../_chunks/dep-422dd97f.js');
require('../_chunks/dep-71fa6bfc.js');
require('../_chunks/dep-80a478d7.js');
require('../_chunks/dep-05f89f0d.js');
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
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');
require('../_chunks/dep-8adeee89.js');
require('../_chunks/dep-4d2ef282.js');
require('../_chunks/dep-929933ce.js');
require('../_chunks/dep-6b1f0ef8.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);
var tinyColor__default = /*#__PURE__*/_interopDefaultLegacy(tinyColor);

var _Tag = Vue.defineComponent({
  name: "TTag",
  props: tag_props["default"],
  setup: function setup(props2) {
    var _useConfig = configProvider_hooks_useConfig.useConfig("tag"),
      tagGlobalConfig = _useConfig.globalConfig;
    var COMPONENT_NAME = index.usePrefixClass("tag");
    var _useGlobalIcon = index$1.useGlobalIcon({
        CloseIcon: tdesignIconsVueNext.CloseIcon
      }),
      CloseIcon = _useGlobalIcon.CloseIcon;
    var renderTNodeJSX = index$2.useTNodeJSX();
    var renderContent = index$2.useContent();
    var _useCommonClassName = index$3.useCommonClassName(),
      SIZE = _useCommonClassName.SIZE;
    var _getCurrentInstance = Vue.getCurrentInstance(),
      vnode = _getCurrentInstance.vnode;
    var tagClass = Vue.computed(function () {
      return ["".concat(COMPONENT_NAME.value), "".concat(COMPONENT_NAME.value, "--").concat(props2.theme), "".concat(COMPONENT_NAME.value, "--").concat(props2.variant), _defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"]({}, "".concat(COMPONENT_NAME.value, "--ellipsis"), props2.maxWidth), "".concat(COMPONENT_NAME.value, "--close"), props2.closable), "".concat(COMPONENT_NAME.value, "--disabled"), props2.disabled), SIZE.value[props2.size], props2.size !== "medium"), props2.shape !== "square" && "".concat(COMPONENT_NAME.value, "--").concat(props2.shape)];
    });
    var tagStyle = Vue.computed(function () {
      return getTagColorStyle();
    });
    var textStyle = Vue.computed(function () {
      if (!props2.maxWidth) return {};
      return {
        maxWidth: isNaN(Number(props2.maxWidth)) ? String(props2.maxWidth) : "".concat(props2.maxWidth, "px")
      };
    });
    var getTagColorStyle = function getTagColorStyle() {
      var color = props2.color,
        variant = props2.variant;
      if (!color) return {};
      var luminance = tinyColor__default["default"](color).getLuminance();
      var style = {
        color: luminance > 0.5 ? "black" : "white"
      };
      if (variant === "outline" || variant === "light-outline") {
        style.borderColor = color;
      }
      if (variant !== "outline") {
        var getLightestShade = function getLightestShade() {
          var _tinycolor$toRgb = tinyColor__default["default"](color).toRgb(),
            r = _tinycolor$toRgb.r,
            g = _tinycolor$toRgb.g,
            b = _tinycolor$toRgb.b;
          return "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", 0.1)");
        };
        style.backgroundColor = variant === "dark" ? color : getLightestShade();
      }
      if (variant !== "dark") {
        style.color = color;
      }
      return style;
    };
    var handleClick = function handleClick(e) {
      var _props2$onClick;
      if (props2.disabled) return;
      (_props2$onClick = props2.onClick) === null || _props2$onClick === void 0 || _props2$onClick.call(props2, {
        e: e
      });
    };
    var getCloseIcon = function getCloseIcon() {
      if (!props2.closable) return null;
      var iconClassName = "".concat(COMPONENT_NAME.value, "__icon-close");
      if (tagGlobalConfig.value.closeIcon) {
        return Vue.h(tagGlobalConfig.value.closeIcon(Vue.h), {
          "class": iconClassName
        });
      }
      return Vue.createVNode(CloseIcon, {
        "onClick": function onClick(_ref2) {
          var _props2$onClose;
          var e = _ref2.e;
          if (e) e.stopPropagation();
          (_props2$onClose = props2.onClose) === null || _props2$onClose === void 0 || _props2$onClose.call(props2, {
            e: e
          });
        },
        "class": iconClassName
      }, null);
    };
    var renderTitle = function renderTitle(tagContent) {
      var vProps = vnode.props || {};
      if (Reflect.has(vProps, "title")) {
        return vProps.title || void 0;
      }
      if (tagContent) {
        return tagContent;
      }
      return void 0;
    };
    return function () {
      var closeIcon = getCloseIcon();
      var tagContent = renderContent("default", "content");
      var icon = renderTNodeJSX("icon");
      var title = renderTitle(isString.isString(tagContent) ? tagContent : "");
      return Vue.createVNode("div", {
        "class": tagClass.value,
        "style": tagStyle.value,
        "onClick": handleClick
      }, [icon, Vue.createVNode("span", {
        "class": props2.maxWidth ? "".concat(COMPONENT_NAME.value, "--text") : void 0,
        "style": textStyle.value,
        "title": title
      }, [tagContent]), !props2.disabled && closeIcon]);
    };
  }
});

exports["default"] = _Tag;
//# sourceMappingURL=tag.js.map
