/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, computed, ref, onMounted, createVNode } from 'vue';
import { _ as _toConsumableArray } from '../_chunks/dep-00b4e06a.mjs';
import { _ as _defineProperty } from '../_chunks/dep-1dacc319.mjs';
import { d as dayjs } from '../_chunks/dep-ad588525.mjs';
import { isFunction, isArray } from 'lodash-es';
import dateRangePickerPanelProps from './date-range-picker-panel-props.mjs';
import dateRangePickerProps from './date-range-picker-props.mjs';
import TRangePanel from './components/panel/RangePanel.mjs';
import { useRangeValue } from './hooks/useRangeValue.mjs';
import { g as getDefaultFormat, p as parseToDayjs, f as formatDate } from '../_chunks/dep-c0b36067.mjs';
import { s as subtractMonth, a as addMonth, e as extractTimeObj } from '../_chunks/dep-2fe12221.mjs';
import { dateCorrection } from './utils/index.mjs';
import '../_chunks/dep-9f459d8b.mjs';
import '../_chunks/dep-257428bc.mjs';
import '../_chunks/dep-fe644854.mjs';
import '../_chunks/dep-7673347f.mjs';
import '../_chunks/dep-51a43106.mjs';
import '../config-provider/hooks/useConfig.mjs';
import '../config-provider/utils/context.mjs';
import '../_chunks/dep-a4c09318.mjs';
import '../_chunks/dep-ffb85102.mjs';
import '../_chunks/dep-9003fde5.mjs';
import '../_chunks/dep-22ebd6af.mjs';
import '../_chunks/dep-cdd448ec.mjs';
import '../_chunks/dep-97ecacde.mjs';
import '../_chunks/dep-84fd47b3.mjs';
import '../_chunks/dep-d36c4a3f.mjs';
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
import '../_chunks/dep-6d2705e1.mjs';
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
import '../_chunks/dep-83649365.mjs';
import '../time-picker/panel/time-picker-panel.mjs';
import '../_chunks/dep-b1bc7bcc.mjs';
import '../time-picker/props.mjs';
import '../_chunks/dep-928b1423.mjs';
import '../_chunks/dep-63305cb0.mjs';
import '../time-picker/time-range-picker.mjs';
import '../range-input/index.mjs';
import '../range-input/range-input.mjs';
import '../range-input/props.mjs';
import '../range-input/range-input-popup.mjs';
import '../range-input/range-input-popup-props.mjs';
import '../time-picker/time-range-picker-props.mjs';
import './components/panel/ExtraContent.mjs';
import './components/base/Footer.mjs';
import './hooks/index.mjs';
import './hooks/useDisableDate.mjs';
import './hooks/useRange.mjs';
import './hooks/useSingle.mjs';
import './hooks/useSingleValue.mjs';
import './hooks/useTableData.mjs';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var _DateRangePickerPanel = defineComponent({
  name: "TDateRangePickerPanel",
  props: _objectSpread({
    value: dateRangePickerProps.value,
    defaultValue: dateRangePickerProps.defaultValue,
    modelValue: dateRangePickerProps.modelValue,
    disabled: dateRangePickerProps.disabled,
    disableDate: dateRangePickerProps.disableDate,
    enableTimePicker: dateRangePickerProps.enableTimePicker,
    firstDayOfWeek: dateRangePickerProps.firstDayOfWeek,
    format: dateRangePickerProps.format,
    mode: dateRangePickerProps.mode,
    presets: dateRangePickerProps.presets,
    presetsPlacement: dateRangePickerProps.presetsPlacement,
    timePickerProps: dateRangePickerProps.timePickerProps,
    panelPreselection: dateRangePickerProps.panelPreselection
  }, dateRangePickerPanelProps),
  setup: function setup(props) {
    var _useRangeValue = useRangeValue(props),
      value = _useRangeValue.value,
      year = _useRangeValue.year,
      month = _useRangeValue.month,
      time = _useRangeValue.time,
      cacheValue = _useRangeValue.cacheValue,
      isFirstValueSelected = _useRangeValue.isFirstValueSelected,
      onChange = _useRangeValue.onChange;
    var formatRef = computed(function () {
      return getDefaultFormat({
        mode: props.mode,
        enableTimePicker: props.enableTimePicker,
        format: props.format
      });
    });
    var isSelected = ref(false);
    var isHoverCell = ref(false);
    var hoverValue = ref([]);
    var activeIndex = computed(function () {
      return isFirstValueSelected.value ? 1 : 0;
    });
    onMounted(function () {
      if (value.value.length === 2 && !props.enableTimePicker) {
        var nextMonth = value.value.map(function (v) {
          return parseToDayjs(v, formatRef.value.format).month();
        });
        year.value = value.value.map(function (v) {
          return parseToDayjs(v, formatRef.value.valueType).year();
        });
        if (year.value[0] === year.value[1] && nextMonth[0] === nextMonth[1]) {
          nextMonth[0] === 11 ? nextMonth[0] -= 1 : nextMonth[1] += 1;
        }
        month.value = nextMonth;
        if (["month", "quarter"].includes(props.mode) && year.value[0] === year.value[1]) {
          year.value = [year.value[0], year.value[0] + 1];
        }
      }
    });
    function onCellMouseEnter(date) {
      isHoverCell.value = true;
      var nextValue = _toConsumableArray(hoverValue.value);
      nextValue[activeIndex.value] = formatDate(date, {
        format: formatRef.value.format
      });
      hoverValue.value = nextValue;
    }
    function onCellMouseLeave() {
      isHoverCell.value = false;
      hoverValue.value = cacheValue.value;
    }
    function onCellClick(date, _ref) {
      var _props$onCellClick;
      var e = _ref.e;
      isHoverCell.value = false;
      isSelected.value = true;
      var nextValue = _toConsumableArray(cacheValue.value);
      nextValue[activeIndex.value] = formatDate(date, {
        format: formatRef.value.format
      });
      cacheValue.value = nextValue;
      (_props$onCellClick = props.onCellClick) === null || _props$onCellClick === void 0 || _props$onCellClick.call(props, {
        e: e,
        partial: activeIndex.value ? "end" : "start",
        date: nextValue.map(function (v) {
          return dayjs(v).toDate();
        })
      });
      if (props.enableTimePicker) return;
      if (nextValue.length === 2 && isFirstValueSelected.value) {
        onChange === null || onChange === void 0 || onChange(formatDate(nextValue, {
          format: formatRef.value.format,
          autoSwap: true,
          defaultTime: props.defaultTime
        }), {
          dayjsValue: nextValue.map(function (v, i) {
            var _props$defaultTime;
            return parseToDayjs(v, formatRef.value.format, void 0, void 0, (_props$defaultTime = props.defaultTime) === null || _props$defaultTime === void 0 ? void 0 : _props$defaultTime[i]);
          }),
          trigger: "pick"
        });
        isFirstValueSelected.value = false;
      } else {
        isFirstValueSelected.value = true;
      }
    }
    function onJumperClick(_ref2) {
      var trigger = _ref2.trigger,
        partial = _ref2.partial;
      var partialIndex = partial === "start" ? 0 : 1;
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
      var current = new Date(year.value[partialIndex], month.value[partialIndex]);
      var next = null;
      if (trigger === "prev") {
        next = subtractMonth(current, monthCount);
      } else if (trigger === "current") {
        next = new Date();
      } else if (trigger === "next") {
        next = addMonth(current, monthCount);
      }
      var nextYear = _toConsumableArray(year.value);
      nextYear[partialIndex] = next.getFullYear();
      var nextMonth = _toConsumableArray(month.value);
      nextMonth[partialIndex] = next.getMonth();
      var onlyYearSelect = ["year", "quarter", "month"].includes(props.mode);
      var correctedDate = dateCorrection(partialIndex, nextYear, nextMonth, onlyYearSelect);
      nextYear = correctedDate.nextYear;
      nextMonth = correctedDate.nextMonth;
      if (year.value.some(function (y) {
        return !nextYear.includes(y);
      })) {
        var _props$onYearChange;
        (_props$onYearChange = props.onYearChange) === null || _props$onYearChange === void 0 || _props$onYearChange.call(props, {
          partial: partial,
          year: nextYear[partialIndex],
          date: value.value.map(function (v) {
            return dayjs(v).toDate();
          }),
          trigger: trigger === "current" ? "today" : "year-".concat(triggerMap[trigger])
        });
      }
      if (month.value.some(function (m) {
        return !nextMonth.includes(m);
      })) {
        var _props$onMonthChange;
        (_props$onMonthChange = props.onMonthChange) === null || _props$onMonthChange === void 0 || _props$onMonthChange.call(props, {
          partial: partial,
          month: nextMonth[partialIndex],
          date: value.value.map(function (v) {
            return dayjs(v).toDate();
          }),
          trigger: trigger === "current" ? "today" : "month-".concat(triggerMap[trigger])
        });
      }
      year.value = nextYear;
      month.value = nextMonth;
    }
    function onTimePickerChange(val) {
      var _props$onTimeChange;
      var _extractTimeObj = extractTimeObj(val),
        hours = _extractTimeObj.hours,
        minutes = _extractTimeObj.minutes,
        seconds = _extractTimeObj.seconds,
        milliseconds = _extractTimeObj.milliseconds,
        meridiem = _extractTimeObj.meridiem;
      var nextInputValue = _toConsumableArray(cacheValue.value);
      var changedInputValue = cacheValue.value[activeIndex.value];
      var currentDate = !dayjs(changedInputValue, formatRef.value.format).isValid() ? dayjs().year(year.value[activeIndex.value]).month(month.value[activeIndex.value]) : dayjs(changedInputValue, formatRef.value.format);
      var nextHours = hours;
      if (/am/i.test(meridiem) && nextHours === 12) nextHours -= 12;
      if (/pm/i.test(meridiem) && nextHours < 12) nextHours += 12;
      var nextDate = currentDate.hour(nextHours).minute(minutes).second(seconds).millisecond(milliseconds).toDate();
      nextInputValue[activeIndex.value] = nextDate;
      var nextTime = _toConsumableArray(time.value);
      nextTime[activeIndex.value] = val;
      time.value = nextTime;
      isSelected.value = true;
      cacheValue.value = formatDate(nextInputValue, {
        format: formatRef.value.format
      });
      (_props$onTimeChange = props.onTimeChange) === null || _props$onTimeChange === void 0 || _props$onTimeChange.call(props, {
        time: val,
        date: value.value.map(function (v) {
          return parseToDayjs(v, formatRef.value.format).toDate();
        }),
        partial: activeIndex.value ? "end" : "start",
        trigger: "time-hour"
      });
    }
    function onConfirmClick(_ref3) {
      var _props$onConfirm;
      var e = _ref3.e;
      var nextValue = _toConsumableArray(cacheValue.value);
      if (nextValue.length === 2 && isFirstValueSelected.value) {
        onChange === null || onChange === void 0 || onChange(formatDate(nextValue, {
          format: formatRef.value.format,
          autoSwap: true,
          defaultTime: props.defaultTime
        }), {
          dayjsValue: nextValue.map(function (v, i) {
            var _props$defaultTime2;
            return parseToDayjs(v, formatRef.value.format, void 0, void 0, (_props$defaultTime2 = props.defaultTime) === null || _props$defaultTime2 === void 0 ? void 0 : _props$defaultTime2[i]);
          }),
          trigger: "confirm"
        });
        year.value = nextValue.map(function (v) {
          return dayjs(v, formatRef.value.format).year();
        });
        month.value = nextValue.map(function (v) {
          return dayjs(v, formatRef.value.format).month();
        });
        isFirstValueSelected.value = false;
      } else {
        isFirstValueSelected.value = true;
      }
      (_props$onConfirm = props.onConfirm) === null || _props$onConfirm === void 0 || _props$onConfirm.call(props, {
        date: value.value.map(function (v) {
          return dayjs(v).toDate();
        }),
        e: e
      });
    }
    function onPresetClick(preset, context) {
      var presetValue = preset;
      if (isFunction(preset)) {
        presetValue = preset();
      }
      if (!isArray(presetValue)) {
        console.error("preset: ".concat(preset, " \u9884\u8BBE\u503C\u5FC5\u987B\u662F\u6570\u7EC4!"));
      } else {
        var _props$onPresetClick;
        onChange === null || onChange === void 0 || onChange(formatDate(presetValue, {
          format: formatRef.value.format,
          autoSwap: true,
          defaultTime: props.defaultTime
        }), {
          dayjsValue: presetValue.map(function (p, i) {
            var _props$defaultTime3;
            return parseToDayjs(p, formatRef.value.format, void 0, void 0, (_props$defaultTime3 = props.defaultTime) === null || _props$defaultTime3 === void 0 ? void 0 : _props$defaultTime3[i]);
          }),
          trigger: "preset"
        });
        (_props$onPresetClick = props.onPresetClick) === null || _props$onPresetClick === void 0 || _props$onPresetClick.call(props, context);
      }
    }
    function onYearChange(nextVal, _ref4) {
      var _props$onYearChange2;
      var partial = _ref4.partial;
      var partialIndex = partial === "start" ? 0 : 1;
      if (props.enableTimePicker) partialIndex = activeIndex.value;
      var nextYear = _toConsumableArray(year.value);
      nextYear[partialIndex] = nextVal;
      var nextMonth = _toConsumableArray(month.value);
      var onlyYearSelect = ["year", "quarter", "month"].includes(props.mode);
      var correctedDate = dateCorrection(partialIndex, nextYear, nextMonth, onlyYearSelect);
      nextYear = correctedDate.nextYear;
      nextMonth = correctedDate.nextMonth;
      year.value = nextYear;
      if (!onlyYearSelect) month.value = nextMonth;
      (_props$onYearChange2 = props.onYearChange) === null || _props$onYearChange2 === void 0 || _props$onYearChange2.call(props, {
        partial: partial,
        year: nextYear[partialIndex],
        date: value.value.map(function (v) {
          return dayjs(v).toDate();
        }),
        trigger: "year-select"
      });
    }
    function onMonthChange(nextVal, _ref5) {
      var _props$onMonthChange2;
      var partial = _ref5.partial;
      var partialIndex = partial === "start" ? 0 : 1;
      if (props.enableTimePicker) partialIndex = activeIndex.value;
      var nextMonth = _toConsumableArray(month.value);
      nextMonth[partialIndex] = nextVal;
      if (year.value[0] === year.value[1]) {
        if (partialIndex === 0) {
          if (nextMonth[1] <= nextMonth[0]) {
            nextMonth[1] = nextMonth[0] + 1;
            if (nextMonth[1] === 12) {
              var _year$value, _year$value2;
              nextMonth[1] = 0;
              year.value = [(_year$value = year.value) === null || _year$value === void 0 ? void 0 : _year$value[0], ((_year$value2 = year.value) === null || _year$value2 === void 0 ? void 0 : _year$value2[1]) + 1];
            }
          }
        }
        if (partialIndex === 1) {
          nextMonth[0] = Math.min(nextMonth[0], nextMonth[1]);
          if (nextMonth[0] >= nextMonth[1]) {
            nextMonth[0] -= 1;
            if (nextMonth[0] === -1) {
              var _year$value3, _year$value4;
              nextMonth[0] = 11;
              year.value = [((_year$value3 = year.value) === null || _year$value3 === void 0 ? void 0 : _year$value3[0]) - 1, (_year$value4 = year.value) === null || _year$value4 === void 0 ? void 0 : _year$value4[1]];
            }
          }
        }
      }
      month.value = nextMonth;
      (_props$onMonthChange2 = props.onMonthChange) === null || _props$onMonthChange2 === void 0 || _props$onMonthChange2.call(props, {
        partial: partial,
        month: nextMonth[partialIndex],
        date: value.value.map(function (v) {
          return dayjs(v).toDate();
        }),
        trigger: "month-select"
      });
    }
    var panelProps = computed(function () {
      return {
        hoverValue: isHoverCell.value ? hoverValue.value : [],
        value: isSelected.value ? cacheValue.value : value.value,
        activeIndex: activeIndex.value,
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
        panelPreselection: props.panelPreselection,
        popupVisible: true,
        panelClick: props.onPanelClick,
        onCellClick: onCellClick,
        onCellMouseEnter: onCellMouseEnter,
        onCellMouseLeave: onCellMouseLeave,
        onJumperClick: onJumperClick,
        onConfirmClick: onConfirmClick,
        onPresetClick: onPresetClick,
        onYearChange: onYearChange,
        onMonthChange: onMonthChange,
        onTimePickerChange: onTimePickerChange
      };
    });
    return function () {
      return createVNode(TRangePanel, panelProps.value, null);
    };
  }
});

export { _DateRangePickerPanel as default };
//# sourceMappingURL=DateRangePickerPanel.mjs.map
