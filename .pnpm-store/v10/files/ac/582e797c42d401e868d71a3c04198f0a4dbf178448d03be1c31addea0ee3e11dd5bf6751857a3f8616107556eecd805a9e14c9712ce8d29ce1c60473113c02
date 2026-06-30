/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { createVNode } from 'vue';
import '../utils/adapt.mjs';
import { getTNode } from '../utils/index.mjs';
import { u as usePrefixClass } from '../../_chunks/dep-7673347f.mjs';
import '../../_chunks/dep-51a43106.mjs';
import '../../_chunks/dep-fe644854.mjs';
import 'lodash-es';
import 'tdesign-icons-vue-next';
import '../../checkbox/index.mjs';
import '../../checkbox/checkbox.mjs';
import '../../_chunks/dep-9003fde5.mjs';
import '../../_chunks/dep-9f459d8b.mjs';
import '../../_chunks/dep-1dacc319.mjs';
import '../../_chunks/dep-257428bc.mjs';
import '../../checkbox/props.mjs';
import '../../checkbox/consts/index.mjs';
import '../../checkbox/hooks/useCheckboxLazyLoad.mjs';
import '../../_chunks/dep-22ebd6af.mjs';
import '../../checkbox/hooks/useKeyboardEvent.mjs';
import '../../_chunks/dep-d36c4a3f.mjs';
import '../../_chunks/dep-00b4e06a.mjs';
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
import '../../loading/index.mjs';
import '../../loading/directive.mjs';
import '../../loading/plugin.mjs';
import '../../loading/loading.mjs';
import '../../loading/icon/gradient.mjs';
import '../../_chunks/dep-0cde7579.mjs';
import '../../_chunks/dep-0dcc778a.mjs';
import '../../loading/props.mjs';
import '../../_chunks/dep-07809d3f.mjs';
import '../../_chunks/dep-88e5a7b0.mjs';
import '../../_chunks/dep-6d2705e1.mjs';

function useRenderOperations(state) {
  var componentName = usePrefixClass("tree").value;
  var renderOperations = function renderOperations(h) {
    var node = state.node,
      treeScope = state.treeScope;
    var scopedSlots = treeScope.scopedSlots;
    var treeProps = (treeScope === null || treeScope === void 0 ? void 0 : treeScope.treeProps) || {};
    var operations = treeProps.operations;
    var opNode = null;
    if (scopedSlots !== null && scopedSlots !== void 0 && scopedSlots.operations) {
      opNode = scopedSlots.operations({
        node: node === null || node === void 0 ? void 0 : node.getModel()
      });
    } else {
      opNode = getTNode(operations, {
        createElement: h,
        node: node
      });
    }
    if (opNode) {
      var _opNode = function () {
        return opNode;
      }();
      opNode = createVNode("span", {
        "class": "".concat(componentName, "__operations"),
        "ignore": "active,expand"
      }, [opNode]);
    }
    return opNode;
  };
  return {
    renderOperations: renderOperations
  };
}

export { useRenderOperations as default };
//# sourceMappingURL=useRenderOperations.mjs.map
