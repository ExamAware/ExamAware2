/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { _ as _slicedToArray } from '../../_chunks/dep-9003fde5.mjs';
import { toRefs, computed, ref, watch } from 'vue';
import { j as useVModel } from '../../_chunks/dep-7673347f.mjs';
import { isArray } from 'lodash-es';
import { g as getDefaultFormat, e as extractTimeFormat, b as isValidDate, i as initYearMonthTime, f as formatDate, a as formatTime } from '../../_chunks/dep-c0b36067.mjs';
import '../../_chunks/dep-9f459d8b.mjs';
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
import '../../_chunks/dep-83649365.mjs';
import '../../_chunks/dep-6d2705e1.mjs';

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
//# sourceMappingURL=useRangeValue.mjs.map
