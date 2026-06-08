/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

var dialogCardProps = {
  body: {
    type: [String, Function]
  },
  cancelBtn: {
    type: [String, Object, Function]
  },
  closeBtn: {
    type: [String, Boolean, Function],
    "default": true
  },
  confirmBtn: {
    type: [String, Object, Function]
  },
  confirmLoading: {
    type: Boolean,
    "default": void 0
  },
  footer: {
    type: [Boolean, Function]
  },
  header: {
    type: [String, Boolean, Function],
    "default": true
  },
  theme: {
    type: String,
    "default": "default",
    validator: function validator(val) {
      if (!val) return true;
      return ["default", "info", "warning", "danger", "success"].includes(val);
    }
  },
  onCancel: Function,
  onCloseBtnClick: Function,
  onConfirm: Function
};

export { dialogCardProps as default };
//# sourceMappingURL=dialog-card-props.mjs.map
