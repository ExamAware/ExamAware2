/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { isVNode, Fragment, Comment, Text, getCurrentInstance, ref, onMounted, onUpdated, defineComponent, watch, createVNode, Teleport } from 'vue';
import { _ as _slicedToArray } from '../_chunks/dep-9003fde5.mjs';
import { _ as _toConsumableArray } from '../_chunks/dep-00b4e06a.mjs';
import popupProps from './props.mjs';
import { p as useResizeObserver } from '../_chunks/dep-7673347f.mjs';
import { isArray } from 'lodash-es';
import { g as getAttach } from '../_chunks/dep-51a43106.mjs';
import '../_chunks/dep-9f459d8b.mjs';
import '../_chunks/dep-257428bc.mjs';
import '../config-provider/hooks/useConfig.mjs';
import '../config-provider/utils/context.mjs';
import '../_chunks/dep-a4c09318.mjs';
import '../_chunks/dep-fe644854.mjs';
import '../_chunks/dep-ffb85102.mjs';
import '../_chunks/dep-ad588525.mjs';
import '../_chunks/dep-22ebd6af.mjs';
import '../_chunks/dep-cdd448ec.mjs';
import '../_chunks/dep-97ecacde.mjs';
import '../_chunks/dep-84fd47b3.mjs';
import '../_chunks/dep-1dacc319.mjs';
import '../_chunks/dep-d36c4a3f.mjs';

function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !isVNode(s);
}
function filterEmpty() {
  var children = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var vnodes = [];
  children.forEach(function (child) {
    if (isArray(child)) {
      vnodes.push.apply(vnodes, _toConsumableArray(child));
    } else if (child.type === Fragment) {
      vnodes.push.apply(vnodes, _toConsumableArray(filterEmpty(child.children)));
    } else {
      vnodes.push(child);
    }
  });
  return vnodes.filter(function (c) {
    return !(c && (c.type === Comment || c.type === Fragment && c.children.length === 0 || c.type === Text && c.children.trim() === ""));
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
  var instance = getCurrentInstance();
  var el = ref();
  onMounted(function () {
    el.value = getter(instance);
  });
  onUpdated(function () {
    var newEl = getter(instance);
    if (el.value !== newEl) {
      el.value = newEl;
    }
  });
  return el;
}
var Trigger = defineComponent({
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
    var contentRect = ref();
    watch(el, function () {
      var _props2$forwardRef;
      (_props2$forwardRef = props2.forwardRef) === null || _props2$forwardRef === void 0 || _props2$forwardRef.call(props2, el.value);
    });
    useResizeObserver(el, function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 1),
        newContentRect = _ref3[0].contentRect;
      contentRect.value = newContentRect;
    });
    watch(contentRect, function (newRect, oldRect) {
      if (isRectChanged(newRect, oldRect)) {
        emit("resize");
      }
    });
    return function () {
      var _slots$default, _children$;
      var children = filterEmpty((_slots$default = slots["default"]) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots));
      if (children.length > 1 || ((_children$ = children[0]) === null || _children$ === void 0 ? void 0 : _children$.type) === Text) {
        return createVNode("span", null, [children]);
      }
      return children[0];
    };
  }
});
var Content = defineComponent({
  name: "TPopupContent",
  emits: ["resize"],
  setup: function setup(props2, _ref4) {
    var emit = _ref4.emit,
      slots = _ref4.slots;
    var contentEl = useElement(function (vm) {
      return vm.vnode.el.children[0];
    });
    useResizeObserver(contentEl, function () {
      emit("resize");
    });
    return function () {
      return createVNode("div", {
        "style": "position: absolute; top: 0px; left: 0px; width: 100%"
      }, [slots["default"]()]);
    };
  }
});
var Container = defineComponent({
  name: "TPopupContainer",
  inheritAttrs: false,
  props: {
    parent: Object,
    visible: Boolean,
    attach: popupProps.attach,
    forwardRef: Function
  },
  emits: ["resize", "contentMounted"],
  setup: function setup(props2, _ref5) {
    var emit = _ref5.emit,
      attrs = _ref5.attrs,
      slots = _ref5.slots,
      expose = _ref5.expose;
    var triggerEl = ref();
    var mountContent = ref(false);
    function emitResize() {
      emit("resize");
    }
    onMounted(function () {
      requestAnimationFrame(function () {
        mountContent.value = props2.visible;
      });
    });
    watch(function () {
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
        return getAttach(props2.attach, triggerEl.value);
      };
      return createVNode(Fragment, null, [createVNode(Trigger, {
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
      }), mountContent.value && createVNode(Teleport, {
        "disabled": !getElement(),
        "to": getElement()
      }, {
        "default": function _default() {
          return [createVNode(Content, {
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

export { Container as default };
//# sourceMappingURL=container.mjs.map
