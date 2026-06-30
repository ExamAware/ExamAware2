/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { toRefs, ref, computed, createVNode, mergeProps } from 'vue';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { pick, isObject } from 'lodash-es';
import { Input } from '../../input/index.js';
import { Loading } from '../../loading/index.js';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../../_chunks/dep-fe23be6e.js';
import { u as useTNodeJSX } from '../../_chunks/dep-2accc95a.js';
import { u as usePrefixClass } from '../../_chunks/dep-9e6d8a78.js';
import { u as useDefaultValue } from '../../_chunks/dep-aa34a263.js';
import { u as useDisabled } from '../../_chunks/dep-f7dd3c12.js';
import '../../_chunks/dep-880d05b9.js';
import { u as useReadonly } from '../../_chunks/dep-47b13687.js';
import { u as useEventForward } from '../../_chunks/dep-4d7b9152.js';
import '../../input/input.js';
import 'tdesign-icons-vue-next';
import '../../input/props.js';
import '../../_chunks/dep-4f8b6591.js';
import '../../config-provider/hooks/useConfig.js';
import '../../config-provider/utils/context.js';
import '../../_chunks/dep-938cd955.js';
import '../../_chunks/dep-81b01cae.js';
import 'dayjs';
import '../../_chunks/dep-3a7a2ef1.js';
import '../../input/hooks/useInput.js';
import '../../form/consts/index.js';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '../../_chunks/dep-51e5a827.js';
import '../../input/hooks/useLengthLimit.js';
import '../../_chunks/dep-8295e674.js';
import '../../_chunks/dep-80a99546.js';
import '../../input/hooks/useInputEventHandler.js';
import '../../input/hooks/useInputWidth.js';
import '../../_chunks/dep-80a77612.js';
import '../../_chunks/dep-16bcfabc.js';
import '../../_chunks/dep-fb805f69.js';
import '../../input/input-group.js';
import '../../input/input-group-props.js';
import '../../_chunks/dep-664b8b22.js';
import 'tdesign-vue-next/esm/common/style/web/components/input/_index.less';
import '../../loading/directive.js';
import '../../loading/plugin.js';
import '../../_chunks/dep-ee693784.js';
import '../../loading/icon/gradient.js';
import '../../_chunks/dep-2ea19dca.js';
import '../../loading/props.js';
import 'tdesign-vue-next/esm/common/style/web/components/loading/_index.less';

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
    var _context$slots = context.slots;
      _context$slots.tips;
      var slots = _objectWithoutProperties(_context$slots, _excluded);
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
//# sourceMappingURL=useSingle.js.map
