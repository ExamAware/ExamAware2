/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { _ as _toConsumableArray } from '../../_chunks/dep-00b4e06a.mjs';
import { pick } from 'lodash-es';
import { T as TreeStore } from '../../_chunks/dep-225a059b.mjs';
import '../utils/adapt.mjs';
import { watch } from 'vue';
import '../../_chunks/dep-9f459d8b.mjs';
import '../../_chunks/dep-84fd47b3.mjs';
import '../../_chunks/dep-1dacc319.mjs';
import '../../_chunks/dep-257428bc.mjs';
import 'mitt';
import '../../_chunks/dep-07809d3f.mjs';
import '../../_chunks/dep-88e5a7b0.mjs';
import '../../_chunks/dep-fe644854.mjs';
import '../../_chunks/dep-6d2705e1.mjs';
import '../../_chunks/dep-97ecacde.mjs';
import '../../_chunks/dep-7673347f.mjs';
import '../../_chunks/dep-51a43106.mjs';
import '../../config-provider/hooks/useConfig.mjs';
import '../../config-provider/utils/context.mjs';
import '../../_chunks/dep-a4c09318.mjs';
import '../../_chunks/dep-ffb85102.mjs';
import '../../_chunks/dep-ad588525.mjs';
import '../../_chunks/dep-9003fde5.mjs';
import '../../_chunks/dep-22ebd6af.mjs';
import '../../_chunks/dep-cdd448ec.mjs';
import '../../_chunks/dep-d36c4a3f.mjs';
import 'tdesign-icons-vue-next';
import '../../checkbox/index.mjs';
import '../../checkbox/checkbox.mjs';
import '../../checkbox/props.mjs';
import '../../checkbox/consts/index.mjs';
import '../../checkbox/hooks/useCheckboxLazyLoad.mjs';
import '../../checkbox/hooks/useKeyboardEvent.mjs';
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
//# sourceMappingURL=useTreeStore.mjs.map
