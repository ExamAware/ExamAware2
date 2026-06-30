/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, inject, createVNode } from 'vue';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { omit } from 'lodash-es';
import props from './timeline-item-props.js';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-fe23be6e.js';
import { a as useContent, u as useTNodeJSX } from '../_chunks/dep-2accc95a.js';
import { u as usePrefixClass } from '../_chunks/dep-9e6d8a78.js';
import '@babel/runtime/helpers/slicedToArray';
import '../_chunks/dep-880d05b9.js';
import { TimelineInjectKey, DEFAULT_PROVIDER } from './hooks/index.js';
import { Loading } from '../loading/index.js';
import '../_chunks/dep-81b01cae.js';
import '../_chunks/dep-16bcfabc.js';
import '../_chunks/dep-fb805f69.js';
import '../config-provider/hooks/useConfig.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '../loading/directive.js';
import '../loading/plugin.js';
import '../_chunks/dep-ee693784.js';
import '../loading/icon/gradient.js';
import '../_chunks/dep-2ea19dca.js';
import '../_chunks/dep-80a99546.js';
import '@babel/runtime/helpers/objectWithoutProperties';
import '../_chunks/dep-4f8b6591.js';
import '../loading/props.js';
import '../_chunks/dep-664b8b22.js';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var DEFAULT_THEME = ["default", "primary", "success", "warning", "error"];
var _TimelineItem = defineComponent({
  name: "TTimelineItem",
  props: _objectSpread(_objectSpread({}, props), {}, {
    index: {
      type: Number
    }
  }),
  setup: function setup(props2) {
    var COMPONENT_NAME = usePrefixClass("timeline-item");
    var TimelineProvider = inject(TimelineInjectKey, DEFAULT_PROVIDER);
    var renderContent = useContent();
    var renderTNodeJSX = useTNodeJSX();
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
        item: omit(props2, ["index"])
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
      return createVNode("li", {
        "class": ["".concat(COMPONENT_NAME.value), "".concat(getPositionClassName(props2.index))],
        "onClick": handleClick
      }, [mode === "alternate" && labelNode && createVNode("div", {
        "class": ["".concat(COMPONENT_NAME.value, "__label"), "".concat(COMPONENT_NAME.value, "__label--").concat(mode)]
      }, [labelNode]), createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__wrapper")
      }, [createVNode("div", {
        "class": _defineProperty(_defineProperty(_defineProperty({}, "".concat(COMPONENT_NAME.value, "__dot"), true), "".concat(COMPONENT_NAME.value, "__dot--custom"), !!dotElement || !dotElement && loading), "".concat(COMPONENT_NAME.value, "__dot--").concat(dotColor), DEFAULT_THEME.includes(dotColor)),
        "style": {
          borderColor: !DEFAULT_THEME.includes(dotColor) && dotColor
        }
      }, [!dotElement && loading && createVNode(Loading, {
        "size": "12px",
        "class": dotContentClass
      }, null), dotElement]), createVNode("div", {
        "class": _defineProperty(_defineProperty(_defineProperty({}, "".concat(COMPONENT_NAME.value, "__tail"), true), "".concat(COMPONENT_NAME.value, "__tail--theme-").concat(theme), true), "".concat(COMPONENT_NAME.value, "__tail--status-").concat(itemsStatus[index]), reverse)
      }, null)]), createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__content")
      }, [renderContent("default", "content"), mode === "same" && labelNode && createVNode("div", {
        "class": ["".concat(COMPONENT_NAME.value, "__label"), "".concat(COMPONENT_NAME.value, "__label--").concat(mode)]
      }, [labelNode])])]);
    };
  }
});

export { _TimelineItem as default };
//# sourceMappingURL=timeline-item.js.map
