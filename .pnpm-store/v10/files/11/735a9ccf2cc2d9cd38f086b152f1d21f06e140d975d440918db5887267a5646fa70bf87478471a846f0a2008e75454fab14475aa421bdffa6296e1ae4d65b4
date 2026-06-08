/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, computed, inject, ref, reactive, watchEffect, createVNode, mergeProps, nextTick } from 'vue';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { isFunction } from 'lodash-es';
import { a as formatPrecision } from '../_chunks/dep-0240b8a6.js';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-fe23be6e.js';
import { u as usePrefixClass } from '../_chunks/dep-9e6d8a78.js';
import '@babel/runtime/helpers/slicedToArray';
import '../_chunks/dep-880d05b9.js';
import { Tooltip } from '../tooltip/index.js';
import { sliderPropsInjectKey } from './consts/index.js';
import { useSliderTooltip } from './hooks/useSliderTooltip.js';
import '../_chunks/dep-81b01cae.js';
import '../config-provider/hooks/useConfig.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '../tooltip/tooltip.js';
import '../tooltip/props.js';
import '../popup/props.js';
import '../popup/index.js';
import '../popup/popup.js';
import '@popperjs/core';
import '../_chunks/dep-16bcfabc.js';
import '../_chunks/dep-2accc95a.js';
import '../_chunks/dep-fb805f69.js';
import '../_chunks/dep-4f8b6591.js';
import '../_chunks/dep-2ea19dca.js';
import '../_chunks/dep-51e5a827.js';
import '../popup/container.js';
import '../_chunks/dep-80a77612.js';
import '../_chunks/dep-664b8b22.js';
import 'tdesign-vue-next/esm/common/style/web/components/popup/_index.less';
import '../tooltip/utils/index.js';
import 'tdesign-vue-next/esm/common/style/web/components/tooltip/_index.less';

var _SliderButton = defineComponent({
  name: "TSliderButton",
  props: {
    value: {
      type: [Number],
      "default": 0
    },
    vertical: {
      type: Boolean,
      "default": false
    },
    tooltipProps: {
      type: [Boolean, Object],
      "default": true
    },
    label: {
      type: [String, Boolean, Function]
    },
    range: {
      type: Boolean,
      "default": false
    },
    position: {
      type: String
    }
  },
  emits: ["input", "mouseup"],
  setup: function setup(props, ctx) {
    var COMPONENT_NAME = usePrefixClass("slider__button");
    var tooltipConfig = computed(function () {
      return props;
    });
    var _useSliderTooltip = useSliderTooltip(tooltipConfig),
      tooltipRef = _useSliderTooltip.tooltipRef,
      tooltipProps = _useSliderTooltip.tooltipProps,
      toggleTooltip = _useSliderTooltip.toggleTooltip,
      showTooltip = _useSliderTooltip.showTooltip;
    var parentProps = inject(sliderPropsInjectKey);
    var buttonRef = ref();
    var dragged = ref(false);
    var slideButtonProps = reactive({
      dragging: false,
      isClick: false,
      startX: 0,
      startY: 0,
      startPos: 0,
      newPos: null
    });
    var rangeDiff = computed(function () {
      return Number(parentProps.max) - Number(parentProps.min);
    });
    var currentPos = computed(function () {
      return "".concat((props.value - parentProps.min) / rangeDiff.value * 100, "%");
    });
    var step = computed(function () {
      return parentProps.step;
    });
    var wrapperStyle = computed(function () {
      return props.vertical ? {
        bottom: currentPos.value
      } : {
        left: currentPos.value
      };
    });
    watchEffect(function () {
      parentProps.toggleDragging(slideButtonProps.dragging);
    });
    var setPosition = function setPosition(pos) {
      var newPos = pos;
      if (newPos === null || Number.isNaN(newPos)) {
        return;
      }
      if (newPos > 100) {
        newPos = 100;
      } else if (newPos < 0) {
        newPos = 0;
      }
      var perStepLen = 100 * step.value / rangeDiff.value;
      var steps = Math.round(newPos / perStepLen);
      var value = steps * perStepLen * rangeDiff.value * 0.01;
      value += parentProps.min;
      value = formatPrecision(value, parentProps.precision);
      ctx.emit("input", value);
      nextTick(function () {
        var _tooltipRef$value$upd, _tooltipRef$value;
        tooltipRef.value && ((_tooltipRef$value$upd = (_tooltipRef$value = tooltipRef.value).updatePopper) === null || _tooltipRef$value$upd === void 0 ? void 0 : _tooltipRef$value$upd.call(_tooltipRef$value));
      });
    };
    var handleMouseEnter = function handleMouseEnter() {
      buttonRef.value.focus();
      toggleTooltip(true);
    };
    var handleMouseLeave = function handleMouseLeave() {
      if (!slideButtonProps.dragging) {
        toggleTooltip(false);
      }
    };
    var onDragStart = function onDragStart(event) {
      slideButtonProps.dragging = true;
      slideButtonProps.isClick = true;
      var type = event.type;
      var clientY = event.clientY,
        clientX = event.clientX;
      if (type === "touchstart") {
        var touch = event.touches;
        var _ref = [touch[0].clientY, touch[0].clientX];
        clientY = _ref[0];
        clientX = _ref[1];
      }
      if (props.vertical) {
        slideButtonProps.startY = clientY;
      } else {
        slideButtonProps.startX = clientX;
      }
      slideButtonProps.startPos = parseFloat(currentPos.value);
      slideButtonProps.newPos = slideButtonProps.startPos;
    };
    var onDragging = function onDragging(e) {
      var event = e;
      if (!slideButtonProps.dragging) {
        return;
      }
      dragged.value = true;
      slideButtonProps.isClick = false;
      if (parentProps !== null && parentProps !== void 0 && parentProps.resetSize && isFunction(parentProps === null || parentProps === void 0 ? void 0 : parentProps.resetSize)) {
        parentProps.resetSize();
      }
      var diff = 0;
      var parentSliderSize = parentProps.sliderSize;
      var type = event.type;
      var clientY = event.clientY,
        clientX = event.clientX;
      if (type === "touchmove") {
        var touch = event.touches;
        var _ref2 = [touch[0].clientY, touch[0].clientX];
        clientY = _ref2[0];
        clientX = _ref2[1];
      }
      if (props.vertical) {
        diff = slideButtonProps.startY - clientY;
      } else {
        diff = clientX - slideButtonProps.startX;
      }
      diff = diff / parentSliderSize * 100;
      slideButtonProps.newPos = slideButtonProps.startPos + diff;
      setPosition(slideButtonProps.newPos);
    };
    var _onDragEnd = function onDragEnd() {
      if (slideButtonProps.dragging) {
        setTimeout(function () {
          slideButtonProps.dragging = false;
          toggleTooltip(false);
          if (!slideButtonProps.isClick) {
            setPosition(slideButtonProps.newPos);
          }
          dragged.value && ctx.emit("mouseup");
          dragged.value = false;
        }, 0);
        window.removeEventListener("mousemove", onDragging);
        window.removeEventListener("touchmove", onDragging);
        window.removeEventListener("mouseup", _onDragEnd);
        window.removeEventListener("touchend", _onDragEnd);
        window.removeEventListener("contextmenu", _onDragEnd);
      }
    };
    function onButtonDown(event) {
      if (parentProps.disabled) {
        return;
      }
      event.preventDefault();
      onDragStart(event);
      window.addEventListener("mousemove", onDragging);
      window.addEventListener("mouseup", _onDragEnd);
      window.addEventListener("touchmove", onDragging);
      window.addEventListener("touchend", _onDragEnd);
      window.addEventListener("contextmenu", _onDragEnd);
    }
    var onKeyDown = function onKeyDown(state) {
      if (parentProps.disabled) {
        return;
      }
      var stepLength = step.value / rangeDiff.value * 100;
      if (state === "sub") {
        stepLength = -stepLength;
      }
      slideButtonProps.newPos = parseFloat(currentPos.value) + stepLength;
      setPosition(slideButtonProps.newPos);
    };
    var onNativeKeyDown = function onNativeKeyDown(e) {
      var code = e.code;
      e.preventDefault();
      if (code === "ArrowDown" || code === "ArrowLeft") {
        onKeyDown("sub");
      }
      if (code === "ArrowUp" || code === "ArrowRight") {
        onKeyDown("add");
      }
    };
    ctx.expose({
      setPosition: setPosition
    });
    return function () {
      return createVNode("div", {
        "ref": buttonRef,
        "class": "".concat(COMPONENT_NAME.value, "-wrapper"),
        "style": wrapperStyle.value,
        "tabindex": "0",
        "show-tooltip": showTooltip.value,
        "onMouseenter": handleMouseEnter,
        "onMouseleave": handleMouseLeave,
        "onMousedown": onButtonDown,
        "onTouchstart": onButtonDown,
        "onFocus": handleMouseEnter,
        "onBlur": handleMouseLeave,
        "onKeydown": onNativeKeyDown
      }, [createVNode(Tooltip, mergeProps({
        "ref": tooltipRef,
        "hideEmptyPopup": true,
        "disabled": !showTooltip.value
      }, tooltipProps.value), {
        "default": function _default() {
          return [createVNode("div", {
            "class": [COMPONENT_NAME.value, _defineProperty({}, "".concat(COMPONENT_NAME.value, "--dragging"), slideButtonProps.dragging)]
          }, null)];
        }
      })]);
    };
  }
});

export { _SliderButton as default };
//# sourceMappingURL=slider-button.js.map
