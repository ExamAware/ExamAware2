/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import { toRefs, computed, ref, watchEffect } from 'vue';
import { g as getDefaultFormat, e as extractTimeFormat, a as formatTime, p as parseToDayjs, f as formatDate, b as isValidDate } from '../../_chunks/dep-4cdcccb6.js';
import 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../../_chunks/dep-fe23be6e.js';
import '../../config-provider/hooks/useConfig.js';
import '../../_chunks/dep-880d05b9.js';
import { u as useVModel } from '../../_chunks/dep-51e5a827.js';
import '@babel/runtime/helpers/defineProperty';
import 'dayjs';
import '../../_chunks/dep-81b01cae.js';
import '../../_chunks/dep-bcf15bc2.js';
import '../../_chunks/dep-8295e674.js';
import '../../config-provider/utils/context.js';
import '../../_chunks/dep-938cd955.js';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';

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
//# sourceMappingURL=useSingleValue.js.map
