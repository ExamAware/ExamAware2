/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { ref, computed, createVNode, watch } from 'vue';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { CalendarIcon } from 'tdesign-icons-vue-next';
import { omit } from 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../../_chunks/dep-fe23be6e.js';
import { u as useTNodeJSX } from '../../_chunks/dep-2accc95a.js';
import { u as usePrefixClass } from '../../_chunks/dep-9e6d8a78.js';
import { u as useGlobalIcon } from '../../_chunks/dep-3a7a2ef1.js';
import '@babel/runtime/helpers/slicedToArray';
import '../../_chunks/dep-880d05b9.js';
import { u as useReadonly } from '../../_chunks/dep-47b13687.js';
import { g as getDefaultFormat, f as formatDate, b as isValidDate, p as parseToDayjs } from '../../_chunks/dep-4cdcccb6.js';
import { useRangeValue } from './useRangeValue.js';
import { useConfig } from '../../config-provider/hooks/useConfig.js';
import '../../_chunks/dep-81b01cae.js';
import '../../_chunks/dep-16bcfabc.js';
import '../../_chunks/dep-fb805f69.js';
import '../../config-provider/utils/context.js';
import '../../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '../../_chunks/dep-bcf15bc2.js';
import '../../_chunks/dep-8295e674.js';
import '../../_chunks/dep-51e5a827.js';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var PARTIAL_MAP = {
  first: "start",
  second: "end"
};
function useRange(props) {
  var COMPONENT_NAME = usePrefixClass("date-range-picker");
  var _useConfig = useConfig("datePicker"),
    globalConfig = _useConfig.globalConfig;
  var _useGlobalIcon = useGlobalIcon({
      CalendarIcon: CalendarIcon
    }),
    CalendarIcon$1 = _useGlobalIcon.CalendarIcon;
  var renderTNodeJSX = useTNodeJSX();
  var isMountedRef = ref(false);
  var inputRef = ref();
  var _useRangeValue = useRangeValue(props),
    value = _useRangeValue.value,
    onChange = _useRangeValue.onChange,
    time = _useRangeValue.time,
    month = _useRangeValue.month,
    year = _useRangeValue.year,
    cacheValue = _useRangeValue.cacheValue,
    isFirstValueSelected = _useRangeValue.isFirstValueSelected;
  var formatRef = computed(function () {
    return getDefaultFormat({
      mode: props.mode,
      format: props.format,
      valueType: props.valueType,
      enableTimePicker: props.enableTimePicker
    });
  });
  var popupVisible = ref(false);
  var isHoverCell = ref(false);
  var activeIndex = ref(0);
  var inputValue = ref(formatDate(props.value, {
    format: formatRef.value.format
  }));
  var isReadOnly = useReadonly();
  var rangeInputProps = computed(function () {
    return _objectSpread(_objectSpread({}, props.rangeInputProps), {}, {
      size: props.size,
      ref: inputRef,
      borderless: props.borderless,
      clearable: props.clearable && !isReadOnly.value,
      prefixIcon: function prefixIcon() {
        return renderTNodeJSX("prefixIcon");
      },
      readonly: isReadOnly.value || !props.allowInput,
      separator: props.separator || globalConfig.value.rangeSeparator,
      placeholder: props.placeholder || globalConfig.value.placeholder[props.mode],
      activeIndex: popupVisible.value ? activeIndex.value : void 0,
      suffixIcon: function suffixIcon() {
        return renderTNodeJSX("suffixIcon") || createVNode(CalendarIcon$1, null, null);
      },
      "class": _defineProperty({}, "".concat(COMPONENT_NAME.value, "__input--placeholder"), isHoverCell.value),
      onClick: function onClick(_ref) {
        var position = _ref.position;
        activeIndex.value = position === "first" ? 0 : 1;
      },
      onClear: function onClear(context) {
        if (context instanceof MouseEvent) context.stopPropagation();else context.e.stopPropagation();
        popupVisible.value = false;
        onChange === null || onChange === void 0 || onChange([], {
          dayjsValue: [],
          trigger: "clear"
        });
      },
      onBlur: function onBlur(newVal, _ref2) {
        var _props$onBlur;
        var e = _ref2.e,
          position = _ref2.position;
        (_props$onBlur = props.onBlur) === null || _props$onBlur === void 0 || _props$onBlur.call(props, {
          value: newVal,
          partial: PARTIAL_MAP[position],
          e: e
        });
      },
      onFocus: function onFocus(newVal, _ref3) {
        var _props$onFocus;
        var e = _ref3.e,
          position = _ref3.position;
        (_props$onFocus = props.onFocus) === null || _props$onFocus === void 0 || _props$onFocus.call(props, {
          value: newVal,
          partial: PARTIAL_MAP[position],
          e: e
        });
        activeIndex.value = position === "first" ? 0 : 1;
      },
      onChange: function onChange(newVal, _ref4) {
        _ref4.e;
          _ref4.position;
        inputValue.value = newVal;
        if (!isValidDate(newVal, formatRef.value.format)) return;
        cacheValue.value = newVal;
        var newYear = [];
        var newMonth = [];
        var newTime = [];
        newVal.forEach(function (v) {
          newYear.push(parseToDayjs(v, formatRef.value.format).year());
          newMonth.push(parseToDayjs(v, formatRef.value.format).month());
          newTime.push(parseToDayjs(v, formatRef.value.format).format(formatRef.value.timeFormat));
        });
        year.value = newYear;
        month.value = newMonth;
        time.value = newTime;
      },
      onEnter: function onEnter(newVal) {
        if (!isValidDate(newVal, formatRef.value.format) && !isValidDate(value.value, formatRef.value.format)) return;
        popupVisible.value = false;
        if (isValidDate(newVal, formatRef.value.format)) {
          onChange === null || onChange === void 0 || onChange(formatDate(newVal, {
            format: formatRef.value.format,
            targetFormat: formatRef.value.valueType,
            autoSwap: true
          }), {
            dayjsValue: newVal.map(function (v) {
              return parseToDayjs(v, formatRef.value.format);
            }),
            trigger: "enter"
          });
        } else if (isValidDate(value.value, formatRef.value.format)) {
          inputValue.value = formatDate(value.value, {
            format: formatRef.value.format
          });
        } else {
          inputValue.value = [];
        }
      }
    });
  });
  var popupProps = computed(function () {
    var _props$popupProps$ove, _props$popupProps, _props$popupProps2;
    return _objectSpread(_objectSpread({
      expandAnimation: true
    }, omit(props.popupProps, "on-visible-change")), {}, {
      overlayInnerStyle: (_props$popupProps$ove = (_props$popupProps = props.popupProps) === null || _props$popupProps === void 0 ? void 0 : _props$popupProps.overlayInnerStyle) !== null && _props$popupProps$ove !== void 0 ? _props$popupProps$ove : {
        width: "auto"
      },
      overlayClassName: [(_props$popupProps2 = props.popupProps) === null || _props$popupProps2 === void 0 ? void 0 : _props$popupProps2.overlayClassName, "".concat(COMPONENT_NAME.value, "__panel-container")],
      onVisibleChange: function onVisibleChange(visible, context) {
        var _props$popupProps3, _props$popupProps3$on, _props$popupProps4, _props$popupProps4$on;
        if (isReadOnly.value) return;
        (_props$popupProps3 = props.popupProps) === null || _props$popupProps3 === void 0 || (_props$popupProps3$on = _props$popupProps3.onVisibleChange) === null || _props$popupProps3$on === void 0 || _props$popupProps3$on.call(_props$popupProps3, visible, context);
        (_props$popupProps4 = props.popupProps) === null || _props$popupProps4 === void 0 || (_props$popupProps4$on = _props$popupProps4["on-visible-change"]) === null || _props$popupProps4$on === void 0 || _props$popupProps4$on.call(_props$popupProps4, visible, context);
        if (context.trigger === "trigger-element-click") {
          var indexMap = {
            0: "first",
            1: "second"
          };
          inputRef.value.focus({
            position: indexMap[activeIndex.value]
          });
          popupVisible.value = true;
          return;
        }
        popupVisible.value = visible;
      }
    });
  });
  watch(value, function (value2) {
    if (!value2) {
      inputValue.value = [];
      return;
    }
    if (!isValidDate(value2, formatRef.value.format)) return;
    inputValue.value = formatDate(value2, {
      format: formatRef.value.valueType,
      targetFormat: formatRef.value.format
    });
  }, {
    immediate: true
  });
  watch(activeIndex, function (index) {
    var _inputRef$value, _inputRef$value$focus;
    if (!isMountedRef.value) {
      isMountedRef.value = true;
      return;
    }
    if (!popupVisible.value) return;
    var indexMap = {
      0: "first",
      1: "second"
    };
    (_inputRef$value = inputRef.value) === null || _inputRef$value === void 0 || (_inputRef$value$focus = _inputRef$value.focus) === null || _inputRef$value$focus === void 0 || _inputRef$value$focus.call(_inputRef$value, {
      position: indexMap[index]
    });
  }, {
    immediate: true
  });
  return {
    year: year,
    month: month,
    value: value,
    time: time,
    inputValue: inputValue,
    popupVisible: popupVisible,
    rangeInputProps: rangeInputProps,
    popupProps: popupProps,
    isHoverCell: isHoverCell,
    activeIndex: activeIndex,
    isFirstValueSelected: isFirstValueSelected,
    cacheValue: cacheValue,
    onChange: onChange
  };
}

export { PARTIAL_MAP, useRange };
//# sourceMappingURL=useRange.js.map
