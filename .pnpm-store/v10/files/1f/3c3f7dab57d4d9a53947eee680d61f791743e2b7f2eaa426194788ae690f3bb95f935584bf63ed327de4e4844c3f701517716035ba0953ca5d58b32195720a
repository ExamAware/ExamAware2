/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

var props = {
  animation: {
    type: String,
    "default": "none",
    validator: function validator(val) {
      if (!val) return true;
      return ["gradient", "flashed", "none"].includes(val);
    }
  },
  content: {
    type: [String, Function]
  },
  "default": {
    type: [String, Function]
  },
  delay: {
    type: Number,
    "default": 0
  },
  loading: {
    type: Boolean,
    "default": true
  },
  rowCol: {
    type: Array
  },
  theme: {
    type: String,
    "default": "text",
    validator: function validator(val) {
      if (!val) return true;
      return ["text", "avatar", "paragraph", "avatar-text", "tab", "article"].includes(val);
    }
  }
};

export { props as default };
//# sourceMappingURL=props.js.map
