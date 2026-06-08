/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, computed, provide, createVNode, mergeProps } from 'vue';
import { _ as _defineProperty } from '../_chunks/dep-1dacc319.mjs';
import TimeLineProps from './props.mjs';
import { DefaultAlign, TimelineInjectKey } from './hooks/index.mjs';
import { u as usePrefixClass, h as useChildComponentSlots } from '../_chunks/dep-7673347f.mjs';
import _TimelineItem from './timeline-item.mjs';
import '../_chunks/dep-6d2705e1.mjs';
import { l as log } from '../_chunks/dep-97ecacde.mjs';
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
import '../_chunks/dep-84fd47b3.mjs';
import '../_chunks/dep-d36c4a3f.mjs';
import './timeline-item-props.mjs';
import '../loading/index.mjs';
import '../loading/directive.mjs';
import '../loading/plugin.mjs';
import '../loading/loading.mjs';
import '../loading/icon/gradient.mjs';
import '../_chunks/dep-0cde7579.mjs';
import '../_chunks/dep-0dcc778a.mjs';
import '../loading/props.mjs';
import './style/css.mjs';

var _Timeline = defineComponent({
  name: "TTimeline",
  props: TimeLineProps,
  setup: function setup(props) {
    var COMPONENT_NAME = usePrefixClass("timeline");
    var renderAlign = computed(function () {
      var labelAlign = props.labelAlign,
        layout = props.layout;
      var res = layout === "vertical" ? "left" : "top";
      if (layout === "vertical" && labelAlign) {
        var index = DefaultAlign.horizontal.indexOf(labelAlign);
        var isError = index !== -1;
        isError && log.warn("Timeline", 'If layout is vertical, align should be "left","alternate" or "right" ');
        res = isError ? DefaultAlign.vertical[index] : labelAlign;
      }
      if (layout === "horizontal" && labelAlign) {
        var _index = DefaultAlign.vertical.indexOf(labelAlign);
        var _isError = _index !== -1;
        _isError && log.warn("Timeline", 'If layout is horizontal, align should be "top","alternate" or "bottom" ');
        res = _isError ? DefaultAlign.horizontal[_index] : labelAlign;
      }
      return res;
    });
    var TimeLineProvide = computed(function () {
      var theme = props.theme,
        reverse = props.reverse,
        layout = props.layout,
        labelAlign = props.labelAlign,
        mode = props.mode;
      return {
        theme: theme,
        reverse: reverse,
        itemsStatus: [""],
        layout: layout,
        globalAlign: labelAlign,
        mode: mode,
        renderAlign: renderAlign.value
      };
    });
    var hasLabelItem = 1;
    provide(TimelineInjectKey, TimeLineProvide);
    return function () {
      var getChildComponentSlots = useChildComponentSlots();
      var timelineItems = getChildComponentSlots("TTimelineItem");
      if (props.reverse) timelineItems = timelineItems.reverse();
      return createVNode("ul", {
        "class": ["".concat(COMPONENT_NAME.value), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(COMPONENT_NAME.value, "-").concat(renderAlign.value), true), "".concat(COMPONENT_NAME.value, "-reverse"), props.reverse), "".concat(COMPONENT_NAME.value, "-").concat(props.layout), true), "".concat(COMPONENT_NAME.value, "-label"), hasLabelItem), "".concat(COMPONENT_NAME.value, "-label--").concat(props.mode), true)]
      }, [timelineItems.map(function (item, index) {
        return createVNode(_TimelineItem, mergeProps(item.props, {
          "index": index,
          "class": _defineProperty({}, "".concat(COMPONENT_NAME.value, "-item--last"), index === timelineItems.length - 1)
        }), item.children);
      })]);
    };
  }
});

export { _Timeline as default };
//# sourceMappingURL=timeline.mjs.map
