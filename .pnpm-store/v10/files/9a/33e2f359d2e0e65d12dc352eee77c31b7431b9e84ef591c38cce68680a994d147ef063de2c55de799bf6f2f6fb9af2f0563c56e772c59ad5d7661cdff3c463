/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

var dateRangePickerProps = {
  allowInput: Boolean,
  borderless: Boolean,
  cancelRangeSelectLimit: Boolean,
  clearable: Boolean,
  defaultTime: {
    type: Array,
    "default": function _default() {
      return ["00:00:00", "23:59:59"];
    }
  },
  disableTime: {
    type: Function
  },
  disableDate: {
    type: [Object, Array, Function]
  },
  disabled: {
    type: Boolean,
    "default": void 0
  },
  enableTimePicker: Boolean,
  firstDayOfWeek: {
    type: Number,
    validator: function validator(val) {
      if (!val) return true;
      return [1, 2, 3, 4, 5, 6, 7].includes(val);
    }
  },
  format: {
    type: String,
    "default": ""
  },
  label: {
    type: [String, Function]
  },
  mode: {
    type: String,
    "default": "date",
    validator: function validator(val) {
      if (!val) return true;
      return ["year", "quarter", "month", "week", "date"].includes(val);
    }
  },
  needConfirm: {
    type: Boolean,
    "default": true
  },
  panelPreselection: {
    type: Boolean,
    "default": true
  },
  placeholder: {
    type: [String, Array]
  },
  popupProps: {
    type: Object
  },
  prefixIcon: {
    type: Function
  },
  presets: {
    type: Object
  },
  presetsPlacement: {
    type: String,
    "default": "bottom",
    validator: function validator(val) {
      if (!val) return true;
      return ["left", "top", "right", "bottom"].includes(val);
    }
  },
  rangeInputProps: {
    type: Object
  },
  readonly: {
    type: Boolean,
    "default": void 0
  },
  separator: {
    type: String,
    "default": ""
  },
  size: {
    type: String,
    "default": "medium",
    validator: function validator(val) {
      if (!val) return true;
      return ["small", "medium", "large"].includes(val);
    }
  },
  status: {
    type: String,
    "default": "default",
    validator: function validator(val) {
      if (!val) return true;
      return ["default", "success", "warning", "error"].includes(val);
    }
  },
  suffixIcon: {
    type: Function
  },
  timePickerProps: {
    type: Object
  },
  tips: {
    type: [String, Function]
  },
  value: {
    type: Array,
    "default": void 0
  },
  modelValue: {
    type: Array,
    "default": void 0
  },
  defaultValue: {
    type: Array,
    "default": function _default() {
      return [];
    }
  },
  valueType: {
    type: String,
    validator: function validator(val) {
      if (!val) return true;
      return ["time-stamp", "Date", "YYYY", "YYYY-MM", "YYYY-MM-DD", "YYYY-MM-DD HH", "YYYY-MM-DD HH:mm", "YYYY-MM-DD HH:mm:ss", "YYYY-MM-DD HH:mm:ss:SSS"].includes(val);
    }
  },
  onBlur: Function,
  onChange: Function,
  onConfirm: Function,
  onFocus: Function,
  onInput: Function,
  onPick: Function,
  onPresetClick: Function
};

export { dateRangePickerProps as default };
//# sourceMappingURL=date-range-picker-props.mjs.map
