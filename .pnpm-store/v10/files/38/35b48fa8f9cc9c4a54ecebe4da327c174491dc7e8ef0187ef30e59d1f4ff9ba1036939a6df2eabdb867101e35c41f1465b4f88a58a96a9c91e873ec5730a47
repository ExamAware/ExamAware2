/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

var props = {
  disabled: {
    type: [Boolean, Object]
  },
  layout: {
    type: String,
    "default": "horizontal",
    validator: function validator(val) {
      if (!val) return true;
      return ["horizontal", "vertical"].includes(val);
    }
  },
  showCurrent: {
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
  tips: {
    type: Object
  },
  variant: {
    type: String,
    "default": "text",
    validator: function validator(val) {
      if (!val) return true;
      return ["text", "outline"].includes(val);
    }
  },
  onChange: Function
};

export { props as default };
//# sourceMappingURL=pagination-mini-props.mjs.map
