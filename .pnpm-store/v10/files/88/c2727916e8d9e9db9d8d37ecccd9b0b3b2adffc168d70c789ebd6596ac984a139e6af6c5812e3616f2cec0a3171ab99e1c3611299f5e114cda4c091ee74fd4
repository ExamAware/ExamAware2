/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, computed, createVNode } from 'vue';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../../../_chunks/dep-fe23be6e.js';
import { u as usePrefixClass } from '../../../_chunks/dep-9e6d8a78.js';
import '@babel/runtime/helpers/slicedToArray';
import '../../../_chunks/dep-880d05b9.js';
import { e as extractTimeObj } from '../../../_chunks/dep-67991c5a.js';
import { Dayjs } from 'dayjs';
import '../../../_chunks/dep-81b01cae.js';
import '../../../config-provider/hooks/useConfig.js';
import '../../../config-provider/utils/context.js';
import '../../../_chunks/dep-938cd955.js';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '@babel/runtime/helpers/objectDestructuringEmpty';
import '@babel/runtime/helpers/extends';
import '../../../_chunks/dep-bf4a6186.js';
import '../../../_chunks/dep-bcf15bc2.js';
import '../../../_chunks/dep-4cdcccb6.js';
import '../../../_chunks/dep-8295e674.js';

var TDatePickerCell = defineComponent({
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
    dayjsObj: Dayjs
  },
  setup: function setup(props) {
    var COMPONENT_NAME = usePrefixClass("date-picker__cell");
    var cellClass = computed(function () {
      var _ref;
      return [COMPONENT_NAME.value, (_ref = {}, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_ref, "".concat(COMPONENT_NAME.value, "--now"), props.now), "".concat(COMPONENT_NAME.value, "--active"), props.active), "".concat(COMPONENT_NAME.value, "--disabled"), props.disabled), "".concat(COMPONENT_NAME.value, "--highlight"), props.highlight), "".concat(COMPONENT_NAME.value, "--hover-highlight"), props.hoverHighlight), "".concat(COMPONENT_NAME.value, "--active-start"), props.startOfRange), "".concat(COMPONENT_NAME.value, "--active-end"), props.endOfRange), "".concat(COMPONENT_NAME.value, "--hover-start"), props.hoverStartOfRange), "".concat(COMPONENT_NAME.value, "--hover-end"), props.hoverEndOfRange), "".concat(COMPONENT_NAME.value, "--additional"), props.additional), _defineProperty(_defineProperty(_ref, "".concat(COMPONENT_NAME.value, "--first-day-of-month"), props.firstDayOfMonth), "".concat(COMPONENT_NAME.value, "--last-day-of-month"), props.lastDayOfMonth))];
    });
    function handleClick(e) {
      var _props$onClick;
      if (props.disabled) return;
      if (props.time) {
        var _extractTimeObj = extractTimeObj(props.time),
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
        var _extractTimeObj2 = extractTimeObj(props.time),
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
      return createVNode("td", {
        "class": cellClass.value,
        "onClick": handleClick,
        "onMouseenter": handleMouseEnter
      }, [createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "-inner")
      }, [props.text])]);
    };
  }
});

export { TDatePickerCell as default };
//# sourceMappingURL=Cell.js.map
