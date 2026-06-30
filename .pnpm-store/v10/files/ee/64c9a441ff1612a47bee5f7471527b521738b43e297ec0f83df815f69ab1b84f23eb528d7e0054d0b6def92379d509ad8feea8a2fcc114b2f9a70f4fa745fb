/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
var datePicker_components_base_Cell = require('./Cell.js');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../../../_chunks/dep-953a77eb.js');
var index = require('../../../_chunks/dep-ecaaae91.js');
require('../../../_chunks/dep-cc66acf1.js');
var format = require('../../../_chunks/dep-9beee08e.js');
var isArray = require('../../../_chunks/dep-87589faa.js');
var configProvider_hooks_useConfig = require('../../../config-provider/hooks/useConfig.js');
require('../../../_chunks/dep-8f212fc6.js');
require('@babel/runtime/helpers/objectDestructuringEmpty');
require('@babel/runtime/helpers/extends');
require('dayjs');
require('../../../_chunks/dep-8abdfb41.js');
require('../../../_chunks/dep-b9b30627.js');
require('../../../_chunks/dep-39403bd1.js');
require('../../../_chunks/dep-e86abdd2.js');
require('../../../_chunks/dep-0813861e.js');
require('../../../_chunks/dep-80a478d7.js');
require('../../../_chunks/dep-b3b464e8.js');
require('../../../_chunks/dep-05f89f0d.js');
require('../../../_chunks/dep-d54d4085.js');
require('../../../_chunks/dep-48f60c78.js');
require('../../../_chunks/dep-72c4cc44.js');
require('../../../_chunks/dep-591a72de.js');
require('../../../_chunks/dep-f57bcb19.js');
require('../../../_chunks/dep-165ca38a.js');
require('../../../_chunks/dep-32412d92.js');
require('../../../_chunks/dep-5d7e2375.js');
require('../../../_chunks/dep-94a7dc2d.js');
require('../../../_chunks/dep-92e23f17.js');
require('../../../_chunks/dep-0ff616fe.js');
require('../../../_chunks/dep-5f52cd42.js');
require('../../../_chunks/dep-dc4bbc14.js');
require('../../../_chunks/dep-e27ea667.js');
require('../../../_chunks/dep-a8a3d718.js');
require('../../../_chunks/dep-54e566d9.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');
require('../../../_chunks/dep-733b2b51.js');
require('../../../_chunks/dep-a55e8a08.js');
require('../../../_chunks/dep-8adeee89.js');
require('../../../_chunks/dep-4d2ef282.js');
require('../../../_chunks/dep-929933ce.js');
require('../../../_chunks/dep-6b1f0ef8.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);
var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var TDateTable = Vue.defineComponent({
  name: "TDatePickerTable",
  props: {
    mode: {
      type: String,
      "default": "date"
    },
    value: [String, Number, Array, Date],
    format: String,
    firstDayOfWeek: Number,
    multiple: Boolean,
    data: Array,
    time: String,
    onCellClick: Function,
    onCellMouseEnter: Function,
    onCellMouseLeave: Function
  },
  setup: function setup(props) {
    var COMPONENT_NAME = index.usePrefixClass("date-picker__table");
    var _useConfig = configProvider_hooks_useConfig.useConfig("datePicker"),
      globalConfig = _useConfig.globalConfig;
    var dayjsLocale = globalConfig.value.dayjsLocale;
    var weekArr = Vue.computed(function () {
      var weekArr2 = [];
      var wi = props.firstDayOfWeek - 1;
      var len = globalConfig.value.weekdays.length;
      while (weekArr2.length < len) {
        weekArr2.push(globalConfig.value.weekdays[wi]);
        wi = (wi + len + 1) % len;
      }
      if (props.mode === "week") weekArr2.unshift(globalConfig.value.weekAbbreviation);
      return weekArr2;
    });
    var showThead = Vue.computed(function () {
      return props.mode === "date" || props.mode === "week";
    });
    var weekRowClass = function weekRowClass(value, targetValue) {
      if (props.mode !== "week" || !value) return {};
      if (isArray.isArray(value)) {
        var _startObj$locale, _startObj$locale$week, _endObj$locale, _endObj$locale$week;
        if (!value.length) return {};
        var _value$map = value.map(function (v) {
            return v && format.parseToDayjs(v, props.format);
          }),
          _value$map2 = _slicedToArray__default["default"](_value$map, 2),
          startObj = _value$map2[0],
          endObj = _value$map2[1];
        var startYear = startObj && startObj.year();
        var startWeek = startObj === null || startObj === void 0 || (_startObj$locale = startObj.locale) === null || _startObj$locale === void 0 || (_startObj$locale = _startObj$locale.call(startObj, dayjsLocale)) === null || _startObj$locale === void 0 || (_startObj$locale$week = _startObj$locale.week) === null || _startObj$locale$week === void 0 ? void 0 : _startObj$locale$week.call(_startObj$locale);
        var endYear = endObj && endObj.year();
        var endWeek = endObj === null || endObj === void 0 || (_endObj$locale = endObj.locale) === null || _endObj$locale === void 0 || (_endObj$locale = _endObj$locale.call(endObj, dayjsLocale)) === null || _endObj$locale === void 0 || (_endObj$locale$week = _endObj$locale.week) === null || _endObj$locale$week === void 0 ? void 0 : _endObj$locale$week.call(_endObj$locale);
        var targetObj = format.parseToDayjs(targetValue, props.format);
        var targetYear = targetObj.year();
        var targetWeek = targetObj.week();
        var isActive = targetYear === startYear && targetWeek === startWeek || targetYear === endYear && targetWeek === endWeek;
        var isRange = targetYear >= startYear && targetYear <= endYear && targetWeek > startWeek && targetWeek < endWeek;
        return _defineProperty__default["default"](_defineProperty__default["default"]({}, "".concat(COMPONENT_NAME.value, "-").concat(props.mode, "-row--active"), isActive), "".concat(COMPONENT_NAME.value, "-").concat(props.mode, "-row--range"), isRange);
      }
      var valueDayjs = format.parseToDayjs(value, props.format).locale(dayjsLocale);
      var targetDayjs = format.parseToDayjs(targetValue, props.format).locale(dayjsLocale);
      return _defineProperty__default["default"]({}, "".concat(COMPONENT_NAME.value, "-").concat(props.mode, "-row--active"), valueDayjs.year() === targetDayjs.year() && valueDayjs.week() === targetDayjs.week());
    };
    var multipleWeekRowClass = function multipleWeekRowClass(value, targetValue) {
      var _value$map3;
      var targetDayjs = format.parseToDayjs(targetValue, props.format);
      if (props.mode !== "week" || Array.isArray(value) && !value.length) return {};
      var isSomeYearWeek = (_value$map3 = value.map) === null || _value$map3 === void 0 ? void 0 : _value$map3.call(value, function (v) {
        return format.parseToDayjs(v, props.format);
      }).some(function (item) {
        return item.week() === targetDayjs.week() && item.year() === targetDayjs.year();
      });
      return _defineProperty__default["default"]({}, "".concat(COMPONENT_NAME.value, "-").concat(props.mode, "-row--active"), isSomeYearWeek);
    };
    var activeRowCss = props.multiple ? multipleWeekRowClass : weekRowClass;
    return function () {
      return Vue.createVNode("div", {
        "class": COMPONENT_NAME.value,
        "onMouseleave": function onMouseleave(e) {
          var _props$onCellMouseLea;
          return (_props$onCellMouseLea = props.onCellMouseLeave) === null || _props$onCellMouseLea === void 0 ? void 0 : _props$onCellMouseLea.call(props, {
            e: e
          });
        }
      }, [Vue.createVNode("table", null, [showThead.value && Vue.createVNode("thead", null, [Vue.createVNode("tr", {
        "class": "".concat(COMPONENT_NAME.value, "-header-row")
      }, [weekArr.value.map(function (value, i) {
        return Vue.createVNode("th", {
          "class": "".concat(COMPONENT_NAME.value, "-header-cell"),
          "key": i
        }, [value]);
      })])]), Vue.createVNode("tbody", null, [props.data.map(function (row, i) {
        return Vue.createVNode("tr", {
          "key": i,
          "class": _objectSpread(_defineProperty__default["default"]({}, "".concat(COMPONENT_NAME.value, "-").concat(props.mode, "-row"), true), activeRowCss(props.value, row[0].value))
        }, [row.map(function (col, j) {
          return Vue.createVNode(datePicker_components_base_Cell["default"], Vue.mergeProps(col, {
            "key": j,
            "time": props.time,
            "onClick": props.onCellClick,
            "onMouseEnter": props.onCellMouseEnter
          }), null);
        })]);
      })])])]);
    };
  }
});

exports["default"] = TDateTable;
//# sourceMappingURL=Table.js.map
