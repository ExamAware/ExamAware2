/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import 'vue';
import 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../../_chunks/dep-fe23be6e.js';
import { useConfig } from '../../config-provider/hooks/useConfig.js';
import '@babel/runtime/helpers/slicedToArray';
import '../../_chunks/dep-880d05b9.js';
import '@babel/runtime/helpers/defineProperty';
import { g as getWeeks, d as getQuarters, f as getMonths, h as getYears, j as flagActive } from '../../_chunks/dep-67991c5a.js';
import '../../_chunks/dep-81b01cae.js';
import '../../config-provider/utils/context.js';
import '../../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '@babel/runtime/helpers/objectDestructuringEmpty';
import '@babel/runtime/helpers/extends';
import '../../_chunks/dep-bf4a6186.js';
import '../../_chunks/dep-bcf15bc2.js';
import '../../_chunks/dep-4cdcccb6.js';
import '../../_chunks/dep-8295e674.js';

function useTableData(props) {
  var _props$firstDayOfWeek;
  var _useConfig = useConfig("datePicker"),
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
    data = getWeeks({
      year: props.year,
      month: props.month
    }, options);
  } else if (props.mode === "week") {
    data = getWeeks({
      year: props.year,
      month: props.month
    }, options);
  } else if (props.mode === "quarter") {
    data = getQuarters(props.year, options);
  } else if (props.mode === "month") {
    data = getMonths(props.year, options);
  } else if (props.mode === "year") {
    data = getYears(props.year, options);
  }
  return flagActive(data, {
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

export { useTableData };
//# sourceMappingURL=useTableData.js.map
