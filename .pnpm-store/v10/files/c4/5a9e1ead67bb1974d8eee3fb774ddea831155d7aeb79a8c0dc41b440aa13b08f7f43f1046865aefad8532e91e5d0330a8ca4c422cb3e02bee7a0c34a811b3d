/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../../../_chunks/dep-953a77eb.js');
var index = require('../../../_chunks/dep-ecaaae91.js');
require('@babel/runtime/helpers/slicedToArray');
require('../../../_chunks/dep-cc66acf1.js');
var utils = require('../../../_chunks/dep-8f212fc6.js');
var dayjs = require('dayjs');
require('../../../_chunks/dep-8abdfb41.js');
require('../../../config-provider/hooks/useConfig.js');
require('../../../_chunks/dep-5d7e2375.js');
require('../../../_chunks/dep-94a7dc2d.js');
require('../../../_chunks/dep-92e23f17.js');
require('../../../_chunks/dep-0ff616fe.js');
require('../../../_chunks/dep-5f52cd42.js');
require('../../../_chunks/dep-48f60c78.js');
require('../../../_chunks/dep-b3b464e8.js');
require('../../../_chunks/dep-0813861e.js');
require('../../../_chunks/dep-f57bcb19.js');
require('../../../_chunks/dep-dc4bbc14.js');
require('../../../_chunks/dep-05f89f0d.js');
require('../../../_chunks/dep-87589faa.js');
require('../../../_chunks/dep-e27ea667.js');
require('../../../_chunks/dep-165ca38a.js');
require('../../../_chunks/dep-32412d92.js');
require('../../../_chunks/dep-a8a3d718.js');
require('../../../_chunks/dep-54e566d9.js');
require('../../../_chunks/dep-591a72de.js');
require('../../../_chunks/dep-a55e8a08.js');
require('../../../_chunks/dep-8adeee89.js');
require('../../../_chunks/dep-4d2ef282.js');
require('../../../_chunks/dep-929933ce.js');
require('../../../_chunks/dep-6b1f0ef8.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');
require('@babel/runtime/helpers/objectDestructuringEmpty');
require('@babel/runtime/helpers/extends');
require('../../../_chunks/dep-b9b30627.js');
require('../../../_chunks/dep-39403bd1.js');
require('../../../_chunks/dep-e86abdd2.js');
require('../../../_chunks/dep-80a478d7.js');
require('../../../_chunks/dep-d54d4085.js');
require('../../../_chunks/dep-9beee08e.js');
require('../../../_chunks/dep-733b2b51.js');
require('../../../_chunks/dep-72c4cc44.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

var TDatePickerCell = Vue.defineComponent({
  name: "TDatePickerCell",
  props: {
    time: String,
    text: [String, Number],
    value: Date,
    active: Boolean,
    highlight: Boolean,
    disabled: Boolean,
    startOfRange: Boolean,
    endOfRange: Boolean,
    hoverHighlight: Boolean,
    hoverStartOfRange: Boolean,
    hoverEndOfRange: Boolean,
    additional: Boolean,
    now: Boolean,
    firstDayOfMonth: Boolean,
    lastDayOfMonth: Boolean,
    onClick: Function,
    onMouseEnter: Function,
    dayjsObj: dayjs.Dayjs
  },
  setup: function setup(props) {
    var COMPONENT_NAME = index.usePrefixClass("date-picker__cell");
    var cellClass = Vue.computed(function () {
      var _ref;
      return [COMPONENT_NAME.value, (_ref = {}, _defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"](_ref, "".concat(COMPONENT_NAME.value, "--now"), props.now), "".concat(COMPONENT_NAME.value, "--active"), props.active), "".concat(COMPONENT_NAME.value, "--disabled"), props.disabled), "".concat(COMPONENT_NAME.value, "--highlight"), props.highlight), "".concat(COMPONENT_NAME.value, "--hover-highlight"), props.hoverHighlight), "".concat(COMPONENT_NAME.value, "--active-start"), props.startOfRange), "".concat(COMPONENT_NAME.value, "--active-end"), props.endOfRange), "".concat(COMPONENT_NAME.value, "--hover-start"), props.hoverStartOfRange), "".concat(COMPONENT_NAME.value, "--hover-end"), props.hoverEndOfRange), "".concat(COMPONENT_NAME.value, "--additional"), props.additional), _defineProperty__default["default"](_defineProperty__default["default"](_ref, "".concat(COMPONENT_NAME.value, "--first-day-of-month"), props.firstDayOfMonth), "".concat(COMPONENT_NAME.value, "--last-day-of-month"), props.lastDayOfMonth))];
    });
    function handleClick(e) {
      var _props$onClick;
      if (props.disabled) return;
      if (props.time) {
        var _extractTimeObj = utils.extractTimeObj(props.time),
          hours = _extractTimeObj.hours,
          minutes = _extractTimeObj.minutes,
          seconds = _extractTimeObj.seconds,
          milliseconds = _extractTimeObj.milliseconds,
          meridiem = _extractTimeObj.meridiem;
        var nextHours = hours;
        if (/am/i.test(meridiem) && nextHours === 12) nextHours -= 12;
        if (/pm/i.test(meridiem) && nextHours < 12) nextHours += 12;
        props.value.setHours(nextHours);
        props.value.setMinutes(minutes);
        props.value.setSeconds(seconds);
        props.value.setMilliseconds(milliseconds);
      }
      (_props$onClick = props.onClick) === null || _props$onClick === void 0 || _props$onClick.call(props, props.value, {
        e: e
      });
    }
    function handleMouseEnter() {
      var _props$onMouseEnter;
      if (props.disabled) return;
      if (props.time) {
        var _extractTimeObj2 = utils.extractTimeObj(props.time),
          hours = _extractTimeObj2.hours,
          minutes = _extractTimeObj2.minutes,
          seconds = _extractTimeObj2.seconds,
          milliseconds = _extractTimeObj2.milliseconds,
          meridiem = _extractTimeObj2.meridiem;
        var nextHours = hours;
        if (/am/i.test(meridiem) && nextHours === 12) nextHours -= 12;
        if (/pm/i.test(meridiem) && nextHours < 12) nextHours += 12;
        props.value.setHours(nextHours);
        props.value.setMinutes(minutes);
        props.value.setSeconds(seconds);
        props.value.setMilliseconds(milliseconds);
      }
      (_props$onMouseEnter = props.onMouseEnter) === null || _props$onMouseEnter === void 0 || _props$onMouseEnter.call(props, props.value);
    }
    return function () {
      return Vue.createVNode("td", {
        "class": cellClass.value,
        "onClick": handleClick,
        "onMouseenter": handleMouseEnter
      }, [Vue.createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "-inner")
      }, [props.text])]);
    };
  }
});

exports["default"] = TDatePickerCell;
//# sourceMappingURL=Cell.js.map
