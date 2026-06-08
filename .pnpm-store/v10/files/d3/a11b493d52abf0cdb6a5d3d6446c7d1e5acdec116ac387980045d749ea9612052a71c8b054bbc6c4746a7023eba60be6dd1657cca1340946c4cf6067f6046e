/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var tdesignIconsVueNext = require('tdesign-icons-vue-next');
var anchor_utils_index = require('./utils/index.js');
var message_plugin = require('../message/plugin.js');
var anchor_anchorTargetProps = require('./anchor-target-props.js');
var popup_index = require('../popup/index.js');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../_chunks/dep-953a77eb.js');
var index$1 = require('../_chunks/dep-ecaaae91.js');
var index = require('../_chunks/dep-31c76dc6.js');
require('@babel/runtime/helpers/slicedToArray');
require('../_chunks/dep-cc66acf1.js');
require('@babel/runtime/helpers/defineProperty');
var configProvider_hooks_useConfig = require('../config-provider/hooks/useConfig.js');
require('../_chunks/dep-8abdfb41.js');
require('../_chunks/dep-06276759.js');
require('../_chunks/dep-48f60c78.js');
require('../_chunks/dep-b3b464e8.js');
require('../_chunks/dep-0813861e.js');
require('../_chunks/dep-a55e8a08.js');
require('../_chunks/dep-87589faa.js');
require('../_chunks/dep-05f89f0d.js');
require('../message/message-list.js');
require('../_chunks/dep-56601f8d.js');
require('../_chunks/dep-47c460dd.js');
require('../_chunks/dep-4fa46641.js');
require('../_chunks/dep-422dd97f.js');
require('../_chunks/dep-71fa6bfc.js');
require('../_chunks/dep-80a478d7.js');
require('../_chunks/dep-427dabac.js');
require('../_chunks/dep-72c4cc44.js');
require('../_chunks/dep-ee355a9a.js');
require('../_chunks/dep-23f77e26.js');
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
require('../message/props.js');
require('../popup/popup.js');
require('@popperjs/core');
require('../_chunks/dep-e8ff2c13.js');
require('../popup/container.js');
require('../popup/props.js');
require('../_chunks/dep-b6058ff9.js');
require('../_chunks/dep-39403bd1.js');
require('../_chunks/dep-e86abdd2.js');
require('../_chunks/dep-3a7785db.js');
require('../_chunks/dep-441a3b7b.js');

var _AnchorTarget = Vue.defineComponent({
  name: "TAnchorTarget",
  props: anchor_anchorTargetProps["default"],
  setup: function setup(props2, _ref) {
    var slots = _ref.slots;
    var _useConfig = configProvider_hooks_useConfig.useConfig("anchor"),
      globalConfig = _useConfig.globalConfig,
      classPrefix = _useConfig.classPrefix;
    var _useGlobalIcon = index.useGlobalIcon({
        FileCopyIcon: tdesignIconsVueNext.FileCopyIcon
      }),
      FileCopyIcon = _useGlobalIcon.FileCopyIcon;
    var COMPONENT_NAME = index$1.usePrefixClass("anchor");
    var toCopyText = function toCopyText() {
      var a = document.createElement("a");
      a.href = "#".concat(props2.id);
      anchor_utils_index.copyText(a.href);
      message_plugin.MessagePlugin.success(globalConfig.value.copySuccessText, 1e3);
    };
    return function () {
      var children = slots["default"];
      var TAG = props2.tag,
        id = props2.id;
      var className = ["".concat(COMPONENT_NAME.value, "__target")];
      var iconClassName = "".concat(classPrefix.value, "-copy");
      return Vue.createVNode(TAG, {
        "id": id,
        "class": className
      }, {
        "default": function _default() {
          return [children && children(null), Vue.createVNode(popup_index.Popup, {
            "content": globalConfig.value.copyText,
            "placement": "top",
            "showArrow": true,
            "class": iconClassName
          }, {
            "default": function _default() {
              return [Vue.createVNode(FileCopyIcon, {
                "onClick": toCopyText
              }, null)];
            }
          })];
        }
      });
    };
  }
});

exports["default"] = _AnchorTarget;
//# sourceMappingURL=anchor-target.js.map
