/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _toConsumableArray = require('@babel/runtime/helpers/toConsumableArray');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
require('@babel/runtime/helpers/typeof');
require('../_chunks/dep-953a77eb.js');
var index$1 = require('../_chunks/dep-47c460dd.js');
var index$3 = require('../_chunks/dep-670d3f43.js');
var index = require('../_chunks/dep-ecaaae91.js');
require('@babel/runtime/helpers/slicedToArray');
require('../_chunks/dep-cc66acf1.js');
var index$2 = require('../_chunks/dep-0b6215b5.js');
var menu_submenuProps = require('./submenu-props.js');
var commonComponents_fakeArrow = require('../common-components/fake-arrow.js');
var popup_index = require('../popup/index.js');
var isFunction = require('../_chunks/dep-48f60c78.js');
require('../_chunks/dep-8abdfb41.js');
require('../_chunks/dep-06276759.js');
require('../_chunks/dep-a55e8a08.js');
require('../_chunks/dep-b3b464e8.js');
require('../_chunks/dep-87589faa.js');
require('../_chunks/dep-05f89f0d.js');
require('../_chunks/dep-4fa46641.js');
require('../_chunks/dep-0813861e.js');
require('../_chunks/dep-422dd97f.js');
require('../_chunks/dep-71fa6bfc.js');
require('../_chunks/dep-80a478d7.js');
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
require('../_chunks/dep-c3dee00a.js');
require('../popup/popup.js');
require('@popperjs/core');
require('../_chunks/dep-8382953f.js');
require('../_chunks/dep-e8ff2c13.js');
require('../popup/container.js');
require('../popup/props.js');
require('../_chunks/dep-b6058ff9.js');
require('../_chunks/dep-39403bd1.js');
require('../_chunks/dep-e86abdd2.js');
require('../_chunks/dep-3a7785db.js');
require('../_chunks/dep-441a3b7b.js');
require('../_chunks/dep-d62a674d.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _toConsumableArray__default = /*#__PURE__*/_interopDefaultLegacy(_toConsumableArray);
var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var _Submenu = Vue.defineComponent({
  name: "TSubmenu",
  props: menu_submenuProps["default"],
  setup: function setup(props2, _ref) {
    var attrs = _ref.attrs,
      slots = _ref.slots;
    var classPrefix = index.usePrefixClass();
    var renderTNodeJSX = index$1.useTNodeJSX();
    var renderContent = index$1.useContent();
    var instance = Vue.getCurrentInstance();
    var menu = Vue.inject("TdMenu");
    var _toRefs = Vue.toRefs(props2),
      value = _toRefs.value;
    var theme = menu.theme,
      activeValues = menu.activeValues,
      expandValues = menu.expandValues,
      isHead = menu.isHead,
      open = menu.open;
    var submenu = Vue.inject("TdSubmenu", {});
    var setSubPopup = submenu.setSubPopup,
      _closeParentPopup = submenu.closeParentPopup,
      _cancelHideTimer = submenu.cancelHideTimer;
    var mode = Vue.computed(function () {
      return attrs.expandType || menu.mode.value;
    });
    var menuItems = Vue.ref([]);
    var isActive = Vue.computed(function () {
      return activeValues.value.indexOf(props2.value) > -1;
    });
    var popupVisible = Vue.ref(false);
    var isCursorInPopup = Vue.ref(false);
    var rippleColor = Vue.computed(function () {
      return theme.value === "light" ? "#E7E7E7" : "#383838";
    });
    var isOpen = Vue.computed(function () {
      var _expandValues$value;
      if (mode.value === "popup") {
        return popupVisible.value;
      }
      return expandValues ? (_expandValues$value = expandValues.value) === null || _expandValues$value === void 0 ? void 0 : _expandValues$value.includes(props2.value) : false;
    });
    var isNested = Vue.ref(false);
    var popupWrapperRef = Vue.ref();
    var subPopupRef = Vue.ref();
    var submenuRef = Vue.ref();
    var transitionClass = index.usePrefixClass("slide-down");
    index$2.useRipple(submenuRef, rippleColor);
    var showTimer = Vue.ref(null);
    var hideTimer = Vue.ref(null);
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
    var classes = Vue.computed(function () {
      return ["".concat(classPrefix.value, "-submenu"), _defineProperty__default["default"](_defineProperty__default["default"]({}, "".concat(classPrefix.value, "-is-disabled"), props2.disabled), "".concat(classPrefix.value, "-is-opened"), isOpen.value)];
    });
    var overlayInnerClassName = Vue.computed(function () {
      var _props2$popupProps;
      return ["".concat(classPrefix.value, "-menu__popup"), "".concat(classPrefix.value, "-is-").concat(isHead ? "horizontal" : "vertical"), _defineProperty__default["default"]({}, "".concat(classPrefix.value, "-is-opened"), popupVisible.value), (_props2$popupProps = props2.popupProps) === null || _props2$popupProps === void 0 ? void 0 : _props2$popupProps.overlayInnerClassName];
    });
    var overlayClassName = Vue.computed(function () {
      var _props2$popupProps2;
      return ["".concat(classPrefix.value, "-menu--").concat(theme.value), isHead && "".concat(classPrefix.value, "-is-head-menu"), _defineProperty__default["default"]({}, "".concat(classPrefix.value, "-menu-is-nested"), isNested.value), (_props2$popupProps2 = props2.popupProps) === null || _props2$popupProps2 === void 0 ? void 0 : _props2$popupProps2.overlayClassName];
    });
    var submenuClass = Vue.computed(function () {
      return ["".concat(classPrefix.value, "-menu__item"), _defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"]({}, "".concat(classPrefix.value, "-is-disabled"), props2.disabled), "".concat(classPrefix.value, "-is-opened"), isOpen.value), "".concat(classPrefix.value, "-is-active"), isActive.value)];
    });
    var subClass = Vue.computed(function () {
      return ["".concat(classPrefix.value, "-menu__sub"), _defineProperty__default["default"]({}, "".concat(classPrefix.value, "-is-opened"), isOpen.value)];
    });
    var arrowClass = Vue.computed(function () {
      return [_defineProperty__default["default"]({}, "".concat(classPrefix.value, "-fake-arrow--active"), isOpen.value)];
    });
    Vue.provide("TdSubmenu", Vue.reactive({
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
        if (isFunction.isFunction(_closeParentPopup)) {
          _closeParentPopup(e);
        }
      },
      cancelHideTimer: function cancelHideTimer() {
        if (hideTimer.value !== null) {
          clearTimeout(hideTimer.value);
          hideTimer.value = null;
        }
        if (isFunction.isFunction(_cancelHideTimer)) {
          _cancelHideTimer();
        }
      }
    }));
    var passSubPopupRefToParent = function passSubPopupRefToParent(val) {
      if (isFunction.isFunction(setSubPopup)) {
        setSubPopup(val);
      }
    };
    var handleMouseEnter = function handleMouseEnter() {
      if (props2.disabled) return;
      clearTimers();
      if (isFunction.isFunction(_cancelHideTimer)) {
        _cancelHideTimer();
      }
      showTimer.value = setTimeout(function () {
        if (!popupVisible.value) {
          open(props2.value);
          Vue.nextTick().then(function () {
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
      if (isFunction.isFunction(_cancelHideTimer)) {
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
      var popupWrapper = Vue.createVNode("div", {
        "ref": popupWrapperRef,
        "class": ["".concat(classPrefix.value, "-menu__spacer"), "".concat(classPrefix.value, "-menu__spacer--").concat(!isNested.value && isHead ? "top" : "left")],
        "onMouseenter": handleEnterPopup,
        "onMouseleave": handleMouseLeavePopup
      }, [Vue.createVNode("ul", {
        "class": "".concat(classPrefix.value, "-menu__popup-wrapper")
      }, [renderContent("default", "content")])]);
      var slots2 = {
        content: function content() {
          return popupWrapper;
        }
      };
      var realPopup = Vue.createVNode(popup_index.Popup, Vue.mergeProps((_props2$popupProps3 = props2.popupProps) !== null && _props2$popupProps3 !== void 0 ? _props2$popupProps3 : {}, {
        "overlayInnerClassName": _toConsumableArray__default["default"](overlayInnerClassName.value),
        "overlayClassName": _toConsumableArray__default["default"](overlayClassName.value),
        "visible": popupVisible.value,
        "placement": placement
      }), _objectSpread({
        "default": function _default() {
          return [Vue.createVNode("div", {
            "ref": submenuRef,
            "class": submenuClass.value
          }, [triggerElement])];
        }
      }, slots2));
      return realPopup;
    };
    var renderHeadSubmenu = function renderHeadSubmenu() {
      var icon = renderTNodeJSX("icon");
      var normalSubmenu = [Vue.createVNode("div", {
        "ref": submenuRef,
        "class": submenuClass.value,
        "onClick": handleSubmenuItemClick
      }, [icon, Vue.createVNode("span", {
        "class": ["".concat(classPrefix.value, "-menu__content")]
      }, [renderTNodeJSX("title", {
        silent: true
      })])]), Vue.createVNode("ul", {
        "style": "opacity: 0; width: 0; height: 0; overflow: hidden"
      }, [renderContent("default", "content")])];
      var needRotate = mode.value === "popup" && isNested.value;
      var triggerElement = [icon, Vue.createVNode("span", {
        "class": ["".concat(classPrefix.value, "-menu__content")]
      }, [renderTNodeJSX("title", {
        silent: true
      })]), Vue.createVNode(commonComponents_fakeArrow["default"], {
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
      var _useCollapseAnimation = index$3.useCollapseAnimation(),
        beforeEnter = _useCollapseAnimation.beforeEnter,
        enter = _useCollapseAnimation.enter,
        afterEnter = _useCollapseAnimation.afterEnter,
        beforeLeave = _useCollapseAnimation.beforeLeave,
        leave = _useCollapseAnimation.leave,
        afterLeave = _useCollapseAnimation.afterLeave;
      var needRotate = mode.value === "popup" && isNested.value;
      var normalSubmenu = [Vue.createVNode("div", {
        "ref": submenuRef,
        "class": submenuClass.value,
        "onClick": handleSubmenuItemClick
      }, [icon, Vue.createVNode("span", {
        "class": ["".concat(classPrefix.value, "-menu__content")]
      }, [renderTNodeJSX("title", {
        silent: true
      })]), hasContent && Vue.createVNode(commonComponents_fakeArrow["default"], {
        "overlayClassName": arrowClass.value,
        "overlayStyle": {
          transform: "rotate(".concat(needRotate ? -90 : 0, "deg)")
        }
      }, null)]), Vue.createVNode(Vue.Transition, {
        "name": transitionClass.value,
        "onBeforeEnter": beforeEnter,
        "onEnter": enter,
        "onAfterEnter": afterEnter,
        "onBeforeLeave": beforeLeave,
        "onLeave": leave,
        "onAfterLeave": afterLeave
      }, {
        "default": function _default() {
          return [Vue.withDirectives(Vue.createVNode("ul", {
            "class": subClass.value,
            "style": {
              "--padding-left": "".concat(paddingLeft, "px")
            }
          }, [child]), [[Vue.vShow, isOpen.value]])];
        }
      })];
      var triggerElement = [icon, Vue.createVNode("span", {
        "class": ["".concat(classPrefix.value, "-menu__content")]
      }, [renderTNodeJSX("title", {
        silent: true
      })]), Vue.createVNode(commonComponents_fakeArrow["default"], {
        "overlayClassName": /menu/i.test(parent.proxy.$options.name) ? arrowClass.value : null,
        "overlayStyle": {
          transform: "rotate(".concat(needRotate ? -90 : 0, "deg)"),
          "margin-left": "auto"
        }
      }, null)];
      return mode.value === "normal" ? normalSubmenu : renderPopup(triggerElement);
    };
    Vue.watch(popupVisible, function (visible) {
      menu.open(props2.value, visible ? "add" : "remove");
    });
    Vue.watch(popupWrapperRef, function () {
      passSubPopupRefToParent(popupWrapperRef.value);
    });
    Vue.onMounted(function () {
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
    Vue.onBeforeUnmount(function () {
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
        if (activeValues.value.length < 2) virtualChild = Vue.createVNode("div", {
          "style": "display:none"
        }, [renderContent("default", "content")]);
      }
      if (Object.keys(slots).length > 0) {
        child = isHead ? renderHeadSubmenu() : renderSubmenu();
      }
      return Vue.createVNode("li", Vue.mergeProps({
        "class": classes.value
      }, events), [child, virtualChild]);
    };
  }
});

exports["default"] = _Submenu;
//# sourceMappingURL=submenu.js.map
