/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _typeof = require('@babel/runtime/helpers/typeof');
var breadcrumb_props = require('./props.js');
var breadcrumb_breadcrumbItem = require('./breadcrumb-item.js');
require('@babel/runtime/helpers/toConsumableArray');
require('../_chunks/dep-953a77eb.js');
var index$1 = require('../_chunks/dep-47c460dd.js');
var index = require('../_chunks/dep-ecaaae91.js');
var index$2 = require('../_chunks/dep-31c76dc6.js');
require('@babel/runtime/helpers/slicedToArray');
require('../_chunks/dep-cc66acf1.js');
require('@babel/runtime/helpers/defineProperty');
var breadcrumb_hooks_useEllipsis = require('./hooks/useEllipsis.js');
var breadcrumb_hooks_useBreadcrumbOptions = require('./hooks/useBreadcrumbOptions.js');
var tdesignIconsVueNext = require('tdesign-icons-vue-next');
require('./breadcrumb-item-props.js');
require('../tooltip/index.js');
require('../tooltip/tooltip.js');
require('../tooltip/props.js');
require('../popup/props.js');
require('../popup/index.js');
require('../popup/popup.js');
require('@popperjs/core');
require('../_chunks/dep-06276759.js');
require('../_chunks/dep-48f60c78.js');
require('../_chunks/dep-b3b464e8.js');
require('../_chunks/dep-0813861e.js');
require('../_chunks/dep-a55e8a08.js');
require('../_chunks/dep-87589faa.js');
require('../_chunks/dep-05f89f0d.js');
require('../_chunks/dep-8382953f.js');
require('../config-provider/hooks/useConfig.js');
require('../_chunks/dep-5d7e2375.js');
require('../_chunks/dep-94a7dc2d.js');
require('../_chunks/dep-8abdfb41.js');
require('dayjs');
require('../_chunks/dep-92e23f17.js');
require('../_chunks/dep-0ff616fe.js');
require('../_chunks/dep-5f52cd42.js');
require('../_chunks/dep-f57bcb19.js');
require('../_chunks/dep-dc4bbc14.js');
require('../_chunks/dep-e27ea667.js');
require('../_chunks/dep-165ca38a.js');
require('../_chunks/dep-32412d92.js');
require('../_chunks/dep-a8a3d718.js');
require('../_chunks/dep-54e566d9.js');
require('../_chunks/dep-591a72de.js');
require('../_chunks/dep-8adeee89.js');
require('../_chunks/dep-4d2ef282.js');
require('../_chunks/dep-929933ce.js');
require('../_chunks/dep-6b1f0ef8.js');
require('../_chunks/dep-c3dee00a.js');
require('../_chunks/dep-e8ff2c13.js');
require('../_chunks/dep-23f77e26.js');
require('../_chunks/dep-ee355a9a.js');
require('../_chunks/dep-71fa6bfc.js');
require('../_chunks/dep-80a478d7.js');
require('../popup/container.js');
require('../_chunks/dep-b6058ff9.js');
require('../_chunks/dep-39403bd1.js');
require('../_chunks/dep-e86abdd2.js');
require('../_chunks/dep-3a7785db.js');
require('../_chunks/dep-441a3b7b.js');
require('../_chunks/dep-d62a674d.js');
require('../_chunks/dep-4fa46641.js');
require('../_chunks/dep-422dd97f.js');
require('../_chunks/dep-427dabac.js');
require('../_chunks/dep-72c4cc44.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');
require('../tooltip/utils/index.js');
require('../_chunks/dep-ace0b57c.js');
require('../_chunks/dep-ac11336c.js');
require('../_chunks/dep-11b67e11.js');
require('../_chunks/dep-dcb859c6.js');
require('../_chunks/dep-733b2b51.js');
require('../_chunks/dep-3565d523.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _typeof__default = /*#__PURE__*/_interopDefaultLegacy(_typeof);

var _Breadcrumb = Vue.defineComponent({
  name: "TBreadcrumb",
  props: breadcrumb_props["default"],
  setup: function setup(props2) {
    var _toRefs = Vue.toRefs(props2),
      theme = _toRefs.theme,
      maxItemWidth = _toRefs.maxItemWidth;
    var COMPONENT_NAME = index.usePrefixClass("breadcrumb");
    var renderTNodeJSX = index$1.useTNodeJSX();
    var _useGlobalIcon = index$2.useGlobalIcon({
        ChevronRightIcon: tdesignIconsVueNext.ChevronRightIcon,
        EllipsisIcon: tdesignIconsVueNext.EllipsisIcon
      }),
      ChevronRightIcon = _useGlobalIcon.ChevronRightIcon,
      EllipsisIcon = _useGlobalIcon.EllipsisIcon;
    var separatorContent = renderTNodeJSX("separator");
    var separator = separatorContent || Vue.createVNode(ChevronRightIcon, null, null);
    Vue.provide("tBreadcrumb", Vue.reactive({
      separator: separator,
      theme: theme,
      maxItemWidth: maxItemWidth
    }));
    return function () {
      var _useBreadcrumbOptions = breadcrumb_hooks_useBreadcrumbOptions.useBreadcrumbOptions(props2),
        breadcrumbOptions = _useBreadcrumbOptions.breadcrumbOptions;
      var ellipsisItems = breadcrumbOptions.value.slice(props2.itemsBeforeCollapse, breadcrumbOptions.value.length - props2.itemsAfterCollapse);
      var ellipsisSlot = renderTNodeJSX("ellipsis", {
        params: {
          items: ellipsisItems,
          separator: separator
        }
      });
      var ellipsisContent = ellipsisSlot || Vue.createVNode(EllipsisIcon, null, null);
      var _useEllipsis = breadcrumb_hooks_useEllipsis.useEllipsis(props2, breadcrumbOptions, ellipsisContent),
        getDisplayItems = _useEllipsis.getDisplayItems;
      var items = getDisplayItems.value;
      var content = items.map(function (item, index) {
        if (_typeof__default["default"](item) === "object" && "content" in item) {
          return Vue.createVNode(breadcrumb_breadcrumbItem["default"], Vue.mergeProps({
            "key": index
          }, item), {
            "default": function _default() {
              return [item.content];
            }
          });
        }
        return item;
      });
      return Vue.createVNode("div", {
        "class": COMPONENT_NAME.value
      }, [content]);
    };
  }
});

exports["default"] = _Breadcrumb;
//# sourceMappingURL=breadcrumb.js.map
