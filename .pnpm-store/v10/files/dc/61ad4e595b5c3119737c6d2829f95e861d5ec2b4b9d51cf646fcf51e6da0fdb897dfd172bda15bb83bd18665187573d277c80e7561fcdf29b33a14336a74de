/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, computed, createVNode, isVNode } from 'vue';
import props from './props.js';
import { isString } from 'lodash-es';
import { a as useFlatChildrenSlots } from '../_chunks/dep-e3ce8c8f.js';
import { u as useTNodeJSX } from '../_chunks/dep-2accc95a.js';
import { u as usePrefixClass } from '../_chunks/dep-9e6d8a78.js';
import '@babel/runtime/helpers/slicedToArray';
import '../_chunks/dep-880d05b9.js';
import '../_chunks/dep-fe23be6e.js';
import '@babel/runtime/helpers/defineProperty';
import '@babel/runtime/helpers/toConsumableArray';
import { Button } from '../button/index.js';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-fb805f69.js';
import '../_chunks/dep-16bcfabc.js';
import '../config-provider/hooks/useConfig.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import '../_chunks/dep-81b01cae.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '../button/button.js';
import '../loading/index.js';
import '../loading/directive.js';
import '../loading/plugin.js';
import '../_chunks/dep-ee693784.js';
import '../loading/icon/gradient.js';
import '../_chunks/dep-2ea19dca.js';
import '../_chunks/dep-80a99546.js';
import '@babel/runtime/helpers/objectWithoutProperties';
import '../_chunks/dep-4f8b6591.js';
import '../loading/props.js';
import '../_chunks/dep-664b8b22.js';
import 'tdesign-vue-next/esm/common/style/web/components/loading/_index.less';
import '../button/props.js';
import '../_chunks/dep-f7dd3c12.js';
import '../_chunks/dep-d2a6e7a4.js';
import 'tdesign-vue-next/esm/common/style/web/components/button/_index.less';

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
//# sourceMappingURL=comment.js.map
