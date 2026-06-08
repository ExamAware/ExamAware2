/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, createVNode } from 'vue';
import { FileCopyIcon } from 'tdesign-icons-vue-next';
import { copyText } from './utils/index.js';
import { MessagePlugin } from '../message/plugin.js';
import props from './anchor-target-props.js';
import { Popup } from '../popup/index.js';
import 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-fe23be6e.js';
import { u as usePrefixClass } from '../_chunks/dep-9e6d8a78.js';
import { u as useGlobalIcon } from '../_chunks/dep-3a7a2ef1.js';
import '@babel/runtime/helpers/slicedToArray';
import '../_chunks/dep-880d05b9.js';
import '@babel/runtime/helpers/defineProperty';
import { useConfig } from '../config-provider/hooks/useConfig.js';
import '../_chunks/dep-81b01cae.js';
import '../_chunks/dep-16bcfabc.js';
import '../message/message-list.js';
import '../_chunks/dep-9737ac07.js';
import '../_chunks/dep-2accc95a.js';
import '../_chunks/dep-fb805f69.js';
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
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '../_chunks/dep-664b8b22.js';
import '../message/props.js';
import '../popup/popup.js';
import '@popperjs/core';
import '../_chunks/dep-51e5a827.js';
import '../popup/container.js';
import '../popup/props.js';
import '../_chunks/dep-80a77612.js';

var _AnchorTarget = defineComponent({
  name: "TAnchorTarget",
  props: props,
  setup: function setup(props2, _ref) {
    var slots = _ref.slots;
    var _useConfig = useConfig("anchor"),
      globalConfig = _useConfig.globalConfig,
      classPrefix = _useConfig.classPrefix;
    var _useGlobalIcon = useGlobalIcon({
        FileCopyIcon: FileCopyIcon
      }),
      FileCopyIcon$1 = _useGlobalIcon.FileCopyIcon;
    var COMPONENT_NAME = usePrefixClass("anchor");
    var toCopyText = function toCopyText() {
      var a = document.createElement("a");
      a.href = "#".concat(props2.id);
      copyText(a.href);
      MessagePlugin.success(globalConfig.value.copySuccessText, 1e3);
    };
    return function () {
      var children = slots["default"];
      var TAG = props2.tag,
        id = props2.id;
      var className = ["".concat(COMPONENT_NAME.value, "__target")];
      var iconClassName = "".concat(classPrefix.value, "-copy");
      return createVNode(TAG, {
        "id": id,
        "class": className
      }, {
        "default": function _default() {
          return [children && children(null), createVNode(Popup, {
            "content": globalConfig.value.copyText,
            "placement": "top",
            "showArrow": true,
            "class": iconClassName
          }, {
            "default": function _default() {
              return [createVNode(FileCopyIcon$1, {
                "onClick": toCopyText
              }, null)];
            }
          })];
        }
      });
    };
  }
});

export { _AnchorTarget as default };
//# sourceMappingURL=anchor-target.js.map
