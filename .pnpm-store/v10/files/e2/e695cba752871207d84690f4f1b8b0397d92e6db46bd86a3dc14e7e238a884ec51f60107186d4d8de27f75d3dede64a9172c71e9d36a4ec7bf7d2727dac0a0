/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { isVNode, h, computed, createVNode } from 'vue';
import { _ as _typeof } from '../../_chunks/dep-257428bc.mjs';
import { _ as _slicedToArray } from '../../_chunks/dep-9003fde5.mjs';
import { _ as _defineProperty } from '../../_chunks/dep-1dacc319.mjs';
import { isFunction, isString } from 'lodash-es';
import { getThRowspanAndColspan, getThList } from './useMultiHeader.mjs';
import useClassName from './useClassName.mjs';
import TEllipsis from '../components/ellipsis.mjs';
import '../../_chunks/dep-9f459d8b.mjs';
import '../../_chunks/dep-7673347f.mjs';
import '../../_chunks/dep-00b4e06a.mjs';
import '../../_chunks/dep-51a43106.mjs';
import '../../_chunks/dep-fe644854.mjs';
import '../../config-provider/hooks/useConfig.mjs';
import '../../config-provider/utils/context.mjs';
import '../../_chunks/dep-a4c09318.mjs';
import '../../_chunks/dep-ffb85102.mjs';
import '../../_chunks/dep-ad588525.mjs';
import '../../_chunks/dep-22ebd6af.mjs';
import '../../_chunks/dep-cdd448ec.mjs';
import '../../_chunks/dep-97ecacde.mjs';
import '../../_chunks/dep-84fd47b3.mjs';
import '../../_chunks/dep-d36c4a3f.mjs';
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
//# sourceMappingURL=useTableHeader.mjs.map
