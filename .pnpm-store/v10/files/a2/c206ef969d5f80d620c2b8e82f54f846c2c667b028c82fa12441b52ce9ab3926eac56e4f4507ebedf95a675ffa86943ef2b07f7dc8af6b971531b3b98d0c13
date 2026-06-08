/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../../_chunks/dep-953a77eb.js');
var index = require('../../_chunks/dep-ecaaae91.js');
require('@babel/runtime/helpers/slicedToArray');
require('../../_chunks/dep-cc66acf1.js');
require('tdesign-icons-vue-next');
var checkbox_index = require('../../checkbox/index.js');
require('../../loading/index.js');
require('@babel/runtime/helpers/asyncToGenerator');
require('@babel/runtime/helpers/classCallCheck');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/regenerator');
var tree_utils_index = require('../utils/index.js');
var tree_hooks_useItemEvents = require('./useItemEvents.js');
var isBoolean = require('../../_chunks/dep-d45110a6.js');
require('../../_chunks/dep-8abdfb41.js');
require('../../config-provider/hooks/useConfig.js');
require('../../_chunks/dep-5d7e2375.js');
require('../../_chunks/dep-94a7dc2d.js');
require('dayjs');
require('../../_chunks/dep-92e23f17.js');
require('../../_chunks/dep-0ff616fe.js');
require('../../_chunks/dep-5f52cd42.js');
require('../../_chunks/dep-48f60c78.js');
require('../../_chunks/dep-b3b464e8.js');
require('../../_chunks/dep-0813861e.js');
require('../../_chunks/dep-f57bcb19.js');
require('../../_chunks/dep-dc4bbc14.js');
require('../../_chunks/dep-05f89f0d.js');
require('../../_chunks/dep-87589faa.js');
require('../../_chunks/dep-e27ea667.js');
require('../../_chunks/dep-165ca38a.js');
require('../../_chunks/dep-32412d92.js');
require('../../_chunks/dep-a8a3d718.js');
require('../../_chunks/dep-54e566d9.js');
require('../../_chunks/dep-591a72de.js');
require('../../_chunks/dep-a55e8a08.js');
require('../../_chunks/dep-8adeee89.js');
require('../../_chunks/dep-4d2ef282.js');
require('../../_chunks/dep-929933ce.js');
require('../../_chunks/dep-6b1f0ef8.js');
require('../../checkbox/checkbox.js');
require('../../checkbox/props.js');
require('../../_chunks/dep-47c460dd.js');
require('../../_chunks/dep-06276759.js');
require('../../_chunks/dep-4fa46641.js');
require('../../_chunks/dep-422dd97f.js');
require('../../_chunks/dep-71fa6bfc.js');
require('../../_chunks/dep-80a478d7.js');
require('../../_chunks/dep-427dabac.js');
require('../../_chunks/dep-72c4cc44.js');
require('../../_chunks/dep-ee355a9a.js');
require('../../_chunks/dep-23f77e26.js');
require('../../_chunks/dep-8382953f.js');
require('../../_chunks/dep-874d2900.js');
require('../../_chunks/dep-bc848944.js');
require('../../_chunks/dep-0b6215b5.js');
require('../../_chunks/dep-c3dee00a.js');
require('../../_chunks/dep-e8ff2c13.js');
require('../../checkbox/consts/index.js');
require('../../checkbox/hooks/useCheckboxLazyLoad.js');
require('../../_chunks/dep-fb83a452.js');
require('../../checkbox/hooks/useKeyboardEvent.js');
require('../../_chunks/dep-6280a7f6.js');
require('../../checkbox/group.js');
require('../../checkbox/checkbox-group-props.js');
require('../../_chunks/dep-3565d523.js');
require('../../_chunks/dep-a58d79da.js');
require('../../_chunks/dep-8b33876c.js');
require('../../_chunks/dep-445924d5.js');
require('../../_chunks/dep-fd5a369e.js');
require('../../_chunks/dep-d62a674d.js');
require('../../_chunks/dep-95261778.js');
require('../../loading/plugin.js');
require('../../_chunks/dep-237ed01f.js');
require('../../loading/icon/gradient.js');
require('../../_chunks/dep-55c70201.js');
require('@babel/runtime/helpers/objectWithoutProperties');
require('../../_chunks/dep-4ccaead1.js');
require('../../_chunks/dep-990979bb.js');
require('../../loading/props.js');
require('../../_chunks/dep-9cc695aa.js');
require('../../_chunks/dep-48de95ee.js');
require('../../_chunks/dep-912c9727.js');
require('../../_chunks/dep-0b8a4740.js');
require('../../_chunks/dep-cd8cfdc0.js');
require('../../_chunks/dep-ac11336c.js');
require('../../_chunks/dep-9ce6873a.js');
require('../../_chunks/dep-779f6290.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !Vue.isVNode(s);
}
function useRenderLabel(state) {
  var classPrefix = index.usePrefixClass().value;
  var componentName = index.usePrefixClass("tree").value;
  var _useItemEvents = tree_hooks_useItemEvents["default"](state),
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
      labelNode = tree_utils_index.getTNode(label, {
        createElement: h,
        node: node
      });
    }
    var labelClasses = ["".concat(componentName, "__label"), _defineProperty__default["default"]({}, "".concat(classPrefix, "-is-active"), node.isActivable() ? node.actived : false)];
    var shouldStopLabelTrigger = Vue.computed(function () {
      var _node$children;
      var isNormalBranchNode = Array.isArray(node.children) && ((_node$children = node.children) === null || _node$children === void 0 ? void 0 : _node$children.length) > 0;
      var isLazyLoadChildBranchNode = isBoolean.isBoolean(node.children) && node.children;
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
      labelNode = Vue.createVNode(checkbox_index.Checkbox, {
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
      var inner = Vue.createVNode("span", {
        "style": "position: relative"
      }, [labelNode]);
      labelNode = node.isActivable() ? Vue.createVNode("span", {
        "key": "1",
        "ref": "label",
        "class": labelClasses,
        "title": node.label
      }, [inner]) : Vue.createVNode("span", {
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

exports["default"] = useRenderLabel;
//# sourceMappingURL=useRenderLabel.js.map
