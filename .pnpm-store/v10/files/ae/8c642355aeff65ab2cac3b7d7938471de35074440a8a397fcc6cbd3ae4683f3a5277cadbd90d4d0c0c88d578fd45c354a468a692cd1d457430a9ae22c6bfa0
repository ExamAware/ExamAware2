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
      "id": "bean"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "id": "fill1",
        "fill": "props.fillColor1",
        "d": "M8.86635 8.93408C7.66108 10.1395 6.04963 10.2628 4.76841 11.1998C3.04412 12.4609 1.84355 14.3994 3.03211 17.243C5.03227 22.0282 12.724 23.1008 17.8786 17.9464C23.388 12.4371 22.0081 5.05043 17.1745 3.10057C14.3212 1.94957 12.3676 3.1621 11.1325 4.83573C10.1958 6.10501 10.0858 7.71451 8.86635 8.93408Z"
      }
    }, {
      "tag": "path",
      "attrs": {
        "id": "fill2",
        "fill": "props.fillColor2",
        "d": "M11.3638 11.3867C12.7307 10.0198 12.7307 7.80377 11.3638 6.43693C11.1192 6.19234 10.8475 5.99151 10.5582 5.83446C10.0733 6.88139 9.7834 8.01793 8.86712 8.93431C7.9752 9.82632 6.86084 10.1258 5.82248 10.6009C5.9779 10.8827 6.1751 11.1477 6.41409 11.3867C7.78093 12.7535 9.99701 12.7535 11.3638 11.3867Z"
      }
    }, {
      "tag": "path",
      "attrs": {
        "id": "stroke1",
        "stroke": "props.strokeColor1",
        "d": "M5.82186 10.6009C6.86021 10.1258 7.97457 9.82636 8.86649 8.93435C9.78277 8.01797 10.0727 6.88143 10.5576 5.8345M5.82186 10.6009C5.45706 10.7679 5.10165 10.9565 4.76855 11.2001M5.82186 10.6009C5.97727 10.8828 6.17448 11.1477 6.41347 11.3867C7.7803 12.7536 9.99638 12.7536 11.3632 11.3867C12.73 10.0199 12.73 7.80381 11.3632 6.43697C11.1186 6.19238 10.8468 5.99155 10.5576 5.8345M5.82186 10.6009C5.82178 10.6008 5.82171 10.6007 5.82164 10.6005M11.1327 4.836C10.8998 5.15154 10.718 5.48812 10.5576 5.8345M10.5576 5.8345C10.5573 5.83434 10.557 5.83418 10.5567 5.83403M17.8786 17.9464C12.724 23.1009 5.03227 22.0283 3.03211 17.243C1.84355 14.3995 3.04412 12.461 4.76841 11.1999C6.04963 10.2628 7.66108 10.1395 8.86635 8.93414C10.0858 7.71457 10.1958 6.10507 11.1325 4.83579C12.3676 3.16216 14.3212 1.94963 17.1745 3.10063C22.0081 5.05049 23.388 12.4372 17.8786 17.9464Z",
        "strokeWidth": "props.strokeWidth"
      }
    }]
  }]
};
var bean = vue.defineComponent({
  name: "BeanIcon",
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
    var finalCls = vue.computed(() => ["t-icon", "t-icon-bean", className.value]);
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

exports.default = bean;
//# sourceMappingURL=bean.js.map
