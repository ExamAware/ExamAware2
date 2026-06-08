/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, computed, createVNode, mergeProps } from 'vue';
import { _ as _defineProperty } from '../_chunks/dep-1dacc319.mjs';
import stickyItemProps from './sticky-item-props.mjs';
import props from './props.mjs';
import { u as usePrefixClass, a as useTNodeJSX } from '../_chunks/dep-7673347f.mjs';
import { Popup } from '../popup/index.mjs';
import '../_chunks/dep-257428bc.mjs';
import 'lodash-es';
import '../_chunks/dep-00b4e06a.mjs';
import '../_chunks/dep-9f459d8b.mjs';
import '../_chunks/dep-51a43106.mjs';
import '../_chunks/dep-fe644854.mjs';
import '../config-provider/hooks/useConfig.mjs';
import '../config-provider/utils/context.mjs';
import '../_chunks/dep-a4c09318.mjs';
import '../_chunks/dep-ffb85102.mjs';
import '../_chunks/dep-ad588525.mjs';
import '../_chunks/dep-9003fde5.mjs';
import '../_chunks/dep-22ebd6af.mjs';
import '../_chunks/dep-cdd448ec.mjs';
import '../_chunks/dep-97ecacde.mjs';
import '../_chunks/dep-84fd47b3.mjs';
import '../_chunks/dep-d36c4a3f.mjs';
import '../popup/popup.mjs';
import '@popperjs/core';
import '../popup/container.mjs';
import '../popup/props.mjs';
import './style/css.mjs';

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
//# sourceMappingURL=sticky-item.mjs.map
