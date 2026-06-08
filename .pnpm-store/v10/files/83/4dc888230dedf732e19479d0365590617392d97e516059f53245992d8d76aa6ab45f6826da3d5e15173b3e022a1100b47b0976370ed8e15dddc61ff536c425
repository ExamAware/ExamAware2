/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, computed, ref, watch, createVNode } from 'vue';
import { _ as _toConsumableArray } from '../_chunks/dep-00b4e06a.mjs';
import { d as dayjs } from '../_chunks/dep-ad588525.mjs';
import { u as usePrefixClass, e as useDisabled, n as useReadonly } from '../_chunks/dep-7673347f.mjs';
import { isFunction, isArray } from 'lodash-es';
import dateRangePickerProps from './date-range-picker-props.mjs';
import { RangeInputPopup } from '../range-input/index.mjs';
import TRangePanel from './components/panel/RangePanel.mjs';
import { useRange } from './hooks/useRange.mjs';
import { g as getDefaultFormat, f as formatDate, a as formatTime, i as initYearMonthTime, p as parseToDayjs, b as isValidDate } from '../_chunks/dep-c0b36067.mjs';
import { s as subtractMonth, a as addMonth, e as extractTimeObj } from '../_chunks/dep-2fe12221.mjs';
import { dateCorrection } from './utils/index.mjs';
import '../_chunks/dep-9f459d8b.mjs';
import '../_chunks/dep-257428bc.mjs';
import '../_chunks/dep-fe644854.mjs';
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
import '../_chunks/dep-1dacc319.mjs';
import '../_chunks/dep-d36c4a3f.mjs';
import '../range-input/range-input.mjs';
import 'tdesign-icons-vue-next';
import '../input/index.mjs';
import '../input/input.mjs';
import '../_chunks/dep-0dcc778a.mjs';
import '../input/props.mjs';
import '../input/hooks/index.mjs';
import '../input/hooks/useInput.mjs';
import '../form/consts/index.mjs';
import '../input/hooks/useLengthLimit.mjs';
import '../_chunks/dep-6d2705e1.mjs';
import '../_chunks/dep-0cde7579.mjs';
import '../input/hooks/useInputEventHandler.mjs';
import '../input/hooks/useInputWidth.mjs';
import '../input/input-group.mjs';
import '../input/input-group-props.mjs';
import './style/css.mjs';
import '../range-input/props.mjs';
import '../range-input/range-input-popup.mjs';
import '../popup/index.mjs';
import '../popup/popup.mjs';
import '@popperjs/core';
import '../popup/container.mjs';
import '../popup/props.mjs';
import '../range-input/range-input-popup-props.mjs';
import '../select-input/hooks/useOverlayInnerStyle.mjs';
import './components/panel/PanelContent.mjs';
import './components/base/Header.mjs';
import '../pagination/index.mjs';
import '../pagination/pagination.mjs';
import '../input-number/index.mjs';
import '../input-number/input-number.mjs';
import '../button/index.mjs';
import '../button/button.mjs';
import '../loading/index.mjs';
import '../loading/directive.mjs';
import '../loading/plugin.mjs';
import '../loading/loading.mjs';
import '../loading/icon/gradient.mjs';
import '../loading/props.mjs';
import '../button/props.mjs';
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
import '../time-picker/time-range-picker-props.mjs';
import './components/panel/ExtraContent.mjs';
import './components/base/Footer.mjs';
import './hooks/index.mjs';
import './hooks/useDisableDate.mjs';
import './hooks/useRangeValue.mjs';
import './hooks/useSingle.mjs';
import './hooks/useSingleValue.mjs';
import './hooks/useTableData.mjs';

var _DateRangePicker = defineComponent({
  name: "TDateRangePicker",
  props: dateRangePickerProps,
  setup: function setup(props2, _ref) {
    var slots = _ref.slots;
    var COMPONENT_NAME = usePrefixClass("date-range-picker");
    var _useRange = useRange(props2),
      inputValue = _useRange.inputValue,
      popupVisible = _useRange.popupVisible,
      rangeInputProps = _useRange.rangeInputProps,
      popupProps = _useRange.popupProps,
      value = _useRange.value,
      year = _useRange.year,
      month = _useRange.month,
      time = _useRange.time,
      cacheValue = _useRange.cacheValue,
      activeIndex = _useRange.activeIndex,
      isHoverCell = _useRange.isHoverCell,
      isFirstValueSelected = _useRange.isFirstValueSelected,
      onChange = _useRange.onChange;
    var disabled = useDisabled();
    var isReadOnly = useReadonly();
    var formatRef = computed(function () {
      return getDefaultFormat({
        mode: props2.mode,
        enableTimePicker: props2.enableTimePicker,
        format: props2.format,
        valueType: props2.valueType
      });
    });
    var isSelected = ref(false);
    watch(popupVisible, function (visible) {
      if (visible) {
        isSelected.value = false;
        cacheValue.value = formatDate(value.value || [], {
          format: formatRef.value.valueType,
          targetFormat: formatRef.value.format
        });
        time.value = formatTime(value.value || [dayjs().format(formatRef.value.timeFormat), dayjs().format(formatRef.value.timeFormat)], formatRef.value.format, formatRef.value.timeFormat, props2.defaultTime);
        if (!value.value.length) {
          var _initYearMonthTime = initYearMonthTime({
              value: value.value,
              mode: props2.mode,
              format: formatRef.value.format,
              enableTimePicker: props2.enableTimePicker
            }),
            defaultYear = _initYearMonthTime.year,
            defaultMonth = _initYearMonthTime.month;
          year.value = defaultYear;
          month.value = defaultMonth;
        } else if (value.value.length === 2 && !props2.enableTimePicker) {
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
          if ((props2.mode === "month" || props2.mode === "quarter") && year.value[0] === year.value[1]) {
            year.value = [year.value[0], year.value[0] + 1];
          }
        } else {
          year.value = value.value.map(function (v) {
            return parseToDayjs(v, formatRef.value.format).year();
          });
          if (year.value.length === 1) year.value = [year.value[0], year.value[0]];
          month.value = value.value.map(function (v) {
            return parseToDayjs(v, formatRef.value.format).month();
          });
          if (month.value.length === 1) month.value = [month.value[0], Math.min(month.value[0] + 1, 11)];
        }
      } else {
        activeIndex.value = 0;
        isHoverCell.value = false;
        isFirstValueSelected.value = false;
        if (props2.needConfirm) {
          inputValue.value = formatDate(value.value, {
            format: formatRef.value.valueType,
            targetFormat: formatRef.value.format
          });
        } else {
          confirmValueChange();
        }
      }
    });
    function onCellMouseEnter(date) {
      isHoverCell.value = true;
      var nextValue = _toConsumableArray(inputValue.value);
      nextValue[activeIndex.value] = formatDate(date, {
        format: formatRef.value.format
      });
      inputValue.value = nextValue;
    }
    function onCellMouseLeave() {
      isHoverCell.value = false;
      inputValue.value = cacheValue.value;
    }
    function onCellClick(date, _ref2) {
      var _props2$onPick;
      var e = _ref2.e;
      (_props2$onPick = props2.onPick) === null || _props2$onPick === void 0 || _props2$onPick.call(props2, date, {
        e: e,
        partial: activeIndex.value ? "end" : "start"
      });
      isHoverCell.value = false;
      isSelected.value = true;
      var nextValue = _toConsumableArray(inputValue.value);
      nextValue[activeIndex.value] = formatDate(date, {
        format: formatRef.value.format
      });
      cacheValue.value = nextValue;
      inputValue.value = nextValue;
      if (props2.enableTimePicker) return;
      var notValidIndex = nextValue.findIndex(function (v) {
        return !v || !isValidDate(v, formatRef.value.format);
      });
      if (notValidIndex === -1 && nextValue.length === 2) {
        if (!isFirstValueSelected.value && parseToDayjs(nextValue[0], formatRef.value.format).isAfter(parseToDayjs(nextValue[1], formatRef.value.format))) {
          nextValue[activeIndex.value ? 0 : 1] = "";
          cacheValue.value = nextValue;
          inputValue.value = nextValue;
        } else {
          onChange === null || onChange === void 0 || onChange(formatDate(nextValue, {
            format: formatRef.value.format,
            targetFormat: formatRef.value.valueType,
            autoSwap: true,
            defaultTime: props2.defaultTime
          }), {
            dayjsValue: nextValue.map(function (v, i) {
              var _props2$defaultTime;
              return parseToDayjs(v, formatRef.value.format, void 0, void 0, (_props2$defaultTime = props2.defaultTime) === null || _props2$defaultTime === void 0 ? void 0 : _props2$defaultTime[i]);
            }),
            trigger: "pick"
          });
        }
      }
      if (!isFirstValueSelected.value) {
        var nextIndex = notValidIndex;
        if (nextIndex === -1) nextIndex = activeIndex.value ? 0 : 1;
        activeIndex.value = nextIndex;
        isFirstValueSelected.value = nextValue.some(function (v) {
          return !!v;
        });
      } else {
        popupVisible.value = false;
      }
    }
    function onJumperClick(_ref3) {
      var trigger = _ref3.trigger,
        partial = _ref3.partial;
      var partialIndex = partial === "start" ? 0 : 1;
      var monthCountMap = {
        date: 1,
        week: 1,
        month: 12,
        quarter: 12,
        year: 120
      };
      var monthCount = monthCountMap[props2.mode] || 0;
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
      var onlyYearSelect = ["year", "quarter", "month"].includes(props2.mode);
      var correctedDate = dateCorrection(partialIndex, nextYear, nextMonth, onlyYearSelect);
      nextYear = correctedDate.nextYear;
      nextMonth = correctedDate.nextMonth;
      year.value = nextYear;
      month.value = nextMonth;
    }
    function onTimePickerChange(val) {
      var _extractTimeObj = extractTimeObj(val),
        hours = _extractTimeObj.hours,
        minutes = _extractTimeObj.minutes,
        seconds = _extractTimeObj.seconds,
        milliseconds = _extractTimeObj.milliseconds,
        meridiem = _extractTimeObj.meridiem;
      var nextInputValue = _toConsumableArray(inputValue.value);
      var changedInputValue = nextInputValue[activeIndex.value];
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
      inputValue.value = formatDate(nextInputValue, {
        format: formatRef.value.format
      });
      cacheValue.value = formatDate(nextInputValue, {
        format: formatRef.value.format
      });
    }
    var confirmValueChange = function confirmValueChange(e) {
      var nextValue = _toConsumableArray(inputValue.value);
      var notValidIndex = nextValue.findIndex(function (v) {
        return !v || !isValidDate(v, formatRef.value.format);
      });
      if (notValidIndex === -1 && nextValue.length === 2) {
        if (!isFirstValueSelected.value && parseToDayjs(nextValue[0], formatRef.value.format).isAfter(parseToDayjs(nextValue[1], formatRef.value.format))) {
          nextValue[activeIndex.value ? 0 : 1] = "";
          cacheValue.value = nextValue;
          inputValue.value = nextValue;
        } else {
          var _props2$onConfirm;
          props2 === null || props2 === void 0 || (_props2$onConfirm = props2.onConfirm) === null || _props2$onConfirm === void 0 || _props2$onConfirm.call(props2, {
            date: nextValue.map(function (v) {
              return dayjs(v).toDate();
            }),
            e: e || null,
            partial: activeIndex.value ? "end" : "start"
          });
          onChange === null || onChange === void 0 || onChange(formatDate(nextValue, {
            format: formatRef.value.format,
            targetFormat: formatRef.value.valueType,
            autoSwap: true,
            defaultTime: props2.defaultTime
          }), {
            dayjsValue: nextValue.map(function (v, i) {
              var _props2$defaultTime2;
              return parseToDayjs(v, formatRef.value.format, void 0, void 0, (_props2$defaultTime2 = props2.defaultTime) === null || _props2$defaultTime2 === void 0 ? void 0 : _props2$defaultTime2[i]);
            }),
            trigger: "confirm"
          });
        }
      }
    };
    function onConfirmClick(_ref4) {
      var e = _ref4.e;
      confirmValueChange(e);
      var nextValue = _toConsumableArray(inputValue.value);
      var notValidIndex = nextValue.findIndex(function (v) {
        return !v || !isValidDate(v, formatRef.value.format);
      });
      if (!isFirstValueSelected.value) {
        var nextIndex = notValidIndex;
        if (nextIndex === -1) nextIndex = activeIndex.value ? 0 : 1;
        activeIndex.value = nextIndex;
        isFirstValueSelected.value = nextValue.some(function (v) {
          return !!v;
        });
      } else if (nextValue.length === 2) {
        popupVisible.value = false;
      }
    }
    function onPresetClick(preset, context) {
      var presetValue = preset;
      if (isFunction(preset)) {
        presetValue = preset();
      }
      if (!isArray(presetValue)) {
        console.error("preset: ".concat(preset, " \u9884\u8BBE\u503C\u5FC5\u987B\u662F\u6570\u7EC4!"));
      } else {
        var _props2$onPresetClick;
        onChange === null || onChange === void 0 || onChange(formatDate(presetValue, {
          format: formatRef.value.format,
          targetFormat: formatRef.value.valueType,
          autoSwap: true,
          defaultTime: props2.defaultTime
        }), {
          dayjsValue: presetValue.map(function (p, i) {
            var _props2$defaultTime3;
            return parseToDayjs(p, formatRef.value.format, void 0, void 0, (_props2$defaultTime3 = props2.defaultTime) === null || _props2$defaultTime3 === void 0 ? void 0 : _props2$defaultTime3[i]);
          }),
          trigger: "preset"
        });
        popupVisible.value = false;
        (_props2$onPresetClick = props2.onPresetClick) === null || _props2$onPresetClick === void 0 || _props2$onPresetClick.call(props2, context);
      }
    }
    function onYearChange(nextVal, _ref5) {
      var partial = _ref5.partial;
      var partialIndex = partial === "start" ? 0 : 1;
      if (props2.enableTimePicker) partialIndex = activeIndex.value;
      var nextYear = _toConsumableArray(year.value);
      var nextMonth = _toConsumableArray(month.value);
      nextYear[partialIndex] = nextVal;
      var onlyYearSelect = ["year", "quarter", "month"].includes(props2.mode);
      var correctedDate = dateCorrection(partialIndex, nextYear, nextMonth, onlyYearSelect);
      nextYear = correctedDate.nextYear;
      nextMonth = correctedDate.nextMonth;
      year.value = nextYear;
      if (!onlyYearSelect) month.value = nextMonth;
    }
    function onMonthChange(nextVal, _ref6) {
      var partial = _ref6.partial;
      var partialIndex = partial === "start" ? 0 : 1;
      if (props2.enableTimePicker) partialIndex = activeIndex.value;
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
    }
    var panelProps = computed(function () {
      return {
        hoverValue: isHoverCell.value ? inputValue.value : [],
        value: isSelected.value ? cacheValue.value : value.value,
        isFirstValueSelected: isFirstValueSelected.value,
        activeIndex: activeIndex.value,
        year: year.value,
        month: month.value,
        format: formatRef.value.format,
        mode: props2.mode,
        presets: props2.presets,
        time: time.value,
        disableDate: props2.disableDate,
        disableTime: props2.disableTime,
        firstDayOfWeek: props2.firstDayOfWeek,
        timePickerProps: props2.timePickerProps,
        enableTimePicker: props2.enableTimePicker,
        presetsPlacement: props2.presetsPlacement,
        popupVisible: popupVisible.value,
        panelPreselection: props2.panelPreselection,
        cancelRangeSelectLimit: props2.cancelRangeSelectLimit,
        needConfirm: props2.needConfirm,
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
      return createVNode("div", {
        "class": COMPONENT_NAME.value
      }, [createVNode(RangeInputPopup, {
        "readonly": isReadOnly.value,
        "disabled": disabled.value,
        "label": props2.label,
        "status": props2.status,
        "tips": props2.tips || slots.tips,
        "inputValue": inputValue.value,
        "popupProps": popupProps.value,
        "rangeInputProps": rangeInputProps.value,
        "popupVisible": popupVisible.value,
        "panel": function panel() {
          return createVNode(TRangePanel, panelProps.value, null);
        }
      }, null)]);
    };
  }
});

export { _DateRangePicker as default };
//# sourceMappingURL=DateRangePicker.mjs.map
