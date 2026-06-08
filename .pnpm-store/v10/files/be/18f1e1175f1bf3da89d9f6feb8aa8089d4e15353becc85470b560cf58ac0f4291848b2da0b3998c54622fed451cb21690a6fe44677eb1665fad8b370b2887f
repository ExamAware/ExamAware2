/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { toRefs, computed, ref, createVNode, mergeProps } from 'vue';
import { _ as _defineProperty } from '../../_chunks/dep-1dacc319.mjs';
import { _ as _toConsumableArray } from '../../_chunks/dep-00b4e06a.mjs';
import { _ as _slicedToArray } from '../../_chunks/dep-9003fde5.mjs';
import { Tag } from '../../tag/index.mjs';
import { a as useTNodeJSX, u as usePrefixClass, j as useVModel, e as useDisabled, n as useReadonly, o as useEventForward } from '../../_chunks/dep-7673347f.mjs';
import '../../_chunks/dep-257428bc.mjs';
import '../../_chunks/dep-9f459d8b.mjs';
import '../../tag/tag.mjs';
import 'tdesign-icons-vue-next';
import 'lodash-es';
import '../../_chunks/dep-b31d8258.mjs';
import '../../tag/props.mjs';
import '../../config-provider/hooks/useConfig.mjs';
import '../../config-provider/utils/context.mjs';
import '../../_chunks/dep-a4c09318.mjs';
import '../../_chunks/dep-fe644854.mjs';
import '../../_chunks/dep-ffb85102.mjs';
import '../../_chunks/dep-ad588525.mjs';
import '../../_chunks/dep-51a43106.mjs';
import '../../_chunks/dep-22ebd6af.mjs';
import '../../_chunks/dep-cdd448ec.mjs';
import '../../_chunks/dep-97ecacde.mjs';
import '../../_chunks/dep-84fd47b3.mjs';
import '../../_chunks/dep-d36c4a3f.mjs';
import '../../tag/check-tag.mjs';
import '../../tag/check-tag-props.mjs';
import '../../tag/check-tag-group.mjs';
import '../../tag/check-tag-group-props.mjs';
import './style/css.mjs';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function useTagList(props) {
  var renderTNode = useTNodeJSX();
  var classPrefix = usePrefixClass();
  var _toRefs = toRefs(props),
    value = _toRefs.value,
    modelValue = _toRefs.modelValue,
    onRemove = _toRefs.onRemove,
    max = _toRefs.max,
    minCollapsedNum = _toRefs.minCollapsedNum,
    size = _toRefs.size,
    tagProps = _toRefs.tagProps,
    getDragProps = _toRefs.getDragProps;
  var _useVModel = useVModel(value, modelValue, props.defaultValue || [], props.onChange),
    _useVModel2 = _slicedToArray(_useVModel, 2),
    _tagValue = _useVModel2[0],
    setTagValue = _useVModel2[1];
  var tagValue = computed(function () {
    return _tagValue.value || [];
  });
  var oldInputValue = ref();
  var isDisabled = useDisabled();
  var isReadonly = useReadonly();
  var _onClose = function onClose(p) {
    var _onRemove$value;
    var arr = _toConsumableArray(tagValue.value);
    var _arr$splice = arr.splice(p.index, 1),
      _arr$splice2 = _slicedToArray(_arr$splice, 1),
      item = _arr$splice2[0];
    setTagValue(arr, _objectSpread(_objectSpread({
      trigger: "tag-remove"
    }, p), {}, {
      item: item
    }));
    (_onRemove$value = onRemove.value) === null || _onRemove$value === void 0 || _onRemove$value.call(onRemove, _objectSpread(_objectSpread({}, p), {}, {
      item: item,
      trigger: "tag-remove",
      value: arr
    }));
  };
  var clearAll = function clearAll(context) {
    setTagValue([], {
      trigger: "clear",
      e: context.e
    });
  };
  var onInnerEnter = function onInnerEnter(value2, context) {
    var _props$onEnter;
    var valueStr = value2 ? String(value2).trim() : "";
    var isLimitExceeded = max && tagValue.value.length >= max.value;
    var newValue = tagValue.value;
    if (!isLimitExceeded && valueStr) {
      newValue = tagValue.value.concat(String(valueStr));
      setTagValue(newValue, {
        trigger: "enter",
        index: newValue.length - 1,
        item: valueStr,
        e: context.e
      });
    }
    props === null || props === void 0 || (_props$onEnter = props.onEnter) === null || _props$onEnter === void 0 || _props$onEnter.call(props, newValue, _objectSpread(_objectSpread({}, context), {}, {
      inputValue: value2
    }));
  };
  var onInputBackspaceKeyUp = function onInputBackspaceKeyUp(value2) {
    if (!tagValue.value.length) return;
    oldInputValue.value = value2;
  };
  var onInputBackspaceKeyDown = function onInputBackspaceKeyDown(value2, context) {
    var e = context.e;
    if (!tagValue.value.length || e.key === "Process" || isReadonly.value) return;
    var isDelete = /(Backspace|NumpadDelete)/i.test(e.code) || /(Backspace|NumpadDelete)/i.test(e.key);
    if (!value2 && isDelete) {
      var _onRemove$value2;
      var index = tagValue.value.length - 1;
      var item = tagValue.value[index];
      var trigger = "backspace";
      var newValue = tagValue.value.slice(0, -1);
      setTagValue(newValue, {
        e: e,
        index: index,
        item: item,
        trigger: trigger
      });
      (_onRemove$value2 = onRemove.value) === null || _onRemove$value2 === void 0 || _onRemove$value2.call(onRemove, {
        e: e,
        index: index,
        item: item,
        trigger: trigger,
        value: newValue
      });
    }
    oldInputValue.value = value2;
  };
  var renderLabel = function renderLabel(_ref) {
    var displayNode = _ref.displayNode,
      label = _ref.label;
    var newList = minCollapsedNum.value ? tagValue.value.slice(0, minCollapsedNum.value) : tagValue.value;
    var list = displayNode ? [displayNode] : newList.map(function (item, index) {
      var _getDragProps$value;
      var tagContent = renderTNode("tag", {
        params: {
          value: item
        }
      });
      var tagEvents = useEventForward(tagProps.value, {
        onClose: function onClose(context) {
          return _onClose({
            e: context.e,
            index: index
          });
        }
      });
      return createVNode(Tag, mergeProps({
        "key": index,
        "size": size.value,
        "disabled": isDisabled.value,
        "closable": !isReadonly.value && !isDisabled.value
      }, (_getDragProps$value = getDragProps.value) === null || _getDragProps$value === void 0 ? void 0 : _getDragProps$value.call(getDragProps, index, item), tagEvents.value), {
        "default": function _default() {
          return [tagContent !== null && tagContent !== void 0 ? tagContent : item];
        }
      });
    }) || [];
    if (![null, void 0, ""].includes(label)) {
      list.unshift(createVNode("div", {
        "class": "".concat(classPrefix.value, "-tag-input__prefix"),
        "key": "label"
      }, [label]));
    }
    if (newList.length !== tagValue.value.length) {
      var len = tagValue.value.length - newList.length;
      var more = renderTNode("collapsedItems", {
        params: {
          value: tagValue.value,
          count: tagValue.value.length - minCollapsedNum.value,
          collapsedTags: tagValue.value.slice(minCollapsedNum.value, tagValue.value.length),
          collapsedSelectedItems: tagValue.value.slice(minCollapsedNum.value, tagValue.value.length),
          onClose: _onClose
        }
      });
      list.push(more !== null && more !== void 0 ? more : createVNode(Tag, mergeProps({
        "key": "more",
        "size": size.value
      }, tagProps.value), {
        "default": function _default() {
          return ["+", len];
        }
      }));
    }
    return list;
  };
  return {
    tagValue: tagValue,
    clearAll: clearAll,
    onClose: _onClose,
    onInnerEnter: onInnerEnter,
    onInputBackspaceKeyUp: onInputBackspaceKeyUp,
    onInputBackspaceKeyDown: onInputBackspaceKeyDown,
    renderLabel: renderLabel
  };
}

export { useTagList };
//# sourceMappingURL=useTagList.mjs.map
