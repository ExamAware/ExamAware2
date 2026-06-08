/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var comment_props = require('./props.js');
var index$2 = require('../_chunks/dep-3565d523.js');
var index$1 = require('../_chunks/dep-47c460dd.js');
var index = require('../_chunks/dep-ecaaae91.js');
require('@babel/runtime/helpers/slicedToArray');
require('../_chunks/dep-cc66acf1.js');
require('../_chunks/dep-953a77eb.js');
require('@babel/runtime/helpers/defineProperty');
require('@babel/runtime/helpers/toConsumableArray');
var button_index = require('../button/index.js');
var isString = require('../_chunks/dep-a55e8a08.js');
require('@babel/runtime/helpers/typeof');
require('../_chunks/dep-4fa46641.js');
require('../_chunks/dep-0813861e.js');
require('../_chunks/dep-87589faa.js');
require('../_chunks/dep-06276759.js');
require('../_chunks/dep-48f60c78.js');
require('../_chunks/dep-b3b464e8.js');
require('../_chunks/dep-422dd97f.js');
require('../_chunks/dep-71fa6bfc.js');
require('../_chunks/dep-80a478d7.js');
require('../_chunks/dep-05f89f0d.js');
require('../_chunks/dep-427dabac.js');
require('../_chunks/dep-72c4cc44.js');
require('../_chunks/dep-ee355a9a.js');
require('../_chunks/dep-23f77e26.js');
require('../config-provider/hooks/useConfig.js');
require('../_chunks/dep-5d7e2375.js');
require('../_chunks/dep-94a7dc2d.js');
require('../_chunks/dep-8abdfb41.js');
require('dayjs');
require('../_chunks/dep-92e23f17.js');
require('../_chunks/dep-0ff616fe.js');
require('../_chunks/dep-5f52cd42.js');
require('../_chunks/dep-f57bcb19.js');
require('../_chunks/dep-dc4bbc14.js');
require('../_chunks/dep-e27ea667.js');
require('../_chunks/dep-165ca38a.js');
require('../_chunks/dep-32412d92.js');
require('../_chunks/dep-a8a3d718.js');
require('../_chunks/dep-54e566d9.js');
require('../_chunks/dep-591a72de.js');
require('../_chunks/dep-8adeee89.js');
require('../_chunks/dep-4d2ef282.js');
require('../_chunks/dep-929933ce.js');
require('../_chunks/dep-6b1f0ef8.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');
require('../button/button.js');
require('../loading/index.js');
require('../_chunks/dep-95261778.js');
require('../loading/plugin.js');
require('../_chunks/dep-237ed01f.js');
require('../loading/icon/gradient.js');
require('../_chunks/dep-c3dee00a.js');
require('../_chunks/dep-55c70201.js');
require('@babel/runtime/helpers/objectWithoutProperties');
require('../_chunks/dep-fd5a369e.js');
require('../_chunks/dep-4ccaead1.js');
require('../_chunks/dep-990979bb.js');
require('../_chunks/dep-8382953f.js');
require('../loading/props.js');
require('../_chunks/dep-9cc695aa.js');
require('../_chunks/dep-48de95ee.js');
require('../_chunks/dep-8b33876c.js');
require('../_chunks/dep-912c9727.js');
require('../_chunks/dep-0b8a4740.js');
require('../_chunks/dep-cd8cfdc0.js');
require('../_chunks/dep-ac11336c.js');
require('../_chunks/dep-9ce6873a.js');
require('../_chunks/dep-779f6290.js');
require('../_chunks/dep-d62a674d.js');
require('../button/props.js');
require('../_chunks/dep-874d2900.js');
require('../_chunks/dep-d45110a6.js');
require('../_chunks/dep-0b6215b5.js');

function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !Vue.isVNode(s);
}
var _Comment = Vue.defineComponent({
  name: "TComment",
  props: comment_props["default"],
  setup: function setup() {
    var COMPONENT_NAME = index.usePrefixClass("comment");
    var renderTNodeJSX = index$1.useTNodeJSX();
    var getFlatChildren = index$2.useFlatChildrenSlots();
    return function () {
      var reply = renderTNodeJSX("reply");
      var author = renderTNodeJSX("author");
      var datetime = renderTNodeJSX("datetime");
      var quote = renderTNodeJSX("quote");
      var actions = renderTNodeJSX("actions");
      var content = renderTNodeJSX("content");
      var avatar = renderTNodeJSX("avatar");
      var showAuthorDatetime = Vue.computed(function () {
        return author || datetime;
      });
      var replyDom = reply ? Vue.createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__reply")
      }, [reply]) : null;
      var quoteDom = quote ? Vue.createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__quote")
      }, [quote]) : null;
      var avatarDom = avatar ? Vue.createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__avatar")
      }, [isString.isString(avatar) ? Vue.createVNode("img", {
        "src": avatar,
        "alt": "",
        "class": "".concat(COMPONENT_NAME.value, "__avatar-image")
      }, null) : avatar]) : null;
      var authorDatetimeDom = showAuthorDatetime.value && Vue.createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__author")
      }, [author && Vue.createVNode("span", {
        "class": "".concat(COMPONENT_NAME.value, "__name")
      }, [author]), datetime && Vue.createVNode("span", {
        "class": "".concat(COMPONENT_NAME.value, "__time")
      }, [datetime])]);
      var renderActions = function renderActions() {
        if (!actions || !actions.length) return null;
        var flatChildren = getFlatChildren(actions);
        return Vue.createVNode("div", {
          "class": "".concat(COMPONENT_NAME.value, "__actions")
        }, [flatChildren.map(function (action, index) {
          return Vue.createVNode(button_index.Button, {
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
      var contentDom = Vue.createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__content")
      }, [authorDatetimeDom, Vue.createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__detail")
      }, [content]), quoteDom, renderActions()]);
      return Vue.createVNode("div", {
        "class": COMPONENT_NAME.value
      }, [Vue.createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__inner")
      }, [avatarDom, contentDom]), replyDom]);
    };
  }
});

exports["default"] = _Comment;
//# sourceMappingURL=comment.js.map
