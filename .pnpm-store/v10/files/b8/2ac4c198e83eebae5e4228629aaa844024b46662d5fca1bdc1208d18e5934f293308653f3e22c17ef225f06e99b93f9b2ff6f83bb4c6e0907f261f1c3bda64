/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, createVNode } from 'vue';
import props from './list-item-props.js';
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
//# sourceMappingURL=list-item.js.map
