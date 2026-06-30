/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import { toRefs, computed, ref, watch } from 'vue';
import { isArray } from 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../../_chunks/dep-fe23be6e.js';
import '../../config-provider/hooks/useConfig.js';
import '../../_chunks/dep-880d05b9.js';
import { u as useVModel } from '../../_chunks/dep-51e5a827.js';
import '@babel/runtime/helpers/defineProperty';
import { g as getDefaultFormat, e as extractTimeFormat, b as isValidDate, i as initYearMonthTime, f as formatDate, a as formatTime } from '../../_chunks/dep-4cdcccb6.js';
import '../../_chunks/dep-81b01cae.js';
import '../../config-provider/utils/context.js';
import '../../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '../../_chunks/dep-bcf15bc2.js';
import '../../_chunks/dep-8295e674.js';

function useRangeValue(props) {
  var _toRefs = toRefs(props),
    valueFromProps = _toRefs.value,
    modelValue = _toRefs.modelValue;
  var _useVModel = useVModel(valueFromProps, modelValue, props.defaultValue, props.onChange),
    _useVModel2 = _slicedToArray(_useVModel, 2),
    value = _useVModel2[0],
    onChange = _useVModel2[1];
  var formatRef = computed(function () {
    return getDefaultFormat({
      mode: props.mode,
      format: props.format,
      valueType: props.valueType,
      enableTimePicker: props.enableTimePicker
    });
  });
  if (props.enableTimePicker) {
    if (!extractTimeFormat(formatRef.value.format)) console.error("format: ".concat(formatRef.value.format, " \u4E0D\u89C4\u8303\uFF0C\u5305\u542B\u65F6\u95F4\u9009\u62E9\u5FC5\u987B\u8981\u6709\u65F6\u95F4\u683C\u5F0F\u5316 HH:mm:ss"));
  }
  if (!isArray(value.value)) {
    console.error("typeof value: ".concat(value.value, " must be Array!"));
  } else if (!isValidDate(value.value, formatRef.value.format)) {
    console.error("value: ".concat(value.value, " is invalid dateTime! Check whether the value is consistent with format: ").concat(formatRef.value.format));
  }
  var isFirstValueSelected = ref(false);
  var time = ref(initYearMonthTime({
    value: value.value,
    mode: props.mode,
    format: formatRef.value.format,
    timeFormat: formatRef.value.timeFormat
  }).time);
  var month = ref(initYearMonthTime({
    value: value.value,
    mode: props.mode,
    format: formatRef.value.format,
    enableTimePicker: props.enableTimePicker
  }).month);
  var year = ref(initYearMonthTime({
    value: value.value,
    mode: props.mode,
    format: formatRef.value.format
  }).year);
  var cacheValue = ref(formatDate(value.value, {
    format: formatRef.value.format
  }));
  watch(function () {
    return isFirstValueSelected.value;
  }, function () {
    if (year.value[1] < year.value[0]) {
      year.value[1] = year.value[0];
    }
    if (year.value[0] === year.value[1] && month.value[1] < month.value[0]) {
      month.value[1] = month.value[0];
    }
  });
  watch(value, function (newValue) {
    if (!newValue) {
      cacheValue.value = [];
      return;
    }
    if (!isValidDate(newValue, formatRef.value.format)) return;
    cacheValue.value = formatDate(newValue, {
      format: formatRef.value.valueType,
      targetFormat: formatRef.value.format
    });
    time.value = formatTime(newValue, formatRef.value.format, formatRef.value.timeFormat, props.defaultTime);
  }, {
    immediate: true
  });
  return {
    year: year,
    month: month,
    value: value,
    time: time,
    isFirstValueSelected: isFirstValueSelected,
    cacheValue: cacheValue,
    onChange: onChange
  };
}

export { useRangeValue };
//# sourceMappingURL=useRangeValue.js.map
