/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, createVNode, mergeProps } from 'vue';
import { _ as _typeof } from '../../_chunks/dep-257428bc.mjs';
import { SearchIcon } from 'tdesign-icons-vue-next';
import { Input } from '../../input/index.mjs';
import { u as usePrefixClass, i as useGlobalIcon, o as useEventForward } from '../../_chunks/dep-7673347f.mjs';
import '../../input/input.mjs';
import '../../_chunks/dep-0dcc778a.mjs';
import '../../_chunks/dep-1dacc319.mjs';
import '../../input/props.mjs';
import '../../input/hooks/index.mjs';
import '../../input/hooks/useInput.mjs';
import '../../_chunks/dep-9003fde5.mjs';
import '../../_chunks/dep-9f459d8b.mjs';
import '../../form/consts/index.mjs';
import 'lodash-es';
import '../../_chunks/dep-00b4e06a.mjs';
import '../../_chunks/dep-51a43106.mjs';
import '../../_chunks/dep-fe644854.mjs';
import '../../config-provider/hooks/useConfig.mjs';
import '../../config-provider/utils/context.mjs';
import '../../_chunks/dep-a4c09318.mjs';
import '../../_chunks/dep-ffb85102.mjs';
import '../../_chunks/dep-ad588525.mjs';
import '../../_chunks/dep-22ebd6af.mjs';
import '../../_chunks/dep-cdd448ec.mjs';
import '../../_chunks/dep-97ecacde.mjs';
import '../../_chunks/dep-84fd47b3.mjs';
import '../../_chunks/dep-d36c4a3f.mjs';
import '../../input/hooks/useLengthLimit.mjs';
import '../../_chunks/dep-6d2705e1.mjs';
import '../../_chunks/dep-0cde7579.mjs';
import '../../input/hooks/useInputEventHandler.mjs';
import '../../input/hooks/useInputWidth.mjs';
import '../../input/input-group.mjs';
import '../../input/input-group-props.mjs';
import './style/css.mjs';

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
//# sourceMappingURL=transfer-search.mjs.map
