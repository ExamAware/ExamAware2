/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, computed, createVNode } from 'vue';
import { _ as _defineProperty } from '../../../_chunks/dep-1dacc319.mjs';
import { u as usePrefixClass } from '../../../_chunks/dep-7673347f.mjs';
import { e as extractTimeObj } from '../../../_chunks/dep-2fe12221.mjs';
import { a as dayjs_minExports } from '../../../_chunks/dep-ad588525.mjs';
import '../../../_chunks/dep-257428bc.mjs';
import 'lodash-es';
import '../../../_chunks/dep-00b4e06a.mjs';
import '../../../_chunks/dep-9f459d8b.mjs';
import '../../../_chunks/dep-51a43106.mjs';
import '../../../_chunks/dep-fe644854.mjs';
import '../../../config-provider/hooks/useConfig.mjs';
import '../../../config-provider/utils/context.mjs';
import '../../../_chunks/dep-a4c09318.mjs';
import '../../../_chunks/dep-ffb85102.mjs';
import '../../../_chunks/dep-9003fde5.mjs';
import '../../../_chunks/dep-22ebd6af.mjs';
import '../../../_chunks/dep-cdd448ec.mjs';
import '../../../_chunks/dep-97ecacde.mjs';
import '../../../_chunks/dep-84fd47b3.mjs';
import '../../../_chunks/dep-d36c4a3f.mjs';
import '../../../_chunks/dep-63305cb0.mjs';
import '../../../_chunks/dep-83649365.mjs';
import '../../../_chunks/dep-c0b36067.mjs';
import '../../../_chunks/dep-6d2705e1.mjs';

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
    dayjsObj: dayjs_minExports.Dayjs
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
//# sourceMappingURL=Cell.mjs.map
