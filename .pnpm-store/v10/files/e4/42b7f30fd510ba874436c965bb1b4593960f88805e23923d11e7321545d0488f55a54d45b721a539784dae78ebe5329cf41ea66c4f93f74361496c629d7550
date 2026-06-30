/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, toRefs, computed, provide, createVNode } from 'vue';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import props from './props.js';
import 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-fe23be6e.js';
import { u as useTNodeJSX } from '../_chunks/dep-2accc95a.js';
import { u as usePrefixClass } from '../_chunks/dep-9e6d8a78.js';
import '../_chunks/dep-880d05b9.js';
import { u as useVModel } from '../_chunks/dep-51e5a827.js';
import '../_chunks/dep-81b01cae.js';
import '../_chunks/dep-16bcfabc.js';
import '../_chunks/dep-fb805f69.js';
import '../config-provider/hooks/useConfig.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';

var _Collapse = defineComponent({
  name: "TCollapse",
  props: props,
  setup: function setup(props2) {
    var componentName = usePrefixClass("collapse");
    var borderlessClass = usePrefixClass("-border-less");
    var renderTNodeJSX = useTNodeJSX();
    var _toRefs = toRefs(props2),
      value = _toRefs.value,
      expandMutex = _toRefs.expandMutex,
      borderless = _toRefs.borderless,
      modelValue = _toRefs.modelValue;
    var _useVModel = useVModel(value, modelValue, props2.defaultValue, props2.onChange),
      _useVModel2 = _slicedToArray(_useVModel, 2),
      collapseValue = _useVModel2[0],
      setCollapseValue = _useVModel2[1];
    var updateCollapseValue = function updateCollapseValue(value2) {
      var newValue = [].concat(collapseValue.value || []);
      var index = newValue.indexOf(value2);
      if (index >= 0) {
        newValue.splice(index, 1);
      } else if (expandMutex.value) {
        newValue = [value2];
      } else {
        newValue.push(value2);
      }
      setCollapseValue(newValue);
    };
    var classes = computed(function () {
      return [componentName.value, _defineProperty({}, borderlessClass.value, !!borderless.value)];
    });
    var getUniqId = function () {
      var index = 0;
      return function () {
        return index++;
      };
    }();
    provide("collapseValue", collapseValue);
    provide("updateCollapseValue", updateCollapseValue);
    provide("collapseProps", toRefs(props2));
    provide("getUniqId", getUniqId);
    provide("renderParentTNode", renderTNodeJSX);
    return function () {
      var nodes = renderTNodeJSX("default");
      return createVNode("div", {
        "class": classes.value
      }, [nodes]);
    };
  }
});

export { _Collapse as default };
//# sourceMappingURL=collapse.js.map
