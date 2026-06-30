/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
var format = require('../../_chunks/dep-9beee08e.js');
var isNil = require('../../_chunks/dep-6f2064e4.js');
require('dayjs');
require('../../_chunks/dep-8abdfb41.js');
require('../../_chunks/dep-d54d4085.js');
require('../../_chunks/dep-733b2b51.js');
require('../../_chunks/dep-a55e8a08.js');
require('../../_chunks/dep-b3b464e8.js');
require('@babel/runtime/helpers/typeof');
require('../../_chunks/dep-87589faa.js');
require('../../_chunks/dep-05f89f0d.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);

function dateCorrection(partialIndex, preYear, preMonth, onlyYearSelect) {
  var nextYear = preYear;
  var nextMonth = preMonth;
  if (partialIndex === 0) {
    if (nextYear[1] <= nextYear[0]) {
      if (onlyYearSelect) nextYear[1] = nextYear[0] + 1;else {
        nextYear[1] = nextYear[0];
        if (nextMonth[1] <= nextMonth[0]) {
          nextMonth[1] = nextMonth[0] + 1;
          if (nextMonth[1] === 12) {
            nextMonth[1] = 0;
            nextYear = [nextYear[0], nextYear[1] + 1];
          }
        }
      }
    }
  }
  if (partialIndex === 1) {
    if (nextYear[0] >= nextYear[1]) {
      if (onlyYearSelect) nextYear[0] = nextYear[1] - 1;else {
        nextYear[0] = nextYear[1];
        if (nextMonth[0] >= nextMonth[1]) {
          nextMonth[0] = nextMonth[1] - 1;
          if (nextMonth[0] === -1) {
            nextMonth[0] = 11;
            nextYear = [nextYear[0] - 1, nextYear[1]];
          }
        }
      }
    }
  }
  return {
    nextYear: nextYear,
    nextMonth: nextMonth
  };
}
function parseToDateTime(value, format$1, times) {
  if (isNil.isNil(value)) {
    return null;
  }
  var dayjs = format.parseToDayjs(value, format$1);
  if (times) {
    var _times = _slicedToArray__default["default"](times, 4),
      _times$ = _times[0],
      hour = _times$ === void 0 ? 0 : _times$,
      _times$2 = _times[1],
      minute = _times$2 === void 0 ? 0 : _times$2,
      _times$3 = _times[2],
      second = _times$3 === void 0 ? 0 : _times$3,
      _times$4 = _times[3],
      millisecond = _times$4 === void 0 ? 0 : _times$4;
    dayjs = dayjs.hour(hour).minute(minute).second(second).millisecond(millisecond);
  }
  return dayjs.toDate();
}

exports.dateCorrection = dateCorrection;
exports.parseToDateTime = parseToDateTime;
//# sourceMappingURL=index.js.map
