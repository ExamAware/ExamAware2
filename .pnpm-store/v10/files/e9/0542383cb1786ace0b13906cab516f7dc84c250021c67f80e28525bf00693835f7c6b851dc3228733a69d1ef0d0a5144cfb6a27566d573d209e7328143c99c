/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, toRefs, createVNode, provide, reactive, mergeProps } from 'vue';
import _typeof from '@babel/runtime/helpers/typeof';
import props from './props.js';
import _BreadcrumbItem from './breadcrumb-item.js';
import 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '../_chunks/dep-fe23be6e.js';
import { u as useTNodeJSX } from '../_chunks/dep-2accc95a.js';
import { u as usePrefixClass } from '../_chunks/dep-9e6d8a78.js';
import { u as useGlobalIcon } from '../_chunks/dep-3a7a2ef1.js';
import '@babel/runtime/helpers/slicedToArray';
import '../_chunks/dep-880d05b9.js';
import '@babel/runtime/helpers/defineProperty';
import { useEllipsis } from './hooks/useEllipsis.js';
import { useBreadcrumbOptions } from './hooks/useBreadcrumbOptions.js';
import { ChevronRightIcon, EllipsisIcon } from 'tdesign-icons-vue-next';
import './breadcrumb-item-props.js';
import '../tooltip/index.js';
import '../tooltip/tooltip.js';
import '../tooltip/props.js';
import '../popup/props.js';
import '../popup/index.js';
import '../popup/popup.js';
import '@popperjs/core';
import '../_chunks/dep-16bcfabc.js';
import '../_chunks/dep-4f8b6591.js';
import '../config-provider/hooks/useConfig.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import '../_chunks/dep-81b01cae.js';
import 'dayjs';
import '../_chunks/dep-2ea19dca.js';
import '../_chunks/dep-51e5a827.js';
import '../popup/container.js';
import '../_chunks/dep-80a77612.js';
import '../_chunks/dep-664b8b22.js';
import 'tdesign-vue-next/esm/common/style/web/components/popup/_index.less';
import '../_chunks/dep-fb805f69.js';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '../tooltip/utils/index.js';
import 'tdesign-vue-next/esm/common/style/web/components/tooltip/_index.less';
import '../_chunks/dep-8295e674.js';
import '../_chunks/dep-e3ce8c8f.js';

var _Breadcrumb = defineComponent({
  name: "TBreadcrumb",
  props: props,
  setup: function setup(props2) {
    var _toRefs = toRefs(props2),
      theme = _toRefs.theme,
      maxItemWidth = _toRefs.maxItemWidth;
    var COMPONENT_NAME = usePrefixClass("breadcrumb");
    var renderTNodeJSX = useTNodeJSX();
    var _useGlobalIcon = useGlobalIcon({
        ChevronRightIcon: ChevronRightIcon,
        EllipsisIcon: EllipsisIcon
      }),
      ChevronRightIcon$1 = _useGlobalIcon.ChevronRightIcon,
      EllipsisIcon$1 = _useGlobalIcon.EllipsisIcon;
    var separatorContent = renderTNodeJSX("separator");
    var separator = separatorContent || createVNode(ChevronRightIcon$1, null, null);
    provide("tBreadcrumb", reactive({
      separator: separator,
      theme: theme,
      maxItemWidth: maxItemWidth
    }));
    return function () {
      var _useBreadcrumbOptions = useBreadcrumbOptions(props2),
        breadcrumbOptions = _useBreadcrumbOptions.breadcrumbOptions;
      var ellipsisItems = breadcrumbOptions.value.slice(props2.itemsBeforeCollapse, breadcrumbOptions.value.length - props2.itemsAfterCollapse);
      var ellipsisSlot = renderTNodeJSX("ellipsis", {
        params: {
          items: ellipsisItems,
          separator: separator
        }
      });
      var ellipsisContent = ellipsisSlot || createVNode(EllipsisIcon$1, null, null);
      var _useEllipsis = useEllipsis(props2, breadcrumbOptions, ellipsisContent),
        getDisplayItems = _useEllipsis.getDisplayItems;
      var items = getDisplayItems.value;
      var content = items.map(function (item, index) {
        if (_typeof(item) === "object" && "content" in item) {
          return createVNode(_BreadcrumbItem, mergeProps({
            "key": index
          }, item), {
            "default": function _default() {
              return [item.content];
            }
          });
        }
        return item;
      });
      return createVNode("div", {
        "class": COMPONENT_NAME.value
      }, [content]);
    };
  }
});

export { _Breadcrumb as default };
//# sourceMappingURL=breadcrumb.js.map
