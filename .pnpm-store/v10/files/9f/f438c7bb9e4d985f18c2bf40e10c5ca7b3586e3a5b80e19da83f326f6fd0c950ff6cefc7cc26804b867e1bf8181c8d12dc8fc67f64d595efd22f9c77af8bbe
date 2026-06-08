/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, computed, createVNode, isVNode } from 'vue';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../../../_chunks/dep-fe23be6e.js';
import { u as usePrefixClass } from '../../../_chunks/dep-9e6d8a78.js';
import '@babel/runtime/helpers/slicedToArray';
import '../../../_chunks/dep-880d05b9.js';
import { Button } from '../../../button/index.js';
import { useConfig } from '../../../config-provider/hooks/useConfig.js';
import '../../../_chunks/dep-81b01cae.js';
import '../../../config-provider/utils/context.js';
import '../../../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
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
import 'tdesign-vue-next/esm/common/style/web/components/loading/_index.less';
import '../../../button/props.js';
import '../../../_chunks/dep-f7dd3c12.js';
import '../../../_chunks/dep-d2a6e7a4.js';
import 'tdesign-vue-next/esm/common/style/web/components/button/_index.less';

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
//# sourceMappingURL=Footer.js.map
