/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../../_chunks/dep-953a77eb.js');
var index = require('../../_chunks/dep-47c460dd.js');
require('../../config-provider/hooks/useConfig.js');
require('@babel/runtime/helpers/slicedToArray');
require('../../_chunks/dep-cc66acf1.js');
var table_utils_index = require('../utils/index.js');
var table_hooks_useFixed = require('../hooks/useFixed.js');
var table_hooks_useRowspanAndColspan = require('../hooks/useRowspanAndColspan.js');
var table_hooks_useClassName = require('../hooks/useClassName.js');
var isFunction = require('../../_chunks/dep-48f60c78.js');
var isString = require('../../_chunks/dep-a55e8a08.js');
var get = require('../../_chunks/dep-cd8cfdc0.js');
require('../../_chunks/dep-8abdfb41.js');
require('../../_chunks/dep-06276759.js');
require('../../_chunks/dep-4fa46641.js');
require('../../_chunks/dep-0813861e.js');
require('../../_chunks/dep-87589faa.js');
require('../../_chunks/dep-422dd97f.js');
require('../../_chunks/dep-71fa6bfc.js');
require('../../_chunks/dep-b3b464e8.js');
require('../../_chunks/dep-80a478d7.js');
require('../../_chunks/dep-05f89f0d.js');
require('../../_chunks/dep-427dabac.js');
require('../../_chunks/dep-72c4cc44.js');
require('../../_chunks/dep-ee355a9a.js');
require('../../_chunks/dep-23f77e26.js');
require('../../_chunks/dep-5d7e2375.js');
require('../../_chunks/dep-94a7dc2d.js');
require('dayjs');
require('../../_chunks/dep-92e23f17.js');
require('../../_chunks/dep-0ff616fe.js');
require('../../_chunks/dep-5f52cd42.js');
require('../../_chunks/dep-f57bcb19.js');
require('../../_chunks/dep-dc4bbc14.js');
require('../../_chunks/dep-e27ea667.js');
require('../../_chunks/dep-165ca38a.js');
require('../../_chunks/dep-32412d92.js');
require('../../_chunks/dep-a8a3d718.js');
require('../../_chunks/dep-54e566d9.js');
require('../../_chunks/dep-591a72de.js');
require('../../_chunks/dep-8adeee89.js');
require('../../_chunks/dep-4d2ef282.js');
require('../../_chunks/dep-929933ce.js');
require('../../_chunks/dep-6b1f0ef8.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');
require('../../_chunks/dep-733b2b51.js');
require('../../_chunks/dep-7067edce.js');
require('../../_chunks/dep-55c70201.js');
require('@babel/runtime/helpers/objectWithoutProperties');
require('../../_chunks/dep-fd5a369e.js');
require('../../_chunks/dep-4ccaead1.js');
require('../../_chunks/dep-990979bb.js');
require('../../_chunks/dep-01738d56.js');
require('../../_chunks/dep-8b33876c.js');
require('../../_chunks/dep-445924d5.js');
require('../../_chunks/dep-dcb859c6.js');
require('../../_chunks/dep-0e08f598.js');
require('../../_chunks/dep-912c9727.js');
require('../../_chunks/dep-11b67e11.js');
require('../../_chunks/dep-b5e1f81f.js');
require('../../_chunks/dep-ac11336c.js');
require('../../_chunks/dep-04599720.js');
require('../../_chunks/dep-9ce6873a.js');
require('../../_chunks/dep-441a3b7b.js');
require('../../_chunks/dep-e86abdd2.js');
require('../../_chunks/dep-ecaaae91.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var TFoot = Vue.defineComponent({
  name: "TFoot",
  props: {
    rowKey: String,
    isFixedHeader: Boolean,
    rowAndColFixedPosition: Map,
    footData: Array,
    columns: Array,
    rowAttributes: [Array, Object, Function],
    rowClassName: [Array, String, Object, Function],
    thWidthList: [Object],
    footerSummary: [String, Function],
    rowspanAndColspanInFooter: Function,
    virtualScroll: Boolean
  },
  setup: function setup(props, context) {
    var renderTNode = index.useTNodeJSX();
    var classnames = table_hooks_useClassName["default"]();
    var _toRefs = Vue.toRefs(props),
      footData = _toRefs.footData,
      columns = _toRefs.columns,
      rowKey = _toRefs.rowKey,
      rowspanAndColspanInFooter = _toRefs.rowspanAndColspanInFooter;
    var _useRowspanAndColspan = table_hooks_useRowspanAndColspan["default"](footData, columns, rowKey, rowspanAndColspanInFooter),
      skipSpansMap = _useRowspanAndColspan.skipSpansMap;
    var renderTFootCell = function renderTFootCell(p) {
      var col = p.col,
        row = p.row;
      if (isFunction.isFunction(col.foot)) {
        return col.foot(Vue.h, p);
      }
      if (isString.isString(col.foot) && context.slots[col.foot]) {
        return context.slots[col.foot](p) || col.foot;
      }
      return col.foot || get.get(row, col.colKey);
    };
    return function () {
      var _props$footData;
      if (!columns.value) return null;
      var theadClasses = [classnames.tableFooterClasses.footer, _defineProperty__default["default"]({}, classnames.tableFooterClasses.fixed, props.isFixedHeader)];
      var footerDomList = (_props$footData = props.footData) === null || _props$footData === void 0 ? void 0 : _props$footData.map(function (row, rowIndex) {
        var trAttributes = table_utils_index.formatRowAttributes(props.rowAttributes, {
          row: row,
          rowIndex: rowIndex,
          type: "foot"
        });
        var customClasses = table_utils_index.formatRowClassNames(props.rowClassName, {
          row: row,
          rowIndex: rowIndex,
          type: "foot"
        }, rowKey.value || "id");
        return Vue.createVNode("tr", Vue.mergeProps(trAttributes, {
          "key": rowIndex,
          "class": customClasses
        }), [columns.value.map(function (col, colIndex) {
          var _props$thWidthList;
          var cellSpans = {};
          var spanState = null;
          if (skipSpansMap.value.size) {
            var _spanState, _spanState2;
            var cellKey = table_hooks_useRowspanAndColspan.getCellKey(row, rowKey.value, col.colKey, colIndex);
            spanState = skipSpansMap.value.get(cellKey) || {};
            ((_spanState = spanState) === null || _spanState === void 0 ? void 0 : _spanState.rowspan) > 1 && (cellSpans.rowspan = spanState.rowspan);
            ((_spanState2 = spanState) === null || _spanState2 === void 0 ? void 0 : _spanState2.colspan) > 1 && (cellSpans.colspan = spanState.colspan);
            if (spanState.skipped) return null;
          }
          var tdStyles = table_hooks_useFixed.getColumnFixedStyles(col, colIndex, props.rowAndColFixedPosition, classnames.tableColFixedClasses);
          var style = _objectSpread({}, tdStyles.style);
          if ((_props$thWidthList = props.thWidthList) !== null && _props$thWidthList !== void 0 && _props$thWidthList[col.colKey]) {
            style.width = "".concat(props.thWidthList[col.colKey], "px");
          }
          return Vue.createVNode("td", Vue.mergeProps(_objectSpread({
            key: col.colKey
          }, cellSpans), {
            "class": tdStyles.classes,
            "style": style
          }), [renderTFootCell({
            row: row,
            rowIndex: rowIndex,
            col: col,
            colIndex: colIndex
          })]);
        })]);
      });
      var footerSummary = renderTNode("footerSummary");
      if (!footerSummary && (!props.footData || !props.footData.length)) return null;
      return Vue.createVNode("tfoot", {
        "class": theadClasses,
        "style": {
          visibility: props.virtualScroll ? "hidden" : "visible"
        }
      }, [footerSummary && Vue.createVNode("tr", {
        "class": classnames.tableFullRowClasses.base
      }, [Vue.createVNode("td", {
        "colspan": columns.value.length
      }, [Vue.createVNode("div", {
        "class": classnames.tableFullRowClasses.innerFullElement
      }, [footerSummary])])]), footerDomList]);
    };
  }
});

exports["default"] = TFoot;
//# sourceMappingURL=tfoot.js.map
