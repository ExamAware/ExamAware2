/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var stickyTool_props = require('./props.js');
var stickyTool_stickyItem = require('./sticky-item.js');
var index$1 = require('../_chunks/dep-3565d523.js');
require('../_chunks/dep-953a77eb.js');
var index = require('../_chunks/dep-ecaaae91.js');
require('@babel/runtime/helpers/slicedToArray');
require('../_chunks/dep-cc66acf1.js');
require('@babel/runtime/helpers/toConsumableArray');
var stickyTool_stickyItemProps = require('./sticky-item-props.js');
var isObject = require('../_chunks/dep-0813861e.js');
require('@babel/runtime/helpers/typeof');
require('../_chunks/dep-47c460dd.js');
require('../_chunks/dep-06276759.js');
require('../_chunks/dep-48f60c78.js');
require('../_chunks/dep-b3b464e8.js');
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
require('../popup/index.js');
require('../popup/popup.js');
require('@popperjs/core');
require('../_chunks/dep-8382953f.js');
require('../config-provider/hooks/useConfig.js');
require('../_chunks/dep-5d7e2375.js');
require('../_chunks/dep-94a7dc2d.js');
require('../_chunks/dep-8abdfb41.js');
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
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var _StickyTool = Vue.defineComponent({
  name: "TStickyTool",
  props: stickyTool_props["default"],
  setup: function setup(props2) {
    var COMPONENT_NAME = index.usePrefixClass("sticky-tool");
    var classes = Vue.computed(function () {
      return [COMPONENT_NAME.value, "".concat(COMPONENT_NAME.value, "--").concat(props2.shape)];
    });
    var styles = Vue.computed(function () {
      var styles2 = getOffset();
      if (props2.width) styles2.width = typeof props2.width === "number" ? "".concat(props2.width, "px") : props2.width;
      return styles2;
    });
    var getChildComponentByName = index$1.useChildComponentSlots();
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
        if (children && isObject.isObject(children)) {
          for (var key in children) {
            if (key in stickyTool_stickyItemProps["default"] && !list[key]) {
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
        return Vue.createVNode(stickyTool_stickyItem["default"], Vue.mergeProps(itemProps, {
          "key": index
        }), null);
      });
      return content;
    };
    return function () {
      return Vue.createVNode("div", {
        "class": classes.value,
        "style": styles.value
      }, [renderContent()]);
    };
  }
});

exports["default"] = _StickyTool;
//# sourceMappingURL=sticky-tool.js.map
