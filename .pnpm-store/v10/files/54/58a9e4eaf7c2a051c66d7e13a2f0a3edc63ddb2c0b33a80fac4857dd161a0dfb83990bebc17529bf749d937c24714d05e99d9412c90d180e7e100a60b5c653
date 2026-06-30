/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { _ as _slicedToArray } from '../../_chunks/dep-9003fde5.mjs';
import { isNil } from 'lodash-es';
import { p as parseToDayjs } from '../../_chunks/dep-c0b36067.mjs';
import '../../_chunks/dep-9f459d8b.mjs';
import '../../_chunks/dep-ad588525.mjs';
import '../../_chunks/dep-257428bc.mjs';
import '../../_chunks/dep-fe644854.mjs';
import '../../_chunks/dep-83649365.mjs';
import '../../_chunks/dep-6d2705e1.mjs';
import '../../_chunks/dep-97ecacde.mjs';

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
function parseToDateTime(value, format, times) {
  if (isNil(value)) {
    return null;
  }
  var dayjs = parseToDayjs(value, format);
  if (times) {
    var _times = _slicedToArray(times, 4),
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

export { dateCorrection, parseToDateTime };
//# sourceMappingURL=index.mjs.map
