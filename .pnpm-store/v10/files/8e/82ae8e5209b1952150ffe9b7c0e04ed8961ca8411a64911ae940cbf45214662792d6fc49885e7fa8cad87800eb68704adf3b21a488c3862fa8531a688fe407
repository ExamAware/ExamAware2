/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, computed, createVNode } from 'vue';
import { _ as _defineProperty } from '../_chunks/dep-1dacc319.mjs';
import { d as dayjs } from '../_chunks/dep-ad588525.mjs';
import { isFunction } from 'lodash-es';
import { useSingleValue } from './hooks/useSingleValue.mjs';
import { g as getDefaultFormat, f as formatDate, p as parseToDayjs } from '../_chunks/dep-c0b36067.mjs';
import { s as subtractMonth, a as addMonth, e as extractTimeObj } from '../_chunks/dep-2fe12221.mjs';
import datePickerPanelProps from './date-picker-panel-props.mjs';
import datePickerProps from './props.mjs';
import TSinglePanel from './components/panel/SinglePanel.mjs';
import '../_chunks/dep-257428bc.mjs';
import '../_chunks/dep-fe644854.mjs';
import '../_chunks/dep-9003fde5.mjs';
import '../_chunks/dep-9f459d8b.mjs';
import '../_chunks/dep-7673347f.mjs';
import '../_chunks/dep-00b4e06a.mjs';
import '../_chunks/dep-51a43106.mjs';
import '../config-provider/hooks/useConfig.mjs';
import '../config-provider/utils/context.mjs';
import '../_chunks/dep-a4c09318.mjs';
import '../_chunks/dep-ffb85102.mjs';
import '../_chunks/dep-22ebd6af.mjs';
import '../_chunks/dep-cdd448ec.mjs';
import '../_chunks/dep-97ecacde.mjs';
import '../_chunks/dep-84fd47b3.mjs';
import '../_chunks/dep-d36c4a3f.mjs';
import '../_chunks/dep-83649365.mjs';
import '../_chunks/dep-6d2705e1.mjs';
import '../_chunks/dep-63305cb0.mjs';
import './components/panel/PanelContent.mjs';
import './components/base/Header.mjs';
import '../pagination/index.mjs';
import '../pagination/pagination.mjs';
import '../_chunks/dep-0dcc778a.mjs';
import 'tdesign-icons-vue-next';
import '../input-number/index.mjs';
import '../input-number/input-number.mjs';
import '../button/index.mjs';
import '../button/button.mjs';
import '../loading/index.mjs';
import '../loading/directive.mjs';
import '../loading/plugin.mjs';
import '../loading/loading.mjs';
import '../loading/icon/gradient.mjs';
import '../_chunks/dep-0cde7579.mjs';
import '../loading/props.mjs';
import './style/css.mjs';
import '../button/props.mjs';
import '../input/index.mjs';
import '../input/input.mjs';
import '../input/props.mjs';
import '../input/hooks/index.mjs';
import '../input/hooks/useInput.mjs';
import '../form/consts/index.mjs';
import '../input/hooks/useLengthLimit.mjs';
import '../input/hooks/useInputEventHandler.mjs';
import '../input/hooks/useInputWidth.mjs';
import '../input/input-group.mjs';
import '../input/input-group-props.mjs';
import '../input-number/props.mjs';
import '../input-number/hooks/useInputNumber.mjs';
import '../_chunks/dep-29754cb4.mjs';
import '../_chunks/dep-db81c302.mjs';
import '../select/index.mjs';
import '../select/select.mjs';
import '../_chunks/dep-88e5a7b0.mjs';
import '../common-components/fake-arrow.mjs';
import '../select-input/index.mjs';
import '../select-input/select-input.mjs';
import '../popup/index.mjs';
import '../popup/popup.mjs';
import '@popperjs/core';
import '../popup/container.mjs';
import '../popup/props.mjs';
import '../select-input/props.mjs';
import '../select-input/hooks/index.mjs';
import '../select-input/hooks/useMultiple.mjs';
import '../tag-input/index.mjs';
import '../tag-input/tag-input.mjs';
import '../tag-input/props.mjs';
import '../tag-input/hooks/index.mjs';
import '../tag-input/hooks/useDragSorter.mjs';
import '../tag-input/hooks/useHover.mjs';
import '../tag-input/hooks/useTagScroll.mjs';
import '../tag-input/hooks/useTagList.mjs';
import '../tag/index.mjs';
import '../tag/tag.mjs';
import '../_chunks/dep-b31d8258.mjs';
import '../tag/props.mjs';
import '../tag/check-tag.mjs';
import '../tag/check-tag-props.mjs';
import '../tag/check-tag-group.mjs';
import '../tag/check-tag-group-props.mjs';
import '../select-input/hooks/useOverlayInnerStyle.mjs';
import '../select-input/hooks/useSingle.mjs';
import '../select/components/select-panel.mjs';
import '../select/option.mjs';
import '../select/option-props.mjs';
import '../checkbox/index.mjs';
import '../checkbox/checkbox.mjs';
import '../checkbox/props.mjs';
import '../checkbox/consts/index.mjs';
import '../checkbox/hooks/useCheckboxLazyLoad.mjs';
import '../checkbox/hooks/useKeyboardEvent.mjs';
import '../checkbox/group.mjs';
import '../checkbox/checkbox-group-props.mjs';
import '../select/utils/index.mjs';
import '../select/consts/index.mjs';
import '../select/option-group.mjs';
import '../select/option-group-props.mjs';
import '../select/props.mjs';
import '../select/hooks/index.mjs';
import '../select/hooks/useKeyboardControl.mjs';
import '../select/hooks/usePanelVirtualScroll.mjs';
import '../select/hooks/useSelectOptions.mjs';
import '../input-adornment/index.mjs';
import '../input-adornment/input-adornment.mjs';
import '../input-adornment/props.mjs';
import '../pagination/props.mjs';
import '../pagination/hooks/index.mjs';
import '../pagination/hooks/useMoreAction.mjs';
import '../pagination/hooks/usePaginationClasses.mjs';
import '../pagination/pagination-mini.mjs';
import '../pagination/pagination-mini-props.mjs';
import '../tooltip/index.mjs';
import '../tooltip/tooltip.mjs';
import '../tooltip/props.mjs';
import '../tooltip/utils/index.mjs';
import './components/base/Table.mjs';
import './components/base/Cell.mjs';
import '../time-picker/index.mjs';
import '../time-picker/time-picker.mjs';
import '../time-picker/panel/time-picker-panel.mjs';
import '../_chunks/dep-b1bc7bcc.mjs';
import '../time-picker/props.mjs';
import '../_chunks/dep-928b1423.mjs';
import '../time-picker/time-range-picker.mjs';
import '../range-input/index.mjs';
import '../range-input/range-input.mjs';
import '../range-input/props.mjs';
import '../range-input/range-input-popup.mjs';
import '../range-input/range-input-popup-props.mjs';
import '../time-picker/time-range-picker-props.mjs';
import './utils/index.mjs';
import './components/panel/ExtraContent.mjs';
import './components/base/Footer.mjs';
import './hooks/index.mjs';
import './hooks/useDisableDate.mjs';
import './hooks/useRange.mjs';
import './hooks/useRangeValue.mjs';
import './hooks/useSingle.mjs';
import './hooks/useTableData.mjs';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var _DatePickerPanel = defineComponent({
  name: "TDatePickerPanel",
  props: _objectSpread({
    value: datePickerProps.value,
    defaultValue: datePickerProps.defaultValue,
    modelValue: datePickerProps.modelValue,
    disabled: datePickerProps.disabled,
    disableDate: datePickerProps.disableDate,
    enableTimePicker: datePickerProps.enableTimePicker,
    firstDayOfWeek: datePickerProps.firstDayOfWeek,
    format: datePickerProps.format,
    mode: datePickerProps.mode,
    presets: datePickerProps.presets,
    presetsPlacement: datePickerProps.presetsPlacement,
    timePickerProps: datePickerProps.timePickerProps
  }, datePickerPanelProps),
  setup: function setup(props) {
    var _useSingleValue = useSingleValue(props),
      cacheValue = _useSingleValue.cacheValue,
      value = _useSingleValue.value,
      year = _useSingleValue.year,
      month = _useSingleValue.month,
      time = _useSingleValue.time,
      onChange = _useSingleValue.onChange;
    var formatRef = computed(function () {
      return getDefaultFormat({
        mode: props.mode,
        format: props.format,
        enableTimePicker: props.enableTimePicker
      });
    });
    function onCellClick(date, _ref) {
      var _props$onCellClick;
      var e = _ref.e;
      (_props$onCellClick = props.onCellClick) === null || _props$onCellClick === void 0 || _props$onCellClick.call(props, {
        date: date,
        e: e
      });
      if (props.mode === "date") {
        year.value = date.getFullYear();
        month.value = date.getMonth();
      }
      if (props.enableTimePicker) {
        cacheValue.value = formatDate(date, {
          format: formatRef.value.format
        });
      } else {
        onChange === null || onChange === void 0 || onChange(formatDate(date, {
          format: formatRef.value.format,
          defaultTime: props.defaultTime
        }), {
          dayjsValue: parseToDayjs(date, formatRef.value.format, void 0, void 0, props.defaultTime),
          trigger: "pick"
        });
      }
    }
    function onJumperClick(_ref2) {
      var trigger = _ref2.trigger;
      var triggerMap = {
        prev: "arrow-previous",
        next: "arrow-next"
      };
      var monthCountMap = {
        date: 1,
        week: 1,
        month: 12,
        quarter: 12,
        year: 120
      };
      var monthCount = monthCountMap[props.mode] || 0;
      var current = new Date(year.value, month.value);
      var next = null;
      if (trigger === "prev") {
        next = subtractMonth(current, monthCount);
      } else if (trigger === "current") {
        next = new Date();
      } else if (trigger === "next") {
        next = addMonth(current, monthCount);
      }
      var nextYear = next.getFullYear();
      var nextMonth = next.getMonth();
      if (year.value !== nextYear) {
        var _props$onYearChange;
        (_props$onYearChange = props.onYearChange) === null || _props$onYearChange === void 0 || _props$onYearChange.call(props, {
          year: nextYear,
          date: dayjs(value.value).toDate(),
          trigger: trigger === "current" ? "today" : "year-".concat(triggerMap[trigger])
        });
      }
      if (month.value !== nextMonth) {
        var _props$onMonthChange;
        (_props$onMonthChange = props.onMonthChange) === null || _props$onMonthChange === void 0 || _props$onMonthChange.call(props, {
          month: nextMonth,
          date: dayjs(value.value).toDate(),
          trigger: trigger === "current" ? "today" : "month-".concat(triggerMap[trigger])
        });
      }
      year.value = nextYear;
      month.value = nextMonth;
    }
    function onTimePickerChange(val) {
      var _props$onTimeChange;
      time.value = val;
      var _extractTimeObj = extractTimeObj(val),
        hours = _extractTimeObj.hours,
        minutes = _extractTimeObj.minutes,
        seconds = _extractTimeObj.seconds,
        milliseconds = _extractTimeObj.milliseconds,
        meridiem = _extractTimeObj.meridiem;
      var nextHours = hours;
      if (/am/i.test(meridiem) && nextHours === 12) nextHours -= 12;
      if (/pm/i.test(meridiem) && nextHours < 12) nextHours += 12;
      var currentDate = !dayjs(cacheValue.value, formatRef.value.format).isValid() ? dayjs() : dayjs(cacheValue.value, formatRef.value.format);
      var nextDate = currentDate.hour(nextHours).minute(minutes).second(seconds).millisecond(milliseconds).toDate();
      cacheValue.value = formatDate(nextDate, {
        format: formatRef.value.format
      });
      (_props$onTimeChange = props.onTimeChange) === null || _props$onTimeChange === void 0 || _props$onTimeChange.call(props, {
        time: val,
        date: dayjs(value.value).toDate(),
        trigger: "time-hour"
      });
    }
    function onConfirmClick(_ref3) {
      var _props$onConfirm;
      var e = _ref3.e;
      onChange === null || onChange === void 0 || onChange(formatDate(cacheValue.value, {
        format: formatRef.value.format,
        defaultTime: props.defaultTime
      }), {
        dayjsValue: parseToDayjs(cacheValue.value, formatRef.value.format, void 0, void 0, props.defaultTime),
        trigger: "confirm"
      });
      (_props$onConfirm = props.onConfirm) === null || _props$onConfirm === void 0 || _props$onConfirm.call(props, {
        date: dayjs(cacheValue.value).toDate(),
        e: e
      });
    }
    function onPresetClick(preset, context) {
      var _props$onPresetClick;
      var presetVal = isFunction(preset) ? preset() : preset;
      onChange === null || onChange === void 0 || onChange(formatDate(presetVal, {
        format: formatRef.value.format,
        defaultTime: props.defaultTime
      }), {
        dayjsValue: parseToDayjs(presetVal, formatRef.value.format, void 0, void 0, props.defaultTime),
        trigger: "preset"
      });
      (_props$onPresetClick = props.onPresetClick) === null || _props$onPresetClick === void 0 || _props$onPresetClick.call(props, context);
    }
    function onYearChange(nextYear) {
      var _props$onYearChange2;
      year.value = nextYear;
      (_props$onYearChange2 = props.onYearChange) === null || _props$onYearChange2 === void 0 || _props$onYearChange2.call(props, {
        year: year.value,
        date: dayjs(value.value).toDate(),
        trigger: "year-select"
      });
    }
    function onMonthChange(nextMonth) {
      var _props$onMonthChange2;
      month.value = nextMonth;
      (_props$onMonthChange2 = props.onMonthChange) === null || _props$onMonthChange2 === void 0 || _props$onMonthChange2.call(props, {
        month: month.value,
        date: dayjs(value.value).toDate(),
        trigger: "month-select"
      });
    }
    var panelProps = computed(function () {
      return {
        value: cacheValue.value,
        year: year.value,
        month: month.value,
        mode: props.mode,
        format: formatRef.value.format,
        presets: props.presets,
        time: time.value,
        disableDate: props.disableDate,
        firstDayOfWeek: props.firstDayOfWeek,
        timePickerProps: props.timePickerProps,
        enableTimePicker: props.enableTimePicker,
        presetsPlacement: props.presetsPlacement,
        popupVisible: true,
        panelClick: props.onPanelClick,
        onCellClick: onCellClick,
        onJumperClick: onJumperClick,
        onConfirmClick: onConfirmClick,
        onPresetClick: onPresetClick,
        onYearChange: onYearChange,
        onMonthChange: onMonthChange,
        onTimePickerChange: onTimePickerChange
      };
    });
    return function () {
      return createVNode(TSinglePanel, panelProps.value, null);
    };
  }
});

export { _DatePickerPanel as default };
//# sourceMappingURL=DatePickerPanel.mjs.map
