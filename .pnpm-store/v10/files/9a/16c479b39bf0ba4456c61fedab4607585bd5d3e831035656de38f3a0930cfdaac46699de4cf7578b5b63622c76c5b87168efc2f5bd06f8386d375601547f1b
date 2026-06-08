/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

var props = {
  allowUncheck: Boolean,
  disabled: {
    type: Boolean,
    "default": void 0
  },
  name: {
    type: String,
    "default": ""
  },
  options: {
    type: Array
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
  theme: {
    type: String,
    "default": "radio",
    validator: function validator(val) {
      if (!val) return true;
      return ["radio", "button"].includes(val);
    }
  },
  value: {
    type: [String, Number, Boolean],
    "default": void 0
  },
  modelValue: {
    type: [String, Number, Boolean],
    "default": void 0
  },
  defaultValue: {
    type: [String, Number, Boolean]
  },
  variant: {
    type: String,
    "default": "outline",
    validator: function validator(val) {
      if (!val) return true;
      return ["outline", "primary-filled", "default-filled"].includes(val);
    }
  },
  onChange: Function
};

export { props as default };
//# sourceMappingURL=radio-group-props.mjs.map
