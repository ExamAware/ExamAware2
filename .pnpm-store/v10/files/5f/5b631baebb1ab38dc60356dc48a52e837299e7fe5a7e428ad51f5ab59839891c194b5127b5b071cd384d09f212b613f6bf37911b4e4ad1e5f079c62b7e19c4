/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { toRefs, ref, computed, createVNode, mergeProps } from 'vue';
import { _ as _objectWithoutProperties } from '../../_chunks/dep-0dcc778a.mjs';
import { _ as _slicedToArray } from '../../_chunks/dep-9003fde5.mjs';
import { _ as _defineProperty } from '../../_chunks/dep-1dacc319.mjs';
import { isObject, pick } from 'lodash-es';
import { Input } from '../../input/index.mjs';
import { Loading } from '../../loading/index.mjs';
import { u as usePrefixClass, k as useDefaultValue, a as useTNodeJSX, e as useDisabled, n as useReadonly, o as useEventForward } from '../../_chunks/dep-7673347f.mjs';
import '../../_chunks/dep-9f459d8b.mjs';
import '../../_chunks/dep-257428bc.mjs';
import '../../input/input.mjs';
import 'tdesign-icons-vue-next';
import '../../input/props.mjs';
import '../../input/hooks/index.mjs';
import '../../input/hooks/useInput.mjs';
import '../../form/consts/index.mjs';
import '../../_chunks/dep-00b4e06a.mjs';
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
import '../../_chunks/dep-d36c4a3f.mjs';
import '../../input/hooks/useLengthLimit.mjs';
import '../../_chunks/dep-6d2705e1.mjs';
import '../../_chunks/dep-0cde7579.mjs';
import '../../input/hooks/useInputEventHandler.mjs';
import '../../input/hooks/useInputWidth.mjs';
import '../../input/input-group.mjs';
import '../../input/input-group-props.mjs';
import './style/css.mjs';
import '../../loading/directive.mjs';
import '../../loading/plugin.mjs';
import '../../loading/loading.mjs';
import '../../loading/icon/gradient.mjs';
import '../../loading/props.mjs';

var _excluded = ["tips"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var COMMON_PROPERTIES = ["status", "clearable", "disabled", "label", "placeholder", "readonly", "prefixIcon", "suffix", "suffixIcon", "onPaste", "onMouseenter", "onMouseleave", "size", "autofocus"];
var DEFAULT_KEYS = {
  label: "label",
  value: "value",
  children: "children"
};
function getInputValue(value, keys) {
  var iKeys = _objectSpread(_objectSpread({}, DEFAULT_KEYS), keys);
  return isObject(value) ? value[iKeys.label] : value;
}
function useSingle(props, context, popupRef) {
  var _props$defaultInputVa;
  var _toRefs = toRefs(props),
    value = _toRefs.value,
    keys = _toRefs.keys,
    propsInputValue = _toRefs.inputValue;
  var classPrefix = usePrefixClass();
  var isSingleFocus = ref(props.autofocus);
  var inputRef = ref();
  var _useDefaultValue = useDefaultValue(propsInputValue, (_props$defaultInputVa = props.defaultInputValue) !== null && _props$defaultInputVa !== void 0 ? _props$defaultInputVa : "", props.onInputChange, "inputValue"),
    _useDefaultValue2 = _slicedToArray(_useDefaultValue, 2),
    inputValue = _useDefaultValue2[0],
    setInputValue = _useDefaultValue2[1];
  var renderTNode = useTNodeJSX();
  var disable = useDisabled();
  var isReadonly = useReadonly();
  var commonInputProps = computed(function () {
    return _objectSpread(_objectSpread({}, pick(props, COMMON_PROPERTIES)), {}, {
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
        return createVNode(Loading, {
          "loading": true,
          "size": "small"
        }, null);
      } : props.suffixIcon,
      showClearIconOnEmpty: Boolean(props.clearable && (inputValue.value || displayedValue) && !disable.value && !isReadonly.value)
    }, props.inputProps);
    var _context$slots = context.slots,
      tips = _context$slots.tips,
      slots = _objectWithoutProperties(_context$slots, _excluded);
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
    var inputEvent = useEventForward(inputProps, {
      onChange: onInnerInputChange,
      onClear: onInnerClear,
      onEnter: onEnter,
      onFocus: onFocus,
      onBlur: onBlur
    });
    return createVNode(Input, mergeProps({
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

export { useSingle };
//# sourceMappingURL=useSingle.mjs.map
