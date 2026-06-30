/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

var props = {
  content: {
    type: [String, Function]
  },
  "default": {
    type: [String, Function]
  },
  ellipsis: {
    type: [Boolean, Object],
    "default": false
  },
  level: {
    type: String,
    "default": "h1",
    validator: function validator(val) {
      if (!val) return true;
      return ["h1", "h2", "h3", "h4", "h5", "h6"].includes(val);
    }
  }
};

export { props as default };
//# sourceMappingURL=title-props.mjs.map
