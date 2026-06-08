/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

var props = {
  borderless: Boolean,
  clearable: Boolean,
  colorModes: {
    type: Array,
    "default": function _default() {
      return ["monochrome", "linear-gradient"];
    }
  },
  disabled: {
    type: Boolean,
    "default": void 0
  },
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
  inputProps: {
    type: Object
  },
  popupProps: {
    type: Object
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
  size: {
    type: String,
    "default": "medium",
    validator: function validator(val) {
      if (!val) return true;
      return ["small", "medium", "large"].includes(val);
    }
  },
  swatchColors: {
    type: Array,
    "default": void 0
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
  onClear: Function,
  onPaletteBarChange: Function,
  onRecentColorsChange: Function
};

export { props as default };
//# sourceMappingURL=props.js.map
