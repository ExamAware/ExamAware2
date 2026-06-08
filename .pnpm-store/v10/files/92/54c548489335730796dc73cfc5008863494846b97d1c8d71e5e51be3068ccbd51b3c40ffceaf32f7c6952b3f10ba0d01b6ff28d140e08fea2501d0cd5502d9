/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, computed, watch, createVNode, mergeProps } from 'vue';
import dayjs from 'dayjs';
import { isDate, isFunction } from 'lodash-es';
import { CalendarIcon } from 'tdesign-icons-vue-next';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-fe23be6e.js';
import { u as useTNodeJSX } from '../_chunks/dep-2accc95a.js';
import { u as usePrefixClass } from '../_chunks/dep-9e6d8a78.js';
import { u as useDisabled } from '../_chunks/dep-f7dd3c12.js';
import { u as useGlobalIcon } from '../_chunks/dep-3a7a2ef1.js';
import '@babel/runtime/helpers/slicedToArray';
import '../_chunks/dep-880d05b9.js';
import { u as useReadonly } from '../_chunks/dep-47b13687.js';
import '@babel/runtime/helpers/defineProperty';
import { u as useEventForward } from '../_chunks/dep-4d7b9152.js';
import { useSingle } from './hooks/useSingle.js';
import { g as getDefaultFormat, f as formatDate, p as parseToDayjs, a as formatTime } from '../_chunks/dep-4cdcccb6.js';
import { c as covertToDate, i as isSame, s as subtractMonth, a as addMonth, e as extractTimeObj } from '../_chunks/dep-67991c5a.js';
import datePickerProps from './props.js';
import { SelectInput } from '../select-input/index.js';
import TSinglePanel from './components/panel/SinglePanel.js';
import { useConfig } from '../config-provider/hooks/useConfig.js';
import '../_chunks/dep-81b01cae.js';
import '../_chunks/dep-16bcfabc.js';
import '../_chunks/dep-fb805f69.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import './hooks/useSingleValue.js';
import '../_chunks/dep-51e5a827.js';
import '../_chunks/dep-bcf15bc2.js';
import '../_chunks/dep-8295e674.js';
import '@babel/runtime/helpers/objectDestructuringEmpty';
import '@babel/runtime/helpers/extends';
import '../_chunks/dep-bf4a6186.js';
import '../select-input/select-input.js';
import '../popup/index.js';
import '../popup/popup.js';
import '@popperjs/core';
import '../_chunks/dep-4f8b6591.js';
import '../_chunks/dep-2ea19dca.js';
import '../popup/container.js';
import '../popup/props.js';
import '../_chunks/dep-80a77612.js';
import '../_chunks/dep-664b8b22.js';
import 'tdesign-vue-next/esm/common/style/web/components/popup/_index.less';
import '../select-input/props.js';
import '../select-input/hooks/useMultiple.js';
import '@babel/runtime/helpers/objectWithoutProperties';
import '../tag-input/index.js';
import '../tag-input/tag-input.js';
import '../input/index.js';
import '../input/input.js';
import '../input/props.js';
import '../input/hooks/useInput.js';
import '../form/consts/index.js';
import '../input/hooks/useLengthLimit.js';
import '../_chunks/dep-80a99546.js';
import '../input/hooks/useInputEventHandler.js';
import '../input/hooks/useInputWidth.js';
import '../input/input-group.js';
import '../input/input-group-props.js';
import 'tdesign-vue-next/esm/common/style/web/components/input/_index.less';
import '../tag-input/props.js';
import '../_chunks/dep-aa34a263.js';
import '../tag-input/hooks/useDragSorter.js';
import '../tag-input/hooks/useHover.js';
import '../tag-input/hooks/useTagScroll.js';
import '../tag-input/hooks/useTagList.js';
import '../tag/index.js';
import '../tag/tag.js';
import 'tinycolor2';
import '../tag/props.js';
import '../tag/check-tag.js';
import '../tag/check-tag-props.js';
import '../_chunks/dep-30c631d1.js';
import '../tag/check-tag-group.js';
import '../tag/check-tag-group-props.js';
import 'tdesign-vue-next/esm/common/style/web/components/tag/_index.less';
import 'tdesign-vue-next/esm/common/style/web/components/tag-input/_index.less';
import '../loading/index.js';
import '../loading/directive.js';
import '../loading/plugin.js';
import '../_chunks/dep-ee693784.js';
import '../loading/icon/gradient.js';
import '../loading/props.js';
import 'tdesign-vue-next/esm/common/style/web/components/loading/_index.less';
import '../select-input/hooks/useOverlayInnerStyle.js';
import '../select-input/hooks/useSingle.js';
import 'tdesign-vue-next/esm/common/style/web/components/select-input/_index.less';
import './components/panel/PanelContent.js';
import './components/base/Header.js';
import '../pagination/index.js';
import '../pagination/pagination.js';
import '../input-number/index.js';
import '../input-number/input-number.js';
import '../button/index.js';
import '../button/button.js';
import '../button/props.js';
import '../_chunks/dep-d2a6e7a4.js';
import 'tdesign-vue-next/esm/common/style/web/components/button/_index.less';
import '../input-number/props.js';
import '../input-number/hooks/useInputNumber.js';
import '../_chunks/dep-1a63d163.js';
import '../_chunks/dep-05f15b4e.js';
import 'tdesign-vue-next/esm/common/style/web/components/input-number/_index.less';
import '../select/index.js';
import '../select/select.js';
import '@babel/runtime/helpers/asyncToGenerator';
import '@babel/runtime/regenerator';
import '../common-components/fake-arrow.js';
import '../select/components/select-panel.js';
import '../select/option.js';
import '../select/option-props.js';
import '../checkbox/index.js';
import '../checkbox/checkbox.js';
import '../checkbox/props.js';
import '../checkbox/consts/index.js';
import '../checkbox/hooks/useCheckboxLazyLoad.js';
import '../_chunks/dep-6264b0a7.js';
import '../checkbox/hooks/useKeyboardEvent.js';
import '../checkbox/group.js';
import '../checkbox/checkbox-group-props.js';
import '../_chunks/dep-e3ce8c8f.js';
import 'tdesign-vue-next/esm/common/style/web/components/checkbox/_index.less';
import '../select/utils/index.js';
import '../select/consts/index.js';
import '../select/option-group.js';
import '../select/option-group-props.js';
import '../select/props.js';
import '../select/hooks/usePanelVirtualScroll.js';
import '../select/hooks/useKeyboardControl.js';
import '../select/hooks/useSelectOptions.js';
import 'tdesign-vue-next/esm/common/style/web/components/select/_index.less';
import '../input-adornment/index.js';
import '../input-adornment/input-adornment.js';
import '../input-adornment/props.js';
import 'tdesign-vue-next/esm/common/style/web/components/input-adornment/_index.less';
import '../pagination/props.js';
import '../pagination/hooks/useMoreAction.js';
import '../pagination/hooks/usePaginationClasses.js';
import '../pagination/pagination-mini.js';
import '../pagination/pagination-mini-props.js';
import '../tooltip/index.js';
import '../tooltip/tooltip.js';
import '../tooltip/props.js';
import '../tooltip/utils/index.js';
import 'tdesign-vue-next/esm/common/style/web/components/tooltip/_index.less';
import 'tdesign-vue-next/esm/common/style/web/components/pagination/_index.less';
import './components/base/Table.js';
import './components/base/Cell.js';
import '../time-picker/index.js';
import '../time-picker/time-picker.js';
import '../time-picker/panel/time-picker-panel.js';
import '../_chunks/dep-af8a928d.js';
import '../time-picker/props.js';
import '../_chunks/dep-86ee5d0c.js';
import '../time-picker/time-range-picker.js';
import '../range-input/index.js';
import '../range-input/range-input.js';
import '../range-input/props.js';
import '../range-input/range-input-popup.js';
import '../range-input/range-input-popup-props.js';
import 'tdesign-vue-next/esm/common/style/web/components/range-input/_index.less';
import '../time-picker/time-range-picker-props.js';
import 'tdesign-vue-next/esm/common/style/web/components/time-picker/_index.less';
import './utils/index.js';
import './components/panel/ExtraContent.js';
import './components/base/Footer.js';
import './hooks/useDisableDate.js';
import './hooks/useTableData.js';

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
//# sourceMappingURL=DatePicker.js.map
