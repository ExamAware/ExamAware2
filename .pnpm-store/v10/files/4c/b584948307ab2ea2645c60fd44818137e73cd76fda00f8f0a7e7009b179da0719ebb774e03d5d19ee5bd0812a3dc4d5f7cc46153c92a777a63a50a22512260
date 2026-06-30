/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

var props = {
  href: {
    type: String,
    "default": "",
    required: true
  },
  target: {
    type: String,
    "default": "_self",
    validator: function validator(val) {
      return ["_self", "_blank", "_parent", "_top"].includes(val);
    }
  },
  title: {
    type: [String, Function],
    "default": ""
  },
  customScroll: {
    type: Boolean,
    "default": false
  }
};

export { props as default };
//# sourceMappingURL=anchor-item-props.mjs.map
