/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _toConsumableArray = require('@babel/runtime/helpers/toConsumableArray');
var Vue = require('vue');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var loading_index = require('../loading/index.js');
var button_props = require('./props.js');
require('@babel/runtime/helpers/typeof');
require('../_chunks/dep-953a77eb.js');
var index = require('../_chunks/dep-47c460dd.js');
var index$2 = require('../_chunks/dep-8382953f.js');
var index$1 = require('../_chunks/dep-ecaaae91.js');
var index$4 = require('../_chunks/dep-874d2900.js');
require('@babel/runtime/helpers/slicedToArray');
require('../_chunks/dep-cc66acf1.js');
var index$3 = require('../_chunks/dep-0b6215b5.js');
require('../_chunks/dep-95261778.js');
require('../loading/plugin.js');
require('../_chunks/dep-237ed01f.js');
require('../loading/icon/gradient.js');
require('../_chunks/dep-c3dee00a.js');
require('../_chunks/dep-55c70201.js');
require('@babel/runtime/helpers/objectWithoutProperties');
require('../_chunks/dep-fd5a369e.js');
require('../_chunks/dep-4ccaead1.js');
require('../_chunks/dep-a55e8a08.js');
require('../_chunks/dep-b3b464e8.js');
require('../_chunks/dep-87589faa.js');
require('../_chunks/dep-05f89f0d.js');
require('../_chunks/dep-990979bb.js');
require('../_chunks/dep-06276759.js');
require('../_chunks/dep-48f60c78.js');
require('../_chunks/dep-0813861e.js');
require('../loading/props.js');
require('../_chunks/dep-5d7e2375.js');
require('../_chunks/dep-94a7dc2d.js');
require('../_chunks/dep-8abdfb41.js');
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
require('../_chunks/dep-4fa46641.js');
require('../_chunks/dep-422dd97f.js');
require('../_chunks/dep-71fa6bfc.js');
require('../_chunks/dep-80a478d7.js');
require('../_chunks/dep-427dabac.js');
require('../_chunks/dep-72c4cc44.js');
require('../_chunks/dep-ee355a9a.js');
require('../_chunks/dep-23f77e26.js');
require('../config-provider/hooks/useConfig.js');
require('../_chunks/dep-8adeee89.js');
require('../_chunks/dep-4d2ef282.js');
require('../_chunks/dep-929933ce.js');
require('../_chunks/dep-6b1f0ef8.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');
require('../_chunks/dep-9cc695aa.js');
require('../_chunks/dep-48de95ee.js');
require('../_chunks/dep-8b33876c.js');
require('../_chunks/dep-912c9727.js');
require('../_chunks/dep-0b8a4740.js');
require('../_chunks/dep-cd8cfdc0.js');
require('../_chunks/dep-ac11336c.js');
require('../_chunks/dep-9ce6873a.js');
require('../_chunks/dep-779f6290.js');
require('../_chunks/dep-d62a674d.js');
require('../_chunks/dep-d45110a6.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _toConsumableArray__default = /*#__PURE__*/_interopDefaultLegacy(_toConsumableArray);
var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var TButton = Vue.defineComponent({
  name: "TButton",
  props: button_props["default"],
  setup: function setup(props2, _ref) {
    var attrs = _ref.attrs,
      slots = _ref.slots;
    var renderTNodeJSX = index.useTNodeJSX();
    var renderContent = index.useContent();
    var COMPONENT_NAME = index$1.usePrefixClass("button");
    var _useCommonClassName = index$2.useCommonClassName(),
      STATUS = _useCommonClassName.STATUS,
      SIZE = _useCommonClassName.SIZE;
    var btnRef = Vue.ref();
    index$3.useRipple(btnRef);
    var isDisabled = index$4.useDisabled();
    var mergeTheme = Vue.computed(function () {
      var theme = props2.theme,
        variant = props2.variant;
      if (theme) return theme;
      if (variant === "base") return "primary";
      return "default";
    });
    var buttonClass = Vue.computed(function () {
      return ["".concat(COMPONENT_NAME.value), "".concat(COMPONENT_NAME.value, "--variant-").concat(props2.variant), "".concat(COMPONENT_NAME.value, "--theme-").concat(mergeTheme.value), "".concat(COMPONENT_NAME.value, "--shape-").concat(props2.shape), _defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"]({}, SIZE.value[props2.size], props2.size !== "medium"), STATUS.value.disabled, isDisabled.value), STATUS.value.loading, props2.loading), "".concat(COMPONENT_NAME.value, "--ghost"), props2.ghost), SIZE.value.block, props2.block)];
    });
    return function () {
      var buttonContent = renderContent("default", "content");
      var icon = props2.loading ? Vue.createVNode(loading_index.Loading, _objectSpread({
        inheritColor: true
      }, props2.loadingProps), null) : renderTNodeJSX("icon");
      var iconOnly = icon && !buttonContent;
      var suffix = props2.suffix || slots.suffix ? Vue.createVNode("span", {
        "class": "".concat(COMPONENT_NAME.value, "__suffix")
      }, [renderTNodeJSX("suffix")]) : null;
      buttonContent = buttonContent ? Vue.createVNode("span", {
        "class": "".concat(COMPONENT_NAME.value, "__text")
      }, [buttonContent]) : "";
      if (icon) {
        buttonContent = [icon, buttonContent];
      }
      if (suffix) {
        buttonContent = [buttonContent].concat(suffix);
      }
      var renderTag = function renderTag() {
        if (!props2.tag && props2.href) return "a";
        return props2.tag || "button";
      };
      var buttonAttrs = {
        "class": [].concat(_toConsumableArray__default["default"](buttonClass.value), [_defineProperty__default["default"]({}, "".concat(COMPONENT_NAME.value, "--icon-only"), iconOnly)]),
        type: props2.type,
        disabled: isDisabled.value || props2.loading,
        href: props2.href,
        tabindex: isDisabled.value ? void 0 : "0",
        form: props2.form
      };
      return Vue.h(renderTag(), _objectSpread(_objectSpread(_objectSpread({
        ref: btnRef
      }, attrs), buttonAttrs), {}, {
        onClick: props2.onClick
      }), [buttonContent]);
    };
  }
});

exports["default"] = TButton;
//# sourceMappingURL=button.js.map
