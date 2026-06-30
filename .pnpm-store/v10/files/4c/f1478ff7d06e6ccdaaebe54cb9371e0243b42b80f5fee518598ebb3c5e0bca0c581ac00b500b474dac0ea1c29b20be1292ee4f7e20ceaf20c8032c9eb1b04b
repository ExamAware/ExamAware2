/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

var props = {
  asyncLoading: {
    type: [String, Function]
  },
  footer: {
    type: [String, Function]
  },
  header: {
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
  scroll: {
    type: Object
  },
  size: {
    type: String,
    "default": "medium",
    validator: function validator(val) {
      if (!val) return true;
      return ["small", "medium", "large"].includes(val);
    }
  },
  split: Boolean,
  stripe: Boolean,
  onLoadMore: Function,
  onScroll: Function
};

export { props as default };
//# sourceMappingURL=props.js.map
