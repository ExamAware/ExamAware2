/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

var Vue = require('vue');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var dayjs = require('dayjs');
var customParseFormat = require('./dep-d54d4085.js');
var timePicker_panel_props = require('./dep-f957f9e4.js');
var advancedFormat = require('./dep-b9b30627.js');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('./dep-953a77eb.js');
var index$1 = require('./dep-8382953f.js');
var index = require('./dep-ecaaae91.js');
require('@babel/runtime/helpers/slicedToArray');
require('./dep-cc66acf1.js');
var debounce = require('./dep-441a3b7b.js');
var _isIterateeCall = require('./dep-591a72de.js');
var toFinite = require('./dep-39403bd1.js');
var toString = require('./dep-71fa6bfc.js');
var _stringToArray = require('./dep-427dabac.js');
var _baseProperty = require('./dep-779f6290.js');
var configProvider_hooks_useConfig = require('../config-provider/hooks/useConfig.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);
var dayjs__default = /*#__PURE__*/_interopDefaultLegacy(dayjs);

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeFloor = Math.floor;

/**
 * The base implementation of `_.repeat` which doesn't coerce arguments.
 *
 * @private
 * @param {string} string The string to repeat.
 * @param {number} n The number of times to repeat the string.
 * @returns {string} Returns the repeated string.
 */
function baseRepeat(string, n) {
  var result = '';
  if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
    return result;
  }
  // Leverage the exponentiation by squaring algorithm for a faster repeat.
  // See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
  do {
    if (n % 2) {
      result += string;
    }
    n = nativeFloor(n / 2);
    if (n) {
      string += string;
    }
  } while (n);
  return result;
}

/**
 * Gets the size of an ASCII `string`.
 *
 * @private
 * @param {string} string The string inspect.
 * @returns {number} Returns the string size.
 */
var asciiSize = _baseProperty.baseProperty('length');

/** Used to compose unicode character classes. */
var rsAstralRange = "\\ud800-\\udfff",
  rsComboMarksRange = "\\u0300-\\u036f",
  reComboHalfMarksRange = "\\ufe20-\\ufe2f",
  rsComboSymbolsRange = "\\u20d0-\\u20ff",
  rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
  rsVarRange = "\\ufe0e\\ufe0f";

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange + ']',
  rsCombo = '[' + rsComboRange + ']',
  rsFitz = "\\ud83c[\\udffb-\\udfff]",
  rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
  rsNonAstral = '[^' + rsAstralRange + ']',
  rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}",
  rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]",
  rsZWJ = "\\u200d";

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?',
  rsOptVar = '[' + rsVarRange + ']?',
  rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
  rsSeq = rsOptVar + reOptMod + rsOptJoin,
  rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/**
 * Gets the size of a Unicode `string`.
 *
 * @private
 * @param {string} string The string inspect.
 * @returns {number} Returns the string size.
 */
function unicodeSize(string) {
  var result = reUnicode.lastIndex = 0;
  while (reUnicode.test(string)) {
    ++result;
  }
  return result;
}

/**
 * Gets the number of symbols in `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the string size.
 */
function stringSize(string) {
  return _stringToArray.hasUnicode(string) ? unicodeSize(string) : asciiSize(string);
}

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeCeil$1 = Math.ceil;

/**
 * Creates the padding for `string` based on `length`. The `chars` string
 * is truncated if the number of characters exceeds `length`.
 *
 * @private
 * @param {number} length The padding length.
 * @param {string} [chars=' '] The string used as padding.
 * @returns {string} Returns the padding for `string`.
 */
function createPadding(length, chars) {
  chars = chars === undefined ? ' ' : toString.baseToString(chars);
  var charsLength = chars.length;
  if (charsLength < 2) {
    return charsLength ? baseRepeat(chars, length) : chars;
  }
  var result = baseRepeat(chars, nativeCeil$1(length / stringSize(chars)));
  return _stringToArray.hasUnicode(chars) ? _stringToArray.castSlice(_stringToArray.stringToArray(result), 0, length).join('') : result.slice(0, length);
}

/**
 * Pads `string` on the left side if it's shorter than `length`. Padding
 * characters are truncated if they exceed `length`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to pad.
 * @param {number} [length=0] The padding length.
 * @param {string} [chars=' '] The string used as padding.
 * @returns {string} Returns the padded string.
 * @example
 *
 * _.padStart('abc', 6);
 * // => '   abc'
 *
 * _.padStart('abc', 6, '_-');
 * // => '_-_abc'
 *
 * _.padStart('abc', 3);
 * // => 'abc'
 */
function padStart(string, length, chars) {
  string = toString.toString(string);
  length = advancedFormat.toInteger(length);
  var strLength = length ? stringSize(string) : 0;
  return length && strLength < length ? createPadding(length - strLength, chars) + string : string;
}

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeCeil = Math.ceil,
  nativeMax = Math.max;

/**
 * The base implementation of `_.range` and `_.rangeRight` which doesn't
 * coerce arguments.
 *
 * @private
 * @param {number} start The start of the range.
 * @param {number} end The end of the range.
 * @param {number} step The value to increment or decrement by.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Array} Returns the range of numbers.
 */
function baseRange(start, end, step, fromRight) {
  var index = -1,
    length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
    result = Array(length);
  while (length--) {
    result[fromRight ? length : ++index] = start;
    start += step;
  }
  return result;
}

/**
 * Creates a `_.range` or `_.rangeRight` function.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new range function.
 */
function createRange(fromRight) {
  return function (start, end, step) {
    if (step && typeof step != 'number' && _isIterateeCall.isIterateeCall(start, end, step)) {
      end = step = undefined;
    }
    // Ensure the sign of `-0` is preserved.
    start = toFinite.toFinite(start);
    if (end === undefined) {
      end = start;
      start = 0;
    } else {
      end = toFinite.toFinite(end);
    }
    step = step === undefined ? start < end ? 1 : -1 : toFinite.toFinite(step);
    return baseRange(start, end, step, fromRight);
  };
}

/**
 * Creates an array of numbers (positive and/or negative) progressing from
 * `start` up to, but not including, `end`. A step of `-1` is used if a negative
 * `start` is specified without an `end` or `step`. If `end` is not specified,
 * it's set to `start` with `start` then set to `0`.
 *
 * **Note:** JavaScript follows the IEEE-754 standard for resolving
 * floating-point values which can produce unexpected results.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {number} [start=0] The start of the range.
 * @param {number} end The end of the range.
 * @param {number} [step=1] The value to increment or decrement by.
 * @returns {Array} Returns the range of numbers.
 * @see _.inRange, _.rangeRight
 * @example
 *
 * _.range(4);
 * // => [0, 1, 2, 3]
 *
 * _.range(-4);
 * // => [0, -1, -2, -3]
 *
 * _.range(1, 5);
 * // => [1, 2, 3, 4]
 *
 * _.range(0, 20, 5);
 * // => [0, 5, 10, 15]
 *
 * _.range(0, -4, -1);
 * // => [0, -1, -2, -3]
 *
 * _.range(1, 4, 0);
 * // => [1, 1, 1]
 *
 * _.range(0);
 * // => []
 */
var range = createRange();
var range$1 = range;

dayjs__default["default"].extend(advancedFormat.advancedFormat);
dayjs__default["default"].extend(customParseFormat.customParseFormat);
function validateInputValue(value, format) {
  return dayjs__default["default"](value, format).format(format) === value;
}
function formatInputValue(value, format) {
  return dayjs__default["default"](value, format).format(format);
}
function closestLookup(availableArr, calcVal, step) {
  if (step <= 1) return calcVal;
  return availableArr.sort(function (a, b) {
    return Math.abs(calcVal + 1 - a) - Math.abs(calcVal + 1 - b);
  })[0];
}
function getPickerCols(format) {
  var renderCol = [];
  var meridiem = timePicker_panel_props.EPickerCols.meridiem,
    hour = timePicker_panel_props.EPickerCols.hour,
    minute = timePicker_panel_props.EPickerCols.minute,
    second = timePicker_panel_props.EPickerCols.second,
    milliSecond = timePicker_panel_props.EPickerCols.milliSecond;
  var match = format.match(timePicker_panel_props.TIME_FORMAT);
  match.forEach(function (m) {
    switch (m) {
      case "H":
      case "HH":
      case "h":
      case "hh":
        renderCol.push(hour);
        break;
      case "a":
      case "A":
        renderCol.push(meridiem);
        break;
      case "m":
      case "mm":
        renderCol.push(minute);
        break;
      case "s":
      case "ss":
        renderCol.push(second);
        break;
      case "SSS":
        renderCol.push(milliSecond);
        break;
    }
  });
  return renderCol;
}

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
dayjs__default["default"].extend(customParseFormat.customParseFormat);
var timeArr = [timePicker_panel_props.EPickerCols.hour, timePicker_panel_props.EPickerCols.minute, timePicker_panel_props.EPickerCols.second, timePicker_panel_props.EPickerCols.milliSecond];
var panelOffset = {
  top: 15,
  bottom: 21
};
var SinglePanel = Vue.defineComponent({
  name: "TTimePickerPanelCol",
  props: _objectSpread(_objectSpread({}, timePicker_panel_props.panelColProps()), {}, {
    position: String,
    triggerScroll: Boolean,
    onChange: Function,
    resetTriggerScroll: Function,
    isShowPanel: Boolean
  }),
  setup: function setup(props) {
    var _useConfig = configProvider_hooks_useConfig.useConfig("timePicker"),
      globalConfig = _useConfig.globalConfig;
    var COMPONENT_NAME = index.usePrefixClass("time-picker__panel");
    var _useCommonClassName = index$1.useCommonClassName(),
      STATUS = _useCommonClassName.STATUS;
    var _toRefs = Vue.toRefs(props),
      steps = _toRefs.steps,
      value = _toRefs.value,
      format = _toRefs.format,
      position = _toRefs.position,
      triggerScroll = _toRefs.triggerScroll;
    var cols = Vue.ref([]);
    var bodyRef = Vue.ref();
    var maskRef = Vue.ref(null);
    var colsRef = Vue.reactive({
      0: null,
      1: null,
      2: null,
      3: null,
      4: null,
      5: null
    });
    var dayjsValue = Vue.computed(function () {
      var isStepsSet = !!steps.value.filter(function (step) {
        return Number(step) > 1;
      }).length;
      if (value.value) return dayjs__default["default"](value.value, format.value);
      if (isStepsSet) return dayjs__default["default"]().hour(0).minute(0).second(0);
      return dayjs__default["default"]();
    });
    Vue.watch(function () {
      return dayjsValue.value;
    }, function () {
      if (dayjsValue.value && value.value) updateTimeScrollPos(true);
    });
    Vue.watch(function () {
      return triggerScroll.value;
    }, function () {
      if (triggerScroll.value) {
        updateTimeScrollPos(true);
      }
    });
    Vue.onMounted(function () {
      cols.value = getPickerCols(format.value);
    });
    var getItemHeight = function getItemHeight() {
      var _maskRef$value;
      var maskDom = (_maskRef$value = maskRef.value) === null || _maskRef$value === void 0 ? void 0 : _maskRef$value.querySelector("div");
      if (!maskDom) {
        return {
          offsetHeight: 0,
          margin: 0
        };
      }
      return {
        offsetHeight: parseFloat(getComputedStyle(maskDom).height),
        margin: parseFloat(getComputedStyle(maskDom).marginTop)
      };
    };
    var timeItemCanUsed = function timeItemCanUsed(col, el) {
      var colIdx = timeArr.indexOf(col);
      if (colIdx !== -1) {
        var _props$disableTime;
        var params = [dayjsValue.value.hour(), dayjsValue.value.minute(), dayjsValue.value.second(), dayjsValue.value.millisecond()];
        params[colIdx] = Number(el);
        return !((_props$disableTime = props.disableTime) !== null && _props$disableTime !== void 0 && (_props$disableTime = _props$disableTime.call.apply(_props$disableTime, [props].concat(params, [{
          partial: position.value || "start"
        }]))) !== null && _props$disableTime !== void 0 && (_props$disableTime = _props$disableTime[col]) !== null && _props$disableTime !== void 0 && _props$disableTime.includes(Number(el)));
      }
      return true;
    };
    var getColList = function getColList(col) {
      var count = 0;
      if (timeArr.includes(col)) {
        var colIdx = timeArr.indexOf(col);
        var colStep = steps.value[colIdx] || 1;
        if (col === timePicker_panel_props.EPickerCols.hour) count = timePicker_panel_props.TWELVE_HOUR_FORMAT.test(format.value) ? 11 : 23;else if (col === timePicker_panel_props.EPickerCols.milliSecond) count = 999;else count = 59;
        var colList = range$1(0, count + 1, Number(colStep)).map(function (v) {
          return padStart(String(v), 2, "0");
        }) || [];
        return props.hideDisabledTime && !!props.disableTime ? colList.filter(function (t) {
          var _props$disableTime2;
          var params = [dayjsValue.value.hour(), dayjsValue.value.minute(), dayjsValue.value.second(), dayjsValue.value.millisecond()];
          params[colIdx] = Number(t);
          return !((_props$disableTime2 = props.disableTime) !== null && _props$disableTime2 !== void 0 && (_props$disableTime2 = _props$disableTime2.call.apply(_props$disableTime2, [props].concat(params, [{
            partial: position.value || "start"
          }]))) !== null && _props$disableTime2 !== void 0 && (_props$disableTime2 = _props$disableTime2[col]) !== null && _props$disableTime2 !== void 0 && _props$disableTime2.includes(Number(t)));
        }) : colList;
      }
      return timePicker_panel_props.MERIDIEM_LIST;
    };
    var getScrollDistance = function getScrollDistance(col, time) {
      if (col === timePicker_panel_props.EPickerCols.hour && /[h]{1}/.test(format.value)) time %= 12;
      var itemIdx = getColList(col).indexOf(padStart(String(time), 2, "0"));
      var _getItemHeight = getItemHeight(),
        offsetHeight = _getItemHeight.offsetHeight,
        margin = _getItemHeight.margin;
      var timeItemTotalHeight = offsetHeight + margin;
      var distance = Math.abs(Math.max(0, itemIdx) * timeItemTotalHeight);
      return distance;
    };
    var handleScroll = function handleScroll(col, idx, e) {
      var _colsRef$idx, _props$onChange;
      var val;
      var formattedVal;
      if (!props.isShowPanel) return;
      var scrollTop = (((_colsRef$idx = colsRef[idx]) === null || _colsRef$idx === void 0 ? void 0 : _colsRef$idx.scrollTop) || 0) + panelOffset.top;
      var _getItemHeight2 = getItemHeight(),
        offsetHeight = _getItemHeight2.offsetHeight,
        margin = _getItemHeight2.margin;
      var timeItemTotalHeight = offsetHeight + margin;
      var colStep = Math.abs(Math.round(scrollTop / timeItemTotalHeight + 0.5));
      var meridiem = timePicker_panel_props.MERIDIEM_LIST[Math.min(colStep - 1, 1)].toLowerCase();
      if (Number.isNaN(colStep)) colStep = 1;
      if (timeArr.includes(col)) {
        var max = 59;
        if (col === timePicker_panel_props.EPickerCols.hour) max = /[h]{1}/.test(format.value) ? 11 : 23;else if (col === timePicker_panel_props.EPickerCols.milliSecond) max = 999;
        var colIdx = timeArr.indexOf(col);
        var availableArr = range$1(0, max + 1, Number(steps.value[colIdx]) || 1);
        val = closestLookup(availableArr, Number(getColList(col)[Math.min(colStep - 1, max + 1, availableArr.length - 1)]), Number(steps.value[colIdx]) || 1);
        if (Number.isNaN(val)) val = availableArr[availableArr.length - 1];
        if (col === timePicker_panel_props.EPickerCols.hour && cols.value.includes(timePicker_panel_props.EPickerCols.meridiem) && dayjsValue.value.hour() >= 12) {
          val = Number(val) + 12;
        }
      } else val = meridiem;
      var distance = getScrollDistance(col, val);
      if (!dayjs__default["default"](dayjsValue.value).isValid() || value.value && !dayjs__default["default"](value.value, format.value, true).isValid()) return;
      if (timeArr.includes(col)) {
        var _dayjsValue$value$col, _dayjsValue$value;
        if (timeItemCanUsed(col, val)) formattedVal = (_dayjsValue$value$col = (_dayjsValue$value = dayjsValue.value)[col]) === null || _dayjsValue$value$col === void 0 ? void 0 : _dayjsValue$value$col.call(_dayjsValue$value, val).format(format.value);else formattedVal = dayjsValue.value.format(format.value);
      } else {
        var currentHour = dayjsValue.value.hour();
        if (meridiem === timePicker_panel_props.AM && currentHour >= 12) {
          formattedVal = dayjsValue.value.hour(currentHour - 12).format(format.value);
        } else if (meridiem === timePicker_panel_props.PM && currentHour < 12) {
          formattedVal = dayjsValue.value.hour(currentHour + 12).format(format.value);
        } else {
          formattedVal = dayjsValue.value.format(format.value);
        }
      }
      if (formattedVal !== value.value) (_props$onChange = props.onChange) === null || _props$onChange === void 0 || _props$onChange.call(props, formattedVal, e);
      if (distance !== scrollTop) {
        var _scrollCtrl$scrollTo;
        var scrollCtrl = colsRef[cols.value.indexOf(col)];
        if (!scrollCtrl || scrollCtrl.scrollTop === distance) return;
        (_scrollCtrl$scrollTo = scrollCtrl.scrollTo) === null || _scrollCtrl$scrollTo === void 0 || _scrollCtrl$scrollTo.call(scrollCtrl, {
          top: distance,
          behavior: "smooth"
        });
      }
    };
    var scrollToTime = function scrollToTime(col, time, idx) {
      var _scrollCtrl$scrollTo2;
      var behavior = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "auto";
      var distance = getScrollDistance(col, time);
      var scrollCtrl = colsRef[idx];
      if (!scrollCtrl || scrollCtrl.scrollTop === distance || !timeItemCanUsed(col, time)) return;
      (_scrollCtrl$scrollTo2 = scrollCtrl.scrollTo) === null || _scrollCtrl$scrollTo2 === void 0 || _scrollCtrl$scrollTo2.call(scrollCtrl, {
        top: distance,
        behavior: behavior
      });
    };
    var handleTimeItemClick = function handleTimeItemClick(col, el, idx, e) {
      if (!timeItemCanUsed(col, el)) return;
      if (timeArr.includes(col)) {
        if (col === timePicker_panel_props.EPickerCols.hour && dayjsValue.value.format("a") === timePicker_panel_props.PM && cols.value.includes(timePicker_panel_props.EPickerCols.meridiem)) {
          el = Number(el) + 12;
        }
        scrollToTime(col, el, idx, "smooth");
      } else {
        var currentHour = dayjsValue.value.hour();
        if (el === timePicker_panel_props.AM && currentHour >= 12) {
          var _props$onChange2;
          (_props$onChange2 = props.onChange) === null || _props$onChange2 === void 0 || _props$onChange2.call(props, dayjsValue.value.hour(currentHour - 12).format(format.value), e);
        } else if (el === timePicker_panel_props.PM && currentHour < 12) {
          var _props$onChange3;
          (_props$onChange3 = props.onChange) === null || _props$onChange3 === void 0 || _props$onChange3.call(props, dayjsValue.value.hour(currentHour + 12).format(format.value), e);
        }
      }
    };
    var updateTimeScrollPos = function updateTimeScrollPos() {
      var isAutoScroll = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var behavior = value.value && !isAutoScroll ? "smooth" : "auto";
      var isStepsSet = !!steps.value.filter(function (step) {
        return Number(step) > 1;
      }).length;
      Vue.nextTick(function () {
        cols.value.forEach(function (col, idx) {
          if (!isStepsSet || isStepsSet && value.value) {
            var _dayjsValue$value$col2, _dayjsValue$value2;
            scrollToTime(col, timeArr.includes(col) ? (_dayjsValue$value$col2 = (_dayjsValue$value2 = dayjsValue.value)[col]) === null || _dayjsValue$value$col2 === void 0 ? void 0 : _dayjsValue$value$col2.call(_dayjsValue$value2) : dayjsValue.value.format("a"), idx, behavior);
          } else {
            var _getColList;
            scrollToTime(col, (_getColList = getColList(col)) === null || _getColList === void 0 ? void 0 : _getColList[0], idx, behavior);
          }
        });
      });
      props.resetTriggerScroll();
    };
    var isCurrent = function isCurrent(col, colItem) {
      var _dayjsValue$value$col3, _dayjsValue$value3;
      var colVal;
      if (col === timePicker_panel_props.EPickerCols.meridiem) {
        var currentMeridiem = dayjsValue.value.format("a");
        return currentMeridiem === colItem;
      }
      colVal = (_dayjsValue$value$col3 = (_dayjsValue$value3 = dayjsValue.value)[col]) === null || _dayjsValue$value$col3 === void 0 ? void 0 : _dayjsValue$value$col3.call(_dayjsValue$value3);
      if (col === timePicker_panel_props.EPickerCols.hour && /[h]{1}/.test(format.value)) {
        colVal %= 12;
      }
      return colVal === Number(colItem);
    };
    return function () {
      var _cols$value$map, _cols$value, _cols$value$map2, _cols$value2;
      return Vue.createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "-body"),
        "ref": bodyRef
      }, [Vue.createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "-body-active-mask"),
        "ref": maskRef
      }, [(_cols$value$map = (_cols$value = cols.value).map) === null || _cols$value$map === void 0 ? void 0 : _cols$value$map.call(_cols$value, function (col, idx) {
        return Vue.createVNode("div", {
          "key": "".concat(col, "_").concat(idx)
        }, null);
      })]), (_cols$value$map2 = (_cols$value2 = cols.value).map) === null || _cols$value$map2 === void 0 ? void 0 : _cols$value$map2.call(_cols$value2, function (col, idx) {
        return Vue.createVNode("ul", {
          "key": "".concat(col, "_").concat(idx),
          "ref": function ref(el) {
            return colsRef[idx] = el;
          },
          "class": "".concat(COMPONENT_NAME.value, "-body-scroll"),
          "onScroll": debounce.debounce(function (e) {
            return handleScroll(col, idx, e);
          }, 50)
        }, [getColList(col).map(function (el) {
          return Vue.createVNode("li", {
            "key": el,
            "class": ["".concat(COMPONENT_NAME.value, "-body-scroll-item"), _defineProperty__default["default"](_defineProperty__default["default"]({}, STATUS.value.disabled, !timeItemCanUsed(col, el)), STATUS.value.current, isCurrent(col, el))],
            "onClick": function onClick(e) {
              return handleTimeItemClick(col, el, idx, e);
            }
          }, [timeArr.includes(col) ? timePicker_panel_props.TWELVE_HOUR_FORMAT.test(format.value) && col === timePicker_panel_props.EPickerCols.hour && el === "00" ? "12" : el : globalConfig.value[el === timePicker_panel_props.AM ? "anteMeridiem" : "postMeridiem"]]);
        })]);
      })]);
    };
  }
});

exports.SinglePanel = SinglePanel;
exports.formatInputValue = formatInputValue;
exports.validateInputValue = validateInputValue;
//# sourceMappingURL=dep-5e8a20df.js.map
