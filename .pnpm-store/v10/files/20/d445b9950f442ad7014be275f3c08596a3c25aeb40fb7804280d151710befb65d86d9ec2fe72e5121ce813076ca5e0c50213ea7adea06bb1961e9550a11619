/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, inject, computed, createVNode, mergeProps, Fragment } from 'vue';
import { u as usePrefixClass } from '../_chunks/dep-7673347f.mjs';
import { descriptionsKey } from './consts/index.mjs';
import { i as itemTypeIsProps, a as renderVNodeTNode } from '../_chunks/dep-5ca37dbe.mjs';
import { useConfig } from '../config-provider/hooks/useConfig.mjs';
import 'lodash-es';
import '../_chunks/dep-00b4e06a.mjs';
import '../_chunks/dep-9f459d8b.mjs';
import '../_chunks/dep-257428bc.mjs';
import '../_chunks/dep-51a43106.mjs';
import '../_chunks/dep-fe644854.mjs';
import '../_chunks/dep-22ebd6af.mjs';
import '../_chunks/dep-9003fde5.mjs';
import '../_chunks/dep-cdd448ec.mjs';
import '../_chunks/dep-97ecacde.mjs';
import '../config-provider/utils/context.mjs';
import '../_chunks/dep-a4c09318.mjs';
import '../_chunks/dep-ffb85102.mjs';
import '../_chunks/dep-ad588525.mjs';
import '../_chunks/dep-84fd47b3.mjs';
import '../_chunks/dep-1dacc319.mjs';
import '../_chunks/dep-d36c4a3f.mjs';

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
      if (itemTypeIsProps(props.itemType, node)) {
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
      if (itemTypeIsProps(props.itemType, node)) {
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
//# sourceMappingURL=descriptions-row.mjs.map
