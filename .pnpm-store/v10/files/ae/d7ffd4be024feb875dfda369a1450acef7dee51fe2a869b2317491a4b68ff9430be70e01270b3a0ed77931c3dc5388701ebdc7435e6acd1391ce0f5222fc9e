/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, toRefs, ref, inject, provide, computed, watch, nextTick, onUnmounted, withDirectives, createVNode, mergeProps, vShow, Transition, isVNode } from 'vue';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { createPopper } from '@popperjs/core';
import { isFunction, isObject, isString, inRange, max, min, debounce } from 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import { i as isServer, o as on, k as once, c as off } from '../_chunks/dep-16bcfabc.js';
import { u as useTNodeJSX, a as useContent } from '../_chunks/dep-2accc95a.js';
import { u as useCommonClassName } from '../_chunks/dep-4f8b6591.js';
import { u as usePrefixClass } from '../_chunks/dep-9e6d8a78.js';
import '../_chunks/dep-880d05b9.js';
import { s as setStyle } from '../_chunks/dep-2ea19dca.js';
import { u as useVModel } from '../_chunks/dep-51e5a827.js';
import Container from './container.js';
import popupProps from './props.js';
import '../_chunks/dep-fe23be6e.js';
import '../_chunks/dep-81b01cae.js';
import '../_chunks/dep-fb805f69.js';
import '../config-provider/hooks/useConfig.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '../_chunks/dep-80a77612.js';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !isVNode(s);
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
      on(elm.value, type, listener);
      offs.push(function () {
        off(elm.value, type, listener);
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
var _Popup = defineComponent({
  name: "TPopup",
  props: _objectSpread(_objectSpread({}, popupProps), {}, {
    expandAnimation: {
      type: Boolean
    }
  }),
  setup: function setup(props2, _ref) {
    var _process$env;
    var expose = _ref.expose;
    var _toRefs = toRefs(props2),
      propVisible = _toRefs.visible,
      modelValue = _toRefs.modelValue;
    var _useVModel = useVModel(propVisible, modelValue, props2.defaultVisible, props2.onVisibleChange, "visible"),
      _useVModel2 = _slicedToArray(_useVModel, 2),
      visible = _useVModel2[0],
      setVisible = _useVModel2[1];
    var renderTNodeJSX = useTNodeJSX();
    var renderContent = useContent();
    var popper;
    var showTimeout;
    var hideTimeout;
    var triggerEl = ref(null);
    var overlayEl = ref(null);
    var popperEl = ref(null);
    var containerRef = ref(null);
    var isOverlayHover = ref(false);
    var arrowStyle = ref({});
    var id = typeof process !== "undefined" && (_process$env = process.env) !== null && _process$env !== void 0 && _process$env.TEST ? "" : Date.now().toString(36);
    var parent = inject(parentKey, void 0);
    provide(parentKey, {
      id: id,
      assertMouseLeave: onMouseLeave
    });
    var prefixCls = usePrefixClass("popup");
    var _useCommonClassName = useCommonClassName(),
      commonCls = _useCommonClassName.STATUS;
    var delay = computed(function () {
      var _props2$delay, _delay2$;
      var delay2 = props2.trigger !== "hover" ? [0, 0] : [].concat((_props2$delay = props2.delay) !== null && _props2$delay !== void 0 ? _props2$delay : [250, 150]);
      return {
        show: delay2[0],
        hide: (_delay2$ = delay2[1]) !== null && _delay2$ !== void 0 ? _delay2$ : delay2[0]
      };
    });
    var trigger = attachListeners(triggerEl);
    watch(function () {
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
    watch(function () {
      return [props2.overlayStyle, props2.overlayInnerStyle, overlayEl.value];
    }, function () {
      updateOverlayInnerStyle();
      updatePopper();
    }, {
      immediate: true
    });
    watch(function () {
      return props2.triggerElement;
    }, function (v) {
      if (typeof v === "string") {
        nextTick(function () {
          triggerEl.value = document.querySelector(v);
        });
      }
    }, {
      immediate: true
    });
    watch(function () {
      return props2.placement;
    }, function () {
      destroyPopper();
      updatePopper();
    });
    watch(function () {
      return visible.value;
    }, function (visible2) {
      if (visible2) {
        !isServer && on(document, "mousedown", onDocumentMouseDown, true);
        if (props2.trigger === "focus") {
          once(triggerEl.value, "keydown", function (ev) {
            var _process$env2;
            var code = typeof process !== "undefined" && (_process$env2 = process.env) !== null && _process$env2 !== void 0 && _process$env2.TEST ? "27" : "Escape";
            if (ev.code === code) {
              hide(ev);
            }
          });
        }
        return;
      }
      !isServer && off(document, "mousedown", onDocumentMouseDown, true);
    }, {
      immediate: true
    });
    watch(function () {
      return [visible.value, overlayEl.value];
    }, function () {
      if (visible.value && overlayEl.value && updateScrollTop) {
        updateScrollTop === null || updateScrollTop === void 0 || updateScrollTop(overlayEl.value);
      }
    });
    onUnmounted(function () {
      destroyPopper();
      clearAllTimeout();
      off(document, "mousedown", onDocumentMouseDown, true);
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
      if (isFunction(overlayStyle)) {
        return overlayStyle(triggerEl.value, overlayEl.value);
      }
      if (isObject(overlayStyle)) {
        return overlayStyle;
      }
    }
    function updateOverlayInnerStyle() {
      var overlayInnerStyle = props2.overlayInnerStyle;
      if (!triggerEl.value || !overlayEl.value) return;
      if (isFunction(overlayInnerStyle)) {
        setStyle(overlayEl.value, overlayInnerStyle(triggerEl.value, overlayEl.value));
      } else if (isObject(overlayInnerStyle)) {
        setStyle(overlayEl.value, overlayInnerStyle);
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
            left: "".concat(max([minPopupOffsetLeft, min([maxPopupOffsetLeft, offsetLeft])]) - 4, "px"),
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
          top: "".concat(max([minPopupOffsetTop, min([maxPopupOffsetTop, offsetTop])]) - 4, "px"),
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
      popper = createPopper(triggerEl.value, popperEl.value, _objectSpread({
        placement: getPopperPlacement(props2.placement),
        onFirstUpdate: function onFirstUpdate() {
          nextTick(updatePopper);
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
    var updateScrollTop = inject("updateScrollTop", void 0);
    function handleOnScroll(e) {
      var _props2$onScroll;
      var _e$target = e.target,
        scrollTop = _e$target.scrollTop,
        clientHeight = _e$target.clientHeight,
        scrollHeight = _e$target.scrollHeight;
      var debounceOnScrollBottom = debounce(function (e2) {
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
      var overlay = visible.value || !props2.destroyOnClose ? withDirectives(createVNode("div", mergeProps(_defineProperty(_defineProperty({}, POPUP_ATTR_NAME, id), POPUP_PARENT_ATTR_NAME, parent === null || parent === void 0 ? void 0 : parent.id), {
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
      }), [createVNode("div", {
        "class": ["".concat(prefixCls.value, "__content"), _defineProperty(_defineProperty(_defineProperty({}, "".concat(prefixCls.value, "__content--text"), isString(props2.content)), "".concat(prefixCls.value, "__content--arrow"), props2.showArrow), commonCls.value.disabled, props2.disabled), props2.overlayInnerClassName],
        "ref": overlayEl,
        "onScroll": handleOnScroll
      }, [content, props2.showArrow && createVNode("div", {
        "class": "".concat(prefixCls.value, "__arrow"),
        "style": arrowStyle.value
      }, null)])]), [[vShow, visible.value]]) : null;
      return createVNode(Container, {
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
          return createVNode(Transition, {
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

export { _Popup as default };
//# sourceMappingURL=popup.js.map
