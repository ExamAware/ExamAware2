/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import _toConsumableArray from '@babel/runtime/helpers/toConsumableArray';
import { pick } from 'lodash-es';
import { T as TreeStore } from '../../_chunks/dep-258d1362.js';
import { watch } from 'vue';
import '@babel/runtime/helpers/typeof';
import '../../_chunks/dep-fe23be6e.js';
import '../../config-provider/hooks/useConfig.js';
import '@babel/runtime/helpers/slicedToArray';
import '../../_chunks/dep-880d05b9.js';
import '@babel/runtime/helpers/defineProperty';
import 'tdesign-icons-vue-next';
import '../../checkbox/index.js';
import '../../loading/index.js';
import '@babel/runtime/helpers/asyncToGenerator';
import '@babel/runtime/helpers/classCallCheck';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/regenerator';
import 'mitt';
import '../../_chunks/dep-423bbe8d.js';
import '../../_chunks/dep-8295e674.js';
import '../../_chunks/dep-81b01cae.js';
import '../../config-provider/utils/context.js';
import '../../_chunks/dep-938cd955.js';
import 'dayjs';
import '../../checkbox/checkbox.js';
import '../../checkbox/props.js';
import '../../_chunks/dep-2accc95a.js';
import '../../_chunks/dep-16bcfabc.js';
import '../../_chunks/dep-fb805f69.js';
import '../../_chunks/dep-4f8b6591.js';
import '../../_chunks/dep-9e6d8a78.js';
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

function useTreeStore(state) {
  var props = state.props,
    context = state.context,
    refProps = state.refProps;
  var valueMode = props.valueMode,
    filter = props.filter,
    keys = props.keys;
  var store = new TreeStore({
    valueMode: valueMode,
    filter: filter
  });
  var tValue = state.vmValue[0];
  var tActived = state.vmActived[0];
  var tExpanded = state.vmExpanded[0];
  var updateStoreConfig = function updateStoreConfig() {
    var storeProps = pick(props, ["expandAll", "expandLevel", "expandMutex", "expandParent", "activable", "activeMultiple", "disabled", "disableCheck", "checkable", "draggable", "checkStrictly", "load", "lazy", "valueMode", "filter", "allowFoldNodeOnFilter"]);
    store.setConfig(storeProps);
  };
  var updateExpanded = function updateExpanded() {
    var expandParent = props.expandParent;
    if (!Array.isArray(tExpanded.value)) return;
    var expandedMap = /* @__PURE__ */new Map();
    tExpanded.value.forEach(function (val) {
      expandedMap.set(val, true);
      if (expandParent) {
        var node = store.getNode(val);
        if (node) {
          node.getModel().getParents().forEach(function (tn) {
            expandedMap.set(tn.value, true);
          });
        }
      }
    });
    var expandedArr = Array.from(expandedMap.keys());
    store.setExpanded(expandedArr);
  };
  var filterChanged = false;
  var prevExpanded = null;
  var expandFilterPath = function expandFilterPath() {
    if (!props.allowFoldNodeOnFilter) return;
    if (!filterChanged) return;
    filterChanged = false;
    if (props.filter) {
      if (!prevExpanded) {
        prevExpanded = store.getExpanded();
      }
      var pathValues = [];
      var allNodes = store.getNodes();
      allNodes.forEach(function (node) {
        if (node.vmIsLocked) {
          pathValues.push(node.value);
        }
      });
      store.setExpanded(pathValues);
    } else if (prevExpanded) {
      store.replaceExpanded(prevExpanded);
      prevExpanded = null;
    }
  };
  var checkFilterExpand = function checkFilterExpand(newFilter, previousFilter) {
    if (!props.allowFoldNodeOnFilter) return;
    filterChanged = newFilter !== previousFilter;
  };
  var handleLoad = function handleLoad(info) {
    var node = info.node;
    var evtCtx = {
      node: node.getModel()
    };
    if (Array.isArray(tValue.value) && tValue.value.length > 0) {
      store.replaceChecked(tValue.value);
    }
    if (Array.isArray(tExpanded.value) && tExpanded.value.length > 0) {
      store.replaceExpanded(tExpanded.value);
    }
    if (Array.isArray(tActived.value) && tActived.value.length > 0) {
      store.replaceActived(tActived.value);
    }
    if (props !== null && props !== void 0 && props.onLoad) {
      props === null || props === void 0 || props.onLoad(evtCtx);
    }
    context.emit("load", evtCtx);
  };
  var rebuild = function rebuild(list) {
    store.reload(list || []);
    store.refreshNodes();
    if (Array.isArray(tValue.value)) {
      store.setChecked(tValue.value);
    }
    updateExpanded();
    if (Array.isArray(tActived.value)) {
      store.setActived(tActived.value);
    }
    store.refreshState();
  };
  function initStore() {
    store.setConfig({
      keys: keys
    });
    updateStoreConfig();
    store.append(props.data || []);
    store.refreshNodes();
    if (Array.isArray(tValue.value)) {
      store.setChecked(tValue.value);
    }
    updateExpanded();
    if (Array.isArray(tActived.value)) {
      store.setActived(tActived.value);
    }
    store.emitter.on("load", handleLoad);
    store.emitter.on("update", expandFilterPath);
  }
  initStore();
  state.setStore(store);
  watch(function () {
    return _toConsumableArray(tValue.value || []);
  }, function (nVal) {
    store.replaceChecked(nVal);
  });
  watch(function () {
    return _toConsumableArray(tExpanded.value || []);
  }, function (nVal) {
    store.replaceExpanded(nVal);
  });
  watch(function () {
    return _toConsumableArray(tActived.value || []);
  }, function (nVal) {
    store.replaceActived(nVal);
  });
  watch(refProps.filter, function (nVal, previousVal) {
    checkFilterExpand(nVal, previousVal);
  });
  watch(refProps.keys, function (keys2) {
    store.setConfig({
      keys: keys2
    });
  });
  watch(refProps.expandAll, function (nVal) {
    if (nVal) {
      var valueList = store.getNodes().filter(function (node) {
        return Array.isArray(node.children) && node.children.length;
      }).map(function (node) {
        return node.value;
      });
      store.setExpanded(valueList);
    } else {
      store.replaceExpanded(prevExpanded);
      prevExpanded = null;
    }
  });
  return {
    store: store,
    rebuild: rebuild,
    checkFilterExpand: checkFilterExpand,
    updateStoreConfig: updateStoreConfig,
    updateExpanded: updateExpanded,
    expandFilterPath: expandFilterPath
  };
}

export { useTreeStore as default };
//# sourceMappingURL=useTreeStore.js.map
