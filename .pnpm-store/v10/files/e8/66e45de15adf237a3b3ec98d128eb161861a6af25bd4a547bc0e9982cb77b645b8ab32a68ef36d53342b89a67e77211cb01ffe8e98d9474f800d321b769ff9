/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

var props = {
  align: {
    type: String,
    validator: function validator(val) {
      if (!val) return true;
      return ["left", "center", "right"].includes(val);
    }
  },
  allowInputOverLimit: {
    type: Boolean,
    "default": true
  },
  autoWidth: Boolean,
  decimalPlaces: {
    type: [Number, Object],
    "default": void 0
  },
  disabled: {
    type: Boolean,
    "default": void 0
  },
  format: {
    type: Function
  },
  inputProps: {
    type: Object
  },
  label: {
    type: [String, Function]
  },
  largeNumber: Boolean,
  max: {
    type: [String, Number],
    "default": Infinity
  },
  min: {
    type: [String, Number],
    "default": -Infinity
  },
  placeholder: {
    type: String,
    "default": void 0
  },
  readonly: {
    type: Boolean,
    "default": void 0
  },
  size: {
    type: String,
    "default": "medium",
    validator: function validator(val) {
      if (!val) return true;
      return ["small", "medium", "large"].includes(val);
    }
  },
  status: {
    type: String,
    "default": "default",
    validator: function validator(val) {
      if (!val) return true;
      return ["default", "success", "warning", "error"].includes(val);
    }
  },
  step: {
    type: [String, Number],
    "default": 1
  },
  suffix: {
    type: [String, Function]
  },
  theme: {
    type: String,
    "default": "row",
    validator: function validator(val) {
      if (!val) return true;
      return ["column", "row", "normal"].includes(val);
    }
  },
  tips: {
    type: [String, Function]
  },
  value: {
    type: [String, Number],
    "default": void 0
  },
  modelValue: {
    type: [String, Number],
    "default": void 0
  },
  defaultValue: {
    type: [String, Number]
  },
  onBlur: Function,
  onChange: Function,
  onEnter: Function,
  onFocus: Function,
  onKeydown: Function,
  onKeypress: Function,
  onKeyup: Function,
  onValidate: Function
};

export { props as default };
//# sourceMappingURL=props.js.map
