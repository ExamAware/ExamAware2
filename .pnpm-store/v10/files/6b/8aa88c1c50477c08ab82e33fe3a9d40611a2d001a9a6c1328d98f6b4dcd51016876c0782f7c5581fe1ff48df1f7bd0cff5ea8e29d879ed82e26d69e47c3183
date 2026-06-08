/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var tdesignIconsVueNext = require('tdesign-icons-vue-next');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
var dom = require('../_chunks/dep-06276759.js');
var index$1 = require('../_chunks/dep-47c460dd.js');
var index$2 = require('../_chunks/dep-ecaaae91.js');
var index = require('../_chunks/dep-31c76dc6.js');
require('@babel/runtime/helpers/slicedToArray');
var index$3 = require('../_chunks/dep-cc66acf1.js');
var loading_loading = require('../_chunks/dep-237ed01f.js');
var getScrollbarWidth = require('../_chunks/dep-7067edce.js');
var drawer_props = require('./props.js');
var dialog_hooks_useAction = require('../dialog/hooks/useAction.js');
var drawer_hooks_index = require('./hooks/index.js');
var configProvider_hooks_useConfig = require('../config-provider/hooks/useConfig.js');
require('../_chunks/dep-953a77eb.js');
require('../_chunks/dep-8abdfb41.js');
require('../_chunks/dep-48f60c78.js');
require('../_chunks/dep-b3b464e8.js');
require('../_chunks/dep-0813861e.js');
require('../_chunks/dep-a55e8a08.js');
require('../_chunks/dep-87589faa.js');
require('../_chunks/dep-05f89f0d.js');
require('../_chunks/dep-4fa46641.js');
require('../_chunks/dep-422dd97f.js');
require('../_chunks/dep-71fa6bfc.js');
require('../_chunks/dep-80a478d7.js');
require('../_chunks/dep-427dabac.js');
require('../_chunks/dep-72c4cc44.js');
require('../_chunks/dep-ee355a9a.js');
require('../_chunks/dep-23f77e26.js');
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
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');
require('../loading/icon/gradient.js');
require('../_chunks/dep-c3dee00a.js');
require('../_chunks/dep-55c70201.js');
require('@babel/runtime/helpers/objectWithoutProperties');
require('../_chunks/dep-fd5a369e.js');
require('../_chunks/dep-4ccaead1.js');
require('../_chunks/dep-990979bb.js');
require('../_chunks/dep-8382953f.js');
require('../loading/props.js');
require('../button/index.js');
require('../button/button.js');
require('../loading/index.js');
require('../_chunks/dep-95261778.js');
require('../loading/plugin.js');
require('../_chunks/dep-8adeee89.js');
require('../_chunks/dep-4d2ef282.js');
require('../_chunks/dep-929933ce.js');
require('../_chunks/dep-6b1f0ef8.js');
require('../_chunks/dep-9cc695aa.js');
require('../_chunks/dep-48de95ee.js');
require('../_chunks/dep-8b33876c.js');
require('../_chunks/dep-912c9727.js');
require('../_chunks/dep-0b8a4740.js');
require('../_chunks/dep-cd8cfdc0.js');
require('../_chunks/dep-ac11336c.js');
require('../_chunks/dep-9ce6873a.js');
require('../_chunks/dep-779f6290.js');
require('../_chunks/dep-d62a674d.js');
require('../button/props.js');
require('../_chunks/dep-874d2900.js');
require('../_chunks/dep-d45110a6.js');
require('../_chunks/dep-0b6215b5.js');
require('../_chunks/dep-ace0b57c.js');
require('../_chunks/dep-11b67e11.js');
require('../_chunks/dep-dcb859c6.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var key = 1;
var _Drawer = Vue.defineComponent({
  name: "TDrawer",
  inheritAttrs: false,
  props: drawer_props["default"],
  emits: ["update:visible"],
  setup: function setup(props2, context) {
    var destroyOnCloseVisible = Vue.ref(false);
    var isVisible = Vue.ref(false);
    var styleEl = Vue.ref();
    var styleTimer = Vue.ref();
    var _useConfig = configProvider_hooks_useConfig.useConfig("drawer"),
      globalConfig = _useConfig.globalConfig;
    var _useGlobalIcon = index.useGlobalIcon({
        CloseIcon: tdesignIconsVueNext.CloseIcon
      }),
      CloseIcon = _useGlobalIcon.CloseIcon;
    var renderTNodeJSX = index$1.useTNodeJSX();
    var renderContent = index$1.useContent();
    var COMPONENT_NAME = index$2.usePrefixClass("drawer");
    var _useDrag = drawer_hooks_index.useDrag(props2),
      draggedSizeValue = _useDrag.draggedSizeValue,
      enableDrag = _useDrag.enableDrag,
      draggableLineStyles = _useDrag.draggableLineStyles,
      draggingStyles = _useDrag.draggingStyles;
    var computedVisible = Vue.computed(function () {
      return props2.visible;
    });
    var isMounted = Vue.ref(false);
    var teleportElement = loading_loading.useTeleport(function () {
      return props2.attach;
    });
    var confirmBtnAction = function confirmBtnAction(e) {
      var _props2$onConfirm;
      (_props2$onConfirm = props2.onConfirm) === null || _props2$onConfirm === void 0 || _props2$onConfirm.call(props2, {
        e: e
      });
    };
    var cancelBtnAction = function cancelBtnAction(e) {
      var _props2$onCancel;
      (_props2$onCancel = props2.onCancel) === null || _props2$onCancel === void 0 || _props2$onCancel.call(props2, {
        e: e
      });
      closeDrawer({
        trigger: "cancel",
        e: e
      });
    };
    var _useAction = dialog_hooks_useAction.useAction({
        confirmBtnAction: confirmBtnAction,
        cancelBtnAction: cancelBtnAction
      }),
      getConfirmBtn = _useAction.getConfirmBtn,
      getCancelBtn = _useAction.getCancelBtn;
    var drawerEle = Vue.ref(null);
    var drawerClasses = Vue.computed(function () {
      return [COMPONENT_NAME.value, "".concat(COMPONENT_NAME.value, "--").concat(props2.placement), _defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"]({}, "".concat(COMPONENT_NAME.value, "--open"), isVisible.value), "".concat(COMPONENT_NAME.value, "--attach"), props2.showInAttachedElement), "".concat(COMPONENT_NAME.value, "--without-mask"), !props2.showOverlay), props2.drawerClassName];
    });
    var sizeValue = Vue.computed(function () {
      var _props2$size;
      if (draggedSizeValue.value) return draggedSizeValue.value;
      var size = (_props2$size = props2.size) !== null && _props2$size !== void 0 ? _props2$size : globalConfig.value.size;
      var defaultSize = isNaN(Number(size)) ? size : "".concat(size, "px");
      return {
        small: "300px",
        medium: "500px",
        large: "760px"
      }[size] || defaultSize;
    });
    var wrapperStyles = Vue.computed(function () {
      return {
        transform: isVisible.value ? "translateX(0)" : void 0,
        width: ["left", "right"].includes(props2.placement) ? sizeValue.value : "",
        height: ["top", "bottom"].includes(props2.placement) ? sizeValue.value : ""
      };
    });
    var wrapperClasses = Vue.computed(function () {
      return ["".concat(COMPONENT_NAME.value, "__content-wrapper"), "".concat(COMPONENT_NAME.value, "__content-wrapper--").concat(props2.placement)];
    });
    var parentNode = Vue.computed(function () {
      var _drawerEle$value;
      return (_drawerEle$value = drawerEle.value) === null || _drawerEle$value === void 0 ? void 0 : _drawerEle$value.parentNode;
    });
    var modeAndPlacement = Vue.computed(function () {
      return [props2.mode, props2.placement].join();
    });
    var footerStyle = Vue.computed(function () {
      return {
        display: "flex",
        justifyContent: props2.placement === "right" ? "flex-start" : "flex-end"
      };
    });
    var handleEscKeydown = function handleEscKeydown(e) {
      var _props2$closeOnEscKey;
      if (((_props2$closeOnEscKey = props2.closeOnEscKeydown) !== null && _props2$closeOnEscKey !== void 0 ? _props2$closeOnEscKey : globalConfig.value.closeOnEscKeydown) && e.key === "Escape" && isVisible.value && isTopInteractivePopup()) {
        var _props2$onEscKeydown;
        (_props2$onEscKeydown = props2.onEscKeydown) === null || _props2$onEscKeydown === void 0 || _props2$onEscKeydown.call(props2, {
          e: e
        });
        closeDrawer({
          trigger: "esc",
          e: e
        });
        e.stopImmediatePropagation();
      }
    };
    var clearStyleEl = function clearStyleEl() {
      clearTimeout(styleTimer.value);
      styleTimer.value = setTimeout(function () {
        var _styleEl$value, _styleEl$value$remove;
        (_styleEl$value = styleEl.value) === null || _styleEl$value === void 0 || (_styleEl$value = _styleEl$value.parentNode) === null || _styleEl$value === void 0 || (_styleEl$value$remove = _styleEl$value.removeChild) === null || _styleEl$value$remove === void 0 || _styleEl$value$remove.call(_styleEl$value, styleEl.value);
        styleEl.value = null;
      }, 150);
      Vue.nextTick(function () {
        var _drawerEle$value2, _drawerEle$value2$foc;
        (_drawerEle$value2 = drawerEle.value) === null || _drawerEle$value2 === void 0 || (_drawerEle$value2$foc = _drawerEle$value2.focus) === null || _drawerEle$value2$foc === void 0 || _drawerEle$value2$foc.call(_drawerEle$value2);
      });
    };
    var createStyleEl = function createStyleEl() {
      if (!styleEl.value) return;
      var hasScrollBar = window.innerWidth > document.documentElement.clientWidth;
      var scrollWidth = hasScrollBar ? getScrollbarWidth.getScrollbarWidth() : 0;
      styleEl.value = document.createElement("style");
      styleEl.value.dataset.id = "td_drawer_".concat(+new Date(), "_").concat(key += 1);
      styleEl.value.innerHTML = "\n        html body {\n          overflow-y: hidden;\n          transition: margin 300ms cubic-bezier(0.7, 0.3, 0.1, 1) 0s;\n          ".concat(props2.mode === "push" ? "" : "width: calc(100% - ".concat(scrollWidth, "px);"), "\n        }\n      ");
    };
    var handlePushMode = function handlePushMode() {
      if (props2.mode !== "push") return;
      Vue.nextTick(function () {
        if (!parentNode.value) return;
        parentNode.value.style.cssText = "transition: margin 300ms cubic-bezier(0.7, 0.3, 0.1, 1) 0s;";
      });
    };
    var updatePushMode = function updatePushMode() {
      if (!parentNode.value || props2.mode !== "push") return;
      var marginValueData = {
        left: {
          name: "margin-left",
          value: sizeValue.value
        },
        right: {
          name: "margin-right",
          value: "-".concat(sizeValue.value)
        },
        top: {
          name: "margin-top",
          value: sizeValue.value
        },
        bottom: {
          name: "margin-bottom",
          value: "-".concat(sizeValue.value)
        }
      }[props2.placement];
      if (isVisible.value) {
        parentNode.value.style.setProperty(marginValueData.name, marginValueData.value);
      } else {
        parentNode.value.style.removeProperty(marginValueData.name);
      }
    };
    var getDefaultFooter = function getDefaultFooter() {
      var confirmBtn = getConfirmBtn({
        confirmBtn: props2.confirmBtn,
        globalConfirm: globalConfig.value.confirm,
        className: "".concat(COMPONENT_NAME.value, "__confirm")
      });
      var cancelBtn = getCancelBtn({
        cancelBtn: props2.cancelBtn,
        globalCancel: globalConfig.value.cancel,
        className: "".concat(COMPONENT_NAME.value, "__cancel")
      });
      return Vue.createVNode("div", {
        "style": footerStyle.value
      }, [props2.placement === "right" ? confirmBtn : null, cancelBtn, props2.placement !== "right" ? confirmBtn : null]);
    };
    var _usePopupManager = index$3.usePopupManager("drawer", {
        visible: computedVisible
      }),
      isTopInteractivePopup = _usePopupManager.isTopInteractivePopup;
    Vue.watch(modeAndPlacement, handlePushMode, {
      immediate: true
    });
    var updateVisibleState = function updateVisibleState(value) {
      if (value) {
        isMounted.value = true;
      }
      if (props2.destroyOnClose) {
        if (value) {
          destroyOnCloseVisible.value = false;
          setTimeout(function () {
            return isVisible.value = true;
          });
        } else {
          isVisible.value = false;
          if (destroyOnCloseVisible.value) {
            destroyOnCloseVisible.value = false;
          }
          setTimeout(function () {
            return destroyOnCloseVisible.value = true;
          }, 300);
        }
        return;
      }
      if (destroyOnCloseVisible.value && value) {
        destroyOnCloseVisible.value = false;
        setTimeout(function () {
          return isVisible.value = true;
        });
        return;
      }
      setTimeout(function () {
        return isVisible.value = value;
      });
    };
    var addStyleElToHead = function addStyleElToHead() {
      if (!props2.showInAttachedElement && props2.preventScrollThrough && isVisible.value && (isMounted.value || !props2.lazy)) {
        if (!styleEl.value) {
          createStyleEl();
        }
        if (styleEl.value && !document.head.contains(styleEl.value)) {
          document.head.appendChild(styleEl.value);
        }
      }
    };
    Vue.watch(function () {
      return props2.visible;
    }, function (value) {
      if (dom.isServer) return;
      if (value) {
        var _props2$onBeforeOpen;
        addStyleElToHead();
        (_props2$onBeforeOpen = props2.onBeforeOpen) === null || _props2$onBeforeOpen === void 0 || _props2$onBeforeOpen.call(props2);
      } else {
        var _props2$onBeforeClose;
        clearStyleEl();
        (_props2$onBeforeClose = props2.onBeforeClose) === null || _props2$onBeforeClose === void 0 || _props2$onBeforeClose.call(props2);
      }
      updateVisibleState(value);
    }, {
      immediate: true
    });
    var handleCloseBtnClick = function handleCloseBtnClick(e) {
      var _props2$onCloseBtnCli;
      (_props2$onCloseBtnCli = props2.onCloseBtnClick) === null || _props2$onCloseBtnCli === void 0 || _props2$onCloseBtnCli.call(props2, {
        e: e
      });
      closeDrawer({
        trigger: "close-btn",
        e: e
      });
    };
    var handleWrapperClick = function handleWrapperClick(e) {
      var _props2$onOverlayClic, _props2$closeOnOverla;
      (_props2$onOverlayClic = props2.onOverlayClick) === null || _props2$onOverlayClic === void 0 || _props2$onOverlayClic.call(props2, {
        e: e
      });
      if ((_props2$closeOnOverla = props2.closeOnOverlayClick) !== null && _props2$closeOnOverla !== void 0 ? _props2$closeOnOverla : globalConfig.value.closeOnOverlayClick) {
        closeDrawer({
          trigger: "overlay",
          e: e
        });
      }
    };
    var closeDrawer = function closeDrawer(params) {
      var _props2$onClose;
      (_props2$onClose = props2.onClose) === null || _props2$onClose === void 0 || _props2$onClose.call(props2, params);
      context.emit("update:visible", false);
    };
    Vue.onUpdated(updatePushMode);
    Vue.onMounted(function () {
      addStyleElToHead();
      window.addEventListener("keydown", handleEscKeydown);
    });
    Vue.onBeforeUnmount(function () {
      clearStyleEl();
      window.removeEventListener("keydown", handleEscKeydown);
    });
    var shouldRender = Vue.computed(function () {
      if (!isMounted.value) {
        return !props2.lazy;
      } else {
        return isVisible.value || !destroyOnCloseVisible.value;
      }
    });
    return function () {
      if (!shouldRender.value) return;
      var body = renderContent("body", "default");
      var headerContent = renderTNodeJSX("header");
      var defaultFooter = getDefaultFooter();
      return Vue.createVNode(Vue.Teleport, {
        "disabled": !props2.attach || !teleportElement.value,
        "to": teleportElement.value
      }, {
        "default": function _default() {
          return [Vue.createVNode("div", Vue.mergeProps({
            "ref": drawerEle,
            "class": drawerClasses.value,
            "style": {
              zIndex: props2.zIndex
            },
            "onKeydown": handleEscKeydown,
            "tabindex": 0
          }, context.attrs), [props2.showOverlay && Vue.createVNode("div", {
            "class": "".concat(COMPONENT_NAME.value, "__mask"),
            "onClick": handleWrapperClick
          }, null), Vue.createVNode("div", {
            "class": wrapperClasses.value,
            "style": _objectSpread(_objectSpread({}, wrapperStyles.value), draggingStyles.value)
          }, [headerContent && Vue.createVNode("div", {
            "class": "".concat(COMPONENT_NAME.value, "__header")
          }, [headerContent]), props2.closeBtn && Vue.createVNode("div", {
            "class": "".concat(COMPONENT_NAME.value, "__close-btn"),
            "onClick": handleCloseBtnClick
          }, [renderTNodeJSX("closeBtn", Vue.createVNode(CloseIcon, null, null))]), Vue.createVNode("div", {
            "class": ["".concat(COMPONENT_NAME.value, "__body"), "narrow-scrollbar"]
          }, [body]), props2.footer && Vue.createVNode("div", {
            "class": "".concat(COMPONENT_NAME.value, "__footer")
          }, [renderTNodeJSX("footer", defaultFooter)]), props2.sizeDraggable && Vue.createVNode("div", {
            "style": draggableLineStyles.value,
            "onMousedown": enableDrag
          }, null)])])];
        }
      });
    };
  }
});

exports["default"] = _Drawer;
//# sourceMappingURL=drawer.js.map
