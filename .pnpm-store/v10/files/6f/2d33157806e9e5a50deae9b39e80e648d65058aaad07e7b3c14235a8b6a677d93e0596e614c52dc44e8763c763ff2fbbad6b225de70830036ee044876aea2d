/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, inject, onMounted, onUnmounted, createVNode } from 'vue';
import props from './aside-props.mjs';
import { u as usePrefixClass, a as useTNodeJSX } from '../_chunks/dep-7673347f.mjs';
import 'lodash-es';
import '../_chunks/dep-00b4e06a.mjs';
import '../_chunks/dep-9f459d8b.mjs';
import '../_chunks/dep-257428bc.mjs';
import '../_chunks/dep-51a43106.mjs';
import '../_chunks/dep-fe644854.mjs';
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
import '../_chunks/dep-1dacc319.mjs';
import '../_chunks/dep-d36c4a3f.mjs';

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
//# sourceMappingURL=aside.mjs.map
