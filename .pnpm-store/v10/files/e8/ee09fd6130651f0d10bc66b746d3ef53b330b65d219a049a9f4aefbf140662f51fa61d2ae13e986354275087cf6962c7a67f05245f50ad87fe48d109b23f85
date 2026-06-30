/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

var props = {
  colon: Boolean,
  data: {
    type: Object,
    "default": function _default() {
      return {};
    }
  },
  disabled: {
    type: Boolean,
    "default": void 0
  },
  errorMessage: {
    type: Object
  },
  id: {
    type: String,
    "default": void 0
  },
  labelAlign: {
    type: String,
    "default": "right",
    validator: function validator(val) {
      if (!val) return true;
      return ["left", "right", "top"].includes(val);
    }
  },
  labelWidth: {
    type: [String, Number],
    "default": "100px"
  },
  layout: {
    type: String,
    "default": "vertical",
    validator: function validator(val) {
      if (!val) return true;
      return ["vertical", "inline"].includes(val);
    }
  },
  preventSubmitDefault: {
    type: Boolean,
    "default": true
  },
  readonly: {
    type: Boolean,
    "default": void 0
  },
  requiredMark: {
    type: Boolean,
    "default": void 0
  },
  requiredMarkPosition: {
    type: String,
    validator: function validator(val) {
      if (!val) return true;
      return ["left", "right"].includes(val);
    }
  },
  resetType: {
    type: String,
    "default": "empty",
    validator: function validator(val) {
      if (!val) return true;
      return ["empty", "initial"].includes(val);
    }
  },
  rules: {
    type: Object
  },
  scrollToFirstError: {
    type: String,
    validator: function validator(val) {
      if (!val) return true;
      return ["", "smooth", "auto"].includes(val);
    }
  },
  showErrorMessage: {
    type: Boolean,
    "default": true
  },
  statusIcon: {
    type: [Boolean, Function],
    "default": void 0
  },
  submitWithWarningMessage: Boolean,
  onReset: Function,
  onSubmit: Function,
  onValidate: Function
};

export { props as default };
//# sourceMappingURL=props.js.map
