/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _objectWithoutProperties = require('@babel/runtime/helpers/objectWithoutProperties');
var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var input_index = require('../../input/index.js');
var loading_index = require('../../loading/index.js');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../../_chunks/dep-953a77eb.js');
var index$2 = require('../../_chunks/dep-47c460dd.js');
var index = require('../../_chunks/dep-ecaaae91.js');
var index$1 = require('../../_chunks/dep-f20044b8.js');
var index$3 = require('../../_chunks/dep-874d2900.js');
require('../../_chunks/dep-cc66acf1.js');
var index$4 = require('../../_chunks/dep-bc848944.js');
var index$5 = require('../../_chunks/dep-bf113ca4.js');
var pick = require('../../_chunks/dep-b5e1f81f.js');
var isObject = require('../../_chunks/dep-0813861e.js');
require('../../input/input.js');
require('tdesign-icons-vue-next');
require('../../input/props.js');
require('../../_chunks/dep-8382953f.js');
require('../../config-provider/hooks/useConfig.js');
require('../../_chunks/dep-5d7e2375.js');
require('../../_chunks/dep-94a7dc2d.js');
require('../../_chunks/dep-8abdfb41.js');
require('dayjs');
require('../../_chunks/dep-92e23f17.js');
require('../../_chunks/dep-0ff616fe.js');
require('../../_chunks/dep-5f52cd42.js');
require('../../_chunks/dep-48f60c78.js');
require('../../_chunks/dep-b3b464e8.js');
require('../../_chunks/dep-f57bcb19.js');
require('../../_chunks/dep-dc4bbc14.js');
require('../../_chunks/dep-05f89f0d.js');
require('../../_chunks/dep-87589faa.js');
require('../../_chunks/dep-e27ea667.js');
require('../../_chunks/dep-165ca38a.js');
require('../../_chunks/dep-32412d92.js');
require('../../_chunks/dep-a8a3d718.js');
require('../../_chunks/dep-54e566d9.js');
require('../../_chunks/dep-591a72de.js');
require('../../_chunks/dep-a55e8a08.js');
require('../../_chunks/dep-8adeee89.js');
require('../../_chunks/dep-4d2ef282.js');
require('../../_chunks/dep-929933ce.js');
require('../../_chunks/dep-6b1f0ef8.js');
require('../../_chunks/dep-31c76dc6.js');
require('../../input/hooks/useInput.js');
require('../../form/consts/index.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');
require('../../_chunks/dep-e8ff2c13.js');
require('../../_chunks/dep-23f77e26.js');
require('../../_chunks/dep-ee355a9a.js');
require('../../_chunks/dep-71fa6bfc.js');
require('../../_chunks/dep-80a478d7.js');
require('../../input/hooks/useLengthLimit.js');
require('../../_chunks/dep-733b2b51.js');
require('../../_chunks/dep-55c70201.js');
require('../../_chunks/dep-fd5a369e.js');
require('../../_chunks/dep-4ccaead1.js');
require('../../_chunks/dep-990979bb.js');
require('../../_chunks/dep-d45110a6.js');
require('../../input/hooks/useInputEventHandler.js');
require('../../input/hooks/useInputWidth.js');
require('../../_chunks/dep-b6058ff9.js');
require('../../_chunks/dep-06276759.js');
require('../../_chunks/dep-4fa46641.js');
require('../../_chunks/dep-422dd97f.js');
require('../../_chunks/dep-427dabac.js');
require('../../_chunks/dep-72c4cc44.js');
require('../../input/input-group.js');
require('../../input/input-group-props.js');
require('../../_chunks/dep-d62a674d.js');
require('../../_chunks/dep-95261778.js');
require('../../loading/plugin.js');
require('../../_chunks/dep-237ed01f.js');
require('../../loading/icon/gradient.js');
require('../../_chunks/dep-c3dee00a.js');
require('../../loading/props.js');
require('../../_chunks/dep-9cc695aa.js');
require('../../_chunks/dep-48de95ee.js');
require('../../_chunks/dep-8b33876c.js');
require('../../_chunks/dep-912c9727.js');
require('../../_chunks/dep-0b8a4740.js');
require('../../_chunks/dep-cd8cfdc0.js');
require('../../_chunks/dep-ac11336c.js');
require('../../_chunks/dep-9ce6873a.js');
require('../../_chunks/dep-779f6290.js');
require('../../_chunks/dep-04599720.js');
require('../../_chunks/dep-dcb859c6.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _objectWithoutProperties__default = /*#__PURE__*/_interopDefaultLegacy(_objectWithoutProperties);
var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);
var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

var _excluded = ["tips"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var COMMON_PROPERTIES = ["status", "clearable", "disabled", "label", "placeholder", "readonly", "prefixIcon", "suffix", "suffixIcon", "onPaste", "onMouseenter", "onMouseleave", "size", "autofocus"];
var DEFAULT_KEYS = {
  label: "label",
  value: "value",
  children: "children"
};
function getInputValue(value, keys) {
  var iKeys = _objectSpread(_objectSpread({}, DEFAULT_KEYS), keys);
  return isObject.isObject(value) ? value[iKeys.label] : value;
}
function useSingle(props, context, popupRef) {
  var _props$defaultInputVa;
  var _toRefs = Vue.toRefs(props),
    value = _toRefs.value,
    keys = _toRefs.keys,
    propsInputValue = _toRefs.inputValue;
  var classPrefix = index.usePrefixClass();
  var isSingleFocus = Vue.ref(props.autofocus);
  var inputRef = Vue.ref();
  var _useDefaultValue = index$1.useDefaultValue(propsInputValue, (_props$defaultInputVa = props.defaultInputValue) !== null && _props$defaultInputVa !== void 0 ? _props$defaultInputVa : "", props.onInputChange, "inputValue"),
    _useDefaultValue2 = _slicedToArray__default["default"](_useDefaultValue, 2),
    inputValue = _useDefaultValue2[0],
    setInputValue = _useDefaultValue2[1];
  var renderTNode = index$2.useTNodeJSX();
  var disable = index$3.useDisabled();
  var isReadonly = index$4.useReadonly();
  var commonInputProps = Vue.computed(function () {
    return _objectSpread(_objectSpread({}, pick.pick(props, COMMON_PROPERTIES)), {}, {
      disabled: disable.value,
      readonly: isReadonly.value
    });
  });
  var onInnerClear = function onInnerClear(context2) {
    var _context2$e, _props$onClear;
    context2 === null || context2 === void 0 || (_context2$e = context2.e) === null || _context2$e === void 0 || _context2$e.stopPropagation();
    (_props$onClear = props.onClear) === null || _props$onClear === void 0 || _props$onClear.call(props, context2);
    setInputValue("", {
      trigger: "clear"
    });
  };
  var onInnerInputChange = function onInnerInputChange(value2, context2) {
    if (props.allowInput) {
      setInputValue(value2, _objectSpread(_objectSpread({}, context2), {}, {
        trigger: context2.trigger || "input"
      }));
    }
  };
  var renderSelectSingle = function renderSelectSingle(popupVisible) {
    var _context$attrs;
    var singleValueDisplay = renderTNode("valueDisplay");
    var displayedValue = popupVisible && props.allowInput ? inputValue.value : getInputValue(value.value, keys.value);
    var prefixContent = renderPrefixContent(singleValueDisplay, popupVisible);
    var inputProps = _objectSpread(_objectSpread({}, commonInputProps.value), {}, {
      value: renderInputDisplay(singleValueDisplay, displayedValue, popupVisible),
      label: prefixContent.length ? function () {
        return prefixContent;
      } : void 0,
      autoWidth: props.autoWidth,
      readonly: !props.allowInput || isReadonly.value,
      placeholder: renderPlaceholder(singleValueDisplay),
      suffixIcon: !disable.value && props.loading ? function () {
        return Vue.createVNode(loading_index.Loading, {
          "loading": true,
          "size": "small"
        }, null);
      } : props.suffixIcon,
      showClearIconOnEmpty: Boolean(props.clearable && (inputValue.value || displayedValue) && !disable.value && !isReadonly.value)
    }, props.inputProps);
    var _context$slots = context.slots;
      _context$slots.tips;
      var slots = _objectWithoutProperties__default["default"](_context$slots, _excluded);
    var inputClassProps = popupVisible ? ["".concat(classPrefix.value, "-input--focused"), "".concat(classPrefix.value, "-is-focused"), inputProps === null || inputProps === void 0 ? void 0 : inputProps.inputClass] : inputProps === null || inputProps === void 0 ? void 0 : inputProps.inputClass;
    var onEnter = function onEnter(val, context2) {
      var _props$onEnter;
      (_props$onEnter = props.onEnter) === null || _props$onEnter === void 0 || _props$onEnter.call(props, value.value, _objectSpread(_objectSpread({}, context2), {}, {
        inputValue: val
      }));
    };
    var onFocus = function onFocus(val, context2) {
      var _popupRef$value, _props$onFocus;
      var overlayState = (_popupRef$value = popupRef.value) === null || _popupRef$value === void 0 ? void 0 : _popupRef$value.getOverlayState();
      if (isSingleFocus.value || overlayState !== null && overlayState !== void 0 && overlayState.hover) return;
      isSingleFocus.value = true;
      (_props$onFocus = props.onFocus) === null || _props$onFocus === void 0 || _props$onFocus.call(props, value.value, _objectSpread(_objectSpread({}, context2), {}, {
        inputValue: val
      }));
    };
    var onBlur = function onBlur(val, context2) {
      var _popupRef$value2, _props$onBlur;
      var overlayState = (_popupRef$value2 = popupRef.value) === null || _popupRef$value2 === void 0 ? void 0 : _popupRef$value2.getOverlayState();
      isSingleFocus.value = false;
      if (overlayState !== null && overlayState !== void 0 && overlayState.hover) return;
      (_props$onBlur = props.onBlur) === null || _props$onBlur === void 0 || _props$onBlur.call(props, value.value, _objectSpread(_objectSpread({}, context2), {}, {
        inputValue: val
      }));
    };
    var inputEvent = index$5.useEventForward(inputProps, {
      onChange: onInnerInputChange,
      onClear: onInnerClear,
      onEnter: onEnter,
      onFocus: onFocus,
      onBlur: onBlur
    });
    return Vue.createVNode(input_index.Input, Vue.mergeProps({
      "ref": inputRef,
      "style": (_context$attrs = context.attrs) === null || _context$attrs === void 0 ? void 0 : _context$attrs.style
    }, inputEvent.value, {
      "inputClass": inputClassProps
    }), slots);
  };
  var renderPrefixContent = function renderPrefixContent(singleValueDisplay, popupVisible) {
    var label = renderTNode("label");
    if (!label && !singleValueDisplay) {
      return [];
    }
    if (singleValueDisplay) {
      var _props$valueDisplayOp;
      if (!value.value || (_props$valueDisplayOp = props.valueDisplayOptions) !== null && _props$valueDisplayOp !== void 0 && _props$valueDisplayOp.useInputDisplay && popupVisible || popupVisible && props.allowInput) {
        return [label];
      }
    }
    return [label, singleValueDisplay];
  };
  var renderInputDisplay = function renderInputDisplay(singleValueDisplay, displayedValue, popupVisible) {
    if (singleValueDisplay) {
      var _props$valueDisplayOp2, _props$valueDisplayOp3;
      if (popupVisible && props.allowInput) {
        return displayedValue;
      }
      if (!((_props$valueDisplayOp2 = props.valueDisplayOptions) !== null && _props$valueDisplayOp2 !== void 0 && _props$valueDisplayOp2.useInputDisplay) || (_props$valueDisplayOp3 = props.valueDisplayOptions) !== null && _props$valueDisplayOp3 !== void 0 && _props$valueDisplayOp3.useInputDisplay && !popupVisible) {
        return void 0;
      }
    }
    return displayedValue;
  };
  var renderPlaceholder = function renderPlaceholder(singleValueDisplay) {
    if (singleValueDisplay) {
      var _props$valueDisplayOp4, _props$valueDisplayOp5;
      if (!value.value || props.allowInput && props.popupVisible) return props.placeholder;
      if (!((_props$valueDisplayOp4 = props.valueDisplayOptions) !== null && _props$valueDisplayOp4 !== void 0 && _props$valueDisplayOp4.usePlaceholder) || (_props$valueDisplayOp5 = props.valueDisplayOptions) !== null && _props$valueDisplayOp5 !== void 0 && _props$valueDisplayOp5.usePlaceholder && value.value) {
        return "";
      }
    }
    return props.placeholder;
  };
  return {
    inputRef: inputRef,
    isSingleFocus: isSingleFocus,
    commonInputProps: commonInputProps,
    singleInputValue: inputValue,
    onInnerClear: onInnerClear,
    renderSelectSingle: renderSelectSingle
  };
}

exports.useSingle = useSingle;
//# sourceMappingURL=useSingle.js.map
