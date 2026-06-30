/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, ref, computed, watch, nextTick, onMounted, onBeforeUnmount, createVNode, Teleport, Transition, withDirectives, mergeProps, vShow } from 'vue';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import props from './props.js';
import 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-fe23be6e.js';
import { u as usePrefixClass } from '../_chunks/dep-9e6d8a78.js';
import { u as useDestroyOnClose } from '../_chunks/dep-7f74a978.js';
import '@babel/runtime/helpers/slicedToArray';
import { u as usePopupManager } from '../_chunks/dep-880d05b9.js';
import { u as useTeleport } from '../_chunks/dep-ee693784.js';
import '../button/index.js';
import { useSameTarget } from './hooks/useSameTarget.js';
import { g as getScrollbarWidth } from '../_chunks/dep-167f0981.js';
import { getCSSValue } from './utils/index.js';
import _DialogCard from './dialog-card.js';
import { useConfig } from '../config-provider/hooks/useConfig.js';
import '../_chunks/dep-81b01cae.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '../loading/icon/gradient.js';
import '../_chunks/dep-2ea19dca.js';
import '../_chunks/dep-80a99546.js';
import '../_chunks/dep-16bcfabc.js';
import '../_chunks/dep-2accc95a.js';
import '../_chunks/dep-fb805f69.js';
import '../_chunks/dep-4f8b6591.js';
import '../loading/props.js';
import '../button/button.js';
import '../loading/index.js';
import '../loading/directive.js';
import '../loading/plugin.js';
import '../_chunks/dep-664b8b22.js';
import '../button/props.js';
import '../_chunks/dep-f7dd3c12.js';
import '../_chunks/dep-d2a6e7a4.js';
import 'tdesign-icons-vue-next';
import './dialog-card-props.js';
import '../_chunks/dep-3a7a2ef1.js';
import './hooks/useAction.js';

var _excluded = ["theme", "onConfirm", "onCancel", "onCloseBtnClick"];
var mousePosition;
var getClickPosition = function getClickPosition(e) {
  mousePosition = {
    x: e.clientX,
    y: e.clientY
  };
  setTimeout(function () {
    mousePosition = null;
  }, 100);
};
if (typeof window !== "undefined" && window.document && window.document.documentElement) {
  document.documentElement.addEventListener("click", getClickPosition, true);
}
var key = 1;
var _Dialog = defineComponent({
  name: "TDialog",
  inheritAttrs: false,
  props: props,
  emits: ["update:visible"],
  setup: function setup(props2, context) {
    var COMPONENT_NAME = usePrefixClass("dialog");
    var classPrefix = usePrefixClass();
    var dialogCardRef = ref(null);
    var _useConfig = useConfig("dialog"),
      globalConfig = _useConfig.globalConfig;
    var confirmBtnAction = function confirmBtnAction(context2) {
      var _props2$onConfirm;
      (_props2$onConfirm = props2.onConfirm) === null || _props2$onConfirm === void 0 || _props2$onConfirm.call(props2, context2);
    };
    var cancelBtnAction = function cancelBtnAction(context2) {
      var _props2$onCancel;
      (_props2$onCancel = props2.onCancel) === null || _props2$onCancel === void 0 || _props2$onCancel.call(props2, context2);
      emitCloseEvent({
        e: context2.e,
        trigger: "cancel"
      });
    };
    var teleportElement = useTeleport(function () {
      return props2.attach;
    });
    useDestroyOnClose();
    var timer = ref();
    var styleEl = ref();
    var isModal = computed(function () {
      return props2.mode === "modal";
    });
    var isModeLess = computed(function () {
      return props2.mode === "modeless";
    });
    var isFullScreen = computed(function () {
      return props2.mode === "full-screen";
    });
    var computedVisible = computed(function () {
      return props2.visible;
    });
    var maskClass = computed(function () {
      return ["".concat(COMPONENT_NAME.value, "__mask"), !props2.showOverlay && "".concat(classPrefix.value, "-is-hidden")];
    });
    var positionClass = computed(function () {
      if (isFullScreen.value) return ["".concat(COMPONENT_NAME.value, "__position_fullscreen")];
      if (isModal.value || isModeLess.value) {
        return ["".concat(COMPONENT_NAME.value, "__position"), !!props2.top && "".concat(COMPONENT_NAME.value, "--top"), "".concat(props2.placement && !props2.top ? "".concat(COMPONENT_NAME.value, "--").concat(props2.placement) : "")];
      }
      return [];
    });
    var wrapClass = computed(function () {
      return isFullScreen.value || isModal.value || isModeLess.value ? ["".concat(COMPONENT_NAME.value, "__wrap")] : null;
    });
    var positionStyle = computed(function () {
      if (isFullScreen.value) return {};
      var top = props2.top;
      var topStyle = {};
      if (top !== void 0) {
        var topValue = getCSSValue(top);
        topStyle = {
          paddingTop: topValue
        };
      }
      return topStyle;
    });
    var _usePopupManager = usePopupManager("dialog", {
        visible: computedVisible
      }),
      isTopInteractivePopup = _usePopupManager.isTopInteractivePopup;
    var isMounted = ref(false);
    watch(function () {
      return props2.visible;
    }, function (value) {
      if (value) {
        var _document$activeEleme;
        isMounted.value = true;
        if (isModal.value && !props2.showInAttachedElement || isFullScreen.value) {
          if (props2.preventScrollThrough) {
            document.body.appendChild(styleEl.value);
          }
          nextTick(function () {
            var _dialogCardRef$value;
            if (mousePosition && (_dialogCardRef$value = dialogCardRef.value) !== null && _dialogCardRef$value !== void 0 && _dialogCardRef$value.$el) {
              var el = dialogCardRef.value.$el;
              el.style.transformOrigin = "".concat(mousePosition.x - el.offsetLeft, "px ").concat(mousePosition.y - el.offsetTop, "px");
            }
          });
        }
        (_document$activeEleme = document.activeElement) === null || _document$activeEleme === void 0 || _document$activeEleme.blur();
      } else {
        clearStyleFunc();
      }
      addKeyboardEvent(value);
    });
    function destroySelf() {
      var _styleEl$value$parent, _styleEl$value$parent2;
      (_styleEl$value$parent = styleEl.value.parentNode) === null || _styleEl$value$parent === void 0 || (_styleEl$value$parent2 = _styleEl$value$parent.removeChild) === null || _styleEl$value$parent2 === void 0 || _styleEl$value$parent2.call(_styleEl$value$parent, styleEl.value);
    }
    function clearStyleFunc() {
      clearTimeout(timer.value);
      timer.value = setTimeout(function () {
        destroySelf();
      }, 150);
    }
    var addKeyboardEvent = function addKeyboardEvent(status) {
      if (status) {
        document.addEventListener("keydown", keyboardEvent);
        props2.confirmOnEnter && document.addEventListener("keydown", keyboardEnterEvent);
      } else {
        document.removeEventListener("keydown", keyboardEvent);
        props2.confirmOnEnter && document.removeEventListener("keydown", keyboardEnterEvent);
      }
    };
    var keyboardEnterEvent = function keyboardEnterEvent(e) {
      var eventSrc = e.target;
      if (eventSrc.tagName.toLowerCase() === "input") return;
      var code = e.code;
      if ((code === "Enter" || code === "NumpadEnter") && isTopInteractivePopup()) {
        var _props2$onConfirm2;
        (_props2$onConfirm2 = props2.onConfirm) === null || _props2$onConfirm2 === void 0 || _props2$onConfirm2.call(props2, {
          e: e
        });
      }
    };
    var keyboardEvent = function keyboardEvent(e) {
      if (e.code === "Escape" && isTopInteractivePopup()) {
        var _props2$onEscKeydown, _props2$closeOnEscKey;
        (_props2$onEscKeydown = props2.onEscKeydown) === null || _props2$onEscKeydown === void 0 || _props2$onEscKeydown.call(props2, {
          e: e
        });
        if ((_props2$closeOnEscKey = props2.closeOnEscKeydown) !== null && _props2$closeOnEscKey !== void 0 ? _props2$closeOnEscKey : globalConfig.value.closeOnEscKeydown) {
          emitCloseEvent({
            e: e,
            trigger: "esc"
          });
          e.stopImmediatePropagation();
        }
      }
    };
    var overlayAction = function overlayAction(e) {
      var _props2$closeOnOverla;
      if (props2.showOverlay && ((_props2$closeOnOverla = props2.closeOnOverlayClick) !== null && _props2$closeOnOverla !== void 0 ? _props2$closeOnOverla : globalConfig.value.closeOnOverlayClick)) {
        var _props2$onOverlayClic;
        (_props2$onOverlayClic = props2.onOverlayClick) === null || _props2$onOverlayClic === void 0 || _props2$onOverlayClic.call(props2, {
          e: e
        });
        emitCloseEvent({
          e: e,
          trigger: "overlay"
        });
      }
    };
    var _useSameTarget = useSameTarget(overlayAction),
      onClick = _useSameTarget.onClick,
      onMousedown = _useSameTarget.onMousedown,
      onMouseup = _useSameTarget.onMouseup;
    var closeBtnAction = function closeBtnAction(context2) {
      var _props2$onCloseBtnCli;
      (_props2$onCloseBtnCli = props2.onCloseBtnClick) === null || _props2$onCloseBtnCli === void 0 || _props2$onCloseBtnCli.call(props2, context2);
      emitCloseEvent({
        trigger: "close-btn",
        e: context2.e
      });
    };
    var beforeEnter = function beforeEnter() {
      var _props2$onBeforeOpen;
      (_props2$onBeforeOpen = props2.onBeforeOpen) === null || _props2$onBeforeOpen === void 0 || _props2$onBeforeOpen.call(props2);
    };
    var afterEnter = function afterEnter() {
      var _props2$onOpened;
      (_props2$onOpened = props2.onOpened) === null || _props2$onOpened === void 0 || _props2$onOpened.call(props2);
    };
    var beforeLeave = function beforeLeave() {
      var _props2$onBeforeClose;
      (_props2$onBeforeClose = props2.onBeforeClose) === null || _props2$onBeforeClose === void 0 || _props2$onBeforeClose.call(props2);
    };
    var afterLeave = function afterLeave() {
      var _dialogCardRef$value2, _dialogCardRef$value3, _props2$onClosed;
      (_dialogCardRef$value2 = dialogCardRef.value) === null || _dialogCardRef$value2 === void 0 || (_dialogCardRef$value3 = _dialogCardRef$value2.resetPosition) === null || _dialogCardRef$value3 === void 0 || _dialogCardRef$value3.call(_dialogCardRef$value2);
      (_props2$onClosed = props2.onClosed) === null || _props2$onClosed === void 0 || _props2$onClosed.call(props2);
    };
    var emitCloseEvent = function emitCloseEvent(ctx) {
      var _props2$onClose;
      (_props2$onClose = props2.onClose) === null || _props2$onClose === void 0 || _props2$onClose.call(props2, ctx);
      context.emit("update:visible", false);
    };
    var renderDialog = function renderDialog() {
      var theme = props2.theme;
        props2.onConfirm;
        props2.onCancel;
        props2.onCloseBtnClick;
        var otherProps = _objectWithoutProperties(props2, _excluded);
      return createVNode("div", {
        "class": wrapClass.value
      }, [createVNode("div", {
        "class": positionClass.value,
        "style": positionStyle.value,
        "onClick": onClick,
        "onMousedown": onMousedown,
        "onMouseup": onMouseup
      }, [createVNode(_DialogCard, mergeProps({
        "ref": dialogCardRef,
        "theme": theme
      }, otherProps, {
        "onConfirm": confirmBtnAction,
        "onCancel": cancelBtnAction,
        "onCloseBtnClick": closeBtnAction
      }), context.slots)])]);
    };
    onMounted(function () {
      var hasScrollBar = document.documentElement.scrollHeight > document.documentElement.clientHeight;
      var scrollWidth = hasScrollBar ? getScrollbarWidth() : 0;
      styleEl.value = document.createElement("style");
      styleEl.value.dataset.id = "td_dialog_".concat(+new Date(), "_").concat(key += 1);
      styleEl.value.innerHTML = "\n        html body {\n          overflow-y: hidden;\n          width: calc(100% - ".concat(scrollWidth, "px);\n        }\n      ");
    });
    onBeforeUnmount(function () {
      addKeyboardEvent(false);
      destroySelf();
    });
    var shouldRender = computed(function () {
      var destroyOnClose = props2.destroyOnClose,
        visible = props2.visible,
        lazy = props2.lazy;
      if (!isMounted.value) {
        return !lazy;
      } else {
        return visible || !destroyOnClose;
      }
    });
    return function () {
      var maskView = (isModal.value || isFullScreen.value) && createVNode("div", {
        "key": "mask",
        "class": maskClass.value
      }, null);
      var dialogView = renderDialog();
      var view = [maskView, dialogView];
      var ctxStyle = {
        zIndex: props2.zIndex
      };
      var ctxClass = ["".concat(COMPONENT_NAME.value, "__ctx"), _defineProperty(_defineProperty(_defineProperty({}, "".concat(COMPONENT_NAME.value, "__ctx--fixed"), isModal.value || isFullScreen.value), "".concat(COMPONENT_NAME.value, "__ctx--absolute"), isModal.value && props2.showInAttachedElement), "".concat(COMPONENT_NAME.value, "__ctx--modeless"), isModeLess.value)];
      return createVNode(Teleport, {
        "disabled": !props2.attach || !teleportElement.value,
        "to": teleportElement.value
      }, {
        "default": function _default() {
          return [createVNode(Transition, {
            "duration": 300,
            "name": "".concat(COMPONENT_NAME.value, "-zoom__vue"),
            "onBeforeEnter": beforeEnter,
            "onAfterEnter": afterEnter,
            "onBeforeLeave": beforeLeave,
            "onAfterLeave": afterLeave
          }, {
            "default": function _default() {
              return [shouldRender.value && withDirectives(createVNode("div", mergeProps({
                "class": ctxClass,
                "style": ctxStyle
              }, context.attrs), [view]), [[vShow, props2.visible]])];
            }
          })];
        }
      });
    };
  }
});

export { _Dialog as default };
//# sourceMappingURL=dialog.js.map
