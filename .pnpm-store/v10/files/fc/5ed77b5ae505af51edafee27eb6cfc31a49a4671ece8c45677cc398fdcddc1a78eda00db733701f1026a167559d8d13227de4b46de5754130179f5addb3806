/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, ref, computed, watch, onUpdated, onMounted, onBeforeUnmount, createVNode, Teleport, mergeProps, nextTick } from 'vue';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { CloseIcon } from 'tdesign-icons-vue-next';
import 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import { i as isServer } from '../_chunks/dep-16bcfabc.js';
import { u as useTNodeJSX, a as useContent } from '../_chunks/dep-2accc95a.js';
import { u as usePrefixClass } from '../_chunks/dep-9e6d8a78.js';
import { u as useGlobalIcon } from '../_chunks/dep-3a7a2ef1.js';
import '@babel/runtime/helpers/slicedToArray';
import { u as usePopupManager } from '../_chunks/dep-880d05b9.js';
import { u as useTeleport } from '../_chunks/dep-ee693784.js';
import { g as getScrollbarWidth } from '../_chunks/dep-167f0981.js';
import props from './props.js';
import { useAction } from '../dialog/hooks/useAction.js';
import { useDrag } from './hooks/index.js';
import { useConfig } from '../config-provider/hooks/useConfig.js';
import '../_chunks/dep-fe23be6e.js';
import '../_chunks/dep-81b01cae.js';
import '../_chunks/dep-fb805f69.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '../loading/icon/gradient.js';
import '../_chunks/dep-2ea19dca.js';
import '../_chunks/dep-80a99546.js';
import '@babel/runtime/helpers/objectWithoutProperties';
import '../_chunks/dep-4f8b6591.js';
import '../loading/props.js';
import '../button/index.js';
import '../button/button.js';
import '../loading/index.js';
import '../loading/directive.js';
import '../loading/plugin.js';
import '../_chunks/dep-664b8b22.js';
import 'tdesign-vue-next/esm/common/style/web/components/loading/_index.less';
import '../button/props.js';
import '../_chunks/dep-f7dd3c12.js';
import '../_chunks/dep-d2a6e7a4.js';
import 'tdesign-vue-next/esm/common/style/web/components/button/_index.less';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var key = 1;
var _Drawer = defineComponent({
  name: "TDrawer",
  inheritAttrs: false,
  props: props,
  emits: ["update:visible"],
  setup: function setup(props2, context) {
    var destroyOnCloseVisible = ref(false);
    var isVisible = ref(false);
    var styleEl = ref();
    var styleTimer = ref();
    var _useConfig = useConfig("drawer"),
      globalConfig = _useConfig.globalConfig;
    var _useGlobalIcon = useGlobalIcon({
        CloseIcon: CloseIcon
      }),
      CloseIcon$1 = _useGlobalIcon.CloseIcon;
    var renderTNodeJSX = useTNodeJSX();
    var renderContent = useContent();
    var COMPONENT_NAME = usePrefixClass("drawer");
    var _useDrag = useDrag(props2),
      draggedSizeValue = _useDrag.draggedSizeValue,
      enableDrag = _useDrag.enableDrag,
      draggableLineStyles = _useDrag.draggableLineStyles,
      draggingStyles = _useDrag.draggingStyles;
    var computedVisible = computed(function () {
      return props2.visible;
    });
    var isMounted = ref(false);
    var teleportElement = useTeleport(function () {
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
    var _useAction = useAction({
        confirmBtnAction: confirmBtnAction,
        cancelBtnAction: cancelBtnAction
      }),
      getConfirmBtn = _useAction.getConfirmBtn,
      getCancelBtn = _useAction.getCancelBtn;
    var drawerEle = ref(null);
    var drawerClasses = computed(function () {
      return [COMPONENT_NAME.value, "".concat(COMPONENT_NAME.value, "--").concat(props2.placement), _defineProperty(_defineProperty(_defineProperty({}, "".concat(COMPONENT_NAME.value, "--open"), isVisible.value), "".concat(COMPONENT_NAME.value, "--attach"), props2.showInAttachedElement), "".concat(COMPONENT_NAME.value, "--without-mask"), !props2.showOverlay), props2.drawerClassName];
    });
    var sizeValue = computed(function () {
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
    var wrapperStyles = computed(function () {
      return {
        transform: isVisible.value ? "translateX(0)" : void 0,
        width: ["left", "right"].includes(props2.placement) ? sizeValue.value : "",
        height: ["top", "bottom"].includes(props2.placement) ? sizeValue.value : ""
      };
    });
    var wrapperClasses = computed(function () {
      return ["".concat(COMPONENT_NAME.value, "__content-wrapper"), "".concat(COMPONENT_NAME.value, "__content-wrapper--").concat(props2.placement)];
    });
    var parentNode = computed(function () {
      var _drawerEle$value;
      return (_drawerEle$value = drawerEle.value) === null || _drawerEle$value === void 0 ? void 0 : _drawerEle$value.parentNode;
    });
    var modeAndPlacement = computed(function () {
      return [props2.mode, props2.placement].join();
    });
    var footerStyle = computed(function () {
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
      nextTick(function () {
        var _drawerEle$value2, _drawerEle$value2$foc;
        (_drawerEle$value2 = drawerEle.value) === null || _drawerEle$value2 === void 0 || (_drawerEle$value2$foc = _drawerEle$value2.focus) === null || _drawerEle$value2$foc === void 0 || _drawerEle$value2$foc.call(_drawerEle$value2);
      });
    };
    var createStyleEl = function createStyleEl() {
      if (!styleEl.value) return;
      var hasScrollBar = window.innerWidth > document.documentElement.clientWidth;
      var scrollWidth = hasScrollBar ? getScrollbarWidth() : 0;
      styleEl.value = document.createElement("style");
      styleEl.value.dataset.id = "td_drawer_".concat(+new Date(), "_").concat(key += 1);
      styleEl.value.innerHTML = "\n        html body {\n          overflow-y: hidden;\n          transition: margin 300ms cubic-bezier(0.7, 0.3, 0.1, 1) 0s;\n          ".concat(props2.mode === "push" ? "" : "width: calc(100% - ".concat(scrollWidth, "px);"), "\n        }\n      ");
    };
    var handlePushMode = function handlePushMode() {
      if (props2.mode !== "push") return;
      nextTick(function () {
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
      return createVNode("div", {
        "style": footerStyle.value
      }, [props2.placement === "right" ? confirmBtn : null, cancelBtn, props2.placement !== "right" ? confirmBtn : null]);
    };
    var _usePopupManager = usePopupManager("drawer", {
        visible: computedVisible
      }),
      isTopInteractivePopup = _usePopupManager.isTopInteractivePopup;
    watch(modeAndPlacement, handlePushMode, {
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
    watch(function () {
      return props2.visible;
    }, function (value) {
      if (isServer) return;
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
    onUpdated(updatePushMode);
    onMounted(function () {
      addStyleElToHead();
      window.addEventListener("keydown", handleEscKeydown);
    });
    onBeforeUnmount(function () {
      clearStyleEl();
      window.removeEventListener("keydown", handleEscKeydown);
    });
    var shouldRender = computed(function () {
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
      return createVNode(Teleport, {
        "disabled": !props2.attach || !teleportElement.value,
        "to": teleportElement.value
      }, {
        "default": function _default() {
          return [createVNode("div", mergeProps({
            "ref": drawerEle,
            "class": drawerClasses.value,
            "style": {
              zIndex: props2.zIndex
            },
            "onKeydown": handleEscKeydown,
            "tabindex": 0
          }, context.attrs), [props2.showOverlay && createVNode("div", {
            "class": "".concat(COMPONENT_NAME.value, "__mask"),
            "onClick": handleWrapperClick
          }, null), createVNode("div", {
            "class": wrapperClasses.value,
            "style": _objectSpread(_objectSpread({}, wrapperStyles.value), draggingStyles.value)
          }, [headerContent && createVNode("div", {
            "class": "".concat(COMPONENT_NAME.value, "__header")
          }, [headerContent]), props2.closeBtn && createVNode("div", {
            "class": "".concat(COMPONENT_NAME.value, "__close-btn"),
            "onClick": handleCloseBtnClick
          }, [renderTNodeJSX("closeBtn", createVNode(CloseIcon$1, null, null))]), createVNode("div", {
            "class": ["".concat(COMPONENT_NAME.value, "__body"), "narrow-scrollbar"]
          }, [body]), props2.footer && createVNode("div", {
            "class": "".concat(COMPONENT_NAME.value, "__footer")
          }, [renderTNodeJSX("footer", defaultFooter)]), props2.sizeDraggable && createVNode("div", {
            "style": draggableLineStyles.value,
            "onMousedown": enableDrag
          }, null)])])];
        }
      });
    };
  }
});

export { _Drawer as default };
//# sourceMappingURL=drawer.js.map
