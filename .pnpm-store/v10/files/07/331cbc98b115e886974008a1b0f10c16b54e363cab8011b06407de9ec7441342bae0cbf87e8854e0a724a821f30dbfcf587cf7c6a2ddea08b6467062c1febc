/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var timeline_timelineItemProps = require('./timeline-item-props.js');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../_chunks/dep-953a77eb.js');
var index$1 = require('../_chunks/dep-47c460dd.js');
var index = require('../_chunks/dep-ecaaae91.js');
require('@babel/runtime/helpers/slicedToArray');
require('../_chunks/dep-cc66acf1.js');
var timeline_hooks_index = require('./hooks/index.js');
var loading_index = require('../loading/index.js');
var omit = require('../_chunks/dep-ace0b57c.js');
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
require('../_chunks/dep-95261778.js');
require('../loading/plugin.js');
require('../_chunks/dep-237ed01f.js');
require('../loading/icon/gradient.js');
require('../_chunks/dep-c3dee00a.js');
require('../_chunks/dep-55c70201.js');
require('@babel/runtime/helpers/objectWithoutProperties');
require('../_chunks/dep-fd5a369e.js');
require('../_chunks/dep-4ccaead1.js');
require('../_chunks/dep-990979bb.js');
require('../_chunks/dep-8382953f.js');
require('../loading/props.js');
require('../_chunks/dep-9cc695aa.js');
require('../_chunks/dep-48de95ee.js');
require('../_chunks/dep-8b33876c.js');
require('../_chunks/dep-912c9727.js');
require('../_chunks/dep-0b8a4740.js');
require('../_chunks/dep-cd8cfdc0.js');
require('../_chunks/dep-ac11336c.js');
require('../_chunks/dep-9ce6873a.js');
require('../_chunks/dep-779f6290.js');
require('../_chunks/dep-d62a674d.js');
require('../_chunks/dep-11b67e11.js');
require('../_chunks/dep-dcb859c6.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var DEFAULT_THEME = ["default", "primary", "success", "warning", "error"];
var _TimelineItem = Vue.defineComponent({
  name: "TTimelineItem",
  props: _objectSpread(_objectSpread({}, timeline_timelineItemProps["default"]), {}, {
    index: {
      type: Number
    }
  }),
  setup: function setup(props2) {
    var COMPONENT_NAME = index.usePrefixClass("timeline-item");
    var TimelineProvider = Vue.inject(timeline_hooks_index.TimelineInjectKey, timeline_hooks_index.DEFAULT_PROVIDER);
    var renderContent = index$1.useContent();
    var renderTNodeJSX = index$1.useTNodeJSX();
    var getPositionClassName = function getPositionClassName(index) {
      var _props2$labelAlign;
      var _TimelineProvider$val = TimelineProvider.value,
        layout = _TimelineProvider$val.layout,
        renderAlign = _TimelineProvider$val.renderAlign;
      var timelineItemAlign = (_props2$labelAlign = props2.labelAlign) !== null && _props2$labelAlign !== void 0 ? _props2$labelAlign : renderAlign;
      var left = layout === "horizontal" ? "top" : "left";
      var right = layout === "horizontal" ? "bottom" : "right";
      if (timelineItemAlign === "alternate") {
        return index % 2 === 0 ? "".concat(COMPONENT_NAME.value, "-").concat(left) : "".concat(COMPONENT_NAME.value, "-").concat(right);
      }
      if (timelineItemAlign === "left" || timelineItemAlign === "top") {
        return "".concat(COMPONENT_NAME.value, "-").concat(left);
      }
      if (timelineItemAlign === "right" || timelineItemAlign === "bottom") {
        return "".concat(COMPONENT_NAME.value, "-").concat(right);
      }
      return "";
    };
    var handleClick = function handleClick(e) {
      var _props2$onClick;
      (_props2$onClick = props2.onClick) === null || _props2$onClick === void 0 || _props2$onClick.call(props2, {
        e: e,
        item: omit.omit(props2, ["index"])
      });
    };
    return function () {
      var _TimelineProvider$val2 = TimelineProvider.value,
        mode = _TimelineProvider$val2.mode,
        theme = _TimelineProvider$val2.theme,
        itemsStatus = _TimelineProvider$val2.itemsStatus,
        reverse = _TimelineProvider$val2.reverse;
      var loading = props2.loading,
        dotColor = props2.dotColor,
        index = props2.index;
      var labelNode = renderTNodeJSX("label");
      var dotElement = renderTNodeJSX("dot");
      var dotContentClass = "".concat(COMPONENT_NAME.value, "__dot-content");
      if (dotElement !== null && dotElement !== void 0 && dotElement.props) {
        var _dotElement$props;
        var classes = dotElement === null || dotElement === void 0 || (_dotElement$props = dotElement.props) === null || _dotElement$props === void 0 ? void 0 : _dotElement$props["class"];
        dotElement.props["class"] = classes ? [dotContentClass, classes].join(" ") : dotContentClass;
      }
      return Vue.createVNode("li", {
        "class": ["".concat(COMPONENT_NAME.value), "".concat(getPositionClassName(props2.index))],
        "onClick": handleClick
      }, [mode === "alternate" && labelNode && Vue.createVNode("div", {
        "class": ["".concat(COMPONENT_NAME.value, "__label"), "".concat(COMPONENT_NAME.value, "__label--").concat(mode)]
      }, [labelNode]), Vue.createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__wrapper")
      }, [Vue.createVNode("div", {
        "class": _defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"]({}, "".concat(COMPONENT_NAME.value, "__dot"), true), "".concat(COMPONENT_NAME.value, "__dot--custom"), !!dotElement || !dotElement && loading), "".concat(COMPONENT_NAME.value, "__dot--").concat(dotColor), DEFAULT_THEME.includes(dotColor)),
        "style": {
          borderColor: !DEFAULT_THEME.includes(dotColor) && dotColor
        }
      }, [!dotElement && loading && Vue.createVNode(loading_index.Loading, {
        "size": "12px",
        "class": dotContentClass
      }, null), dotElement]), Vue.createVNode("div", {
        "class": _defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"]({}, "".concat(COMPONENT_NAME.value, "__tail"), true), "".concat(COMPONENT_NAME.value, "__tail--theme-").concat(theme), true), "".concat(COMPONENT_NAME.value, "__tail--status-").concat(itemsStatus[index]), reverse)
      }, null)]), Vue.createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__content")
      }, [renderContent("default", "content"), mode === "same" && labelNode && Vue.createVNode("div", {
        "class": ["".concat(COMPONENT_NAME.value, "__label"), "".concat(COMPONENT_NAME.value, "__label--").concat(mode)]
      }, [labelNode])])]);
    };
  }
});

exports["default"] = _TimelineItem;
//# sourceMappingURL=timeline-item.js.map
