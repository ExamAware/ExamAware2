/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { isVNode, defineComponent, computed, ref, createVNode, mergeProps } from 'vue';
import { _ as _typeof } from '../../_chunks/dep-257428bc.mjs';
import { _ as _defineProperty } from '../../_chunks/dep-1dacc319.mjs';
import { u as usePrefixClass } from '../../_chunks/dep-7673347f.mjs';
import props from '../paragraph-props.mjs';
import { Tooltip } from '../../tooltip/index.mjs';
import { useConfig } from '../../config-provider/hooks/useConfig.mjs';
import 'lodash-es';
import '../../_chunks/dep-00b4e06a.mjs';
import '../../_chunks/dep-9f459d8b.mjs';
import '../../_chunks/dep-51a43106.mjs';
import '../../_chunks/dep-fe644854.mjs';
import '../../_chunks/dep-22ebd6af.mjs';
import '../../_chunks/dep-9003fde5.mjs';
import '../../_chunks/dep-cdd448ec.mjs';
import '../../_chunks/dep-97ecacde.mjs';
import '../../config-provider/utils/context.mjs';
import '../../_chunks/dep-a4c09318.mjs';
import '../../_chunks/dep-ffb85102.mjs';
import '../../_chunks/dep-ad588525.mjs';
import '../../_chunks/dep-84fd47b3.mjs';
import '../../_chunks/dep-d36c4a3f.mjs';
import '../../tooltip/tooltip.mjs';
import '../../tooltip/props.mjs';
import '../../popup/props.mjs';
import '../../popup/index.mjs';
import '../../popup/popup.mjs';
import '@popperjs/core';
import '../../popup/container.mjs';
import './style/css.mjs';
import '../../tooltip/utils/index.mjs';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !isVNode(s);
}
var Ellipsis = defineComponent({
  name: "TEllipsis",
  components: {
    TTooltip: Tooltip
  },
  props: props,
  setup: function setup(props2, _ref) {
    var slots = _ref.slots;
    var COMPONENT_NAME = usePrefixClass("typography");
    var _useConfig = useConfig("typography"),
      globalConfig = _useConfig.globalConfig;
    var content = computed(function () {
      return props2.content || (slots === null || slots === void 0 ? void 0 : slots["default"]());
    });
    var ellipsisState = computed(function () {
      var ellipsis = props2.ellipsis;
      return _objectSpread({
        row: 1,
        expandable: false
      }, _typeof(ellipsis) === "object" ? ellipsis : null);
    });
    var ellipsisStyles = computed(function () {
      var ellipsis = ellipsisState.value;
      var def = {
        overflow: props2.ellipsis ? "hidden" : "visible",
        textOverflow: props2.ellipsis ? "ellipsis" : "initial",
        whiteSpace: props2.ellipsis ? "normal" : "nowrap",
        display: "-webkit-box",
        WebkitLineClamp: ellipsis.row,
        WebkitBoxOrient: "vertical"
      };
      if (isExpand.value) {
        def.overflow = "visible";
        def.whiteSpace = "normal";
        def.display = "initial";
      }
      return def;
    });
    var isExpand = ref(false);
    var onExpand = function onExpand() {
      var _props2$ellipsis$onEx, _props2$ellipsis;
      isExpand.value = true;
      if (_typeof(props2.ellipsis) === "object") (_props2$ellipsis$onEx = (_props2$ellipsis = props2.ellipsis).onExpand) === null || _props2$ellipsis$onEx === void 0 || _props2$ellipsis$onEx.call(_props2$ellipsis, true);
    };
    var onCollapse = function onCollapse() {
      var _props2$ellipsis$onEx2, _props2$ellipsis2;
      isExpand.value = false;
      if (_typeof(props2.ellipsis) === "object") (_props2$ellipsis$onEx2 = (_props2$ellipsis2 = props2.ellipsis).onExpand) === null || _props2$ellipsis$onEx2 === void 0 || _props2$ellipsis$onEx2.call(_props2$ellipsis2, false);
    };
    var renderEllipsisExpand = function renderEllipsisExpand() {
      var suffix = ellipsisState.value.suffix;
      var moreNode = createVNode("span", {
        "class": "".concat(COMPONENT_NAME.value, "-ellipsis-symbol"),
        "onClick": onExpand,
        "style": "text-decoration:none;white-space:nowrap;flex: 1;"
      }, [suffix || globalConfig.value.expandText]);
      var _ellipsisState$value = ellipsisState.value,
        tooltipProps = _ellipsisState$value.tooltipProps,
        expandable = _ellipsisState$value.expandable,
        collapsible = _ellipsisState$value.collapsible;
      if (!isExpand.value && expandable) {
        return tooltipProps && tooltipProps.content ? createVNode(Tooltip, mergeProps(tooltipProps, {
          "content": tooltipProps.content
        }), _isSlot(moreNode) ? moreNode : {
          "default": function _default() {
            return [moreNode];
          }
        }) : moreNode;
      }
      if (expandable && isExpand.value && collapsible) {
        return createVNode("span", {
          "class": "".concat(COMPONENT_NAME.value, "-ellipsis-symbol"),
          "onClick": onCollapse,
          "style": "text-decoration:none;white-space:nowrap;flex: 1;"
        }, [globalConfig.value.collapseText]);
      }
    };
    return function () {
      var tooltipProps = ellipsisState.value.tooltipProps;
      return createVNode("div", {
        "style": {
          display: "flex",
          alignItems: "flex-end"
        }
      }, [tooltipProps && createVNode(Tooltip, {
        "content": tooltipProps.content,
        "placement": "top-right"
      }, null), createVNode("p", {
        "style": props2.ellipsis ? ellipsisStyles.value : {}
      }, [content.value]), renderEllipsisExpand()]);
    };
  }
});

export { Ellipsis as default };
//# sourceMappingURL=ellipsis.mjs.map
