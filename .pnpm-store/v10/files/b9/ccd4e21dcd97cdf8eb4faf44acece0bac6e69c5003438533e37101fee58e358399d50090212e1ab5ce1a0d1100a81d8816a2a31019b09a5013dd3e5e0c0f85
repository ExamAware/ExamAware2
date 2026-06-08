/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, createVNode, mergeProps } from 'vue';
import _typeof from '@babel/runtime/helpers/typeof';
import { SearchIcon } from 'tdesign-icons-vue-next';
import { Input } from '../../input/index.js';
import 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '../../_chunks/dep-fe23be6e.js';
import { u as usePrefixClass } from '../../_chunks/dep-9e6d8a78.js';
import { u as useGlobalIcon } from '../../_chunks/dep-3a7a2ef1.js';
import '@babel/runtime/helpers/slicedToArray';
import '../../_chunks/dep-880d05b9.js';
import '@babel/runtime/helpers/defineProperty';
import { u as useEventForward } from '../../_chunks/dep-4d7b9152.js';
import '../../input/input.js';
import '@babel/runtime/helpers/objectWithoutProperties';
import '../../input/props.js';
import '../../_chunks/dep-2accc95a.js';
import '../../_chunks/dep-16bcfabc.js';
import '../../_chunks/dep-fb805f69.js';
import '../../_chunks/dep-4f8b6591.js';
import '../../config-provider/hooks/useConfig.js';
import '../../config-provider/utils/context.js';
import '../../_chunks/dep-938cd955.js';
import '../../_chunks/dep-81b01cae.js';
import 'dayjs';
import '../../_chunks/dep-f7dd3c12.js';
import '../../_chunks/dep-47b13687.js';
import '../../input/hooks/useInput.js';
import '../../form/consts/index.js';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '../../_chunks/dep-51e5a827.js';
import '../../input/hooks/useLengthLimit.js';
import '../../_chunks/dep-8295e674.js';
import '../../_chunks/dep-80a99546.js';
import '../../input/hooks/useInputEventHandler.js';
import '../../input/hooks/useInputWidth.js';
import '../../_chunks/dep-80a77612.js';
import '../../input/input-group.js';
import '../../input/input-group-props.js';
import '../../_chunks/dep-664b8b22.js';

var Search = defineComponent({
  name: "TTransferSearch",
  props: {
    value: {
      type: String,
      "default": ""
    },
    search: {
      type: [Boolean, Object],
      "default": false
    },
    placeholder: {
      type: String,
      "default": ""
    },
    onChange: Function
  },
  setup: function setup(props) {
    var classPrefix = usePrefixClass();
    var _useGlobalIcon = useGlobalIcon({
        SearchIcon: SearchIcon
      }),
      SearchIcon$1 = _useGlobalIcon.SearchIcon;
    var handleChange = function handleChange(value, changeCtx) {
      var _props$onChange;
      var e = changeCtx.e,
        trigger = changeCtx.trigger;
      (_props$onChange = props.onChange) === null || _props$onChange === void 0 || _props$onChange.call(props, {
        value: value,
        e: e,
        trigger: trigger
      });
    };
    var inputProps = _typeof(props.search) === "object" ? props.search : {
      clearable: true
    };
    var inputEvents = useEventForward(inputProps, {
      onChange: handleChange
    });
    return function () {
      return createVNode("div", {
        "class": "".concat(classPrefix.value, "-transfer__search-wrapper")
      }, [createVNode(Input, mergeProps({
        "defaultValue": props.value,
        "placeholder": props.placeholder
      }, inputEvents.value), {
        "default": function _default() {
          return [createVNode(SearchIcon$1, {
            "slot": "suffix-icon"
          }, null)];
        }
      })]);
    };
  }
});

export { Search as default };
//# sourceMappingURL=transfer-search.js.map
