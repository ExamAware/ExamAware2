/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

var props = {
  animation: {
    type: String,
    "default": "slide",
    validator: function validator(val) {
      if (!val) return true;
      return ["slide", "fade"].includes(val);
    }
  },
  autoplay: {
    type: Boolean,
    "default": true
  },
  cardScale: {
    type: Number,
    "default": 210 / 332
  },
  current: {
    type: Number,
    "default": 0
  },
  defaultCurrent: {
    type: Number,
    "default": 0
  },
  direction: {
    type: String,
    "default": "horizontal",
    validator: function validator(val) {
      if (!val) return true;
      return ["horizontal", "vertical"].includes(val);
    }
  },
  duration: {
    type: Number,
    "default": 300
  },
  height: {
    type: Number
  },
  interval: {
    type: Number,
    "default": 5e3
  },
  loop: {
    type: Boolean,
    "default": true
  },
  navigation: {
    type: [Object, Function]
  },
  stopOnHover: {
    type: Boolean,
    "default": true
  },
  trigger: {
    type: String,
    "default": "hover",
    validator: function validator(val) {
      if (!val) return true;
      return ["hover", "click"].includes(val);
    }
  },
  type: {
    type: String,
    "default": "default",
    validator: function validator(val) {
      if (!val) return true;
      return ["default", "card"].includes(val);
    }
  },
  onChange: Function
};

export { props as default };
//# sourceMappingURL=props.mjs.map
