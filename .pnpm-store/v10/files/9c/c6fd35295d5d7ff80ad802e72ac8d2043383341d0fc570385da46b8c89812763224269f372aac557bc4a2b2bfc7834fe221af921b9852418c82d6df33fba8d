/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, computed, createVNode } from 'vue';
import TDateFooter from '../base/Footer.mjs';
import '../../../_chunks/dep-1dacc319.mjs';
import '../../../_chunks/dep-257428bc.mjs';
import '../../../_chunks/dep-7673347f.mjs';
import 'lodash-es';
import '../../../_chunks/dep-00b4e06a.mjs';
import '../../../_chunks/dep-9f459d8b.mjs';
import '../../../_chunks/dep-51a43106.mjs';
import '../../../_chunks/dep-fe644854.mjs';
import '../../../config-provider/hooks/useConfig.mjs';
import '../../../config-provider/utils/context.mjs';
import '../../../_chunks/dep-a4c09318.mjs';
import '../../../_chunks/dep-ffb85102.mjs';
import '../../../_chunks/dep-ad588525.mjs';
import '../../../_chunks/dep-9003fde5.mjs';
import '../../../_chunks/dep-22ebd6af.mjs';
import '../../../_chunks/dep-cdd448ec.mjs';
import '../../../_chunks/dep-97ecacde.mjs';
import '../../../_chunks/dep-84fd47b3.mjs';
import '../../../_chunks/dep-d36c4a3f.mjs';
import '../../../button/index.mjs';
import '../../../button/button.mjs';
import '../../../loading/index.mjs';
import '../../../loading/directive.mjs';
import '../../../loading/plugin.mjs';
import '../../../loading/loading.mjs';
import '../../../loading/icon/gradient.mjs';
import '../../../_chunks/dep-0cde7579.mjs';
import '../../../_chunks/dep-0dcc778a.mjs';
import '../../../loading/props.mjs';
import './style/css.mjs';
import '../../../button/props.mjs';

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
//# sourceMappingURL=ExtraContent.mjs.map
