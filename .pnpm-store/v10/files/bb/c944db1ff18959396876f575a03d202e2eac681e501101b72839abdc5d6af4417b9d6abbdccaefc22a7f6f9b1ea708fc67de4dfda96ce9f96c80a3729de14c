/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var _toConsumableArray = require('@babel/runtime/helpers/toConsumableArray');
var dayjs = require('dayjs');
require('@babel/runtime/helpers/typeof');
require('../_chunks/dep-953a77eb.js');
var index = require('../_chunks/dep-47c460dd.js');
var index$1 = require('../_chunks/dep-8382953f.js');
require('../config-provider/hooks/useConfig.js');
require('@babel/runtime/helpers/slicedToArray');
require('../_chunks/dep-cc66acf1.js');
var calendar_hooks_useCalendarClass = require('./hooks/useCalendarClass.js');
require('../_chunks/dep-8abdfb41.js');
require('../_chunks/dep-06276759.js');
require('../_chunks/dep-48f60c78.js');
require('../_chunks/dep-b3b464e8.js');
require('../_chunks/dep-0813861e.js');
require('../_chunks/dep-a55e8a08.js');
require('../_chunks/dep-87589faa.js');
require('../_chunks/dep-05f89f0d.js');
require('../_chunks/dep-4fa46641.js');
require('../_chunks/dep-422dd97f.js');
require('../_chunks/dep-71fa6bfc.js');
require('../_chunks/dep-80a478d7.js');
require('../_chunks/dep-427dabac.js');
require('../_chunks/dep-72c4cc44.js');
require('../_chunks/dep-ee355a9a.js');
require('../_chunks/dep-23f77e26.js');
require('../_chunks/dep-5d7e2375.js');
require('../_chunks/dep-94a7dc2d.js');
require('../_chunks/dep-92e23f17.js');
require('../_chunks/dep-0ff616fe.js');
require('../_chunks/dep-5f52cd42.js');
require('../_chunks/dep-f57bcb19.js');
require('../_chunks/dep-dc4bbc14.js');
require('../_chunks/dep-e27ea667.js');
require('../_chunks/dep-165ca38a.js');
require('../_chunks/dep-32412d92.js');
require('../_chunks/dep-a8a3d718.js');
require('../_chunks/dep-54e566d9.js');
require('../_chunks/dep-591a72de.js');
require('../_chunks/dep-8adeee89.js');
require('../_chunks/dep-4d2ef282.js');
require('../_chunks/dep-929933ce.js');
require('../_chunks/dep-6b1f0ef8.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');
require('../_chunks/dep-ecaaae91.js');
require('./consts/index.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);
var _toConsumableArray__default = /*#__PURE__*/_interopDefaultLegacy(_toConsumableArray);
var dayjs__default = /*#__PURE__*/_interopDefaultLegacy(dayjs);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var clickTypeEmitEventMap = {
  click: "click",
  dblclick: "dblclick",
  contextmenu: "rightclick"
};
var CalendarCellItem = Vue.defineComponent({
  name: "TCalendarCell",
  inheritAttrs: false,
  props: {
    item: {
      type: Object,
      "default": function _default() {
        return null;
      }
    },
    fillWithZero: {
      type: Boolean,
      "default": void 0
    },
    theme: {
      type: String,
      "default": function _default() {
        return null;
      }
    },
    t: Function,
    global: Object,
    cell: [String, Function],
    cellAppend: [String, Function]
  },
  emits: _toConsumableArray__default["default"](Object.values(clickTypeEmitEventMap)),
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var renderContent = index.useContent();
    var cls = calendar_hooks_useCalendarClass.useCalendarCellClass();
    var _useCommonClassName = index$1.useCommonClassName(),
      STATUS = _useCommonClassName.STATUS;
    var valueDisplay = Vue.computed(function () {
      if (props.item.mode === "month") {
        var _ref2, _props$fillWithZero;
        var dateNum = props.item.date.getDate();
        var fillZero = dateNum < 10 && ((_ref2 = (_props$fillWithZero = props.fillWithZero) !== null && _props$fillWithZero !== void 0 ? _props$fillWithZero : props.global.fillWithZero) !== null && _ref2 !== void 0 ? _ref2 : true);
        return fillZero ? "0".concat(dateNum) : dateNum;
      }
      var map = props.t(props.global.cellMonth).split(",");
      return map[props.item.date.getMonth().toString()];
    });
    var allowSlot = Vue.computed(function () {
      return props.theme === "full";
    });
    var disabled = Vue.computed(function () {
      return props.item.mode === "month" && props.item.belongTo !== 0;
    });
    var cellCls = Vue.computed(function () {
      var _props$item = props.item,
        mode = _props$item.mode,
        date = _props$item.date,
        formattedDate = _props$item.formattedDate,
        isCurrent = _props$item.isCurrent;
      var now = new Date();
      var isNow = mode === "year" ? now.getMonth() === date.getMonth() && now.getFullYear() === date.getFullYear() : formattedDate === dayjs__default["default"]().format("YYYY-MM-DD");
      return [cls.tableBodyCell.value, _defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"]({}, STATUS.value.disabled, disabled.value), STATUS.value.checked, isCurrent), cls.tableBodyCell4Now.value, isNow)];
    });
    var clickCell = function clickCell(e) {
      if (disabled.value) return;
      var emitName = clickTypeEmitEventMap[e.type];
      emit(emitName, e);
    };
    var renderDefaultNode = function renderDefaultNode() {
      return Vue.createVNode(Vue.Fragment, null, [Vue.createVNode("div", {
        "class": cls.tableBodyCellDisplay.value
      }, [valueDisplay.value]), Vue.createVNode("div", {
        "class": cls.tableBodyCellCsontent.value
      }, [allowSlot.value && renderContent("cellAppend", void 0, {
        params: _objectSpread({}, props.item)
      })])]);
    };
    return function () {
      return props.item && Vue.createVNode("td", {
        "class": cellCls.value,
        "onClick": clickCell,
        "onDblclick": clickCell,
        "onContextmenu": clickCell
      }, [renderContent("cell", void 0, {
        defaultNode: renderDefaultNode(),
        params: _objectSpread({}, props.item)
      })]);
    };
  }
});

exports["default"] = CalendarCellItem;
//# sourceMappingURL=calendar-cell.js.map
