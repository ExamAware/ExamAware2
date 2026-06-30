/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var _toConsumableArray = require('@babel/runtime/helpers/toConsumableArray');
var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
require('@babel/runtime/helpers/typeof');
require('../_chunks/dep-953a77eb.js');
var index$5 = require('../_chunks/dep-47c460dd.js');
var index$3 = require('../_chunks/dep-8382953f.js');
var index$4 = require('../_chunks/dep-ecaaae91.js');
var index$1 = require('../_chunks/dep-874d2900.js');
require('../_chunks/dep-cc66acf1.js');
var index$2 = require('../_chunks/dep-bc848944.js');
var index = require('../_chunks/dep-e8ff2c13.js');
var radio_props = require('./props.js');
var radio_consts_index = require('./consts/index.js');
var helper = require('../_chunks/dep-55c70201.js');
var omit = require('../_chunks/dep-ace0b57c.js');
var isString = require('../_chunks/dep-a55e8a08.js');
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
require('../_chunks/dep-d45110a6.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');
require('@babel/runtime/helpers/objectWithoutProperties');
require('../_chunks/dep-fd5a369e.js');
require('../_chunks/dep-4ccaead1.js');
require('../_chunks/dep-990979bb.js');
require('../_chunks/dep-ac11336c.js');
require('../_chunks/dep-11b67e11.js');
require('../_chunks/dep-dcb859c6.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);
var _toConsumableArray__default = /*#__PURE__*/_interopDefaultLegacy(_toConsumableArray);
var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);

var _Radio = Vue.defineComponent({
  name: "TRadio",
  inheritAttrs: false,
  props: radio_props["default"],
  setup: function setup(props2, _ref) {
    var attrs = _ref.attrs;
    var inputRef = Vue.ref();
    var _toRefs = Vue.toRefs(props2),
      checked = _toRefs.checked,
      modelValue = _toRefs.modelValue;
    var _useVModel = index.useVModel(checked, modelValue, props2.defaultChecked, props2.onChange, "checked"),
      _useVModel2 = _slicedToArray__default["default"](_useVModel, 2),
      innerChecked = _useVModel2[0],
      setInnerChecked = _useVModel2[1];
    var radioChecked = Vue.computed(function () {
      return radioGroup ? props2.value === radioGroup.value : innerChecked.value;
    });
    var radioGroup = Vue.inject(radio_consts_index.RadioGroupInjectionKey, void 0);
    var allowUncheck = Vue.computed(function () {
      return Boolean(props2.allowUncheck || (radioGroup === null || radioGroup === void 0 ? void 0 : radioGroup.allowUncheck));
    });
    var handleClick = function handleClick(e) {
      e.stopPropagation();
    };
    var onLabelClick = function onLabelClick(e) {
      var _props2$onClick;
      if (isDisabled.value || isReadonly.value) return;
      (_props2$onClick = props2.onClick) === null || _props2$onClick === void 0 || _props2$onClick.call(props2, {
        e: e
      });
      if (radioChecked.value && !allowUncheck.value) return;
      if (radioGroup) {
        var value = radioChecked.value && allowUncheck.value ? void 0 : props2.value;
        radioGroup.setValue(value, {
          e: e,
          name: radioGroup.name
        });
      } else {
        var _value = allowUncheck.value ? !radioChecked.value : true;
        setInnerChecked(_value, {
          e: e
        });
      }
    };
    var inputEvents = Vue.computed(function () {
      return helper.getValidAttrs({
        focus: attrs.onFocus,
        blur: attrs.onBlur,
        keydown: attrs.onKeydown,
        keyup: attrs.onKeyup,
        keypresss: attrs.onKeypresss
      });
    });
    var wrapperAttrs = Vue.computed(function () {
      var events = [].concat(_toConsumableArray__default["default"](Object.keys(inputEvents.value)), ["input", "change"]).map(function (str) {
        return "on".concat(str[0].toUpperCase()).concat(str.slice(1));
      });
      return omit.omit(attrs, events);
    });
    var groupDisabled = Vue.computed(function () {
      return radioGroup === null || radioGroup === void 0 ? void 0 : radioGroup.disabled;
    });
    var groupReadonly = Vue.computed(function () {
      return radioGroup === null || radioGroup === void 0 ? void 0 : radioGroup.readonly;
    });
    var isDisabled = index$1.useDisabled({
      afterDisabled: groupDisabled
    });
    var isReadonly = index$2.useReadonly({
      afterReadonly: groupReadonly
    });
    var inputProps = Vue.computed(function () {
      return {
        name: radioGroup ? radioGroup.name : props2.name,
        checked: radioChecked.value,
        disabled: isDisabled.value,
        readonly: isReadonly.value,
        value: props2.value
      };
    });
    var _useCommonClassName = index$3.useCommonClassName(),
      STATUS = _useCommonClassName.STATUS;
    var radioButton = Vue.inject(radio_consts_index.RadioButtonInjectionKey, void 0);
    var radioBtnName = index$4.usePrefixClass("radio-button");
    var COMPONENT_NAME = index$4.usePrefixClass("radio");
    var prefixCls = Vue.computed(function () {
      return radioButton ? radioBtnName.value : COMPONENT_NAME.value;
    });
    var inputClass = Vue.computed(function () {
      return ["".concat(prefixCls.value), _defineProperty__default["default"](_defineProperty__default["default"]({}, STATUS.value.checked, inputProps.value.checked), STATUS.value.disabled, inputProps.value.disabled)];
    });
    var renderContent = index$5.useContent();
    return function () {
      return Vue.createVNode("label", Vue.mergeProps({
        "ref": inputRef,
        "class": inputClass.value
      }, wrapperAttrs.value, {
        "tabindex": isDisabled.value ? void 0 : "0",
        "onClick": onLabelClick
      }), [Vue.createVNode("input", Vue.mergeProps({
        "type": "radio",
        "class": "".concat(prefixCls.value, "__former")
      }, inputEvents.value, inputProps.value, {
        "onClick": handleClick,
        "tabindex": "-1",
        "data-value": isString.isString(props2.value) ? "'".concat(props2.value, "'") : props2.value,
        "data-allow-uncheck": allowUncheck.value || void 0
      }), null), Vue.createVNode("span", {
        "class": "".concat(prefixCls.value, "__input")
      }, null), Vue.createVNode("span", {
        "class": "".concat(prefixCls.value, "__label")
      }, [renderContent("default", "label")])]);
    };
  }
});

exports["default"] = _Radio;
//# sourceMappingURL=radio.js.map
