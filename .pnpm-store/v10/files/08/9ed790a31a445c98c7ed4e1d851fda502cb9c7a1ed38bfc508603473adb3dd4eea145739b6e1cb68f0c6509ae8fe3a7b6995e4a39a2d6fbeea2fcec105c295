/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import { defineComponent, toRefs, ref, computed, provide, watch, nextTick, createVNode, mergeProps } from 'vue';
import _asyncToGenerator from '@babel/runtime/helpers/asyncToGenerator';
import _toConsumableArray from '@babel/runtime/helpers/toConsumableArray';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _regeneratorRuntime from '@babel/runtime/regenerator';
import { isArray, isFunction, cloneDeep, intersection, debounce, pick, get } from 'lodash-es';
import FakeArrow from '../common-components/fake-arrow.js';
import { SelectInput } from '../select-input/index.js';
import SelectPanel from './components/select-panel.js';
import { Tag } from '../tag/index.js';
import props from './props.js';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-fe23be6e.js';
import { u as useTNodeJSX } from '../_chunks/dep-2accc95a.js';
import { u as usePrefixClass } from '../_chunks/dep-9e6d8a78.js';
import { u as useDefaultValue } from '../_chunks/dep-aa34a263.js';
import { u as useDisabled } from '../_chunks/dep-f7dd3c12.js';
import '../_chunks/dep-880d05b9.js';
import { u as useReadonly } from '../_chunks/dep-47b13687.js';
import { u as useVModel } from '../_chunks/dep-51e5a827.js';
import { u as useEventForward } from '../_chunks/dep-4d7b9152.js';
import { getSingleContent, getMultipleContent } from './utils/index.js';
import { selectInjectKey } from './consts/index.js';
import { useKeyboardControl } from './hooks/useKeyboardControl.js';
import { useSelectOptions } from './hooks/useSelectOptions.js';
import { useConfig } from '../config-provider/hooks/useConfig.js';
import '../select-input/select-input.js';
import '../popup/index.js';
import '../popup/popup.js';
import '@popperjs/core';
import '../_chunks/dep-16bcfabc.js';
import '../_chunks/dep-4f8b6591.js';
import '../_chunks/dep-2ea19dca.js';
import '../popup/container.js';
import '../popup/props.js';
import '../_chunks/dep-80a77612.js';
import '../_chunks/dep-664b8b22.js';
import 'tdesign-vue-next/esm/common/style/web/components/popup/_index.less';
import '../_chunks/dep-fb805f69.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import '../_chunks/dep-81b01cae.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '../select-input/props.js';
import '../select-input/hooks/useMultiple.js';
import '../tag-input/index.js';
import '../tag-input/tag-input.js';
import 'tdesign-icons-vue-next';
import '../input/index.js';
import '../input/input.js';
import '../input/props.js';
import '../_chunks/dep-3a7a2ef1.js';
import '../input/hooks/useInput.js';
import '../form/consts/index.js';
import '../input/hooks/useLengthLimit.js';
import '../_chunks/dep-8295e674.js';
import '../_chunks/dep-80a99546.js';
import '../input/hooks/useInputEventHandler.js';
import '../input/hooks/useInputWidth.js';
import '../input/input-group.js';
import '../input/input-group-props.js';
import 'tdesign-vue-next/esm/common/style/web/components/input/_index.less';
import '../tag-input/props.js';
import '../tag-input/hooks/useDragSorter.js';
import '../tag-input/hooks/useHover.js';
import '../tag-input/hooks/useTagScroll.js';
import '../tag-input/hooks/useTagList.js';
import 'tdesign-vue-next/esm/common/style/web/components/tag-input/_index.less';
import '../tag/tag.js';
import 'tinycolor2';
import '../tag/props.js';
import '../tag/check-tag.js';
import '../tag/check-tag-props.js';
import '../_chunks/dep-30c631d1.js';
import '../tag/check-tag-group.js';
import '../tag/check-tag-group-props.js';
import 'tdesign-vue-next/esm/common/style/web/components/tag/_index.less';
import '../loading/index.js';
import '../loading/directive.js';
import '../loading/plugin.js';
import '../_chunks/dep-ee693784.js';
import '../loading/icon/gradient.js';
import '../loading/props.js';
import 'tdesign-vue-next/esm/common/style/web/components/loading/_index.less';
import '../select-input/hooks/useOverlayInnerStyle.js';
import '../select-input/hooks/useSingle.js';
import 'tdesign-vue-next/esm/common/style/web/components/select-input/_index.less';
import './option.js';
import './option-props.js';
import '../checkbox/index.js';
import '../checkbox/checkbox.js';
import '../checkbox/props.js';
import '../_chunks/dep-d2a6e7a4.js';
import '../checkbox/consts/index.js';
import '../checkbox/hooks/useCheckboxLazyLoad.js';
import '../_chunks/dep-6264b0a7.js';
import '../checkbox/hooks/useKeyboardEvent.js';
import '../checkbox/group.js';
import '../checkbox/checkbox-group-props.js';
import '../_chunks/dep-e3ce8c8f.js';
import 'tdesign-vue-next/esm/common/style/web/components/checkbox/_index.less';
import './option-group.js';
import './option-group-props.js';
import './hooks/usePanelVirtualScroll.js';

var _excluded = ["overlayClassName"];
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var _Select = defineComponent({
  name: "TSelect",
  props: _objectSpread(_objectSpread({}, props), {}, {
    valueDisplayOptions: {
      type: Object
    }
  }),
  setup: function setup(props2, _ref) {
    var slots = _ref.slots;
    var classPrefix = usePrefixClass();
    var isDisabled = useDisabled();
    var isReadonly = useReadonly();
    var renderTNodeJSX = useTNodeJSX();
    var COMPONENT_NAME = usePrefixClass("select");
    var _useConfig = useConfig("select"),
      globalConfig = _useConfig.globalConfig,
      t = _useConfig.t;
    var _toRefs = toRefs(props2),
      popupVisible = _toRefs.popupVisible,
      inputValue = _toRefs.inputValue,
      modelValue = _toRefs.modelValue,
      value = _toRefs.value;
    var _useDefaultValue = useDefaultValue(inputValue, props2.defaultInputValue, props2.onInputChange, "inputValue"),
      _useDefaultValue2 = _slicedToArray(_useDefaultValue, 2),
      innerInputValue = _useDefaultValue2[0],
      setInputValue = _useDefaultValue2[1];
    var _useVModel = useVModel(value, modelValue, props2.defaultValue, props2.onChange),
      _useVModel2 = _slicedToArray(_useVModel, 2),
      orgValue = _useVModel2[0],
      setOrgValue = _useVModel2[1];
    var selectPanelRef = ref(null);
    var selectInputRef = ref(null);
    var keys = computed(function () {
      var _props2$keys, _props2$keys2, _props2$keys3;
      return {
        label: ((_props2$keys = props2.keys) === null || _props2$keys === void 0 ? void 0 : _props2$keys.label) || "label",
        value: ((_props2$keys2 = props2.keys) === null || _props2$keys2 === void 0 ? void 0 : _props2$keys2.value) || "value",
        disabled: ((_props2$keys3 = props2.keys) === null || _props2$keys3 === void 0 ? void 0 : _props2$keys3.disabled) || "disabled"
      };
    });
    var isObjectType = computed(function () {
      return props2.valueType === "object";
    });
    var innerValue = computed(function () {
      if (orgValue.value === void 0) {
        return props2.multiple ? [] : void 0;
      }
      if (isObjectType.value) {
        return !props2.multiple ? orgValue.value[keys.value.value] : orgValue.value.map(function (option) {
          return option[keys.value.value];
        });
      }
      return orgValue.value;
    });
    var _useSelectOptions = useSelectOptions(props2, keys, innerInputValue, innerValue),
      optionsMap = _useSelectOptions.optionsMap,
      optionsList = _useSelectOptions.optionsList,
      optionsCache = _useSelectOptions.optionsCache,
      displayOptions = _useSelectOptions.displayOptions,
      filterMethods = _useSelectOptions.filterMethods,
      searchDisplayOptions = _useSelectOptions.searchDisplayOptions;
    var setInnerValue = function setInnerValue(newVal, context) {
      if (isObjectType.value) {
        var _keys$value = keys.value,
          value2 = _keys$value.value,
          label = _keys$value.label;
        var getOption = function getOption(val) {
          if (val === void 0) {
            return void 0;
          }
          var option = optionsMap.value.get(val);
          return _defineProperty(_defineProperty({}, value2, get(option, "value")), label, get(option, "label"));
        };
        newVal = props2.multiple ? newVal.map(function (val) {
          return getOption(val);
        }) : getOption(newVal);
      }
      if (newVal === orgValue.value) return;
      if (props2.multiple && !props2.reserveKeyword && context.trigger == "check") setInputValue("");
      setOrgValue(newVal, _objectSpread({
        selectedOptions: getSelectedOptions(newVal)
      }, context));
      if (props2.multiple && context.trigger === "uncheck" && context.option) {
        var _props2$onRemove;
        (_props2$onRemove = props2.onRemove) === null || _props2$onRemove === void 0 || _props2$onRemove.call(props2, {
          value: get(context.option, keys.value.value),
          data: context.option,
          e: context.e
        });
      }
    };
    var _useDefaultValue3 = useDefaultValue(popupVisible, false, function (visible, context) {
        var _props2$onPopupVisibl;
        (_props2$onPopupVisibl = props2.onPopupVisibleChange) === null || _props2$onPopupVisibl === void 0 || _props2$onPopupVisibl.call(props2, visible, context);
      }, "popupVisible"),
      _useDefaultValue4 = _slicedToArray(_useDefaultValue3, 2),
      innerPopupVisible = _useDefaultValue4[0],
      setInnerPopupVisible = _useDefaultValue4[1];
    var placeholderText = computed(function () {
      var _ref3;
      return (_ref3 = !props2.multiple && innerPopupVisible.value && getSingleContent(innerValue.value, isRemoteSearch.value, currentSelectOptions, optionsMap) || props2.placeholder) !== null && _ref3 !== void 0 ? _ref3 : t(globalConfig.value.placeholder);
    });
    var displayText = computed(function () {
      return props2.multiple ? getMultipleContent(innerValue.value, isRemoteSearch.value, currentSelectOptions, optionsMap) : getSingleContent(innerValue.value, isRemoteSearch.value, currentSelectOptions, optionsMap);
    });
    var valueDisplayParams = computed(function () {
      if (!props2.multiple) {
        return _objectSpread(_objectSpread({}, optionsMap.value.get(innerValue.value)), {}, {
          value: innerValue.value,
          label: displayText.value
        });
      }
      var val = isArray(innerValue.value) ? innerValue.value.map(function (value2) {
        return optionsMap.value.get(value2);
      }) : [];
      var params = {
        value: val,
        onClose: props2.multiple ? function (index) {
          return removeTag(index);
        } : function () {}
      };
      if (props2.minCollapsedNum && isArray(innerValue.value)) {
        return _objectSpread(_objectSpread({}, params), {}, {
          displayValue: Array.isArray(val) ? val.slice(0, props2.minCollapsedNum) : []
        });
      }
      return params;
    });
    var isFilterable = computed(function () {
      return Boolean(props2.filterable || globalConfig.value.filterable || isFunction(props2.filter));
    });
    var isRemoteSearch = computed(function () {
      return Boolean((props2.filterable || globalConfig.value.filterable) && isFunction(props2.onSearch));
    });
    var removeTag = function removeTag(index, context) {
      var _props2$onRemove3;
      var _ref4 = context || {},
        e = _ref4.e,
        _ref4$trigger = _ref4.trigger,
        trigger = _ref4$trigger === void 0 ? "tag-remove" : _ref4$trigger;
      e && e.stopPropagation();
      var selectValue = cloneDeep(innerValue.value);
      var value2 = selectValue[index];
      selectValue.splice(index, 1);
      if (trigger === "backspace") {
        var _props2$onRemove2;
        var closest = -1;
        var len = index;
        var currentSelected = getCurrentSelectedOptions();
        while (len >= 0) {
          var _currentSelected$len;
          if (!((_currentSelected$len = currentSelected[len]) !== null && _currentSelected$len !== void 0 && _currentSelected$len.disabled)) {
            closest = len;
            break;
          }
          len -= 1;
        }
        if (closest < 0) return;
        var values = currentSelected[closest];
        var currentSelectedOptions = currentSelected.filter(function (item) {
          return item.value !== values.value;
        });
        setInnerValue(currentSelectedOptions.map(function (item) {
          return item.value;
        }), {
          selectedOptions: currentSelectedOptions,
          trigger: trigger,
          e: e
        });
        (_props2$onRemove2 = props2.onRemove) === null || _props2$onRemove2 === void 0 || _props2$onRemove2.call(props2, {
          value: values.value,
          data: values,
          e: e
        });
        return;
      }
      if (trigger !== "clear") {
        setInnerValue(selectValue, {
          selectedOptions: getSelectedOptions(selectValue),
          trigger: trigger,
          e: e
        });
      }
      (_props2$onRemove3 = props2.onRemove) === null || _props2$onRemove3 === void 0 || _props2$onRemove3.call(props2, {
        value: value2,
        data: optionsMap.value.get(value2),
        e: e
      });
    };
    var handleCreate = function handleCreate() {
      var _props2$onCreate;
      if (!innerInputValue.value) return;
      (_props2$onCreate = props2.onCreate) === null || _props2$onCreate === void 0 || _props2$onCreate.call(props2, innerInputValue.value);
      if (!innerPopupVisible.value) setInputValue("");
    };
    var popupContentRef = computed(function () {
      var _selectInputRef$value;
      return (_selectInputRef$value = selectInputRef.value) === null || _selectInputRef$value === void 0 ? void 0 : _selectInputRef$value.popupRef.getOverlay();
    });
    var optionalList = computed(function () {
      return optionsList.value.filter(function (item) {
        return !item.disabled && !(item["check-all"] || item["check-all"] === "") && !item.checkAll && filterMethods(item);
      });
    });
    var getSelectedOptions = function getSelectedOptions() {
      var selectValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : innerValue.value;
      return optionsList.value.filter(function (option) {
        if (option.checkAll) return;
        if (isArray(selectValue)) return selectValue.includes(option.value);
        return selectValue === option.value;
      });
    };
    var getCurrentSelectedOptions = function getCurrentSelectedOptions() {
      var options = [];
      var selectedValue = isObjectType.value ? orgValue.value : innerValue.value;
      var values = isArray(selectedValue) ? selectedValue : [selectedValue];
      values.forEach(function (value2) {
        var option = optionsMap.value.get(isObjectType.value ? value2.value : value2);
        if (option) options.push(option);else options.push(isObjectType.value ? value2 : {
          value: value2
        });
      });
      return options;
    };
    var onCheckAllChange = function onCheckAllChange(checked) {
      if (!props2.multiple) return;
      var value2 = keys.value.value;
      var lockedValues = innerValue.value.filter(function (value3) {
        return optionsList.value.find(function (item) {
          return item.value === value3 && item.disabled;
        });
      });
      var activeValues = optionalList.value.map(function (option) {
        return option.value;
      });
      var formattedOrgValue = isObjectType.value ? orgValue.value.map(function (v) {
        return get(v, value2);
      }) : orgValue.value;
      var values = checked ? _toConsumableArray(/* @__PURE__ */new Set([].concat(_toConsumableArray(formattedOrgValue), _toConsumableArray(activeValues), _toConsumableArray(lockedValues)))) : _toConsumableArray(lockedValues);
      setInnerValue(values, {
        selectedOptions: getSelectedOptions(values),
        trigger: checked ? "check" : "clear"
      });
    };
    var isCheckAll = computed(function () {
      if (intersectionLen.value === 0) return false;
      return intersectionLen.value === (isRemoteSearch.value ? searchDisplayOptions.value.length : optionalList.value.length);
    });
    var _useKeyboardControl = useKeyboardControl({
        displayOptions: displayOptions,
        optionsList: optionsList,
        innerPopupVisible: innerPopupVisible,
        setInnerPopupVisible: setInnerPopupVisible,
        selectPanelRef: selectPanelRef,
        isFilterable: isFilterable,
        isRemoteSearch: isRemoteSearch,
        getSelectedOptions: getSelectedOptions,
        setInnerValue: setInnerValue,
        onCheckAllChange: onCheckAllChange,
        isCheckAll: isCheckAll,
        innerValue: innerValue,
        popupContentRef: popupContentRef,
        multiple: props2.multiple,
        max: props2.max
      }),
      hoverIndex = _useKeyboardControl.hoverIndex,
      virtualFilteredOptions = _useKeyboardControl.virtualFilteredOptions,
      handleKeyDown = _useKeyboardControl.handleKeyDown,
      filteredOptions = _useKeyboardControl.filteredOptions;
    var intersectionLen = computed(function () {
      var values = optionalList.value.map(function (item) {
        return item.value;
      });
      var n = intersection(innerValue.value, values);
      return n.length;
    });
    var indeterminate = computed(function () {
      return !isCheckAll.value && intersectionLen.value !== 0;
    });
    var SelectProvider = computed(function () {
      return {
        max: props2.max,
        multiple: props2.multiple,
        hoverIndex: hoverIndex.value,
        selectValue: innerValue.value,
        reserveKeyword: props2.reserveKeyword,
        handleValueChange: setInnerValue,
        handlerInputChange: setInputValue,
        handlePopupVisibleChange: setInnerPopupVisible,
        handleCreate: handleCreate,
        size: props2.size,
        popupContentRef: popupContentRef,
        indeterminate: indeterminate.value,
        isCheckAll: isCheckAll.value,
        onCheckAllChange: onCheckAllChange,
        getSelectedOptions: getSelectedOptions,
        displayOptions: displayOptions.value,
        emitBlur: handleOptionEmitBlur
      };
    });
    provide(selectInjectKey, SelectProvider);
    var checkValueInvalid = function checkValueInvalid() {
      if (!props2.multiple && isArray(orgValue.value)) {
        setOrgValue(void 0, {
          selectedOptions: [],
          trigger: "default"
        });
      }
      if (props2.multiple && !isArray(orgValue.value)) {
        setOrgValue([], {
          selectedOptions: [],
          trigger: "default"
        });
      }
    };
    var handleSearch = debounce(function (value2, _ref5) {
      var _props2$onSearch;
      var e = _ref5.e;
      (_props2$onSearch = props2.onSearch) === null || _props2$onSearch === void 0 || _props2$onSearch.call(props2, "".concat(value2), {
        e: e
      });
    }, 300);
    var handlerInputChange = function handlerInputChange(value2, context) {
      if (value2) {
        !innerPopupVisible.value && setInnerPopupVisible(true, {
          e: context.e
        });
      }
      setInputValue(value2);
      handleSearch("".concat(value2), {
        e: context.e
      });
      nextTick(function () {
        var _selectPanelRef$value, _selectPanelRef$value2;
        virtualFilteredOptions.value = (_selectPanelRef$value = selectPanelRef.value) === null || _selectPanelRef$value === void 0 ? void 0 : _selectPanelRef$value.visibleData;
        filteredOptions.value = (_selectPanelRef$value2 = selectPanelRef.value) === null || _selectPanelRef$value2 === void 0 ? void 0 : _selectPanelRef$value2.displayOptions;
      });
    };
    var handleOptionEmitBlur = function handleOptionEmitBlur(e) {
      var _props2$onBlur;
      (_props2$onBlur = props2.onBlur) === null || _props2$onBlur === void 0 || _props2$onBlur.call(props2, {
        e: e,
        value: innerValue.value
      });
    };
    var handlerPopupVisibleChange = function handlerPopupVisibleChange(visible, context) {
      setInnerPopupVisible(visible, context);
      if (visible && context.trigger === "trigger-element-click") setInputValue("");
    };
    var handlerPopupScrollToBottom = /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee(context) {
        var _popupProps$onScroll, _popupProps$onScrollT;
        var popupProps;
        return _regeneratorRuntime.wrap(function (_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              popupProps = props2.popupProps;
              if (!props2.loading) {
                _context.next = 1;
                break;
              }
              return _context.abrupt("return");
            case 1:
              popupProps === null || popupProps === void 0 || (_popupProps$onScroll = popupProps["on-scroll-to-bottom"]) === null || _popupProps$onScroll === void 0 || _popupProps$onScroll.call(popupProps, context);
              popupProps === null || popupProps === void 0 || (_popupProps$onScrollT = popupProps.onScrollToBottom) === null || _popupProps$onScrollT === void 0 || _popupProps$onScrollT.call(popupProps, context);
            case 2:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function handlerPopupScrollToBottom(_x) {
        return _ref6.apply(this, arguments);
      };
    }();
    var addCache = function addCache(val) {
      if (props2.multiple) {
        var newCache = [];
        var _iterator = _createForOfIteratorHelper(val || []),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;
            var option = optionsMap.value.get(item);
            if (option) {
              newCache.push(option);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        optionsCache.value = Array.from(/* @__PURE__ */new Set([].concat(newCache, _toConsumableArray(optionsCache.value))));
      } else {
        var _option = optionsMap.value.get(val);
        if (_option) {
          optionsCache.value = Array.from(/* @__PURE__ */new Set([_option].concat(_toConsumableArray(optionsCache.value))));
        }
      }
    };
    watch(orgValue, function (val) {
      checkValueInvalid();
      nextTick(function () {
        addCache(val);
      });
    }, {
      immediate: true
    });
    watch(function () {
      return props2.multiple;
    }, function () {
      checkValueInvalid();
    });
    var updateScrollTop = function updateScrollTop(content) {
      var _selectPanelRef$value3;
      if (!selectPanelRef.value) {
        return;
      }
      var firstSelectedNode = (_selectPanelRef$value3 = selectPanelRef.value) === null || _selectPanelRef$value3 === void 0 || (_selectPanelRef$value3 = _selectPanelRef$value3.innerRef) === null || _selectPanelRef$value3 === void 0 ? void 0 : _selectPanelRef$value3.querySelector(".".concat(classPrefix.value, "-is-selected"));
      nextTick(function () {
        if (firstSelectedNode && content) {
          var _getComputedStyle = getComputedStyle(firstSelectedNode),
            paddingBottom = _getComputedStyle.paddingBottom;
          var _getComputedStyle2 = getComputedStyle(content),
            marginBottom = _getComputedStyle2.marginBottom;
          var elementBottomHeight = parseInt(paddingBottom, 10) + parseInt(marginBottom, 10);
          var updateValue = firstSelectedNode.offsetTop - content.offsetTop - (content.clientHeight - firstSelectedNode.clientHeight) + elementBottomHeight;
          content.scrollTop = updateValue;
        }
      });
    };
    var currentSelectOptions = computed(function () {
      return isRemoteSearch.value ? searchDisplayOptions.value : getCurrentSelectedOptions();
    });
    var renderValueDisplay = function renderValueDisplay() {
      var renderTag = function renderTag() {
        var _props2$selectInputPr, _innerValue$value$sli, _innerValue$value$sli2;
        if (!props2.multiple || ((_props2$selectInputPr = props2.selectInputProps) === null || _props2$selectInputPr === void 0 ? void 0 : _props2$selectInputPr.multiple) === false) {
          return void 0;
        }
        return (_innerValue$value$sli = (_innerValue$value$sli2 = innerValue.value.slice(0, props2.minCollapsedNum ? props2.minCollapsedNum : innerValue.value.length)).map) === null || _innerValue$value$sli === void 0 ? void 0 : _innerValue$value$sli.call(_innerValue$value$sli2, function (v, key) {
          var _option$label;
          var option = currentSelectOptions.value.find(function (item) {
            if (item.value === v) {
              return true;
            }
          });
          return createVNode(Tag, mergeProps({
            "key": key,
            "closable": !(option !== null && option !== void 0 && option.disabled) && !isDisabled.value && !isReadonly.value,
            "size": props2.size
          }, props2.tagProps, {
            "onClose": function onClose(_ref7) {
              var _props2$tagProps, _props2$tagProps$onCl;
              var e = _ref7.e;
              e.stopPropagation();
              (_props2$tagProps = props2.tagProps) === null || _props2$tagProps === void 0 || (_props2$tagProps$onCl = _props2$tagProps.onClose) === null || _props2$tagProps$onCl === void 0 || _props2$tagProps$onCl.call(_props2$tagProps, {
                e: e
              });
              removeTag(key);
            }
          }), {
            "default": function _default() {
              return [option ? (_option$label = option.label) !== null && _option$label !== void 0 ? _option$label : option === null || option === void 0 ? void 0 : option.value : v];
            }
          });
        });
      };
      return renderTNodeJSX("valueDisplay", {
        params: valueDisplayParams.value
      }) || renderTag();
    };
    provide("updateScrollTop", updateScrollTop);
    return function () {
      var _ref8 = props2.popupProps || {},
        overlayClassName = _ref8.overlayClassName,
        restPopupProps = _objectWithoutProperties(_ref8, _excluded);
      var popupEvents = useEventForward(restPopupProps, {
        onScrollToBottom: handlerPopupScrollToBottom
      });
      var selectInputEvents = useEventForward(props2.selectInputProps, {
        onTagChange: function onTagChange(val, ctx) {
          removeTag(ctx.index, ctx);
        },
        onPopupVisibleChange: handlerPopupVisibleChange,
        onInputChange: handlerInputChange,
        onClear: function onClear(_ref9) {
          var _props2$onClear;
          var e = _ref9.e;
          setInnerValue(props2.multiple ? [] : void 0, {
            option: null,
            selectedOptions: getSelectedOptions(props2.multiple ? [] : void 0),
            trigger: "clear",
            e: e
          });
          (_props2$onClear = props2.onClear) === null || _props2$onClear === void 0 || _props2$onClear.call(props2, {
            e: e
          });
        },
        onEnter: function onEnter(val, _ref0) {
          var e = _ref0.e;
          setTimeout(function () {
            var _props2$onEnter;
            (_props2$onEnter = props2.onEnter) === null || _props2$onEnter === void 0 || _props2$onEnter.call(props2, {
              inputValue: "".concat(innerInputValue.value),
              e: e,
              value: innerValue.value
            });
            handleCreate();
          }, 0);
        },
        onBlur: function onBlur(val, _ref1) {
          var _props2$onBlur2;
          var e = _ref1.e;
          (_props2$onBlur2 = props2.onBlur) === null || _props2$onBlur2 === void 0 || _props2$onBlur2.call(props2, {
            e: e,
            value: innerValue.value
          });
        },
        onFocus: function onFocus(val, _ref10) {
          var _props2$onFocus;
          var e = _ref10.e;
          (_props2$onFocus = props2.onFocus) === null || _props2$onFocus === void 0 || _props2$onFocus.call(props2, {
            e: e,
            value: innerValue.value
          });
        }
      });
      return createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__wrap")
      }, [createVNode(SelectInput, mergeProps({
        autoWidth: props2.autoWidth,
        readonly: isReadonly.value,
        borderless: props2.borderless,
        multiple: props2.multiple,
        clearable: props2.clearable,
        loading: props2.loading,
        status: props2.status,
        tips: function tips() {
          return renderTNodeJSX("tips");
        },
        minCollapsedNum: props2.minCollapsedNum,
        autofocus: props2.autofocus,
        suffix: props2.suffix,
        valueDisplayOptions: props2.valueDisplayOptions
      }, {
        "ref": selectInputRef,
        "class": COMPONENT_NAME.value,
        "value": displayText.value,
        "disabled": isDisabled.value,
        "popupVisible": innerPopupVisible.value,
        "inputValue": innerPopupVisible.value ? innerInputValue.value : "",
        "placeholder": "".concat(placeholderText.value),
        "allowInput": isFilterable.value,
        "collapsed-items": props2.collapsedItems,
        "inputProps": _objectSpread(_objectSpread({
          size: props2.size,
          autofocus: props2.autofocus
        }, props2.inputProps), {}, {
          onkeydown: handleKeyDown
        }),
        "tagInputProps": _objectSpread({
          size: props2.size
        }, props2.tagInputProps),
        "tagProps": _objectSpread({}, props2.tagProps),
        "popupProps": _objectSpread({
          overlayClassName: ["".concat(COMPONENT_NAME.value, "__dropdown"), overlayClassName]
        }, popupEvents.value),
        "label": props2.label,
        "prefixIcon": props2.prefixIcon,
        "suffix": props2.suffix,
        "suffixIcon": function suffixIcon() {
          if (props2.suffixIcon || slots.suffixIcon) {
            return renderTNodeJSX("suffixIcon");
          }
          return props2.showArrow && createVNode(FakeArrow, {
            "overlayClassName": "".concat(COMPONENT_NAME.value, "__right-icon"),
            "isActive": innerPopupVisible.value
          }, null);
        },
        "valueDisplay": renderValueDisplay
      }, selectInputEvents.value), {
        label: slots.label,
        prefixIcon: slots.prefixIcon,
        suffix: slots.suffix,
        panel: function panel() {
          return createVNode(SelectPanel, mergeProps({
            "ref": selectPanelRef
          }, pick(props2, ["multiple", "empty", "loading", "loadingText", "filterable", "creatable", "panelTopContent", "panelBottomContent", "filter", "scroll", "keys"]), {
            "inputValue": innerInputValue.value
          }), slots);
        },
        collapsedItems: slots.collapsedItems
      })]);
    };
  }
});

export { _Select as default };
//# sourceMappingURL=select.js.map
