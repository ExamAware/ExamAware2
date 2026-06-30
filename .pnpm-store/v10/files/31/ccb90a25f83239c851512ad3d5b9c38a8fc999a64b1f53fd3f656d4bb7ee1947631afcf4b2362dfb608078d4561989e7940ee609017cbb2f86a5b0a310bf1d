/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { _ as _defineProperty } from '../_chunks/dep-1dacc319.mjs';
import { isVNode, defineComponent, computed, createVNode } from 'vue';
import { isObject } from 'lodash-es';
import { ChevronLeftIcon, RoundIcon, ChevronRightIcon, ChevronUpIcon, ChevronDownIcon } from 'tdesign-icons-vue-next';
import props from './pagination-mini-props.mjs';
import { u as usePrefixClass, i as useGlobalIcon } from '../_chunks/dep-7673347f.mjs';
import { Button } from '../button/index.mjs';
import { Tooltip } from '../tooltip/index.mjs';
import '../_chunks/dep-257428bc.mjs';
import '../_chunks/dep-00b4e06a.mjs';
import '../_chunks/dep-9f459d8b.mjs';
import '../_chunks/dep-51a43106.mjs';
import '../_chunks/dep-fe644854.mjs';
import '../config-provider/hooks/useConfig.mjs';
import '../config-provider/utils/context.mjs';
import '../_chunks/dep-a4c09318.mjs';
import '../_chunks/dep-ffb85102.mjs';
import '../_chunks/dep-ad588525.mjs';
import '../_chunks/dep-9003fde5.mjs';
import '../_chunks/dep-22ebd6af.mjs';
import '../_chunks/dep-cdd448ec.mjs';
import '../_chunks/dep-97ecacde.mjs';
import '../_chunks/dep-84fd47b3.mjs';
import '../_chunks/dep-d36c4a3f.mjs';
import '../button/button.mjs';
import '../loading/index.mjs';
import '../loading/directive.mjs';
import '../loading/plugin.mjs';
import '../loading/loading.mjs';
import '../loading/icon/gradient.mjs';
import '../_chunks/dep-0cde7579.mjs';
import '../_chunks/dep-0dcc778a.mjs';
import '../loading/props.mjs';
import './style/css.mjs';
import '../button/props.mjs';
import '../tooltip/tooltip.mjs';
import '../tooltip/props.mjs';
import '../popup/props.mjs';
import '../popup/index.mjs';
import '../popup/popup.mjs';
import '@popperjs/core';
import '../popup/container.mjs';
import '../tooltip/utils/index.mjs';

function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !isVNode(s);
}
var _PaginationMini = defineComponent({
  name: "TPaginationMini",
  props: props,
  setup: function setup(props2) {
    var COMPONENT_NAME = usePrefixClass("pagination-mini");
    var _useGlobalIcon = useGlobalIcon({
        ChevronLeftIcon: ChevronLeftIcon,
        RoundIcon: RoundIcon,
        ChevronRightIcon: ChevronRightIcon,
        ChevronUpIcon: ChevronUpIcon,
        ChevronDownIcon: ChevronDownIcon
      }),
      ChevronLeftIcon$1 = _useGlobalIcon.ChevronLeftIcon,
      RoundIcon$1 = _useGlobalIcon.RoundIcon,
      ChevronRightIcon$1 = _useGlobalIcon.ChevronRightIcon,
      ChevronUpIcon$1 = _useGlobalIcon.ChevronUpIcon,
      ChevronDownIcon$1 = _useGlobalIcon.ChevronDownIcon;
    var titleConfig = computed(function () {
      if (isObject(props2.tips)) return props2.tips;
      if (props2.tips === true) return {
        prev: "\u4E0A\u4E00\u9875",
        current: "\u5F53\u524D",
        next: "\u4E0B\u4E00\u9875"
      };
      return {};
    });
    var disabledConfig = computed(function () {
      if (isObject(props2.disabled)) return props2.disabled;
      if (props2.disabled === true) return {
        prev: true,
        current: true,
        next: true
      };
      return {
        prev: false,
        current: false,
        next: false
      };
    });
    var renderWithTooltip = function renderWithTooltip(content, node) {
      if (!content) return node;
      return createVNode(Tooltip, {
        "content": content,
        "showArrow": false
      }, _isSlot(node) ? node : {
        "default": function _default() {
          return [node];
        }
      });
    };
    return function () {
      var jumperClass = [COMPONENT_NAME.value, _defineProperty({}, "".concat(COMPONENT_NAME.value, "--outline"), props2.variant === "outline")];
      return createVNode("div", {
        "class": jumperClass
      }, [renderWithTooltip(titleConfig.value.prev, createVNode(Button, {
        "variant": props2.variant,
        "size": props2.size,
        "shape": "square",
        "onClick": function onClick(e) {
          var _props2$onChange;
          return (_props2$onChange = props2.onChange) === null || _props2$onChange === void 0 ? void 0 : _props2$onChange.call(props2, {
            e: e,
            trigger: "prev"
          });
        },
        "icon": props2.layout === "horizontal" ? function () {
          return createVNode(ChevronLeftIcon$1, null, null);
        } : function () {
          return createVNode(ChevronUpIcon$1, null, null);
        },
        "class": "".concat(COMPONENT_NAME.value, "__prev"),
        "disabled": disabledConfig.value.prev
      }, null)), props2.showCurrent && renderWithTooltip(titleConfig.value.current, createVNode(Button, {
        "variant": props2.variant,
        "size": props2.size,
        "shape": "square",
        "onClick": function onClick(e) {
          var _props2$onChange2;
          return (_props2$onChange2 = props2.onChange) === null || _props2$onChange2 === void 0 ? void 0 : _props2$onChange2.call(props2, {
            e: e,
            trigger: "current"
          });
        },
        "icon": function icon() {
          return createVNode(RoundIcon$1, null, null);
        },
        "class": "".concat(COMPONENT_NAME.value, "__current"),
        "disabled": disabledConfig.value.current
      }, null)), renderWithTooltip(titleConfig.value.next, createVNode(Button, {
        "variant": props2.variant,
        "size": props2.size,
        "shape": "square",
        "onClick": function onClick(e) {
          var _props2$onChange3;
          return (_props2$onChange3 = props2.onChange) === null || _props2$onChange3 === void 0 ? void 0 : _props2$onChange3.call(props2, {
            e: e,
            trigger: "next"
          });
        },
        "icon": props2.layout === "horizontal" ? function () {
          return createVNode(ChevronRightIcon$1, null, null);
        } : function () {
          return createVNode(ChevronDownIcon$1, null, null);
        },
        "class": "".concat(COMPONENT_NAME.value, "__next"),
        "disabled": disabledConfig.value.next
      }, null))]);
    };
  }
});

export { _PaginationMini as default };
//# sourceMappingURL=pagination-mini.mjs.map
