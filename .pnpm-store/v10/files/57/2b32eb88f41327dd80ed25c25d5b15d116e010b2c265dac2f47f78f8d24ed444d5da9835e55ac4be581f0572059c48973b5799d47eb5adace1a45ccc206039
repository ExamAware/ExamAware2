/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, getCurrentInstance, inject, toRefs, computed, ref, provide, reactive, nextTick, createVNode, mergeProps, Transition, withDirectives, vShow, watch, onMounted, onBeforeUnmount } from 'vue';
import { _ as _toConsumableArray } from '../_chunks/dep-00b4e06a.mjs';
import { _ as _defineProperty } from '../_chunks/dep-1dacc319.mjs';
import { isFunction } from 'lodash-es';
import { u as usePrefixClass, a as useTNodeJSX, b as useContent, d as useRipple, l as useCollapseAnimation } from '../_chunks/dep-7673347f.mjs';
import props from './submenu-props.mjs';
import FakeArrow from '../common-components/fake-arrow.mjs';
import { Popup } from '../popup/index.mjs';
import '../_chunks/dep-9f459d8b.mjs';
import '../_chunks/dep-257428bc.mjs';
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
import '../popup/popup.mjs';
import '@popperjs/core';
import '../popup/container.mjs';
import '../popup/props.mjs';
import './style/css.mjs';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var _Submenu = defineComponent({
  name: "TSubmenu",
  props: props,
  setup: function setup(props2, _ref) {
    var attrs = _ref.attrs,
      slots = _ref.slots;
    var classPrefix = usePrefixClass();
    var renderTNodeJSX = useTNodeJSX();
    var renderContent = useContent();
    var instance = getCurrentInstance();
    var menu = inject("TdMenu");
    var _toRefs = toRefs(props2),
      value = _toRefs.value;
    var theme = menu.theme,
      activeValues = menu.activeValues,
      expandValues = menu.expandValues,
      isHead = menu.isHead,
      open = menu.open;
    var submenu = inject("TdSubmenu", {});
    var setSubPopup = submenu.setSubPopup,
      _closeParentPopup = submenu.closeParentPopup,
      _cancelHideTimer = submenu.cancelHideTimer;
    var mode = computed(function () {
      return attrs.expandType || menu.mode.value;
    });
    var menuItems = ref([]);
    var isActive = computed(function () {
      return activeValues.value.indexOf(props2.value) > -1;
    });
    var popupVisible = ref(false);
    var isCursorInPopup = ref(false);
    var rippleColor = computed(function () {
      return theme.value === "light" ? "#E7E7E7" : "#383838";
    });
    var isOpen = computed(function () {
      var _expandValues$value;
      if (mode.value === "popup") {
        return popupVisible.value;
      }
      return expandValues ? (_expandValues$value = expandValues.value) === null || _expandValues$value === void 0 ? void 0 : _expandValues$value.includes(props2.value) : false;
    });
    var isNested = ref(false);
    var popupWrapperRef = ref();
    var subPopupRef = ref();
    var submenuRef = ref();
    var transitionClass = usePrefixClass("slide-down");
    useRipple(submenuRef, rippleColor);
    var showTimer = ref(null);
    var hideTimer = ref(null);
    var clearTimers = function clearTimers() {
      if (showTimer.value !== null) {
        clearTimeout(showTimer.value);
        showTimer.value = null;
      }
      if (hideTimer.value !== null) {
        clearTimeout(hideTimer.value);
        hideTimer.value = null;
      }
    };
    var classes = computed(function () {
      return ["".concat(classPrefix.value, "-submenu"), _defineProperty(_defineProperty({}, "".concat(classPrefix.value, "-is-disabled"), props2.disabled), "".concat(classPrefix.value, "-is-opened"), isOpen.value)];
    });
    var overlayInnerClassName = computed(function () {
      var _props2$popupProps;
      return ["".concat(classPrefix.value, "-menu__popup"), "".concat(classPrefix.value, "-is-").concat(isHead ? "horizontal" : "vertical"), _defineProperty({}, "".concat(classPrefix.value, "-is-opened"), popupVisible.value), (_props2$popupProps = props2.popupProps) === null || _props2$popupProps === void 0 ? void 0 : _props2$popupProps.overlayInnerClassName];
    });
    var overlayClassName = computed(function () {
      var _props2$popupProps2;
      return ["".concat(classPrefix.value, "-menu--").concat(theme.value), isHead && "".concat(classPrefix.value, "-is-head-menu"), _defineProperty({}, "".concat(classPrefix.value, "-menu-is-nested"), isNested.value), (_props2$popupProps2 = props2.popupProps) === null || _props2$popupProps2 === void 0 ? void 0 : _props2$popupProps2.overlayClassName];
    });
    var submenuClass = computed(function () {
      return ["".concat(classPrefix.value, "-menu__item"), _defineProperty(_defineProperty(_defineProperty({}, "".concat(classPrefix.value, "-is-disabled"), props2.disabled), "".concat(classPrefix.value, "-is-opened"), isOpen.value), "".concat(classPrefix.value, "-is-active"), isActive.value)];
    });
    var subClass = computed(function () {
      return ["".concat(classPrefix.value, "-menu__sub"), _defineProperty({}, "".concat(classPrefix.value, "-is-opened"), isOpen.value)];
    });
    var arrowClass = computed(function () {
      return [_defineProperty({}, "".concat(classPrefix.value, "-fake-arrow--active"), isOpen.value)];
    });
    provide("TdSubmenu", reactive({
      value: value,
      addMenuItem: function addMenuItem(item) {
        menuItems.value.push(item);
        if (submenu) {
          submenu.addMenuItem(item);
        }
      },
      setSubPopup: function setSubPopup(ref2) {
        subPopupRef.value = ref2;
      },
      closeParentPopup: function closeParentPopup(e) {
        clearTimers();
        hideTimer.value = setTimeout(function () {
          popupVisible.value = false;
          hideTimer.value = null;
        }, 100);
        if (isFunction(_closeParentPopup)) {
          _closeParentPopup(e);
        }
      },
      cancelHideTimer: function cancelHideTimer() {
        if (hideTimer.value !== null) {
          clearTimeout(hideTimer.value);
          hideTimer.value = null;
        }
        if (isFunction(_cancelHideTimer)) {
          _cancelHideTimer();
        }
      }
    }));
    var passSubPopupRefToParent = function passSubPopupRefToParent(val) {
      if (isFunction(setSubPopup)) {
        setSubPopup(val);
      }
    };
    var handleMouseEnter = function handleMouseEnter() {
      if (props2.disabled) return;
      clearTimers();
      if (isFunction(_cancelHideTimer)) {
        _cancelHideTimer();
      }
      showTimer.value = setTimeout(function () {
        if (!popupVisible.value) {
          open(props2.value);
          nextTick().then(function () {
            passSubPopupRefToParent(popupWrapperRef.value);
          });
        }
        popupVisible.value = true;
        showTimer.value = null;
      }, 0);
    };
    var targetInPopup = function targetInPopup(el) {
      return el === null || el === void 0 ? void 0 : el.classList.contains("".concat(classPrefix.value, "-menu__popup"));
    };
    var handleMouseLeave = function handleMouseLeave(e) {
      clearTimers();
      hideTimer.value = setTimeout(function () {
        var inPopup = targetInPopup(e.relatedTarget);
        if (isCursorInPopup.value || inPopup) return;
        popupVisible.value = false;
        hideTimer.value = null;
      }, 100);
    };
    var handleMouseLeavePopup = function handleMouseLeavePopup(e) {
      var toElement = e.toElement,
        relatedTarget = e.relatedTarget;
      var target = toElement || relatedTarget;
      if (target === subPopupRef.value) return;
      var isSubmenu = function isSubmenu(el) {
        return el === submenuRef.value;
      };
      while (target !== null && target !== document && !isSubmenu(target)) {
        target = target.parentNode;
      }
      isCursorInPopup.value = false;
      if (!isSubmenu(target)) {
        clearTimers();
        hideTimer.value = setTimeout(function () {
          popupVisible.value = false;
          hideTimer.value = null;
        }, 100);
        _closeParentPopup === null || _closeParentPopup === void 0 || _closeParentPopup(e);
      }
    };
    var handleEnterPopup = function handleEnterPopup() {
      isCursorInPopup.value = true;
      if (hideTimer.value !== null) {
        clearTimeout(hideTimer.value);
        hideTimer.value = null;
      }
      if (isFunction(_cancelHideTimer)) {
        _cancelHideTimer();
      }
    };
    var handleSubmenuItemClick = function handleSubmenuItemClick() {
      if (props2.disabled) return;
      open(props2.value);
    };
    var renderPopup = function renderPopup(triggerElement) {
      var _props2$popupProps3;
      var placement = "right-top";
      if (!isNested.value && isHead) {
        placement = "bottom-left";
      }
      var popupWrapper = createVNode("div", {
        "ref": popupWrapperRef,
        "class": ["".concat(classPrefix.value, "-menu__spacer"), "".concat(classPrefix.value, "-menu__spacer--").concat(!isNested.value && isHead ? "top" : "left")],
        "onMouseenter": handleEnterPopup,
        "onMouseleave": handleMouseLeavePopup
      }, [createVNode("ul", {
        "class": "".concat(classPrefix.value, "-menu__popup-wrapper")
      }, [renderContent("default", "content")])]);
      var slots2 = {
        content: function content() {
          return popupWrapper;
        }
      };
      var realPopup = createVNode(Popup, mergeProps((_props2$popupProps3 = props2.popupProps) !== null && _props2$popupProps3 !== void 0 ? _props2$popupProps3 : {}, {
        "overlayInnerClassName": _toConsumableArray(overlayInnerClassName.value),
        "overlayClassName": _toConsumableArray(overlayClassName.value),
        "visible": popupVisible.value,
        "placement": placement
      }), _objectSpread({
        "default": function _default() {
          return [createVNode("div", {
            "ref": submenuRef,
            "class": submenuClass.value
          }, [triggerElement])];
        }
      }, slots2));
      return realPopup;
    };
    var renderHeadSubmenu = function renderHeadSubmenu() {
      var icon = renderTNodeJSX("icon");
      var normalSubmenu = [createVNode("div", {
        "ref": submenuRef,
        "class": submenuClass.value,
        "onClick": handleSubmenuItemClick
      }, [icon, createVNode("span", {
        "class": ["".concat(classPrefix.value, "-menu__content")]
      }, [renderTNodeJSX("title", {
        silent: true
      })])]), createVNode("ul", {
        "style": "opacity: 0; width: 0; height: 0; overflow: hidden"
      }, [renderContent("default", "content")])];
      var needRotate = mode.value === "popup" && isNested.value;
      var triggerElement = [icon, createVNode("span", {
        "class": ["".concat(classPrefix.value, "-menu__content")]
      }, [renderTNodeJSX("title", {
        silent: true
      })]), createVNode(FakeArrow, {
        "overlayClassName": /menu/i.test(instance === null || instance === void 0 ? void 0 : instance.parent.proxy.$options.name) ? arrowClass.value : null,
        "overlayStyle": {
          transform: "rotate(".concat(needRotate ? -90 : 0, "deg)")
        }
      }, null)];
      return mode.value === "normal" ? normalSubmenu : renderPopup(triggerElement);
    };
    var renderSubmenu = function renderSubmenu() {
      var hasContent = slots.content || slots["default"];
      var icon = renderTNodeJSX("icon");
      var child = renderContent("default", "content");
      var parent = instance.parent;
      var paddingLeft = 44;
      while (parent && parent.type.name !== "TMenu") {
        if (parent.type.name === "TSubmenu") {
          paddingLeft += 16;
        }
        parent = parent.parent;
      }
      var _useCollapseAnimation = useCollapseAnimation(),
        beforeEnter = _useCollapseAnimation.beforeEnter,
        enter = _useCollapseAnimation.enter,
        afterEnter = _useCollapseAnimation.afterEnter,
        beforeLeave = _useCollapseAnimation.beforeLeave,
        leave = _useCollapseAnimation.leave,
        afterLeave = _useCollapseAnimation.afterLeave;
      var needRotate = mode.value === "popup" && isNested.value;
      var normalSubmenu = [createVNode("div", {
        "ref": submenuRef,
        "class": submenuClass.value,
        "onClick": handleSubmenuItemClick
      }, [icon, createVNode("span", {
        "class": ["".concat(classPrefix.value, "-menu__content")]
      }, [renderTNodeJSX("title", {
        silent: true
      })]), hasContent && createVNode(FakeArrow, {
        "overlayClassName": arrowClass.value,
        "overlayStyle": {
          transform: "rotate(".concat(needRotate ? -90 : 0, "deg)")
        }
      }, null)]), createVNode(Transition, {
        "name": transitionClass.value,
        "onBeforeEnter": beforeEnter,
        "onEnter": enter,
        "onAfterEnter": afterEnter,
        "onBeforeLeave": beforeLeave,
        "onLeave": leave,
        "onAfterLeave": afterLeave
      }, {
        "default": function _default() {
          return [withDirectives(createVNode("ul", {
            "class": subClass.value,
            "style": {
              "--padding-left": "".concat(paddingLeft, "px")
            }
          }, [child]), [[vShow, isOpen.value]])];
        }
      })];
      var triggerElement = [icon, createVNode("span", {
        "class": ["".concat(classPrefix.value, "-menu__content")]
      }, [renderTNodeJSX("title", {
        silent: true
      })]), createVNode(FakeArrow, {
        "overlayClassName": /menu/i.test(parent.proxy.$options.name) ? arrowClass.value : null,
        "overlayStyle": {
          transform: "rotate(".concat(needRotate ? -90 : 0, "deg)"),
          "margin-left": "auto"
        }
      }, null)];
      return mode.value === "normal" ? normalSubmenu : renderPopup(triggerElement);
    };
    watch(popupVisible, function (visible) {
      menu.open(props2.value, visible ? "add" : "remove");
    });
    watch(popupWrapperRef, function () {
      passSubPopupRefToParent(popupWrapperRef.value);
    });
    onMounted(function () {
      var _menu$vMenu;
      menu === null || menu === void 0 || (_menu$vMenu = menu.vMenu) === null || _menu$vMenu === void 0 || _menu$vMenu.add({
        value: props2.value,
        parent: submenu === null || submenu === void 0 ? void 0 : submenu.value,
        vnode: slots["default"]
      });
      var node = instance.parent;
      while (node && !/^t(head)?menu/i.test((_node = node) === null || _node === void 0 ? void 0 : _node.type.name)) {
        var _node, _node2, _node3;
        if (/submenu/i.test((_node2 = node) === null || _node2 === void 0 ? void 0 : _node2.type.name)) {
          isNested.value = true;
          break;
        }
        node = (_node3 = node) === null || _node3 === void 0 ? void 0 : _node3.parent;
      }
    });
    onBeforeUnmount(function () {
      clearTimers();
    });
    return function () {
      var child = null;
      var events = {};
      var virtualChild;
      if (mode.value === "popup") {
        events = {
          onMouseenter: handleMouseEnter,
          onMouseleave: handleMouseLeave
        };
        if (activeValues.value.length < 2) virtualChild = createVNode("div", {
          "style": "display:none"
        }, [renderContent("default", "content")]);
      }
      if (Object.keys(slots).length > 0) {
        child = isHead ? renderHeadSubmenu() : renderSubmenu();
      }
      return createVNode("li", mergeProps({
        "class": classes.value
      }, events), [child, virtualChild]);
    };
  }
});

export { _Submenu as default };
//# sourceMappingURL=submenu.mjs.map
