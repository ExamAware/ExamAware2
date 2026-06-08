/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

var props = {
  allowInput: Boolean,
  autoSwap: {
    type: Boolean,
    "default": true
  },
  borderless: Boolean,
  clearable: Boolean,
  disableTime: {
    type: Function
  },
  disabled: {
    type: [Boolean, Array],
    "default": void 0
  },
  format: {
    type: String,
    "default": "HH:mm:ss"
  },
  hideDisabledTime: {
    type: Boolean,
    "default": true
  },
  label: {
    type: [String, Function]
  },
  placeholder: {
    type: [String, Array],
    "default": void 0
  },
  popupProps: {
    type: Object
  },
  presets: {
    type: Object
  },
  rangeInputProps: {
    type: Object
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
  steps: {
    type: Array,
    "default": function _default() {
      return [1, 1, 1];
    }
  },
  tips: {
    type: [String, Function]
  },
  value: {
    type: Array,
    "default": void 0
  },
  modelValue: {
    type: Array,
    "default": void 0
  },
  defaultValue: {
    type: Array
  },
  onBlur: Function,
  onChange: Function,
  onFocus: Function,
  onInput: Function,
  onPick: Function
};

export { props as default };
//# sourceMappingURL=time-range-picker-props.js.map
