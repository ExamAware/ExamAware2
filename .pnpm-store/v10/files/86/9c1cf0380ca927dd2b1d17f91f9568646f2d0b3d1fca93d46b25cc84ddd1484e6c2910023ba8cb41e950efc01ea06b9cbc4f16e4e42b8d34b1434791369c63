/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

var props = {
  align: {
    type: String,
    "default": "center",
    validator: function validator(val) {
      if (!val) return true;
      return ["left", "right", "center"].includes(val);
    }
  },
  content: {
    type: [String, Function]
  },
  dashed: Boolean,
  "default": {
    type: [String, Function]
  },
  layout: {
    type: String,
    "default": "horizontal",
    validator: function validator(val) {
      if (!val) return true;
      return ["horizontal", "vertical"].includes(val);
    }
  },
  size: {
    type: [String, Number]
  }
};

export { props as default };
//# sourceMappingURL=props.mjs.map
