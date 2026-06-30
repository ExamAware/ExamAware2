/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _typeof = require('@babel/runtime/helpers/typeof');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
require('@babel/runtime/helpers/toConsumableArray');
require('../../_chunks/dep-953a77eb.js');
var index = require('../../_chunks/dep-ecaaae91.js');
require('@babel/runtime/helpers/slicedToArray');
require('../../_chunks/dep-cc66acf1.js');
var typography_paragraphProps = require('../paragraph-props.js');
var tooltip_index = require('../../tooltip/index.js');
var configProvider_hooks_useConfig = require('../../config-provider/hooks/useConfig.js');
require('../../_chunks/dep-8abdfb41.js');
require('../../_chunks/dep-5d7e2375.js');
require('../../_chunks/dep-94a7dc2d.js');
require('dayjs');
require('../../_chunks/dep-92e23f17.js');
require('../../_chunks/dep-0ff616fe.js');
require('../../_chunks/dep-5f52cd42.js');
require('../../_chunks/dep-48f60c78.js');
require('../../_chunks/dep-b3b464e8.js');
require('../../_chunks/dep-0813861e.js');
require('../../_chunks/dep-f57bcb19.js');
require('../../_chunks/dep-dc4bbc14.js');
require('../../_chunks/dep-05f89f0d.js');
require('../../_chunks/dep-87589faa.js');
require('../../_chunks/dep-e27ea667.js');
require('../../_chunks/dep-165ca38a.js');
require('../../_chunks/dep-32412d92.js');
require('../../_chunks/dep-a8a3d718.js');
require('../../_chunks/dep-54e566d9.js');
require('../../_chunks/dep-591a72de.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');
require('../../tooltip/tooltip.js');
require('../../tooltip/props.js');
require('../../popup/props.js');
require('../../popup/index.js');
require('../../popup/popup.js');
require('@popperjs/core');
require('../../_chunks/dep-06276759.js');
require('../../_chunks/dep-a55e8a08.js');
require('../../_chunks/dep-47c460dd.js');
require('../../_chunks/dep-4fa46641.js');
require('../../_chunks/dep-422dd97f.js');
require('../../_chunks/dep-71fa6bfc.js');
require('../../_chunks/dep-80a478d7.js');
require('../../_chunks/dep-427dabac.js');
require('../../_chunks/dep-72c4cc44.js');
require('../../_chunks/dep-ee355a9a.js');
require('../../_chunks/dep-23f77e26.js');
require('../../_chunks/dep-8382953f.js');
require('../../_chunks/dep-c3dee00a.js');
require('../../_chunks/dep-e8ff2c13.js');
require('../../popup/container.js');
require('../../_chunks/dep-b6058ff9.js');
require('../../_chunks/dep-39403bd1.js');
require('../../_chunks/dep-e86abdd2.js');
require('../../_chunks/dep-3a7785db.js');
require('../../_chunks/dep-441a3b7b.js');
require('../../_chunks/dep-8adeee89.js');
require('../../_chunks/dep-4d2ef282.js');
require('../../_chunks/dep-929933ce.js');
require('../../_chunks/dep-6b1f0ef8.js');
require('../../_chunks/dep-d62a674d.js');
require('../../tooltip/utils/index.js');
require('../../_chunks/dep-ace0b57c.js');
require('../../_chunks/dep-ac11336c.js');
require('../../_chunks/dep-11b67e11.js');
require('../../_chunks/dep-dcb859c6.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _typeof__default = /*#__PURE__*/_interopDefaultLegacy(_typeof);
var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !Vue.isVNode(s);
}
var Ellipsis = Vue.defineComponent({
  name: "TEllipsis",
  components: {
    TTooltip: tooltip_index.Tooltip
  },
  props: typography_paragraphProps["default"],
  setup: function setup(props2, _ref) {
    var slots = _ref.slots;
    var COMPONENT_NAME = index.usePrefixClass("typography");
    var _useConfig = configProvider_hooks_useConfig.useConfig("typography"),
      globalConfig = _useConfig.globalConfig;
    var content = Vue.computed(function () {
      return props2.content || (slots === null || slots === void 0 ? void 0 : slots["default"]());
    });
    var ellipsisState = Vue.computed(function () {
      var ellipsis = props2.ellipsis;
      return _objectSpread({
        row: 1,
        expandable: false
      }, _typeof__default["default"](ellipsis) === "object" ? ellipsis : null);
    });
    var ellipsisStyles = Vue.computed(function () {
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
    var isExpand = Vue.ref(false);
    var onExpand = function onExpand() {
      var _props2$ellipsis$onEx, _props2$ellipsis;
      isExpand.value = true;
      if (_typeof__default["default"](props2.ellipsis) === "object") (_props2$ellipsis$onEx = (_props2$ellipsis = props2.ellipsis).onExpand) === null || _props2$ellipsis$onEx === void 0 || _props2$ellipsis$onEx.call(_props2$ellipsis, true);
    };
    var onCollapse = function onCollapse() {
      var _props2$ellipsis$onEx2, _props2$ellipsis2;
      isExpand.value = false;
      if (_typeof__default["default"](props2.ellipsis) === "object") (_props2$ellipsis$onEx2 = (_props2$ellipsis2 = props2.ellipsis).onExpand) === null || _props2$ellipsis$onEx2 === void 0 || _props2$ellipsis$onEx2.call(_props2$ellipsis2, false);
    };
    var renderEllipsisExpand = function renderEllipsisExpand() {
      var suffix = ellipsisState.value.suffix;
      var moreNode = Vue.createVNode("span", {
        "class": "".concat(COMPONENT_NAME.value, "-ellipsis-symbol"),
        "onClick": onExpand,
        "style": "text-decoration:none;white-space:nowrap;flex: 1;"
      }, [suffix || globalConfig.value.expandText]);
      var _ellipsisState$value = ellipsisState.value,
        tooltipProps = _ellipsisState$value.tooltipProps,
        expandable = _ellipsisState$value.expandable,
        collapsible = _ellipsisState$value.collapsible;
      if (!isExpand.value && expandable) {
        return tooltipProps && tooltipProps.content ? Vue.createVNode(tooltip_index.Tooltip, Vue.mergeProps(tooltipProps, {
          "content": tooltipProps.content
        }), _isSlot(moreNode) ? moreNode : {
          "default": function _default() {
            return [moreNode];
          }
        }) : moreNode;
      }
      if (expandable && isExpand.value && collapsible) {
        return Vue.createVNode("span", {
          "class": "".concat(COMPONENT_NAME.value, "-ellipsis-symbol"),
          "onClick": onCollapse,
          "style": "text-decoration:none;white-space:nowrap;flex: 1;"
        }, [globalConfig.value.collapseText]);
      }
    };
    return function () {
      var tooltipProps = ellipsisState.value.tooltipProps;
      return Vue.createVNode("div", {
        "style": {
          display: "flex",
          alignItems: "flex-end"
        }
      }, [tooltipProps && Vue.createVNode(tooltip_index.Tooltip, {
        "content": tooltipProps.content,
        "placement": "top-right"
      }, null), Vue.createVNode("p", {
        "style": props2.ellipsis ? ellipsisStyles.value : {}
      }, [content.value]), renderEllipsisExpand()]);
    };
  }
});

exports["default"] = Ellipsis;
//# sourceMappingURL=ellipsis.js.map
