/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, ref, computed, provide, createVNode } from 'vue';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-fe23be6e.js';
import { u as useTNodeJSX } from '../_chunks/dep-2accc95a.js';
import { u as usePrefixClass } from '../_chunks/dep-9e6d8a78.js';
import '@babel/runtime/helpers/slicedToArray';
import '../_chunks/dep-880d05b9.js';
import '../_chunks/dep-81b01cae.js';
import '../_chunks/dep-16bcfabc.js';
import '../_chunks/dep-fb805f69.js';
import '../config-provider/hooks/useConfig.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';

var _Layout = defineComponent({
  name: "TLayout",
  setup: function setup() {
    var hasSide = ref(false);
    var renderTNodeJSX = useTNodeJSX();
    var COMPONENT_NAME = usePrefixClass("layout");
    var classes = computed(function () {
      return [COMPONENT_NAME.value, _defineProperty({}, "".concat(COMPONENT_NAME.value, "--with-sider"), hasSide.value)];
    });
    provide("layout", {
      hasSide: hasSide
    });
    return function () {
      return createVNode("section", {
        "class": classes.value
      }, [renderTNodeJSX("default")]);
    };
  }
});

export { _Layout as default };
//# sourceMappingURL=layout.js.map
