/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, toRefs, h, createVNode, mergeProps } from 'vue';
import { _ as _defineProperty } from '../../_chunks/dep-1dacc319.mjs';
import { isFunction, isString, get } from 'lodash-es';
import { a as useTNodeJSX } from '../../_chunks/dep-7673347f.mjs';
import { formatRowAttributes, formatRowClassNames } from '../utils/index.mjs';
import { getColumnFixedStyles } from '../hooks/useFixed.mjs';
import useRowspanAndColspan, { getCellKey } from '../hooks/useRowspanAndColspan.mjs';
import useClassName from '../hooks/useClassName.mjs';
import '../../_chunks/dep-257428bc.mjs';
import '../../_chunks/dep-00b4e06a.mjs';
import '../../_chunks/dep-9f459d8b.mjs';
import '../../_chunks/dep-51a43106.mjs';
import '../../_chunks/dep-fe644854.mjs';
import '../../config-provider/hooks/useConfig.mjs';
import '../../config-provider/utils/context.mjs';
import '../../_chunks/dep-a4c09318.mjs';
import '../../_chunks/dep-ffb85102.mjs';
import '../../_chunks/dep-ad588525.mjs';
import '../../_chunks/dep-9003fde5.mjs';
import '../../_chunks/dep-22ebd6af.mjs';
import '../../_chunks/dep-cdd448ec.mjs';
import '../../_chunks/dep-97ecacde.mjs';
import '../../_chunks/dep-84fd47b3.mjs';
import '../../_chunks/dep-d36c4a3f.mjs';
import '../../_chunks/dep-6d2705e1.mjs';
import '../../_chunks/dep-03148507.mjs';
import '../../_chunks/dep-0cde7579.mjs';
import '../../_chunks/dep-0dcc778a.mjs';

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
//# sourceMappingURL=tfoot.mjs.map
