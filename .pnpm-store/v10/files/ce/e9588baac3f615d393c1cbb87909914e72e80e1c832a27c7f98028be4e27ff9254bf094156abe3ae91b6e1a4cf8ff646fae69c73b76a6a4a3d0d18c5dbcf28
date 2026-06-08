/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, computed, createVNode } from 'vue';
import { _ as _defineProperty } from '../../../_chunks/dep-1dacc319.mjs';
import { u as usePrefixClass } from '../../../_chunks/dep-7673347f.mjs';
import TPanelContent from './PanelContent.mjs';
import TExtraContent from './ExtraContent.mjs';
import { g as getDefaultFormat, p as parseToDayjs } from '../../../_chunks/dep-c0b36067.mjs';
import '../../hooks/index.mjs';
import { useConfig } from '../../../config-provider/hooks/useConfig.mjs';
import { useDisableDate } from '../../hooks/useDisableDate.mjs';
import { useTableData } from '../../hooks/useTableData.mjs';
import '../../../_chunks/dep-257428bc.mjs';
import 'lodash-es';
import '../../../_chunks/dep-00b4e06a.mjs';
import '../../../_chunks/dep-9f459d8b.mjs';
import '../../../_chunks/dep-51a43106.mjs';
import '../../../_chunks/dep-fe644854.mjs';
import '../../../_chunks/dep-22ebd6af.mjs';
import '../../../_chunks/dep-9003fde5.mjs';
import '../../../_chunks/dep-cdd448ec.mjs';
import '../../../_chunks/dep-97ecacde.mjs';
import '../../../config-provider/utils/context.mjs';
import '../../../_chunks/dep-a4c09318.mjs';
import '../../../_chunks/dep-ffb85102.mjs';
import '../../../_chunks/dep-ad588525.mjs';
import '../../../_chunks/dep-84fd47b3.mjs';
import '../../../_chunks/dep-d36c4a3f.mjs';
import '../base/Header.mjs';
import '../../../pagination/index.mjs';
import '../../../pagination/pagination.mjs';
import '../../../_chunks/dep-0dcc778a.mjs';
import 'tdesign-icons-vue-next';
import '../../../input-number/index.mjs';
import '../../../input-number/input-number.mjs';
import '../../../button/index.mjs';
import '../../../button/button.mjs';
import '../../../loading/index.mjs';
import '../../../loading/directive.mjs';
import '../../../loading/plugin.mjs';
import '../../../loading/loading.mjs';
import '../../../loading/icon/gradient.mjs';
import '../../../_chunks/dep-0cde7579.mjs';
import '../../../loading/props.mjs';
import './style/css.mjs';
import '../../../button/props.mjs';
import '../../../input/index.mjs';
import '../../../input/input.mjs';
import '../../../input/props.mjs';
import '../../../input/hooks/index.mjs';
import '../../../input/hooks/useInput.mjs';
import '../../../form/consts/index.mjs';
import '../../../input/hooks/useLengthLimit.mjs';
import '../../../_chunks/dep-6d2705e1.mjs';
import '../../../input/hooks/useInputEventHandler.mjs';
import '../../../input/hooks/useInputWidth.mjs';
import '../../../input/input-group.mjs';
import '../../../input/input-group-props.mjs';
import '../../../input-number/props.mjs';
import '../../../input-number/hooks/useInputNumber.mjs';
import '../../../_chunks/dep-29754cb4.mjs';
import '../../../_chunks/dep-db81c302.mjs';
import '../../../select/index.mjs';
import '../../../select/select.mjs';
import '../../../_chunks/dep-88e5a7b0.mjs';
import '../../../common-components/fake-arrow.mjs';
import '../../../select-input/index.mjs';
import '../../../select-input/select-input.mjs';
import '../../../popup/index.mjs';
import '../../../popup/popup.mjs';
import '@popperjs/core';
import '../../../popup/container.mjs';
import '../../../popup/props.mjs';
import '../../../select-input/props.mjs';
import '../../../select-input/hooks/index.mjs';
import '../../../select-input/hooks/useMultiple.mjs';
import '../../../tag-input/index.mjs';
import '../../../tag-input/tag-input.mjs';
import '../../../tag-input/props.mjs';
import '../../../tag-input/hooks/index.mjs';
import '../../../tag-input/hooks/useDragSorter.mjs';
import '../../../tag-input/hooks/useHover.mjs';
import '../../../tag-input/hooks/useTagScroll.mjs';
import '../../../tag-input/hooks/useTagList.mjs';
import '../../../tag/index.mjs';
import '../../../tag/tag.mjs';
import '../../../_chunks/dep-b31d8258.mjs';
import '../../../tag/props.mjs';
import '../../../tag/check-tag.mjs';
import '../../../tag/check-tag-props.mjs';
import '../../../tag/check-tag-group.mjs';
import '../../../tag/check-tag-group-props.mjs';
import '../../../select-input/hooks/useOverlayInnerStyle.mjs';
import '../../../select-input/hooks/useSingle.mjs';
import '../../../select/components/select-panel.mjs';
import '../../../select/option.mjs';
import '../../../select/option-props.mjs';
import '../../../checkbox/index.mjs';
import '../../../checkbox/checkbox.mjs';
import '../../../checkbox/props.mjs';
import '../../../checkbox/consts/index.mjs';
import '../../../checkbox/hooks/useCheckboxLazyLoad.mjs';
import '../../../checkbox/hooks/useKeyboardEvent.mjs';
import '../../../checkbox/group.mjs';
import '../../../checkbox/checkbox-group-props.mjs';
import '../../../select/utils/index.mjs';
import '../../../select/consts/index.mjs';
import '../../../select/option-group.mjs';
import '../../../select/option-group-props.mjs';
import '../../../select/props.mjs';
import '../../../select/hooks/index.mjs';
import '../../../select/hooks/useKeyboardControl.mjs';
import '../../../select/hooks/usePanelVirtualScroll.mjs';
import '../../../select/hooks/useSelectOptions.mjs';
import '../../../input-adornment/index.mjs';
import '../../../input-adornment/input-adornment.mjs';
import '../../../input-adornment/props.mjs';
import '../../../pagination/props.mjs';
import '../../../pagination/hooks/index.mjs';
import '../../../pagination/hooks/useMoreAction.mjs';
import '../../../pagination/hooks/usePaginationClasses.mjs';
import '../../../pagination/pagination-mini.mjs';
import '../../../pagination/pagination-mini-props.mjs';
import '../../../tooltip/index.mjs';
import '../../../tooltip/tooltip.mjs';
import '../../../tooltip/props.mjs';
import '../../../tooltip/utils/index.mjs';
import '../base/Table.mjs';
import '../base/Cell.mjs';
import '../../../_chunks/dep-2fe12221.mjs';
import '../../../_chunks/dep-63305cb0.mjs';
import '../../../_chunks/dep-83649365.mjs';
import '../../../time-picker/index.mjs';
import '../../../time-picker/time-picker.mjs';
import '../../../time-picker/panel/time-picker-panel.mjs';
import '../../../_chunks/dep-b1bc7bcc.mjs';
import '../../../time-picker/props.mjs';
import '../../../_chunks/dep-928b1423.mjs';
import '../../../time-picker/time-range-picker.mjs';
import '../../../range-input/index.mjs';
import '../../../range-input/range-input.mjs';
import '../../../range-input/props.mjs';
import '../../../range-input/range-input-popup.mjs';
import '../../../range-input/range-input-popup-props.mjs';
import '../../../time-picker/time-range-picker-props.mjs';
import '../../utils/index.mjs';
import '../base/Footer.mjs';
import '../../hooks/useRange.mjs';
import '../../hooks/useRangeValue.mjs';
import '../../hooks/useSingle.mjs';
import '../../hooks/useSingleValue.mjs';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var TSinglePanel = defineComponent({
  name: "TSinglePanel",
  props: {
    disableDate: [Object, Array, Function],
    mode: {
      type: String,
      "default": "date"
    },
    format: String,
    presetsPlacement: {
      type: String,
      "default": "bottom"
    },
    value: [String, Number, Array, Date],
    timePickerProps: Object,
    presets: Object,
    enableTimePicker: Boolean,
    firstDayOfWeek: Number,
    year: Number,
    month: Number,
    time: String,
    popupVisible: Boolean,
    multiple: Boolean,
    needConfirm: Boolean,
    defaultTime: [String, Array],
    onPanelClick: Function,
    onCellClick: Function,
    onCellMouseEnter: Function,
    onCellMouseLeave: Function,
    onJumperClick: Function,
    onConfirmClick: Function,
    onPresetClick: Function,
    onYearChange: Function,
    onMonthChange: Function,
    onTimePickerChange: Function
  },
  setup: function setup(props) {
    var COMPONENT_NAME = usePrefixClass("date-picker__panel");
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
    var disableDateOptions = computed(function () {
      return useDisableDate({
        format: format.value,
        mode: props.mode,
        disableDate: props.disableDate
      });
    });
    var tableData = computed(function () {
      return useTableData(_objectSpread({
        year: props.year,
        month: props.month,
        mode: props.mode,
        start: props.value ? parseToDayjs(props.multiple ? props.value[0] : props.value, format.value).toDate() : void 0,
        firstDayOfWeek: props.firstDayOfWeek || globalConfig.value.firstDayOfWeek,
        multiple: props.multiple,
        value: props.value
      }, disableDateOptions.value));
    });
    var panelContentProps = computed(function () {
      return {
        format: format.value,
        value: props.value,
        mode: props.mode,
        year: props.year,
        month: props.month,
        firstDayOfWeek: props.firstDayOfWeek || globalConfig.value.firstDayOfWeek,
        tableData: tableData.value,
        popupVisible: props.popupVisible,
        multiple: props.multiple,
        enableTimePicker: props.enableTimePicker,
        timePickerProps: props.timePickerProps,
        time: props.time,
        onMonthChange: props.onMonthChange,
        onYearChange: props.onYearChange,
        onJumperClick: props.onJumperClick,
        onCellClick: props.onCellClick,
        onCellMouseEnter: props.onCellMouseEnter,
        onCellMouseLeave: props.onCellMouseLeave,
        onTimePickerChange: props.onTimePickerChange,
        defaultTime: props.defaultTime
      };
    });
    var extraProps = computed(function () {
      return {
        presets: props.presets,
        enableTimePicker: props.enableTimePicker,
        presetsPlacement: props.presetsPlacement,
        onPresetClick: props.onPresetClick,
        onConfirmClick: props.onConfirmClick,
        selectedValue: props.value,
        needConfirm: props.needConfirm
      };
    });
    return function () {
      return createVNode("div", {
        "class": [COMPONENT_NAME.value, _defineProperty({}, "".concat(COMPONENT_NAME.value, "--direction-row"), ["left", "right"].includes(props.presetsPlacement))],
        "onClick": function onClick(e) {
          var _props$onPanelClick;
          return (_props$onPanelClick = props.onPanelClick) === null || _props$onPanelClick === void 0 ? void 0 : _props$onPanelClick.call(props, {
            e: e
          });
        }
      }, [["top", "left"].includes(props.presetsPlacement) ? createVNode(TExtraContent, extraProps.value, null) : null, createVNode(TPanelContent, panelContentProps.value, null), ["bottom", "right"].includes(props.presetsPlacement) ? createVNode(TExtraContent, extraProps.value, null) : null]);
    };
  }
});

export { TSinglePanel as default };
//# sourceMappingURL=SinglePanel.mjs.map
