/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, ref, toRefs, watch, computed, onMounted, createVNode, mergeProps, withDirectives, vShow } from 'vue';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _asyncToGenerator from '@babel/runtime/helpers/asyncToGenerator';
import _toConsumableArray from '@babel/runtime/helpers/toConsumableArray';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import _regeneratorRuntime from '@babel/runtime/regenerator';
import { isFunction, isBoolean, isArray, isEmpty, isNil } from 'lodash-es';
import _typeof from '@babel/runtime/helpers/typeof';
import { Tree } from '../tree/index.js';
import { SelectInput } from '../select-input/index.js';
import FakeArrow from '../common-components/fake-arrow.js';
import props from './props.js';
import '../_chunks/dep-fe23be6e.js';
import { u as useTNodeJSX, b as useTNodeDefault } from '../_chunks/dep-2accc95a.js';
import { u as usePrefixClass } from '../_chunks/dep-9e6d8a78.js';
import { u as useDefaultValue } from '../_chunks/dep-aa34a263.js';
import { u as useDisabled } from '../_chunks/dep-f7dd3c12.js';
import '../_chunks/dep-880d05b9.js';
import { u as useReadonly } from '../_chunks/dep-47b13687.js';
import { u as useVModel } from '../_chunks/dep-51e5a827.js';
import { u as useEventForward } from '../_chunks/dep-4d7b9152.js';
import { useConfig } from '../config-provider/hooks/useConfig.js';
import '../tree/tree.js';
import '../tree/utils/adapt.js';
import '../_chunks/dep-664b8b22.js';
import '../_chunks/dep-3a7a2ef1.js';
import '../_chunks/dep-1da4c51c.js';
import '../_chunks/dep-6264b0a7.js';
import '../_chunks/dep-16bcfabc.js';
import '../_chunks/dep-90df3fa4.js';
import '../_chunks/dep-80a77612.js';
import 'tdesign-icons-vue-next';
import '../checkbox/index.js';
import '../checkbox/checkbox.js';
import '../checkbox/props.js';
import '../_chunks/dep-4f8b6591.js';
import '../_chunks/dep-d2a6e7a4.js';
import '../_chunks/dep-2ea19dca.js';
import '../checkbox/consts/index.js';
import '../checkbox/hooks/useCheckboxLazyLoad.js';
import '../checkbox/hooks/useKeyboardEvent.js';
import '../_chunks/dep-30c631d1.js';
import '../_chunks/dep-81b01cae.js';
import '../_chunks/dep-fb805f69.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
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
import '../_chunks/dep-8295e674.js';
import '../tree/hooks/useDragHandle.js';
import '../tree/hooks/useDraggable.js';
import '../tree/utils/index.js';
import '../tree/hooks/useTreeAction.js';
import '../tree/hooks/useTreeNodes.js';
import '../tree/tree-item.js';
import '../tree/hooks/useItemState.js';
import '../tree/hooks/useTreeItem.js';
import '../tree/hooks/useItemEvents.js';
import '../tree/hooks/useRenderIcon.js';
import '../tree/hooks/useRenderLabel.js';
import '../tree/hooks/useRenderLine.js';
import '../tree/hooks/useRenderOperations.js';
import '../tree/hooks/useTreeEvents.js';
import '../tree/hooks/useTreeScroll.js';
import '../tree/hooks/useTreeState.js';
import '../tree/hooks/useTreeStore.js';
import '../_chunks/dep-258d1362.js';
import 'mitt';
import '../tree/hooks/useTreeStyles.js';
import '../tree/props.js';
import 'tdesign-vue-next/esm/common/style/web/components/tree/_index.less';
import '../select-input/select-input.js';
import '../popup/index.js';
import '../popup/popup.js';
import '@popperjs/core';
import '../popup/container.js';
import '../popup/props.js';
import 'tdesign-vue-next/esm/common/style/web/components/popup/_index.less';
import '../select-input/props.js';
import '../select-input/hooks/useMultiple.js';
import '../tag-input/index.js';
import '../tag-input/tag-input.js';
import '../input/index.js';
import '../input/input.js';
import '../input/props.js';
import '../input/hooks/useInput.js';
import '../form/consts/index.js';
import '../input/hooks/useLengthLimit.js';
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
import '../tag/index.js';
import '../tag/tag.js';
import 'tinycolor2';
import '../tag/props.js';
import '../tag/check-tag.js';
import '../tag/check-tag-props.js';
import '../tag/check-tag-group.js';
import '../tag/check-tag-group-props.js';
import 'tdesign-vue-next/esm/common/style/web/components/tag/_index.less';
import 'tdesign-vue-next/esm/common/style/web/components/tag-input/_index.less';
import '../select-input/hooks/useOverlayInnerStyle.js';
import '../select-input/hooks/useSingle.js';
import 'tdesign-vue-next/esm/common/style/web/components/select-input/_index.less';

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
//# sourceMappingURL=tree-select.js.map
