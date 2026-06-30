/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { _ as _slicedToArray } from '../../_chunks/dep-9003fde5.mjs';
import { toRefs, ref, computed, nextTick, inject, watch } from 'vue';
import { FormItemInjectionKey } from '../../form/consts/index.mjs';
import { e as useDisabled, n as useReadonly, j as useVModel } from '../../_chunks/dep-7673347f.mjs';
import { useLengthLimit } from './useLengthLimit.mjs';
import '../../_chunks/dep-9f459d8b.mjs';
import 'lodash-es';
import '../../_chunks/dep-00b4e06a.mjs';
import '../../_chunks/dep-257428bc.mjs';
import '../../_chunks/dep-51a43106.mjs';
import '../../_chunks/dep-fe644854.mjs';
import '../../config-provider/hooks/useConfig.mjs';
import '../../config-provider/utils/context.mjs';
import '../../_chunks/dep-a4c09318.mjs';
import '../../_chunks/dep-ffb85102.mjs';
import '../../_chunks/dep-ad588525.mjs';
import '../../_chunks/dep-22ebd6af.mjs';
import '../../_chunks/dep-cdd448ec.mjs';
import '../../_chunks/dep-97ecacde.mjs';
import '../../_chunks/dep-84fd47b3.mjs';
import '../../_chunks/dep-1dacc319.mjs';
import '../../_chunks/dep-d36c4a3f.mjs';
import '../../_chunks/dep-6d2705e1.mjs';
import '../../_chunks/dep-0cde7579.mjs';
import '../../_chunks/dep-0dcc778a.mjs';

function getOutputValue(val, type) {
  if (type === "number") {
    return val || val === 0 ? Number(val) : void 0;
  }
  return val;
}
function useInput(props, expose) {
  var _toRefs = toRefs(props),
    value = _toRefs.value,
    modelValue = _toRefs.modelValue;
  var inputValue = ref();
  var isComposition = ref(false);
  var compositionValue = ref();
  var clearIconRef = ref(null);
  var innerClickElement = ref();
  var disabled = useDisabled();
  var readonly = useReadonly();
  var _useVModel = useVModel(value, modelValue, props.defaultValue, props.onChange),
    _useVModel2 = _slicedToArray(_useVModel, 2),
    innerValue = _useVModel2[0],
    setInnerValue = _useVModel2[1];
  var isHover = ref(false);
  var focused = ref(false);
  var renderType = ref(props.type);
  var inputRef = ref(null);
  var limitParams = computed(function () {
    return {
      value: [void 0, null].includes(innerValue.value) ? void 0 : String(innerValue.value),
      status: props.status,
      maxlength: Number(props.maxlength),
      maxcharacter: props.maxcharacter,
      allowInputOverMax: props.allowInputOverMax,
      onValidate: props.onValidate
    };
  });
  var _useLengthLimit = useLengthLimit(limitParams),
    limitNumber = _useLengthLimit.limitNumber,
    getValueByLimitNumber = _useLengthLimit.getValueByLimitNumber,
    tStatus = _useLengthLimit.tStatus;
  var showClear = computed(function () {
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
    nextTick(function () {
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
  var formItem = inject(FormItemInjectionKey, void 0);
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
  watch(function () {
    return props.autofocus;
  }, function (value2) {
    if (value2 === true) {
      nextTick(function () {
        var _inputRef$value4;
        (_inputRef$value4 = inputRef.value) === null || _inputRef$value4 === void 0 || _inputRef$value4.focus();
      });
    }
  }, {
    immediate: true
  });
  watch(innerValue, function (val, oldVal) {
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
  watch(function () {
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

export { getOutputValue, useInput };
//# sourceMappingURL=useInput.mjs.map
