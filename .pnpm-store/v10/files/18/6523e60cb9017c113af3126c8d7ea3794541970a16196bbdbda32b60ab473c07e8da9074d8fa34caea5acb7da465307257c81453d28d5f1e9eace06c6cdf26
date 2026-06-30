/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
var tag_checkTagProps = require('./check-tag-props.js');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../_chunks/dep-953a77eb.js');
var index$2 = require('../_chunks/dep-47c460dd.js');
var index$1 = require('../_chunks/dep-8382953f.js');
var index = require('../_chunks/dep-ecaaae91.js');
require('../_chunks/dep-cc66acf1.js');
var index$3 = require('../_chunks/dep-e8ff2c13.js');
var common = require('../_chunks/dep-6280a7f6.js');
var tag_tag = require('./tag.js');
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
require('../config-provider/hooks/useConfig.js');
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
require('../_chunks/dep-8adeee89.js');
require('../_chunks/dep-4d2ef282.js');
require('../_chunks/dep-929933ce.js');
require('../_chunks/dep-6b1f0ef8.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');
require('tdesign-icons-vue-next');
require('tinycolor2');
require('./props.js');
require('../_chunks/dep-31c76dc6.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);
var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !Vue.isVNode(s);
}
var _CheckTag = Vue.defineComponent({
  name: "TCheckTag",
  props: tag_checkTagProps["default"],
  setup: function setup(props2) {
    var componentName = index.usePrefixClass("tag");
    var _useCommonClassName = index$1.useCommonClassName(),
      SIZE = _useCommonClassName.SIZE;
    var renderContent = index$2.useContent();
    var _toRefs = Vue.toRefs(props2),
      checked = _toRefs.checked,
      modelValue = _toRefs.modelValue;
    var _useVModel = index$3.useVModel(checked, modelValue, props2.defaultChecked, props2.onChange, "checked"),
      _useVModel2 = _slicedToArray__default["default"](_useVModel, 2),
      innerChecked = _useVModel2[0],
      setInnerChecked = _useVModel2[1];
    var tagClass = Vue.computed(function () {
      return ["".concat(componentName.value), "".concat(componentName.value, "--check"), SIZE.value[props2.size], _defineProperty__default["default"](_defineProperty__default["default"]({}, "".concat(componentName.value, "--checked"), innerChecked.value), "".concat(componentName.value, "--disabled"), props2.disabled)];
    });
    var checkTagProps = Vue.computed(function () {
      var checkedProps = _objectSpread({
        theme: "primary"
      }, props2.checkedProps);
      var uncheckedProps = _objectSpread({}, props2.uncheckedProps);
      return innerChecked.value ? checkedProps : uncheckedProps;
    });
    var handleClick = function handleClick(_ref2) {
      var e = _ref2.e;
      if (!props2.disabled) {
        var _props2$onClick;
        (_props2$onClick = props2.onClick) === null || _props2$onClick === void 0 || _props2$onClick.call(props2, {
          e: e
        });
        setInnerChecked(!innerChecked.value, {
          e: e,
          value: props2.value
        });
      }
    };
    var keyboardEventListener = function keyboardEventListener(e) {
      var _e$key;
      var code = e.code || ((_e$key = e.key) === null || _e$key === void 0 ? void 0 : _e$key.trim());
      var isCheckedCode = common.SPACE_REG.test(code) || common.ENTER_REG.test(code);
      if (isCheckedCode) {
        e.preventDefault();
        setInnerChecked(!innerChecked.value, {
          e: e,
          value: props2.value
        });
      }
    };
    var onCheckboxFocus = function onCheckboxFocus(e) {
      e.currentTarget.addEventListener("keydown", keyboardEventListener);
    };
    var onCheckboxBlur = function onCheckboxBlur(e) {
      e.currentTarget.removeEventListener("keydown", keyboardEventListener);
    };
    return function () {
      var tagContent = renderContent("default", "content");
      return Vue.createVNode(tag_tag["default"], Vue.mergeProps({
        "class": tagClass.value,
        "disabled": props2.disabled,
        "tabindex": props2.disabled ? void 0 : "0",
        "onFocus": onCheckboxFocus,
        "onBlur": onCheckboxBlur
      }, checkTagProps.value, {
        "onClick": handleClick
      }), _isSlot(tagContent) ? tagContent : {
        "default": function _default() {
          return [tagContent];
        }
      });
    };
  }
});

exports["default"] = _CheckTag;
//# sourceMappingURL=check-tag.js.map
