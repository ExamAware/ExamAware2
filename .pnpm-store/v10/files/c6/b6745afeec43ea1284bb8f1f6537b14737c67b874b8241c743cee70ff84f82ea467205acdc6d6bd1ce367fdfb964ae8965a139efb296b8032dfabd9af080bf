/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, toRefs, ref, computed, watch, createVNode, mergeProps, Fragment } from 'vue';
import _toConsumableArray from '@babel/runtime/helpers/toConsumableArray';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { isUndefined, isNull, cloneDeep } from 'lodash-es';
import { C as Color, g as getColorObject } from '../../../_chunks/dep-110706c1.js';
import { D as DEFAULT_LINEAR_GRADIENT, a as DEFAULT_COLOR, b as DEFAULT_SYSTEM_SWATCH_COLORS, T as TD_COLOR_USED_COLORS_MAX_SIZE } from '../../../_chunks/dep-8d136a55.js';
import '@babel/runtime/helpers/classCallCheck';
import '@babel/runtime/helpers/createClass';
import { i as initColorFormat } from '../../../_chunks/dep-deedcdfd.js';
import '@babel/runtime/helpers/typeof';
import '../../../_chunks/dep-fe23be6e.js';
import { u as useCommonClassName } from '../../../_chunks/dep-4f8b6591.js';
import { useConfig } from '../../../config-provider/hooks/useConfig.js';
import { u as useDefaultValue } from '../../../_chunks/dep-aa34a263.js';
import '../../../_chunks/dep-880d05b9.js';
import { u as useVModel } from '../../../_chunks/dep-51e5a827.js';
import props from '../../color-picker-panel-props.js';
import { useBaseClassName } from '../../hooks/index.js';
import FormatPanel from '../format/index.js';
import AlphaSlider from './alpha.js';
import PanelHeader from './header.js';
import HueSlider from './hue.js';
import LinearGradient from './linear-gradient.js';
import SaturationPanel from './saturation.js';
import SwatchesPanel from './swatches.js';
import 'tinycolor2';
import '../../../_chunks/dep-81b01cae.js';
import '../../../config-provider/utils/context.js';
import '../../../_chunks/dep-938cd955.js';
import 'dayjs';
import '../../../_chunks/dep-9e6d8a78.js';
import '../../props.js';
import '../../../select/index.js';
import '../../../select/select.js';
import '@babel/runtime/helpers/objectWithoutProperties';
import '@babel/runtime/helpers/asyncToGenerator';
import '@babel/runtime/regenerator';
import '../../../common-components/fake-arrow.js';
import '../../../select-input/index.js';
import '../../../select-input/select-input.js';
import '../../../popup/index.js';
import '../../../popup/popup.js';
import '@popperjs/core';
import '../../../_chunks/dep-16bcfabc.js';
import '../../../_chunks/dep-2accc95a.js';
import '../../../_chunks/dep-fb805f69.js';
import '../../../_chunks/dep-2ea19dca.js';
import '../../../popup/container.js';
import '../../../popup/props.js';
import '../../../_chunks/dep-80a77612.js';
import '../../../_chunks/dep-664b8b22.js';
import '../../../select-input/props.js';
import '../../../select-input/hooks/useMultiple.js';
import '../../../tag-input/index.js';
import '../../../tag-input/tag-input.js';
import 'tdesign-icons-vue-next';
import '../../../input/index.js';
import '../../../input/input.js';
import '../../../input/props.js';
import '../../../_chunks/dep-f7dd3c12.js';
import '../../../_chunks/dep-3a7a2ef1.js';
import '../../../_chunks/dep-47b13687.js';
import '../../../input/hooks/useInput.js';
import '../../../form/consts/index.js';
import '../../../input/hooks/useLengthLimit.js';
import '../../../_chunks/dep-8295e674.js';
import '../../../_chunks/dep-80a99546.js';
import '../../../input/hooks/useInputEventHandler.js';
import '../../../input/hooks/useInputWidth.js';
import '../../../input/input-group.js';
import '../../../input/input-group-props.js';
import '../../../tag-input/props.js';
import '../../../_chunks/dep-4d7b9152.js';
import '../../../tag-input/hooks/useDragSorter.js';
import '../../../tag-input/hooks/useHover.js';
import '../../../tag-input/hooks/useTagScroll.js';
import '../../../tag-input/hooks/useTagList.js';
import '../../../tag/index.js';
import '../../../tag/tag.js';
import '../../../tag/props.js';
import '../../../tag/check-tag.js';
import '../../../tag/check-tag-props.js';
import '../../../_chunks/dep-30c631d1.js';
import '../../../tag/check-tag-group.js';
import '../../../tag/check-tag-group-props.js';
import '../../../loading/index.js';
import '../../../loading/directive.js';
import '../../../loading/plugin.js';
import '../../../_chunks/dep-ee693784.js';
import '../../../loading/icon/gradient.js';
import '../../../loading/props.js';
import '../../../select-input/hooks/useOverlayInnerStyle.js';
import '../../../select-input/hooks/useSingle.js';
import '../../../select/components/select-panel.js';
import '../../../select/option.js';
import '../../../select/option-props.js';
import '../../../checkbox/index.js';
import '../../../checkbox/checkbox.js';
import '../../../checkbox/props.js';
import '../../../_chunks/dep-d2a6e7a4.js';
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
import '../format/inputs.js';
import '../../../input-number/index.js';
import '../../../input-number/input-number.js';
import '../../../button/index.js';
import '../../../button/button.js';
import '../../../button/props.js';
import '../../../input-number/props.js';
import '../../../input-number/hooks/useInputNumber.js';
import '../../../_chunks/dep-1a63d163.js';
import '../../../_chunks/dep-05f15b4e.js';
import './slider.js';
import '../../../_chunks/dep-ddf323ca.js';
import './base-props.js';
import '../../../radio/index.js';
import '../../../radio/radio.js';
import '../../../radio/props.js';
import '../../../radio/consts/index.js';
import '../../../radio/group.js';
import '../../../radio/radio-group-props.js';
import '../../../radio/radio-button.js';
import '../../../radio/hooks/useKeyboard.js';
import '../../../watermark/hooks/index.js';

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
//# sourceMappingURL=index.js.map
