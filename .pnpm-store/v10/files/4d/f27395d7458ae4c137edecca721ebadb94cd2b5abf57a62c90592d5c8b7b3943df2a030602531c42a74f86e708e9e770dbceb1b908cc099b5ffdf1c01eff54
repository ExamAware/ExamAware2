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
      "id": "undertake"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "id": "fill1",
        "fill": "props.fillColor1",
        "d": "M20.8584 10.2148L14.2171 11.7423L13.8207 11.7423C14.3464 11.7423 14.8506 11.5334 15.2224 11.1617C15.5942 10.7899 15.8031 10.2856 15.8031 9.75983C15.8031 9.23405 15.5942 8.72979 15.2224 8.35801C14.8506 7.98622 14.3464 7.77735 13.8206 7.77735H8.86438C8.55168 7.77658 8.2419 7.83747 7.95275 7.95653C7.66361 8.07559 7.40077 8.25049 7.17927 8.47122L4.70117 10.9493V16.5003H11.8381L18.182 14.9143L22.03 13.2728C22.3035 13.1363 22.5336 12.9262 22.6943 12.6662C22.855 12.4062 22.9401 12.1065 22.94 11.8008C22.9397 11.5476 22.881 11.2979 22.7685 11.0711C22.656 10.8443 22.4927 10.6465 22.2914 10.4931C22.09 10.3396 21.8559 10.2347 21.6074 10.1865C21.3589 10.1382 21.1026 10.1479 20.8584 10.2148Z"
      }
    }, {
      "tag": "path",
      "attrs": {
        "id": "fill2",
        "fill": "props.fillColor2",
        "d": "M4.70063 10.9492V16.5002H1V10.9492H4.70063Z"
      }
    }, {
      "tag": "path",
      "attrs": {
        "id": "stroke1",
        "stroke": "props.strokeColor1",
        "d": "M4.70063 16.5003H11.8375L18.1815 14.9143L22.0295 13.2728C22.303 13.1363 22.533 12.9262 22.6937 12.6662C22.8545 12.4062 22.9396 12.1065 22.9394 11.8008C22.9391 11.5476 22.8805 11.298 22.768 11.0711C22.6555 10.8443 22.4922 10.6465 22.2908 10.4931C22.0894 10.3397 21.8554 10.2347 21.6068 10.1865C21.3583 10.1382 21.102 10.1479 20.8578 10.2148L14.2165 11.7423H13.8201M4.70063 16.5003V10.9493M4.70063 16.5003H1V10.9493H4.70063M4.70063 10.9493L7.17875 8.4712C7.40025 8.2505 7.66305 8.0756 7.9522 7.95655C8.24135 7.83745 8.55115 7.7766 8.86385 7.77735L13.82 7.7775C14.9149 7.7775 15.8025 8.6651 15.8025 9.76C15.8025 10.8549 14.9149 11.7425 13.82 11.7425H11.573",
        "strokeLinecap": "square",
        "strokeWidth": "props.strokeWidth"
      }
    }]
  }]
};
var undertake = vue.defineComponent({
  name: "UndertakeIcon",
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
    var finalCls = vue.computed(() => ["t-icon", "t-icon-undertake", className.value]);
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

exports.default = undertake;
//# sourceMappingURL=undertake.js.map
