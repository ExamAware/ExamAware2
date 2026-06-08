/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, computed, watch, createVNode, mergeProps, isVNode } from 'vue';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import dayjs from 'dayjs';
import { isFunction, isArray, remove } from 'lodash-es';
import props from './props.js';
import { createMonthCellsData, createYearCellsData } from './utils/index.js';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-fe23be6e.js';
import { a as useContent } from '../_chunks/dep-2accc95a.js';
import { useConfig } from '../config-provider/hooks/useConfig.js';
import '../_chunks/dep-880d05b9.js';
import { useState } from './hooks/useState.js';
import { useCalendarClass } from './hooks/useCalendarClass.js';
import { userController } from './hooks/useController.js';
import { useColHeaders } from './hooks/useColHeaders.js';
import { LAST_MONTH_OF_YEAR, DEFAULT_YEAR_CELL_NUMINROW, MIN_YEAR, FIRST_MONTH_OF_YEAR, COMPONENT_NAME } from './consts/index.js';
import { Select } from '../select/index.js';
import { RadioGroup, RadioButton } from '../radio/index.js';
import { Button } from '../button/index.js';
import { CheckTag } from '../tag/index.js';
import CalendarCellItem from './calendar-cell.js';
import '../_chunks/dep-81b01cae.js';
import '../_chunks/dep-16bcfabc.js';
import '../_chunks/dep-fb805f69.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '../_chunks/dep-9e6d8a78.js';
import '../select/select.js';
import '@babel/runtime/helpers/objectWithoutProperties';
import '@babel/runtime/helpers/asyncToGenerator';
import '@babel/runtime/regenerator';
import '../common-components/fake-arrow.js';
import '../select-input/index.js';
import '../select-input/select-input.js';
import '../popup/index.js';
import '../popup/popup.js';
import '@popperjs/core';
import '../_chunks/dep-4f8b6591.js';
import '../_chunks/dep-2ea19dca.js';
import '../_chunks/dep-51e5a827.js';
import '../popup/container.js';
import '../popup/props.js';
import '../_chunks/dep-80a77612.js';
import '../_chunks/dep-664b8b22.js';
import '../select-input/props.js';
import '../select-input/hooks/useMultiple.js';
import '../tag-input/index.js';
import '../tag-input/tag-input.js';
import 'tdesign-icons-vue-next';
import '../input/index.js';
import '../input/input.js';
import '../input/props.js';
import '../_chunks/dep-f7dd3c12.js';
import '../_chunks/dep-3a7a2ef1.js';
import '../_chunks/dep-47b13687.js';
import '../input/hooks/useInput.js';
import '../form/consts/index.js';
import '../input/hooks/useLengthLimit.js';
import '../_chunks/dep-8295e674.js';
import '../_chunks/dep-80a99546.js';
import '../input/hooks/useInputEventHandler.js';
import '../input/hooks/useInputWidth.js';
import '../input/input-group.js';
import '../input/input-group-props.js';
import '../tag-input/props.js';
import '../_chunks/dep-aa34a263.js';
import '../_chunks/dep-4d7b9152.js';
import '../tag-input/hooks/useDragSorter.js';
import '../tag-input/hooks/useHover.js';
import '../tag-input/hooks/useTagScroll.js';
import '../tag-input/hooks/useTagList.js';
import '../tag/tag.js';
import 'tinycolor2';
import '../tag/props.js';
import '../tag/check-tag.js';
import '../tag/check-tag-props.js';
import '../_chunks/dep-30c631d1.js';
import '../tag/check-tag-group.js';
import '../tag/check-tag-group-props.js';
import '../loading/index.js';
import '../loading/directive.js';
import '../loading/plugin.js';
import '../_chunks/dep-ee693784.js';
import '../loading/icon/gradient.js';
import '../loading/props.js';
import '../select-input/hooks/useOverlayInnerStyle.js';
import '../select-input/hooks/useSingle.js';
import '../select/components/select-panel.js';
import '../select/option.js';
import '../select/option-props.js';
import '../checkbox/index.js';
import '../checkbox/checkbox.js';
import '../checkbox/props.js';
import '../_chunks/dep-d2a6e7a4.js';
import '../checkbox/consts/index.js';
import '../checkbox/hooks/useCheckboxLazyLoad.js';
import '../_chunks/dep-6264b0a7.js';
import '../checkbox/hooks/useKeyboardEvent.js';
import '../checkbox/group.js';
import '../checkbox/checkbox-group-props.js';
import '../_chunks/dep-e3ce8c8f.js';
import '../select/utils/index.js';
import '../select/consts/index.js';
import '../select/option-group.js';
import '../select/option-group-props.js';
import '../select/props.js';
import '../select/hooks/usePanelVirtualScroll.js';
import '../select/hooks/useKeyboardControl.js';
import '../select/hooks/useSelectOptions.js';
import '../radio/radio.js';
import '../radio/props.js';
import '../radio/consts/index.js';
import '../radio/group.js';
import '../radio/radio-group-props.js';
import '../radio/radio-button.js';
import '../radio/hooks/useKeyboard.js';
import '../watermark/hooks/index.js';
import '../button/button.js';
import '../button/props.js';

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
//# sourceMappingURL=calendar.js.map
