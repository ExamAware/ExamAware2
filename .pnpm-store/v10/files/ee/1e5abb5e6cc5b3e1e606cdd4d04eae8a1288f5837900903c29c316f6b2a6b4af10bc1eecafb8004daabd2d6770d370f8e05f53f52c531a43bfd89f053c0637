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
    "tag": "path",
    "attrs": {
      "fill": "props.filledColor",
      "d": "M12.9995 1.04492V7.61152C14.6821 7.99311 16.0066 9.31749 16.3885 10.9999H22.9551C22.4795 5.72273 18.2768 1.52025 12.9995 1.04492Z"
    }
  }, {
    "tag": "path",
    "attrs": {
      "fill": "props.filledColor",
      "d": "M22.9995 11.8954V12.1049C22.9998 12.07 23 12.0351 23 12.0001C23 11.9652 22.9998 11.9303 22.9995 11.8954Z"
    }
  }, {
    "tag": "path",
    "attrs": {
      "fill": "props.filledColor",
      "d": "M22.9552 12.9999H16.3885C16.2745 13.5024 16.0764 13.973 15.8098 14.396L20.4531 19.0393C21.8432 17.3719 22.7491 15.2868 22.9552 12.9999Z"
    }
  }, {
    "tag": "path",
    "attrs": {
      "fill": "props.filledColor",
      "d": "M19.8501 19.7057L19.7056 19.8502C19.7542 19.8025 19.8024 19.7543 19.8501 19.7057Z"
    }
  }, {
    "tag": "path",
    "attrs": {
      "fill": "props.filledColor",
      "d": "M19.0389 20.4535L14.3955 15.8102C13.7019 16.2473 12.8805 16.5001 12 16.5001C9.51472 16.5001 7.5 14.4854 7.5 12.0001C7.5 9.85871 8.99577 8.06665 10.9995 7.61174V1.04501C5.39324 1.55047 1 6.26225 1 12.0001C1 18.0753 5.92487 23.0001 12 23.0001C14.6774 23.0001 17.1314 22.0436 19.0389 20.4535Z"
    }
  }]
};
var chartRingFilled = vue.defineComponent({
  name: "ChartRingFilledIcon",
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
    var finalCls = vue.computed(() => ["t-icon", "t-icon-chart-ring-filled", className.value]);
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

exports.default = chartRingFilled;
//# sourceMappingURL=chart-ring-filled.js.map
