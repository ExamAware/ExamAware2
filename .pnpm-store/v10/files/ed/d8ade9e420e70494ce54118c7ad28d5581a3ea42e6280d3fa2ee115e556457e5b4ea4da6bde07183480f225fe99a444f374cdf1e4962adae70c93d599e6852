/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, computed, createVNode } from 'vue';
import { _ as _toConsumableArray } from '../_chunks/dep-00b4e06a.mjs';
import { _ as _defineProperty } from '../_chunks/dep-1dacc319.mjs';
import { b as useContent, a as useTNodeJSX, u as usePrefixClass, c as useCommonClassName, e as useDisabled } from '../_chunks/dep-7673347f.mjs';
import props from './props.mjs';
import { useConfig } from '../config-provider/hooks/useConfig.mjs';
import '../_chunks/dep-9f459d8b.mjs';
import '../_chunks/dep-257428bc.mjs';
import 'lodash-es';
import '../_chunks/dep-51a43106.mjs';
import '../_chunks/dep-fe644854.mjs';
import '../_chunks/dep-22ebd6af.mjs';
import '../_chunks/dep-9003fde5.mjs';
import '../_chunks/dep-cdd448ec.mjs';
import '../_chunks/dep-97ecacde.mjs';
import '../config-provider/utils/context.mjs';
import '../_chunks/dep-a4c09318.mjs';
import '../_chunks/dep-ffb85102.mjs';
import '../_chunks/dep-ad588525.mjs';
import '../_chunks/dep-84fd47b3.mjs';
import '../_chunks/dep-d36c4a3f.mjs';

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
//# sourceMappingURL=link.mjs.map
