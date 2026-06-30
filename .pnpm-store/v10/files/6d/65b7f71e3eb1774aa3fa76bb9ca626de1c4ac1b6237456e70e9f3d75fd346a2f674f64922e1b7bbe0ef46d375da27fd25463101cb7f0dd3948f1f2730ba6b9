/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { _ as _slicedToArray } from '../../_chunks/dep-9003fde5.mjs';
import { toRefs, computed, ref, watchEffect } from 'vue';
import { g as getDefaultFormat, e as extractTimeFormat, a as formatTime, p as parseToDayjs, f as formatDate, b as isValidDate } from '../../_chunks/dep-c0b36067.mjs';
import { j as useVModel } from '../../_chunks/dep-7673347f.mjs';
import '../../_chunks/dep-9f459d8b.mjs';
import 'lodash-es';
import '../../_chunks/dep-ad588525.mjs';
import '../../_chunks/dep-257428bc.mjs';
import '../../_chunks/dep-fe644854.mjs';
import '../../_chunks/dep-83649365.mjs';
import '../../_chunks/dep-6d2705e1.mjs';
import '../../_chunks/dep-97ecacde.mjs';
import '../../_chunks/dep-00b4e06a.mjs';
import '../../_chunks/dep-51a43106.mjs';
import '../../config-provider/hooks/useConfig.mjs';
import '../../config-provider/utils/context.mjs';
import '../../_chunks/dep-a4c09318.mjs';
import '../../_chunks/dep-ffb85102.mjs';
import '../../_chunks/dep-22ebd6af.mjs';
import '../../_chunks/dep-cdd448ec.mjs';
import '../../_chunks/dep-84fd47b3.mjs';
import '../../_chunks/dep-1dacc319.mjs';
import '../../_chunks/dep-d36c4a3f.mjs';

function useSingleValue(props) {
  var _value$value, _value$value2, _value$value3, _value$value4;
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
      enableTimePicker: props.multiple ? false : props.enableTimePicker
    });
  });
  if (props.enableTimePicker) {
    if (!extractTimeFormat(formatRef.value.format)) console.error("format: ".concat(formatRef.value.format, " \u4E0D\u89C4\u8303\uFF0C\u5305\u542B\u65F6\u95F4\u9009\u62E9\u5FC5\u987B\u8981\u6709\u65F6\u95F4\u683C\u5F0F\u5316 HH:mm:ss"));
  }
  var time = ref(formatTime(props.multiple ? (_value$value = value.value) === null || _value$value === void 0 ? void 0 : _value$value[0] : value.value, formatRef.value.format, formatRef.value.timeFormat, props.defaultTime));
  var month = ref(parseToDayjs(props.multiple ? (_value$value2 = value.value) === null || _value$value2 === void 0 ? void 0 : _value$value2[0] : value.value, formatRef.value.format).month());
  var year = ref(parseToDayjs(props.multiple ? (_value$value3 = value.value) === null || _value$value3 === void 0 ? void 0 : _value$value3[0] : value.value, formatRef.value.format).year());
  var cacheValue = ref(formatDate(props.multiple ? (_value$value4 = value.value) === null || _value$value4 === void 0 ? void 0 : _value$value4[0] : value.value, {
    format: formatRef.value.format
  }));
  watchEffect(function () {
    if (!value.value) {
      cacheValue.value = "";
      return;
    }
    if (!isValidDate(value.value, formatRef.value.format)) return;
    cacheValue.value = formatDate(value.value, {
      format: formatRef.value.format
    });
    time.value = formatTime(value.value, formatRef.value.format, formatRef.value.timeFormat, props.defaultTime);
  });
  return {
    year: year,
    month: month,
    value: value,
    time: time,
    cacheValue: cacheValue,
    onChange: onChange
  };
}

export { useSingleValue };
//# sourceMappingURL=useSingleValue.mjs.map
