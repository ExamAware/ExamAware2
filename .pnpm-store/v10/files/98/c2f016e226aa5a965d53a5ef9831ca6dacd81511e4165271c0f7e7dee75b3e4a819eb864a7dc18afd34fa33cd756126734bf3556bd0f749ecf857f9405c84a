/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, inject, computed, createVNode, isVNode } from 'vue';
import props from './col-props.js';
import { useRowSize } from './hooks/index.js';
import { getColClasses, parseFlex, calcColPadding } from './utils/index.js';
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
//# sourceMappingURL=col.js.map
