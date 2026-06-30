/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, toRefs, ref, createVNode, mergeProps } from 'vue';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-fe23be6e.js';
import { b as useTNodeDefault } from '../_chunks/dep-2accc95a.js';
import '../config-provider/hooks/useConfig.js';
import { u as useDefaultValue } from '../_chunks/dep-aa34a263.js';
import '../_chunks/dep-880d05b9.js';
import { u as useVModel } from '../_chunks/dep-51e5a827.js';
import { Popup } from '../popup/index.js';
import ColorPanel from './components/panel/index.js';
import DefaultTrigger from './components/trigger/index.js';
import { useBaseClassName } from './hooks/index.js';
import props from './props.js';
import '../_chunks/dep-81b01cae.js';
import '../_chunks/dep-16bcfabc.js';
import '../_chunks/dep-fb805f69.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '../popup/popup.js';
import '@popperjs/core';
import '../_chunks/dep-4f8b6591.js';
import '../_chunks/dep-9e6d8a78.js';
import '../_chunks/dep-2ea19dca.js';
import '../popup/container.js';
import '../popup/props.js';
import '../_chunks/dep-80a77612.js';
import '../_chunks/dep-664b8b22.js';
import '../_chunks/dep-110706c1.js';
import 'tinycolor2';
import '../_chunks/dep-8d136a55.js';
import '../_chunks/dep-deedcdfd.js';
import './color-picker-panel-props.js';
import './components/format/index.js';
import '../select/index.js';
import '../select/select.js';
import '@babel/runtime/helpers/objectWithoutProperties';
import '@babel/runtime/helpers/asyncToGenerator';
import '@babel/runtime/regenerator';
import '../common-components/fake-arrow.js';
import '../select-input/index.js';
import '../select-input/select-input.js';
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
import '../_chunks/dep-4d7b9152.js';
import '../tag-input/hooks/useDragSorter.js';
import '../tag-input/hooks/useHover.js';
import '../tag-input/hooks/useTagScroll.js';
import '../tag-input/hooks/useTagList.js';
import '../tag/index.js';
import '../tag/tag.js';
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
import './components/format/inputs.js';
import '../input-number/index.js';
import '../input-number/input-number.js';
import '../button/index.js';
import '../button/button.js';
import '../button/props.js';
import '../input-number/props.js';
import '../input-number/hooks/useInputNumber.js';
import '../_chunks/dep-1a63d163.js';
import '../_chunks/dep-05f15b4e.js';
import './components/panel/alpha.js';
import './components/panel/slider.js';
import '../_chunks/dep-ddf323ca.js';
import './components/panel/base-props.js';
import './components/panel/header.js';
import '../radio/index.js';
import '../radio/radio.js';
import '../radio/props.js';
import '../radio/consts/index.js';
import '../radio/group.js';
import '../radio/radio-group-props.js';
import '../radio/radio-button.js';
import '../radio/hooks/useKeyboard.js';
import '../watermark/hooks/index.js';
import './components/panel/hue.js';
import './components/panel/linear-gradient.js';
import './components/panel/saturation.js';
import './components/panel/swatches.js';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var _ColorPicker = defineComponent({
  name: "TColorPicker",
  props: props,
  setup: function setup(props2) {
    var baseClassName = useBaseClassName();
    var renderTNodeJSXDefault = useTNodeDefault();
    var _toRefs = toRefs(props2),
      inputValue = _toRefs.value,
      modelValue = _toRefs.modelValue,
      recentColors = _toRefs.recentColors;
    var _useVModel = useVModel(inputValue, modelValue, props2.defaultValue, props2.onChange),
      _useVModel2 = _slicedToArray(_useVModel, 2),
      innerValue = _useVModel2[0],
      setInnerValue = _useVModel2[1];
    var _useDefaultValue = useDefaultValue(recentColors, props2.defaultRecentColors, props2.onRecentColorsChange, "recentColors"),
      _useDefaultValue2 = _slicedToArray(_useDefaultValue, 2),
      innerRecentColors = _useDefaultValue2[0],
      setInnerRecentColors = _useDefaultValue2[1];
    var refTrigger = ref();
    var handleClear = function handleClear(context) {
      var _props2$onClear;
      return (_props2$onClear = props2.onClear) === null || _props2$onClear === void 0 ? void 0 : _props2$onClear.call(props2, context);
    };
    var renderPopupContent = function renderPopupContent() {
      if (props2.disabled) {
        return null;
      }
      return createVNode(ColorPanel, mergeProps(_objectSpread(_objectSpread({}, props2), {}, {
        onChange: setInnerValue,
        onRecentColorsChange: setInnerRecentColors
      }), {
        "value": innerValue.value,
        "recentColors": innerRecentColors.value
      }), null);
    };
    return function () {
      var popProps = _objectSpread({
        placement: "bottom-left",
        trigger: "click",
        overlayClassName: [baseClassName.value]
      }, props2.popupProps || {});
      return createVNode(Popup, mergeProps(popProps, {
        "content": renderPopupContent
      }), {
        "default": function _default() {
          return [createVNode("div", {
            "class": "".concat(baseClassName.value, "__trigger"),
            "ref": refTrigger
          }, [renderTNodeJSXDefault("default", createVNode(DefaultTrigger, {
            "borderless": props2.borderless,
            "color": innerValue.value,
            "disabled": props2.disabled,
            "clearable": props2.clearable,
            "input-props": props2.inputProps,
            "onTriggerChange": setInnerValue,
            "onTriggerClear": handleClear,
            "size": props2.size
          }, null))])];
        }
      });
    };
  }
});

export { _ColorPicker as default };
//# sourceMappingURL=color-picker.js.map
