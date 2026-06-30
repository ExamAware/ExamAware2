/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { isVNode, computed, createVNode } from 'vue';
import { _ as _defineProperty } from '../../_chunks/dep-1dacc319.mjs';
import { isBoolean } from 'lodash-es';
import '../utils/adapt.mjs';
import { getTNode } from '../utils/index.mjs';
import useItemEvents from './useItemEvents.mjs';
import { u as usePrefixClass } from '../../_chunks/dep-7673347f.mjs';
import { Checkbox } from '../../checkbox/index.mjs';
import '../../_chunks/dep-257428bc.mjs';
import '../../_chunks/dep-51a43106.mjs';
import '../../_chunks/dep-fe644854.mjs';
import 'tdesign-icons-vue-next';
import '../../loading/index.mjs';
import '../../loading/directive.mjs';
import '../../loading/plugin.mjs';
import '../../loading/loading.mjs';
import '../../_chunks/dep-9003fde5.mjs';
import '../../_chunks/dep-9f459d8b.mjs';
import '../../loading/icon/gradient.mjs';
import '../../_chunks/dep-0cde7579.mjs';
import '../../_chunks/dep-00b4e06a.mjs';
import '../../_chunks/dep-0dcc778a.mjs';
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
import '../../loading/props.mjs';
import './style/css.mjs';
import '../../_chunks/dep-07809d3f.mjs';
import '../../_chunks/dep-88e5a7b0.mjs';
import '../../_chunks/dep-6d2705e1.mjs';
import '../../checkbox/checkbox.mjs';
import '../../checkbox/props.mjs';
import '../../checkbox/consts/index.mjs';
import '../../checkbox/hooks/useCheckboxLazyLoad.mjs';
import '../../checkbox/hooks/useKeyboardEvent.mjs';
import '../../checkbox/group.mjs';
import '../../checkbox/checkbox-group-props.mjs';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !isVNode(s);
}
function useRenderLabel(state) {
  var classPrefix = usePrefixClass().value;
  var componentName = usePrefixClass("tree").value;
  var _useItemEvents = useItemEvents(state),
    handleChange = _useItemEvents.handleChange;
  var renderLabel = function renderLabel(h) {
    var node = state.node,
      treeScope = state.treeScope;
    var scopedSlots = treeScope.scopedSlots,
      _treeScope$treeProps = treeScope.treeProps,
      treeProps = _treeScope$treeProps === void 0 ? {} : _treeScope$treeProps;
    var label = treeProps.label,
      expandOnClickNode = treeProps.expandOnClickNode;
    var checkProps = (treeProps === null || treeProps === void 0 ? void 0 : treeProps.checkProps) || {};
    var labelNode = null;
    if (label === true) {
      if (scopedSlots !== null && scopedSlots !== void 0 && scopedSlots.label) {
        labelNode = scopedSlots.label({
          node: node === null || node === void 0 ? void 0 : node.getModel()
        });
      } else {
        labelNode = node.label || "";
      }
    } else {
      labelNode = getTNode(label, {
        createElement: h,
        node: node
      });
    }
    var labelClasses = ["".concat(componentName, "__label"), _defineProperty({}, "".concat(classPrefix, "-is-active"), node.isActivable() ? node.actived : false)];
    var shouldStopLabelTrigger = computed(function () {
      var _node$children;
      var isNormalBranchNode = Array.isArray(node.children) && ((_node$children = node.children) === null || _node$children === void 0 ? void 0 : _node$children.length) > 0;
      var isLazyLoadChildBranchNode = isBoolean(node.children) && node.children;
      var isBranchNode = isNormalBranchNode || isLazyLoadChildBranchNode;
      return expandOnClickNode && isBranchNode;
    });
    if (node.vmCheckable) {
      var checkboxDisabled = false;
      if (node.vmIsLocked && !node.vmIsRest) {
        checkboxDisabled = true;
      }
      if (node.isDisabled()) {
        checkboxDisabled = true;
      }
      var itemCheckProps = _objectSpread(_objectSpread({}, checkProps), {}, {
        disabled: checkboxDisabled
      });
      var _labelNode = function () {
        return labelNode;
      }();
      labelNode = createVNode(Checkbox, {
        "class": labelClasses,
        "checked": node.checked,
        "indeterminate": node.indeterminate,
        "disabled": checkboxDisabled,
        "name": String(node.value),
        "onChange": handleChange,
        "stopLabelTrigger": shouldStopLabelTrigger.value,
        "ignore": treeProps.expandOnClickNode ? "active" : "expand,active",
        "props": itemCheckProps,
        "title": node.label
      }, _isSlot(labelNode) ? labelNode : {
        "default": function _default() {
          return [_labelNode];
        }
      });
    } else {
      var inner = createVNode("span", {
        "style": "position: relative"
      }, [labelNode]);
      labelNode = node.isActivable() ? createVNode("span", {
        "key": "1",
        "ref": "label",
        "class": labelClasses,
        "title": node.label
      }, [inner]) : createVNode("span", {
        "key": "2",
        "class": labelClasses,
        "title": node.label
      }, [inner]);
    }
    return labelNode;
  };
  return {
    renderLabel: renderLabel
  };
}

export { useRenderLabel as default };
//# sourceMappingURL=useRenderLabel.mjs.map
