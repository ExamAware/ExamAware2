/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { reactive, watch } from 'vue';
import { d as dayjs } from '../../_chunks/dep-ad588525.mjs';
import '../../_chunks/dep-7673347f.mjs';
import { COMPONENT_NAME } from '../consts/index.mjs';
import { createDefaultCurDate } from '../utils/index.mjs';
import { isArray } from 'lodash-es';
import { useConfig } from '../../config-provider/hooks/useConfig.mjs';
import '../../_chunks/dep-257428bc.mjs';
import '../../_chunks/dep-fe644854.mjs';
import '../../_chunks/dep-00b4e06a.mjs';
import '../../_chunks/dep-9f459d8b.mjs';
import '../../_chunks/dep-51a43106.mjs';
import '../../_chunks/dep-22ebd6af.mjs';
import '../../_chunks/dep-9003fde5.mjs';
import '../../_chunks/dep-cdd448ec.mjs';
import '../../_chunks/dep-97ecacde.mjs';
import '../../config-provider/utils/context.mjs';
import '../../_chunks/dep-a4c09318.mjs';
import '../../_chunks/dep-ffb85102.mjs';
import '../../_chunks/dep-84fd47b3.mjs';
import '../../_chunks/dep-1dacc319.mjs';
import '../../_chunks/dep-d36c4a3f.mjs';

function useState(props) {
  var _useConfig = useConfig(COMPONENT_NAME),
    globalConfig = _useConfig.globalConfig;
  var state = reactive({
    realFirstDayOfWeek: 1,
    curDate: null,
    curDateList: [],
    curSelectedYear: null,
    curSelectedMonth: null,
    curSelectedMode: null,
    isShowWeekend: true,
    controlSize: "medium"
  });
  function toToday() {
    var curDate = createDefaultCurDate();
    state.curDate = curDate;
    state.curSelectedYear = curDate.year();
    state.curSelectedMonth = parseInt(curDate.format("M"), 10);
  }
  function setCurSelectedYear(year) {
    var curSelectedYear = year ? parseInt("".concat(year), 10) : createDefaultCurDate().year();
    if (!isNaN(curSelectedYear) && curSelectedYear > 0) {
      state.curSelectedYear = curSelectedYear;
    }
  }
  function setCurSelectedMonth(month) {
    var curSelectedMonth = month ? parseInt("".concat(month), 10) : parseInt(createDefaultCurDate().format("M"), 10);
    if (!isNaN(curSelectedMonth) && curSelectedMonth > 0 && curSelectedMonth <= 12) {
      state.curSelectedMonth = curSelectedMonth;
    }
  }
  function setCurrentDate(value) {
    if (isArray(value)) {
      state.curDate = value && value.length ? dayjs(value[0]) : createDefaultCurDate();
    } else {
      state.curDate = value ? dayjs(value) : createDefaultCurDate();
    }
  }
  function setCurrentDateList(value) {
    if (isArray(value)) {
      state.curDateList = value && value.length ? value.map(function (item) {
        return dayjs(item);
      }) : [createDefaultCurDate()];
    } else {
      state.curDateList = value ? [dayjs(value)] : [createDefaultCurDate()];
    }
  }
  function checkDayVisible(day) {
    var re = true;
    if (!state.isShowWeekend) {
      re = day !== 6 && day !== 7;
    }
    return re;
  }
  watch(function () {
    return props.firstDayOfWeek;
  }, function () {
    var _ref, _props$firstDayOfWeek;
    state.realFirstDayOfWeek = (_ref = (_props$firstDayOfWeek = props.firstDayOfWeek) !== null && _props$firstDayOfWeek !== void 0 ? _props$firstDayOfWeek : globalConfig.value.firstDayOfWeek) !== null && _ref !== void 0 ? _ref : 1;
  }, {
    immediate: true
  });
  watch(function () {
    return props.value;
  }, function (v) {
    if (props.multiple) {
      setCurrentDateList(v);
    } else {
      setCurrentDate(v);
    }
  }, {
    immediate: true
  });
  watch(function () {
    return props.year;
  }, function (v) {
    setCurSelectedYear(v);
  }, {
    immediate: true
  });
  watch(function () {
    return props.month;
  }, function (v) {
    setCurSelectedMonth(v);
  }, {
    immediate: true
  });
  watch(function () {
    return props.isShowWeekendDefault;
  }, function (v) {
    state.isShowWeekend = v;
  }, {
    immediate: true
  });
  watch(function () {
    return props.mode;
  }, function (v) {
    state.curSelectedMode = v;
  }, {
    immediate: true
  });
  watch(function () {
    return props.theme;
  }, function (v) {
    if (v === "card") state.controlSize = "small";
    if (v === "full") state.controlSize = "medium";
  }, {
    immediate: true
  });
  return {
    state: state,
    toToday: toToday,
    checkDayVisible: checkDayVisible
  };
}

export { useState };
//# sourceMappingURL=useState.mjs.map
