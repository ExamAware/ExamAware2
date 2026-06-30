/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

var props = {
  cell: {
    type: [String, Function]
  },
  cellAppend: {
    type: [String, Function]
  },
  controllerConfig: {
    type: [Boolean, Object],
    "default": void 0
  },
  fillWithZero: {
    type: Boolean,
    "default": void 0
  },
  firstDayOfWeek: {
    type: Number,
    validator: function validator(val) {
      if (!val) return true;
      return [1, 2, 3, 4, 5, 6, 7].includes(val);
    }
  },
  format: {
    type: String,
    "default": "YYYY-MM-DD"
  },
  head: {
    type: [String, Function]
  },
  isShowWeekendDefault: {
    type: Boolean,
    "default": true
  },
  mode: {
    type: String,
    "default": "month",
    validator: function validator(val) {
      if (!val) return true;
      return ["month", "year"].includes(val);
    }
  },
  month: {
    type: [String, Number]
  },
  multiple: Boolean,
  preventCellContextmenu: Boolean,
  range: {
    type: Array
  },
  theme: {
    type: String,
    "default": "full",
    validator: function validator(val) {
      if (!val) return true;
      return ["full", "card"].includes(val);
    }
  },
  value: {
    type: [String, Array, Date]
  },
  week: {
    type: [Array, Function]
  },
  year: {
    type: [String, Number]
  },
  onCellClick: Function,
  onCellDoubleClick: Function,
  onCellRightClick: Function,
  onControllerChange: Function,
  onMonthChange: Function
};

export { props as default };
//# sourceMappingURL=props.js.map
