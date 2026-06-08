/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { defineComponent, computed, createVNode, isVNode } from 'vue';
import { isObject } from 'lodash-es';
import { ChevronLeftIcon, RoundIcon, ChevronRightIcon, ChevronUpIcon, ChevronDownIcon } from 'tdesign-icons-vue-next';
import props from './pagination-mini-props.js';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-fe23be6e.js';
import { u as usePrefixClass } from '../_chunks/dep-9e6d8a78.js';
import { u as useGlobalIcon } from '../_chunks/dep-3a7a2ef1.js';
import '@babel/runtime/helpers/slicedToArray';
import '../_chunks/dep-880d05b9.js';
import { Button } from '../button/index.js';
import { Tooltip } from '../tooltip/index.js';
import '../_chunks/dep-81b01cae.js';
import '../config-provider/hooks/useConfig.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '../button/button.js';
import '../loading/index.js';
import '../loading/directive.js';
import '../loading/plugin.js';
import '../_chunks/dep-ee693784.js';
import '../loading/icon/gradient.js';
import '../_chunks/dep-2ea19dca.js';
import '../_chunks/dep-80a99546.js';
import '@babel/runtime/helpers/objectWithoutProperties';
import '../_chunks/dep-16bcfabc.js';
import '../_chunks/dep-2accc95a.js';
import '../_chunks/dep-fb805f69.js';
import '../_chunks/dep-4f8b6591.js';
import '../loading/props.js';
import '../_chunks/dep-664b8b22.js';
import 'tdesign-vue-next/esm/common/style/web/components/loading/_index.less';
import '../button/props.js';
import '../_chunks/dep-f7dd3c12.js';
import '../_chunks/dep-d2a6e7a4.js';
import 'tdesign-vue-next/esm/common/style/web/components/button/_index.less';
import '../tooltip/tooltip.js';
import '../tooltip/props.js';
import '../popup/props.js';
import '../popup/index.js';
import '../popup/popup.js';
import '@popperjs/core';
import '../_chunks/dep-51e5a827.js';
import '../popup/container.js';
import '../_chunks/dep-80a77612.js';
import 'tdesign-vue-next/esm/common/style/web/components/popup/_index.less';
import '../tooltip/utils/index.js';
import 'tdesign-vue-next/esm/common/style/web/components/tooltip/_index.less';

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
//# sourceMappingURL=pagination-mini.js.map
