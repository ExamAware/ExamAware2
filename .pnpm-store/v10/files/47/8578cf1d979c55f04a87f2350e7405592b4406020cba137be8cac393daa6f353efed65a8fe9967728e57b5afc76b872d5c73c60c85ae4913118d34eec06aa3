/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var list_listItemMetaProps = require('./list-item-meta-props.js');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../_chunks/dep-953a77eb.js');
var index$1 = require('../_chunks/dep-47c460dd.js');
var index = require('../_chunks/dep-ecaaae91.js');
require('@babel/runtime/helpers/slicedToArray');
require('../_chunks/dep-cc66acf1.js');
require('@babel/runtime/helpers/defineProperty');
var isString = require('../_chunks/dep-a55e8a08.js');
require('../_chunks/dep-8abdfb41.js');
require('../_chunks/dep-06276759.js');
require('../_chunks/dep-48f60c78.js');
require('../_chunks/dep-b3b464e8.js');
require('../_chunks/dep-0813861e.js');
require('../_chunks/dep-4fa46641.js');
require('../_chunks/dep-87589faa.js');
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

var _ListItemMeta = Vue.defineComponent({
  name: "TListItemMeta",
  props: list_listItemMetaProps["default"],
  setup: function setup(props2, ctx) {
    var COMPONENT_NAME = index.usePrefixClass("list-item__meta");
    var renderContent = index$1.useContent();
    var renderTNodeJSX = index$1.useTNodeJSX();
    var renderAvatar = function renderAvatar() {
      if (props2.avatar || ctx.slots.avatar) {
        console.warn("`avatar` is going to be deprecated, please use `image` instead");
      }
      var thumbnail = renderContent("avatar", "image");
      if (!thumbnail) return;
      if (isString.isString(thumbnail)) {
        return Vue.createVNode("div", {
          "class": "".concat(COMPONENT_NAME.value, "-avatar")
        }, [Vue.createVNode("img", {
          "src": thumbnail
        }, null)]);
      }
      return Vue.createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "-avatar")
      }, [thumbnail]);
    };
    return function () {
      var propsTitleContent = renderTNodeJSX("title");
      var propsDescriptionContent = renderTNodeJSX("description");
      var listItemMetaContent = [renderAvatar(), Vue.createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "-content")
      }, [propsTitleContent && Vue.createVNode("h3", {
        "class": "".concat(COMPONENT_NAME.value, "-title")
      }, [propsTitleContent]), propsDescriptionContent && Vue.createVNode("p", {
        "class": "".concat(COMPONENT_NAME.value, "-description")
      }, [propsDescriptionContent])])];
      return Vue.createVNode("div", {
        "class": COMPONENT_NAME.value
      }, [listItemMetaContent]);
    };
  }
});

exports["default"] = _ListItemMeta;
//# sourceMappingURL=list-item-meta.js.map
