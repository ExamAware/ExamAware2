/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var props = {
  alt: {
    type: String,
    "default": ""
  },
  error: {
    type: [String, Function]
  },
  fallback: {
    type: String,
    "default": ""
  },
  fit: {
    type: String,
    "default": "fill",
    validator: function validator(val) {
      if (!val) return true;
      return ["contain", "cover", "fill", "none", "scale-down"].includes(val);
    }
  },
  gallery: Boolean,
  lazy: Boolean,
  loading: {
    type: [String, Function]
  },
  overlayContent: {
    type: [String, Function]
  },
  overlayTrigger: {
    type: String,
    "default": "always",
    validator: function validator(val) {
      if (!val) return true;
      return ["always", "hover"].includes(val);
    }
  },
  placeholder: {
    type: [String, Function]
  },
  position: {
    type: String,
    "default": "center"
  },
  referrerpolicy: {
    type: String,
    "default": "strict-origin-when-cross-origin",
    validator: function validator(val) {
      if (!val) return true;
      return ["no-referrer", "no-referrer-when-downgrade", "origin", "origin-when-cross-origin", "same-origin", "strict-origin", "strict-origin-when-cross-origin", "unsafe-url"].includes(val);
    }
  },
  shape: {
    type: String,
    "default": "square",
    validator: function validator(val) {
      if (!val) return true;
      return ["circle", "round", "square"].includes(val);
    }
  },
  src: {
    type: [String, Object]
  },
  srcset: {
    type: Object
  },
  onError: Function,
  onLoad: Function
};

exports["default"] = props;
//# sourceMappingURL=props.js.map
