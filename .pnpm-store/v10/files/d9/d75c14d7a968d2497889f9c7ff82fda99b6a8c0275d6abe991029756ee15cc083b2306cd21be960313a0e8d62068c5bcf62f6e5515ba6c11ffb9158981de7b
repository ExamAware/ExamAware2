/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../_chunks/dep-953a77eb.js');
var index = require('../_chunks/dep-ecaaae91.js');
require('@babel/runtime/helpers/slicedToArray');
require('../_chunks/dep-cc66acf1.js');
require('@babel/runtime/helpers/defineProperty');
var descriptions_consts_index = require('./consts/index.js');
var descriptions_utils_index = require('../_chunks/dep-8dd5720a.js');
var configProvider_hooks_useConfig = require('../config-provider/hooks/useConfig.js');
require('../_chunks/dep-8abdfb41.js');
require('../_chunks/dep-5d7e2375.js');
require('../_chunks/dep-94a7dc2d.js');
require('dayjs');
require('../_chunks/dep-92e23f17.js');
require('../_chunks/dep-0ff616fe.js');
require('../_chunks/dep-5f52cd42.js');
require('../_chunks/dep-48f60c78.js');
require('../_chunks/dep-b3b464e8.js');
require('../_chunks/dep-0813861e.js');
require('../_chunks/dep-f57bcb19.js');
require('../_chunks/dep-dc4bbc14.js');
require('../_chunks/dep-05f89f0d.js');
require('../_chunks/dep-87589faa.js');
require('../_chunks/dep-e27ea667.js');
require('../_chunks/dep-165ca38a.js');
require('../_chunks/dep-32412d92.js');
require('../_chunks/dep-a8a3d718.js');
require('../_chunks/dep-54e566d9.js');
require('../_chunks/dep-591a72de.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');
require('../_chunks/dep-a55e8a08.js');
require('../_chunks/dep-8adeee89.js');
require('../_chunks/dep-4d2ef282.js');
require('../_chunks/dep-929933ce.js');
require('../_chunks/dep-6b1f0ef8.js');

var DescriptionsRow = Vue.defineComponent({
  name: "TDescriptionsRow",
  props: {
    row: Array,
    itemType: String
  },
  setup: function setup(props) {
    var descriptionsProps = Vue.inject(descriptions_consts_index.descriptionsKey);
    var COMPONENT_NAME = index.usePrefixClass("descriptions");
    var _useConfig = configProvider_hooks_useConfig.useConfig("descriptions"),
      globalConfig = _useConfig.globalConfig;
    var layoutIsHorizontal = Vue.computed(function () {
      return descriptionsProps.layout === "horizontal";
    });
    var itemLayoutIsHorizontal = Vue.computed(function () {
      return descriptionsProps.itemLayout === "horizontal";
    });
    var label = function label(node) {
      var labelClass = ["".concat(COMPONENT_NAME.value, "__label")];
      var label2 = null;
      var span = null;
      if (descriptions_utils_index.itemTypeIsProps(props.itemType)) {
        label2 = node.label;
        span = node.span;
      } else {
        label2 = descriptions_utils_index.renderVNodeTNode(node, "label");
        span = node.props.span;
      }
      var labelSpan = layoutIsHorizontal.value ? itemLayoutIsHorizontal.value ? 1 : span : 1;
      return Vue.createVNode("td", Vue.mergeProps({
        "colspan": labelSpan,
        "class": labelClass
      }, {
        style: descriptionsProps.labelStyle
      }), [label2, descriptionsProps.colon && globalConfig.value.colonText]);
    };
    var content = function content(node) {
      var contentClass = ["".concat(COMPONENT_NAME.value, "__content")];
      var content2 = null;
      var span = null;
      if (descriptions_utils_index.itemTypeIsProps(props.itemType)) {
        content2 = node.content;
        span = node.span;
      } else {
        content2 = descriptions_utils_index.renderVNodeTNode(node, "content", "default");
        span = node.props.span;
      }
      var contentSpan = layoutIsHorizontal.value ? span > 1 && itemLayoutIsHorizontal.value ? span * 2 - 1 : span : 1;
      return Vue.createVNode("td", Vue.mergeProps({
        "colspan": contentSpan,
        "class": contentClass
      }, {
        style: descriptionsProps.contentStyle
      }), [content2]);
    };
    var hh = function hh() {
      return Vue.createVNode("tr", null, [props.row.map(function (node) {
        return Vue.createVNode(Vue.Fragment, null, [label(node), content(node)]);
      })]);
    };
    var hv = function hv() {
      return Vue.createVNode(Vue.Fragment, null, [Vue.createVNode("tr", null, [props.row.map(function (node) {
        return label(node);
      })]), Vue.createVNode("tr", null, [props.row.map(function (node) {
        return content(node);
      })])]);
    };
    var vh = function vh() {
      return Vue.createVNode(Vue.Fragment, null, [props.row.map(function (node) {
        return Vue.createVNode("tr", null, [label(node), content(node)]);
      })]);
    };
    var vv = function vv() {
      return Vue.createVNode(Vue.Fragment, null, [props.row.map(function (node) {
        return Vue.createVNode(Vue.Fragment, null, [Vue.createVNode("tr", null, [label(node)]), Vue.createVNode("tr", null, [content(node)])]);
      })]);
    };
    return function () {
      return Vue.createVNode(Vue.Fragment, null, [layoutIsHorizontal.value ? itemLayoutIsHorizontal.value ? hh() : hv() : itemLayoutIsHorizontal.value ? vh() : vv()]);
    };
  }
});

exports["default"] = DescriptionsRow;
//# sourceMappingURL=descriptions-row.js.map
