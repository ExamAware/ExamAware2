/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

var props = {
  action: {
    type: [String, Function]
  },
  addable: Boolean,
  disabled: Boolean,
  dragSort: Boolean,
  list: {
    type: Array
  },
  placement: {
    type: String,
    "default": "top",
    validator: function validator(val) {
      if (!val) return true;
      return ["left", "top", "bottom", "right"].includes(val);
    }
  },
  scrollPosition: {
    type: String,
    "default": "auto",
    validator: function validator(val) {
      if (!val) return true;
      return ["auto", "start", "center", "end"].includes(val);
    }
  },
  size: {
    type: String,
    "default": "medium",
    validator: function validator(val) {
      if (!val) return true;
      return ["medium", "large"].includes(val);
    }
  },
  theme: {
    type: String,
    "default": "normal",
    validator: function validator(val) {
      if (!val) return true;
      return ["normal", "card"].includes(val);
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
  onAdd: Function,
  onChange: Function,
  onDragSort: Function,
  onRemove: Function
};

export { props as default };
//# sourceMappingURL=props.js.map
