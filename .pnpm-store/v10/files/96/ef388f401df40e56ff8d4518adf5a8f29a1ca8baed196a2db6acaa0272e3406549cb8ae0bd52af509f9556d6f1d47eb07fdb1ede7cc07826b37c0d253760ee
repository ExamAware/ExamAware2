/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, computed, createVNode } from 'vue';
import _toConsumableArray from '@babel/runtime/helpers/toConsumableArray';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import 'lodash-es';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-fe23be6e.js';
import { a as useContent, u as useTNodeJSX } from '../_chunks/dep-2accc95a.js';
import { u as useCommonClassName } from '../_chunks/dep-4f8b6591.js';
import { u as usePrefixClass } from '../_chunks/dep-9e6d8a78.js';
import { u as useDisabled } from '../_chunks/dep-f7dd3c12.js';
import '@babel/runtime/helpers/slicedToArray';
import '../_chunks/dep-880d05b9.js';
import props from './props.js';
import { useConfig } from '../config-provider/hooks/useConfig.js';
import '../_chunks/dep-81b01cae.js';
import '../_chunks/dep-16bcfabc.js';
import '../_chunks/dep-fb805f69.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';

var _Link = defineComponent({
  name: "TLink",
  props: props,
  emits: ["click"],
  setup: function setup(props2, _ref) {
    var emit = _ref.emit;
    var renderContent = useContent();
    var renderTNodeJSX = useTNodeJSX();
    var COMPONENT_NAME = usePrefixClass("link");
    var _useCommonClassName = useCommonClassName(),
      STATUS = _useCommonClassName.STATUS,
      SIZE = _useCommonClassName.SIZE;
    var _useConfig = useConfig("classPrefix"),
      classPrefix = _useConfig.classPrefix;
    var isDisabled = useDisabled();
    var linkClass = computed(function () {
      return ["".concat(COMPONENT_NAME.value), "".concat(COMPONENT_NAME.value, "--theme-").concat(props2.theme), _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, SIZE.value[props2.size], props2.size !== "medium"), STATUS.value.disabled, isDisabled.value), "".concat(classPrefix.value, "-is-underline"), props2.underline), "".concat(COMPONENT_NAME.value, "--hover-").concat(props2.hover), !isDisabled.value)];
    });
    var handleClick = function handleClick(event) {
      if (!isDisabled.value) emit("click", event);
    };
    return function () {
      var linkContent = renderContent("default", "content");
      var prefix = renderTNodeJSX("prefixIcon");
      var suffix = renderTNodeJSX("suffixIcon");
      return createVNode("a", {
        "class": _toConsumableArray(linkClass.value),
        "href": isDisabled.value || !props2.href ? void 0 : props2.href,
        "target": !props2.target ? void 0 : props2.target,
        "download": !props2.download ? void 0 : props2.download,
        "onClick": handleClick
      }, [prefix ? createVNode("span", {
        "class": "".concat(COMPONENT_NAME.value, "__prefix-icon")
      }, [prefix]) : null, linkContent, suffix ? createVNode("span", {
        "class": "".concat(COMPONENT_NAME.value, "__suffix-icon")
      }, [suffix]) : null]);
    };
  }
});

export { _Link as default };
//# sourceMappingURL=link.js.map
