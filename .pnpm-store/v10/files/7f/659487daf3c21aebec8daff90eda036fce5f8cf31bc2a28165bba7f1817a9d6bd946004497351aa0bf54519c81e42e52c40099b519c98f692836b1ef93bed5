/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, computed, createVNode, mergeProps } from 'vue';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { Popup } from '../popup/index.js';
import 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-fe23be6e.js';
import { u as usePrefixClass } from '../_chunks/dep-9e6d8a78.js';
import '@babel/runtime/helpers/slicedToArray';
import '../_chunks/dep-880d05b9.js';
import _RangeInput from './range-input.js';
import props from './range-input-popup-props.js';
import { useOverlayInnerStyle } from '../select-input/hooks/useOverlayInnerStyle.js';
import '../popup/popup.js';
import '@popperjs/core';
import '../_chunks/dep-16bcfabc.js';
import '../_chunks/dep-2accc95a.js';
import '../_chunks/dep-fb805f69.js';
import '../_chunks/dep-4f8b6591.js';
import '../config-provider/hooks/useConfig.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import '../_chunks/dep-81b01cae.js';
import 'dayjs';
import '../_chunks/dep-2ea19dca.js';
import '../_chunks/dep-51e5a827.js';
import '../popup/container.js';
import '../popup/props.js';
import '../_chunks/dep-80a77612.js';
import '../_chunks/dep-664b8b22.js';
import 'tdesign-vue-next/esm/common/style/web/components/popup/_index.less';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import 'tdesign-icons-vue-next';
import '../input/index.js';
import '../input/input.js';
import '@babel/runtime/helpers/objectWithoutProperties';
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
import 'tdesign-vue-next/esm/common/style/web/components/input/_index.less';
import './props.js';
import '../_chunks/dep-4d7b9152.js';

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
//# sourceMappingURL=range-input-popup.js.map
