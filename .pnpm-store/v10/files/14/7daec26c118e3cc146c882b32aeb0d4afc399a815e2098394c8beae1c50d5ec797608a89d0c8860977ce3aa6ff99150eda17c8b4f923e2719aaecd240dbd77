/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

var props = {
  attach: {
    type: [String, Function],
    "default": "body"
  },
  closeBtn: {
    type: [Boolean, Function],
    "default": true
  },
  closeOnEscKeydown: {
    type: Boolean,
    "default": true
  },
  closeOnOverlay: Boolean,
  draggable: {
    type: Boolean,
    "default": void 0
  },
  imageReferrerpolicy: {
    type: String,
    validator: function validator(val) {
      if (!val) return true;
      return ["no-referrer", "no-referrer-when-downgrade", "origin", "origin-when-cross-origin", "same-origin", "strict-origin", "strict-origin-when-cross-origin", "unsafe-url"].includes(val);
    }
  },
  imageScale: {
    type: Object
  },
  images: {
    type: Array,
    "default": function _default() {
      return [];
    }
  },
  index: {
    type: Number,
    "default": void 0
  },
  defaultIndex: {
    type: Number,
    "default": 0
  },
  mode: {
    type: String,
    "default": "modal",
    validator: function validator(val) {
      if (!val) return true;
      return ["modal", "modeless"].includes(val);
    }
  },
  navigationArrow: {
    type: [Boolean, Function],
    "default": true
  },
  showOverlay: {
    type: Boolean,
    "default": void 0
  },
  title: {
    type: [String, Function]
  },
  trigger: {
    type: [String, Function]
  },
  viewerScale: {
    type: Object
  },
  visible: {
    type: Boolean,
    "default": void 0
  },
  modelValue: {
    type: Boolean,
    "default": void 0
  },
  defaultVisible: Boolean,
  zIndex: {
    type: Number
  },
  onClose: Function,
  onDownload: Function,
  onIndexChange: Function
};

export { props as default };
//# sourceMappingURL=props.js.map
