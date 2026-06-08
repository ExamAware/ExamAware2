/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { isVNode, defineComponent, toRefs, provide, reactive, computed, createVNode } from 'vue';
import props from './row-props.mjs';
import { useRowSize } from './hooks/index.mjs';
import { getRowClasses, calcRowStyle } from './utils/index.mjs';
import { a as useTNodeJSX, u as usePrefixClass } from '../_chunks/dep-7673347f.mjs';
import '../_chunks/dep-51a43106.mjs';
import '../_chunks/dep-fe644854.mjs';
import 'lodash-es';
import '../_chunks/dep-1dacc319.mjs';
import '../_chunks/dep-257428bc.mjs';
import '../_chunks/dep-00b4e06a.mjs';
import '../_chunks/dep-9f459d8b.mjs';
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
//# sourceMappingURL=row.mjs.map
