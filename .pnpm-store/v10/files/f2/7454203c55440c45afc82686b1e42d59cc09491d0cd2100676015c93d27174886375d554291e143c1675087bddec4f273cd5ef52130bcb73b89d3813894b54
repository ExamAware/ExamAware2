/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _toConsumableArray = require('@babel/runtime/helpers/toConsumableArray');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
require('@babel/runtime/helpers/typeof');
require('../_chunks/dep-953a77eb.js');
var index = require('../_chunks/dep-47c460dd.js');
var index$2 = require('../_chunks/dep-8382953f.js');
var index$1 = require('../_chunks/dep-ecaaae91.js');
var index$3 = require('../_chunks/dep-874d2900.js');
require('@babel/runtime/helpers/slicedToArray');
require('../_chunks/dep-cc66acf1.js');
var link_props = require('./props.js');
var configProvider_hooks_useConfig = require('../config-provider/hooks/useConfig.js');
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
require('../_chunks/dep-d45110a6.js');
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

var _toConsumableArray__default = /*#__PURE__*/_interopDefaultLegacy(_toConsumableArray);
var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

var _Link = Vue.defineComponent({
  name: "TLink",
  props: link_props["default"],
  emits: ["click"],
  setup: function setup(props2, _ref) {
    var emit = _ref.emit;
    var renderContent = index.useContent();
    var renderTNodeJSX = index.useTNodeJSX();
    var COMPONENT_NAME = index$1.usePrefixClass("link");
    var _useCommonClassName = index$2.useCommonClassName(),
      STATUS = _useCommonClassName.STATUS,
      SIZE = _useCommonClassName.SIZE;
    var _useConfig = configProvider_hooks_useConfig.useConfig("classPrefix"),
      classPrefix = _useConfig.classPrefix;
    var isDisabled = index$3.useDisabled();
    var linkClass = Vue.computed(function () {
      return ["".concat(COMPONENT_NAME.value), "".concat(COMPONENT_NAME.value, "--theme-").concat(props2.theme), _defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"]({}, SIZE.value[props2.size], props2.size !== "medium"), STATUS.value.disabled, isDisabled.value), "".concat(classPrefix.value, "-is-underline"), props2.underline), "".concat(COMPONENT_NAME.value, "--hover-").concat(props2.hover), !isDisabled.value)];
    });
    var handleClick = function handleClick(event) {
      if (!isDisabled.value) emit("click", event);
    };
    return function () {
      var linkContent = renderContent("default", "content");
      var prefix = renderTNodeJSX("prefixIcon");
      var suffix = renderTNodeJSX("suffixIcon");
      return Vue.createVNode("a", {
        "class": _toConsumableArray__default["default"](linkClass.value),
        "href": isDisabled.value || !props2.href ? void 0 : props2.href,
        "target": !props2.target ? void 0 : props2.target,
        "download": !props2.download ? void 0 : props2.download,
        "onClick": handleClick
      }, [prefix ? Vue.createVNode("span", {
        "class": "".concat(COMPONENT_NAME.value, "__prefix-icon")
      }, [prefix]) : null, linkContent, suffix ? Vue.createVNode("span", {
        "class": "".concat(COMPONENT_NAME.value, "__suffix-icon")
      }, [suffix]) : null]);
    };
  }
});

exports["default"] = _Link;
//# sourceMappingURL=link.js.map
