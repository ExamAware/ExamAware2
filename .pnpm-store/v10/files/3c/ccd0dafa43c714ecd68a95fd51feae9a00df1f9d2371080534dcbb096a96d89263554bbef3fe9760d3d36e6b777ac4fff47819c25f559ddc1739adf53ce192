/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { isVNode, defineComponent, ref, watch, createVNode } from 'vue';
import { _ as _defineProperty } from '../../../_chunks/dep-1dacc319.mjs';
import { c as COLOR_MODES } from '../../../_chunks/dep-26597e10.mjs';
import '../../../_chunks/dep-7673347f.mjs';
import { RadioGroup, RadioButton } from '../../../radio/index.mjs';
import props from '../../color-picker-panel-props.mjs';
import { useBaseClassName } from '../../hooks/index.mjs';
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
import '../../../radio/radio.mjs';
import '../../../radio/props.mjs';
import '../../../radio/consts/index.mjs';
import '../../../_chunks/dep-0cde7579.mjs';
import '../../../_chunks/dep-0dcc778a.mjs';
import '../../../radio/group.mjs';
import '../../../_chunks/dep-88e5a7b0.mjs';
import '../../../radio/radio-group-props.mjs';
import '../../../radio/radio-button.mjs';
import '../../../radio/hooks/index.mjs';
import '../../../radio/hooks/useKeyboard.mjs';
import '../../../watermark/hooks/index.mjs';
import './style/css.mjs';

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
//# sourceMappingURL=header.mjs.map
