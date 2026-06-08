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
      "id": "support"
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
          "d": "M4.92893 4.92969C1.02369 8.83493 1.02369 15.1666 4.92893 19.0718L9.17157 14.8292C7.60948 13.2671 7.60948 10.7344 9.17157 9.17233L4.92893 4.92969Z"
        }
      }, {
        "tag": "path",
        "attrs": {
          "fill": "props.fillColor1",
          "d": "M19.0711 19.0718C22.9763 15.1666 22.9763 8.83493 19.0711 4.92969L14.8284 9.17233C16.3905 10.7344 16.3905 13.2671 14.8284 14.8292L19.0711 19.0718Z"
        }
      }]
    }, {
      "tag": "g",
      "attrs": {
        "id": "fill2"
      },
      "children": [{
        "tag": "path",
        "attrs": {
          "fill": "props.fillColor2",
          "d": "M4.92871 19.0711C8.83396 22.9763 15.1656 22.9763 19.0708 19.0711L14.8282 14.8284C13.2661 16.3905 10.7335 16.3905 9.17135 14.8284L4.92871 19.0711Z"
        }
      }, {
        "tag": "path",
        "attrs": {
          "fill": "props.fillColor2",
          "d": "M19.0708 4.92893C15.1656 1.02369 8.83395 1.02369 4.92871 4.92893L9.17135 9.17157C10.7335 7.60948 13.2661 7.60948 14.8282 9.17157L19.0708 4.92893Z"
        }
      }]
    }, {
      "tag": "g",
      "attrs": {
        "id": "stroke2"
      },
      "children": [{
        "tag": "path",
        "attrs": {
          "stroke": "props.strokeColor2",
          "d": "M4.92871 19.0711C8.83396 22.9763 15.1656 22.9763 19.0708 19.0711L14.8282 14.8284C13.2661 16.3905 10.7335 16.3905 9.17135 14.8284L4.92871 19.0711Z",
          "strokeWidth": "props.strokeWidth"
        }
      }, {
        "tag": "path",
        "attrs": {
          "stroke": "props.strokeColor2",
          "d": "M19.0708 4.92893C15.1656 1.02369 8.83395 1.02369 4.92871 4.92893L9.17135 9.17157C10.7335 7.60948 13.2661 7.60948 14.8282 9.17157L19.0708 4.92893Z",
          "strokeWidth": "props.strokeWidth"
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
          "d": "M4.92893 4.92969C1.02369 8.83493 1.02369 15.1666 4.92893 19.0718L9.17157 14.8292C7.60948 13.2671 7.60948 10.7344 9.17157 9.17233L4.92893 4.92969Z",
          "strokeWidth": "props.strokeWidth"
        }
      }, {
        "tag": "path",
        "attrs": {
          "stroke": "props.strokeColor1",
          "d": "M19.0711 19.0718C22.9763 15.1666 22.9763 8.83493 19.0711 4.92969L14.8284 9.17233C16.3905 10.7344 16.3905 13.2671 14.8284 14.8292L19.0711 19.0718Z",
          "strokeWidth": "props.strokeWidth"
        }
      }]
    }]
  }]
};
var support = vue.defineComponent({
  name: "SupportIcon",
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
    var finalCls = vue.computed(() => ["t-icon", "t-icon-support", className.value]);
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

exports.default = support;
//# sourceMappingURL=support.js.map
