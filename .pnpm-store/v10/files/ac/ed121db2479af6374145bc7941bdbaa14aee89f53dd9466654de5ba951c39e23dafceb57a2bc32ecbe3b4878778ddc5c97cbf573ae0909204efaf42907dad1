/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

var props = {
  collapsed: Boolean,
  expanded: {
    type: Array,
    "default": void 0
  },
  defaultExpanded: {
    type: Array,
    "default": []
  },
  expandMutex: Boolean,
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
  width: {
    type: [String, Number, Array],
    "default": "232px"
  },
  onChange: Function,
  onExpand: Function
};

export { props as default };
//# sourceMappingURL=props.js.map
