/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, createVNode } from 'vue';
import { FileCopyIcon } from 'tdesign-icons-vue-next';
import { copyText } from './utils/index.mjs';
import { MessagePlugin } from '../message/plugin.mjs';
import props from './anchor-target-props.mjs';
import { Popup } from '../popup/index.mjs';
import { i as useGlobalIcon, u as usePrefixClass } from '../_chunks/dep-7673347f.mjs';
import { useConfig } from '../config-provider/hooks/useConfig.mjs';
import '../_chunks/dep-fe644854.mjs';
import '../_chunks/dep-1dacc319.mjs';
import '../_chunks/dep-257428bc.mjs';
import 'lodash-es';
import '../_chunks/dep-51a43106.mjs';
import '../message/message-list.mjs';
import '../_chunks/dep-4883eca1.mjs';
import '../loading/index.mjs';
import '../loading/directive.mjs';
import '../loading/plugin.mjs';
import '../loading/loading.mjs';
import '../_chunks/dep-9003fde5.mjs';
import '../_chunks/dep-9f459d8b.mjs';
import '../loading/icon/gradient.mjs';
import '../_chunks/dep-0cde7579.mjs';
import '../_chunks/dep-00b4e06a.mjs';
import '../_chunks/dep-0dcc778a.mjs';
import '../loading/props.mjs';
import '../config-provider/utils/context.mjs';
import '../_chunks/dep-a4c09318.mjs';
import '../_chunks/dep-ffb85102.mjs';
import '../_chunks/dep-ad588525.mjs';
import '../_chunks/dep-22ebd6af.mjs';
import '../_chunks/dep-cdd448ec.mjs';
import '../_chunks/dep-97ecacde.mjs';
import '../_chunks/dep-84fd47b3.mjs';
import '../_chunks/dep-d36c4a3f.mjs';
import './style/css.mjs';
import '../message/props.mjs';
import '../popup/popup.mjs';
import '@popperjs/core';
import '../popup/container.mjs';
import '../popup/props.mjs';

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
//# sourceMappingURL=anchor-target.mjs.map
