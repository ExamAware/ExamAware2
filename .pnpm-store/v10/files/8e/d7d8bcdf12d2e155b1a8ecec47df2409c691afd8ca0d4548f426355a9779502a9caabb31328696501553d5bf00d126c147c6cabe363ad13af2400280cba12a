/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var timeline_props = require('./props.js');
var timeline_hooks_index = require('./hooks/index.js');
var index$1 = require('../_chunks/dep-3565d523.js');
require('../_chunks/dep-953a77eb.js');
var index = require('../_chunks/dep-ecaaae91.js');
require('@babel/runtime/helpers/slicedToArray');
var log = require('../_chunks/dep-733b2b51.js');
require('../_chunks/dep-cc66acf1.js');
require('@babel/runtime/helpers/toConsumableArray');
var timeline_timelineItem = require('./timeline-item.js');
require('@babel/runtime/helpers/typeof');
require('../_chunks/dep-4fa46641.js');
require('../_chunks/dep-0813861e.js');
require('../_chunks/dep-a55e8a08.js');
require('../_chunks/dep-b3b464e8.js');
require('../_chunks/dep-87589faa.js');
require('../_chunks/dep-05f89f0d.js');
require('../_chunks/dep-8abdfb41.js');
require('../config-provider/hooks/useConfig.js');
require('../_chunks/dep-5d7e2375.js');
require('../_chunks/dep-94a7dc2d.js');
require('dayjs');
require('../_chunks/dep-92e23f17.js');
require('../_chunks/dep-0ff616fe.js');
require('../_chunks/dep-5f52cd42.js');
require('../_chunks/dep-48f60c78.js');
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
require('./timeline-item-props.js');
require('../_chunks/dep-47c460dd.js');
require('../_chunks/dep-06276759.js');
require('../_chunks/dep-422dd97f.js');
require('../_chunks/dep-71fa6bfc.js');
require('../_chunks/dep-80a478d7.js');
require('../_chunks/dep-427dabac.js');
require('../_chunks/dep-72c4cc44.js');
require('../_chunks/dep-ee355a9a.js');
require('../_chunks/dep-23f77e26.js');
require('../loading/index.js');
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
require('../_chunks/dep-ace0b57c.js');
require('../_chunks/dep-11b67e11.js');
require('../_chunks/dep-dcb859c6.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

var _Timeline = Vue.defineComponent({
  name: "TTimeline",
  props: timeline_props["default"],
  setup: function setup(props) {
    var COMPONENT_NAME = index.usePrefixClass("timeline");
    var renderAlign = Vue.computed(function () {
      var labelAlign = props.labelAlign,
        layout = props.layout;
      var res = layout === "vertical" ? "left" : "top";
      if (layout === "vertical" && labelAlign) {
        var index = timeline_hooks_index.DefaultAlign.horizontal.indexOf(labelAlign);
        var isError = index !== -1;
        isError && log.log.warn("Timeline", 'If layout is vertical, align should be "left","alternate" or "right" ');
        res = isError ? timeline_hooks_index.DefaultAlign.vertical[index] : labelAlign;
      }
      if (layout === "horizontal" && labelAlign) {
        var _index = timeline_hooks_index.DefaultAlign.vertical.indexOf(labelAlign);
        var _isError = _index !== -1;
        _isError && log.log.warn("Timeline", 'If layout is horizontal, align should be "top","alternate" or "bottom" ');
        res = _isError ? timeline_hooks_index.DefaultAlign.horizontal[_index] : labelAlign;
      }
      return res;
    });
    var TimeLineProvide = Vue.computed(function () {
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
    Vue.provide(timeline_hooks_index.TimelineInjectKey, TimeLineProvide);
    return function () {
      var getChildComponentSlots = index$1.useChildComponentSlots();
      var timelineItems = getChildComponentSlots("TTimelineItem");
      if (props.reverse) timelineItems = timelineItems.reverse();
      return Vue.createVNode("ul", {
        "class": ["".concat(COMPONENT_NAME.value), _defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"]({}, "".concat(COMPONENT_NAME.value, "-").concat(renderAlign.value), true), "".concat(COMPONENT_NAME.value, "-reverse"), props.reverse), "".concat(COMPONENT_NAME.value, "-").concat(props.layout), true), "".concat(COMPONENT_NAME.value, "-label"), hasLabelItem), "".concat(COMPONENT_NAME.value, "-label--").concat(props.mode), true)]
      }, [timelineItems.map(function (item, index) {
        return Vue.createVNode(timeline_timelineItem["default"], Vue.mergeProps(item.props, {
          "index": index,
          "class": _defineProperty__default["default"]({}, "".concat(COMPONENT_NAME.value, "-item--last"), index === timelineItems.length - 1)
        }), item.children);
      })]);
    };
  }
});

exports["default"] = _Timeline;
//# sourceMappingURL=timeline.js.map
