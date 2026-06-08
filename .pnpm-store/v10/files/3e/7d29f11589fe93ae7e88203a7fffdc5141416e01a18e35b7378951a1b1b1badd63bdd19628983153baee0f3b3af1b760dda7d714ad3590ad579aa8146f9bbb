/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var core = require('@popperjs/core');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
var dom = require('../_chunks/dep-06276759.js');
var index$1 = require('../_chunks/dep-47c460dd.js');
var index$3 = require('../_chunks/dep-8382953f.js');
var index$2 = require('../_chunks/dep-ecaaae91.js');
require('../_chunks/dep-cc66acf1.js');
var setStyle = require('../_chunks/dep-c3dee00a.js');
var index = require('../_chunks/dep-e8ff2c13.js');
var popup_container = require('./container.js');
var popup_props = require('./props.js');
var isFunction = require('../_chunks/dep-48f60c78.js');
var isObject = require('../_chunks/dep-0813861e.js');
var isString = require('../_chunks/dep-a55e8a08.js');
var toFinite = require('../_chunks/dep-39403bd1.js');
var toNumber = require('../_chunks/dep-e86abdd2.js');
var min = require('../_chunks/dep-3a7785db.js');
var debounce = require('../_chunks/dep-441a3b7b.js');
require('../_chunks/dep-953a77eb.js');
require('../_chunks/dep-8abdfb41.js');
require('../_chunks/dep-4fa46641.js');
require('../_chunks/dep-87589faa.js');
require('../_chunks/dep-422dd97f.js');
require('../_chunks/dep-71fa6bfc.js');
require('../_chunks/dep-b3b464e8.js');
require('../_chunks/dep-80a478d7.js');
require('../_chunks/dep-05f89f0d.js');
require('../_chunks/dep-427dabac.js');
require('../_chunks/dep-72c4cc44.js');
require('../_chunks/dep-ee355a9a.js');
require('../_chunks/dep-23f77e26.js');
require('../config-provider/hooks/useConfig.js');
require('../_chunks/dep-5d7e2375.js');
require('../_chunks/dep-94a7dc2d.js');
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
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');
require('../_chunks/dep-b6058ff9.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);
var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
  nativeMin = Math.min;

/**
 * The base implementation of `_.inRange` which doesn't coerce arguments.
 *
 * @private
 * @param {number} number The number to check.
 * @param {number} start The start of the range.
 * @param {number} end The end of the range.
 * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
 */
function baseInRange(number, start, end) {
  return number >= nativeMin(start, end) && number < nativeMax(start, end);
}

/**
 * Checks if `n` is between `start` and up to, but not including, `end`. If
 * `end` is not specified, it's set to `start` with `start` then set to `0`.
 * If `start` is greater than `end` the params are swapped to support
 * negative ranges.
 *
 * @static
 * @memberOf _
 * @since 3.3.0
 * @category Number
 * @param {number} number The number to check.
 * @param {number} [start=0] The start of the range.
 * @param {number} end The end of the range.
 * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
 * @see _.range, _.rangeRight
 * @example
 *
 * _.inRange(3, 2, 4);
 * // => true
 *
 * _.inRange(4, 8);
 * // => true
 *
 * _.inRange(4, 2);
 * // => false
 *
 * _.inRange(2, 2);
 * // => false
 *
 * _.inRange(1.2, 2);
 * // => true
 *
 * _.inRange(5.2, 4);
 * // => false
 *
 * _.inRange(-3, -2, -6);
 * // => true
 */
function inRange(number, start, end) {
  start = toFinite.toFinite(start);
  if (end === undefined) {
    end = start;
    start = 0;
  } else {
    end = toFinite.toFinite(end);
  }
  number = toNumber.toNumber(number);
  return baseInRange(number, start, end);
}

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !Vue.isVNode(s);
}
var POPUP_ATTR_NAME = "data-td-popup";
var POPUP_PARENT_ATTR_NAME = "data-td-popup-parent";
function getPopperTree(id, upwards) {
  var list = [];
  var selectors = [POPUP_PARENT_ATTR_NAME, POPUP_ATTR_NAME];
  if (!id) return list;
  if (upwards) {
    selectors.unshift(selectors.pop());
  }
  recurse(id);
  return list;
  function recurse(id2) {
    var children = document.querySelectorAll("[".concat(selectors[0], "=\"").concat(id2, "\"]"));
    children.forEach(function (el) {
      list.push(el);
      var childId = el.getAttribute(selectors[1]);
      if (childId && childId !== id2) {
        recurse(childId);
      }
    });
  }
}
var parentKey = Symbol();
function getPopperPlacement(placement) {
  return placement.replace(/-(left|top)$/, "-start").replace(/-(right|bottom)$/, "-end");
}
function attachListeners(elm) {
  var offs = [];
  return {
    add: function add(type, listener) {
      if (!type) return;
      dom.on(elm.value, type, listener);
      offs.push(function () {
        dom.off(elm.value, type, listener);
      });
    },
    clean: function clean() {
      offs.forEach(function (handler) {
        return handler === null || handler === void 0 ? void 0 : handler();
      });
      offs.length = 0;
    }
  };
}
var _Popup = Vue.defineComponent({
  name: "TPopup",
  props: _objectSpread(_objectSpread({}, popup_props["default"]), {}, {
    expandAnimation: {
      type: Boolean
    }
  }),
  setup: function setup(props2, _ref) {
    var _process$env;
    var expose = _ref.expose;
    var _toRefs = Vue.toRefs(props2),
      propVisible = _toRefs.visible,
      modelValue = _toRefs.modelValue;
    var _useVModel = index.useVModel(propVisible, modelValue, props2.defaultVisible, props2.onVisibleChange, "visible"),
      _useVModel2 = _slicedToArray__default["default"](_useVModel, 2),
      visible = _useVModel2[0],
      setVisible = _useVModel2[1];
    var renderTNodeJSX = index$1.useTNodeJSX();
    var renderContent = index$1.useContent();
    var popper;
    var showTimeout;
    var hideTimeout;
    var triggerEl = Vue.ref(null);
    var overlayEl = Vue.ref(null);
    var popperEl = Vue.ref(null);
    var containerRef = Vue.ref(null);
    var isOverlayHover = Vue.ref(false);
    var arrowStyle = Vue.ref({});
    var id = typeof process !== "undefined" && (_process$env = process.env) !== null && _process$env !== void 0 && _process$env.TEST ? "" : Date.now().toString(36);
    var parent = Vue.inject(parentKey, void 0);
    Vue.provide(parentKey, {
      id: id,
      assertMouseLeave: onMouseLeave
    });
    var prefixCls = index$2.usePrefixClass("popup");
    var _useCommonClassName = index$3.useCommonClassName(),
      commonCls = _useCommonClassName.STATUS;
    var delay = Vue.computed(function () {
      var _props2$delay, _delay2$;
      var delay2 = props2.trigger !== "hover" ? [0, 0] : [].concat((_props2$delay = props2.delay) !== null && _props2$delay !== void 0 ? _props2$delay : [250, 150]);
      return {
        show: delay2[0],
        hide: (_delay2$ = delay2[1]) !== null && _delay2$ !== void 0 ? _delay2$ : delay2[0]
      };
    });
    var trigger = attachListeners(triggerEl);
    Vue.watch(function () {
      return [props2.trigger, triggerEl.value];
    }, function () {
      if (!triggerEl.value) return;
      trigger.clean();
      trigger.add({
        hover: "mouseenter",
        focus: "focusin",
        "context-menu": "contextmenu",
        click: "click"
      }[props2.trigger], function (ev) {
        if (props2.disabled) return;
        if (ev.type === "contextmenu") {
          ev.preventDefault();
        }
        if ((ev.type === "click" || ev.type === "contextmenu") && visible.value) {
          hide(ev);
          return;
        }
        show(ev);
      });
      trigger.add({
        hover: "mouseleave",
        focus: "focusout"
      }[props2.trigger], hide);
    });
    Vue.watch(function () {
      return [props2.overlayStyle, props2.overlayInnerStyle, overlayEl.value];
    }, function () {
      updateOverlayInnerStyle();
      updatePopper();
    }, {
      immediate: true
    });
    Vue.watch(function () {
      return props2.triggerElement;
    }, function (v) {
      if (typeof v === "string") {
        Vue.nextTick(function () {
          triggerEl.value = document.querySelector(v);
        });
      }
    }, {
      immediate: true
    });
    Vue.watch(function () {
      return props2.placement;
    }, function () {
      destroyPopper();
      updatePopper();
    });
    Vue.watch(function () {
      return visible.value;
    }, function (visible2) {
      if (visible2) {
        !dom.isServer && dom.on(document, "mousedown", onDocumentMouseDown, true);
        if (props2.trigger === "focus") {
          dom.once(triggerEl.value, "keydown", function (ev) {
            var _process$env2;
            var code = typeof process !== "undefined" && (_process$env2 = process.env) !== null && _process$env2 !== void 0 && _process$env2.TEST ? "27" : "Escape";
            if (ev.code === code) {
              hide(ev);
            }
          });
        }
        return;
      }
      !dom.isServer && dom.off(document, "mousedown", onDocumentMouseDown, true);
    }, {
      immediate: true
    });
    Vue.watch(function () {
      return [visible.value, overlayEl.value];
    }, function () {
      if (visible.value && overlayEl.value && updateScrollTop) {
        updateScrollTop === null || updateScrollTop === void 0 || updateScrollTop(overlayEl.value);
      }
    });
    Vue.onUnmounted(function () {
      destroyPopper();
      clearAllTimeout();
      dom.off(document, "mousedown", onDocumentMouseDown, true);
    });
    expose({
      update: updatePopper,
      getOverlay: function getOverlay() {
        return overlayEl.value;
      },
      getOverlayState: function getOverlayState() {
        return {
          hover: isOverlayHover.value
        };
      },
      getPopper: function getPopper() {
        return popper;
      },
      close: function close() {
        return hide();
      }
    });
    function getOverlayStyle() {
      var overlayStyle = props2.overlayStyle;
      if (!triggerEl.value || !overlayEl.value) return;
      if (isFunction.isFunction(overlayStyle)) {
        return overlayStyle(triggerEl.value, overlayEl.value);
      }
      if (isObject.isObject(overlayStyle)) {
        return overlayStyle;
      }
    }
    function updateOverlayInnerStyle() {
      var overlayInnerStyle = props2.overlayInnerStyle;
      if (!triggerEl.value || !overlayEl.value) return;
      if (isFunction.isFunction(overlayInnerStyle)) {
        setStyle.setStyle(overlayEl.value, overlayInnerStyle(triggerEl.value, overlayEl.value));
      } else if (isObject.isObject(overlayInnerStyle)) {
        setStyle.setStyle(overlayEl.value, overlayInnerStyle);
      }
    }
    function getArrowStyle() {
      var _popperEl$value$offse2;
      if (!triggerEl.value || !popperEl.value) {
        return {};
      }
      var triggerRect = triggerEl.value.getBoundingClientRect();
      var popupRect = popperEl.value.getBoundingClientRect();
      var position = props2.placement;
      if (position.startsWith("top") || position.startsWith("bottom")) {
        var _popperEl$value$offse;
        var offsetLeft = Math.abs(triggerRect.left + triggerRect.width / 2 - popupRect.left);
        var popupWidth = (_popperEl$value$offse = popperEl.value.offsetWidth) !== null && _popperEl$value$offse !== void 0 ? _popperEl$value$offse : popperEl.value.offsetWidth;
        var maxPopupOffsetLeft = popupWidth - 4;
        var minPopupOffsetLeft = 12;
        if (inRange(offsetLeft, 0, popupWidth)) {
          return {
            left: "".concat(min.max([minPopupOffsetLeft, min.min([maxPopupOffsetLeft, offsetLeft])]) - 4, "px"),
            marginLeft: 0
          };
        } else {
          return {};
        }
      }
      var offsetTop = triggerRect.top + triggerRect.height / 2 - popupRect.top;
      var popupHeight = (_popperEl$value$offse2 = popperEl.value.offsetHeight) !== null && _popperEl$value$offse2 !== void 0 ? _popperEl$value$offse2 : popperEl.value.clientHeight;
      var maxPopupOffsetTop = popupHeight - 8;
      var minPopupOffsetTop = 8;
      if (inRange(offsetTop, 0, popupHeight)) {
        return {
          top: "".concat(min.max([minPopupOffsetTop, min.min([maxPopupOffsetTop, offsetTop])]) - 4, "px"),
          marginTop: 0
        };
      } else {
        return {};
      }
    }
    function updatePopper() {
      if (!popperEl.value || !visible.value) return;
      if (popper) {
        if (triggerEl.value.getRootNode() instanceof ShadowRoot) {
          popper.state.elements.reference = triggerEl.value;
          popper.update();
        } else {
          var rect = triggerEl.value.getBoundingClientRect();
          var parent2 = triggerEl.value;
          while (parent2 && parent2 !== document.body) {
            parent2 = parent2.parentElement;
          }
          var isHidden = parent2 !== document.body || rect.width === 0 && rect.height === 0;
          if (!isHidden) {
            popper.state.elements.reference = triggerEl.value;
            popper.update();
          } else {
            setVisible(false, {
              trigger: getTriggerType({
                type: "mouseenter"
              })
            });
          }
        }
        if (props2.showArrow) {
          arrowStyle.value = getArrowStyle();
        }
        return;
      }
      popper = core.createPopper(triggerEl.value, popperEl.value, _objectSpread({
        placement: getPopperPlacement(props2.placement),
        onFirstUpdate: function onFirstUpdate() {
          Vue.nextTick(updatePopper);
        }
      }, props2.popperOptions));
      if (props2.showArrow) {
        arrowStyle.value = getArrowStyle();
      }
    }
    function destroyPopper() {
      if (popper) {
        var _popper;
        (_popper = popper) === null || _popper === void 0 || _popper.destroy();
        popper = null;
      }
      if (props2.destroyOnClose) {
        var _containerRef$value;
        (_containerRef$value = containerRef.value) === null || _containerRef$value === void 0 || _containerRef$value.unmountContent();
      }
    }
    function show(ev) {
      clearAllTimeout();
      showTimeout = setTimeout(function () {
        setVisible(true, {
          trigger: getTriggerType(ev)
        });
      }, delay.value.show);
    }
    function hide(ev) {
      clearAllTimeout();
      hideTimeout = setTimeout(function () {
        setVisible(false, {
          trigger: getTriggerType(ev),
          e: ev
        });
      }, delay.value.hide);
    }
    function clearAllTimeout() {
      clearTimeout(showTimeout);
      clearTimeout(hideTimeout);
    }
    function getTriggerType(ev) {
      switch (ev === null || ev === void 0 ? void 0 : ev.type) {
        case "mouseenter":
          return "trigger-element-hover";
        case "mouseleave":
          return "trigger-element-hover";
        case "focusin":
          return "trigger-element-focus";
        case "focusout":
          return "trigger-element-blur";
        case "click":
          return "trigger-element-click";
        case "context-menu":
        case "keydown":
          return "keydown-esc";
        case "mousedown":
          return "document";
        default:
          return "trigger-element-close";
      }
    }
    function onDocumentMouseDown(ev) {
      var _popperEl$value, _triggerEl$value;
      if ((_popperEl$value = popperEl.value) !== null && _popperEl$value !== void 0 && _popperEl$value.contains(ev.target)) {
        return;
      }
      if ((_triggerEl$value = triggerEl.value) !== null && _triggerEl$value !== void 0 && _triggerEl$value.contains(ev.target)) {
        return;
      }
      var activedPopper = getPopperTree(id).find(function (el) {
        return el.contains(ev.target);
      });
      if (activedPopper && getPopperTree(activedPopper.getAttribute(POPUP_PARENT_ATTR_NAME), true).some(function (el) {
        return el === popperEl.value;
      })) {
        return;
      }
      hide(ev);
    }
    function onMouseLeave(ev) {
      isOverlayHover.value = false;
      if (props2.trigger !== "hover" || triggerEl.value.contains(ev.target)) return;
      var isCursorOverlaps = getPopperTree(id).some(function (el) {
        var rect = el.getBoundingClientRect();
        return ev.x > rect.x && ev.x < rect.x + rect.width && ev.y > rect.y && ev.y < rect.y + rect.height;
      });
      if (!isCursorOverlaps) {
        hide(ev);
        parent === null || parent === void 0 || parent.assertMouseLeave(ev);
      }
    }
    function onMouseenter() {
      isOverlayHover.value = true;
      if (visible.value && props2.trigger === "hover") {
        clearAllTimeout();
      }
    }
    function onOverlayClick(e) {
      var _props2$onOverlayClic;
      (_props2$onOverlayClic = props2.onOverlayClick) === null || _props2$onOverlayClic === void 0 || _props2$onOverlayClic.call(props2, {
        e: e
      });
    }
    var updateScrollTop = Vue.inject("updateScrollTop", void 0);
    function handleOnScroll(e) {
      var _props2$onScroll;
      var _e$target = e.target,
        scrollTop = _e$target.scrollTop,
        clientHeight = _e$target.clientHeight,
        scrollHeight = _e$target.scrollHeight;
      var debounceOnScrollBottom = debounce.debounce(function (e2) {
        var _props2$onScrollToBot;
        return (_props2$onScrollToBot = props2.onScrollToBottom) === null || _props2$onScrollToBot === void 0 ? void 0 : _props2$onScrollToBot.call(props2, {
          e: e2
        });
      }, 100);
      if (clientHeight + Math.floor(scrollTop) === scrollHeight) {
        debounceOnScrollBottom(e);
      }
      (_props2$onScroll = props2.onScroll) === null || _props2$onScroll === void 0 || _props2$onScroll.call(props2, {
        e: e
      });
    }
    return function () {
      var content = renderTNodeJSX("content");
      var hidePopup = props2.hideEmptyPopup && ["", void 0, null].includes(content);
      var overlay = visible.value || !props2.destroyOnClose ? Vue.withDirectives(Vue.createVNode("div", Vue.mergeProps(_defineProperty__default["default"](_defineProperty__default["default"]({}, POPUP_ATTR_NAME, id), POPUP_PARENT_ATTR_NAME, parent === null || parent === void 0 ? void 0 : parent.id), {
        "class": [prefixCls.value, props2.overlayClassName],
        "ref": function ref(ref2) {
          return popperEl.value = ref2;
        },
        "style": [{
          zIndex: props2.zIndex
        }, getOverlayStyle(), hidePopup && {
          visibility: "hidden"
        }],
        "onClick": onOverlayClick,
        "onMouseenter": onMouseenter,
        "onMouseleave": onMouseLeave
      }), [Vue.createVNode("div", {
        "class": ["".concat(prefixCls.value, "__content"), _defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"]({}, "".concat(prefixCls.value, "__content--text"), isString.isString(props2.content)), "".concat(prefixCls.value, "__content--arrow"), props2.showArrow), commonCls.value.disabled, props2.disabled), props2.overlayInnerClassName],
        "ref": overlayEl,
        "onScroll": handleOnScroll
      }, [content, props2.showArrow && Vue.createVNode("div", {
        "class": "".concat(prefixCls.value, "__arrow"),
        "style": arrowStyle.value
      }, null)])]), [[Vue.vShow, visible.value]]) : null;
      return Vue.createVNode(popup_container["default"], {
        "ref": function ref(ref2) {
          return containerRef.value = ref2;
        },
        "forwardRef": function forwardRef(ref2) {
          if (typeof props2.triggerElement !== "string") triggerEl.value = ref2;
        },
        "onContentMounted": function onContentMounted() {
          if (visible.value) {
            updatePopper();
            var timer = setTimeout(function () {
              updateOverlayInnerStyle();
              clearTimeout(timer);
            }, 60);
          }
        },
        "onResize": function onResize() {
          if (visible.value) {
            updatePopper();
          }
        },
        "visible": visible.value,
        "attach": props2.attach
      }, {
        content: function content() {
          return Vue.createVNode(Vue.Transition, {
            "name": "".concat(prefixCls.value, "--animation").concat(props2.expandAnimation ? "-expand" : ""),
            "appear": true,
            "onEnter": updatePopper,
            "onAfterLeave": destroyPopper
          }, _isSlot(overlay) ? overlay : {
            "default": function _default() {
              return [overlay];
            }
          });
        },
        "default": function _default() {
          if (typeof props2.triggerElement === "string") return null;
          return renderContent("default", "triggerElement");
        }
      });
    };
  }
});

exports["default"] = _Popup;
//# sourceMappingURL=popup.js.map
