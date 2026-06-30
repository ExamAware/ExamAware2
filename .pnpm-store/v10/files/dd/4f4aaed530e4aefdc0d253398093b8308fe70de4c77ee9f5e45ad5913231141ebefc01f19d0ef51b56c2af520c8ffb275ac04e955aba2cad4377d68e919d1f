/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, ref, computed, toRefs, watch, createVNode } from 'vue';
import { _ as _slicedToArray } from '../_chunks/dep-9003fde5.mjs';
import { _ as _defineProperty } from '../_chunks/dep-1dacc319.mjs';
import { d as dayjs } from '../_chunks/dep-ad588525.mjs';
import { isArray } from 'lodash-es';
import { c as customParseFormat } from '../_chunks/dep-83649365.mjs';
import { TimeIcon } from 'tdesign-icons-vue-next';
import { RangeInputPopup } from '../range-input/index.mjs';
import _TimePickerPanel from './panel/time-picker-panel.mjs';
import { T as TIME_PICKER_EMPTY } from '../_chunks/dep-b1bc7bcc.mjs';
import { v as validateInputValue, f as formatInputValue } from '../_chunks/dep-928b1423.mjs';
import props from './time-range-picker-props.mjs';
import { u as usePrefixClass, c as useCommonClassName, i as useGlobalIcon, e as useDisabled, n as useReadonly, j as useVModel, o as useEventForward } from '../_chunks/dep-7673347f.mjs';
import { useConfig } from '../config-provider/hooks/useConfig.mjs';
import '../_chunks/dep-9f459d8b.mjs';
import '../_chunks/dep-257428bc.mjs';
import '../_chunks/dep-fe644854.mjs';
import '../range-input/range-input.mjs';
import '../input/index.mjs';
import '../input/input.mjs';
import '../_chunks/dep-0dcc778a.mjs';
import '../input/props.mjs';
import '../input/hooks/index.mjs';
import '../input/hooks/useInput.mjs';
import '../form/consts/index.mjs';
import '../input/hooks/useLengthLimit.mjs';
import '../_chunks/dep-6d2705e1.mjs';
import '../_chunks/dep-97ecacde.mjs';
import '../_chunks/dep-0cde7579.mjs';
import '../_chunks/dep-00b4e06a.mjs';
import '../input/hooks/useInputEventHandler.mjs';
import '../input/hooks/useInputWidth.mjs';
import '../_chunks/dep-51a43106.mjs';
import '../_chunks/dep-22ebd6af.mjs';
import '../_chunks/dep-cdd448ec.mjs';
import '../config-provider/utils/context.mjs';
import '../_chunks/dep-a4c09318.mjs';
import '../_chunks/dep-ffb85102.mjs';
import '../_chunks/dep-84fd47b3.mjs';
import '../_chunks/dep-d36c4a3f.mjs';
import '../input/input-group.mjs';
import '../input/input-group-props.mjs';
import './style/css.mjs';
import '../range-input/props.mjs';
import '../range-input/range-input-popup.mjs';
import '../popup/index.mjs';
import '../popup/popup.mjs';
import '@popperjs/core';
import '../popup/container.mjs';
import '../popup/props.mjs';
import '../range-input/range-input-popup-props.mjs';
import '../select-input/hooks/useOverlayInnerStyle.mjs';
import '../button/button.mjs';
import '../loading/index.mjs';
import '../loading/directive.mjs';
import '../loading/plugin.mjs';
import '../loading/loading.mjs';
import '../loading/icon/gradient.mjs';
import '../loading/props.mjs';
import '../button/props.mjs';
import './props.mjs';
import '../_chunks/dep-63305cb0.mjs';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
dayjs.extend(customParseFormat);
var _TimeRangePicker = defineComponent({
  name: "TTimeRangePicker",
  props: _objectSpread(_objectSpread({}, props), {}, {
    rangeInputProps: Object,
    popupProps: Object
  }),
  setup: function setup(props2) {
    var COMPONENT_NAME = usePrefixClass("time-range-picker");
    var _useConfig = useConfig("timePicker"),
      globalConfig = _useConfig.globalConfig;
    var _useCommonClassName = useCommonClassName(),
      STATUS = _useCommonClassName.STATUS;
    var _useGlobalIcon = useGlobalIcon({
        TimeIcon: TimeIcon
      }),
      TimeIcon$1 = _useGlobalIcon.TimeIcon;
    var disabled = useDisabled();
    var currentPanelIdx = ref(void 0);
    var currentValue = ref(TIME_PICKER_EMPTY);
    var isShowPanel = ref(false);
    var isReadOnly = useReadonly();
    var inputClasses = computed(function () {
      return ["".concat(COMPONENT_NAME.value, "__group"), _defineProperty({}, STATUS.value.focused, isShowPanel.value)];
    });
    var _toRefs = toRefs(props2),
      value = _toRefs.value,
      modelValue = _toRefs.modelValue,
      allowInput = _toRefs.allowInput,
      format = _toRefs.format;
    var _useVModel = useVModel(value, modelValue, props2.defaultValue, props2.onChange),
      _useVModel2 = _slicedToArray(_useVModel, 2),
      innerValue = _useVModel2[0],
      setInnerValue = _useVModel2[1];
    var handleShowPopup = function handleShowPopup(visible, context) {
      if (isReadOnly.value) return;
      if (context.trigger === "trigger-element-click") {
        isShowPanel.value = true;
        return;
      }
      isShowPanel.value = visible;
    };
    var handleClear = function handleClear(context) {
      var e = context.e;
      e.stopPropagation();
      currentValue.value = TIME_PICKER_EMPTY;
      setInnerValue(null);
    };
    var handleClick = function handleClick(_ref2) {
      var position = _ref2.position;
      currentPanelIdx.value = position === "first" ? 0 : 1;
    };
    var handleTimeChange = function handleTimeChange(newValue, e) {
      if (isArray(newValue)) {
        currentValue.value = newValue;
      } else if (currentPanelIdx.value === 0) {
        var _currentValue$value$;
        currentValue.value = [newValue, (_currentValue$value$ = currentValue.value[1]) !== null && _currentValue$value$ !== void 0 ? _currentValue$value$ : newValue];
      } else {
        var _currentValue$value$2;
        currentValue.value = [(_currentValue$value$2 = currentValue.value[0]) !== null && _currentValue$value$2 !== void 0 ? _currentValue$value$2 : newValue, newValue];
      }
      handleOnPick(newValue, e);
    };
    var handleInputBlur = function handleInputBlur(value2, _ref3) {
      var _props2$onBlur;
      var e = _ref3.e;
      if (allowInput.value) {
        var isValidTime = validateInputValue(currentValue.value[currentPanelIdx.value], format.value);
        if (isValidTime) {
          var _currentValue$value$3, _currentValue$value$4;
          var formattedVal = formatInputValue(currentValue.value[currentPanelIdx.value], format.value);
          currentPanelIdx.value === 0 ? currentValue.value = [formattedVal, (_currentValue$value$3 = currentValue.value[1]) !== null && _currentValue$value$3 !== void 0 ? _currentValue$value$3 : formattedVal] : currentValue.value = [(_currentValue$value$4 = currentValue.value[0]) !== null && _currentValue$value$4 !== void 0 ? _currentValue$value$4 : formattedVal, formattedVal];
        } else {
          var _innerValue$value, _previousValue$, _previousValue$2;
          var previousValue = (_innerValue$value = innerValue.value) !== null && _innerValue$value !== void 0 ? _innerValue$value : TIME_PICKER_EMPTY;
          currentPanelIdx.value === 0 ? currentValue.value = [(_previousValue$ = previousValue[0]) !== null && _previousValue$ !== void 0 ? _previousValue$ : TIME_PICKER_EMPTY[0], currentValue.value[1]] : currentValue.value = [currentValue.value[0], (_previousValue$2 = previousValue[1]) !== null && _previousValue$2 !== void 0 ? _previousValue$2 : TIME_PICKER_EMPTY[1]];
        }
      }
      (_props2$onBlur = props2.onBlur) === null || _props2$onBlur === void 0 || _props2$onBlur.call(props2, {
        value: value2,
        e: e
      });
    };
    var handleInputChange = function handleInputChange(inputVal, _ref4) {
      var _props2$onInput;
      var e = _ref4.e,
        position = _ref4.position;
      currentValue.value = inputVal;
      (_props2$onInput = props2.onInput) === null || _props2$onInput === void 0 || _props2$onInput.call(props2, {
        value: innerValue.value,
        e: e,
        position: position === "first" ? "start" : "end"
      });
    };
    var handleClickConfirm = function handleClickConfirm() {
      var isValidTime = !currentValue.value.find(function (v) {
        return !validateInputValue(v, format.value);
      });
      if (isValidTime) setInnerValue(currentValue.value);
      if (props2.autoSwap) autoSwapTime();
      isShowPanel.value = false;
    };
    var handleFocus = function handleFocus(value2, _ref5) {
      var _props2$onFocus;
      var e = _ref5.e,
        position = _ref5.position;
      (_props2$onFocus = props2.onFocus) === null || _props2$onFocus === void 0 || _props2$onFocus.call(props2, {
        value: value2,
        e: e,
        position: position === "first" ? "start" : "end"
      });
    };
    var autoSwapTime = function autoSwapTime() {
      var _currentValue$value = _slicedToArray(currentValue.value, 2),
        startTime = _currentValue$value[0],
        endTime = _currentValue$value[1];
      var startDayjs = dayjs(startTime, props2.format);
      var endDayjs = dayjs(endTime, props2.format);
      if (startDayjs.isAfter(endDayjs, "second")) {
        setInnerValue([currentValue.value[1], currentValue.value[0]]);
      } else {
        setInnerValue([currentValue.value[0], currentValue.value[1]]);
      }
    };
    var handleOnPick = function handleOnPick(pickValue, e) {
      var _props2$onPick;
      var pickedRangeValue = [];
      var context;
      if (isArray(pickValue)) {
        pickedRangeValue = pickValue;
        context = {
          e: e
        };
      } else if (currentPanelIdx.value === 0) {
        var _currentValue$value$5;
        pickedRangeValue = [pickValue, (_currentValue$value$5 = currentValue.value[1]) !== null && _currentValue$value$5 !== void 0 ? _currentValue$value$5 : pickValue];
        context = {
          e: e,
          position: "start"
        };
      } else {
        var _currentValue$value$6;
        pickedRangeValue = [(_currentValue$value$6 = currentValue.value[0]) !== null && _currentValue$value$6 !== void 0 ? _currentValue$value$6 : pickValue, pickValue];
        context = {
          e: e,
          position: "end"
        };
      }
      (_props2$onPick = props2.onPick) === null || _props2$onPick === void 0 || _props2$onPick.call(props2, pickedRangeValue, context);
    };
    watch(function () {
      return isShowPanel.value;
    }, function () {
      var _innerValue$value2;
      currentValue.value = isShowPanel.value ? (_innerValue$value2 = innerValue.value) !== null && _innerValue$value2 !== void 0 ? _innerValue$value2 : TIME_PICKER_EMPTY : TIME_PICKER_EMPTY;
      if (!isShowPanel.value) currentPanelIdx.value = void 0;
    });
    var rangeInputEvents = useEventForward(props2.rangeInputProps, {
      onClear: handleClear,
      onClick: handleClick,
      onFocus: handleFocus,
      onBlur: handleInputBlur
    });
    var popupEvents = useEventForward(props2.popupProps, {
      onVisibleChange: handleShowPopup
    });
    return function () {
      var _innerValue$value3, _innerValue$value4;
      return createVNode("div", {
        "class": COMPONENT_NAME.value
      }, [createVNode(RangeInputPopup, {
        "disabled": disabled.value,
        "popupVisible": isShowPanel.value,
        "popupProps": _objectSpread({
          overlayInnerStyle: {
            width: "auto",
            padding: 0
          }
        }, popupEvents.value),
        "onInputChange": handleInputChange,
        "inputValue": isShowPanel.value ? currentValue.value : (_innerValue$value3 = innerValue.value) !== null && _innerValue$value3 !== void 0 ? _innerValue$value3 : TIME_PICKER_EMPTY,
        "rangeInputProps": _objectSpread({
          size: props2.size,
          clearable: props2.clearable,
          "class": inputClasses.value,
          value: isShowPanel.value ? currentValue.value : (_innerValue$value4 = innerValue.value) !== null && _innerValue$value4 !== void 0 ? _innerValue$value4 : void 0,
          placeholder: props2.placeholder || [globalConfig.value.placeholder, globalConfig.value.placeholder],
          borderless: props2.borderless,
          suffixIcon: function suffixIcon() {
            return createVNode(TimeIcon$1, null, null);
          },
          readonly: isReadOnly.value || !allowInput.value,
          activeIndex: currentPanelIdx.value
        }, rangeInputEvents.value),
        "label": props2.label,
        "status": props2.status,
        "tips": props2.tips,
        "panel": function panel() {
          return createVNode(_TimePickerPanel, {
            "steps": props2.steps,
            "format": format.value,
            "isShowPanel": isShowPanel.value,
            "disableTime": props2.disableTime,
            "hideDisabledTime": props2.hideDisabledTime,
            "isFooterDisplay": true,
            "value": currentValue.value[currentPanelIdx.value || 0],
            "onChange": handleTimeChange,
            "onPick": handleOnPick,
            "handleConfirmClick": handleClickConfirm,
            "position": currentPanelIdx.value === 0 ? "start" : "end",
            "activeIndex": currentPanelIdx.value,
            "presets": props2.presets
          }, null);
        }
      }, null)]);
    };
  }
});

export { _TimeRangePicker as default };
//# sourceMappingURL=time-range-picker.mjs.map
