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
      return ["start", "end", "center", "baseline"].includes(val);
    }
  },
  breakLine: Boolean,
  direction: {
    type: String,
    "default": "horizontal",
    validator: function validator(val) {
      if (!val) return true;
      return ["vertical", "horizontal"].includes(val);
    }
  },
  separator: {
    type: [String, Function]
  },
  size: {
    type: [String, Number, Array],
    "default": "medium"
  }
};

export { props as default };
//# sourceMappingURL=props.js.map
