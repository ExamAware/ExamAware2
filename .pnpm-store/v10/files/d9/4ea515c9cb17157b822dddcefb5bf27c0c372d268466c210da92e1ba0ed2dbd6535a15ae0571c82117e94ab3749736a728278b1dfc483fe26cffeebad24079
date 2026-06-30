/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var tdesignIconsVueNext = require('tdesign-icons-vue-next');
var table_hooks_useClassName = require('../hooks/useClassName.js');
var tooltip_index = require('../../tooltip/index.js');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../../_chunks/dep-953a77eb.js');
var index = require('../../_chunks/dep-47c460dd.js');
var configProvider_hooks_useConfig = require('../../config-provider/hooks/useConfig.js');
var index$1 = require('../../_chunks/dep-31c76dc6.js');
require('@babel/runtime/helpers/slicedToArray');
require('../../_chunks/dep-cc66acf1.js');
require('../../_chunks/dep-ecaaae91.js');
require('../../_chunks/dep-8abdfb41.js');
require('../../_chunks/dep-5d7e2375.js');
require('../../_chunks/dep-94a7dc2d.js');
require('dayjs');
require('../../_chunks/dep-92e23f17.js');
require('../../_chunks/dep-0ff616fe.js');
require('../../_chunks/dep-5f52cd42.js');
require('../../_chunks/dep-48f60c78.js');
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
require('../../_chunks/dep-a55e8a08.js');
require('../../_chunks/dep-8adeee89.js');
require('../../_chunks/dep-4d2ef282.js');
require('../../_chunks/dep-929933ce.js');
require('../../_chunks/dep-6b1f0ef8.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');
require('../../tooltip/tooltip.js');
require('../../tooltip/props.js');
require('../../popup/props.js');
require('../../popup/index.js');
require('../../popup/popup.js');
require('@popperjs/core');
require('../../_chunks/dep-06276759.js');
require('../../_chunks/dep-8382953f.js');
require('../../_chunks/dep-c3dee00a.js');
require('../../_chunks/dep-e8ff2c13.js');
require('../../_chunks/dep-23f77e26.js');
require('../../_chunks/dep-ee355a9a.js');
require('../../_chunks/dep-71fa6bfc.js');
require('../../_chunks/dep-80a478d7.js');
require('../../popup/container.js');
require('../../_chunks/dep-b6058ff9.js');
require('../../_chunks/dep-39403bd1.js');
require('../../_chunks/dep-e86abdd2.js');
require('../../_chunks/dep-3a7785db.js');
require('../../_chunks/dep-441a3b7b.js');
require('../../_chunks/dep-4fa46641.js');
require('../../_chunks/dep-422dd97f.js');
require('../../_chunks/dep-427dabac.js');
require('../../_chunks/dep-72c4cc44.js');
require('../../_chunks/dep-d62a674d.js');
require('../../tooltip/utils/index.js');
require('../../_chunks/dep-ace0b57c.js');
require('../../_chunks/dep-ac11336c.js');
require('../../_chunks/dep-11b67e11.js');
require('../../_chunks/dep-dcb859c6.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !Vue.isVNode(s);
}
var SorterButton = Vue.defineComponent({
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
    var _useClassName = table_hooks_useClassName["default"](),
      tableSortClasses = _useClassName.tableSortClasses,
      negativeRotate180 = _useClassName.negativeRotate180;
    var renderTNode = index.useTNodeDefault();
    var _useConfig = configProvider_hooks_useConfig.useConfig("table", props.locale),
      t = _useConfig.t,
      globalConfig = _useConfig.globalConfig;
    var _useGlobalIcon = index$1.useGlobalIcon({
        ChevronDownIcon: tdesignIconsVueNext.ChevronDownIcon
      }),
      ChevronDownIcon = _useGlobalIcon.ChevronDownIcon;
    var allowSortTypes = Vue.computed(function () {
      return props.sortType === "all" ? ["asc", "desc"] : [props.sortType];
    });
    var onSortIconClick = function onSortIconClick(e, direction) {
      context.emit("sort-icon-click", e, {
        descending: direction === "desc"
      });
    };
    var getSortIcon = function getSortIcon(direction, activeClass) {
      var defaultIcon = t(globalConfig.value.sortIcon) || Vue.createVNode(ChevronDownIcon, null, null);
      var icon = renderTNode("sortIcon", defaultIcon);
      var sortClassName = [activeClass, tableSortClasses.sortIcon, tableSortClasses.iconDirection[direction], _defineProperty__default["default"]({}, negativeRotate180, direction === "asc")];
      return Vue.createVNode("span", {
        "class": sortClassName,
        "onClick": function onClick(e) {
          return onSortIconClick(e, direction);
        }
      }, [icon]);
    };
    return function () {
      var classes = [tableSortClasses.trigger, _defineProperty__default["default"]({}, tableSortClasses.doubleIcon, allowSortTypes.value.length > 1)];
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
        return Vue.createVNode(tooltip_index.Tooltip, Vue.mergeProps({
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
      return Vue.createVNode("div", {
        "class": classes
      }, [sortButton]);
    };
  }
});

exports["default"] = SorterButton;
//# sourceMappingURL=sorter-button.js.map
