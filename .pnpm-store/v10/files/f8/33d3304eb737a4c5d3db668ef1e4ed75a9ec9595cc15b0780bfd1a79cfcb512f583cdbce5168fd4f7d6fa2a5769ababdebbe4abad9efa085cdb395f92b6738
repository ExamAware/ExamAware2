/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

var props = {
  cancelBtn: {
    type: [String, Object, Function],
    "default": ""
  },
  confirmBtn: {
    type: [String, Object, Function],
    "default": ""
  },
  content: {
    type: [String, Function]
  },
  "default": {
    type: [String, Function]
  },
  destroyOnClose: {
    type: Boolean,
    "default": true
  },
  icon: {
    type: Function
  },
  placement: {
    type: String,
    "default": "top",
    validator: function validator(val) {
      if (!val) return true;
      return ["top", "left", "right", "bottom", "top-left", "top-right", "bottom-left", "bottom-right", "left-top", "left-bottom", "right-top", "right-bottom"].includes(val);
    }
  },
  popupProps: {
    type: Object
  },
  showArrow: {
    type: Boolean,
    "default": true
  },
  theme: {
    type: String,
    "default": "default",
    validator: function validator(val) {
      if (!val) return true;
      return ["default", "warning", "danger"].includes(val);
    }
  },
  triggerElement: {
    type: [String, Function]
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
  onCancel: Function,
  onConfirm: Function,
  onVisibleChange: Function
};

export { props as default };
//# sourceMappingURL=props.mjs.map
