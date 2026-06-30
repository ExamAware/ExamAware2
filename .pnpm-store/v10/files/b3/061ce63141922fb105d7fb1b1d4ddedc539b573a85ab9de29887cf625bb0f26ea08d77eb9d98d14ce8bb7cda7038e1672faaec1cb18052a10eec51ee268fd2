/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, ref, toRefs, watch, computed, onMounted, withDirectives, createVNode, mergeProps, vShow } from 'vue';
import { _ as _defineProperty } from '../_chunks/dep-1dacc319.mjs';
import { _ as _asyncToGenerator, a as _regeneratorRuntime } from '../_chunks/dep-88e5a7b0.mjs';
import { _ as _toConsumableArray } from '../_chunks/dep-00b4e06a.mjs';
import { _ as _slicedToArray } from '../_chunks/dep-9003fde5.mjs';
import { isFunction, isBoolean, isArray, isEmpty, isNil } from 'lodash-es';
import { _ as _typeof } from '../_chunks/dep-257428bc.mjs';
import { Tree } from '../tree/index.mjs';
import { SelectInput } from '../select-input/index.mjs';
import FakeArrow from '../common-components/fake-arrow.mjs';
import props from './props.mjs';
import { a as useTNodeJSX, q as useTNodeDefault, u as usePrefixClass, e as useDisabled, n as useReadonly, j as useVModel, k as useDefaultValue, o as useEventForward } from '../_chunks/dep-7673347f.mjs';
import { useConfig } from '../config-provider/hooks/useConfig.mjs';
import '../_chunks/dep-fe644854.mjs';
import '../_chunks/dep-9f459d8b.mjs';
import '../tree/tree.mjs';
import '../tree/utils/adapt.mjs';
import '../_chunks/dep-51a43106.mjs';
import 'tdesign-icons-vue-next';
import '../checkbox/index.mjs';
import '../checkbox/checkbox.mjs';
import '../checkbox/props.mjs';
import '../checkbox/consts/index.mjs';
import '../checkbox/hooks/useCheckboxLazyLoad.mjs';
import '../_chunks/dep-22ebd6af.mjs';
import '../checkbox/hooks/useKeyboardEvent.mjs';
import '../_chunks/dep-d36c4a3f.mjs';
import '../config-provider/utils/context.mjs';
import '../_chunks/dep-a4c09318.mjs';
import '../_chunks/dep-ffb85102.mjs';
import '../_chunks/dep-ad588525.mjs';
import '../_chunks/dep-cdd448ec.mjs';
import '../_chunks/dep-97ecacde.mjs';
import '../_chunks/dep-84fd47b3.mjs';
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
import '../_chunks/dep-6d2705e1.mjs';
import '../tree/hooks/useDragHandle.mjs';
import '../tree/hooks/useDraggable.mjs';
import '../tree/utils/index.mjs';
import '../tree/hooks/useTreeAction.mjs';
import '../tree/hooks/useTreeNodes.mjs';
import '../tree/tree-item.mjs';
import '../tree/hooks/useItemState.mjs';
import '../tree/hooks/useTreeItem.mjs';
import '../tree/hooks/useItemEvents.mjs';
import '../tree/hooks/useRenderIcon.mjs';
import '../tree/hooks/useRenderLabel.mjs';
import '../tree/hooks/useRenderLine.mjs';
import '../tree/hooks/useRenderOperations.mjs';
import '../tree/hooks/useTreeEvents.mjs';
import '../tree/hooks/useTreeScroll.mjs';
import '../tree/hooks/useTreeState.mjs';
import '../tree/hooks/useTreeStore.mjs';
import '../_chunks/dep-225a059b.mjs';
import 'mitt';
import '../tree/hooks/useTreeStyles.mjs';
import '../tree/props.mjs';
import '../select-input/select-input.mjs';
import '../popup/index.mjs';
import '../popup/popup.mjs';
import '@popperjs/core';
import '../popup/container.mjs';
import '../popup/props.mjs';
import '../select-input/props.mjs';
import '../select-input/hooks/index.mjs';
import '../select-input/hooks/useMultiple.mjs';
import '../tag-input/index.mjs';
import '../tag-input/tag-input.mjs';
import '../input/index.mjs';
import '../input/input.mjs';
import '../input/props.mjs';
import '../input/hooks/index.mjs';
import '../input/hooks/useInput.mjs';
import '../form/consts/index.mjs';
import '../input/hooks/useLengthLimit.mjs';
import '../input/hooks/useInputEventHandler.mjs';
import '../input/hooks/useInputWidth.mjs';
import '../input/input-group.mjs';
import '../input/input-group-props.mjs';
import '../tag-input/props.mjs';
import '../tag-input/hooks/index.mjs';
import '../tag-input/hooks/useDragSorter.mjs';
import '../tag-input/hooks/useHover.mjs';
import '../tag-input/hooks/useTagScroll.mjs';
import '../tag-input/hooks/useTagList.mjs';
import '../tag/index.mjs';
import '../tag/tag.mjs';
import '../_chunks/dep-b31d8258.mjs';
import '../tag/props.mjs';
import '../tag/check-tag.mjs';
import '../tag/check-tag-props.mjs';
import '../tag/check-tag-group.mjs';
import '../tag/check-tag-group-props.mjs';
import '../select-input/hooks/useOverlayInnerStyle.mjs';
import '../select-input/hooks/useSingle.mjs';

function findParentValues(options, targetValue, realValue, realChildren) {
  var currentTargetValue = targetValue;
  if (currentTargetValue != null && _typeof(currentTargetValue) === "object") {
    var _currentTargetValue;
    currentTargetValue = (_currentTargetValue = currentTargetValue) === null || _currentTargetValue === void 0 ? void 0 : _currentTargetValue[realValue];
  }
  if (currentTargetValue == null) return [];
  function findPath(nodes, parentPath) {
    var result = null;
    nodes.some(function (node) {
      var newPath = [].concat(_toConsumableArray(parentPath), [node[realValue]]);
      if (node[realValue] === currentTargetValue) {
        result = parentPath;
        return true;
      }
      if (Array.isArray(node[realChildren]) && node[realChildren].length) {
        result = findPath(node[realChildren], newPath);
        if (result !== null) {
          return true;
        }
      }
      return false;
    });
    return result;
  }
  return findPath(options, []) || [];
}

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var _TreeSelect = defineComponent({
  name: "TTreeSelect",
  props: props,
  setup: function setup(props2, _ref) {
    var slots = _ref.slots,
      expose = _ref.expose;
    var renderTNodeJSX = useTNodeJSX();
    var renderDefaultTNode = useTNodeDefault();
    var classPrefix = usePrefixClass();
    var _useConfig = useConfig("treeSelect"),
      globalConfig = _useConfig.globalConfig;
    var formDisabled = useDisabled();
    var isReadonly = useReadonly();
    var treeRef = ref(null);
    var actived = ref([]);
    var expanded = ref([]);
    var nodeInfo = ref(null);
    var treeKey = ref(0);
    var _toRefs = toRefs(props2),
      value = _toRefs.value,
      modelValue = _toRefs.modelValue,
      popupVisible = _toRefs.popupVisible,
      inputValue = _toRefs.inputValue;
    var _useVModel = useVModel(value, modelValue, props2.defaultValue, props2.onChange),
      _useVModel2 = _slicedToArray(_useVModel, 2),
      treeSelectValue = _useVModel2[0],
      setTreeSelectValue = _useVModel2[1];
    var _useDefaultValue = useDefaultValue(popupVisible, false, props2.onPopupVisibleChange, "popupVisible"),
      _useDefaultValue2 = _slicedToArray(_useDefaultValue, 2),
      innerVisible = _useDefaultValue2[0],
      setInnerVisible = _useDefaultValue2[1];
    var _useDefaultValue3 = useDefaultValue(inputValue, props2.defaultInputValue, props2.onInputChange, "inputValue"),
      _useDefaultValue4 = _slicedToArray(_useDefaultValue3, 2),
      innerInputValue = _useDefaultValue4[0],
      setInnerInputValue = _useDefaultValue4[1];
    var setTreeParentsExpanded = function setTreeParentsExpanded() {
      var getParents = function getParents(value2) {
        return findParentValues(props2.data, value2, realValue.value, realChildren.value);
      };
      var treeParents = [];
      if (treeSelectValue.value) {
        if (Array.isArray(treeSelectValue.value) && props2.multiple) {
          treeParents = treeSelectValue.value.flatMap(getParents);
        } else if (!Array.isArray(treeSelectValue.value) && !props2.multiple) {
          treeParents = getParents(treeSelectValue.value);
        }
      }
      expanded.value = Array.from(/* @__PURE__ */new Set([].concat(_toConsumableArray(expanded.value), _toConsumableArray(treeParents))));
    };
    watch(treeSelectValue, /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
      return _regeneratorRuntime.wrap(function (_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 1;
            return changeNodeInfo();
          case 1:
            if (!props2.multiple) {
              actived.value = nodeInfo.value ? [nodeInfo.value.value] : [];
            }
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee);
    })));
    watch(function () {
      return props2.data;
    }, /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
      return _regeneratorRuntime.wrap(function (_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 1;
            return changeNodeInfo();
          case 1:
            treeRerender();
          case 2:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    })), {
      deep: true
    });
    var filterByText = computed(function () {
      var value2 = innerInputValue.value || "";
      if (value2 === "") {
        return null;
      }
      return function (node) {
        if (isFunction(props2.filter)) {
          var filter = props2.filter(String(value2), node);
          if (isBoolean(filter)) {
            return filter;
          }
        }
        return node.data[realLabel.value].indexOf(value2) >= 0;
      };
    });
    var tDisabled = computed(function () {
      return formDisabled.value || props2.disabled;
    });
    var inputPlaceholder = computed(function () {
      var _nodeInfo$value;
      return innerVisible.value && ((_nodeInfo$value = nodeInfo.value) === null || _nodeInfo$value === void 0 ? void 0 : _nodeInfo$value.label) || props2.placeholder || globalConfig.value.placeholder;
    });
    var popupClass = computed(function () {
      return ["".concat(classPrefix.value, "-select__dropdown"), "narrow-scrollbar"];
    });
    var dropdownInnerSize = computed(function () {
      return {
        small: "s",
        medium: "m",
        large: "l"
      }[props2.size];
    });
    var isObjectValue = computed(function () {
      return props2.valueType === "object";
    });
    var checked = computed(function () {
      if (props2.multiple) {
        if (isObjectValue.value) {
          return isArray(treeSelectValue.value) ? treeSelectValue.value.map(function (item) {
            return item.value;
          }) : [];
        }
        return isArray(treeSelectValue.value) ? treeSelectValue.value.map(function (item) {
          return item;
        }) : [];
      }
      return [];
    });
    var multiLimitDisabled = computed(function () {
      return props2.multiple && !!props2.max && isArray(treeSelectValue.value) && props2.max <= treeSelectValue.value.length;
    });
    var realLabel = computed(function () {
      var _props2$keys;
      if (!isEmpty(props2.treeProps) && !isEmpty(props2.treeProps.keys)) {
        return props2.treeProps.keys.label || "label";
      }
      return ((_props2$keys = props2.keys) === null || _props2$keys === void 0 ? void 0 : _props2$keys.label) || "label";
    });
    var realValue = computed(function () {
      var _props2$keys2;
      if (!isEmpty(props2.treeProps) && !isEmpty(props2.treeProps.keys)) {
        return props2.treeProps.keys.value || "value";
      }
      return ((_props2$keys2 = props2.keys) === null || _props2$keys2 === void 0 ? void 0 : _props2$keys2.value) || "value";
    });
    var realChildren = computed(function () {
      var _props2$keys3;
      if (!isEmpty(props2.treeProps) && !isEmpty(props2.treeProps.keys)) {
        return props2.treeProps.keys.children || "children";
      }
      return ((_props2$keys3 = props2.keys) === null || _props2$keys3 === void 0 ? void 0 : _props2$keys3.children) || "children";
    });
    onMounted(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee3() {
      var _treeSelectValue$valu;
      return _regeneratorRuntime.wrap(function (_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            setTreeParentsExpanded();
            if (!treeSelectValue.value && props2.defaultValue) {
              change(props2.defaultValue, null, "uncheck");
            }
            if (isObjectValue.value) {
              actived.value = isArray(treeSelectValue.value) ? treeSelectValue.value.map(function (item) {
                return item === null || item === void 0 ? void 0 : item.value;
              }) : [(_treeSelectValue$valu = treeSelectValue.value) === null || _treeSelectValue$valu === void 0 ? void 0 : _treeSelectValue$valu.value];
            } else {
              actived.value = isArray(treeSelectValue.value) ? treeSelectValue.value : [treeSelectValue.value];
            }
            changeNodeInfo();
          case 1:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    })));
    var change = function change(valueParam, node, trigger) {
      setTreeSelectValue(valueParam, {
        node: node,
        trigger: trigger
      });
      changeNodeInfo();
    };
    var clear = function clear(content) {
      var _props2$onClear;
      var defaultValue = props2.multiple ? [] : "";
      actived.value = [];
      change(defaultValue, null, "clear");
      (_props2$onClear = props2.onClear) === null || _props2$onClear === void 0 || _props2$onClear.call(props2, {
        e: content.e
      });
    };
    var treeNodeChange = function treeNodeChange(valueParam, context) {
      var current = valueParam;
      if (isObjectValue.value) {
        current = valueParam.map(getNodeItem);
      }
      change(current, context.node, "check");
    };
    var treeNodeActive = function treeNodeActive(valueParam, context) {
      if (!props2.multiple) {
        setInnerVisible(false, context);
      }
      if (props2.multiple || !context.node.actived) {
        return;
      }
      if (treeSelectValue.value === context.node.data[realValue.value]) {
        return;
      }
      var current = valueParam;
      if (isObjectValue.value) {
        var nodeValue = isEmpty(valueParam) ? "" : valueParam[0];
        current = getNodeItem(nodeValue);
      } else {
        current = isEmpty(valueParam) ? "" : valueParam[0];
      }
      change(current, context.node, "check");
      actived.value = valueParam;
    };
    var treeNodeExpand = function treeNodeExpand(valueParam) {
      expanded.value = valueParam;
    };
    var treeNodeLoad = function treeNodeLoad() {
      changeNodeInfo();
    };
    var inputChange = function inputChange(value2) {
      var _props2$onSearch2;
      if (!innerVisible.value) {
        var _props2$onSearch;
        (_props2$onSearch = props2.onSearch) === null || _props2$onSearch === void 0 || _props2$onSearch.call(props2, String(value2));
        return;
      }
      setInnerInputValue(value2);
      (_props2$onSearch2 = props2.onSearch) === null || _props2$onSearch2 === void 0 || _props2$onSearch2.call(props2, String(value2));
    };
    var tagChange = function tagChange(value2, context) {
      var _props2$onRemove;
      var trigger = context.trigger,
        index = context.index;
      if (["tag-remove", "backspace"].includes(trigger)) {
        isArray(treeSelectValue.value) && treeSelectValue.value.splice(index, 1);
      }
      (_props2$onRemove = props2.onRemove) === null || _props2$onRemove === void 0 || _props2$onRemove.call(props2, {
        value: value2,
        data: null,
        e: context && context.e
      });
      change(treeSelectValue.value, null, trigger);
    };
    var handlePopupVisibleChange = function handlePopupVisibleChange(visible, context) {
      setInnerVisible(visible, context);
      if (visible && context.trigger === "trigger-element-click") setInnerInputValue("");
    };
    var changeNodeInfo = /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee4() {
        return _regeneratorRuntime.wrap(function (_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              if (!props2.multiple) {
                if (treeSelectValue.value || treeSelectValue.value === 0) {
                  nodeInfo.value = getSingleNodeInfo();
                } else {
                  nodeInfo.value = "";
                }
              } else if (props2.multiple) {
                if (isArray(treeSelectValue.value)) {
                  nodeInfo.value = getMultipleNodeInfo();
                } else {
                  nodeInfo.value = [];
                }
              } else {
                nodeInfo.value = null;
              }
            case 1:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }));
      return function changeNodeInfo() {
        return _ref5.apply(this, arguments);
      };
    }();
    var getSingleNodeInfo = function getSingleNodeInfo() {
      var nodeValue = isObjectValue.value ? treeSelectValue.value.value : treeSelectValue.value;
      return getNodeItem(nodeValue);
    };
    var getMultipleNodeInfo = function getMultipleNodeInfo() {
      return treeSelectValue.value.map(function (value2) {
        var nodeValue = isObjectValue.value ? value2.value : value2;
        return getNodeItem(nodeValue);
      });
    };
    var getNodeItem = function getNodeItem(targetValue) {
      if (treeRef.value) {
        var node2 = treeRef.value.getItem(targetValue);
        if (node2) {
          return _objectSpread(_objectSpread({}, node2.data), {}, {
            label: node2.data[realLabel.value],
            value: node2.data[realValue.value]
          });
        }
      }
      var node = _getTreeNode(props2.data, targetValue);
      if (node) {
        return node;
      }
      return {
        label: targetValue,
        value: targetValue
      };
    };
    var _getTreeNode = function getTreeNode(data, targetValue) {
      for (var i = 0, len = data.length; i < len; i++) {
        var item = data[i];
        if (item[realValue.value] === targetValue) {
          return _objectSpread(_objectSpread({}, item), {}, {
            label: item[realLabel.value],
            value: item[realValue.value]
          });
        }
        if (item !== null && item !== void 0 && item[realChildren.value]) {
          var result = _getTreeNode(item === null || item === void 0 ? void 0 : item[realChildren.value], targetValue);
          if (!isNil(result)) {
            return result;
          }
        }
      }
      return null;
    };
    var treeRerender = function treeRerender() {
      treeKey.value += 1;
    };
    var renderTree = function renderTree() {
      var treeEvents = useEventForward(props2.treeProps, {
        onChange: treeNodeChange,
        onActive: treeNodeActive,
        onExpand: treeNodeExpand,
        onLoad: treeNodeLoad
      });
      return withDirectives(createVNode(Tree, mergeProps({
        "ref": treeRef,
        "key": treeKey.value,
        "value": _toConsumableArray(checked.value),
        "hover": true,
        "keys": props2.keys,
        "data": props2.data,
        "activable": !props2.multiple,
        "checkable": props2.multiple,
        "disabled": tDisabled.value || multiLimitDisabled.value,
        "size": props2.size,
        "filter": filterByText.value,
        "actived": actived.value,
        "expanded": expanded.value,
        "activeMultiple": props2.multiple,
        "expandOnClickNode": false
      }, treeEvents.value), {
        empty: function empty() {
          return renderDefaultTNode("empty", {
            defaultNode: createVNode("div", {
              "class": "".concat(classPrefix.value, "-select__empty")
            }, [globalConfig.value.empty])
          });
        }
      }), [[vShow, !props2.loading]]);
    };
    var renderSuffixIcon = function renderSuffixIcon() {
      return createVNode(FakeArrow, {
        "isActive": innerVisible.value,
        "disabled": props2.disabled,
        "overlayClassName": _defineProperty(_defineProperty({}, "".concat(classPrefix.value, "-fake-arrow--highlight"), innerVisible.value), "".concat(classPrefix.value, "-fake-arrow--disable"), props2.disabled)
      }, null);
    };
    expose({
      treeRef: treeRef
    });
    var selectInputEvent = useEventForward(props2.selectInputProps, {
      onInputChange: inputChange,
      onTagChange: tagChange,
      onPopupVisibleChange: handlePopupVisibleChange,
      onClear: clear,
      onBlur: function onBlur(_, context) {
        var _props2$onBlur;
        (_props2$onBlur = props2.onBlur) === null || _props2$onBlur === void 0 || _props2$onBlur.call(props2, {
          value: treeSelectValue.value,
          e: context.e
        });
      },
      onFocus: function onFocus(_, context) {
        var _props2$onFocus;
        (_props2$onFocus = props2.onFocus) === null || _props2$onFocus === void 0 || _props2$onFocus.call(props2, {
          value: treeSelectValue.value,
          e: context.e
        });
      }
    });
    return function () {
      return createVNode(SelectInput, mergeProps({
        "class": "".concat(classPrefix.value, "-tree-select"),
        "value": nodeInfo.value,
        "inputValue": innerVisible.value ? innerInputValue.value : "",
        "popupVisible": innerVisible.value,
        "disabled": tDisabled.value,
        "multiple": props2.multiple,
        "loading": props2.loading,
        "clearable": props2.clearable,
        "autoWidth": props2.autoWidth,
        "borderless": props2.borderless,
        "readonly": isReadonly.value,
        "placeholder": inputPlaceholder.value,
        "allowInput": props2.filterable || isFunction(props2.filter),
        "minCollapsedNum": props2.minCollapsedNum,
        "collapsed-items": props2.collapsedItems,
        "popupProps": _objectSpread({
          overlayClassName: popupClass.value
        }, props2.popupProps),
        "inputProps": _objectSpread({
          size: props2.size
        }, props2.inputProps),
        "tagInputProps": {
          size: props2.size
        },
        "tagProps": _objectSpread({
          maxWidth: 300
        }, props2.tagProps),
        "label": function label() {
          return renderTNodeJSX("prefixIcon");
        },
        "suffix": props2.suffix,
        "suffixIcon": function suffixIcon() {
          if (props2.suffixIcon || slots.suffixIcon) {
            return renderTNodeJSX("suffixIcon");
          }
          return renderSuffixIcon();
        },
        "valueDisplay": function valueDisplay() {
          return renderTNodeJSX("valueDisplay", {
            params: props2.multiple ? {
              value: nodeInfo.value,
              onClose: function onClose(index) {
                var value2 = nodeInfo.value.map(function (node) {
                  return node.value;
                });
                tagChange(value2, {
                  trigger: "tag-remove",
                  index: index,
                  item: value2[index]
                });
              }
            } : {
              value: nodeInfo.value || _defineProperty(_defineProperty({}, realLabel.value, ""), realValue.value, void 0)
            }
          });
        }
      }, selectInputEvent.value), {
        suffix: slots.suffix,
        panel: function panel() {
          return createVNode("div", {
            "class": ["".concat(classPrefix.value, "-select__dropdown-inner"), "".concat(classPrefix.value, "-select__dropdown-inner--size-").concat(dropdownInnerSize.value)]
          }, [renderTNodeJSX("panelTopContent"), withDirectives(createVNode("p", {
            "class": ["".concat(classPrefix.value, "-select-loading-tips"), "".concat(classPrefix.value, "-select__right-icon-polyfill")]
          }, [renderDefaultTNode("loadingText", {
            defaultNode: createVNode("div", {
              "class": "".concat(classPrefix.value, "-select__empty")
            }, [globalConfig.value.loadingText])
          })]), [[vShow, props2.loading && !tDisabled.value]]), renderTree(), renderTNodeJSX("panelBottomContent")]);
        },
        collapsedItems: slots.collapsedItems
      });
    };
  }
});

export { _TreeSelect as default };
//# sourceMappingURL=tree-select.mjs.map
