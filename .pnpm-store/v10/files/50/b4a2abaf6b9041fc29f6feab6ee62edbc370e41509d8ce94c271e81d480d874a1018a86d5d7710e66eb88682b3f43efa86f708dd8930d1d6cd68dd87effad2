'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var defineProperty = require('../_chunks/dep-23fc4c9b.js');
var vue = require('vue');
var utils_renderFn = require('../utils/render-fn.js');
var utils_useSizeProps = require('../utils/use-size-props.js');
require('../utils/use-common-classname.js');
require('../utils/config-context.js');

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { defineProperty._defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var element = {
  "tag": "svg",
  "attrs": {
    "fill": "none",
    "viewBox": "0 0 24 24",
    "width": "1em",
    "height": "1em"
  },
  "children": [{
    "tag": "g",
    "attrs": {
      "id": "thunderstorm-night"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "id": "fill2",
        "fill": "props.fillColor2",
        "d": "M15.512 11.3215C15.4871 11.3215 15.4622 11.3217 15.4374 11.3221C15.0832 9.28766 13.5035 7.65335 11.4542 7.14708C11.0235 7.04069 10.5721 6.98412 10.107 6.98412C10.0811 6.98412 10.0552 6.98429 10.0293 6.98464C10.2676 4.33646 12.3813 2.22889 15.0322 2C15.0185 2.15813 15.0116 2.31817 15.0116 2.47984C15.0116 5.52023 17.4763 7.98495 20.5167 7.98495C20.6783 7.98495 20.8384 7.97798 20.9965 7.96433C20.8388 9.79082 19.7892 11.3623 18.2854 12.241C18.1188 12.1154 17.9428 12.0009 17.7586 11.8987C17.0973 11.5315 16.3301 11.3215 15.512 11.3215Z"
      }
    }, {
      "tag": "path",
      "attrs": {
        "id": "stroke2",
        "stroke": "props.strokeColor2",
        "d": "M10.4997 21.9805L13.022 17.9805H9.02148L11.4997 13.9805M15.4374 11.3221C15.4622 11.3217 15.4871 11.3215 15.512 11.3215C16.3301 11.3215 17.0973 11.5315 17.7586 11.8987C17.9428 12.0009 18.1188 12.1154 18.2854 12.241C19.7892 11.3623 20.8388 9.79082 20.9965 7.96433C20.8384 7.97798 20.6783 7.98495 20.5167 7.98495C17.4763 7.98495 15.0116 5.52023 15.0116 2.47984C15.0116 2.31817 15.0185 2.15813 15.0322 2C12.3813 2.22889 10.2676 4.33646 10.0293 6.98464C10.0552 6.98429 10.0811 6.98412 10.107 6.98412C10.5721 6.98412 11.0235 7.04069 11.4542 7.14708C13.5035 7.65335 15.0832 9.28766 15.4374 11.3221Z",
        "strokeLinecap": "square",
        "strokeWidth": "props.strokeWidth"
      }
    }, {
      "tag": "path",
      "attrs": {
        "id": "stroke1",
        "stroke": "props.strokeColor1",
        "d": "M4.00186 19.6358C2.81538 19.068 2 17.889 2 16.5266C2 14.8784 3.19334 13.4986 4.79338 13.1447C4.7337 12.8349 4.70251 12.5156 4.70251 12.1892C4.70251 9.31466 7.12241 6.98438 10.1075 6.98438C10.5726 6.98438 11.024 7.04095 11.4547 7.14734C13.504 7.65361 15.0837 9.28792 15.4379 11.3223C15.4627 11.3219 15.4876 11.3217 15.5125 11.3217C16.3307 11.3217 17.0978 11.5318 17.7591 11.8989C19.1084 12.6481 20.0167 14.0515 20.0167 15.6591C20.0167 17.4379 18.9048 18.9666 17.3137 19.6358",
        "strokeLinecap": "square",
        "strokeWidth": "props.strokeWidth"
      }
    }]
  }]
};
var thunderstormNight = vue.defineComponent({
  name: "ThunderstormNightIcon",
  props: {
    size: {
      type: String
    },
    onClick: {
      type: Function
    },
    fillColor: {
      type: [Array, String]
    },
    strokeColor: {
      type: [Array, String]
    },
    strokeWidth: {
      type: Number
    }
  },
  setup(props, _ref) {
    var {
      attrs
    } = _ref;
    var propsSize = vue.computed(() => props.size);
    var strokeColor1 = vue.computed(() => {
      if (!props.strokeColor) return "currentColor";
      return Array.isArray(props.strokeColor) ? props.strokeColor[0] : props.strokeColor;
    });
    var strokeColor2 = vue.computed(() => {
      var _props$strokeColor$;
      if (!props.strokeColor) return "currentColor";
      return Array.isArray(props.strokeColor) ? (_props$strokeColor$ = props.strokeColor[1]) !== null && _props$strokeColor$ !== void 0 ? _props$strokeColor$ : props.strokeColor[0] : props.strokeColor;
    });
    var fillColor1 = vue.computed(() => {
      if (!props.fillColor) return "transparent";
      return Array.isArray(props.fillColor) ? props.fillColor[0] : props.fillColor;
    });
    var fillColor2 = vue.computed(() => {
      var _props$fillColor$;
      if (!props.fillColor) return "transparent";
      return Array.isArray(props.fillColor) ? (_props$fillColor$ = props.fillColor[1]) !== null && _props$fillColor$ !== void 0 ? _props$fillColor$ : props.fillColor[0] : props.fillColor;
    });
    var filledColor = vue.computed(() => {
      if (!props.fillColor) return "currentColor";
      return Array.isArray(props.fillColor) ? props.fillColor[0] : props.fillColor;
    });
    var {
      className,
      style
    } = utils_useSizeProps['default'](propsSize);
    var finalCls = vue.computed(() => ["t-icon", "t-icon-thunderstorm-night", className.value]);
    var finalStyle = vue.computed(() => _objectSpread(_objectSpread({
      fill: "none"
    }, style.value), attrs.style));
    var finalProps = vue.computed(() => ({
      class: finalCls.value,
      style: finalStyle.value,
      onClick: e => {
        var _props$onClick;
        return (_props$onClick = props.onClick) === null || _props$onClick === void 0 ? void 0 : _props$onClick.call(props, {
          e
        });
      },
      strokeColor1: strokeColor1.value,
      strokeColor2: strokeColor2.value,
      fillColor1: fillColor1.value,
      fillColor2: fillColor2.value,
      strokeWidth: props.strokeWidth || 2,
      filledColor: filledColor.value
    }));
    return () => utils_renderFn['default'](element, finalProps.value);
  }
});

exports.default = thunderstormNight;
//# sourceMappingURL=thunderstorm-night.js.map
