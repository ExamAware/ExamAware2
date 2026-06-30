/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { _ as _slicedToArray } from './dep-9003fde5.mjs';
import { _ as _defineProperty } from './dep-1dacc319.mjs';
import { isFunction, chunk } from 'lodash-es';
import { d as dayjs } from './dep-ad588525.mjs';
import { c as commonjsGlobal, g as getDefaultExportFromCjs } from './dep-fe644854.mjs';
import { a as advancedFormat } from './dep-63305cb0.mjs';
import { c as customParseFormat } from './dep-83649365.mjs';
import { p as parseToDayjs } from './dep-c0b36067.mjs';

function _objectDestructuringEmpty(t) {
  if (null == t) throw new TypeError("Cannot destructure " + t);
}

function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}

var isBetween$1 = {exports: {}};

var isBetween = isBetween$1.exports;
(function (module, exports) {
  !function (e, i) {
    "object" == 'object' && "undefined" != 'object' ? module.exports = i() : "function" == typeof undefined && undefined.amd ? undefined(i) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_plugin_isBetween = i();
  }(commonjsGlobal, function () {
    "use strict";

    return function (e, i, t) {
      i.prototype.isBetween = function (e, i, s, f) {
        var n = t(e),
          o = t(i),
          r = "(" === (f = f || "()")[0],
          u = ")" === f[1];
        return (r ? this.isAfter(n, s) : !this.isBefore(n, s)) && (u ? this.isBefore(o, s) : !this.isAfter(o, s)) || (r ? this.isBefore(n, s) : !this.isAfter(n, s)) && (u ? this.isAfter(o, s) : !this.isBefore(o, s));
      };
    };
  });
})(isBetween$1, isBetween$1.exports);
var isBetweenExports = isBetween$1.exports;
var dayJsIsBetween = /*@__PURE__*/getDefaultExportFromCjs(isBetweenExports);

var weekOfYear$2 = {exports: {}};

var weekOfYear = weekOfYear$2.exports;
(function (module, exports) {
  !function (e, t) {
    "object" == 'object' && "undefined" != 'object' ? module.exports = t() : "function" == typeof undefined && undefined.amd ? undefined(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_plugin_weekOfYear = t();
  }(commonjsGlobal, function () {
    "use strict";

    var e = "week",
      t = "year";
    return function (i, n, r) {
      var f = n.prototype;
      f.week = function (i) {
        if (void 0 === i && (i = null), null !== i) return this.add(7 * (i - this.week()), "day");
        var n = this.$locale().yearStart || 1;
        if (11 === this.month() && this.date() > 25) {
          var f = r(this).startOf(t).add(1, t).date(n),
            s = r(this).endOf(e);
          if (f.isBefore(s)) return 1;
        }
        var a = r(this).startOf(t).date(n).startOf(e).subtract(1, "millisecond"),
          o = this.diff(a, e, !0);
        return o < 0 ? r(this).startOf("week").week() : Math.ceil(o);
      }, f.weeks = function (e) {
        return void 0 === e && (e = null), this.week(e);
      };
    };
  });
})(weekOfYear$2, weekOfYear$2.exports);
var weekOfYearExports = weekOfYear$2.exports;
var weekOfYear$1 = /*@__PURE__*/getDefaultExportFromCjs(weekOfYearExports);

var weekYear$2 = {exports: {}};

var weekYear = weekYear$2.exports;
(function (module, exports) {
  !function (e, t) {
    "object" == 'object' && "undefined" != 'object' ? module.exports = t() : "function" == typeof undefined && undefined.amd ? undefined(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_plugin_weekYear = t();
  }(commonjsGlobal, function () {
    "use strict";

    return function (e, t) {
      t.prototype.weekYear = function () {
        var e = this.month(),
          t = this.week(),
          n = this.year();
        return 1 === t && 11 === e ? n + 1 : 0 === e && t >= 52 ? n - 1 : n;
      };
    };
  });
})(weekYear$2, weekYear$2.exports);
var weekYearExports = weekYear$2.exports;
var weekYear$1 = /*@__PURE__*/getDefaultExportFromCjs(weekYearExports);

var localeData$2 = {exports: {}};

var localeData = localeData$2.exports;
(function (module, exports) {
  !function (n, e) {
    "object" == 'object' && "undefined" != 'object' ? module.exports = e() : "function" == typeof undefined && undefined.amd ? undefined(e) : (n = "undefined" != typeof globalThis ? globalThis : n || self).dayjs_plugin_localeData = e();
  }(commonjsGlobal, function () {
    "use strict";

    return function (n, e, t) {
      var r = e.prototype,
        o = function o(n) {
          return n && (n.indexOf ? n : n.s);
        },
        u = function u(n, e, t, r, _u) {
          var i = n.name ? n : n.$locale(),
            a = o(i[e]),
            s = o(i[t]),
            f = a || s.map(function (n) {
              return n.slice(0, r);
            });
          if (!_u) return f;
          var d = i.weekStart;
          return f.map(function (n, e) {
            return f[(e + (d || 0)) % 7];
          });
        },
        i = function i() {
          return t.Ls[t.locale()];
        },
        a = function a(n, e) {
          return n.formats[e] || function (n) {
            return n.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function (n, e, t) {
              return e || t.slice(1);
            });
          }(n.formats[e.toUpperCase()]);
        },
        s = function s() {
          var n = this;
          return {
            months: function months(e) {
              return e ? e.format("MMMM") : u(n, "months");
            },
            monthsShort: function monthsShort(e) {
              return e ? e.format("MMM") : u(n, "monthsShort", "months", 3);
            },
            firstDayOfWeek: function firstDayOfWeek() {
              return n.$locale().weekStart || 0;
            },
            weekdays: function weekdays(e) {
              return e ? e.format("dddd") : u(n, "weekdays");
            },
            weekdaysMin: function weekdaysMin(e) {
              return e ? e.format("dd") : u(n, "weekdaysMin", "weekdays", 2);
            },
            weekdaysShort: function weekdaysShort(e) {
              return e ? e.format("ddd") : u(n, "weekdaysShort", "weekdays", 3);
            },
            longDateFormat: function longDateFormat(e) {
              return a(n.$locale(), e);
            },
            meridiem: this.$locale().meridiem,
            ordinal: this.$locale().ordinal
          };
        };
      r.localeData = function () {
        return s.bind(this)();
      }, t.localeData = function () {
        var n = i();
        return {
          firstDayOfWeek: function firstDayOfWeek() {
            return n.weekStart || 0;
          },
          weekdays: function weekdays() {
            return t.weekdays();
          },
          weekdaysShort: function weekdaysShort() {
            return t.weekdaysShort();
          },
          weekdaysMin: function weekdaysMin() {
            return t.weekdaysMin();
          },
          months: function months() {
            return t.months();
          },
          monthsShort: function monthsShort() {
            return t.monthsShort();
          },
          longDateFormat: function longDateFormat(e) {
            return a(n, e);
          },
          meridiem: n.meridiem,
          ordinal: n.ordinal
        };
      }, t.months = function () {
        return u(i(), "months");
      }, t.monthsShort = function () {
        return u(i(), "monthsShort", "months", 3);
      }, t.weekdays = function (n) {
        return u(i(), "weekdays", null, null, n);
      }, t.weekdaysShort = function (n) {
        return u(i(), "weekdaysShort", "weekdays", 3, n);
      }, t.weekdaysMin = function (n) {
        return u(i(), "weekdaysMin", "weekdays", 2, n);
      };
    };
  });
})(localeData$2, localeData$2.exports);
var localeDataExports = localeData$2.exports;
var localeData$1 = /*@__PURE__*/getDefaultExportFromCjs(localeDataExports);

var quarterOfYear$2 = {exports: {}};

var quarterOfYear = quarterOfYear$2.exports;
(function (module, exports) {
  !function (t, n) {
    "object" == 'object' && "undefined" != 'object' ? module.exports = n() : "function" == typeof undefined && undefined.amd ? undefined(n) : (t = "undefined" != typeof globalThis ? globalThis : t || self).dayjs_plugin_quarterOfYear = n();
  }(commonjsGlobal, function () {
    "use strict";

    var t = "month",
      n = "quarter";
    return function (e, i) {
      var r = i.prototype;
      r.quarter = function (t) {
        return this.$utils().u(t) ? Math.ceil((this.month() + 1) / 3) : this.month(this.month() % 3 + 3 * (t - 1));
      };
      var s = r.add;
      r.add = function (e, i) {
        return e = Number(e), this.$utils().p(i) === n ? this.add(3 * e, t) : s.bind(this)(e, i);
      };
      var u = r.startOf;
      r.startOf = function (e, i) {
        var r = this.$utils(),
          s = !!r.u(i) || i;
        if (r.p(e) === n) {
          var o = this.quarter() - 1;
          return s ? this.month(3 * o).startOf(t).startOf("day") : this.month(3 * o + 2).endOf(t).endOf("day");
        }
        return u.bind(this)(e, i);
      };
    };
  });
})(quarterOfYear$2, quarterOfYear$2.exports);
var quarterOfYearExports = quarterOfYear$2.exports;
var quarterOfYear$1 = /*@__PURE__*/getDefaultExportFromCjs(quarterOfYearExports);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
dayjs.extend(weekOfYear$1);
dayjs.extend(weekYear$1);
dayjs.extend(localeData$1);
dayjs.extend(quarterOfYear$1);
dayjs.extend(advancedFormat);
dayjs.extend(customParseFormat);
dayjs.extend(dayJsIsBetween);
function firstUpperCase(str) {
  if (!str) return str;
  return str[0].toUpperCase().concat(str.substring(1, str.length));
}
function getFirstDayOfMonth(_ref) {
  var year = _ref.year,
    month = _ref.month;
  return new Date(year, month, 1);
}
function getDaysInMonth(_ref2) {
  var year = _ref2.year,
    month = _ref2.month;
  return new Date(year, month + 1, 0).getDate();
}
function getLastDayOfMonth(_ref3) {
  var year = _ref3.year,
    month = _ref3.month;
  return new Date(year, month, getDaysInMonth({
    year: year,
    month: month
  }));
}
function isSameYear(date1, date2) {
  return date1.getFullYear() === date2.getFullYear();
}
function isSameQuarter(date1, date2) {
  return isSameYear(date1, date2) && dayjs(date1).quarter() === dayjs(date2).quarter();
}
function isSameMonth(date1, date2) {
  return isSameYear(date1, date2) && date1.getMonth() === date2.getMonth();
}
function isSameWeek(date1, date2) {
  var dayjsLocale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "zh-cn";
  return isSameMonth(date1, date2) && dayjs(date1).locale(dayjsLocale).week() === dayjs(date2).locale(dayjsLocale).week();
}
function isSameDate(date1, date2) {
  return isSameMonth(date1, date2) && date1.getDate() === date2.getDate();
}
function compareAsc(date1, date2) {
  var d1 = date1.getTime();
  var d2 = date2.getTime();
  if (d1 < d2) return -1;
  if (d1 > d2) return 1;
  return 0;
}
function isSame(date1, date2) {
  var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "date";
  var dayjsLocale = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "zh-cn";
  var func = {
    isSameYear: isSameYear,
    isSameQuarter: isSameQuarter,
    isSameMonth: isSameMonth,
    isSameWeek: isSameWeek,
    isSameDate: isSameDate
  };
  return func["isSame".concat(firstUpperCase(type))](date1, date2, dayjsLocale);
}
function outOfRanges(d, min, max) {
  return min && compareAsc(d, min) === -1 || max && compareAsc(d, max) === 1;
}
function getToday() {
  var now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);
}
function getDateObj(date) {
  var tempDate = date;
  if (!(date instanceof Date)) {
    tempDate = getToday();
  }
  return {
    year: tempDate.getFullYear(),
    month: tempDate.getMonth(),
    date: tempDate.getDate(),
    hours: tempDate.getHours(),
    minutes: tempDate.getMinutes(),
    seconds: tempDate.getSeconds(),
    milliseconds: tempDate.getMilliseconds(),
    meridiem: tempDate.getHours() > 11 ? "PM" : "AM"
  };
}
function setDateTime(date, hours, minutes, seconds, milliseconds) {
  return dayjs(date).hour(hours).minute(minutes).second(seconds).millisecond(milliseconds).toDate();
}
function subtractMonth(date, num) {
  return dayjs(date).subtract(num, "month").toDate();
}
function addMonth(date, num) {
  return dayjs(date).add(num, "month").toDate();
}
function getWeeks(_ref4, _ref5) {
  var year = _ref4.year,
    month = _ref4.month;
  var firstDayOfWeek = _ref5.firstDayOfWeek,
    _ref5$showWeekOfYear = _ref5.showWeekOfYear,
    showWeekOfYear = _ref5$showWeekOfYear === void 0 ? false : _ref5$showWeekOfYear,
    _ref5$disableDate = _ref5.disableDate,
    disableDate = _ref5$disableDate === void 0 ? function () {
      return false;
    } : _ref5$disableDate,
    minDate = _ref5.minDate,
    maxDate = _ref5.maxDate,
    _ref5$dayjsLocale = _ref5.dayjsLocale,
    dayjsLocale = _ref5$dayjsLocale === void 0 ? "zh-cn" : _ref5$dayjsLocale,
    _ref5$cancelRangeSele = _ref5.cancelRangeSelectLimit,
    cancelRangeSelectLimit = _ref5$cancelRangeSele === void 0 ? false : _ref5$cancelRangeSele;
  var prependDay = getFirstDayOfMonth({
    year: year,
    month: month
  });
  var appendDay = getLastDayOfMonth({
    year: year,
    month: month
  });
  var maxDays = getDaysInMonth({
    year: year,
    month: month
  });
  var daysArr = [];
  var i = 1;
  var today = getToday();
  for (i; i <= maxDays; i++) {
    var currentDay = new Date(year, month, i);
    daysArr.push({
      text: i,
      active: false,
      value: currentDay,
      disabled: isFunction(disableDate) && disableDate(currentDay) || !cancelRangeSelectLimit && outOfRanges(currentDay, minDate, maxDate),
      now: isSame(today, currentDay),
      firstDayOfMonth: i === 1,
      lastDayOfMonth: i === maxDays,
      type: "current-month",
      dayjsObj: dayjs(currentDay).locale(dayjsLocale)
    });
  }
  if (prependDay.getDay() !== firstDayOfWeek) {
    prependDay.setDate(0);
    while (true) {
      daysArr.unshift({
        text: prependDay.getDate().toString(),
        active: false,
        value: new Date(prependDay),
        disabled: isFunction(disableDate) && disableDate(prependDay) || !cancelRangeSelectLimit && outOfRanges(prependDay, minDate, maxDate),
        additional: true,
        type: "prev-month",
        dayjsObj: dayjs(prependDay).locale(dayjsLocale)
      });
      prependDay.setDate(prependDay.getDate() - 1);
      if (prependDay.getDay() === Math.abs(firstDayOfWeek + 6) % 7) break;
    }
  }
  var LEN = 42;
  while (daysArr.length < LEN) {
    appendDay.setDate(appendDay.getDate() + 1);
    daysArr.push({
      text: appendDay.getDate(),
      active: false,
      value: new Date(appendDay),
      disabled: isFunction(disableDate) && disableDate(appendDay) || !cancelRangeSelectLimit && outOfRanges(appendDay, minDate, maxDate),
      additional: true,
      type: "next-month",
      dayjsObj: dayjs(appendDay).locale(dayjsLocale)
    });
  }
  var dataList = chunk(daysArr, 7);
  if (showWeekOfYear) {
    dataList.forEach(function (d) {
      d.unshift(_objectSpread(_objectSpread({}, d[0]), {}, {
        active: false,
        value: d[0].value,
        text: dayjs(d[0].value).locale(dayjsLocale).week(),
        dayjsObj: dayjs(d[0].value).locale(dayjsLocale)
      }));
    });
  }
  return dataList;
}
function getQuarters(year, _ref6) {
  var _ref6$disableDate = _ref6.disableDate,
    disableDate = _ref6$disableDate === void 0 ? function () {
      return false;
    } : _ref6$disableDate,
    minDate = _ref6.minDate,
    maxDate = _ref6.maxDate,
    quarterLocal = _ref6.quarterLocal,
    _ref6$dayjsLocale = _ref6.dayjsLocale,
    dayjsLocale = _ref6$dayjsLocale === void 0 ? "zh-cn" : _ref6$dayjsLocale,
    _ref6$cancelRangeSele = _ref6.cancelRangeSelectLimit,
    cancelRangeSelectLimit = _ref6$cancelRangeSele === void 0 ? false : _ref6$cancelRangeSele;
  var quarterArr = [];
  var today = getToday();
  for (var i = 1; i <= 4; i++) {
    var date = dayjs(new Date(year, 0)).quarter(i).toDate();
    quarterArr.push({
      value: date,
      now: isSame(date, today, "quarter"),
      disabled: isFunction(disableDate) && disableDate(date) || !cancelRangeSelectLimit && outOfRanges(date, minDate, maxDate),
      active: false,
      text: quarterLocal[i - 1],
      dayjsObj: dayjs(date).locale(dayjsLocale)
    });
  }
  return chunk(quarterArr, 4);
}
function getYears(year, _ref7) {
  var _ref7$disableDate = _ref7.disableDate,
    disableDate = _ref7$disableDate === void 0 ? function () {
      return false;
    } : _ref7$disableDate,
    minDate = _ref7.minDate,
    maxDate = _ref7.maxDate,
    _ref7$dayjsLocale = _ref7.dayjsLocale,
    dayjsLocale = _ref7$dayjsLocale === void 0 ? "zh-cn" : _ref7$dayjsLocale,
    _ref7$cancelRangeSele = _ref7.cancelRangeSelectLimit,
    cancelRangeSelectLimit = _ref7$cancelRangeSele === void 0 ? false : _ref7$cancelRangeSele;
  var startYear = parseInt((year / 10).toString(), 10) * 10;
  var endYear = startYear + 9;
  var yearArr = [];
  var today = getToday();
  for (var i = startYear; i <= endYear; i++) {
    var date = new Date(i, 0);
    yearArr.push({
      value: date,
      now: isSame(date, today, "year"),
      disabled: isFunction(disableDate) && disableDate(date) || !cancelRangeSelectLimit && outOfRanges(date, minDate, maxDate),
      active: false,
      text: "".concat(date.getFullYear()),
      dayjsObj: dayjs(date).locale(dayjsLocale)
    });
  }
  return chunk(yearArr, 3);
}
function getMonths(year, params) {
  var _params$disableDate = params.disableDate,
    disableDate = _params$disableDate === void 0 ? function () {
      return false;
    } : _params$disableDate,
    minDate = params.minDate,
    maxDate = params.maxDate,
    monthLocal = params.monthLocal,
    _params$dayjsLocale = params.dayjsLocale,
    dayjsLocale = _params$dayjsLocale === void 0 ? "zh-cn" : _params$dayjsLocale,
    _params$cancelRangeSe = params.cancelRangeSelectLimit,
    cancelRangeSelectLimit = _params$cancelRangeSe === void 0 ? false : _params$cancelRangeSe;
  var MonthArr = [];
  var today = getToday();
  for (var i = 0; i <= 11; i++) {
    var date = new Date(year, i);
    MonthArr.push({
      value: date,
      now: isSame(date, today, "month"),
      disabled: isFunction(disableDate) && disableDate(date) || !cancelRangeSelectLimit && outOfRanges(date, minDate, maxDate),
      active: false,
      text: monthLocal[date.getMonth()],
      dayjsObj: dayjs(date).locale(dayjsLocale)
    });
  }
  return chunk(MonthArr, 3);
}
function flagActive(data, _ref8) {
  var args = _extends({}, (_objectDestructuringEmpty(_ref8), _ref8));
  var start = args.start,
    end = args.end,
    hoverStart = args.hoverStart,
    hoverEnd = args.hoverEnd,
    _args$type = args.type,
    type = _args$type === void 0 ? "date" : _args$type,
    _args$isRange = args.isRange,
    isRange = _args$isRange === void 0 ? false : _args$isRange,
    value = args.value,
    _args$multiple = args.multiple,
    multiple = _args$multiple === void 0 ? false : _args$multiple;
  if (type === "week") return data;
  if (!isRange) {
    return data.map(function (row) {
      return row.map(function (item) {
        var _item = item;
        if (multiple) {
          var _value$some;
          _item.active = value === null || value === void 0 || (_value$some = value.some) === null || _value$some === void 0 ? void 0 : _value$some.call(value, function (val) {
            return isSame(dayjs(val).toDate(), _item.value, type) && !_item.additional;
          });
        } else {
          _item.active = start && isSame(item.value, start, type) && !_item.additional;
        }
        return _item;
      });
    });
  }
  return data.map(function (row) {
    return row.map(function (item) {
      var _item = item;
      var date = item.value;
      var isStart = start && isSame(start, date, type);
      var isHoverStart = hoverStart && isSame(hoverStart, date, type);
      var isEnd = end && isSame(end, date, type);
      var isHoverEnd = hoverEnd && isSame(hoverEnd, date, type);
      _item.active = (isStart || isEnd) && !_item.additional;
      if (start && end) {
        _item.highlight = dayjs(date).isBetween(start, end, type, "[]") && !_item.additional;
        _item.startOfRange = isStart;
        _item.endOfRange = isEnd;
      }
      if (hoverStart && hoverEnd) {
        _item.hoverHighlight = dayjs(date).isBetween(hoverStart, hoverEnd, type, "[]") && !_item.additional;
        _item.hoverStartOfRange = isHoverStart;
        _item.hoverEndOfRange = isHoverEnd;
      }
      return _item;
    });
  });
}
function extractTimeObj() {
  var timeFormat = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var matchedMeridiem = timeFormat.match(/[ap]m/i) || [""];
  var timeReg = /\d{1,2}(:\d{1,2})?(:\d{1,2})?(:\d{1,3})?/;
  var matchedTimeStr = timeFormat.match(timeReg) || ["0:0:0:0"];
  var _matchedTimeStr$0$spl = matchedTimeStr[0].split(":"),
    _matchedTimeStr$0$spl2 = _slicedToArray(_matchedTimeStr$0$spl, 4),
    _matchedTimeStr$0$spl3 = _matchedTimeStr$0$spl2[0],
    hours = _matchedTimeStr$0$spl3 === void 0 ? 0 : _matchedTimeStr$0$spl3,
    _matchedTimeStr$0$spl4 = _matchedTimeStr$0$spl2[1],
    minutes = _matchedTimeStr$0$spl4 === void 0 ? 0 : _matchedTimeStr$0$spl4,
    _matchedTimeStr$0$spl5 = _matchedTimeStr$0$spl2[2],
    seconds = _matchedTimeStr$0$spl5 === void 0 ? 0 : _matchedTimeStr$0$spl5,
    _matchedTimeStr$0$spl6 = _matchedTimeStr$0$spl2[3],
    milliseconds = _matchedTimeStr$0$spl6 === void 0 ? 0 : _matchedTimeStr$0$spl6;
  return {
    hours: +hours,
    minutes: +minutes,
    seconds: +seconds,
    milliseconds: +milliseconds,
    meridiem: matchedMeridiem[0]
  };
}
function isEnabledDate(_ref9) {
  var value = _ref9.value,
    disableDate = _ref9.disableDate,
    mode = _ref9.mode,
    format = _ref9.format;
  if (!disableDate) return true;
  var availableMode = mode === "quarter" ? "date" : mode;
  var isEnabled = true;
  if (isFunction(disableDate)) {
    return !disableDate(value);
  }
  if (Array.isArray(disableDate)) {
    var formattedDisabledDate = disableDate.map(function (item) {
      return parseToDayjs(item, format);
    });
    var isIncludes = formattedDisabledDate.some(function (item) {
      return item.isSame(dayjs(value));
    });
    return !isIncludes;
  }
  var from = disableDate.from,
    to = disableDate.to,
    before = disableDate.before,
    after = disableDate.after;
  if (from && to) {
    var compareMin = dayjs(from).startOf("day");
    var compareMax = dayjs(to).endOf("day");
    return !dayjs(value).isBetween(compareMin, compareMax, availableMode, "[]");
  }
  var min = before ? new Date(dayjs(before).startOf("day").format()) : null;
  var max = after ? new Date(dayjs(after).endOf("day").format()) : null;
  if (max && min) {
    var _compareMin = dayjs(new Date(min));
    var _compareMax = dayjs(new Date(max));
    isEnabled = dayjs(value).isBetween(_compareMin, _compareMax, availableMode, "[]");
  } else if (min) {
    var _compareMin2 = dayjs(new Date(min));
    isEnabled = !dayjs(value).isBefore(_compareMin2, availableMode);
  } else if (max) {
    var _compareMax2 = dayjs(new Date(max));
    isEnabled = !dayjs(value).isAfter(_compareMax2, availableMode);
  }
  return isEnabled;
}
function covertToDate(value, valueType) {
  return valueType === "time-stamp" ? new Date(value) : dayjs(value, valueType).toDate();
}

export { addMonth as a, isEnabledDate as b, covertToDate as c, getQuarters as d, extractTimeObj as e, getMonths as f, getWeeks as g, getYears as h, isSame as i, flagActive as j, subtractMonth as s };
//# sourceMappingURL=dep-2fe12221.mjs.map
