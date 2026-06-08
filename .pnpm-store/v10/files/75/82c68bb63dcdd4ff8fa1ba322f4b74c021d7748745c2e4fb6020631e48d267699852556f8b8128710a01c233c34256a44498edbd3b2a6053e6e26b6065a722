/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
var Vue = require('vue');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../../_chunks/dep-953a77eb.js');
require('../../config-provider/hooks/useConfig.js');
require('../../_chunks/dep-cc66acf1.js');
var index = require('../../_chunks/dep-e8ff2c13.js');
require('@babel/runtime/helpers/defineProperty');
var format = require('../../_chunks/dep-9beee08e.js');
var isArray = require('../../_chunks/dep-87589faa.js');
require('../../_chunks/dep-8abdfb41.js');
require('../../_chunks/dep-5d7e2375.js');
require('../../_chunks/dep-94a7dc2d.js');
require('dayjs');
require('../../_chunks/dep-92e23f17.js');
require('../../_chunks/dep-0ff616fe.js');
require('../../_chunks/dep-5f52cd42.js');
require('../../_chunks/dep-48f60c78.js');
require('../../_chunks/dep-b3b464e8.js');
require('../../_chunks/dep-0813861e.js');
require('../../_chunks/dep-f57bcb19.js');
require('../../_chunks/dep-dc4bbc14.js');
require('../../_chunks/dep-05f89f0d.js');
require('../../_chunks/dep-e27ea667.js');
require('../../_chunks/dep-165ca38a.js');
require('../../_chunks/dep-32412d92.js');
require('../../_chunks/dep-a8a3d718.js');
require('../../_chunks/dep-54e566d9.js');
require('../../_chunks/dep-591a72de.js');
require('../../_chunks/dep-a55e8a08.js');
require('../../_chunks/dep-8adeee89.js');
require('../../_chunks/dep-4d2ef282.js');
require('../../_chunks/dep-929933ce.js');
require('../../_chunks/dep-6b1f0ef8.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');
require('../../_chunks/dep-23f77e26.js');
require('../../_chunks/dep-ee355a9a.js');
require('../../_chunks/dep-71fa6bfc.js');
require('../../_chunks/dep-80a478d7.js');
require('../../_chunks/dep-d54d4085.js');
require('../../_chunks/dep-733b2b51.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);

function useRangeValue(props) {
  var _toRefs = Vue.toRefs(props),
    valueFromProps = _toRefs.value,
    modelValue = _toRefs.modelValue;
  var _useVModel = index.useVModel(valueFromProps, modelValue, props.defaultValue, props.onChange),
    _useVModel2 = _slicedToArray__default["default"](_useVModel, 2),
    value = _useVModel2[0],
    onChange = _useVModel2[1];
  var formatRef = Vue.computed(function () {
    return format.getDefaultFormat({
      mode: props.mode,
      format: props.format,
      valueType: props.valueType,
      enableTimePicker: props.enableTimePicker
    });
  });
  if (props.enableTimePicker) {
    if (!format.extractTimeFormat(formatRef.value.format)) console.error("format: ".concat(formatRef.value.format, " \u4E0D\u89C4\u8303\uFF0C\u5305\u542B\u65F6\u95F4\u9009\u62E9\u5FC5\u987B\u8981\u6709\u65F6\u95F4\u683C\u5F0F\u5316 HH:mm:ss"));
  }
  if (!isArray.isArray(value.value)) {
    console.error("typeof value: ".concat(value.value, " must be Array!"));
  } else if (!format.isValidDate(value.value, formatRef.value.format)) {
    console.error("value: ".concat(value.value, " is invalid dateTime! Check whether the value is consistent with format: ").concat(formatRef.value.format));
  }
  var isFirstValueSelected = Vue.ref(false);
  var time = Vue.ref(format.initYearMonthTime({
    value: value.value,
    mode: props.mode,
    format: formatRef.value.format,
    timeFormat: formatRef.value.timeFormat
  }).time);
  var month = Vue.ref(format.initYearMonthTime({
    value: value.value,
    mode: props.mode,
    format: formatRef.value.format,
    enableTimePicker: props.enableTimePicker
  }).month);
  var year = Vue.ref(format.initYearMonthTime({
    value: value.value,
    mode: props.mode,
    format: formatRef.value.format
  }).year);
  var cacheValue = Vue.ref(format.formatDate(value.value, {
    format: formatRef.value.format
  }));
  Vue.watch(function () {
    return isFirstValueSelected.value;
  }, function () {
    if (year.value[1] < year.value[0]) {
      year.value[1] = year.value[0];
    }
    if (year.value[0] === year.value[1] && month.value[1] < month.value[0]) {
      month.value[1] = month.value[0];
    }
  });
  Vue.watch(value, function (newValue) {
    if (!newValue) {
      cacheValue.value = [];
      return;
    }
    if (!format.isValidDate(newValue, formatRef.value.format)) return;
    cacheValue.value = format.formatDate(newValue, {
      format: formatRef.value.valueType,
      targetFormat: formatRef.value.format
    });
    time.value = format.formatTime(newValue, formatRef.value.format, formatRef.value.timeFormat, props.defaultTime);
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

exports.useRangeValue = useRangeValue;
//# sourceMappingURL=useRangeValue.js.map
