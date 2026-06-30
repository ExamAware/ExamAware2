/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

var props = {
  closeBtn: {
    type: [String, Boolean, Function],
    "default": void 0
  },
  content: {
    type: [String, Function]
  },
  duration: {
    type: Number,
    "default": 3e3
  },
  icon: {
    type: [Boolean, Function],
    "default": true
  },
  theme: {
    type: String,
    "default": "info",
    validator: function validator(val) {
      if (!val) return true;
      return ["info", "success", "warning", "error", "question", "loading"].includes(val);
    }
  },
  onClose: Function,
  onCloseBtnClick: Function,
  onDurationEnd: Function
};

export { props as default };
//# sourceMappingURL=props.mjs.map
