/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

var Vue = require('vue');
var configProvider_hooks_useConfig = require('../config-provider/hooks/useConfig.js');
var configProvider_utils_context = require('./dep-5d7e2375.js');
var _createClass = require('@babel/runtime/helpers/createClass');
var _classCallCheck = require('@babel/runtime/helpers/classCallCheck');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _createClass__default = /*#__PURE__*/_interopDefaultLegacy(_createClass);
var _classCallCheck__default = /*#__PURE__*/_interopDefaultLegacy(_classCallCheck);
var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

var expand = configProvider_utils_context.EAnimationType.expand,
  ripple = configProvider_utils_context.EAnimationType.ripple,
  fade = configProvider_utils_context.EAnimationType.fade;
function useKeepAnimation() {
  var _useConfig = configProvider_hooks_useConfig.useConfig("animation"),
    globalConfig = _useConfig.globalConfig;
  var keepAnimation = function keepAnimation(type) {
    var _animationConfig$excl, _animationConfig$incl;
    var animationConfig = globalConfig.value;
    return animationConfig && !((_animationConfig$excl = animationConfig.exclude) !== null && _animationConfig$excl !== void 0 && _animationConfig$excl.includes(type)) && ((_animationConfig$incl = animationConfig.include) === null || _animationConfig$incl === void 0 ? void 0 : _animationConfig$incl.includes(type));
  };
  return {
    keepExpand: keepAnimation(expand),
    keepRipple: keepAnimation(ripple),
    keepFade: keepAnimation(fade)
  };
}

var popupStackType = ["dialog", "drawer"];
var POPUP_BASE_Z_INDEX = 1e3;
var MESSAGE_BASE_Z_INDEX = 5e3;
var Z_INDEX_STEP = 1;
var PopupManager = /*#__PURE__*/_createClass__default["default"](function PopupManager() {
  var _this = this;
  _classCallCheck__default["default"](this, PopupManager);
  _defineProperty__default["default"](this, "popupStack", {
    popup: /* @__PURE__ */new Set(),
    dialog: /* @__PURE__ */new Set(),
    message: /* @__PURE__ */new Set(),
    drawer: /* @__PURE__ */new Set()
  });
  _defineProperty__default["default"](this, "zIndexStack", []);
  _defineProperty__default["default"](this, "getNextZIndex", function (type) {
    var current = type === "message" ? Array.from(_this.popupStack.message).pop() || MESSAGE_BASE_Z_INDEX : Array.from(_this.popupStack.popup).pop() || POPUP_BASE_Z_INDEX;
    return current + Z_INDEX_STEP;
  });
  _defineProperty__default["default"](this, "add", function (type) {
    var zIndex = _this.getNextZIndex(type);
    _this.popupStack[type].add(zIndex);
    if (popupStackType.includes(type)) {
      _this.popupStack.popup.add(zIndex);
    }
    _this.zIndexStack.push(zIndex);
    return zIndex;
  });
  _defineProperty__default["default"](this, "delete", function (zIndex, type) {
    _this.popupStack[type]["delete"](zIndex);
    if (popupStackType.includes(type)) {
      _this.popupStack.popup["delete"](zIndex);
    }
    var index = _this.zIndexStack.indexOf(zIndex);
    if (index !== -1) {
      _this.zIndexStack.splice(index, 1);
    }
  });
  _defineProperty__default["default"](this, "isTopInteractivePopup", function (popupType, zIndex) {
    var _this$popupStack$popu;
    if (popupStackType.includes(popupType)) {
      var lastZIndex = _this.zIndexStack[_this.zIndexStack.length - 1];
      return zIndex === lastZIndex;
    }
    if (((_this$popupStack$popu = _this.popupStack[popupType]) === null || _this$popupStack$popu === void 0 ? void 0 : _this$popupStack$popu.size) > 1) {
      return zIndex === Array.from(_this.popupStack[popupType]).pop();
    }
    return true;
  });
  _defineProperty__default["default"](this, "getLastZIndex", function () {
    return _this.zIndexStack[_this.zIndexStack.length - 1];
  });
});
var popupManager = new PopupManager();
function usePopupManager(type) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    visible = _ref.visible,
    runOnMounted = _ref.runOnMounted;
  var zIndex = Vue.ref(0);
  var open = function open() {
    zIndex.value = popupManager.add(type);
  };
  var close = function close() {
    popupManager["delete"](zIndex.value, type);
  };
  var isTopInteractivePopup = function isTopInteractivePopup() {
    if (popupStackType.includes(type)) {
      return popupManager.isTopInteractivePopup(type, zIndex.value);
    }
    return false;
  };
  Vue.watch(function () {
    return visible === null || visible === void 0 ? void 0 : visible.value;
  }, function (visible2) {
    if (visible2) {
      open();
    } else {
      close();
    }
  }, {
    immediate: true
  });
  if (runOnMounted) {
    Vue.onMounted(function () {
      open();
    });
    Vue.onBeforeUnmount(function () {
      close();
    });
  }
  return {
    zIndex: Vue.readonly(zIndex),
    open: open,
    close: close,
    isTopInteractivePopup: isTopInteractivePopup
  };
}

exports.useKeepAnimation = useKeepAnimation;
exports.usePopupManager = usePopupManager;
//# sourceMappingURL=dep-cc66acf1.js.map
