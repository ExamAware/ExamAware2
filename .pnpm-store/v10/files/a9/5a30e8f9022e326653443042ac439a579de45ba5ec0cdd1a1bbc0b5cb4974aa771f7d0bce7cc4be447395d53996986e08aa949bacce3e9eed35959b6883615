/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { isVNode, defineComponent, computed, createVNode, mergeProps } from 'vue';
import { _ as _defineProperty } from '../../_chunks/dep-1dacc319.mjs';
import { ChevronDownIcon } from 'tdesign-icons-vue-next';
import useClassName from '../hooks/useClassName.mjs';
import { Tooltip } from '../../tooltip/index.mjs';
import { q as useTNodeDefault, i as useGlobalIcon } from '../../_chunks/dep-7673347f.mjs';
import { useConfig } from '../../config-provider/hooks/useConfig.mjs';
import '../../_chunks/dep-257428bc.mjs';
import 'lodash-es';
import '../../_chunks/dep-00b4e06a.mjs';
import '../../_chunks/dep-9f459d8b.mjs';
import '../../_chunks/dep-51a43106.mjs';
import '../../_chunks/dep-fe644854.mjs';
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
import '../../tooltip/tooltip.mjs';
import '../../tooltip/props.mjs';
import '../../popup/props.mjs';
import '../../popup/index.mjs';
import '../../popup/popup.mjs';
import '@popperjs/core';
import '../../popup/container.mjs';
import './style/css.mjs';
import '../../tooltip/utils/index.mjs';

function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !isVNode(s);
}
var SorterButton = defineComponent({
  name: "TSorterButton",
  props: {
    sortType: {
      type: String,
      "default": "all"
    },
    sortOrder: {
      type: String,
      "default": function _default() {
        return "";
      }
    },
    locale: Object,
    sortIcon: Function,
    tooltipProps: Object,
    hideSortTips: Boolean
  },
  emits: ["sort-icon-click"],
  setup: function setup(props, context) {
    var _useClassName = useClassName(),
      tableSortClasses = _useClassName.tableSortClasses,
      negativeRotate180 = _useClassName.negativeRotate180;
    var renderTNode = useTNodeDefault();
    var _useConfig = useConfig("table", props.locale),
      t = _useConfig.t,
      globalConfig = _useConfig.globalConfig;
    var _useGlobalIcon = useGlobalIcon({
        ChevronDownIcon: ChevronDownIcon
      }),
      ChevronDownIcon$1 = _useGlobalIcon.ChevronDownIcon;
    var allowSortTypes = computed(function () {
      return props.sortType === "all" ? ["asc", "desc"] : [props.sortType];
    });
    var onSortIconClick = function onSortIconClick(e, direction) {
      context.emit("sort-icon-click", e, {
        descending: direction === "desc"
      });
    };
    var getSortIcon = function getSortIcon(direction, activeClass) {
      var defaultIcon = t(globalConfig.value.sortIcon) || createVNode(ChevronDownIcon$1, null, null);
      var icon = renderTNode("sortIcon", defaultIcon);
      var sortClassName = [activeClass, tableSortClasses.sortIcon, tableSortClasses.iconDirection[direction], _defineProperty({}, negativeRotate180, direction === "asc")];
      return createVNode("span", {
        "class": sortClassName,
        "onClick": function onClick(e) {
          return onSortIconClick(e, direction);
        }
      }, [icon]);
    };
    return function () {
      var classes = [tableSortClasses.trigger, _defineProperty({}, tableSortClasses.doubleIcon, allowSortTypes.value.length > 1)];
      var tooltips = {
        asc: globalConfig.value.sortAscendingOperationText,
        desc: globalConfig.value.sortDescendingOperationText
      };
      var sortButton = allowSortTypes.value.map(function (direction) {
        var _slot;
        var _props$hideSortTips;
        var activeClass = direction === props.sortOrder ? tableSortClasses.iconActive : tableSortClasses.iconDefault;
        var cancelTips = globalConfig.value.sortCancelOperationText;
        var tips = direction === props.sortOrder ? cancelTips : tooltips[direction];
        if ((_props$hideSortTips = props.hideSortTips) !== null && _props$hideSortTips !== void 0 ? _props$hideSortTips : globalConfig.value.hideSortTips) return getSortIcon(direction, activeClass);
        return createVNode(Tooltip, mergeProps({
          "content": tips,
          "placement": "right",
          "showArrow": false,
          "class": tableSortClasses.iconDirection[direction]
        }, props.tooltipProps), _isSlot(_slot = getSortIcon(direction, activeClass)) ? _slot : {
          "default": function _default() {
            return [_slot];
          }
        });
      });
      return createVNode("div", {
        "class": classes
      }, [sortButton]);
    };
  }
});

export { SorterButton as default };
//# sourceMappingURL=sorter-button.mjs.map
