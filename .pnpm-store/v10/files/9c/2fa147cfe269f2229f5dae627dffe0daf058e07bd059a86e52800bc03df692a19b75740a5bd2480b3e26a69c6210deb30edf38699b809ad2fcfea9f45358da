/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

var props = {
  closable: Boolean,
  color: {
    type: String,
    "default": ""
  },
  content: {
    type: [String, Function]
  },
  "default": {
    type: [String, Function]
  },
  disabled: Boolean,
  icon: {
    type: Function,
    "default": void 0
  },
  maxWidth: {
    type: [String, Number]
  },
  shape: {
    type: String,
    "default": "square",
    validator: function validator(val) {
      if (!val) return true;
      return ["square", "round", "mark"].includes(val);
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
  theme: {
    type: String,
    "default": "default",
    validator: function validator(val) {
      if (!val) return true;
      return ["default", "primary", "warning", "danger", "success"].includes(val);
    }
  },
  title: {
    type: String,
    "default": ""
  },
  variant: {
    type: String,
    "default": "dark",
    validator: function validator(val) {
      if (!val) return true;
      return ["dark", "light", "outline", "light-outline"].includes(val);
    }
  },
  onClick: Function,
  onClose: Function
};

export { props as default };
//# sourceMappingURL=props.mjs.map
