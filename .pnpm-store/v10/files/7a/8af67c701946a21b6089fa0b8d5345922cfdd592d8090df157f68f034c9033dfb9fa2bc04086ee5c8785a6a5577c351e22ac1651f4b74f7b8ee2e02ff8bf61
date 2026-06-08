/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { isVNode, defineComponent, ref, computed, h, createVNode, mergeProps } from 'vue';
import { _ as _typeof } from '../../_chunks/dep-257428bc.mjs';
import { _ as _defineProperty } from '../../_chunks/dep-1dacc319.mjs';
import { isFunction } from 'lodash-es';
import { getColumnFixedStyles } from '../hooks/useFixed.mjs';
import useClassName from '../hooks/useClassName.mjs';
import { renderTitle } from '../hooks/useTableHeader.mjs';
import TEllipsis from './ellipsis.mjs';
import { formatClassNames } from '../utils/index.mjs';
import '../../_chunks/dep-9003fde5.mjs';
import '../../_chunks/dep-9f459d8b.mjs';
import '../../_chunks/dep-6d2705e1.mjs';
import '../../_chunks/dep-97ecacde.mjs';
import '../../_chunks/dep-03148507.mjs';
import '../../_chunks/dep-0cde7579.mjs';
import '../../_chunks/dep-00b4e06a.mjs';
import '../../_chunks/dep-0dcc778a.mjs';
import '../../_chunks/dep-51a43106.mjs';
import '../../_chunks/dep-fe644854.mjs';
import '../../_chunks/dep-7673347f.mjs';
import '../../config-provider/hooks/useConfig.mjs';
import '../../config-provider/utils/context.mjs';
import '../../_chunks/dep-a4c09318.mjs';
import '../../_chunks/dep-ffb85102.mjs';
import '../../_chunks/dep-ad588525.mjs';
import '../../_chunks/dep-22ebd6af.mjs';
import '../../_chunks/dep-cdd448ec.mjs';
import '../../_chunks/dep-84fd47b3.mjs';
import '../../_chunks/dep-d36c4a3f.mjs';
import '../hooks/useMultiHeader.mjs';
import '../../tooltip/index.mjs';
import '../../tooltip/tooltip.mjs';
import '../../tooltip/props.mjs';
import '../../popup/props.mjs';
import '../../popup/index.mjs';
import '../../popup/popup.mjs';
import '@popperjs/core';
import '../../popup/container.mjs';
import './style/css.mjs';
import '../../tooltip/utils/index.mjs';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !isVNode(s);
}
var THead = defineComponent({
  name: "THead",
  props: {
    classPrefix: String,
    ellipsisOverlayClassName: String,
    isFixedHeader: Boolean,
    thDraggable: Boolean,
    maxHeight: [String, Number],
    height: [String, Number],
    rowAndColFixedPosition: Map,
    thWidthList: Object,
    bordered: Boolean,
    isMultipleHeader: Boolean,
    resizable: Boolean,
    attach: [String, Function],
    spansAndLeafNodes: Object,
    thList: Array,
    columnResizeParams: Object,
    showColumnShadow: Object
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var theadRef = ref();
    var classnames = useClassName();
    var tableHeaderClasses = classnames.tableHeaderClasses,
      tableBaseClass = classnames.tableBaseClass;
    var theadClasses = computed(function () {
      return [tableHeaderClasses.header, _defineProperty(_defineProperty(_defineProperty({}, tableHeaderClasses.fixed, Boolean(props.maxHeight || props.height)), tableBaseClass.bordered, props.bordered && props.isMultipleHeader), tableHeaderClasses.multipleHeader, props.isMultipleHeader)];
    });
    var colspanSkipMap = computed(function () {
      var map = {};
      var _processColumns = function processColumns(columns) {
        for (var i = 0, len = columns.length; i < len; i++) {
          var item = columns[i];
          if (item.colspan > 1) {
            for (var j = i + 1; j < i + item.colspan; j++) {
              if (columns[j]) {
                map[columns[j].colKey] = true;
              }
            }
          }
          if (item.children) {
            _processColumns(item.children);
          }
        }
      };
      var list = props.thList[0];
      _processColumns(list);
      return map;
    });
    var getTableNode = function getTableNode(thead) {
      var parent = thead;
      while (parent) {
        var _parent;
        parent = parent.parentNode;
        if ((_parent = parent) !== null && _parent !== void 0 && (_parent = _parent.classList) !== null && _parent !== void 0 && _parent.contains("".concat(props.classPrefix, "-table"))) {
          break;
        }
      }
      return parent;
    };
    return function () {
      var renderThNodeList = function renderThNodeList(rowAndColFixedPosition, thWidthList) {
        var thBorderMap = /* @__PURE__ */new Map();
        var thRowspanAndColspan = props.spansAndLeafNodes.rowspanAndColspanMap;
        return props.thList.map(function (row, rowIndex) {
          var thRow = row.map(function (col, index) {
            var _col$children;
            if (colspanSkipMap.value[col.colKey]) return null;
            var rowspanAndColspan = thRowspanAndColspan.get(col);
            if (index === 0 && rowspanAndColspan.rowspan > 1) {
              for (var j = rowIndex + 1; j < rowIndex + rowspanAndColspan.rowspan; j++) {
                thBorderMap.set(props.thList[j][0], true);
              }
            }
            var thStyles = getColumnFixedStyles(col, index, props.rowAndColFixedPosition, classnames.tableColFixedClasses);
            var colParams = {
              col: col,
              colIndex: index,
              row: {},
              rowIndex: -1
            };
            var customClasses = formatClassNames(col.className, _objectSpread(_objectSpread({}, colParams), {}, {
              type: "th"
            }));
            var thCustomClasses = formatClassNames(col.thClassName, _objectSpread(_objectSpread({}, colParams), {}, {
              type: "th"
            }));
            var isLeftFixedActive = props.showColumnShadow.left && col.fixed === "left";
            var isRightFixedActive = props.showColumnShadow.right && col.fixed === "right";
            var canDragSort = props.thDraggable && !(isLeftFixedActive || isRightFixedActive);
            var thClasses = [thStyles.classes, customClasses, thCustomClasses, _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, tableHeaderClasses.thBordered, thBorderMap.get(col)), "".concat(props.classPrefix, "-table__th-").concat(col.colKey), col.colKey), classnames.tdAlignClasses[col.align], col.align && col.align !== "left"), classnames.tableDraggableClasses.dragSortTh, canDragSort)];
            var withoutChildren = !((_col$children = col.children) !== null && _col$children !== void 0 && _col$children.length);
            var width = withoutChildren && thWidthList !== null && thWidthList !== void 0 && thWidthList[col.colKey] ? "".concat(thWidthList === null || thWidthList === void 0 ? void 0 : thWidthList[col.colKey], "px") : void 0;
            var styles = _objectSpread(_objectSpread({}, thStyles.style || {}), {}, {
              width: width
            });
            var innerTh = renderTitle(slots, col, index);
            var resizeColumnListener = props.resizable || !canDragSort ? {
              onMousedown: function onMousedown(e) {
                if (props.resizable) {
                  var _props$columnResizePa, _props$columnResizePa2;
                  (_props$columnResizePa = props.columnResizeParams) === null || _props$columnResizePa === void 0 || (_props$columnResizePa2 = _props$columnResizePa.onColumnMousedown) === null || _props$columnResizePa2 === void 0 || _props$columnResizePa2.call(_props$columnResizePa, e, col, index);
                }
                if (!canDragSort) {
                  var timer = setTimeout(function () {
                    var _thList$index;
                    var thList = theadRef.value.querySelectorAll("th");
                    (_thList$index = thList[index]) === null || _thList$index === void 0 || _thList$index.removeAttribute("draggable");
                    clearTimeout(timer);
                  }, 10);
                }
              },
              onMousemove: function onMousemove(e) {
                var _props$columnResizePa3, _props$columnResizePa4;
                props.resizable && ((_props$columnResizePa3 = props.columnResizeParams) === null || _props$columnResizePa3 === void 0 || (_props$columnResizePa4 = _props$columnResizePa3.onColumnMouseover) === null || _props$columnResizePa4 === void 0 ? void 0 : _props$columnResizePa4.call(_props$columnResizePa3, e, col));
              }
            } : {};
            var content = isFunction(col.ellipsisTitle) ? col.ellipsisTitle(h, {
              col: col,
              colIndex: index
            }) : void 0;
            var isEllipsis = col.ellipsisTitle !== void 0 ? Boolean(col.ellipsisTitle) : Boolean(col.ellipsis);
            var attrs = (isFunction(col.attrs) ? col.attrs(_objectSpread(_objectSpread({}, colParams), {}, {
              type: "th"
            })) : col.attrs) || {};
            if (col.colspan > 1) {
              attrs.colspan = col.colspan;
            }
            return createVNode("th", mergeProps({
              "key": col.colKey,
              "data-colkey": col.colKey,
              "class": thClasses,
              "style": styles
            }, attrs, rowspanAndColspan, resizeColumnListener), [createVNode("div", {
              "class": tableBaseClass.thCellInner
            }, [isEllipsis ? createVNode(TEllipsis, {
              "placement": "bottom",
              "attach": props.attach || (theadRef.value ? function () {
                return getTableNode(theadRef.value);
              } : void 0),
              "tooltipContent": content && function () {
                return content;
              },
              "tooltipProps": _typeof(col.ellipsisTitle) === "object" ? col.ellipsisTitle : void 0,
              "overlayClassName": props.ellipsisOverlayClassName,
              "classPrefix": props.classPrefix
            }, _isSlot(innerTh) ? innerTh : {
              "default": function _default() {
                return [innerTh];
              }
            }) : innerTh])]);
          });
          return createVNode("tr", {
            "key": rowIndex
          }, [thRow]);
        });
      };
      return createVNode("thead", {
        "ref": theadRef,
        "class": theadClasses.value
      }, [renderThNodeList(props.rowAndColFixedPosition, props.thWidthList)]);
    };
  }
});

export { THead as default };
//# sourceMappingURL=thead.mjs.map
