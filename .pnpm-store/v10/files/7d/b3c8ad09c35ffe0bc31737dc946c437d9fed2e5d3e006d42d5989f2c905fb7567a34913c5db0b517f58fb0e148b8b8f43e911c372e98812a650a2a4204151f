/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, computed, createVNode, mergeProps } from 'vue';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { isFunction } from 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../../../_chunks/dep-fe23be6e.js';
import { u as usePrefixClass } from '../../../_chunks/dep-9e6d8a78.js';
import '@babel/runtime/helpers/slicedToArray';
import '../../../_chunks/dep-880d05b9.js';
import TPanelContent from './PanelContent.js';
import TExtraContent from './ExtraContent.js';
import { g as getDefaultFormat, p as parseToDayjs } from '../../../_chunks/dep-4cdcccb6.js';
import { useDisableDate } from '../../hooks/useDisableDate.js';
import 'tdesign-icons-vue-next';
import 'dayjs';
import { useTableData } from '../../hooks/useTableData.js';
import { useConfig } from '../../../config-provider/hooks/useConfig.js';
import '../../../_chunks/dep-81b01cae.js';
import '../../../config-provider/utils/context.js';
import '../../../_chunks/dep-938cd955.js';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '../base/Header.js';
import '../../../pagination/index.js';
import '../../../pagination/pagination.js';
import '@babel/runtime/helpers/objectWithoutProperties';
import '../../../_chunks/dep-2accc95a.js';
import '../../../_chunks/dep-16bcfabc.js';
import '../../../_chunks/dep-fb805f69.js';
import '../../../_chunks/dep-aa34a263.js';
import '../../../_chunks/dep-3a7a2ef1.js';
import '../../../_chunks/dep-51e5a827.js';
import '../../../input-number/index.js';
import '../../../input-number/input-number.js';
import '../../../button/index.js';
import '../../../button/button.js';
import '../../../loading/index.js';
import '../../../loading/directive.js';
import '../../../loading/plugin.js';
import '../../../_chunks/dep-ee693784.js';
import '../../../loading/icon/gradient.js';
import '../../../_chunks/dep-2ea19dca.js';
import '../../../_chunks/dep-80a99546.js';
import '../../../_chunks/dep-4f8b6591.js';
import '../../../loading/props.js';
import '../../../_chunks/dep-664b8b22.js';
import '../../../button/props.js';
import '../../../_chunks/dep-f7dd3c12.js';
import '../../../_chunks/dep-d2a6e7a4.js';
import '../../../input/index.js';
import '../../../input/input.js';
import '../../../input/props.js';
import '../../../_chunks/dep-47b13687.js';
import '../../../input/hooks/useInput.js';
import '../../../form/consts/index.js';
import '../../../input/hooks/useLengthLimit.js';
import '../../../_chunks/dep-8295e674.js';
import '../../../input/hooks/useInputEventHandler.js';
import '../../../input/hooks/useInputWidth.js';
import '../../../_chunks/dep-80a77612.js';
import '../../../input/input-group.js';
import '../../../input/input-group-props.js';
import '../../../input-number/props.js';
import '../../../_chunks/dep-4d7b9152.js';
import '../../../input-number/hooks/useInputNumber.js';
import '../../../_chunks/dep-1a63d163.js';
import '../../../_chunks/dep-05f15b4e.js';
import '../../../select/index.js';
import '../../../select/select.js';
import '@babel/runtime/helpers/asyncToGenerator';
import '@babel/runtime/regenerator';
import '../../../common-components/fake-arrow.js';
import '../../../select-input/index.js';
import '../../../select-input/select-input.js';
import '../../../popup/index.js';
import '../../../popup/popup.js';
import '@popperjs/core';
import '../../../popup/container.js';
import '../../../popup/props.js';
import '../../../select-input/props.js';
import '../../../select-input/hooks/useMultiple.js';
import '../../../tag-input/index.js';
import '../../../tag-input/tag-input.js';
import '../../../tag-input/props.js';
import '../../../tag-input/hooks/useDragSorter.js';
import '../../../tag-input/hooks/useHover.js';
import '../../../tag-input/hooks/useTagScroll.js';
import '../../../tag-input/hooks/useTagList.js';
import '../../../tag/index.js';
import '../../../tag/tag.js';
import 'tinycolor2';
import '../../../tag/props.js';
import '../../../tag/check-tag.js';
import '../../../tag/check-tag-props.js';
import '../../../_chunks/dep-30c631d1.js';
import '../../../tag/check-tag-group.js';
import '../../../tag/check-tag-group-props.js';
import '../../../select-input/hooks/useOverlayInnerStyle.js';
import '../../../select-input/hooks/useSingle.js';
import '../../../select/components/select-panel.js';
import '../../../select/option.js';
import '../../../select/option-props.js';
import '../../../checkbox/index.js';
import '../../../checkbox/checkbox.js';
import '../../../checkbox/props.js';
import '../../../checkbox/consts/index.js';
import '../../../checkbox/hooks/useCheckboxLazyLoad.js';
import '../../../_chunks/dep-6264b0a7.js';
import '../../../checkbox/hooks/useKeyboardEvent.js';
import '../../../checkbox/group.js';
import '../../../checkbox/checkbox-group-props.js';
import '../../../_chunks/dep-e3ce8c8f.js';
import '../../../select/utils/index.js';
import '../../../select/consts/index.js';
import '../../../select/option-group.js';
import '../../../select/option-group-props.js';
import '../../../select/props.js';
import '../../../select/hooks/usePanelVirtualScroll.js';
import '../../../select/hooks/useKeyboardControl.js';
import '../../../select/hooks/useSelectOptions.js';
import '../../../input-adornment/index.js';
import '../../../input-adornment/input-adornment.js';
import '../../../input-adornment/props.js';
import '../../../pagination/props.js';
import '../../../pagination/hooks/useMoreAction.js';
import '../../../pagination/hooks/usePaginationClasses.js';
import '../../../pagination/pagination-mini.js';
import '../../../pagination/pagination-mini-props.js';
import '../../../tooltip/index.js';
import '../../../tooltip/tooltip.js';
import '../../../tooltip/props.js';
import '../../../tooltip/utils/index.js';
import '../base/Table.js';
import '../base/Cell.js';
import '../../../_chunks/dep-67991c5a.js';
import '@babel/runtime/helpers/objectDestructuringEmpty';
import '@babel/runtime/helpers/extends';
import '../../../_chunks/dep-bf4a6186.js';
import '../../../_chunks/dep-bcf15bc2.js';
import '../../../time-picker/index.js';
import '../../../time-picker/time-picker.js';
import '../../../time-picker/panel/time-picker-panel.js';
import '../../../_chunks/dep-af8a928d.js';
import '../../../time-picker/props.js';
import '../../../_chunks/dep-86ee5d0c.js';
import '../../../time-picker/time-range-picker.js';
import '../../../range-input/index.js';
import '../../../range-input/range-input.js';
import '../../../range-input/props.js';
import '../../../range-input/range-input-popup.js';
import '../../../range-input/range-input-popup-props.js';
import '../../../time-picker/time-range-picker-props.js';
import '../../utils/index.js';
import '../base/Footer.js';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var TRangePanel = defineComponent({
  name: "TRangePanel",
  props: {
    hoverValue: Array,
    activeIndex: Number,
    isFirstValueSelected: Boolean,
    disableDate: [Object, Array, Function],
    disableTime: Function,
    mode: {
      type: String,
      "default": "date"
    },
    format: String,
    presetsPlacement: {
      type: String,
      "default": "bottom"
    },
    value: Array,
    timePickerProps: Object,
    presets: Object,
    popupVisible: Boolean,
    enableTimePicker: Boolean,
    panelPreselection: Boolean,
    firstDayOfWeek: Number,
    year: Array,
    month: Array,
    time: Array,
    cancelRangeSelectLimit: Boolean,
    defaultTime: Array,
    onClick: Function,
    onCellClick: Function,
    onCellMouseEnter: Function,
    onCellMouseLeave: Function,
    onJumperClick: Function,
    onConfirmClick: Function,
    onPresetClick: Function,
    onYearChange: Function,
    onMonthChange: Function,
    onTimePickerChange: Function,
    needConfirm: Boolean
  },
  setup: function setup(props) {
    var COMPONENT_NAME = usePrefixClass("date-range-picker__panel");
    var _useConfig = useConfig("datePicker"),
      globalConfig = _useConfig.globalConfig;
    var format = computed(function () {
      var _getDefaultFormat;
      return (_getDefaultFormat = getDefaultFormat({
        mode: props.mode,
        format: props.format,
        enableTimePicker: props.enableTimePicker
      })) === null || _getDefaultFormat === void 0 ? void 0 : _getDefaultFormat.format;
    });
    var hidePreselection = !props.panelPreselection && props.value.length === 2;
    var disableDateOptions = computed(function () {
      return useDisableDate({
        format: format.value,
        mode: props.mode,
        disableDate: props.disableDate,
        start: props.isFirstValueSelected && props.activeIndex === 1 ? new Date(parseToDayjs(props.value[0], format.value, "start").toDate().setHours(0, 0, 0)) : void 0,
        end: props.isFirstValueSelected && props.activeIndex === 0 ? new Date(parseToDayjs(props.value[1], format.value).toDate().setHours(23, 59, 59)) : void 0
      });
    });
    var startTableData = computed(function () {
      var disableDate = isFunction(props.disableDate) ? props.disableDate({
        partial: "start",
        value: props.value[0]
      }) : disableDateOptions.value.disableDate;
      return useTableData(_objectSpread(_objectSpread({
        isRange: true,
        start: props.value[0] ? parseToDayjs(props.value[0], format.value).toDate() : void 0,
        end: props.value[1] ? parseToDayjs(props.value[1], format.value).toDate() : void 0,
        hoverStart: !hidePreselection && props.hoverValue[0] ? parseToDayjs(props.hoverValue[0], format.value).toDate() : void 0,
        hoverEnd: !hidePreselection && props.hoverValue[1] ? parseToDayjs(props.hoverValue[1], format.value).toDate() : void 0,
        year: props.year[0],
        month: props.month[0],
        mode: props.mode,
        firstDayOfWeek: props.firstDayOfWeek || globalConfig.value.firstDayOfWeek
      }, disableDateOptions.value), {}, {
        disableDate: disableDate,
        cancelRangeSelectLimit: props.cancelRangeSelectLimit
      }));
    });
    var endTableData = computed(function () {
      var disableDate = isFunction(props.disableDate) ? props.disableDate({
        partial: "end",
        value: props.value
      }) : disableDateOptions.value.disableDate;
      return useTableData(_objectSpread(_objectSpread({
        isRange: true,
        start: props.value[0] ? parseToDayjs(props.value[0], format.value).toDate() : void 0,
        end: props.value[1] ? parseToDayjs(props.value[1], format.value).toDate() : void 0,
        hoverStart: !hidePreselection && props.hoverValue[0] ? parseToDayjs(props.hoverValue[0], format.value).toDate() : void 0,
        hoverEnd: !hidePreselection && props.hoverValue[1] ? parseToDayjs(props.hoverValue[1], format.value).toDate() : void 0,
        year: props.mode === "year" && props.year[1] - props.year[0] <= 9 ? props.year[1] + 9 : props.year[1],
        month: props.month[1],
        mode: props.mode,
        firstDayOfWeek: props.firstDayOfWeek || globalConfig.value.firstDayOfWeek
      }, disableDateOptions.value), {}, {
        disableDate: disableDate,
        cancelRangeSelectLimit: props.cancelRangeSelectLimit
      }));
    });
    var panelContentProps = computed(function () {
      return {
        format: format.value,
        mode: props.mode,
        firstDayOfWeek: props.firstDayOfWeek || globalConfig.value.firstDayOfWeek,
        internalYear: props.year,
        popupVisible: props.popupVisible,
        enableTimePicker: props.enableTimePicker,
        timePickerProps: props.timePickerProps,
        onMonthChange: props.onMonthChange,
        onYearChange: props.onYearChange,
        onJumperClick: props.onJumperClick,
        onCellClick: props.onCellClick,
        onCellMouseEnter: props.onCellMouseEnter,
        onCellMouseLeave: props.onCellMouseLeave,
        onTimePickerChange: props.onTimePickerChange,
        disableTime: props.disableTime,
        defaultTime: props.defaultTime
      };
    });
    return function () {
      return createVNode("div", {
        "class": [COMPONENT_NAME.value, _defineProperty({}, "".concat(COMPONENT_NAME.value, "--direction-row"), ["left", "right"].includes(props.presetsPlacement))],
        "onClick": function onClick(e) {
          var _props$onClick;
          return (_props$onClick = props.onClick) === null || _props$onClick === void 0 ? void 0 : _props$onClick.call(props, {
            e: e
          });
        }
      }, [["top", "left"].includes(props.presetsPlacement) ? createVNode(TExtraContent, {
        "presets": props.presets,
        "selectedValue": props.value[props.activeIndex],
        "enableTimePicker": props.enableTimePicker,
        "onPresetClick": props.onPresetClick,
        "onConfirmClick": props.onConfirmClick,
        "presetsPlacement": props.presetsPlacement,
        "needConfirm": props.needConfirm
      }, null) : null, createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "-content-wrapper")
      }, [!props.enableTimePicker ? [createVNode(TPanelContent, mergeProps({
        "key": "startPanel",
        "partial": "start",
        "year": props.year[0],
        "month": props.month[0],
        "time": props.time[props.activeIndex],
        "value": props.value,
        "tableData": startTableData.value
      }, panelContentProps.value), null), createVNode(TPanelContent, mergeProps({
        "key": "endPanel",
        "partial": "end",
        "year": props.year[1],
        "month": props.month[1],
        "time": props.time[props.activeIndex],
        "value": props.value,
        "tableData": endTableData.value
      }, panelContentProps.value), null)] : createVNode(TPanelContent, mergeProps({
        "key": "start",
        "partial": props.activeIndex ? "end" : "start",
        "year": props.activeIndex ? props.year[1] : props.year[0],
        "month": props.activeIndex ? props.month[1] : props.month[0],
        "time": props.activeIndex ? props.time[1] : props.time[0],
        "value": props.value,
        "tableData": props.activeIndex ? endTableData.value : startTableData.value
      }, panelContentProps.value), null)]), ["bottom", "right"].includes(props.presetsPlacement) ? createVNode(TExtraContent, {
        "presets": props.presets,
        "selectedValue": props.value[props.activeIndex],
        "enableTimePicker": props.enableTimePicker,
        "onPresetClick": props.onPresetClick,
        "onConfirmClick": props.onConfirmClick,
        "presetsPlacement": props.presetsPlacement,
        "needConfirm": props.needConfirm
      }, null) : null]);
    };
  }
});

export { TRangePanel as default };
//# sourceMappingURL=RangePanel.js.map
