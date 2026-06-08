/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, computed, watch, createVNode, mergeProps } from 'vue';
import { d as dayjs } from '../_chunks/dep-ad588525.mjs';
import { isDate, isFunction } from 'lodash-es';
import { CalendarIcon } from 'tdesign-icons-vue-next';
import { u as usePrefixClass, e as useDisabled, a as useTNodeJSX, n as useReadonly, i as useGlobalIcon, o as useEventForward } from '../_chunks/dep-7673347f.mjs';
import { useSingle } from './hooks/useSingle.mjs';
import { g as getDefaultFormat, f as formatDate, p as parseToDayjs, a as formatTime } from '../_chunks/dep-c0b36067.mjs';
import { c as covertToDate, i as isSame, s as subtractMonth, a as addMonth, e as extractTimeObj } from '../_chunks/dep-2fe12221.mjs';
import datePickerProps from './props.mjs';
import { SelectInput } from '../select-input/index.mjs';
import TSinglePanel from './components/panel/SinglePanel.mjs';
import { useConfig } from '../config-provider/hooks/useConfig.mjs';
import '../_chunks/dep-257428bc.mjs';
import '../_chunks/dep-fe644854.mjs';
import '../_chunks/dep-00b4e06a.mjs';
import '../_chunks/dep-9f459d8b.mjs';
import '../_chunks/dep-51a43106.mjs';
import '../_chunks/dep-22ebd6af.mjs';
import '../_chunks/dep-9003fde5.mjs';
import '../_chunks/dep-cdd448ec.mjs';
import '../_chunks/dep-97ecacde.mjs';
import '../config-provider/utils/context.mjs';
import '../_chunks/dep-a4c09318.mjs';
import '../_chunks/dep-ffb85102.mjs';
import '../_chunks/dep-84fd47b3.mjs';
import '../_chunks/dep-1dacc319.mjs';
import '../_chunks/dep-d36c4a3f.mjs';
import './hooks/useSingleValue.mjs';
import '../_chunks/dep-83649365.mjs';
import '../_chunks/dep-6d2705e1.mjs';
import '../_chunks/dep-63305cb0.mjs';
import '../select-input/select-input.mjs';
import '../popup/index.mjs';
import '../popup/popup.mjs';
import '@popperjs/core';
import '../popup/container.mjs';
import '../popup/props.mjs';
import './style/css.mjs';
import '../select-input/props.mjs';
import '../select-input/hooks/index.mjs';
import '../select-input/hooks/useMultiple.mjs';
import '../_chunks/dep-0dcc778a.mjs';
import '../tag-input/index.mjs';
import '../tag-input/tag-input.mjs';
import '../input/index.mjs';
import '../input/input.mjs';
import '../input/props.mjs';
import '../input/hooks/index.mjs';
import '../input/hooks/useInput.mjs';
import '../form/consts/index.mjs';
import '../input/hooks/useLengthLimit.mjs';
import '../_chunks/dep-0cde7579.mjs';
import '../input/hooks/useInputEventHandler.mjs';
import '../input/hooks/useInputWidth.mjs';
import '../input/input-group.mjs';
import '../input/input-group-props.mjs';
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
import '../loading/index.mjs';
import '../loading/directive.mjs';
import '../loading/plugin.mjs';
import '../loading/loading.mjs';
import '../loading/icon/gradient.mjs';
import '../loading/props.mjs';
import '../select-input/hooks/useOverlayInnerStyle.mjs';
import '../select-input/hooks/useSingle.mjs';
import './components/panel/PanelContent.mjs';
import './components/base/Header.mjs';
import '../pagination/index.mjs';
import '../pagination/pagination.mjs';
import '../input-number/index.mjs';
import '../input-number/input-number.mjs';
import '../button/index.mjs';
import '../button/button.mjs';
import '../button/props.mjs';
import '../input-number/props.mjs';
import '../input-number/hooks/useInputNumber.mjs';
import '../_chunks/dep-29754cb4.mjs';
import '../_chunks/dep-db81c302.mjs';
import '../select/index.mjs';
import '../select/select.mjs';
import '../_chunks/dep-88e5a7b0.mjs';
import '../common-components/fake-arrow.mjs';
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
import './hooks/useTableData.mjs';

var _DatePicker = defineComponent({
  name: "TDatePicker",
  props: datePickerProps,
  setup: function setup(props2) {
    var COMPONENT_NAME = usePrefixClass("date-picker");
    var _useSingle = useSingle(props2),
      inputValue = _useSingle.inputValue,
      popupVisible = _useSingle.popupVisible,
      inputProps = _useSingle.inputProps,
      popupProps = _useSingle.popupProps,
      isHoverCell = _useSingle.isHoverCell,
      cacheValue = _useSingle.cacheValue,
      value = _useSingle.value,
      year = _useSingle.year,
      month = _useSingle.month,
      time = _useSingle.time,
      inputRef = _useSingle.inputRef,
      onChange = _useSingle.onChange;
    var disabled = useDisabled();
    var renderTNodeJSX = useTNodeJSX();
    var _useConfig = useConfig("datePicker"),
      globalConfig = _useConfig.globalConfig;
    var isReadOnly = useReadonly();
    var _useGlobalIcon = useGlobalIcon({
        CalendarIcon: CalendarIcon
      }),
      CalendarIcon$1 = _useGlobalIcon.CalendarIcon;
    var formatRef = computed(function () {
      return getDefaultFormat({
        mode: props2.mode,
        format: props2.format,
        valueType: props2.valueType,
        enableTimePicker: props2.multiple ? false : props2.enableTimePicker
      });
    });
    var valueDisplayParams = computed(function () {
      return {
        value: value.value,
        displayValue: inputValue.value
      };
    });
    watch(popupVisible, function (visible) {
      var _formatRef$value;
      if (props2.multiple) return;
      if (!props2.needConfirm && props2.enableTimePicker && !visible) {
        var nextValue = formatDate(inputValue.value, {
          format: formatRef.value.format
        });
        if (nextValue) {
          onChange === null || onChange === void 0 || onChange(formatDate(inputValue.value, {
            format: formatRef.value.format,
            targetFormat: formatRef.value.valueType,
            defaultTime: props2.defaultTime
          }), {
            dayjsValue: parseToDayjs(inputValue.value, formatRef.value.format, void 0, void 0, props2.defaultTime),
            trigger: "confirm"
          });
        } else {
          inputValue.value = formatDate(value.value, {
            format: formatRef.value.format
          });
        }
      }
      var dateValue = value.value && !isDate(value.value) && !["week", "quarter"].includes(props2.mode) ? covertToDate(value.value, (_formatRef$value = formatRef.value) === null || _formatRef$value === void 0 ? void 0 : _formatRef$value.valueType) : value.value;
      cacheValue.value = formatDate(dateValue, {
        format: formatRef.value.valueType,
        targetFormat: formatRef.value.format
      });
      inputValue.value = formatDate(dateValue, {
        format: formatRef.value.valueType,
        targetFormat: formatRef.value.format
      });
      if (visible) {
        year.value = parseToDayjs(value.value, formatRef.value.valueType).year();
        month.value = parseToDayjs(value.value, formatRef.value.format).month();
        time.value = formatTime(value.value, formatRef.value.format, formatRef.value.timeFormat, props2.defaultTime);
      } else {
        isHoverCell.value = false;
      }
    });
    function onCellMouseEnter(date) {
      if (props2.multiple) return;
      isHoverCell.value = true;
      inputValue.value = formatDate(date, {
        format: formatRef.value.format
      });
    }
    function onCellMouseLeave() {
      if (props2.multiple) return;
      isHoverCell.value = false;
      inputValue.value = formatDate(cacheValue.value, {
        format: formatRef.value.format
      });
    }
    function onCellClick(date) {
      var _props2$onPick;
      isHoverCell.value = false;
      if (props2.mode === "date") {
        year.value = date.getFullYear();
        month.value = date.getMonth();
      }
      if (props2.enableTimePicker) {
        cacheValue.value = formatDate(date, {
          format: formatRef.value.format
        });
      } else {
        if (props2.multiple) {
          var newDate = processDate(date, props2.defaultTime);
          onChange(newDate, {
            dayjsValue: parseToDayjs(date, formatRef.value.format, void 0, void 0, props2.defaultTime),
            trigger: "pick"
          });
          return;
        }
        onChange === null || onChange === void 0 || onChange(formatDate(date, {
          format: formatRef.value.format,
          targetFormat: formatRef.value.valueType,
          defaultTime: props2.defaultTime
        }), {
          dayjsValue: parseToDayjs(date, formatRef.value.format, void 0, void 0, props2.defaultTime),
          trigger: "pick"
        });
        popupVisible.value = false;
      }
      (_props2$onPick = props2.onPick) === null || _props2$onPick === void 0 || _props2$onPick.call(props2, date);
    }
    function processDate(date, defaultTime) {
      var isSameDate;
      var currentValue = value.value || [];
      var dayjsLocale = globalConfig.value.dayjsLocale;
      var currentDate;
      if (props2.mode !== "week") isSameDate = currentValue.some(function (val) {
        return isSame(parseToDayjs(val, formatRef.value.format).toDate(), date, props2.mode, dayjsLocale);
      });else {
        isSameDate = currentValue.some(function (val) {
          return val === dayjs(date).locale(dayjsLocale).format(formatRef.value.format);
        });
      }
      if (!isSameDate) {
        currentDate = currentValue.concat(formatDate(date, {
          format: formatRef.value.format,
          targetFormat: formatRef.value.valueType,
          defaultTime: defaultTime
        }));
      } else {
        currentDate = currentValue.filter(function (val) {
          return formatDate(val, {
            format: formatRef.value.format,
            targetFormat: formatRef.value.valueType,
            defaultTime: defaultTime
          }) !== formatDate(date, {
            format: formatRef.value.format,
            targetFormat: formatRef.value.valueType,
            defaultTime: defaultTime
          });
        });
      }
      return currentDate;
    }
    function onTagRemoveClick(ctx) {
      if (["week", "quarter"].includes(props2.mode)) {
        onChange === null || onChange === void 0 || onChange(ctx.value, {
          trigger: "tag-remove"
        });
        return;
      }
      var removeDate = dayjs(ctx.item).toDate();
      var newDate = processDate(removeDate, props2.defaultTime);
      onChange === null || onChange === void 0 || onChange(newDate, {
        dayjsValue: parseToDayjs(removeDate, formatRef.value.format, void 0, void 0, props2.defaultTime),
        trigger: "tag-remove"
      });
    }
    function onTagClearClick(_ref) {
      var e = _ref.e;
      e.stopPropagation();
      popupVisible.value = false;
      onChange === null || onChange === void 0 || onChange([], {
        dayjsValue: dayjs(),
        trigger: "clear"
      });
    }
    function onJumperClick(_ref2) {
      var trigger = _ref2.trigger;
      var monthCountMap = {
        date: 1,
        week: 1,
        month: 12,
        quarter: 12,
        year: 120
      };
      var monthCount = monthCountMap[props2.mode] || 0;
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
      year.value = nextYear;
      month.value = nextMonth;
    }
    function onTimePickerChange(val) {
      var _props2$onPick2;
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
      var currentDate = !dayjs(inputValue.value, formatRef.value.format).isValid() ? dayjs() : dayjs(inputValue.value, formatRef.value.format);
      var nextDate = currentDate.hour(nextHours).minute(minutes).second(seconds).millisecond(milliseconds).toDate();
      inputValue.value = formatDate(nextDate, {
        format: formatRef.value.format
      });
      cacheValue.value = formatDate(nextDate, {
        format: formatRef.value.format
      });
      (_props2$onPick2 = props2.onPick) === null || _props2$onPick2 === void 0 || _props2$onPick2.call(props2, nextDate);
    }
    function onConfirmClick(_ref3) {
      var e = _ref3.e;
      var nextValue = formatDate(inputValue.value, {
        format: formatRef.value.format
      });
      if (nextValue) {
        var _props2$onConfirm;
        props2 === null || props2 === void 0 || (_props2$onConfirm = props2.onConfirm) === null || _props2$onConfirm === void 0 || _props2$onConfirm.call(props2, {
          date: dayjs(nextValue).toDate(),
          e: e
        });
        onChange === null || onChange === void 0 || onChange(formatDate(inputValue.value, {
          format: formatRef.value.format,
          targetFormat: formatRef.value.valueType,
          defaultTime: props2.defaultTime
        }), {
          dayjsValue: parseToDayjs(inputValue.value, formatRef.value.format, void 0, void 0, props2.defaultTime),
          trigger: "confirm"
        });
      } else {
        inputValue.value = formatDate(value.value, {
          format: formatRef.value.format
        });
      }
      popupVisible.value = false;
    }
    function onPresetClick(presetValue) {
      var presetVal = isFunction(presetValue) ? presetValue() : presetValue;
      onChange === null || onChange === void 0 || onChange(formatDate(presetVal, {
        format: formatRef.value.format,
        targetFormat: formatRef.value.valueType
      }), {
        dayjsValue: parseToDayjs(presetVal, formatRef.value.format, void 0, void 0, props2.defaultTime),
        trigger: "preset"
      });
      inputValue.value = formatDate(presetVal, {
        format: formatRef.value.format
      });
      popupVisible.value = false;
    }
    function onYearChange(nextYear) {
      year.value = nextYear;
    }
    function onMonthChange(nextMonth) {
      month.value = nextMonth;
    }
    var panelProps = computed(function () {
      return {
        value: cacheValue.value,
        year: year.value,
        month: month.value,
        format: formatRef.value.format,
        mode: props2.mode,
        presets: props2.presets,
        multiple: props2.multiple,
        time: props2.multiple ? "" : time.value,
        disableDate: props2.disableDate,
        firstDayOfWeek: props2.firstDayOfWeek,
        timePickerProps: props2.timePickerProps,
        enableTimePicker: props2.multiple ? false : props2.enableTimePicker,
        presetsPlacement: props2.presetsPlacement,
        popupVisible: popupVisible.value,
        needConfirm: props2.needConfirm,
        onCellClick: onCellClick,
        onCellMouseEnter: onCellMouseEnter,
        onCellMouseLeave: onCellMouseLeave,
        onJumperClick: onJumperClick,
        onConfirmClick: onConfirmClick,
        onPresetClick: onPresetClick,
        onYearChange: onYearChange,
        onMonthChange: onMonthChange,
        onTimePickerChange: onTimePickerChange,
        onPanelClick: function onPanelClick() {
          var _inputRef$value, _inputRef$value$focus;
          return (_inputRef$value = inputRef.value) === null || _inputRef$value === void 0 || (_inputRef$value$focus = _inputRef$value.focus) === null || _inputRef$value$focus === void 0 ? void 0 : _inputRef$value$focus.call(_inputRef$value);
        }
      };
    });
    var selectInputEvents = useEventForward(props2.selectInputProps, {
      onClear: onTagClearClick
    });
    return function () {
      return createVNode("div", {
        "class": COMPONENT_NAME.value
      }, [createVNode(SelectInput, mergeProps({
        "borderless": props2.borderless,
        "disabled": disabled.value,
        "value": inputValue.value,
        "label": function label() {
          return renderTNodeJSX("label");
        },
        "status": props2.status,
        "tips": props2.tips,
        "clearable": props2.clearable,
        "readonly": isReadOnly.value,
        "multiple": props2.multiple,
        "popupProps": popupProps.value,
        "inputProps": inputProps.value,
        "placeholder": props2.placeholder || globalConfig.value.placeholder[props2.mode],
        "popupVisible": !isReadOnly.value && popupVisible.value,
        "valueDisplay": function valueDisplay() {
          return renderTNodeJSX("valueDisplay", {
            params: valueDisplayParams.value
          });
        },
        "needConfirm": props2.needConfirm,
        "panel": function panel() {
          return createVNode(TSinglePanel, panelProps.value, null);
        },
        "tagInputProps": {
          onRemove: onTagRemoveClick
        },
        "prefixIcon": function prefixIcon() {
          return renderTNodeJSX("prefixIcon");
        },
        "suffixIcon": function suffixIcon() {
          return renderTNodeJSX("suffixIcon") || createVNode(CalendarIcon$1, null, null);
        }
      }, selectInputEvents.value), null)]);
    };
  }
});

export { _DatePicker as default };
//# sourceMappingURL=DatePicker.mjs.map
