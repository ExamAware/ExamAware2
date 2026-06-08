/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, ref, computed, createVNode } from 'vue';
import { _ as _defineProperty } from '../../../_chunks/dep-1dacc319.mjs';
import { DeleteIcon, AddIcon } from 'tdesign-icons-vue-next';
import '../../utils/index.mjs';
import { useBaseClassName } from '../../hooks/index.mjs';
import { i as useGlobalIcon, c as useCommonClassName } from '../../../_chunks/dep-7673347f.mjs';
import baseProps from './base-props.mjs';
import { C as Color } from '../../../_chunks/dep-149cfe2d.mjs';
import '../../../_chunks/dep-257428bc.mjs';
import '../../../_chunks/dep-26597e10.mjs';
import 'lodash-es';
import '../../../_chunks/dep-00b4e06a.mjs';
import '../../../_chunks/dep-9f459d8b.mjs';
import '../../../_chunks/dep-51a43106.mjs';
import '../../../_chunks/dep-fe644854.mjs';
import '../../../config-provider/hooks/useConfig.mjs';
import '../../../config-provider/utils/context.mjs';
import '../../../_chunks/dep-a4c09318.mjs';
import '../../../_chunks/dep-ffb85102.mjs';
import '../../../_chunks/dep-ad588525.mjs';
import '../../../_chunks/dep-9003fde5.mjs';
import '../../../_chunks/dep-22ebd6af.mjs';
import '../../../_chunks/dep-cdd448ec.mjs';
import '../../../_chunks/dep-97ecacde.mjs';
import '../../../_chunks/dep-84fd47b3.mjs';
import '../../../_chunks/dep-d36c4a3f.mjs';
import '../../../_chunks/dep-b31d8258.mjs';

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
//# sourceMappingURL=swatches.mjs.map
