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
  disabled: Boolean,
  href: {
    type: String,
    "default": ""
  },
  icon: {
    type: Function
  },
  replace: Boolean,
  router: {
    type: Object
  },
  routerLink: Boolean,
  target: {
    type: String,
    "default": "_self",
    validator: function validator(val) {
      if (!val) return true;
      return ["_blank", "_self", "_parent", "_top"].includes(val);
    }
  },
  to: {
    type: [String, Object]
  },
  value: {
    type: [String, Number]
  },
  onClick: Function
};

export { props as default };
//# sourceMappingURL=menu-item-props.mjs.map
