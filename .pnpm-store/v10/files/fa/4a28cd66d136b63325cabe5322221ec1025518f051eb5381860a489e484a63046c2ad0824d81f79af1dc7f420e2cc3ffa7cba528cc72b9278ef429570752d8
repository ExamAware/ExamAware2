/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, computed, createVNode, mergeProps } from 'vue';
import { _ as _defineProperty } from '../_chunks/dep-1dacc319.mjs';
import props from './props.mjs';
import { isObject } from 'lodash-es';
import _StickyItem from './sticky-item.mjs';
import { u as usePrefixClass, h as useChildComponentSlots } from '../_chunks/dep-7673347f.mjs';
import stickyItemProps from './sticky-item-props.mjs';
import '../_chunks/dep-257428bc.mjs';
import '../popup/index.mjs';
import '../popup/popup.mjs';
import '../_chunks/dep-9003fde5.mjs';
import '../_chunks/dep-9f459d8b.mjs';
import '@popperjs/core';
import '../_chunks/dep-51a43106.mjs';
import '../_chunks/dep-fe644854.mjs';
import '../popup/container.mjs';
import '../_chunks/dep-00b4e06a.mjs';
import '../popup/props.mjs';
import './style/css.mjs';
import '../config-provider/hooks/useConfig.mjs';
import '../config-provider/utils/context.mjs';
import '../_chunks/dep-a4c09318.mjs';
import '../_chunks/dep-ffb85102.mjs';
import '../_chunks/dep-ad588525.mjs';
import '../_chunks/dep-22ebd6af.mjs';
import '../_chunks/dep-cdd448ec.mjs';
import '../_chunks/dep-97ecacde.mjs';
import '../_chunks/dep-84fd47b3.mjs';
import '../_chunks/dep-d36c4a3f.mjs';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var _StickyTool = defineComponent({
  name: "TStickyTool",
  props: props,
  setup: function setup(props2) {
    var COMPONENT_NAME = usePrefixClass("sticky-tool");
    var classes = computed(function () {
      return [COMPONENT_NAME.value, "".concat(COMPONENT_NAME.value, "--").concat(props2.shape)];
    });
    var styles = computed(function () {
      var styles2 = getOffset();
      if (props2.width) styles2.width = typeof props2.width === "number" ? "".concat(props2.width, "px") : props2.width;
      return styles2;
    });
    var getChildComponentByName = useChildComponentSlots();
    var getList = function getList() {
      var _props2$list;
      var list;
      if ((_props2$list = props2.list) !== null && _props2$list !== void 0 && _props2$list.length) {
        list = props2.list;
      } else {
        var nodes = getChildComponentByName("StickyItem");
        list = getListBySlots(nodes);
      }
      return list;
    };
    var getListBySlots = function getListBySlots(nodes) {
      var arr = [];
      nodes === null || nodes === void 0 || nodes.forEach(function (node) {
        var list = (node === null || node === void 0 ? void 0 : node.props) || {};
        var children = node === null || node === void 0 ? void 0 : node.children;
        if (!list && !children) return;
        if (children && isObject(children)) {
          for (var key in children) {
            if (key in stickyItemProps && !list[key]) {
              list[key] = children[key];
            }
          }
        }
        arr.push(list);
      });
      return arr;
    };
    var getOffset = function getOffset() {
      var _props2$offset;
      var position = props2.offset ? [80, 24] : ["80px", "24px"];
      (_props2$offset = props2.offset) === null || _props2$offset === void 0 || _props2$offset.forEach(function (item, index) {
        position[index] = isNaN(Number(item)) ? "calc( ".concat(position[index], "px + ").concat(item, ")") : "".concat(position[index] + item, "px");
      });
      var offsetStyle = {};
      props2.placement.split("-").forEach(function (item, index) {
        if (item !== "center") {
          offsetStyle[item] = position[index];
        } else {
          offsetStyle.top = "50%";
          offsetStyle.transform = "translate(0, -50%)";
        }
      });
      return offsetStyle;
    };
    var handleClick = function handleClick(context) {
      var _props2$onClick;
      (_props2$onClick = props2.onClick) === null || _props2$onClick === void 0 || _props2$onClick.call(props2, context);
    };
    var handleHover = function handleHover(context) {
      var _props2$onHover;
      (_props2$onHover = props2.onHover) === null || _props2$onHover === void 0 || _props2$onHover.call(props2, context);
    };
    var renderContent = function renderContent() {
      var list = getList();
      var content = list.map(function (item, index) {
        var type = props2.type,
          shape = props2.shape,
          placement = props2.placement,
          popupProps = props2.popupProps;
        var itemProps = _objectSpread(_objectSpread({}, item), {}, {
          type: type,
          shape: shape,
          placement: placement,
          basePopupProps: popupProps,
          baseWidth: styles.value.width,
          onClick: handleClick,
          onHover: handleHover
        });
        return createVNode(_StickyItem, mergeProps(itemProps, {
          "key": index
        }), null);
      });
      return content;
    };
    return function () {
      return createVNode("div", {
        "class": classes.value,
        "style": styles.value
      }, [renderContent()]);
    };
  }
});

export { _StickyTool as default };
//# sourceMappingURL=sticky-tool.mjs.map
