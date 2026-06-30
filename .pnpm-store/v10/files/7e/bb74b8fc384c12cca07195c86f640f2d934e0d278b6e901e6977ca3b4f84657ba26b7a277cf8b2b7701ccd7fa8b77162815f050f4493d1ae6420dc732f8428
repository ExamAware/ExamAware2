/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import dayjs from 'dayjs';
import { DAY_CN_MAP, LAST_MONTH_OF_YEAR, FIRST_MONTH_OF_YEAR } from '../consts/index.js';

var getDay = function getDay(dt) {
  var day = dayjs(dt).day();
  if (day === 0) {
    day = 7;
  }
  return day;
};
var getDayCn = function getDayCn(num) {
  var re = "";
  var numStr = num.toString();
  if (numStr in DAY_CN_MAP) {
    re = DAY_CN_MAP[numStr];
  }
  return re;
};
var getCellColIndex = function getCellColIndex(firstDayOfWeek, dt) {
  var re = 0;
  var day = getDay(dt);
  if (day >= firstDayOfWeek) {
    re = day - firstDayOfWeek;
  } else {
    re = 7 - firstDayOfWeek + day;
  }
  return re;
};
var addDate = function addDate(dt, days) {
  var d = new Date(dt);
  d.setDate(d.getDate() + days);
  return d;
};
var createYearCellsData = function createYearCellsData(props, state) {
  var year = state.curSelectedYear,
    curDate = state.curDate,
    curDateList = state.curDateList;
  var format = props.format,
    multiple = props.multiple;
  var monthsArr = [];
  var _loop = function _loop(num) {
    var date = new Date(year, num - 1);
    var isCurrent = multiple ? !!curDateList.find(function (item) {
      return item.year() === year && parseInt(item.format("M"), 10) === num;
    }) : curDate.year() === year && parseInt(curDate.format("M"), 10) === num;
    monthsArr.push({
      mode: "year",
      isCurrent: isCurrent,
      date: date,
      formattedDate: dayjs(date).format(format),
      filterDate: null,
      formattedFilterDate: null,
      isShowWeekend: true
    });
  };
  for (var num = FIRST_MONTH_OF_YEAR; num <= LAST_MONTH_OF_YEAR; num++) {
    _loop(num);
  }
  return monthsArr;
};
var createMonthCellsData = function createMonthCellsData(props, state) {
  var year = state.curSelectedYear,
    month = state.curSelectedMonth,
    firstDayOfWeek = state.realFirstDayOfWeek,
    curDate = state.curDate,
    curDateList = state.curDateList;
  var format = props.format,
    multiple = props.multiple;
  var daysArr = [];
  var begin = dayjs("".concat(year, "-").concat(month)).startOf("month").toDate();
  var end = dayjs(dayjs("".concat(year, "-").concat(month)).endOf("month").format("YYYY-MM-DD")).toDate();
  var days = end.getDate();
  var beginDateColIndex = getCellColIndex(firstDayOfWeek, begin);
  var arr = [];
  var num = 1;
  var createCellData = function createCellData(belongTo, isCurrent, date, weekOrder) {
    var day = getDay(date);
    return {
      mode: "month",
      belongTo: belongTo,
      isCurrent: isCurrent,
      day: day,
      weekOrder: weekOrder,
      date: date,
      formattedDate: dayjs(date).format(format),
      filterDate: null,
      formattedFilterDate: null,
      isShowWeekend: true
    };
  };
  var judgeIsCurrent = function judgeIsCurrent(date) {
    var isCurrent = multiple ? !!curDateList.find(function (item) {
      return item.isSame(dayjs(date));
    }) : curDate.isSame(dayjs(date));
    return isCurrent;
  };
  for (var i = 0; i < beginDateColIndex; i++) {
    var date = addDate(begin, i - beginDateColIndex);
    arr.push(createCellData(-1, false, date, num));
    if (arr.length === 7) {
      daysArr.push(arr);
      arr = [];
      num += 1;
    }
  }
  for (var _i = 0; _i < days; _i++) {
    var _date = addDate(begin, _i);
    var isCurrent = judgeIsCurrent(_date);
    arr.push(createCellData(0, isCurrent, _date, num));
    if (arr.length === 7) {
      daysArr.push(arr);
      arr = [];
      num += 1;
    }
  }
  if (arr.length) {
    var nextMonthCellNum = 7 - arr.length;
    for (var _i2 = 0; _i2 < nextMonthCellNum; _i2++) {
      var _date2 = addDate(end, _i2 + 1);
      arr.push(createCellData(1, false, _date2, num));
    }
    daysArr.push(arr);
  }
  return daysArr;
};
var createDefaultCurDate = function createDefaultCurDate() {
  return dayjs(dayjs().format("YYYY-MM-DD"));
};

export { addDate, createDefaultCurDate, createMonthCellsData, createYearCellsData, getCellColIndex, getDay, getDayCn };
//# sourceMappingURL=index.js.map
