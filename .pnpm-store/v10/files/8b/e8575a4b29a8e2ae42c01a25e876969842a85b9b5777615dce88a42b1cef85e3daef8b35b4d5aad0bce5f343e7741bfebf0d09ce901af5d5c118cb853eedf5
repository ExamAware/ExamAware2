/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { isVNode, defineComponent, createVNode, h } from 'vue';
import { _ as _slicedToArray } from '../../_chunks/dep-9003fde5.mjs';
import { ChevronRightIcon, ChevronLeftIcon } from 'tdesign-icons-vue-next';
import { Button } from '../../button/index.mjs';
import { u as usePrefixClass, i as useGlobalIcon } from '../../_chunks/dep-7673347f.mjs';
import props from '../props.mjs';
import { isFunction, isArray, isString } from 'lodash-es';
import '../../_chunks/dep-9f459d8b.mjs';
import '../../button/button.mjs';
import '../../_chunks/dep-00b4e06a.mjs';
import '../../_chunks/dep-1dacc319.mjs';
import '../../_chunks/dep-257428bc.mjs';
import '../../loading/index.mjs';
import '../../loading/directive.mjs';
import '../../loading/plugin.mjs';
import '../../loading/loading.mjs';
import '../../loading/icon/gradient.mjs';
import '../../_chunks/dep-0cde7579.mjs';
import '../../_chunks/dep-0dcc778a.mjs';
import '../../_chunks/dep-51a43106.mjs';
import '../../_chunks/dep-fe644854.mjs';
import '../../loading/props.mjs';
import '../../config-provider/hooks/useConfig.mjs';
import '../../config-provider/utils/context.mjs';
import '../../_chunks/dep-a4c09318.mjs';
import '../../_chunks/dep-ffb85102.mjs';
import '../../_chunks/dep-ad588525.mjs';
import '../../_chunks/dep-22ebd6af.mjs';
import '../../_chunks/dep-cdd448ec.mjs';
import '../../_chunks/dep-97ecacde.mjs';
import '../../_chunks/dep-84fd47b3.mjs';
import '../../_chunks/dep-d36c4a3f.mjs';
import './style/css.mjs';
import '../../button/props.mjs';

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
//# sourceMappingURL=transfer-operations.mjs.map
