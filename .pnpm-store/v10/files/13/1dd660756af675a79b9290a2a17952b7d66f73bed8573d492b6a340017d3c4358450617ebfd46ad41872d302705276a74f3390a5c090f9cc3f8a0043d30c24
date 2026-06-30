/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

var props = {
  expanded: {
    type: Array,
    "default": void 0
  },
  defaultExpanded: {
    type: Array,
    "default": []
  },
  expandType: {
    type: String,
    "default": "normal",
    validator: function validator(val) {
      if (!val) return true;
      return ["normal", "popup"].includes(val);
    }
  },
  logo: {
    type: Function
  },
  operations: {
    type: Function
  },
  theme: {
    type: String,
    "default": "light",
    validator: function validator(val) {
      if (!val) return true;
      return ["light", "dark"].includes(val);
    }
  },
  value: {
    type: [String, Number],
    "default": void 0
  },
  modelValue: {
    type: [String, Number],
    "default": void 0
  },
  defaultValue: {
    type: [String, Number]
  },
  onChange: Function,
  onExpand: Function
};

export { props as default };
//# sourceMappingURL=head-menu-props.js.map
