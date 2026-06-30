/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var Vue = require('vue');
var treeStore = require('../../_chunks/dep-ba34f9a7.js');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../../_chunks/dep-953a77eb.js');
require('../../config-provider/hooks/useConfig.js');
var index$2 = require('../../_chunks/dep-f20044b8.js');
var index = require('../../_chunks/dep-874d2900.js');
require('../../_chunks/dep-cc66acf1.js');
var index$1 = require('../../_chunks/dep-e8ff2c13.js');
var cascader_utils_effect = require('../utils/effect.js');
var cascader_utils_helper = require('../utils/helper.js');
var isFunction = require('../../_chunks/dep-48f60c78.js');
var isString = require('../../_chunks/dep-a55e8a08.js');
var isEqual = require('../../_chunks/dep-9cc695aa.js');
require('@babel/runtime/helpers/classCallCheck');
require('@babel/runtime/helpers/createClass');
require('mitt');
require('../../_chunks/dep-08a97e23.js');
require('@babel/runtime/helpers/asyncToGenerator');
require('@babel/runtime/regenerator');
require('../../_chunks/dep-733b2b51.js');
require('../../_chunks/dep-d45110a6.js');
require('../../_chunks/dep-b3b464e8.js');
require('../../_chunks/dep-05f89f0d.js');
require('../../_chunks/dep-ace0b57c.js');
require('../../_chunks/dep-71fa6bfc.js');
require('../../_chunks/dep-87589faa.js');
require('../../_chunks/dep-80a478d7.js');
require('../../_chunks/dep-8adeee89.js');
require('../../_chunks/dep-92e23f17.js');
require('../../_chunks/dep-0ff616fe.js');
require('../../_chunks/dep-5f52cd42.js');
require('../../_chunks/dep-0813861e.js');
require('../../_chunks/dep-f57bcb19.js');
require('../../_chunks/dep-dc4bbc14.js');
require('../../_chunks/dep-e27ea667.js');
require('../../_chunks/dep-165ca38a.js');
require('../../_chunks/dep-32412d92.js');
require('../../_chunks/dep-a8a3d718.js');
require('../../_chunks/dep-4d2ef282.js');
require('../../_chunks/dep-929933ce.js');
require('../../_chunks/dep-6b1f0ef8.js');
require('../../_chunks/dep-ac11336c.js');
require('../../_chunks/dep-11b67e11.js');
require('../../_chunks/dep-72c4cc44.js');
require('../../_chunks/dep-5d7e2375.js');
require('../../_chunks/dep-94a7dc2d.js');
require('../../_chunks/dep-8abdfb41.js');
require('dayjs');
require('../../_chunks/dep-54e566d9.js');
require('../../_chunks/dep-591a72de.js');
require('../../_chunks/dep-dcb859c6.js');
require('../../_chunks/dep-cd8cfdc0.js');
require('../../_chunks/dep-fd5a369e.js');
require('../../_chunks/dep-990979bb.js');
require('../../_chunks/dep-4ccaead1.js');
require('../../_chunks/dep-6f2064e4.js');
require('../../_chunks/dep-01738d56.js');
require('../../_chunks/dep-8b33876c.js');
require('../../_chunks/dep-445924d5.js');
require('../../_chunks/dep-422dd97f.js');
require('../../_chunks/dep-427dabac.js');
require('../../_chunks/dep-ee355a9a.js');
require('../../_chunks/dep-23f77e26.js');
require('../../_chunks/dep-06a7e589.js');
require('../../_chunks/dep-48de95ee.js');
require('../../_chunks/dep-912c9727.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);
var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var useContext = function useContext(props, setInnerValue, innerPopupVisible, setPopupVisible) {
  var statusContext = Vue.reactive({
    treeStore: null,
    inputVal: null,
    scopeVal: void 0,
    treeNodes: [],
    expend: []
  });
  var isParentFilterable = Vue.computed(function () {
    return (props.valueMode === "parentFirst" || props.checkStrictly) && statusContext.inputVal;
  });
  return {
    statusContext: statusContext,
    cascaderContext: Vue.computed(function () {
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
          if (isEqual.isEqual(val, modelValue)) return;
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
  var disabled = index.useDisabled();
  var _toRefs = Vue.toRefs(props),
    value = _toRefs.value,
    modelValue = _toRefs.modelValue,
    popupVisible = _toRefs.popupVisible;
  var _useVModel = index$1.useVModel(value, modelValue, props.defaultValue, props.onChange),
    _useVModel2 = _slicedToArray__default["default"](_useVModel, 2),
    innerValue = _useVModel2[0],
    setInnerValue = _useVModel2[1];
  var _useDefaultValue = index$2.useDefaultValue(popupVisible, false, props.onPopupVisibleChange, "popupVisible"),
    _useDefaultValue2 = _slicedToArray__default["default"](_useDefaultValue, 2),
    innerPopupVisible = _useDefaultValue2[0],
    setPopupVisible = _useDefaultValue2[1];
  var _useContext = useContext(props, setInnerValue, innerPopupVisible, setPopupVisible),
    cascaderContext = _useContext.cascaderContext,
    statusContext = _useContext.statusContext;
  var isFilterable = Vue.computed(function () {
    return Boolean(props.filterable || isFunction.isFunction(props.filter));
  });
  var updatedTreeNodes = function updatedTreeNodes() {
    var _cascaderContext$valu = cascaderContext.value,
      inputVal = _cascaderContext$valu.inputVal,
      treeStore = _cascaderContext$valu.treeStore,
      setTreeNodes = _cascaderContext$valu.setTreeNodes,
      isParentFilterable = _cascaderContext$valu.isParentFilterable;
    cascader_utils_effect.treeNodesEffect(inputVal, treeStore, setTreeNodes, props.filter, isParentFilterable);
  };
  var updateExpand = function updateExpand() {
    var _cascaderContext$valu2 = cascaderContext.value,
      value2 = _cascaderContext$valu2.value,
      treeStore = _cascaderContext$valu2.treeStore;
    var expend = statusContext.expend;
    cascader_utils_effect.treeStoreExpendEffect(treeStore, value2, expend);
    treeStore.replaceChecked(cascader_utils_helper.getTreeValue(value2));
  };
  Vue.watch(function () {
    return props.options;
  }, function () {
    var options = props.options,
      _props$keys = props.keys,
      keys = _props$keys === void 0 ? {} : _props$keys,
      checkStrictly = props.checkStrictly,
      lazy = props.lazy,
      load = props.load,
      valueMode = props.valueMode;
    var treeStore$1 = statusContext.treeStore;
    if (!options.length && !treeStore$1) return;
    if (!treeStore$1) {
      var store = new treeStore.TreeStore({
        keys: _objectSpread(_objectSpread({}, keys), {}, {
          children: isString.isString(keys.children) ? keys.children : "children"
        }),
        checkable: true,
        expandMutex: true,
        expandParent: true,
        lazy: lazy,
        load: load,
        valueMode: valueMode,
        checkStrictly: checkStrictly,
        onLoad: function onLoad() {
          Vue.nextTick(function () {
            store.refreshNodes();
            updatedTreeNodes();
          });
        }
      });
      store.append(options);
      statusContext.treeStore = store;
    } else {
      treeStore$1.reload(options);
      treeStore$1.refreshNodes();
    }
    updateExpand();
    updatedTreeNodes();
  }, {
    immediate: true,
    deep: true
  });
  Vue.watch(function () {
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
  Vue.watch(innerValue, function () {
    var _cascaderContext$valu3 = cascaderContext.value,
      setValue = _cascaderContext$valu3.setValue,
      multiple = _cascaderContext$valu3.multiple,
      valueType = _cascaderContext$valu3.valueType;
    if (cascader_utils_helper.isValueInvalid(innerValue.value, cascaderContext.value)) {
      setValue(multiple ? [] : "", "invalid-value");
    }
    if (!cascader_utils_helper.isEmptyValues(innerValue.value)) {
      statusContext.scopeVal = cascader_utils_helper.getCascaderValue(innerValue.value, valueType, multiple);
    } else {
      statusContext.scopeVal = multiple ? [] : "";
    }
    if (!statusContext.treeStore) return;
    updateExpand();
    updatedTreeNodes();
  }, {
    immediate: true
  });
  Vue.watch(function () {
    return innerPopupVisible.value && isFilterable.value;
  }, function (visible) {
    var setInputVal = cascaderContext.value.setInputVal;
    if (visible) {
      setInputVal("");
    }
  });
  Vue.watch(function () {
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

exports.useCascaderContext = useCascaderContext;
exports.useContext = useContext;
//# sourceMappingURL=index.js.map
