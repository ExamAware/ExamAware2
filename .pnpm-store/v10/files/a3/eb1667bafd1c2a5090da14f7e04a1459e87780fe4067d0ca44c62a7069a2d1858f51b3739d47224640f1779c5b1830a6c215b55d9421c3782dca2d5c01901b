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
      "d": "M7.03637 4.98642C6.86149 4.81163 6.57888 4.8089 6.40064 4.9803C6.2642 5.11149 6.22498 5.31183 6.29589 5.48179C6.35723 5.62879 6.44097 5.76613 6.50707 5.91109L8.467 9.91488L6.30851 14.5684L9.9516 15.6836L10.9537 9.70995L10.9635 9.67127C10.9913 9.56033 10.9993 9.49196 11 9.45083C11 9.4465 11 9.44216 11 9.43781C10.9998 9.4287 10.9993 9.4213 10.9985 9.41535C10.9559 9.07237 10.8002 8.75116 10.5533 8.50423L7.03637 4.98642ZM4.27993 14.1887L6.25157 9.93805L4.69677 6.76189C4.61945 6.58957 4.5229 6.42636 4.45013 6.25196C4.06625 5.33198 4.27432 4.25032 5.01435 3.53869C5.97781 2.61221 7.50552 2.62715 8.45067 3.5723L11.9675 7.09001C11.9784 7.10089 11.9893 7.11192 12 7.12292C12.0107 7.11192 12.0215 7.10098 12.0324 7.0901L15.5492 3.57239C16.4944 2.62724 18.0222 2.61221 18.9856 3.53869C19.7257 4.25032 19.9337 5.33198 19.5499 6.25196C19.4771 6.42636 19.3806 6.58957 19.3032 6.76189L17.7484 9.93805L19.7201 14.1887L22 14.189V21.146L12.9368 21.1458L12 15.5617L11.0632 21.1458L2 21.146L2 14.189L4.27993 14.1887ZM13 9.45082C13.0007 9.49195 13.0087 9.56032 13.0365 9.67127L13.0463 9.70995L14.0484 15.6836L17.6915 14.5684L15.533 9.91488L17.4929 5.91108C17.559 5.76612 17.6428 5.62879 17.7041 5.48179C17.775 5.31183 17.7358 5.11149 17.5994 4.9803C17.4211 4.8089 17.1385 4.81163 16.9636 4.98642L13.4468 8.50414C13.1998 8.75107 13.0441 9.07237 13.0015 9.41535C13.0007 9.42131 13.0002 9.4287 13 9.43782"
    }
  }]
};
var gestureOpenFilled = vue.defineComponent({
  name: "GestureOpenFilledIcon",
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
    var finalCls = vue.computed(() => ["t-icon", "t-icon-gesture-open-filled", className.value]);
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

exports.default = gestureOpenFilled;
//# sourceMappingURL=gesture-open-filled.js.map
