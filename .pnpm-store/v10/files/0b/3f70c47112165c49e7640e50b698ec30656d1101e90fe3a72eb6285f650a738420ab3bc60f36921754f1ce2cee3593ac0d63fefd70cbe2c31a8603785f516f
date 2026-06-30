/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, computed, createVNode, mergeProps } from 'vue';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import TDatePickerCell from './Cell.js';
import { isArray } from 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../../../_chunks/dep-fe23be6e.js';
import { u as usePrefixClass } from '../../../_chunks/dep-9e6d8a78.js';
import '../../../_chunks/dep-880d05b9.js';
import { p as parseToDayjs } from '../../../_chunks/dep-4cdcccb6.js';
import { useConfig } from '../../../config-provider/hooks/useConfig.js';
import '../../../_chunks/dep-67991c5a.js';
import '@babel/runtime/helpers/objectDestructuringEmpty';
import '@babel/runtime/helpers/extends';
import 'dayjs';
import '../../../_chunks/dep-81b01cae.js';
import '../../../_chunks/dep-bf4a6186.js';
import '../../../_chunks/dep-bcf15bc2.js';
import '../../../config-provider/utils/context.js';
import '../../../_chunks/dep-938cd955.js';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '../../../_chunks/dep-8295e674.js';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var TDateTable = defineComponent({
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
    var COMPONENT_NAME = usePrefixClass("date-picker__table");
    var _useConfig = useConfig("datePicker"),
      globalConfig = _useConfig.globalConfig;
    var dayjsLocale = globalConfig.value.dayjsLocale;
    var weekArr = computed(function () {
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
    var showThead = computed(function () {
      return props.mode === "date" || props.mode === "week";
    });
    var weekRowClass = function weekRowClass(value, targetValue) {
      if (props.mode !== "week" || !value) return {};
      if (isArray(value)) {
        var _startObj$locale, _startObj$locale$week, _endObj$locale, _endObj$locale$week;
        if (!value.length) return {};
        var _value$map = value.map(function (v) {
            return v && parseToDayjs(v, props.format);
          }),
          _value$map2 = _slicedToArray(_value$map, 2),
          startObj = _value$map2[0],
          endObj = _value$map2[1];
        var startYear = startObj && startObj.year();
        var startWeek = startObj === null || startObj === void 0 || (_startObj$locale = startObj.locale) === null || _startObj$locale === void 0 || (_startObj$locale = _startObj$locale.call(startObj, dayjsLocale)) === null || _startObj$locale === void 0 || (_startObj$locale$week = _startObj$locale.week) === null || _startObj$locale$week === void 0 ? void 0 : _startObj$locale$week.call(_startObj$locale);
        var endYear = endObj && endObj.year();
        var endWeek = endObj === null || endObj === void 0 || (_endObj$locale = endObj.locale) === null || _endObj$locale === void 0 || (_endObj$locale = _endObj$locale.call(endObj, dayjsLocale)) === null || _endObj$locale === void 0 || (_endObj$locale$week = _endObj$locale.week) === null || _endObj$locale$week === void 0 ? void 0 : _endObj$locale$week.call(_endObj$locale);
        var targetObj = parseToDayjs(targetValue, props.format);
        var targetYear = targetObj.year();
        var targetWeek = targetObj.week();
        var isActive = targetYear === startYear && targetWeek === startWeek || targetYear === endYear && targetWeek === endWeek;
        var isRange = targetYear >= startYear && targetYear <= endYear && targetWeek > startWeek && targetWeek < endWeek;
        return _defineProperty(_defineProperty({}, "".concat(COMPONENT_NAME.value, "-").concat(props.mode, "-row--active"), isActive), "".concat(COMPONENT_NAME.value, "-").concat(props.mode, "-row--range"), isRange);
      }
      var valueDayjs = parseToDayjs(value, props.format).locale(dayjsLocale);
      var targetDayjs = parseToDayjs(targetValue, props.format).locale(dayjsLocale);
      return _defineProperty({}, "".concat(COMPONENT_NAME.value, "-").concat(props.mode, "-row--active"), valueDayjs.year() === targetDayjs.year() && valueDayjs.week() === targetDayjs.week());
    };
    var multipleWeekRowClass = function multipleWeekRowClass(value, targetValue) {
      var _value$map3;
      var targetDayjs = parseToDayjs(targetValue, props.format);
      if (props.mode !== "week" || Array.isArray(value) && !value.length) return {};
      var isSomeYearWeek = (_value$map3 = value.map) === null || _value$map3 === void 0 ? void 0 : _value$map3.call(value, function (v) {
        return parseToDayjs(v, props.format);
      }).some(function (item) {
        return item.week() === targetDayjs.week() && item.year() === targetDayjs.year();
      });
      return _defineProperty({}, "".concat(COMPONENT_NAME.value, "-").concat(props.mode, "-row--active"), isSomeYearWeek);
    };
    var activeRowCss = props.multiple ? multipleWeekRowClass : weekRowClass;
    return function () {
      return createVNode("div", {
        "class": COMPONENT_NAME.value,
        "onMouseleave": function onMouseleave(e) {
          var _props$onCellMouseLea;
          return (_props$onCellMouseLea = props.onCellMouseLeave) === null || _props$onCellMouseLea === void 0 ? void 0 : _props$onCellMouseLea.call(props, {
            e: e
          });
        }
      }, [createVNode("table", null, [showThead.value && createVNode("thead", null, [createVNode("tr", {
        "class": "".concat(COMPONENT_NAME.value, "-header-row")
      }, [weekArr.value.map(function (value, i) {
        return createVNode("th", {
          "class": "".concat(COMPONENT_NAME.value, "-header-cell"),
          "key": i
        }, [value]);
      })])]), createVNode("tbody", null, [props.data.map(function (row, i) {
        return createVNode("tr", {
          "key": i,
          "class": _objectSpread(_defineProperty({}, "".concat(COMPONENT_NAME.value, "-").concat(props.mode, "-row"), true), activeRowCss(props.value, row[0].value))
        }, [row.map(function (col, j) {
          return createVNode(TDatePickerCell, mergeProps(col, {
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

export { TDateTable as default };
//# sourceMappingURL=Table.js.map
