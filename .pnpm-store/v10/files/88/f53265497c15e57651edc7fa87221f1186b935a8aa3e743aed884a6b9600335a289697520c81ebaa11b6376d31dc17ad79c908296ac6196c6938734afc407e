/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { isVNode, defineComponent, computed, createVNode } from 'vue';
import { _ as _defineProperty } from '../../../_chunks/dep-1dacc319.mjs';
import { u as usePrefixClass } from '../../../_chunks/dep-7673347f.mjs';
import { Button } from '../../../button/index.mjs';
import { useConfig } from '../../../config-provider/hooks/useConfig.mjs';
import '../../../_chunks/dep-257428bc.mjs';
import 'lodash-es';
import '../../../_chunks/dep-00b4e06a.mjs';
import '../../../_chunks/dep-9f459d8b.mjs';
import '../../../_chunks/dep-51a43106.mjs';
import '../../../_chunks/dep-fe644854.mjs';
import '../../../_chunks/dep-22ebd6af.mjs';
import '../../../_chunks/dep-9003fde5.mjs';
import '../../../_chunks/dep-cdd448ec.mjs';
import '../../../_chunks/dep-97ecacde.mjs';
import '../../../config-provider/utils/context.mjs';
import '../../../_chunks/dep-a4c09318.mjs';
import '../../../_chunks/dep-ffb85102.mjs';
import '../../../_chunks/dep-ad588525.mjs';
import '../../../_chunks/dep-84fd47b3.mjs';
import '../../../_chunks/dep-d36c4a3f.mjs';
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

function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !isVNode(s);
}
var TDateFooter = defineComponent({
  name: "TDatePickerTable",
  props: {
    enableTimePicker: Boolean,
    presetsPlacement: String,
    presets: Object,
    needConfirm: Boolean,
    selectedValue: [String, Number, Array, Date],
    onPresetClick: Function,
    onConfirmClick: Function
  },
  setup: function setup(props) {
    var COMPONENT_NAME = usePrefixClass("date-picker__footer");
    var presetsClass = usePrefixClass("date-picker__presets");
    var _useConfig = useConfig("datePicker"),
      t = _useConfig.t,
      globalConfig = _useConfig.globalConfig;
    var footerClass = computed(function () {
      return [COMPONENT_NAME.value, "".concat(COMPONENT_NAME.value, "--").concat(props.presetsPlacement)];
    });
    return function () {
      var _slot;
      return createVNode("div", {
        "class": footerClass.value
      }, [createVNode("div", {
        "class": presetsClass.value
      }, [props.presets && Object.keys(props.presets).map(function (key) {
        return createVNode(Button, {
          "key": key,
          "size": "small",
          "variant": "text",
          "onClick": function onClick(e) {
            var _props$onPresetClick;
            return (_props$onPresetClick = props.onPresetClick) === null || _props$onPresetClick === void 0 ? void 0 : _props$onPresetClick.call(props, props.presets[key], {
              e: e,
              preset: _defineProperty({}, key, props.presets[key])
            });
          }
        }, _isSlot(key) ? key : {
          "default": function _default() {
            return [key];
          }
        });
      })]), props.enableTimePicker && props.needConfirm && createVNode(Button, {
        "disabled": !props.selectedValue,
        "size": "small",
        "theme": "primary",
        "onClick": function onClick(e) {
          var _props$onConfirmClick;
          return (_props$onConfirmClick = props.onConfirmClick) === null || _props$onConfirmClick === void 0 ? void 0 : _props$onConfirmClick.call(props, {
            e: e
          });
        }
      }, _isSlot(_slot = t(globalConfig.value.confirm)) ? _slot : {
        "default": function _default() {
          return [_slot];
        }
      })]);
    };
  }
});

export { TDateFooter as default };
//# sourceMappingURL=Footer.mjs.map
