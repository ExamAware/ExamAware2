/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, inject, computed, createVNode } from 'vue';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-fe23be6e.js';
import { u as useTNodeJSX } from '../_chunks/dep-2accc95a.js';
import { u as useCommonClassName } from '../_chunks/dep-4f8b6591.js';
import { u as usePrefixClass } from '../_chunks/dep-9e6d8a78.js';
import '@babel/runtime/helpers/slicedToArray';
import '../_chunks/dep-880d05b9.js';
import props from './option-group-props.js';
import { selectInjectKey } from './consts/index.js';
import '../_chunks/dep-81b01cae.js';
import '../_chunks/dep-16bcfabc.js';
import '../_chunks/dep-fb805f69.js';
import '../config-provider/hooks/useConfig.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';

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
//# sourceMappingURL=option-group.js.map
