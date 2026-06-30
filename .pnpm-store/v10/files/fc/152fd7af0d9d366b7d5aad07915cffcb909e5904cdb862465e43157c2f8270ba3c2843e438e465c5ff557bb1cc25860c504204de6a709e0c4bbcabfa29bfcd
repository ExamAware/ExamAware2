/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, toRefs, provide, reactive, computed, createVNode, isVNode } from 'vue';
import props from './row-props.js';
import { useRowSize } from './hooks/index.js';
import { getRowClasses, calcRowStyle } from './utils/index.js';
import 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-fe23be6e.js';
import { u as useTNodeJSX } from '../_chunks/dep-2accc95a.js';
import { u as usePrefixClass } from '../_chunks/dep-9e6d8a78.js';
import '@babel/runtime/helpers/slicedToArray';
import '../_chunks/dep-880d05b9.js';
import '@babel/runtime/helpers/defineProperty';
import '../_chunks/dep-16bcfabc.js';
import '../config-provider/hooks/useConfig.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import '../_chunks/dep-81b01cae.js';
import 'dayjs';
import '../_chunks/dep-172a2a45.js';
import '../_chunks/dep-fb805f69.js';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';

function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !isVNode(s);
}
var _Row = defineComponent({
  name: "TRow",
  props: props,
  setup: function setup(props2) {
    var _toRefs = toRefs(props2),
      gutter = _toRefs.gutter;
    var renderTNodeJSX = useTNodeJSX();
    provide("rowContext", reactive({
      gutter: gutter
    }));
    var size = useRowSize();
    var COMPONENT_NAME = usePrefixClass("row");
    var rowClasses = computed(function () {
      return getRowClasses(COMPONENT_NAME.value, props2);
    });
    var rowStyle = computed(function () {
      return calcRowStyle(props2.gutter, size.value);
    });
    return function () {
      var _slot;
      var TAG = props2.tag;
      return createVNode(TAG, {
        "class": rowClasses.value,
        "style": rowStyle.value
      }, _isSlot(_slot = renderTNodeJSX("default")) ? _slot : {
        "default": function _default() {
          return [_slot];
        }
      });
    };
  }
});

export { _Row as default };
//# sourceMappingURL=row.js.map
