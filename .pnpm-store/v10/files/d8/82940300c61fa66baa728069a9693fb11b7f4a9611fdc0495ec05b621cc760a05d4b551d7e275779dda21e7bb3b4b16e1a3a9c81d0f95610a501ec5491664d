/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { _ as _defineProperty } from '../_chunks/dep-1dacc319.mjs';
import { TreeItemDefinition, useRipple, getCreateElement } from './utils/adapt.mjs';
import useItemState from './hooks/useItemState.mjs';
import useTreeItem from './hooks/useTreeItem.mjs';
import { defineComponent, ref } from 'vue';
import '../_chunks/dep-257428bc.mjs';
import '../_chunks/dep-7673347f.mjs';
import 'lodash-es';
import '../_chunks/dep-00b4e06a.mjs';
import '../_chunks/dep-9f459d8b.mjs';
import '../_chunks/dep-51a43106.mjs';
import '../_chunks/dep-fe644854.mjs';
import '../config-provider/hooks/useConfig.mjs';
import '../config-provider/utils/context.mjs';
import '../_chunks/dep-a4c09318.mjs';
import '../_chunks/dep-ffb85102.mjs';
import '../_chunks/dep-ad588525.mjs';
import '../_chunks/dep-9003fde5.mjs';
import '../_chunks/dep-22ebd6af.mjs';
import '../_chunks/dep-cdd448ec.mjs';
import '../_chunks/dep-97ecacde.mjs';
import '../_chunks/dep-84fd47b3.mjs';
import '../_chunks/dep-d36c4a3f.mjs';
import 'tdesign-icons-vue-next';
import '../checkbox/index.mjs';
import '../checkbox/checkbox.mjs';
import '../checkbox/props.mjs';
import '../checkbox/consts/index.mjs';
import '../checkbox/hooks/useCheckboxLazyLoad.mjs';
import '../checkbox/hooks/useKeyboardEvent.mjs';
import '../checkbox/group.mjs';
import '../checkbox/checkbox-group-props.mjs';
import './style/css.mjs';
import '../loading/index.mjs';
import '../loading/directive.mjs';
import '../loading/plugin.mjs';
import '../loading/loading.mjs';
import '../loading/icon/gradient.mjs';
import '../_chunks/dep-0cde7579.mjs';
import '../_chunks/dep-0dcc778a.mjs';
import '../loading/props.mjs';
import '../_chunks/dep-07809d3f.mjs';
import '../_chunks/dep-88e5a7b0.mjs';
import '../_chunks/dep-6d2705e1.mjs';
import './hooks/useItemEvents.mjs';
import './hooks/useRenderIcon.mjs';
import './utils/index.mjs';
import './hooks/useRenderLabel.mjs';
import './hooks/useRenderLine.mjs';
import './hooks/useRenderOperations.mjs';
import './hooks/useDraggable.mjs';

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
    var label = ref();
    useRipple(label);
    var _useTreeItem = useTreeItem(state),
      renderItemNode = _useTreeItem.renderItemNode;
    return {
      treeItemRef: treeItemRef,
      renderItemNode: renderItemNode
    };
  },
  render: function render(h) {
    var createElement = getCreateElement(h);
    if (typeof this.renderItemNode === "function") {
      return this.renderItemNode(createElement);
    }
    return null;
  }
}));

export { TreeItem as default, treeItemProps };
//# sourceMappingURL=tree-item.mjs.map
