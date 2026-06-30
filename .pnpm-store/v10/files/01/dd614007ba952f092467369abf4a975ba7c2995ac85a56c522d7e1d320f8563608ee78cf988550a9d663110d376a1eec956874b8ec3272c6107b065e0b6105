/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

var props = {
  container: {
    type: [String, Function],
    "default": "body"
  },
  content: {
    type: [String, Function]
  },
  "default": {
    type: [String, Function]
  },
  duration: {
    type: Number,
    "default": 200
  },
  offset: {
    type: Array,
    "default": function _default() {
      return ["24px", "80px"];
    }
  },
  shape: {
    type: String,
    "default": "square",
    validator: function validator(val) {
      if (!val) return true;
      return ["circle", "square"].includes(val);
    }
  },
  size: {
    type: String,
    "default": "medium",
    validator: function validator(val) {
      if (!val) return true;
      return ["medium", "small"].includes(val);
    }
  },
  target: {
    type: [String, Function],
    "default": "body"
  },
  theme: {
    type: String,
    "default": "light",
    validator: function validator(val) {
      if (!val) return true;
      return ["light", "primary", "dark"].includes(val);
    }
  },
  visibleHeight: {
    type: [String, Number],
    "default": "200px"
  },
  onClick: Function
};

export { props as default };
//# sourceMappingURL=props.mjs.map
