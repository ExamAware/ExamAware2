/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { isString } from 'lodash-es';
import { d as dayjs } from './dep-ad588525.mjs';
import { c as commonjsGlobal, g as getDefaultExportFromCjs } from './dep-fe644854.mjs';
import { c as customParseFormat } from './dep-83649365.mjs';
import './dep-6d2705e1.mjs';
import { l as log } from './dep-97ecacde.mjs';

var isoWeeksInYear$2 = {exports: {}};

var isoWeeksInYear = isoWeeksInYear$2.exports;
(function (module, exports) {
  !function (e, n) {
    "object" == 'object' && "undefined" != 'object' ? module.exports = n() : "function" == typeof undefined && undefined.amd ? undefined(n) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_plugin_isoWeeksInYear = n();
  }(commonjsGlobal, function () {
    "use strict";

    return function (e, n) {
      n.prototype.isoWeeksInYear = function () {
        var e = this.isLeapYear(),
          n = this.endOf("y").day();
        return 4 === n || e && 5 === n ? 53 : 52;
      };
    };
  });
})(isoWeeksInYear$2, isoWeeksInYear$2.exports);
var isoWeeksInYearExports = isoWeeksInYear$2.exports;
var isoWeeksInYear$1 = /*@__PURE__*/getDefaultExportFromCjs(isoWeeksInYearExports);

var isLeapYear$2 = {exports: {}};

var isLeapYear = isLeapYear$2.exports;
(function (module, exports) {
  !function (e, t) {
    "object" == 'object' && "undefined" != 'object' ? module.exports = t() : "function" == typeof undefined && undefined.amd ? undefined(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_plugin_isLeapYear = t();
  }(commonjsGlobal, function () {
    "use strict";

    return function (e, t) {
      t.prototype.isLeapYear = function () {
        return this.$y % 4 == 0 && this.$y % 100 != 0 || this.$y % 400 == 0;
      };
    };
  });
})(isLeapYear$2, isLeapYear$2.exports);
var isLeapYearExports = isLeapYear$2.exports;
var isLeapYear$1 = /*@__PURE__*/getDefaultExportFromCjs(isLeapYearExports);

dayjs.extend(isoWeeksInYear$1);
dayjs.extend(isLeapYear$1);
dayjs.extend(customParseFormat);
var TIME_FORMAT = "HH:mm:ss";
function extractTimeFormat() {
  var dateFormat = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  return dateFormat.replace(/\W?Y{2,4}|\W?D{1,2}|\W?Do|\W?d{1,4}|\W?M{1,4}|\W?y{2,4}/g, "").trim();
}
function parseToDayjs(value, format, timeOfDay, dayjsLocale, defaultTime) {
  if (value === "" || value === null) return dayjs();
  var dateText = value;
  if (/[w|W]/g.test(format)) {
    if (!isString(dateText)) {
      dateText = dayjs(dateText).locale(dayjsLocale || "zh-cn").format(format);
    }
    var yearStr = dateText.split(/[-/.\s]/)[0];
    var weekStr = dateText.split(/[-/.\s]/)[1];
    var weekFormatStr = format.split(/[-/.\s]/)[1];
    var firstWeek = dayjs(yearStr, "YYYY").locale(dayjsLocale || "zh-cn").startOf("year");
    if (firstWeek.day() > 4 || firstWeek.day() === 0) firstWeek = firstWeek.add(1, "week");
    var weekCounts = dayjs(yearStr, "YYYY").locale(dayjsLocale || "zh-cn").isoWeeksInYear();
    for (var i = 0; i <= weekCounts; i += 1) {
      var nextWeek = firstWeek.add(i, "week");
      if (timeOfDay === "start") nextWeek = nextWeek.subtract(5, "day");
      if (nextWeek.format(weekFormatStr) === weekStr) {
        if (defaultTime) {
          var parts = (defaultTime || "").split(":").map(function (p) {
            return Number(p);
          });
          nextWeek = nextWeek.hour(parts[0] || 0).minute(parts[1] || 0).second(parts[2] || 0);
        }
        return nextWeek;
      }
    }
  }
  if (/Q/g.test(format)) {
    if (!isString(dateText)) {
      dateText = dayjs(dateText).locale(dayjsLocale || "zh-cn").format(format);
    }
    var _yearStr = dateText.split(/[-/.\s]/)[0];
    var quarterStr = dateText.split(/[-/.\s]/)[1];
    var quarterFormatStr = format.split(/[-/.\s]/)[1];
    var firstQuarter = dayjs(_yearStr, "YYYY").startOf("year");
    for (var _i = 0; _i < 4; _i += 1) {
      var nextQuarter = firstQuarter.add(_i, "quarter");
      if (nextQuarter.format(quarterFormatStr) === quarterStr) {
        if (defaultTime) {
          var _parts = (defaultTime || "").split(":").map(function (p) {
            return Number(p);
          });
          return nextQuarter.hour(_parts[0] || 0).minute(_parts[1] || 0).second(_parts[2] || 0);
        }
        return nextQuarter;
      }
    }
  }
  var result = dayjs(dateText, format).isValid() ? dayjs(dateText, format) : dayjs(dateText);
  if (!result.isValid()) {
    log.error("DatePicker", "Check whether the format\u3001value format is valid.\n value: '".concat(value, "', format: '").concat(format, "'"));
    return dayjs();
  }
  try {
    var timeFormatFromFormat = extractTimeFormat(format || "");
    if (defaultTime && (!timeFormatFromFormat || timeFormatFromFormat.trim() === "")) {
      if (defaultTime) {
        var _parts2 = defaultTime.split(":").map(function (p) {
          return Number(p);
        });
        var withTime = result.hour(_parts2[0] || 0).minute(_parts2[1] || 0).second(_parts2[2] || 0);
        return withTime;
      }
    }
  } catch (e) {
    log.error("DatePicker", "set defaultTime error: ".concat(e));
  }
  return result;
}
function formatRange(_ref) {
  var newDate = _ref.newDate,
    format = _ref.format,
    dayjsLocale = _ref.dayjsLocale,
    targetFormat = _ref.targetFormat,
    autoSwap = _ref.autoSwap,
    defaultTime = _ref.defaultTime;
  if (!newDate || !Array.isArray(newDate)) return [];
  var dayjsDateList = newDate.map(function (d, i) {
    return d && parseToDayjs(d, format, void 0, void 0, defaultTime === null || defaultTime === void 0 ? void 0 : defaultTime[i]).locale(dayjsLocale);
  });
  if (autoSwap && dayjsDateList[0] && dayjsDateList[1] && dayjsDateList[0].toDate().getTime() > dayjsDateList[1].toDate().getTime()) {
    dayjsDateList = [dayjsDateList[1], dayjsDateList[0]];
  }
  if (dayjsDateList.some(function (r) {
    return r && !r.isValid();
  })) {
    log.error("DatePicker", "Check whether the value\u3001format\u3001valueType format is valid.\nformat: '".concat(format, "' value: '").concat(newDate, "' valueType: '").concat(targetFormat, "'"));
    return [];
  }
  if (targetFormat === "time-stamp") return dayjsDateList.map(function (da) {
    return da && da.toDate().getTime();
  });
  if (targetFormat === "Date") return dayjsDateList.map(function (da) {
    return da && da.toDate();
  });
  return dayjsDateList.map(function (da) {
    return da && da.format(targetFormat || format);
  });
}
function formatSingle(_ref2) {
  var newDate = _ref2.newDate,
    format = _ref2.format,
    targetFormat = _ref2.targetFormat,
    dayjsLocale = _ref2.dayjsLocale,
    defaultTime = _ref2.defaultTime;
  if (!newDate) return "";
  var dayJsDate = parseToDayjs(newDate, format, void 0, void 0, defaultTime).locale(dayjsLocale);
  if (!dayJsDate.isValid()) {
    log.error("DatePicker", "Check whether the format\u3001value format is valid.\nformat: '".concat(format, "' value: '").concat(newDate, "'"));
    return "";
  }
  if (targetFormat === "time-stamp") return dayJsDate.toDate().getTime();
  if (targetFormat === "Date") return dayJsDate.toDate();
  return dayJsDate.format(targetFormat || format);
}
function isValidDate(value, format) {
  if (Array.isArray(value)) {
    return value.every(function (v) {
      if (v === "") return true;
      return dayjs(v, format).isValid() || dayjs(v).isValid();
    });
  }
  if (value === "") return true;
  return dayjs(value, format).isValid() || dayjs(value).isValid();
}
function formatDate(newDate, _ref3) {
  var format = _ref3.format,
    targetFormat = _ref3.targetFormat,
    _ref3$dayjsLocale = _ref3.dayjsLocale,
    dayjsLocale = _ref3$dayjsLocale === void 0 ? "zh-cn" : _ref3$dayjsLocale,
    autoSwap = _ref3.autoSwap,
    defaultTime = _ref3.defaultTime;
  var result;
  if (Array.isArray(newDate)) {
    result = formatRange({
      newDate: newDate,
      format: format,
      dayjsLocale: dayjsLocale,
      targetFormat: targetFormat,
      autoSwap: autoSwap,
      defaultTime: defaultTime
    });
  } else {
    var singleDefaultTime = Array.isArray(defaultTime) ? "" : defaultTime;
    result = formatSingle({
      newDate: newDate,
      format: format,
      dayjsLocale: dayjsLocale,
      targetFormat: targetFormat,
      defaultTime: singleDefaultTime
    });
  }
  return result;
}
function calcFormatTime(time, timeFormat) {
  if (time && timeFormat) {
    var timeArr = time.split(":");
    var timeFormatArr = timeFormat.split(":");
    return timeArr.slice(0, timeFormatArr.length).join(":");
  }
  return time;
}
function formatTime(value, format, timeFormat, defaultTime) {
  var _result;
  var result = Array.isArray(value) ? value : [value];
  defaultTime = Array.isArray(defaultTime) ? defaultTime : [defaultTime, defaultTime];
  result = result.map(function (v, i) {
    if (v) {
      var formattedResult = dayjs(v, typeof v === "string" ? format : void 0).format(timeFormat);
      return !dayjs(formattedResult, timeFormat).isValid() && defaultTime[i] ? defaultTime[i] : formattedResult;
    }
    return calcFormatTime(defaultTime[i], timeFormat);
  });
  result = result.length ? result : defaultTime.map(function (t) {
    return calcFormatTime(t, timeFormat);
  });
  return Array.isArray(value) ? result : (_result = result) === null || _result === void 0 ? void 0 : _result[0];
}
function getDefaultFormat(_ref4) {
  var _ref4$mode = _ref4.mode,
    mode = _ref4$mode === void 0 ? "date" : _ref4$mode,
    format = _ref4.format,
    valueType = _ref4.valueType,
    enableTimePicker = _ref4.enableTimePicker;
  if (mode === "year") {
    return {
      format: format || "YYYY",
      valueType: valueType || format || "YYYY",
      timeFormat: TIME_FORMAT
    };
  }
  if (mode === "month") {
    return {
      format: format || "YYYY-MM",
      valueType: valueType || format || "YYYY-MM",
      timeFormat: TIME_FORMAT
    };
  }
  if (mode === "quarter") {
    return {
      format: format || "YYYY-[Q]Q",
      valueType: valueType || format || "YYYY-[Q]Q",
      timeFormat: TIME_FORMAT
    };
  }
  if (mode === "week") {
    return {
      format: format || "gggg-wo",
      valueType: valueType || format || "gggg-wo",
      timeFormat: TIME_FORMAT
    };
  }
  if (mode === "date") {
    return {
      format: format || "YYYY-MM-DD".concat(enableTimePicker ? " HH:mm:ss" : ""),
      valueType: valueType || format || "YYYY-MM-DD".concat(enableTimePicker ? " HH:mm:ss" : ""),
      timeFormat: extractTimeFormat(format || "YYYY-MM-DD".concat(enableTimePicker ? " HH:mm:ss" : "")) || TIME_FORMAT
    };
  }
  log.error("DatePicker", "Invalid mode: ".concat(mode));
  return {};
}
function initYearMonthTime(_ref5) {
  var value = _ref5.value,
    _ref5$mode = _ref5.mode,
    mode = _ref5$mode === void 0 ? "date" : _ref5$mode,
    format = _ref5.format,
    _ref5$timeFormat = _ref5.timeFormat,
    timeFormat = _ref5$timeFormat === void 0 ? "HH:mm:ss" : _ref5$timeFormat,
    enableTimePicker = _ref5.enableTimePicker;
  var defaultYearMonthTime = {
    year: [dayjs().year(), dayjs().year()],
    month: [dayjs().month(), dayjs().month()],
    time: [dayjs().format(timeFormat), dayjs().format(timeFormat)]
  };
  if (mode === "year") {
    defaultYearMonthTime.year[1] += 10;
  } else if (mode === "month" || mode === "quarter") {
    defaultYearMonthTime.year[1] += 1;
  } else if ((mode === "date" || mode === "week") && !enableTimePicker) {
    if (defaultYearMonthTime.month[0] === 11) {
      defaultYearMonthTime.year[1] += 1;
      defaultYearMonthTime.month[1] = 0;
    } else {
      defaultYearMonthTime.month[1] += 1;
    }
  }
  if (!value || !Array.isArray(value) || !value.length) {
    return defaultYearMonthTime;
  }
  return {
    year: value.map(function (v) {
      return parseToDayjs(v, format).year();
    }),
    month: value.map(function (v) {
      return parseToDayjs(v, format).month();
    }),
    time: value.map(function (v) {
      return parseToDayjs(v, format).format(timeFormat);
    })
  };
}

export { formatTime as a, isValidDate as b, extractTimeFormat as e, formatDate as f, getDefaultFormat as g, initYearMonthTime as i, parseToDayjs as p };
//# sourceMappingURL=dep-c0b36067.mjs.map
