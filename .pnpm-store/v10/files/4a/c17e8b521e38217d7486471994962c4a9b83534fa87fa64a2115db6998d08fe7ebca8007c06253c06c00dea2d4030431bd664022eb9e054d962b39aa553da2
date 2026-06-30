/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var _objectWithoutProperties = require('@babel/runtime/helpers/objectWithoutProperties');
var dialog_props = require('./props.js');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../_chunks/dep-953a77eb.js');
var index = require('../_chunks/dep-ecaaae91.js');
var index$1 = require('../_chunks/dep-92c8c5c9.js');
require('@babel/runtime/helpers/slicedToArray');
var index$2 = require('../_chunks/dep-cc66acf1.js');
var loading_loading = require('../_chunks/dep-237ed01f.js');
require('../button/index.js');
var dialog_hooks_useSameTarget = require('./hooks/useSameTarget.js');
var getScrollbarWidth = require('../_chunks/dep-7067edce.js');
var dialog_utils_index = require('./utils/index.js');
var dialog_dialogCard = require('./dialog-card.js');
var configProvider_hooks_useConfig = require('../config-provider/hooks/useConfig.js');
require('../_chunks/dep-8abdfb41.js');
require('../_chunks/dep-5d7e2375.js');
require('../_chunks/dep-94a7dc2d.js');
require('dayjs');
require('../_chunks/dep-92e23f17.js');
require('../_chunks/dep-0ff616fe.js');
require('../_chunks/dep-5f52cd42.js');
require('../_chunks/dep-48f60c78.js');
require('../_chunks/dep-b3b464e8.js');
require('../_chunks/dep-0813861e.js');
require('../_chunks/dep-f57bcb19.js');
require('../_chunks/dep-dc4bbc14.js');
require('../_chunks/dep-05f89f0d.js');
require('../_chunks/dep-87589faa.js');
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
require('../_chunks/dep-fd5a369e.js');
require('../_chunks/dep-4ccaead1.js');
require('../_chunks/dep-a55e8a08.js');
require('../_chunks/dep-990979bb.js');
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
require('../loading/props.js');
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
require('tdesign-icons-vue-next');
require('./dialog-card-props.js');
require('../_chunks/dep-31c76dc6.js');
require('./hooks/useAction.js');
require('../_chunks/dep-ace0b57c.js');
require('../_chunks/dep-11b67e11.js');
require('../_chunks/dep-dcb859c6.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);
var _objectWithoutProperties__default = /*#__PURE__*/_interopDefaultLegacy(_objectWithoutProperties);

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
var _Dialog = Vue.defineComponent({
  name: "TDialog",
  inheritAttrs: false,
  props: dialog_props["default"],
  emits: ["update:visible"],
  setup: function setup(props2, context) {
    var COMPONENT_NAME = index.usePrefixClass("dialog");
    var classPrefix = index.usePrefixClass();
    var dialogCardRef = Vue.ref(null);
    var _useConfig = configProvider_hooks_useConfig.useConfig("dialog"),
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
    var teleportElement = loading_loading.useTeleport(function () {
      return props2.attach;
    });
    index$1.useDestroyOnClose();
    var timer = Vue.ref();
    var styleEl = Vue.ref();
    var isModal = Vue.computed(function () {
      return props2.mode === "modal";
    });
    var isModeLess = Vue.computed(function () {
      return props2.mode === "modeless";
    });
    var isFullScreen = Vue.computed(function () {
      return props2.mode === "full-screen";
    });
    var computedVisible = Vue.computed(function () {
      return props2.visible;
    });
    var maskClass = Vue.computed(function () {
      return ["".concat(COMPONENT_NAME.value, "__mask"), !props2.showOverlay && "".concat(classPrefix.value, "-is-hidden")];
    });
    var positionClass = Vue.computed(function () {
      if (isFullScreen.value) return ["".concat(COMPONENT_NAME.value, "__position_fullscreen")];
      if (isModal.value || isModeLess.value) {
        return ["".concat(COMPONENT_NAME.value, "__position"), !!props2.top && "".concat(COMPONENT_NAME.value, "--top"), "".concat(props2.placement && !props2.top ? "".concat(COMPONENT_NAME.value, "--").concat(props2.placement) : "")];
      }
      return [];
    });
    var wrapClass = Vue.computed(function () {
      return isFullScreen.value || isModal.value || isModeLess.value ? ["".concat(COMPONENT_NAME.value, "__wrap")] : null;
    });
    var positionStyle = Vue.computed(function () {
      if (isFullScreen.value) return {};
      var top = props2.top;
      var topStyle = {};
      if (top !== void 0) {
        var topValue = dialog_utils_index.getCSSValue(top);
        topStyle = {
          paddingTop: topValue
        };
      }
      return topStyle;
    });
    var _usePopupManager = index$2.usePopupManager("dialog", {
        visible: computedVisible
      }),
      isTopInteractivePopup = _usePopupManager.isTopInteractivePopup;
    var isMounted = Vue.ref(false);
    Vue.watch(function () {
      return props2.visible;
    }, function (value) {
      if (value) {
        var _document$activeEleme;
        isMounted.value = true;
        if (isModal.value && !props2.showInAttachedElement || isFullScreen.value) {
          if (props2.preventScrollThrough) {
            document.body.appendChild(styleEl.value);
          }
          Vue.nextTick(function () {
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
    var _useSameTarget = dialog_hooks_useSameTarget.useSameTarget(overlayAction),
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
        var otherProps = _objectWithoutProperties__default["default"](props2, _excluded);
      return Vue.createVNode("div", {
        "class": wrapClass.value
      }, [Vue.createVNode("div", {
        "class": positionClass.value,
        "style": positionStyle.value,
        "onClick": onClick,
        "onMousedown": onMousedown,
        "onMouseup": onMouseup
      }, [Vue.createVNode(dialog_dialogCard["default"], Vue.mergeProps({
        "ref": dialogCardRef,
        "theme": theme
      }, otherProps, {
        "onConfirm": confirmBtnAction,
        "onCancel": cancelBtnAction,
        "onCloseBtnClick": closeBtnAction
      }), context.slots)])]);
    };
    Vue.onMounted(function () {
      var hasScrollBar = document.documentElement.scrollHeight > document.documentElement.clientHeight;
      var scrollWidth = hasScrollBar ? getScrollbarWidth.getScrollbarWidth() : 0;
      styleEl.value = document.createElement("style");
      styleEl.value.dataset.id = "td_dialog_".concat(+new Date(), "_").concat(key += 1);
      styleEl.value.innerHTML = "\n        html body {\n          overflow-y: hidden;\n          width: calc(100% - ".concat(scrollWidth, "px);\n        }\n      ");
    });
    Vue.onBeforeUnmount(function () {
      addKeyboardEvent(false);
      destroySelf();
    });
    var shouldRender = Vue.computed(function () {
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
      var maskView = (isModal.value || isFullScreen.value) && Vue.createVNode("div", {
        "key": "mask",
        "class": maskClass.value
      }, null);
      var dialogView = renderDialog();
      var view = [maskView, dialogView];
      var ctxStyle = {
        zIndex: props2.zIndex
      };
      var ctxClass = ["".concat(COMPONENT_NAME.value, "__ctx"), _defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"]({}, "".concat(COMPONENT_NAME.value, "__ctx--fixed"), isModal.value || isFullScreen.value), "".concat(COMPONENT_NAME.value, "__ctx--absolute"), isModal.value && props2.showInAttachedElement), "".concat(COMPONENT_NAME.value, "__ctx--modeless"), isModeLess.value)];
      return Vue.createVNode(Vue.Teleport, {
        "disabled": !props2.attach || !teleportElement.value,
        "to": teleportElement.value
      }, {
        "default": function _default() {
          return [Vue.createVNode(Vue.Transition, {
            "duration": 300,
            "name": "".concat(COMPONENT_NAME.value, "-zoom__vue"),
            "onBeforeEnter": beforeEnter,
            "onAfterEnter": afterEnter,
            "onBeforeLeave": beforeLeave,
            "onAfterLeave": afterLeave
          }, {
            "default": function _default() {
              return [shouldRender.value && Vue.withDirectives(Vue.createVNode("div", Vue.mergeProps({
                "class": ctxClass,
                "style": ctxStyle
              }, context.attrs), [view]), [[Vue.vShow, props2.visible]])];
            }
          })];
        }
      });
    };
  }
});

exports["default"] = _Dialog;
//# sourceMappingURL=dialog.js.map
