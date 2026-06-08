/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, computed, provide, createVNode, mergeProps } from 'vue';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import TimeLineProps from './props.js';
import { TimelineInjectKey, DefaultAlign } from './hooks/index.js';
import 'lodash-es';
import { b as useChildComponentSlots } from '../_chunks/dep-e3ce8c8f.js';
import '../_chunks/dep-fe23be6e.js';
import { u as usePrefixClass } from '../_chunks/dep-9e6d8a78.js';
import '@babel/runtime/helpers/slicedToArray';
import { l as log } from '../_chunks/dep-8295e674.js';
import '../_chunks/dep-880d05b9.js';
import '@babel/runtime/helpers/toConsumableArray';
import _TimelineItem from './timeline-item.js';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-fb805f69.js';
import '../_chunks/dep-81b01cae.js';
import '../config-provider/hooks/useConfig.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import './timeline-item-props.js';
import '../_chunks/dep-2accc95a.js';
import '../_chunks/dep-16bcfabc.js';
import '../loading/index.js';
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
import 'tdesign-vue-next/esm/common/style/web/components/loading/_index.less';

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
//# sourceMappingURL=timeline.js.map
