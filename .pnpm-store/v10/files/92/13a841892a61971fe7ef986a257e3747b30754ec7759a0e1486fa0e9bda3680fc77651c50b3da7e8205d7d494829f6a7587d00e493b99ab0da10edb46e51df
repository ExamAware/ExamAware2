/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { isVNode, defineComponent, inject, computed, createVNode } from 'vue';
import props from './col-props.mjs';
import { useRowSize } from './hooks/index.mjs';
import { getColClasses, parseFlex, calcColPadding } from './utils/index.mjs';
import { u as usePrefixClass, a as useTNodeJSX } from '../_chunks/dep-7673347f.mjs';
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
var _Col = defineComponent({
  name: "TCol",
  inject: ["rowContext"],
  props: props,
  setup: function setup(props2) {
    var COMPONENT_NAME = usePrefixClass("col");
    var renderTNodeJSX = useTNodeJSX();
    var rowContext = inject("rowContext", /* @__PURE__ */Object.create(null));
    var size = useRowSize();
    var colClasses = computed(function () {
      return getColClasses(COMPONENT_NAME.value, props2);
    });
    var colStyle = computed(function () {
      var colStyle2 = {};
      var flex = props2.flex;
      flex && (colStyle2.flex = parseFlex(flex));
      if (rowContext) {
        var rowGutter = rowContext.gutter;
        Object.assign(colStyle2, calcColPadding(rowGutter, size.value));
      }
      return colStyle2;
    });
    return function () {
      var _slot;
      var TAG = props2.tag;
      return createVNode(TAG, {
        "class": colClasses.value,
        "style": colStyle.value
      }, _isSlot(_slot = renderTNodeJSX("default")) ? _slot : {
        "default": function _default() {
          return [_slot];
        }
      });
    };
  }
});

export { _Col as default };
//# sourceMappingURL=col.mjs.map
