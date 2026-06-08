/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { isVNode, defineComponent, ref, watch, createVNode } from 'vue';
import { _ as _defineProperty } from '../../../_chunks/dep-1dacc319.mjs';
import { a as getColorFormatOptions } from '../../../_chunks/dep-149cfe2d.mjs';
import props from '../../props.mjs';
import { Select, Option } from '../../../select/index.mjs';
import FormatInputs from './inputs.mjs';
import { useBaseClassName } from '../../hooks/index.mjs';
import '../../../_chunks/dep-257428bc.mjs';
import '../../../_chunks/dep-9003fde5.mjs';
import '../../../_chunks/dep-9f459d8b.mjs';
import '../../../_chunks/dep-84fd47b3.mjs';
import '../../../_chunks/dep-b31d8258.mjs';
import '../../../_chunks/dep-26597e10.mjs';
import 'lodash-es';
import '../../../_chunks/dep-00b4e06a.mjs';
import '../../../select/select.mjs';
import '../../../_chunks/dep-0dcc778a.mjs';
import '../../../_chunks/dep-88e5a7b0.mjs';
import '../../../_chunks/dep-fe644854.mjs';
import '../../../common-components/fake-arrow.mjs';
import '../../../_chunks/dep-7673347f.mjs';
import '../../../_chunks/dep-51a43106.mjs';
import '../../../config-provider/hooks/useConfig.mjs';
import '../../../config-provider/utils/context.mjs';
import '../../../_chunks/dep-a4c09318.mjs';
import '../../../_chunks/dep-ffb85102.mjs';
import '../../../_chunks/dep-ad588525.mjs';
import '../../../_chunks/dep-22ebd6af.mjs';
import '../../../_chunks/dep-cdd448ec.mjs';
import '../../../_chunks/dep-97ecacde.mjs';
import '../../../_chunks/dep-d36c4a3f.mjs';
import '../../../select-input/index.mjs';
import '../../../select-input/select-input.mjs';
import '../../../popup/index.mjs';
import '../../../popup/popup.mjs';
import '@popperjs/core';
import '../../../popup/container.mjs';
import '../../../popup/props.mjs';
import './style/css.mjs';
import '../../../select-input/props.mjs';
import '../../../select-input/hooks/index.mjs';
import '../../../select-input/hooks/useMultiple.mjs';
import '../../../tag-input/index.mjs';
import '../../../tag-input/tag-input.mjs';
import 'tdesign-icons-vue-next';
import '../../../input/index.mjs';
import '../../../input/input.mjs';
import '../../../input/props.mjs';
import '../../../input/hooks/index.mjs';
import '../../../input/hooks/useInput.mjs';
import '../../../form/consts/index.mjs';
import '../../../input/hooks/useLengthLimit.mjs';
import '../../../_chunks/dep-6d2705e1.mjs';
import '../../../_chunks/dep-0cde7579.mjs';
import '../../../input/hooks/useInputEventHandler.mjs';
import '../../../input/hooks/useInputWidth.mjs';
import '../../../input/input-group.mjs';
import '../../../input/input-group-props.mjs';
import '../../../tag-input/props.mjs';
import '../../../tag-input/hooks/index.mjs';
import '../../../tag-input/hooks/useDragSorter.mjs';
import '../../../tag-input/hooks/useHover.mjs';
import '../../../tag-input/hooks/useTagScroll.mjs';
import '../../../tag-input/hooks/useTagList.mjs';
import '../../../tag/index.mjs';
import '../../../tag/tag.mjs';
import '../../../tag/props.mjs';
import '../../../tag/check-tag.mjs';
import '../../../tag/check-tag-props.mjs';
import '../../../tag/check-tag-group.mjs';
import '../../../tag/check-tag-group-props.mjs';
import '../../../loading/index.mjs';
import '../../../loading/directive.mjs';
import '../../../loading/plugin.mjs';
import '../../../loading/loading.mjs';
import '../../../loading/icon/gradient.mjs';
import '../../../loading/props.mjs';
import '../../../select-input/hooks/useOverlayInnerStyle.mjs';
import '../../../select-input/hooks/useSingle.mjs';
import '../../../select/components/select-panel.mjs';
import '../../../select/option.mjs';
import '../../../select/option-props.mjs';
import '../../../checkbox/index.mjs';
import '../../../checkbox/checkbox.mjs';
import '../../../checkbox/props.mjs';
import '../../../checkbox/consts/index.mjs';
import '../../../checkbox/hooks/useCheckboxLazyLoad.mjs';
import '../../../checkbox/hooks/useKeyboardEvent.mjs';
import '../../../checkbox/group.mjs';
import '../../../checkbox/checkbox-group-props.mjs';
import '../../../select/utils/index.mjs';
import '../../../select/consts/index.mjs';
import '../../../select/option-group.mjs';
import '../../../select/option-group-props.mjs';
import '../../../select/props.mjs';
import '../../../select/hooks/index.mjs';
import '../../../select/hooks/useKeyboardControl.mjs';
import '../../../select/hooks/usePanelVirtualScroll.mjs';
import '../../../select/hooks/useSelectOptions.mjs';
import '../../../input-number/index.mjs';
import '../../../input-number/input-number.mjs';
import '../../../button/index.mjs';
import '../../../button/button.mjs';
import '../../../button/props.mjs';
import '../../../input-number/props.mjs';
import '../../../input-number/hooks/useInputNumber.mjs';
import '../../../_chunks/dep-29754cb4.mjs';
import '../../../_chunks/dep-db81c302.mjs';

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
//# sourceMappingURL=index.mjs.map
