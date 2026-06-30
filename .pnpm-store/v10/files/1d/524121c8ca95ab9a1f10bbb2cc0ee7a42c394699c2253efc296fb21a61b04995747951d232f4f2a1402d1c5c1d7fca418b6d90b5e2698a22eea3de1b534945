/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, createVNode, isVNode, h } from 'vue';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import { ChevronRightIcon, ChevronLeftIcon } from 'tdesign-icons-vue-next';
import { Button } from '../../button/index.js';
import { isArray, isString, isFunction } from 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../../_chunks/dep-fe23be6e.js';
import { u as usePrefixClass } from '../../_chunks/dep-9e6d8a78.js';
import { u as useGlobalIcon } from '../../_chunks/dep-3a7a2ef1.js';
import '../../_chunks/dep-880d05b9.js';
import '@babel/runtime/helpers/defineProperty';
import props from '../props.js';
import '../../button/button.js';
import '../../loading/index.js';
import '../../loading/directive.js';
import '../../loading/plugin.js';
import '../../_chunks/dep-ee693784.js';
import '../../loading/icon/gradient.js';
import '../../_chunks/dep-2ea19dca.js';
import '../../_chunks/dep-80a99546.js';
import '@babel/runtime/helpers/objectWithoutProperties';
import '../../_chunks/dep-16bcfabc.js';
import '../../_chunks/dep-2accc95a.js';
import '../../_chunks/dep-fb805f69.js';
import '../../_chunks/dep-4f8b6591.js';
import '../../config-provider/hooks/useConfig.js';
import '../../config-provider/utils/context.js';
import '../../_chunks/dep-938cd955.js';
import '../../_chunks/dep-81b01cae.js';
import 'dayjs';
import '../../loading/props.js';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '../../_chunks/dep-664b8b22.js';
import '../../button/props.js';
import '../../_chunks/dep-f7dd3c12.js';
import '../../_chunks/dep-d2a6e7a4.js';

function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !isVNode(s);
}
var TransferOperations = defineComponent({
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
    operation: props.operation
  },
  emits: ["moveToRight", "moveToLeft"],
  setup: function setup(props2, _ref) {
    var slots = _ref.slots,
      emit = _ref.emit;
    var classPrefix = usePrefixClass();
    var _useGlobalIcon = useGlobalIcon({
        ChevronRightIcon: ChevronRightIcon,
        ChevronLeftIcon: ChevronLeftIcon
      }),
      ChevronRightIcon$1 = _useGlobalIcon.ChevronRightIcon,
      ChevronLeftIcon$1 = _useGlobalIcon.ChevronLeftIcon;
    var moveToRight = function moveToRight() {
      emit("moveToRight");
    };
    var moveToLeft = function moveToLeft() {
      emit("moveToLeft");
    };
    var getIconRight = function getIconRight() {
      return createVNode(ChevronRightIcon$1, null, null);
    };
    var getIconLeft = function getIconLeft() {
      return createVNode(ChevronLeftIcon$1, null, null);
    };
    var getIcon = function getIcon(direction) {
      if (isFunction(props2.operation)) {
        return null;
      }
      if (direction === "right" && props2.operation && isFunction(props2.operation[0])) {
        return null;
      }
      if (direction === "left" && props2.operation && isFunction(props2.operation[1])) {
        return null;
      }
      if (slots.operation) {
        return null;
      }
      return direction === "left" ? getIconLeft : getIconRight;
    };
    var renderButton = function renderButton(h2, direction) {
      if (isFunction(slots.operation)) {
        return slots.operation({
          direction: direction
        });
      }
      if (isFunction(props2.operation)) {
        var renderContent2 = props2.operation;
        return renderContent2(h2, {
          direction: direction
        });
      }
      var renderContent;
      if (isArray(props2.operation)) {
        var _props2$operation = _slicedToArray(props2.operation, 2),
          left = _props2$operation[0],
          right = _props2$operation[1];
        var directionOp = direction === "right" ? right : left;
        var content = isFunction(directionOp) ? directionOp(h2) : directionOp;
        renderContent = content === false || content === true ? "" : content;
      } else {
        renderContent = "";
      }
      return renderContent;
    };
    return function () {
      var _slot, _slot2;
      return createVNode("div", {
        "class": "".concat(classPrefix.value, "-transfer__operations")
      }, [createVNode(Button, {
        "variant": "outline",
        "size": "small",
        "shape": isArray(props2.operation) && isString(props2.operation[1]) ? "rectangle" : "square",
        "key": props2.rightDisabled ? "right-outline" : "right-base",
        "disabled": props2.rightDisabled,
        "onClick": moveToRight,
        "icon": getIcon("right")
      }, _isSlot(_slot = renderButton(h, "right")) ? _slot : {
        "default": function _default() {
          return [_slot];
        }
      }), createVNode(Button, {
        "variant": "outline",
        "size": "small",
        "shape": isArray(props2.operation) && isString(props2.operation[0]) ? "rectangle" : "square",
        "key": props2.rightDisabled ? "left-outline" : "left-base",
        "disabled": props2.leftDisabled,
        "onClick": moveToLeft,
        "icon": getIcon("left")
      }, _isSlot(_slot2 = renderButton(h, "left")) ? _slot2 : {
        "default": function _default() {
          return [_slot2];
        }
      })]);
    };
  }
});

export { TransferOperations as default };
//# sourceMappingURL=transfer-operations.js.map
