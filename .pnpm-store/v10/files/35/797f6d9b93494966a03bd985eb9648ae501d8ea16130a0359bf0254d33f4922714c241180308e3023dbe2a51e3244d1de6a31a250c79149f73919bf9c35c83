/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { createVNode } from 'vue';
import 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../../_chunks/dep-fe23be6e.js';
import { u as usePrefixClass } from '../../_chunks/dep-9e6d8a78.js';
import { u as useGlobalIcon } from '../../_chunks/dep-3a7a2ef1.js';
import '@babel/runtime/helpers/slicedToArray';
import '../../_chunks/dep-880d05b9.js';
import '@babel/runtime/helpers/defineProperty';
import { CaretRightSmallIcon } from 'tdesign-icons-vue-next';
import '../../checkbox/index.js';
import { Loading } from '../../loading/index.js';
import '@babel/runtime/helpers/asyncToGenerator';
import '@babel/runtime/helpers/classCallCheck';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/regenerator';
import { getTNode } from '../utils/index.js';
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
import '../../loading/directive.js';
import '../../loading/plugin.js';
import '../../_chunks/dep-ee693784.js';
import '../../loading/icon/gradient.js';
import '../../_chunks/dep-80a99546.js';
import '@babel/runtime/helpers/objectWithoutProperties';
import '../../loading/props.js';

function useRenderIcon(state) {
  var classPrefix = usePrefixClass().value;
  var componentName = usePrefixClass("tree").value;
  var getFolderIcon = function getFolderIcon(h) {
    var _useGlobalIcon = useGlobalIcon({
        CaretRightSmallIcon: CaretRightSmallIcon
      }),
      CaretRightSmallIcon$1 = _useGlobalIcon.CaretRightSmallIcon;
    return createVNode(CaretRightSmallIcon$1, null, null);
  };
  var handleMousedown = function handleMousedown(evt) {
    evt.preventDefault();
  };
  var renderIcon = function renderIcon(h) {
    var node = state.node,
      treeScope = state.treeScope;
    var scopedSlots = treeScope.scopedSlots;
    var treeProps = (treeScope === null || treeScope === void 0 ? void 0 : treeScope.treeProps) || {};
    var icon = treeProps.icon;
    var isDefaultIcon = false;
    var iconNode = null;
    if (icon === true) {
      if (scopedSlots !== null && scopedSlots !== void 0 && scopedSlots.icon) {
        iconNode = scopedSlots.icon({
          node: node === null || node === void 0 ? void 0 : node.getModel()
        });
      } else if (!node.vmIsLeaf) {
        isDefaultIcon = true;
        iconNode = getFolderIcon();
        if (node.loading && node.expanded) {
          iconNode = createVNode(Loading, null, null);
        }
      } else {
        iconNode = "";
      }
    } else if (icon) {
      iconNode = getTNode(icon, {
        createElement: h,
        node: node
      });
    }
    var wrapIconNode = createVNode("span", {
      "class": ["".concat(componentName, "__icon"), "".concat(classPrefix, "-folder-icon"), isDefaultIcon ? "".concat(componentName, "__icon--default") : ""],
      "trigger": "expand",
      "ignore": "active",
      "onmousedown": handleMousedown
    }, [iconNode]);
    return wrapIconNode;
  };
  return {
    renderIcon: renderIcon
  };
}

export { useRenderIcon as default };
//# sourceMappingURL=useRenderIcon.js.map
