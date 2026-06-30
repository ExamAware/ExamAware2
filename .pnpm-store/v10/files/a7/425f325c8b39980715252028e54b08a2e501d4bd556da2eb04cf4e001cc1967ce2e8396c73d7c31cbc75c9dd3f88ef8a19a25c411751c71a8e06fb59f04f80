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
      "id": "gesture-pray"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "id": "fill1",
        "fill": "props.fillColor1",
        "d": "M13.6221 2.30305C14.4137 2.28757 15.1051 2.83572 15.2705 3.60999L17.4893 13.9953L19.2041 15.7102L15.0886 19.8257L12.8543 17.5914C12.3124 17.0495 12.0064 16.3159 12.0021 15.55H11.996C11.9917 16.3159 11.6856 17.0495 11.1438 17.5914L8.90947 19.8257L4.79395 15.7102L6.50874 13.9953L8.72754 3.60999C8.89296 2.83573 9.5843 2.28758 10.3759 2.30305C11.274 2.32062 11.9933 3.05236 11.996 3.95003H12.002C12.0048 3.05236 12.724 2.32064 13.6221 2.30305Z"
      }
    }, {
      "tag": "g",
      "attrs": {
        "id": "fill2"
      },
      "children": [{
        "tag": "path",
        "attrs": {
          "fill": "props.fillColor2",
          "d": "M19.2039 15.71L15.0884 19.8255L17.1461 21.8832L21.2616 17.7677L19.2039 15.71Z"
        }
      }, {
        "tag": "path",
        "attrs": {
          "fill": "props.fillColor2",
          "d": "M4.79408 15.71L8.90959 19.8255L6.85184 21.8832L2.73633 17.7677L4.79408 15.71Z"
        }
      }]
    }, {
      "tag": "path",
      "attrs": {
        "id": "stroke1",
        "stroke": "props.strokeColor1",
        "d": "M19.2041 15.7102L17.4893 13.9954L15.2705 3.60999C15.1051 2.83572 14.4137 2.28757 13.6221 2.30305C12.7223 2.32066 12.002 3.05519 12.002 3.95525L12.002 15.5336C12.002 16.3054 12.3086 17.0456 12.8543 17.5914L15.0886 19.8257M19.2041 15.7102L15.0886 19.8257M19.2041 15.7102L21.2619 17.7679L17.1463 21.8834L15.0886 19.8257M4.79408 15.7102L6.50888 13.9954L8.72767 3.60999C8.89309 2.83572 9.58444 2.28757 10.376 2.30305C11.2759 2.32066 11.9962 3.05519 11.9962 3.95525L11.9962 15.5336C11.9962 16.3054 11.6896 17.0456 11.1439 17.5914L8.90959 19.8257M4.79408 15.7102L8.90959 19.8257M4.79408 15.7102L2.73633 17.7679L6.85184 21.8834L8.90959 19.8257",
        "strokeLinecap": "square",
        "strokeWidth": "props.strokeWidth"
      }
    }]
  }]
};
var gesturePray = vue.defineComponent({
  name: "GesturePrayIcon",
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
    var finalCls = vue.computed(() => ["t-icon", "t-icon-gesture-pray", className.value]);
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

exports.default = gesturePray;
//# sourceMappingURL=gesture-pray.js.map
