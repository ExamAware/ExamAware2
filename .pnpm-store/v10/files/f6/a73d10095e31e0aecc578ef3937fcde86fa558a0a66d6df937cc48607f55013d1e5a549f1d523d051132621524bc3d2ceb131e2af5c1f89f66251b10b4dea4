/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var stickyTool_stickyItemProps = require('./sticky-item-props.js');
var stickyTool_props = require('./props.js');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../_chunks/dep-953a77eb.js');
var index$1 = require('../_chunks/dep-47c460dd.js');
var index = require('../_chunks/dep-ecaaae91.js');
require('@babel/runtime/helpers/slicedToArray');
require('../_chunks/dep-cc66acf1.js');
var popup_index = require('../popup/index.js');
require('../_chunks/dep-8abdfb41.js');
require('../_chunks/dep-06276759.js');
require('../_chunks/dep-48f60c78.js');
require('../_chunks/dep-b3b464e8.js');
require('../_chunks/dep-0813861e.js');
require('../_chunks/dep-a55e8a08.js');
require('../_chunks/dep-87589faa.js');
require('../_chunks/dep-05f89f0d.js');
require('../_chunks/dep-4fa46641.js');
require('../_chunks/dep-422dd97f.js');
require('../_chunks/dep-71fa6bfc.js');
require('../_chunks/dep-80a478d7.js');
require('../_chunks/dep-427dabac.js');
require('../_chunks/dep-72c4cc44.js');
require('../_chunks/dep-ee355a9a.js');
require('../_chunks/dep-23f77e26.js');
require('../config-provider/hooks/useConfig.js');
require('../_chunks/dep-5d7e2375.js');
require('../_chunks/dep-94a7dc2d.js');
require('dayjs');
require('../_chunks/dep-92e23f17.js');
require('../_chunks/dep-0ff616fe.js');
require('../_chunks/dep-5f52cd42.js');
require('../_chunks/dep-f57bcb19.js');
require('../_chunks/dep-dc4bbc14.js');
require('../_chunks/dep-e27ea667.js');
require('../_chunks/dep-165ca38a.js');
require('../_chunks/dep-32412d92.js');
require('../_chunks/dep-a8a3d718.js');
require('../_chunks/dep-54e566d9.js');
require('../_chunks/dep-591a72de.js');
require('../_chunks/dep-8adeee89.js');
require('../_chunks/dep-4d2ef282.js');
require('../_chunks/dep-929933ce.js');
require('../_chunks/dep-6b1f0ef8.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');
require('../popup/popup.js');
require('@popperjs/core');
require('../_chunks/dep-8382953f.js');
require('../_chunks/dep-c3dee00a.js');
require('../_chunks/dep-e8ff2c13.js');
require('../popup/container.js');
require('../popup/props.js');
require('../_chunks/dep-b6058ff9.js');
require('../_chunks/dep-39403bd1.js');
require('../_chunks/dep-e86abdd2.js');
require('../_chunks/dep-3a7785db.js');
require('../_chunks/dep-441a3b7b.js');
require('../_chunks/dep-d62a674d.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var _StickyItem = Vue.defineComponent({
  name: "TStickyItem",
  props: _objectSpread(_objectSpread({}, stickyTool_stickyItemProps["default"]), {}, {
    type: stickyTool_props["default"].type,
    shape: stickyTool_props["default"].shape,
    placement: stickyTool_props["default"].placement,
    basePopupProps: Object,
    baseWidth: stickyTool_props["default"].width,
    onClick: stickyTool_props["default"].onClick,
    onHover: stickyTool_props["default"].onHover
  }),
  setup: function setup(props) {
    var COMPONENT_NAME = index.usePrefixClass("sticky-item");
    var baseClass = Vue.computed(function () {
      return ["".concat(COMPONENT_NAME.value), "".concat(COMPONENT_NAME.value, "--").concat(props.type), "".concat(COMPONENT_NAME.value, "--").concat(props.shape)];
    });
    var labelClass = Vue.computed(function () {
      return ["".concat(COMPONENT_NAME.value, "__label")];
    });
    var popupPlacement = Vue.computed(function () {
      return props.placement.indexOf("right") !== -1 ? "left" : "right";
    });
    var styles = Vue.computed(function () {
      var styles2 = {};
      if (props.baseWidth) {
        var selfWidth = props.type === "normal" ? "56px" : "40px";
        styles2.margin = "calc((".concat(props.baseWidth, " - ").concat(selfWidth, ")/2)");
      }
      return styles2;
    });
    var handleClickItem = function handleClickItem(e) {
      var item = {};
      Object.keys(stickyTool_stickyItemProps["default"]).forEach(function (i) {
        return item[i] = props[i];
      });
      props.onClick({
        e: e,
        item: item
      });
    };
    var handleHoverItem = function handleHoverItem(e) {
      var item = {};
      Object.keys(stickyTool_stickyItemProps["default"]).forEach(function (i) {
        return item[i] = props[i];
      });
      props.onHover({
        e: e,
        item: item
      });
    };
    var renderTNodeJSX = index$1.useTNodeJSX();
    var popupProps = Object.assign({
      hideEmptyPopup: true
    }, props.basePopupProps, props.popupProps);
    return function () {
      return Vue.createVNode(popup_index.Popup, Vue.mergeProps({
        "overlayInnerClassName": "".concat(index.usePrefixClass("sticky-tool").value, "-popup-content"),
        "trigger": props.trigger,
        "placement": popupPlacement.value,
        "content": function content() {
          return renderTNodeJSX("popup");
        }
      }, popupProps), {
        "default": function _default() {
          return [Vue.createVNode("div", {
            "class": baseClass.value,
            "style": styles.value,
            "onClick": handleClickItem,
            "onMouseenter": handleHoverItem
          }, [renderTNodeJSX("icon"), props.type === "normal" ? Vue.createVNode("div", {
            "class": labelClass.value
          }, [renderTNodeJSX("label")]) : null])];
        }
      });
    };
  }
});

exports["default"] = _StickyItem;
//# sourceMappingURL=sticky-item.js.map
