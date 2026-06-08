/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var tdesignIconsVueNext = require('tdesign-icons-vue-next');
var color = require('../../../_chunks/dep-8ec26d87.js');
require('@babel/runtime/helpers/classCallCheck');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/toConsumableArray');
var colorPicker_hooks_index = require('../../hooks/index.js');
require('@babel/runtime/helpers/typeof');
require('../../../_chunks/dep-953a77eb.js');
var index$1 = require('../../../_chunks/dep-8382953f.js');
require('../../../config-provider/hooks/useConfig.js');
var index = require('../../../_chunks/dep-31c76dc6.js');
require('@babel/runtime/helpers/slicedToArray');
require('../../../_chunks/dep-cc66acf1.js');
var colorPicker_components_panel_baseProps = require('./base-props.js');
require('tinycolor2');
require('../../../_chunks/dep-4291c54c.js');
require('../../../_chunks/dep-a55e8a08.js');
require('../../../_chunks/dep-b3b464e8.js');
require('../../../_chunks/dep-87589faa.js');
require('../../../_chunks/dep-05f89f0d.js');
require('../../../_chunks/dep-4ccaead1.js');
require('../../../_chunks/dep-ecaaae91.js');
require('../../../_chunks/dep-8abdfb41.js');
require('../../../_chunks/dep-5d7e2375.js');
require('../../../_chunks/dep-94a7dc2d.js');
require('dayjs');
require('../../../_chunks/dep-92e23f17.js');
require('../../../_chunks/dep-0ff616fe.js');
require('../../../_chunks/dep-5f52cd42.js');
require('../../../_chunks/dep-48f60c78.js');
require('../../../_chunks/dep-0813861e.js');
require('../../../_chunks/dep-f57bcb19.js');
require('../../../_chunks/dep-dc4bbc14.js');
require('../../../_chunks/dep-e27ea667.js');
require('../../../_chunks/dep-165ca38a.js');
require('../../../_chunks/dep-32412d92.js');
require('../../../_chunks/dep-a8a3d718.js');
require('../../../_chunks/dep-54e566d9.js');
require('../../../_chunks/dep-591a72de.js');
require('../../../_chunks/dep-8adeee89.js');
require('../../../_chunks/dep-4d2ef282.js');
require('../../../_chunks/dep-929933ce.js');
require('../../../_chunks/dep-6b1f0ef8.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var SwatchesPanel = Vue.defineComponent({
  name: "SwatchesPanel",
  props: _objectSpread(_objectSpread({}, colorPicker_components_panel_baseProps["default"]), {}, {
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
    var baseClassName = colorPicker_hooks_index.useBaseClassName();
    var _useGlobalIcon = index.useGlobalIcon({
        DeleteIcon: tdesignIconsVueNext.DeleteIcon,
        AddIcon: tdesignIconsVueNext.AddIcon
      }),
      DeleteIcon = _useGlobalIcon.DeleteIcon,
      AddIcon = _useGlobalIcon.AddIcon;
    var _useCommonClassName = index$1.useCommonClassName(),
      STATUS = _useCommonClassName.STATUS;
    var statusClassNames = STATUS.value;
    var visiblePopConfirm = Vue.ref(false);
    var setVisiblePopConfirm = function setVisiblePopConfirm(visible) {
      visiblePopConfirm.value = visible;
    };
    var handleClick = function handleClick(color) {
      return props.onSetColor(color);
    };
    var isEqualCurrentColor = function isEqualCurrentColor(color$1) {
      return color.Color.compare(color$1, props.color.css);
    };
    var selectedColorIndex = Vue.computed(function () {
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
        return Vue.createVNode("div", {
          "class": "".concat(swatchesClass, "--actions")
        }, [Vue.createVNode("span", {
          "role": "button",
          "class": "".concat(baseClassName.value, "__icon"),
          "onClick": function onClick() {
            return props.handleAddColor();
          }
        }, [Vue.createVNode(AddIcon, null, null)]), props.colors.length > 0 ? Vue.createVNode("span", {
          "role": "button",
          "class": "".concat(baseClassName.value, "__icon"),
          "onClick": function onClick() {
            return handleRemoveColor();
          }
        }, [Vue.createVNode(DeleteIcon, null, null)]) : null]);
      };
      return Vue.createVNode("div", {
        "class": swatchesClass
      }, [Vue.createVNode("h3", {
        "class": "".concat(swatchesClass, "--title")
      }, [Vue.createVNode("span", null, [props.title]), renderActions()]), Vue.createVNode("ul", {
        "class": ["".concat(swatchesClass, "--items"), "narrow-scrollbar"]
      }, [props.colors.map(function (color) {
        return Vue.createVNode("li", {
          "class": ["".concat(swatchesClass, "--item"), isEqualCurrentColor(color) && props.editable ? statusClassNames.active : ""],
          "title": color,
          "key": color,
          "onClick": function onClick() {
            if (props.disabled) {
              return;
            }
            handleClick(color);
          }
        }, [Vue.createVNode("div", {
          "class": ["".concat(swatchesClass, "--color"), "".concat(baseClassName.value, "--bg-alpha")]
        }, [Vue.createVNode("span", {
          "class": "".concat(swatchesClass, "--inner"),
          "style": {
            background: color
          }
        }, null)])]);
      })])]);
    };
  }
});

exports["default"] = SwatchesPanel;
//# sourceMappingURL=swatches.js.map
