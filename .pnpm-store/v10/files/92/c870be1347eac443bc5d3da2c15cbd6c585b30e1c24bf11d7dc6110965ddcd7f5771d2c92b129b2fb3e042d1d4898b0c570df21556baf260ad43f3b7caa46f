/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

var stepItemProps = {
  content: {
    type: [String, Function],
    "default": ""
  },
  "default": {
    type: [String, Function]
  },
  extra: {
    type: [String, Function]
  },
  icon: {
    type: [Boolean, Function],
    "default": true
  },
  status: {
    type: String,
    "default": "default",
    validator: function validator(val) {
      if (!val) return true;
      return ["default", "process", "finish", "error"].includes(val);
    }
  },
  title: {
    type: [String, Function],
    "default": ""
  },
  value: {
    type: [String, Number]
  }
};

export { stepItemProps as default };
//# sourceMappingURL=step-item-props.js.map
