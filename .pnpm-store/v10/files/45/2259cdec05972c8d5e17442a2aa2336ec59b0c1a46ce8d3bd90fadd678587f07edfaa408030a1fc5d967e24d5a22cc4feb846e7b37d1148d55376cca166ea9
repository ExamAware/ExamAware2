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
      "id": "system-components"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "id": "fill1",
        "fill": "props.fillColor1",
        "d": "M11.9994 9.75L15.8484 12V16.5L11.9994 18.75L8.15039 16.5V12L11.9994 9.75Z"
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
          "d": "M14.2223 5.25C14.2223 6.49264 13.2274 7.5 12.0001 7.5C10.7728 7.5 9.77783 6.49264 9.77783 5.25C9.77783 4.00736 10.7728 3 12.0001 3C13.2274 3 14.2223 4.00736 14.2223 5.25Z"
        }
      }, {
        "tag": "path",
        "attrs": {
          "fill": "props.fillColor2",
          "d": "M22.0001 18.75C22.0001 19.9926 21.0052 21 19.7779 21C18.5506 21 17.5557 19.9926 17.5557 18.75C17.5557 17.5074 18.5506 16.5 19.7779 16.5C21.0052 16.5 22.0001 17.5074 22.0001 18.75Z"
        }
      }, {
        "tag": "path",
        "attrs": {
          "fill": "props.fillColor2",
          "d": "M6.44444 18.75C6.44444 19.9926 5.44952 21 4.22222 21C2.99492 21 2 19.9926 2 18.75C2 17.5074 2.99492 16.5 4.22222 16.5C5.44952 16.5 6.44444 17.5074 6.44444 18.75Z"
        }
      }]
    }, {
      "tag": "path",
      "attrs": {
        "id": "stroke1",
        "stroke": "props.strokeColor1",
        "d": "M15.8491 16.5L17.9079 17.534M12 9.75V7.5M8.15077 16.5L6.09277 17.5351M11.9999 9.75L15.8489 12V16.5L11.9999 18.75L8.15088 16.5V12L11.9999 9.75ZM14.2223 5.25C14.2223 6.49264 13.2274 7.5 12.0001 7.5C10.7728 7.5 9.77783 6.49264 9.77783 5.25C9.77783 4.00736 10.7728 3 12.0001 3C13.2274 3 14.2223 4.00736 14.2223 5.25ZM22.0001 18.75C22.0001 19.9926 21.0052 21 19.7779 21C18.5506 21 17.5557 19.9926 17.5557 18.75C17.5557 17.5074 18.5506 16.5 19.7779 16.5C21.0052 16.5 22.0001 17.5074 22.0001 18.75ZM6.44444 18.75C6.44444 19.9926 5.44952 21 4.22222 21C2.99492 21 2 19.9926 2 18.75C2 17.5074 2.99492 16.5 4.22222 16.5C5.44952 16.5 6.44444 17.5074 6.44444 18.75Z",
        "strokeLinecap": "square",
        "strokeWidth": "props.strokeWidth"
      }
    }]
  }]
};
var systemComponents = vue.defineComponent({
  name: "SystemComponentsIcon",
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
    var finalCls = vue.computed(() => ["t-icon", "t-icon-system-components", className.value]);
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

exports.default = systemComponents;
//# sourceMappingURL=system-components.js.map
