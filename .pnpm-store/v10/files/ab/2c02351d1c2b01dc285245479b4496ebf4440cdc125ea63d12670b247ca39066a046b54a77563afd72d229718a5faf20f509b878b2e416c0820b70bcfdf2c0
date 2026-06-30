/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, inject, computed, ref, watch, createVNode } from 'vue';
import { _ as _defineProperty } from '../_chunks/dep-1dacc319.mjs';
import tabPanelProps from './tab-panel-props.mjs';
import { u as usePrefixClass, c as useCommonClassName, b as useContent, m as useDestroyOnClose } from '../_chunks/dep-7673347f.mjs';
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
//# sourceMappingURL=tab-panel.mjs.map
