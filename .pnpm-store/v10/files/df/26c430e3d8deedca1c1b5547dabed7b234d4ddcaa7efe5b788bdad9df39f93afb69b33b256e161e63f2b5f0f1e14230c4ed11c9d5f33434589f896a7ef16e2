/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { isVNode, defineComponent, computed, watch, createVNode, mergeProps } from 'vue';
import { _ as _defineProperty } from '../_chunks/dep-1dacc319.mjs';
import { _ as _slicedToArray } from '../_chunks/dep-9003fde5.mjs';
import { d as dayjs } from '../_chunks/dep-ad588525.mjs';
import { isFunction, remove, isArray } from 'lodash-es';
import props from './props.mjs';
import { createMonthCellsData, createYearCellsData } from './utils/index.mjs';
import { b as useContent } from '../_chunks/dep-7673347f.mjs';
import './hooks/index.mjs';
import { COMPONENT_NAME, MIN_YEAR, FIRST_MONTH_OF_YEAR, LAST_MONTH_OF_YEAR, DEFAULT_YEAR_CELL_NUMINROW } from './consts/index.mjs';
import { Select } from '../select/index.mjs';
import { RadioGroup, RadioButton } from '../radio/index.mjs';
import { Button } from '../button/index.mjs';
import { CheckTag } from '../tag/index.mjs';
import CalendarCellItem from './calendar-cell.mjs';
import { useConfig } from '../config-provider/hooks/useConfig.mjs';
import { useState } from './hooks/useState.mjs';
import { useCalendarClass } from './hooks/useCalendarClass.mjs';
import { useColHeaders } from './hooks/useColHeaders.mjs';
import { userController } from './hooks/useController.mjs';
import '../_chunks/dep-257428bc.mjs';
import '../_chunks/dep-9f459d8b.mjs';
import '../_chunks/dep-fe644854.mjs';
import '../_chunks/dep-00b4e06a.mjs';
import '../_chunks/dep-51a43106.mjs';
import '../_chunks/dep-22ebd6af.mjs';
import '../_chunks/dep-cdd448ec.mjs';
import '../_chunks/dep-97ecacde.mjs';
import '../config-provider/utils/context.mjs';
import '../_chunks/dep-a4c09318.mjs';
import '../_chunks/dep-ffb85102.mjs';
import '../_chunks/dep-84fd47b3.mjs';
import '../_chunks/dep-d36c4a3f.mjs';
import '../select/select.mjs';
import '../_chunks/dep-0dcc778a.mjs';
import '../_chunks/dep-88e5a7b0.mjs';
import '../common-components/fake-arrow.mjs';
import '../select-input/index.mjs';
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
import '../tag-input/index.mjs';
import '../tag-input/tag-input.mjs';
import 'tdesign-icons-vue-next';
import '../input/index.mjs';
import '../input/input.mjs';
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
import '../tag-input/props.mjs';
import '../tag-input/hooks/index.mjs';
import '../tag-input/hooks/useDragSorter.mjs';
import '../tag-input/hooks/useHover.mjs';
import '../tag-input/hooks/useTagScroll.mjs';
import '../tag-input/hooks/useTagList.mjs';
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
import '../radio/radio.mjs';
import '../radio/props.mjs';
import '../radio/consts/index.mjs';
import '../radio/group.mjs';
import '../radio/radio-group-props.mjs';
import '../radio/radio-button.mjs';
import '../radio/hooks/index.mjs';
import '../radio/hooks/useKeyboard.mjs';
import '../watermark/hooks/index.mjs';
import '../button/button.mjs';
import '../button/props.mjs';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !isVNode(s);
}
var _Calendar = defineComponent({
  name: "TCalendar",
  props: props,
  setup: function setup(props2, _ref) {
    var slots = _ref.slots;
    var renderContent = useContent();
    var _useConfig = useConfig(COMPONENT_NAME),
      t = _useConfig.t,
      globalConfig = _useConfig.globalConfig;
    var _useState = useState(props2),
      state = _useState.state,
      toToday = _useState.toToday,
      checkDayVisible = _useState.checkDayVisible;
    var cls = useCalendarClass(props2, state);
    var _useColHeaders = useColHeaders(props2, state),
      cellColHeaders = _useColHeaders.cellColHeaders;
    var controller = userController(props2, state);
    var rangeFromTo = computed(function () {
      if (!props2.range || props2.range.length < 2) {
        return null;
      }
      var _props2$range = _slicedToArray(props2.range, 2),
        v1 = _props2$range[0],
        v2 = _props2$range[1];
      if (dayjs(v1).isBefore(dayjs(v2))) {
        return {
          from: v1,
          to: v2
        };
      }
      return {
        from: v2,
        to: v1
      };
    });
    function checkMonthAndYearSelectedDisabled(year, month) {
      var disabled = false;
      if (rangeFromTo.value && rangeFromTo.value.from && rangeFromTo.value.to) {
        var beginYear = dayjs(rangeFromTo.value.from).year();
        var endYear = dayjs(rangeFromTo.value.to).year();
        var beginMon = parseInt(dayjs(rangeFromTo.value.from).format("M"), 10);
        var endMon = parseInt(dayjs(rangeFromTo.value.to).format("M"), 10);
        if (beginYear === endYear) {
          disabled = month < beginMon || month > endMon;
        } else if (year === beginYear) {
          disabled = month < beginMon;
        } else if (year === endYear) {
          disabled = month > endMon;
        }
      }
      return disabled;
    }
    function adjustMonth() {
      var _rangeFromTo$value, _rangeFromTo$value2;
      if ((_rangeFromTo$value = rangeFromTo.value) !== null && _rangeFromTo$value !== void 0 && _rangeFromTo$value.from && (_rangeFromTo$value2 = rangeFromTo.value) !== null && _rangeFromTo$value2 !== void 0 && _rangeFromTo$value2.to) {
        var beginYear = dayjs(rangeFromTo.value.from).year();
        var endYear = dayjs(rangeFromTo.value.to).year();
        var beginMon = parseInt(dayjs(rangeFromTo.value.from).format("M"), 10);
        if (checkMonthAndYearSelectedDisabled(state.curSelectedYear, state.curSelectedMonth)) {
          state.curSelectedMonth = state.curSelectedYear === beginYear ? beginMon : state.curSelectedYear === endYear ? 1 : state.curSelectedMonth;
        }
      }
    }
    watch(function () {
      return {
        year: "".concat(state.curSelectedYear),
        month: "".concat(state.curSelectedMonth)
      };
    }, function (v) {
      isFunction(props2.onMonthChange) && props2.onMonthChange(_objectSpread({}, v));
      controller.emitControllerChange();
    });
    var dateSelect = {
      yearSelectOptionList: computed(function () {
        var re = [];
        var begin = state.curSelectedYear - 10;
        var end = state.curSelectedYear + 10;
        if (rangeFromTo.value && rangeFromTo.value.from && rangeFromTo.value.to) {
          begin = dayjs(rangeFromTo.value.from).year();
          end = dayjs(rangeFromTo.value.to).year();
        }
        if (begin < MIN_YEAR) {
          begin = MIN_YEAR;
        }
        if (end < MIN_YEAR) {
          end = MIN_YEAR;
        }
        for (var i = begin; i <= end; i++) {
          re.push({
            value: i,
            label: t(globalConfig.value.yearSelection, {
              year: i
            }),
            disabled: false
          });
        }
        return re;
      }),
      isYearSelectVisible: computed(function () {
        return controller.checkControllerVisible("year");
      }),
      isYearSelectDisabled: computed(function () {
        return controller.checkControllerDisabled("year", "selectProps");
      }),
      monthSelectOptionList: computed(function () {
        adjustMonth();
        var re = [];
        for (var i = FIRST_MONTH_OF_YEAR; i <= LAST_MONTH_OF_YEAR; i++) {
          var disabled = checkMonthAndYearSelectedDisabled(state.curSelectedYear, i);
          re.push({
            value: i,
            label: t(globalConfig.value.monthSelection, {
              month: i
            }),
            disabled: disabled
          });
        }
        return re;
      }),
      isMonthSelectVisible: computed(function () {
        return state.curSelectedMode === "month" && controller.checkControllerVisible("month");
      }),
      isMonthSelectDisabled: computed(function () {
        return controller.checkControllerDisabled("month", "selectProps");
      })
    };
    var modeSelect = {
      optionList: computed(function () {
        return [{
          value: "month",
          label: t(globalConfig.value.monthRadio)
        }, {
          value: "year",
          label: t(globalConfig.value.yearRadio)
        }];
      }),
      isVisible: computed(function () {
        return controller.checkControllerVisible("mode");
      }),
      isDisabled: computed(function () {
        return controller.checkControllerDisabled("mode", "radioGroupProps");
      })
    };
    var weekendBtn = {
      text: computed(function () {
        return state.isShowWeekend ? t(globalConfig.value.hideWeekend) : t(globalConfig.value.showWeekend);
      }),
      vBind: computed(function () {
        var c = controller.configData.value.weekend;
        return state.isShowWeekend ? c.hideWeekendButtonProps : c.showWeekendButtonProps;
      }),
      isVisible: computed(function () {
        return props2.theme === "full" && controller.checkControllerVisible("current") && controller.checkControllerVisible("weekend");
      }),
      isDisabled: computed(function () {
        var p = state.isShowWeekend ? "hideWeekendButtonProps" : "showWeekendButtonProps";
        return controller.checkControllerDisabled("weekend", p);
      })
    };
    var currentBtn = {
      text: computed(function () {
        return state.curSelectedMode === "month" ? t(globalConfig.value.today) : t(globalConfig.value.thisMonth);
      }),
      vBind: computed(function () {
        var c = controller.configData.value.current;
        return state.curSelectedMode === "month" ? c.currentDayButtonProps : c.currentMonthButtonProps;
      }),
      isVisible: computed(function () {
        return props2.theme === "full" && controller.checkControllerVisible("current");
      }),
      isDisabled: computed(function () {
        var p = state.curSelectedMode === "month" ? "currentDayButtonProps" : "currentMonthButtonProps";
        return controller.checkControllerDisabled("current", p);
      })
    };
    var renderControl = function renderControl() {
      var _slot;
      return createVNode("div", {
        "class": cls.control.value
      }, [createVNode("div", {
        "class": cls.title.value
      }, [renderContent("head", void 0, {
        params: _objectSpread({}, controller.options.value)
      })]), createVNode("div", {
        "class": cls.controlSection.value
      }, [dateSelect.isYearSelectVisible.value && createVNode("div", {
        "class": cls.controlSectionCell.value
      }, [createVNode(Select, mergeProps({
        "modelValue": state.curSelectedYear,
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return state.curSelectedYear = $event;
        },
        "size": state.controlSize,
        "autoWidth": true
      }, controller.configData.value.year.selectProps, {
        "disabled": dateSelect.isYearSelectDisabled.value,
        "options": dateSelect.yearSelectOptionList.value
      }), null)]), dateSelect.isMonthSelectVisible.value && createVNode("div", {
        "class": cls.controlSectionCell.value
      }, [createVNode(Select, mergeProps({
        "autoWidth": true,
        "modelValue": state.curSelectedMonth,
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return state.curSelectedMonth = $event;
        },
        "size": state.controlSize
      }, controller.configData.value.month.selectProps, {
        "disabled": dateSelect.isMonthSelectDisabled.value,
        "options": dateSelect.monthSelectOptionList.value
      }), null)]), modeSelect.isVisible.value && createVNode("div", {
        "class": cls.controlSectionCell.value,
        "style": "height: auto"
      }, [createVNode(RadioGroup, mergeProps({
        "modelValue": state.curSelectedMode,
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return state.curSelectedMode = $event;
        },
        "variant": "default-filled",
        "size": state.controlSize
      }, controller.configData.value.mode.radioGroupProps, {
        "disabled": modeSelect.isDisabled.value,
        "onChange": controller.emitControllerChange
      }), _isSlot(_slot = modeSelect.optionList.value.map(function (item) {
        return createVNode(RadioButton, {
          "key": item.value,
          "value": item.value
        }, {
          "default": function _default() {
            return [item.label];
          }
        });
      })) ? _slot : {
        "default": function _default() {
          return [_slot];
        }
      })]), weekendBtn.isVisible.value && createVNode("div", {
        "class": cls.controlSectionCell.value
      }, [createVNode(CheckTag, mergeProps({
        "class": cls.controlTag.value,
        "theme": state.isShowWeekend ? "default" : "primary",
        "size": "large"
      }, weekendBtn.vBind.value, {
        "disabled": weekendBtn.isDisabled.value,
        "onClick": function onClick() {
          state.isShowWeekend = !state.isShowWeekend;
          controller.emitControllerChange();
        }
      }), {
        "default": function _default() {
          return [weekendBtn.text.value];
        }
      })]), currentBtn.isVisible.value && createVNode("div", {
        "class": cls.controlSectionCell.value
      }, [createVNode(Button, mergeProps({
        "size": state.controlSize
      }, currentBtn.vBind.value, {
        "disabled": currentBtn.isDisabled.value,
        "onClick": function onClick() {
          toToday();
        }
      }), {
        "default": function _default() {
          return [currentBtn.text.value];
        }
      })])])]);
    };
    var cellClickEmit = function cellClickEmit(eventPropsName, e, cellData) {
      if (isFunction(props2[eventPropsName])) {
        var options = {
          cell: _objectSpread(_objectSpread({}, cellData), controller.options.value),
          e: e
        };
        props2[eventPropsName](options);
      }
    };
    var clickCell = function clickCell(e, cellData) {
      var d = dayjs(cellData.date);
      if (props2.multiple) {
        if (state.curDateList.find(function (item) {
          return item.isSame(d);
        })) {
          state.curDateList = remove(state.curDateList, function (item) {
            return !item.isSame(d);
          });
        } else {
          state.curDateList.push(d);
        }
      } else {
        state.curDate = d;
      }
      cellClickEmit("onCellClick", e, cellData);
    };
    var doubleClickCell = function doubleClickCell(e, cellData) {
      cellClickEmit("onCellDoubleClick", e, cellData);
    };
    var rightClickCell = function rightClickCell(e, cellData) {
      if (props2.preventCellContextmenu) {
        e.preventDefault();
      }
      cellClickEmit("onCellRightClick", e, cellData);
    };
    var monthCellsData = computed(function () {
      var daysArr = createMonthCellsData(props2, state);
      return daysArr;
    });
    var renderMonthBody = function renderMonthBody() {
      return createVNode("table", {
        "class": cls.table.value
      }, [createVNode("thead", {
        "class": cls.tableHead.value
      }, [createVNode("tr", {
        "class": cls.tableHeadRow.value
      }, [cellColHeaders.value.map(function (item, index) {
        return checkDayVisible(item.num) && createVNode("th", {
          "class": cls.tableHeadCell.value
        }, [isArray(props2.week) ? props2.week[index] : renderContent("week", void 0, {
          defaultNode: createVNode("span", null, [item.display]),
          params: {
            day: item.num
          }
        })]);
      })])]), createVNode("tbody", {
        "class": cls.tableBody.value
      }, [monthCellsData.value.map(function (week, weekIndex) {
        return createVNode("tr", {
          "class": cls.tableBodyRow.value
        }, [week.map(function (item, itemIndex) {
          return (state.isShowWeekend || item.day < 6) && createVNode(CalendarCellItem, {
            "key": "d-".concat(weekIndex, "-").concat(itemIndex),
            "item": item,
            "theme": props2.theme,
            "t": t,
            "global": globalConfig.value,
            "cell": props2.cell,
            "cellAppend": props2.cellAppend,
            "fillWithZero": props2.fillWithZero,
            "onClick": function onClick(e) {
              return clickCell(e, item);
            },
            "onDblclick": function onDblclick(e) {
              return doubleClickCell(e, item);
            },
            "onRightclick": function onRightclick(e) {
              return rightClickCell(e, item);
            }
          }, _objectSpread({}, slots));
        })]);
      })])]);
    };
    var yearCellsData = computed(function () {
      var re = [];
      var monthsArr = createYearCellsData(props2, state);
      var rowCount = Math.ceil(monthsArr.length / DEFAULT_YEAR_CELL_NUMINROW);
      var index = 0;
      for (var i = 1; i <= rowCount; i++) {
        var row = [];
        for (var j = 1; j <= DEFAULT_YEAR_CELL_NUMINROW; j++) {
          row.push(monthsArr[index]);
          index += 1;
        }
        re.push(row);
      }
      return re;
    });
    var renderYearBody = function renderYearBody() {
      return createVNode("table", {
        "class": cls.table.value
      }, [createVNode("tbody", {
        "class": cls.tableBody.value
      }, [yearCellsData.value.map(function (cell, cellIndex) {
        return createVNode("tr", {
          "class": cls.tableBodyRow.value
        }, [cell.map(function (item, itemIndex) {
          return createVNode(CalendarCellItem, {
            "key": "m-".concat(cellIndex, "-").concat(itemIndex),
            "item": item,
            "theme": props2.theme,
            "t": t,
            "global": globalConfig.value,
            "cell": props2.cell,
            "cellAppend": props2.cellAppend,
            "fillWithZero": props2.fillWithZero,
            "onClick": function onClick(e) {
              return clickCell(e, item);
            },
            "onDblclick": function onDblclick(e) {
              return doubleClickCell(e, item);
            },
            "onRightclick": function onRightclick(e) {
              return rightClickCell(e, item);
            }
          }, _objectSpread({}, slots));
        })]);
      })])]);
    };
    return function () {
      return createVNode("div", {
        "class": cls.body.value
      }, [controller.visible.value && renderControl(), createVNode("div", {
        "class": cls.panel.value
      }, [state.curSelectedMode === "month" ? renderMonthBody() : renderYearBody()])]);
    };
  }
});

export { _Calendar as default };
//# sourceMappingURL=calendar.mjs.map
