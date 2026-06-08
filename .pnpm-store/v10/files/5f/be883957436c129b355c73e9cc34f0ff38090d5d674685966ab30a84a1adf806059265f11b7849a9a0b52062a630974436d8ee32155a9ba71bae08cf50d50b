/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

var props = {
  direction: {
    type: String,
    "default": "right",
    validator: function validator(val) {
      if (!val) return true;
      return ["left", "right"].includes(val);
    }
  },
  disabled: Boolean,
  hideAfterItemClick: {
    type: Boolean,
    "default": true
  },
  maxColumnWidth: {
    type: [String, Number],
    "default": 100
  },
  maxHeight: {
    type: Number,
    "default": 300
  },
  minColumnWidth: {
    type: [String, Number],
    "default": 10
  },
  options: {
    type: Array,
    "default": function _default() {
      return [];
    }
  },
  panelBottomContent: {
    type: [String, Function]
  },
  panelTopContent: {
    type: [String, Function]
  },
  placement: {
    type: String,
    "default": "bottom-left",
    validator: function validator(val) {
      if (!val) return true;
      return ["top", "left", "right", "bottom", "top-left", "top-right", "bottom-left", "bottom-right", "left-top", "left-bottom", "right-top", "right-bottom"].includes(val);
    }
  },
  popupProps: {
    type: Object
  },
  trigger: {
    type: String,
    "default": "hover",
    validator: function validator(val) {
      if (!val) return true;
      return ["hover", "click", "focus", "context-menu"].includes(val);
    }
  },
  onClick: Function
};

export { props as default };
//# sourceMappingURL=props.js.map
