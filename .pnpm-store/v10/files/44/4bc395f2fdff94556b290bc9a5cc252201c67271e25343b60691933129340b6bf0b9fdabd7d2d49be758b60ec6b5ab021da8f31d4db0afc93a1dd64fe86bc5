/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { reactive, watch } from 'vue';
import dayjs from 'dayjs';
import { isArray } from 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../../_chunks/dep-fe23be6e.js';
import { useConfig } from '../../config-provider/hooks/useConfig.js';
import '@babel/runtime/helpers/slicedToArray';
import '../../_chunks/dep-880d05b9.js';
import '@babel/runtime/helpers/defineProperty';
import { COMPONENT_NAME } from '../consts/index.js';
import { createDefaultCurDate } from '../utils/index.js';
import '../../_chunks/dep-81b01cae.js';
import '../../config-provider/utils/context.js';
import '../../_chunks/dep-938cd955.js';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';

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
//# sourceMappingURL=useState.js.map
