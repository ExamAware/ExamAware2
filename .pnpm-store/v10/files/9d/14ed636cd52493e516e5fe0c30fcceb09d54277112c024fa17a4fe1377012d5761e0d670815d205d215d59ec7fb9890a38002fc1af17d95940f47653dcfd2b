/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, inject, createVNode } from 'vue';
import { _ as _defineProperty } from '../_chunks/dep-1dacc319.mjs';
import { omit } from 'lodash-es';
import props from './timeline-item-props.mjs';
import { u as usePrefixClass, b as useContent, a as useTNodeJSX } from '../_chunks/dep-7673347f.mjs';
import { TimelineInjectKey, DEFAULT_PROVIDER } from './hooks/index.mjs';
import { Loading } from '../loading/index.mjs';
import '../_chunks/dep-257428bc.mjs';
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
import '../loading/directive.mjs';
import '../loading/plugin.mjs';
import '../loading/loading.mjs';
import '../loading/icon/gradient.mjs';
import '../_chunks/dep-0cde7579.mjs';
import '../_chunks/dep-0dcc778a.mjs';
import '../loading/props.mjs';
import './style/css.mjs';

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
//# sourceMappingURL=timeline-item.mjs.map
