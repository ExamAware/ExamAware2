/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, inject, computed, ref, watch, createVNode } from 'vue';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import tabPanelProps from './tab-panel-props.js';
import 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-fe23be6e.js';
import { a as useContent } from '../_chunks/dep-2accc95a.js';
import { u as useCommonClassName } from '../_chunks/dep-4f8b6591.js';
import { u as usePrefixClass } from '../_chunks/dep-9e6d8a78.js';
import { u as useDestroyOnClose } from '../_chunks/dep-7f74a978.js';
import '@babel/runtime/helpers/slicedToArray';
import '../_chunks/dep-880d05b9.js';
import '../_chunks/dep-81b01cae.js';
import '../_chunks/dep-16bcfabc.js';
import '../_chunks/dep-fb805f69.js';
import '../config-provider/hooks/useConfig.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';

var _TabPanel = defineComponent({
  name: "TTabPanel",
  props: tabPanelProps,
  setup: function setup(props2) {
    var COMPONENT_NAME = usePrefixClass("tab-panel");
    var _useCommonClassName = useCommonClassName(),
      STATUS = _useCommonClassName.STATUS;
    var renderTNodeContent = useContent();
    useDestroyOnClose();
    var tabs = inject("tabs");
    var isActive = computed(function () {
      return props2.value === tabs.value.value;
    });
    var isMount = ref(props2.lazy ? isActive.value : true);
    watch(isActive, function () {
      if (isActive.value) {
        if (!isMount.value) {
          isMount.value = true;
        }
      } else if (props2.destroyOnHide) {
        isMount.value = false;
      }
    }, {
      immediate: true
    });
    var tabPanelClass = computed(function () {
      return [COMPONENT_NAME.value, _defineProperty({}, STATUS.value.hidden, !isActive.value)];
    });
    return function () {
      if (!isMount.value) return null;
      return createVNode("div", {
        "key": props2.value,
        "class": tabPanelClass.value
      }, [renderTNodeContent("default", "panel")]);
    };
  }
});

export { _TabPanel as default };
//# sourceMappingURL=tab-panel.js.map
