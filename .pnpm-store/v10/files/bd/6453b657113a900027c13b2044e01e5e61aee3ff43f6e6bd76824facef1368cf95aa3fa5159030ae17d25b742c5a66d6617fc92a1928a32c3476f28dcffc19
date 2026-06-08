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
      "id": "drumstick"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "id": "fill1",
        "fill": "props.fillColor1",
        "d": "M15.0006 16C18.8666 16 22.0006 12.866 22.0006 9C22.0006 5.13401 18.8666 2 15.0006 2C11.1346 2 8.00059 5.13401 8.00059 9C8.00059 9.47609 8.04812 9.94108 8.13869 10.3905L6.50059 12C5.90715 12.5934 6.11819 13.8145 6.94472 15.0607C7.20602 15.4547 7.53958 15.8674 7.9148 16.2426C8.23308 16.5609 8.58176 16.8522 8.91574 17.0893C10.2209 18.0156 11.5355 18.2788 12.1574 17.6569L13.927 15.9182C14.277 15.9721 14.6355 16 15.0006 16Z"
      }
    }, {
      "tag": "path",
      "attrs": {
        "id": "fill2",
        "fill": "props.fillColor2",
        "d": "M5.5004 21.9999C3.96067 22.0396 4.0004 19.9999 4.0004 19.9999C4.0004 19.9999 1.96711 20.0333 2.0004 18.4999C2.0337 16.9664 3.90906 16.9999 5.0004 16.9999L6.94455 15.0605C7.20585 15.4545 7.53941 15.8673 7.91463 16.2425C8.2329 16.5608 8.58159 16.8521 8.91556 17.0891L7.0004 18.9999C7.0004 20.0991 7.04014 21.9601 5.5004 21.9999Z"
      }
    }, {
      "tag": "path",
      "attrs": {
        "id": "stroke2",
        "stroke": "props.strokeColor2",
        "d": "M5.5004 21.9999C3.96067 22.0396 4.0004 19.9999 4.0004 19.9999C4.0004 19.9999 1.96711 20.0333 2.0004 18.4999C2.0337 16.9664 3.90906 16.9999 5.0004 16.9999L6.94455 15.0605C7.20585 15.4545 7.53941 15.8673 7.91463 16.2425C8.2329 16.5608 8.58159 16.8521 8.91556 17.0891L7.0004 18.9999C7.0004 20.0991 7.04014 21.9601 5.5004 21.9999Z",
        "strokeLinecap": "square",
        "strokeWidth": "props.strokeWidth"
      }
    }, {
      "tag": "path",
      "attrs": {
        "id": "stroke1",
        "stroke": "props.strokeColor1",
        "d": "M10.1007 14C9.24002 13.1567 8.5962 12.0929 8.26057 10.9M8.91464 17.0891C8.58067 16.8521 8.23198 16.5608 7.91371 16.2425C7.53849 15.8673 7.20493 15.4545 6.94363 15.0605C6.1171 13.8143 5.90623 12.5934 6.49967 12L8.13777 10.3905C8.0472 9.94108 7.99967 9.47609 7.99967 9C7.99967 5.13401 11.1337 2 14.9997 2C18.8657 2 21.9997 5.13401 21.9997 9C21.9997 12.866 18.8657 16 14.9997 16C14.6346 16 14.2761 15.9721 13.9261 15.9182L12.1565 17.6569C11.5346 18.2788 10.2198 18.0155 8.91464 17.0891Z",
        "strokeLinecap": "square",
        "strokeWidth": "props.strokeWidth"
      }
    }]
  }]
};
var drumstick = vue.defineComponent({
  name: "DrumstickIcon",
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
    var finalCls = vue.computed(() => ["t-icon", "t-icon-drumstick", className.value]);
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

exports.default = drumstick;
//# sourceMappingURL=drumstick.js.map
