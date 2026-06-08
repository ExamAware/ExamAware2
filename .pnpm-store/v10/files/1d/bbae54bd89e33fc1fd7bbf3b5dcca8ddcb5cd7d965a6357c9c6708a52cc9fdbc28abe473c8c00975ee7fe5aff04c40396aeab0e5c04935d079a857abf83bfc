/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, computed, createVNode, mergeProps } from 'vue';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import stickyItemProps from './sticky-item-props.js';
import props from './props.js';
import 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-fe23be6e.js';
import { u as useTNodeJSX } from '../_chunks/dep-2accc95a.js';
import { u as usePrefixClass } from '../_chunks/dep-9e6d8a78.js';
import '@babel/runtime/helpers/slicedToArray';
import '../_chunks/dep-880d05b9.js';
import { Popup } from '../popup/index.js';
import '../_chunks/dep-81b01cae.js';
import '../_chunks/dep-16bcfabc.js';
import '../_chunks/dep-fb805f69.js';
import '../config-provider/hooks/useConfig.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '../popup/popup.js';
import '@popperjs/core';
import '../_chunks/dep-4f8b6591.js';
import '../_chunks/dep-2ea19dca.js';
import '../_chunks/dep-51e5a827.js';
import '../popup/container.js';
import '../popup/props.js';
import '../_chunks/dep-80a77612.js';
import '../_chunks/dep-664b8b22.js';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var _StickyItem = defineComponent({
  name: "TStickyItem",
  props: _objectSpread(_objectSpread({}, stickyItemProps), {}, {
    type: props.type,
    shape: props.shape,
    placement: props.placement,
    basePopupProps: Object,
    baseWidth: props.width,
    onClick: props.onClick,
    onHover: props.onHover
  }),
  setup: function setup(props) {
    var COMPONENT_NAME = usePrefixClass("sticky-item");
    var baseClass = computed(function () {
      return ["".concat(COMPONENT_NAME.value), "".concat(COMPONENT_NAME.value, "--").concat(props.type), "".concat(COMPONENT_NAME.value, "--").concat(props.shape)];
    });
    var labelClass = computed(function () {
      return ["".concat(COMPONENT_NAME.value, "__label")];
    });
    var popupPlacement = computed(function () {
      return props.placement.indexOf("right") !== -1 ? "left" : "right";
    });
    var styles = computed(function () {
      var styles2 = {};
      if (props.baseWidth) {
        var selfWidth = props.type === "normal" ? "56px" : "40px";
        styles2.margin = "calc((".concat(props.baseWidth, " - ").concat(selfWidth, ")/2)");
      }
      return styles2;
    });
    var handleClickItem = function handleClickItem(e) {
      var item = {};
      Object.keys(stickyItemProps).forEach(function (i) {
        return item[i] = props[i];
      });
      props.onClick({
        e: e,
        item: item
      });
    };
    var handleHoverItem = function handleHoverItem(e) {
      var item = {};
      Object.keys(stickyItemProps).forEach(function (i) {
        return item[i] = props[i];
      });
      props.onHover({
        e: e,
        item: item
      });
    };
    var renderTNodeJSX = useTNodeJSX();
    var popupProps = Object.assign({
      hideEmptyPopup: true
    }, props.basePopupProps, props.popupProps);
    return function () {
      return createVNode(Popup, mergeProps({
        "overlayInnerClassName": "".concat(usePrefixClass("sticky-tool").value, "-popup-content"),
        "trigger": props.trigger,
        "placement": popupPlacement.value,
        "content": function content() {
          return renderTNodeJSX("popup");
        }
      }, popupProps), {
        "default": function _default() {
          return [createVNode("div", {
            "class": baseClass.value,
            "style": styles.value,
            "onClick": handleClickItem,
            "onMouseenter": handleHoverItem
          }, [renderTNodeJSX("icon"), props.type === "normal" ? createVNode("div", {
            "class": labelClass.value
          }, [renderTNodeJSX("label")]) : null])];
        }
      });
    };
  }
});

export { _StickyItem as default };
//# sourceMappingURL=sticky-item.js.map
