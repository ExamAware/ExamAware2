/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { _ as _slicedToArray } from '../../_chunks/dep-9003fde5.mjs';
import { _ as _defineProperty } from '../../_chunks/dep-1dacc319.mjs';
import { reactive, computed, toRefs, watch, nextTick } from 'vue';
import { isEqual, isFunction, isString } from 'lodash-es';
import { T as TreeStore } from '../../_chunks/dep-225a059b.mjs';
import { e as useDisabled, j as useVModel, k as useDefaultValue } from '../../_chunks/dep-7673347f.mjs';
import '../utils/index.mjs';
import { treeNodesEffect, treeStoreExpendEffect } from '../utils/effect.mjs';
import { getTreeValue, isValueInvalid, isEmptyValues, getCascaderValue } from '../utils/helper.mjs';
import '../../_chunks/dep-9f459d8b.mjs';
import '../../_chunks/dep-257428bc.mjs';
import '../../_chunks/dep-84fd47b3.mjs';
import 'mitt';
import '../../_chunks/dep-07809d3f.mjs';
import '../../_chunks/dep-88e5a7b0.mjs';
import '../../_chunks/dep-fe644854.mjs';
import '../../_chunks/dep-00b4e06a.mjs';
import '../../_chunks/dep-6d2705e1.mjs';
import '../../_chunks/dep-97ecacde.mjs';
import '../../_chunks/dep-51a43106.mjs';
import '../../config-provider/hooks/useConfig.mjs';
import '../../config-provider/utils/context.mjs';
import '../../_chunks/dep-a4c09318.mjs';
import '../../_chunks/dep-ffb85102.mjs';
import '../../_chunks/dep-ad588525.mjs';
import '../../_chunks/dep-22ebd6af.mjs';
import '../../_chunks/dep-cdd448ec.mjs';
import '../../_chunks/dep-d36c4a3f.mjs';
import '../utils/className.mjs';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var useContext = function useContext(props, setInnerValue, innerPopupVisible, setPopupVisible) {
  var statusContext = reactive({
    treeStore: null,
    inputVal: null,
    scopeVal: void 0,
    treeNodes: [],
    expend: []
  });
  var isParentFilterable = computed(function () {
    return (props.valueMode === "parentFirst" || props.checkStrictly) && statusContext.inputVal;
  });
  return {
    statusContext: statusContext,
    cascaderContext: computed(function () {
      var size = props.size,
        checkStrictly = props.checkStrictly,
        lazy = props.lazy,
        multiple = props.multiple,
        filterable = props.filterable,
        clearable = props.clearable,
        checkProps = props.checkProps,
        max = props.max,
        disabled = props.disabled,
        showAllLevels = props.showAllLevels,
        minCollapsedNum = props.minCollapsedNum,
        valueType = props.valueType,
        modelValue = props.modelValue,
        valueMode = props.valueMode,
        reserveKeyword = props.reserveKeyword;
      return _objectSpread(_objectSpread({
        value: statusContext.scopeVal,
        size: size,
        checkStrictly: checkStrictly,
        lazy: lazy,
        multiple: multiple,
        filterable: filterable,
        clearable: clearable,
        checkProps: checkProps,
        max: max,
        disabled: disabled,
        showAllLevels: showAllLevels,
        minCollapsedNum: minCollapsedNum,
        valueType: valueType,
        valueMode: valueMode,
        reserveKeyword: reserveKeyword,
        visible: innerPopupVisible.value,
        isParentFilterable: isParentFilterable.value
      }, statusContext), {}, {
        setTreeNodes: function setTreeNodes(nodes) {
          statusContext.treeNodes = nodes;
        },
        setValue: function setValue(val, source, node) {
          if (isEqual(val, modelValue)) return;
          setInnerValue(val, {
            source: source,
            node: node
          });
        },
        setVisible: setPopupVisible,
        setInputVal: function setInputVal(val) {
          statusContext.inputVal = val;
        },
        setExpand: function setExpand(val) {
          statusContext.expend = val;
        }
      });
    })
  };
};
var useCascaderContext = function useCascaderContext(props) {
  var disabled = useDisabled();
  var _toRefs = toRefs(props),
    value = _toRefs.value,
    modelValue = _toRefs.modelValue,
    popupVisible = _toRefs.popupVisible;
  var _useVModel = useVModel(value, modelValue, props.defaultValue, props.onChange),
    _useVModel2 = _slicedToArray(_useVModel, 2),
    innerValue = _useVModel2[0],
    setInnerValue = _useVModel2[1];
  var _useDefaultValue = useDefaultValue(popupVisible, false, props.onPopupVisibleChange, "popupVisible"),
    _useDefaultValue2 = _slicedToArray(_useDefaultValue, 2),
    innerPopupVisible = _useDefaultValue2[0],
    setPopupVisible = _useDefaultValue2[1];
  var _useContext = useContext(props, setInnerValue, innerPopupVisible, setPopupVisible),
    cascaderContext = _useContext.cascaderContext,
    statusContext = _useContext.statusContext;
  var isFilterable = computed(function () {
    return Boolean(props.filterable || isFunction(props.filter));
  });
  var updatedTreeNodes = function updatedTreeNodes() {
    var _cascaderContext$valu = cascaderContext.value,
      inputVal = _cascaderContext$valu.inputVal,
      treeStore = _cascaderContext$valu.treeStore,
      setTreeNodes = _cascaderContext$valu.setTreeNodes,
      isParentFilterable = _cascaderContext$valu.isParentFilterable;
    treeNodesEffect(inputVal, treeStore, setTreeNodes, props.filter, isParentFilterable);
  };
  var updateExpand = function updateExpand() {
    var _cascaderContext$valu2 = cascaderContext.value,
      value2 = _cascaderContext$valu2.value,
      treeStore = _cascaderContext$valu2.treeStore;
    var expend = statusContext.expend;
    treeStoreExpendEffect(treeStore, value2, expend);
    treeStore.replaceChecked(getTreeValue(value2));
  };
  watch(function () {
    return props.options;
  }, function () {
    var options = props.options,
      _props$keys = props.keys,
      keys = _props$keys === void 0 ? {} : _props$keys,
      checkStrictly = props.checkStrictly,
      lazy = props.lazy,
      load = props.load,
      valueMode = props.valueMode;
    var treeStore = statusContext.treeStore;
    if (!options.length && !treeStore) return;
    if (!treeStore) {
      var store = new TreeStore({
        keys: _objectSpread(_objectSpread({}, keys), {}, {
          children: isString(keys.children) ? keys.children : "children"
        }),
        checkable: true,
        expandMutex: true,
        expandParent: true,
        lazy: lazy,
        load: load,
        valueMode: valueMode,
        checkStrictly: checkStrictly,
        onLoad: function onLoad() {
          nextTick(function () {
            store.refreshNodes();
            updatedTreeNodes();
          });
        }
      });
      store.append(options);
      statusContext.treeStore = store;
    } else {
      treeStore.reload(options);
      treeStore.refreshNodes();
    }
    updateExpand();
    updatedTreeNodes();
  }, {
    immediate: true,
    deep: true
  });
  watch(function () {
    var checkStrictly = props.checkStrictly,
      lazy = props.lazy,
      load = props.load,
      valueMode = props.valueMode;
    return JSON.stringify({
      valueMode: valueMode,
      checkStrictly: checkStrictly,
      lazy: lazy,
      load: load
    });
  }, function () {
    var treeStore = statusContext.treeStore;
    if (!treeStore) return;
    var checkStrictly = props.checkStrictly,
      lazy = props.lazy,
      load = props.load,
      valueMode = props.valueMode;
    var treeProps = {
      checkStrictly: checkStrictly,
      disabled: disabled,
      load: load,
      lazy: lazy,
      valueMode: valueMode
    };
    treeStore.setConfig(treeProps);
  }, {
    immediate: true
  });
  watch(innerValue, function () {
    var _cascaderContext$valu3 = cascaderContext.value,
      setValue = _cascaderContext$valu3.setValue,
      multiple = _cascaderContext$valu3.multiple,
      valueType = _cascaderContext$valu3.valueType;
    if (isValueInvalid(innerValue.value, cascaderContext.value)) {
      setValue(multiple ? [] : "", "invalid-value");
    }
    if (!isEmptyValues(innerValue.value)) {
      statusContext.scopeVal = getCascaderValue(innerValue.value, valueType, multiple);
    } else {
      statusContext.scopeVal = multiple ? [] : "";
    }
    if (!statusContext.treeStore) return;
    updateExpand();
    updatedTreeNodes();
  }, {
    immediate: true
  });
  watch(function () {
    return innerPopupVisible.value && isFilterable.value;
  }, function (visible) {
    var setInputVal = cascaderContext.value.setInputVal;
    if (visible) {
      setInputVal("");
    }
  });
  watch(function () {
    return statusContext.inputVal;
  }, function () {
    updatedTreeNodes();
  });
  var getCascaderItems = function getCascaderItems(arrValue) {
    var options = [];
    arrValue.forEach(function (value2) {
      var _statusContext$treeSt;
      var nodes = (_statusContext$treeSt = statusContext.treeStore) === null || _statusContext$treeSt === void 0 ? void 0 : _statusContext$treeSt.getNodes(value2);
      nodes && nodes[0] && options.push(nodes[0].data);
    });
    return options;
  };
  return {
    cascaderContext: cascaderContext,
    isFilterable: isFilterable,
    innerValue: innerValue,
    getCascaderItems: getCascaderItems
  };
};

export { useCascaderContext, useContext };
//# sourceMappingURL=index.mjs.map
