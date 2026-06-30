/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, computed, ref, createVNode, mergeProps, isVNode } from 'vue';
import _typeof from '@babel/runtime/helpers/typeof';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '../../_chunks/dep-fe23be6e.js';
import { u as usePrefixClass } from '../../_chunks/dep-9e6d8a78.js';
import '@babel/runtime/helpers/slicedToArray';
import '../../_chunks/dep-880d05b9.js';
import props from '../paragraph-props.js';
import { Tooltip } from '../../tooltip/index.js';
import { useConfig } from '../../config-provider/hooks/useConfig.js';
import '../../_chunks/dep-81b01cae.js';
import '../../config-provider/utils/context.js';
import '../../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '../../tooltip/tooltip.js';
import '../../tooltip/props.js';
import '../../popup/props.js';
import '../../popup/index.js';
import '../../popup/popup.js';
import '@popperjs/core';
import '../../_chunks/dep-16bcfabc.js';
import '../../_chunks/dep-2accc95a.js';
import '../../_chunks/dep-fb805f69.js';
import '../../_chunks/dep-4f8b6591.js';
import '../../_chunks/dep-2ea19dca.js';
import '../../_chunks/dep-51e5a827.js';
import '../../popup/container.js';
import '../../_chunks/dep-80a77612.js';
import '../../_chunks/dep-664b8b22.js';
import 'tdesign-vue-next/esm/common/style/web/components/popup/_index.less';
import '../../tooltip/utils/index.js';
import 'tdesign-vue-next/esm/common/style/web/components/tooltip/_index.less';

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
//# sourceMappingURL=ellipsis.js.map
