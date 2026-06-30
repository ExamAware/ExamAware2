/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

var props = {
  close: {
    type: [String, Boolean, Function],
    "default": false
  },
  closeBtn: {
    type: [String, Boolean, Function],
    "default": false
  },
  "default": {
    type: [String, Function]
  },
  icon: {
    type: Function
  },
  maxLine: {
    type: Number,
    "default": 0
  },
  message: {
    type: [String, Function]
  },
  operation: {
    type: Function
  },
  theme: {
    type: String,
    "default": "info",
    validator: function validator(val) {
      if (!val) return true;
      return ["success", "info", "warning", "error"].includes(val);
    }
  },
  title: {
    type: [String, Function]
  },
  onClose: Function,
  onClosed: Function
};

export { props as default };
//# sourceMappingURL=props.mjs.map
