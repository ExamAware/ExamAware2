/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { getCurrentInstance, h, createVNode, Comment, Fragment, isVNode, Teleport, computed, ref, provide, onUpdated, inject, onUnmounted, onMounted, watch, onBeforeUnmount, nextTick, readonly, reactive, toRefs } from 'vue';
import { isFunction, isArray, isObject, camelCase, kebabCase, isBoolean, sum, max, min, throttle, debounce, isEqual, isString } from 'lodash-es';
import { _ as _toConsumableArray } from './dep-00b4e06a.mjs';
import { _ as _typeof } from './dep-257428bc.mjs';
import { h as getChildren, m as isCommentVNode, n as getParams, p as getDefaultNode, q as getSlotFirst, i as isServer, g as getAttach } from './dep-51a43106.mjs';
import { useConfig } from '../config-provider/hooks/useConfig.mjs';
import { o as observe } from './dep-22ebd6af.mjs';
import { _ as _slicedToArray } from './dep-9003fde5.mjs';
import { g as getFileUrlByFileRaw } from './dep-cdd448ec.mjs';
import { EAnimationType } from '../config-provider/utils/context.mjs';
import { a as _createClass, _ as _classCallCheck } from './dep-84fd47b3.mjs';
import { _ as _defineProperty } from './dep-1dacc319.mjs';
import { T as THEME_MODE } from './dep-d36c4a3f.mjs';

function useIcon() {
  var instance = getCurrentInstance();
  return function renderIconTNode(iconType, defaultIcons) {
    var iconContent;
    if (isFunction(instance.props[iconType])) {
      iconContent = instance.props[iconType](h);
    } else if (instance.slots[iconType]) {
      iconContent = instance.slots[iconType] && instance.slots[iconType](null)[0];
    } else if (defaultIcons) {
      var Component = defaultIcons[instance.props.theme];
      iconContent = createVNode(Component, null, null);
    }
    return iconContent;
  };
}

function useChildComponentSlots() {
  var instance = getCurrentInstance();
  return function (childComponentName, slots) {
    var _slots, _slots$default;
    if (!slots) {
      slots = instance.slots;
    }
    var content = ((_slots = slots) === null || _slots === void 0 || (_slots$default = _slots["default"]) === null || _slots$default === void 0 ? void 0 : _slots$default.call(_slots)) || [];
    return getChildren(content).filter(function (item) {
      var _item$type$name;
      return (_item$type$name = item.type.name) === null || _item$type$name === void 0 ? void 0 : _item$type$name.endsWith(childComponentName);
    });
  };
}
function useChildSlots() {
  var instance = getCurrentInstance();
  return function () {
    var _slots$default2;
    var slots = instance.slots;
    var content = (slots === null || slots === void 0 || (_slots$default2 = slots["default"]) === null || _slots$default2 === void 0 ? void 0 : _slots$default2.call(slots)) || [];
    return content.filter(function (item) {
      if (_typeof(item.type) === "symbol" && !item.children) {
        return false;
      }
      return item.type !== Comment;
    }).map(function (item) {
      if (item.children && isArray(item.children) && item.type === Fragment) return item.children;
      return item;
    }).flat();
  };
}
function useFlatChildrenSlots() {
  function getFlatChildren(children) {
    var result = [];
    children.forEach(function (child) {
      if (isVNode(child) && child.type === Fragment && Array.isArray(child.children)) {
        result.push.apply(result, _toConsumableArray(getFlatChildren(child.children)));
      } else if (isVNode(child) && [Teleport, Comment].some(function (vNode) {
        return vNode === child.type;
      })) {} else {
        result.push(child);
      }
    });
    return result;
  }
  return getFlatChildren;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
var hasOwn = function hasOwn(val, key) {
  return hasOwnProperty.call(val, key);
};
var getPropertyValFromObj = function getPropertyValFromObj(val, key) {
  return hasOwn(val, key) ? val[key] : void 0;
};
var objectToString = Object.prototype.toString;
var toTypeString = function toTypeString(value) {
  return objectToString.call(value);
};
var isPlainObject = function isPlainObject(val) {
  return toTypeString(val) === "[object Object]";
};
var isPromise = function isPromise(val) {
  return (isObject(val) || isFunction(val)) && isFunction(val.then) && isFunction(val["catch"]);
};

function handleSlots(instance, name, params) {
  var _instance$slots$camel, _instance$slots, _instance$slots$kebab, _instance$slots2;
  var node = (_instance$slots$camel = (_instance$slots = instance.slots)[camelCase(name)]) === null || _instance$slots$camel === void 0 ? void 0 : _instance$slots$camel.call(_instance$slots, params);
  if (node && node.filter(function (t) {
    return !isCommentVNode(t);
  }).length) return node;
  node = (_instance$slots$kebab = (_instance$slots2 = instance.slots)[kebabCase(name)]) === null || _instance$slots$kebab === void 0 ? void 0 : _instance$slots$kebab.call(_instance$slots2, params);
  if (node && node.filter(function (t) {
    return !isCommentVNode(t);
  }).length) return node;
  return null;
}
function isEmptyNode(node) {
  if ([void 0, null, ""].includes(node)) return true;
  var innerNodes = node instanceof Array ? node : [node];
  var r = innerNodes.filter(function (node2) {
    var _node2$type;
    return (node2 === null || node2 === void 0 || (_node2$type = node2.type) === null || _node2$type === void 0 ? void 0 : _node2$type.toString()) !== "Symbol(Comment)";
  });
  return !r.length;
}
function isPropExplicitlySet(instance, propName) {
  var vProps = (instance === null || instance === void 0 ? void 0 : instance.vnode.props) || {};
  return hasOwn(vProps, camelCase(propName)) || hasOwn(vProps, kebabCase(propName));
}
var useTNodeJSX = function useTNodeJSX() {
  var instance = getCurrentInstance();
  return function (name, options) {
    var renderParams = getParams(options);
    var defaultNode = getDefaultNode(options);
    var isSlotFirst = getSlotFirst(options);
    var renderSlot = instance.slots[camelCase(name)] || instance.slots[kebabCase(name)];
    if (isSlotFirst && renderSlot) {
      return handleSlots(instance, name, renderParams);
    } else {
      if (isPropExplicitlySet(instance, name)) {
        var _instance$type$props$;
        var propsNode2 = instance.props[camelCase(name)] || instance.props[kebabCase(name)];
        var types = (_instance$type$props$ = instance.type.props[name]) === null || _instance$type$props$ === void 0 ? void 0 : _instance$type$props$.type;
        if ((types === null || types === void 0 ? void 0 : types.length) > 1) {
          if (types.includes(Boolean) && types.includes(Function)) {
            if (propsNode2 === "" && !renderSlot) return defaultNode;
          }
        }
        if (propsNode2 === false || propsNode2 === null) return;
        if (propsNode2 === true) {
          return handleSlots(instance, name, renderParams) || defaultNode;
        }
        if (isFunction(propsNode2)) return propsNode2(h, renderParams);
        var isPropsEmpty = [void 0, ""].includes(propsNode2);
        if (isPropsEmpty && renderSlot) {
          return handleSlots(instance, name, renderParams);
        }
        return propsNode2;
      }
      if (renderSlot) {
        return handleSlots(instance, name, renderParams);
      }
      var propsNode = instance.props[camelCase(name)] || instance.props[kebabCase(name)];
      if (propsNode === false || propsNode === null) return;
      if (propsNode === true) {
        return defaultNode;
      }
      if (isFunction(propsNode)) return propsNode(h, renderParams);
      return propsNode;
    }
  };
};
var useTNodeDefault = function useTNodeDefault() {
  var renderTNodeJSX = useTNodeJSX();
  return function (name, options) {
    var defaultNode = getDefaultNode(options);
    return renderTNodeJSX(name, options) || defaultNode;
  };
};
var useContent = function useContent() {
  var renderTNodeJSX = useTNodeJSX();
  return function (name1, name2, options) {
    var params = getParams(options);
    var defaultNode = getDefaultNode(options);
    var toParams = params ? {
      params: params
    } : void 0;
    var node1 = renderTNodeJSX(name1, toParams);
    var node2 = renderTNodeJSX(name2, toParams);
    var res = isEmptyNode(node1) ? node2 : node1;
    return isEmptyNode(res) ? defaultNode : res;
  };
};
var filterCommentNode = function filterCommentNode(nodes) {
  return nodes.filter(function (node) {
    return !isCommentVNode(node);
  });
};

function useCollapseAnimation() {
  var beforeEnter = function beforeEnter(el) {
    el.dataset.oldPaddingTop = el.style.paddingTop;
    el.dataset.oldPaddingBottom = el.style.paddingBottom;
    el.style.height = "0";
    el.style.paddingTop = "0";
    el.style.paddingBottom = "0";
  };
  var enter = function enter(el) {
    el.dataset.oldOverflow = el.style.overflow;
    el.style.height = "".concat(el.scrollHeight, "px");
    el.style.paddingTop = el.dataset.oldPaddingTop;
    el.style.paddingBottom = el.dataset.oldPaddingBottom;
    el.style.overflow = "hidden";
  };
  var afterEnter = function afterEnter(el) {
    el.style.height = "";
    el.style.overflow = el.dataset.oldOverflow;
  };
  var beforeLeave = function beforeLeave(el) {
    el.dataset.oldPaddingTop = el.style.paddingTop;
    el.dataset.oldPaddingBottom = el.style.paddingBottom;
    el.dataset.oldOverflow = el.style.overflow;
    el.style.height = "".concat(el.scrollHeight, "px");
    el.style.overflow = "hidden";
  };
  var leave = function leave(el) {
    if (el.scrollHeight !== 0) {
      el.style.height = "0";
      el.style.paddingTop = "0";
      el.style.paddingBottom = "0";
    }
  };
  var afterLeave = function afterLeave(el) {
    el.style.height = "";
    el.style.overflow = el.dataset.oldOverflow;
    el.style.paddingTop = el.dataset.oldPaddingTop;
    el.style.paddingBottom = el.dataset.oldPaddingBottom;
  };
  return {
    beforeEnter: beforeEnter,
    enter: enter,
    afterEnter: afterEnter,
    beforeLeave: beforeLeave,
    leave: leave,
    afterLeave: afterLeave
  };
}

function usePrefixClass(componentName) {
  var _useConfig = useConfig("classPrefix"),
    classPrefix = _useConfig.classPrefix;
  return computed(function () {
    return componentName ? "".concat(classPrefix.value, "-").concat(componentName) : classPrefix.value;
  });
}

function useCommonClassName() {
  var _useConfig = useConfig("classPrefix"),
    classPrefix = _useConfig.classPrefix;
  return {
    classPrefix: classPrefix,
    SIZE: computed(function () {
      return {
        small: "".concat(classPrefix.value, "-size-s"),
        medium: "".concat(classPrefix.value, "-size-m"),
        large: "".concat(classPrefix.value, "-size-l"),
        "default": "",
        xs: "".concat(classPrefix.value, "-size-xs"),
        xl: "".concat(classPrefix.value, "-size-xl"),
        block: "".concat(classPrefix.value, "-size-full-width")
      };
    }),
    STATUS: computed(function () {
      return {
        loading: "".concat(classPrefix.value, "-is-loading"),
        loadMore: "".concat(classPrefix.value, "-is-load-more"),
        disabled: "".concat(classPrefix.value, "-is-disabled"),
        focused: "".concat(classPrefix.value, "-is-focused"),
        success: "".concat(classPrefix.value, "-is-success"),
        error: "".concat(classPrefix.value, "-is-error"),
        warning: "".concat(classPrefix.value, "-is-warning"),
        selected: "".concat(classPrefix.value, "-is-selected"),
        active: "".concat(classPrefix.value, "-is-active"),
        checked: "".concat(classPrefix.value, "-is-checked"),
        current: "".concat(classPrefix.value, "-is-current"),
        hidden: "".concat(classPrefix.value, "-is-hidden"),
        visible: "".concat(classPrefix.value, "-is-visible"),
        expanded: "".concat(classPrefix.value, "-is-expanded"),
        indeterminate: "".concat(classPrefix.value, "-is-indeterminate")
      };
    })
  };
}

function useDefaultValue(value, defaultValue, onChange, propsName) {
  var _getCurrentInstance = getCurrentInstance(),
    emit = _getCurrentInstance.emit,
    vnode = _getCurrentInstance.vnode;
  var internalValue = ref();
  var vProps = vnode.props || {};
  var isVMP = Object.prototype.hasOwnProperty.call(vProps, propsName) || Object.prototype.hasOwnProperty.call(vProps, kebabCase(propsName));
  if (isVMP) {
    return [value, function (newValue) {
      emit("update:".concat(propsName), newValue);
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      onChange === null || onChange === void 0 || onChange.apply(void 0, [newValue].concat(args));
    }];
  }
  internalValue.value = defaultValue;
  return [internalValue, function (newValue) {
    internalValue.value = newValue;
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }
    onChange === null || onChange === void 0 || onChange.apply(void 0, [newValue].concat(args));
  }];
}

var TDisplayNoneElementRefresh = "t-display-none-element-refresh";
function useDestroyOnClose() {
  var refresh = ref(0);
  provide(TDisplayNoneElementRefresh, refresh);
  onUpdated(function () {
    refresh.value += 1;
  });
}

function useDisabled(context) {
  var currentInstance = getCurrentInstance();
  var componentDisabled = computed(function () {
    return currentInstance.props.disabled;
  });
  var formDisabled = inject("formDisabled", /* @__PURE__ */Object.create(null));
  return computed(function () {
    var _context$beforeDisabl, _context$afterDisable, _formDisabled$disable;
    if (isBoolean(context === null || context === void 0 || (_context$beforeDisabl = context.beforeDisabled) === null || _context$beforeDisabl === void 0 ? void 0 : _context$beforeDisabl.value)) return context.beforeDisabled.value;
    if (isBoolean(componentDisabled.value)) return componentDisabled.value;
    if (isBoolean(context === null || context === void 0 || (_context$afterDisable = context.afterDisabled) === null || _context$afterDisable === void 0 ? void 0 : _context$afterDisable.value)) return context.afterDisabled.value;
    if (isBoolean((_formDisabled$disable = formDisabled.disabled) === null || _formDisabled$disable === void 0 ? void 0 : _formDisabled$disable.value)) return formDisabled.disabled.value;
    return false;
  });
}

var traversalTabNavs = function traversalTabNavs(tabNavs, fn) {
  Array.from(tabNavs).filter(function (node) {
    return node instanceof HTMLDivElement && !!node.getAttribute("draggable");
  }).forEach(fn);
};
var handleTarget = function handleTarget(target, tabNavs) {
  var resultTarget;
  traversalTabNavs(tabNavs, function (itemNode) {
    if (target instanceof Node && itemNode.contains(target)) {
      resultTarget = itemNode;
    }
  });
  return resultTarget;
};
function useDragSort(props) {
  var navsWrap = null;
  var dragged;
  var enterTargets = [];
  var dragstart = function dragstart(event) {
    var target = event.target;
    dragged = target;
    target.style.opacity = "0.5";
    var dt = event.dataTransfer;
    if (dt) {
      dt.effectAllowed = "copy";
      try {
        dt.setData("text/plain", "");
      } catch (e) {}
    }
  };
  var dragend = function dragend(event) {
    event.target.style.opacity = "";
  };
  var dragover = function dragover(event) {
    if (!navsWrap) return;
    var target = handleTarget(event.target, navsWrap.children);
    var dt = event.dataTransfer;
    if (dt) {
      dt.dropEffect = target !== null && target !== void 0 && target.draggable ? "copy" : "none";
    }
    if (target !== null && target !== void 0 && target.draggable) {
      event.preventDefault();
    }
  };
  var dragenter = function dragenter(event) {
    var target = handleTarget(event.target, navsWrap.children);
    if (target && target !== dragged && target.draggable) {
      var firstChild = target.firstChild;
      if (firstChild instanceof HTMLElement) {
        var newStyle = {
          outline: "1px dashed #0052d9"
        };
        Object.assign(firstChild.style, newStyle);
      }
      if (!enterTargets.includes(target)) {
        enterTargets.push(target);
      }
    }
  };
  var dragleave = function dragleave(event) {
    var target = event.target;
    for (var _i = 0, _enterTargets = enterTargets; _i < _enterTargets.length; _i++) {
      var enterTarget = _enterTargets[_i];
      if (!enterTarget.contains(target)) {
        enterTarget.firstChild.style.outline = "none";
      }
    }
  };
  var drop = function drop(event) {
    event.preventDefault();
    traversalTabNavs(navsWrap.children, function (tabNav) {
      var firstChild = tabNav.firstChild;
      if (firstChild) {
        firstChild.style.outline = "none";
      }
    });
    var target = handleTarget(event.target, navsWrap.children);
    if (target && target.parentNode !== dragged && target.draggable) {
      var _props$onDragSort;
      var dragIndex = [].indexOf.call(navsWrap.children, dragged);
      var targetIndex = [].indexOf.call(navsWrap.children, target);
      if (targetIndex > dragIndex) {
        target = navsWrap.children[targetIndex + 1];
      }
      var currentIndex = props.theme === "card" ? dragIndex : dragIndex - 1;
      var endIndex = props.theme === "card" ? targetIndex : targetIndex - 1;
      (_props$onDragSort = props.onDragSort) === null || _props$onDragSort === void 0 || _props$onDragSort.call(props, {
        currentIndex: currentIndex,
        current: props.panels[currentIndex].value,
        targetIndex: endIndex,
        target: props.panels[endIndex].value
      });
    }
  };
  function setNavsWrap(val) {
    navsWrap = val;
    navsWrap.addEventListener("dragstart", dragstart, false);
    navsWrap.addEventListener("dragend", dragend, false);
    navsWrap.addEventListener("dragover", dragover, false);
    navsWrap.addEventListener("dragenter", dragenter, false);
    document.addEventListener("dragleave", dragleave, false);
    document.addEventListener("mousemove", dragleave, false);
    navsWrap.addEventListener("drop", drop, false);
  }
  onUnmounted(function () {
    if (navsWrap) {
      navsWrap.removeEventListener("dragstart", dragstart);
      navsWrap.removeEventListener("dragend", dragend);
      navsWrap.removeEventListener("dragover", dragover);
      navsWrap.removeEventListener("dragenter", dragenter);
      document.removeEventListener("dragleave", dragleave);
      document.removeEventListener("mousemove", dragleave);
      navsWrap.removeEventListener("drop", drop);
    }
  });
  return {
    setNavsWrap: setNavsWrap
  };
}

function useElementLazyRender(labelRef, lazyLoad) {
  var ioObserver = ref();
  var showElement = ref(true);
  var handleLazyLoad = function handleLazyLoad() {
    if (!lazyLoad.value || !labelRef.value || ioObserver.value) return;
    showElement.value = false;
    var io = observe(labelRef.value, null, function () {
      showElement.value = true;
    }, 10);
    ioObserver.value = io;
  };
  onMounted(handleLazyLoad);
  lazyLoad.value && watch([lazyLoad, labelRef], handleLazyLoad);
  onBeforeUnmount(function () {
    var _ioObserver$value, _ioObserver$value$uno;
    if (!lazyLoad.value) return;
    (_ioObserver$value = ioObserver.value) === null || _ioObserver$value === void 0 || (_ioObserver$value$uno = _ioObserver$value.unobserve) === null || _ioObserver$value$uno === void 0 || _ioObserver$value$uno.call(_ioObserver$value, labelRef.value);
  });
  return {
    showElement: showElement
  };
}

function useGlobalIcon(tdIcon) {
  var _useConfig = useConfig("icon"),
    globalConfig = _useConfig.globalConfig;
  var resultIcon = {};
  Object.keys(tdIcon).forEach(function (key) {
    var _globalConfig$value;
    resultIcon[key] = ((_globalConfig$value = globalConfig.value) === null || _globalConfig$value === void 0 ? void 0 : _globalConfig$value[key]) || tdIcon[key];
  });
  return resultIcon;
}

function useImagePreviewUrl(imgUrl) {
  var previewUrl = ref("");
  watch([imgUrl], function (_ref, _ref2) {
    var _ref3 = _slicedToArray(_ref, 1),
      imgUrl2 = _ref3[0];
    var _ref4 = _slicedToArray(_ref2, 1),
      preImgUrl = _ref4[0];
    if (preImgUrl === imgUrl2) return;
    if (typeof imgUrl2 === "string") {
      previewUrl.value = imgUrl2;
      return;
    }
    getFileUrlByFileRaw(imgUrl2).then(function (url) {
      previewUrl.value = url;
    });
  }, {
    immediate: true
  });
  return {
    previewUrl: previewUrl
  };
}

var expand = EAnimationType.expand,
  ripple = EAnimationType.ripple,
  fade = EAnimationType.fade;
function useKeepAnimation() {
  var _useConfig = useConfig("animation"),
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

function useLazyLoad(containerRef, childRef, params) {
  var tRowHeight = computed(function () {
    return Math.max(params.rowHeight || 48, 48);
  });
  var isInit = ref(false);
  var hasLazyLoadHolder = computed(function () {
    return (params === null || params === void 0 ? void 0 : params.type) === "lazy" && !isInit.value;
  });
  var requestAnimationFrame = !isServer && window.requestAnimationFrame || function (cb) {
    return setTimeout(cb, 16.6);
  };
  var init = function init() {
    if (!isInit.value) {
      requestAnimationFrame(function () {
        isInit.value = true;
      });
    }
  };
  onMounted(function () {
    if ((params === null || params === void 0 ? void 0 : params.type) !== "lazy") return;
    nextTick(function () {
      var bufferSize = Math.max(10, params.bufferSize || 10);
      var height = tRowHeight.value * bufferSize;
      observe(childRef.value, containerRef.value, init, height);
    });
  });
  return {
    hasLazyLoadHolder: hasLazyLoadHolder,
    tRowHeight: tRowHeight
  };
}

function useListener(type, listener) {
  onMounted(function () {
    window.addEventListener(type, listener);
  });
  onBeforeUnmount(function () {
    window.removeEventListener(type, listener);
  });
}
function useResize(listener, observer) {
  useListener("resize", listener);
  var resizeObserver = null;
  onMounted(function () {
    if (!window.ResizeObserver || !observer) return;
    resizeObserver = new window.ResizeObserver(listener);
    resizeObserver.observe(observer);
  });
  onBeforeUnmount(function () {
    var _resizeObserver;
    (_resizeObserver = resizeObserver) === null || _resizeObserver === void 0 || _resizeObserver.disconnect();
  });
}

var popupStackType = ["dialog", "drawer"];
var POPUP_BASE_Z_INDEX = 1e3;
var MESSAGE_BASE_Z_INDEX = 5e3;
var Z_INDEX_STEP = 1;
var PopupManager = /*#__PURE__*/_createClass(function PopupManager() {
  var _this = this;
  _classCallCheck(this, PopupManager);
  _defineProperty(this, "popupStack", {
    popup: /* @__PURE__ */new Set(),
    dialog: /* @__PURE__ */new Set(),
    message: /* @__PURE__ */new Set(),
    drawer: /* @__PURE__ */new Set()
  });
  _defineProperty(this, "zIndexStack", []);
  _defineProperty(this, "getNextZIndex", function (type) {
    var current = type === "message" ? Array.from(_this.popupStack.message).pop() || MESSAGE_BASE_Z_INDEX : Array.from(_this.popupStack.popup).pop() || POPUP_BASE_Z_INDEX;
    return current + Z_INDEX_STEP;
  });
  _defineProperty(this, "add", function (type) {
    var zIndex = _this.getNextZIndex(type);
    _this.popupStack[type].add(zIndex);
    if (popupStackType.includes(type)) {
      _this.popupStack.popup.add(zIndex);
    }
    _this.zIndexStack.push(zIndex);
    return zIndex;
  });
  _defineProperty(this, "delete", function (zIndex, type) {
    _this.popupStack[type]["delete"](zIndex);
    if (popupStackType.includes(type)) {
      _this.popupStack.popup["delete"](zIndex);
    }
    var index = _this.zIndexStack.indexOf(zIndex);
    if (index !== -1) {
      _this.zIndexStack.splice(index, 1);
    }
  });
  _defineProperty(this, "isTopInteractivePopup", function (popupType, zIndex) {
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
  _defineProperty(this, "getLastZIndex", function () {
    return _this.zIndexStack[_this.zIndexStack.length - 1];
  });
});
var popupManager = new PopupManager();
function usePopupManager(type) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    visible = _ref.visible,
    runOnMounted = _ref.runOnMounted;
  var zIndex = ref(0);
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
  watch(function () {
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
    onMounted(function () {
      open();
    });
    onBeforeUnmount(function () {
      close();
    });
  }
  return {
    zIndex: readonly(zIndex),
    open: open,
    close: close,
    isTopInteractivePopup: isTopInteractivePopup
  };
}

function useReadonly(context) {
  var currentInstance = getCurrentInstance();
  var componentReadonly = computed(function () {
    return currentInstance.props.readonly;
  });
  var formReadonly = inject("formReadonly", /* @__PURE__ */Object.create(null));
  return computed(function () {
    var _context$beforeReadon, _context$afterReadonl, _formReadonly$readonl;
    if (isBoolean(context === null || context === void 0 || (_context$beforeReadon = context.beforeReadonly) === null || _context$beforeReadon === void 0 ? void 0 : _context$beforeReadon.value)) return context.beforeReadonly.value;
    if (isBoolean(componentReadonly === null || componentReadonly === void 0 ? void 0 : componentReadonly.value)) return componentReadonly.value;
    if (isBoolean(context === null || context === void 0 || (_context$afterReadonl = context.afterReadonly) === null || _context$afterReadonl === void 0 ? void 0 : _context$afterReadonl.value)) return context.afterReadonly.value;
    if (isBoolean((_formReadonly$readonl = formReadonly.readonly) === null || _formReadonly$readonl === void 0 ? void 0 : _formReadonly$readonl.value)) return formReadonly.readonly.value;
    return false;
  });
}

function useResizeObserver(container, callback) {
  if (typeof window === "undefined") return;
  var isSupport = window && window.ResizeObserver;
  if (!isSupport) return;
  var containerObserver = null;
  var cleanupObserver = function cleanupObserver() {
    if (!containerObserver || !container.value) return;
    containerObserver.unobserve(container.value);
    containerObserver.disconnect();
    containerObserver = null;
  };
  var addObserver = function addObserver(el) {
    containerObserver = new ResizeObserver(callback);
    containerObserver.observe(el);
  };
  container && watch(container, function (el) {
    cleanupObserver();
    el && addObserver(el);
  }, {
    immediate: true,
    flush: "post"
  });
  onBeforeUnmount(function () {
    cleanupObserver();
  });
}

function setStyle(el, styles) {
  var keys = Object.keys(styles);
  keys.forEach(function (key) {
    el.style[key] = styles[key];
  });
}

var period = 200;
var noneRippleBg = "rgba(0, 0, 0, 0)";
var defaultRippleColor = "rgba(0, 0, 0, 0.35)";
var getRippleColor = function getRippleColor(el, fixedRippleColor) {
  var _el$dataset;
  if (fixedRippleColor) {
    return fixedRippleColor;
  }
  if (el !== null && el !== void 0 && (_el$dataset = el.dataset) !== null && _el$dataset !== void 0 && _el$dataset.ripple) {
    var rippleColor = el.dataset.ripple;
    return rippleColor;
  }
  if (el instanceof Element) {
    var cssVariable = getComputedStyle(el).getPropertyValue("--ripple-color");
    if (cssVariable) {
      return cssVariable;
    }
  }
  return defaultRippleColor;
};
function useRipple(el, fixedRippleColor) {
  var rippleContainer = ref(null);
  var classPrefix = usePrefixClass();
  var _useKeepAnimation = useKeepAnimation(),
    keepRipple = _useKeepAnimation.keepRipple;
  var handleAddRipple = function handleAddRipple(e) {
    var dom = el.value;
    if (!dom || !(dom instanceof Element)) return;
    var rippleColor = getRippleColor(dom, fixedRippleColor === null || fixedRippleColor === void 0 ? void 0 : fixedRippleColor.value);
    if (e.button !== 0 || !el || !keepRipple) return;
    if (dom.classList.contains("".concat(classPrefix.value, "-is-active")) || dom.classList.contains("".concat(classPrefix.value, "-is-disabled")) || dom.classList.contains("".concat(classPrefix.value, "-is-checked")) || dom.classList.contains("".concat(classPrefix.value, "-is-loading"))) return;
    if (!(dom instanceof Element)) return;
    var elStyle = getComputedStyle(dom);
    var elBorder = parseInt(elStyle.borderWidth, 10);
    var border = elBorder > 0 ? elBorder : 0;
    var width = dom.offsetWidth;
    var height = dom.offsetHeight;
    if (rippleContainer.value.parentNode === null) {
      setStyle(rippleContainer.value, {
        position: "absolute",
        left: "".concat(0 - border, "px"),
        top: "".concat(0 - border, "px"),
        width: "".concat(width, "px"),
        height: "".concat(height, "px"),
        borderRadius: elStyle.borderRadius,
        pointerEvents: "none",
        overflow: "hidden"
      });
      dom.appendChild(rippleContainer.value);
    }
    var ripple = document.createElement("div");
    setStyle(ripple, {
      marginTop: "0",
      marginLeft: "0",
      right: "".concat(width, "px"),
      width: "".concat(width + 20, "px"),
      height: "100%",
      transition: "transform ".concat(period, "ms cubic-bezier(.38, 0, .24, 1), background ").concat(period * 2, "ms linear"),
      transform: "skewX(-8deg)",
      pointerEvents: "none",
      position: "absolute",
      zIndex: 0,
      backgroundColor: rippleColor,
      opacity: "0.9"
    });
    var elMap = /* @__PURE__ */new WeakMap();
    for (var n = dom.children.length, i = 0; i < n; ++i) {
      var child = dom.children[i];
      if (child.style.zIndex === "" && child !== rippleContainer.value) {
        child.style.zIndex = "1";
        elMap.set(child, true);
      }
    }
    var initPosition = dom.style.position;
    if (!initPosition && dom instanceof Element) {
      initPosition = getComputedStyle(dom).position;
    }
    if (initPosition === "" || initPosition === "static") {
      dom.style.position = "relative";
    }
    rippleContainer.value.insertBefore(ripple, rippleContainer.value.firstChild);
    setTimeout(function () {
      ripple.style.transform = "translateX(".concat(width, "px)");
    }, 0);
    var _handleClearRipple = function handleClearRipple() {
      ripple.style.backgroundColor = noneRippleBg;
      if (!el.value) return;
      el.value.removeEventListener("pointerup", _handleClearRipple, false);
      el.value.removeEventListener("pointerleave", _handleClearRipple, false);
      setTimeout(function () {
        ripple.remove();
        if (rippleContainer.value.children.length === 0) rippleContainer.value.remove();
      }, period * 2 + 100);
    };
    el.value.addEventListener("pointerup", _handleClearRipple, false);
    el.value.addEventListener("pointerleave", _handleClearRipple, false);
  };
  onMounted(function () {
    var dom = el === null || el === void 0 ? void 0 : el.value;
    if (!dom) return;
    rippleContainer.value = document.createElement("div");
    dom.addEventListener("pointerdown", handleAddRipple, false);
  });
  onUnmounted(function () {
    var _el$value;
    el === null || el === void 0 || (_el$value = el.value) === null || _el$value === void 0 || _el$value.removeEventListener("pointerdown", handleAddRipple, false);
  });
}

function useTeleport(attach, triggerNode) {
  var to = isFunction(attach) ? computed(attach) : ref(attach);
  var innerTriggerNode = isFunction(triggerNode) ? computed(triggerNode) : ref(triggerNode);
  var element = ref();
  var getElement = function getElement() {
    element.value = getAttach(to.value, innerTriggerNode.value);
  };
  onMounted(function () {
    return getElement();
  });
  watch([to, innerTriggerNode], function () {
    return getElement();
  });
  return element;
}

function useVModel(value, modelValue, defaultValue, onChange) {
  var propName = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "value";
  var _getCurrentInstance = getCurrentInstance(),
    emit = _getCurrentInstance.emit,
    vnode = _getCurrentInstance.vnode;
  var internalValue = ref();
  var vProps = vnode.props || {};
  var isVM = Object.prototype.hasOwnProperty.call(vProps, "modelValue") || Object.prototype.hasOwnProperty.call(vProps, "model-value");
  var isVMP = Object.prototype.hasOwnProperty.call(vProps, propName) || Object.prototype.hasOwnProperty.call(vProps, kebabCase(propName));
  if (isVM) {
    return [modelValue, function (newValue) {
      emit("update:modelValue", newValue);
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      onChange === null || onChange === void 0 || onChange.apply(void 0, [newValue].concat(args));
    }];
  }
  if (isVMP) {
    return [value, function (newValue) {
      emit("update:".concat(propName), newValue);
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }
      onChange === null || onChange === void 0 || onChange.apply(void 0, [newValue].concat(args));
    }];
  }
  internalValue.value = defaultValue;
  return [internalValue, function (newValue) {
    internalValue.value = newValue;
    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }
    onChange === null || onChange === void 0 || onChange.apply(void 0, [newValue].concat(args));
  }];
}

function ownKeys$2(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$2(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$2(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$2(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function useVirtualScroll(_ref) {
  var data = _ref.data,
    container = _ref.container,
    _ref$fixedHeight = _ref.fixedHeight,
    fixedHeight = _ref$fixedHeight === void 0 ? false : _ref$fixedHeight,
    _ref$lineHeight = _ref.lineHeight,
    lineHeight = _ref$lineHeight === void 0 ? 30 : _ref$lineHeight,
    _ref$bufferSize = _ref.bufferSize,
    bufferSize = _ref$bufferSize === void 0 ? 20 : _ref$bufferSize,
    _ref$threshold = _ref.threshold,
    threshold = _ref$threshold === void 0 ? 100 : _ref$threshold;
  var state = reactive({
    visibleData: [],
    cachedHeight: [],
    cachedScrollY: []
  });
  var isVirtual = computed(function () {
    return data.value.length > threshold;
  });
  var updateId = ref(0);
  var trs = /* @__PURE__ */new Map();
  var visibleCount = 0;
  var beforeScrollTop = 0;
  var index = 0;
  var offset = 0;
  var start = 0;
  var last = 0;
  var reset = function reset() {
    data.value.forEach(function (item, i) {
      item.$index = i;
      if (fixedHeight) {
        state.cachedScrollY[i] = i * lineHeight;
      }
    });
    if (!fixedHeight) {
      state.cachedScrollY[data.value.length - 1] = void 0;
    }
  };
  reset();
  var scrollHeight = computed(function () {
    var cachedHeight = state.cachedHeight;
    var length = cachedHeight.length;
    if (length) {
      var maxScrollY = cachedHeight.reduce(function (sum, v) {
        return sum + v || lineHeight;
      }, 0);
      if (cachedHeight.length === data.value.length) {
        return maxScrollY;
      }
      var average = maxScrollY / cachedHeight.length;
      return maxScrollY + (data.value.length - cachedHeight.length) * average;
    }
    return isVirtual.value ? data.value.length * lineHeight : 0;
  });
  var translateY = computed(function () {
    var visibleData = state.visibleData;
    var firstRow = visibleData[0];
    if (firstRow) {
      return visibleData.length === 1 ? 0 : state.cachedScrollY[firstRow.$index];
    }
    return 0;
  });
  var updateVisibleData = function updateVisibleData() {
    last = Math.min(start + visibleCount + bufferSize * 2, data.value.length);
    state.visibleData = data.value.slice(start, last);
  };
  var calculateScrollY = function calculateScrollY() {
    var _anchorDom$getBoundin;
    var anchorDom = trs.get(index);
    if (!anchorDom) {
      return;
    }
    var anchorDomHeight = anchorDom === null || anchorDom === void 0 || (_anchorDom$getBoundin = anchorDom.getBoundingClientRect()) === null || _anchorDom$getBoundin === void 0 ? void 0 : _anchorDom$getBoundin.height;
    state.cachedScrollY[index] = container.value.scrollTop - offset;
    state.cachedHeight[index] = anchorDomHeight;
    for (var i = index + 1; i <= ((_state$visibleData = state.visibleData[state.visibleData.length - 1]) === null || _state$visibleData === void 0 ? void 0 : _state$visibleData.$index); i++) {
      var _state$visibleData;
      var tr = trs.get(i);
      var _ref2 = (tr === null || tr === void 0 ? void 0 : tr.getBoundingClientRect()) || {},
        height = _ref2.height;
      state.cachedHeight[i] = height;
      var scrollY = state.cachedScrollY[i - 1] + state.cachedHeight[i - 1];
      state.cachedScrollY.splice(i, 1, scrollY);
    }
    for (var _i = index - 1; _i >= ((_state$visibleData$ = state.visibleData[0]) === null || _state$visibleData$ === void 0 ? void 0 : _state$visibleData$.$index); _i--) {
      var _state$visibleData$;
      var _tr = trs.get(_i);
      var _ref3 = (_tr === null || _tr === void 0 ? void 0 : _tr.getBoundingClientRect()) || {},
        _height = _ref3.height;
      state.cachedHeight[_i] = _height;
      var _scrollY = state.cachedScrollY[_i + 1] - state.cachedHeight[_i];
      state.cachedScrollY.splice(_i, 1, _scrollY);
    }
    if (state.cachedScrollY[0] > 0) {
      var distance = state.cachedScrollY[0];
      var length = Math.min(last, data.value.length);
      for (var _i2 = 0; _i2 < length; _i2++) {
        state.cachedScrollY.splice(_i2, 1, state.cachedScrollY[_i2] - distance);
      }
      var scrollTop = state.cachedScrollY[index - 1] ? state.cachedScrollY[index - 1] + offset : offset;
      container.value.scrollTop = scrollTop;
      beforeScrollTop = scrollTop;
    }
    if (state.cachedScrollY[start] < 0) {
      var s = state.cachedHeight.slice(0, Math.max(0, index)).reduce(function (sum, v) {
        return sum + v;
      }, 0) + offset;
      container.value.scrollTop = s;
      beforeScrollTop = s;
      if (s === 0) {
        index = 0;
        offset = 0;
      }
    }
    nextTick(function () {
      var _container$value = container.value,
        scrollTop = _container$value.scrollTop,
        scrollHeight2 = _container$value.scrollHeight,
        clientHeight = _container$value.clientHeight;
      if (scrollTop + clientHeight === scrollHeight2) {
        for (var _i3 = last - 1; _i3 >= start; _i3--) {
          if (_i3 === last - 1) {
            state.cachedScrollY.splice(_i3, 1, scrollHeight2.value - state.cachedHeight[_i3]);
          } else {
            state.cachedScrollY.splice(_i3, 1, state.cachedScrollY[_i3 + 1] - state.cachedHeight[_i3]);
          }
        }
      }
    });
  };
  var handleScroll = function handleScroll() {
    if (!isVirtual.value) return;
    var scrollTop = container.value.scrollTop;
    var distance = scrollTop - beforeScrollTop;
    beforeScrollTop = scrollTop;
    distance += offset;
    var lastIndex = index;
    if (!distance) return;
    if (distance >= 0) {
      while (lastIndex < data.value.length && distance > (state.cachedHeight[lastIndex] || lineHeight)) {
        if (!state.cachedHeight[lastIndex]) {
          state.cachedHeight[lastIndex] = lineHeight;
        }
        distance -= state.cachedHeight[lastIndex];
        lastIndex++;
      }
      if (lastIndex >= data.value.length) {
        index = data.value.length - 1;
        offset = 0;
      } else {
        index = lastIndex;
        offset = distance;
      }
      var _container$value2 = container.value,
        clientHeight = _container$value2.clientHeight,
        scrollHeight2 = _container$value2.scrollHeight;
      if (scrollTop + clientHeight === scrollHeight2) {
        index = data.value.length - visibleCount + 1;
      }
      if (start <= index - bufferSize) {
        start = Math.min(data.value.length - visibleCount, index - bufferSize);
        if (start < 0) {
          start = 0;
        }
      }
    } else {
      while (distance < 0) {
        lastIndex--;
        if (!state.cachedHeight[lastIndex]) {
          state.cachedHeight[lastIndex] = lineHeight;
        }
        distance += state.cachedHeight[lastIndex];
      }
      if (lastIndex < 0) {
        index = 0;
        offset = 0;
      } else {
        index = lastIndex;
        offset = distance;
      }
      calculateScrollY();
      if (start > index - bufferSize) {
        start = Math.max(0, index - bufferSize);
      }
    }
    updateVisibleData();
  };
  !fixedHeight && watch(updateId, calculateScrollY, {
    flush: "post"
  });
  var handleRowMounted = function handleRowMounted() {
    if (!isVirtual.value) return;
    updateId.value++;
  };
  watch(data, function () {
    reset();
    state.visibleData = [];
    state.cachedScrollY = [];
    state.cachedHeight = [];
    beforeScrollTop = 0;
    index = 0;
    offset = 0;
    start = 0;
    trs.clear();
    if (data.value.length <= threshold) {
      state.visibleData = data.value;
    } else {
      updateVisibleData();
    }
    container.value && (container.value.scrollTop = 0);
  });
  var mounted = false;
  var refreshContainer = function refreshContainer() {
    if (mounted) {
      visibleCount = Math.ceil(container.value.offsetHeight / lineHeight);
      updateVisibleData();
    }
  };
  onMounted(function () {
    if (!window || !window.IntersectionObserver) {
      return;
    }
    var ob = new window.IntersectionObserver(function (entries) {
      var entry = entries[0];
      if (entry.isIntersecting || entry.intersectionRatio) {
        mounted = true;
        isVirtual.value && refreshContainer();
        ob.unobserve(container.value);
      }
    });
    container.value && ob.observe(container.value);
  });
  return _objectSpread$2(_objectSpread$2({
    trs: trs,
    scrollHeight: scrollHeight
  }, toRefs(state)), {}, {
    translateY: translateY,
    handleScroll: handleScroll,
    handleRowMounted: handleRowMounted,
    refreshContainer: refreshContainer,
    fixedHeight: fixedHeight,
    calculateScrollY: calculateScrollY
  });
}

function useVirtualScrollNew(container, params) {
  var _params$value$data, _params$value$scroll;
  var visibleData = ref([]);
  var translateY = ref((((_params$value$data = params.value.data) === null || _params$value$data === void 0 ? void 0 : _params$value$data.length) || 0) * (((_params$value$scroll = params.value.scroll) === null || _params$value$scroll === void 0 ? void 0 : _params$value$scroll.rowHeight) || 50));
  var scrollHeight = ref(0);
  var trHeightList = [];
  var containerHeight = ref(0);
  var containerWidth = ref(0);
  var startAndEndIndex = ref([0, 15]);
  var tScroll = computed(function () {
    var _scroll$isFixedRowHei, _scroll$fixedRows;
    var scroll = params.value.scroll;
    if (!scroll) return {};
    return {
      bufferSize: scroll.bufferSize || 10,
      isFixedRowHeight: (_scroll$isFixedRowHei = scroll.isFixedRowHeight) !== null && _scroll$isFixedRowHei !== void 0 ? _scroll$isFixedRowHei : false,
      rowHeight: scroll.rowHeight || 47,
      threshold: scroll.threshold || 100,
      type: scroll.type,
      fixedRows: (_scroll$fixedRows = scroll.fixedRows) !== null && _scroll$fixedRows !== void 0 ? _scroll$fixedRows : [0, 0]
    };
  });
  var isVirtualScroll = computed(function () {
    var data = params.value.data;
    return tScroll.value.type === "virtual" && tScroll.value.threshold < data.length;
  });
  function getVisibleRangeConfig() {
    var _container$value$scro, _container$value;
    var scrollTop = (_container$value$scro = (_container$value = container.value) === null || _container$value === void 0 ? void 0 : _container$value.scrollTop) !== null && _container$value$scro !== void 0 ? _container$value$scro : 0;
    var fixedStart = tScroll.value.fixedRows[0];
    var prevBufferHeightList = [];
    var hiddenHeight = 0;
    var visibleStart = -1;
    var visibleEnd = -1;
    var totalHeight = 0;
    for (var i = 0, len = params.value.data.length; i < len; i++) {
      var _trHeightList$i;
      var rowHeight = (_trHeightList$i = trHeightList[i]) !== null && _trHeightList$i !== void 0 ? _trHeightList$i : tScroll.value.rowHeight;
      totalHeight = totalHeight + rowHeight;
      if (totalHeight > scrollTop && visibleStart === -1) {
        visibleStart = i;
        if (visibleStart - tScroll.value.bufferSize > 0) {
          hiddenHeight = totalHeight - rowHeight - sum(prevBufferHeightList);
        }
      }
      if (visibleStart === -1) {
        prevBufferHeightList.push(rowHeight);
        if (prevBufferHeightList.length > tScroll.value.bufferSize) {
          prevBufferHeightList.shift();
        }
      }
      if (visibleEnd === -1 && (totalHeight > containerHeight.value + scrollTop || i === params.value.data.length - 1)) {
        visibleEnd = i;
      }
      if (visibleStart !== -1 && visibleEnd !== -1) {
        break;
      }
    }
    var startIndex = max([visibleStart - tScroll.value.bufferSize, 0]);
    var endIndex = min([visibleEnd + tScroll.value.bufferSize, params.value.data.length]);
    var stickyHeight = sum(trHeightList.slice(0, Math.min(startIndex, fixedStart)));
    return {
      startIndex: startIndex,
      endIndex: endIndex,
      translateY: hiddenHeight - stickyHeight
    };
  }
  var updateVisibleData = throttle(function () {
    var _getVisibleRangeConfi = getVisibleRangeConfig(),
      startIndex = _getVisibleRangeConfi.startIndex,
      endIndex = _getVisibleRangeConfi.endIndex,
      translateYValue = _getVisibleRangeConfi.translateY;
    var fixedRows = tScroll.value.fixedRows;
    var _fixedRows = _slicedToArray(fixedRows, 2),
      fixedStart = _fixedRows[0],
      fixedEnd = _fixedRows[1];
    var fixedStartData = fixedStart ? params.value.data.slice(0, fixedStart) : [];
    if (fixedStart && startIndex < fixedStart) {
      fixedStartData = fixedStartData.slice(0, startIndex);
    }
    var fixedEndData = fixedEnd ? params.value.data.slice(params.value.data.length - fixedEnd) : [];
    var bottomStartIndex = endIndex - params.value.data.length + 1 + (fixedEnd !== null && fixedEnd !== void 0 ? fixedEnd : 0);
    if (fixedEnd && bottomStartIndex > 0) {
      fixedEndData = fixedEndData.slice(bottomStartIndex);
    }
    if (startAndEndIndex.value.join() !== [startIndex, endIndex].join() && startIndex >= 0) {
      translateY.value = translateYValue;
      visibleData.value = fixedStartData.concat(params.value.data.slice(startIndex, endIndex), fixedEndData);
      startAndEndIndex.value = [startIndex, endIndex];
    }
  }, 100);
  var handleRowMounted = function handleRowMounted(rowData) {
    var _rowData$ref$value;
    if (!isVirtualScroll.value || !rowData || tScroll.value.isFixedRowHeight || !container.value) return;
    var trHeight = ((_rowData$ref$value = rowData.ref.value) === null || _rowData$ref$value === void 0 ? void 0 : _rowData$ref$value.getBoundingClientRect().height) || tScroll.value.rowHeight;
    var rowIndex = rowData.data.VIRTUAL_SCROLL_INDEX;
    if (trHeightList[rowIndex] !== trHeight) {
      var diff = trHeight - trHeightList[rowIndex];
      trHeightList[rowIndex] = trHeight;
      scrollHeight.value = scrollHeight.value + diff;
    }
  };
  var handleScroll = function handleScroll() {
    if (!isVirtualScroll.value) return;
    updateVisibleData();
  };
  var refreshVirtualScroll = function refreshVirtualScroll(_ref) {
    var _ref2 = _slicedToArray(_ref, 1),
      contentRect = _ref2[0].contentRect;
    if (params.value.preventResizeRefresh) return;
    var maxScrollbarWidth = 16;
    if (Math.abs(contentRect.width - containerWidth.value) > maxScrollbarWidth && !!container.value) {
      container.value.scrollTop = 0;
      translateY.value = 0;
    }
    containerWidth.value = contentRect.width;
    containerHeight.value = contentRect.height;
  };
  var addIndexToData = function addIndexToData(data) {
    data.forEach(function (item, index) {
      item["VIRTUAL_SCROLL_INDEX"] = index;
    });
  };
  var updateScrollTop = function updateScrollTop(_ref3) {
    var index = _ref3.index,
      _ref3$top = _ref3.top,
      top = _ref3$top === void 0 ? 0 : _ref3$top,
      behavior = _ref3.behavior;
    var scrollTop = sum(trHeightList.slice(0, index + 1)) - top;
    container.value.scrollTo({
      top: scrollTop,
      behavior: behavior || "auto"
    });
  };
  var scrollToElement = function scrollToElement(p) {
    updateScrollTop(p);
    if (!tScroll.value.isFixedRowHeight) {
      var _p$time;
      var duration = (_p$time = p.time) !== null && _p$time !== void 0 ? _p$time : 60;
      var timer = setTimeout(function () {
        updateScrollTop(p);
        clearTimeout(timer);
      }, duration);
    }
  };
  useResizeObserver(computed(function () {
    return isVirtualScroll.value ? container.value : void 0;
  }), refreshVirtualScroll);
  watch(function () {
    return [_toConsumableArray(params.value.data), tScroll.value, isVirtualScroll.value, container.value];
  }, function () {
    if (!isVirtualScroll.value || !container.value) return;
    var data = params.value.data;
    addIndexToData(data);
    containerHeight.value = container.value.getBoundingClientRect().height;
    if (trHeightList.length !== params.value.data.length) {
      var initHeightList = Array.from(trHeightList);
      initHeightList.length = params.value.data.length;
      initHeightList.fill(tScroll.value.rowHeight || 47);
      trHeightList = initHeightList;
    }
    scrollHeight.value = sum(trHeightList);
    startAndEndIndex.value = [0, 0];
    updateVisibleData();
  }, {
    immediate: true
  });
  watch(function () {
    return containerHeight.value;
  }, function () {
    updateVisibleData();
  });
  return {
    visibleData: visibleData,
    translateY: translateY,
    scrollHeight: scrollHeight,
    isVirtualScroll: isVirtualScroll,
    handleScroll: handleScroll,
    handleRowMounted: handleRowMounted,
    scrollToElement: scrollToElement
  };
}

function ownKeys$1(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$1(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$1(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var DEFAULT_OPTIONS = {
  debounceTime: 0,
  config: {
    attributes: true,
    childList: true,
    characterData: true,
    subtree: true
  }
};
function useMutationObservable(targetEl, callback) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DEFAULT_OPTIONS;
  var mergedOptions = ref(_objectSpread$1(_objectSpread$1({}, DEFAULT_OPTIONS), options));
  var observer = null;
  var initObserver = function initObserver() {
    var _observer;
    if (!targetEl) return;
    var _mergedOptions$value = mergedOptions.value,
      _mergedOptions$value$ = _mergedOptions$value.debounceTime,
      debounceTime = _mergedOptions$value$ === void 0 ? 0 : _mergedOptions$value$,
      _mergedOptions$value$2 = _mergedOptions$value.config,
      config = _mergedOptions$value$2 === void 0 ? DEFAULT_OPTIONS.config : _mergedOptions$value$2;
    var handler = function handler() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      callback === null || callback === void 0 || callback.apply(void 0, args);
    };
    (_observer = observer) === null || _observer === void 0 || _observer.disconnect();
    observer = new MutationObserver(debounceTime > 0 ? debounce(handler, debounceTime) : handler);
    observer.observe(targetEl, config);
  };
  watch(function () {
    return options;
  }, function (newOptions) {
    if (!isEqual(newOptions, mergedOptions.value)) {
      mergedOptions.value = _objectSpread$1(_objectSpread$1({}, DEFAULT_OPTIONS), newOptions);
      initObserver();
    }
  }, {
    deep: true
  });
  onMounted(initObserver);
  onBeforeUnmount(function () {
    var _observer2;
    return (_observer2 = observer) === null || _observer2 === void 0 ? void 0 : _observer2.disconnect();
  });
}

var getColorTokenColor = function getColorTokenColor(token) {
  var _document, _styles$getPropertyVa;
  if (typeof window === "undefined") return "";
  var targetElement = (_document = document) === null || _document === void 0 ? void 0 : _document.documentElement;
  var styles = getComputedStyle(targetElement);
  return (_styles$getPropertyVa = styles.getPropertyValue(token).trim()) !== null && _styles$getPropertyVa !== void 0 ? _styles$getPropertyVa : "";
};

function useVariables(variables) {
  var _document;
  var values = {};
  var varsArray = [];
  varsArray = Object.values(variables);
  Object.entries(variables).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      key = _ref2[0],
      varName = _ref2[1];
    values[key] = ref(getColorTokenColor(varName));
  });
  varsArray.forEach(function (varName) {
    values[varName] = ref(getColorTokenColor(varName));
  });
  var targetElement = (_document = document) === null || _document === void 0 ? void 0 : _document.documentElement;
  useMutationObservable(targetElement, function (mutationsList) {
    mutationsList.some(function (mutation) {
      if (mutation.type === "attributes" && mutation.attributeName === THEME_MODE) {
        if (isString(variables) || Array.isArray(variables)) {
          varsArray.forEach(function (varName) {
            values[varName].value = getColorTokenColor(varName);
          });
        } else {
          Object.entries(variables).forEach(function (_ref3) {
            var _ref4 = _slicedToArray(_ref3, 2),
              key = _ref4[0],
              varName = _ref4[1];
            values[key].value = getColorTokenColor(varName);
          });
        }
        return true;
      }
      return false;
    });
  });
  return values;
}

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function useEventForward(componentsProps, internalHandlers) {
  return computed(function () {
    var merged = _objectSpread({}, componentsProps);
    Object.keys(internalHandlers !== null && internalHandlers !== void 0 ? internalHandlers : {}).forEach(function (key) {
      var selfDefinedHandler = componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps[key];
      var internalHandler = internalHandlers === null || internalHandlers === void 0 ? void 0 : internalHandlers[key];
      if (typeof selfDefinedHandler === "function" && typeof internalHandler === "function") {
        merged[key] = function () {
          try {
            internalHandler.apply(void 0, arguments);
          } catch (error) {
            console.warn("[useEventForward]: Error in component callback for ".concat(String(key), ":"), error);
          }
          try {
            selfDefinedHandler.apply(void 0, arguments);
          } catch (error) {
            console.warn("[useEventForward]: Error in self defined callback for ".concat(String(key), ":"), error);
          }
        };
      } else if (typeof internalHandler === "function") {
        merged[key] = internalHandler;
      }
    });
    return merged;
  });
}

export { useIcon as A, filterCommentNode as B, useResize as C, getPropertyValFromObj as D, useListener as E, useDragSort as F, useVirtualScroll as G, useTNodeJSX as a, useContent as b, useCommonClassName as c, useRipple as d, useDisabled as e, useChildSlots as f, useFlatChildrenSlots as g, useChildComponentSlots as h, useGlobalIcon as i, useVModel as j, useDefaultValue as k, useCollapseAnimation as l, useDestroyOnClose as m, useReadonly as n, useEventForward as o, useResizeObserver as p, useTNodeDefault as q, useImagePreviewUrl as r, setStyle as s, useTeleport as t, usePrefixClass as u, usePopupManager as v, useElementLazyRender as w, useVirtualScrollNew as x, useLazyLoad as y, useVariables as z };
//# sourceMappingURL=dep-7673347f.mjs.map
