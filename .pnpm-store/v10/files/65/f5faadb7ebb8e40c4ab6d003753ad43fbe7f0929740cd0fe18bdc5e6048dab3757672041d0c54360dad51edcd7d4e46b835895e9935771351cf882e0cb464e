/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

var props = {
  align: {
    type: String,
    "default": "top",
    validator: function validator(val) {
      if (!val) return true;
      return ["start", "end", "center", "stretch", "baseline", "top", "middle", "bottom"].includes(val);
    }
  },
  gutter: {
    type: [Number, Object, Array],
    "default": 0
  },
  justify: {
    type: String,
    "default": "start",
    validator: function validator(val) {
      if (!val) return true;
      return ["start", "end", "center", "space-around", "space-between"].includes(val);
    }
  },
  tag: {
    type: String,
    "default": "div"
  }
};

export { props as default };
//# sourceMappingURL=row-props.js.map
