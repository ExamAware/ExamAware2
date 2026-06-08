/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

var props = {
  colorModes: {
    type: Array,
    "default": function _default() {
      return ["monochrome", "linear-gradient"];
    }
  },
  disabled: Boolean,
  enableAlpha: Boolean,
  enableMultipleGradient: {
    type: Boolean,
    "default": true
  },
  format: {
    type: String,
    "default": "RGB",
    validator: function validator(val) {
      if (!val) return true;
      return ["HEX", "HEX8", "RGB", "RGBA", "HSL", "HSLA", "HSV", "HSVA", "CMYK", "CSS"].includes(val);
    }
  },
  recentColors: {
    type: Array,
    "default": void 0
  },
  defaultRecentColors: {
    type: Array,
    "default": function _default() {
      return [];
    }
  },
  selectInputProps: {
    type: Object
  },
  showPrimaryColorPreview: {
    type: Boolean,
    "default": true
  },
  swatchColors: {
    type: Array
  },
  value: {
    type: String,
    "default": void 0
  },
  modelValue: {
    type: String,
    "default": void 0
  },
  defaultValue: {
    type: String,
    "default": ""
  },
  onChange: Function,
  onPaletteBarChange: Function,
  onRecentColorsChange: Function
};

export { props as default };
//# sourceMappingURL=color-picker-panel-props.mjs.map
