/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { computed, h, createVNode, isVNode } from 'vue';
import _typeof from '@babel/runtime/helpers/typeof';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { isFunction, isString } from 'lodash-es';
import { getThRowspanAndColspan, getThList } from './useMultiHeader.js';
import useClassName from './useClassName.js';
import TEllipsis from '../components/ellipsis.js';
import '@babel/runtime/helpers/toConsumableArray';
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
import '../../_chunks/dep-16bcfabc.js';
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
function renderTitle(slots, col, index) {
  var params = {
    col: col,
    colIndex: index
  };
  if (isFunction(col.title)) {
    return col.title(h, params);
  }
  if (isString(col.title) && slots[col.title]) {
    return slots[col.title](params);
  }
  if (isFunction(col.render)) {
    return col.render(h, _objectSpread(_objectSpread({}, params), {}, {
      type: "title",
      row: {},
      rowIndex: -1
    })) || col.title;
  }
  return col.title;
}
function useTableHeader(props) {
  var _useClassName = useClassName(),
    tableSortClasses = _useClassName.tableSortClasses,
    tableFilterClasses = _useClassName.tableFilterClasses;
  var spansAndLeafNodes = computed(function () {
    return getThRowspanAndColspan(props.columns);
  });
  var thList = computed(function () {
    return getThList(props.columns);
  });
  var isMultipleHeader = computed(function () {
    return thList.value.length > 1;
  });
  var renderTitleWidthIcon = function renderTitleWidthIcon(_ref, col, colIndex, ellipsisTitle, attach, extra) {
    var _ref2 = _slicedToArray(_ref, 3),
      title = _ref2[0],
      sortIcon = _ref2[1],
      filterIcon = _ref2[2];
    var classes = _defineProperty(_defineProperty({}, tableSortClasses.sortable, sortIcon), tableFilterClasses.filterable, filterIcon);
    var content = isFunction(ellipsisTitle) ? ellipsisTitle(h, {
      col: col,
      colIndex: colIndex
    }) : void 0;
    var isEllipsis = ellipsisTitle !== void 0 ? Boolean(ellipsisTitle) : Boolean(col.ellipsis);
    return createVNode("div", {
      "class": classes
    }, [createVNode("div", {
      "class": tableSortClasses.title
    }, [isEllipsis ? createVNode(TEllipsis, {
      "placement": "bottom",
      "attach": props.attach || (attach ? function () {
        return attach;
      } : void 0),
      "tooltipContent": content && function () {
        return content;
      },
      "tooltipProps": _typeof(ellipsisTitle) === "object" ? ellipsisTitle : void 0,
      "classPrefix": extra === null || extra === void 0 ? void 0 : extra.classPrefix,
      "overlayClassName": extra === null || extra === void 0 ? void 0 : extra.ellipsisOverlayClassName
    }, _isSlot(title) ? title : {
      "default": function _default() {
        return [title];
      }
    }) : createVNode("div", null, [title]), Boolean(sortIcon || filterIcon) && createVNode("div", {
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

export { useTableHeader as default, renderTitle };
//# sourceMappingURL=useTableHeader.js.map
