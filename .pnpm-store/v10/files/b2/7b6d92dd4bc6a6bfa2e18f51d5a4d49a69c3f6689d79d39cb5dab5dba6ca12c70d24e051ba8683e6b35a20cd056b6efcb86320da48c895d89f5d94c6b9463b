/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var timePicker_props = require('../time-picker/props.js');
var isBoolean = require('./dep-d45110a6.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

var AM = "am";
var PM = "pm";
var MERIDIEM_LIST = [AM, PM];
var TIME_PICKER_EMPTY = [void 0, void 0];
var DEFAULT_STEPS = [1, 1, 1];
var DEFAULT_FORMAT = "HH:mm:ss";
var EPickerCols = /* @__PURE__ */function (EPickerCols2) {
  EPickerCols2["hour"] = "hour";
  EPickerCols2["minute"] = "minute";
  EPickerCols2["second"] = "second";
  EPickerCols2["milliSecond"] = "millisecond";
  EPickerCols2["meridiem"] = "meridiem";
  return EPickerCols2;
}(EPickerCols || {});
var TIME_FORMAT = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
var TWELVE_HOUR_FORMAT = /[h]{1}/;

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var BooleanType = {
  type: Boolean,
  "default": true,
  validator: function validator(v) {
    return isBoolean.isBoolean(v);
  }
};
var panelProps = function panelProps() {
  return {
    disabled: _objectSpread(_objectSpread({}, BooleanType), {
      "default": false
    }),
    isFocus: _objectSpread(_objectSpread({}, BooleanType), {
      "default": false
    }),
    value: {
      type: String,
      "default": ""
    },
    format: {
      type: String,
      "default": "HH:mm:ss"
    },
    steps: _objectSpread({
      type: Array
    }, {
      "default": [1, 1, 1]
    }),
    isShowPanel: _objectSpread(_objectSpread({}, BooleanType), {
      "default": true
    }),
    activeIndex: {
      type: Number
    },
    presets: {
      type: Object
    },
    hideDisabledTime: _objectSpread({}, timePicker_props["default"].hideDisabledTime),
    disableTime: {
      type: Function
    },
    isFooterDisplay: _objectSpread({}, BooleanType)
  };
};
var panelColProps = function panelColProps() {
  return {
    format: {
      type: String,
      "default": "HH:mm:ss"
    },
    cols: {
      type: Array,
      "default": function _default() {
        return [EPickerCols.hour, EPickerCols.minute, EPickerCols.second];
      }
    },
    value: {
      type: String,
      "default": ""
    },
    range: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    steps: _objectSpread({
      type: Array
    }, {
      "default": [1, 1, 1]
    }),
    hideDisabledTime: _objectSpread({}, timePicker_props["default"].hideDisabledTime),
    disableTime: {
      type: Function
    },
    localeMeridiems: {
      type: Array
    }
  };
};

exports.AM = AM;
exports.DEFAULT_FORMAT = DEFAULT_FORMAT;
exports.DEFAULT_STEPS = DEFAULT_STEPS;
exports.EPickerCols = EPickerCols;
exports.MERIDIEM_LIST = MERIDIEM_LIST;
exports.PM = PM;
exports.TIME_FORMAT = TIME_FORMAT;
exports.TIME_PICKER_EMPTY = TIME_PICKER_EMPTY;
exports.TWELVE_HOUR_FORMAT = TWELVE_HOUR_FORMAT;
exports.panelColProps = panelColProps;
exports.panelProps = panelProps;
//# sourceMappingURL=dep-f957f9e4.js.map
