/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _typeof = require('@babel/runtime/helpers/typeof');
var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var table_hooks_useMultiHeader = require('./useMultiHeader.js');
var table_hooks_useClassName = require('./useClassName.js');
var table_components_ellipsis = require('../components/ellipsis.js');
var isFunction = require('../../_chunks/dep-48f60c78.js');
var isString = require('../../_chunks/dep-a55e8a08.js');
require('@babel/runtime/helpers/toConsumableArray');
require('../../_chunks/dep-953a77eb.js');
require('../../_chunks/dep-8abdfb41.js');
require('../../_chunks/dep-ecaaae91.js');
require('../../config-provider/hooks/useConfig.js');
require('../../_chunks/dep-5d7e2375.js');
require('../../_chunks/dep-94a7dc2d.js');
require('dayjs');
require('../../_chunks/dep-92e23f17.js');
require('../../_chunks/dep-0ff616fe.js');
require('../../_chunks/dep-5f52cd42.js');
require('../../_chunks/dep-b3b464e8.js');
require('../../_chunks/dep-0813861e.js');
require('../../_chunks/dep-f57bcb19.js');
require('../../_chunks/dep-dc4bbc14.js');
require('../../_chunks/dep-05f89f0d.js');
require('../../_chunks/dep-87589faa.js');
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
require('../../_chunks/dep-cc66acf1.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');
require('../../_chunks/dep-06276759.js');
require('../../_chunks/dep-47c460dd.js');
require('../../_chunks/dep-4fa46641.js');
require('../../_chunks/dep-422dd97f.js');
require('../../_chunks/dep-71fa6bfc.js');
require('../../_chunks/dep-80a478d7.js');
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
require('../../_chunks/dep-e86abdd2.js');
require('../../_chunks/dep-3a7785db.js');
require('../../_chunks/dep-441a3b7b.js');
require('../../_chunks/dep-d62a674d.js');
require('../../tooltip/utils/index.js');
require('../../_chunks/dep-ace0b57c.js');
require('../../_chunks/dep-ac11336c.js');
require('../../_chunks/dep-11b67e11.js');
require('../../_chunks/dep-dcb859c6.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _typeof__default = /*#__PURE__*/_interopDefaultLegacy(_typeof);
var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);
var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !Vue.isVNode(s);
}
function renderTitle(slots, col, index) {
  var params = {
    col: col,
    colIndex: index
  };
  if (isFunction.isFunction(col.title)) {
    return col.title(Vue.h, params);
  }
  if (isString.isString(col.title) && slots[col.title]) {
    return slots[col.title](params);
  }
  if (isFunction.isFunction(col.render)) {
    return col.render(Vue.h, _objectSpread(_objectSpread({}, params), {}, {
      type: "title",
      row: {},
      rowIndex: -1
    })) || col.title;
  }
  return col.title;
}
function useTableHeader(props) {
  var _useClassName = table_hooks_useClassName["default"](),
    tableSortClasses = _useClassName.tableSortClasses,
    tableFilterClasses = _useClassName.tableFilterClasses;
  var spansAndLeafNodes = Vue.computed(function () {
    return table_hooks_useMultiHeader.getThRowspanAndColspan(props.columns);
  });
  var thList = Vue.computed(function () {
    return table_hooks_useMultiHeader.getThList(props.columns);
  });
  var isMultipleHeader = Vue.computed(function () {
    return thList.value.length > 1;
  });
  var renderTitleWidthIcon = function renderTitleWidthIcon(_ref, col, colIndex, ellipsisTitle, attach, extra) {
    var _ref2 = _slicedToArray__default["default"](_ref, 3),
      title = _ref2[0],
      sortIcon = _ref2[1],
      filterIcon = _ref2[2];
    var classes = _defineProperty__default["default"](_defineProperty__default["default"]({}, tableSortClasses.sortable, sortIcon), tableFilterClasses.filterable, filterIcon);
    var content = isFunction.isFunction(ellipsisTitle) ? ellipsisTitle(Vue.h, {
      col: col,
      colIndex: colIndex
    }) : void 0;
    var isEllipsis = ellipsisTitle !== void 0 ? Boolean(ellipsisTitle) : Boolean(col.ellipsis);
    return Vue.createVNode("div", {
      "class": classes
    }, [Vue.createVNode("div", {
      "class": tableSortClasses.title
    }, [isEllipsis ? Vue.createVNode(table_components_ellipsis["default"], {
      "placement": "bottom",
      "attach": props.attach || (attach ? function () {
        return attach;
      } : void 0),
      "tooltipContent": content && function () {
        return content;
      },
      "tooltipProps": _typeof__default["default"](ellipsisTitle) === "object" ? ellipsisTitle : void 0,
      "classPrefix": extra === null || extra === void 0 ? void 0 : extra.classPrefix,
      "overlayClassName": extra === null || extra === void 0 ? void 0 : extra.ellipsisOverlayClassName
    }, _isSlot(title) ? title : {
      "default": function _default() {
        return [title];
      }
    }) : Vue.createVNode("div", null, [title]), Boolean(sortIcon || filterIcon) && Vue.createVNode("div", {
      "class": tableFilterClasses.iconWrap
    }, [sortIcon, filterIcon])])]);
  };
  return {
    thList: thList,
    isMultipleHeader: isMultipleHeader,
    spansAndLeafNodes: spansAndLeafNodes,
    renderTitleWidthIcon: renderTitleWidthIcon
  };
}

exports["default"] = useTableHeader;
exports.renderTitle = renderTitle;
//# sourceMappingURL=useTableHeader.js.map
