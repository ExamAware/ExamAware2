/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, computed, createVNode, Fragment } from 'vue';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _toConsumableArray from '@babel/runtime/helpers/toConsumableArray';
import dayjs from 'dayjs';
import 'lodash-es';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-fe23be6e.js';
import { a as useContent } from '../_chunks/dep-2accc95a.js';
import { u as useCommonClassName } from '../_chunks/dep-4f8b6591.js';
import '../config-provider/hooks/useConfig.js';
import '@babel/runtime/helpers/slicedToArray';
import '../_chunks/dep-880d05b9.js';
import { useCalendarCellClass } from './hooks/useCalendarClass.js';
import '../_chunks/dep-81b01cae.js';
import '../_chunks/dep-16bcfabc.js';
import '../_chunks/dep-fb805f69.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '../_chunks/dep-9e6d8a78.js';
import './consts/index.js';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var clickTypeEmitEventMap = {
  click: "click",
  dblclick: "dblclick",
  contextmenu: "rightclick"
};
var CalendarCellItem = defineComponent({
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
  emits: _toConsumableArray(Object.values(clickTypeEmitEventMap)),
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var renderContent = useContent();
    var cls = useCalendarCellClass();
    var _useCommonClassName = useCommonClassName(),
      STATUS = _useCommonClassName.STATUS;
    var valueDisplay = computed(function () {
      if (props.item.mode === "month") {
        var _ref2, _props$fillWithZero;
        var dateNum = props.item.date.getDate();
        var fillZero = dateNum < 10 && ((_ref2 = (_props$fillWithZero = props.fillWithZero) !== null && _props$fillWithZero !== void 0 ? _props$fillWithZero : props.global.fillWithZero) !== null && _ref2 !== void 0 ? _ref2 : true);
        return fillZero ? "0".concat(dateNum) : dateNum;
      }
      var map = props.t(props.global.cellMonth).split(",");
      return map[props.item.date.getMonth().toString()];
    });
    var allowSlot = computed(function () {
      return props.theme === "full";
    });
    var disabled = computed(function () {
      return props.item.mode === "month" && props.item.belongTo !== 0;
    });
    var cellCls = computed(function () {
      var _props$item = props.item,
        mode = _props$item.mode,
        date = _props$item.date,
        formattedDate = _props$item.formattedDate,
        isCurrent = _props$item.isCurrent;
      var now = new Date();
      var isNow = mode === "year" ? now.getMonth() === date.getMonth() && now.getFullYear() === date.getFullYear() : formattedDate === dayjs().format("YYYY-MM-DD");
      return [cls.tableBodyCell.value, _defineProperty(_defineProperty(_defineProperty({}, STATUS.value.disabled, disabled.value), STATUS.value.checked, isCurrent), cls.tableBodyCell4Now.value, isNow)];
    });
    var clickCell = function clickCell(e) {
      if (disabled.value) return;
      var emitName = clickTypeEmitEventMap[e.type];
      emit(emitName, e);
    };
    var renderDefaultNode = function renderDefaultNode() {
      return createVNode(Fragment, null, [createVNode("div", {
        "class": cls.tableBodyCellDisplay.value
      }, [valueDisplay.value]), createVNode("div", {
        "class": cls.tableBodyCellCsontent.value
      }, [allowSlot.value && renderContent("cellAppend", void 0, {
        params: _objectSpread({}, props.item)
      })])]);
    };
    return function () {
      return props.item && createVNode("td", {
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

export { CalendarCellItem as default };
//# sourceMappingURL=calendar-cell.js.map
