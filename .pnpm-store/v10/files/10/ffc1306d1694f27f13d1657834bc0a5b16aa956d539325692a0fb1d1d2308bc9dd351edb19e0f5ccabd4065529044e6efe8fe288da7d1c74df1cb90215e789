/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, ref, watch, createVNode, isVNode } from 'vue';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import '../../../_chunks/dep-110706c1.js';
import '@babel/runtime/helpers/classCallCheck';
import '@babel/runtime/helpers/createClass';
import { g as getColorFormatOptions } from '../../../_chunks/dep-deedcdfd.js';
import props from '../../props.js';
import { Select, Option } from '../../../select/index.js';
import FormatInputs from './inputs.js';
import { useBaseClassName } from '../../hooks/index.js';
import '@babel/runtime/helpers/slicedToArray';
import 'tinycolor2';
import '../../../_chunks/dep-8d136a55.js';
import 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '../../../select/select.js';
import '@babel/runtime/helpers/objectWithoutProperties';
import '@babel/runtime/helpers/asyncToGenerator';
import '@babel/runtime/regenerator';
import '../../../common-components/fake-arrow.js';
import '@babel/runtime/helpers/typeof';
import '../../../_chunks/dep-fe23be6e.js';
import '../../../_chunks/dep-81b01cae.js';
import '../../../_chunks/dep-9e6d8a78.js';
import '../../../config-provider/hooks/useConfig.js';
import '../../../config-provider/utils/context.js';
import '../../../_chunks/dep-938cd955.js';
import 'dayjs';
import '../../../_chunks/dep-880d05b9.js';
import '../../../select-input/index.js';
import '../../../select-input/select-input.js';
import '../../../popup/index.js';
import '../../../popup/popup.js';
import '@popperjs/core';
import '../../../_chunks/dep-16bcfabc.js';
import '../../../_chunks/dep-2accc95a.js';
import '../../../_chunks/dep-fb805f69.js';
import '../../../_chunks/dep-4f8b6591.js';
import '../../../_chunks/dep-2ea19dca.js';
import '../../../_chunks/dep-51e5a827.js';
import '../../../popup/container.js';
import '../../../popup/props.js';
import '../../../_chunks/dep-80a77612.js';
import '../../../_chunks/dep-664b8b22.js';
import 'tdesign-vue-next/esm/common/style/web/components/popup/_index.less';
import '../../../select-input/props.js';
import '../../../select-input/hooks/useMultiple.js';
import '../../../tag-input/index.js';
import '../../../tag-input/tag-input.js';
import 'tdesign-icons-vue-next';
import '../../../input/index.js';
import '../../../input/input.js';
import '../../../input/props.js';
import '../../../_chunks/dep-f7dd3c12.js';
import '../../../_chunks/dep-3a7a2ef1.js';
import '../../../_chunks/dep-47b13687.js';
import '../../../input/hooks/useInput.js';
import '../../../form/consts/index.js';
import '../../../input/hooks/useLengthLimit.js';
import '../../../_chunks/dep-8295e674.js';
import '../../../_chunks/dep-80a99546.js';
import '../../../input/hooks/useInputEventHandler.js';
import '../../../input/hooks/useInputWidth.js';
import '../../../input/input-group.js';
import '../../../input/input-group-props.js';
import 'tdesign-vue-next/esm/common/style/web/components/input/_index.less';
import '../../../tag-input/props.js';
import '../../../_chunks/dep-aa34a263.js';
import '../../../_chunks/dep-4d7b9152.js';
import '../../../tag-input/hooks/useDragSorter.js';
import '../../../tag-input/hooks/useHover.js';
import '../../../tag-input/hooks/useTagScroll.js';
import '../../../tag-input/hooks/useTagList.js';
import '../../../tag/index.js';
import '../../../tag/tag.js';
import '../../../tag/props.js';
import '../../../tag/check-tag.js';
import '../../../tag/check-tag-props.js';
import '../../../_chunks/dep-30c631d1.js';
import '../../../tag/check-tag-group.js';
import '../../../tag/check-tag-group-props.js';
import 'tdesign-vue-next/esm/common/style/web/components/tag/_index.less';
import 'tdesign-vue-next/esm/common/style/web/components/tag-input/_index.less';
import '../../../loading/index.js';
import '../../../loading/directive.js';
import '../../../loading/plugin.js';
import '../../../_chunks/dep-ee693784.js';
import '../../../loading/icon/gradient.js';
import '../../../loading/props.js';
import 'tdesign-vue-next/esm/common/style/web/components/loading/_index.less';
import '../../../select-input/hooks/useOverlayInnerStyle.js';
import '../../../select-input/hooks/useSingle.js';
import 'tdesign-vue-next/esm/common/style/web/components/select-input/_index.less';
import '../../../select/components/select-panel.js';
import '../../../select/option.js';
import '../../../select/option-props.js';
import '../../../checkbox/index.js';
import '../../../checkbox/checkbox.js';
import '../../../checkbox/props.js';
import '../../../_chunks/dep-d2a6e7a4.js';
import '../../../checkbox/consts/index.js';
import '../../../checkbox/hooks/useCheckboxLazyLoad.js';
import '../../../_chunks/dep-6264b0a7.js';
import '../../../checkbox/hooks/useKeyboardEvent.js';
import '../../../checkbox/group.js';
import '../../../checkbox/checkbox-group-props.js';
import '../../../_chunks/dep-e3ce8c8f.js';
import 'tdesign-vue-next/esm/common/style/web/components/checkbox/_index.less';
import '../../../select/utils/index.js';
import '../../../select/consts/index.js';
import '../../../select/option-group.js';
import '../../../select/option-group-props.js';
import '../../../select/props.js';
import '../../../select/hooks/usePanelVirtualScroll.js';
import '../../../select/hooks/useKeyboardControl.js';
import '../../../select/hooks/useSelectOptions.js';
import 'tdesign-vue-next/esm/common/style/web/components/select/_index.less';
import '../../../input-number/index.js';
import '../../../input-number/input-number.js';
import '../../../button/index.js';
import '../../../button/button.js';
import '../../../button/props.js';
import 'tdesign-vue-next/esm/common/style/web/components/button/_index.less';
import '../../../input-number/props.js';
import '../../../input-number/hooks/useInputNumber.js';
import '../../../_chunks/dep-1a63d163.js';
import '../../../_chunks/dep-05f15b4e.js';
import 'tdesign-vue-next/esm/common/style/web/components/input-number/_index.less';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !isVNode(s);
}
var FormatPanel = defineComponent({
  name: "FormatPanel",
  inheritAttrs: false,
  props: _objectSpread(_objectSpread({}, props), {}, {
    color: {
      type: Object
    },
    onInputChange: {
      type: Function,
      "default": function _default() {
        return function () {};
      }
    }
  }),
  setup: function setup(props2) {
    var baseClassName = useBaseClassName();
    var formatModel = ref(props2.format);
    watch(function () {
      return [props2.format];
    }, function () {
      return formatModel.value = props2.format;
    });
    var handleModeChange = function handleModeChange(v) {
      formatModel.value = v;
    };
    return function () {
      var _slot;
      var newProps = _objectSpread(_objectSpread({}, props2), {}, {
        format: formatModel.value
      });
      var selectInputProps = _objectSpread({}, props2.selectInputProps || {});
      return createVNode("div", {
        "class": "".concat(baseClassName.value, "__format")
      }, [createVNode("div", {
        "class": "".concat(baseClassName.value, "__format--item")
      }, [createVNode(Select, {
        "size": "small",
        "class": "".concat(baseClassName.value, "__format-mode-select"),
        "selectInputProps": _objectSpread({}, selectInputProps),
        "popupProps": _objectSpread({
          overlayClassName: "".concat(baseClassName.value, "__select-options")
        }, selectInputProps.popupProps),
        "modelValue": formatModel.value,
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return formatModel.value = $event;
        },
        "onChange": handleModeChange
      }, _isSlot(_slot = getColorFormatOptions(props2.enableAlpha).map(function (item) {
        return createVNode(Option, {
          "key": item,
          "value": item,
          "label": item,
          "style": {
            fontSize: "12px"
          }
        }, null);
      })) ? _slot : {
        "default": function _default() {
          return [_slot];
        }
      })]), createVNode("div", {
        "class": "".concat(baseClassName.value, "__format--item")
      }, [createVNode(FormatInputs, newProps, null)])]);
    };
  }
});

export { FormatPanel as default };
//# sourceMappingURL=index.js.map
