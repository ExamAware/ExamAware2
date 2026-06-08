/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, createVNode } from 'vue';
import props from './list-item-meta-props.js';
import { isString } from 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-fe23be6e.js';
import { a as useContent, u as useTNodeJSX } from '../_chunks/dep-2accc95a.js';
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

var _ListItemMeta = defineComponent({
  name: "TListItemMeta",
  props: props,
  setup: function setup(props2, ctx) {
    var COMPONENT_NAME = usePrefixClass("list-item__meta");
    var renderContent = useContent();
    var renderTNodeJSX = useTNodeJSX();
    var renderAvatar = function renderAvatar() {
      if (props2.avatar || ctx.slots.avatar) {
        console.warn("`avatar` is going to be deprecated, please use `image` instead");
      }
      var thumbnail = renderContent("avatar", "image");
      if (!thumbnail) return;
      if (isString(thumbnail)) {
        return createVNode("div", {
          "class": "".concat(COMPONENT_NAME.value, "-avatar")
        }, [createVNode("img", {
          "src": thumbnail
        }, null)]);
      }
      return createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "-avatar")
      }, [thumbnail]);
    };
    return function () {
      var propsTitleContent = renderTNodeJSX("title");
      var propsDescriptionContent = renderTNodeJSX("description");
      var listItemMetaContent = [renderAvatar(), createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "-content")
      }, [propsTitleContent && createVNode("h3", {
        "class": "".concat(COMPONENT_NAME.value, "-title")
      }, [propsTitleContent]), propsDescriptionContent && createVNode("p", {
        "class": "".concat(COMPONENT_NAME.value, "-description")
      }, [propsDescriptionContent])])];
      return createVNode("div", {
        "class": COMPONENT_NAME.value
      }, [listItemMetaContent]);
    };
  }
});

export { _ListItemMeta as default };
//# sourceMappingURL=list-item-meta.js.map
