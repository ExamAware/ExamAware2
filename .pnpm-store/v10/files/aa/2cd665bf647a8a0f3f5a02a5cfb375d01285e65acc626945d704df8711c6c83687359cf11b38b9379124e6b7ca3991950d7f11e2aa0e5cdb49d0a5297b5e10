/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, toRefs, createVNode, provide, reactive, mergeProps } from 'vue';
import { _ as _typeof } from '../_chunks/dep-257428bc.mjs';
import props from './props.mjs';
import _BreadcrumbItem from './breadcrumb-item.mjs';
import { u as usePrefixClass, a as useTNodeJSX, i as useGlobalIcon } from '../_chunks/dep-7673347f.mjs';
import './hooks/index.mjs';
import { ChevronRightIcon, EllipsisIcon } from 'tdesign-icons-vue-next';
import { useBreadcrumbOptions } from './hooks/useBreadcrumbOptions.mjs';
import { useEllipsis } from './hooks/useEllipsis.mjs';
import '../_chunks/dep-1dacc319.mjs';
import './breadcrumb-item-props.mjs';
import '../tooltip/index.mjs';
import '../tooltip/tooltip.mjs';
import '../_chunks/dep-9003fde5.mjs';
import '../_chunks/dep-9f459d8b.mjs';
import 'lodash-es';
import '../tooltip/props.mjs';
import '../popup/props.mjs';
import '../popup/index.mjs';
import '../popup/popup.mjs';
import '@popperjs/core';
import '../_chunks/dep-51a43106.mjs';
import '../_chunks/dep-fe644854.mjs';
import '../popup/container.mjs';
import '../_chunks/dep-00b4e06a.mjs';
import './style/css.mjs';
import '../config-provider/hooks/useConfig.mjs';
import '../config-provider/utils/context.mjs';
import '../_chunks/dep-a4c09318.mjs';
import '../_chunks/dep-ffb85102.mjs';
import '../_chunks/dep-ad588525.mjs';
import '../_chunks/dep-22ebd6af.mjs';
import '../_chunks/dep-cdd448ec.mjs';
import '../_chunks/dep-97ecacde.mjs';
import '../_chunks/dep-84fd47b3.mjs';
import '../_chunks/dep-d36c4a3f.mjs';
import '../tooltip/utils/index.mjs';
import '../_chunks/dep-6d2705e1.mjs';

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
//# sourceMappingURL=breadcrumb.mjs.map
