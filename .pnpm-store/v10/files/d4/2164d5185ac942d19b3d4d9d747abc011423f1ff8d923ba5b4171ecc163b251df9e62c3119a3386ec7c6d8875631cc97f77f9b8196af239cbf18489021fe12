/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { computed, createVNode, isVNode } from 'vue';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { isBoolean } from 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../../_chunks/dep-fe23be6e.js';
import { u as usePrefixClass } from '../../_chunks/dep-9e6d8a78.js';
import '@babel/runtime/helpers/slicedToArray';
import '../../_chunks/dep-880d05b9.js';
import 'tdesign-icons-vue-next';
import { Checkbox } from '../../checkbox/index.js';
import '../../loading/index.js';
import '@babel/runtime/helpers/asyncToGenerator';
import '@babel/runtime/helpers/classCallCheck';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/regenerator';
import { getTNode } from '../utils/index.js';
import useItemEvents from './useItemEvents.js';
import '../../_chunks/dep-81b01cae.js';
import '../../config-provider/hooks/useConfig.js';
import '../../config-provider/utils/context.js';
import '../../_chunks/dep-938cd955.js';
import 'dayjs';
import '../../checkbox/checkbox.js';
import '../../checkbox/props.js';
import '../../_chunks/dep-2accc95a.js';
import '../../_chunks/dep-16bcfabc.js';
import '../../_chunks/dep-fb805f69.js';
import '../../_chunks/dep-4f8b6591.js';
import '../../_chunks/dep-f7dd3c12.js';
import '../../_chunks/dep-47b13687.js';
import '../../_chunks/dep-d2a6e7a4.js';
import '../../_chunks/dep-2ea19dca.js';
import '../../_chunks/dep-51e5a827.js';
import '../../checkbox/consts/index.js';
import '../../checkbox/hooks/useCheckboxLazyLoad.js';
import '../../_chunks/dep-6264b0a7.js';
import '../../checkbox/hooks/useKeyboardEvent.js';
import '../../_chunks/dep-30c631d1.js';
import '../../checkbox/group.js';
import '../../checkbox/checkbox-group-props.js';
import '../../_chunks/dep-e3ce8c8f.js';
import '../../_chunks/dep-664b8b22.js';
import 'tdesign-vue-next/esm/common/style/web/components/checkbox/_index.less';
import '../../loading/directive.js';
import '../../loading/plugin.js';
import '../../_chunks/dep-ee693784.js';
import '../../loading/icon/gradient.js';
import '../../_chunks/dep-80a99546.js';
import '@babel/runtime/helpers/objectWithoutProperties';
import '../../loading/props.js';
import 'tdesign-vue-next/esm/common/style/web/components/loading/_index.less';

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
//# sourceMappingURL=useRenderLabel.js.map
