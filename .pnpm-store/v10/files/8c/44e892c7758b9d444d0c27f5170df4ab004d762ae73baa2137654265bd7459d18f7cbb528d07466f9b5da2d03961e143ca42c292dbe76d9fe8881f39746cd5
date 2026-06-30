/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

var props = {
  animation: {
    type: Object
  },
  animationStart: Boolean,
  color: {
    type: String,
    "default": ""
  },
  decimalPlaces: {
    type: Number
  },
  extra: {
    type: [String, Function]
  },
  format: {
    type: Function
  },
  loading: Boolean,
  prefix: {
    type: [String, Function]
  },
  separator: {
    type: String,
    "default": ","
  },
  suffix: {
    type: [String, Function]
  },
  title: {
    type: [String, Function]
  },
  trend: {
    type: String,
    validator: function validator(val) {
      if (!val) return true;
      return ["increase", "decrease"].includes(val);
    }
  },
  trendPlacement: {
    type: String,
    "default": "left",
    validator: function validator(val) {
      if (!val) return true;
      return ["left", "right"].includes(val);
    }
  },
  unit: {
    type: [String, Function]
  },
  value: {
    type: Number
  }
};

export { props as default };
//# sourceMappingURL=props.js.map
