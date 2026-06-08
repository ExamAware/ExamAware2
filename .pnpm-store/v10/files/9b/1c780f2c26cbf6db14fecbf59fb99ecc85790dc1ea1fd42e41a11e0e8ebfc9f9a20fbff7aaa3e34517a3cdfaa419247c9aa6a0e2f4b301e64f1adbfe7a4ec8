/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _typeof = require('@babel/runtime/helpers/typeof');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var table_hooks_useFixed = require('../hooks/useFixed.js');
var table_hooks_useClassName = require('../hooks/useClassName.js');
var table_hooks_useTableHeader = require('../hooks/useTableHeader.js');
var table_components_ellipsis = require('./ellipsis.js');
var table_utils_index = require('../utils/index.js');
var isFunction = require('../../_chunks/dep-48f60c78.js');
require('@babel/runtime/helpers/slicedToArray');
require('../../_chunks/dep-733b2b51.js');
require('../../_chunks/dep-7067edce.js');
require('../../_chunks/dep-55c70201.js');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/objectWithoutProperties');
require('../../_chunks/dep-fd5a369e.js');
require('../../_chunks/dep-4ccaead1.js');
require('../../_chunks/dep-a55e8a08.js');
require('../../_chunks/dep-b3b464e8.js');
require('../../_chunks/dep-87589faa.js');
require('../../_chunks/dep-05f89f0d.js');
require('../../_chunks/dep-990979bb.js');
require('../../_chunks/dep-06276759.js');
require('../../_chunks/dep-953a77eb.js');
require('../../_chunks/dep-8abdfb41.js');
require('../../_chunks/dep-6b1f0ef8.js');
require('../../_chunks/dep-54e566d9.js');
require('../../_chunks/dep-0ff616fe.js');
require('../../_chunks/dep-5f52cd42.js');
require('../../_chunks/dep-0813861e.js');
require('../../_chunks/dep-f57bcb19.js');
require('../../_chunks/dep-165ca38a.js');
require('../../_chunks/dep-01738d56.js');
require('../../_chunks/dep-8b33876c.js');
require('../../_chunks/dep-a8a3d718.js');
require('../../_chunks/dep-445924d5.js');
require('../../_chunks/dep-71fa6bfc.js');
require('../../_chunks/dep-80a478d7.js');
require('../../_chunks/dep-dc4bbc14.js');
require('../../_chunks/dep-dcb859c6.js');
require('../../_chunks/dep-0e08f598.js');
require('../../_chunks/dep-929933ce.js');
require('../../_chunks/dep-912c9727.js');
require('../../_chunks/dep-11b67e11.js');
require('../../_chunks/dep-b5e1f81f.js');
require('../../_chunks/dep-ac11336c.js');
require('../../_chunks/dep-04599720.js');
require('../../_chunks/dep-32412d92.js');
require('../../_chunks/dep-9ce6873a.js');
require('../../_chunks/dep-441a3b7b.js');
require('../../_chunks/dep-e86abdd2.js');
require('../../_chunks/dep-cd8cfdc0.js');
require('../../_chunks/dep-ecaaae91.js');
require('../../config-provider/hooks/useConfig.js');
require('../../_chunks/dep-5d7e2375.js');
require('../../_chunks/dep-94a7dc2d.js');
require('dayjs');
require('../../_chunks/dep-92e23f17.js');
require('../../_chunks/dep-e27ea667.js');
require('../../_chunks/dep-591a72de.js');
require('../../_chunks/dep-8adeee89.js');
require('../../_chunks/dep-4d2ef282.js');
require('../../_chunks/dep-cc66acf1.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');
require('../hooks/useMultiHeader.js');
require('../../_chunks/dep-47c460dd.js');
require('../../_chunks/dep-4fa46641.js');
require('../../_chunks/dep-422dd97f.js');
require('../../_chunks/dep-427dabac.js');
require('../../_chunks/dep-72c4cc44.js');
require('../../_chunks/dep-ee355a9a.js');
require('../../_chunks/dep-23f77e26.js');
require('../../tooltip/index.js');
require('../../tooltip/tooltip.js');
require('../../tooltip/props.js');
require('../../popup/props.js');
require('../../popup/index.js');
require('../../popup/popup.js');
require('@popperjs/core');
require('../../_chunks/dep-8382953f.js');
require('../../_chunks/dep-c3dee00a.js');
require('../../_chunks/dep-e8ff2c13.js');
require('../../popup/container.js');
require('../../_chunks/dep-b6058ff9.js');
require('../../_chunks/dep-39403bd1.js');
require('../../_chunks/dep-3a7785db.js');
require('../../_chunks/dep-d62a674d.js');
require('../../tooltip/utils/index.js');
require('../../_chunks/dep-ace0b57c.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _typeof__default = /*#__PURE__*/_interopDefaultLegacy(_typeof);
var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !Vue.isVNode(s);
}
var THead = Vue.defineComponent({
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
    var theadRef = Vue.ref();
    var classnames = table_hooks_useClassName["default"]();
    var tableHeaderClasses = classnames.tableHeaderClasses,
      tableBaseClass = classnames.tableBaseClass;
    var theadClasses = Vue.computed(function () {
      return [tableHeaderClasses.header, _defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"]({}, tableHeaderClasses.fixed, Boolean(props.maxHeight || props.height)), tableBaseClass.bordered, props.bordered && props.isMultipleHeader), tableHeaderClasses.multipleHeader, props.isMultipleHeader)];
    });
    var colspanSkipMap = Vue.computed(function () {
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
            var thStyles = table_hooks_useFixed.getColumnFixedStyles(col, index, props.rowAndColFixedPosition, classnames.tableColFixedClasses);
            var colParams = {
              col: col,
              colIndex: index,
              row: {},
              rowIndex: -1
            };
            var customClasses = table_utils_index.formatClassNames(col.className, _objectSpread(_objectSpread({}, colParams), {}, {
              type: "th"
            }));
            var thCustomClasses = table_utils_index.formatClassNames(col.thClassName, _objectSpread(_objectSpread({}, colParams), {}, {
              type: "th"
            }));
            var isLeftFixedActive = props.showColumnShadow.left && col.fixed === "left";
            var isRightFixedActive = props.showColumnShadow.right && col.fixed === "right";
            var canDragSort = props.thDraggable && !(isLeftFixedActive || isRightFixedActive);
            var thClasses = [thStyles.classes, customClasses, thCustomClasses, _defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"]({}, tableHeaderClasses.thBordered, thBorderMap.get(col)), "".concat(props.classPrefix, "-table__th-").concat(col.colKey), col.colKey), classnames.tdAlignClasses[col.align], col.align && col.align !== "left"), classnames.tableDraggableClasses.dragSortTh, canDragSort)];
            var withoutChildren = !((_col$children = col.children) !== null && _col$children !== void 0 && _col$children.length);
            var width = withoutChildren && thWidthList !== null && thWidthList !== void 0 && thWidthList[col.colKey] ? "".concat(thWidthList === null || thWidthList === void 0 ? void 0 : thWidthList[col.colKey], "px") : void 0;
            var styles = _objectSpread(_objectSpread({}, thStyles.style || {}), {}, {
              width: width
            });
            var innerTh = table_hooks_useTableHeader.renderTitle(slots, col, index);
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
            var content = isFunction.isFunction(col.ellipsisTitle) ? col.ellipsisTitle(Vue.h, {
              col: col,
              colIndex: index
            }) : void 0;
            var isEllipsis = col.ellipsisTitle !== void 0 ? Boolean(col.ellipsisTitle) : Boolean(col.ellipsis);
            var attrs = (isFunction.isFunction(col.attrs) ? col.attrs(_objectSpread(_objectSpread({}, colParams), {}, {
              type: "th"
            })) : col.attrs) || {};
            if (col.colspan > 1) {
              attrs.colspan = col.colspan;
            }
            return Vue.createVNode("th", Vue.mergeProps({
              "key": col.colKey,
              "data-colkey": col.colKey,
              "class": thClasses,
              "style": styles
            }, attrs, rowspanAndColspan, resizeColumnListener), [Vue.createVNode("div", {
              "class": tableBaseClass.thCellInner
            }, [isEllipsis ? Vue.createVNode(table_components_ellipsis["default"], {
              "placement": "bottom",
              "attach": props.attach || (theadRef.value ? function () {
                return getTableNode(theadRef.value);
              } : void 0),
              "tooltipContent": content && function () {
                return content;
              },
              "tooltipProps": _typeof__default["default"](col.ellipsisTitle) === "object" ? col.ellipsisTitle : void 0,
              "overlayClassName": props.ellipsisOverlayClassName,
              "classPrefix": props.classPrefix
            }, _isSlot(innerTh) ? innerTh : {
              "default": function _default() {
                return [innerTh];
              }
            }) : innerTh])]);
          });
          return Vue.createVNode("tr", {
            "key": rowIndex
          }, [thRow]);
        });
      };
      return Vue.createVNode("thead", {
        "ref": theadRef,
        "class": theadClasses.value
      }, [renderThNodeList(props.rowAndColFixedPosition, props.thWidthList)]);
    };
  }
});

exports["default"] = THead;
//# sourceMappingURL=thead.js.map
