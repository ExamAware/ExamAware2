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
    "viewBox": "0 0 25 24",
    "width": "1em",
    "height": "1em"
  },
  "children": [{
    "tag": "path",
    "attrs": {
      "fill": "props.filledColor",
      "d": "M12.2258 3.00098C7.26577 3.00098 3.24487 7.02187 3.24487 11.9819C3.24487 14.3317 4.14601 16.4688 5.62336 18.0701L6.30146 18.805L4.83152 20.1612L4.15342 19.4263C2.34869 17.4702 1.24487 14.8538 1.24487 11.9819C1.24487 5.9173 6.1612 1.00098 12.2258 1.00098C18.2904 1.00098 23.2067 5.9173 23.2067 11.9819C23.2067 14.8538 22.1029 17.4702 20.2982 19.4263L19.6201 20.1612L18.1501 18.805L18.8282 18.0701C20.3056 16.4688 21.2067 14.3317 21.2067 11.9819C21.2067 7.02187 17.1858 3.00098 12.2258 3.00098ZM12.2262 7.50007C9.74096 7.50007 7.72624 9.51479 7.72624 12.0001C7.72624 13.1777 8.17732 14.2478 8.91792 15.0505L9.59602 15.7855L8.12608 17.1417L7.44798 16.4067C6.38 15.2492 5.72624 13.6998 5.72624 12.0001C5.72624 8.41022 8.63639 5.50007 12.2262 5.50007C15.8161 5.50007 18.7262 8.41022 18.7262 12.0001C18.7262 13.6998 18.0725 15.2492 17.0045 16.4067L16.3264 17.1417L14.8565 15.7855L15.5346 15.0505C16.2752 14.2478 16.7262 13.1777 16.7262 12.0001C16.7262 9.51479 14.7115 7.50007 12.2262 7.50007ZM10.2262 12.0001C10.2262 10.8955 11.1217 10.0001 12.2262 10.0001C13.3308 10.0001 14.2262 10.8955 14.2262 12.0001C14.2262 13.1047 13.3308 14.0001 12.2262 14.0001C11.1217 14.0001 10.2262 13.1047 10.2262 12.0001ZM12.1733 15.9671L17.1623 22.9989H7.18541L12.1733 15.9671Z"
    }
  }]
};
var gpsFilled = vue.defineComponent({
  name: "GpsFilledIcon",
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
    var finalCls = vue.computed(() => ["t-icon", "t-icon-gps-filled", className.value]);
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

exports.default = gpsFilled;
//# sourceMappingURL=gps-filled.js.map
