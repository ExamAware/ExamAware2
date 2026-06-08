/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, toRefs, computed, provide, createVNode } from 'vue';
import { _ as _defineProperty } from '../_chunks/dep-1dacc319.mjs';
import { _ as _slicedToArray } from '../_chunks/dep-9003fde5.mjs';
import props from './props.mjs';
import { u as usePrefixClass, a as useTNodeJSX, j as useVModel } from '../_chunks/dep-7673347f.mjs';
import '../_chunks/dep-257428bc.mjs';
import '../_chunks/dep-9f459d8b.mjs';
import 'lodash-es';
import '../_chunks/dep-00b4e06a.mjs';
import '../_chunks/dep-51a43106.mjs';
import '../_chunks/dep-fe644854.mjs';
import '../config-provider/hooks/useConfig.mjs';
import '../config-provider/utils/context.mjs';
import '../_chunks/dep-a4c09318.mjs';
import '../_chunks/dep-ffb85102.mjs';
import '../_chunks/dep-ad588525.mjs';
import '../_chunks/dep-22ebd6af.mjs';
import '../_chunks/dep-cdd448ec.mjs';
import '../_chunks/dep-97ecacde.mjs';
import '../_chunks/dep-84fd47b3.mjs';
import '../_chunks/dep-d36c4a3f.mjs';

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
//# sourceMappingURL=collapse.mjs.map
