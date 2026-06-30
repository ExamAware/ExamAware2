/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var utils = require('../_chunks/dep-ccada3ec.js');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../_chunks/dep-953a77eb.js');
var index = require('../_chunks/dep-ecaaae91.js');
require('@babel/runtime/helpers/slicedToArray');
require('../_chunks/dep-cc66acf1.js');
var tooltip_index = require('../tooltip/index.js');
var slider_consts_index = require('./consts/index.js');
var slider_hooks_useSliderTooltip = require('./hooks/useSliderTooltip.js');
var isFunction = require('../_chunks/dep-48f60c78.js');
require('../_chunks/dep-a55e8a08.js');
require('../_chunks/dep-b3b464e8.js');
require('../_chunks/dep-87589faa.js');
require('../_chunks/dep-05f89f0d.js');
require('../_chunks/dep-8abdfb41.js');
require('../config-provider/hooks/useConfig.js');
require('../_chunks/dep-5d7e2375.js');
require('../_chunks/dep-94a7dc2d.js');
require('dayjs');
require('../_chunks/dep-92e23f17.js');
require('../_chunks/dep-0ff616fe.js');
require('../_chunks/dep-5f52cd42.js');
require('../_chunks/dep-0813861e.js');
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
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');
require('../tooltip/tooltip.js');
require('../tooltip/props.js');
require('../popup/props.js');
require('../popup/index.js');
require('../popup/popup.js');
require('@popperjs/core');
require('../_chunks/dep-06276759.js');
require('../_chunks/dep-47c460dd.js');
require('../_chunks/dep-4fa46641.js');
require('../_chunks/dep-422dd97f.js');
require('../_chunks/dep-71fa6bfc.js');
require('../_chunks/dep-80a478d7.js');
require('../_chunks/dep-427dabac.js');
require('../_chunks/dep-72c4cc44.js');
require('../_chunks/dep-ee355a9a.js');
require('../_chunks/dep-23f77e26.js');
require('../_chunks/dep-8382953f.js');
require('../_chunks/dep-c3dee00a.js');
require('../_chunks/dep-e8ff2c13.js');
require('../popup/container.js');
require('../_chunks/dep-b6058ff9.js');
require('../_chunks/dep-39403bd1.js');
require('../_chunks/dep-e86abdd2.js');
require('../_chunks/dep-3a7785db.js');
require('../_chunks/dep-441a3b7b.js');
require('../_chunks/dep-d62a674d.js');
require('../tooltip/utils/index.js');
require('../_chunks/dep-ace0b57c.js');
require('../_chunks/dep-ac11336c.js');
require('../_chunks/dep-11b67e11.js');
require('../_chunks/dep-dcb859c6.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

var _SliderButton = Vue.defineComponent({
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
    var COMPONENT_NAME = index.usePrefixClass("slider__button");
    var tooltipConfig = Vue.computed(function () {
      return props;
    });
    var _useSliderTooltip = slider_hooks_useSliderTooltip.useSliderTooltip(tooltipConfig),
      tooltipRef = _useSliderTooltip.tooltipRef,
      tooltipProps = _useSliderTooltip.tooltipProps,
      toggleTooltip = _useSliderTooltip.toggleTooltip,
      showTooltip = _useSliderTooltip.showTooltip;
    var parentProps = Vue.inject(slider_consts_index.sliderPropsInjectKey);
    var buttonRef = Vue.ref();
    var dragged = Vue.ref(false);
    var slideButtonProps = Vue.reactive({
      dragging: false,
      isClick: false,
      startX: 0,
      startY: 0,
      startPos: 0,
      newPos: null
    });
    var rangeDiff = Vue.computed(function () {
      return Number(parentProps.max) - Number(parentProps.min);
    });
    var currentPos = Vue.computed(function () {
      return "".concat((props.value - parentProps.min) / rangeDiff.value * 100, "%");
    });
    var step = Vue.computed(function () {
      return parentProps.step;
    });
    var wrapperStyle = Vue.computed(function () {
      return props.vertical ? {
        bottom: currentPos.value
      } : {
        left: currentPos.value
      };
    });
    Vue.watchEffect(function () {
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
      value = utils.formatPrecision(value, parentProps.precision);
      ctx.emit("input", value);
      Vue.nextTick(function () {
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
      if (parentProps !== null && parentProps !== void 0 && parentProps.resetSize && isFunction.isFunction(parentProps === null || parentProps === void 0 ? void 0 : parentProps.resetSize)) {
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
      return Vue.createVNode("div", {
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
      }, [Vue.createVNode(tooltip_index.Tooltip, Vue.mergeProps({
        "ref": tooltipRef,
        "hideEmptyPopup": true,
        "disabled": !showTooltip.value
      }, tooltipProps.value), {
        "default": function _default() {
          return [Vue.createVNode("div", {
            "class": [COMPONENT_NAME.value, _defineProperty__default["default"]({}, "".concat(COMPONENT_NAME.value, "--dragging"), slideButtonProps.dragging)]
          }, null)];
        }
      })]);
    };
  }
});

exports["default"] = _SliderButton;
//# sourceMappingURL=slider-button.js.map
