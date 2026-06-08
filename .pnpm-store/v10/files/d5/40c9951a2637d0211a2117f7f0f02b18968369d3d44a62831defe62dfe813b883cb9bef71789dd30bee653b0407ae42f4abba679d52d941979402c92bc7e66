/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, ref, watch, createVNode, isVNode } from 'vue';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { c as COLOR_MODES } from '../../../_chunks/dep-8d136a55.js';
import 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../../../_chunks/dep-fe23be6e.js';
import { useConfig } from '../../../config-provider/hooks/useConfig.js';
import '@babel/runtime/helpers/slicedToArray';
import '../../../_chunks/dep-880d05b9.js';
import { RadioGroup, RadioButton } from '../../../radio/index.js';
import props from '../../color-picker-panel-props.js';
import { useBaseClassName } from '../../hooks/index.js';
import '../../../_chunks/dep-81b01cae.js';
import '../../../config-provider/utils/context.js';
import '../../../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '../../../radio/radio.js';
import '../../../_chunks/dep-2accc95a.js';
import '../../../_chunks/dep-16bcfabc.js';
import '../../../_chunks/dep-fb805f69.js';
import '../../../_chunks/dep-4f8b6591.js';
import '../../../_chunks/dep-9e6d8a78.js';
import '../../../_chunks/dep-f7dd3c12.js';
import '../../../_chunks/dep-47b13687.js';
import '../../../_chunks/dep-51e5a827.js';
import '../../../radio/props.js';
import '../../../radio/consts/index.js';
import '../../../_chunks/dep-80a99546.js';
import '@babel/runtime/helpers/objectWithoutProperties';
import '../../../radio/group.js';
import '@babel/runtime/helpers/asyncToGenerator';
import '@babel/runtime/regenerator';
import '../../../radio/radio-group-props.js';
import '../../../radio/radio-button.js';
import '../../../_chunks/dep-80a77612.js';
import '../../../radio/hooks/useKeyboard.js';
import '../../../_chunks/dep-30c631d1.js';
import '../../../watermark/hooks/index.js';
import '../../../_chunks/dep-664b8b22.js';
import 'tdesign-vue-next/esm/common/style/web/components/radio/_index.less';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !isVNode(s);
}
var PanelHeader = defineComponent({
  name: "PanelHeader",
  props: _objectSpread(_objectSpread({}, props), {}, {
    mode: {
      type: String,
      "default": "color"
    },
    onModeChange: {
      type: Function,
      "default": function _default() {
        return function () {};
      }
    }
  }),
  setup: function setup(props2) {
    var _useConfig = useConfig("colorPicker"),
      globalConfig = _useConfig.globalConfig;
    var baseClassName = useBaseClassName();
    var modeValue = ref(props2.mode);
    var handleModeChange = function handleModeChange(v) {
      return props2.onModeChange(v);
    };
    watch(function () {
      return props2.mode;
    }, function (v) {
      return modeValue.value = v;
    });
    return function () {
      var _slot2;
      var _props2$colorModes;
      if (((_props2$colorModes = props2.colorModes) === null || _props2$colorModes === void 0 ? void 0 : _props2$colorModes.length) === 1) {
        return null;
      }
      return createVNode("div", {
        "class": "".concat(baseClassName.value, "__head")
      }, [createVNode("div", {
        "class": "".concat(baseClassName.value, "__mode")
      }, [createVNode(RadioGroup, {
        "variant": "default-filled",
        "size": "small",
        "modelValue": modeValue.value,
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return modeValue.value = $event;
        },
        "onChange": handleModeChange
      }, _isSlot(_slot2 = Object.keys(COLOR_MODES).map(function (key) {
        var _slot;
        return createVNode(RadioButton, {
          "key": key,
          "value": key
        }, _isSlot(_slot = Reflect.get(globalConfig.value, COLOR_MODES[key])) ? _slot : {
          "default": function _default() {
            return [_slot];
          }
        });
      })) ? _slot2 : {
        "default": function _default() {
          return [_slot2];
        }
      })])]);
    };
  }
});

export { PanelHeader as default };
//# sourceMappingURL=header.js.map
