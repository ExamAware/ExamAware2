/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, toRefs, createVNode, mergeProps, h } from 'vue';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { isFunction, isString, get } from 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../../_chunks/dep-fe23be6e.js';
import { u as useTNodeJSX } from '../../_chunks/dep-2accc95a.js';
import '../../config-provider/hooks/useConfig.js';
import '@babel/runtime/helpers/slicedToArray';
import '../../_chunks/dep-880d05b9.js';
import { formatRowAttributes, formatRowClassNames } from '../utils/index.js';
import { getColumnFixedStyles } from '../hooks/useFixed.js';
import useRowspanAndColspan, { getCellKey } from '../hooks/useRowspanAndColspan.js';
import useClassName from '../hooks/useClassName.js';
import '../../_chunks/dep-81b01cae.js';
import '../../_chunks/dep-16bcfabc.js';
import '../../_chunks/dep-fb805f69.js';
import '../../config-provider/utils/context.js';
import '../../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '../../_chunks/dep-8295e674.js';
import '../../_chunks/dep-167f0981.js';
import '../../_chunks/dep-80a99546.js';
import '@babel/runtime/helpers/objectWithoutProperties';
import '../../_chunks/dep-9e6d8a78.js';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var TFoot = defineComponent({
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
    var renderTNode = useTNodeJSX();
    var classnames = useClassName();
    var _toRefs = toRefs(props),
      footData = _toRefs.footData,
      columns = _toRefs.columns,
      rowKey = _toRefs.rowKey,
      rowspanAndColspanInFooter = _toRefs.rowspanAndColspanInFooter;
    var _useRowspanAndColspan = useRowspanAndColspan(footData, columns, rowKey, rowspanAndColspanInFooter),
      skipSpansMap = _useRowspanAndColspan.skipSpansMap;
    var renderTFootCell = function renderTFootCell(p) {
      var col = p.col,
        row = p.row;
      if (isFunction(col.foot)) {
        return col.foot(h, p);
      }
      if (isString(col.foot) && context.slots[col.foot]) {
        return context.slots[col.foot](p) || col.foot;
      }
      return col.foot || get(row, col.colKey);
    };
    return function () {
      var _props$footData;
      if (!columns.value) return null;
      var theadClasses = [classnames.tableFooterClasses.footer, _defineProperty({}, classnames.tableFooterClasses.fixed, props.isFixedHeader)];
      var footerDomList = (_props$footData = props.footData) === null || _props$footData === void 0 ? void 0 : _props$footData.map(function (row, rowIndex) {
        var trAttributes = formatRowAttributes(props.rowAttributes, {
          row: row,
          rowIndex: rowIndex,
          type: "foot"
        });
        var customClasses = formatRowClassNames(props.rowClassName, {
          row: row,
          rowIndex: rowIndex,
          type: "foot"
        }, rowKey.value || "id");
        return createVNode("tr", mergeProps(trAttributes, {
          "key": rowIndex,
          "class": customClasses
        }), [columns.value.map(function (col, colIndex) {
          var _props$thWidthList;
          var cellSpans = {};
          var spanState = null;
          if (skipSpansMap.value.size) {
            var _spanState, _spanState2;
            var cellKey = getCellKey(row, rowKey.value, col.colKey, colIndex);
            spanState = skipSpansMap.value.get(cellKey) || {};
            ((_spanState = spanState) === null || _spanState === void 0 ? void 0 : _spanState.rowspan) > 1 && (cellSpans.rowspan = spanState.rowspan);
            ((_spanState2 = spanState) === null || _spanState2 === void 0 ? void 0 : _spanState2.colspan) > 1 && (cellSpans.colspan = spanState.colspan);
            if (spanState.skipped) return null;
          }
          var tdStyles = getColumnFixedStyles(col, colIndex, props.rowAndColFixedPosition, classnames.tableColFixedClasses);
          var style = _objectSpread({}, tdStyles.style);
          if ((_props$thWidthList = props.thWidthList) !== null && _props$thWidthList !== void 0 && _props$thWidthList[col.colKey]) {
            style.width = "".concat(props.thWidthList[col.colKey], "px");
          }
          return createVNode("td", mergeProps(_objectSpread({
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
      return createVNode("tfoot", {
        "class": theadClasses,
        "style": {
          visibility: props.virtualScroll ? "hidden" : "visible"
        }
      }, [footerSummary && createVNode("tr", {
        "class": classnames.tableFullRowClasses.base
      }, [createVNode("td", {
        "colspan": columns.value.length
      }, [createVNode("div", {
        "class": classnames.tableFullRowClasses.innerFullElement
      }, [footerSummary])])]), footerDomList]);
    };
  }
});

export { TFoot as default };
//# sourceMappingURL=tfoot.js.map
