/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, computed, createVNode, mergeProps, isVNode } from 'vue';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { ChevronDownIcon } from 'tdesign-icons-vue-next';
import useClassName from '../hooks/useClassName.js';
import { Tooltip } from '../../tooltip/index.js';
import 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../../_chunks/dep-fe23be6e.js';
import { b as useTNodeDefault } from '../../_chunks/dep-2accc95a.js';
import { useConfig } from '../../config-provider/hooks/useConfig.js';
import { u as useGlobalIcon } from '../../_chunks/dep-3a7a2ef1.js';
import '@babel/runtime/helpers/slicedToArray';
import '../../_chunks/dep-880d05b9.js';
import '../../_chunks/dep-9e6d8a78.js';
import '../../_chunks/dep-81b01cae.js';
import '../../config-provider/utils/context.js';
import '../../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '../../tooltip/tooltip.js';
import '../../tooltip/props.js';
import '../../popup/props.js';
import '../../popup/index.js';
import '../../popup/popup.js';
import '@popperjs/core';
import '../../_chunks/dep-16bcfabc.js';
import '../../_chunks/dep-4f8b6591.js';
import '../../_chunks/dep-2ea19dca.js';
import '../../_chunks/dep-51e5a827.js';
import '../../popup/container.js';
import '../../_chunks/dep-80a77612.js';
import '../../_chunks/dep-fb805f69.js';
import '../../_chunks/dep-664b8b22.js';
import '../../tooltip/utils/index.js';

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
//# sourceMappingURL=sorter-button.js.map
