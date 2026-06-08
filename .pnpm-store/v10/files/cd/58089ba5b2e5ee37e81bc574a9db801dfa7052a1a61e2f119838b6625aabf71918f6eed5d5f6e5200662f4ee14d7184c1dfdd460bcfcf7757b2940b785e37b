/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

var props = {
  code: Boolean,
  content: {
    type: [String, Function]
  },
  copyable: {
    type: [Boolean, Object],
    "default": false
  },
  "default": {
    type: [String, Function]
  },
  "delete": Boolean,
  disabled: Boolean,
  ellipsis: {
    type: [Boolean, Object],
    "default": false
  },
  italic: Boolean,
  keyboard: Boolean,
  mark: {
    type: [String, Boolean],
    "default": false
  },
  strong: Boolean,
  theme: {
    type: String,
    validator: function validator(val) {
      if (!val) return true;
      return ["primary", "secondary", "success", "warning", "error"].includes(val);
    }
  },
  underline: Boolean
};

export { props as default };
//# sourceMappingURL=text-props.js.map
