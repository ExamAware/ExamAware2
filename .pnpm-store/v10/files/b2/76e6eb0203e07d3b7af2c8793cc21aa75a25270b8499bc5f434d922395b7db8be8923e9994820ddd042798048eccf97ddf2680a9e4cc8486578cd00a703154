/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import '../../_chunks/dep-7673347f.mjs';
import { g as getWeeks, d as getQuarters, f as getMonths, h as getYears, j as flagActive } from '../../_chunks/dep-2fe12221.mjs';
import { useConfig } from '../../config-provider/hooks/useConfig.mjs';
import 'vue';
import 'lodash-es';
import '../../_chunks/dep-00b4e06a.mjs';
import '../../_chunks/dep-9f459d8b.mjs';
import '../../_chunks/dep-257428bc.mjs';
import '../../_chunks/dep-51a43106.mjs';
import '../../_chunks/dep-fe644854.mjs';
import '../../_chunks/dep-22ebd6af.mjs';
import '../../_chunks/dep-9003fde5.mjs';
import '../../_chunks/dep-cdd448ec.mjs';
import '../../_chunks/dep-97ecacde.mjs';
import '../../config-provider/utils/context.mjs';
import '../../_chunks/dep-a4c09318.mjs';
import '../../_chunks/dep-ffb85102.mjs';
import '../../_chunks/dep-ad588525.mjs';
import '../../_chunks/dep-84fd47b3.mjs';
import '../../_chunks/dep-1dacc319.mjs';
import '../../_chunks/dep-d36c4a3f.mjs';
import '../../_chunks/dep-63305cb0.mjs';
import '../../_chunks/dep-83649365.mjs';
import '../../_chunks/dep-c0b36067.mjs';
import '../../_chunks/dep-6d2705e1.mjs';

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
//# sourceMappingURL=useTableData.mjs.map
