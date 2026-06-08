/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, createVNode } from 'vue';
import props from './list-item-meta-props.mjs';
import { u as usePrefixClass, b as useContent, a as useTNodeJSX } from '../_chunks/dep-7673347f.mjs';
import { isString } from 'lodash-es';
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
//# sourceMappingURL=list-item-meta.mjs.map
