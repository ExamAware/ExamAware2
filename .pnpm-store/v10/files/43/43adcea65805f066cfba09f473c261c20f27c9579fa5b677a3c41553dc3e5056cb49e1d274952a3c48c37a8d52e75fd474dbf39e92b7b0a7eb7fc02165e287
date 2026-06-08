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
      "id": "gesture-ranslation"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "id": "fill1",
        "fill": "props.fillColor1",
        "d": "M20.2494 8.08989C20.2494 7.22438 19.5478 6.52275 18.6823 6.52275C17.8168 6.52275 17.1152 7.22438 17.1152 8.08989V4.75547C17.1152 3.88873 16.4125 3.18609 15.5458 3.18609C14.6791 3.18609 13.9764 3.88873 13.9764 4.75547V2.56938C13.9764 1.70264 13.2738 1 12.407 1C11.5403 1 10.8376 1.70264 10.8376 2.56938V4.75547C10.8376 3.88873 10.135 3.18609 9.26827 3.18609C8.40152 3.18609 7.69888 3.88873 7.69888 4.75547V13.5045V13.5045C7.69888 13.5059 7.69705 13.5041 7.69634 13.5029L6.23528 10.9723C5.96475 10.5037 5.43149 10.2526 4.89795 10.3425C4.14717 10.4691 3.66689 11.2127 3.86031 11.9491L5.1287 16.7783C5.93683 19.855 8.71795 22 11.8991 22H13.2495C17.1154 22 20.2494 18.866 20.2494 15V8.08989Z"
      }
    }, {
      "tag": "path",
      "attrs": {
        "id": "stroke1",
        "stroke": "props.strokeColor1",
        "d": "M17.1152 8.08989V11M17.1152 8.08989V4.75547C17.1152 3.88873 16.4125 3.18609 15.5458 3.18609C14.679 3.18609 13.9764 3.88873 13.9764 4.75547M17.1152 8.08989C17.1152 7.22439 17.8168 6.52275 18.6823 6.52275C19.5478 6.52275 20.2494 7.22439 20.2494 8.08989V15C20.2494 18.866 17.1154 22 13.2494 22H11.8991C8.71795 22 5.93683 19.855 5.1287 16.7783L3.86031 11.9491C3.66689 11.2127 4.14717 10.4691 4.89795 10.3425C5.43149 10.2526 5.96475 10.5037 6.23528 10.9723L7.69703 13.5041C7.69722 13.5044 7.6976 13.5046 7.69799 13.5046V13.5046C7.6985 13.5045 7.69888 13.5041 7.69888 13.5036V4.75547C7.69888 3.88873 8.40152 3.18609 9.26827 3.18609C10.135 3.18609 10.8376 3.88873 10.8376 4.75547M13.9764 4.75547V11M13.9764 4.75547V2.56938C13.9764 1.70264 13.2738 1 12.407 1C11.5403 1 10.8376 1.70264 10.8376 2.56938V4.75547M10.8376 4.75547V11",
        "strokeLinecap": "square",
        "strokeWidth": "props.strokeWidth"
      }
    }]
  }]
};
var gestureRanslation = vue.defineComponent({
  name: "GestureRanslationIcon",
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
    var finalCls = vue.computed(() => ["t-icon", "t-icon-gesture-ranslation", className.value]);
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

exports.default = gestureRanslation;
//# sourceMappingURL=gesture-ranslation.js.map
