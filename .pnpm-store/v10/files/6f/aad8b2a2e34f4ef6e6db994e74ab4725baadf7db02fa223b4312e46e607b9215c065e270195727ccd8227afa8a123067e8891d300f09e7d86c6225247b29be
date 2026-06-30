/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import _toConsumableArray from '@babel/runtime/helpers/toConsumableArray';
import { defineComponent, ref, computed, watch, onBeforeUnmount, createVNode, h } from 'vue';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { isString, escapeRegExp, isFunction } from 'lodash-es';
import _HighlightOption from './highlight-option.js';
import '@babel/runtime/helpers/typeof';
import { o as on, c as off } from '../../_chunks/dep-16bcfabc.js';
import { u as usePrefixClass } from '../../_chunks/dep-9e6d8a78.js';
import '@babel/runtime/helpers/slicedToArray';
import { l as log } from '../../_chunks/dep-8295e674.js';
import '../../_chunks/dep-880d05b9.js';
import { A as ARROW_UP_REG, a as ARROW_DOWN_REG, E as ENTER_REG } from '../../_chunks/dep-30c631d1.js';
import { useConfig } from '../../config-provider/hooks/useConfig.js';
import '../../_chunks/dep-fe23be6e.js';
import '../../_chunks/dep-81b01cae.js';
import '../../config-provider/utils/context.js';
import '../../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var AutoCompleteOptionList = defineComponent({
  name: "AutoCompleteOptionList",
  props: {
    sizeClassNames: Object,
    value: String,
    size: String,
    options: Array,
    popupVisible: Boolean,
    highlightKeyword: Boolean,
    filterable: Boolean,
    filter: Function,
    empty: [String, Function]
  },
  emits: ["select"],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
      slots = _ref.slots,
      expose = _ref.expose;
    var active = ref("");
    var classPrefix = usePrefixClass();
    var _useConfig = useConfig("autoComplete"),
      globalConfig = _useConfig.globalConfig;
    var classes = computed(function () {
      return "".concat(classPrefix.value, "-select__list");
    });
    var optionClasses = computed(function () {
      return ["".concat(classPrefix.value, "-select-option"), _defineProperty({}, props.sizeClassNames.value[props.size], props.size)];
    });
    var tOptions = computed(function () {
      var options = (props.options || []).map(function (item) {
        var option = {};
        if (isString(item)) {
          option = {
            text: item,
            label: item
          };
        } else {
          if (item.text && !isString(item.text)) {
            log.warn("AutoComplete", "`text` must be a string.");
          }
          if (!item.text) {
            if (isString(item.label)) {
              option = _objectSpread(_objectSpread({}, item), {}, {
                text: item.label
              });
            } else {
              log.warn("AutoComplete", "one of `label` and `text` must be a existed string.");
            }
          } else {
            option = item;
          }
        }
        return option;
      });
      if (props.filter) {
        options = options.filter(function (option) {
          return props.filter(props.value, option);
        });
      } else if (props.filterable) {
        var regExp = new RegExp(escapeRegExp(props.value), "i");
        options = options.filter(function (item) {
          return regExp.test(item.text);
        });
      }
      return options;
    });
    var onOptionClick = function onOptionClick(e) {
      var liNode = e.target;
      while (liNode && liNode.tagName !== "LI") {
        liNode = liNode.parentNode;
      }
      var keyword = liNode.getAttribute("title");
      active.value = keyword;
      emit("select", keyword, {
        e: e
      });
    };
    var onKeyInnerPress = function onKeyInnerPress(e) {
      if (ARROW_UP_REG.test(e.code) || ARROW_UP_REG.test(e.key)) {
        var _tOptions$value$newIn;
        var index = tOptions.value.findIndex(function (item) {
          return item.text === active.value;
        });
        var newIndex = index - 1 < 0 ? tOptions.value.length - 1 : index - 1;
        active.value = (_tOptions$value$newIn = tOptions.value[newIndex]) === null || _tOptions$value$newIn === void 0 ? void 0 : _tOptions$value$newIn.text;
      } else if (ARROW_DOWN_REG.test(e.code) || ARROW_DOWN_REG.test(e.key)) {
        var _tOptions$value$_newI;
        var _index = tOptions.value.findIndex(function (item) {
          return item.text === active.value;
        });
        var _newIndex = _index + 1 >= tOptions.value.length ? 0 : _index + 1;
        active.value = (_tOptions$value$_newI = tOptions.value[_newIndex]) === null || _tOptions$value$_newI === void 0 ? void 0 : _tOptions$value$_newI.text;
      } else if (ENTER_REG.test(e.code) || ENTER_REG.test(e.key)) {
        if (active.value) {
          emit("select", active.value, {
            e: e
          });
        }
      }
    };
    var addKeyboardListener = function addKeyboardListener() {
      on(document, "keydown", onKeyInnerPress);
    };
    var removeKeyboardListener = function removeKeyboardListener() {
      off(document, "keydown", onKeyInnerPress);
    };
    expose({
      addKeyboardListener: addKeyboardListener,
      removeKeyboardListener: removeKeyboardListener
    });
    watch(function () {
      return props.popupVisible;
    }, function () {
      if (props.popupVisible) {
        addKeyboardListener();
      } else {
        removeKeyboardListener();
      }
    }, {
      immediate: true
    });
    watch(function () {
      return props.value;
    }, function () {
      if (!props.value) {
        active.value = "";
      }
    }, {
      immediate: true
    });
    onBeforeUnmount(function () {
      removeKeyboardListener();
    });
    return function () {
      if (!tOptions.value.length) {
        return createVNode("div", {
          "class": "".concat(classPrefix.value, "-auto-complete__panel--empty")
        }, [props.empty || globalConfig.value.empty]);
      }
      return createVNode("ul", {
        "class": classes.value
      }, [tOptions.value.map(function (item) {
        var cls = _toConsumableArray(optionClasses.value);
        if (item.text === active.value) {
          cls.push("".concat(classPrefix.value, "-select-option--hover"));
        }
        var labelNode = item.label;
        if (isFunction(item.label)) {
          labelNode = item.label(h);
        } else if (slots.option) {
          var _slots$option;
          labelNode = (_slots$option = slots.option) === null || _slots$option === void 0 ? void 0 : _slots$option.call(slots, {
            option: item
          });
        }
        var content = labelNode || item.text;
        return createVNode("li", {
          "key": item.text,
          "class": cls,
          "title": item.text,
          "onClick": onOptionClick
        }, [isString(content) && props.highlightKeyword ? createVNode(_HighlightOption, {
          "content": content,
          "keyword": props.value
        }, null) : content]);
      })]);
    };
  }
});

export { AutoCompleteOptionList as default };
//# sourceMappingURL=option-list.js.map
