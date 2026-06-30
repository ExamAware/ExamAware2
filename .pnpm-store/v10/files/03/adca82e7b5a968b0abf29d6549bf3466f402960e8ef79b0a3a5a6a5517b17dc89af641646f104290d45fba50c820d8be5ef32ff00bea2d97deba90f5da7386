/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

var props = {
  list: {
    type: Array,
    "default": function _default() {
      return [];
    }
  },
  offset: {
    type: Array
  },
  placement: {
    type: String,
    "default": "right-bottom",
    validator: function validator(val) {
      if (!val) return true;
      return ["right-top", "right-center", "right-bottom", "left-top", "left-center", "left-bottom"].includes(val);
    }
  },
  popupProps: {
    type: Object
  },
  shape: {
    type: String,
    "default": "square",
    validator: function validator(val) {
      if (!val) return true;
      return ["square", "round"].includes(val);
    }
  },
  type: {
    type: String,
    "default": "normal",
    validator: function validator(val) {
      if (!val) return true;
      return ["normal", "compact"].includes(val);
    }
  },
  width: {
    type: [String, Number]
  },
  onClick: Function,
  onHover: Function
};

export { props as default };
//# sourceMappingURL=props.mjs.map
