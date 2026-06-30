/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, computed, createVNode, mergeProps } from 'vue';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import props from './props.js';
import 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-fe23be6e.js';
import { a as useContent, u as useTNodeJSX } from '../_chunks/dep-2accc95a.js';
import { u as usePrefixClass } from '../_chunks/dep-9e6d8a78.js';
import '../_chunks/dep-880d05b9.js';
import '../_chunks/dep-81b01cae.js';
import '../_chunks/dep-16bcfabc.js';
import '../_chunks/dep-fb805f69.js';
import '../config-provider/hooks/useConfig.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';

var _Badge = defineComponent({
  name: "TBadge",
  inheritAttrs: false,
  props: props,
  setup: function setup(props2, _ref) {
    var attrs = _ref.attrs;
    var renderContent = useContent();
    var renderTNodeJSX = useTNodeJSX();
    var displayCount = computed(function () {
      var count = renderTNodeJSX("count");
      if (Number.isNaN(Number(count))) {
        return count;
      }
      count = Number(props2.count);
      return count > props2.maxCount ? "".concat(props2.maxCount, "+") : count;
    });
    var getOffset = function getOffset() {
      if (!props2.offset) return {};
      var _props2$offset = _slicedToArray(props2.offset, 2),
        xOffset = _props2$offset[0],
        yOffset = _props2$offset[1];
      xOffset = Number.isNaN(Number(xOffset)) ? xOffset : "".concat(xOffset, "px");
      yOffset = Number.isNaN(Number(yOffset)) ? yOffset : "".concat(yOffset, "px");
      return {
        xOffset: xOffset,
        yOffset: yOffset
      };
    };
    var classPrefix = usePrefixClass();
    var COMPONENT_NAME = usePrefixClass("badge");
    var isHidden = computed(function () {
      return !props2.showZero && (displayCount.value === 0 || displayCount.value === "0");
    });
    var badgeClassNames = computed(function () {
      return [_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(COMPONENT_NAME.value, "--dot"), !!props2.dot), "".concat(COMPONENT_NAME.value, "--circle"), !props2.dot && props2.shape === "circle"), "".concat(COMPONENT_NAME.value, "--round"), !props2.dot && props2.shape === "round"), "".concat(classPrefix.value, "-size-s"), props2.size === "small")];
    });
    var inlineStyle = computed(function () {
      var _getOffset = getOffset(),
        xOffset = _getOffset.xOffset,
        yOffset = _getOffset.yOffset;
      return {
        background: props2.color,
        right: xOffset,
        top: yOffset
      };
    });
    return function () {
      return createVNode("div", mergeProps({
        "class": COMPONENT_NAME.value
      }, attrs), [renderContent("default", "content"), isHidden.value ? null : createVNode("sup", {
        "class": badgeClassNames.value,
        "style": inlineStyle.value
      }, [props2.dot ? null : displayCount.value])]);
    };
  }
});

export { _Badge as default };
//# sourceMappingURL=badge.js.map
