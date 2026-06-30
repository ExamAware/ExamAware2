/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, ref, computed, createVNode } from 'vue';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { DeleteIcon, AddIcon } from 'tdesign-icons-vue-next';
import { C as Color } from '../../../_chunks/dep-110706c1.js';
import '@babel/runtime/helpers/classCallCheck';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/toConsumableArray';
import { useBaseClassName } from '../../hooks/index.js';
import 'lodash-es';
import '@babel/runtime/helpers/typeof';
import '../../../_chunks/dep-fe23be6e.js';
import { u as useCommonClassName } from '../../../_chunks/dep-4f8b6591.js';
import '../../../config-provider/hooks/useConfig.js';
import { u as useGlobalIcon } from '../../../_chunks/dep-3a7a2ef1.js';
import '@babel/runtime/helpers/slicedToArray';
import '../../../_chunks/dep-880d05b9.js';
import baseProps from './base-props.js';
import 'tinycolor2';
import '../../../_chunks/dep-8d136a55.js';
import '../../../_chunks/dep-9e6d8a78.js';
import '../../../_chunks/dep-81b01cae.js';
import '../../../config-provider/utils/context.js';
import '../../../_chunks/dep-938cd955.js';
import 'dayjs';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var SwatchesPanel = defineComponent({
  name: "SwatchesPanel",
  props: _objectSpread(_objectSpread({}, baseProps), {}, {
    colors: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    title: {
      type: String,
      "default": "\u7CFB\u7EDF\u8272\u5F69"
    },
    editable: {
      type: Boolean,
      "default": false
    },
    onSetColor: {
      type: Function,
      "default": function _default() {
        return function () {};
      }
    },
    handleAddColor: {
      type: Function,
      "default": function _default() {
        return function () {};
      }
    }
  }),
  setup: function setup(props) {
    var baseClassName = useBaseClassName();
    var _useGlobalIcon = useGlobalIcon({
        DeleteIcon: DeleteIcon,
        AddIcon: AddIcon
      }),
      DeleteIcon$1 = _useGlobalIcon.DeleteIcon,
      AddIcon$1 = _useGlobalIcon.AddIcon;
    var _useCommonClassName = useCommonClassName(),
      STATUS = _useCommonClassName.STATUS;
    var statusClassNames = STATUS.value;
    var visiblePopConfirm = ref(false);
    var setVisiblePopConfirm = function setVisiblePopConfirm(visible) {
      visiblePopConfirm.value = visible;
    };
    var handleClick = function handleClick(color) {
      return props.onSetColor(color);
    };
    var isEqualCurrentColor = function isEqualCurrentColor(color) {
      return Color.compare(color, props.color.css);
    };
    var selectedColorIndex = computed(function () {
      return props.colors.findIndex(function (color) {
        return isEqualCurrentColor(color);
      });
    });
    var handleRemoveColor = function handleRemoveColor() {
      var colors = props.colors;
      var selectedIndex = selectedColorIndex.value;
      if (selectedIndex === -1) return;
      colors.splice(selectedIndex, 1);
      props.onChange(colors);
      setVisiblePopConfirm(false);
    };
    return function () {
      var swatchesClass = "".concat(baseClassName.value, "__swatches");
      var renderActions = function renderActions() {
        if (!props.editable) {
          return null;
        }
        return createVNode("div", {
          "class": "".concat(swatchesClass, "--actions")
        }, [createVNode("span", {
          "role": "button",
          "class": "".concat(baseClassName.value, "__icon"),
          "onClick": function onClick() {
            return props.handleAddColor();
          }
        }, [createVNode(AddIcon$1, null, null)]), props.colors.length > 0 ? createVNode("span", {
          "role": "button",
          "class": "".concat(baseClassName.value, "__icon"),
          "onClick": function onClick() {
            return handleRemoveColor();
          }
        }, [createVNode(DeleteIcon$1, null, null)]) : null]);
      };
      return createVNode("div", {
        "class": swatchesClass
      }, [createVNode("h3", {
        "class": "".concat(swatchesClass, "--title")
      }, [createVNode("span", null, [props.title]), renderActions()]), createVNode("ul", {
        "class": ["".concat(swatchesClass, "--items"), "narrow-scrollbar"]
      }, [props.colors.map(function (color) {
        return createVNode("li", {
          "class": ["".concat(swatchesClass, "--item"), isEqualCurrentColor(color) && props.editable ? statusClassNames.active : ""],
          "title": color,
          "key": color,
          "onClick": function onClick() {
            if (props.disabled) {
              return;
            }
            handleClick(color);
          }
        }, [createVNode("div", {
          "class": ["".concat(swatchesClass, "--color"), "".concat(baseClassName.value, "--bg-alpha")]
        }, [createVNode("span", {
          "class": "".concat(swatchesClass, "--inner"),
          "style": {
            background: color
          }
        }, null)])]);
      })])]);
    };
  }
});

export { SwatchesPanel as default };
//# sourceMappingURL=swatches.js.map
