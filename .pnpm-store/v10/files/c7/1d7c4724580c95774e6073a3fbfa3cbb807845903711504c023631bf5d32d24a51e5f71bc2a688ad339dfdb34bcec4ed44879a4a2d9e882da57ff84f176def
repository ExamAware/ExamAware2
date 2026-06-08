/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { isVNode, defineComponent, computed, createVNode } from 'vue';
import props from './props.mjs';
import { u as usePrefixClass, a as useTNodeJSX, g as useFlatChildrenSlots } from '../_chunks/dep-7673347f.mjs';
import { Button } from '../button/index.mjs';
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
import '../button/button.mjs';
import '../loading/index.mjs';
import '../loading/directive.mjs';
import '../loading/plugin.mjs';
import '../loading/loading.mjs';
import '../loading/icon/gradient.mjs';
import '../_chunks/dep-0cde7579.mjs';
import '../_chunks/dep-0dcc778a.mjs';
import '../loading/props.mjs';
import './style/css.mjs';
import '../button/props.mjs';

function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !isVNode(s);
}
var _Comment = defineComponent({
  name: "TComment",
  props: props,
  setup: function setup() {
    var COMPONENT_NAME = usePrefixClass("comment");
    var renderTNodeJSX = useTNodeJSX();
    var getFlatChildren = useFlatChildrenSlots();
    return function () {
      var reply = renderTNodeJSX("reply");
      var author = renderTNodeJSX("author");
      var datetime = renderTNodeJSX("datetime");
      var quote = renderTNodeJSX("quote");
      var actions = renderTNodeJSX("actions");
      var content = renderTNodeJSX("content");
      var avatar = renderTNodeJSX("avatar");
      var showAuthorDatetime = computed(function () {
        return author || datetime;
      });
      var replyDom = reply ? createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__reply")
      }, [reply]) : null;
      var quoteDom = quote ? createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__quote")
      }, [quote]) : null;
      var avatarDom = avatar ? createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__avatar")
      }, [isString(avatar) ? createVNode("img", {
        "src": avatar,
        "alt": "",
        "class": "".concat(COMPONENT_NAME.value, "__avatar-image")
      }, null) : avatar]) : null;
      var authorDatetimeDom = showAuthorDatetime.value && createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__author")
      }, [author && createVNode("span", {
        "class": "".concat(COMPONENT_NAME.value, "__name")
      }, [author]), datetime && createVNode("span", {
        "class": "".concat(COMPONENT_NAME.value, "__time")
      }, [datetime])]);
      var renderActions = function renderActions() {
        if (!actions || !actions.length) return null;
        var flatChildren = getFlatChildren(actions);
        return createVNode("div", {
          "class": "".concat(COMPONENT_NAME.value, "__actions")
        }, [flatChildren.map(function (action, index) {
          return createVNode(Button, {
            "key": "action-".concat(index),
            "size": "small",
            "variant": "text"
          }, _isSlot(action) ? action : {
            "default": function _default() {
              return [action];
            }
          });
        })]);
      };
      var contentDom = createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__content")
      }, [authorDatetimeDom, createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__detail")
      }, [content]), quoteDom, renderActions()]);
      return createVNode("div", {
        "class": COMPONENT_NAME.value
      }, [createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__inner")
      }, [avatarDom, contentDom]), replyDom]);
    };
  }
});

export { _Comment as default };
//# sourceMappingURL=comment.mjs.map
