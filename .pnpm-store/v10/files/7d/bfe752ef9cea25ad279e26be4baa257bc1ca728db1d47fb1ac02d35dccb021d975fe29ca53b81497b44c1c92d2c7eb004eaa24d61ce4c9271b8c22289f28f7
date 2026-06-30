/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, createVNode } from 'vue';
import props from './list-item-props.mjs';
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

var _ListItem = defineComponent({
  name: "TListItem",
  props: props,
  setup: function setup() {
    var COMPONENT_NAME = usePrefixClass("list-item");
    var renderTNodeJSX = useTNodeJSX();
    return function () {
      var propsContent = renderTNodeJSX("content");
      var propsDefaultContent = renderTNodeJSX("default");
      var propsActionContent = renderTNodeJSX("action");
      return createVNode("li", {
        "class": COMPONENT_NAME.value
      }, [createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "-main")
      }, [propsDefaultContent || propsContent, propsActionContent && createVNode("li", {
        "class": "".concat(COMPONENT_NAME.value, "__action")
      }, [propsActionContent])])]);
    };
  }
});

export { _ListItem as default };
//# sourceMappingURL=list-item.mjs.map
