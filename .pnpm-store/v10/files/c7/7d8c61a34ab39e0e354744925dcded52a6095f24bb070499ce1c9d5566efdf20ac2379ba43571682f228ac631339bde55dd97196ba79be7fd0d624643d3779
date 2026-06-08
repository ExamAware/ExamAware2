/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

var props = {
  bordered: Boolean,
  colon: Boolean,
  column: {
    type: Number,
    "default": 2
  },
  contentStyle: {
    type: Object
  },
  itemLayout: {
    type: String,
    "default": "horizontal",
    validator: function validator(val) {
      if (!val) return true;
      return ["horizontal", "vertical"].includes(val);
    }
  },
  items: {
    type: Array
  },
  labelStyle: {
    type: Object
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
    type: String,
    "default": "medium",
    validator: function validator(val) {
      if (!val) return true;
      return ["small", "medium", "large"].includes(val);
    }
  },
  tableLayout: {
    type: String,
    "default": "fixed",
    validator: function validator(val) {
      if (!val) return true;
      return ["fixed", "auto"].includes(val);
    }
  },
  title: {
    type: [String, Function]
  }
};

export { props as default };
//# sourceMappingURL=props.js.map
