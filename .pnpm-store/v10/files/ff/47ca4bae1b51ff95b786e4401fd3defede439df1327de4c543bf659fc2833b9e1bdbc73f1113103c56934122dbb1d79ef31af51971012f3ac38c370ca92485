/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var dayjs = require('dayjs');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../../_chunks/dep-953a77eb.js');
var configProvider_hooks_useConfig = require('../../config-provider/hooks/useConfig.js');
require('@babel/runtime/helpers/slicedToArray');
require('../../_chunks/dep-cc66acf1.js');
require('@babel/runtime/helpers/defineProperty');
var calendar_consts_index = require('../consts/index.js');
var calendar_utils_index = require('../utils/index.js');
var isArray = require('../../_chunks/dep-87589faa.js');
require('../../_chunks/dep-8abdfb41.js');
require('../../_chunks/dep-5d7e2375.js');
require('../../_chunks/dep-94a7dc2d.js');
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

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var dayjs__default = /*#__PURE__*/_interopDefaultLegacy(dayjs);

function useState(props) {
  var _useConfig = configProvider_hooks_useConfig.useConfig(calendar_consts_index.COMPONENT_NAME),
    globalConfig = _useConfig.globalConfig;
  var state = Vue.reactive({
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
    var curDate = calendar_utils_index.createDefaultCurDate();
    state.curDate = curDate;
    state.curSelectedYear = curDate.year();
    state.curSelectedMonth = parseInt(curDate.format("M"), 10);
  }
  function setCurSelectedYear(year) {
    var curSelectedYear = year ? parseInt("".concat(year), 10) : calendar_utils_index.createDefaultCurDate().year();
    if (!isNaN(curSelectedYear) && curSelectedYear > 0) {
      state.curSelectedYear = curSelectedYear;
    }
  }
  function setCurSelectedMonth(month) {
    var curSelectedMonth = month ? parseInt("".concat(month), 10) : parseInt(calendar_utils_index.createDefaultCurDate().format("M"), 10);
    if (!isNaN(curSelectedMonth) && curSelectedMonth > 0 && curSelectedMonth <= 12) {
      state.curSelectedMonth = curSelectedMonth;
    }
  }
  function setCurrentDate(value) {
    if (isArray.isArray(value)) {
      state.curDate = value && value.length ? dayjs__default["default"](value[0]) : calendar_utils_index.createDefaultCurDate();
    } else {
      state.curDate = value ? dayjs__default["default"](value) : calendar_utils_index.createDefaultCurDate();
    }
  }
  function setCurrentDateList(value) {
    if (isArray.isArray(value)) {
      state.curDateList = value && value.length ? value.map(function (item) {
        return dayjs__default["default"](item);
      }) : [calendar_utils_index.createDefaultCurDate()];
    } else {
      state.curDateList = value ? [dayjs__default["default"](value)] : [calendar_utils_index.createDefaultCurDate()];
    }
  }
  function checkDayVisible(day) {
    var re = true;
    if (!state.isShowWeekend) {
      re = day !== 6 && day !== 7;
    }
    return re;
  }
  Vue.watch(function () {
    return props.firstDayOfWeek;
  }, function () {
    var _ref, _props$firstDayOfWeek;
    state.realFirstDayOfWeek = (_ref = (_props$firstDayOfWeek = props.firstDayOfWeek) !== null && _props$firstDayOfWeek !== void 0 ? _props$firstDayOfWeek : globalConfig.value.firstDayOfWeek) !== null && _ref !== void 0 ? _ref : 1;
  }, {
    immediate: true
  });
  Vue.watch(function () {
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
  Vue.watch(function () {
    return props.year;
  }, function (v) {
    setCurSelectedYear(v);
  }, {
    immediate: true
  });
  Vue.watch(function () {
    return props.month;
  }, function (v) {
    setCurSelectedMonth(v);
  }, {
    immediate: true
  });
  Vue.watch(function () {
    return props.isShowWeekendDefault;
  }, function (v) {
    state.isShowWeekend = v;
  }, {
    immediate: true
  });
  Vue.watch(function () {
    return props.mode;
  }, function (v) {
    state.curSelectedMode = v;
  }, {
    immediate: true
  });
  Vue.watch(function () {
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

exports.useState = useState;
//# sourceMappingURL=useState.js.map
