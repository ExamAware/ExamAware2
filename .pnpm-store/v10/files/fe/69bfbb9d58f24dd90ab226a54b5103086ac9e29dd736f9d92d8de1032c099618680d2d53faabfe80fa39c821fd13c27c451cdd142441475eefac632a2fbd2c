/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, toRefs, ref, computed, watch, createVNode, Fragment, mergeProps } from 'vue';
import { _ as _toConsumableArray } from '../../../_chunks/dep-00b4e06a.mjs';
import { _ as _slicedToArray } from '../../../_chunks/dep-9003fde5.mjs';
import { _ as _defineProperty } from '../../../_chunks/dep-1dacc319.mjs';
import { cloneDeep, isUndefined, isNull } from 'lodash-es';
import { C as Color, i as initColorFormat, g as getColorObject } from '../../../_chunks/dep-149cfe2d.mjs';
import { c as useCommonClassName, j as useVModel, k as useDefaultValue } from '../../../_chunks/dep-7673347f.mjs';
import props from '../../color-picker-panel-props.mjs';
import { useBaseClassName } from '../../hooks/index.mjs';
import FormatPanel from '../format/index.mjs';
import AlphaSlider from './alpha.mjs';
import PanelHeader from './header.mjs';
import HueSlider from './hue.mjs';
import LinearGradient from './linear-gradient.mjs';
import SaturationPanel from './saturation.mjs';
import SwatchesPanel from './swatches.mjs';
import { useConfig } from '../../../config-provider/hooks/useConfig.mjs';
import { D as DEFAULT_LINEAR_GRADIENT, a as DEFAULT_COLOR, T as TD_COLOR_USED_COLORS_MAX_SIZE, b as DEFAULT_SYSTEM_SWATCH_COLORS } from '../../../_chunks/dep-26597e10.mjs';
import '../../../_chunks/dep-9f459d8b.mjs';
import '../../../_chunks/dep-257428bc.mjs';
import '../../../_chunks/dep-84fd47b3.mjs';
import '../../../_chunks/dep-b31d8258.mjs';
import '../../../_chunks/dep-51a43106.mjs';
import '../../../_chunks/dep-fe644854.mjs';
import '../../../_chunks/dep-22ebd6af.mjs';
import '../../../_chunks/dep-cdd448ec.mjs';
import '../../../_chunks/dep-97ecacde.mjs';
import '../../../config-provider/utils/context.mjs';
import '../../../_chunks/dep-a4c09318.mjs';
import '../../../_chunks/dep-ffb85102.mjs';
import '../../../_chunks/dep-ad588525.mjs';
import '../../../_chunks/dep-d36c4a3f.mjs';
import '../../props.mjs';
import '../../../select/index.mjs';
import '../../../select/select.mjs';
import '../../../_chunks/dep-0dcc778a.mjs';
import '../../../_chunks/dep-88e5a7b0.mjs';
import '../../../common-components/fake-arrow.mjs';
import '../../../select-input/index.mjs';
import '../../../select-input/select-input.mjs';
import '../../../popup/index.mjs';
import '../../../popup/popup.mjs';
import '@popperjs/core';
import '../../../popup/container.mjs';
import '../../../popup/props.mjs';
import './style/css.mjs';
import '../../../select-input/props.mjs';
import '../../../select-input/hooks/index.mjs';
import '../../../select-input/hooks/useMultiple.mjs';
import '../../../tag-input/index.mjs';
import '../../../tag-input/tag-input.mjs';
import 'tdesign-icons-vue-next';
import '../../../input/index.mjs';
import '../../../input/input.mjs';
import '../../../input/props.mjs';
import '../../../input/hooks/index.mjs';
import '../../../input/hooks/useInput.mjs';
import '../../../form/consts/index.mjs';
import '../../../input/hooks/useLengthLimit.mjs';
import '../../../_chunks/dep-6d2705e1.mjs';
import '../../../_chunks/dep-0cde7579.mjs';
import '../../../input/hooks/useInputEventHandler.mjs';
import '../../../input/hooks/useInputWidth.mjs';
import '../../../input/input-group.mjs';
import '../../../input/input-group-props.mjs';
import '../../../tag-input/props.mjs';
import '../../../tag-input/hooks/index.mjs';
import '../../../tag-input/hooks/useDragSorter.mjs';
import '../../../tag-input/hooks/useHover.mjs';
import '../../../tag-input/hooks/useTagScroll.mjs';
import '../../../tag-input/hooks/useTagList.mjs';
import '../../../tag/index.mjs';
import '../../../tag/tag.mjs';
import '../../../tag/props.mjs';
import '../../../tag/check-tag.mjs';
import '../../../tag/check-tag-props.mjs';
import '../../../tag/check-tag-group.mjs';
import '../../../tag/check-tag-group-props.mjs';
import '../../../loading/index.mjs';
import '../../../loading/directive.mjs';
import '../../../loading/plugin.mjs';
import '../../../loading/loading.mjs';
import '../../../loading/icon/gradient.mjs';
import '../../../loading/props.mjs';
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
import '../format/inputs.mjs';
import '../../../input-number/index.mjs';
import '../../../input-number/input-number.mjs';
import '../../../button/index.mjs';
import '../../../button/button.mjs';
import '../../../button/props.mjs';
import '../../../input-number/props.mjs';
import '../../../input-number/hooks/useInputNumber.mjs';
import '../../../_chunks/dep-29754cb4.mjs';
import '../../../_chunks/dep-db81c302.mjs';
import './slider.mjs';
import '../../utils/index.mjs';
import './base-props.mjs';
import '../../../radio/index.mjs';
import '../../../radio/radio.mjs';
import '../../../radio/props.mjs';
import '../../../radio/consts/index.mjs';
import '../../../radio/group.mjs';
import '../../../radio/radio-group-props.mjs';
import '../../../radio/radio-button.mjs';
import '../../../radio/hooks/index.mjs';
import '../../../radio/hooks/useKeyboard.mjs';
import '../../../watermark/hooks/index.mjs';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var ColorPanel = defineComponent({
  name: "ColorPanel",
  props: _objectSpread({}, props),
  setup: function setup(props2) {
    var baseClassName = useBaseClassName();
    var _useCommonClassName = useCommonClassName(),
      STATUS = _useCommonClassName.STATUS;
    var _useConfig = useConfig("colorPicker"),
      t = _useConfig.t,
      globalConfig = _useConfig.globalConfig;
    var statusClassNames = STATUS.value;
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
    var getModeByColor = function getModeByColor(input) {
      if (props2.colorModes.length === 1) return props2.colorModes[0];
      return props2.colorModes.includes("linear-gradient") && Color.isGradientColor(input) ? "linear-gradient" : "monochrome";
    };
    var mode = ref(getModeByColor(innerValue.value));
    var isGradient = computed(function () {
      return mode.value === "linear-gradient";
    });
    var defaultEmptyColor = computed(function () {
      return isGradient.value ? DEFAULT_LINEAR_GRADIENT : DEFAULT_COLOR;
    });
    var color = ref(new Color(innerValue.value || defaultEmptyColor.value));
    var formatModel = ref(initColorFormat(props2.format, props2.enableAlpha));
    var addRecentlyUsedColor = function addRecentlyUsedColor() {
      if (innerRecentColors.value === null || innerRecentColors.value === false) {
        return;
      }
      var colors = cloneDeep(innerRecentColors.value) || [];
      var currentColor = color.value.isGradient ? color.value.linearGradient : color.value.rgba;
      var index = colors.indexOf(currentColor);
      if (index > -1) {
        colors.splice(index, 1);
      }
      colors.unshift(currentColor);
      if (colors.length > TD_COLOR_USED_COLORS_MAX_SIZE) {
        colors.length = TD_COLOR_USED_COLORS_MAX_SIZE;
      }
      handleRecentlyUsedColorsChange(colors);
    };
    var handleRecentlyUsedColorsChange = function handleRecentlyUsedColorsChange(colors) {
      setInnerRecentColors(colors);
    };
    var emitColorChange = function emitColorChange(trigger) {
      var value = color.value.getFormattedColor(props2.format, props2.enableAlpha);
      setInnerValue(value, {
        color: getColorObject(color.value),
        trigger: trigger || "palette-saturation-brightness"
      });
    };
    watch(function () {
      return innerValue.value;
    }, function (newColor) {
      var newMode = getModeByColor(newColor);
      mode.value = newMode;
      color.value.isGradient = newMode === "linear-gradient";
      var currentColor = color.value.getFormattedColor(props2.format, props2.enableAlpha);
      if (currentColor !== newColor) {
        color.value.update(newColor);
      }
    });
    var handleModeChange = function handleModeChange(newMode) {
      mode.value = newMode;
      var isGradientMode = newMode === "linear-gradient";
      color.value.isGradient = isGradientMode;
      if (isGradientMode) {
        color.value.update(color.value.gradientColors.length > 0 ? color.value.linearGradient : DEFAULT_LINEAR_GRADIENT);
      } else {
        color.value.update(color.value.rgba);
      }
      emitColorChange();
    };
    var handleSatAndValueChange = function handleSatAndValueChange(_ref) {
      var saturation = _ref.saturation,
        value = _ref.value;
      var _color$value = color.value,
        sat = _color$value.saturation,
        val = _color$value.value;
      var changeTrigger = "palette-saturation-brightness";
      if (value !== val && saturation !== sat) {
        color.value.saturation = saturation;
        color.value.value = value;
        changeTrigger = "palette-saturation-brightness";
      } else if (saturation !== sat) {
        color.value.saturation = saturation;
        changeTrigger = "palette-saturation";
      } else if (value !== val) {
        color.value.value = value;
        changeTrigger = "palette-brightness";
      } else {
        return;
      }
      emitColorChange(changeTrigger);
    };
    var handleHueChange = function handleHueChange(hue) {
      var _props2$onPaletteBarC;
      color.value.hue = hue;
      emitColorChange("palette-hue-bar");
      (_props2$onPaletteBarC = props2.onPaletteBarChange) === null || _props2$onPaletteBarC === void 0 || _props2$onPaletteBarC.call(props2, {
        color: getColorObject(color.value)
      });
    };
    var handleAlphaChange = function handleAlphaChange(alpha) {
      color.value.alpha = alpha;
      emitColorChange("palette-alpha-bar");
    };
    var handleInputChange = function handleInputChange(input, alpha) {
      color.value.update(input);
      color.value.alpha = alpha;
      emitColorChange("input");
    };
    var handleGradientChange = function handleGradientChange(_ref2) {
      var key = _ref2.key,
        payload = _ref2.payload;
      var trigger = "palette-saturation-brightness";
      switch (key) {
        case "degree":
          color.value.gradientDegree = payload;
          trigger = "input";
          break;
        case "selectedId":
          color.value.gradientSelectedId = payload;
          break;
        case "colors":
          color.value.gradientColors = payload;
          break;
      }
      emitColorChange(trigger);
    };
    var handleSetColor = function handleSetColor(value, trigger) {
      var newMode = getModeByColor(value);
      mode.value = newMode;
      color.value.isGradient = newMode === "linear-gradient";
      color.value.update(value);
      emitColorChange(trigger);
    };
    return function () {
      var baseProps = {
        color: color.value,
        disabled: props2.disabled
      };
      var onlySupportGradient = props2.colorModes.length === 1 && props2.colorModes.includes("linear-gradient");
      var recentColors2 = innerRecentColors.value;
      if (onlySupportGradient && Array.isArray(recentColors2)) {
        recentColors2 = recentColors2.filter(function (color2) {
          return Color.isGradientColor(color2);
        });
      }
      var showUsedColors = !!Array.isArray(recentColors2);
      var systemColors = props2.swatchColors;
      if (isUndefined(systemColors)) {
        systemColors = _toConsumableArray(DEFAULT_SYSTEM_SWATCH_COLORS);
      }
      if (isNull(systemColors)) {
        systemColors = [];
      }
      if (onlySupportGradient) {
        systemColors = systemColors.filter(function (color2) {
          return Color.isGradientColor(color2);
        });
      }
      var showSystemColors = Array.isArray(systemColors) && systemColors.length;
      var renderSwatches = function renderSwatches() {
        if (!showSystemColors && !showUsedColors) return null;
        return createVNode(Fragment, null, [createVNode("div", {
          "class": "".concat(baseClassName.value, "__swatches-wrap")
        }, [showUsedColors ? createVNode(SwatchesPanel, mergeProps(baseProps, {
          "title": t(globalConfig.value.recentColorTitle),
          "editable": true,
          "colors": recentColors2,
          "handleAddColor": addRecentlyUsedColor,
          "onSetColor": function onSetColor(color2) {
            return handleSetColor(color2, "recent");
          },
          "onChange": handleRecentlyUsedColorsChange
        }), null) : null, showSystemColors ? createVNode(SwatchesPanel, mergeProps(baseProps, {
          "title": t(globalConfig.value.swatchColorTitle),
          "colors": systemColors,
          "onSetColor": function onSetColor(color2) {
            return handleSetColor(color2, "preset");
          }
        }), null) : null])]);
      };
      return createVNode("div", {
        "class": ["".concat(baseClassName.value, "__panel"), props2.disabled ? statusClassNames.disabled : false]
      }, [createVNode(PanelHeader, mergeProps(props2, {
        "mode": mode.value,
        "onModeChange": handleModeChange
      }), null), createVNode("div", {
        "class": ["".concat(baseClassName.value, "__body")]
      }, [isGradient.value ? createVNode(LinearGradient, mergeProps(baseProps, {
        "onChange": handleGradientChange,
        "enableMultipleGradient": props2.enableMultipleGradient
      }), null) : null, createVNode(SaturationPanel, mergeProps(baseProps, {
        "onChange": handleSatAndValueChange
      }), null), createVNode("div", {
        "class": ["".concat(baseClassName.value, "__sliders-wrapper")]
      }, [createVNode("div", {
        "class": ["".concat(baseClassName.value, "__sliders")]
      }, [createVNode(HueSlider, mergeProps(baseProps, {
        "onChange": handleHueChange
      }), null), props2.enableAlpha ? createVNode(AlphaSlider, mergeProps(baseProps, {
        "onChange": handleAlphaChange
      }), null) : null]), props2.showPrimaryColorPreview ? createVNode("div", {
        "class": ["".concat(baseClassName.value, "__sliders-preview"), "".concat(baseClassName.value, "--bg-alpha")]
      }, [createVNode("span", {
        "class": "".concat(baseClassName.value, "__sliders-preview-inner"),
        "style": {
          background: isGradient.value ? color.value.linearGradient : color.value.rgba
        }
      }, null)]) : null]), createVNode(FormatPanel, mergeProps(props2, {
        "color": color.value,
        "format": formatModel.value,
        "onInputChange": handleInputChange
      }), null), renderSwatches()])]);
    };
  }
});

export { ColorPanel as default };
//# sourceMappingURL=index.mjs.map
