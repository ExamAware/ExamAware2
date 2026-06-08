/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, computed, createVNode, mergeProps } from 'vue';
import { _ as _defineProperty } from '../_chunks/dep-1dacc319.mjs';
import { Popup } from '../popup/index.mjs';
import { u as usePrefixClass } from '../_chunks/dep-7673347f.mjs';
import _RangeInput from './range-input.mjs';
import props from './range-input-popup-props.mjs';
import { useOverlayInnerStyle } from '../select-input/hooks/useOverlayInnerStyle.mjs';
import '../_chunks/dep-257428bc.mjs';
import '../popup/popup.mjs';
import '../_chunks/dep-9003fde5.mjs';
import '../_chunks/dep-9f459d8b.mjs';
import '@popperjs/core';
import 'lodash-es';
import '../_chunks/dep-51a43106.mjs';
import '../_chunks/dep-fe644854.mjs';
import '../popup/container.mjs';
import '../_chunks/dep-00b4e06a.mjs';
import '../popup/props.mjs';
import './style/css.mjs';
import '../config-provider/hooks/useConfig.mjs';
import '../config-provider/utils/context.mjs';
import '../_chunks/dep-a4c09318.mjs';
import '../_chunks/dep-ffb85102.mjs';
import '../_chunks/dep-ad588525.mjs';
import '../_chunks/dep-22ebd6af.mjs';
import '../_chunks/dep-cdd448ec.mjs';
import '../_chunks/dep-97ecacde.mjs';
import '../_chunks/dep-84fd47b3.mjs';
import '../_chunks/dep-d36c4a3f.mjs';
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
import './props.mjs';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var _RangeInputPopup = defineComponent({
  name: "TRangeInputPopup",
  props: props,
  setup: function setup(props2) {
    var COMPONENT_NAME = usePrefixClass("range-input-popup");
    var _useOverlayInnerStyle = useOverlayInnerStyle(props2),
      tOverlayInnerStyle = _useOverlayInnerStyle.tOverlayInnerStyle,
      innerPopupVisible = _useOverlayInnerStyle.innerPopupVisible,
      onInnerPopupVisibleChange = _useOverlayInnerStyle.onInnerPopupVisibleChange;
    var popupClasses = computed(function () {
      return [COMPONENT_NAME.value, _defineProperty({}, "".concat(COMPONENT_NAME.value, "--visible"), props2.popupVisible || innerPopupVisible.value)];
    });
    return function () {
      return createVNode("div", {
        "class": popupClasses.value
      }, [createVNode(Popup, mergeProps({
        "hideEmptyPopup": true,
        "content": props2.panel,
        "trigger": "click",
        "placement": "bottom-left",
        "disabled": props2.disabled,
        "visible": props2.popupVisible || innerPopupVisible.value
      }, _objectSpread({
        overlayInnerStyle: tOverlayInnerStyle.value,
        onVisibleChange: onInnerPopupVisibleChange
      }, props2.popupProps)), {
        "default": function _default() {
          return [createVNode(_RangeInput, _objectSpread({
            value: props2.inputValue,
            onChange: props2.onInputChange,
            disabled: props2.disabled,
            label: props2.label,
            status: props2.status,
            tips: props2.tips
          }, props2.rangeInputProps), null)];
        }
      })]);
    };
  }
});

export { _RangeInputPopup as default };
//# sourceMappingURL=range-input-popup.mjs.map
