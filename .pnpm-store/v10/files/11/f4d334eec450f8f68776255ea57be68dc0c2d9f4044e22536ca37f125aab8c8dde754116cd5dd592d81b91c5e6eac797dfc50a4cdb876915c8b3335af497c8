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
      "id": "cabbage"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "id": "fill1",
        "fill": "props.fillColor1",
        "d": "M12 21.9999C17.5228 21.9999 22 17.5829 22 12.0003C22 8.55601 19.1801 3.09159 15.5555 3.13098C13.3333 3.13098 12.8889 6.94985 12.8889 6.94985C13.2326 3.131 10.1543 1.58447 6.99788 3.35243C3.97983 5.04289 2 8.21712 2 12.0003C2 17.0349 5.64133 21.1013 10.4071 21.8724C10.9258 21.9563 11.4579 21.9999 12 21.9999Z"
      }
    }, {
      "tag": "path",
      "attrs": {
        "id": "stroke1",
        "stroke": "props.strokeColor1",
        "d": "M14.4444 11.667C13.6823 11.5337 12.6791 11.6261 12 12.0003C10.5266 12.8121 9.75148 14.68 9.68214 16.6087C9.62457 18.2099 9.90025 19.9304 10.2591 21.3292M14.4444 11.667C14.8427 10.2578 16.4011 9.07414 17.9999 8.68186C20.3706 8.10021 21.9722 9.66106 22 12C22 8.55575 19.1801 3.09159 15.5555 3.13098C14.1641 3.13098 13.4697 4.62817 13.1449 5.74765M14.4444 11.667C14.6943 10.4728 14.7252 9.64706 14.4444 8.90918C14.2122 8.29894 13.7669 7.7488 13.0561 7.10001C13.0008 7.0495 12.9447 6.99983 12.8889 6.94985C13.2326 3.131 10.1543 1.58447 6.99788 3.35243C3.97983 5.04289 2 8.21712 2 12.0003C2 17.0349 5.64132 21.1013 10.4071 21.8724C10.9258 21.9563 11.4579 21.9999 12 21.9999C17.4356 21.9999 21.9466 17.5296 22 12.1C22 12.1 22.0002 12.0875 22 12.0875M6.88884 8.87566L9.99995 5.82654M17.875 8.47164L17 7.00027M10.9 21.3292L18.4444 13.0146M14.431 16.7L14.4444 14.8117M9.22186 16.1032L5.99994 12.5653M11.9665 11.75C11.7305 10.7978 10.2733 9.29225 8.44441 10.3193C7.70798 9.86118 7.04263 9.53195 6.44439 9.31122C4.44286 8.57275 3.19269 8.90733 2.54577 9.85002C2.53446 9.8665 2.52333 9.88317 2.51239 9.90002",
        "strokeLinecap": "square",
        "strokeWidth": "props.strokeWidth"
      }
    }]
  }]
};
var cabbage = vue.defineComponent({
  name: "CabbageIcon",
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
    var finalCls = vue.computed(() => ["t-icon", "t-icon-cabbage", className.value]);
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

exports.default = cabbage;
//# sourceMappingURL=cabbage.js.map
