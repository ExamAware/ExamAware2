/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, ref, toRefs, computed, watch, createVNode, mergeProps } from 'vue';
import { _ as _defineProperty } from '../_chunks/dep-1dacc319.mjs';
import { _ as _slicedToArray } from '../_chunks/dep-9003fde5.mjs';
import { d as dayjs } from '../_chunks/dep-ad588525.mjs';
import { c as customParseFormat } from '../_chunks/dep-83649365.mjs';
import { TimeIcon } from 'tdesign-icons-vue-next';
import _TimePickerPanel from './panel/time-picker-panel.mjs';
import { SelectInput } from '../select-input/index.mjs';
import { v as validateInputValue, f as formatInputValue } from '../_chunks/dep-928b1423.mjs';
import { a as useTNodeJSX, u as usePrefixClass, c as useCommonClassName, i as useGlobalIcon, n as useReadonly, j as useVModel, e as useDisabled, o as useEventForward } from '../_chunks/dep-7673347f.mjs';
import props from './props.mjs';
import { useConfig } from '../config-provider/hooks/useConfig.mjs';
import '../_chunks/dep-257428bc.mjs';
import '../_chunks/dep-9f459d8b.mjs';
import '../_chunks/dep-fe644854.mjs';
import 'lodash-es';
import '../_chunks/dep-b1bc7bcc.mjs';
import '../button/button.mjs';
import '../_chunks/dep-00b4e06a.mjs';
import '../loading/index.mjs';
import '../loading/directive.mjs';
import '../loading/plugin.mjs';
import '../loading/loading.mjs';
import '../loading/icon/gradient.mjs';
import '../_chunks/dep-0cde7579.mjs';
import '../_chunks/dep-0dcc778a.mjs';
import '../_chunks/dep-51a43106.mjs';
import '../loading/props.mjs';
import '../config-provider/utils/context.mjs';
import '../_chunks/dep-a4c09318.mjs';
import '../_chunks/dep-ffb85102.mjs';
import '../_chunks/dep-22ebd6af.mjs';
import '../_chunks/dep-cdd448ec.mjs';
import '../_chunks/dep-97ecacde.mjs';
import '../_chunks/dep-84fd47b3.mjs';
import '../_chunks/dep-d36c4a3f.mjs';
import './style/css.mjs';
import '../button/props.mjs';
import '../_chunks/dep-6d2705e1.mjs';
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
import '../_chunks/dep-63305cb0.mjs';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
dayjs.extend(customParseFormat);
var _TimePicker = defineComponent({
  name: "TTimePicker",
  props: props,
  setup: function setup(props2) {
    var renderTNodeJSX = useTNodeJSX();
    var _useConfig = useConfig("timePicker"),
      globalConfig = _useConfig.globalConfig;
    var COMPONENT_NAME = usePrefixClass("time-picker");
    var _useCommonClassName = useCommonClassName(),
      STATUS = _useCommonClassName.STATUS;
    var _useGlobalIcon = useGlobalIcon({
        TimeIcon: TimeIcon
      }),
      TimeIcon$1 = _useGlobalIcon.TimeIcon;
    var currentValue = ref("");
    var isShowPanel = ref(false);
    var isReadonly = useReadonly();
    var _toRefs = toRefs(props2),
      value = _toRefs.value,
      modelValue = _toRefs.modelValue;
    var _useVModel = useVModel(value, modelValue, props2.defaultValue, props2.onChange),
      _useVModel2 = _slicedToArray(_useVModel, 2),
      innerValue = _useVModel2[0],
      setInnerValue = _useVModel2[1];
    var disabled = useDisabled();
    var _toRefs2 = toRefs(props2),
      allowInput = _toRefs2.allowInput,
      format = _toRefs2.format;
    var inputClasses = computed(function () {
      return ["".concat(COMPONENT_NAME.value, "__group"), _defineProperty({}, STATUS.value.focused, isShowPanel.value)];
    });
    var handleShowPopup = function handleShowPopup(visible, context) {
      var _props2$onOpen, _props2$onClose;
      isShowPanel.value = visible;
      visible ? (_props2$onOpen = props2.onOpen) === null || _props2$onOpen === void 0 ? void 0 : _props2$onOpen.call(props2, context) : (_props2$onClose = props2.onClose) === null || _props2$onClose === void 0 ? void 0 : _props2$onClose.call(props2, context);
    };
    var handleClear = function handleClear(context) {
      var _props2$onClear;
      var e = context.e;
      e.stopPropagation();
      currentValue.value = null;
      setInnerValue(null);
      props2 === null || props2 === void 0 || (_props2$onClear = props2.onClear) === null || _props2$onClear === void 0 || _props2$onClear.call(props2, context);
    };
    var handleInputChange = function handleInputChange(value2) {
      currentValue.value = value2;
    };
    var handleInputBlur = function handleInputBlur(value2, context) {
      var _props2$onBlur;
      if (allowInput.value) {
        var isValidTime = validateInputValue(currentValue.value, format.value);
        if (isValidTime) {
          setInnerValue(formatInputValue(currentValue.value, format.value));
        }
      }
      (_props2$onBlur = props2.onBlur) === null || _props2$onBlur === void 0 || _props2$onBlur.call(props2, {
        value: value2,
        inputValue: context.inputValue,
        e: context.e
      });
    };
    var handleClickConfirm = function handleClickConfirm(e) {
      var _props2$onConfirm;
      props2 === null || props2 === void 0 || (_props2$onConfirm = props2.onConfirm) === null || _props2$onConfirm === void 0 || _props2$onConfirm.call(props2, {
        e: e
      });
      var isValidTime = validateInputValue(currentValue.value, format.value);
      if (isValidTime) setInnerValue(currentValue.value);
      isShowPanel.value = false;
    };
    var handlePanelChange = function handlePanelChange(v, e) {
      var _props2$onPick;
      currentValue.value = v;
      (_props2$onPick = props2.onPick) === null || _props2$onPick === void 0 || _props2$onPick.call(props2, v, {
        e: e
      });
    };
    var valueDisplayParams = computed(function () {
      var _innerValue$value;
      return {
        value: isShowPanel.value ? currentValue.value : (_innerValue$value = innerValue.value) !== null && _innerValue$value !== void 0 ? _innerValue$value : void 0
      };
    });
    watch(function () {
      return isShowPanel.value;
    }, function () {
      var _innerValue$value2;
      currentValue.value = isShowPanel.value ? (_innerValue$value2 = innerValue.value) !== null && _innerValue$value2 !== void 0 ? _innerValue$value2 : "" : "";
    });
    var selectEvents = useEventForward(props2.selectInputProps, {
      onInputChange: handleInputChange,
      onBlur: handleInputBlur,
      onPopupVisibleChange: handleShowPopup
    });
    return function () {
      var _innerValue$value3, _innerValue$value4;
      return createVNode("div", {
        "class": COMPONENT_NAME.value
      }, [createVNode(SelectInput, mergeProps({
        "onFocus": props2.onFocus,
        "onClear": handleClear,
        "borderless": props2.borderless,
        "disabled": disabled.value,
        "clearable": props2.clearable,
        "allowInput": allowInput.value,
        "class": inputClasses.value,
        "label": props2.label,
        "suffixIcon": function suffixIcon() {
          return createVNode(TimeIcon$1, null, null);
        },
        "popupVisible": !isReadonly.value && isShowPanel.value,
        "placeholder": !innerValue.value ? props2.placeholder || globalConfig.value.placeholder : void 0,
        "value": isShowPanel.value ? currentValue.value : (_innerValue$value3 = innerValue.value) !== null && _innerValue$value3 !== void 0 ? _innerValue$value3 : void 0,
        "inputValue": isShowPanel.value ? currentValue.value : (_innerValue$value4 = innerValue.value) !== null && _innerValue$value4 !== void 0 ? _innerValue$value4 : void 0,
        "inputProps": _objectSpread(_objectSpread({}, props2.inputProps), {}, {
          size: props2.size
        }),
        "popupProps": _objectSpread({
          overlayInnerStyle: {
            width: "auto",
            padding: 0
          }
        }, props2.popupProps),
        "status": props2.status,
        "tips": props2.tips,
        "valueDisplay": function valueDisplay() {
          return renderTNodeJSX("valueDisplay", {
            params: valueDisplayParams.value
          });
        }
      }, selectEvents.value, {
        "panel": function panel() {
          return createVNode(_TimePickerPanel, {
            "steps": props2.steps,
            "format": format.value,
            "value": currentValue.value,
            "isFooterDisplay": true,
            "isShowPanel": isShowPanel.value,
            "disableTime": props2.disableTime,
            "onChange": handlePanelChange,
            "hideDisabledTime": props2.hideDisabledTime,
            "handleConfirmClick": handleClickConfirm,
            "presets": props2.presets
          }, null);
        }
      }), null)]);
    };
  }
});

export { _TimePicker as default };
//# sourceMappingURL=time-picker.mjs.map
