/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { _ as _defineProperty } from '../../_chunks/dep-1dacc319.mjs';
import { ref, computed, watch } from 'vue';
import { d as dayjs } from '../../_chunks/dep-ad588525.mjs';
import { omit } from 'lodash-es';
import { u as usePrefixClass, e as useDisabled, n as useReadonly } from '../../_chunks/dep-7673347f.mjs';
import { g as getDefaultFormat, f as formatDate, b as isValidDate, p as parseToDayjs, a as formatTime } from '../../_chunks/dep-c0b36067.mjs';
import { useSingleValue } from './useSingleValue.mjs';
import '../../_chunks/dep-257428bc.mjs';
import '../../_chunks/dep-fe644854.mjs';
import '../../_chunks/dep-00b4e06a.mjs';
import '../../_chunks/dep-9f459d8b.mjs';
import '../../_chunks/dep-51a43106.mjs';
import '../../config-provider/hooks/useConfig.mjs';
import '../../config-provider/utils/context.mjs';
import '../../_chunks/dep-a4c09318.mjs';
import '../../_chunks/dep-ffb85102.mjs';
import '../../_chunks/dep-9003fde5.mjs';
import '../../_chunks/dep-22ebd6af.mjs';
import '../../_chunks/dep-cdd448ec.mjs';
import '../../_chunks/dep-97ecacde.mjs';
import '../../_chunks/dep-84fd47b3.mjs';
import '../../_chunks/dep-d36c4a3f.mjs';
import '../../_chunks/dep-83649365.mjs';
import '../../_chunks/dep-6d2705e1.mjs';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function useSingle(props) {
  var COMPONENT_NAME = usePrefixClass("date-picker");
  var disabled = useDisabled();
  var inputRef = ref();
  var isReadOnly = useReadonly();
  var _useSingleValue = useSingleValue(props),
    value = _useSingleValue.value,
    onChange = _useSingleValue.onChange,
    time = _useSingleValue.time,
    month = _useSingleValue.month,
    year = _useSingleValue.year,
    cacheValue = _useSingleValue.cacheValue;
  var formatRef = computed(function () {
    return getDefaultFormat({
      mode: props.mode,
      format: props.format,
      valueType: props.valueType,
      enableTimePicker: props.multiple ? false : props.enableTimePicker
    });
  });
  var popupVisible = ref(false);
  var isHoverCell = ref(false);
  var inputValue = ref(props.multiple ? formatDate(value.value, {
    format: formatRef.value.format
  }) || [] : formatDate(value.value, {
    format: formatRef.value.format
  }));
  var inputProps = computed(function () {
    var defaultInputProps = _objectSpread(_objectSpread({}, props.inputProps), {}, {
      size: props.size,
      ref: inputRef,
      readonly: isReadOnly.value || !props.allowInput,
      "class": [_defineProperty({}, "".concat(COMPONENT_NAME.value, "__input--placeholder"), isHoverCell.value)],
      onClear: function onClear(context) {
        var _context$e;
        context === null || context === void 0 || (_context$e = context.e) === null || _context$e === void 0 || _context$e.stopPropagation();
        popupVisible.value = false;
        onChange === null || onChange === void 0 || onChange("", {
          dayjsValue: dayjs(),
          trigger: "clear"
        });
      }
    });
    return props.multiple ? defaultInputProps : _objectSpread(_objectSpread({}, defaultInputProps), {}, {
      onBlur: function onBlur(val, context) {
        var _props$onBlur;
        (_props$onBlur = props.onBlur) === null || _props$onBlur === void 0 || _props$onBlur.call(props, {
          value: val,
          e: context.e
        });
      },
      onFocus: function onFocus(_, _ref2) {
        var _props$onFocus;
        var e = _ref2.e;
        (_props$onFocus = props.onFocus) === null || _props$onFocus === void 0 || _props$onFocus.call(props, {
          value: value.value,
          e: e
        });
      },
      onChange: function onChange(val) {
        inputValue.value = val;
        if (!isValidDate(val, formatRef.value.format)) return;
        cacheValue.value = val;
        var newMonth = parseToDayjs(val, formatRef.value.format).month();
        var newYear = parseToDayjs(val, formatRef.value.format).year();
        var newTime = formatTime(val, formatRef.value.format, formatRef.value.timeFormat, props.defaultTime);
        !Number.isNaN(newYear) && (year.value = newYear);
        !Number.isNaN(newMonth) && (month.value = newMonth);
        !Number.isNaN(newTime) && (time.value = newTime);
      },
      onEnter: function onEnter(val) {
        if (!val) {
          onChange("", {
            dayjsValue: dayjs(),
            trigger: "enter"
          });
          popupVisible.value = false;
          return;
        }
        if (!isValidDate(val, formatRef.value.format) && !isValidDate(value.value, formatRef.value.format)) return;
        popupVisible.value = false;
        if (isValidDate(val, formatRef.value.format)) {
          onChange === null || onChange === void 0 || onChange(formatDate(val, {
            format: formatRef.value.format,
            targetFormat: formatRef.value.valueType
          }), {
            dayjsValue: parseToDayjs(val, formatRef.value.format),
            trigger: "enter"
          });
        } else if (isValidDate(value.value, formatRef.value.format)) {
          inputValue.value = formatDate(value.value, {
            format: formatRef.value.format
          });
        } else {
          inputValue.value = "";
        }
      }
    });
  });
  var popupProps = computed(function () {
    var _props$popupProps$ove, _props$popupProps, _props$popupProps2;
    return _objectSpread(_objectSpread({
      expandAnimation: true
    }, omit(props.popupProps, "on-visible-change")), {}, {
      disabled: disabled.value,
      overlayInnerStyle: (_props$popupProps$ove = (_props$popupProps = props.popupProps) === null || _props$popupProps === void 0 ? void 0 : _props$popupProps.overlayInnerStyle) !== null && _props$popupProps$ove !== void 0 ? _props$popupProps$ove : {
        width: "auto"
      },
      overlayClassName: [(_props$popupProps2 = props.popupProps) === null || _props$popupProps2 === void 0 ? void 0 : _props$popupProps2.overlayClassName, "".concat(COMPONENT_NAME.value, "__panel-container")],
      onVisibleChange: function onVisibleChange(visible, context) {
        var _props$popupProps3, _props$popupProps3$on, _props$popupProps4, _props$popupProps4$on;
        if (disabled.value) return;
        (_props$popupProps3 = props.popupProps) === null || _props$popupProps3 === void 0 || (_props$popupProps3$on = _props$popupProps3.onVisibleChange) === null || _props$popupProps3$on === void 0 || _props$popupProps3$on.call(_props$popupProps3, visible, context);
        (_props$popupProps4 = props.popupProps) === null || _props$popupProps4 === void 0 || (_props$popupProps4$on = _props$popupProps4["on-visible-change"]) === null || _props$popupProps4$on === void 0 || _props$popupProps4$on.call(_props$popupProps4, visible, context);
        if (context.trigger === "trigger-element-click") {
          popupVisible.value = true;
          return;
        }
        popupVisible.value = visible;
      }
    });
  });
  watch(value, function (value2) {
    if (!value2) {
      inputValue.value = "";
      return;
    }
    if (!isValidDate(value2, formatRef.value.format)) return;
    inputValue.value = formatDate(value2, {
      format: formatRef.value.format
    });
  });
  return {
    year: year,
    month: month,
    value: value,
    time: time,
    inputValue: inputValue,
    popupVisible: popupVisible,
    inputProps: inputProps,
    popupProps: popupProps,
    inputRef: inputRef,
    cacheValue: cacheValue,
    isHoverCell: isHoverCell,
    onChange: onChange
  };
}

export { useSingle };
//# sourceMappingURL=useSingle.mjs.map
