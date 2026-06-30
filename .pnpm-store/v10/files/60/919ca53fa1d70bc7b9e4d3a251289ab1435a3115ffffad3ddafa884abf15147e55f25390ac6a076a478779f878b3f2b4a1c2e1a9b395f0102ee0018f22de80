/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, inject, onMounted, onUnmounted, createVNode } from 'vue';
import props from './aside-props.js';
import 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-fe23be6e.js';
import { u as useTNodeJSX } from '../_chunks/dep-2accc95a.js';
import { u as usePrefixClass } from '../_chunks/dep-9e6d8a78.js';
import '@babel/runtime/helpers/slicedToArray';
import '../_chunks/dep-880d05b9.js';
import '@babel/runtime/helpers/defineProperty';
import '../_chunks/dep-81b01cae.js';
import '../_chunks/dep-16bcfabc.js';
import '../_chunks/dep-fb805f69.js';
import '../config-provider/hooks/useConfig.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';

var _Aside = defineComponent({
  name: "TAside",
  props: props,
  setup: function setup(props2) {
    var _inject = inject("layout", /* @__PURE__ */Object.create(null)),
      hasSide = _inject.hasSide;
    var COMPONENT_NAME = usePrefixClass("layout__sider");
    var renderTNodeJSX = useTNodeJSX();
    if (!hasSide) return;
    onMounted(function () {
      hasSide.value = true;
    });
    onUnmounted(function () {
      hasSide.value = false;
    });
    return function () {
      var styles = props2.width ? {
        width: props2.width
      } : {};
      return createVNode("aside", {
        "class": COMPONENT_NAME.value,
        "style": styles
      }, [renderTNodeJSX("default")]);
    };
  }
});

export { _Aside as default };
//# sourceMappingURL=aside.js.map
