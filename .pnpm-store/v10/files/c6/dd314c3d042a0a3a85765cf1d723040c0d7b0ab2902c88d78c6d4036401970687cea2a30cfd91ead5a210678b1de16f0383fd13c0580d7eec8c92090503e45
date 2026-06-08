/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var props = {
  action: {
    type: Function
  },
  description: {
    type: [String, Function]
  },
  image: {
    type: [String, Function]
  },
  imageStyle: {
    type: Object
  },
  size: {
    type: String,
    "default": "medium",
    validator: function validator(val) {
      if (!val) return true;
      return ["small", "medium", "large"].includes(val);
    }
  },
  title: {
    type: [String, Function]
  },
  type: {
    type: String,
    "default": "empty",
    validator: function validator(val) {
      if (!val) return true;
      return ["empty", "success", "fail", "network-error", "maintenance"].includes(val);
    }
  }
};

exports["default"] = props;
//# sourceMappingURL=props.js.map
