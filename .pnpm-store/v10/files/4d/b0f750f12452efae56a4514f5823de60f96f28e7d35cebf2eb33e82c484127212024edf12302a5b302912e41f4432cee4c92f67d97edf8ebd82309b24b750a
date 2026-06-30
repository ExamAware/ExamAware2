/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, ref, toRefs, computed, watch, createVNode, mergeProps } from 'vue';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import dayjs from 'dayjs';
import { c as customParseFormat } from '../_chunks/dep-bcf15bc2.js';
import { TimeIcon } from 'tdesign-icons-vue-next';
import _TimePickerPanel from './panel/time-picker-panel.js';
import { SelectInput } from '../select-input/index.js';
import { v as validateInputValue, f as formatInputValue } from '../_chunks/dep-86ee5d0c.js';
import 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-fe23be6e.js';
import { u as useTNodeJSX } from '../_chunks/dep-2accc95a.js';
import { u as useCommonClassName } from '../_chunks/dep-4f8b6591.js';
import { u as usePrefixClass } from '../_chunks/dep-9e6d8a78.js';
import { u as useDisabled } from '../_chunks/dep-f7dd3c12.js';
import { u as useGlobalIcon } from '../_chunks/dep-3a7a2ef1.js';
import '../_chunks/dep-880d05b9.js';
import { u as useReadonly } from '../_chunks/dep-47b13687.js';
import { u as useVModel } from '../_chunks/dep-51e5a827.js';
import { u as useEventForward } from '../_chunks/dep-4d7b9152.js';
import props from './props.js';
import { useConfig } from '../config-provider/hooks/useConfig.js';
import '../_chunks/dep-81b01cae.js';
import '../_chunks/dep-af8a928d.js';
import '../button/button.js';
import '../loading/index.js';
import '../loading/directive.js';
import '../loading/plugin.js';
import '../_chunks/dep-ee693784.js';
import '../loading/icon/gradient.js';
import '../_chunks/dep-2ea19dca.js';
import '../_chunks/dep-80a99546.js';
import '@babel/runtime/helpers/objectWithoutProperties';
import '../_chunks/dep-16bcfabc.js';
import '../loading/props.js';
import '../_chunks/dep-fb805f69.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '../_chunks/dep-664b8b22.js';
import 'tdesign-vue-next/esm/common/style/web/components/loading/_index.less';
import '../button/props.js';
import '../_chunks/dep-d2a6e7a4.js';
import '../_chunks/dep-8295e674.js';
import '../select-input/select-input.js';
import '../popup/index.js';
import '../popup/popup.js';
import '@popperjs/core';
import '../popup/container.js';
import '../popup/props.js';
import '../_chunks/dep-80a77612.js';
import 'tdesign-vue-next/esm/common/style/web/components/popup/_index.less';
import '../select-input/props.js';
import '../select-input/hooks/useMultiple.js';
import '../tag-input/index.js';
import '../tag-input/tag-input.js';
import '../input/index.js';
import '../input/input.js';
import '../input/props.js';
import '../input/hooks/useInput.js';
import '../form/consts/index.js';
import '../input/hooks/useLengthLimit.js';
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
import '../select-input/hooks/useOverlayInnerStyle.js';
import '../select-input/hooks/useSingle.js';
import 'tdesign-vue-next/esm/common/style/web/components/select-input/_index.less';
import '../_chunks/dep-bf4a6186.js';

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
//# sourceMappingURL=time-picker.js.map
