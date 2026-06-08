/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('vue');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../../_chunks/dep-953a77eb.js');
var configProvider_hooks_useConfig = require('../../config-provider/hooks/useConfig.js');
require('@babel/runtime/helpers/slicedToArray');
require('../../_chunks/dep-cc66acf1.js');
require('@babel/runtime/helpers/defineProperty');
var utils = require('../../_chunks/dep-8f212fc6.js');
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
require('../../_chunks/dep-87589faa.js');
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
require('@babel/runtime/helpers/objectDestructuringEmpty');
require('@babel/runtime/helpers/extends');
require('../../_chunks/dep-b9b30627.js');
require('../../_chunks/dep-39403bd1.js');
require('../../_chunks/dep-e86abdd2.js');
require('../../_chunks/dep-80a478d7.js');
require('../../_chunks/dep-d54d4085.js');
require('../../_chunks/dep-9beee08e.js');
require('../../_chunks/dep-733b2b51.js');
require('../../_chunks/dep-72c4cc44.js');

function useTableData(props) {
  var _props$firstDayOfWeek;
  var _useConfig = configProvider_hooks_useConfig.useConfig("datePicker"),
    globalConfig = _useConfig.globalConfig;
  var options = {
    minDate: props.minDate,
    maxDate: props.maxDate,
    disableDate: props.disableDate,
    firstDayOfWeek: (_props$firstDayOfWeek = props.firstDayOfWeek) !== null && _props$firstDayOfWeek !== void 0 ? _props$firstDayOfWeek : globalConfig.value.firstDayOfWeek,
    monthLocal: globalConfig.value.months,
    quarterLocal: globalConfig.value.quarters,
    showWeekOfYear: props.mode === "week",
    dayjsLocale: globalConfig.value.dayjsLocale,
    cancelRangeSelectLimit: props.cancelRangeSelectLimit
  };
  var data = [];
  if (props.mode === "date") {
    data = utils.getWeeks({
      year: props.year,
      month: props.month
    }, options);
  } else if (props.mode === "week") {
    data = utils.getWeeks({
      year: props.year,
      month: props.month
    }, options);
  } else if (props.mode === "quarter") {
    data = utils.getQuarters(props.year, options);
  } else if (props.mode === "month") {
    data = utils.getMonths(props.year, options);
  } else if (props.mode === "year") {
    data = utils.getYears(props.year, options);
  }
  return utils.flagActive(data, {
    start: props.start,
    end: props.end,
    hoverStart: props.hoverStart,
    hoverEnd: props.hoverEnd,
    type: props.mode,
    isRange: props.isRange,
    value: props.value,
    multiple: props.multiple
  });
}

exports.useTableData = useTableData;
//# sourceMappingURL=useTableData.js.map
