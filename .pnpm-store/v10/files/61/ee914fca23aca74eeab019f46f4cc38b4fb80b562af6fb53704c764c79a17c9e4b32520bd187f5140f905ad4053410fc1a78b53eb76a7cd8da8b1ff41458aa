/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, computed, createVNode } from 'vue';
import TDateFooter from '../base/Footer.js';
import '@babel/runtime/helpers/defineProperty';
import 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../../../_chunks/dep-fe23be6e.js';
import '../../../_chunks/dep-81b01cae.js';
import '../../../_chunks/dep-9e6d8a78.js';
import '../../../config-provider/hooks/useConfig.js';
import '../../../config-provider/utils/context.js';
import '../../../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/slicedToArray';
import '../../../_chunks/dep-880d05b9.js';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '../../../button/index.js';
import '../../../button/button.js';
import '../../../loading/index.js';
import '../../../loading/directive.js';
import '../../../loading/plugin.js';
import '../../../_chunks/dep-ee693784.js';
import '../../../loading/icon/gradient.js';
import '../../../_chunks/dep-2ea19dca.js';
import '../../../_chunks/dep-80a99546.js';
import '@babel/runtime/helpers/objectWithoutProperties';
import '../../../_chunks/dep-16bcfabc.js';
import '../../../_chunks/dep-2accc95a.js';
import '../../../_chunks/dep-fb805f69.js';
import '../../../_chunks/dep-4f8b6591.js';
import '../../../loading/props.js';
import '../../../_chunks/dep-664b8b22.js';
import '../../../button/props.js';
import '../../../_chunks/dep-f7dd3c12.js';
import '../../../_chunks/dep-d2a6e7a4.js';

var TExtraContent = defineComponent({
  name: "TExtraContent",
  props: {
    presets: Object,
    enableTimePicker: Boolean,
    presetsPlacement: String,
    needConfirm: Boolean,
    onPresetClick: Function,
    onConfirmClick: Function,
    selectedValue: [String, Number, Array, Date]
  },
  setup: function setup(props) {
    var showPanelFooter = computed(function () {
      return props.enableTimePicker && props.needConfirm || props.presets;
    });
    return function () {
      return showPanelFooter.value ? createVNode(TDateFooter, {
        "presets": props.presets,
        "onPresetClick": props.onPresetClick,
        "enableTimePicker": props.enableTimePicker,
        "onConfirmClick": props.onConfirmClick,
        "presetsPlacement": props.presetsPlacement,
        "selectedValue": props.selectedValue,
        "needConfirm": props.needConfirm
      }, null) : null;
    };
  }
});

export { TExtraContent as default };
//# sourceMappingURL=ExtraContent.js.map
