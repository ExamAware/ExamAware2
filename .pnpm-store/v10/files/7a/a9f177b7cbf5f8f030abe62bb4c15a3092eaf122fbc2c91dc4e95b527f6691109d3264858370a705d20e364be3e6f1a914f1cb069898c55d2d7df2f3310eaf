/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, ref, computed, createVNode, h, mergeProps, isVNode } from 'vue';
import _typeof from '@babel/runtime/helpers/typeof';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { isFunction } from 'lodash-es';
import { getColumnFixedStyles } from '../hooks/useFixed.js';
import useClassName from '../hooks/useClassName.js';
import { renderTitle } from '../hooks/useTableHeader.js';
import TEllipsis from './ellipsis.js';
import { formatClassNames } from '../utils/index.js';
import '@babel/runtime/helpers/slicedToArray';
import '../../_chunks/dep-8295e674.js';
import '../../_chunks/dep-167f0981.js';
import '../../_chunks/dep-80a99546.js';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/objectWithoutProperties';
import '../../_chunks/dep-16bcfabc.js';
import '../../_chunks/dep-fe23be6e.js';
import '../../_chunks/dep-81b01cae.js';
import '../../_chunks/dep-9e6d8a78.js';
import '../../config-provider/hooks/useConfig.js';
import '../../config-provider/utils/context.js';
import '../../_chunks/dep-938cd955.js';
import 'dayjs';
import '../../_chunks/dep-880d05b9.js';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '../hooks/useMultiHeader.js';
import '../../_chunks/dep-2accc95a.js';
import '../../_chunks/dep-fb805f69.js';
import '../../tooltip/index.js';
import '../../tooltip/tooltip.js';
import '../../tooltip/props.js';
import '../../popup/props.js';
import '../../popup/index.js';
import '../../popup/popup.js';
import '@popperjs/core';
import '../../_chunks/dep-4f8b6591.js';
import '../../_chunks/dep-2ea19dca.js';
import '../../_chunks/dep-51e5a827.js';
import '../../popup/container.js';
import '../../_chunks/dep-80a77612.js';
import '../../_chunks/dep-664b8b22.js';
import '../../tooltip/utils/index.js';

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
//# sourceMappingURL=thead.js.map
