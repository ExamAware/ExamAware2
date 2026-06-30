/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var props = {
  bgColor: {
    type: String,
    "default": ""
  },
  borderless: Boolean,
  color: {
    type: String,
    "default": ""
  },
  icon: {
    type: String,
    "default": ""
  },
  iconSize: {
    type: [Number, Object],
    "default": 40
  },
  level: {
    type: String,
    "default": "M",
    validator: function validator(val) {
      if (!val) return true;
      return ["L", "M", "Q", "H"].includes(val);
    }
  },
  size: {
    type: Number,
    "default": 160
  },
  status: {
    type: String,
    "default": "active",
    validator: function validator(val) {
      if (!val) return true;
      return ["active", "expired", "loading", "scanned"].includes(val);
    }
  },
  statusRender: {
    type: Function
  },
  type: {
    type: String,
    "default": "canvas",
    validator: function validator(val) {
      if (!val) return true;
      return ["canvas", "svg"].includes(val);
    }
  },
  value: {
    type: String,
    "default": ""
  },
  onRefresh: Function
};

exports["default"] = props;
//# sourceMappingURL=props.js.map
