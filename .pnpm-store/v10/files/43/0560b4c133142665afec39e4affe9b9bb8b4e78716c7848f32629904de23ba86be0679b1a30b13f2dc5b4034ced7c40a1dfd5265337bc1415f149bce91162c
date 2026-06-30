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
      "d": "M3.0043 1.58995L3.00017 1.58582L1.58594 3.00001L4.26534 5.67948C2.32933 7.20644 0.85591 9.29359 0.0892162 11.696L-0.0078125 12L0.0892162 12.304C1.69842 17.3464 6.42102 21 11.9996 21C14.1886 21 16.2457 20.4374 18.0347 19.4492L20.9997 22.4142L22.4097 21.0043L3 1.59425L3.0043 1.58995ZM7 12C7 10.9809 7.30488 10.033 7.82839 9.24261L9.29236 10.7066C9.10495 11.0982 9 11.5369 9 12C9 13.6569 10.3431 15 12 15C12.4631 15 12.9017 14.8951 13.2933 14.7077L14.7573 16.1717C13.9669 16.6951 13.019 17 12 17C9.23858 17 7 14.7614 7 12Z"
    }
  }, {
    "tag": "path",
    "attrs": {
      "fill": "props.filledColor",
      "d": "M21.1978 16.964C22.4149 15.6419 23.3505 14.0569 23.9099 12.304L24.007 12L23.9099 11.696C22.3007 6.65364 17.5781 3 11.9996 3C10.5695 3 9.19574 3.24009 7.91622 3.68212L11.2848 7.05077C11.5184 7.01731 11.7572 7 12 7C14.7614 7 17 9.23858 17 12C17 12.2429 16.9827 12.4817 16.9492 12.7153L21.1978 16.964Z"
    }
  }, {
    "tag": "path",
    "attrs": {
      "fill": "props.filledColor",
      "d": "M14.2531 10.0191C14.1683 9.92272 14.0773 9.83179 13.9809 9.74696L14.2531 10.0191Z"
    }
  }]
};
var browseOffFilled = vue.defineComponent({
  name: "BrowseOffFilledIcon",
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
    var finalCls = vue.computed(() => ["t-icon", "t-icon-browse-off-filled", className.value]);
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

exports.default = browseOffFilled;
//# sourceMappingURL=browse-off-filled.js.map
