/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { TreeItemDefinition, getCreateElement } from './utils/adapt.js';
import useItemState from './hooks/useItemState.js';
import useTreeItem from './hooks/useTreeItem.js';
import { defineComponent, ref } from 'vue';
import 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-fe23be6e.js';
import '../_chunks/dep-81b01cae.js';
import '../_chunks/dep-664b8b22.js';
import '../_chunks/dep-9e6d8a78.js';
import '../config-provider/hooks/useConfig.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/slicedToArray';
import '../_chunks/dep-aa34a263.js';
import '../_chunks/dep-3a7a2ef1.js';
import '../_chunks/dep-880d05b9.js';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '../_chunks/dep-1da4c51c.js';
import '../_chunks/dep-6264b0a7.js';
import '../_chunks/dep-16bcfabc.js';
import '../_chunks/dep-51e5a827.js';
import '../_chunks/dep-90df3fa4.js';
import '../_chunks/dep-80a77612.js';
import 'tdesign-icons-vue-next';
import '../checkbox/index.js';
import '../checkbox/checkbox.js';
import '../checkbox/props.js';
import '../_chunks/dep-2accc95a.js';
import '../_chunks/dep-fb805f69.js';
import '../_chunks/dep-4f8b6591.js';
import '../_chunks/dep-f7dd3c12.js';
import '../_chunks/dep-47b13687.js';
import '../_chunks/dep-d2a6e7a4.js';
import '../_chunks/dep-2ea19dca.js';
import '../checkbox/consts/index.js';
import '../checkbox/hooks/useCheckboxLazyLoad.js';
import '../checkbox/hooks/useKeyboardEvent.js';
import '../_chunks/dep-30c631d1.js';
import '../checkbox/group.js';
import '../checkbox/checkbox-group-props.js';
import '../_chunks/dep-e3ce8c8f.js';
import 'tdesign-vue-next/esm/common/style/web/components/checkbox/_index.less';
import '../loading/index.js';
import '../loading/directive.js';
import '../loading/plugin.js';
import '../_chunks/dep-ee693784.js';
import '../loading/icon/gradient.js';
import '../_chunks/dep-80a99546.js';
import '@babel/runtime/helpers/objectWithoutProperties';
import '../loading/props.js';
import 'tdesign-vue-next/esm/common/style/web/components/loading/_index.less';
import '../_chunks/dep-423bbe8d.js';
import '@babel/runtime/helpers/asyncToGenerator';
import '@babel/runtime/regenerator';
import '../_chunks/dep-8295e674.js';
import './hooks/useItemEvents.js';
import './hooks/useRenderIcon.js';
import './utils/index.js';
import './hooks/useRenderLabel.js';
import './hooks/useRenderLine.js';
import './hooks/useRenderOperations.js';
import './hooks/useDraggable.js';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var treeItemProps = {
  stateId: {
    type: String
  },
  itemKey: {
    type: String
  },
  rowIndex: {
    type: Number
  },
  treeScope: {
    type: Object
  }
};
var TreeItem = defineComponent(_objectSpread(_objectSpread({
  props: treeItemProps
}, TreeItemDefinition), {}, {
  setup: function setup(props, context) {
    var _useItemState = useItemState(props, context),
      state = _useItemState.state;
    var treeItemRef = state.treeItemRef;
    ref();
    var _useTreeItem = useTreeItem(state),
      renderItemNode = _useTreeItem.renderItemNode;
    return {
      treeItemRef: treeItemRef,
      renderItemNode: renderItemNode
    };
  },
  render: function render(h) {
    var createElement = getCreateElement();
    if (typeof this.renderItemNode === "function") {
      return this.renderItemNode(createElement);
    }
    return null;
  }
}));

export { TreeItem as default, treeItemProps };
//# sourceMappingURL=tree-item.js.map
