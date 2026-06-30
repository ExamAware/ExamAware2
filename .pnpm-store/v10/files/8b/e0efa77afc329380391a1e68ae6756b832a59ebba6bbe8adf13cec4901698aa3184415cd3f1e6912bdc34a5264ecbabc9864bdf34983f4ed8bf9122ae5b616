/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { isVNode, defineComponent, ref, computed, createVNode, mergeProps } from 'vue';
import { ChevronRightIcon } from 'tdesign-icons-vue-next';
import '../utils/index.mjs';
import { Checkbox } from '../../checkbox/index.mjs';
import { Loading } from '../../loading/index.mjs';
import { d as useRipple, u as usePrefixClass, i as useGlobalIcon, c as useCommonClassName } from '../../_chunks/dep-7673347f.mjs';
import { getCascaderItemClass, getCascaderItemIconClass } from '../utils/className.mjs';
import { getFullPathLabel } from '../utils/helper.mjs';
import '../utils/effect.mjs';
import '../../_chunks/dep-9003fde5.mjs';
import '../../_chunks/dep-9f459d8b.mjs';
import 'lodash-es';
import '../../_chunks/dep-00b4e06a.mjs';
import '../../_chunks/dep-1dacc319.mjs';
import '../../_chunks/dep-257428bc.mjs';
import '../../checkbox/checkbox.mjs';
import '../../checkbox/props.mjs';
import '../../checkbox/consts/index.mjs';
import '../../checkbox/hooks/useCheckboxLazyLoad.mjs';
import '../../_chunks/dep-22ebd6af.mjs';
import '../../checkbox/hooks/useKeyboardEvent.mjs';
import '../../_chunks/dep-d36c4a3f.mjs';
import '../../_chunks/dep-51a43106.mjs';
import '../../_chunks/dep-fe644854.mjs';
import '../../config-provider/hooks/useConfig.mjs';
import '../../config-provider/utils/context.mjs';
import '../../_chunks/dep-a4c09318.mjs';
import '../../_chunks/dep-ffb85102.mjs';
import '../../_chunks/dep-ad588525.mjs';
import '../../_chunks/dep-cdd448ec.mjs';
import '../../_chunks/dep-97ecacde.mjs';
import '../../_chunks/dep-84fd47b3.mjs';
import '../../checkbox/group.mjs';
import '../../checkbox/checkbox-group-props.mjs';
import './style/css.mjs';
import '../../loading/directive.mjs';
import '../../loading/plugin.mjs';
import '../../loading/loading.mjs';
import '../../loading/icon/gradient.mjs';
import '../../_chunks/dep-0cde7579.mjs';
import '../../_chunks/dep-0dcc778a.mjs';
import '../../loading/props.mjs';

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
//# sourceMappingURL=Item.mjs.map
