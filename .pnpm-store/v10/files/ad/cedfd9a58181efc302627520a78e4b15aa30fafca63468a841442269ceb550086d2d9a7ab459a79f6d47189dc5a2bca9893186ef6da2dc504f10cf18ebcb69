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
      "id": "palette-1"
    },
    "children": [{
      "tag": "g",
      "attrs": {
        "id": "fill1"
      },
      "children": [{
        "tag": "path",
        "attrs": {
          "fill": "props.fillColor1",
          "d": "M15.8889 6.9375C15.8889 9.11212 14.1477 10.875 12 10.875C9.8522 10.875 8.11108 9.11212 8.11108 6.9375C8.11108 4.76288 9.8522 3 12 3C14.1477 3 15.8889 4.76288 15.8889 6.9375Z"
        }
      }, {
        "tag": "path",
        "attrs": {
          "fill": "props.fillColor1",
          "d": "M9.77778 17.0625C9.77778 19.2371 8.03666 21 5.88889 21C3.74111 21 2 19.2371 2 17.0625C2 14.8879 3.74111 13.125 5.88889 13.125C8.03666 13.125 9.77778 14.8879 9.77778 17.0625Z"
        }
      }, {
        "tag": "path",
        "attrs": {
          "fill": "props.fillColor1",
          "d": "M21.9999 17.0625C21.9999 19.2371 20.2588 21 18.1111 21C15.9633 21 14.2222 19.2371 14.2222 17.0625C14.2222 14.8879 15.9633 13.125 18.1111 13.125C20.2588 13.125 21.9999 14.8879 21.9999 17.0625Z"
        }
      }]
    }, {
      "tag": "g",
      "attrs": {
        "id": "stroke1"
      },
      "children": [{
        "tag": "path",
        "attrs": {
          "stroke": "props.strokeColor1",
          "d": "M15.8889 6.9375C15.8889 9.11212 14.1477 10.875 12 10.875C9.8522 10.875 8.11108 9.11212 8.11108 6.9375C8.11108 4.76288 9.8522 3 12 3C14.1477 3 15.8889 4.76288 15.8889 6.9375Z",
          "strokeWidth": "props.strokeWidth"
        }
      }, {
        "tag": "path",
        "attrs": {
          "stroke": "props.strokeColor1",
          "d": "M9.77778 17.0625C9.77778 19.2371 8.03666 21 5.88889 21C3.74111 21 2 19.2371 2 17.0625C2 14.8879 3.74111 13.125 5.88889 13.125C8.03666 13.125 9.77778 14.8879 9.77778 17.0625Z",
          "strokeWidth": "props.strokeWidth"
        }
      }, {
        "tag": "path",
        "attrs": {
          "stroke": "props.strokeColor1",
          "d": "M21.9999 17.0625C21.9999 19.2371 20.2588 21 18.1111 21C15.9633 21 14.2222 19.2371 14.2222 17.0625C14.2222 14.8879 15.9633 13.125 18.1111 13.125C20.2588 13.125 21.9999 14.8879 21.9999 17.0625Z",
          "strokeWidth": "props.strokeWidth"
        }
      }]
    }]
  }]
};
var palette1 = vue.defineComponent({
  name: "Palette1Icon",
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
    var finalCls = vue.computed(() => ["t-icon", "t-icon-palette-1", className.value]);
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

exports.default = palette1;
//# sourceMappingURL=palette-1.js.map
