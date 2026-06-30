/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
var Vue = require('vue');
var form_consts_index = require('../../form/consts/index.js');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../../_chunks/dep-953a77eb.js');
require('../../config-provider/hooks/useConfig.js');
var index = require('../../_chunks/dep-874d2900.js');
require('../../_chunks/dep-cc66acf1.js');
var index$1 = require('../../_chunks/dep-bc848944.js');
var index$2 = require('../../_chunks/dep-e8ff2c13.js');
require('@babel/runtime/helpers/defineProperty');
var input_hooks_useLengthLimit = require('./useLengthLimit.js');
require('../../_chunks/dep-ecaaae91.js');
require('../../_chunks/dep-8abdfb41.js');
require('../../_chunks/dep-5d7e2375.js');
require('../../_chunks/dep-94a7dc2d.js');
require('dayjs');
require('../../_chunks/dep-92e23f17.js');
require('../../_chunks/dep-0ff616fe.js');
require('../../_chunks/dep-5f52cd42.js');
require('../../_chunks/dep-48f60c78.js');
require('../../_chunks/dep-b3b464e8.js');
require('../../_chunks/dep-0813861e.js');
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
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');
require('../../_chunks/dep-d45110a6.js');
require('../../_chunks/dep-23f77e26.js');
require('../../_chunks/dep-ee355a9a.js');
require('../../_chunks/dep-71fa6bfc.js');
require('../../_chunks/dep-80a478d7.js');
require('../../_chunks/dep-733b2b51.js');
require('../../_chunks/dep-55c70201.js');
require('@babel/runtime/helpers/objectWithoutProperties');
require('../../_chunks/dep-fd5a369e.js');
require('../../_chunks/dep-4ccaead1.js');
require('../../_chunks/dep-990979bb.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);

function getOutputValue(val, type) {
  if (type === "number") {
    return val || val === 0 ? Number(val) : void 0;
  }
  return val;
}
function useInput(props, expose) {
  var _toRefs = Vue.toRefs(props),
    value = _toRefs.value,
    modelValue = _toRefs.modelValue;
  var inputValue = Vue.ref();
  var isComposition = Vue.ref(false);
  var compositionValue = Vue.ref();
  var clearIconRef = Vue.ref(null);
  var innerClickElement = Vue.ref();
  var disabled = index.useDisabled();
  var readonly = index$1.useReadonly();
  var _useVModel = index$2.useVModel(value, modelValue, props.defaultValue, props.onChange),
    _useVModel2 = _slicedToArray__default["default"](_useVModel, 2),
    innerValue = _useVModel2[0],
    setInnerValue = _useVModel2[1];
  var isHover = Vue.ref(false);
  var focused = Vue.ref(false);
  var renderType = Vue.ref(props.type);
  var inputRef = Vue.ref(null);
  var limitParams = Vue.computed(function () {
    return {
      value: [void 0, null].includes(innerValue.value) ? void 0 : String(innerValue.value),
      status: props.status,
      maxlength: Number(props.maxlength),
      maxcharacter: props.maxcharacter,
      allowInputOverMax: props.allowInputOverMax,
      onValidate: props.onValidate
    };
  });
  var _useLengthLimit = input_hooks_useLengthLimit.useLengthLimit(limitParams),
    limitNumber = _useLengthLimit.limitNumber,
    getValueByLimitNumber = _useLengthLimit.getValueByLimitNumber,
    tStatus = _useLengthLimit.tStatus;
  var showClear = Vue.computed(function () {
    return (innerValue.value && !disabled.value && props.clearable && !readonly.value || props.showClearIconOnEmpty) && isHover.value;
  });
  var focus = function focus() {
    var _inputRef$value;
    focused.value = true;
    (_inputRef$value = inputRef.value) === null || _inputRef$value === void 0 || _inputRef$value.focus();
  };
  var blur = function blur() {
    var _inputRef$value2;
    focused.value = false;
    (_inputRef$value2 = inputRef.value) === null || _inputRef$value2 === void 0 || _inputRef$value2.blur();
  };
  var emitFocus = function emitFocus(e) {
    var _props$onFocus;
    if (isHover.value && focused.value) return;
    inputValue.value = innerValue.value;
    if (props.disabled) return;
    focused.value = true;
    (_props$onFocus = props.onFocus) === null || _props$onFocus === void 0 || _props$onFocus.call(props, innerValue.value, {
      e: e
    });
  };
  var emitClear = function emitClear(_ref) {
    var _props$onClear;
    var e = _ref.e;
    var val = props.type === "number" ? void 0 : "";
    setInnerValue(val, {
      e: e,
      trigger: "clear"
    });
    (_props$onClear = props.onClear) === null || _props$onClear === void 0 || _props$onClear.call(props, {
      e: e
    });
  };
  var onClearIconMousedown = function onClearIconMousedown(e) {
    innerClickElement.value = e.target;
  };
  var emitPassword = function emitPassword() {
    if (disabled.value) return;
    var toggleType = renderType.value === "password" ? "text" : "password";
    renderType.value = toggleType;
  };
  var setInputElValue = function setInputElValue() {
    var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var inputEl = inputRef.value;
    if (!inputEl) return;
    var sV = String(v);
    if (!inputEl.value) {
      return;
    }
    if (inputEl.value !== sV) {
      inputEl.value = sV;
    }
  };
  var inputValueChangeHandle = function inputValueChangeHandle(e) {
    var _innerValue$value;
    var target = e.target;
    var val = target.value;
    if (props.type !== "number" && typeof innerValue.value === "string" && val.length > ((_innerValue$value = innerValue.value) === null || _innerValue$value === void 0 ? void 0 : _innerValue$value.length)) {
      val = getValueByLimitNumber(val);
    }
    setInnerValue(getOutputValue(val, props.type), {
      e: e,
      trigger: "input"
    });
    Vue.nextTick(function () {
      if (props.type === "number" && /\.(\d+)?0$/.test(val)) {
        setInputElValue(val);
      } else {
        setInputElValue(innerValue.value);
      }
    });
  };
  var handleInput = function handleInput(e) {
    var checkInputType = e.inputType && e.inputType === "insertCompositionText";
    var val = e.currentTarget.value;
    if (checkInputType || isComposition.value) {
      compositionValue.value = val;
      return;
    }
    inputValueChangeHandle(e);
  };
  var isClearIcon = function isClearIcon() {
    var _clearIconRef$value;
    var tmp = innerClickElement.value;
    if (!tmp || !tmp.tagName || !((_clearIconRef$value = clearIconRef.value) !== null && _clearIconRef$value !== void 0 && _clearIconRef$value.$el) || !["path", "svg"].includes(tmp.tagName)) return false;
    while (tmp) {
      var _clearIconRef$value2;
      if (((_clearIconRef$value2 = clearIconRef.value) === null || _clearIconRef$value2 === void 0 ? void 0 : _clearIconRef$value2.$el) === tmp) {
        return true;
      }
      tmp = tmp.parentNode;
    }
    return false;
  };
  var formItem = Vue.inject(form_consts_index.FormItemInjectionKey, void 0);
  var formatAndEmitBlur = function formatAndEmitBlur(e) {
    if (!isClearIcon()) {
      var _props$onBlur;
      if (props.format) {
        inputValue.value = typeof innerValue.value === "number" || props.type === "number" ? innerValue.value : props.format(innerValue.value);
      }
      focused.value = false;
      if (isComposition.value) {
        isComposition.value = false;
        compositionValue.value = "";
      }
      (_props$onBlur = props.onBlur) === null || _props$onBlur === void 0 || _props$onBlur.call(props, innerValue.value, {
        e: e
      });
      formItem === null || formItem === void 0 || formItem.handleBlur();
    } else {
      focus();
    }
  };
  var onHandleCompositionend = function onHandleCompositionend(e) {
    var _props$onCompositione;
    isComposition.value = false;
    compositionValue.value = "";
    inputValueChangeHandle(e);
    (_props$onCompositione = props.onCompositionend) === null || _props$onCompositione === void 0 || _props$onCompositione.call(props, String(innerValue.value), {
      e: e
    });
  };
  var onHandleCompositionstart = function onHandleCompositionstart(e) {
    var _props$onCompositions;
    isComposition.value = true;
    var value2 = e.currentTarget.value;
    compositionValue.value = value2;
    (_props$onCompositions = props.onCompositionstart) === null || _props$onCompositions === void 0 || _props$onCompositions.call(props, String(innerValue.value), {
      e: e
    });
  };
  var onRootClick = function onRootClick(e) {
    var _inputRef$value3, _props$onClick;
    (_inputRef$value3 = inputRef.value) === null || _inputRef$value3 === void 0 || _inputRef$value3.focus();
    (_props$onClick = props.onClick) === null || _props$onClick === void 0 || _props$onClick.call(props, {
      e: e
    });
  };
  Vue.watch(function () {
    return props.autofocus;
  }, function (value2) {
    if (value2 === true) {
      Vue.nextTick(function () {
        var _inputRef$value4;
        (_inputRef$value4 = inputRef.value) === null || _inputRef$value4 === void 0 || _inputRef$value4.focus();
      });
    }
  }, {
    immediate: true
  });
  Vue.watch(innerValue, function (val, oldVal) {
    var isNumberType = props.type === "number";
    if (oldVal === void 0 && props.format && typeof val !== "number" && !isNumberType) {
      inputValue.value = props.format(val);
    } else {
      inputValue.value = val;
    }
    var newVal = typeof val === "number" ? val : getValueByLimitNumber(val);
    if (newVal !== val && !isNumberType) {
      setInnerValue(newVal, {
        trigger: "initial"
      });
    }
  }, {
    immediate: true
  });
  Vue.watch(function () {
    return props.type;
  }, function (v) {
    renderType.value = v;
  }, {
    immediate: true
  });
  expose({
    inputRef: inputRef,
    focus: focus,
    blur: blur
  });
  return {
    isHover: isHover,
    focused: focused,
    renderType: renderType,
    showClear: showClear,
    inputRef: inputRef,
    clearIconRef: clearIconRef,
    inputValue: inputValue,
    isComposition: isComposition,
    compositionValue: compositionValue,
    limitNumber: limitNumber,
    tStatus: tStatus,
    emitFocus: emitFocus,
    formatAndEmitBlur: formatAndEmitBlur,
    onHandleCompositionend: onHandleCompositionend,
    onHandleCompositionstart: onHandleCompositionstart,
    onRootClick: onRootClick,
    emitPassword: emitPassword,
    handleInput: handleInput,
    emitClear: emitClear,
    onClearIconMousedown: onClearIconMousedown,
    innerValue: innerValue
  };
}

exports.getOutputValue = getOutputValue;
exports.useInput = useInput;
//# sourceMappingURL=useInput.js.map
