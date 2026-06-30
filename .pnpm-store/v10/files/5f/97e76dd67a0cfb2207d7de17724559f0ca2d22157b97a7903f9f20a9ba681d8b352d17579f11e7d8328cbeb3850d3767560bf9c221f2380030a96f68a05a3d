/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, computed, createVNode, mergeProps } from 'vue';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import props from './props.js';
import { isObject } from 'lodash-es';
import _StickyItem from './sticky-item.js';
import { b as useChildComponentSlots } from '../_chunks/dep-e3ce8c8f.js';
import '../_chunks/dep-fe23be6e.js';
import { u as usePrefixClass } from '../_chunks/dep-9e6d8a78.js';
import '@babel/runtime/helpers/slicedToArray';
import '../_chunks/dep-880d05b9.js';
import '@babel/runtime/helpers/toConsumableArray';
import stickyItemProps from './sticky-item-props.js';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-2accc95a.js';
import '../_chunks/dep-16bcfabc.js';
import '../_chunks/dep-fb805f69.js';
import '../popup/index.js';
import '../popup/popup.js';
import '@popperjs/core';
import '../_chunks/dep-4f8b6591.js';
import '../config-provider/hooks/useConfig.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import '../_chunks/dep-81b01cae.js';
import 'dayjs';
import '../_chunks/dep-2ea19dca.js';
import '../_chunks/dep-51e5a827.js';
import '../popup/container.js';
import '../popup/props.js';
import '../_chunks/dep-80a77612.js';
import '../_chunks/dep-664b8b22.js';
import 'tdesign-vue-next/esm/common/style/web/components/popup/_index.less';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';

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
//# sourceMappingURL=sticky-tool.js.map
