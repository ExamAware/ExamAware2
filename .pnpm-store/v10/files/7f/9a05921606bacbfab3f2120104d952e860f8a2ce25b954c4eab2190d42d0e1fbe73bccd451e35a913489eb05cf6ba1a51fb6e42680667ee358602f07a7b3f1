/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, toRefs, ref, createVNode, mergeProps } from 'vue';
import { _ as _defineProperty } from '../_chunks/dep-1dacc319.mjs';
import { _ as _slicedToArray } from '../_chunks/dep-9003fde5.mjs';
import { q as useTNodeDefault, j as useVModel, k as useDefaultValue } from '../_chunks/dep-7673347f.mjs';
import { Popup } from '../popup/index.mjs';
import ColorPanel from './components/panel/index.mjs';
import DefaultTrigger from './components/trigger/index.mjs';
import { useBaseClassName } from './hooks/index.mjs';
import props from './props.mjs';
import '../_chunks/dep-257428bc.mjs';
import '../_chunks/dep-9f459d8b.mjs';
import 'lodash-es';
import '../_chunks/dep-00b4e06a.mjs';
import '../_chunks/dep-51a43106.mjs';
import '../_chunks/dep-fe644854.mjs';
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
import '../popup/popup.mjs';
import '@popperjs/core';
import '../popup/container.mjs';
import '../popup/props.mjs';
import './style/css.mjs';
import '../_chunks/dep-149cfe2d.mjs';
import '../_chunks/dep-b31d8258.mjs';
import '../_chunks/dep-26597e10.mjs';
import './color-picker-panel-props.mjs';
import './components/format/index.mjs';
import '../select/index.mjs';
import '../select/select.mjs';
import '../_chunks/dep-0dcc778a.mjs';
import '../_chunks/dep-88e5a7b0.mjs';
import '../common-components/fake-arrow.mjs';
import '../select-input/index.mjs';
import '../select-input/select-input.mjs';
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
import '../tag/index.mjs';
import '../tag/tag.mjs';
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
import './components/format/inputs.mjs';
import '../input-number/index.mjs';
import '../input-number/input-number.mjs';
import '../button/index.mjs';
import '../button/button.mjs';
import '../button/props.mjs';
import '../input-number/props.mjs';
import '../input-number/hooks/useInputNumber.mjs';
import '../_chunks/dep-29754cb4.mjs';
import '../_chunks/dep-db81c302.mjs';
import './components/panel/alpha.mjs';
import './components/panel/slider.mjs';
import './utils/index.mjs';
import './components/panel/base-props.mjs';
import './components/panel/header.mjs';
import '../radio/index.mjs';
import '../radio/radio.mjs';
import '../radio/props.mjs';
import '../radio/consts/index.mjs';
import '../radio/group.mjs';
import '../radio/radio-group-props.mjs';
import '../radio/radio-button.mjs';
import '../radio/hooks/index.mjs';
import '../radio/hooks/useKeyboard.mjs';
import '../watermark/hooks/index.mjs';
import './components/panel/hue.mjs';
import './components/panel/linear-gradient.mjs';
import './components/panel/saturation.mjs';
import './components/panel/swatches.mjs';

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
//# sourceMappingURL=color-picker.mjs.map
