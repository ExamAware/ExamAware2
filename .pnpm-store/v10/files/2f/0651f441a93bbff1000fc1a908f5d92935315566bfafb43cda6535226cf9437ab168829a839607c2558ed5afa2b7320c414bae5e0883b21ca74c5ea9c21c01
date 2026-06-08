/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, ref, computed, createVNode, mergeProps, isVNode } from 'vue';
import { ChevronRightIcon } from 'tdesign-icons-vue-next';
import { getCascaderItemClass, getCascaderItemIconClass } from '../utils/className.js';
import '@babel/runtime/helpers/slicedToArray';
import 'lodash-es';
import { getFullPathLabel } from '../utils/helper.js';
import { Checkbox } from '../../checkbox/index.js';
import { Loading } from '../../loading/index.js';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../../_chunks/dep-fe23be6e.js';
import { u as useCommonClassName } from '../../_chunks/dep-4f8b6591.js';
import { u as usePrefixClass } from '../../_chunks/dep-9e6d8a78.js';
import { u as useGlobalIcon } from '../../_chunks/dep-3a7a2ef1.js';
import '../../_chunks/dep-880d05b9.js';
import { u as useRipple } from '../../_chunks/dep-d2a6e7a4.js';
import '@babel/runtime/helpers/defineProperty';
import '../../checkbox/checkbox.js';
import '../../checkbox/props.js';
import '../../_chunks/dep-2accc95a.js';
import '../../_chunks/dep-16bcfabc.js';
import '../../_chunks/dep-fb805f69.js';
import '../../_chunks/dep-f7dd3c12.js';
import '../../_chunks/dep-47b13687.js';
import '../../_chunks/dep-51e5a827.js';
import '../../checkbox/consts/index.js';
import '../../checkbox/hooks/useCheckboxLazyLoad.js';
import '../../_chunks/dep-6264b0a7.js';
import '../../checkbox/hooks/useKeyboardEvent.js';
import '../../_chunks/dep-30c631d1.js';
import '../../_chunks/dep-81b01cae.js';
import '../../config-provider/hooks/useConfig.js';
import '../../config-provider/utils/context.js';
import '../../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '../../_chunks/dep-2ea19dca.js';
import '../../checkbox/group.js';
import '../../checkbox/checkbox-group-props.js';
import '../../_chunks/dep-e3ce8c8f.js';
import '../../_chunks/dep-664b8b22.js';
import '../../loading/directive.js';
import '../../loading/plugin.js';
import '../../_chunks/dep-ee693784.js';
import '../../loading/icon/gradient.js';
import '../../_chunks/dep-80a99546.js';
import '@babel/runtime/helpers/objectWithoutProperties';
import '../../loading/props.js';

function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !isVNode(s);
}
var props = {
  node: {
    type: Object,
    "default": function _default() {
      return {};
    }
  },
  optionChild: {
    type: [Object, Array]
  },
  cascaderContext: {
    type: Object
  },
  onChange: Function,
  onClick: Function,
  onMouseenter: Function
};
var Item = defineComponent({
  name: "TCascaderItem",
  props: props,
  setup: function setup(props2) {
    var liRef = ref();
    useRipple(liRef);
    var COMPONENT_NAME = usePrefixClass("cascader__item");
    var classPrefix = usePrefixClass();
    var _useGlobalIcon = useGlobalIcon({
        ChevronRightIcon: ChevronRightIcon
      }),
      ChevronRightIcon$1 = _useGlobalIcon.ChevronRightIcon;
    var _useCommonClassName = useCommonClassName(),
      STATUS = _useCommonClassName.STATUS,
      SIZE = _useCommonClassName.SIZE;
    var itemClass = computed(function () {
      return getCascaderItemClass(classPrefix.value, props2.node, SIZE.value, STATUS.value, props2.cascaderContext);
    });
    var iconClass = computed(function () {
      return getCascaderItemIconClass(classPrefix.value, props2.node, STATUS.value, props2.cascaderContext);
    });
    function RenderLabelInner(node, cascaderContext) {
      var inputVal = cascaderContext.inputVal;
      var labelText = inputVal ? getFullPathLabel(node) : node.label;
      if (inputVal) {
        var texts = labelText.split(inputVal);
        var doms = [];
        for (var index = 0; index < texts.length; index++) {
          doms.push(createVNode("span", {
            "key": index
          }, [texts[index]]));
          if (index === texts.length - 1) break;
          doms.push(createVNode("span", {
            "key": "".concat(index, "filter"),
            "class": "".concat(COMPONENT_NAME.value, "-label--filter")
          }, [inputVal]));
        }
        return doms;
      }
      return labelText;
    }
    var renderTitle = function renderTitle(node) {
      if (typeof node.label === "string") return node.label;
      return null;
    };
    function RenderLabelContent(node, cascaderContext) {
      var label = RenderLabelInner(node, cascaderContext);
      var labelCont = createVNode("span", {
        "title": cascaderContext.inputVal ? getFullPathLabel(node) : renderTitle(node),
        "class": ["".concat(COMPONENT_NAME.value, "-label"), "".concat(COMPONENT_NAME.value, "-label--ellipsis")],
        "role": "label"
      }, [label]);
      return labelCont;
    }
    function RenderCheckBox(node, cascaderContext) {
      var checkProps = cascaderContext.checkProps,
        value = cascaderContext.value,
        max = cascaderContext.max,
        inputVal = cascaderContext.inputVal;
      var label = RenderLabelInner(node, cascaderContext);
      return createVNode(Checkbox, mergeProps({
        "checked": node.checked,
        "indeterminate": node.indeterminate,
        "disabled": node.isDisabled() || value.length >= max && max !== 0,
        "name": String(node.value),
        "stopLabelTrigger": !!node.children && !props2.cascaderContext.isParentFilterable,
        "title": inputVal ? getFullPathLabel(node) : renderTitle(node),
        "onChange": function onChange() {
          props2.onChange();
        }
      }, checkProps), _isSlot(label) ? label : {
        "default": function _default() {
          return [label];
        }
      });
    }
    return function () {
      var cascaderContext = props2.cascaderContext,
        node = props2.node,
        optionChild = props2.optionChild;
      return createVNode("li", {
        "ref": liRef,
        "class": itemClass.value,
        "onClick": props2.onClick,
        "onMouseenter": props2.onMouseenter
      }, [optionChild || (cascaderContext.multiple ? RenderCheckBox(node, cascaderContext) : RenderLabelContent(node, cascaderContext)), node.children && !props2.cascaderContext.isParentFilterable && (node.loading ? createVNode(Loading, {
        "class": iconClass.value,
        "size": "small"
      }, null) : createVNode(ChevronRightIcon$1, {
        "class": iconClass.value
      }, null))]);
    };
  }
});

export { Item as default };
//# sourceMappingURL=Item.js.map
