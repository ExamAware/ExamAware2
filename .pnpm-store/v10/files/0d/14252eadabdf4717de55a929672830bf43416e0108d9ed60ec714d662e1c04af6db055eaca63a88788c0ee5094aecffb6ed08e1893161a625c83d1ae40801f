/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
var tdesignIconsVueNext = require('tdesign-icons-vue-next');
var button_index = require('../../button/index.js');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../../_chunks/dep-953a77eb.js');
var index = require('../../_chunks/dep-ecaaae91.js');
var index$1 = require('../../_chunks/dep-31c76dc6.js');
require('../../_chunks/dep-cc66acf1.js');
require('@babel/runtime/helpers/defineProperty');
var transfer_props = require('../props.js');
var isArray = require('../../_chunks/dep-87589faa.js');
var isString = require('../../_chunks/dep-a55e8a08.js');
var isFunction = require('../../_chunks/dep-48f60c78.js');
require('../../button/button.js');
require('../../loading/index.js');
require('../../_chunks/dep-95261778.js');
require('../../loading/plugin.js');
require('../../_chunks/dep-237ed01f.js');
require('../../loading/icon/gradient.js');
require('../../_chunks/dep-c3dee00a.js');
require('../../_chunks/dep-55c70201.js');
require('@babel/runtime/helpers/objectWithoutProperties');
require('../../_chunks/dep-fd5a369e.js');
require('../../_chunks/dep-4ccaead1.js');
require('../../_chunks/dep-990979bb.js');
require('../../_chunks/dep-b3b464e8.js');
require('../../_chunks/dep-05f89f0d.js');
require('../../_chunks/dep-06276759.js');
require('../../_chunks/dep-47c460dd.js');
require('../../_chunks/dep-4fa46641.js');
require('../../_chunks/dep-0813861e.js');
require('../../_chunks/dep-422dd97f.js');
require('../../_chunks/dep-71fa6bfc.js');
require('../../_chunks/dep-80a478d7.js');
require('../../_chunks/dep-427dabac.js');
require('../../_chunks/dep-72c4cc44.js');
require('../../_chunks/dep-ee355a9a.js');
require('../../_chunks/dep-23f77e26.js');
require('../../_chunks/dep-8382953f.js');
require('../../config-provider/hooks/useConfig.js');
require('../../_chunks/dep-5d7e2375.js');
require('../../_chunks/dep-94a7dc2d.js');
require('../../_chunks/dep-8abdfb41.js');
require('dayjs');
require('../../_chunks/dep-92e23f17.js');
require('../../_chunks/dep-0ff616fe.js');
require('../../_chunks/dep-5f52cd42.js');
require('../../_chunks/dep-f57bcb19.js');
require('../../_chunks/dep-dc4bbc14.js');
require('../../_chunks/dep-e27ea667.js');
require('../../_chunks/dep-165ca38a.js');
require('../../_chunks/dep-32412d92.js');
require('../../_chunks/dep-a8a3d718.js');
require('../../_chunks/dep-54e566d9.js');
require('../../_chunks/dep-591a72de.js');
require('../../_chunks/dep-8adeee89.js');
require('../../_chunks/dep-4d2ef282.js');
require('../../_chunks/dep-929933ce.js');
require('../../_chunks/dep-6b1f0ef8.js');
require('../../loading/props.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');
require('../../_chunks/dep-9cc695aa.js');
require('../../_chunks/dep-48de95ee.js');
require('../../_chunks/dep-8b33876c.js');
require('../../_chunks/dep-912c9727.js');
require('../../_chunks/dep-0b8a4740.js');
require('../../_chunks/dep-cd8cfdc0.js');
require('../../_chunks/dep-ac11336c.js');
require('../../_chunks/dep-9ce6873a.js');
require('../../_chunks/dep-779f6290.js');
require('../../_chunks/dep-d62a674d.js');
require('../../button/props.js');
require('../../_chunks/dep-874d2900.js');
require('../../_chunks/dep-d45110a6.js');
require('../../_chunks/dep-0b6215b5.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);

function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !Vue.isVNode(s);
}
var TransferOperations = Vue.defineComponent({
  name: "TTransferOperations",
  props: {
    leftDisabled: {
      type: Boolean,
      required: true
    },
    rightDisabled: {
      type: Boolean,
      required: true
    },
    operation: transfer_props["default"].operation
  },
  emits: ["moveToRight", "moveToLeft"],
  setup: function setup(props2, _ref) {
    var slots = _ref.slots,
      emit = _ref.emit;
    var classPrefix = index.usePrefixClass();
    var _useGlobalIcon = index$1.useGlobalIcon({
        ChevronRightIcon: tdesignIconsVueNext.ChevronRightIcon,
        ChevronLeftIcon: tdesignIconsVueNext.ChevronLeftIcon
      }),
      ChevronRightIcon = _useGlobalIcon.ChevronRightIcon,
      ChevronLeftIcon = _useGlobalIcon.ChevronLeftIcon;
    var moveToRight = function moveToRight() {
      emit("moveToRight");
    };
    var moveToLeft = function moveToLeft() {
      emit("moveToLeft");
    };
    var getIconRight = function getIconRight() {
      return Vue.createVNode(ChevronRightIcon, null, null);
    };
    var getIconLeft = function getIconLeft() {
      return Vue.createVNode(ChevronLeftIcon, null, null);
    };
    var getIcon = function getIcon(direction) {
      if (isFunction.isFunction(props2.operation)) {
        return null;
      }
      if (direction === "right" && props2.operation && isFunction.isFunction(props2.operation[0])) {
        return null;
      }
      if (direction === "left" && props2.operation && isFunction.isFunction(props2.operation[1])) {
        return null;
      }
      if (slots.operation) {
        return null;
      }
      return direction === "left" ? getIconLeft : getIconRight;
    };
    var renderButton = function renderButton(h2, direction) {
      if (isFunction.isFunction(slots.operation)) {
        return slots.operation({
          direction: direction
        });
      }
      if (isFunction.isFunction(props2.operation)) {
        var renderContent2 = props2.operation;
        return renderContent2(h2, {
          direction: direction
        });
      }
      var renderContent;
      if (isArray.isArray(props2.operation)) {
        var _props2$operation = _slicedToArray__default["default"](props2.operation, 2),
          left = _props2$operation[0],
          right = _props2$operation[1];
        var directionOp = direction === "right" ? right : left;
        var content = isFunction.isFunction(directionOp) ? directionOp(h2) : directionOp;
        renderContent = content === false || content === true ? "" : content;
      } else {
        renderContent = "";
      }
      return renderContent;
    };
    return function () {
      var _slot, _slot2;
      return Vue.createVNode("div", {
        "class": "".concat(classPrefix.value, "-transfer__operations")
      }, [Vue.createVNode(button_index.Button, {
        "variant": "outline",
        "size": "small",
        "shape": isArray.isArray(props2.operation) && isString.isString(props2.operation[1]) ? "rectangle" : "square",
        "key": props2.rightDisabled ? "right-outline" : "right-base",
        "disabled": props2.rightDisabled,
        "onClick": moveToRight,
        "icon": getIcon("right")
      }, _isSlot(_slot = renderButton(Vue.h, "right")) ? _slot : {
        "default": function _default() {
          return [_slot];
        }
      }), Vue.createVNode(button_index.Button, {
        "variant": "outline",
        "size": "small",
        "shape": isArray.isArray(props2.operation) && isString.isString(props2.operation[0]) ? "rectangle" : "square",
        "key": props2.rightDisabled ? "left-outline" : "left-base",
        "disabled": props2.leftDisabled,
        "onClick": moveToLeft,
        "icon": getIcon("left")
      }, _isSlot(_slot2 = renderButton(Vue.h, "left")) ? _slot2 : {
        "default": function _default() {
          return [_slot2];
        }
      })]);
    };
  }
});

exports["default"] = TransferOperations;
//# sourceMappingURL=transfer-operations.js.map
