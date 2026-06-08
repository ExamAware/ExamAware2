/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, inject, computed, createVNode, Fragment, mergeProps } from 'vue';
import 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-fe23be6e.js';
import { u as usePrefixClass } from '../_chunks/dep-9e6d8a78.js';
import '@babel/runtime/helpers/slicedToArray';
import '../_chunks/dep-880d05b9.js';
import '@babel/runtime/helpers/defineProperty';
import { descriptionsKey } from './consts/index.js';
import { i as itemTypeIsProps, a as renderVNodeTNode } from '../_chunks/dep-a204dd2d.js';
import { useConfig } from '../config-provider/hooks/useConfig.js';
import '../_chunks/dep-81b01cae.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';

var DescriptionsRow = defineComponent({
  name: "TDescriptionsRow",
  props: {
    row: Array,
    itemType: String
  },
  setup: function setup(props) {
    var descriptionsProps = inject(descriptionsKey);
    var COMPONENT_NAME = usePrefixClass("descriptions");
    var _useConfig = useConfig("descriptions"),
      globalConfig = _useConfig.globalConfig;
    var layoutIsHorizontal = computed(function () {
      return descriptionsProps.layout === "horizontal";
    });
    var itemLayoutIsHorizontal = computed(function () {
      return descriptionsProps.itemLayout === "horizontal";
    });
    var label = function label(node) {
      var labelClass = ["".concat(COMPONENT_NAME.value, "__label")];
      var label2 = null;
      var span = null;
      if (itemTypeIsProps(props.itemType)) {
        label2 = node.label;
        span = node.span;
      } else {
        label2 = renderVNodeTNode(node, "label");
        span = node.props.span;
      }
      var labelSpan = layoutIsHorizontal.value ? itemLayoutIsHorizontal.value ? 1 : span : 1;
      return createVNode("td", mergeProps({
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
      if (itemTypeIsProps(props.itemType)) {
        content2 = node.content;
        span = node.span;
      } else {
        content2 = renderVNodeTNode(node, "content", "default");
        span = node.props.span;
      }
      var contentSpan = layoutIsHorizontal.value ? span > 1 && itemLayoutIsHorizontal.value ? span * 2 - 1 : span : 1;
      return createVNode("td", mergeProps({
        "colspan": contentSpan,
        "class": contentClass
      }, {
        style: descriptionsProps.contentStyle
      }), [content2]);
    };
    var hh = function hh() {
      return createVNode("tr", null, [props.row.map(function (node) {
        return createVNode(Fragment, null, [label(node), content(node)]);
      })]);
    };
    var hv = function hv() {
      return createVNode(Fragment, null, [createVNode("tr", null, [props.row.map(function (node) {
        return label(node);
      })]), createVNode("tr", null, [props.row.map(function (node) {
        return content(node);
      })])]);
    };
    var vh = function vh() {
      return createVNode(Fragment, null, [props.row.map(function (node) {
        return createVNode("tr", null, [label(node), content(node)]);
      })]);
    };
    var vv = function vv() {
      return createVNode(Fragment, null, [props.row.map(function (node) {
        return createVNode(Fragment, null, [createVNode("tr", null, [label(node)]), createVNode("tr", null, [content(node)])]);
      })]);
    };
    return function () {
      return createVNode(Fragment, null, [layoutIsHorizontal.value ? itemLayoutIsHorizontal.value ? hh() : hv() : itemLayoutIsHorizontal.value ? vh() : vv()]);
    };
  }
});

export { DescriptionsRow as default };
//# sourceMappingURL=descriptions-row.js.map
