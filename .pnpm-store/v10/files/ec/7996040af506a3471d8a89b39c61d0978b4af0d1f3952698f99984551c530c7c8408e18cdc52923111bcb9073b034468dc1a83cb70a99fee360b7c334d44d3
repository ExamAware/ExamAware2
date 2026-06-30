/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, inject, computed, createVNode } from 'vue';
import { _ as _defineProperty } from '../_chunks/dep-1dacc319.mjs';
import { u as usePrefixClass, c as useCommonClassName, a as useTNodeJSX } from '../_chunks/dep-7673347f.mjs';
import props from './option-group-props.mjs';
import { selectInjectKey } from './consts/index.mjs';
import '../_chunks/dep-257428bc.mjs';
import 'lodash-es';
import '../_chunks/dep-00b4e06a.mjs';
import '../_chunks/dep-9f459d8b.mjs';
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
import '../_chunks/dep-d36c4a3f.mjs';

var _OptionGroup = defineComponent({
  name: "TOptionGroup",
  props: props,
  setup: function setup(props2) {
    var selectProvider = inject(selectInjectKey);
    var COMPONENT_NAME = usePrefixClass("select-option-group");
    var _useCommonClassName = useCommonClassName(),
      SIZE = _useCommonClassName.SIZE;
    var renderTNodeJSX = useTNodeJSX();
    var classes = computed(function () {
      return [COMPONENT_NAME.value, SIZE.value[selectProvider.value.size], _defineProperty({}, "".concat(COMPONENT_NAME.value, "__divider"), props2.divider)];
    });
    return function () {
      var _props2$label;
      return createVNode("li", {
        "class": classes.value
      }, [((_props2$label = props2.label) !== null && _props2$label !== void 0 ? _props2$label : false) && createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__header")
      }, [props2.label]), renderTNodeJSX("default")]);
    };
  }
});

export { _OptionGroup as default };
//# sourceMappingURL=option-group.mjs.map
