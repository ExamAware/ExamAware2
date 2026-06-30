/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
var _toConsumableArray = require('@babel/runtime/helpers/toConsumableArray');
var popup_props = require('./props.js');
require('@babel/runtime/helpers/typeof');
var dom = require('../_chunks/dep-06276759.js');
require('../config-provider/hooks/useConfig.js');
require('../_chunks/dep-cc66acf1.js');
var index = require('../_chunks/dep-b6058ff9.js');
require('@babel/runtime/helpers/defineProperty');
var isArray = require('../_chunks/dep-87589faa.js');
require('../_chunks/dep-953a77eb.js');
require('../_chunks/dep-8abdfb41.js');
require('../_chunks/dep-48f60c78.js');
require('../_chunks/dep-b3b464e8.js');
require('../_chunks/dep-0813861e.js');
require('../_chunks/dep-a55e8a08.js');
require('../_chunks/dep-05f89f0d.js');
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

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);
var _toConsumableArray__default = /*#__PURE__*/_interopDefaultLegacy(_toConsumableArray);

function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !Vue.isVNode(s);
}
function filterEmpty() {
  var children = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var vnodes = [];
  children.forEach(function (child) {
    if (isArray.isArray(child)) {
      vnodes.push.apply(vnodes, _toConsumableArray__default["default"](child));
    } else if (child.type === Vue.Fragment) {
      vnodes.push.apply(vnodes, _toConsumableArray__default["default"](filterEmpty(child.children)));
    } else {
      vnodes.push(child);
    }
  });
  return vnodes.filter(function (c) {
    return !(c && (c.type === Vue.Comment || c.type === Vue.Fragment && c.children.length === 0 || c.type === Vue.Text && c.children.trim() === ""));
  });
}
function isRectChanged(rect1, rect2) {
  if (!rect1 && !rect2) return false;
  if (!rect1 || !rect2) return true;
  if (["width", "height", "x", "y"].some(function (k) {
    return rect1[k] !== rect2[k];
  })) {
    return true;
  }
  return false;
}
function useElement(getter) {
  var instance = Vue.getCurrentInstance();
  var el = Vue.ref();
  Vue.onMounted(function () {
    el.value = getter(instance);
  });
  Vue.onUpdated(function () {
    var newEl = getter(instance);
    if (el.value !== newEl) {
      el.value = newEl;
    }
  });
  return el;
}
var Trigger = Vue.defineComponent({
  name: "TPopupTrigger",
  props: {
    forwardRef: Function
  },
  emits: ["resize"],
  setup: function setup(props2, _ref) {
    var emit = _ref.emit,
      slots = _ref.slots;
    var el = useElement(function (vm) {
      var containerNode = vm.parent.vnode;
      return containerNode.el.nextElementSibling;
    });
    var contentRect = Vue.ref();
    Vue.watch(el, function () {
      var _props2$forwardRef;
      (_props2$forwardRef = props2.forwardRef) === null || _props2$forwardRef === void 0 || _props2$forwardRef.call(props2, el.value);
    });
    index.useResizeObserver(el, function (_ref2) {
      var _ref3 = _slicedToArray__default["default"](_ref2, 1),
        newContentRect = _ref3[0].contentRect;
      contentRect.value = newContentRect;
    });
    Vue.watch(contentRect, function (newRect, oldRect) {
      if (isRectChanged(newRect, oldRect)) {
        emit("resize");
      }
    });
    return function () {
      var _slots$default, _children$;
      var children = filterEmpty((_slots$default = slots["default"]) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots));
      if (children.length > 1 || ((_children$ = children[0]) === null || _children$ === void 0 ? void 0 : _children$.type) === Vue.Text) {
        return Vue.createVNode("span", null, [children]);
      }
      return children[0];
    };
  }
});
var Content = Vue.defineComponent({
  name: "TPopupContent",
  emits: ["resize"],
  setup: function setup(props2, _ref4) {
    var emit = _ref4.emit,
      slots = _ref4.slots;
    var contentEl = useElement(function (vm) {
      return vm.vnode.el.children[0];
    });
    index.useResizeObserver(contentEl, function () {
      emit("resize");
    });
    return function () {
      return Vue.createVNode("div", {
        "style": "position: absolute; top: 0px; left: 0px; width: 100%"
      }, [slots["default"]()]);
    };
  }
});
var Container = Vue.defineComponent({
  name: "TPopupContainer",
  inheritAttrs: false,
  props: {
    parent: Object,
    visible: Boolean,
    attach: popup_props["default"].attach,
    forwardRef: Function
  },
  emits: ["resize", "contentMounted"],
  setup: function setup(props2, _ref5) {
    var emit = _ref5.emit,
      attrs = _ref5.attrs,
      slots = _ref5.slots,
      expose = _ref5.expose;
    var triggerEl = Vue.ref();
    var mountContent = Vue.ref(false);
    function emitResize() {
      emit("resize");
    }
    Vue.onMounted(function () {
      requestAnimationFrame(function () {
        mountContent.value = props2.visible;
      });
    });
    Vue.watch(function () {
      return props2.visible;
    }, function (visible) {
      if (visible) {
        mountContent.value = props2.visible;
      }
    });
    expose({
      unmountContent: function unmountContent() {
        mountContent.value = false;
      }
    });
    return function () {
      var _slot;
      var getElement = function getElement() {
        return dom.getAttach(props2.attach, triggerEl.value);
      };
      return Vue.createVNode(Vue.Fragment, null, [Vue.createVNode(Trigger, {
        "class": attrs["class"],
        "forwardRef": function forwardRef(el) {
          props2.forwardRef(el);
          triggerEl.value = el;
        },
        "onResize": emitResize
      }, _isSlot(_slot = slots["default"]()) ? _slot : {
        "default": function _default() {
          return [_slot];
        }
      }), mountContent.value && Vue.createVNode(Vue.Teleport, {
        "disabled": !getElement(),
        "to": getElement()
      }, {
        "default": function _default() {
          return [Vue.createVNode(Content, {
            "onResize": emitResize,
            "onVnodeMounted": function onVnodeMounted() {
              return emit("contentMounted");
            }
          }, {
            "default": function _default() {
              return [slots.content && slots.content()];
            }
          })];
        }
      })]);
    };
  }
});

exports["default"] = Container;
//# sourceMappingURL=container.js.map
