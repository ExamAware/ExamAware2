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
      "id": "cloudy-day"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "id": "fill1",
        "fill": "props.fillColor1",
        "d": "M2 16.5333C2 18.4479 3.52223 20 5.4 20H14.75C17.0972 20 19 18.0599 19 15.6667C19 15.0761 18.8841 14.5131 18.6743 14C18.0338 12.434 16.518 11.3333 14.75 11.3333C14.7265 11.3333 14.703 11.3335 14.6796 11.3339C14.2752 8.87428 12.1772 7 9.65 7C6.83335 7 4.55 9.32812 4.55 12.2C4.55 12.5261 4.57944 12.8451 4.63575 13.1546C3.12599 13.5082 2 14.8867 2 16.5333Z"
      }
    }, {
      "tag": "path",
      "attrs": {
        "id": "fill2",
        "fill": "props.fillColor2",
        "d": "M14.7497 11.3333C14.7261 11.3333 14.7027 11.3335 14.6792 11.3339C14.3002 9.02865 12.4336 7.23758 10.1201 7.02183C10.5565 5.28554 12.128 4 13.9997 4C15.8827 4 17.4618 5.30116 17.887 7.05344C18.0859 7.01832 18.2906 7 18.4997 7C20.4326 7 21.9997 8.567 21.9997 10.5C21.9997 12.2632 20.1739 14 18.6739 14C18.0334 12.434 16.5176 11.3333 14.7497 11.3333Z"
      }
    }, {
      "tag": "path",
      "attrs": {
        "id": "stroke2",
        "stroke": "props.strokeColor2",
        "d": "M14.7497 11.3333C14.7261 11.3333 14.7027 11.3335 14.6792 11.3339C14.3002 9.02865 12.4336 7.23758 10.1201 7.02183C10.5565 5.28554 12.128 4 13.9997 4C15.8827 4 17.4618 5.30116 17.887 7.05344C18.0859 7.01832 18.2906 7 18.4997 7C20.4326 7 21.9997 8.567 21.9997 10.5C21.9997 12.2632 20.1739 14 18.6739 14C18.0334 12.434 16.5176 11.3333 14.7497 11.3333Z",
        "strokeWidth": "props.strokeWidth"
      }
    }, {
      "tag": "path",
      "attrs": {
        "id": "stroke1",
        "stroke": "props.strokeColor1",
        "d": "M2 16.5333C2 18.4479 3.52223 20 5.4 20H14.75C17.0972 20 19 18.0599 19 15.6667C19 15.0761 18.8841 14.5131 18.6743 14C18.0338 12.434 16.518 11.3333 14.75 11.3333C14.7265 11.3333 14.703 11.3335 14.6796 11.3339C14.2752 8.87428 12.1772 7 9.65 7C6.83335 7 4.55 9.32812 4.55 12.2C4.55 12.5261 4.57944 12.8451 4.63575 13.1546C3.12599 13.5082 2 14.8867 2 16.5333Z",
        "strokeWidth": "props.strokeWidth"
      }
    }]
  }]
};
var cloudyDay = vue.defineComponent({
  name: "CloudyDayIcon",
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
    var finalCls = vue.computed(() => ["t-icon", "t-icon-cloudy-day", className.value]);
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

exports.default = cloudyDay;
//# sourceMappingURL=cloudy-day.js.map
